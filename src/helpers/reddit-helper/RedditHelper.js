// Imports for Node packages and environment variables
const fetch = require("node-fetch");

/**
 * RedditHelper is a class designed to help interface with the Reddit JSON API. It contains methods to retrieve the popular posts, and
 * search Reddit for posts related to specific keywords.
 * 
 * Author: Aaron Mathews
 * Date: 11/9/2020
 */
class RedditHelper {
    /**
     * A static method used to retrieve the popular posts from the Reddit JSON API.
     * 
     * Return:
     *   posts - a list of a minimized JSON object from the Reddit JSON API
     * 
     * Author: Aaron Mathews
     * Date: 11/9/2020
     */
    static async popular() {
        const response = await fetch("https://www.reddit.com/r/popular.json");
        const json = await response.json();

        // Map only the data we need
        const posts = json.data.children.map(({ data }) => {
            let post = {
                "title": data.title,
                "author": data.author,
                "subreddit": data.subreddit_name_prefixed,
                "url": data.url
            };

            if (data.url.indexOf(".jpg") > -1) {
                post["src"] = data.url;
            } else {
                if (data.thumbnail === "self" || data.thumbnail === "default") {
                    post["src"] = "";
                } else {
                    post["src"] = data.thumbnail;
                }
            }

            return post;
        });

        return posts;
    }

    /**
     * A static method used to retrieve specific posts based on user entered keywords from the Reddit JSON API.
     * 
     * Params:
     *   keywords - a string that represents the user entered keywords
     * 
     * Return:
     *   posts - a list of a minimized JSON object from the Reddit JSON API
     * 
     * Author: Aaron Mathews
     * Date: 11/9/2020
     */
    static async search(keywords) {
        const uri = encodeURIComponent(keywords);
        const response = await fetch(`https://www.reddit.com/search.json?q=${uri}`);
        const json = await response.json();

        // Map only the data we need
        const posts = json.data.children.map(({ data }) => ({
            "title": data.title,
            "author": data.author,
            "subreddit": data.subreddit_name_prefixed,
            "src": data.thumbnail,
            "url": data.url
        }));

        return posts;
    }
}

module.exports = RedditHelper;

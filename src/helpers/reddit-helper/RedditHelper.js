// const dotenv = require("dotenv");
const fetch = require("node-fetch");

// dotenv.config();

class RedditHelper {
    static async popular() {
        const response = await fetch("https://www.reddit.com/r/popular.json");
        const json = await response.json();

        const posts = json.data.children.map(({ data }) => ({
            "title": data.title,
            "author": data.auther_fullname,
            "subreddit": data.subreddit_name_prefixed,
            "src": data.thumbnail,
            "url": data.url
        }));

        return posts;
    }
}

module.exports = RedditHelper;

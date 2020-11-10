const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();
const POPULAR_URL = process.env.POPULAR_URL;
const SEARCH_URL = process.env.SEARCH_URL;

class RedditHelper {
    static async popular() {
        const response = await fetch(POPULAR_URL);
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

    static async search(keywords) {
        const uri = encodeURIComponent(keywords);
        const response = await fetch(`${SEARCH_URL}?q=${uri}`);
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
// console.log(RedditHelper.search("cake recipes"));

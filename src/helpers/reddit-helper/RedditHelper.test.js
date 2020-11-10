import RedditHelper from "./RedditHelper";
const expect = require("chai").expect;
// const request = require("supertest");

describe("Reddit API JSON Retrieval", () => {
    it("retrieves the top posts", async () => {
        // Setup

        // Exercise
        const posts = await RedditHelper.popular();

        // Verify
        expect(posts.length).equal(25);
    }); 
});

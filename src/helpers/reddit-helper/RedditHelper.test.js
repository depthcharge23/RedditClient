const expect = require("chai").expect;
const request = require("supertest");

describe("Reddit API JSON Retrieval", () => {
    it("retrieves the top posts", async () => {
        // Setup

        // Exercise
        const response = await request("https://www.reddit.com").get("/r/popular.json")
            .send();

        // Verify
        expect(response.body.data.children.length).equal(25);
    }); 
});
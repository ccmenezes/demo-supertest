'use strict';

const request = require("supertest");
const expect = require("expect.js");
const allure = require("allure-js-commons");

const url = "https://jsonplaceholder.typicode.com"

describe("## Posts API ##", ()=> {
    
    it("Should return all posts", async()=> {
        await allure.severity("critical");
        await allure.story("Posts");
        await request(url)
            .get("/posts")
            .expect(200)
            .expect("Content-Type", "application/json; charset=utf-8");
    });

    it("Should return the all comments by postId" , async()=> {
        await allure.story("Posts");
        const comment = {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }

        const response = await request(url)
            .get("/comments")
            .send("postId=1")
            .set("Accept", "application/json")
            .expect(200)
            .expect("Content-Type", "application/json; charset=utf-8");
            expect(response.body[0]).to.eql(comment);
    });

});

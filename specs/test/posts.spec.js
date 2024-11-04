'use strict';

const request = require("supertest");
const expect = require("expect.js");
const allure = require("allure-js-commons");
const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true }); // Enabling detailed reporting of all errors
const schemaGetAllPosts = require("../schemas/get-all-posts");
const { it } = require("mocha");

const url = "https://jsonplaceholder.typicode.com"

describe("## Posts API ##", ()=> {

    it("Should return all posts", async()=> {
        //Allure tags to display the results at the report
        await allure.severity("critical");
        await allure.story("Posts");
        //Request the API and validate the http status and content type
        const response = await request(url)
            .get("/posts")
            .expect(200)
            .expect("Content-Type", "application/json; charset=utf-8");

        console.log(response.body[0]);
        //Validate the json schema
        const isValid = ajv.validate(schemaGetAllPosts, response);
        if(isValid) {
            console.error("Validation errors: ", ajv.errorsText());
        } else {
            console.log("JSON data is valid.");
        }
    });

    it("Should return the all comments by postId" , async()=> {
        //Allure tags to display the results at the report
        await allure.story("Posts");
        //Create a constant with the comment data
        const comment = {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }
        //Request the API to validate the comment data
        const response = await request(url)
            .get("/comments")
            .send("postId=1")
            .set("Accept", "application/json")
            .expect(200)
            .expect("Content-Type", "application/json; charset=utf-8");
        expect(response.body[0]).to.eql(comment);
    });

});

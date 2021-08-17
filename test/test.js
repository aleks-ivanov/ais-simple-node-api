const request = require("supertest");
const app = require("../index");

let profile = {
	name: 'admin',
	email: 'admin@admin.com',
	password: '123456'
};

describe("GET /", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/").expect(profile, done);
    })
});
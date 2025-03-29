const request = require("supertest");
const app = require("../app.js");
const Todo = require("../models/Todo");
const { describe, beforeEach } = require("node:test");

describe("Todo API", ()=>{
    beforeEach(async ()=>{
        await Todo.deleteMany({});
    });


it("should create a new todo", async ()=>{
    const res = await request(app)
       .post("/api/todos")
       .send({title:"Test Todo"});
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Todo"); 
});



it("should fetch all todos", async ()=>{
    await Todo.create({title: "Todo 1"});
    await Todo.create({title: "Todo 2"}); 

    const res = await request(app).get("/api/todos");
    expect(res.statusCode).toBe(200);
}, 10000);

});
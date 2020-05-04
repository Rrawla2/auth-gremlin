const request = require("supertest")

const server = require("./server.js")

describe("GET /", () => {
    it("should return 200 OK", () => {
        return request(server)
        .get("/")
        .then(res => {
            expect(res.status).toBe(200)
            expect(res.body.message).toBe("Server is up and running")
        })
    })

})
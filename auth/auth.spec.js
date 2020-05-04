const request = require("supertest")
const auth = require("../server")
const db = require("../data/db-config")

beforeEach(async () => {
    await db("users").truncate()
})

describe("Add a user", () => {
    it("should return a token", async () => {
        
        const res = await request(auth)
            .post("/auth/register")
            .send({ username: "Wangdi", password: "pswd" })
            expect(res.body.token).toBeTruthy()
            const token = res.body.token

        const userRes = await request(auth)
            .get("/users")
            //.set({ "Authorization": token })
            expect(userRes.status).toBe(200)
            
    })
})


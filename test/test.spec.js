// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const app = require("../server");

// const expect = chai.expect;

// chai.use(chaiHttp);

// describe("Employee API", () => {
//   it("should get employee details by ID", async () => {
//     const res = await chai.request(app).get("/");

//     expect(res).to.have.status(200);
//     expect(res.body).to.be.an("array");
//     expect(res.body[0].firstname).to.equal("OM");
//   });

//   it("should create a new employee", async () => {
//     const res = await chai.request(app).post("/").send({ firstname: "John" });

//     expect(res).to.have.status(200);
//     expect(res.body).to.be.an("object");
//     expect(res.body.firstname).to.be.equal("John");
//   });
//   it("Should Delete The User", async () => {
//     const res = await chai.request(app).delete("/40");

//     expect(res).to.have.status(200);

//     expect(res.text).to.be.an("string");
//     expect(res.text).to.be.equal("Employee Deleted SuccessFully");
//   });
//   it("Should Update The User", async () => {
//     const res = await chai.request(app).put("/39").send({ firstname: "Om" });

//     expect(res).to.have.status(200);
//     expect(res.text).to.be.an("string");

//     expect(res.text).to.be.equal("Employee Has Been Updated");
//   });
// });

// // employeeController.test.js
// const { StatusCodes } = require("http-status-codes");
// const sinon = require("sinon");
// const proxyquire = require("proxyquire");
// const { expect } = require("chai");
// const path = require("path");
// const { cloneDeep } = require("lodash");
// const { BadRequest } = require("throw.js");
// const { newArray } = require("../../../../testcase");
// const { error } = require("console");

// const empServiceStub = {
//   createEmp: sinon.stub(),
//   deleteEmp: sinon.stub(),
//   getAllEmp: sinon.stub(),
//   updateEmp: sinon.stub(),
// };

// const employeeController = proxyquire(
//   path.join(
//     __dirname,
//     "../../../../employee/employeecontroller/employeeController.js"
//   ),
//   {
//     "../employeeservice/employeeService": empServiceStub,
//   }
// );

// describe("#employeeController", () => {
//   const next = function (error, result) {
//     if (error) throw error;
//     return result;
//   };

//   describe("#createEmp - Create a new employee", () => {
//     const res = {
//       statusCode: null,
//       data: [],
//       headers: {},
//       set: (field, value) => {
//         res.headers[field] = value;
//         return res;
//       },
//       status: (code) => {
//         res.statusCode = code;
//         return res;
//       },
//       json: (data) => {
//         res.data = data;
//         return res;
//       },
//       send: (data) => {
//         res.data = data;
//         return res;
//       },
//       cookie: () => {
//         return "cookike";
//       },
//     };

//     for (let i = 0; i < newArray.length; i++) {
//       if (newArray[i].test) {
//         context("create a new employee successfully", async () => {
//           beforeEach(() => {
//             empServiceStub.createEmp.resolves(newArray[i].output);
//           });

//           it("should return status 200 and the created employee", async () => {
//             let req = {};
//             req.body = newArray[i].input;
//             let expectedData = newArray[i].output;
//             await employeeController.createEmp(cloneDeep(req), res, next);

//             expect(res.statusCode).to.equal(newArray[i].status);

//             expect(res.data).to.deep.equal(expectedData);
//             console.log("first", req.body);
//             const result = empServiceStub.createEmp.calledWith(req.body);
//             expect(result).to.be.equal(true);
//           });
//         });
//         afterEach(() => {
//           sinon.restore();
//         });
//       } else {
//         context(
//           "#createEmp:-It Should Throw Error  And Should Not Create a Employee",
//           () => {
//             it(`should return status 500 and should not create employee because ${newArray[
//               i
//             ].output.message.replace("Please", "You Have Not")}`, (done) => {
//               let req = {};
//               req.body = newArray[i].input;

//               employeeController
//                 .createEmp(req, res, next)
//                 .then(() => {
//                   const expectedStatusCode = newArray[i].status;
//                   const actualStatusCode = res.statusCode;

//                   const expectedErrorMessage = newArray[i].output.message;
//                   const actualErrorMessage = res.data.message;
//                   expect(actualStatusCode).to.equal(expectedStatusCode);
//                   expect(actualErrorMessage).to.equal(expectedErrorMessage);

//                   done();
//                 })
//                 .catch((err) => {
//                   done(err);
//                 })
//                 .catch((err) => {
//                   done(err);
//                 });
//             });
//           }
//         );
//       }
//       postiveTestCounter = true;
//     }
//     context(
//       "#createEmp:-It Should Throw Error because Service As Reject The Inputs",
//       () => {
//         beforeEach(() => {
//           const err = new BadRequest(
//             "You Cannot Create A Employee Because It Has Been Rejected From  The Service"
//           );
//           empServiceStub.createEmp.rejects(err);
//         });

//         it("should return status 500 and should not create employee", (done) => {
//           let req = {};
//           req.body = {
//             firstname: "om",
//             lastname: "rane",
//             email: "omrane2421@gmail.com",
//           };

//           employeeController
//             .createEmp(req, res, next)
//             .then(() => {
//               // console.log(res);
//               if (!res.data) {
//                 throw new Error("You Have Changed The Code");
//               }
//               const expectedStatusCode = 500;
//               const actualStatusCode = res.statusCode;

//               const expectedErrorMessage =
//                 "You Cannot Create A Employee Because It Has Been Rejected From  The Service";
//               const actualErrorMessage = res.data.message;
//               expect(actualStatusCode).to.equal(expectedStatusCode);
//               expect(actualErrorMessage).to.equal(expectedErrorMessage);

//               done();
//             })
//             .catch((err) => {
//               done(err);
//             });
//         });
//       }
//     );
//   });

//   // describe("#getEmp - Get All Employee", () => {
//   //   const expectedDataForGetAll = [
//   //     {
//   //       id: 42,
//   //       firstname: "John",
//   //       createdAt: "2024-01-08T11:49:34.886Z",
//   //       updatedAt: "2024-01-08T11:49:34.886Z",
//   //       deletedAt: null,
//   //     },
//   //   ];

//   //   context("Get All Employee successfully", () => {
//   //     empServiceStub.getAllEmp.resolves(expectedDataForGetAll);

//   //     it("should return status 200 and get all employee", async () => {
//   //       const req = {};
//   //       const res = {
//   //         statusCode: null,
//   //         data: null,
//   //         status: function (code) {
//   //           this.statusCode = code;
//   //           return this;
//   //         },
//   //         send: function (data) {
//   //           this.data = data;
//   //           return this;
//   //         },
//   //       };
//   //       await employeeController.getAllEmp(req, res, next);
//   //       expect(res.statusCode).to.equal(StatusCodes.OK);
//   //       expect(res.data).to.deep.equal(expectedDataForGetAll);
//   //     });
//   //   });
//   // });
//   // describe("#updateEmp - Update Employee", () => {
//   //   const expectedDataForUpdate = "Employee Has Been Updated";
//   //   beforeEach(() => {
//   //     empServiceStub.updateEmp.resolves(expectedDataForUpdate);
//   //   });

//   //   context("Update Employee successfully", () => {
//   //     it("should return status 200 and Update employee", async () => {
//   //       const req = {
//   //         params: {
//   //           id: 70,
//   //         },
//   //         body: {
//   //           firstname: "akshay",
//   //         },
//   //       };
//   //       const res = {
//   //         statusCode: null,
//   //         data: null,
//   //         status: function (code) {
//   //           this.statusCode = code;
//   //           return this;
//   //         },
//   //         send: function (data) {
//   //           this.data = data;
//   //           return this;
//   //         },
//   //       };
//   //       await employeeController.updateEmp(req, res, next);
//   //       expect(res.statusCode).to.equal(StatusCodes.OK);
//   //       expect(res.data).to.equal(expectedDataForUpdate);
//   //     });
//   //   });
//   // });
//   // describe("#deleteEmp - delete Employee", () => {
//   //   const expectedDataForUpdate = "Employee Has Been Deleted";
//   //   beforeEach(() => {
//   //     empServiceStub.deleteEmp.resolves(expectedDataForUpdate);
//   //   });

//   //   context("Delete Employee successfully", () => {
//   //     it("should return status 200 and delete employee", async () => {
//   //       const req = {
//   //         params: {
//   //           id: 70,
//   //         },
//   //       };
//   //       const res = {
//   //         statusCode: null,
//   //         data: null,
//   //         status: function (code) {
//   //           this.statusCode = code;
//   //           return this;
//   //         },
//   //         send: function (data) {
//   //           this.data = data;
//   //           return this;
//   //         },
//   //       };
//   //       await employeeController.deleteEmp(req, res, next);
//   //       expect(res.statusCode).to.equal(StatusCodes.OK);
//   //       expect(res.data).to.equal(expectedDataForUpdate);
//   //     });
//   //   });
//   // });
//   // You can write similar test cases for the other methods of the controller
// });

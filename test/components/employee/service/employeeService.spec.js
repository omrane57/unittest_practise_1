// employeeService.test.js
const { expect } = require("chai");
const { error } = require("console");
const { describe, beforeEach } = require("mocha");
const path = require("path");
const { cloneDeep } = require("lodash");

const proxyquire = require("proxyquire");
const sinon = require("sinon");
const { data } = require("../../../../serviceTestCase");
const Sinon = require("sinon");

const dbInstanceStub = {
  employee: {
    create: sinon.stub(),
    destroy: sinon.stub(),
    findAll: sinon.stub().returns([
      {
        id: 42,
        firstname: "John",
        createdAt: "2024-01-08T11:49:34.886Z",
        updatedAt: "2024-01-08T11:49:34.886Z",
        deletedAt: null,
      },
    ]),
    update: sinon.stub().returns(1),
  },
};

const modelInstanceStub = {
  model: {
    create: sinon.stub(),
  },
};
const employeeService = proxyquire(
  path.join(
    __dirname,
    "../../../../employee/employeeservice/employeeService.js"
  ),
  {
    "../../models": dbInstanceStub,
    "../../models/employee": modelInstanceStub,
  }
);

describe("#employeeService - Unit test for employee service", () => {
  describe("#createEmp - Create a new employee", () => {
    context("Check if employee can be created", () => {
      const inputData = {
        firstname: "Om",
      };
      const expectedData = {
        id: 78,
        firstname: "om",
        updatedAt: "2024-01-10T06:56:57.271Z",
        createdAt: "2024-01-10T06:56:57.271Z",
        deletedAt: null,
      };
      before(() =>
        dbInstanceStub.employee.create.resolves(
          cloneDeep({
            id: 78,
            firstname: "om",
            updatedAt: "2024-01-10T06:56:57.271Z",
            createdAt: "2024-01-10T06:56:57.271Z",
            deletedAt: null,
          })
        )
      );
      it("should create employee", (done) => {
        employeeService.createEmp(inputData).then((response) => {
          console.log("first", inputData);
          // const expectedMessage = expectedData;
          // const actualMessage = cloneDeep(response);

          // expect(actualMessage).to.be.deep.equal(expectedMessage);
          done();
        });
      });
    });
    //   context("It should Throw Error", () => {
    //     const inputData = data[i].inputData;
    //     const expectedData = data[i].expectedData;
    //     it("should throw error", (done) => {
    //       dbInstanceStub.employee.create.rejects(
    //         new Error("Employee could not be created")
    //       );

    //       employeeService.createEmp(inputData).catch((err) => {
    //         const actualErrorMessage = err.message;
    //         const expectedErrorMessage = "Employee could not be created";

    //         expect(actualErrorMessage).to.equal(expectedErrorMessage);
    //         done();
    //       });
    //     });
    //   });
    //
    sinon.restore();
  });
  //   describe("#deleteEmp - Delete employee", () => {
  //     const inputData = 25;
  //     const serviceMock = "Employee Deleted SuccessFully";

  //     context("Check if employee can be created", () => {
  //       it("should create employee", (done) => {
  //         dbInstanceStub.employee.destroy.resolves(1);
  //         const expectedData = "Employee Deleted SuccessFully";
  //         const inputData = 45;
  //         // const response = employeeService.deleteEmp(inputData);

  //         employeeService.createEmp(inputData).then((response) => {
  //           const expectedMessage = expectedData;
  //           const actualMessage = response;

  //           expect(actualMessage).to.be.deep.equal(expectedMessage);
  //         });
  //         done();

  //         // });
  //       });

  //       //   it("should throw error", (done) => {
  //       //     dbInstanceStub.employee.create.rejects(
  //       //       new Error("Employee could not be created")
  //       //     );

  //       //     new employeeService().createEmp(inputData).catch((err) => {
  //       //       const actualErrorMessage = err.message;
  //       //       const expectedErrorMessage = "Employee could not be created";

  //       //       expect(actualErrorMessage).to.equal(expectedErrorMessage);
  //       //       done();
  //       //     });
  //       //   });
  //     });
  //   });
  //   describe("#updateEmp - Update employee", () => {
  //     const serviceMock = "Employee updated SuccessFully";

  //     context("Check if employee have been Updated", () => {
  //       it("should upadate employee", (done) => {
  //         dbInstanceStub.employee.update;
  //         const expectedData = "Employee Update SuccessFully";
  //         const mockEmpId = 45;
  //         const mockEmpData = {
  //           firstname: "Om",
  //         };

  //         // const response = employeeService.deleteEmp(inputData);

  //         employeeService.updateEmp(mockEmpId, mockEmpData).then((response) => {
  //           const expectedMessage = expectedData;
  //           const actualMessage = response;

  //           expect(actualMessage).to.be.deep.equal(expectedMessage);
  //         });
  //         done();

  //         // });
  //       });

  //       //   it("should throw error", (done) => {
  //       //     dbInstanceStub.employee.create.rejects(
  //       //       new Error("Employee could not be created")
  //       //     );

  //       //     new employeeService().createEmp(inputData).catch((err) => {
  //       //       const actualErrorMessage = err.message;
  //       //       const expectedErrorMessage = "Employee could not be created";

  //       //       expect(actualErrorMessage).to.equal(expectedErrorMessage);
  //       //       done();
  //       //     });
  //       //   });
  //     });
  //   });
  //   describe("#getAllEmp - Get All employee", () => {
  //     const serviceMock = "Get All Employee SuccessFully";

  //     context("Check if All Employee", () => {
  //       it("should get All employee", (done) => {
  //         dbInstanceStub.employee.findAll;
  //         const expectedData = [
  //           {
  //             id: 42,
  //             firstname: "John",
  //             createdAt: "2024-01-08T11:49:34.886Z",
  //             updatedAt: "2024-01-08T11:49:34.886Z",
  //             deletedAt: null,
  //           },
  //         ];

  //         // const response = employeeService.deleteEmp(inputData);

  //         employeeService.getAllEmp().then((response) => {
  //           const expectedMessage = expectedData;
  //           const actualMessage = response;

  //           expect(actualMessage).to.be.deep.equal(expectedMessage);
  //         });
  //         done();

  //         // });
  //       });

  //   it("should throw error", (done) => {
  //     dbInstanceStub.employee.create.rejects(
  //       new Error("Employee could not be created")
  //     );

  //     new employeeService().createEmp(inputData).catch((err) => {
  //       const actualErrorMessage = err.message;
  //       const expectedErrorMessage = "Employee could not be created";

  //       expect(actualErrorMessage).to.equal(expectedErrorMessage);
  //       done();
  //     });
  //   });
  // });
});
// });

const db = require("../../models");
const employee = require("../../models/employee");
const empService = require("../employeeservice/employeeService");
class employeeController {
  constructor() {
    this.empservice = empService;
  }

  async createEmp(req, res) {
    try {
      const { firstname, lastname, email } = req.body;
      const regexEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (!firstname || !lastname || !email) {
        throw new Error("Please Fill The Form Completely");
      }

      if (!/^[A-Za-z]+$/.test(firstname)) {
        throw new Error("Please Enter Correct Firstname");
      }

      if (!/^[A-Za-z]+$/.test(lastname)) {
        throw new Error("Please Enter Correct lastname");
      }
      if (!regexEmail.test(email)) {
        throw new Error("Please Enter Correct email Adddress");
      }

      if (typeof req.body.firstname != "string") {
        throw new Error("Cannot Create A Employee Because Invalid  data Type");
      }
      // let response;
      // req.body.firstName = "darshan";
      req.body = {};
      let response = await this.empservice.createEmp(req.body);
      response = null;
      // try {
      //   response = await this.empservice.createEmp(req.body);
      // } catch (error) {
      //   res.status(500).send({ message: "hkfejfke" });
      // }
      res.status(200).send(response);
    } catch (error) {
      // throw error;

      res.status(500).send({ message: error.message });
    }
  }

  async deleteEmp(req, res) {
    try {
      const response = await this.empservice.deleteEmp(req.params.id);
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async getAllEmp(req, res) {
    try {
      const response = await this.empservice.getAllEmp();
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async updateEmp(req, res) {
    try {
      const response = await this.empservice.updateEmp(req.params.id, req.body);

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

const empController = new employeeController();
module.exports = empController;

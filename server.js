const express = require("express");
const db = require("./models");
const employee = require("./models/employee");
const empService = require("./employee/employeeservice/employeeService");
const empController = require("./employee/employeecontroller/employeeController");
const application = express();
// const db=require('')
application.use(express.json());
application.get("/", async (req, res) => {
  empController.getAllEmp(req, res);
});
application.post("/", async (req, res) => {
  empController.createEmp(req, res);
});
application.delete("/:id", async (req, res) => {
  empController.deleteEmp(req, res);
});

application.put("/:id", async (req, res) => {
  empController.updateEmp(req, res);
});
// application.get("/", async (req, res) => {
//   try {
//     const response = await db.employee.findAll();
//     res.status(200).send(response);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });
// application.post("/", async (req, res) => {
//   try {
//     const response = await db.employee.create(req.body);
//     res.status(200).send(response);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });
// application.delete("/:id", async (req, res) => {
//   try {
//     await db.employee.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).send("Employee Deleted SuccessFully");
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });
// application.put("/:id", async (req, res) => {
//   try {
//     await db.employee.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).send("Employee Has Been Updated");
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

module.exports = application.listen(6000, () => {
  console.log("server started @ http://localhost:6000");
});

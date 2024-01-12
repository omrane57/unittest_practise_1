// const positiveTestCase = [
//   {
//     test: true,
//     input: {
//       firstname: "oma",
//       lastname: "hjhjh",
//       email: "omrane2401@gmail.com",
//     },
//     output: {
//       id: 8,
//       firstname: "oma",
//       lastname: "hjhjh",
//       email: "omrane2401@gmail.com",
//       updatedAt: "2024-01-11T09:59:55.949Z",
//       createdAt: "2024-01-11T09:59:55.949Z",
//       deletedAt: null,
//     },
//     status: 200,
//   },
//   {
//     test: true,
//     input: {
//       firstname: "Rahul",
//       lastname: "Gupta",
//       email: "rahul.gupta@nexsales.com",
//     },
//     output: {
//       id: 8,
//       firstname: "Rahul",
//       lastname: "Gupta",
//       email: "rahul.gupta@nexsales.com",
//       updatedAt: "2024-01-11T09:59:55.949Z",
//       createdAt: "2024-01-11T09:59:55.949Z",
//       deletedAt: null,
//     },
//     status: 200,
//   },
// ];

const newArray = [
  {
    test: false,
    input: {
      firstname: "om",
      email: "omrane2401@gmail.com",
    },
    output: {
      message: "Please Fill The Form Completely",
    },
    status: 500,
  },
  {
    test: false,
    input: {
      firstname: "om123435",
      lastname: "rane",
      email: "omrane2401@gmail.com",
    },
    output: {
      message: "Please Enter Correct Firstname",
    },
    status: 500,
  },
  {
    test: false,
    input: {
      firstname: "om",
      lastname: "rane12345",

      email: "omrane2401@gmail.com",
    },
    output: {
      message: "Please Enter Correct lastname",
    },
    status: 500,
  },
  {
    test: false,
    input: {
      firstname: "om",
      lastname: "rane",

      email: "omrane2401@gmail",
    },
    output: {
      message: "Please Enter Correct email Adddress",
    },
    status: 500,
  },
  {
    test: true,
    input: {
      firstname: "oma",
      lastname: "hjhjh",
      email: "omrane2401@gmail.com",
    },
    output: {
      id: 8,
      firstname: "oma",
      lastname: "hjhjh",
      email: "omrane2401@gmail.com",
      updatedAt: "2024-01-11T09:59:55.949Z",
      createdAt: "2024-01-11T09:59:55.949Z",
      deletedAt: null,
    },
    status: 200,
  },
  {
    test: true,
    input: {
      firstname: "Rahul",
      lastname: "Gupta",
      email: "rahul.gupta@nexsales.com",
    },
    output: {
      id: 8,
      firstname: "Rahul",
      lastname: "Gupta",
      email: "rahul.gupta@nexsales.com",
      updatedAt: "2024-01-11T09:59:55.949Z",
      createdAt: "2024-01-11T09:59:55.949Z",
      deletedAt: null,
    },
    status: 200,
  },
];

// const negativeTestCase = [
//   {
//     test: false,
//     input: {
//       firstname: "om",
//       email: "omrane2401@gmail.com",
//     },
//     output: {
//       message: "Please Fill The Form Completely",
//     },
//     status: 500,
//   },
//   {
//     test: false,
//     input: {
//       firstname: "om",
//       email: "omrane2401@gmail.com",
//     },
//     output: {
//       message: "Please Fill The Form Completely",
//     },
//     status: 500,
//   },
// ];
// module.exports = {
//   positiveTestCase,
//   negativeTestCase,
// };
module.exports = {
  newArray,
};

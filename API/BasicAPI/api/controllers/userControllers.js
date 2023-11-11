const { StatusCodes } = require("http-status-codes");

const users = [
   {
      id: 1,
      name: "raj nirala",
      age: 19,
      work: "full-stack developer",
      hobbies: [
         "Playing instruments",
         "singing",
         "Playing Football",
         "Photography",
         "Videography",
         "Reading Books",
      ],
   },
   {
      id: 2,
      name: "Raka",
      age: 20,
      work: "Digitak Marketer",
      hobbies: [
         "Playing Football",
         "Photography",
         "Videography",
         "Reading Books",
      ],
   },
   {
      id: 3,
      name: "Pulkit",
      age: 17,
      work: "Backend developer",
      hobbies: [
         "Playing instruments",
         "singing",
         "Playing Football",
         "Reading Books",
      ],
   },
   {
      id: 4,
      name: "Sachin Duhan",
      age: 26,
      work: "full-stack developer",
      hobbies: [
         "Playing Football",
         "Photography",
         "Videography",
         "Reading Books",
      ],
   },
];

const userControllers = {
   getAllUsers: (req, res) => {
      if (users.length === 0) {
         res.json({ message: "Oops!!", data: null });
      }

      return res.json({
         message: "OK",
         data: users,
      });
   },

   getUserById: (req, res) => {
      const singleUser = users.filter((u) => u.id === Number(req.params.id));

      return res.json({
         message: "ok",
         data: singleUser,
      });
   },

   addUser: (req, res) => {
      const { id, name, age, work, hobbies } = req.body;
      if (!id || !name || !age || !work || !hobbies) {
         res.status(StatusCodes.BAD_REQUEST).json({
            message: "Oops!!",
            data: null,
         });
      }
      users.push({
         id,
         name,
         age,
         work,
         hobbies,
      });
      return res.status(StatusCodes.OK).json({
         message: "User Added",
         data: [{ id, name, age, work, hobbies }],
      });
   },
};

module.exports = userControllers;

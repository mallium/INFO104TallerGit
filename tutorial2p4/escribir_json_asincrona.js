<<<<<<< HEAD
const fs = require('fs');
const lmao = "lmfao";
=======
const fs = require("fs");
const a = 0;
>>>>>>> c48b2226bb5a5c0a3d556b32e6c012ccfd0449a8
let user = {
  name: "John Doe",
  emai: "john.doe@example.com",
  age: 27,
  gender: "Male",
  profession: "Software Developer",
};

// pretty-print JSON object to string
const data = JSON.stringify(user, null, 4);
// write file to disk
fs.writeFile("./user.json", data, "utf8", (err) => {
  if (err) {
    console.log(`Error writing file: ${err}`);
  } else {
    console.log(`File is written successfully!`);
  }
});

console.log("Terminado!");

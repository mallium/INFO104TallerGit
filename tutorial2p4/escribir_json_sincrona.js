const fs = require('fs');

let user = {
    name: 'John Doe',
    emai: 'john.doe@example.com',
    age: 27,
    gender: 'Male',
    profession: 'Software Developer'
};

try {

    // convert JSON object to a string
    const data = JSON.stringify(user, null, 4);

    // write file to disk
    fs.writeFileSync('./user.json', data, 'utf8');

    console.log(`File is written successfully!`);

} catch (err) {
    console.log(`Error writing file: ${err}`);
}

console.log("Terminado!")
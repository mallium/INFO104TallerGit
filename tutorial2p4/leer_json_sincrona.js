const fs = require('fs');

try {

    const data = fs.readFileSync('./databases.json', 'utf8');

    // parse JSON string to JSON object
    const databases = JSON.parse(data);

    // print all databases
    databases.forEach(db => {
        console.log(`${db.name}: ${db.type}`);
    });

    console.log("Terminado!")

} catch (err) {
    console.log(`Error reading file from disk: ${err}`);
}
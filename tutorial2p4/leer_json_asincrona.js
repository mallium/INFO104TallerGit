const fs = require('fs');

fs.readFile('./databases.json', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {

        // parse JSON string to JSON object
        const databases = JSON.parse(data);

        // print all databases
        databases.forEach(db => {
            console.log(`${db.name}: ${db.type}`);
        });
    }

});

console.log("Terminado!")
const fs = require('fs');

// read the file
fs.readFile('./databases.json', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {

        // parse JSON string to JSON object
        const databases = JSON.parse(data);

        // add a new record
        databases.push({
            name: 'Postgres',
            type: 'RDBMS'
        });

        // write new data back to the file
        fs.writeFile('./databases.json', JSON.stringify(databases, null, 4), (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            }
        });
    }

});
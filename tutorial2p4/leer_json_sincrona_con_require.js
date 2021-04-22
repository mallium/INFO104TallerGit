const databases = require('./databases.json');

// print all databases
databases.forEach(db => {
    console.log(`${db.name}: ${db.type}`);
});

console.log("Terminado!")
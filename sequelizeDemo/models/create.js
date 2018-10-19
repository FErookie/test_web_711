let db = require('./index.js');
db.sync({force: true}).then(function () {
    console.log('success');
});
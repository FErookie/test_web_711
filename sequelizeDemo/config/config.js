module.exports = {
    db: {
        name: 'postgres',
        username: 'postgres',
        pwd: 'gaoshuda',
        host: '127.0.0.1',
        port: '5432',
        database: 'newText',
        toString: function () {
            return this.name + '://' + this.username + ':' + this.pwd + '@' + this.host + ':' + this.port + '/' + this.database;
        }
    }
};
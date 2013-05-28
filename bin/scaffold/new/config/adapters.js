
module.exports = {

    'default': 'disk',

    // In-memory adapter for DEVELOPMENT ONLY
    memory: {
        module: 'easel-dirty',
        inMemory: true
    },

    // Persistent adapter for DEVELOPMENT ONLY
    disk: {
        module: 'easel-dirty',
        filePath: './.tmp/dirty.db',
        inMemory: false
    },

    mysql: {
        module      : 'easel-mysql',
        host        : 'localhost',
        user        : 'root',
        password    : 'root',
        database    : 'YOUR_MYSQL_DB'
    }

};

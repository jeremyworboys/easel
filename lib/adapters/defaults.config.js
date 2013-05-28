
module.exports = {

    'default':    'memory',

    memory: {
        module:   'memory'
    },

    sqlite: {
        module:   'sqlite3',
        host:     TMP_PATH + '/sqlite.db'
    },

    // mongo: {
    //     module:   'jugglingdb-mongo',
    //     host:     'localhost',
    //     user:     'root'
    // },

    // redis: {
    //     module:   'jugglingdb-redis',
    //     host:     'localhost',
    //     user:     'root'
    // },

    // riak: {
    //     module:   'jugglingdb-riak',
    //     host:     'localhost',
    //     user:     'root'
    // },

    // cassandra: {
    //     module:   'jugglingdb-cassandra',
    //     host:     'localhost',
    //     user:     'root'
    // },

    // elasticsearch: {
    //     module:   'jugglingdb-elasticsearch',
    //     host:     'localhost',
    //     user:     'root'
    // },

    // couchbase: {
    //     module:   'jugglingdb-couchbase',
    //     host:     'localhost',
    //     user:     'root'
    // },

    // mysql: {
    //     module:   'jugglingdb-mysql',
    //     host:     'localhost',
    //     user:     'root'
    // },

    // postgresql: {
    //     module:   'jugglingdb-postgresql',
    //     host:     'localhost',
    //     user:     'root'
    // },

    // oracle: {
    //     module:   'jugglingdb-oracle',
    //     host:     'localhost',
    //     user:     'root'
    // },

    // db2: {
    //     module:   'jugglingdb-db2',
    //     host:     'localhost',
    //     user:     'root'
    // }

};

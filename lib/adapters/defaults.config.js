
module.exports = {

    'default':    'disk',

    memory: {
        module:   'waterline-dirty',
        inMemory: true
    },

    disk: {
        module:   'waterline-dirty',
        filePath: TMP_PATH + '/dirty.db',
        inMemory: false
    },

    mongo: {
        module:   'waterline-mongo',
        host:     'localhost',
        user:     'root'
    },

    redis: {
        module:   'waterline-redis',
        host:     'localhost',
        user:     'root'
    },

    sqlite: {
        module:   'waterline-sqlite',
        host:     'localhost',
        user:     'root'
    },

    riak: {
        module:   'waterline-riak',
        host:     'localhost',
        user:     'root'
    },

    cassandra: {
        module:   'waterline-cassandra',
        host:     'localhost',
        user:     'root'
    },

    elasticsearch: {
        module:   'waterline-elasticsearch',
        host:     'localhost',
        user:     'root'
    },

    couchbase: {
        module:   'waterline-couchbase',
        host:     'localhost',
        user:     'root'
    },

    mysql: {
        module:   'waterline-mysql',
        host:     'localhost',
        user:     'root'
    },

    postgresql: {
        module:   'waterline-postgresql',
        host:     'localhost',
        user:     'root'
    },

    oracle: {
        module:   'waterline-oracle',
        host:     'localhost',
        user:     'root'
    },

    db2: {
        module:   'waterline-db2',
        host:     'localhost',
        user:     'root'
    }

};

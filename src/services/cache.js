const req = require("express/lib/request");
const redis = require("redis");

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient({
    host: "127.0.0.1",
    no_ready_check: true,
    auth_pass: "786Hh@786"
});

let cache = {};

// operations normal string data type
//operations on strings and number

cache.setCache = (key, value) => {
    return new Promise((resolve, reject) => {
        client.set(key, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.getCache = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.deleteCache = (key) => {
    return new Promise((resolve, reject) => {
        client.del(key, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.RangeCache = (key, start, end) => {
    return new Promise((resolve, reject) => {
        client.GETRANGE(key, start, end, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.getSet = (key, value) => {
    return new Promise((resolve, reject) => {
        client.GETSET(key, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.getBitAt = (key, offset) => {
    return new Promise((resolve, reject) => {
        client.GETBIT(key, offset, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};
cache.getMany = (keys) => {
    return new Promise((resolve, reject) => {
        client.MGET(...keys, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.type = (key) => {
    return new Promise((resolve, reject) => {
        client.type(key, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.rename = (key, newKey) => {
    return new Promise((resolve, reject) => {
        client.RENAME(key, newKey, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.renameNX = (key, newKey) => {
    return new Promise((resolve, reject) => {
        client.RENAMENX(key, newKey, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.dumpCache = (key) => {
    return new Promise((resolve, reject) => {
        client.dump(key,(err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.isCache = (key) => {
    return new Promise((resolve, reject) => {
        client.exists(key,(err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.expire = (key,time) => {
    return new Promise((resolve, reject) => {
        client.expire(key,time,(err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.getExpireTime = (key,time) => {
    return new Promise((resolve, reject) => {
        client.TTL(key,(err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.randomCache = (key,time) => {
    return new Promise((resolve, reject) => {
        client.RANDOMKEY((err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};
//redis list
cache.lPush = (name, value) => {
    return new Promise((resolve, reject) => {
        client.lpush(name, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.lSet = (name, key, value) => {
    return new Promise((resolve, reject) => {
        client.lset(name, key, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};
cache.lPushX = (name, value) => {
    return new Promise((resolve, reject) => {
        client.lpushx(name, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.rPush = (name, value) => {
    return new Promise((resolve, reject) => {
        client.rpush(name, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.rPushX = (name, value) => {
    return new Promise((resolve, reject) => {
        client.rpushx(name, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.lRange = (name, start, end) => {
    return new Promise((resolve, reject) => {
        client.lrange(name, start, end, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.lRemove = (name, count, value) => {
    return new Promise((resolve, reject) => {
        client.lrem(name, count, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.lPop = (name) => {
    return new Promise((resolve, reject) => {
        client.lpop(name, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};
//redis hashes

cache.hSet = (name, key, value) => {
    return new Promise((resolve, reject) => {
        client.HSET(name, key, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};
cache.hGet = (name, key, value) => {
    return new Promise((resolve, reject) => {
        client.HGET(name, key, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.hDel = (name, key) => {
    return new Promise((resolve, reject) => {
        client.HDEL(name, key, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.hVals = (name) => {
    return new Promise((resolve, reject) => {
        client.HVALS(name, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

//operations on sets

cache.SADD = (name, value) => {
    return new Promise((resolve, reject) => {
        client.SADD(name, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.SREM = (name, value) => {
    return new Promise((resolve, reject) => {
        client.SREM(name, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.SMembers = (name) => {
    return new Promise((resolve, reject) => {
        client.SMEMBERS(name, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.SCARD = (name) => {
    return new Promise((resolve, reject) => {
        client.SCARD(name, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.SDIFF = (a, b) => {
    return new Promise((resolve, reject) => {
        client.SDIFF(a, b, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.SINTER = (a, b) => {
    return new Promise((resolve, reject) => {
        client.SINTER(a, b, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.SISMEMBER = (name, key) => {
    return new Promise((resolve, reject) => {
        client.SISMEMBER(name, key, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.SRANDOM = (name) => {
    return new Promise((resolve, reject) => {
        client.SRANDMEMBER(name, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.SUNIONSTORE = (name, name1, name2) => {
    return new Promise((resolve, reject) => {
        client.SUNIONSTORE(name, name1, name2, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

//zset

cache.zADD=(name,score,value)=>{
    return new Promise((resolve, reject) => {
        client.zadd(name, score, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
}

cache.zCard=(name)=>{
    return new Promise((resolve, reject) => {
        client.zcard(name ,(err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
}

cache.zCount=(name,start,end)=>{
    return new Promise((resolve, reject) => {
        client.zcount(name,start,end,(err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
}

cache.ZINCRBY=(name,incr,value)=>{
    return new Promise((resolve, reject) => {
        client.ZINCRBY(name,incr,value,(err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
}

cache.getZScore=(name,value)=>{
    return new Promise((resolve, reject) => {
        client.ZSCORE(name,value,(err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
}

cache.ZRange = (name, start, end) => {
    return new Promise((resolve, reject) => {
        client.zrange(name, start, end, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.ZRangeByScore = (name, min, max) => {
    return new Promise((resolve, reject) => {
        client.zrangebyscore(name, min, max, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.ZRank = (name,value) => {
    return new Promise((resolve, reject) => {
        client.zrank(name, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.ZRem = (name,value) => {
    return new Promise((resolve, reject) => {
        client.zrem(name, value, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.ZRemoveRangeByScore = (name,min,max) => {
    return new Promise((resolve, reject) => {
        client.ZREMRANGEBYSCORE(name,min,max, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

cache.ZRemoveRangeByIndex = (name,start,end) => {
    return new Promise((resolve, reject) => {
        client.ZREMRANGEBYRANK(name,start,end, (err, reply) => {
            if (err) {
                resolve(err);
            }
            resolve(reply);
        });
    });
};

module.exports = cache;

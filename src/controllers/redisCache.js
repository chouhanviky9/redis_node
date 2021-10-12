const express = require("express");
const redis = require("redis");
const cache = require("../services/cache");
let admin = {};

//operations on strings and number
admin.set = async (req, res, next) => {
    try {
        let response = await cache.setCache(req.query.key, req.query.value, console.log("ok"));
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.get = async (req, res, next) => {
    try {
        let response = await cache.getCache(req.query.key);
        res.send(response);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.delete = async (req, res, next) => {
    try {
        let response = await cache.deleteCache(req.query.key);
        res.send(`${response}`);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.getRange = async (req, res, next) => {
    try {
        let response = await cache.RangeCache(req.query.key, req.query.start, req.query.end);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.getSet = async (req, res, next) => {
    try {
        let response = await cache.getSet(req.query.key, req.query.value);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};
admin.Type =async (req, res, next) => {
    try {
        let response = await cache.type(req.query.key);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.Rename =async (req, res, next) => {
    try {
        let response = await cache.rename(req.query.key,req.query.newKey);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.Dump =async (req, res, next) => {
    try {
        let response = await cache.dumpCache(req.query.key);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};
//didnt get completely
admin.getBitAt = async (req, res, next) => {
    try {
        let response = await cache.getSet(req.query.key, req.query.offset);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.getMany = async (req, res, next) => {
    try {
        let response = await cache.getMany(req.query.keys);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.renameNX = async (req, res, next) => {
    try {
        let response = await cache.renameNX(req.query.key, req.query.newKey);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.isExist = async (req, res, next) => {
    try {
        let response = await cache.isCache(req.query.key);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};
admin.Expire = async (req, res, next) => {
    try {
        let response = await cache.expire(req.query.key,req.query.time);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};
admin.ExpireTimeLeft = async (req, res, next) => {
    try {
        let response = await cache.getExpireTime(req.query.key);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.RandomCache = async (req, res, next) => {
    try {
        let response = await cache.randomCache();
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};
//lists
admin.lPush = async (req, res, next) => {
    try {
        let response = await cache.lPush(req.query.name, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.lSet = async (req, res, next) => {
    try {
        let response = await cache.lSet(req.query.name, req.query.key, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.lPushX = async (req, res, next) => {
    try {
        let response = await cache.lPushX(req.query.name, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.rPush = async (req, res, next) => {
    try {
        let response = await cache.rPush(req.query.name, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.rPushX = async (req, res, next) => {
    try {
        let response = await cache.rPushX(req.query.name, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.lRange = async (req, res, next) => {
    try {
        let response = await cache.lRange(req.query.name, req.query.start, req.query.end);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.lRemove = async (req, res, next) => {
    try {
        let count = req.query.count ? req.query.count : 1;
        let response = await cache.lRemove(req.query.name, count, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.lPop = async (req, res, next) => {
    try {
        let response = await cache.lPop(req.query.name);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

//hash operations

admin.hSet = async (req, res, next) => {
    try {
        let response = await cache.hSet(req.query.name, req.query.key, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.hGet = async (req, res, next) => {
    try {
        let response = await cache.hGet(req.query.name, req.query.key);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.hDel = async (req, res, next) => {
    try {
        let response = await cache.hDel(req.query.name, req.query.key);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.hVals = async (req, res, next) => {
    try {
        let response = await cache.SADD(req.query.namee, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

//operations on sets

admin.SADD = async (req, res, next) => {
    try {
        let response = await cache.SADD(req.query.name, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.SREM = async (req, res, next) => {
    try {
        let response = await cache.SREM(req.query.name, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.SCARD = async (req, res, next) => {
    try {
        let response = await cache.SCARD(req.query.name);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.SMEMBERS = async (req, res, next) => {
    try {
        let response = await cache.SMembers(req.query.name);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.SDIFF = async (req, res, next) => {
    try {
        let response = await cache.SDIFF(req.query.names);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.SINTER = async (req, res, next) => {
    try {
        let response = await cache.SINTER(...req.query.names);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};
admin.SISMEMBER = async (req, res, next) => {
    try {
        let response = await cache.SISMEMBER(req.query.name, req.query.key);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.SRANDOM = async (req, res, next) => {
    try {
        let response = await cache.SRANDOM(req.query.name);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.SUNIONSTORE = async (req, res, next) => {
    try {
        let response = await cache.SUNIONSTORE(req.query.names, req.query.name1, req.query.name2);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

//zset operations 
admin.zADD = async (req, res, next) => {
    try {
        let response = await cache.zADD(req.query.name, req.query.score, req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
}

admin.zCard = async (req, res, next) => {
    try {
        let response = await cache.zCard(req.query.name);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
}
admin.zCount = async (req, res, next) => {
    try {
        let response = await cache.zCount(req.query.name,req.query.start,req.query.end);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
}

admin.zINCRBY = async (req, res, next) => {
    try {
        let response = await cache.ZINCRBY(req.query.name,req.query.incr,req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
}

admin.zScore = async (req, res, next) => {
    try {
        let response = await cache.getZScore(req.query.name,req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
}

admin.ZRange = async (req, res, next) => {
    try {
        let response = await cache.ZRange(req.query.name, req.query.start, req.query.end);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.ZRangeByScore = async (req, res, next) => {
    try {
        let response = await cache.ZRangeByScore(req.query.name, req.query.min, req.query.max);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.ZRank = async (req, res, next) => {
    try {
        let response = await cache.ZRank(req.query.name,req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.ZRem = async (req, res, next) => {
    try {
        let response = await cache.ZRem(req.query.name,req.query.value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.ZRemRangeByScore = async (req, res, next) => {
    try {
        let response = await cache.ZRemoveRangeByScore(req.query.name,req.query.min,req.query.max);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.ZRemRangeByIndex = async (req, res, next) => {
    try {
        let response = await cache.ZRemoveRangeByIndex(req.query.name,req.query.start,req.query.end);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    admin
};

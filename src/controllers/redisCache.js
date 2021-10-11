const express = require("express");
const redis = require("redis");
const cache = require("../services/cache");
let admin = {};

admin.set = async (req, res, next) => {
    try {
        let key = req.query.key;
        let value = req.query.value;
        let response = await cache.setCache(key, value, console.log("ok"));
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.get = async (req, res, next) => {
    try {
        let key = req.query.key;
        let response = await cache.getCache(key);
        res.send(response);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.delete = async (req, res, next) => {
    try {
        let key = req.query.key;
        let response = await cache.deleteCache(key);
        res.send(`${response}`);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.getRange = async (req, res, next) => {
    try {
        let key = req.query.key;
        let start = req.query.start;
        let end = req.query.end;
        let response = await cache.RangeCache(key, start, end);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.getSet = async (req, res, next) => {
    try {
        let key = req.query.key;
        let value = req.query.value;
        let response = await cache.getSet(key, value);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

//didnt get completely
admin.getBitAt = async (req, res, next) => {
    try {
        let key = req.query.key;
        let offset = req.query.offset;
        let response = await cache.getSet(key, offset);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.getMany = async (req, res, next) => {
    try {
        let keys = req.query.keys;
        let response = await cache.getMany(keys);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};

//hash operations

admin.hSet = async (req, res, next) => {
    try {
        let name = req.query.name;
        let key = req.query.key;
        let value = req.query.value;
        let response = await cache.hSet(name, key, value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.hGet = async (req, res, next) => {
    try {
        let name = req.query.name;
        let key = req.query.key;
        let response = await cache.hGet(name, key);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.hDel = async (req, res, next) => {
    try {
        let name = req.query.name;
        let key = req.query.key;
        let response = await cache.hDel(name, key);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.hVals = async (req, res, next) => {
    try {
        let name = req.query.name;
        let value = req.query.value;
        let response = await cache.SADD(name, value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

//operations on sets

admin.SADD = async (req, res, next) => {
    try {
        let name = req.query.name;
        let value = req.query.value;
        let response = await cache.SADD(name, value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.SREM = async (req, res, next) => {
    try {
        let name = req.query.name;
        let value = req.query.value;
        let response = await cache.SREM(name, value);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
};

admin.SCARD= async (req, res, next) => {
    try {
        let name = req.query.name;
        let response = await cache.SCARD(name);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
}
admin.SDIFF= async (req, res, next) => {
    try {
        let name1= req.query.name1;
        let name2= req.query.name2;
        let response = await cache.SDIFF(name1,name2);
        res.send(`${response}`);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    admin
};

const express = require("express"),
    { admin } = require("../controllers/redisCache"),
    router = express.Router(),
    cacheRouter = express.Router();

router.get("/set", admin.set);
router.get("/get", admin.get);
router.get("/delete", admin.delete);
router.get("/getRange", admin.getRange);
router.get("/getSet?", admin.getSet);
router.get("/getBitAt?", admin.getBitAt);
router.get("/getSet?", admin.getSet);
router.get("/dump?", admin.Dump);
router.get("/getMany?", admin.getMany);
router.get("/type?", admin.Type);
router.get("/rename?", admin.Rename);
router.get("/renamenx?", admin.renameNX);
router.get("/isexist?", admin.isExist);
router.get("/expire?", admin.Expire);
router.get("/expire_time_left?", admin.ExpireTimeLeft);
router.get("/random", admin.RandomCache);
router.get("/lpush", admin.lPush);
router.get("/lset", admin.lSet);    
router.get("/lpushx", admin.lPushX);
router.get("/rpush", admin.rPush);
router.get("/rpushx", admin.lPushX);
router.get("/lrange", admin.lRange);
router.get("/lremove", admin.lRemove);
router.get("/lpop", admin.lPop);
router.get("/hset?", admin.hSet);
router.get("/hDel?", admin.hDel);
router.get("/hGet?", admin.hGet);
router.get("/hVals?", admin.hVals);
router.get("/sadd?", admin.SADD);
router.get("/srem?", admin.SREM);
router.get("/scard?", admin.SCARD);
router.get("/sdiff?", admin.SDIFF);
router.get("/sinter?", admin.SINTER);
router.get("/sismember?", admin.SISMEMBER);
router.get("/smembers?", admin.SMEMBERS);
router.get("/srandom?", admin.SRANDOM);
router.get("/sunionstore?", admin.SUNIONSTORE);
router.get("/zadd?", admin.zADD);
router.get("/zcard?", admin.zCard);
router.get("/zcount?", admin.zCount);
router.get("/zincrease?", admin.zINCRBY);
router.get("/zscore?", admin.zScore);
router.get("/zrange?", admin.ZRange);
router.get("/zrangebyscore?", admin.ZRangeByScore);
router.get("/zrank?", admin.ZRank);
router.get("/zrem?", admin.ZRem);
router.get("/zremrangebyscore?", admin.ZRemRangeByScore);
router.get("/zremrangebyrank?", admin.ZRemRangeByIndex); 

cacheRouter.use("/cache", router);

module.exports = cacheRouter;

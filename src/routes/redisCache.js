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
router.get("/getMany?", admin.getMany);
router.get("/type?", admin.type);
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

cacheRouter.use("/cache", router);

module.exports = cacheRouter;

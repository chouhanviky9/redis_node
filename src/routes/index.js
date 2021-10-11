const express=require('express'),
      apiRouter=express.Router(),
      routesRouter=express.Router(),
      cacheRouter=require("./redisCache");

      routesRouter.use(
          cacheRouter
      );

      apiRouter.use('/routes', routesRouter);

module.exports=apiRouter;


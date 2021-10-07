const express=require('express');
const redis = require("redis");
const { get }=require("axios");

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient({
    host : '127.0.0.1',  
          no_ready_check: true,
          auth_pass: '786Hh@786',  
});


client.on("error", function(error) {
    console.error(error);
  });


  client.set("name","vikas");
  client.get("name",redis.print);
  client.exists("chouhanvi",redis.print);
  client.get("chouhanviky9",redis.print);
  client.incr("chouhanviky9",redis.print);
  client.del("name",redis.print);
  client.get("name",redis.print);
//   client.lpush("map","one");
  client.lrange("map",0,-1,redis.print);
  client.hset("hashset","nook","kiiaa",redis.print);
  client.hdel("hashset","nook","kiiaa");
  client.hexists("hashset","name",redis.print);
  client.hgetall("hashset",(obj,err)=>{
      if(err){
          console.log(err);
      }
      console.log(obj);
  });
  client.llen("map",redis.print);
  client.lindex("map",5,redis.print);
//   client.ltrim("map",0,1,redis.print);
  client.hsetnx("hashset","nooki",1,redis.print);


const app = express();

async function getRepos(req, res, next) {
    try {
        console.log("fetching data...");
        const  username  = req.params.username;
        await get(`https://api.github.com/users/${username}`)
        .then((response) => {
            const data = response.data;
            const repos=data.public_repos;
            client.set(username,repos);
            client.exists("chouhanvi",redis.print);
            client.get("chouhanviky9",redis.print);
            res.send(` this user has ${repos} public repos`);
        })
        .catch((err) => {
            res.send(err);
        })
    } catch (err) {
        res.status(500);
    }
}

app.get(`/repos/:username`,getRepos);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

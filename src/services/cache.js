const redis = require("redis");

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient({
    host : '127.0.0.1',  
          no_ready_check: true,
          auth_pass: '786Hh@786',  
});

let cache={};

// operations normal string data type 
// cache.set('name', 'haiVikas');

cache.setCache=(key,value)=>{
    return new Promise((resolve,reject)=>{
        client.set(key,value,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.getCache=(key)=>{
    return new Promise((resolve,reject)=>{
        client.get(key,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.deleteCache=(key)=>{
    return new Promise((resolve,reject)=>{
        client.del(key,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.RangeCache=(key,start,end)=>{
    return new Promise((resolve,reject)=>{
        client.GETRANGE(key,start,end,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.getSet=(key,value)=>{
    return new Promise((resolve,reject)=>{
        client.GETSET(key,value,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.getBitAt=(key,offset)=>{
    return new Promise((resolve,reject)=>{
        client.GETBIT(key,offset,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}
cache.getMany=(keys)=>{
    return new Promise((resolve,reject)=>{
        client.MGET(...keys,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

//redis hashes 

cache.hSet=(name,key,value)=>{
    return new Promise((resolve,reject)=>{
        client.HSET(name,key,value,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}
cache.hGet=(name,key,value)=>{
    return new Promise((resolve,reject)=>{
        client.HGET(name,key,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.hDel=(name,key)=>{
    return new Promise((resolve,reject)=>{
        client.HDEL(name,key,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.hVals=(name)=>{
    return new Promise((resolve,reject)=>{
        client.HVALS(name,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

//operations on sets

cache.SADD=(name,value)=>{
    return new Promise((resolve,reject)=>{
        client.SADD(name,value,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.SREM=(name,value)=>{
    return new Promise((resolve,reject)=>{
        client.SREM(name,value,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.SMembers=(name)=>{
    return new Promise((resolve,reject)=>{
        client.SREM(name,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.SCARD=(name)=>{
    return new Promise((resolve,reject)=>{
        client.SCARD(name,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}

cache.SDIFF=(name1,name2)=>{
    return new Promise((resolve,reject)=>{
        client.SDIFF(name1,name2,(err,reply)=>{
            if(err){
                resolve(err);
            }
            resolve(reply);
        })
    })
}




module.exports =cache;
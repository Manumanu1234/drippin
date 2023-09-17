const mongoClient = require('mongodb').MongoClient
const state = {
    db:null
}

console.log('database drip1');

module.exports.connect = function(done){
    console.log('database drip2');
    const url = 'mongodb://127.0.0.1:27017/';
    const dbname = 'drippin'
    console.log('database drip3');

    mongoClient.connect(url,(err,data)=>{
       
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })
    
    
}

module.exports.get=function(){
    return state.db
} 

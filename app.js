const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const connectionUrl = "mongodb://127.0.0.1:27017"

const dbName = "proj-1"

MongoClient.connect(connectionUrl, (error, data)=>{
    if(error){
        console.log("error in connect")
    }
    console.log("connection success")

    const db = data.db(dbName)

    // db.collection("users").insertOne({
    //     name:"hossam",
    //     age:24
    // },(error, data)=>{
    //     if(error){
    //         console.log("not inserted")
    //     }
    //     console.log(data.insertedId)
    // })


    // db.collection("users").insertMany([
    //     {
    //         name:"hossam",
    //         age:24
    //     },
    //     {
    //         name:"Ahmed",
    //         age:26
    //     }
    // ],(error, data)=>{
    //     if(error){
    //         console.log("error")
    //     }
    //     console.log(data.insertedCount)
    // })


    // db.collection("users").findOne({
    //     _id:mongodb.ObjectId("65f9057e9deb26470d4a2849")
    // },(error, data)=>{
    //     if(error){
    //         console.log("error")
    //     }
    //     console.log(data)
    // })

    // db.collection("users").find({age:24}).limit(2).toArray((error, data)=>{
    //     if(error){
    //         console.log("error")
    //     }
    //     console.log(data)
    // })


    // db.collection("users").find({age:24}).toArray((error, data)=>{
    //     if(error){
    //         console.log("error")
    //     }
    //     console.log(data)
    // })

    db.collection("users").find({age:24}).count((error, data)=>{
        if(error){
            console.log("error")
        }
        console.log(data)
    })
})
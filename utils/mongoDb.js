import mongoose from "mongoose"

const MONGODB_URI = process.env.DB_URL

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      return mongoose
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectDB












// import Mongoose from "mongoose";

// const dbUrl= process.env.DB_URL;
// let cachedDb;


// export default async function connectDB(){

//     // if(cachedDb) return {db:cachedDb}
//     if(Mongoose.Connection[0].readyState){
//         return { db:cachedDb}
//     }

//     try{

//         const db = await Mongoose.connect(dbUrl)
//         cachedDb = db
//         return db;

//     }catch(e){
//         return e;
//     }
// }





// import {MongoClient} from 'mongodb';

// const db_url= process.env.DB_URL;
// let cachedDb;


// export default async function connectDb(){

//     if(cachedDb)
//         return {db:cachedDb}
    
//     try{

//         const client = await MongoClient.connect(db_url)

//         const db = await client.db('uzis')

//         cachedDb=db;

//         return db;
//     }catch(err){
//         throw err;
//     }

// }
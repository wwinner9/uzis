import {connect,connection} from "mongoose"

const MONGODB_URI = process.env.DB_URL  // change the variable at local enviroment variable

let cachedConn; // cache to receive our connection // facilitate in serveless connection

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

export async function connectDB(){  

  if(cachedConn) return { db : cachedConn }; //if there is an connection will be returned

  //otherwise will be created with mongoose.connect 
  const db = await connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  });

  cachedConn = db; //set the cache variable with the created connection

  return db; 

}


connection.on('connected',()=>{
  console.log('connected')
})

connection.on('error', (err)=>{
  console.log(`Error : ${err}`)
})



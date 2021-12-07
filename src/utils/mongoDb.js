import {connect,connection} from "mongoose"

const MONGODB_URI = process.env.DB_URL 

const conn = {
  isConnected: false,
}

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

export async function connectDB(){ 

  if(conn.isConnected) return;

  const db = await connect(MONGODB_URI);

  conn.isConnected = db.connections[0].readyState === 1 ? true: false; 

  console.log(db.connection.db.databaseName)

}

connection.on('connected',()=>{
  console.log('connected')
})

connection.on('error', (err)=>{
  console.log(`Error : ${err}`)
})



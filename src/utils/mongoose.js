import {connect,connection} from 'mongoose'

const conn={
    isConnected:false
}

export async function connectDB(){

    if(conn.isConnected)return;
    const db= await connect(process.env.MONGO_URI)
    console.log('connecting...')
    conn.isConnected = db.connections[0].readyState
    
    
}

connection.on('connected',()=>{
    console.log('connect')
})

connection.on('error',()=>{
    console.log('error')
})
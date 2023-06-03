const express=require("express")
const app=express()
const cors=require("cors")

//========================================SOCKIT-IO=======================================================================
const { Server } = require("socket.io");


//=================================================SOCKIT-IO===============================================================
PORT=7000
const server= app.listen(PORT,()=>{
    console.log(`server is running at localhost=>${PORT}..........................`)
});

const io = new Server(server,{pingTimeout:60000 ,cors:{origin:"http://localhost:3000",credentials:true}}) ;
io.on('connection', (socket) => {
    console.log('Socket.io Connected...');
  });

//=================================================================================================================































// app.use(cors({
//     credentials:true,
//     origin:"http://localhost:3000"  

// }))
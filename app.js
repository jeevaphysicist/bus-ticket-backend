const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const busroute = require('./routes/busroutes');
const useroutes = require('./routes/userloginroutes');
const paymentroutes = require('./routes/paymentroutes');
const ticketroutes = require('./routes/Ticketroutes');

const PORT =process.env.PORT || 9090;
//const mongoURI = "mongodb://localhost:27017/busbooking";
 const mongoURI = `mongodb+srv://devil:2001@clustor1.mblkznx.mongodb.net/Bus_ticket_booking`
mongoose.connect(mongoURI,()=>console.log("Database connected successfully"),e=>console.log(" database connection error ",e));

const app = express();
app.use(cors());
app.use(bodyParser.json());

// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("bus-ticket-booking/build"));
//     const path = require("path");
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,"bus-ticket-booking","build","index.html"));
//     })

// }

app.get("/",(req,res)=>{
            res.send('this is  backend');
        })

//middle wares
app.use('/',busroute);
app.use("/userdata",useroutes);
app.use("/payment",paymentroutes);
app.use("/tickets",ticketroutes);



app.listen(PORT,()=>{
    console.log("server running upon port :",PORT);
})

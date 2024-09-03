const express= require("express");
const connectdb = require("./db/connection")
const Shorturl= require("./model/url.model")
const {router} = require("./routes/routes");
const userrouter = require("./routes/userroute")
const dotenv = require("dotenv")
const cookieparser = require("cookie-parser")
const {handleLoggedinUserOnly} = require("./middlewares/auth")
const {handleRedirect} = require("./controllers/index")

dotenv.config()
const app = express();
const dburl = process.env.MONGO_URI;
connectdb(dburl)
.then(()=>console.log("MongoDB connected Successfully"))
.catch((err)=>console.log("MongoDB failed to connect: ",err));

const Port= process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieparser());
app.use('/api',handleLoggedinUserOnly,router);
app.use('/user',userrouter);
app.get('/:shortid',handleRedirect);

app.listen(Port,()=>{
    console.log("Server is started at PORT: ",Port)
})



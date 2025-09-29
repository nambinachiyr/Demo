const app = require("./app")

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nambi2731:Suha12-%40@cluster010.16wsdm3.mongodb.net/demoDB')
.then(()=>{
    console.log("connected mongoDB");
    app.listen(3001,()=>{
    console.log("Server is litsening on http://localhost:3001")
})
})
.catch(()=>{
    console.log("ERROR DB");
})


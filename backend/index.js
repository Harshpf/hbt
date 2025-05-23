const express = require("express");
const {connectDB} = require("./config");
const app = express();
const routes=require("./routes/auth");


// mongodb
connectDB();

//middleware
app.use(express.json());

// routes
app.use("/api",routes);


const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



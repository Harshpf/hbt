const express = require("express");
const {connectDB} = require("./config");
const app = express();
const routes=require("./routes/auth");
const cors = require('cors');

const corsOption = {
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "DELETE","PUT"],
    credentials: true 
};
app.use(cors(corsOption));
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



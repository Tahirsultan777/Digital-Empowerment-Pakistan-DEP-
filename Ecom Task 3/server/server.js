require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require('../server/routers/auth_router.js');
const contactRoute = require('../server/routers/contact_router.js');
const servicesRoute = require("./routers/services_router.js")
const adminRoute = require("./routers/admin_router.js")
const connectDB = require("./utilies/db.js")
const errorMiddlewWare = require("../server/middlewares/error_middleware.js")

// lets tackle cors 
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH,HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

// Use maddleWare 
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form/", contactRoute);
app.use("/api/data", servicesRoute);
 
// lets Define admin route 
app.use("/api/admin", adminRoute);

app.use(errorMiddlewWare);

const PORT = 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at Port : ${PORT}`)
    })
});
const express = require("express");
const app = express();
require ("./db/conn");
const Urls = require("./routers/routes");
const port = process.env.PORT || 8080;

/* Middlewares */
app.use(Urls);

app.get("/" ,(req, res)=>
{
    res.status(200).send("Hello World i'm Working");
});

// app.use((req , res , next)=>
// {
//     res.setHeader()
// })

app.listen(port, () =>
{
    console.log(`Server Running On Port ${port}`)
});
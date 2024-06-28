import app from "./app.js";


// write cron-jobs


// starting the server..
app.listen(process.env.PORT,() => {
    console.log(`server is running on port ${process.env.PORT}`);
})
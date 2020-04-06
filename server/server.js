const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //these are our import statements
const PORT = process.env.PORT || 5000; //sets port

const taskRouter = require("./routes/task.router");

app.use(express.static('server/public')); //serves static files
app.use(bodyParser.urlencoded({ extended: true })); //allows us to utilize our front end.
app.use(bodyParser.json()); //This allows us to use post man.

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
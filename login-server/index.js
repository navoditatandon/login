const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3004;

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    if(email === "navotandon@gmail.com" && password === "navotandon123@")
        res.status(200).send({message: "Login successful"});
    else 
        res.status(401).send({message: "Invalid credentials"});
});

app.listen(port, () => {console.log(`Server listening on port ${port}`);})
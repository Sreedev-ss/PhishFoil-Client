const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//npm install
//add new terminal cd -> server then node server.js

const db = require('./db.json'); // Import your JSON data

app.post('/login/authenticate', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    const user = db.login.find(
        (u) => u.username === username && u.password === password
    );
    if (user) {
        console.log(user);
        res.status(200).json(user);
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

app.get('/user/group/all/:clientid', async(req, res) => {
    const clientid = req.params.clientid
    console.log(clientid)
    const groups = await db.groups.filter((g) => g.clientid == clientid)
    console.log(groups)
    res.json(groups)
})

app.post('/user/newgroup/:clientid', (req, res) => {
    const groups = db.addGroups.push(req.body)
    res.json(groups)
})

app.get('/user/users/all/:clientid', async(req, res) => {
    const clientid = req.params.clientid
    const users = await db.users.filter((u) => u.clientid == clientid)
    res.json(users)
})

app.post('/user/new/:clientid', (req, res) => {
    const users = db.addUsers.push(req.body)
    res.json(users)
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

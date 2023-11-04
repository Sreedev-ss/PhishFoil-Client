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
    const user = db.login.find(
        (u) => u.username === username && u.password === password
    );
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

app.get('/user/group/all/:clientid', async (req, res) => {
    const groups = await db.groups.filter((g) => g.clientid == clientid)
    res.json(groups)
})

app.post('/user/newgroup/:clientid', (req, res) => {
    db.groups.push(req.body)
    res.json(db.groups)
})

app.get('/user/users/all/:clientid', async (req, res) => {
    const clientid = req.params.clientid
    res.json(db.allUsers)
})

app.post('/user/new/:clientid', (req, res) => {
    console.log(req.body)
    let data = {
        name:req.body?.firstname+' '+req.body?.lastname,
        emailid:req.body?.email,
        managername:req.body?.manager,
        manageremailid:req.body?.manager+''+'@gmail.com',
        enableordisable: true,
        orgainzationrole: null,
        groups:req.body?.groups,
        ismanager:true
    }
    db.allUsers.push(data)
    res.json(db.allUsers)
})

app.use((req, res) => {
    res.send({ code: 404, error: httpMsg[404] })
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

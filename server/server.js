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
    const clientid = req.params.clientid
    console.log(clientid)
    const groups = await db.groups.filter((g) => g.clientid == clientid)
    res.json(groups)
})

function generateRandomId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
  

app.post('/user/newgroup/:clientid', async(req, res) => {
    const clientid = req.params.clientid
    console.log(req.body)
    let data = {
        groupid: generateRandomId(10),
        groupname:req.body?.groupname,
        groupmanager:req.body?.manager,
        clientid:clientid,
        isparentgroup:req.body?.parentid ? false : true,
        parentid: req.body?.parentid,
        pp:[]

    }
    db.groups.push(data)
    console.log(db.groups)
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
        manageremailid: req.body?.manageremailid ?  req.body?.managerEmailid : req.body?.manager+''+'@gmail.com',
        enableordisable: true,
        orgainzationrole: null,
        groups:req.body?.groups,
        ismanager:true
    }
    db.allUsers.push(data)
    res.json(db.allUsers)
})

// app.post('/uphish/email-template-builder/new/admin', (req, res) => {
//     console.log(req.body);
//     let data = {
//         templatename: req.body?.templatename,
//         language: req.body?.language,
//         category: req.body?.category,
//         subject: req.body?.subject,
//         sendername: req.body?.sendername,
//         emailid: req.body?.emailid,
//         design: req.body?.design,
//         html: req.body?.html,
//     }
//     db.createEmailTemplate.push(data)
//     res.json(db.createEmailTemplate)
// })

app.post('/uphish/email-template-builder/new/:clientid/:detailid', (req, res) => {
    console.log(req.body);
    let data = {
        templatename: req.body?.templatename,
        language: req.body?.language,
        category: req.body?.category,
        subject: req.body?.subject,
        sendername: req.body?.sendername,
        emailid: req.body?.emailid,
        domain: req.body?.domain,
        design: req.body?.design,
        html: req.body?.html,
    }
    db.createEmailTemplate.push(data)
    res.json(db.createEmailTemplate)
})

app.get('/uphish/email-template-builder/all/:clientid', async (req, res) => {
    const clientid = req.params.clientid
    res.json(db.getAllTemplate)
})

// app.post('/user/delete/detailsId')

app.use((req, res) => {
    res.send({ code: 404, error: httpMsg[404] })
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

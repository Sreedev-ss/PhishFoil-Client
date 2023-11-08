const express = require('express');
const bodyParser = require('body-parser')
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


app.post('/user/newgroup/:clientid', async (req, res) => {
    const clientid = req.params.clientid
    console.log(req.body)
    let data = {
        groupid: generateRandomId(10),
        groupname: req.body?.groupname,
        groupmanager: req.body?.manager,
        clientid: clientid,
        isparentgroup: req.body?.parentid ? false : true,
        parentid: req.body?.parentid,
        pp: []

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
        name: req.body?.firstname + ' ' + req.body?.lastname,
        emailid: req.body?.email,
        managername: req.body?.manager,
        manageremailid: req.body?.manageremailid ? req.body?.managerEmailid : req.body?.manager + '' + '@gmail.com',
        enableordisable: true,
        preferredlanguage:req.body?.preferredlanguage,
        orgainzationrole: null,
        groups: req.body?.groups,
        ismanager: true
    }
    db.allUsers.push(data)
    res.json(db.allUsers)
})

app.post('/email-template-builder/new/admin', (req, res) => {
    console.log(req.body);
    let data = {
        templatename: req.body?.templatename,
        language: req.body?.language,
        category: req.body?.category,
        subject: req.body?.subject,
        sendername: req.body?.sendername,
        emailid: req.body?.emailid,
        design: req.body?.design,
        html: req.body?.html,
    }
    db.createEmailTemplate.push(data)
    res.json(db.createEmailTemplate)
})

app.post('/emailtemplate/new/:clientid/:detailsid', (req, res) => {
    console.log(req.body);
    let data = {
        templateid:  generateRandomId(10),
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
    db.getAllTemplates.push(data)
    res.json(db.getAllTemplates)
})

app.post('/user/disable/:detailsid',async(req,res)=>{
    const clientid = req.params.detailsid
    const indexToUpdate = db.allUsers.findIndex((item) => item.detailsid === clientid);

    if (indexToUpdate !== -1) {
        // If the ID is found, update the enableordisable property
        db.allUsers[indexToUpdate].enableordisable = false;
      }
res.json(db.allUsers)

})
app.post('/user/restore/:detailsid',async(req,res)=>{
    const clientid = req.params.detailsid
    const indexToUpdate = db.allUsers.findIndex((item) => item.detailsid === clientid);

    if (indexToUpdate !== -1) {
        // If the ID is found, update the enableordisable property
        db.allUsers[indexToUpdate].enableordisable = true;
      }
res.json(db.allUsers)

})

// app.get('/emailTempla/all/:detailsid', async (req, res) => {
//     const clientid = req.params.detailsid
// })
    
app.post('/landingPageTemplate/new/${clientid}/${detailsid}', (req, res) => {
    let data = {
        templatename: req.body?.templatename,
        language: req.body?.language,
        category: req.body?.category,
        pagetitle: req.body?.pagetitle,
        emailtemplateid: req.body?.emailtemplateid,
        associatedEmailTemplate: req.body?.associatedEmailTemplate,
        design: req.body?.design,
        html: req.body?.html,
    }
    db.createLandingTemplate.push(data)
    res.json(db.createLandingTemplate)
})

app.get('/emailtemplate/all/:clientid', async (req, res) => {
    const clientid = req.params.clientid
    console.log(db.getAllTemplates)
    res.json(db.getAllTemplates)
})

app.post('/user/delete/:detailsid', async(req,res)=>{
    const clientid = req.params.detailsid

    const findIndex = db.allUsers.findIndex(item => item.detailsid == clientid);
    if(findIndex !== -1){
        db.allUsers.splice(findIndex,1)
    }
    res.json(db.allUsers)
})

app.post('/emailtemplate/delete/:templateid', async(req,res)=>{
    const clientid = req.params.templateid
    console.log(clientid)
    const findIndex = db.getAllTemplates.findIndex(item => item.templateid == clientid);
    console.log(findIndex)
    if(findIndex !== -1){
        db.getAllTemplates.splice(findIndex,1)
    }
    res.json(db.getAllTemplates)
})

app.use((req, res) => {
    res.send({ code: 404, error: 'No route found' })
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

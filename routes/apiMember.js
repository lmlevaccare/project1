const express = require ('express')
const uuid = require ('uuid')
const router = express.Router()
const fowlerMembers = require('../Members')

//GET REQUEST 
//get all members
router.get('/',(req, res) => {

    
    return res.json(fowlerMembers);
 })
 
 //get single members by id
router.get('/:id',(req, res) => {
     // res.send(req.params.id);
     const found = fowlerMembers.some(member => member.id === parseInt(req.params.id))
 
     if (found) {
     res.json(fowlerMembers.filter(member => member.id === parseInt(req.params.id)))
     } else {
         res.status(400).json({msg: `No Member with the id of ${req.params.id}`})
     }
 });

 //POST ROUTE CREATED
 //create member POST request post to hit members route 

 router.post('/', (req, res) => {
// res.send(req.body)
const newMember = {
    //method to request random id uuid.v4()
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
}
// if not newMember.name or || not newMember.email send status 400
// use return method if you do not have an else statement 
if(!newMember.name ||!newMember.email ) {
   return res.status(400).json({msg:'please include name and email'});
}

fowlerMembers.push(newMember)
res.json(fowlerMembers)
 });

 //DELETE ROUTE ADDED

 router.delete('/:id',(req, res) => {
    // res.send(req.params.id);
    const found = fowlerMembers.some(member => member.id === parseInt(req.params.id))

    if (found) {
    res.json({msg:'Member Deleted', members: fowlerMembers.filter(member => member.id !== parseInt(req.params.id))})
    } else {
        res.status(400).json({msg: `No Member with the id of ${req.params.id}`})
    }
});

 //PUT ROUTE CREATED to UPDATE MEMBERS 

 router.put('/:id',(req, res) => {
    // res.send(req.params.id);
    const found = fowlerMembers.some(member => member.id === parseInt(req.params.id))

    if (found) {
const updMember = req.body;
fowlerMembers.forEach(member => {
    if(member.id === parseInt(req.params.id)){
        //terinary opperator to say if updated name or email included then use if not use old name
member.name = updMember.name ? updMember.name : member.name;
member.email = updMember.email ? updMember.email : member.email;

res.json({msg: 'member upated', member});
}
});

    } else {
        res.status(400).json({msg: `No Member with the id of ${req.params.id}`})
    }
});

 module.exports = router;
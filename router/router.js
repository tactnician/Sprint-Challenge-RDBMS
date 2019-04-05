const router = require('express').Router();

const Projects = require('./router-helper');


//Projects
//get()
router.get('/', async (req, res) => {
    try {
        const id =  await req.params.id;
        const resourceArr = await Projects.get(id);
        console.log(" resource Array :" , resourceArr);
        res.status(200).json(resourceArr);
    } catch (error) {
        console.log(`error in get method ${error}`);
        res.status(500).json({message: `error getting resources: ${error}`});
    }
});

//getById()
router.get('/:id', async (req, res) => {
    try {
        // const {id} =  await req.params.id;
        const resourceArr = await Projects.get(req.params.id);
        console.log(" resource Array :" , resourceArr);
        res.status(200).json(resourceArr);
    } catch (error) {
        console.log(`error in get method ${error}`);
        res.status(500).json({message: `error getting resources: ${error}`});
    }
});

//insert()
router.post('/', async (req, res) => {
    try {
        const newResource = await Projects.insert(req.body)
        res.status(200).json(newResource)
    } catch (error) {
        res.status(500).json(`error creating resource ${error}`)
    }
});

//get Actions by ID 
router.get('/:id/actions', async (req, res) => {
    try {
        // const {id} =  await req.params.id;
        const resourceArr = await Projects.getProjectActions(req.params.id);
        console.log(" resource Array :" , resourceArr);
        res.status(200).json(resourceArr);
    } catch (error) {
        console.log(`error in get method ${error}`);
        res.status(500).json({message: `error getting resources: ${error}`});
    }
});

//insertAction()
router.post('/actions', async (req, res) => {
    try {
        const newResource = await Projects.insertAction(req.body)
        res.status(200).json(newResource);
    } catch (error) {
        res.status(500).json(`error creating resource ${error}`)
    }
});

module.exports = router;
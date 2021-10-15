const express = require('express');
const router = express.Router();

//const { uploadImg } = require('../middleware/uploadImage');
const upload = require('../middleware/uploadImage');
const { singleFileUpload } = require('../controllers/uploadCtrl');
const displayCtrl = require('../controllers/displayCtrl');

router.get('/upload', (req, res) => {
        res.render('upload');
});

router.post('/singleFile', upload.single('upload'), singleFileUpload);
// router.post('/singleFile', upload.single('upload'), (req, res) => {
//     console.log(req.file);
//     let imgFile = req.file;
//     res.json(imgFile);
//     //res.sendStatus(200)
// });

router.get('/display', displayCtrl.getSingleImageFromDB);

router.get('/gallery', displayCtrl.getImagesFromDB);

module.exports = router;
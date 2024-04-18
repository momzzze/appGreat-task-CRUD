const { addPhoto, getAllPhotos, getPhotoById, updatePhotoById, deletePhotoById } = require('../services/photoService');

const router = require('express').Router();

router.post('/upload', async (req, res) => {
    const { base64, title, description } = req.body;
    try {
        const response = await addPhoto({ image: base64, title, description });
        res.send(response);

    } catch (error) {
        res.status(500).send('Error uploading photo');
    }
});

router.get('/all', async (req, res) => {
    try {
        const response = await getAllPhotos();
    } catch (error) {
        res.status(500).send('Error getting photos');
    }
});

router.post('/update/:id', async (req, res) => {
    const { id, title, description } = req.body;
    try {
        const response = await updatePhotoById(id, { title, description });
        res.send(response);
    } catch (error) {
        res.status(500).send('Error updating photo');
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getPhotoById(id);
        res.send(response);
    } catch (error) {
        res.status(500).send('Error getting photo');
    }
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await deletePhotoById(id);
        res.send(response);
    } catch (error) {
        res.status(500).send('Error deleting photo');
    }
});




module.exports = router;
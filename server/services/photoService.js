const Photo = require('../models/Photo');



const addPhoto = async (data) => {
    const { image, title, description } = data;
    const newPhoto = new Photo({
        image,
        title,
        description
    });
    return await newPhoto.save();
};

const getAllPhotos = async () => {
    return await Photo.find({}).sort({ created_at: -1 });
};

const getPhotoById = async (id) => {
    return await Photo.findById(id);
}

const updatePhotoById = async (id, data) => {
    const { title, description } = data;
    return await Photo.findByIdAndUpdate(id, { title, description }, { new: true });
}

const deletePhotoById = async (id) => {
    return await Photo.findByIdAndDelete(id);
}


module.exports = {
    addPhoto,
    getAllPhotos,
    getPhotoById,
    updatePhotoById,
    deletePhotoById
}
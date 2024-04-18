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

const getAllPhotos = async (page = 1, limit = 2, search = '') => {
    const startIndex = (page - 1) * limit;
    let query = {};
    if (search) {
        query = { title: { $regex: search, $options: 'i' } };
    }
    const totalPhotos = await Photo.countDocuments();
    const totalPages = Math.ceil(totalPhotos / limit);

    const photos = await Photo.find(query).sort({ created_at: -1 }).skip(startIndex).limit(limit);

    return { photos, pagination: { currentPage: page, totalPages } };
};

const getPhotoById = async (id) => {
    return await Photo.findById(id);
}

const updatePhotoById = async (id, title, description) => {
    return await Photo.findByIdAndUpdate(id, { title, description }, { new: true })
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
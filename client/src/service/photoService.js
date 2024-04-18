
export const uploadPhoto = async (data) => {
    try {
        const response = await fetch('http://localhost:3001/photos/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                title: data.title,
                description: data.description,
                base64: data.image,
            }),
        });

        return response.json();
    } catch (error) {
        console.log('Error: ', error);
    }
}

export const getAllPhotos = async (currentPage) => {
    try {
        const response = await fetch(`http://localhost:3001/photos/all?page=${currentPage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        });

        return response.json();
    } catch (error) {
        console.log('Error: ', error);
    }
}

export const deletePhoto = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/photos/delete/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        });
        return response.json();
    } catch (error) {
        console.log('Error: ', error);
    }
}

export const getPhotoById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/photos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        });
        return response.json();
    } catch (error) {
        console.log('Error: ', error);
    }
}

export const updatePhoto = async ({ id, title, description }) => {
    try {
        const response = await fetch(`http://localhost:3001/photos/update/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                title,
                description,
                id,
            }),
        });
        return response.json();
    } catch (error) {
        console.log('Error: ', error);
    }
}

export const searchAllPhotos = async (page, limit, query) => {
    try {
        const response = await fetch(`http://localhost:3001/photos/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ page, limit, query }),
        });
        return response.json();
    } catch (error) {
        console.log('Error: ', error);
    }
}
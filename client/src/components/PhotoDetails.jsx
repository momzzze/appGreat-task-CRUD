import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { deletePhoto, getPhotoById } from "../service/photoService";

function PhotoDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [photo, setPhoto] = useState({})

    useEffect(() => {
        const getPhoto = async () => {
            try {
                const photo = await getPhotoById(id);
                setPhoto(photo);
            } catch (error) {
                console.log(error);
            }
        }
        getPhoto();
    }, [id])

    const handleDelete = async () => {
        try {
            await deletePhoto(id);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="photo-card">
            {photo && (
                <div>
                    <img src={photo.image} alt={photo.title} />
                    <h2>{photo.title}</h2>
                    <div className="description">{photo.description}</div>
                    <div className="actions">
                        <Link to={`/edit/${id}`}>Edit</Link>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PhotoDetails

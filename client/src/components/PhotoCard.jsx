import { useNavigate } from "react-router-dom";
import { deletePhoto } from "../service/photoService";

const PhotoCard = ({ photo }) => {

    return (
        <div className="photo-card">
            <img src={photo?.image} alt={photo?.title} />
            <h2>{photo?.title}</h2>
            <div className="photo-card-description">{photo?.description}</div>
        </div>
    )
}

export default PhotoCard
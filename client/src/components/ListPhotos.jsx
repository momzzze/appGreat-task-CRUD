import React, { useEffect, useState } from 'react'
import { getAllPhotos } from '../service/photoService'
import PhotoCard from './PhotoCard'
import { Link } from 'react-router-dom'

function ListPhotos() {
    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getPhotos = async () => {
            const response = await getAllPhotos(currentPage);
            setPhotos(response.photos);
            setTotalPages(response.pagination.totalPages);
        }
        getPhotos();
    }, [currentPage])
    return (
        <div className='container'>
            <div className="list-photos-container">
                {photos && photos.map((photo, index) => (
                    <div key={index} className="list-photos-item">
                        <Link to={`/photo/${photo._id}`}>
                            <PhotoCard photo={photo} />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    )
}

export default ListPhotos

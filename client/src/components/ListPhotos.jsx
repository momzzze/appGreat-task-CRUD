import React, { useEffect, useState } from 'react'
import { getAllPhotos } from '../service/photoService'
import PhotoCard from './PhotoCard'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

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

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div>
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
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick}
            />
        </div>
    )
}

export default ListPhotos

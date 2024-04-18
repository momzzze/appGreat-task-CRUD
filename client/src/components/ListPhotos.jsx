import { useEffect, useState } from 'react'
import { getAllPhotos, searchAllPhotos } from '../service/photoService'
import PhotoCard from './PhotoCard'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import Search from './Search'

function ListPhotos() {
    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (searchQuery) {
                const response = await searchAllPhotos(currentPage, 6, searchQuery);
                setPhotos(response.photos);
                setTotalPages(response.pagination.totalPages);
            } else {
                const response = await getAllPhotos(currentPage);
                setPhotos(response.photos);
                setTotalPages(response.pagination.totalPages);
            }
        };

        fetchData();
    }, [currentPage, searchQuery]);

    const handleSearch = async (query) => {
        const response = await searchAllPhotos(1, 6, query);
        setSearchQuery(query);
        setPhotos(response.photos);
        setTotalPages(response.pagination.totalPages);
        setCurrentPage(1);
    };

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className='list-container'>
            <Search onSearch={handleSearch} />
            <div className='container'>
                <div className="list-photos-container">
                    {photos &&
                        photos ? (photos.map((photo, index) => (
                            <div key={index} className="list-photos-item">
                                <Link to={`/photo/${photo._id}`}>
                                    <PhotoCard photo={photo} />
                                </Link>
                            </div>
                        ))) : (<p>No photos found</p>)}
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

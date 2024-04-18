
function Pagination({ currentPage, totalPages, onPrevClick, onNextClick }) {
    return (
        <div className="pagination">
            <button onClick={onPrevClick} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={onNextClick} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
}

export default Pagination;
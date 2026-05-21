import Button from 'react-bootstrap/Button'

function Pagination({ currentPage, setCurrentPage, catsPerPage, totalCats }) {
  return (
    <div className="d-flex justify-content-center gap-3 mt-3">

      <Button
        variant="secondary"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Föregående
      </Button>

      <Button
        variant="primary"
        disabled={currentPage * catsPerPage >= totalCats}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Nästa
      </Button>

    </div>
  )
}

export default Pagination
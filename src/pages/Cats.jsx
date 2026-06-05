import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CatCard from '../components/CatCard' 

import { getCats } from '../services/catService'

import Pagination from '../components/Pagination'

function Cats() {

  const [cats, setCats] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const catsPerPage = 10

  // Fetches cat data from the API when the page loads
  useEffect(() => {

  async function loadCats() {

    const data = await getCats()

    setCats(data)
  }

  loadCats()

}, [])

  
  const start = (currentPage - 1) * catsPerPage
  const end = start + catsPerPage

  

  const currentCats = cats.slice(start, end)

  return (
    <Container className="mt-5">

      <h1 className="text-center mb-4">
        Katter
      </h1>

      <Row>
  {currentCats.map(cat => (
    <Col key={cat.id} md={4} className="mb-4">
  <CatCard cat={cat} />
</Col>
  ))}
</Row>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        catsPerPage={catsPerPage}
        totalCats={cats.length}
      />

    </Container>
  )
}

export default Cats
import Card from 'react-bootstrap/Card'

function CatCard({ cat }) {
  return (
    <Card className="h-100 shadow">

      <Card.Img
        variant="top"
        src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
        alt={cat.name}
        style={{
          height: '250px',
          objectFit: 'cover'
        }}
      />

      <Card.Body>

        <Card.Title>
          {cat.name}
        </Card.Title>

        <Card.Text>
          <strong>Ursprung:</strong> {cat.origin}
        </Card.Text>

        <Card.Text>
          <strong>Temperament:</strong>
          <br />
          {cat.temperament}
        </Card.Text>

      </Card.Body>

    </Card>
  )
}

export default CatCard
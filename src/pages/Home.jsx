import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function Home() {
  return (
    <Container className="text-center mt-5">

      <Card className="p-4 shadow">

        <Card.Body>

          <Card.Title as="h1">
            Välkommen till min kattbutik
          </Card.Title>

          <Card.Text>
            Här kan du hitta olika kattraser och läsa mer om dom. Du kan också läsa mer om mig och varför jag älskar katter så mycket. Klicka på länkarna i menyn för att utforska!
          </Card.Text>

          <Card.Img
            variant="top"
            src="https://static.vecteezy.com/system/resources/previews/023/846/452/non_2x/cat-logo-cat-logotype-pet-shop-logo-concept-pet-care-logo-concept-pet-illustration-vector.jpg"
            alt="Kattlogotyp"
            style={{
              maxWidth: "300px",
              margin: "20px auto",
              borderRadius: "16px"
            }}
          />

        </Card.Body>

      </Card>

    </Container>
  )
}

export default Home
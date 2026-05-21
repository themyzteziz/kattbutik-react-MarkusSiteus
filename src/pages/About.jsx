import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function About() {
  return (
    <Container className="mt-5">

      <Card className="shadow p-4">

        <Card.Img
          variant="top"
          src="https://cdn.hswstatic.com/gif/shutterstock-2278776187-hero.jpg"
          alt="Katt"
        />

        <Card.Body>

          <Card.Title as="h1">
            Om mig
          </Card.Title>

          <Card.Text>
            Mitt namn är Markus Siteus och jag är en entusiast för katter. Jag har haft katter som husdjur i flera år och har lärt mig mycket om deras beteende och behov.
            Jag startade denna kattbutik för att dela min passion för katter och hjälpa andra kattälskare att hitta information om olika kattraser för att hitta den perfekta katten för deras livsstil. Jag hoppas att du hittar något intressant här och att du också blir lika förälskad i katter som jag är!
            Ni kan också nå mig på min mail: <a href="mailto:markus.siteus@example.com">markus.siteus@example.com</a> eller ringa mig på <a href="tel:+46701234567">+46 70 123 45 67</a>.
          </Card.Text>

        </Card.Body>

      </Card>

    </Container>
  )
}

export default About
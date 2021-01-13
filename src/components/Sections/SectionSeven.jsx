import {
  Container,
  Card,
  Row,
  Col,
  // Button,
} from 'reactstrap'

export default function SectionSeven() {
  return (
    <section className="section section-lg pt-0">
      <Container>
        <Card className="bg-gradient-warning shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
              <Col lg="8">
                <h3 className="text-white">
                  Quem Somos.
                </h3>
                <p className="lead text-white mt-3">
                  Fundada em 1989, a empresa Polidao Restauradora Ltda. foi pioneira em reforma de rodas de liga leve, atendendo o mercado de carros de passeio e de competição. Com processos inovadores e técnicos qualificados, executa o conserto de forma adequada e segura. Hoje na loja da Av. Washington Luis, tem um centro automotivo qualificado para atender o serviço de mecânica leve com rapidez e ótimo preço.
                </p>
              </Col>
              {/* <Col className="ml-lg-auto" lg="3">
                <Button
                  block
                  className="btn-white"
                  color="default"
                  href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                  size="lg"
                >
                  Download React
                </Button>
              </Col> */}
            </Row>
          </div>
        </Card>
      </Container>
    </section>
  )
}

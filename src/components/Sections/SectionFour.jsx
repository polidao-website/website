import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
} from 'reactstrap'

import CarServiceWorker from '../../assets/img/theme/car-service-worker.jpg'

export default function SectionFour() {
  return (
    <section className="section bg-secondary">
      <Container>
        <Row className="row-grid align-items-center">
          <Col md="6">
            <Card className="bg-default shadow border-0">
              <CardImg
                alt="..."
                src={CarServiceWorker}
                top
              />
              <blockquote className="card-blockquote">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-bg"
                  preserveAspectRatio="none"
                  viewBox="0 0 583 95"
                >
                  <polygon
                    className="fill-default"
                    points="0,52 583,95 0,95"
                  />
                  <polygon
                    className="fill-default"
                    opacity=".2"
                    points="0,42 583,95 683,0 0,95"
                  />
                </svg>
                <h4 className="display-3 font-weight-bold text-white">
                  Especialidade
                </h4>
                <p className="lead text-italic text-white">
                  Onde a tradição existe pelos detalhes.
                </p>
              </blockquote>
            </Card>
          </Col>
          <Col md="6">
            <div className="pl-md-5">
              <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                <i className="ni ni-settings" />
              </div>
              <h3>Diferenciais</h3>
              <p className="lead">
                Nos destacamos há muito tempo por trazer um serviço premium para nossos clientes.
              </p>
              <p>
                Venha conhecer e se surpreender,deixe seu carro em mãos experientes,
                com profissionais que vão adorar te atender.
              </p>
              {/* <p>
                The kit comes with three pre-built pages to help you get
                started faster. You can change the text and images and
                you're good to go.
              </p> */}
              <a
                className="font-weight-bold text-warning mt-5"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Não teria como ser melhor.
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

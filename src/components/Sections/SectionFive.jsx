import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from 'reactstrap'

import IllTwo from '../../assets/img/theme/car.svg'

export default function SectionFive() {
  return (
    <section className="section pb-0 bg-gradient-warning">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-2 ml-lg-auto" md="6">
            <div className="position-relative pl-md-5">
              <img
                alt="..."
                className="img-center img-fluid"
                src={IllTwo}
              />
            </div>
          </Col>
          <Col className="order-lg-1" lg="6">
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-building text-primary" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white">Nossos Serviços</h4>
                <p className="text-white">
                  Oferecemos uma gama de serviços com toda a qualidade e tradição.
                </p>
              </div>
            </div>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                      <i className="ni ni-pin-3" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-success">
                      Unidade Sabará
                    </h5>
                    <p>
                      Restauração de rodas:
                      Conserto e pintura em rodas de liga-leve;
                      Balanceamento:
                      Balanceamento computadorizado de rodas de liga-leve e aço;
                      Escapamentos:
                      Escapamento originais e esportivos;
                    </p>
                    <a
                      className="text-success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-pin-3" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-warning">
                      Unidade Santo Amaro
                    </h5>
                    <p>
                      Restauração de Rodas,
                      Mecânica leve,
                      Escapamentos,
                      Alinhamento e Balanceamento,
                      Manutenção de sistemas de freios,
                      Ponteiras esportivas,
                      Pneus Remoldados,
                      Embreagens.
                    </p>
                    <a
                      className="text-warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* SVG separator */}
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-white"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </section>
  )
}

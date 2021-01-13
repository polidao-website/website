import {
  Container,
  Row,
  Col,
  Badge,
} from 'reactstrap'

import PolidaoVintage from '../../assets/img/theme/polidao-banner.jpg'

export default function SectionThree() {
  return (
    <section className="section section-lg">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="6">
            <img
              alt="..."
              className="img-fluid floating"
              src={PolidaoVintage}
            />
          </Col>
          <Col className="order-md-1" md="6">
            <div className="pr-md-5">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <i className="ni ni-settings-gear-65" />
              </div>
              <h3>Qualidade Garantida</h3>
              <p>
                Nosso foco principal é a garantia de que o serviço ofertado seja o melhor possível.
              </p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge
                        className="badge-circle mr-3"
                        color="success"
                      >
                        <i className="ni ni-settings-gear-65" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        Preço baixo
                      </h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge
                        className="badge-circle mr-3"
                        color="success"
                      >
                        <i className="ni ni-html5" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        Qualidade
                      </h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge
                        className="badge-circle mr-3"
                        color="success"
                      >
                        <i className="ni ni-satisfied" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        Tradição
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

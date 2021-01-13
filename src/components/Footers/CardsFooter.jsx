// import { Link } from 'react-router-dom'
// reactstrap components
import {
  // Card,
  // CardImg,
  Container,
  Row,
  Col,
  Button,
  UncontrolledTooltip,
} from 'reactstrap'

// import LandingImg from '../../assets/img/theme/landing.jpg'
// import ProfileImg from '../../assets/img/theme/profile.jpg'

export default function CardsFooter() {
  return (
    <footer className="footer has-cards">
      {/* <Container className="container-lg">
        <Row>
          <Col className="mb-5 mb-md-0" md="6">
            <Card className="card-lift--hover shadow border-0">
              <Link to="/landing-page">
                <CardImg
                  alt="..."
                  src={LandingImg}
                />
              </Link>
            </Card>
          </Col>
          <Col className="mb-5 mb-lg-0" md="6">
            <Card className="card-lift--hover shadow border-0">
              <Link to="/profile-page">
                <CardImg
                  alt="..."
                  src={ProfileImg}
                />
              </Link>
            </Card>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row className="row-grid align-items-center my-md pt-5">
          <Col lg="6" className="mt-5">
            <h3 className="text-primary font-weight-light mb-2 mt-5">
              Agradeçemos a preferência!
            </h3>
            {/* <h4 className="mb-0 font-weight-light">
            </h4> */}
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Row>
              <Col>
                <p>Aceitamos:</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className="btn-icon-only rounded-circle"
                  style={{ backgroundColor: '#172274', color: 'white' }}
                  id="tooltip475038074"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-cc-visa" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Visa
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  style={{ backgroundColor: '#ff5f00', color: 'white' }}
                  id="tooltip837440414"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-cc-mastercard" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  MasterCard
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  style={{ backgroundColor: '#006699', color: 'white' }}
                  id="tooltip829810202"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-cc-diners-club" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Diners Club
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  style={{ backgroundColor: '#2671b9', color: 'white' }}
                  id="tooltip495507257"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-cc-amex" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  American Express
                </UncontrolledTooltip>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="align-items-center justify-content-md-between">
          <Col md="6">
            <div className="copyright">
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              <a
                href="https://www.facebook.com/polidao.washinton.7/photos"
                target="_blank"
                rel="noreferrer"
              >
                Polidão
              </a>
              . Todos os direitos reservados.
            </div>
          </Col>
          {/* <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    Creative Tim
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                    target="_blank"
                  >
                    MIT License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col> */}
        </Row>
      </Container>
    </footer>
  )
}

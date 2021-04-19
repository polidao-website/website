import {
  Container,
  Button,
  Row,
  Col,
} from 'reactstrap'

export default function Hero({ scrollToForm }) {
  return (
    <section className="section section-lg section-shaped pb-250">
      <div className="shape shape-style-1 bg-gradient-warning" />
      <Container className="py-lg-md d-flex">
        <div className="col px-0">
          <Row>
            <Col
              lg="6"
              style={{
                minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
              }}
            >
              <h1 className="display-3 text-white">
                Há mais de
                {' '}
                {new Date().getFullYear() - 1989}
                {' '}
                anos
                {' '}
                <span>prestando serviço de qualidade</span>
              </h1>
              {/* <p className="lead text-white">
                The design system comes with four pre-built pages to
                help you get started faster. You can change the text and
                images and you're good to go.
              </p> */}
              <div className="btn-wrapper">
                <Button
                  className="btn-icon mb-3 mb-sm-0"
                  color="white"
                  onClick={() => scrollToForm()}
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="ni ni-email-83" />
                  </span>
                  <span className="btn-inner--text">Faça um orçamento</span>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* SVG separator */}
      <div className="separator separator-bottom separator-skew">
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

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  Button,
} from 'reactstrap'
import classNames from 'classnames'

import Car from '../../assets/img/icons/Car'
import Balance from '../../assets/img/icons/Balance'
import Exhaut from '../../assets/img/icons/Exhaut'

export default function TripleCards() {
  const items = [
    {
      id: 1,
      icon: <Car />,
      title: 'Restauração de Rodas',
      color: 'primary',
      text: 'Conserto e pintura em rodas de liga-leve.',
      button: 'Saiba mais',
      badges: [
        {
          id: 1,
          text: 'Tecnologia',
        },
        {
          id: 2,
          text: 'Inovação',
        },
      ],
    }, {
      id: 2,
      icon: <Balance />,
      title: 'Balanceamento',
      color: 'success',
      text: 'Balanceamento computadorizado de rodas de liga-leve e aço.',
      button: 'Saiba mais',
      badges: [
        {
          id: 1,
          text: 'Precisão',
        },
        {
          id: 2,
          text: 'Segurança',
        },
        {
          id: 3,
          text: 'Confiança',
        },
      ],
    }, {
      id: 3,
      icon: <Exhaut />,
      title: 'Escapamento',
      color: 'warning',
      text: 'Diversos escapamento originais e esportivos.',
      button: 'Saiba mais',
      badges: [
        {
          id: 1,
          text: 'Esportividade',
        },
        {
          id: 2,
          text: 'Performance',
        },
      ],
    },
  ]
  return (
    <section className="section section-lg pt-lg-0 mt--200">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              {items.map(((item) => (
                <Col key={item.id} lg="4" className="d-flex">
                  <Card className="card-lift--hover shadow border-0 flex-1" style={{ width: '100%' }}>
                    <CardBody className="py-5 d-flex flex-column">
                      <div style={{ flex: 1 }}>
                        <div className={classNames(
                          'icon icon-shape',
                          `icon-shape-${item.color}`,
                          'rounded-circle mb-4',
                        )}
                        >
                          {item.icon}
                        </div>
                        <h6 className={classNames(
                          `text-${item.color}`,
                          'text-uppercase',
                        )}
                        >
                          {item.title}
                        </h6>
                        <p className="description mt-3">
                          {item.text}
                        </p>
                      </div>
                      <div>
                        {item.badges.map((badge) => (
                          <Badge key={badge.id} color={item.color} pill className="mr-1">
                            {badge.text}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        className="mt-4"
                        color={item.color}
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item.button}
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              )))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

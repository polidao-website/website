import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  Container,
  Card,
  CardBody,
  Badge,
  Button,
} from 'reactstrap'
import classNames from 'classnames'

import Car from '../../assets/img/icons/Car'
import Balance from '../../assets/img/icons/Balance'
import Exhaut from '../../assets/img/icons/Exhaut'
import Suspension from '../../assets/img/icons/Suspension'
import Buffer from '../../assets/img/icons/Buffer'
import Brake from '../../assets/img/icons/Brake'
import Clutch from '../../assets/img/icons/Clutch'
import FuelInjection from '../../assets/img/icons/FuelInjection'

export default function SimpleSlider() {
  const items = [
    {
      id: 1,
      icon: <Car color="#2643e9" />,
      title: 'Restauração de Rodas',
      color: 'primary',
      text: 'Conserto, solda e pintura em roda de liga-leve em geral.',
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
    },
    {
      id: 2,
      icon: <Balance />,
      title: 'Balanceamento',
      color: 'success',
      text: 'Balanceamento computadorizado de rodas de ferro e liga leve.',
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
    },
    {
      id: 3,
      icon: <Exhaut />,
      title: 'Escapamento',
      color: 'warning',
      text: 'Escapamento de toda linha automotiva original e esportivo.',
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
    {
      id: 4,
      icon: <Balance color="#2643e9" />,
      title: 'Alinhamento',
      color: 'primary',
      text: 'Alinhamento a laser, cambagem e caster.',
      button: 'Saiba mais',
      badges: [],
    },
    {
      id: 5,
      icon: <Suspension color="#1AAE6F" />,
      title: 'Suspensão',
      color: 'success',
      text: 'Manutenção preventiva e corretiva da suspensão do seu carro com peças de primeira linha.',
      button: 'Saiba mais',
      badges: [],
    },
    {
      id: 6,
      icon: <Buffer color="#ff3709" />,
      title: 'Amortecedores',
      color: 'warning',
      text: 'Amortecedores das melhores marcas.',
      button: 'Saiba mais',
      badges: [],
    },
    {
      id: 7,
      icon: <Brake color="#2643e9" />,
      title: 'Freios',
      color: 'primary',
      text: 'Checagem dos seus freios e manutenção.',
      button: 'Saiba mais',
      badges: [],
    },
    {
      id: 8,
      icon: <Clutch color="#1AAE6F" />,
      title: 'Embreagens',
      color: 'success',
      text: 'Rapidez na troca da embreagem do seu carro.',
      button: 'Saiba mais',
      badges: [],
    },
    {
      id: 9,
      icon: <Car color="#ff3709" />,
      title: 'Pneus remoldados',
      color: 'warning',
      text: 'Pneus remoldados da marca Longway com garantia de 1 ano ou 25.000 km direto do fabricante.',
      button: 'Saiba mais',
      badges: [],
    },
    {
      id: 10,
      icon: <FuelInjection color="#2643e9" />,
      title: 'Injeção eletronica',
      color: 'primary',
      text: 'Equipamento da marca Napro para checagem da injeção do seu carro.',
      button: 'Saiba mais',
      badges: [],
    },
  ]

  const [slideSize, setSlideSize] = React.useState()

  React.useEffect(() => {
    setSlideSize(window.innerWidth > 768 ? 3 : 1)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slideSize,
    slidesToScroll: slideSize,
    autoplay: false,
    autoplaySpeed: 5000,
  }

  return (
    <Container className="mt--200">
      <Slider {...settings} className="slider">
        {items.map(((item) => (
          <div key={item.id} style={{ height: '100%', width: '100%' }} className="d-flex flex-1">
            <div style={{ padding: '1rem', height: '100%', width: '100%' }} className="d-flex flex-1">
              <Card className="card-lift--hover border-0 flex-1" style={{ width: '100%', minHeight: '400px', boxShadow: '0px 4px 10px rgba(0,0,0,0.15)' }}>
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
            </div>
          </div>
        )))}
      </Slider>
    </Container>
  )
}

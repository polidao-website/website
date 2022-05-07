import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Headroom from 'headroom.js'
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  // Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap'

import Logo from '../../assets/img/brand/Logo'

export default function Header() {
  const [collapseClasses, setCollapseClasses] = useState('')

  useEffect(() => {
    const headroom = new Headroom(document.getElementById('navbar-main'))
    headroom.init()
    // console.log(document.getElementsByClassName('headroom-pinned'))
  })

  function onExiting() {
    setCollapseClasses('collapsing-out')
  }

  function onExited() {
    setCollapseClasses('')
  }

  return (
    <header className="header-global">
      <Navbar
        className="navbar-main navbar-transparent navbar-light headroom"
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
            <Logo black size={200} white />
          </NavbarBrand>
          <button type="button" className="navbar-toggler" id="navbar_global">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse
            toggler="#navbar_global"
            navbar
            className={collapseClasses}
            onExiting={onExiting}
            onExited={onExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <Logo size={100} />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button type="button" className="navbar-toggler" id="navbar_global">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle nav>
                  <i className="ni ni-ui-04 d-lg-none mr-1" />
                  <span className="nav-link-inner--text">Components</span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-xl">
                  <div className="dropdown-menu-inner">
                    <Media
                      className="d-flex align-items-center"
                      href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                      target="_blank"
                    >
                      <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                        <i className="ni ni-spaceship" />
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          Getting started
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn how to use Argon compiling Scss, change
                          brand colors and more.
                        </p>
                      </Media>
                    </Media>
                    <Media
                      className="d-flex align-items-center"
                      href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                      target="_blank"
                    >
                      <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                        <i className="ni ni-palette" />
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          Foundation
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn more about colors, typography, icons and the
                          grid system we used for Argon.
                        </p>
                      </Media>
                    </Media>
                    <Media
                      className="d-flex align-items-center"
                      href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                      target="_blank"
                    >
                      <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                        <i className="ni ni-ui-04" />
                      </div>
                      <Media body className="ml-3">
                        <h5 className="heading text-warning mb-md-1">
                          Components
                        </h5>
                        <p className="description d-none d-md-inline-block mb-0">
                          Browse our 50 beautiful handcrafted components
                          offered in the Free version.
                        </p>
                      </Media>
                    </Media>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <UncontrolledDropdown nav>
                <DropdownToggle nav>
                  <i className="ni ni-collection d-lg-none mr-1" />
                  <span className="nav-link-inner--text">Examples</span>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/landing-page" tag={Link}>
                    Landing
                  </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    Profile
                  </DropdownItem>
                  <DropdownItem to="/login-page" tag={Link}>
                    Login
                  </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    Register
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <UncontrolledDropdown nav>
                <DropdownToggle nav>
                  <i className="ni ni-collection d-lg-none mr-1" />
                  <span className="nav-link-inner--text">Endereços</span>
                </DropdownToggle>
                <DropdownMenu>
                  <h5 style={{ margin: '1rem' }}>Santo Amaro</h5>
                  <a href="https://goo.gl/maps/GEUVDEKHfj1tZ1C87" target="_blank" rel="noreferrer">
                    <DropdownItem>
                      Av. Washington Luiz, 417
                    </DropdownItem>
                  </a>
                  <h5 style={{ margin: '1rem' }}>Sabará</h5>
                  <a href="https://goo.gl/maps/uN7EM2ZQvk2dnHMw9" target="_blank" rel="noreferrer">
                    <DropdownItem>
                      Rua Monsenhor Alfredo Pereira Sampaio, 40
                    </DropdownItem>
                  </a>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle nav>
                  <i className="ni ni-collection d-lg-none mr-1" />
                  <span className="nav-link-inner--text">Telefones</span>
                </DropdownToggle>
                <DropdownMenu>
                  <h5 style={{ margin: '1rem' }}>Santo Amaro</h5>
                  <a href="tel:551155211093">
                    <DropdownItem>
                      (11) 5521-1093
                    </DropdownItem>
                  </a>
                  <a href="tel:551155211093">
                    <DropdownItem>
                      (11) 5524-5712
                    </DropdownItem>
                  </a>
                  <h5 style={{ margin: '1rem' }}>Sabará</h5>
                  <a href="tel:551155211093">
                    <DropdownItem>
                      (11) 5631-2815
                    </DropdownItem>
                  </a>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="align-items-lg-center" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.facebook.com/polidao.washinton.7"
                  id="tooltip333589074"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Facebook
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip333589074">
                  Nos acompanhe pelo Facebook
                </UncontrolledTooltip>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.instagram.com/polidao"
                  id="tooltip356693867"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Instagram
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip356693867">
                  Nos siga no Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </header>
  )
}

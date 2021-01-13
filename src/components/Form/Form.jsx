import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from 'reactstrap'

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function submitForm() {
    const payload = {
      name,
      email,
      message,
    }
    axios.post('https://app.99inbound.com/api/e/ej76tsWR', payload)
      .then((response) => {
        if (response.status === 200) {
          swal({
            title: 'Muito obrigado!',
            text: 'Entraremos em contato em breve',
            icon: 'success',
            button: 'Fechar',
          })
        } else {
          swal({
            title: 'Ops, tivemos algum problema!',
            text: 'Por favor, entre em contato pelo nosso telefone ou pelo email',
            icon: 'error',
            button: 'Fechar',
          })
        }
      })
  }
  return (
    <section className="section section-lg pt-lg-0 section-contact-us">
      <Container>
        <Row className="justify-content-center mt--300">
          <Col lg="8">
            <Card className="bg-gradient-secondary shadow">
              <CardBody className="p-lg-5">
                <h4 className="mb-1">Quer saber mais?</h4>
                <p className="mt-0">
                  Entre em contato
                </p>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-user-run" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Seu nome"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-4">
                  <Input
                    className="form-control-alternative"
                    cols="80"
                    name="name"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Escreva sua mensagem..."
                    rows="4"
                    type="textarea"
                  />
                </FormGroup>
                <div>
                  <Button
                    block
                    className="btn-round"
                    color="default"
                    size="lg"
                    type="button"
                    onClick={() => submitForm()}
                  >
                    Enviar
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

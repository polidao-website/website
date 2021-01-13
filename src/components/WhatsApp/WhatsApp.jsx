import { UncontrolledTooltip } from 'reactstrap'
import Whats from '../../assets/img/icons/WhatsApp'

export default function WhatsApp() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      right: 0,
      zIndex: 7,
      padding: '1.5rem',

    }}
    >
      <a href="https://api.whatsapp.com/send?phone=5511996382897">
        <div className="whats-button" id="whats">
          <Whats transparent style={{ boxShadow: '0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)' }} size={35} />
        </div>
      </a>
      <UncontrolledTooltip placement="right" target="whats">
        Envie uma mensagem para que possamos te ajudar.
      </UncontrolledTooltip>
    </div>
  )
}

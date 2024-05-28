import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faVk } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Контакты</h1>
      <p>Вы можете связаться со мной следующими способами:</p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          Телефон: <a href="tel:+79043024540">+7 (904) 302-4540</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faVk} className="icon" />
          VK:{' '}
          <a
            href="https://vk.com/sergeydruid"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://vk.com/sergeydruid
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} className="icon" />
          GitHub:{' '}
          <a
            href="https://github.com/SerjGJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/SerjGJ
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          Email:{' '}
          <a href="mailto:kozochkin2000@icloud.com">kozochkin2000@icloud.com</a>
        </li>
      </ul>
    </div>
  )
}

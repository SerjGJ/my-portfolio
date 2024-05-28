import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Обо мне</Link>
        </li>
        <li>
          <Link to="/project">Проект</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}

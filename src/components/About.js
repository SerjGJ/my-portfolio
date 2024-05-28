import './About.css'

export const About = () => {
  return (
    <div className="about">
      <h1>Обо мне</h1>
      <img
        src="/images/sergey.jpg"
        alt="Козочкин Сергей"
        className="profile-photo"
      />
      <p>
        Добрый день! Меня зовут Козочкин Сергей. Я увлеченный и целеустремленный
        frontend-разработчик с хорошим опытом в создании современных и
        интуитивно понятных пользовательских интерфейсов. Моей целью является
        вертикальный рост в профессии и постоянное развитие своих навыков.
      </p>
      <h2>Мои знания в разработке</h2>
      <h3>Frontend</h3>
      <ul>
        <li style={{ animationDelay: '0.2s' }} className="react">
          <strong>React:</strong> создание интерактивных пользовательских
          интерфейсов, управление состоянием с использованием Redux и Context
          API, работа с хуками, маршрутизация с помощью React Router, создание
          компонентов с использованием современных технологий.
        </li>
        <li style={{ animationDelay: '0.4s' }} className="html-css">
          <strong>HTML & CSS:</strong> верстка адаптивных и кроссбраузерных
          интерфейсов, создание анимаций с использованием CSS, HTML и
          JavaScript.
        </li>
        <li style={{ animationDelay: '0.6s' }} className="js">
          <strong>JavaScript:</strong> знания современного JavaScript (ES6),
          работа с асинхронным кодом, использование технологии БЭМ, знание
          приципов ООП, написание чистого и поддерживаемого кода.
        </li>
      </ul>
      <h3>Backend</h3>
      <ul>
        <li style={{ animationDelay: '0.8s' }} className="node">
          <strong>Node.js:</strong> работа с асинхронным кодом, использование
          npm для управления пакетами.
        </li>
        <li style={{ animationDelay: '1s' }} className="express">
          <strong>Express.js:</strong> создание маршрутов, настройка обработки
          запросов и ответов от сервера, обработка middleware.
        </li>
        <li style={{ animationDelay: '1.2s' }} className="mongodb">
          <strong>MongoDB:</strong> создание и управление базами данных с
          помощью MongoDB Compass, выполнение CRUD операций с использованием
          mogoose.
        </li>
      </ul>
    </div>
  )
}

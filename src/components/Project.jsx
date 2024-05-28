import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import './Project.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Project = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  const images = [
    { src: '/images/main.jpg', alt: 'Главная', label: 'Главная' },
    { src: '/images/auth.jpg', alt: 'Авторизация', label: 'Авторизация' },
    { src: '/images/reg.jpg', alt: 'Регистрация', label: 'Регистрация' },
    {
      src: '/images/product.jpg',
      alt: 'Карточка товара',
      label: 'Карточка товара',
    },
    {
      src: '/images/product-edit.jpg',
      alt: 'Добавление или изменение товара',
      label: 'Добавление или изменение товара',
    },
    { src: '/images/basket.jpg', alt: 'Корзина', label: 'Корзина' },
    {
      src: '/images/order1.jpg',
      alt: 'Оформление заказа',
      label: 'Оформление заказа',
    },
    {
      src: '/images/order2.jpg',
      alt: 'Отслеживание заказа',
      label: 'Отслеживание заказа',
    },
    {
      src: '/images/order3.jpg',
      alt: 'Список заказов (для админа)',
      label: 'Список заказов (для админа)',
    },
    {
      src: '/images/users.jpg',
      alt: 'Список пользователей (для админа)',
      label: 'Список пользователей (для админа)',
    },
  ]

  return (
    <div className={`project ${isVisible ? 'visible' : ''}`}>
      <h1>Приложение</h1>
      <p>Интернет магазин видеоигр</p>
      <Slider {...settings} className="slider">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <div className="image-container">
              <img src={image.src} alt={image.alt} className="project-image" />
            </div>
            <p className="image-label">{image.label}</p>
          </div>
        ))}
      </Slider>
      <div className="project-description">
        <p>
          Данное веб-приложение разработано с использованием стека MERN
          (MongoDB, Express.js, React, Node.js). Оно включает в себя функционал
          как для пользователей так и для администратора.
        </p>
        <h3>Для пользователя:</h3>
        <ul>
          <li>Авторизация</li>
          <li>Регистрация</li>
          <li>Добавление товаров в корзину</li>
          <li>Оформление заказов</li>
          <li>Отслеживание статуса заказов</li>
        </ul>
        <h3>Для администратора:</h3>
        <ul>
          <li>Добавление, редактирование, удаление товара</li>
          <li>Просмотр, редактирование роли, удаление пользователей</li>
          <li>Управление статусом заказов</li>
        </ul>
      </div>
      <p className="project-link">
        Вы можете ознакомиться с веб-приложением по ссылке:{' '}
        <a
          href="http://188.225.75.159"
          target="_blank"
          rel="noopener noreferrer"
        >
          Интернет магазин видеоигр
        </a>
      </p>
    </div>
  )
}

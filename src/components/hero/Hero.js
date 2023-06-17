import React from 'react'
import cookies from './assets/images/galletas.png'
import gofre from './assets/images/gofre.png'
import magdalena from './assets/images/magdalena.png'
import './hero.css'

const desings = [
  {
    title: "Strategy",
    content: ["Product Management", "MVP definition", "Product Strategy"],
    link: "/",
    id: 1,
    img: cookies
  },
  {
    title: "Product Management",
    content: ["Product Management", "MVP definition", "Product Strategy"],
    link: "/",
    id: 2,
    img: gofre
  },
  {
    title: "MVP definition",
    content: ["Product Management", "MVP definition", "Product Strategy"],
    link: "/",
    id: 3,
    img: magdalena
  }
]

const Hero = () => {
  return (
    <div>
      <ul>
        {
          desings.map((item) => (
            <li key={item.id}>
              <img src={item.img} alt={item.title} className='listItem'/>
              <h3>{item.title}</h3>
              <a href={item.link}>Read more</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Hero
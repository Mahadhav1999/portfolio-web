import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/portfolio-1.webp'
import IMG2 from '../../assets/portfolio-2.webp'
import IMG3 from '../../assets/portfolio-3.webp'
// import IMG4 from '../../assets/portfolio-4.webp'
// import IMG5 from '../../assets/portfolio-5.webp'
// import IMG6 from '../../assets/portfolio-7.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The BarberShop - Hair Salon Website ',
    github: 'https://github.com/Mahadhav1999',
    demo: 'https://the-barbershop.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Food Ordering Website - Zomato Clone',
    github: 'https://github.com/Mahadhav1999',
    demo: 'https://xometo.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'CRUD Application Using - ReactJS',
    github: 'https://github.com/Mahadhav1999',
    demo: 'https://react-application-crud.netlify.app/'
  }
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Weather+ App Promo Web Exploration',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/17762123-Weather-App-Promo-Web-Exploration'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Hosting Web Landing Page',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/17765649-Hosting-Web-Landing-Page'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Clothing Store Web UI',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/17765321-Clothing-Store-Web-UI'
  // }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className='container portfolio-container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio-item'>
                <div className='portfolio-item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio-item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;
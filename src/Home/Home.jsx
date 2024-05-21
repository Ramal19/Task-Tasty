import { useState } from 'react'
import'./Home.scss'
import { useEffect } from 'react'
import Main from '../Section/Main'
import { Link } from 'react-router-dom'

const Home = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    
    fetch("http://localhost:8000/users").then(res=>res.json()).then(data=>setdata(data))

  }, [])
  

  return (
    <>

        <section className="sectionOne">
          <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp"/>
          <div className="text">
            <h6>ABOUT TASTY</h6>
            <h1>Our chef cooks the most delicious food for you</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </section>

        <section className="sectionTwo">
          <h6>
            OUR MENU
          </h6>
          <h1>
            Discover Our Exclusive Menu
          </h1>

          <div className="btn">
            <button>Main</button>
            <button>Desserts</button>
            <button>Drinks</button>
          </div>

          <div className="dataSection">
            <Main/>
          </div>
          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
          <button className='btnO'><Link to={'/add'} style={{color: '#fff', textDecoration: 'none'}}>Add</Link></button>
        </section>
    </>
  )
}

export default Home
import'./Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="h2">
        <h2>instagram</h2>
      </div>
      <div className="img">
        <img src=""/>
        <img src=""/>
        <img src=""/>
        <img src=""/>
        <img src=""/>
      </div>
      <div className='foot'>
        <div>
          <h1>Tasty</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div>
          <h1>Opening Hours</h1>
          <ul>
            <li>Monday <span>08:30</span></li>
            <li>Tuesday <span>08:30</span></li>
            <li>Wednesday <span>08:30</span> </li>
            <li>Thursday <span>08:30</span></li>
            <li>Friday <span>08:30</span></li>
            <li>Saturday <span>08:30</span></li>
            <li>Sunday <span>08:30</span></li>
          </ul>
        </div>
        <div>
          <h1>Contact Information</h1>
          <ul>
            <li>198 West 21th Street, Suite 721 New York NY 10016</li>
            <li>+ 1235 2355 98</li>
            <li>info@yoursite.com</li>
            <li>email@email.com</li>
          </ul>
        </div>
        <div>
          <h1>Newsletter</h1>
          <>
            <p>Far far away, behind the word mountains, far from the countries.</p>
            <input type='text'/>
          </>
        </div>
      </div>
    </footer>
  )
}

export default Footer
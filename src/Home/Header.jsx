import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <h1>
          Book a table for yourself at a time convenient for
        </h1>

        <div>
          <input placeholder='Name' type="text" />
          <input placeholder='Phone' type="number" />
          <input type="date" />
          <input type="time" />
          <select>
            <option value="">Normal</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <input type="submit" value="Book a table" />
        </div>
    </header>  
    </>
  )
}

export default Header
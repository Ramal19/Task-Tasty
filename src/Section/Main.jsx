import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Main = () => {

    const [data, setdata] = useState([])
  
    useEffect(() => {
      
      fetch("http://localhost:8000/users").then(res=>res.json()).then(data=>setdata(data))
  
    }, [data])

    const deleteData = function (id){

      axios.delete(`http://localhost:8000/users/${id}`)
    }
    
  return (
    <>
        {
            data.map(item=>{
                return(
                  <div className='data' key={item.id}>
                    <div className='div'>
                      <img style={{width: '70px', height: '70px', borderRadius: '9999px'}} src={item.img} />
                      <div>
                        <h1>{item.name}</h1>
                        <p>{item.content}</p>
                      </div>
                      <span>$ {item.price}</span>
                      <button onClick={()=>deleteData(item.id)}>❌</button>
                    </div>
                  </div>
                )
              })
            }
    </>
  )
}

export default Main
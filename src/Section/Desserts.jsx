import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Desserts = () => {

    const [data, setdata] = useState([]);
    const [inpValue, setInpVAlue] = useState("");
    const [cngValue, setCngValue] = useState("normal")
  
    useEffect(() => {
      
      fetch("http://localhost:8000/main").then(res=>res.json()).then(data=>setdata(data))
  
    }, [data])

    const deleteData = function (id){

      axios.delete(`http://localhost:8000/main/${id}`)
    }

    const sortData = () => {

      if (cngValue == "asc") {
        
        return data.toSorted((a, b)=> a.price - b.price)
      }else if ( cngValue == "des"){
        return data.toSorted((a, b)=> b.price - a.price)
      }else{
        return [...data]
      }
    }

    let sortedData = sortData()

    const filterData = sortedData.filter((inf) => inf.name.toUpperCase().startsWith(inpValue.toUpperCase()))
    
  return (
    <div div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
        <input type="text" onInput={(e)=>setInpVAlue(e.target.value)} />
        <select onChange={(e)=>setCngValue(e.target.value)}>
          <option value="normal">Default</option>
          <option value="asc">Artan sira ile</option>
          <option value="des">Azalan sira ile</option>
        </select>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px'}}>
        {
            filterData.map(item=>{
                return(
                  <div className='data' key={item.id}>
                    <div className='div'>
                      <img style={{width: '70px', height: '70px', borderRadius: '9999px'}} src={item.img} />
                      <div>
                        <h1 style={{width: '300px'}}>{item.name}</h1>
                        <p>{item.content}</p>
                      </div>
                      <span style={{width: '45px'}}>$ {item.price}</span>
                      <button onClick={()=>deleteData(item.id)}>❌</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
    </div>
  )
}

export default Desserts
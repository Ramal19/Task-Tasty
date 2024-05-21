import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Add.scss'


const Add = () => {

  const navigate = useNavigate()

    
  const { register,
          handleSubmit,
          reset,
          formState: { errors } 
        }= useForm();

  const onSubmit = data => {

    axios.post("http://localhost:8000/users", data)
    reset()
    navigate('/')
  }



  return (
    <div className='form'>
      <button onClick={()=>navigate(-1)}>Geri</button>

      <form style={{width: '500px', display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Image:
          <input type='file' {...register("img", {required: true})} />
          {errors.img && <span>This field is required</span>}
        </label>
        <label>
          Name:
          <input {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </label>
        
        <label>
          Content:
          <input {...register("content", { required: true })} />
          {errors.content && <span>This field is required</span>}
        </label>

        <label>
          Price:
          <input {...register("price", { required: true })} />
          {errors.price && <span>This field is required</span>}
        </label>

        <input type="submit" />
      </form>
    </div>
  )
}

export default Add
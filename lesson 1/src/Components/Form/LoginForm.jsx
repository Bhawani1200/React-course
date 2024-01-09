import {useState} from 'react'
import './LoginForm.css'
const initialState ={
     username : "",
     password : "",
     email:""
  }

function LoginForm() {
  const [user ,setUser]=useState(initialState);

   const handleChange=(e)=>{
    const {name ,value}=e.target;
   
 setUser({
  ...value ,[name]: value
 })
   }
   const handleSubmit=()=>{
   alert( `username :${user.username} and password :${user.password} and email:${user.email}`);
   }
  return (
    <>
  <div className='login'>
     
     <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username " id="username" value={user.username} onChange={handleChange} />
      </div>
        <div>
        <label htmlFor="username">Email</label>
        <input type="text" name="email " id="email" value={user.email} onChange={handleChange} />
      </div>
        <label htmlFor="password">password</label>
       <input type="text" name="password " id="password" value={user.password} onChange={handleChange} />
       <div className="btn">
       <button>Submit</button>
       </div>
     </form>
     </div>
     </>
  )
}

export default LoginForm;
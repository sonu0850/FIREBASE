import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth' // 1.setup=get auth ko firebase/auth se import krna hai 
import { app } from '../firebase'

const auth = getAuth(app)


const Authication = () => {
    const [email, setemail] = useState("");
    console.log("email", email);
    const [password, setpassword] = useState(""); 
    
    const createUser =()=>{
      createUserWithEmailAndPassword(auth, email, password).then(value=>console.log("value", value))
      console.log("value", value);
    }
   

  return (
    <>

  <div className="singup bg-slate-500 w-1/3 p-5 mx-auto mt-9 flex flex-col items-center justify-evenly h-[300px] ">
  <h1 className='text-3xl font-bold underline '>SIGN UP </h1>
    <form >
        <label htmlFor="email">Email</label>
        <input name='email' type="email" value={email}  onChange={(e)=>setemail(e.target.value)} /> <br />
        <label  htmlFor="password">Password</label>
        <input name='password' className='mt-3 text-center' type="password"  value={password} onChange={(e)=>setpassword(e.target.value)}/>
    </form>

      <button className='bg-blue-300 p-2 rounded-lg' onClick={createUser}>Create User</button>
  </div>
    </>
  )
}

export default Authication

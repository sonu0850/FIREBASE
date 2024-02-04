import React from 'react'
import {getDatabase, ref, set} from 'firebase/database'
import { app } from '../firebase'

const db = getDatabase(app)
const Database = () => {
    const putData =()=>{
        set(ref(db,"user/sonu"),{
          id:1,
          name:"sonu",
          age: 115
        } )
      }
  return (
    <div>
         <button onClick={putData}>put data</button>
    </div>
  )
}

export default Database

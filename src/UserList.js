import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'

export default function UserList() {
    const [list,setList] = useState([])
        useEffect(() => {
      
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setList(res.data))
            .catch(err => alert(err))
          
        }, [])
      

    return (
        <div className="bigcard">
        
       {list.map(el=>
      <div className="cardsimple">
         <div className='content'>
      <h1 >name:{el.name} </h1>
      <p>username : <span>{el.username}</span></p>
      <p>email : <span>{el.email}</span></p>
     
      <p>street: <span>{el.address.street}</span></p>
      <p>suite : <span>{el.address.suite}</span></p>
      <p>city : <span>{el.address.city}</span></p>
      <p>zipcode : <span>{el.address.zipcode }</span></p>
      
      <p>lat : <span>{el.address.geo.lat}</span></p>
      <p>lng : <span>{el.address.geo.lng}</span></p>
      
      <p>phone : <span>{el.phone}</span></p>
      <p>website : <span>{el.website}</span></p>
  
      <p>name: <span>{el.company.name}</span></p>
      
      <p>CatchPhrase : <span>{el.company.catchPhrase}</span></p>
       <p>Bs : <span>{el.company.bs}</span></p> 
       </div>
      </div>
        )}
       
    </div>
  );
}

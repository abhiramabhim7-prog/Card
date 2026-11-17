import React from 'react'


export const Profile =(props) => {
   console.log(props)
  return (
     
  <div className='card'>
    
    <div id='card-body'>
      <h2>{props.profile}</h2>
       <h3> {props.name}</h3>
        <p> ID : {props.id}</p>
       <p> Age :{props.age}</p>
       <p> Email : {props.email}</p>
        <p>Role : {props.role}</p>
        </div>
    

    </div>
    
  )
}



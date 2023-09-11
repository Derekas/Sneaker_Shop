import React from 'react'
async function getUser(id){
   const res= await fetch(`https://reqres.in/api/users/${id}`)
   const data= res.json()
   return data.data
}
async function UserPage({params}) {
    const user= await getUser(params.id)
  return (

    <div className='p-10  rounded-md bg-slate-400'>
        <img className='m-auto my-4' src={user.avatar} alt=''/>
        <h3 className='text-3xl font-bold'>{user.id} {user.first_name} {user.last_name}</h3>
        <p>email: {user.email}</p>
    </div>
  )
}

export default UserPage
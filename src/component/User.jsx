import React, { useState } from 'react'

const User = () => {
    const[userInfo,setUserInfo]=useState({
        username:'',
        email:'',
        password:''
    })

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
    }
    setUserInfo((prev)=>{
        return{...prev,[name]:value}
    })
  return (
    <>
    <form action="">
        <label htmlFor="">User Name</label>
        <input type="text" placeholder='username' name='username' value={userInfo.username}  onChange={handleInput}  /> <br /><br />

        <label htmlFor="">Email</label>
        <input type="email" placeholder='email' name='email'  value={userInfo.email}  onChange={handleInput} /> <br /><br />

        <label htmlFor="">Password</label>
        <input type="password" placeholder='password' name='password' value={userInfo.password}  onChange={handleInput}  /> <br /><br />

        <button >Submit</button>
    </form>
    <p>{` name:${userInfo.username} email:${userInfo.email} password: ${userInfo.password}`}</p>
    </>
  )
}

export default User
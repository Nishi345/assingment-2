import React, {useState,useEffect } from 'react'


function App() {
  const [users,setusers]=useState({});
  const [hasError,setError]=useState();

  useEffect(()=>{
    async function fetchdata(){
    const res=await fetch("https://reqres.in/api/users?page=2/");
    res.json()
        .then(res =>setusers(res))
        .catch(() =>setError());
      
    }
    fetchdata();

  },)
  return (
    <>
        <h1>user data from function component</h1>
        <h3>Result :-</h3>
      

        <div>{JSON.stringify(users)}</div>
        <div>{JSON.stringify(hasError)}</div>


    </>
  )
}

export default App





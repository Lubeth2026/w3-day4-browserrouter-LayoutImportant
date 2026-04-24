
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    if(login){
      navigate("/profile")
    }
  }, [login])

  return(
    <div>
      <button onClick={()=> {
        setLogin(true)
      }}>Login</button>
    </div>
  )
}
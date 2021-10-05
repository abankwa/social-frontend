import React, { useState, useEffect } from 'react'
import { verifyAccessTokenFromCookie } from '../services/authServerAPI'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import Test from '../components/Test'
import { SessionContext } from '../context/SessionContext'


export default function App({ ssrData }) {
  const [session, setSession] = useState("")


  useEffect(() => {

    const data = verifyAccessTokenFromCookie()
    data.then(x => {
      if (x.status === 'success') setSession(x.data)
    })
  }, [])


  return (

    <>
      <SessionContext.Provider value={{ session, setSession }}>
        {!session && <Login />}
        {session && <Dashboard />}
      </SessionContext.Provider>
    </>
  )
}

//NOTE: getServerProps will not send along cookies in fetch requests
export async function getServerSideProps() {
  const ssrData = await verifyAccessTokenFromCookie()
  return { props: { ssrData } }
}

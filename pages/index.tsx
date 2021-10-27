import React, { useState, useEffect, useContext } from 'react'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'
import Test from '../components/Test'
import { SessionContext } from '../context/SessionContext'
import SiteLayout from '../layout/SiteLayout'
import HomeLayout from '../layout/HomeLayout'
import { useRouter } from 'next/router'
import useUser from '../lib/useUser'
import NoLayout from '../layout/NoLayout'
import useUserQuery from '../lib/useUserQuery'
import useMyUser from '../lib/useMyUser'
import { useQuery, useQueryClient } from 'react-query'


export default function App() {

  const router = useRouter()
  //const { data, isLoading, isError } = useUser()
  //const {data, isLoading, isError } = useUserQuery()
  const {data, isLoading, isError } = useMyUser()


  if (isLoading) return <div>loading from index...</div>;
  if (isError) return <div>failed to load</div>;

  if(data.status === 'success')router.push('/home')

  return (

    <>
    {/* no user session, go to login*/}
      {!data.data && <Login />}






      <style jsx>{`     

      `}
      </style>
    </>
  )

}



App.getLayout = function getLayout(page) {

  return (
    <NoLayout>
      {page}
    </NoLayout>
  )
}


// //NOTE: getServerProps will not send along cookies in fetch requests
// export async function getServerSideProps() {
//   const ssrData = await verifyAccessTokenFromCookie()
//   return { props: { ssrData } }
// }
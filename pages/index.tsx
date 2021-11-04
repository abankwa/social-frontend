import React, { useState, useEffect, useContext } from 'react'
import Login from '../components/Login/Login'
import { useRouter } from 'next/router'
import NoLayout from '../layout/NoLayout'
import useMyUser from '../lib/useMyUser'
import {useSelector,useDispatch} from 'react-redux'
import { setUserContext } from '../lib/store/userSlice'



export default function App() {

  const user = useSelector(state => state.userContext)
  const dispatch = useDispatch()
  const router = useRouter()

  const {data, isLoading, isError } = useMyUser()


  if (isLoading) return <div>loading from index...</div>;
  if (isError) return <div>failed to load</div>;


  if(data.status === 'success'){
    dispatch(setUserContext(data))
    router.push('/home')
  }

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

import Home from '../../components/Home/Home'
import SiteLayout from '../../layout/SiteLayout'
import HomeLayout from '../../layout/HomeLayout'
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'
import {useSelector,useDispatch} from 'react-redux'
import { setUserContext } from '../../lib/store/userSlice'


export default function HomePage() {

 
  const router = useRouter()
  const user = useSelector(state => state.userContext)
  const dispatch = useDispatch()
  

  
  //const { data, isLoading, isError } = useUser()
  //const {data, isLoading, isError } = useUserQuery()
  const { data, isLoading, isError } = useMyUser()

  if (isLoading) return <div>loading from index...</div>;
  if (isError) return <div>failed to load</div>;

  //login session not found, redirect to login page
  if (data.status === 'error') router.push('/')

  dispatch(setUserContext(data))

  console.log(data)

  return (

    <>
      {data.data &&
  
            <Home data={data} />
   
      }



      <style jsx>{`
        
        body {
          background-color: green;
        }
        

      `}
      </style>
    </>
  )

}



HomePage.getLayout = function getLayout(page) {

  return (
    <SiteLayout>
    <HomeLayout>
      {page}
    </HomeLayout>
  </SiteLayout>
  )
}


// //NOTE: getServerProps will not send along cookies in fetch requests
// export async function getServerSideProps() {
//   const ssrData = await verifyAccessTokenFromCookie()
//   return { props: { ssrData } }
// }
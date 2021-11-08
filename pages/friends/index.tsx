
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'
import { useSelector, useDispatch } from 'react-redux'
import { setUserContext } from '../../lib/store/userSlice'
import FriendLayout from '../../layout/FriendLayout'
import FriendsHome from '../../components/Friends/FriendsHome'
import SiteLayout from '../../layout/SiteLayout'


export default function FriendHomePage() {


  const router = useRouter()


  //AUTHENTICATE USER
  const { data, isLoading, isError } = useMyUser()

  if (isLoading) return <div>loading from index...</div>;
  if (isError) return <div>failed to load</div>;

  //login session not found, redirect to login page
  if (data.status === 'error') router.replace('/')



  return (

    <>
      <div className="container">
        <FriendsHome />
      </div>


      <style jsx>{`
          .container {
            
        
          }
        
        
        `}</style>

    </>
  )

}


FriendHomePage.getLayout = function getLayout(page) {

  return (
    <SiteLayout>
      <FriendLayout>
        {page}
      </FriendLayout>
    </SiteLayout>
  )
}


// //NOTE: getServerProps will not send along cookies in fetch requests
// export async function getServerSideProps() {
//   const ssrData = await verifyAccessTokenFromCookie()
//   return { props: { ssrData } }
// }
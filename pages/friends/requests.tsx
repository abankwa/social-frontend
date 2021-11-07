
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'
import { useSelector, useDispatch } from 'react-redux'
import { setUserContext } from '../../lib/store/userSlice'
import FriendLayout from '../../layout/FriendLayout'
import FriendsHome from '../../components/Friends/FriendsHome'



export default function FriendRequests() {


  const router = useRouter()
  
  
  //AUTHENTICATE USER
  const { data, isLoading, isError } = useMyUser()
 
  if (isLoading) return <div>loading from index...</div>;
  if (isError) return <div>failed to load</div>;

  //login session not found, redirect to login page
  if (data.status === 'error') router.replace('/')

  
  
  
  return (

    <>
      <div>Friend Requests</div>
    </>
  )

}


FriendRequests.getLayout = function getLayout(page) {

  return (
    <FriendLayout>
      {page}
    </FriendLayout>
  )
}
// @ts-nocheck
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'
import { useSelector, useDispatch } from 'react-redux'
import { setGenContext } from '../../lib/store/genContextSlice'
import FriendLayout from '../../layout/FriendLayout'
import FriendsHome from '../../components/Friends/FriendsHome'
import AllFriendsLayout from '../../layout/AllFriendsLayout'
import { useEffect } from 'react'
import SiteLayout from '../../layout/SiteLayout'
import {BsFillPeopleFill} from 'react-icons/bs'



export default function FriendList() {


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
        <div className="content">
          <div className="icon"><BsFillPeopleFill /></div>
          <div className="text">Select people&apos;s names to preview their profile</div>
        </div>
      </div>


      <style jsx>{`
        .container{
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .content{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .icon{
          font-size: 80px;
          color: gray;
        }

        .text{
          font-size: 20px;
          color: gray;
          font-weight: bold;
        }

        
        
        `}</style>
    </>
  )

}


FriendList.getLayout = function getLayout(page) {

  return (
    <SiteLayout>
      <AllFriendsLayout>
        {page}
      </AllFriendsLayout>
    </SiteLayout>
  )
}

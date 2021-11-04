
import Home from '../../components/Home/Home'
import SiteLayout from '../../layout/SiteLayout'
import HomeLayout from '../../layout/HomeLayout'
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'
import { useSelector, useDispatch } from 'react-redux'
import { setUserContext } from '../../lib/store/userSlice'
import FriendLayout from '../../layout/FriendLayout'


export default function FriendHomePage() {


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



  return (

    <>
      <div className="container">
        <div className="friendRequestContainer">
          <div className="requestHeading">
            <div className="heading"><h3>Friend Requests</h3></div>
            <div className="seeAll">see all</div>
          </div>
          <div className="requestCards">
            card
          </div>
          <div className="seeMore"> See More</div>
        </div>

        <div className="friendSuggestionContainer">
          <div className="suggestionHeading">
            <div className="heading"><h3>People you may know</h3></div>
            <div className="seeAll">see all</div>
          </div>
          <div className="suggestionCards">
            <div>card</div>
          </div>
          <div className="seeMore">
            <div>see  more</div>
          </div>
        </div>
        <div className="friendSuggestionContainer"></div>
      </div>



      <style jsx>{`
        
        .container {
          display: flex;
          flex-direction: column;
          border: solid 1px green;
        }
        .friendRequestContainer {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          border: 1px solid gray;
        }
        .requestHeading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .requestCards {
          display: flex;
          flex-wrap: row;
        }

        .friendSuggestionContainer {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          border: 1px solid gray;
        }
        .suggestionHeading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .suggestionCards {
          display: flex;
          flex-wrap: row;
        }
        .seeMore{
          display: flex;
          height: 30px;
          justify-content: center;
          align-items: center;

        }
        .seeMore:hover{
          background: gray;
          cursor: pointer;
          border-radius: 5px;
        }

      `}
      </style>
    </>
  )

}



FriendHomePage.getLayout = function getLayout(page) {

  return (
    <FriendLayout>
      {page}
    </FriendLayout>
  )
}


// //NOTE: getServerProps will not send along cookies in fetch requests
// export async function getServerSideProps() {
//   const ssrData = await verifyAccessTokenFromCookie()
//   return { props: { ssrData } }
// }
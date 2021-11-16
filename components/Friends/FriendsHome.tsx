// @ts-nocheck
import Home from '../../components/Home/Home'
import { useSelector, useDispatch } from 'react-redux'
import { setUserContext } from '../../lib/store/userSlice'
import FriendLayout from '../../layout/FriendLayout'
import FriendRequestCard from './FriendRequestCard'
import useFetch from '../../lib/useFetch'
import { useState } from 'react'



export default function FriendHomePage() {

    //use this dummy state to force a re-render after a request is accepted or deleted
    const [dummy, setDummy] = useState(false)

    const { fetchData, isFetchError, isFetchLoading } = useFetch('http://localhost:4000/api/friend-requests', 'GET', null, [dummy])

    if (isFetchLoading) return <div>fetching data ...</div>
    if (isFetchError) return <div>error..</div>


    //used by children to force re-render of this component
    const forceRender = () =>{setDummy(!dummy)}


    const element = fetchData.data.map(x => {
        return <FriendRequestCard key={x.userid} friend={x} forceRender={forceRender}/>
    })


    return (

        <>
            <div className="container">
                <div className="friendRequestContainer">
                    <div className="requestHeading">
                        <div className="heading"><h3>Friend Requests</h3></div>
                        <div className="seeAll">see all</div>
                    </div>
                    <div className="requestCards">
                        {element}
                    </div>
                    <div className="seeMore"> See More </div>
                </div>

                <div className="friendSuggestionContainer">
                    <div className="suggestionHeading">
                        <div className="heading"><h3>People you may know</h3></div>
                        <div className="seeAll">see all</div>
                    </div>
                    <div className="suggestionCards">
                        suggestion cards
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
          margin-left: 30px;
          margin-right: 30px;
          
        }
        .friendRequestContainer {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .requestHeading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .requestCards {
          display: flex;
          flex-wrap: wrap;
        }

        .friendSuggestionContainer {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          
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
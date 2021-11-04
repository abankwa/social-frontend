import SiteLayout from "../../layout/SiteLayout"
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'
import FriendProfileLayout from "../../layout/FriendProfileLayout"
import useFetch from '../../lib/useFetch'
import { useSelector } from 'react-redux'



export default function FriendAbout({ query }) {


    //Verify Login status
    const { data, isLoading, isError } = useMyUser()
    const router = useRouter()

    let friendId
    if(JSON.stringify(router.query)!=='{}'){
        friendId = router.query.friendId
    }

    //fetch person or friend data. get friendId slug from SSR context
    //const friendId = useSelector(state => state.friendId.value)
     
    console.log(friendId)


    const { fetchData, isFetchError, isFetchLoading } = useFetch(`http://localhost:4000/api/friend/${friendId}`, 'GET', query,[])
    if (fetchData) console.log(fetchData)

    //check whether data is non-empty else redirect to 404 page. this could happen
    //if the user directly entered a bogus friendId in the URL instead of clicking
    //on a search result.
    if (fetchData) {
        if (fetchData.status == 'success' && fetchData.data.length === 0) {
            console.log('no user found, redirect to 404 page')
            router.push('/404')
        }
    }



    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>failed to load</div>;// TODO: techically login failed hence redirect login page

    //login session not found, redirect to login page
    if (data.status === 'error') router.push('/')



    return (
        <>
            <h2>Friend About</h2>
        </>
    )
}

export async function getServerSideProps() {

    return { props: {} }
}


FriendAbout.getLayout = function getLayout(page) {
    return (
        <SiteLayout>
            <FriendProfileLayout >
                {page}
            </FriendProfileLayout>
        </SiteLayout>
    )
}
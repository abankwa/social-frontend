import SiteLayout from "../../layout/SiteLayout"
import useUser from '../../lib/useUser'
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'
import HomeLayout from "../../layout/HomeLayout"


export default function FriendRequestPage() {

    //Verify Login status
    //const { data, isLoading, isError } = useUser()
    const {data, isLoading, isError } = useMyUser()
  
    const router = useRouter()
    
    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>failed to load</div>;// TODO: techically login failed hence redirect login page

    //login session not found, redirect to login page
    if (data.status === 'error') router.push('/')

    console.log(JSON.stringify(data))
    const {email, firstName, lastName} = data.data
    
    return (
        <>
            <h2>{`${firstName} 's friend requests`}</h2>
        </>
    )
}


FriendRequestPage.getLayout = function getLayout(page) {
    return (
        <SiteLayout>
            <HomeLayout>
                {page}
            </HomeLayout>
        </SiteLayout>
    )
}
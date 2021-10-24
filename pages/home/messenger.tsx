import SiteLayout from "../../layout/SiteLayout"
import useUser from '../../lib/useUser'
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'
import HomeLayout from "../../layout/HomeLayout"


export default function MessengerPage() {

    //Verify Login status
    //const { data, isLoading, isError } = useUser()
    const {data, isLoading, isError } = useMyUser()
  
    const router = useRouter()
    
    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>failed to load</div>;// TODO: techically login failed hence redirect login page

    //login session not found, redirect to login page
    if (data.status === 'error') router.push('/')

    
    
    return (
        <>
            <h2>Welcome to messenger</h2>
            <div>start a conversation</div>
        </>
    )
}


MessengerPage.getLayout = function getLayout(page) {
    return (
        <SiteLayout>
            <HomeLayout>
                {page}
            </HomeLayout>
        </SiteLayout>
    )
}
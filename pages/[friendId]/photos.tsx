import SiteLayout from "../../layout/SiteLayout"
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'
import FriendProfileLayout from "../../layout/FriendProfileLayout"


export default function FriendPhotos() {

    const router = useRouter()
 
    
    //Verify Login status
    //const { data, isLoading, isError } = useUser()
    const {data, isLoading, isError } = useMyUser()
  
    
    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>failed to load</div>;// TODO: techically login failed hence redirect login page

    //login session not found, redirect to login page
    if (data.status === 'error') router.push('/')

    
    
    return (
        <>
            <h2>Friend Photos</h2>
        </>
    )
}


FriendPhotos.getLayout = function getLayout(page) {
    return (
        <SiteLayout>
            <FriendProfileLayout>
                {page}
            </FriendProfileLayout>
        </SiteLayout>
    )
}
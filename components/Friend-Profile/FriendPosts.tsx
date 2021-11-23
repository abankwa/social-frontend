// @ts-nocheck
import SiteLayout from "../../layout/SiteLayout"
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'



export default function FriendPosts() {

    
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
            <h2>Friend Posts</h2>
        </>
    )
}

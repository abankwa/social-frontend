import SiteLayout from "../../layout/SiteLayout"
import NewsLayout from "../../layout/NewsLayout"
import useUser from '../../lib/useUser'
import { useRouter } from 'next/router'
import useMyUser from '../../lib/useMyUser'


export default function NewsPage() {

    //Verify Login status
    const {data, isLoading, isError } = useMyUser()
  
    const router = useRouter()
    
    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>failed to load</div>;// TODO: techically login failed hence redirect login page

    //login session not found, redirect to login page
    if (data.status === 'error') router.push('/')

    
    
    return (
        <>
            <h2>News</h2>
            <div>News page working</div>
        </>
    )
}


NewsPage.getLayout = function getLayout(page) {
    return (
        <SiteLayout>
            <NewsLayout>
                {page}
            </NewsLayout>
        </SiteLayout>
    )
}
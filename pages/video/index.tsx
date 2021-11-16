// @ts-nocheck
import SiteLayout from "../../layout/SiteLayout"
import VideoLayout from "../../layout/VideoLayout"
import useUser from '../../lib/useUser'
import { useRouter } from 'next/router'
import { useEffect } from "react"
import useMyUser from '../../lib/useMyUser'

export default function VideoPage() {

    //const { data, isLoading, isError } = useUser()
    const {data, isLoading, isError } = useMyUser()

    const router = useRouter()

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>failed to load</div>;

    //login session not found, redirect to login page
    if (data.status === 'error') router.push('/')


    return (
        <>
            <h2>Video</h2>
            <div>Video page</div>





            {/* style */}

            <style jsx>{`
                div {
                    background: yellow;
                }           
            `}
            </style>
        </>
    )
}


VideoPage.getLayout = function getLayout(page) {
    return (
        <SiteLayout>
            <VideoLayout>
                {page}
            </VideoLayout>
        </SiteLayout>
    )
}
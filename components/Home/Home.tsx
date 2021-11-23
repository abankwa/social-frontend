// @ts-nocheck
import { signOut } from '../../services/authServerAPI'
import AppNav from '../AppNav'
import useUser from '../../lib/useUser'
import { useRouter } from 'next/router'
import useUserQuery from '../../lib/useUserQuery'
import { useQueryClient } from 'react-query'
import useMyUser from '../../lib/useMyUser'
import useGetPost from '../../lib/useGetPost'
import PostCard from './PostCard'
import CreatePost from './CreatePost'


export default function Home({data}) {

    //const { data, isLoading, isError, mutate } = useUser()
    //const {data, isLoading, isError } =  useMyUser()

    //const queryClient = useQueryClient()


    const { postData, isPostLoading, isPostError } = useGetPost(data)
    const router = useRouter()
    

    //if (isPostLoading) return <div>loading posts ...</div>
    if (isPostError) return <div>loading error</div>

    

    async function handleLogout(e) {
        e.preventDefault()
        const res = await signOut()
        if (res.status === 'success') router.push('/')
    }

    let postList;
    if(!isPostLoading && postData.status === "success"){
         postList = postData.data.map(post => (
            <div key={post.postid} id={post.postid}>
                <PostCard user={data} post={post} />
            </div>
        ))
    } else {
        router.push('/')
    }
    // if (isLoading) return (<div>Loading ..</div>)
    // if (isError) return (<div>something went wrong ...</div>)

    //only get data value after we're sure that data will have a value. ie on
    //the second render pass after promise is resolved.

    return (
        <>
            <div className="container">
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <div>
                    <CreatePost data={data} />
                </div>
                <div>
                    {isPostLoading && <div>loading ..</div>}
                    {postList}
                </div>
            </div>
  





            <style jsx>{`
                
                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;    
                }            
                `}</style>
        </>
    )
}
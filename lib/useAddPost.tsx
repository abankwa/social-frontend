// @ts-nocheck
import useSWR, {useSWRConfig}  from 'swr'



 export default async function useAddPost(post){
    try {
        const raw = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {'Content-Type': 'application/json' },
            credentials: 'include'
        })
        const data = await raw.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
// @ts-nocheck
import useSWR, {useSWRConfig}  from 'swr'

const fetcher = url => fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'  //send httponly cookie
}).then(res => res.json())

export default function useGetPost(user){
    const {data,error,mutate} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/user/${user.data.userId}/posts`,fetcher, {revalidateOnFocus: true})
    //mutate()

    return {
        postData: data,
        isPostLoading: !data && !error,
        isPostError: error,
        mutate: mutate
    }
}
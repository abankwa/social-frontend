import useSWR, {useSWRConfig}  from 'swr'

const fetcher = url => fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'  //send httponly cookie
}).then(res => res.json())

export default function useGetPost(user){
    const {data,error,mutate} = useSWR(`http://localhost:4000/api/user/${user.data.userId}/posts`,fetcher, {revalidateOnFocus: true})
    //mutate()

    return {
        postData: data,
        isPostLoading: !data && !error,
        isPostError: error,
        mutate: mutate
    }
}
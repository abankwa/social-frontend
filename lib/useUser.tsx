
import { useEffect } from 'react'
//import { verifyAccessTokenFromCookie } from '../services/authServerAPI2'
import useSWR, {useSWRConfig}  from 'swr'


const fetcher = url => fetch(url, {
       method: 'GET',
       headers: { 'Content-Type': 'application/json' },
       credentials: 'include'  //send httponly cookie
   }).then(res => res.json())
   

export default function useUser (){
    //const {mutate} = useSWRConfig()
    //mutate('http://localhost:4000/auth/token/verify')
    
    const {data,error,mutate} = useSWR('http://localhost:4000/auth/token/verify',fetcher, {revalidateOnFocus: false})
    mutate()
    // useEffect(() => {
    //     if (!data)return
    // })

    return {
        data: data,
        isLoading: !data && !error,
        isError: error,
        mutate: mutate
    }
}
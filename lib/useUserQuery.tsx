// @ts-nocheck
import { useQuery, useQueryClient } from 'react-query'


const fetcher = async () => {
    const raw = await fetch("http://localhost:4000/auth/token/verify", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'  //send httponly cookie
    })
    const data = await raw.json()
    return data;
}


export default function useUserQuery() {
    console.log('call using query')
    return useQuery('verifylogin',fetcher,{retry: false, refetchOnWindowFocus: false})
}
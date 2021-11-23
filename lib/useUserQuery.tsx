// @ts-nocheck
import { useQuery, useQueryClient } from 'react-query'


const fetcher = async () => {
    const raw = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/verify`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'  //send httponly cookie
    })
    const data = await raw.json()
    return data;
}


export default function useUserQuery() {
    return useQuery('verifylogin',fetcher,{retry: false, refetchOnWindowFocus: false})
}
// @ts-nocheck
import { useState, useEffect } from 'react'


export default function useMyUser() {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()
 

        useEffect(() => {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/verify`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'  //send httponly cookie
            }).then(raw => raw.json())
                .then(data => { setData(data); setIsLoading(false); return })
                .catch(err => { setIsError(true); setError(error); return })
        }, [])
    
        return { data, isError, isLoading };
}

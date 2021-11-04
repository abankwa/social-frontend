import { useState, useEffect } from "react";


export default function useFetch(url, method='GET',body, dependency?) {
    const [isFetchLoading, setIsLoading] = useState(true)
    const [isFetchError, setIsError] = useState(false)
    const [fetchData, setData] = useState("")
    const [error, setError] = useState()
 
        useEffect(() => {
            console.log('fetching ...')
            
            fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include' , //send httponly cookie,
            }).then(raw => raw.json())
                .then(fetchData => { setData(fetchData); setIsLoading(false); return })
                .catch(err => { setIsError(true); setError(error); return })
        }, dependency)
    
        return { fetchData, isFetchError, isFetchLoading };
}


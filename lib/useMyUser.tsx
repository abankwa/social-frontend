import { useState, useEffect } from 'react'


export default function useMyUser() {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()
 

        useEffect(() => {
            fetch("http://localhost:4000/auth/token/verify", {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'  //send httponly cookie
            }).then(raw => raw.json())
                .then(data => { setData(data); setIsLoading(false); return })
                .catch(err => { setIsError(true); setError(error); return })
        }, [])

        
    
        // fetch("http://localhost:4000/auth/token/verify", {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json' },
        //     credentials: 'include'  //send httponly cookie
        // }).then(raw => raw.json())
        //     .then(res => { data = res; isLoading = false; return })
        //     .catch(err => { isError = true; error = err; return })


        // fetch("http://localhost:4000/auth/token/verify", {
        //         method: 'GET',
        //         headers: { 'Content-Type': 'application/json' },
        //         credentials: 'include'  //send httponly cookie
        //     }).then(raw => raw.json())
        //         .then(data => { setData(data); console.log('in effect');setIsLoading(false); return })
        //         .catch(err => { setIsError(true); setError(error);})
    
        return { data, isError, isLoading };
}

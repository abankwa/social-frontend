// @ts-nocheck

export async function signUpWithEmailAndPassword(credentials) {
    try {
        const raw = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/signup`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {'Content-Type': 'application/json' },
            credentials: 'include'
        })
        const data = await raw.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function signInWithEmailAndPassword(credentials) {

    try {
        const raw = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
        const data = await raw.json()
        return data
        
    } catch (error) {
        console.log(error)
    }
}


export function fetcher(url) {
  
         fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'  //send httponly cookie
        }).then(res => res.json())
        
}


export async function verifyAccessTokenFromStorage(accessToken) {

}

export async function signOut(){
    try {
        const raw = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/signout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include'
        })
        const data = await raw.json()
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}
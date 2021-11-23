// @ts-nocheck
export default async function useDeletePost(post){
    try {
        //DELETE POST FROM DB
        const raw = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
            method: 'DELETE',
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
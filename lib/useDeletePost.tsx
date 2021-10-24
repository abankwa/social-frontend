export default async function useDeletePost(post){
    try {
        const raw = await fetch('http://localhost:4000/api/post', {
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
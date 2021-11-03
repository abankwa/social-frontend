
// vanilla fetch with no hooks 

export default async function myFetch(url, method = 'GET', body?) {

    let data
    let error = false
    let loading = false

    try {
        loading = true
        const raw = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
        const res = raw.json()
        data = res
    } catch (error) {
        error = true;
    }

    return { data, error, loading }
}

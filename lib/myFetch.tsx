// @ts-nocheck
// vanilla fetch with no hooks 

export default async function myFetch(url, method = 'GET', body?) {

    console.log('fetching.here..')

    let data
    let error = false
    let loading = false

    try {
        console.log('trying ..')
        loading = true
        const raw = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(body)
        })
        const res = await raw.json()
        data = res
        loading = false
    } catch (err) {
        error = true;
        console.log(err)
    }

    return  [data, error, loading ]
}

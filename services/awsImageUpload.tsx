// @ts-nocheck

//UPLOAD IMAGE TO S3
export default async function uploadImage(image) {
    //TODO: data validation
    if (!image) { console.log('no image'); return null }

    //get signed URL via our server
    try {
        const res1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/put-url`, {
            method: 'GET',
            credentials: 'include'
        })
        const data = await res1.json()

        //early exit
        if (data.status !== 'success') { console.log('error getting signed URL'); return; }

        const signedURL = data.data
        const mediaURL = signedURL.split('?')[0]


        //upload image to s3
        const res2 = await fetch(signedURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'image/jpeg'
            },
            body: image
        })

        //upload successful,  return the image URL. other features eg. post will
        //write this to the database eg. post
        if (res2.status === 200) {
            return mediaURL
        } else {
            return null
        }

    } catch (error) {
        console.log(error)
    }
}


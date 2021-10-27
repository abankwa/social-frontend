import useSWR, { useSWRConfig } from 'swr'
import useAddPost from '../../lib/useAddPost'
import { useRef } from 'react'
import {uploadImage} from '../../services/awsImageUpload'


export default function CreatePost({ data }) {

    const { mutate } = useSWRConfig()
    const refPostText = useRef()
    const mediaRef = useRef()
    const { firstName, lastName, email } = data.data;

    async function handlePost(e) {
        e.preventDefault()

        const mediaURL = await uploadImage(mediaRef.current.files[0])

        //TODO: input validation. verify non-null before committing
        if(!refPostText.current.value && !mediaURL) return;

        const post = {
            personId: data.data.userId,
            postText: refPostText.current.value,
            mediaURL: mediaURL
        }
       
        useAddPost(post)
        mutate(`http://localhost:4000/api/user/${data.data.userId}/posts`)
        refPostText.current.value = "";
    }

    function handleImageUpload(e){

    }


    return (
        <>
            <div className="container">
                <div className="createPost">
                    <div className="txtPost">
                        <input type="textarea" ref={refPostText} className="postText" placeholder={`what's on your mind? ${firstName}..`}></input>
                    </div>
                    <div className="separator"></div>
                    <div className="bottonsContainer">
                        <div className="btnImage items" onClick={handleImageUpload} >image</div>
                        <div className="btnPost items" onClick={handlePost}>post</div>
                    </div>
                </div>
                <input type="file" ref={mediaRef}></input>
            </div>




            <style jsx>{`
                
 
                .createPost {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    width: 550px;
                    border-radius: 5px;
                    height: 100px;
                    box-shadow: 0px 1px 1px lightgray;
                    background-color: white;
                    
                }

                .createPost form {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    
                }

                
                .postText{
                    width: 100%;
                    padding: 10px;
                    border: 1px solid white;
                    border-radius: 10px;
                }

                .bottonsContainer {
                    display: flex;
                    width: 350px;
                    margin-bottom: 6px;
                }

                .items {
                    flex-grow:1;
                    flex-basis: 0;
                    cursor: pointer;
                    height: 35px;
                    border-radius: 5px;  
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: darkgray;
                    font-weight: bold;
                    transition: background 0.25s ease-out;
                }

                .items:hover {
                    background: cornflowerblue;
                    color: white;
                }
                .items:active {
                    box-shadow: 0px 3px 3px lightgray;
                }

                .txtPost {
                    display: flex;
                    justify-content: center;
                    width: 350px;
                }
                .separator {
                    border-bottom: lightgray 1px solid;
                    width: 90%;
                }
                
                `}</style>
        </>
    )
}
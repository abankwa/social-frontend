// @ts-nocheck
import useSWR, { useSWRConfig } from 'swr'
import myAddPost from '../../lib/useAddPost'
import { useRef, useState } from 'react'
import  uploadImage  from '../../services/awsImageUpload'


export default function CreatePost({ data }) {

    const { mutate } = useSWRConfig()
    const refPostText = useRef()
    const mediaRef = useRef()
    const { firstName, lastName, email } = data.data;
    const [iconClass, setIconClass] = useState("noImage")


    async function handlePost(e) {
        e.preventDefault()

        const mediaURL = await uploadImage(mediaRef.current.files[0])

        //TODO: input validation. verify non-null before committing
        if (!refPostText.current.value && !mediaURL) return;

        const post = {
            personId: data.data.userId,
            postText: refPostText.current.value,
            mediaURL: mediaURL
        }

        myAddPost(post)
        mutate(`http://localhost:4000/api/user/${data.data.userId}/posts`)
        refPostText.current.value = "";
    }

    function handleImageUpload(e) {

    }

    function handleFileChange(e) {
        console.log(e.target.value)
        if (e.target.value) setIconClass("yesImage")
        else setIconClass("noImage")
    }


    return (
        <>
            <div className="container">
                <div className="createPost">
                    <div className="txtPost">
                        <div className={`imageIcon ${iconClass}`}></div>
                        <input type="textarea" ref={refPostText} className="postInput" placeholder={`what's on your mind? ${firstName} ${lastName}..`}></input>
                    </div>
                    <div className="separator"></div>
                    <div className="bottonsContainer">
                        <label htmlFor="fileUpload" className="btnImage items"> image</label>
                        <div className="btnPost items" onClick={handlePost}>post</div>
                    </div>
                </div>
                <input type="file" ref={mediaRef} id="fileUpload" onChange={handleFileChange} hidden />
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

                
                .postInput{
                    width: 100%;
                    padding: 10px;
                    border: 1px solid white;
                    border-radius: 10px;
                    flex-basis: auto;
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
                    align-items: center;
                    width: 400px;
    
                }
                .separator {
                    border-bottom: lightgray 1px solid;
                    width: 90%;
                }
                .imageIcon {
                    height: 35px;
                    width: 35px;
                }
                .noImage {
                    background: white;
                }
                .yesImage {
                    background: green;
                }
                
                `}</style>
        </>
    )
}
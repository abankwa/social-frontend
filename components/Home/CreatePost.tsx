import useSWR, {useSWRConfig}  from 'swr'
import useAddPost from '../../lib/useAddPost'
import { useRef } from 'react'


export default function CreatePost({data}){

    const {mutate} = useSWRConfig()
    const refPostText = useRef()
    const { firstName, lastName, email } = data.data;

    function handlePost(e){
        e.preventDefault()
        const post = {
            personId: data.data.userId,
            postText: refPostText.current.value,
            mediaURL: 'someURL' 
        }
        console.log(post)
        useAddPost(post)
        mutate(`http://localhost:4000/api/user/${data.data.userId}/posts`)
    }


    return (
        <>
            <div className="container">
                <div className="createPost">
                    <form>
                        <input type="textarea" ref={refPostText} className="postText" placeholder={`what's on your mind? ${firstName}..`}></input>
                        <button className= "postButton" onClick={handlePost}>post</button>
                    </form>
                </div>
            </div>
  



            <style jsx>{`
                
 
                .createPost {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    border: solid 1px lightgray;
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

                .postButton {
                    width: 60%; 
                    height: 30px;
                    border-radius: 5px;
                    background-color: skyblue;   
                    
                }
                
                .postText{
                    width: 60%;
                    padding: 10px;
                    border: 1px solid white;
                    border-radius: 10px;

                   
                }
                
                `}</style>
        </>
    )
}
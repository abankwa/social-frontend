// @ts-nocheck
import { useRouter } from "next/router"
import { useCallback, useEffect, useRef, useState } from "react";
import { io } from 'socket.io-client'
import myFetch from "../../lib/myFetch";
//import { socket } from "../../lib/socket";
import { v4 as uuidv4 } from 'uuid';
import { setTestMessages } from '../../lib/store/messengerSlice'
import { useSelector, useDispatch } from "react-redux";

//const  socket = io("ws://localhost:4000");

export default function TEST1() {
   
    console.log('top')
    const messages = useSelector(state => state.messengerContext.testMessages)
    const dispatch = useDispatch()
    //const [messages, setMessage] = useState([{ id: uuidv4(), text: 'hello', type: "in"}, {id: uuidv4(), text: 'wassaap' ,type: "out"}])
    const inputRef = useRef()
    const chatBoxRef = useRef()
    const [socket, setSocket] = useState()

    //let socket
    useEffect(() => {
         const socket = io("ws://localhost:4000");
         console.log('connect effect')
         setSocket(socket)
         console.log('after connect effect')
    },[])

    useEffect(() => {
        socket?.on('chat', data => {
            console.log('on effect')
            //setMessage([...messages,data])
            dispatch(setTestMessages(data))
            console.log('after on effect')
        })
    })



   

    function handleSend(e){
        e.preventDefault()
        if(inputRef.current.value){
            const newMessage = {id: uuidv4(),type: 'out',text:inputRef.current.value}
            console.log('before set message')
            //setMessage([...messages,newMessage])
            dispatch(setTestMessages(newMessage))
            console.log('after set message')
            inputRef.current.value = ""
            chatBoxRef.current.scrollTo(0,chatBoxRef.current.scrollHeight)

            socket?.emit('chat', newMessage)
        }
        console.log(socket)    
    }

 
   

    const element = messages.map( message => message.type === 'in' ? <InMessage key={message.id} data={message} /> : <OutMessage key={message.id} data={message} />)

    console.log('render')
    return (

        <>
            <div className="container">
                <div className="room">room:<input type="text"></input></div>
                <div className="chatWindow">
                    <div className="chatbox" ref={chatBoxRef}>
                        <div className="space"></div>
                        {element}
                    </div>
                    <div className="inputBox">
                        <input type="text" ref={inputRef}></input>
                        <button onClick={handleSend}>send</button>
                    </div>
                </div>
            </div>


            <style jsx>{`
                .container {
                    width: 100vw;
                    height: 100vh;
                    background: lightgray;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .chatWindow {
                    width: 300px;
                    height: 300px;
                    background: gray;
                    display: flex;
                    flex-direction: column;
                }
                .chatbox {
                    background: white;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    overflow-y: scroll;
                   
                }
                .space{
                    flex:1;
                }
                .inputBox{
                    display: flex;
                    justify-content: space-between;
                }
                .txtInput{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
                
                
            `}</style>
        </>
    )
}


function InMessage({data}) {

    return (
        <>
            <div className="inMessage" >
                <div className="text">{data.text}</div>
            </div>



        <style jsx>{`
            
                .inMessage{
                    display: flex;
                    justify-content: flex-start;
                    margin-bottom: 5px;
                }
                .inMessage > div {
                    background: lightgray;
                    border-radius: 5px;
                    padding: 3px;
                }
        
        `}</style>
        </>
    )
}


function OutMessage({data}) {

    return (
        <>
            <div className="outMessage" >
                <div className="text">{data.text}</div>
            </div>



        <style jsx>{`
            
                .outMessage{
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 5px;
                }
                .outMessage > div {
                    background: blue;
                    border-radius: 5px;
                    padding: 3px;
                    color: white;
                }
        
        `}</style>
        </>
    )
}
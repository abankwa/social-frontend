// @ts-nocheck
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { io } from 'socket.io-client'
import myFetch from "../../lib/myFetch";
import { socket } from "../../lib/socket";

export default function TEST1() {

    let x = []
    const [chat, setChat] = useState([])
    //let socket = io("http://localhost:4000",{transports: ['websocket'], upgrade: false});

   console.log('rendering...')
         
    





    function handleClick() {
        socket.emit('chat', 'yolo')
    }

    function click2() {
        myFetch('http://localhost:4000/chat', 'GET')
    }

    if (socket) {
        socket.on("chat", data => {
            console.log(data);
            //x.push(data)
            
        })
    
    }

   


    const element = chat.map(x => {
        return <div key={Date()}>{x}</div>
    })

    return (

        <>
            <div>test id bitches</div>

            <button onClick={handleClick}>send</button>
            <button onClick={click2}>test</button>
            <div>{element}</div>

        </>
    )
}
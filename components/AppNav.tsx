//@ts-nocheck
import React, { useEffect } from 'react'
import { IoNotifications } from 'react-icons/io5'
import { BsFillChatSquareTextFill, BsSearch, BsPeople, BsNewspaper, BsCameraVideo } from 'react-icons/bs'
import { GrHomeRounded } from 'react-icons/gr'
import { AiFillMessage } from 'react-icons/ai'
import { MdOutlineExpandMore } from 'react-icons/md'
import Link from 'next/link'
import SearchBar2 from './Home/SearchBar2'
import { useRouter } from 'next/router'
import useMyUser from '../lib/useMyUser'
import { setUserContext } from '../lib/store/userSlice'
import { useDispatch } from 'react-redux'


export default function AppNav() {
    const dispatch = useDispatch()

    const router = useRouter()
    const { data, isLoading, isError } = useMyUser()

    //store user context to be used by all components
    //use effect prevents race condition. ensures AppNav finishes rendering before dispatching 
    //context
    useEffect(() => {
        if(data) dispatch(setUserContext(data.data))
    },[data])



    if (isLoading) return <div>loading from index...</div>;
    if (isError) return <div>failed to load</div>;

    //login session not found, redirect to login page
    if (data.status === 'error') router.push('/')
    
    
    return (
        <>
            <div className="container">
                <div className="leftHeader">

                    <div className="searchBar">
                        <SearchBar2 />
                    </div>
                </div>
                <ul className="middleHeader">
                    <Link href="/home"><li className="midItem"><a ><GrHomeRounded size="25px" /></a></li></Link>
                    <Link href="/friends"><li className="midItem"><a ><BsPeople size="25px" /></a></li></Link>
                    <Link href="/video"><li className="midItem"><a ><BsCameraVideo size="25px" /></a></li></Link>
                    <Link href="/news"><li className="midItem"><a ><BsNewspaper size="25px" /></a></li></Link>
                </ul>
                <ul className="rightHeaderContainer">
                    <div className="rightHeader">
                        <Link href="#"><li className="rightItem"><a><AiFillMessage size="25px" /></a></li></Link>
                        <Link href="#"><li className="rightItem"><a><IoNotifications size="25px" /></a></li></Link>
                        <Link href="#"><li className="rightItem"><a><MdOutlineExpandMore size="25px" /></a></li></Link>
                    </div>

                </ul>
            </div>




            {/* STYLE */}

            <style jsx>{`

                .container {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    align-items: center;
                    height: 65px;
                    position: sticky;
                    top: 0px;
                    background-color: white;
                    border-bottom: 1px lightgray solid;
                    z-index: 9999;
                    }

                     .rightHeader, .middleHeader {
                    
                    list-style-type: none;
                    margin: 0;
                    padding: 0;

                    }

                    .leftHeader {
                    display: flex;
                    align-items: center;
                    width: 250px;
                    height: 50px;
                    
                    }

                    .logo {
                        border: solid gray 1px;
                        border-radius: 50%;
                        height: 40px;
                        width: 40px;
                        display: inline-block;
                    }
                    .searchBar {
                        width: 100%;
                        height: 100%;
                    }

                    .middleHeader {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    width: 500px;
                    }
                    .midItem{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                    .midItem:hover{
                        background: lightslategrey;
                    }
                    .rightHeaderContainer {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        width: 250px;
                    }
                    .rightHeader {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        width: 180px;
                    
                    }
                    .rightItem{
                        width: 45px;
                        height: 45px;
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        background: #F0F2F9;;
                        
                    }

                    .rightItem:hover {
                        filter: brightness(80%)
                    }

                    .middleHeader li {
                        padding: 10px;
                        border-radius: 5px;
                        flex-basis: 0;
                        flex-grow: 1;
                    }

                    .rightHeader li {
                        padding: 5px;
                    }


                `}
            </style>
        </>
    )
}


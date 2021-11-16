// @ts-nocheck
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setGenContext } from '../lib/store/genContextSlice'
import AllFriendsCard from "../components/Friends/AllFriendsCard"
import useFetch from "../lib/useFetch"
import {BsArrowLeft,BsSearch} from 'react-icons/bs'
import Link from 'next/link'

export default function AllFriendsLeftNav() {

    const router = useRouter()
    //initial fetch on page load to populate friend list; only once
    const {fetchData, isFetchError, isFetchLoading} = useFetch('http://localhost:4000/api/friends','GET', null,[])

    //data for friend search
    const [isLoading, setIsLoading] = useState()
    const [isError, setIsError] = useState()
    const [data, setData] = useState()

    const [isSearching, setIsSearching] = useState(false)

    if(isFetchError)return <div>error..</div>
    if(isFetchLoading)return <div>loading..</div>



    const friendsList = fetchData.data.map((friend) => {
        return <AllFriendsCard key={friend.userid} friend={friend}/>
    })

    
    //friend search
    async function handleFriendSearch(e){

        let searchKey = e.target.value.trim()


        if (searchKey) {
            //when the user starts searching, render the live searchList in place of the initial friendlist.
            setIsSearching(true)
            
            searchKey = searchKey.toLowerCase()
            try {
                setIsLoading(true)
                const raw = await fetch(`http://localhost:4000/api/friend-search/${searchKey}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',

                })

                const data = await raw.json()
                setData(data)
                setIsLoading(false)
            } catch (error) {
                setIsError(true)
                setIsLoading(false)

            }
        } else {
            setData("") //clear search after deletion textbox entries
            setIsSearching(false) //render the initial friend list instead of searchlist.
        }

    }


    let searchList
    if (data && data.status === 'success') {
        searchList = data.data.map(friend => (
            <AllFriendsCard key={friend.userid} friend={friend} />
        ))
    }


    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="arrow">
                        <Link href="/friends"><a ><BsArrowLeft size="25px" color='gray'/></a></Link>
                    </div>
                    <div className="friendsText">
                        <div style={{color: 'gray',fontSize: '13px'}}>Friends</div>
                        <div style={{fontSize: '20px', fontWeight:'bold'}}>All Friends</div>
                    </div>
                </div>
                <div className="contentBox">
                    <div className="search">
                        <div className="icon"><BsSearch size='20px'color='gray'/></div>
                        <div className="text"><input type="text" placeholder="Search Friends" onChange={handleFriendSearch}></input></div>
                    </div>
                    <div className="resultBox">
                        <div className="count">698 Friends</div>
                        {isSearching ? searchList: friendsList}
                    </div>
                </div>
            </div>



            <style jsx>{`
                
                .container {
                    width: 300px;
                    height: 100%;
                    overflow: scroll;
                    background: white;
                    padding-left: 10px;
                    box-sizing: content-box;
                    border-right: lightgray solid 1px;

                }

                .header{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    position: fixed;
                    z-index: 12;
                    width: 300px;
                    height: 80px;
                    background: white;
                }
                .arrow {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .friendsText {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 20px;

                }

                .contentBox {
                    position: relative;
                    top: 100px;
                    z-index: 0;
                }
                
                .search{
                    display: flex;
                    margin-bottom: 15px;
                    border-bottom: 1px lightgray solid;
                    margin-right: 5px;
                    padding-bottom: 10px;
                }
                .text{
                    margin-left: 5px;
                    
                }
                .text > input {
                    border: none;
                    outline: none;
                    
                }
                .count {
                    margin-bottom: 10px;
                    font-weight: bold;
                }
                
                `}</style>
        </>
    )
}
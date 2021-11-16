// @ts-nocheck
import SearchResultItem from "./SearchResultItem"
import { useState, useRef, useEffect } from "react";
import { RenderCounter, MyRef } from "../../lib/search";


export default function SearchBar() {



    const [isLoading, setIsLoading] = useState()
    const [isError, setIsError] = useState()
    const [data, setData] = useState()
    const [showPadding, setShowPadding] = useState(false)
    const [showSearchList, setShowSearchList] = useState(false)
    const inputRef = useRef("")

    //when input box is focused, show both padding and search result list.
    const handleFocus = () => { setShowPadding(true); setShowSearchList(true) }

    useEffect(() => {

        //whiles the searchlist and padding are showing, if we click anywhere 
        //other than the input box, hide the search result and padding.
        function hideSearchResult(e) {
            if (inputRef.current !== e.target) {
                setShowPadding(false)
                setShowSearchList(false)
            }
        }

        //when padding is visible, start listening for clicks
        if (showPadding) window.addEventListener('click', hideSearchResult)
    })

    async function handleLiveSearch(e) {
        let searchKey = e.target.value.trim()

        if (searchKey) {
            searchKey = searchKey.toLowerCase()
            try {
                setIsLoading(true)
                const raw = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/live-search/${searchKey}`, {
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
                console.log(error)
            }
        } else setData("") //clear search after deletion textbox entries

    }



    let searchList
    if (data && data.status === 'success') {
        searchList = data.data.map(item => (
            <div key={item.userid}><SearchResultItem item={item} /></div>
        ))
    }

    return (
        <>
            <div className="container">
            <div className={`content ${showPadding ? 'contentActive' : ""}`}>
                    <div className="logo"></div>
                    <div className="txtDiv ">
                        <input type="text" ref={inputRef} placeholder="search" className={`txtSearch `} onChange={handleLiveSearch} onFocus={handleFocus}></input>
                        {showSearchList && searchList}
                        {isLoading && <div>loading..</div>}
                        {showPadding && <div className="padding"></div>}
                    </div>


                </div>

            </div>





            <style jsx>{`
            
            .container {
                
                width: 10px;
                height: 10px;
                position: relative;
                border: green solid 1px;
            }
            .content {
                margin-left: 10px;
                padding-top: 10px;
                padding-bottom: 10px;
                position: absolute;
                top: -30px;
                left: -10px;
                width: 350px;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                transition: transform  0.5s;
                display: flex;
                z-index: 99999;
                background: white;
            }

            .txtSearch{
                height: 40px;
                border-radius: 20px;
                border: none;
                background: #F0F2F5;
                padding: 20px;
                box-sizing: border-box;
                width: 250px;
                outline: none;
                transition: transform  0.5s;
                
            }
            .contentActive{
                box-shadow: 0px 12px 12px 12px rgba(0,0,0,.3);
             
            }
            .txtDiv{
             width: 100%;
             margin-right: 7px;
             
            }
            .logo{
                height: 40px;
                width: 40px;
                border-radius: 50%;
                background: blue;
            }
           
           .padding {
               height: 20px;
           }

            `}

            </style>
        </>





    )
}
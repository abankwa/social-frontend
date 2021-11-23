// @ts-nocheck
import SearchResultItem from "./SearchResultItem"
import { useState, useRef, useEffect } from "react";
import { BsSearch } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { setGenContext } from '../../lib/store/genContextSlice'

export default function SearchBar2() {


    const [visibility, setVisibility] = useState("hideSearch")
    const inputRef = useRef()
    const searchRef = useRef()

    const [isLoading, setIsLoading] = useState()
    const [isError, setIsError] = useState()
    const [data, setData] = useState()




    //show the search box if we click the search button
    function handleSearchClick() {
        window.addEventListener('click', handleWindowClick)
        setVisibility("showSearch")
        inputRef.current.focus()
    }

    //hide the search box if we click outside the input box and search botton
    function handleWindowClick(e) {
        if ((e.target !== inputRef.current) && (e.target !== searchRef.current)) {
            setVisibility("hideSearch")
            window.removeEventListener('click', handleWindowClick)
        }
    }


    //Handle Live search
    async function handleLiveSearch(e) {
        let searchKey = e.target.value.trim()

        if (searchKey) {
            searchKey = searchKey.toLowerCase()
            try {
                setIsLoading(true)
                const raw = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/global-search/${searchKey}`, {
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
                <div className="searchContainer item">
                    <div className={`searchBox ${visibility}`} >
                        <div className="inputBox">
                            <div className="back"></div>
                            <input type="text" className="txtBox" ref={inputRef} onChange={handleLiveSearch}></input>
                        </div>
                        <div className="searchResults"> {searchList}</div>
                        <div className="padding">{isLoading && 'loading'}</div>
                        <div className="padding">&nbsp;</div>
                    </div>
                </div>
                <div className="logo"></div>
                <div className="searchIcon" onClick={handleSearchClick} >
                    <div onClick={handleSearchClick} ref={searchRef}><BsSearch size="22px" className="fa" onClick={handleSearchClick} /></div>
                </div>
            </div>




            <style jsx>{`
            .container{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }

            .logo,.searchIcon{
                width: 40px;
                height: 40px;
                border: 1px solid lightgray;
                border-radius: 50%;
                margin-left: 5px;
            }
            .searchIcon{
                background: #F0F2F5; 
            }
            .fa{
                pointer-events: none;
                font-size: 
            }
            .searchIcon > div {
                
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transform: translateZ(20px)
            }

            .searchContainer {
                display: relative;
                border: 1px solid green;
            }

            .searchBox{
                position: absolute;
                width: 340px;
                z-index: 10;
                top: 0px;
                left: 0px;
                background: white;
                border-radius: 0px 0px 5px 5px;
                box-shadow: 0px 0px 12px 4px rgba(0,0,0,.3);
                
            }

            .inputBox{
                height: 65px;
                width: 100%;
                display: flex;
                /*justify-content: flex-start;*/
                justify-content: space-between;
                align-items: center;
            }
            .back{
                height: 40px;
                width: 40px;
                background: gray;
                border-radius: 50%;
                margin-left: 5px;
            }
            .txtBox{
                height: 40px;
                border-radius: 20px;
                width: 250px;
                padding: 5px;
                padding-left: 10px;
                padding-right: 10px;
                margin-right: 10px;
                border: none;
                background: #F0F2F5;
                outline: none;
                border: 1px solid lightgray;
                
                
            }
            .showSearch{
                opacity: 1;
                /*transform: translateY(0px);
                transition: opacity 0.4s ease, transform 0.4s ease;*/ 
            }
            .showSearch .txtBox{
                width: 280px;
                transition: width 0.1s ease;
            }
            .hideSearch{
                opacity: 0;
                pointer-events: none;
                /*transform: translateY(20px)*/
                

            }
            
            `}</style>
        </>
    )
}
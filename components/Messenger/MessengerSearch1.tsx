// @ts-nocheck
import MessengerSearchItem from "./MessengerSearchItem"
import { useState } from "react"

export default function MessengerSearch1(){

    const [isLoading, setIsLoading] = useState()
    const [isError, setIsError] = useState()
    const [data, setData] = useState()

  //Handle Live search
    async function handleLiveSearch(e) {
        let searchKey = e.target.value.trim()

        if (searchKey) {
            searchKey = searchKey.toLowerCase()
            try {
                setIsLoading(true)
                const raw = await fetch(`http://localhost:4000/api/global-search/${searchKey}`, {
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
            <div key={item.userid}><MessengerSearchItem item={item} /></div>
        ))
    }



    return (
        <>
            <div className="container">
                <input type="text" placeholder="search friend" className="txtInput" onChange={handleLiveSearch}></input>
                <div className="searchResult">
                    {searchList}
                </div>
            </div>


    



            <style jsx>{`
                .container{
                    position: relative;
                }

                .searchResult{
                    position: absolute;
                    width: 200px;
                    border: green 1px solid;
                }

                .txtInput {
                    padding: 10px;
                    border: none;
                    outline: none;
                }
                
            
            `}</style>
        </>
    )
}
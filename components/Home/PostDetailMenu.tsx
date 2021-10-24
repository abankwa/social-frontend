import { useState, useRef, useEffect } from "react";
import { useSWRConfig } from "swr";
import useDeletePost from "../../lib/useDeletePost";

export default function DropdownMenu({user,post}) {
    const {mutate} = useSWRConfig()
    const dropdownRef = useRef(null)
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const toggleDropdown = () => { setIsDropdownActive(!isDropdownActive) }

    useEffect(() => {
        const handleWindowClick = (e) => {
            console.log(e.target)
            //hide dropdown after we click outside or make make a selection
            if(dropdownRef.current !== null && (!dropdownRef.current.contains(e.target) || dropdownRef.current.contains(e.target)) ) {
                setIsDropdownActive(!isDropdownActive)
            }
        }

        //when dropdown is open, start listening for clicks on the page
        if(isDropdownActive) window.addEventListener('click',handleWindowClick)

        //remove event listeners when dropdown is closed
        return () => {window.removeEventListener('click', handleWindowClick)}
    },[isDropdownActive])

    function handleDeletePost(){
        console.log(JSON.stringify(post))
        useDeletePost(post)
        mutate(`http://localhost:4000/api/user/${user.data.userId}/posts`)
    }

    function handleEditPost(){
        console.log(JSON.stringify(user))
    }

    return (
        <>
            <div className="menuContainer">
                <div className="menuTrigger" onClick={toggleDropdown}>...</div>
                <ul ref={dropdownRef} className={`menu ${isDropdownActive ? 'active' : 'inactive'}`}>
                    <li onClick={handleDeletePost}>delete post</li>
                    <li onClick={handleEditPost}>edit post</li>
                </ul>
            </div>



            <style jsx>{`
                .menuContainer {
                    position: relative;
                }
                .menuContainer ul {
                    padding: 0px;
                    
                }

                .menu {
                    position: absolute;
                    background: white;
                    border-radius: 5px;
                    width: 90px;
                    top: -60px;
                    transform: translateY(20px);
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.4s ease, transform 0.2s ease;
                    box-shadow: 0px 1px 5px rgba(0,0,0,0.4);
                    
                }

                .menu.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0px);
                }
                .menu li {
                    list-style: none;
                    font-size: small;
                    line-height: 20px;
                    padding-left: 5px;
                    color: gray;
                    cursor: pointer;
                }

                .menu li:hover {
                    color: black;
                }
                .menuTrigger {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    vertical-align: middle;
                    border: solid magenta 1px;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;    
                    text-align: center; 
                }
                .menuTrigger:hover{
                    background: lightgray;
                    cursor: pointer;
                }


                `}
            </style>

        </>
    )
}
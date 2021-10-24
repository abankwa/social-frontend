import { useState, useRef, useEffect } from "react";

export default function DropdownMenu() {
    const dropdownRef = useRef(null)
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const toggleDropdown = () => { setIsDropdownActive(!isDropdownActive) }

    useEffect(() => {
        const handleWindowClick = (e) => {
            console.log(e.target)
            if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsDropdownActive(!isDropdownActive)
            }
        }

        //when dropdown is open, start listening for clicks on the page
        if(isDropdownActive) window.addEventListener('click',handleWindowClick)

        //remove event listeners when dropdown is closed
        return () => {window.removeEventListener('click', handleWindowClick)}
    },[isDropdownActive])


    return (
        <>
            <div className="menuContainer">
                <button className="menuTrigger" onClick={toggleDropdown}>detail</button>
                <ul ref={dropdownRef} className={`menu ${isDropdownActive ? 'active' : 'inactive'}`}>
                    <li><a href="#">item1</a></li>
                    <li><a href="#">item2</a></li>
                    <li><a href="#">item3</a></li>
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
                    background: green;
                    width: 150px;
                    top: 10px;
                    transform: translateY(-20px);
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
                }
                .menuTrigger:hover {
                    background: skyblue;
                }


                `}
            </style>

        </>
    )
}
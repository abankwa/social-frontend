
import Link from 'next/link'
import DropdownMenu from '../components/Home/DropdownMenu'
import { useRef,useState } from 'react'
import uploadImage from '../services/awsImageUpload'

export default function Test() {

    const fileRef = useRef(null)
    const [state, setState] = useState()

    async function handleFileUpload(e){
        e.preventDefault()
       // console.log(fileRef.current.files[0])
       const mediaURL = await uploadImage(fileRef.current.files[0])
       console.log(fileRef.current.files[0])
        setState(mediaURL)
    }
    return (
        <>

            <div className="nav">

                <div className="navMenu">
                    <DropdownMenu />
                    <div className="home">
                        <div><a href="#">Home</a></div>
                    </div>
                    <div className="servicesContainer">
                        <button className="services">Services</button>
                        <ul className="servicesMenu">
                            <li><a href="/">Shopping</a></li>
                            <li><a href="#">Xbox</a></li>
                            <li><a href="#">PS5</a></li>
                            <li><a href="#">OCulus</a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <div><a href="#">Contact</a></div>
                    </div>

                </div>
            </div>
            <div className="bodyNav">
                <div className="leftNav">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.
                    </p>
                </div>
                <div className="container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.
                    </p>
                </div>
                <div className="rightNav">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat maecenas. Aliquam id diam maecenas ultricies mi eget. Augue interdum velit euismod in pellentesque. Nisi vitae suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis. Nunc eget lorem dolor sed viverra ipsum nunc. Diam sit amet nisl suscipit adipiscing bibendum. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur. Vulputate eu scelerisque felis imperdiet proin fermentum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Semper risus in hendrerit gravida. Ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum velit laoreet id.
                    </p>
                </div>
            </div>
            <DropdownMenu />
            <div className="modalContainer">
                <div className="modal">
                    inside modal
                </div>
            </div>
            <div className="flexTest">
                <div className="flexItem">testing</div>
                <div className="flexItem">another test longer</div>
            </div>

            <div>
                <input type="file" ref={fileRef}></input>
                <button onClick={handleFileUpload}>upload file</button>
                <img className="image" src={state}></img>
            </div>
            
            <div className="footer">

            </div>




            {/* STYLE */}
            <style jsx>{`
                    .item1{
                        background: magenta;
                        position: relative;
                    }
                    .item2{
                        background: green;
                        position: fixed;
                        top: 0px;
                    }

                    .bodyNav{
                        display: flex;
                        overflow: hidden;
                        height: calc(100vh - 50px);
                        width: 100%;
                        
                      
                    }

                    .leftNav, .rightNav, .container {
                        border: solid 1px gray;
                        overflow: scroll;
                        border-radius: 10px;
                        margin: 0px;
                    }
                 
                    

                    .nav {
                        display: flex;
                        justify-content: center;
                        height: 50px;
                        border: solid 1px lightgray;
                        position: sticky;
                        top: 0px;
                        background: white;
                    }
                    .navMenu {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 600px;
                    }



                    .servicesContainer{
                        
                        display: flex;
                        flex-direction: column;
                        position: relative;
                        padding: 0px;
                        
                        
                        
                    }

                    .home {
                        border: solid green 1px;
                    }
                    .servicesMenu {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        list-style: none;
                        padding: 0;
                        position: absolute;
                        margin-top: 20px;
                        border: solid lightgray 1px;
                        width: 200px;
                        height: 150px;
                        background: lightgray;
                        border-radius: 5px;
                        opacity: 0;
                        pointer-events: none;
                        transition: all 0.1s ease;
                        transform: translateY(0px);
                        
                        
                    }
                    
                    .servicesMenu li{
                        display: flex;
                        align-items: center;
                        height: 100%; 
             
                    }

                    .servicesMenu li:hover {
                        background: blue;
                    }

                    .servicesMenu a{
                        background: yellow; 
                        width: 100%;
                    }

                    .services {
                        border: solid lightgray 1px;
                        
                        
                    }

                    .services:focus + .servicesMenu {
                        opacity: 1;
                        pointer-events: all;
                        transform: translateY(0px);
                        transition: all 0.3s ease;
                        
                    }

                    .modalContainer {
                        position: fixed;
                        width: 100%;
                        height: 100%;
                        top: 0px;
                        left: 0px;
                        background: rgba(0, 0, 0, 0.6);
                        display: flex;
                        justify-content: center;
                        align-items: center;  
                        visibility: hidden;
                        
                    }

                    .modal {
                        width: 300px;
                        height: 300px;
                        background: yellow;
                        opacity: 1;
                        
                    }
                    
                    .flexTest {
                        width: 300px;
                        display: flex;
                        
                        border: solid magenta 1px;
                    }

                    .flexItem {
                        border: 1px solid lightgray;
                        flex-grow: 1;
                        flex-basis: 0;
                        
                    }

                    .image {
                        width: 60px;
                        height: 60px;
                    }

                `}
            </style>
        </>
    )
}
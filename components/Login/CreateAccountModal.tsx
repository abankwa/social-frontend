import router from "next/router"
import { useState,useRef } from "react"
import {signUpWithEmailAndPassword} from '../../services/authServerAPI'

export default function CreateAccountModal({handleCloseModal, showModal}) {
    const [signUpError, setSignUpError] = useState("")
    const refFirstName = useRef()
    const refLastName = useRef()
    const refEmail = useRef()
    const refPassword = useRef()

    async function handleSignUp(e){

        //TODO: Data validation before posting to server
        e.preventDefault()
        const credentials = {
            email: refEmail.current.value,
            password: refPassword.current.value,
            firstName: refFirstName.current.value,
            lastName: refLastName.current.value
        }
        const data = await signUpWithEmailAndPassword(credentials)


        if(data.status === 'success') router.push('/home')
        else setSignUpError("an error occured")

        console.log(data)

        refEmail.current.value = ""
        refPassword.current.value = ""
        refFirstName.current.value = ""
        refLastName.current.value = ""
    }

    function handleCloseClick(e){
        //cleanup before closing modal
        refEmail.current.value = ""
        refPassword.current.value = ""
        refFirstName.current.value = ""
        refLastName.current.value = ""
        setSignUpError("")


        handleCloseModal(e)

    }

    return (
        <>
            <div className={`modalContainer ${showModal ? 'showModal' : 'hideModal'}`}>
                <div className="modal">
                    <button className="btnClose" onClick={handleCloseClick}>close</button>
                    <div className="signUp"><h1>Sign Up</h1></div>
                    <form className="accountForm">
                        <div className="fullName">
                            <input type="text" ref={refFirstName}  className="inputText firstName" placeholder="first name"></input>
                            <input type="text" ref={refLastName} className="inputText lastName" placeholder="last name"></input>
                        </div>
                        <input type="text" ref={refEmail} className="inputText" placeholder="email"></input>
                        <input type="password" ref={refPassword} className="inputText" placeholder="new password"></input>
                        <div className="gender">
                            <span datatype="radio" className="radGender">
                                <span className="genderOption">
                                    <label htmlFor="male">male</label>
                                    <input type="radio" id="male" value="1"></input>
                                </span>
                                <span className="genderOption">
                                    <label htmlFor="female">female</label>
                                    <input type="radio" id="female" value="2"></input>
                                </span>
                            </span>
                        </div>
                        <button className="btnSignUp" onClick={handleSignUp}>sign up</button>
                        {signUpError && <div className="errorMessage"><label>{signUpError}</label></div>}

                    </form>
                </div>
                
            </div>

            <style jsx>{`
                
                    .modalContainer {
                        position: fixed;
                        width: 100%;
                        height: 100%;
                        top: 0px;
                        left: 0px;
                        background: rgba(255, 255, 255, 0.6);
                        display: flex;
                        justify-content: center;
                        align-items: center;  
                        overflow-y: scroll;
                    }

                    .showModal {
                        opacity:1;
                        visibility: visible;
                        transition: opacity 0.4s ease;
                    }

                    .hideModal {
                        opacity:0;
                        transition: opacity 0.5s ease;
                        visibility: hidden;
                        
                    }

                    .modal {
                        width: 400px;
                        height: 400px;
                        background: white;
                        border-radius: 5px;
                        box-shadow: 0px 1px 5px rgba(0,0,0,0.4);
                        opacity: 1;   
                        position: relative;
                        overflow-x: visible;
                        overflow-y: visible; 
                        padding-left: 15px;
                        padding-right: 15px;
                      
                    }

                    .signUp {
                        border-bottom: 1px solid lightgray;
                        margin-bottom: 20px;
                    }
                    .accountForm {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        
                        gap: 10px;
                    }

                    .fullName {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .firstName {
                        width: 180px;
                    }

                    .lastName {
                        width: 180px;
                    }
                    .inputText {
                        padding: 10px;
                        border: lightgray solid 1px;
                        border-radius: 5px;
                    }
                    .btnClose {
                        position: absolute;
                        top: 0px;
                        right: 0px;
                    }

                    .genderOption {
                        border: solid 1px lightgray;
                        border-radius: 5px;
                        padding: 10px;
                        width: 150px;
                        display: flex;
                        justify-content: space-between;
                    }
                    .radGender {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 10px;
                    }
                    .btnSignUp {
                        width: 300px;
                        border: none;
                        border-radius: 5px;
                        height: 45px;
                        background-color: #00a400;
                        cursor: pointer;
                        font-size: 20px;
                        font-weight: bold;
                        color: white;
                        margin: auto;
                        margin-top: 10px;
                    }
                    .errorMessage {
                        display: flex;
                        justify-content: center;
                        color: red;
                    }
            `}</style>
        </>
    )
}
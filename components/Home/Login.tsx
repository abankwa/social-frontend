import { useState, useContext } from 'react'
import { signInWithEmailAndPassword } from '../../services/authServerAPI'
import {useRouter} from 'next/router'


export default function Login(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    
    async function handleLogin(e) {

        e.preventDefault()
        const res = await signInWithEmailAndPassword({ email, password })
        if(res.status === 'success')router.push('/home')

    }

    return (
        <>

            <div className="loginContainer">
                <div className="logo">
                    <h1>cyflux</h1>
                </div>

                <form className="loginForm">
                    <div>
                        <input type="text" placeholder="email" className="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <input type="password" placeholder="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <button className="login" onClick={handleLogin}>Log in</button>
                    </div>
                    <div className="forgotPassword">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="separator">
                        <div className="separatorLine"></div>
                        <p>or</p>
                        <div className="separatorLine"></div>
                    </div>
                    <div>
                        <button className="createAccount">Create New Account</button>
                    </div>
                </form>
            </div>






        {/* STYLE */}

        <style jsx>{`

            .loginContainer {
                display: flex;
                justify-content: space-evenly;
                margin-top: 60px;
                }

                .loginForm {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                width: 350px;
                height: 350px;
                border: 1px solid gray;
                border-radius: 5px;
                }

                .logo{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 350px;
                height: 350px;
                border: 1px solid gray;
                font-size: 20px;
                font-weight: bold;
                border-radius: 5px;
                }

                .email {
                width: 300px;
                border-radius: 5px;
                border: lightgray solid 1px;
                padding: 14px 16px;
                }

                .password {
                width: 300px;
                border-radius: 5px;
                border: lightgray solid 1px;
                padding: 14px 16px;
                }

                .login {
                width: 300px;
                border: none;
                border-radius: 5px;
                height: 45px;
                background-color: cornflowerblue;
                cursor: pointer;
                font-size: 20px;
                font-weight: bold;
                color: white;
                }

                .separator {
                display: flex;
                align-items: center;
                width: 100%;
                justify-content: space-around;

                }
                .separatorLine {
                border-bottom: 1px solid lightgray;
                width: 120px;
                }

                .forgotPassword {
                color: cornflowerblue;
                font-size: 14px;
                font-weight: bold;
                }

                .createAccount {
                border: none;
                border-radius: 5px;
                height: 45px;
                background-color: limegreen;
                cursor: pointer;
                font-size: 20px;
                font-weight: bold;
                color: white;
                padding: 0 16px;
                
                }

            `}
        </style>

        </>
    )
}
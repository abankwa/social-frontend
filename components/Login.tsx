import { useState, useContext } from 'react'
import { signInWithEmailAndPassword } from '../services/authServerAPI'
import { SessionContext } from '../context/SessionContext'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { session, setSession } = useContext(SessionContext)

    async function handleLogin(e) {
        e.preventDefault()

        const res = await signInWithEmailAndPassword({ email, password })
        //console.log(res)
        res.status === 'success' && setSession(res.data)
        console.log(session)

    }

    return (
        <>
            <h2>Login</h2>

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
        </>
    )
}
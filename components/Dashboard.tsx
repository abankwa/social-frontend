
import { SessionContext } from '../context/SessionContext'
import { useContext } from 'react'
import {signOut} from '../services/authServerAPI'

export default function Dashboard() {

    const { session, setSession } = useContext(SessionContext)

    async function handleLogout(e){
        e.preventDefault()
        signOut()
        setSession("")
    }

    return (
        <>

            <div>
                <h2>Dashboard</h2>
                <h4>welcome {session.email}</h4>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}
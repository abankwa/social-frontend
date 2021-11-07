import { useRouter } from "next/router"

export default function TEST1(){

    const router = useRouter()

    console.log(router.query)
    
    return(

        <>
        <div>test id bitches</div>

        </>
    )
}
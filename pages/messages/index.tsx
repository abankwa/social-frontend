// @ts-nocheck
import MessengerLayout from "../../layout/MessengerLayout"
import SiteLayout from "../../layout/SiteLayout"


export default function MessengerHome(){

    return (
        <>
            <div>select a conversation to start chatting</div>




            <style jsx>{`
                
                
                
            `}</style>
        </>
    )
}

MessengerHome.getLayout = function getLayout(page) {

    return (
        <SiteLayout >
          <MessengerLayout>
            {page}
          </MessengerLayout>
        </SiteLayout>
    )
  }
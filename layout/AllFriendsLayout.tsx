import AppNav from "../components/AppNav";
import AllFriendsLeftNav from "./AllFriendsLeftNav";

export default function AllFriendsLayout({children}) {


    return (
        <>

            <div className="container">
                <div className="leftNav">
                    <AllFriendsLeftNav />
                </div>
                <div className="content">
                    {children}
                </div>

            </div>




            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    height: calc(100vh - 50px);
                    width: 100%;
                    overflow: hidden;
                }
                .leftNav {
                    overflow-y: scroll;
                }
                .content{
                    flex-grow: 1;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    overflow-y: scroll;
                }
                
                
                `}</style>
        </>
    )
}
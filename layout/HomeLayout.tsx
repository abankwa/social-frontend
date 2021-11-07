import SiteLayout from './SiteLayout'
import HomeLeftNav from './HomeLeftNav'
import HomeRightNav from './HomeRightNav'


export default function HomeLayout({ children }) {
    return (
        <>

            <div className="container">
                <div className="leftNav"><HomeLeftNav /></div>
                <div className="mainNav">{children}</div>
                <div className="rightNav"><HomeRightNav /></div>
            </div>




            {/* STYLE */}
            <style jsx>{`

                .container {
                    display: flex;
                    justify-content: space-between;
                    height: calc(100vh - 65px);
                    overflow: hidden;

                 }

                 .leftNav {
                     width: 250px;
                     height: 100%;
                     overflow-y: scroll;

                 }
                 .rightNav {
                     width: 250px;
                     height: 100%;
                     overflow-y: scroll;
                 }

                 .mainNav {
                     flex:1 ;
                     overflow-y: scroll;
                 }



                `}
            </style>
        </>
    )
}
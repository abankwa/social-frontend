import SiteLayout from './SiteLayout'
import HomeLeftNav from './HomeLeftNav'
import HomeRightNav from './HomeRightNav'


export default function HomeLayout({ children }) {
    return (
        <>

            <div className="homeLayout">
                <div className="leftNav"><HomeLeftNav /></div>
                <div className="mainNav">{children}</div>
                <div className="rightNav"><HomeRightNav /></div>
            </div>




            {/* STYLE */}
            <style jsx>{`

                .homeLayout {
                    display: flex;
                    justify-content: space-between;
                    height: calc(100vh - 60px);
                    border: solid 1px gray;
                    overflow: hidden;

                 }

                 .leftNav {
                     width: 250px;
                     overflow-y: scroll;

                 }
                 .rightNav {
                     width: 250px;
                     overflow-y: scroll;
                 }

                 .mainNav {
                     flex:1 ;
                     border: solid 1px gray;
                     overflow-y: scroll;
                 }



                `}
            </style>
        </>
    )
}
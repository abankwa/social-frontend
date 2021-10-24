import SiteLayout from './SiteLayout'
import NewsSideNav from './NewsSideNav'


export default function NewsLayout({ children }) {
    return (
        <>

            <div className="newsLayout">
                <div className="sideNav"><NewsSideNav /></div>
                <div className="content">{children}</div>
            </div>


            {/* STYLE */}
            <style jsx>{`

                .newsLayout {
                    display: flex;
                    height: calc(100vh - 60px);
                    border: solid 1px gray;
                    overflow: hidden;
                 }

                 .sideNav {
                     width: 250px;
                 }
                 .content {
                    flex: 1;
                    border: solid 1px gray;
                    overflow-y: scroll;
                 }


                }

                `}
            </style>

        </>
    )
}
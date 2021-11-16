// @ts-nocheck
import SiteLayout from './SiteLayout'
import VideoSideNav from './VideoSideNav'


export default function VideoLayout({ children }) {
    return (
        <>

            <div className="videoLayout">
                <div className="leftNav"><VideoSideNav /></div>
                <div className="content">{children}</div>
            </div>


            

            {/* STYLE */}

            <style jsx>{`
                .videoLayout {
                    display: flex;
                    height: calc(100vh - 60px);
                    border: solid 1px gray;
                    overflow: hidden;

                 }
                .leftNav {
                    width: 250px;
                    overflow-y: scroll;
                }

                .content{
                    flex: 1;
                    overflow-y: scroll;
                    border: solid 1px gray;
                }


                }



                `}
            </style>
        </>
    )
}
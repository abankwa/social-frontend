import Link from 'next/link'
export default function Custom404() {

    return (
        <>
            <div className="container">
                <div className="error"><h1>404</h1></div>
                <div>Page Not Found</div><Link href="/home"><a>Home</a></Link>
            </div>

            <style jsx>{`
                .container {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .error {
                    border-right: solid gray 1px;
                    padding-right: 20px;
                    margin-right: 10px;
                }
                a {
                    margin-left: 10px;
                    color: blue;
                }
                
                `}

            </style>
        </>
    )
  }


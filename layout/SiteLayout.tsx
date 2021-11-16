// @ts-nocheck
import AppNav from '../components/AppNav'


export default function SiteLayout({children}){
    return (
        <>
            <AppNav />
            <div>{children}</div>
        </>
    )
}
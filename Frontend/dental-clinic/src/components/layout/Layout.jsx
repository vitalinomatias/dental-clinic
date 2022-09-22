import React from "react"

import Footer from "./Footer"
import NavbarPrincipal from "./Navbar"


// export default class Layout extends React.Component{
//     constructor() {
//         super()
//     }

//     render() {
//         return (
//             <>
//                 <NavbarPrincipal/>
//                 <div>
//                     {this.props.children}
//                 </div>
//                 <Footer/>
//             </>
//         )
//     }
// }

function Layout({props}){
    return (
        <>
            <NavbarPrincipal/>
            <div>
                {props}
            </div>
            <Footer/>
        </>
    )
}

export default Layout
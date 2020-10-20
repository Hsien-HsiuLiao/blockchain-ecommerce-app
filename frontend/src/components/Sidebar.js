
import React from 'react'
// import { css, jsx } from '@emotion/core'
// import logo from '../../img/spotify-white.png'

const Sidebar = ({ children }) => (
  <div
    className="Sidebar"
    style={SidebarStyle}
   // css={css`
   //   width: 200px;
   //   height: 100%;
   //   background: #000000;
   //   padding: 20px;
  //  `}
  >
{/*    <img src={logo} height={50} /> */}
    {children}
  </div>
)

const SidebarStyle = {
      width: "200px",
      height: "100%",
      background: "#000000",
      padding: "20px"

}
export default Sidebar;
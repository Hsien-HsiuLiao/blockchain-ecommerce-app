import React from 'react'
// import { css, jsx } from '@emotion/core'

const Topbar = (
    { children }
    ) => (
  <div
    className="Topbar" style={TopbarStyle}
   // css={css`
  //    position: absolute;
  //    top: 0;
  //    height: 50px;
  //    background: #070707;
  ///    left: 200px;
   //   width: calc(100% - 200px);
   //   padding: 20px;
   // `}
  >
    {children}
  </div>
)

const TopbarStyle = {
    position: "relative",
        top: 0,
        height: "50px",
        background: "#070707",
        left: "200px",
        width: "calc(100% - 200px)",
        padding: "20px",

}

export default Topbar
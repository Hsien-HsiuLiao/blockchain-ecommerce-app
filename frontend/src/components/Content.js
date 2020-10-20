import React from 'react';

// import { css, jsx } from '@emotion/core'
//import ReactDOM from 'react-dom';

const Content = ({ children }) => (
  <div
    className="Content"
    style={ContentStyle}
  //   css={css`
   //   width: calc(100% - 200px);
   //   padding: 20px;
   //   background: #121212;
   // `}
    
  >
    {children}
  </div>
 )

const ContentStyle = {
      width: "calc(100% - 200px)",
      padding: "20px",
      background: "#121212",

}


export default Content
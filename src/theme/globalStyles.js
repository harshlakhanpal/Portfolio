import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
   background: #181818;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  ::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px black; 
  border-radius: 2px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #181818; 
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: black; 
}

@media screen and (max-width: 500px) {
   #particles{
      display:none
   }
   #container-intro{
      position: relative;
    width: 100%;
    height: 100%;
    ${"" /* top: 35%; */}
    text-align: center;
    z-index: 9;
   }
   #intro-para{
      margin:10px;
   }
   #skill{
      margin-left:60px;
   }
}

`;

export default GlobalStyle;

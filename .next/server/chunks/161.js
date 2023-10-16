"use strict";
exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ GlobalStyle_css),
  "Gj": () => (/* binding */ fontFaceRules),
  "BC": () => (/* binding */ media)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./src/assets/fonts/Inter.var.woff2
/* harmony default export */ const Inter_var_woff2 = ("/_next/static/assets/fonts/Inter.var-a738a131ff730bb906e6956b179a83ec.woff2");
;// CONCATENATED MODULE: ./src/components/GlobalStyle.css.tsx


const fontFaceRules = `
  @font-face {
    font-family: "Inter";
    src: url("${"https://boonsuen.com/process-scheduling-solver"}${Inter_var_woff2}") format('woff2 supports variations'),
         url("${"https://boonsuen.com/process-scheduling-solver"}${Inter_var_woff2}") format('woff2-variations');
    font-weight: 100 900;
  }
`;
const GlobalStyle = external_styled_components_.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background-color: #FAFAFA;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif;
  }  

  a {
    color: inherit;
    text-decoration: none;
  }  

  button {
    border: none;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    appearance: none;    
  }

  .container {
    width: 90%;
    max-width: 1255px;
    margin: auto;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swal-icon--error {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;

    &__line {
      width: 27px;
      height: 4px;
      top: 29px;
    }
  }

  .swal-title {
    color: #333;
  }

  .swal-button {
    background-color: #26a5ff;
    transition: background-color 0.3s;

    &:not([disabled]):active, &:not([disabled]):hover {
      background-color: #0090ff;
    }
  }
  
  @media (max-width: 1150px) {
    h1 {
      font-size: 28px;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
    
    .container {
      width: 94%;
    }
  }
`;
const sizes = {
    "1275": 1275,
    "1150": 1150,
    "1050": 1050,
    "600": 600
};
const media = Object.keys(sizes).reduce((acc, label)=>{
    acc[label] = (...args)=>external_styled_components_.css`
    @media (max-width: ${sizes[label] / 16}em) {      
      ${external_styled_components_.css.call(undefined, ...args)}
    }
  `;
    return acc;
}, {});
/* harmony default export */ const GlobalStyle_css = (GlobalStyle);


/***/ })

};
;
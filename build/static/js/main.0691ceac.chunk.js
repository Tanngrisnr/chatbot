(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{17:function(n,e,t){},18:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var i,a,s,l,o=t(1),c=t.n(o),r=t(8),x=t.n(r),d=(t(17),t(12)),f=t(2),b=(t(18),t(3)),m=t.p+"static/media/sigmalogo.e40feaea.png",p=t.p+"static/media/gift.80bbedff.svg",h=(t(19),t(0)),j=Object(b.a)(i||(i=Object(f.a)(['\n\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n  }\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  body {\n    width: 100vw;\n    min-height: 100vh;\n    max-width: 100%;\n    font-family: "Roboto Condensed", "Helvetica", "Arial", sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: stretch;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    background: #00354E;\n  }\n\n  .snowflake {\n  color: #fff;\n  font-size: 1em;\n  font-family: Arial;\n  text-shadow: 0 0 1px #000;\n  z-index: 1;\n}\n\n@-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}\n\n\n\n\n\n.animate {\n    animation: falling 5.5s infinite ease-in;\n}\n\n\n\n.line{\n  text-align: center;\n  margin:0;\n}\n\nli {\n    position: relative;\n    margin: 0 15px;\n    list-style: none;\n    padding: 0;\n    display: inline-block;\n    width: 12px;\n    height: 28px;\n    border-radius: 50%;\n    top: 35px;\n    background: #fff;\n    &:before {\n        content: "";\n        position: absolute;\n        background: #222;\n        width: 10px;\n        height: 9px;\n        border-radius: 3px;\n        top: -4px;\n        left: 1px;\n    }\n    &:after {\n        content: "";\n        top: -14px;\n        left: 9px;\n        position: absolute;\n        width: 52px;\n        height: 19px;\n        border-bottom: solid #222 2px;\n        border-radius: 30%;\n    }\n}\n\n.red {\n    background-color: #fb4545;\n    animation: lightningRed 1s infinite;\n}\n\n.green {\n    background-color: #24D024;\n    animation: lightningGreen 0.8s infinite;\n}\n\n.yellow {\n    background-color: #fff952;\n    animation: lightningYellow 0.9s infinite;\n}\n\n.blue {\n    background-color: #0A53DE;\n    animation: lightningBlue 1.1s infinite;\n}\n\n.pink {\n    background-color: #f53896;\n    animation: lightningPink 1.2s infinite;\n}\n\n@keyframes lightningRed {\n    0% {\n        box-shadow: 5px 10px 35px 10px #fb4545;\n    }\n    50% {\n        box-shadow: none;\n    }\n    100% {\n        box-shadow: 5px 10px 35px 10px #fb4545;\n    }\n}\n\n@keyframes lightningGreen {\n    0% {\n        box-shadow: 5px 0 35px 10px #24D024;\n    }\n    50% {\n        box-shadow: none;\n    }\n    100% {\n        box-shadow: 5px 0 35px 10px #24D024;\n    }\n}\n\n@keyframes lightningYellow {\n    0% {\n        box-shadow: 5px 0 35px 10px #fff952;\n    }\n    50% {\n        box-shadow: none;\n    }\n    100% {\n        box-shadow: 5px 0 35px 10px #fff952;\n    }\n}\n\n@keyframes lightningBlue {\n    0% {\n        box-shadow: 5px 0 35px 10px #0A53DE;\n    }\n    50% {\n        box-shadow: none;\n    }\n    100% {\n        box-shadow: 5px 0 35px 10px #0A53DE;\n    }\n}\n\n@keyframes lightningPink {\n    0% {\n        box-shadow: 5px 0 35px 10px #f53896;\n    }\n    50% {\n        box-shadow: none;\n    }\n    100% {\n        box-shadow: 5px 0 35px 10px #f53896;\n    }\n}\n\n@media (max-width: 1024px) {\n  .line{\n    padding: 0; \n  }\n    li {\n        margin: 0 15px 20px 15px;\n    }\n}\n\nh1 {\n    text-align: center;\n    width: 100%;\n    color: white;\n  }\n  h1 {\n    font-size: 5.1rem;\n    line-height: 1;\n    font-weight: 600;\n  }\n  h2 {\n    font-size: 3rem;\n    font-weight: 300;\n    margin: 2%;\n  }\n  h3,\n  h4,\n  h5 {\n    font-weight: 600;\n  }\n']))),g=b.b.main(a||(a=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90vw;\n  margin: 5% auto;\n  justify-content: center;\n  align-items: center;\n  & > * {\n    margin: 2%;\n  }\n"]))),w=b.b.header(s||(s=Object(f.a)(["\n  color: white;\n  padding: 0 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n\n  background: #e30613;\n  z-index: 9;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,\n    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;\n\n  figure {\n    width: 20%;\n    img {\n      width: 100%;\n      height: auto;\n    }\n  }\n  h3 {\n    text-align: center;\n  }\n"]))),k=b.b.button(l||(l=Object(f.a)(["\n  max-width: 100px;\n  color: white;\n  background: transparent;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & > * {\n    margin: 0;\n  }\n  figure {\n    width: 100%;\n    img {\n      width: 100%;\n      height: auto;\n    }\n  }\n  p {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n"])));var u=function(){var n=Object(o.useState)(!0),e=Object(d.a)(n,2),t=e[0],i=e[1],a=function(){i(!t)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j,{}),Object(h.jsxs)("div",{className:"snowflakes","aria-hidden":"true",children:[Object(h.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(h.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(h.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(h.jsx)("div",{className:"snowflake",children:"\u2744"}),Object(h.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(h.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(h.jsx)("div",{className:"snowflake",children:"\u2744"}),Object(h.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(h.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(h.jsx)("div",{className:"snowflake",children:"\u2744"})]}),Object(h.jsx)(w,{children:Object(h.jsx)("figure",{children:Object(h.jsx)("img",{src:m,alt:"sigma's logo"})})}),Object(h.jsx)("div",{className:"lights-container",children:Object(h.jsx)("div",{className:"light",children:Object(h.jsxs)("ul",{className:"line",children:[Object(h.jsx)("li",{className:"red"}),Object(h.jsx)("li",{className:"yellow"}),Object(h.jsx)("li",{className:"blue"}),Object(h.jsx)("li",{className:"pink"}),Object(h.jsx)("li",{className:"red"}),Object(h.jsx)("li",{className:"green"}),Object(h.jsx)("li",{className:"blue"}),Object(h.jsx)("li",{className:"yellow"}),Object(h.jsx)("li",{className:"red"}),Object(h.jsx)("li",{className:"pink"}),Object(h.jsx)("li",{className:"blue"}),Object(h.jsx)("li",{className:"yellow"}),Object(h.jsx)("li",{className:"red"}),Object(h.jsx)("li",{className:"green"}),Object(h.jsx)("li",{className:"blue"}),Object(h.jsx)("li",{className:"yellow"}),Object(h.jsx)("li",{className:"red"}),Object(h.jsx)("li",{className:"pink"}),Object(h.jsx)("li",{className:"green"}),Object(h.jsx)("li",{className:"blue"}),Object(h.jsx)("li",{className:"pink"}),Object(h.jsx)("li",{className:"red"}),Object(h.jsx)("li",{className:"green"}),Object(h.jsx)("li",{className:"blue"})]})})}),Object(h.jsxs)(g,{children:[Object(h.jsx)("h1",{children:"V\xe4lkommen!"}),t&&Object(h.jsxs)(k,{onClick:a,children:[Object(h.jsx)("figure",{children:Object(h.jsx)("img",{src:p,alt:"a wrapped gift"})}),Object(h.jsx)("p",{children:"Klicka H\xe4r"})]}),Object(h.jsx)("div",{id:"myLandbot",style:{width:t?"0":"400px",height:t?"0":"500px",transition:"height .25s ease-out"}}),!t&&Object(h.jsx)(k,{onClick:a,children:Object(h.jsx)("p",{children:"St\xe4ng"})})]})]})},y=function(n){n&&n instanceof Function&&t.e(4).then(t.bind(null,28)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,l=e.getTTFB;t(n),i(n),a(n),s(n),l(n)}))};x.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),y()}},[[25,1,2]]]);
//# sourceMappingURL=main.0691ceac.chunk.js.map
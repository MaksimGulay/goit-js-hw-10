var styles="\n\n.loader {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: none;\n   top: 50%;\n  left: 50%;\n  position: absolute;\n  color: #000000;\n  box-sizing: border-box;\n  animation: animloader 2s linear infinite;\n  z-index: 1;\n}\n\n\n@keyframes animloader {\n  0% {\n    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;\n  }\n  25% {\n    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px;\n  }\n  50% {\n    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px;\n  }\n  75% {\n    box-shadow: 14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;\n  }\n  100% {\n    box-shadow: 14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px;\n  }\n}\n",styleElement=document.createElement("style");styleElement.innerHTML=styles,document.head.appendChild(styleElement);
//# sourceMappingURL=index.e4e17914.js.map

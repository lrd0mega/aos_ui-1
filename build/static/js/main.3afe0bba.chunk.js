(this["webpackJsonpmy-dynamic-ui"]=this["webpackJsonpmy-dynamic-ui"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(3),d=n.n(a);n(8);var l=n(0);var r=function(){return o.a.useEffect((()=>{const e=document.getElementById("app"),t=function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");t.textContent="Welcome to AO";const n=document.createElement("p");n.textContent="Hyper parallel super computer";const c=document.createElement("button");c.id="connectWallet",c.textContent="Connect Wallet",c.addEventListener("click",(async()=>{if("undefined"!==typeof window.arweaveWallet)try{await window.arweaveWallet.connect(["ACCESS_ADDRESS","SIGN_TRANSACTION"]),alert("Wallet connected!")}catch(e){console.error("Error connecting to wallet:",e)}else alert("ArConnect not found. Please install the ArConnect wallet extension.")}));const o=document.createElement("div");o.classList.add("links");const a=document.createElement("a");a.href="https://discord.gg/BpJBVYE9",a.target="_blank",a.textContent="Discord";const d=document.createElement("a");d.href="https://x.com/aoTheComputer",d.target="_blank",d.textContent="Twitter";const l=document.createElement("a");return l.href="https://cookbook_ao.g8way.io/welcome/index.html",l.target="_blank",l.textContent="Cookbook of AO",o.appendChild(a),o.appendChild(d),o.appendChild(l),e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(o),e}();e.appendChild(t)}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{id:"particles-js"}),Object(l.jsx)("div",{id:"app"})]})};d.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(r,{})}),document.getElementById("root"))},8:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.3afe0bba.chunk.js.map
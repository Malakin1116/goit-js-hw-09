document.addEventListener("DOMContentLoaded",(function(){let t=null;const e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}e.addEventListener("click",(()=>{e.disabled=!0,d.disabled=!1,t=setInterval(n,1e3)})),d.addEventListener("click",(()=>{e.disabled=!1,d.disabled=!0,clearInterval(t)}))}));
//# sourceMappingURL=01-color-switcher.a4963b57.js.map

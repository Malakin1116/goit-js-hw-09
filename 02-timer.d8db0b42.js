!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("6JpON"),d=r("dbdyf"),l=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),c=document.querySelector("[data-seconds]"),f=document.querySelector("#datetime-picker"),s=document.querySelector("[data-start]");s.disabled=!0;var y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(t){t[0]<=new Date?(e(a).Notify.failure("Оберіть дату у майбутньому"),s.disabled=!0):(s.disabled=!1,e(a).Notify.success("Готово, натискайте START"))}};(0,d.default)(f,y),s.addEventListener("click",(function(){s.disabled=!0;var t=new Date(f.value),n=setInterval((function(){var o=new Date,r=t-o;if(r<=0)return clearInterval(n),e(a).Notify.success("Час вийшов"),l.textContent="0",u.textContent="0",i.textContent="0",void(c.textContent="0");l.textContent=v(Math.floor(r/1e3/60/60/24)),u.textContent=v(Math.floor(r/1e3/60/60%24)),i.textContent=v(Math.floor(r/1e3/60%60)),c.textContent=v(Math.floor(r/1e3%60))}),1e3)}));var v=function(e){return e<10?"0".concat(e):"".concat(e)}}();
//# sourceMappingURL=02-timer.d8db0b42.js.map

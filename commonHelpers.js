import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i as S}from"./assets/vendor-77e16229.js";const n=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),h=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]"),b=document.querySelector("[data-days]");let s=null,d=null;e.disabled=!0;e.addEventListener("click",()=>{e.disabled=!0,n.disabled=!0,d=setInterval(()=>{const t=new Date(n.value)-Date.now();if(t<=0){clearInterval(d),c({days:0,hours:0,minutes:0,seconds:0}),e.disabled=!1,n.disabled=!1;return}c(g(t))},1e3)});const c=({days:t,hours:o,minutes:a,seconds:r})=>{b.textContent=String(t).padStart(2,"0"),h.textContent=String(o).padStart(2,"0"),y.textContent=String(a).padStart(2,"0"),p.textContent=String(r).padStart(2,"0")};function g(t){const u=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:i,minutes:l,seconds:m}}const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0];const o=Date.now();s<=o?(e.disabled=!0,S.error({message:"Please choose a date in the future",position:"topRight",color:"#EF4040",messageColor:"#fff"})):e.disabled=!1}};f("#datetime-picker",D);
//# sourceMappingURL=commonHelpers.js.map

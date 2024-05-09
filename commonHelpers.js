import{i as u}from"./assets/vendor-8e8cd629.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="43794074-5ff9b3f6f51ca0335da2b7303",d="photo",h="horizontal",g=!0;function y(o){return fetch(`${f}?key=${m}&q=${o}&image_type=${d}&orientation=${h}&safesearch=${g}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.log(t)})}const p=document.querySelector("#gallery");function L(o){const t=o.map(s=>{const{webformatURL:i,largeImageURL:e,tags:r,likes:n,views:c,comments:l,downloads:a}=s;return` <li>
        <a href="">
    <img src="${i}" alt="${r}">
          <ul>
            <li>Likes ${n}</li>
            <li>Views ${c}</li>
            <li>Coments ${l}</li>
            <li>Download ${a}</li>
          </ul>
        </a>
      </li>`}).join("");p.insertAdjacentHTML("beforeend",t),console.log(o)}const $=document.querySelector("#search-form"),E=document.querySelector("#gallery");$.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.searchInput.value.trim();t&&(E.innerHTML="",y(t).then(s=>{if(!s.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");L(s.hits)}).catch(s=>{u.error({title:"Error",message:s.message})}))});
//# sourceMappingURL=commonHelpers.js.map

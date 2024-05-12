import{S as f,i}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",p="43794074-5ff9b3f6f51ca0335da2b7303",h="photo",m="horizontal",g=!0;function y(n){return fetch(`${d}?key=${p}&q=${n}&image_type=${h}&orientation=${m}&safesearch=${g}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.log(t)})}const L=new f(".gallery-link"),b=(n,t)=>{const o=n.map(s=>` <li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}" data-lightbox="gallery">
    <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}">
          <ul class="stats-block">
            <li>
              <span>Likes</span>
              <span>${s.likes}</span> 
            </li>
            <li>
              <span>Views</span>
              <span>${s.views}</span>
            </li>
            <li>
              <span>Coments</span>
              <span>${s.comments}</span>
            </li>
            <li>
              <span>Download</span>
              <span>${s.downloads}</span>
            </li>
          </ul>
        </a>
      </li>`).join("");t.insertAdjacentHTML("beforeend",o),L.refresh()},c=document.querySelector("#search-form"),u=document.querySelector("#gallery"),l=document.querySelector(".loader");c.addEventListener("submit",n=>{n.preventDefault();const t=n.target.elements.searchInput.value.trim();if(!t){i.error({message:"Please enter text to find something!",position:"topRight"});return}l.classList.remove("is-hidden"),y(t).then(o=>{o.hits.length||i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.searchInput.value="",u.innerHTML="",b(o.hits,u),l.classList.add("is-hidden")}).catch(o=>{console.error("Error fetching images:",o),i.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight",messageColor:"#ffffff",timeout:3e3,backgroundColor:"#ef4040"}),l.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map

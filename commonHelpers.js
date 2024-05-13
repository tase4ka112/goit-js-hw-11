import{S as d,i as l}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",p="43794074-5ff9b3f6f51ca0335da2b7303",h="photo",m="horizontal",g=!0;function y(o){return fetch(`${f}?key=${p}&q=${o}&image_type=${h}&orientation=${m}&safesearch=${g}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.log(t)})}const L=new d(".gallery-link"),b=(o,t)=>{const n=o.map(s=>` <li class="gallery-item">
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
      </li>`).join("");t.insertAdjacentHTML("beforeend",n),L.refresh()},u=document.querySelector("#search-form"),a=document.querySelector("#gallery"),c=document.querySelector(".loader");u.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.searchInput.value.trim();if(!t){a.innerHTML="",l.show({message:"Please enter text to find something!",position:"topRight",timeout:2e3,color:"red"});return}a.innerHTML="",c.classList.remove("is-hidden"),y(t).then(n=>{n.hits.length||l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),u.searchInput.value="",a.innerHTML="",b(n.hits,a),c.classList.add("is-hidden")}).catch(n=>{l.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight",messageColor:"#ffffff",timeout:3e3,backgroundColor:"#ef4040"}),c.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map

/* empty css                      */import{S as g,a as y,i as n}from"./assets/vendor-BMHzDZyJ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h=document.querySelector("#search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new g(".gallery a"),L="50804443-2b846a940781baef8affcab62",v="https://pixabay.com/api/";h.addEventListener("submit",async i=>{i.preventDefault();const r=i.target.elements.searchQuery.value.trim();if(r){c.innerHTML="",l.classList.remove("hidden");try{const o=(await y.get(v,{params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits;if(o.length===0)n.warning({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const e=o.map(({webformatURL:t,largeImageURL:s,tags:d,likes:p,views:u,comments:m,downloads:f})=>`
        <a class="gallery__item" href="${s}">
          <div class="photo-card">
            <img src="${t}" alt="${d}" loading="lazy" />
            <div class="info">
              <p><b>Likes:</b> ${p}</p>
              <p><b>Views:</b> ${u}</p>
              <p><b>Comments:</b> ${m}</p>
              <p><b>Downloads:</b> ${f}</p>
            </div>
          </div>
        </a>`).join("");c.innerHTML=e,b.refresh()}}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{l.classList.add("hidden")}}});
//# sourceMappingURL=index.js.map

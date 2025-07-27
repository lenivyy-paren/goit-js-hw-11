import{a as d,S as f,i as s}from"./assets/vendor-BK_rxH-O.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(o){return d.get("https://vercel-api-proxy-six-fawn.vercel.app/api/proxy",{params:{source:"pixabay",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>(console.error("Error while fetching images:",r),null))}const c=document.querySelector(".loader"),u=document.querySelector(".gallery"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function y(o){const i=o.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:a,comments:m,downloads:p})=>`<li class="gallery-item">
              <a class="gallery-link" href=${l}>
                <img src=${r} alt="${e}" width="360" height="200"/>
                <div class="markup-image">
                  <ul>
                    <li class="markup-image-text">likes</li>
                    <li class="markup-image-value">${t}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">views</li>
                    <li class="markup-image-value">${a}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">comments</li>
                    <li class="markup-image-value">${m}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">downloads</li>
                    <li class="markup-image-value">${p}</li>      
                  </ul>
                </div>
              </a>
            </li>`).join("");u.innerHTML=i,h.refresh()}function v(){u.innerHTML=""}function w(){c.style.display="block"}function x(){c.style.display="none"}const n=document.querySelector(".form");n.addEventListener("submit",async function(o){o.preventDefault();const i=o.target.elements["search-text"].value.trim();if(i===""){s.show({title:"Form field must be filled in!",titleColor:"red",position:"topRight"});return}w(),v();try{const l=(await g(i)).hits;l.length>0?y(l):s.show({title:"Try another way",titleColor:"red",position:"topRight"})}catch(r){s.show({title:"Poor internet connection.",titleColor:"red",position:"topRight"}),console.error("Fetch error:",r)}finally{x(),n.reset()}});
//# sourceMappingURL=index.js.map

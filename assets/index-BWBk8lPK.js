(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const i="/JS2_CA/assets/protectionspell-B3fmzc5v.jpg";function n(){return`
    <section class="p-6 space-y-6">

      <h1 class="font-[Cinzel] text-purple-400 font-bold text-xl text-center">
        Spellcasting Feed
      </h1>

      <article class="relative border border-gray-700 rounded-lg p-4 bg-[var(--color-bg-surface)] shadow-sm w-2/3 mx-auto">
        <i class="fa-solid fa-pen-to-square absolute top-3 right-3 text-gray-400 hover:text-purple-400 cursor-pointer transition"></i>
        <div class="border-b border-gray-700 pb-4">
          <figure >
           <div class="flex flex-row justify-evenly items-center mb-4 gap-4">
            <img class="h-56 rounded-md mb-2"
              src="${i}"
              alt="LunaHex Illustration - Protection Spell"
            />
            <img class="h-56 rounded-md mb-2"
              src="${i}"
              alt="LunaHex Illustration - Protection Spell"
            />
            </div>
            <figcaption class="text-xs text-gray-400 mt-1">
              Image by Ann_Milovidova · Pixabay
            </figcaption>
          </figure>
           <hr class="my-4 border-gray-700"/>
          <div class="flex justify-end gap-4 my-2 text-gray-400">
            <i class="fa-regular fa-heart text-red-600"></i>
            <i class="fa-regular fa-comment text-purple-300">
              <span class="ml-1 text-xs text-purple-400">10</span>
            </i>
            <i class="fa-solid fa-share text-purple-300" ></i>
          </div>
        <div class="card-header">
          <h3 class="text-lg font-[Cinzel] font-semibold mt-2 mb-2 text-purple-500">🕯️ LunaHex</h3>
        </div>
           <p class="font-[Inter] text-gray-300">
            Casting a protection spell tonight. Any herbs you swear by?
          </p>
        </div>

        <div class="mt-4">
          <input
            type="text"
            class="w-full p-2 rounded bg-gray-800 text-sm font-[Inter]"
            placeholder="Send a whisper..."
          />
        </div>

        <button class="bg-purple-400 text-white mt-4 rounded px-4 py-2 hover:bg-purple-500 transition mz-2 ml-auto block font-[Cinzel]">
          ✨ Whisper
        </button>

      </article>

    </section>
  `}function d(){return`
    <h1>Welcome to the About Page</h1>
    <p>This is the about page of our application.</p>
  `}function p(){return`
    <h1>Welcome to the Contact Page</h1>
    <p>This is the contact page of our application.</p>
  `}const f="/JS2_CA/assets/storiesplaceholder-BEkCxyvR.png";function u(){return`
    <section
      class="
        flex justify-center items-center gap-4
        px-6 py-4
        overflow-x-auto
        border-b border-gray-700
        bg-[var(--color-bg-main)]
      "
    >
      ${Array(6).fill().map(()=>`
        <div class="flex flex-col items-center gap-1 shrink-0">
          <div
            class="
              w-28 h-28 
              rounded-full
              border-2 border-gray-300/70
              p-0.5
              hover:border-purple-400
              transition
            "
          >
            <img
              src="${f}"
              alt="Active user"
              class="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      `).join("")}
    </section>
  `}function g(){return`
    <section class="footer-section">
    <p>&copy; 2026 Hex & Chill. All rights reserved.</p>
    </section>
  `}const h="/JS2_CA/assets/witchicon-BgI6EGWp.png";function m(){const e=`
    flex flex-col items-center gap-2
    text-gray-300 opacity-80
    hover:text-purple-400 hover:opacity-100
    transition
  `,s=`
    w-12 h-12
    rounded-full
    border-2 border-gray-300/60
    flex items-center justify-center
    transition
    hover:shadow-[0_0_12px_rgba(199,125,255,0.4)]
  `;return`
    <aside class="hidden md:flex w-64 flex-col bg-[var(--color-bg-surface)] px-6 py-8 border-r border-gray-700">
    <h1 class="font-[Cinzel] text-2xl font-bold text-purple-400 mb-6 mx-auto">Hex & Chill</h1>
    <img src="${h}" alt="Hex & Chill Logo" class="w-20 h-20 mx-auto mb-4"/>

      <nav class="flex flex-col gap-8">

      <a href="/" data-link class="${e}">
          <div class="${s}">
            <i class="fa-solid fa-book"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Grimoire</span>
        </a>

        <a href="/" data-link class="${e}">
          <div class="${s}">
            <i class="fa-solid fa-crow"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Familiars</span>
        </a>

        <a href="/" data-link class="${e}">
          <div class="${s}">
            <i class="fa-solid fa-magnifying-glass"></i>         </div>
          <span class="text-xs font-[Cinzel]">Scry</span>
        </a>

        <a href="/" data-link class="${e}">
          <div class="${s}">
            <i class="fa-solid fa-hat-wizard"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Coven Profile</span>
        </a>

        <a href="/search" data-link class="${e}">
          <div class="${s}">
            <i class="fa-solid fa-pen-nib"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Cast a Spell</span>
        </a>


        <a href="/search" data-link class="${e}">
          <div class="${s}">
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Enter the Circle</span>
        </a>

      </nav>
    </aside>
  `}const x="/JS2_CA/assets/friendsplaceholder-BmLjllju.png";function b(){return`
    <aside class="hidden md:flex w-64 flex-col bg-[var(--color-bg-surface)] px-6 py-8 border-l border-gray-700">

      <h1 class="font-[Cinzel] mb-10 text-xl mx-auto font-semibold text-purple-400">Familiars</h1>

      <section
           class="
             flex-col items-center gap-4
             px-6 py-4
             overflow-x-auto
             border-b border-gray-700
             bg-[var(--color-bg-surface)]
           "
         >
           ${Array(6).fill().map(()=>`
             <div class="flex flex-col items-center gap-1 shrink-0">
               <div
                 class="
                   w-24 h-24 
                   rounded-full
                   border-2 border-gray-300/70
                   p-0.5
                   hover:border-purple-400
                   transition mb-4
                 "
               >
                 <img
                   src="${x}"
                   alt="Active user"
                   class="w-full h-full rounded-full object-cover"
                 />
               </div>
             </div>
           `).join("")}
         </section>
    </aside>
  `}const v={"/":n,"/about":d,"/contact":p};function o(){const e=window.location.pathname,s=v[e]||n;document.getElementById("sidenav").innerHTML=m(),document.getElementById("header").innerHTML=u(),document.getElementById("app").innerHTML=s(),document.getElementById("footer").innerHTML=g(),document.getElementById("sidenavRight").innerHTML=b()}function y(e){history.pushState(null,null,e),o()}document.addEventListener("click",e=>{e.target.matches("a[data-link]")&&(e.preventDefault(),y(e.target.href))});window.addEventListener("popstate",o);o();

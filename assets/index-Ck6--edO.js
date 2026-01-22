(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();function l(){return`
    <section class="p-6 space-y-6">

      <h1 class="font-[Cinzel] text-purple-400 font-bold text-xl">
        Spellcasting Feed
      </h1>

      <article class="relative border border-gray-700 rounded-lg p-4 bg-[var(--color-bg-surface)] shadow-sm">
        <i class="fa-solid fa-pen-to-square absolute top-3 right-3 text-gray-400 hover:text-purple-400 cursor-pointer transition"></i>
        <div class="border-b border-gray-700 pb-4">
          <figure >
           <div class="flex flex-row justify-evenly items-center mb-4 gap-4">
            <img class="h-56 rounded-md mb-2"
              src="/src/images/protectionspell.jpg"
              alt="LunaHex Illustration - Protection Spell"
            />
            <img class="h-56 rounded-md mb-2"
              src="/src/images/protectionspell.jpg"
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
  `}function c(){return`
    <h1>Welcome to the About Page</h1>
    <p>This is the about page of our application.</p>
  `}function d(){return`
    <h1>Welcome to the Contact Page</h1>
    <p>This is the contact page of our application.</p>
  `}function p(){return`
    <section
      class="
        flex items-center gap-4
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
              w-14 h-14
              rounded-full
              border-2 border-gray-300/70
              p-0.5
              hover:border-purple-400
              transition
            "
          >
            <img
              src="../src/images/megibunadlite.jpg"
              alt="Active user"
              class="w-full h-full rounded-full object-cover"
            />
          </div>

          <span class="text-xs text-gray-400">
            Coven
          </span>
        </div>
      `).join("")}
    </section>
  `}function f(){return`
    <section class="footer-section">
    <p>&copy; 2024 Hex & Chill. All rights reserved.</p>
    </section>
  `}function u(){const e=`
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
    <img src="../src/images/icon/witchicon.png" alt="Hex & Chill Logo" class="w-20 h-20 mx-auto mb-4"/>
      <h2 class="font-[Cinzel] mb-10 text-xl mx-auto font-semibold text-purple-400">🕯️ Coven</h2>

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
            <i class="fa-solid fa-broom"></i>          </div>
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
            <i class="fa-solid fa-moon"></i>
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
  `}const g={"/":l,"/about":c,"/contact":d};function o(){const e=window.location.pathname,s=g[e]||l;document.getElementById("sidenav").innerHTML=u(),document.getElementById("header").innerHTML=p(),document.getElementById("app").innerHTML=s(),document.getElementById("footer").innerHTML=f()}function m(e){history.pushState(null,null,e),o()}document.addEventListener("click",e=>{e.target.matches("a[data-link]")&&(e.preventDefault(),m(e.target.href))});window.addEventListener("popstate",o);o();

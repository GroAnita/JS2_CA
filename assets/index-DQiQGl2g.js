(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();function H(){return`
      <div id="posts" class="space-y-6">
      </div>
  `}document.title="Hex & Chill - Home";function V(){return`
    <h1>Welcome to the About Page</h1>
    <p>This is the about page of our application.</p>
  `}function Z(){return`
    <h1>Welcome to the Contact Page</h1>
    <p>This is the contact page of our application.</p>
  `}function X(){return`
    <header
      class="
        fixed top-0 left-0 z-50
        w-full h-16
        bg-[var(--color-bg-surface)]
        border-b border-gray-700

        flex items-center justify-center gap-4 px-4
        pb-[env(safe-area-inset-top)]

        md:static
        md:h-auto
        md:gap-6
        md:px-6
        md:py-4
      "
    >
      <h1 class="font-[Cinzel] text-3xl text-center font-bold text-purple-400">
        Hex & Chill
      </h1>
    </header>
  `}const Q="/JS2_CA/witchicon.png";function ee(){const e=`
    flex flex-col items-center gap-2
    text-gray-300 opacity-80
    hover:text-purple-400 hover:opacity-100
    transition
  `,t=`
    w-12 h-12
    rounded-full
    border-2 border-gray-300/60
    flex items-center justify-center
    transition
    hover:shadow-[0_0_12px_rgba(199,125,255,0.4)]
  `;return`
    <aside
  class="
    fixed bottom-0 left-0 z-50
    w-full h-16
    bg-[var(--color-bg-surface)]
    border-t border-gray-700

    flex justify-around items-center
    pb-[env(safe-area-inset-bottom)]

    md:static
    md:w-64
    md:h-screen
    md:flex-col
    md:justify-start
    md:gap-8
    md:px-6
    md:py-8
    md:border-t-0
    md:border-r
  "
>

<img
  src="${Q}"
  class="hidden md:block w-20 h-20 mx-auto mb-4"
/>


   <nav
  class="
    flex gap-2
    md:flex-col md:gap-8">  

      <a href="/" data-link class="${e}">
          <div class="${t}">
            <i class="fa-solid fa-book"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Grimoire</span>
        </a>

        <a href="/" data-link class="${e}">
          <div class="${t}">
            <i class="fa-solid fa-crow"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Familiars</span>
        </a>

        <a href="/" data-link class="${e}">
          <div class="${t}">
            <i class="fa-solid fa-magnifying-glass"></i>         </div>
          <span class="text-xs font-[Cinzel]">Scry</span>
        </a>

        <a href="/" data-link class="${e}">
          <div class="${t}">
            <i class="fa-solid fa-hat-wizard"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Coven Profile</span>
        </a>

        <button 
        type="button" 
        data-open-create-post class="${e} bg-transparent">
          <div class="${t}">
            <i class="fa-solid fa-pen-nib"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Cast a Spell</span>
        </button>

        <button 
        type="button" 
        data-open-login-modal
        data-auth="logged-out"
        class="${e} bg-transparent">
          <div class="${t}">
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Enter the Circle</span>
        </button>


        <button 
        type="button" 
        data-auth="logged-in"
        id="logout-button"
        class="hidden ${e} bg-transparent">
          <div class="${t}">
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Leave the Circle</span>
        </button>

        <div data-auth="logged-in" class="hidden md:flex flex-col items-center mt-auto text-gray-400 text-sm">
          <span class="username"></span>
        </div>

      </nav>
    </aside>
    <button class="fixed top-4 left-4 z-50 w-12 h-12
    rounded-full
    bg-purple-400 text-white
    shadow-lg md:hidden" aria-label="Cast a spell">
    >spell</button>
  `}const te="cKEP0soLY46mO4r3od49mv8igrBEx40SIxANJlGmqIo",y=new URL("/JS2_CA/assets/storiesplaceholder-BEkCxyvR.png",import.meta.url).href;let h=null,C=new Map;async function S(){if(h)return h;try{const t=await fetch("https://api.unsplash.com/photos/random?query=portrait fantasy portrait face&orientation=squarish&content_filter=high&client_id=cKEP0soLY46mO4r3od49mv8igrBEx40SIxANJlGmqIo");if(!t.ok)throw new Error;return h=(await t.json())?.urls?.small||y,h}catch{return y}}async function N(e,t="fantasy"){if(C.has(e))return C.get(e);try{const a=await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(t)}&orientation=landscape&content_filter=high&client_id=${te}`);if(!a.ok)throw new Error;const r=(await a.json())?.urls?.regular||y;return C.set(e,r),r}catch{return y}}async function z(e=[]){return`
    <aside class="hidden md:flex w-64 flex-col bg-[#121212] px-6 py-8 border-l border-gray-700">

      <h1 class="font-[Cinzel] mb-10 text-xl mx-auto font-semibold text-purple-400">
        Familiars
      </h1>

      <section class="flex flex-col items-center gap-4 px-6 py-4 overflow-x-auto border-b border-gray-700 bg-[#121212]">
    
        ${(await Promise.all(e.slice(0,6).map(async t=>{const a=t.author?.avatar?.url||await S();return`
              <a href="/profiles/${t.name}" data-link class="block">
                <div class="flex flex-col items-center gap-3 shrink-0">
                  <div class="w-24 h-24 rounded-full border-2 border-gray-300/70 p-0.5 hover:border-purple-400 transition mb-4 mt-6">
                    <img
                      src="${a}"
                      alt="Active user avatar"
                      class="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <span class="text-xs font-[Cinzel] text-gray-300">
                    ${t.name}
                  </span>
                </div>
              </a>
            `}))).join("")}
      </section>
    </aside>
  `}let m=null;const A="authUser";function q(e){m=e,localStorage.setItem(A,JSON.stringify(e)),console.log("Auth state updated:","auth:changed DISPATCHED"),document.dispatchEvent(new Event("auth:changed"))}function ae(){m=null,localStorage.removeItem(A),document.dispatchEvent(new Event("auth:changed"))}function k(){if(m)return m;const e=localStorage.getItem(A);if(!e)return null;try{return m=JSON.parse(e),m}catch{return null}}function w(){return!!j()}function T(){const e=k();return e?{username:e.name,email:e.email}:null}function j(){return k()?.accessToken||null}function oe(e){return e.message==="Failed to fetch"?"Network error: Please check your internet connection and try again.":e.message.includes("API error")?"Server error: Something went wrong on our end. Please try again later.":e.message.includes("Registration error")?"Registration failed: Please ensure all fields are filled out correctly and try again.":e.message.includes("Login error")?"Login failed: Incorrect username or password. Please try again.":"An unexpected error occurred. Please try again."}const re="https://v2.api.noroff.dev";async function l(e,t={}){try{const a=j(),o={"Content-Type":"application/json","X-Noroff-API-Key":"90d9d08a-808b-4c1f-8475-b0584204612f",...t.headers};a&&(o.Authorization=`Bearer ${a}`);const r=await fetch(`${re}${e}`,{...t,headers:o});let n=null;const s=await r.text();if(n=s?JSON.parse(s):{},!r.ok)throw new Error(n.errors?.[0]?.message||"API error");return n}catch(a){console.error("API Client Error:",a.message);const o=oe(a);throw new Error(o)}}function p(){console.log("updateAuthUI called");const e=w(),t=T();document.querySelectorAll('[data-auth="logged-in"]').forEach(a=>{a.classList.toggle("hidden",!e)}),document.querySelectorAll('[data-auth="logged-out"]').forEach(a=>{a.classList.toggle("hidden",e)}),document.querySelectorAll('[data-auth="username"]').forEach(a=>{a.textContent=t?t.username:""})}async function ne(e){try{const t=await fetch("https://v2.api.noroff.dev/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.json();if(!t.ok)throw new Error(a.error||"Failed to register user");return a.data}catch(t){throw new Error(`Registration error: ${t.message}`)}}async function se(e){const a=(await l("/auth/login",{method:"POST",body:JSON.stringify(e)})).data;return q(a),p(),a}function le(){ae(),localStorage.removeItem("apiKey"),p()}function B(e){return e.length>=8&&/[A-Za-z]/.test(e)&&/[0-9]/.test(e)&&/[^A-Za-z0-9]/.test(e)}function M(e){return e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e):!1}function F(e){return/^[A-Za-zÆØÅæøå\s'-]{2,50}$/.test(e.trim())}function L(e,t){t?(e.classList.remove("text-red-500"),e.classList.add("text-green-500")):(e.classList.remove("text-green-500"),e.classList.add("text-red-500"))}function ie(){return`
    <form id="newuser-form" class="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        class="w-full p-2 rounded bg-gray-800"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        class="w-full p-2 rounded bg-gray-800"
        required
      />
      <p id="email-rule" class="text-sm text-gray-500">
        Please enter a valid email address.
      </p>

      <input
        type="password"
        name="password"
        placeholder="Password"
        class="w-full p-2 rounded bg-gray-800"
        required
       
      />
      <p id="password-rule" class="text-sm text-gray-500">
        Password must be at least 8 characters long and include a number and a special character.
      </p>

      <button type="submit" class="   w-full mt-4 block text-center cursor-pointer
    rounded-xl px-4 py-2
    font-[Cinzel] text-white
    bg-purple-400/30
    backdrop-blur-md
    border border-white/20
    shadow-lg shadow-purple-900/20
    hover:bg-purple-400/40
    hover:shadow-purple-900/40
    transition-all duration-300">
        Join the Coven
      </button>

      <p id="form-message" class="text-sm mt-2"></p>
    </form>
  `}function ce(){const e=document.getElementById("newuser-form"),t=document.getElementById("form-message");if(!e||!t)return;const a=e.querySelector('input[name="name"]'),o=e.querySelector('input[name="email"]'),r=e.querySelector('input[name="password"]'),n=document.getElementById("email-rule"),s=document.getElementById("password-rule");a.addEventListener("input",()=>{L(n,F(a.value))}),o.addEventListener("input",()=>{L(n,M(o.value))}),r.addEventListener("input",()=>{L(s,B(r.value))}),e.addEventListener("submit",async c=>{c.preventDefault();const d=new FormData(e),v=d.get("password"),$=d.get("email"),u=d.get("name");if(!F(u)){t.textContent="Please enter a valid witch name.",t.className="text-red-500";return}if(!M($)){t.textContent="Please enter a valid email address.",t.className="text-red-500";return}if(!B(v)){t.textContent="Password must be at least 8 characters long and include a number and a special character.",t.className="text-red-500";return}const Y={name:d.get("name"),email:d.get("email"),password:d.get("password")};try{await ne(Y),t.textContent="Registration successful! Welcome to the Coven.",t.className="text-green-500",e.reset(),history.pushState(null,null,"/login"),g()}catch(G){t.textContent=G.message,t.className="text-red-500"}})}function de(){return`
    <section class="p-6">
      <h1 class="text-2xl font-[Cinzel] text-purple-400 mb-4 text-center">
        Create Your Coven Profile
      </h1>

      <p class="text-gray-400 mb-6 text-center">
        Step into the circle and let your magic be known.
      </p>

      ${ie()}

      <p class="text-sm text-gray-500 mt-4 text-center">
      already have a coven profile?
        <a href="#" data-open-login-modal class="text-purple-400 hover:underline">
          Enter the Circle
        </a>
      </p>
    </section>
  `}document.title="Hex & Chill - Join the Coven";async function ue(e){return await l("/social/posts",{method:"POST",body:JSON.stringify(e)})}async function me(e=""){return await l(`/social/posts?_author=true&_comments=true&_sort=created&_order=desc${e}`)}async function pe(e){return await l(`/social/posts/${e}?_author=true&_comments=true`)}function fe(){const e=document.querySelector("[data-create-post-form]");e&&e.addEventListener("submit",async t=>{t.preventDefault();const a=e.title.value.trim(),o=e.body.value.trim(),r=e.tags.value?e.tags.value.split(",").map(c=>c.trim()):[],n=e.image?.value.trim(),s={title:a,body:o,tags:r,media:n?{url:n,alt:a}:null};console.log("create post initialized");try{await ue(s),e.reset(),document.dispatchEvent(new Event("post:created"))}catch(c){alert(c.message||"Failed to create post. Please try again.")}})}function ge(){return`
    
<section>
    <form data-create-post-form class="mt-20 max-w-md mx-auto p-6 bg-[var(--color-bg-surface)] border border-gray-700 rounded-lg shadow-sm">
    <input type="text" name="title" placeholder="Post title" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" required />
    <textarea name="body" placeholder="Your spellcasting thoughts..." class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" required></textarea>
    <input type="text" name="tags" placeholder="Tags (comma separated)" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" />
    <input type="url" name="image" placeholder="Media URL (optional)" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" />
    <button type="submit" class="w-full py-2 rounded bg-purple-400 hover:bg-purple-500 transition font-[Cinzel] text-white">
      Cast Spell
    </button>
  </form>
    </section>
    `}function he(){return`
    <div
      id="login-modal"
      class="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 hidden"
    >
      <div class="relative bg-white rounded-lg p-6 w-96">
        <button
          id="close-login-modal"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 class="text-2xl font-bold mb-4 text-purple-600 font-cinzel">Enter the Circle</h2>

        <form data-login-form class="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            class="border border-gray-300 rounded px-3 py-2"
            autocomplete="email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            class="border border-gray-300 rounded px-3 py-2"
            autocomplete="current-password"
            required
          />

          <button
            type="submit"
            class="bg-purple-500 text-white rounded px-4 py-2 hover:bg-purple-600 transition"
          >
            Enter the Circle
          </button>
        </form>
        <p class="mt-4 text-sm text-gray-600">
          Forgotten your incantation?
          <a href="/resetpassword" data-link class="text-purple-600 hover:underline">Reset it</a>
        </p>
        <p class="mt-4 text-sm text-gray-600">
          Don't have a coven yet?
          <a href="/newuser" data-link class="text-purple-600 hover:underline">Join us</a>
        </p>
      </div>
    </div>
  `}let E=!1;function I(){if(console.log("initLoginModal called, initialized:",E),E)return;const e=document.getElementById("login-modal");if(console.log("Modal element:",e),!e){console.log("Modal not found, returning early");return}E=!0;const t=document.getElementById("close-login-modal"),a=document.querySelector("[data-login-form]");document.addEventListener("click",o=>{o.target.closest("[data-open-login-modal]")&&(o.preventDefault(),e.classList.remove("hidden"),console.log("Login Modal opened"))}),t?.addEventListener("click",()=>{e.classList.add("hidden")}),e.addEventListener("click",o=>{o.target===e&&e.classList.add("hidden")}),e.addEventListener("click",o=>{o.target.closest("a[data-link]")&&(o.preventDefault(),e.classList.add("hidden"))}),window.addEventListener("popstate",()=>{e.classList.add("hidden")}),a?.addEventListener("submit",async o=>{o.preventDefault();const r=a.email.value.trim(),n=a.password.value.trim();if(!r||!n){alert("Please enter both email and password.");return}try{await se({email:r,password:n}),e.classList.add("hidden")}catch(s){alert(s.message)}})}function ye(){return w()?(history.pushState(null,null,"/"),!1):!0}function be(e){return()=>ye()?e():""}let _;function i(e,t="error",a=3e3){let o=document.getElementById("toast");o||(o=document.createElement("div"),o.id="toast",o.className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white text-sm z-50 opacity-0 transition-opacity duration-300",document.body.appendChild(o)),o.textContent=e,o.classList.remove("bg-green-500","bg-red-500","bg-yellow-500"),o.classList.add(t==="success"?"bg-green-500":t==="warning"?"bg-yellow-500":"bg-red-500"),o.style.opacity="1",clearTimeout(_),_=setTimeout(()=>{o.style.opacity="0"},a)}let D=[];function R(e){D=e||[]}function O(){return D}async function xe(e){return await l(`/social/posts/${e}`,{method:"DELETE"})}async function we(e,{append:t=!1}={}){const a=document.getElementById("posts");if(!a)return;const o=O(),r=T(),n=await Promise.all(e.map(async s=>{const c=o.some(u=>u.name===s.author?.name),d=r?.username===s.author?.name,v=r&&s.author?.name===r.username,$=s.media?.url||await N(s.id,s.tags?.[0]||"fantasy");return`
      
        <article data-post="${s.id}" class=" post-card border border-gray-700 rounded-lg p-4 bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto break-words ">
        ${d?`
          <div class="relative flex justify-end">
          <button
          class="post-menu-toggle text-gray-400 hover:text-white"
          data-post-id="${s.id}">
          <i class="fa-solid fa-ellipsis"></i>
          </button>
          <div class="post-menu hidden absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded shadow-lg z-10"
          data-menu-for="${s.id}">
          <button class="edit-post w-full text-left px-4 py-2 hover:bg-gray-700" data-post-id="${s.id}">Edit</button>
          <button class="delete-post w-full text-left px-4 py-2 hover:bg-gray-700" data-post-id="${s.id}">Delete</button>
          </div>
          </div>
        `:""}
        <a href="/post/${s.id}" data-link class="block">
        <div>
        <img
          src="${$}"
          alt="Avatar of ${s.author?.name||"Unknown"}"
          class="h-120 w-120 mb-2 object-cover"
        />
        </div>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
            🕯️ ${s.title||"Unknown"}
          </h3>
          <i class="fa-regular fa-thumbs-up cursor-pointer"></i>
          
        </div>
              <hr class="my-4 border-gray-700"/>
              <div class="flex justify-between items-start gap-2">
              <a href="/profiles/${s.author?.name||"Unknown"}" data-link><h4 class="text-sm font-[Cinzel] text-gray-400 mb-2">
                Posted by ${s.author?.name||"Unknown"} on ${new Date(s.created).toLocaleDateString()}
              </h4></a></a>
              <div 
              data-follow-container class="${v?"hidden":""}">
              <button
              type="button"
              data-auth="follow"
              data-username="${s.author?.name}"
              class="${c?"hidden":""} text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition">
            Follow
          </button>
          <button
          type="button"
          data-auth="followed"
          data-username="${s.author?.name}"
          class="${c?"":"hidden"} text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition">
            Unfollow
          </button>
          </div>
              </div>
          <p class="font-[Inter] text-gray-300 mt-2">
            ${s.body}
          </p>
          <form data-comment-form data-post-id="${s.id}" class="mt-3 flex gap-2">
  <input
    type="text"
    name="comment"
    placeholder="Send a whisper..."
    class="flex-1 p-2 rounded bg-gray-800 text-sm"
    required
  />
  <button
    type="submit"
    class="text-sm px-3 py-1 rounded bg-purple-500 hover:bg-purple-600 transition"
  >
    Whisper
  </button>
</form>

          <div class="mt-4 space-y-2" data-comments-container>
          ${s.comments?.map(u=>`
            <div class="text-sm text-gray-500 border-t border-gray-700 pt-2">
              <p class="font-[Cinzel] text-purple-400">
                ${u.author?.name||"Unknown"} says:
              </p>
              <p class="font-[Inter] text-gray-300 mt-1">
                ${u.body}
              </p>
            </div>
          `).join("")}
           </div>
          
        </article>
      `}));t?a.insertAdjacentHTML("beforeend",n.join("")):a.innerHTML=n.join("")}document.addEventListener("click",e=>{const t=e.target.closest(".post-menu-toggle");if(!t)return;const a=t.dataset.postId;document.querySelector(`[data-menu-for="${a}"]`)?.classList.toggle("hidden")});document.addEventListener("click",e=>{!e.target.closest(".post-menu")&&!e.target.closest(".post-menu-toggle")&&document.querySelectorAll(".post-menu").forEach(t=>{t.classList.add("hidden")})});document.addEventListener("click",async e=>{const t=e.target.closest(".delete-post");if(!t)return;const a=t.dataset.postId;if(confirm("Are you sure you want to delete this post?"))try{await xe(a),document.querySelector(`[data-post="${a}"]`)?.remove(),i("Post deleted successfully","success")}catch(o){console.error("Failed to delete post:",o),i("Failed to delete post. Please try again.","error")}});function J(e=""){return l(`/social/profiles${e}`)}function ve(e,t=""){return l(`/social/profiles/${e}${t}`)}function $e(e,t=""){return l(`/social/profiles/${e}/posts${t}`)}const W=`
    flex flex-col items-center gap-2
    text-gray-300 opacity-80
    hover:text-purple-400 hover:opacity-100
    transition
  `,Ce=`
    w-12 h-12
    rounded-full
    border-2 border-gray-300/60
    flex items-center justify-center
    transition
    hover:shadow-[0_0_12px_rgba(199,125,255,0.4)]
  `;let b=0;const U=6;let x=!1,f=!1;async function K(e=!1){if(f||x)return;f=!0;const t=document.getElementById("load-more-posts");t&&(t.textContent="Loading...");try{const o=(await me(`&page=${b}&limit=${U}`)).data;if(!o.length){t?.remove(),f=!1;return}await we(o,{append:e}),o.length<U?(x=!0,t?.remove()):b++}catch(a){console.error("Failed to load more posts:",a),i("Failed to load more posts. Please try again.","error")}t&&(t.textContent="Load More"),f=!1}function Le(){if(document.getElementById("load-more-posts"))return;const e=document.getElementById("app"),t=document.createElement("button");t.id="load-more-posts",t.textContent="Load More",t.className=`
    mt-6 px-4 py-2 rounded-md border border-gray-300/60 hover:border-purple-400 transition
    ${W}
    bg-transparent
    mx-auto mb-10
  `,t.addEventListener("click",()=>K(!0)),e.appendChild(t)}async function Ee(){const e=document.getElementById("posts");if(e){if(!w()){b=1,x=!1,f=!1,e.innerHTML=`   <section class="p-6 space-y-6">
      <div>
      <img
      src="/JS2_CA/witch.jpg"
      alt="Witch avatar"
      class="w-60 h-auto  border-4 border-gray-300/70 p-1 mx-auto mb-4"
    />
      </div>
      <h1 class="font-[Cinzel] text-purple-400 font-bold text-xl text-center">
Welcome to Hex & Chill
      </h1>
      <h3 class="text-gray-400 text-center">
Where witches and wizards gather to share their magical tales and connect with fellow familiars.
      </h3>
      <h3 class="text-gray-400 text-center">
Explore the latest posts from our coven, discover new profiles, and let your magic be known.
      </h3>

        <button 
        type="button" 
        data-open-login-modal
        data-auth="logged-out"
        class="${W} bg-transparent mx-auto mt-6 px-4 py-2 rounded-md border border-gray-300/60 hover:border-purple-400 transition">
          <div class="${Ce}">
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Enter the Circle</span>
        </button>
 </section>`,document.getElementById("load-more-posts")?.remove();return}e.innerHTML="",b=1,x=!1;try{const t=T();if(t){const a=await l(`/social/profiles/${t.username}?_following=true`);R(a.data.following||[])}await Promise.all([K(!1),J()]),Le()}catch(t){console.error("Failed to fetch posts:",t),t.message.includes("API key")?i("Please log out and log back in to refresh your API key","error"):i("Failed to load posts. Please try again.","error")}}}function Pe(){return`
    <section class="p-6">
    <h1 class="text-2xl font-[Cinzel] text-purple-400 mb-4 text-center">
      Coven Profiles
    </h1>
    <p class="text-gray-400 mb-6 text-center">
      Meet the witches of our coven and discover their magical tales.
    </p>
    <div id="profiles-list" class="grid gap-4">
      <!-- Profiles will be rendered here -->
    </div>
  </section>
    `}document.title="Hex & Chill - Coven Profiles";async function Ie(e){const t=document.getElementById("profiles-container");if(!t){console.warn("Profiles container not found");return}if(!e||e.length===0){t.innerHTML='<p class="text-center text-gray-500">No profiles found.</p>';return}t.innerHTML=await Promise.all(e.map(async a=>`
    <div class="bg-white rounded-lg shadow p-4">
      <img 
        src="${a.avatar?.url||await S()}" 
        alt="${a.name}"
        class="w-16 h-16 rounded-full mx-auto mb-2"
      />
      <h3 class="text-center font-bold text-purple-600">${a.name}</h3>
      <p class="text-center text-sm text-gray-600">${a.bio||"No bio available"}</p>
      <div class="flex justify-center gap-4 mt-2 text-sm text-gray-500">
        <span>Posts: ${a._count?.posts||0}</span>
        <span>Followers: ${a._count?.followers||0}</span>
      </div>
    </div>
  `).join(""))}async function Se(){if(!w()){i("You must be logged in to view profiles.");return}try{const e=await J();await Ie(e.data)}catch(e){console.error("Failed to load profiles:",e.message),i("Failed to load profiles. Please try again later.")}}function Ae(e){return`
     <section class="p-6 max-w-xl mx-auto">
      <h1 class="text-2xl font-[Cinzel] text-purple-400 mb-4 text-center">
        ${e}'s Grimoire
      </h1>

      <div id="profile-detail">
        <!-- Profile data loads here -->
      </div>

      <div id="profile-posts" class="mt-6 space-y-4">
        <!-- User posts load here -->
      </div>
    </section>
  `}function ke(e){const t=e.avatar?.url;return typeof t=="string"&&t.trim()!==""?t:e.avatar.url}async function Te(e){try{const[t,a]=await Promise.all([ve(e,"?_posts=true$_followers=true&following=true"),$e(e)]),o=t.data,r=a.data;document.getElementById("profile-detail").innerHTML=`
            <div class="text-center">
            <img
            src="${ke(o)}"
            alt="Avatar of ${o.name}"
            class="h-32 w-32 rounded-full mb-4 mx-auto"
            />
            <h2 class="text-2xl font-[Cinzel] font-semibold text-purple-500">
                🕯️ ${o.name}
            </h2>
            <p class="font-[Inter] text-gray-500 mt-2">
                ${o.bio||"No bio available."}
            </p>
            <p class="text-sm text-gray-500">
                posts: ${o._count?.posts??0}
                followers: ${o._count?.followers??0}
                following: ${o._count?.following??0}
            </p>
            </div>
        `,document.getElementById("profile-posts").innerHTML=r.map(n=>`
            <article class="border p-4 rounded-lg bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto">
                <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
                    🕯️ ${o.name}
                </h3>
                <p class="font-[Inter] text-gray-300 mt-2">
                    ${n.body}
                </p>
            </article>
        `).join("")}catch(t){console.error("Error fetching profile details:",t),i("Failed to load profile details. Please try again later.","error")}}async function ze(e){const t=document.getElementById("app"),a=e.media?.url||await N(e.id,e.tags?.[0]||"fantasy");t.innerHTML=`
    <section class="max-x-2xl mx-auto p-6">
    <button onclick="history.back()"
    class="mb-6 text-purple-400 hover:underline">
    <i class="fa-solid fa-arrow-left"></i> Back
    </button>
          <article class="border border-gray-700 rounded-lg p-6 bg-[var(--color-bg-surface)]">

        <img src="${a}" class="w-full mb-4 rounded" />

        <h1 class="text-2xl font-[Cinzel] text-purple-400">
          ${e.title}
        </h1>

        <p class="text-sm text-gray-400 mt-2">
          Posted by ${e.author?.name}
          on ${new Date(e.created).toLocaleDateString()}
        </p>

        <p class="mt-6 text-gray-300 font-[Inter]">
          ${e.body}
        </p>

        <hr class="my-6 border-gray-700"/>

        <h2 class="font-[Cinzel] text-lg text-purple-300 mb-3">
          Whispers (${e.comments?.length||0})
        </h2>

        <div class="space-y-4">
          ${e.comments?.length?e.comments.map(o=>`
                <div class="border-t border-gray-700 pt-3">
                  <p class="text-purple-400 font-[Cinzel]">
                    ${o.author?.name}
                  </p>
                  <p class="text-gray-300">
                    ${o.body}
                  </p>
                </div>
              `).join(""):'<p class="text-gray-500">No whispers yet...</p>'}
        </div>

      </article>
    </section>
  `}async function Be(e){try{const t=await pe(e);await ze(t.data)}catch(t){console.error("Failed to load post:",t.message),i("Failed to load post. Please try again later.","error")}}const Me={"/":H,"/about":V,"/contact":Z,"/newuser":be(de),"/profiles":Pe,"/createPost":ge};async function g(){const e="/JS2_CA";let t=window.location.pathname;if(t.startsWith(e)&&(t=t.slice(e.length)||"/"),document.getElementById("sidenav").innerHTML=ee(),document.getElementById("header").innerHTML=X(),t.startsWith("/profiles/")&&t!=="/profiles"){const r=t.split("/")[2];document.getElementById("app").innerHTML=Ae(r),document.getElementById("sidenavRight").innerHTML=await z([]),I(),p(),await Te(r);return}const a=Me[t]||H;document.getElementById("app").innerHTML=a();let o=[];if(t==="/"&&(o=(await Ee())?.profiles||[],o=await Promise.all(o.slice(0,6).map(async n=>{if(n.avatar?.url)return n;const s=await S();return{...n,avatar:{url:s,alt:`${n.name} avatar`}}}))),document.getElementById("sidenavRight").innerHTML=await z(o),I(),p(),t==="/newuser"&&ce(),t==="/profiles"&&Se(),t==="/createPost"&&fe(),t.startsWith("/post/")){const r=t.split("/post/")[1];Be(r);return}}function Fe(){const e=localStorage.getItem("authUser");if(!e)return null;try{return JSON.parse(e)}catch{return null}}async function _e(e){return await l(`/social/profiles/${e}/follow`,{method:"PUT"})}async function Ue(e){return await l(`/social/profiles/${e}/unfollow`,{method:"PUT"})}function He(){document.addEventListener("click",async e=>{const t=e.target.closest('button[data-auth="follow"]'),a=e.target.closest('button[data-auth="followed"]');if(!t&&!a)return;const r=(t||a).dataset.username;try{let n;t?n=await _e(r):n=await Ue(r),R(n.data.following),Ne(r)}catch(n){console.error("Error updating follow status:",n),alert("Failed to update follow status. Please try again.")}})}function Ne(e){const a=O().some(r=>r.name===e);document.querySelectorAll("[data-follow-container]").forEach(r=>{const n=r.querySelector('[data-auth="follow"]'),s=r.querySelector('[data-auth="followed"]');!n||!s||n.dataset.username===e&&(n.classList.toggle("hidden",a),s.classList.toggle("hidden",!a))})}function qe(e,t){return l(`/social/posts/${e}/comment`,{method:"POST",body:JSON.stringify({body:t})})}function je(){document.addEventListener("submit",async e=>{const t=e.target.closest("[data-comment-form]");if(!t)return;e.preventDefault();const a=t.dataset.postId,r=t.querySelector('input[name="comment"]').value.trim();if(r)try{const n=await qe(a,r);De(t,n.data),t.reset()}catch(n){console.error("Failed to create comment:",n.message)}})}function De(e,t){const a=e.closest("article").querySelector("[data-comments-container]");if(!a)return;const o=`
   <div class="text-sm text-gray-500 border-t border-gray-700 pt-2">
      <p class="font-[Cinzel] text-purple-400">
        ${t.owner} says:
      </p>
      <p class="font-[Inter] text-gray-300 mt-1">
        ${t.body}
      </p>
    </div>`;a.insertAdjacentHTML("afterbegin",o)}localStorage.setItem("apiKey","90d9d08a-808b-4c1f-8475-b0584204612f");document.addEventListener("auth:changed",()=>{p(),window.location.pathname.includes("/JS2_CA/")&&g()});const Re="/JS2_CA";function P(e){history.pushState(null,null,Re+e),g()}document.addEventListener("click",e=>{if(e.target.closest("[data-open-create-post]")){e.preventDefault(),P("/createPost");return}if(e.target.closest("#logout-button")){e.preventDefault(),le(),P("/");return}const t=e.target.closest("a[data-link]");t&&(e.preventDefault(),P(t.getAttribute("href")))});window.addEventListener("popstate",g);document.body.insertAdjacentHTML("beforeend",he());I();function Oe(){const e=Fe();if(!e){p();return}q(e)}He();je();Oe();k();g();

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();function A(){return`
      <div id="posts" class="space-y-6">
      </div>
  `}document.title="Hex & Chill - Home";function B(){return`
    <h1>Welcome to the About Page</h1>
    <p>This is the about page of our application.</p>
  `}function F(){return`
    <h1>Welcome to the Contact Page</h1>
    <p>This is the contact page of our application.</p>
  `}function M(){return`
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
  `}const H="/JS2_CA/witchicon.png";function N(){const e=`
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
  src="${H}"
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
  `}const j="cKEP0soLY46mO4r3od49mv8igrBEx40SIxANJlGmqIo",g=new URL("/JS2_CA/assets/storiesplaceholder-BEkCxyvR.png",import.meta.url).href;let m=null,y=new Map;async function v(){if(m)return m;try{const t=await fetch("https://api.unsplash.com/photos/random?query=portrait fantasy portrait face&orientation=squarish&content_filter=high&client_id=cKEP0soLY46mO4r3od49mv8igrBEx40SIxANJlGmqIo");if(!t.ok)throw new Error;return m=(await t.json())?.urls?.small||g,m}catch{return g}}async function R(e,t="fantasy"){if(y.has(e))return y.get(e);try{const a=await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(t)}&orientation=landscape&content_filter=high&client_id=${j}`);if(!a.ok)throw new Error;const n=(await a.json())?.urls?.regular||g;return y.set(e,n),n}catch{return g}}async function L(e=[]){return`
    <aside class="hidden md:flex w-64 flex-col bg-[#121212] px-6 py-8 border-l border-gray-700">

      <h1 class="font-[Cinzel] mb-10 text-xl mx-auto font-semibold text-purple-400">
        Familiars
      </h1>

      <section class="flex flex-col items-center gap-4 px-6 py-4 overflow-x-auto border-b border-gray-700 bg-[#121212]">
    
        ${(await Promise.all(e.slice(0,6).map(async t=>{const a=t.author?.avatar?.url||await v();return`
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
  `}let c=null;const C="authUser";function I(e){c=e,localStorage.setItem(C,JSON.stringify(e)),console.log("Auth state updated:","auth:changed DISPATCHED"),document.dispatchEvent(new Event("auth:changed"))}function q(){c=null,localStorage.removeItem(C),document.dispatchEvent(new Event("auth:changed"))}function $(){if(c)return c;const e=localStorage.getItem(C);if(!e)return null;try{return c=JSON.parse(e),c}catch{return null}}function h(){return!!k()}function P(){const e=$();return e?{username:e.name,email:e.email}:null}function k(){return $()?.accessToken||null}function D(e){return e.message==="Failed to fetch"?"Network error: Please check your internet connection and try again.":e.message.includes("API error")?"Server error: Something went wrong on our end. Please try again later.":e.message.includes("Registration error")?"Registration failed: Please ensure all fields are filled out correctly and try again.":e.message.includes("Login error")?"Login failed: Incorrect username or password. Please try again.":"An unexpected error occurred. Please try again."}const O="https://v2.api.noroff.dev";async function l(e,t={}){try{const a=k(),o={"Content-Type":"application/json","X-Noroff-API-Key":"90d9d08a-808b-4c1f-8475-b0584204612f",...t.headers};a&&(o.Authorization=`Bearer ${a}`);const n=await fetch(`${O}${e}`,{...t,headers:o}),r=await n.json();if(!n.ok)throw new Error(r.errors?.[0]?.message||"API error");return r}catch(a){console.error("API Client Error:",a.message);const o=D(a);throw new Error(o)}}function d(){console.log("updateAuthUI called");const e=h(),t=P();document.querySelectorAll('[data-auth="logged-in"]').forEach(a=>{a.classList.toggle("hidden",!e)}),document.querySelectorAll('[data-auth="logged-out"]').forEach(a=>{a.classList.toggle("hidden",e)}),document.querySelectorAll('[data-auth="username"]').forEach(a=>{a.textContent=t?t.username:""})}async function J(e){try{const t=await fetch("https://v2.api.noroff.dev/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.json();if(!t.ok)throw new Error(a.error||"Failed to register user");return a.data}catch(t){throw new Error(`Registration error: ${t.message}`)}}async function K(e){const a=(await l("/auth/login",{method:"POST",body:JSON.stringify(e)})).data;return I(a),d(),a}function W(){q(),localStorage.removeItem("apiKey"),d()}function Y(e){return e.length>=8&&/[A-Za-z]/.test(e)&&/[0-9]/.test(e)&&/[^A-Za-z0-9]/.test(e)}function G(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function V(e){return e.trim().length>=2}function Z(){return`
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

      <input
        type="password"
        name="password"
        placeholder="Password"
        class="w-full p-2 rounded bg-gray-800"
        required
      />

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
  `}function X(){const e=document.getElementById("newuser-form"),t=document.getElementById("form-message");!e||!t||e.addEventListener("submit",async a=>{a.preventDefault();const o=new FormData(e),n=o.get("password"),r=o.get("email"),s=o.get("name");if(!V(s)){t.textContent="Please enter a valid witch name.",t.className="text-red-500";return}if(!G(r)){t.textContent="Please enter a valid email address.",t.className="text-red-500";return}if(!Y(n)){t.textContent="Password must be at least 8 characters long and include a number and a special character.",t.className="text-red-500";return}const i={name:o.get("name"),email:o.get("email"),password:o.get("password")};try{await J(i),t.textContent="Registration successful! Welcome to the Coven.",t.className="text-green-500",e.reset(),history.pushState(null,null,"/login"),f()}catch(E){t.textContent=E.message,t.className="text-red-500"}})}function Q(){return`
    <section class="p-6">
      <h1 class="text-2xl font-[Cinzel] text-purple-400 mb-4 text-center">
        Create Your Coven Profile
      </h1>

      <p class="text-gray-400 mb-6 text-center">
        Step into the circle and let your magic be known.
      </p>

      ${Z()}

      <p class="text-sm text-gray-500 mt-4 text-center">
      already have a coven profile?
        <a href="#" data-open-login-modal class="text-purple-400 hover:underline">
          Enter the Circle
        </a>
      </p>
    </section>
  `}document.title="Hex & Chill - Join the Coven";async function ee(e){return await l("/social/posts",{method:"POST",body:JSON.stringify(e)})}async function te(e=""){return await l(`/social/posts?_author=true&_comments=true${e}`)}function ae(){const e=document.querySelector("[data-create-post-form]");e&&e.addEventListener("submit",async t=>{t.preventDefault();const a=e.title.value.trim(),o=e.body.value.trim(),n=e.tags.value?e.tags.value.split(",").map(i=>i.trim()):[],r=e.image?.value.trim(),s={title:a,body:o,tags:n,media:r?{url:r,alt:a}:null};console.log("create post initialized");try{await ee(s),e.reset(),document.dispatchEvent(new Event("post:created"))}catch(i){alert(i.message||"Failed to create post. Please try again.")}})}function oe(){return`
    
<section>
    <form data-create-post-form class="max-w-md mx-auto p-6 bg-[var(--color-bg-surface)] border border-gray-700 rounded-lg shadow-sm">
    <input type="text" name="title" placeholder="Post title" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" required />
    <textarea name="body" placeholder="Your spellcasting thoughts..." class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" required></textarea>
    <input type="text" name="tags" placeholder="Tags (comma separated)" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" />
    <input type="url" name="image" placeholder="Media URL (optional)" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" />
    <button type="submit" class="w-full py-2 rounded bg-purple-400 hover:bg-purple-500 transition font-[Cinzel] text-white">
      Cast Spell
    </button>
  </form>
    </section>
    `}function re(){return`
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
  `}let b=!1;function w(){if(console.log("initLoginModal called, initialized:",b),b)return;const e=document.getElementById("login-modal");if(console.log("Modal element:",e),!e){console.log("Modal not found, returning early");return}b=!0;const t=document.getElementById("close-login-modal"),a=document.querySelector("[data-login-form]");document.addEventListener("click",o=>{o.target.closest("[data-open-login-modal]")&&(o.preventDefault(),e.classList.remove("hidden"),console.log("Login Modal opened"))}),t?.addEventListener("click",()=>{e.classList.add("hidden")}),e.addEventListener("click",o=>{o.target===e&&e.classList.add("hidden")}),e.addEventListener("click",o=>{o.target.closest("a[data-link]")&&(o.preventDefault(),e.classList.add("hidden"))}),window.addEventListener("popstate",()=>{e.classList.add("hidden")}),a?.addEventListener("submit",async o=>{o.preventDefault();const n=a.email.value.trim(),r=a.password.value.trim();if(!n||!r){alert("Please enter both email and password.");return}try{await K({email:n,password:r}),e.classList.add("hidden")}catch(s){alert(s.message)}})}function ne(){return h()?(history.pushState(null,null,"/"),!1):!0}function se(e){return()=>ne()?e():""}let S;function u(e,t="error",a=3e3){let o=document.getElementById("toast");o||(o=document.createElement("div"),o.id="toast",o.className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white text-sm z-50 opacity-0 transition-opacity duration-300",document.body.appendChild(o)),o.textContent=e,o.classList.remove("bg-green-500","bg-red-500","bg-yellow-500"),o.classList.add(t==="success"?"bg-green-500":t==="warning"?"bg-yellow-500":"bg-red-500"),o.style.opacity="1",clearTimeout(S),S=setTimeout(()=>{o.style.opacity="0"},a)}let z=[];function T(e){z=e||[]}function U(){return z}async function le(e){const t=document.getElementById("posts");if(!t)return;const a=U(),o=P(),n=await Promise.all(e.slice(0,6).map(async r=>{const s=a.some(p=>p.name===r.author?.name),i=o&&r.author?.name===o.username;return`
      
        <article class="border border-gray-700 rounded-lg p-4 bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto break-words">
        <div>
        <img
          src="${r.media?.url||await R(r.id,r.tags?.[0]||"fantasy")}"
          alt="Avatar of ${r.author?.name||"Unknown"}"
          class="h-120 w-120 mb-2 object-cover"
        />
        </div>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
            🕯️ ${r.title||"Unknown"}
          </h3>
          <i class="fa-regular fa-thumbs-up cursor-pointer"></i>
          
        </div>
              <hr class="my-4 border-gray-700"/>
              <div class="flex justify-between items-start gap-2">
              <a href="/profiles/${r.author?.name||"Unknown"}" data-link><h4 class="text-sm font-[Cinzel] text-gray-400 mb-2">
                Posted by ${r.author?.name||"Unknown"} on ${new Date(r.created).toLocaleDateString()}
              </h4></a>
              <div 
              data-follow-container class="${i?"hidden":""}">
              <button
              type="button"
              data-auth="follow"
              data-username="${r.author?.name}"
              class="${s?"hidden":""} text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition">
            Follow
          </button>
          <button
          type="button"
          data-auth="followed"
          data-username="${r.author?.name}"
          class="${s?"":"hidden"} text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition">
            Unfollow
          </button>
          </div>
              </div>
          <p class="font-[Inter] text-gray-300 mt-2">
            ${r.body}
          </p>
          <form data-comment-form data-post-id="${r.id}" class="mt-3 flex gap-2">
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

          <div class="mt-4 space-y-2">
          ${r.comments?.map(p=>`
            <div class="text-sm text-gray-500 border-t border-gray-700 pt-2">
              <p class="font-[Cinzel] text-purple-400">
                ${p.author?.name||"Unknown"} says:
              </p>
              <p class="font-[Inter] text-gray-300 mt-1">
                ${p.body}
              </p>
            </div>
          `).join("")}
           </div>
          
        </article>
      `}));t.innerHTML=n.join("")}function _(e=""){return l(`/social/profiles${e}`)}function ie(e,t=""){return l(`/social/profiles/${e}${t}`)}function ce(e,t=""){return l(`/social/profiles/${e}/posts${t}`)}const de=`
    flex flex-col items-center gap-2
    text-gray-300 opacity-80
    hover:text-purple-400 hover:opacity-100
    transition
  `,ue=`
    w-12 h-12
    rounded-full
    border-2 border-gray-300/60
    flex items-center justify-center
    transition
    hover:shadow-[0_0_12px_rgba(199,125,255,0.4)]
  `;async function fe(){const e=document.getElementById("posts");if(!e)return;if(!h())return e.innerHTML=`   <section class="p-6 space-y-6">
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
        class="${de} bg-transparent mx-auto mt-6 px-4 py-2 rounded-md border border-gray-300/60 hover:border-purple-400 transition">
          <div class="${ue}">
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Enter the Circle</span>
        </button>
 </section>`,console.warn("User not logged in, skipping post fetch"),{profiles:[]};e.innerHTML="";const t=P();if(t){const a=await l(`/social/profiles/${t.username}?_following=true`);T(a.data.following||[])}try{const[a,o]=await Promise.all([te(),_()]);return console.log("first post:",a.data[0]),await le(a.data),console.log("profiles loaded:",o.data),{profiles:o.data}}catch(a){return console.error("Failed to fetch posts:",a),a.message.includes("API key")?u("Please log out and log back in to refresh your API key","error"):u("Failed to load posts. Please try again.","error"),{profiles:[]}}}function pe(){return`
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
    `}document.title="Hex & Chill - Coven Profiles";async function me(e){const t=document.getElementById("profiles-container");if(!t){console.warn("Profiles container not found");return}if(!e||e.length===0){t.innerHTML='<p class="text-center text-gray-500">No profiles found.</p>';return}t.innerHTML=await Promise.all(e.map(async a=>`
    <div class="bg-white rounded-lg shadow p-4">
      <img 
        src="${a.avatar?.url||await v()}" 
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
  `).join(""))}async function ge(){if(!h()){u("You must be logged in to view profiles.");return}try{const e=await _();await me(e.data)}catch(e){console.error("Failed to load profiles:",e.message),u("Failed to load profiles. Please try again later.")}}function he(e){return`
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
  `}function ye(e){const t=e.avatar?.url;return typeof t=="string"&&t.trim()!==""?t:e.avatar.url}async function be(e){try{const[t,a]=await Promise.all([ie(e,"?_posts=true$_followers=true&following=true"),ce(e)]),o=t.data,n=a.data;document.getElementById("profile-detail").innerHTML=`
            <div class="text-center">
            <img
            src="${ye(o)}"
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
        `,document.getElementById("profile-posts").innerHTML=n.map(r=>`
            <article class="border p-4 rounded-lg bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto">
                <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
                    🕯️ ${o.name}
                </h3>
                <p class="font-[Inter] text-gray-300 mt-2">
                    ${r.body}
                </p>
            </article>
        `).join("")}catch(t){console.error("Error fetching profile details:",t),u("Failed to load profile details. Please try again later.","error")}}const xe={"/":A,"/about":B,"/contact":F,"/newuser":se(Q),"/profiles":pe,"/createPost":oe};async function f(){const e="/JS2_CA";let t=window.location.pathname;if(t.startsWith(e)&&(t=t.slice(e.length)||"/"),document.getElementById("sidenav").innerHTML=N(),document.getElementById("header").innerHTML=M(),t.startsWith("/profiles/")&&t!=="/profiles"){const n=t.split("/")[2];document.getElementById("app").innerHTML=he(n),document.getElementById("sidenavRight").innerHTML=await L([]),w(),d(),await be(n);return}const a=xe[t]||A;document.getElementById("app").innerHTML=a();let o=[];t==="/"&&(o=(await fe())?.profiles||[],o=await Promise.all(o.slice(0,6).map(async r=>{if(r.avatar?.url)return r;const s=await v();return{...r,avatar:{url:s,alt:`${r.name} avatar`}}}))),document.getElementById("sidenavRight").innerHTML=await L(o),w(),d(),t==="/newuser"&&X(),t==="/profiles"&&ge(),t==="/createPost"&&ae()}function we(){const e=localStorage.getItem("authUser");if(!e)return null;try{return JSON.parse(e)}catch{return null}}async function ve(e){return await l(`/social/profiles/${e}/follow`,{method:"PUT"})}async function Ce(e){return await l(`/social/profiles/${e}/unfollow`,{method:"PUT"})}function $e(){document.addEventListener("click",async e=>{const t=e.target.closest('button[data-auth="follow"]'),a=e.target.closest('button[data-auth="followed"]');if(!t&&!a)return;const n=(t||a).dataset.username;try{let r;t?r=await ve(n):r=await Ce(n),T(r.data.following),Pe(n)}catch(r){console.error("Error updating follow status:",r),alert("Failed to update follow status. Please try again.")}})}function Pe(e){const a=U().some(n=>n.name===e);document.querySelectorAll("[data-follow-container]").forEach(n=>{const r=n.querySelector('[data-auth="follow"]'),s=n.querySelector('[data-auth="followed"]');!r||!s||r.dataset.username===e&&(r.classList.toggle("hidden",a),s.classList.toggle("hidden",!a))})}localStorage.setItem("apiKey","90d9d08a-808b-4c1f-8475-b0584204612f");document.addEventListener("auth:changed",()=>{d(),window.location.pathname.includes("/JS2_CA/")&&f()});const Ee="/JS2_CA";function x(e){history.pushState(null,null,Ee+e),f()}document.addEventListener("click",e=>{if(e.target.closest("[data-open-create-post]")){e.preventDefault(),x("/createPost");return}if(e.target.closest("#logout-button")){e.preventDefault(),W(),x("/");return}const t=e.target.closest("a[data-link]");t&&(e.preventDefault(),x(t.getAttribute("href")))});window.addEventListener("popstate",f);document.body.insertAdjacentHTML("beforeend",re());w();function Le(){const e=we();if(!e){d();return}I(e)}$e();Le();$();f();

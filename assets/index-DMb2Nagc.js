(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();function de(){return`
      <div id="posts" class="space-y-6">
      </div>
  `}document.title="Hex & Chill - Home";function Pe(){return`
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
  `}const Ie="/JS2_CA/witchicon.png";function Ne(){const e=`
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
  src="${Ie}"
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

        <button
        type="button"
        data-open-familiars
        class="${e}">
          <div class="${t}">
            <i class="fa-solid fa-crow"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Familiars</span>
        </button>

        <button
        type="button"
        data-open-search
        class="${e}">
          <div class="${t}">
            <i class="fa-solid fa-magnifying-glass"></i>         </div>
          <span class="text-xs font-[Cinzel]">Scry</span>
        </button>

        <button 
        type="button" 
        data-open-own-profile
        class="${e} bg-transparent">
          <div class="${t}">
            <i class="fa-solid fa-hat-wizard"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Coven Profile</span>
        </button>

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
  `}const Se="cKEP0soLY46mO4r3od49mv8igrBEx40SIxANJlGmqIo",D=new URL("/JS2_CA/assets/storiesplaceholder-BEkCxyvR.png",import.meta.url).href;let R=null,Y=new Map;async function W(){if(R)return R;try{const t=await fetch("https://api.unsplash.com/photos/random?query=portrait fantasy portrait face&orientation=squarish&content_filter=high&client_id=cKEP0soLY46mO4r3od49mv8igrBEx40SIxANJlGmqIo");if(!t.ok)throw new Error;return R=(await t.json())?.urls?.small||D,R}catch{return D}}async function ue(e,t="fantasy"){if(Y.has(e))return Y.get(e);try{const o=await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(t)}&orientation=landscape&content_filter=high&client_id=${Se}`);if(!o.ok)throw new Error;const a=(await o.json())?.urls?.regular||D;return Y.set(e,a),a}catch{return D}}let me=[];function X(e){me=e||[]}function F(){return me}async function te(){const e=F(),t=document.createElement("aside");t.className="hidden md:flex w-64 flex-col bg-[#121212] px-6 py-8 border-l border-gray-700";const o=document.createElement("h1");o.className="font-[Cinzel] mb-10 text-xl mx-auto font-semibold text-purple-400",o.textContent="Familiars",t.appendChild(o);const n=document.createElement("section");n.className="flex flex-col items-center gap-4 px-6 py-4 overflow-x-auto border-b border-gray-700 bg-[#121212]";const a=e.slice(0,6);for(const r of a){const l=r.avatar?.url||await W(),s=document.createElement("a");s.href=`/profiles/${r.name}`,s.dataset.link="",s.className="block";const i=document.createElement("div");i.className="flex flex-col items-center gap-3 shrink-0";const u=document.createElement("div");u.className="w-24 h-24 rounded-full border-2 border-purple-400 p-0.5 hover:border-purple-800 transition mb-4 mt-6";const p=document.createElement("img");p.src=l,p.alt=`${r.name} avatar`,p.className="w-full h-full rounded-full object-cover";const h=document.createElement("span");h.className="text-xs font-[Cinzel] text-gray-300",h.textContent=r.name,u.appendChild(p),i.appendChild(u),i.appendChild(h),s.appendChild(i),n.appendChild(s)}return t.appendChild(n),t}let A=null;const Q="authUser";function pe(e){A=e,localStorage.setItem(Q,JSON.stringify(e)),document.dispatchEvent(new Event("auth:changed"))}function ke(){A=null,localStorage.removeItem(Q),document.dispatchEvent(new Event("auth:changed"))}function ee(){if(A)return A;const e=localStorage.getItem(Q);if(!e)return null;try{return A=JSON.parse(e),A}catch{return null}}function M(){return!!fe()}function U(){const e=ee();return e?{username:e.name,email:e.email}:null}function fe(){return ee()?.accessToken||null}function $e(e){return e.message==="Failed to fetch"?"Network error: Please check your internet connection and try again.":e.message.includes("API error")?"Server error: Something went wrong on our end. Please try again later.":e.message.includes("Registration error")?"Registration failed: Please ensure all fields are filled out correctly and try again.":e.message.includes("Login error")?"Login failed: Incorrect username or password. Please try again.":"An unexpected error occurred. Please try again."}const Be="https://v2.api.noroff.dev";async function x(e,t={}){try{const o=fe(),n={"Content-Type":"application/json","X-Noroff-API-Key":"90d9d08a-808b-4c1f-8475-b0584204612f",...t.headers};o&&(n.Authorization=`Bearer ${o}`);const a=await fetch(`${Be}${e}`,{...t,headers:n});let r=null;const l=await a.text();if(r=l?JSON.parse(l):{},!a.ok)throw new Error(r.errors?.[0]?.message||"API error");return r}catch(o){console.error("API Client Error:",o.message);const n=$e(o);throw new Error(n)}}function T(){const e=M(),t=U();document.querySelectorAll('[data-auth="logged-in"]').forEach(o=>{o.classList.toggle("hidden",!e)}),document.querySelectorAll('[data-auth="logged-out"]').forEach(o=>{o.classList.toggle("hidden",e)}),document.querySelectorAll('[data-auth="username"]').forEach(o=>{o.textContent=t?t.username:""})}async function Ae(e){try{const t=await fetch("https://v2.api.noroff.dev/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),o=await t.json();if(!t.ok)throw new Error(o.error||"Failed to register user");return o.data}catch(t){throw new Error(`Registration error: ${t.message}`)}}async function Te(e){const o=(await x("/auth/login",{method:"POST",body:JSON.stringify(e)})).data;return pe(o),T(),o}function Fe(){ke(),localStorage.removeItem("apiKey"),T()}function ne(e){return e.length>=8&&/[A-Za-z]/.test(e)&&/[0-9]/.test(e)&&/[^A-Za-z0-9]/.test(e)}function oe(e){return e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)&&e.toLowerCase().endsWith("@stud.noroff.no"):!1}function ae(e){return/^[A-Za-zÆØÅæøå\s'-]{2,50}$/.test(e.trim())}function G(e,t){t?(e.classList.remove("text-red-500"),e.classList.add("text-green-500")):(e.classList.remove("text-green-500"),e.classList.add("text-red-500"))}function Ue(e){if(!e)return!0;const t=["images.unsplash.com","cdn.pixabay.com","i.imgur.com","images.pexels.com"],o=["porn","sex","nude","nsfw","xxx","adult","violence","gambling","drugs","hate","racism","terrorism"];try{const n=new URL(e);return!(!t.includes(n.hostname)||o.some(a=>e.toLowerCase().includes(a)))}catch(n){return console.error(n),!1}}function qe(){return`
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
  `}function ze(){const e=document.getElementById("newuser-form"),t=document.getElementById("form-message");if(!e||!t)return;const o=e.querySelector('input[name="name"]'),n=e.querySelector('input[name="email"]'),a=e.querySelector('input[name="password"]'),r=document.getElementById("email-rule"),l=document.getElementById("password-rule");o.addEventListener("input",()=>{G(r,ae(o.value))}),n.addEventListener("input",()=>{G(r,oe(n.value))}),a.addEventListener("input",()=>{G(l,ne(a.value))}),e.addEventListener("submit",async s=>{s.preventDefault();const i=new FormData(e),u=i.get("password"),p=i.get("email"),h=i.get("name");if(!ae(h)){t.textContent="Please enter a valid witch name.",t.className="text-red-500";return}if(!oe(p)){t.textContent="Please enter a valid email address.",t.className="text-red-500";return}if(!ne(u)){t.textContent="Password must be at least 8 characters long and include a number and a special character.",t.className="text-red-500";return}const N={name:i.get("name"),email:i.get("email"),password:i.get("password")};try{await Ae(N),t.textContent="Registration successful! Welcome to the Coven.",t.className="text-green-500",e.reset(),history.pushState(null,null,"/login"),I()}catch(w){t.textContent=w.message,t.className="text-red-500"}})}function Me(){return`
    <section class="p-6">
      <h1 class="text-2xl font-[Cinzel] text-purple-400 mb-4 text-center">
        Create Your Coven Profile
      </h1>

      <p class="text-gray-400 mb-6 text-center">
        Step into the circle and let your magic be known.
      </p>

      ${qe()}

      <p class="text-sm text-gray-500 mt-4 text-center">
      already have a coven profile?
        <a href="#" data-open-login-modal class="text-purple-400 hover:underline">
          Enter the Circle
        </a>
      </p>
    </section>
  `}document.title="Hex & Chill - Join the Coven";async function _e(e){return await x("/social/posts",{method:"POST",body:JSON.stringify(e)})}async function ge(e=""){return await x(`/social/posts?_author=true&_comments=true&_sort=created&_order=desc${e}`)}async function he(e){return await x(`/social/posts/${e}?_author=true&_comments=true`)}async function ye(e){return await x(`/social/posts/${e}`,{method:"DELETE"})}async function xe(e,t){return await x(`/social/posts/${e}`,{method:"PUT",body:JSON.stringify(t)})}let re;function g(e,t="error",o=3e3){let n=document.getElementById("toast");n||(n=document.createElement("div"),n.id="toast",n.className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white text-sm z-50 opacity-0 transition-opacity duration-300",document.body.appendChild(n)),n.textContent=e,n.classList.remove("bg-green-500","bg-red-500","bg-yellow-500"),n.classList.add(t==="success"?"bg-green-500":t==="warning"?"bg-yellow-500":"bg-red-500"),n.style.opacity="1",clearTimeout(re),re=setTimeout(()=>{n.style.opacity="0"},o)}function He(){const e=document.querySelector("[data-create-post-form]");e&&e.addEventListener("submit",async t=>{t.preventDefault();const o=e.title.value.trim(),n=e.body.value.trim(),a=e.tags.value?e.tags.value.split(",").map(i=>i.trim()):[],r=e.image?.value.trim();if(r&&!Ue(r)){g("Please use a sage image from unsplash, pixabay, imgur or pexels.","error");return}const l={title:o,body:n,tags:a,media:r?{url:r,alt:o}:null},s=e.dataset.postId;try{s?await xe(s,l):await _e(l),document.dispatchEvent(new Event("post:updated")),history.pushState(null,null,"/"),I(),window.scrollTo(0,0)}catch(i){alert(i.message||"Failed to create post. Please try again.")}})}function Re(e={}){const t=document.createElement("section"),o=document.createElement("form");o.dataset.createPostForm="",o.dataset.postId=e.id||"",o.className="mt-20 max-w-md mx-auto p-6 bg-[var(--color-bg-surface)] border border-gray-700 rounded-lg shadow-sm";const n=document.createElement("input");n.type="text",n.name="title",n.value=e.title||"",n.placeholder="Spell Title",n.className="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]",n.required=!0;const a=document.createElement("textarea");a.name="body",a.placeholder="Your spellbinding thoughts...",a.className="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]",a.required=!0,a.value=e.body||"";const r=document.createElement("input");r.type="text",r.name="tags",r.value=e.tags?e.tags.join(", "):"",r.placeholder="tags (comma separated)",r.className="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]";const l=document.createElement("input");l.type="url",l.name="image",l.value=e.media?.url||"",l.placeholder="Image url from safe sources like pexels, unsplash, etc...",l.className="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]";const s=document.createElement("button");return s.type="submit",s.textContent=e.id?"Update Spell":"Cast Spell",s.className="w-full py-2 rounded bg-purple-400 hover:bg-purple-500 transition font-[Cinzel] text-white",o.appendChild(n),o.appendChild(a),o.appendChild(r),o.appendChild(l),o.appendChild(s),t.appendChild(o),t}function De(){return`
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
            class="border border-gray-300 rounded px-3 py-2 text-purple-700"
            autocomplete="email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            class="border border-gray-300 rounded px-3 py-2 text-purple-800"
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
  `}let se=!1;function Z(){if(se)return;const e=document.getElementById("login-modal");if(!e)return;se=!0;const t=document.getElementById("close-login-modal"),o=document.querySelector("[data-login-form]");document.addEventListener("click",n=>{n.target.closest("[data-open-login-modal]")&&(n.preventDefault(),e.classList.remove("hidden"))}),t?.addEventListener("click",()=>{e.classList.add("hidden")}),e.addEventListener("click",n=>{n.target===e&&e.classList.add("hidden")}),e.addEventListener("click",n=>{n.target.closest("a[data-link]")&&(n.preventDefault(),e.classList.add("hidden"))}),window.addEventListener("popstate",()=>{e.classList.add("hidden")}),o?.addEventListener("submit",async n=>{n.preventDefault();const a=o.email.value.trim(),r=o.password.value.trim();if(!a||!r){alert("Please enter both email and password.");return}try{await Te({email:a,password:r}),e.classList.add("hidden")}catch(l){alert(l.message)}})}function je(){return M()?(history.pushState(null,null,"/"),!1):!0}function Oe(e){return()=>je()?e():""}function K(e){const t=e.avatar?.url;return typeof t=="string"&&t.trim()!==""?t:e.avatar.url}async function be(e,{append:t=!1,containerId:o="posts"}={}){const n=document.getElementById(o);if(n){t||(n.innerHTML="");for(const a of e){const r=document.createElement("article");r.className="relative post-card border border-gray-700 rounded-lg p-4 bg-[var(--color-bg-surface)] shadow-sm w-3/4 mx-auto break-words",r.addEventListener("click",c=>{c.target.closest(".post-menu, button, a, input, form")||(history.pushState(null,null,`/post/${a.id}`),I())}),r.dataset.post=a.id;const l=document.createElement("header");l.className="flex items-center gap-3 mb-2";const i=U()?.username===a.author?.name;if(i){const c=document.createElement("div");c.className="absolute flex top-3 right-3";const d=document.createElement("button");d.className="post-menu-toggle text-gray-400 hover:text-white",d.dataset.postId=a.id,d.innerHTML='<i class="fa-solid fa-ellipsis"></i>';const m=document.createElement("div");m.className="post-menu hidden absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded shadow-lg z-10",m.dataset.menuFor=a.id;const P=document.createElement("button");P.className="edit-post w-full text-left px-4 py-2 hover:bg-gray-700",P.dataset.postId=a.id,P.textContent="Edit";const C=document.createElement("button");C.className="delete-post w-full text-left px-4 py-2 hover:bg-gray-700",C.dataset.postId=a.id,C.textContent="Delete",C.addEventListener("click",$=>{$.stopPropagation()}),P.addEventListener("click",$=>{$.stopPropagation();const H=P.dataset.postId;history.pushState(null,null,`/edit-post/${H}`),I()}),C.addEventListener("click",async $=>{$.stopPropagation();const H=C.dataset.postId;if(confirm("Are you sure you want to delete this post?"))try{await ye(H),document.querySelector(`[data-post="${H}"]`)?.remove(),g("Post deleted successfully","success")}catch(Le){console.error("Failed to delete post:",Le),g("Failed to delete post. Please try again.","error")}}),m.appendChild(P),m.appendChild(C),c.appendChild(d),c.appendChild(m),l.appendChild(c),d.addEventListener("click",$=>{$.stopPropagation(),m.classList.toggle("hidden")})}const u=document.createElement("img");u.className="h-12 w-12 rounded-full object-cover",u.src=a.author?.avatar?.url||K(a.author),u.alt="Avatar of"+(a.author?.name||"Unknown");const p=document.createElement("div"),h=document.createElement("a");h.href=`/profiles/${a.author?.name||"Unknown"}`,h.setAttribute("data-link","");const N=document.createElement("h4");N.className="text-m font-bold font-[Cinzel] text-purple-600 mb-2",N.textContent=a.author?.name||"Unknown";const w=document.createElement("p");w.className="text-xs text-gray-500 mb-2",w.textContent=new Date(a.created).toLocaleString(),h.appendChild(N),p.appendChild(h),p.appendChild(w),l.appendChild(u),l.appendChild(p);const B=F().some(c=>c.name===a.author?.name),k=document.createElement("div");if(k.className="flex items-center justify-end mt-2",!i){const c=document.createElement("div");c.dataset.followContainer="";const d=document.createElement("button");d.type="button",d.dataset.auth="follow",d.dataset.username=a.author?.name,d.className=" text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition";const m=document.createElement("button");m.type="button",m.dataset.auth="followed",m.dataset.username=a.author?.name,m.className="text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition",d.textContent="Follow",m.textContent="Unfollow",c.appendChild(d),c.appendChild(m),k.appendChild(c),B?d.classList.add("hidden"):m.classList.add("hidden")}const S=document.createElement("img");S.className="h-96 w-full mb-2 object-cover rounded-md mx-auto",S.src=a.media?.url||await ue(a.id,a.tags?.[0]||"fantasy"),S.alt="Image posted by "+(a.author?.name||"Unknown");const E=document.createElement("h3");E.className="text-lg font-[Cinzel] font-semibold text-purple-500",E.textContent="🕯️ "+(a.title||"Unknown");const L=document.createElement("p");L.className="font-[Inter] text-gray-300 mt-2",L.textContent=a.body||"";const v=document.createElement("form");v.dataset.commentForm="",v.dataset.postId=a.id,v.className="mt-3 flex gap-2";const b=document.createElement("input");b.type="text",b.name="comment",b.placeholder="Send a whisper...",b.required=!0,b.className="flex-1 p-2 rounded bg-gray-800 text-sm";const y=document.createElement("button");y.type="submit",y.textContent="Whisper",y.className="text-sm px-3 py-1 rounded bg-purple-500 hover:bg-purple-600 transition",v.appendChild(b),v.appendChild(y);const f=document.createElement("div");f.className="mt-4 space-y-2",f.dataset.commentsContainer="",a.comments?.forEach(c=>{const d=document.createElement("div");d.className="text-sm text-gray-500 border-t border-gray-700 pt-2";const m=document.createElement("p");m.className="font-[Cinzel] text-purple-400",m.textContent=(c.author?.name||"Unknown")+" says:";const P=document.createElement("p");P.className="font-[Inter] text-gray-300 mt-1",P.textContent=c.body||"";const C=document.createElement("p");C.className="text-xs text-gray-600 mt-1 text-end",C.textContent="sent on "+new Date(c.created).toLocaleString(),d.appendChild(m),d.appendChild(P),d.appendChild(C),f.appendChild(d)}),r.appendChild(l),r.appendChild(S),r.appendChild(E),r.appendChild(k),r.appendChild(L),r.appendChild(v),r.appendChild(f),n.appendChild(r)}}}document.addEventListener("click",e=>{e.target.closest(".post-menu")||e.target.closest(".post-menu-toggle")||document.querySelectorAll(".post-menu").forEach(t=>{t.classList.add("hidden")})});document.addEventListener("click",async e=>{const t=e.target.closest(".delete-post");if(!t)return;console.log("delete button clicked");const o=t.dataset.postId;if(confirm("Are you sure you want to delete this post?"))try{await ye(o),document.querySelector(`[data-post="${o}"]`)?.remove(),g("Post deleted successfully","success")}catch(n){console.error("Failed to delete post:",n),g("Failed to delete post. Please try again.","error")}});document.addEventListener("click",e=>{const t=e.target.closest(".edit-post");if(!t)return;e.preventDefault(),e.stopPropagation();const o=t.dataset.postId;history.pushState(null,null,`/edit-post/${o}`),I()});function j(e=""){return x(`/social/profiles${e}`)}function we(e,t=""){return x(`/social/profiles/${e}${t}`)}function ve(e,t=""){return x(`/social/profiles/${e}/posts${t}`)}function Je(e,t){return x(`/social/profiles/${e}`,{method:"PUT",body:JSON.stringify(t)})}const Ce=`
    flex flex-col items-center gap-2
    text-gray-300 opacity-80
    hover:text-purple-400 hover:opacity-100
    transition
  `,We=`
    w-12 h-12
    rounded-full
    border-2 border-gray-300/60
    flex items-center justify-center
    transition
    hover:shadow-[0_0_12px_rgba(199,125,255,0.4)]
  `;let O=0;const le=6;let J=!1,z=!1;async function Ee(e=!1){if(z||J)return;z=!0;const t=document.getElementById("load-more-posts");t&&(t.textContent="Loading...");try{const n=(await ge(`&page=${O}&limit=${le}`)).data;if(!n.length){t?.remove(),z=!1;return}await be(n,{append:e}),n.length<le?(J=!0,t?.remove()):O++}catch(o){console.error("Failed to load more posts:",o),g("Failed to load more posts. Please try again.","error")}t&&(t.textContent="Load More"),z=!1}function Ke(){if(document.getElementById("load-more-posts"))return;const e=document.getElementById("app"),t=document.createElement("button");t.id="load-more-posts",t.textContent="Load More",t.className=`
    mt-6 px-4 py-2 rounded-md border border-gray-300/60 hover:border-purple-400 transition
    ${Ce}
    bg-transparent
    mx-auto mb-10
  `,t.addEventListener("click",()=>Ee(!0)),e.appendChild(t)}async function Ye(){const e=document.getElementById("posts");if(e){if(!M()){O=1,J=!1,z=!1,e.innerHTML=`   <section class="p-6 space-y-6">
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
        class="${Ce} bg-transparent mx-auto mt-6 px-4 py-2 rounded-md border border-gray-300/60 hover:border-purple-400 transition">
          <div class="${We}">
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Enter the Circle</span>
        </button>
 </section>`,document.getElementById("load-more-posts")?.remove();return}e.innerHTML="",O=1,J=!1;try{const t=U();if(t){const n=await x(`/social/profiles/${t.username}?_following=true`);X(n.data.following||[])}const[,o]=await Promise.all([Ee(!1),j()]);return Ke(),{profiles:o.data}}catch(t){console.error("Failed to fetch posts:",t),t.message.includes("API key")?g("Please log out and log back in to refresh your API key","error"):g("Failed to load posts. Please try again.","error")}}}function Ge(){return`
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
    `}document.title="Hex & Chill - Coven Profiles";function V(e=""){return String(e).replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[o])}async function Ve(e){const t=document.getElementById("profiles-container");if(!t){console.warn("Profiles container not found");return}if(!e||e.length===0){const o=document.createElement("p");o.className="text-center text-gray-500",o.textContent="No profiles found.",t.appendChild(o);return}t.innerHTML=await Promise.all(e.map(async o=>`
    <div class="bg-white rounded-lg shadow p-4">
      <img 
        src="${o.avatar?.url||await W()}" 
        alt="${V(o.name||"Unknown")}"
        class="w-16 h-16 rounded-full mx-auto mb-2"
      />
      <h3 class="text-center font-bold text-purple-600">${V(o.name||"Unknown")}</h3>
      <p class="text-center text-sm text-gray-600">${V(o.bio||"No bio available")}</p>
      <div class="flex justify-center gap-4 mt-2 text-sm text-gray-500">
        <span>Posts: ${o._count?.posts||0}</span>
        <span>Followers: ${o._count?.followers||0}</span>
      </div>
    </div>
  `).join(""))}async function Ze(){if(!M()){g("You must be logged in to view profiles.");return}try{const e=await j();await Ve(e.data)}catch(e){console.error("Failed to load profiles:",e.message),g("Failed to load profiles. Please try again later.")}}function Xe(e){return`
     <section class="p-6 max-w-xl mx-auto">
      <h1 class="text-2xl font-[Cinzel] text-purple-400 mb-4 text-center">
        ${e}'s Grimoire
      </h1>
      

      <div id="profile-detail">
      </div>

      <div id="profile-posts" class="mt-6 space-y-4">
        <!-- User posts load here -->
      </div>
    </section>
  `}async function Qe(e){try{const[t,o]=await Promise.all([we(e,"?_posts=true$_followers=true&following=true"),ve(e)]),n=t.data,a=o.data;document.getElementById("profile-detail").innerHTML=`
            <div class="text-center">
            <img
            src="${K(n)}"
            alt="Avatar of ${n.name}"
            class="h-32 w-32 rounded-full mb-4 mx-auto"
            />
            <h2 class="text-2xl font-[Cinzel] font-semibold text-purple-500">
                🕯️ ${n.name}
            </h2>
            <p class="font-[Inter] text-gray-500 mt-2">
                ${n.bio||"No bio available."}
            </p>
            <p class="text-sm text-gray-500">
                posts: ${n._count?.posts??0}
                followers: ${n._count?.followers??0}
                following: ${n._count?.following??0}
            </p>
            </div>
        `,document.getElementById("profile-posts").innerHTML=a.map(r=>`
            <article class="border p-4 rounded-lg bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto">
                <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
                    🕯️ ${n.name}
                </h3>
                <img
                <p class="font-[Inter] text-gray-300 mt-2">
                    ${r.body}
                </p>
            </article>
        `).join("")}catch(t){console.error("Error fetching profile details:",t),g("Failed to load profile details. Please try again later.","error")}}async function et(e){const t=document.getElementById("app");if(t.innerHTML="",!t){console.warn("Single post container not found");return}const o=document.createElement("article");o.className="relative border p-6 rounded-lg bg-[var(--color-bg-surface)]";const n=document.createElement("button");n.id="back-button",n.className="mb-6 text-purple-400 hover:underline",n.innerHTML='<i class="fa-solid fa-arrow-left"></i> Back',n.addEventListener("click",()=>{history.back()});const a=document.createElement("header");a.className="flex items-center gap-3 mb-2";const l=U()?.username===e.author?.name;if(l){const y=document.createElement("div");y.className="absolute flex top-3 right-3";const f=document.createElement("button");f.className="post-menu-toggle text-gray-400 hover:text-white",f.dataset.postId=e.id,f.innerHTML='<i class="fa-solid fa-ellipsis"></i>';const c=document.createElement("div");c.className="post-menu hidden absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded shadow-lg z-10",c.dataset.menuFor=e.id;const d=document.createElement("button");d.className="edit-post w-full text-left px-4 py-2 hover:bg-gray-700",d.dataset.postId=e.id,d.textContent="Edit";const m=document.createElement("button");m.className="delete-post w-full text-left px-4 py-2 hover:bg-gray-700",m.dataset.postId=e.id,m.textContent="Delete",c.appendChild(d),c.appendChild(m),y.appendChild(f),y.appendChild(c),a.appendChild(y)}const s=document.createElement("img");s.className="h-12 w-12 rounded-full object-cover",s.src=e.author?.avatar?.url||K(e.author),s.alt="Avatar of"+(e.author?.name||"Unknown");const i=document.createElement("div"),u=document.createElement("a");u.href=`/profiles/${e.author?.name||"Unknown"}`,u.setAttribute("data-link","");const p=document.createElement("h4");p.className="text-m font-bold font-[Cinzel] text-purple-600 mb-2",p.textContent=e.author?.name||"Unknown";const h=document.createElement("p");h.className="text-xs text-gray-500 mb-2",h.textContent=new Date(e.created).toLocaleString(),u.appendChild(p),i.appendChild(u),i.appendChild(h),a.appendChild(s),a.appendChild(i);const w=F().some(y=>y.name===e.author?.name),_=document.createElement("div");if(_.className="flex items-center justify-end mt-2",!l){const y=document.createElement("div");y.dataset.followContainer="";const f=document.createElement("button");f.type="button",f.dataset.auth="follow",f.dataset.username=e.author?.name,f.className=" text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition";const c=document.createElement("button");c.type="button",c.dataset.auth="followed",c.dataset.username=e.author?.name,c.className="text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition",f.textContent="Follow",c.textContent="Unfollow",y.appendChild(f),y.appendChild(c),_.appendChild(y),w?f.classList.add("hidden"):c.classList.add("hidden")}const B=document.createElement("img");B.className="h-96 w-full mb-2 object-cover rounded-md mx-auto",B.src=e.media?.url||await ue(e.id,e.tags?.[0]||"fantasy"),B.alt="Image posted by "+(e.author?.name||"Unknown");const k=document.createElement("h3");k.className="text-lg font-[Cinzel] font-semibold text-purple-500",k.textContent="🕯️ "+(e.title||"Unknown");const S=document.createElement("p");S.className="font-[Inter] text-gray-300 mt-2",S.textContent=e.body||"";const E=document.createElement("form");E.dataset.commentForm="",E.dataset.postId=e.id,E.className="mt-3 flex gap-2";const L=document.createElement("input");L.type="text",L.name="comment",L.placeholder="Send a whisper...",L.required=!0,L.className="flex-1 p-2 rounded bg-gray-800 text-sm";const v=document.createElement("button");v.type="submit",v.textContent="Whisper",v.className="text-sm px-3 py-1 rounded bg-purple-500 hover:bg-purple-600 transition",E.appendChild(L),E.appendChild(v);const b=document.createElement("div");if(b.className="mt-4 space-y-2",b.dataset.commentsContainer="",!b){console.warn("Comments container not found");return}e.comments?.forEach(y=>{const f=document.createElement("div");f.className="text-sm text-gray-500 border-t border-gray-700 pt-2";const c=document.createElement("p");c.className="font-[Cinzel] text-purple-400",c.textContent=(y.author?.name||"Unknown")+" says:";const d=document.createElement("p");d.className="font-[Inter] text-gray-300 mt-1",d.textContent=y.body||"";const m=document.createElement("p");m.className="text-xs text-gray-600 mt-1 text-end",m.textContent="sent on "+new Date(y.created).toLocaleString(),f.appendChild(c),f.appendChild(d),f.appendChild(m),b.appendChild(f)}),o.appendChild(n),o.appendChild(a),o.appendChild(B),o.appendChild(k),o.appendChild(_),o.appendChild(S),o.appendChild(E),o.appendChild(b),t.appendChild(o)}document.addEventListener("click",e=>{const t=e.target.closest(".post-menu-toggle");if(!t)return;const o=t.dataset.postId;document.querySelector(`[data-menu-for="${o}"]`)?.classList.toggle("hidden")});document.addEventListener("click",e=>{!e.target.closest(".post-menu")&&!e.target.closest(".post-menu-toggle")&&document.querySelectorAll(".post-menu").forEach(t=>{t.classList.add("hidden")})});async function tt(e){try{const t=await he(e),o=document.getElementById("app");o.innerHTML="",await et(t.data)}catch(t){console.error("Failed to load post:",t.message),g("Failed to load post. Please try again later.","error")}}async function nt(){const e=U();if(e)try{const[t,o]=await Promise.all([we(e.username,"?_posts=true&_followers=true&following=true"),ve(e.username,"?_author=true&_comments=true")]),n=t.data,a=o.data;document.getElementById("own-profile-info").innerHTML=`
        <img 
        src="${K(n)}"
        alt ="Avatar of ${n.name}"
        class="h-32 w-32 rounded-full mb-4 mx-auto"
        />
        <h2 class="text-lg font-semibold text-purple-500">
        🕯️ ${n.name}
        </h2>
        <button id="change-avatar" class="mt-2 px-2 py-1 rounded-lg bg-purple-500 text-white text-xs border-2 border-gray-300/60 hover:border-purple-600 hover:bg-purple-400 transition">
        Change Avatar
        </button>
        <p class="font-[Inter] text-white mt-2">
        ${n.bio||"No bio available."}
        </p>
            <p class="text-sm text-gray-300 mt-1">
        posts: ${n._count?.posts??0}
        </p>
                    <p class="text-sm text-gray-300 mt-1">

        followers: ${n._count?.followers??0}
        </p>
                    <p class="text-sm text-gray-300 mt-1">

        following: ${n._count?.following??0}
        </p>

        `;const r=document.getElementById("change-avatar");if(!r){console.warn("Change avatar button not found");return}r.addEventListener("click",async()=>{const s=prompt("Enter new avatar URL: ");if(s)try{await Je(e.username,{avatar:{url:s,alt:`${n.name}'s avatar`}}),g("Avatar updated successfully!","success"),document.querySelector("#own-profile-info img").src=s}catch(i){console.error("Failed to update avatar:",i),g("Failed to update avatar. Please try again.","error")}});const l=document.getElementById("bio-input");l.value=n.bio||"",await be(a,{containerId:"own-posts"})}catch(t){console.error("Error loading profile:",t),g("Failed to load profile. Please try again later.","error")}}function ot(){return`
 
    <h1 class="text-2xl font-bold mb-4 text-center mt-4 text-purple-500">Edit Profile</h1>
    <div id="own-profile-info" class="w-full max-w-md mx-auto h-65 rounded-lg shadow p-6 text-center">
    </div>
    
    </div>
    <section class="mt-6 flex flex-col items-center">
    <h3 class="text-xl font-bold mb-4">Your Bio</h3>
    <textarea
        id="bio-input"
      class="w-3/4 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:text-color-purple-600 text-purple-600"
      rows="5"
      placeholder="Share your story..."
    ></textarea>
    <button id="save-bio" class="mt-4 bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600 transition">
      Save Bio
    </button>
  </section>
  <section class="mt-6">
    <h3 class="text-xl text-center font-bold mb-4">My Posts</h3>
    <div id="own-posts" class="flex flex-col items-center"></div>
  </section>
    

    `}function at(){return`
    <h1 class="text-2xl font-bold mb-4 text-center font-[Cinzel] mt-4 text-purple-500">Edit Post</h1>
    <form data-edit-post-form>
    <input name="title" id="edit-title" class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 text-purple-600" placeholder="Post Title" required>
    <textarea name="body" id="edit-body" class="text-purple-600 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4" placeholder="Post Body" rows="6" required></textarea>
    <input name="tags" id="edit-tags" class="text-purple-600 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4" placeholder="Tags (comma separated)">
    <input name="image" id="edit-image" class="text-purple-600 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4" placeholder="Media URL">
    <button type="submit" class="w-full py-2 rounded bg-purple-400 hover:bg-purple-500 transition font-[Cinzel] text-white">Update Post</button>
  </form>
  `}async function rt(e){if(console.log("Initializing edit post view for post ID:",e),!e||isNaN(e)){console.error("Invalid post ID:",e);return}try{console.log("Fetching post with ID:",e);const n=(await he(e)).data;document.querySelector('[name="title"]').value=n.title,document.querySelector('[name="body"]').value=n.body,document.querySelector('[name="tags"]').value=(n.tags||[]).join(", "),document.querySelector('[name="image"]').value=n.media?n.media.url:""}catch(o){console.error("Failed to load post:",o.message),g("Failed to load post. Please try again later.");return}const t=document.querySelector("[data-edit-post-form]");t&&t.addEventListener("submit",async o=>{o.preventDefault();const n=t.querySelector('[name="title"]').value.trim(),a=t.querySelector('[name="body"]').value.trim(),r=t.querySelector('[name="tags"]').value.split(",").map(s=>s.trim()).filter(s=>s),l=t.querySelector('[name="image"]').value.trim();if(!n||!a){g("Title and body are required.","error");return}try{await xe(e,{title:n,body:a,tags:r,media:l?{url:l}:null}),g("Post updated successfully!","success"),history.pushState(null,null,`/post/${e}`),I()}catch(s){console.error("Failed to update post:",s),g("Failed to update post. Please try again.","error")}})}async function st(e=[]){const t=document.createElement("div"),o=document.createElement("h1");o.className="text-2xl font-[Cinzel] font-semibold text-purple-400 mb-6 text-center mt-4",o.textContent="My Familiars";const n=document.createElement("section");n.className="grid grid-cols-4 items-center gap-4 px-6 py-4 overflow-x-auto border-b border-gray-700 bg-[#121212] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";for(const a of e){const r=a.avatar?.url||await W(),l=document.createElement("a");l.href=`/profiles/${a.name}`,l.dataset.link="",l.className="block";const s=document.createElement("div");s.className="flex flex-col items-center gap-3 shrink-0";const i=document.createElement("div");i.className="w-24 h-24 rounded-full border-2 border-gray-300/70 p-0.5 hover:border-purple-400 transition mb-4 mt-6";const u=document.createElement("img");u.src=r,u.alt=`${a.name} avatar`,u.className="w-full h-full rounded-full object-cover";const p=document.createElement("span");p.className="text-xs font-[Cinzel] text-gray-300",p.textContent=a.name,i.appendChild(u),s.appendChild(i),s.appendChild(p),l.appendChild(p),l.appendChild(s),n.appendChild(l)}return t.appendChild(o),t.appendChild(n),t}async function lt(){const e=document.getElementById("app"),t=F();e.innerHTML="";const o=await st(t);e.appendChild(o)}async function ie(e){const t=F(),o=new Set(t.map(r=>r.name)),n=e.filter(r=>o.has(r.name));return(await Promise.all(n.map(async r=>{if(r.avatar?.url)return r;const l=await W();return{...r,avatar:{url:l,alt:`${r.name} avatar`}}}))).slice(0,6)}function it(){const e=document.createElement("div");e.id="search-overlay",e.className="fixed inset-0 bg-black/60 backdrop-blur-sm hidden z-50 flex items-start justify-center pt-32";const t=document.createElement("div");t.className="w-full max-w-xl bg-[#2b023c] rounded-xl border border-purple-700 ";const o=document.createElement("input");o.id="search-input",o.type="text",o.placeholder="Scry the Coven...",o.className="w-full p-3 rounded bg-purple-600 text-white outline-none";const n=document.createElement("div");return n.id="search-results",n.className="mt-4 space-y-2",t.appendChild(o),t.appendChild(n),e.appendChild(t),e}const ct={"/":de,"/newuser":Oe(Me),"/profiles":Ge,"/createPost":Re};async function I(){const e="/JS2_CA";let t=window.location.pathname;if(t.startsWith(e)&&(t=t.slice(e.length)||"/"),document.getElementById("sidenav").innerHTML=Ne(),document.getElementById("header").innerHTML=Pe(),document.getElementById("search-overlay")||document.body.appendChild(it()),t.startsWith("/profiles/")&&t!=="/profiles"){const s=t.split("/")[2];document.getElementById("app").innerHTML=Xe(s);let u=(await j()).data;u=await ie(u);const p=document.getElementById("sidenavRight");p.innerHTML="";const h=await te();p.appendChild(h),Z(),T(),await Qe(s);return}const o=ct[t]||de,n=document.getElementById("app");n.innerHTML="";const a=o();if(a instanceof HTMLElement?n.appendChild(a):n.innerHTML=a,M()){const s=U();if(s)try{const i=await x(`/social/profiles/${s.username}?_following=true`);X(i.data.following||[])}catch(i){console.warn("Could not fetch following list:",i.message)}}let r=[];t==="/"?r=(await Ye())?.profiles||[]:r=(await j()).data,r=await ie(r);const l=document.getElementById("sidenavRight");if(l.innerHTML="",l.appendChild(await te()),Z(),T(),t==="/newuser"&&ze(),t==="/profiles"&&Ze(),t==="/createPost"&&He(),t.startsWith("/post/")){const s=t.split("/post/")[1];tt(s);return}if(t==="/ownProfile"&&(document.getElementById("app").innerHTML=ot(),nt()),t.startsWith("/edit-post")){const s=t.split("/edit-post/")[1];document.getElementById("app").innerHTML=at(),await rt(s);return}if(t==="/familiars"){await lt();return}}function dt(){const e=localStorage.getItem("authUser");if(!e)return null;try{return JSON.parse(e)}catch{return null}}async function ut(e){return await x(`/social/profiles/${e}/follow`,{method:"PUT"})}async function mt(e){return await x(`/social/profiles/${e}/unfollow`,{method:"PUT"})}function pt(){document.addEventListener("click",async e=>{const t=e.target.closest('button[data-auth="follow"]'),o=e.target.closest('button[data-auth="followed"]');if(!t&&!o)return;const a=(t||o).dataset.username;try{let r;t?r=await ut(a):r=await mt(a),X(r.data.following),ft(a)}catch(r){console.error("Error updating follow status:",r),alert("Failed to update follow status. Please try again.")}})}function ft(e){const o=F().some(a=>a.name===e);document.querySelectorAll("[data-follow-container]").forEach(a=>{const r=a.querySelector('[data-auth="follow"]'),l=a.querySelector('[data-auth="followed"]');!r||!l||r.dataset.username===e&&(r.classList.toggle("hidden",o),l.classList.toggle("hidden",!o))})}function gt(){const e=document.getElementById("search-overlay"),t=document.getElementById("search-input"),o=document.getElementById("search-results");!e||!t||!o||(document.addEventListener("click",n=>{n.target.closest("[data-open-search]")&&(e.classList.remove("hidden"),t.focus())}),e.addEventListener("click",n=>{n.target===e&&e.classList.add("hidden")}),window.addEventListener("keydown",n=>{n.key==="Escape"&&e.classList.add("hidden")}),o.addEventListener("click",n=>{n.target.closest("a[data-link]")&&e.classList.add("hidden")}),t.addEventListener("input",async()=>{const n=t.value.trim();if(console.log("user typed:",n),!n){o.innerHTML="";return}if(n.length<2){o.innerHTML="";return}try{console.log("searching for posts...");const l=((await ge(`&search=${encodeURIComponent(n)}`)).data||[]).filter(s=>{const i=s.title?.toLowerCase()||"",u=s.body?.toLowerCase()||"";return i.includes(n.toLowerCase())||u.includes(n.toLowerCase())});o.innerHTML=l.map(s=>`
      <a href="/post/${s.id}" data-link class="block p-3 rounded hover:bg-gray-800 transition">
      <p class="text-purple-400 font-[Cinzel] font-semibold">${s.title}</p>
      <p class="text-sm text-gray-500">By ${s.author?.name||"unknown"}</p>
      </a>
      `).join("")}catch(a){console.error("Search error:",a),o.innerHTML='<p class="text-red-500">An error occurred while searching.</p>'}}))}function ht(e,t){return x(`/social/posts/${e}/comment?_author=true`,{method:"POST",body:JSON.stringify({body:t})})}let ce=!1;function yt(){ce||(ce=!0,document.addEventListener("submit",async e=>{const t=e.target.closest("[data-comment-form]");if(!t)return;e.preventDefault();const o=t.dataset.postId,n=t.querySelector('input[name="comment"]'),a=n.value.trim();if(!a){g("Comment cannot be empty.","error");return}const r=t.querySelector("button");r.disabled=!0,r.textContent="Whispering…";try{const s=(await ht(o,a)).data,u=t.closest("article").querySelector("[data-comments-container]"),p=document.createElement("div");p.className="text-sm text-gray-300 mt-2 border-t pt-2";const h=document.createElement("p");h.className="font-[Inter] text-purple-500",h.textContent=`🕯️ ${s.author?.name||"Unknown"} says:`;const N=document.createElement("p");N.textContent=s.body;const w=document.createElement("p");w.className="text-xs text-gray-500 mt-1 text-end",w.textContent=new Date(s.created).toLocaleString(),p.append(h,N,w),u.prepend(p),n.value=""}catch(l){console.error("Failed to create comment:",l),g("Failed to post comment.","error")}finally{r.disabled=!1,r.textContent="Whisper"}}))}localStorage.setItem("apiKey","90d9d08a-808b-4c1f-8475-b0584204612f");document.addEventListener("auth:changed",()=>{T(),window.location.pathname.includes("/JS2_CA/")&&I()});const xt="/JS2_CA";function q(e){history.pushState(null,null,xt+e),I()}document.addEventListener("click",e=>{if(e.target.closest("[data-open-create-post]")){e.preventDefault(),q("/createPost");return}if(e.target.closest("#logout-button")){e.preventDefault(),Fe(),q("/");return}if(e.target.closest("[data-open-own-profile]")){e.preventDefault(),q("/ownProfile");return}const t=e.target.closest("a[data-link]");t&&(e.preventDefault(),q(t.getAttribute("href"))),e.target.closest("[data-open-familiars]")&&(e.preventDefault(),q("/familiars"))});window.addEventListener("popstate",I);document.body.insertAdjacentHTML("beforeend",De());Z();function bt(){const e=dt();if(!e){T();return}pe(e)}pt();bt();ee();gt();yt();I();

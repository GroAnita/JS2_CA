import protectionSpell from '/src/images/protectionspell.jpg';
//import { createPost } from '../services/postCreateService';

export default function Home() {
  return `
    <section class="p-6 space-y-6">

      <h1 class="font-[Cinzel] text-purple-400 font-bold text-xl text-center">
        Spellcasting Feed
      </h1>

      <div id="posts" class="space-y-6">
      </div>

      <article class="relative border border-gray-700 rounded-lg p-4 bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto">
        <i class="fa-solid fa-pen-to-square absolute top-3 right-3 text-gray-400 hover:text-purple-400 cursor-pointer transition"></i>
        <div class="border-b border-gray-700 pb-4">
          <figure >
           <div class="flex flex-row justify-evenly items-center mb-4 gap-4">
            <img class="h-56 rounded-md mb-2"
              src="${protectionSpell}"
              alt="LunaHex Illustration - Protection Spell"
            />
            <img class="h-56 rounded-md mb-2"
              src="${protectionSpell}"
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

   <a
  href="#"
  data-link
  class="
    group relative overflow-hidden
    w-full mt-4 block text-center cursor-pointer
    rounded-xl px-4 py-2
    font-[Cinzel] text-white

    bg-purple-400/30
    backdrop-blur-lg
    border border-white/20

    shadow-lg shadow-purple-900/20
    hover:bg-purple-400/40
    hover:shadow-purple-900/40
    transition-all duration-300
  "
>
  <span
    class="
      pointer-events-none
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent via-white/40 to-transparent
      opacity-0
      group-hover:opacity-100
      group-hover:animate-[shimmer_1.2s_ease-in-out]
    "
  ></span>
  <span class="relative z-10">
    ✨ Whisper
  </span>
</a>
      </article>
    </section>
  `;
}

document.title = 'Hex & Chill - Home';

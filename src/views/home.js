export default function Home() {
  return `
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
  `;
}

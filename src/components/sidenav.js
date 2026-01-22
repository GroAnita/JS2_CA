export default function SideMenu() {
  const navItemClass = `
    flex flex-col items-center gap-2
    text-gray-300 opacity-80
    hover:text-purple-400 hover:opacity-100
    transition
  `;

  const iconCircleClass = `
    w-12 h-12
    rounded-full
    border-2 border-gray-300/60
    flex items-center justify-center
    transition
    hover:shadow-[0_0_12px_rgba(199,125,255,0.4)]
  `;

  return `
    <aside class="hidden md:flex w-64 flex-col bg-[var(--color-bg-surface)] px-6 py-8 border-r border-gray-700">
    <h1 class="font-[Cinzel] text-2xl font-bold text-purple-400 mb-6 mx-auto">Hex & Chill</h1>
    <img src="/src/images/icon/witchicon.png" alt="Hex & Chill Logo" class="w-20 h-20 mx-auto mb-4"/>
      <h2 class="font-[Cinzel] mb-10 text-xl mx-auto font-semibold text-purple-400">🕯️ Coven</h2>

      <nav class="flex flex-col gap-8">

      <a href="/" data-link class="${navItemClass}">
          <div class="${iconCircleClass}">
            <i class="fa-solid fa-book"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Grimoire</span>
        </a>

        <a href="/" data-link class="${navItemClass}">
          <div class="${iconCircleClass}">
            <i class="fa-solid fa-crow"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Familiars</span>
        </a>

        <a href="/" data-link class="${navItemClass}">
          <div class="${iconCircleClass}">
            <i class="fa-solid fa-broom"></i>          </div>
          <span class="text-xs font-[Cinzel]">Scry</span>
        </a>

        <a href="/" data-link class="${navItemClass}">
          <div class="${iconCircleClass}">
            <i class="fa-solid fa-hat-wizard"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Coven Profile</span>
        </a>

        <a href="/search" data-link class="${navItemClass}">
          <div class="${iconCircleClass}">
            <i class="fa-solid fa-moon"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Cast a Spell</span>
        </a>


        <a href="/search" data-link class="${navItemClass}">
          <div class="${iconCircleClass}">
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Enter the Circle</span>
        </a>

      </nav>
    </aside>
  `;
}

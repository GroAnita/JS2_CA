import witchIcon from '/witchicon.png';
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
  src="${witchIcon}"
  class="hidden md:block w-20 h-20 mx-auto mb-4"
/>


   <nav
  class="
    flex gap-2
    md:flex-col md:gap-8">  

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
            <i class="fa-solid fa-magnifying-glass"></i>         </div>
          <span class="text-xs font-[Cinzel]">Scry</span>
        </a>

        <a href="/" data-link class="${navItemClass}">
          <div class="${iconCircleClass}">
            <i class="fa-solid fa-hat-wizard"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Coven Profile</span>
        </a>

        <button 
        type="button" 
        data-open-create-post class="${navItemClass} bg-transparent">
          <div class="${iconCircleClass}">
            <i class="fa-solid fa-pen-nib"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Cast a Spell</span>
        </button>

        <button 
        type="button" 
        data-open-login-modal
        data-auth="logged-out"
        class="${navItemClass} bg-transparent">
          <div class="${iconCircleClass}">
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Enter the Circle</span>
        </button>


        <button 
        type="button" 
        data-auth="logged-in"
        id="logout-button"
        class="hidden ${navItemClass} bg-transparent">
          <div class="${iconCircleClass}">
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
  `;
}

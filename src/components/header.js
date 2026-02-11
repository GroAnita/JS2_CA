export default function Header() {
  return `
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
  `;
}

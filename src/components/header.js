export default function Header() {
  return `
    <section
      class="
        flex items-center gap-4
        px-6 py-4
        overflow-x-auto
        border-b border-gray-700
        bg-[var(--color-bg-main)]
      "
    >
      ${Array(6)
        .fill()
        .map(
          () => `
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
              src="/src/images/megibunadlite.jpg"
              alt="Active user"
              class="w-full h-full rounded-full object-cover"
            />
          </div>

          <span class="text-xs text-gray-400">
            Coven
          </span>
        </div>
      `,
        )
        .join("")}
    </section>
  `;
}

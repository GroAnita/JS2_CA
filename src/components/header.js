import historyUser from "/src/images/storiesplaceholder.png";

export default function Header() {
  return `
    <section
      class="
        flex justify-center items-center gap-4
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
              w-28 h-28 
              rounded-full
              border-2 border-gray-300/70
              p-0.5
              hover:border-purple-400
              transition
            "
          >
            <img
              src="${historyUser}"
              alt="Active user"
              class="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      `,
        )
        .join("")}
    </section>
  `;
}

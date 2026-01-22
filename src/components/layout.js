import SideMenu from "./SideMenu.js";

export default function Layout(pageContent) {
  return `
    <div class="min-h-screen flex bg-[var(--color-bg-main)] text-gray-100">
      ${SideMenu()}

      <main class="flex-1 flex flex-col">
        ${pageContent}
      </main>
    </div>
  `;
}

import SideMenu from "../components/sidenav.js";

export default function Layout(pageContent) {
  return `
    <div class="app-layout">
      ${SideMenu()}
      <main class="app-content">
        ${pageContent}
      </main>
    </div>
  `;
}

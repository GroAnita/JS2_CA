export default function SideMenu() {
  return `
    <aside class="side-menu">
      <h2 class="side-menu-title">🕯️ Coven</h2>

      <nav class="side-menu-nav">
       <span class="nav-links">
        <div class="nav-icon"><img src="src/images/icon/grimoiregold.png" alt="Grimoire Icon" attribute="https://www.flaticon.com/free-icons/grimoire" title="grimoire icons"Grimoire icons created by Creative Stall Premium - Flaticon></div>
        <a href="/" data-link data-tooltip="Newsfeed">Grimoire</a>
        </span>
        <span class="nav-links">
        <div class="nav-icon">\u{1F52E} </div>
        <a href="/" data-link data-tooltip="search">Scry</a>
        </span>
          <span class="nav-links">
        <div class="nav-icon"> \u{1F408}\u{200D}\u{2B1B} </div>
        <a href="/" data-link data-tooltip="your Profile">Coven Profile</a>
        </span>
          <span class="nav-links">
        <div class="nav-icon">  \u{1F989} </div>
        <a href="/" data-link data-tooltip="Friends">Familiars</a>
        </span>
        <span class="nav-links">
        <div class="nav-icon">  \u{1F319}</div>
        <a href="/" data-link data-tooltip="Groups">Covens</a>
        </span>       
           <span class="nav-links">
        <div class="nav-icon"> <i class="fa-solid fa-arrow-right-to-bracket"></i></div>
        <a href="/" data-link data-tooltip="Log in">Enter The Circle</a>
        </span> 
      </nav>
    </aside>
  `;
}

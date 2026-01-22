import Home from "../views/Home.js";
import About from "../views/About.js";
import Contact from "../views/Contact.js";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import SideNav from "../components/sidenav.js";

const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
};

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || Home;

  document.getElementById("sidenav").innerHTML = SideNav();
  document.getElementById("header").innerHTML = Header();
  document.getElementById("app").innerHTML = route();
  document.getElementById("footer").innerHTML = Footer();
}

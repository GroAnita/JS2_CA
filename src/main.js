import "./css/variables.css";
import "./css/styles.css";
import "./css/nav.css";
import "./css/footer.css";
import "./css/loggedinusers.css";
import { router } from "./router/router.js";

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

document.addEventListener("click", (e) => {
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

//Handle browsers back and forward buttons
window.addEventListener("popstate", router);

//the initial call to set up the correct view
router();

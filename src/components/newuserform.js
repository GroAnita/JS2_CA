import { registerUser } from "../services/authenticationService.js";
import { router } from "../router/router.js";
import { isValidPassword } from "../utils/validation.js";
import { isValidEmail } from "../utils/validation.js";
import { isValidName } from "../utils/validation.js";

export default function NewUserForm() {
  return `
    <form id="newuser-form" class="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        class="w-full p-2 rounded bg-gray-800"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        class="w-full p-2 rounded bg-gray-800"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        class="w-full p-2 rounded bg-gray-800"
        required
      />

      <a href="/home" data-link class="   w-full mt-4 block text-center cursor-pointer
    rounded-xl px-4 py-2
    font-[Cinzel] text-white
    bg-purple-400/30
    backdrop-blur-md
    border border-white/20
    shadow-lg shadow-purple-900/20
    hover:bg-purple-400/40
    hover:shadow-purple-900/40
    transition-all duration-300">
        Join the Coven
      </a>

      <p id="form-message" class="text-sm mt-2"></p>
    </form>
  `;
}


/**
 * Initializes the New User registration form.
 *
 * Puts a submit event listener to the registration form
 * and delegates form submission handleing to `handleSubmit`.
 *
 * Exits if the form is not present in the DOM.
 *
 * @function initNewUserForm
 */
export function initNewUserForm() {
  const form = document.getElementById("newuser-form");
  const messageEl = document.getElementById("form-message");

  if (!form || !messageEl) return;

   form.addEventListener("submit", async (event) => {
      event.preventDefault();
     
        const formData = new FormData(form);
        const password = formData.get("password");
        const email = formData.get("email");
        const name = formData.get("name");
     
        if (!isValidName(name)) {
          messageEl.textContent = "Please enter a valid witch name.";
          messageEl.className = "text-red-500";
          return;
        }
     
        if (!isValidEmail(email)) {
          messageEl.textContent = "Please enter a valid email address.";
          messageEl.className = "text-red-500";
          return;
        }
     
        if (!isValidPassword(password)) {
          messageEl.textContent =
            "Password must be at least 8 characters long and include a number and a special character.";
          messageEl.className = "text-red-500";
          return;   
     }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      bio: "",
      avatar: "",
      banner: ""
    };

   
    try {
      await registerUser(data);

      messageEl.textContent =
        "Registration successful! Welcome to the Coven.";
      messageEl.className = "text-green-500";
      form.reset();

      history.pushState(null, null, "/login");
      router();
    } catch (error) {
      messageEl.textContent = error.message;
      messageEl.className = "text-red-500";
    }
  });
}

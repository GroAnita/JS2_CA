import { loginUser } from '../services/authenticationService.js';

export default function LoginModal() {
  return `
    <div
      id="login-modal"
      class="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 hidden"
    >
      <div class="relative bg-white rounded-lg p-6 w-96">
        <button
          id="close-login-modal"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 class="text-2xl font-bold mb-4 text-purple-600 font-cinzel">Enter the Circle</h2>

        <form data-login-form class="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            class="border border-gray-300 rounded px-3 py-2 text-purple-700"
            autocomplete="email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            class="border border-gray-300 rounded px-3 py-2 text-purple-800"
            autocomplete="current-password"
            required
          />

          <button
            type="submit"
            class="bg-purple-500 text-white rounded px-4 py-2 hover:bg-purple-600 transition"
          >
            Enter the Circle
          </button>
        </form>
        <p class="mt-4 text-sm text-gray-600">
          Forgotten your incantation?
          <a href="/resetpassword" data-link class="text-purple-600 hover:underline">Reset it</a>
        </p>
        <p class="mt-4 text-sm text-gray-600">
          Don't have a coven yet?
          <a href="/newuser" data-link class="text-purple-600 hover:underline">Join us</a>
        </p>
      </div>
    </div>
  `;
}

let loginModalInitialized = false;

export function initLoginModal() {
  if (loginModalInitialized) return;

  const modal = document.getElementById('login-modal');

  if (!modal) {
    return;
  }

  loginModalInitialized = true;

  const closeButton = document.getElementById('close-login-modal');
  const form = document.querySelector('[data-login-form]');

  // Use event delegation on document for open buttons (they may not exist yet)
  document.addEventListener('click', (e) => {
    const openButton = e.target.closest('[data-open-login-modal]');
    if (openButton) {
      e.preventDefault();
      modal.classList.remove('hidden');
    }
  });

  closeButton?.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  modal.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
      e.preventDefault();
      modal.classList.add('hidden');
    }
  });

  window.addEventListener('popstate', () => {
    modal.classList.add('hidden');
  });

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      // Attempting to log in the user
      await loginUser({ email, password });
      // Closes the modal by hiding it
      modal.classList.add('hidden');
    } catch (error) {
      alert(error.message);
    }
  });
}

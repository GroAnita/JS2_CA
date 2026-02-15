import NewUserForm from '../ui/newuserform.js';

export default function NewUser() {
  return `
    <section class="p-6">
      <h1 class="text-2xl font-[Cinzel] text-purple-400 mb-4 text-center">
        Create Your Coven Profile
      </h1>

      <p class="text-gray-400 mb-6 text-center">
        Step into the circle and let your magic be known.
      </p>

      ${NewUserForm()}

      <p class="text-sm text-gray-500 mt-4 text-center">
      already have a coven profile?
        <a href="#" data-open-login-modal class="text-purple-400 hover:underline">
          Enter the Circle
        </a>
      </p>
    </section>
  `;
}

document.title = 'Hex & Chill - Join the Coven';

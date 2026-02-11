export default function ProfileDetail(name) {
  return `
     <section class="p-6 max-w-xl mx-auto">
      <h1 class="text-2xl font-[Cinzel] text-purple-400 mb-4 text-center">
        ${name}'s Grimoire
      </h1>

      <div id="profile-detail">
        <!-- Profile data loads here -->
      </div>

      <div id="profile-posts" class="mt-6 space-y-4">
        <!-- User posts load here -->
      </div>
    </section>
  `;
}

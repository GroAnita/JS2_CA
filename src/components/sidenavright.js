import friendsUser from "/src/images/friendsplaceholder.png";
export default function SideMenuRight() {
  const navItemClass = `
    flex flex-col items-center gap-2
    text-gray-300 opacity-80
    hover:text-purple-400 hover:opacity-100
    transition
  `;

  const iconCircleClass = `
    w-12 h-12
    rounded-full
    border-2 border-gray-300/60
    flex items-center justify-center
    transition
    hover:shadow-[0_0_12px_rgba(199,125,255,0.4)]
  `;

  return `
    <aside class="hidden md:flex w-64 flex-col bg-[#121212] px-6 py-8 border-l border-gray-700">

      <h1 class="font-[Cinzel] mb-10 text-xl mx-auto font-semibold text-purple-400">Familiars</h1>

      <section
           class="
             flex-col items-center gap-4
             px-6 py-4
             overflow-x-auto
             border-b border-gray-700
             bg-[#121212] 
           "
         >
           ${Array(6)
             .fill()
             .map(
               () => `
             <div class="flex flex-col items-center gap-1 shrink-0">
               <div
                 class="
                   w-24 h-24 
                   rounded-full
                   border-2 border-gray-300/70
                   p-0.5
                   hover:border-purple-400
                   transition mb-4
                 "
               >
                 <img
                   src="${friendsUser}"
                   alt="Active user"
                   class="w-full h-full rounded-full object-cover"
                 />
               </div>
             </div>
           `,
             )
             .join("")}
         </section>
    </aside>
  `;
}

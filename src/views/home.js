export default function Home() {
  return `
  <div class="home-content">
<article class="card card-hover card-spell">
  <div class="card-header"><h3>🕯️ LunaHex</h3></div>

  <div class="card-body">
    <div class="card-body-image">
      <img src="src/images/protectionspell.jpg" alt="LunaHex Illustration - Protection Spell" />
      <figcaption>Image by <a href="https://pixabay.com/users/ann_milovidova-6267860/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5337079">Ann_Milovidova</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5337079">Pixabay</a></figcaption>
        <i class="fa-solid fa-heart"><i class="fa-regular fa-heart"></i></i> 
        <i class="fa-regular fa-comment"><span id="comments">10</span></i>
       <i class="fa-solid fa-share"></i>
    </div>
    Casting protection spells tonight. Any herbs you swear by?
  </div>
  <div class="card-message">
    <input type="text" class="input-message" placeholder="Send a message..." />
  </div>
  <div class="card-footer">

  </div>
  <button class="btn btn-primary">
  ✨ Whisper
</button>

</article>
</div>

  `;
}

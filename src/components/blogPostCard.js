export function blogPostCard(post) {
  return `
    <article class="blog-post-card">
      <h2 class="blog-post-title">${post.title}</h2>
      <p class="blog-post-body">${post.body}</p>
      <div class="blog-post-tags">
        ${post.tags.map((tag) => `<span class="blog-post-tag">${tag}</span>`).join(' ')}
      </div>
    </article>
  `;
}

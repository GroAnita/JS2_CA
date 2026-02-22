import { getRandomPostImage } from '../services/unsplashService.js';
import { getFollowingList } from '../state/followState.js';
import { getCurrentUser } from '../state/authstate.js';
import { deletePost } from '../services/postFetchService.js';
import showToast from './showToast.js';
import { router } from '../router/router.js';
import { getAvatar } from './getAvatar.js';

/**
 * Renders a list of posts in to the #posts container.
 * Each of the posts have:
 * -Author info and an avatar
 * -post image (if it has media, otherwise a random image from unsplash)
 * -post title and body.
 * -A follow/unfollow button it the post is not the users own post.
 * -Edit and delete menu if the post is users own post.
 * -Comments and a form to submit new comments.
 *
 * @async
 * @function renderPosts
 * @param {Array<Object>} posts - Array of post objects from API.
 * @param {Object} [options] - Rendering options.
 * @param {boolean} [options.append=false] -If true, new posts will be appended to the container instead of replacing its content.
 * @param {string} [options.containerId='posts'] - The ID of the container where posts will be rendered.
 * 
 
 */

export async function renderPosts(
  posts,
  { append = false, containerId = 'posts' } = {}
) {
  const postsContainer = document.getElementById(containerId);
  if (!postsContainer) return;
  if (!append) postsContainer.innerHTML = '';

  for (const post of posts) {
    const article = document.createElement('article');
    article.className =
      'relative post-card border border-gray-700 rounded-lg p-4 bg-[var(--color-bg-surface)] shadow-sm w-3/4 mx-auto break-words';

    //to make the post card clickable and navigate to the single post view.
    article.addEventListener('click', (event) => {
      if (event.target.closest('.post-menu, button, a, input, form')) return;
      history.pushState(null, null, `/post/${post.id}`);
      router();
    });

    article.dataset.post = post.id;
    const header = document.createElement('header');
    header.className = 'flex items-center gap-3 mb-2';

    const currentUser = getCurrentUser();
    const isOwnPost = currentUser?.username === post.author?.name;
    if (isOwnPost) {
      const menuWrapper = document.createElement('div');
      menuWrapper.className = 'absolute flex top-3 right-3';
      const toggleButton = document.createElement('button');
      toggleButton.className =
        'post-menu-toggle text-gray-400 hover:text-white';
      toggleButton.dataset.postId = post.id;
      toggleButton.innerHTML = '<i class="fa-solid fa-ellipsis"></i>';

      const menu = document.createElement('div');
      menu.className =
        'post-menu hidden absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded shadow-lg z-10';
      menu.dataset.menuFor = post.id;

      const editButton = document.createElement('button');
      editButton.className =
        'edit-post w-full text-left px-4 py-2 hover:bg-gray-700';
      editButton.dataset.postId = post.id;
      editButton.textContent = 'Edit';

      const deleteButton = document.createElement('button');
      deleteButton.className =
        'delete-post w-full text-left px-4 py-2 hover:bg-gray-700';
      deleteButton.dataset.postId = post.id;
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      editButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const postId = editButton.dataset.postId;
        history.pushState(null, null, `/edit-post/${postId}`);
        router();
      });

      deleteButton.addEventListener('click', async (event) => {
        event.stopPropagation();
        const postId = deleteButton.dataset.postId;
        if (!confirm('Are you sure you want to delete this post?')) return;
        try {
          await deletePost(postId);
          document.querySelector(`[data-post="${postId}"]`)?.remove();
          showToast('Post deleted successfully', 'success');
        } catch (error) {
          console.error('Failed to delete post:', error);
          showToast('Failed to delete post. Please try again.', 'error');
        }
      });

      menu.appendChild(editButton);
      menu.appendChild(deleteButton);
      menuWrapper.appendChild(toggleButton);
      menuWrapper.appendChild(menu);
      header.appendChild(menuWrapper);

      toggleButton.addEventListener('click', (event) => {
        event.stopPropagation();
        menu.classList.toggle('hidden');
      });
    }

    const avatar = document.createElement('img');
    avatar.className = 'h-12 w-12 rounded-full object-cover';
    avatar.src = post.author?.avatar?.url || getAvatar(post.author);
    avatar.alt = 'Avatar of' + (post.author?.name || 'Unknown');

    const nameContainer = document.createElement('div');

    const nameLink = document.createElement('a');
    nameLink.href = `/profiles/${post.author?.name || 'Unknown'}`;
    nameLink.setAttribute('data-link', '');

    const name = document.createElement('h4');
    name.className = 'text-m font-bold font-[Cinzel] text-purple-600 mb-2';
    name.textContent = post.author?.name || 'Unknown';

    const timeStamp = document.createElement('p');
    timeStamp.className = 'text-xs text-gray-500 mb-2';
    timeStamp.textContent = new Date(post.created).toLocaleString();

    nameLink.appendChild(name);
    nameContainer.appendChild(nameLink);
    nameContainer.appendChild(timeStamp);

    header.appendChild(avatar);
    header.appendChild(nameContainer);

    const followingList = getFollowingList();
    const isFollowing = followingList.some(
      (user) => user.name === post.author?.name
    );

    const actionsRow = document.createElement('div');
    actionsRow.className = 'flex items-center justify-end mt-2';

    if (!isOwnPost) {
      const followContainer = document.createElement('div');
      followContainer.dataset.followContainer = '';

      const followButton = document.createElement('button');
      followButton.type = 'button';
      followButton.dataset.auth = 'follow';
      followButton.dataset.username = post.author?.name;
      followButton.className = ` text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition`;

      const unfollowButton = document.createElement('button');
      unfollowButton.type = 'button';
      unfollowButton.dataset.auth = 'followed';
      unfollowButton.dataset.username = post.author?.name;
      unfollowButton.className = `text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition`;

      followButton.textContent = 'Follow';
      unfollowButton.textContent = 'Unfollow';

      followContainer.appendChild(followButton);
      followContainer.appendChild(unfollowButton);
      actionsRow.appendChild(followContainer);

      if (isFollowing) {
        followButton.classList.add('hidden');
      } else {
        unfollowButton.classList.add('hidden');
      }
    }
    //Images

    const image = document.createElement('img');
    image.className = 'h-96 w-full mb-2 object-cover rounded-md mx-auto';
    image.src =
      post.media?.url ||
      (await getRandomPostImage(post.id, post.tags?.[0] || 'fantasy'));
    image.alt = 'Image posted by ' + (post.author?.name || 'Unknown');

    //Title

    const title = document.createElement('h3');
    title.className = 'text-lg font-[Cinzel] font-semibold text-purple-500';
    title.textContent = '🕯️ ' + (post.title || 'Unknown');

    //Body

    const body = document.createElement('p');
    body.className = 'font-[Inter] text-gray-300 mt-2';
    body.textContent = post.body || '';

    //Comments and commenting form

    const commentForm = document.createElement('form');
    commentForm.dataset.commentForm = '';
    commentForm.dataset.postId = post.id;
    commentForm.className = 'mt-3 flex gap-2';

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.name = 'comment';
    commentInput.placeholder = 'Send a whisper...';
    commentInput.required = true;
    commentInput.className = 'flex-1 p-2 rounded bg-gray-800 text-sm';

    const commentButton = document.createElement('button');
    commentButton.type = 'submit';
    commentButton.textContent = 'Whisper';
    commentButton.className =
      'text-sm px-3 py-1 rounded bg-purple-500 hover:bg-purple-600 transition';

    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentButton);

    const commentsContainer = document.createElement('div');
    commentsContainer.className = 'mt-4 space-y-2';
    commentsContainer.dataset.commentsContainer = '';

    post.comments?.forEach((comment) => {
      const commentDiv = document.createElement('div');
      commentDiv.className =
        'text-sm text-gray-500 border-t border-gray-700 pt-2';

      const commentAuthor = document.createElement('p');
      commentAuthor.className = 'font-[Cinzel] text-purple-400';
      commentAuthor.textContent =
        (comment.author?.name || 'Unknown') + ' says:';

      const commentText = document.createElement('p');
      commentText.className = 'font-[Inter] text-gray-300 mt-1';
      commentText.textContent = comment.body || '';

      const commentTime = document.createElement('p');
      commentTime.className = 'text-xs text-gray-600 mt-1 text-end';
      commentTime.textContent =
        'sent on ' + new Date(comment.created).toLocaleString();

      commentDiv.appendChild(commentAuthor);
      commentDiv.appendChild(commentText);
      commentDiv.appendChild(commentTime);

      commentsContainer.appendChild(commentDiv);
    });

    article.appendChild(header);
    article.appendChild(image);
    article.appendChild(title);
    article.appendChild(actionsRow);
    article.appendChild(body);
    article.appendChild(commentForm);
    article.appendChild(commentsContainer);

    postsContainer.appendChild(article);
  }
}

/**
 * Closes the edit/delete menu if user clicks outside of it.
 */
document.addEventListener('click', (event) => {
  if (
    event.target.closest('.post-menu') ||
    event.target.closest('.post-menu-toggle')
  )
    return;
  document.querySelectorAll('.post-menu').forEach((menu) => {
    menu.classList.add('hidden');
  });
});

/**
 * Handles the click event for the delete post button. It asks the user for confirmation about deleting and the then deletes the post via API.
 * If delete is sucess, it removes post from DOM and shows a success toast, if it fails it show an error toast.
 */

document.addEventListener('click', async (event) => {
  const deleteButton = event.target.closest('.delete-post');
  if (!deleteButton) return;

  const postId = deleteButton.dataset.postId;
  if (!confirm('Are you sure you want to delete this post?')) return;
  try {
    await deletePost(postId);
    document.querySelector(`[data-post="${postId}"]`)?.remove();
    showToast('Post deleted successfully', 'success');
  } catch (error) {
    console.error('Failed to delete post:', error);
    showToast('Failed to delete post. Please try again.', 'error');
  }
});

/**
 * Just navigates to the edit post view when edit button is clicked.
 * editPost view has the rest of edit logic.
 */

document.addEventListener('click', (event) => {
  const editButton = event.target.closest('.edit-post');
  if (!editButton) return;
  event.preventDefault();
  event.stopPropagation();
  const postId = editButton.dataset.postId;

  history.pushState(null, null, `/edit-post/${postId}`);
  router();
});

import { getRandomPostImage } from '../services/unsplashService.js';
import { getFollowingList } from '../state/followState.js';
import { getCurrentUser } from '../state/authstate.js';
import showToast from './showToast.js';
import { getAvatar } from './getAvatar.js';
import { createComment } from '../services/commentService.js';

/**
 * Renders a single post view with all its details.
 * it includes posts image, title, body, author, comments and follow/unfollow button it not users own post. if own post it also has edit/delete options
 * @async
 * @param {Object} post - The post object containing all details to be rendered.
 * @returns {Promise<void>} - A promise that resolves when the post is rendered.
 *
 */

export async function renderSinglePost(post) {
  const singlePostContainer = document.getElementById('app');
  singlePostContainer.innerHTML = '';
  if (!singlePostContainer) {
    console.warn('Single post container not found');
    return;
  }
  const backButton = document.createElement('button');
  backButton.id = 'back-button';
  backButton.className = 'mb-6 text-purple-400 hover:underline';
  backButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Back';
  backButton.addEventListener('click', () => {
    history.back();
  });

  const singlePostArticle = document.createElement('article');
  singlePostArticle.className =
    'relative border p-6 rounded-lg bg-[var(--color-bg-surface)]';

  const singlePostHeader = document.createElement('header');
  singlePostHeader.className = 'flex items-center gap-3 mb-2';

  const currentUser = getCurrentUser();
  const isOwnPost = currentUser?.username === post.author?.name;
  if (isOwnPost) {
    const menuWrapper = document.createElement('div');
    menuWrapper.className = 'absolute flex top-3 right-3';
    const toggleButton = document.createElement('button');
    toggleButton.className = 'post-menu-toggle text-gray-400 hover:text-white';
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

    menu.appendChild(editButton);
    menu.appendChild(deleteButton);
    menuWrapper.appendChild(toggleButton);
    menuWrapper.appendChild(menu);
    singlePostHeader.appendChild(menuWrapper);
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

  singlePostHeader.appendChild(avatar);
  singlePostHeader.appendChild(nameContainer);

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
  if (!commentsContainer) {
    console.warn('Comments container not found');
    return;
  }

  post.comments?.forEach((comment) => {
    const commentDiv = document.createElement('div');
    commentDiv.className =
      'text-sm text-gray-500 border-t border-gray-700 pt-2';

    const commentAuthor = document.createElement('p');
    commentAuthor.className = 'font-[Cinzel] text-purple-400';
    commentAuthor.textContent = (comment.author?.name || 'Unknown') + ' says:';

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

  singlePostArticle.appendChild(singlePostHeader);
  singlePostArticle.appendChild(image);
  singlePostArticle.appendChild(title);
  singlePostArticle.appendChild(actionsRow);
  singlePostArticle.appendChild(body);
  singlePostArticle.appendChild(commentForm);
  singlePostArticle.appendChild(commentsContainer);

  singlePostContainer.appendChild(singlePostArticle);
}

document.addEventListener('submit', async (event) => {
  const commentForm = event.target.closest('[data-comment-form]');
  if (!commentForm) return;
  event.preventDefault();

  const postId = commentForm.dataset.postId;
  const commentText = commentForm.comment.value.trim();
  if (!commentText) return;
  try {
    await createComment(postId, commentText);
    console.log('postId:', postId);
    console.log('comment:', commentText);

    commentForm.reset();
    showToast('Whisper sent!', 'success');
  } catch (error) {
    console.error('Failed to create comment:', error);
    showToast('Failed to send whisper. Please try again.', 'error');
  }
});

/**
 * Toggles the menu for edit/delete post options if it is users own post they show or else they are hidden. Also handles the click events for both edit and delete button.
 */
document.addEventListener('click', (event) => {
  const toggle = event.target.closest('.post-menu-toggle');
  if (!toggle) return;
  const postId = toggle.dataset.postId;
  const menu = document.querySelector(`[data-menu-for="${postId}"]`);
  menu?.classList.toggle('hidden');
});

/**
 * Closes the edit/delete menu if user clicks outside of it.
 */
document.addEventListener('click', (event) => {
  if (
    !event.target.closest('.post-menu') &&
    !event.target.closest('.post-menu-toggle')
  ) {
    document.querySelectorAll('.post-menu').forEach((menu) => {
      menu.classList.add('hidden');
    });
  }
});

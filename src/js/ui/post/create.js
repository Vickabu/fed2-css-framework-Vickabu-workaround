import { createPost } from "../../api/post/create";

/**
 * Handles the submission of the create post form.
 * Prevents the default form submission, gathers input values,
 * and creates a new post by calling `createPost`.
 *
 * @param {Event} event - The submit event from the form.
 * @returns {Promise<void>}
 *
 * @example
 * ```js
 * document.forms.createPost.addEventListener("submit", onCreatePost);
 * ```
 */

export async function onCreatePost(event) {
  event.preventDefault();

  const title = event.target.title.value;
  const body = event.target.body.value;
  const tags = event.target.tags.value.split(",").map((tag) => tag.trim());
  const mediaUrl = event.target.mediaUrl.value;
  const mediaAlt = event.target.mediaAlt.value;

  const charCount = body.length;
  const maxCharLimit = 280;
  const errorMessage = document.getElementById("errorMessage");
  const charCountDisplay = document.getElementById("charCount");

  if (charCount > maxCharLimit) {
    errorMessage.classList.remove("hidden");
    return;
  } else {
    errorMessage.classList.add("hidden");
  }

  const media = mediaUrl ? { url: mediaUrl, alt: mediaAlt } : null;

  try {
    const newPost = await createPost({ title, body, tags, media });
    event.target.reset();
    window.location.href = "/";
  } catch (error) {
    console.error("Error while creating post:", error);
  }
}

document
  .querySelector("textarea[name='body']")
  .addEventListener("input", function () {
    const bodyContent = this.value;
    const charCount = bodyContent.length;
    const charCountDisplay = document.getElementById("charCount");

    charCountDisplay.textContent = `${charCount}/280`;

    if (charCount > 260) {
      charCountDisplay.style.color = "red";
    } else {
      charCountDisplay.style.color = "black";
    }
  });

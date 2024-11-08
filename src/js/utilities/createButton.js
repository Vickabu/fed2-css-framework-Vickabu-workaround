/**
 * Creates a delete button for a specific post and attaches the provided event handler.
 *
 * @param {number} postId - The ID of the post to be deleted.
 * @param {Function} onDeletePost - The event handler to be called when delete button is clicked.
 *
 * @returns {HTMLButtonElement} The delete button element.
 *
 * @example
 * ```js
 * const deleteButton = createDeleteButton(123, onDeletePost);
 * document.body.appendChild(deleteButton);
 * ```
 */

export function createDeleteButton(postId, onDeletePost) {
  const deleteButton = document.createElement("button");
  deleteButton.dataset.postId = postId;

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-trash-alt", "text-black");
  deleteButton.appendChild(deleteIcon);

  deleteButton.classList.add(
    "bg-red-500",
    "p-2",
    "rounded",
    "hover:bg-red-800",
    "transition-colors",
    "duration-200",
    "mr-2"
  );

  deleteButton.addEventListener("click", onDeletePost);
  return deleteButton;
}
/**
 * Creates an edit button for a specific post.
 * When clicked, it redirects to the post edit page and stores the post ID in localStorage.
 *
 * @param {number} postId - The ID of the post to be edited.
 *
 * @returns {HTMLButtonElement} The edit button element.
 *
 * @example
 * ```js
 * const editButton = createEditButton(123);
 * document.body.appendChild(editButton);
 * ```
 */

export function createEditButton(postId) {
  const editButton = document.createElement("button");
  editButton.dataset.postId = postId;

  const editIcon = document.createElement("i");
  editIcon.classList.add("fas", "fa-pen", "text-black");
  editButton.appendChild(editIcon);

  editButton.classList.add(
    "bg-gray-300",
    "p-2",
    "rounded",
    "hover:bg-gray-600",
    "transition-colors",
    "duration-200"
  );

  editButton.addEventListener("click", () => {
    window.location.href = `/post/edit/?id=${postId}`;
    localStorage.setItem("postId", JSON.stringify(postId));
  });

  return editButton;
}

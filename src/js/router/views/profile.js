import { readPostsByUser } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { readProfile } from "../../api/profile/read";
import { createPostElement } from "../../utilities/createPostElement";
import { getLoggedInUserName } from "../../utilities/loggedInUser";
import { createNavbar } from "../../utilities/navbar";
import { postsContainerStyles } from "../../utilities/postStyles";
import { onDeletePost } from "../../ui/post/delete";

authGuard();
createNavbar();
setLogoutListener();

const username = getLoggedInUserName();
if (username) {
  loadProfile(username);
} else {
  console.error("No user is logged in.");
}

/**
 * Loads a user profile and their associated posts.
 * If the profile or posts are not found, an appropriate message is shown.
 *
 * @async
 * @function loadProfile
 * @param {string} name - The username of the profile to be loaded.
 */
async function loadProfile(name) {
  try {
    const profile = await readProfile(name);

    if (profile) {
      displayProfile(profile);
      const posts = await readPostsByUser(name);
      displayPosts(posts);
    } else {
      console.error("Profile not found.");
      document.body.innerHTML = "<p>Profile not found.</p>";
    }
  } catch (error) {
    console.error("Error loading profile:", error);
  }
}

/**
 * Displays the user's profile information on the page.
 *
 * @param {Object} profile - The profile object containing user information.
 * @function displayProfile
 */

function displayProfile(profile) {
  const profileContainer = document.createElement("div");
  profileContainer.classList.add("bg-blue-200");

  const avatar = document.createElement("img");
  avatar.src = profile.avatar?.url;
  avatar.alt = profile.avatar?.alt || "User Avatar";
  avatar.classList.add("w-60");

  const nameElement = document.createElement("h1");
  nameElement.textContent = profile.name;
  nameElement.classList.add("font-bold");

  const bioElement = document.createElement("p");
  bioElement.textContent = profile.bio || "No bio available";

  profileContainer.append(nameElement, avatar, bioElement);
  document.body.appendChild(profileContainer);
}

/**
 * Displays a list of posts made by the user.
 * If no posts are available, a message is shown.
 *
 * @param {Array<Object>} posts - An array of post objects to display.
 * @function displayPosts
 */

function displayPosts(posts) {
  const postsContainer = document.createElement("div");
  postsContainer.classList.add(...postsContainerStyles);

  if (posts.length === 0) {
    postsContainer.innerHTML = "<p>No posts available.</p>";
  } else {
    posts.forEach((post) => {
      const postElement = createPostElement(
        post,
        getLoggedInUserName(),
        onDeletePost
      );
      postsContainer.appendChild(postElement);
    });
  }

  document.body.appendChild(postsContainer);
}

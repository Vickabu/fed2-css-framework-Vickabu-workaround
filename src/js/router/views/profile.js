import { readPostsByUser } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { readProfile } from "../../api/profile/read";
import { createPostElement } from "../../utilities/createPostElement";
import { getLoggedInUserName } from "../../utilities/loggedInUser";
import { createNavbar } from "../../utilities/navbar";
import { profilePostsContainerStyles } from "../../utilities/postStyles";
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
  profileContainer.classList.add(
    "bg-lightGreen",
    "md:rounded-t-sm",
    "shadow-lg",
    "border",
    "border-darkGreen",
    "shadow-darkGreen",
    "max-w-screen-md",
    "w-full",
    "mx-auto",
    "text-center",
    "align-center",
    "md:mt-8",
    "font-bold"
  );

  if (profile.banner?.url) {
    const banner = document.createElement("img");
    banner.src = profile.banner.url;
    banner.alt = profile.banner.alt || "User Banner";
    banner.classList.add(
      "w-full",
      "h-60",
      "object-cover",
      "md:rounded-t-sm",
      "mb-4"
    );
    profileContainer.appendChild(banner);
  }

  const avatar = document.createElement("img");
  avatar.src = profile.avatar?.url;
  avatar.alt = profile.avatar?.alt || "User Avatar";
  avatar.classList.add("w-40", "h-40", "rounded-full", "mx-auto", "mb-4");

  const nameElement = document.createElement("h1");
  nameElement.textContent = profile.name;
  nameElement.classList.add("p-4");

  const bioElement = document.createElement("p");
  bioElement.textContent = profile.bio || "No bio available";
  bioElement.classList.add("mb-4", "p-4");

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
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("text-center", "mb-6");

  const title = document.createElement("h2");
  title.textContent = "Your Fluffy Posts";
  title.classList.add("text-3xl", "font-bold", "mb-2", "mt-4");

  const line = document.createElement("div");
  line.classList.add(
    "max-w-screen-lg",
    "h-1",
    "bg-darkGreen",
    "mx-auto",
    "mb-4"
  );

  titleContainer.appendChild(title);
  titleContainer.appendChild(line);

  const postsContainer = document.createElement("div");
  postsContainer.classList.add(...profilePostsContainerStyles, "mt-6");

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

  document.body.append(titleContainer, postsContainer);
}

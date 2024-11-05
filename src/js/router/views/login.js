import { onLogin } from "../../ui/auth/login";
import { createNavbar } from "../../utilities/navbar";

createNavbar();

/**
 * Sets up the event listener for the login form submission.
 *
 * @returns {void}
 *
 * @example
 * ```js
 * document.forms.login.addEventListener("submit", onLogin);
 * ```
 */

document.forms.login.addEventListener("submit", onLogin);

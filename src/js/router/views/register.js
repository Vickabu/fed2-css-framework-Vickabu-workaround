import { onRegister } from "../../ui/auth/register";
import { setLogoutListener } from "../../ui/global/logout";
import { createNavbar } from "../../utilities/navbar";

createNavbar();
setLogoutListener();

/**
 * Sets up the event listener for the register form submission.
 *
 * @returns {void}
 *
 * @example
 * ```js
 * document.forms.register.addEventListener("submit", onLogin);
 * ```
 */

document.forms.register.addEventListener("submit", onRegister);

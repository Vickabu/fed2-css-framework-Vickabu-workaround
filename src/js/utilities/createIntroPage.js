export function createIntroPage() {
  const pageContainer = document.createElement("div");
  pageContainer.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "text-white",
    "font-bold",
    "shadow-xl",
    "bg-darkGreen",
    "p-4",
    "m-6",
    "md:mx-auto",
    "max-w-screen-lg",
    "rounded-t-sm"
  );

  const image = document.createElement("img");
  image.src = "/images/welcome-alpaca.png";
  image.alt = "Alpaca";
  image.classList.add();

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Ready to join the herd?";
  mainHeading.classList.add("text-3xl", "text-center", "p-4", "w-full");

  const subHeading = document.createElement("h2");
  subHeading.textContent = "Don’t be sheepish—come on in!";
  subHeading.classList.add("text-2xl", "text-center", "p-2");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("flex", "space-x-8", "mt-4");

  const loginButton = document.createElement("button");
  loginButton.textContent = "Login";
  loginButton.classList.add(
    "bg-orange",
    "text-white",
    "font-bold",
    "py-2",
    "px-6",
    "rounded",
    "hover:bg-orangeDark",
    "hover:text-black",
    "transition-colors",
    "hover:scale-110"
  );
  loginButton.addEventListener("click", () => {
    window.location.href = "/auth/login/";
  });

  const registerButton = document.createElement("button");
  registerButton.textContent = "Register";
  registerButton.classList.add(
    "bg-lightGreen",
    "text-black",
    "font-bold",
    "py-2",
    "px-6",
    "rounded",
    "hover:bg-green",
    "hover:text-white",
    "transition-colors",
    "hover:scale-110"
  );
  registerButton.addEventListener("click", () => {
    window.location.href = "/auth/register/";
  });

  buttonContainer.append(loginButton, registerButton);
  pageContainer.append(mainHeading, image, subHeading, buttonContainer);
  document.body.appendChild(pageContainer);
}

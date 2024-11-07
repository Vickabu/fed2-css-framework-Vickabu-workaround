export function createIntroPage() {
  const pageContainer = document.createElement("div");
  pageContainer.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "text-white",
    "shadow-xl",
    "p-4",
    "m-4",
    "md:mx-auto",
    "max-w-screen-lg",
    "rounded"
  );

  const image = document.createElement("img");
  image.src = "/images/welcome-alpaca.png";
  image.alt = "Alpaca";
  image.classList.add();

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Ready to join the herd?";
  mainHeading.classList.add("text-3xl", "mb-8", "text-center");

  const subHeading = document.createElement("h2");
  subHeading.textContent = "Choose your path to join the fluffiest space!";
  subHeading.classList.add("text-2xl", "text-center");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("flex", "space-x-4", "mt-4");

  const loginButton = document.createElement("button");
  loginButton.textContent = "Login";
  loginButton.classList.add(
    "bg-orange",
    "text-white",
    "font-bold",
    "py-2",
    "px-6",
    "rounded",
    "hover:bg-orange-700",
    "transition-colors"
  );
  loginButton.addEventListener("click", () => {
    window.location.href = "/auth/login/";
  });

  const registerButton = document.createElement("button");
  registerButton.textContent = "Register";
  registerButton.classList.add(
    "bg-teal-950",
    "text-white",
    "font-bold",
    "py-2",
    "px-6",
    "rounded",
    "hover:bg-teal-600",
    "transition-colors"
  );
  registerButton.addEventListener("click", () => {
    window.location.href = "/auth/register/";
  });

  buttonContainer.append(loginButton, registerButton);
  pageContainer.append(mainHeading, image, subHeading, buttonContainer);
  document.body.appendChild(pageContainer);
}

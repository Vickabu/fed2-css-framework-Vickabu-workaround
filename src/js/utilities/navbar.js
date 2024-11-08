import "@fortawesome/fontawesome-free/css/all.css";

export function createNavbar() {
  const header = document.createElement("header");
  header.classList.add(
    "bg-darkGreen",
    "text-white",
    "flex",
    "flex-col",
    "md:flex-row",
    "items-center",
    "justify-evenly"
  );

  const topRow = document.createElement("div");
  topRow.classList.add(
    "md:w-80",
    "flex",
    "justify-between",
    "items-center",
    "w-full"
  );

  const logo = document.createElement("img");
  logo.src = "/images/FluffSocial-logo2.png";
  logo.alt = "Logo";
  logo.classList.add("w-20", "md:w-40", "items-center", "ml-10");
  topRow.appendChild(logo);

  const hamburgerButton = document.createElement("button");
  hamburgerButton.id = "hamburgerButton";
  hamburgerButton.classList.add(
    "md:hidden",
    "flex",
    "items-center",
    "focus:outline-none",
    "z-50",
    "p-2",
    "rounded",
    "hover:bg-green",
    "mr-10"
  );

  const hamburgerIcon = document.createElement("i");
  hamburgerIcon.classList.add("fas", "fa-bars", "text-white", "text-xl");
  hamburgerButton.appendChild(hamburgerIcon);
  topRow.appendChild(hamburgerButton);

  header.appendChild(topRow);

  const nav = document.createElement("nav");
  nav.classList.add("hidden", "md:flex", "w-full", "gap-2");

  const isLoggedIn = localStorage.accessToken;
  const currentPath = window.location.pathname;

  const links = [
    { href: "/", text: "Home" },
    ...(isLoggedIn
      ? [
          { href: "/profile/", text: "My Profile" },
          { href: "/post/create/", text: "Create Post+" },
          { href: "/auth/register/", text: "Register" },
        ]
      : [
          { href: "/auth/login/", text: "Login" },
          { href: "/auth/register/", text: "Register" },
        ]),
  ];

  links.forEach((linkData) => {
    const link = document.createElement("a");
    link.href = linkData.href;
    link.textContent = linkData.text;
    link.classList.add(
      "hover:underline",
      "text-white",
      "hover:shadow-linkDeskTopShadow",
      "rounded",
      "p-4"
    );
    if (linkData.href === currentPath) {
      link.classList.add("shadow-linkDeskTopShadow", "font-bold", "text-white");
    }
    nav.appendChild(link);
  });

  if (isLoggedIn) {
    const logoutButton = document.createElement("button");
    logoutButton.textContent = "Logout";
    logoutButton.classList.add("logoutButton");
    nav.appendChild(logoutButton);
  }

  header.appendChild(nav);

  const mobileMenu = document.createElement("div");
  mobileMenu.id = "mobileMenu";
  mobileMenu.classList.add(
    "hidden",
    "md:hidden",
    "flex-col",
    "space-y-4",
    "mt-8",
    "w-full",
    "text-center",
    "p-4"
  );

  links.forEach((linkData) => {
    const link = document.createElement("a");
    link.href = linkData.href;
    link.textContent = linkData.text;
    link.classList.add(
      "block",
      "hover:underline",
      "w-full",
      "text-center",
      "hover:border-green",
      "border",
      "rounded",
      "border-transparent",
      "p-2",
      "text-md"
    );
    if (linkData.href === currentPath) {
      link.classList.add("border", "!border-green", "font-bold");
    }

    mobileMenu.appendChild(link);
  });

  if (isLoggedIn) {
    const logoutButtonMobile = document.createElement("button");
    logoutButtonMobile.textContent = "Logout";
    logoutButtonMobile.classList.add("logoutButton");
    mobileMenu.appendChild(logoutButtonMobile);
  }

  header.appendChild(mobileMenu);

  document.body.insertAdjacentElement("afterbegin", header);

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
    } else {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-times");
    }
  });
}

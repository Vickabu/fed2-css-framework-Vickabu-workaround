import "@fortawesome/fontawesome-free/css/all.css";

export function createNavbar() {
  const header = document.createElement("header");
  header.classList.add(
    "bg-gray-800",
    "text-white",
    "p-2",
    "flex",
    "flex-col",
    "md:flex-row",
    "items-center"
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
  logo.src = "/images/noroff-logo.png";
  logo.alt = "Noroff Logo";
  logo.classList.add("logo", "w-40", "items-center", "ml-10");
  topRow.appendChild(logo);

  const hamburgerButton = document.createElement("button");
  hamburgerButton.id = "hamburgerButton";
  hamburgerButton.classList.add(
    "md:hidden",
    "flex",
    "items-center",
    "focus:outline-none",
    "z-50",
    "bg-gray-800",
    "p-2",
    "rounded",
    "hover:bg-gray-700",
    "mr-10"
  );

  const hamburgerIcon = document.createElement("i");
  hamburgerIcon.classList.add("fas", "fa-bars", "text-white", "text-xl");
  hamburgerButton.appendChild(hamburgerIcon);
  topRow.appendChild(hamburgerButton);

  header.appendChild(topRow);

  const nav = document.createElement("nav");
  nav.classList.add(
    "hidden",
    "md:flex",
    "space-x-4",
    "items-center",
    "w-full",
    "justify-evenly"
  );

  const links = [
    { href: "/profile/", text: "My Profile" },
    { href: "/auth/login/", text: "Login" },
    { href: "/auth/register/", text: "Register" },
    { href: "/post/create/", text: "Create Post" },
  ];

  links.forEach((linkData) => {
    const link = document.createElement("a");
    link.href = linkData.href;
    link.textContent = linkData.text;
    link.classList.add("hover:underline", "text-white");
    nav.appendChild(link);
  });

  const logoutButton = document.createElement("button");
  logoutButton.id = "logoutButton";
  logoutButton.textContent = "Logout";
  logoutButton.classList.add(
    "bg-blue-500",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded"
  );
  nav.appendChild(logoutButton);

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
    "text-center"
  );

  links.forEach((linkData) => {
    const link = document.createElement("a");
    link.href = linkData.href;
    link.textContent = linkData.text;
    link.classList.add("block", "hover:underline", "w-full", "text-center");
    mobileMenu.appendChild(link);
  });

  const logoutButtonMobile = logoutButton.cloneNode(true);
  logoutButtonMobile.id = "logoutButtonMobile";
  mobileMenu.appendChild(logoutButtonMobile);

  header.appendChild(mobileMenu); // Legg til mobilmeny i header

  // Legg navbaren til i dokumentet
  document.body.insertAdjacentElement("afterbegin", header);

  // Legg til logikk for hamburgermenyen
  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

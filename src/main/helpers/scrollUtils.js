export const handleScroll = (setActiveNav, setNavbarFixed) => {
  return () => {
    const currentPosition = window.scrollY;
    const navbar = document.getElementById("navbar-top");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(
        `a.nav-link[href="#${sectionId}"]`
      );

      if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
        setActiveNav(sectionId);
      }
    });

    if (currentPosition > 50) {
      setNavbarFixed(true);
      navbar.classList.add("fixed-top");
      navbar.style.backgroundColor = "rgba(9, 20, 39, 0.80)";
      document.body.style.paddingTop = `${navbar.offsetHeight}px`;
    } else {
      setNavbarFixed(false);
      navbar.classList.remove("fixed-top");
      navbar.style.backgroundColor = "transparent";
      document.body.style.paddingTop = "0";
    }
  };
};

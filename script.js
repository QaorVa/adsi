function toggleDropdown(element) {
    const dropdownContent = element.nextElementSibling;
    const dropdownContent2 = element.querySelector(".menu-dropdown");
    element.classList.toggle("active");
    dropdownContent.classList.toggle("show");
    dropdownContent2.classList.toggle("show");
  }
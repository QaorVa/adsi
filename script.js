function toggleDropdown(element) {
    const dropdownContent = element.nextElementSibling;
    const dropdownContent2 = element.querySelector(".menu-dropdown");
    dropdownContent2.classList.toggle("show");
    element.classList.toggle("active");
    dropdownContent.classList.toggle("show");
    
  }
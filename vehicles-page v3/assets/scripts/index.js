const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// get menuPrimary
const tabsNav = $$(".js-listItem");
const panesNav = $$(".contents");

// menu primary
tabsNav.forEach((tabNav, index) => {
  const paneNav = panesNav[index];

  tabNav.onclick = function () {
    $(".js-listItem.active").classList.remove("active");
    $(".contents.openBlock").classList.remove("openBlock");

    this.classList.add("active");
    paneNav.classList.add("openBlock");
  };
});

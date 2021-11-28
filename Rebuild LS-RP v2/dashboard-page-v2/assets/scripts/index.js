const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Get
const picksColor = $$(".js-Color");
const tabsNav = $$(".js-menuPrimary");
const blockContents = $$(".js-content");
const btnBuys = $$(".js-buyCar");
const modal = $("#modal-buy");
const btnCancel = $("#js-cancel");

//Thay doi hieu ung select khi click vào tung the Color
picksColor.forEach((pickColor, index) => {
  pickColor.onclick = function () {
    $(".js-Color.active").classList.remove("active");

    this.classList.add("active");
  };
});

// menu primary
tabsNav.forEach((tabNav, index) => {
  const blockContent = blockContents[index];

  tabNav.onclick = function () {
    $(".js-menuPrimary.active").classList.remove("active");
    $(".js-content.openFlex").classList.remove("openFlex");

    this.classList.add("active");
    blockContent.classList.add("openFlex");
    // modal.classList.remove("openBlock");
  };
});

// click button buy
btnBuys.forEach((btnBuy, index) => {
  btnBuy.onclick = function () {
    modal.classList.add("openFlex");
  };
});
// click button cancel
btnCancel.onclick = function () {
  modal.classList.remove("openFlex");
};

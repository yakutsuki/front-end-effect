function test() {
  var tabsNewAnim = document.getElementById('navbarSupportedContent');
  var activeItemNewAnim = tabsNewAnim.getElementsByClassName('active');
  var activeWidthNewAnimHeight = activeItemNewAnim[0].offsetHeight;
  var activeWidthNewAnimWidth = activeItemNewAnim[0].offsetWidth;
  var itemPosNewAnimTop = activeItemNewAnim[0].offsetTop;
  var itemPosNewAnimLeft = activeItemNewAnim[0].offsetLeft
  var horiSelector = document.getElementsByClassName('hori-selector')[0]
  horiSelector.style.top = itemPosNewAnimTop + 'px';
  horiSelector.style.left = itemPosNewAnimLeft + 'px';
  horiSelector.style.height = activeWidthNewAnimHeight + 'px';
  horiSelector.style.width = activeWidthNewAnimWidth + 'px';

  var selectorNewAnim = document.getElementById('navbarSupportedContent').querySelectorAll('li');
  var liList = Array.from(selectorNewAnim);
  liList.forEach(function (item, index) {
    item.onclick = () => {
      // 移除所有的active
      liList.forEach(function (item2) {
        item2.classList.remove('active');
      });
      // 添加当前的active
      item.classList.add('active');

      var activeWidthNewAnimHeight = item.offsetHeight;
      var activeWidthNewAnimWidth = item.offsetWidth;
      var itemPosNewAnimTop = item.offsetTop;
      var itemPosNewAnimLeft = item.offsetLeft
      horiSelector.style.top = itemPosNewAnimTop + 'px';
      horiSelector.style.left = itemPosNewAnimLeft + 'px';
      horiSelector.style.height = activeWidthNewAnimHeight + 'px';
      horiSelector.style.width = activeWidthNewAnimWidth + 'px';
    }
  });

}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => { test(); });

  document.getElementsByClassName('navbar-toggler')[0].onclick = () => {
    document.getElementsByClassName('navbar-collapse')[0].classList.toggle('hidden');
    setTimeout(() => { test(); }, 300);
  }

  var path = window.location.pathname.split("/").pop();
  console.log('path', path)
  if ( path === '' ) {
    path = 'index.html';
  }

  var target = document.getElementById("navbarSupportedContent").querySelectorAll('a[href="' + path + '"]')[0];
  target.parentElement.classList.add('active');
});

window.onresize = () => {
  setTimeout(() => { test(); }, 500);
}

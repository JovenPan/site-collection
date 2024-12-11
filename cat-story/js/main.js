document.addEventListener("DOMContentLoaded", function () {
  // 移动端菜单功能
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  // 点击菜单按钮
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    this.classList.toggle("active");
  });

  // 点击导航链接
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });

  // 点击导航菜单区域时阻止关闭
  navLinks.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // 点击页面任意位置关闭菜单
  document.addEventListener("click", function () {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuBtn.classList.remove("active");
    }
  });

  // Tooltips 功能
  document.querySelectorAll(".tooltip-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.add("show-tooltip");

      setTimeout(() => {
        this.classList.remove("show-tooltip");
      }, 2000);
    });
  });
});

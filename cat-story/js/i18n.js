const translations = {
  en: {
    "nav.app": "App",
    "nav.features": "Features",
    "nav.about": "About",
    "hero.title": "Share Your Cat's Amazing Stories",
    "hero.subtitle":
      "Connect with cat lovers worldwide and share your furry friend's daily moments",
    "features.title": "Why Choose Cat Story?",
    "features.photo.title": "Photo Stories",
    "features.photo.desc":
      "Create beautiful photo stories of your cat's daily life",
    "features.community.title": "Cat Community",
    "features.community.desc": "Connect with other cat lovers around the world",
    "features.health.title": "Health Tracking",
    "features.health.desc": "Monitor your cat's health and daily activities",
    "footer.about": "About CatStory",
    "footer.description":
      "CatStory is an app dedicated to the healthy growth and companionship of cats, helping you record and share every wonderful moment of your cats.",
    "footer.contact": "Contact Us",
    "download.tooltip": "Coming soon!",
    "social.tooltip": "Coming soon!",
  },
  zh: {
    "nav.app": "应用",
    "nav.features": "功能",
    "nav.about": "关于",
    "hero.title": "分享你猫咪的精彩故事",
    "hero.subtitle": "与全球爱猫人士连接，分享你毛孩子的日常精彩",
    "features.title": "为什么选择 Cat Story？",
    "features.photo.title": "照片故事",
    "features.photo.desc": "创建精美的猫咪日常生活照片故事",
    "features.community.title": "猫咪社区",
    "features.community.desc": "与世界各地的爱猫人士交流互动",
    "features.health.title": "健康追踪",
    "features.health.desc": "监控猫咪的健康状况和日常活动",
    "footer.about": "关于 CatStory",
    "footer.description":
      "CatStory 是一款专注于猫咪健康成长陪伴的应用，让铲屎官记录和分享猫咪的每一个精彩瞬间。",
    "footer.contact": "联系我们",
    "download.tooltip": "敬请期待！",
    "social.tooltip": "敬请期待！",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const langSwitch = document.querySelector(".lang-switch");
  let currentLang = "en";

  function updateLanguage(lang) {
    if (lang !== "en" && lang !== "zh") return;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll(".tooltip-trigger").forEach((trigger) => {
      if (trigger.closest(".cta-buttons")) {
        trigger.setAttribute(
          "data-tooltip",
          translations[lang]["download.tooltip"]
        );
      } else if (trigger.closest(".social-links")) {
        trigger.setAttribute(
          "data-tooltip",
          translations[lang]["social.tooltip"]
        );
      }
    });

    langSwitch.textContent = lang === "en" ? "中文" : "English";
    langSwitch.setAttribute("data-lang", lang === "en" ? "zh" : "en");
    currentLang = lang;
  }

  document.querySelectorAll(".tooltip-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.add("show-tooltip");

      setTimeout(() => {
        this.classList.remove("show-tooltip");
      }, 2000);
    });
  });

  langSwitch.addEventListener("click", function (e) {
    e.preventDefault();
    const targetLang = this.getAttribute("data-lang");
    updateLanguage(targetLang);
  });

  updateLanguage("en");
});

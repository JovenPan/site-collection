function updateRender() {
  // 竖屏 portrait；横屏 landscape
  const screenType =
    window.innerWidth > window.innerHeight ? "landscape" : "portrait";

  $("body").attr("data-screen", screenType);

  // “section0 离开书店嘅时候”
  // “section10 唯愿在剩余光线面前”
  // “section6 若染上了未尝便醉”
  // “section9 当你在我鼻头亲一下”
  $(
    "[data-state=section0],[data-state=section10],[data-state=section6],[data-state=section9]"
  ).each(function () {
    $(this).attr(
      "data-background-position",
      screenType === "landscape" ? "right center" : "70% center"
    );
  });

  // “section8 对世界说”
  $("[data-state=section8]").attr(
    "data-background-position",
    screenType == "landscape" ? "center" : "70% center"
  );

  // “section7 欠我们的好歌和电影”
  $("[data-state=section7]").attr(
    "data-background-position",
    screenType == "landscape" ? "center" : "80% center"
  );

  // “有一句英文很好”
  $("#section4-div1").css({
    transform: `translate(${screenType === "landscape" ? "20%" : "0"}, ${
      Math.min($("#section4-div1").parent().height(), window.innerHeight) / 2 -
      20
    }px)`,
  });

  $("[data-state=section3],[data-state=section15]").each(function () {
    $(this).css({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  if (screenType === "landscape") {
    $("#section15-div1").css("transform", `scale(${window.innerHeight / 717})`);
  } else {
    $("#section15-div1").css("transform", `scale(${window.innerWidth / 1366})`);
  }
}

updateRender();

window.addEventListener("resize", updateRender, false);

/* if (document.fullscreenEnabled) {
  var fullscreenButton = $("#fullscreenButton");
  fullscreenButton.show();
  var isFullscreen = false;

  // 进入全屏
  function enterFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    }
  }
  // 退出全屏
  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    }
  }
  // 更新全屏状态
  function updateFullscreen(type) {
    if (type == "enter") {
      isFullscreen = true;
      fullscreenButton.removeClass("expand").addClass("compress");
    } else if (type == "exit") {
      isFullscreen = false;
      fullscreenButton.removeClass("compress").addClass("expand");
    }
  }

  fullscreenButton.click(function () {
    if (!isFullscreen) {
      enterFullscreen();
      updateFullscreen("enter");
    } else {
      exitFullscreen();
      updateFullscreen("exit");
    }
  });

  document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement) {
      updateFullscreen("enter");
    } else {
      updateFullscreen("exit");
    }
  });
} */

// 所有的配置信息

/* 在这里定义每个Sldie的停留时间 */
var slideDurations = [
  8000, 4000, 11000, 28000, 44000, 3500, 16000, 8000, 25000, 16000, 20000, 4000,
  2000, 4000, 29000, 48000,
];
/* 在这里定义声音文件, 不再使用 <audio> */
var soundUrls = [
  "./audio/zhe-me-yuan-na-me-jin",
  "./audio/i-am-leslie",
  "./audio/zhui",
  "./audio/gai-bian-yi-sheng",
  "./audio/chang-ge",

  "./audio/a-fei-zheng-zhuan",
  "./audio/hong",
  "./audio/wei-lai",
  "./audio/wo",
  "./audio/love-like-magic",

  "./audio/zui-leng-yi-tian",
  "./audio/ba-wang-1",
  "./audio/ba-wang-2",
  "./audio/ba-wang-3",
  "./audio/dang-ai",

  "./audio/zhe-xie-nian-lai",
];
function onSlideIn(i) {
  // 定义文字动画
  if (i == 0) {
    setTimeout(function () {
      $("#section0-txt1").fadeIn(1000).show();
    }, 2000);
    setTimeout(function () {
      $("#section0-txt1").fadeOut(4000);
    }, 4000);
  } else if (i == 2) {
    setTimeout(function () {
      $("#section2-txt1").fadeIn(2000).show();
    }, 1000);
    setTimeout(function () {
      $("#section2-txt2").fadeIn(2000).show();
    }, 3000);
    setTimeout(function () {
      $("#section2-txt3").fadeIn(2000).show();
    }, 6000);
    setTimeout(function () {
      $("#section2-div1 p").fadeOut(1000);
    }, 10000);
  } else if (i == 3) {
    $("#section3-txt1").fadeIn(1000).show();
    setTimeout(function () {
      $("#section3-txt1").fadeOut(1000);
    }, 2000);
    setTimeout(function () {
      $("#section3-txt2").fadeIn(1000).show();
    }, 3000);
    setTimeout(function () {
      $("#section3-txt2").fadeOut(1000);
    }, 6000);
    setTimeout(function () {
      $("#section3-txt3").fadeIn(1000).show();
    }, 7000);
    setTimeout(function () {
      $("#section3-txt3").fadeOut(1000);
    }, 9000);
    setTimeout(function () {
      $("#section3-txt4").fadeIn(1000).show();
    }, 10000);
    setTimeout(function () {
      $("#section3-txt4").fadeOut(1000);
    }, 11000);
    setTimeout(function () {
      $("#section3-txt5").fadeIn(1000).show();
    }, 12000);
    setTimeout(function () {
      $("#section3-txt5").fadeOut(1000);
    }, 14000);
    //Thanks
    setTimeout(function () {
      $("#section3-txt6").fadeIn(500).show();
    }, 16000);
    setTimeout(function () {
      $("#section3-txt7").fadeIn(500).show();
    }, 17000);
    setTimeout(function () {
      $("#section3-txt8").fadeIn(500).show();
    }, 18000);
    setTimeout(function () {
      $("#section3-txt9").fadeIn(500).show();
    }, 18500);
    setTimeout(function () {
      $("#section3-txt6").fadeOut(500);
      $("#section3-txt7").fadeOut(500);
      $("#section3-txt8").fadeOut(500);
      $("#section3-txt9").fadeOut(500);
    }, 19000);
    setTimeout(function () {
      $("#section3-txt10").fadeIn(1000).show();
    }, 19500);
    setTimeout(function () {
      $("#section3-txt10").fadeOut(1000);
    }, 21000);
    setTimeout(function () {
      $("#section3-txt11").fadeIn(1000).show();
    }, 22000);
    setTimeout(function () {
      $("#section3-txt12").fadeIn(1000).show();
    }, 24000);
    setTimeout(function () {
      $("#section3-txt11").fadeOut(1000);
      $("#section3-txt12").fadeOut(1000);
    }, 27000);
  } else if (i == 4) {
    const $section4 = $("#section4-div1 p");
    const arr = [
      500, 2000, 3500, 7000, 10000, 12000, 14000, 16000, 22000, 24000, 28000,
      30000, 32000, 34000, 38000, 41000, 43000,
    ];
    arr.map((delay, index) => {
      setTimeout(() => {
        if (index === 0) {
          $("#section4-txt1").fadeIn().addClass("active");
        } else if (index === arr.length - 1) {
          $("#section4-txt16").removeClass("active");
        } else {
          $(`#section4-txt${index}`).removeClass("active");
          $(`#section4-txt${index + 1}`)
            .fadeIn()
            .addClass("active");
          $section4.css("transform", `translateY(-${34 * index}px)`);
        }
      }, delay);
    });

    setTimeout(function () {
      $section4.fadeOut(500);
    }, 43500);
  } else if (i == 6) {
    setTimeout(function () {
      $("#section6-txt1").fadeIn(1000);
    }, 1000);
    setTimeout(function () {
      $("#section6-txt2").fadeIn(2000);
    }, 4000);
    setTimeout(function () {
      $("#section6-txt3").fadeIn(2000);
    }, 8000);
    setTimeout(function () {
      $("#section6-div1 p").fadeOut(2000);
    }, 13000);
  } else if (i == 7) {
    setTimeout(function () {
      $("#section7-txt1").fadeIn(2000);
    }, 12000);
    setTimeout(function () {
      $("#section7-txt2").fadeIn(2000);
    }, 14000);
    setTimeout(function () {
      $("#section7-txt3").fadeIn(2000);
    }, 16000);
    setTimeout(function () {
      $("#section7-txt4").fadeIn(3000);
    }, 18000);
    setTimeout(function () {
      $("#gckong").fadeIn(2000);
    }, 21000);
    /* setTimeout(function () {
      window.location = "http://www.gckong.com/chat";
    }, 25000); */
  } else if (i == 9) {
    $("#section9-txt1").fadeIn(1000);
    setTimeout(function () {
      $("#section9-txt2").fadeIn(1000);
    }, 3000);
    setTimeout(function () {
      $("#section9-txt3").fadeIn(1000);
    }, 8000);
    setTimeout(function () {
      $("#section9-txt4").fadeIn(1000);
    }, 12000);
    setTimeout(function () {
      $("#section9-div1 p").fadeOut(1000);
    }, 15000);
  } else if (i == 8) {
    setTimeout(function () {
      $("#section8-txt1").fadeIn(2000);
    }, 3000);
    setTimeout(function () {
      $("#section8-txt2").fadeIn(4000);
    }, 6000);
    setTimeout(function () {
      $("#section8-txt3").fadeIn(3000);
    }, 14000);
    setTimeout(function () {
      $("#section8-txt4").fadeIn(2000);
    }, 20000);
    setTimeout(function () {
      $("#section8-div1 p").fadeOut(1000);
    }, 24000);
  } else if (i == 10) {
    $("#section10-txt1").fadeIn(1000);
    setTimeout(function () {
      $("#section10-txt2").fadeIn(1000);
    }, 6000);
    setTimeout(function () {
      $("#section10-txt3").fadeIn(1000);
    }, 11000);
    setTimeout(function () {
      $("#section10-txt4").fadeIn(1000);
    }, 16000);
    setTimeout(function () {
      $("#section10-div1 p").fadeOut(1000);
    }, 19000);
  } else if (i == 14) {
    $("#section14-txt1").fadeIn(2000);
    setTimeout(function () {
      $("#section14-txt1").fadeOut(500);
    }, 3000);
    setTimeout(function () {
      $("#section14-txt2").fadeIn(2000);
    }, 4000);
    setTimeout(function () {
      $("#section14-txt2").fadeOut(500);
    }, 7000);
    setTimeout(function () {
      $("#section14-txt3").fadeIn(1000);
    }, 8000);
    setTimeout(function () {
      $("#section14-txt3").fadeOut(1000);
    }, 9000);
    setTimeout(function () {
      $("#section14-txt4").fadeIn(2000);
    }, 10000);
    setTimeout(function () {
      $("#section14-txt4").fadeOut(500);
    }, 14000);
    setTimeout(function () {
      $("#section14-txt5").fadeIn(2000);
    }, 15000);
    setTimeout(function () {
      $("#section14-txt5").fadeOut(500);
    }, 18000);
    setTimeout(function () {
      $("#section14-txt6").fadeIn(2000);
    }, 19000);
    setTimeout(function () {
      $("#section14-txt6").fadeOut(500);
    }, 22000);
    setTimeout(function () {
      $("#section14-txt7").fadeIn(2000);
    }, 23000);
    setTimeout(function () {
      $("#section14-txt7").fadeOut(2000);
    }, 27000);
  } else if (i == 15) {
    setTimeout(function () {
      $("#section15-pic1").fadeIn(3000);
    }, 1000);
    setTimeout(function () {
      $("#section15-pic2").fadeIn(3000);
    }, 5000);
    setTimeout(function () {
      $("#section15-pic3").fadeIn(3000);
    }, 10000);
    setTimeout(function () {
      $("#section15-pic4").fadeIn(3000);
    }, 15000);
    setTimeout(function () {
      $("#section15-pic5").fadeIn(3000);
    }, 20000);
    setTimeout(function () {
      $("#section15-pic6").fadeIn(3000);
    }, 25000);
    setTimeout(function () {
      $("#section15-pic7").fadeIn(3000);
    }, 30000);
    setTimeout(function () {
      $("#section15-pic8").fadeIn(1000);
    }, 35000);
    setTimeout(function () {
      $("#section15-pic9").fadeIn(3000);
    }, 40000);
    setTimeout(function () {
      $("#section15-txt1").fadeIn(1000);
    }, 32000);
    setTimeout(function () {
      $("#section15-txt1").fadeOut(500);
    }, 35000);
    setTimeout(function () {
      $("#section15-txt2").fadeIn(1000);
    }, 36000);
    setTimeout(function () {
      $("#section15-txt2").fadeOut(500);
    }, 40000);
    setTimeout(function () {
      $("#section15-txt3").fadeIn(1000);
    }, 41000);
    setTimeout(function () {
      $("#section15-txt3").fadeOut(500);
    }, 43000);
    setTimeout(function () {
      $("#section15-txt4").fadeIn(1000);
    }, 44000);
  }
}
function onSlideOut() {
  Reveal.next();
}

// buzz 音频设置
var soundObjs = [];

const startTips = $("#startTips");
function updateStartTips() {
  // 在竖屏下，才提示“建议在横屏模式下观看”
  if (window.innerHeight > window.innerWidth) {
    startTips.show();
  } else {
    startTips.hide();
  }
}

updateStartTips();
window.addEventListener("resize", updateStartTips, false);

$("#startPlay").click(function () {
  $("#startWrapper").hide();

  // Important: iOS 上必须在用户交互之后再创建 buzz
  for (var i = 0; i < soundUrls.length; i++) {
    var snd = new buzz.sound(soundUrls[i], {
      formats: ["ogg", "mp3"],
      preload: true,
      autoplay: false,
      loop: false,
    });

    // Important: iOS 上只会触发到 loadedmetadata 事件，需要调用 .play() 方法后才触发后续的 loadeddata、canplay、canplaythrough 事件
    /* snd.bind("canplaythrough", function (e) {
        this.isReady = true;
      }); */

    snd.bind("loadedmetadata", function (e) {
      this.isReady = true;
    });

    soundObjs.push(snd);
  }
});

/* 为 <img> 添加 flag */
$(function () {
  $(".backgroundImage").prop("isReady", true);
});

function tryPlay(i) {
  // soundObjs 为空数组，说明用户还没有点击“开始观看”
  if (!soundObjs.length) {
    setTimeout("tryPlay(" + i + ")", 200);
    return;
  }

  var $img = $("img#pic" + i);
  var imgReady = $img.prop("isReady");
  var snd = soundObjs[i];
  var sndReady = snd.isReady;
  if (imgReady && sndReady) {
    console.log("tryPlay ok: " + i);
    snd.play();
    onSlideIn(i);
    setTimeout("onSlideOut()", slideDurations[i]);
  } else {
    console.log("tryPlay retry: " + i);
    setTimeout("tryPlay(" + i + ")", 200); // retry till ready
  }
}

// Reveal 幻灯片设置
for (let i = 0; i < 16; i++) {
  Reveal.addEventListener(
    `section${i}`,
    function () {
      tryPlay(i);
    },
    false
  );
}

Reveal.initialize({
  controls: false,
  progress: false,
  history: true,
  center: true,
  keyboard: false,
  touch: false,
  width: $(window).width(),
  height: $(window).height(),
  minScale: 1,
  maxScale: 1,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || "fade",
});

Reveal.configure({ autoSlide: 0 });

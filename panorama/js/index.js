/**
 * 主入口
 * DATE: 2017-08-25
 * @author: Joven Pan
 **/

// Zoom.js
var Zoom = {
  // 圆柱构造函数
  Cylinder: function (imgs, rect) {
    var n = imgs.length; // 切片数量
    var w = rect.w / n; // 切片宽度
    var r = Math.floor(w / 2 / Math.tan(Math.PI / n)) - 1; // 圆柱中心到切片垂直距离

    var cylinder = new C3D.Sprite();
    for (var i = 0; i < n; i++) {
      var p = new C3D.Plane();
      var ry = (-360 / n) * i; // 切片旋转角度
      var rya = (ry * Math.PI) / 180; // 切片旋转弧度

      p.size(w, rect.h)
        .position(Math.sin(rya) * r, 0, Math.cos(rya) * r)
        .rotation(0, ry + 180, 0)
        .material({
          image: imgs[i].url,
          repeat: "no-repeat",
          bothsides: false,
        })
        .update();

      cylinder.addChild(p);
    }

    return cylinder;
  },
};

// 工具类
var Util = {
  fixed2: function (t) {
    return Math.floor(100 * t) / 100;
  },
};

var App = {
  init: function (config) {
    this.config = config;

    if (config.bg) {
      document.getElementById("bg").style.backgroundImage =
        "url(" + config.bg + ")";
    }

    // 创建场景
    this._initStage();

    // 创建三维容器
    this._initContainer();

    // 创建pano背景
    this._initPanoBg();

    // 创建pano精灵
    this._initPanoSprites();

    // 事件绑定
    this._bindEV();

    // 性能监测
    // this._initState()
  },

  // 创建场景
  _initStage: function () {
    var s = new C3D.Stage();
    s.name("stage");
    s.size(window.innerWidth, window.innerHeight).update();
    document.getElementById("view").appendChild(s.el);

    this.stage = s;
  },

  // 创建三维容器
  _initContainer: function () {
    //容器
    var c = new C3D.Sprite();
    c.name("3dContainer");
    c.position(0, 0, -150).update();
    this.stage.addChild(c);

    this.container = c;
  },

  // 创建pano背景
  _initPanoBg: function () {
    var rect = this.config.panoRect; // 圆柱面展开后rect的尺寸
    var imgs = this.config.panoBg;

    var c = Zoom.Cylinder(imgs, rect);
    c.name("panoBg");
    c.position(0, 0, 0).updateT();
    this.container.addChild(c);

    this.panoBg = c;
  },

  // 创建pano精灵
  _initPanoSprites: function () {
    var sprites = this.config.panoSprites;
    var panoSprites = new C3D.Sprite();
    panoSprites.name("panoSprites").position(0, 0, 0).update();

    var rect = this.config.panoRect; // 背景总尺寸
    var n = this.config.panoBg.length; // 背景切片数量
    var w = rect.w / n; // 背景切片宽度
    var r = Math.floor(w / 2 / Math.tan(Math.PI / n)) - 1; // 圆柱中心到切片垂直距离

    $.each(sprites, function (index, sprite) {
      var leftN = Math.floor(sprite.x / w); // 精灵左边界落在第几个背景切片内
      var rightN = Math.floor((sprite.x + sprite.w) / w); // 精灵右边界落在第几个背景切片内
      var s = (sprite.x % w, new C3D.Sprite()); // 精灵元素

      s.name("sprite" + (index + 1)).updateV();

      // 生成精灵元素的切片
      var planeIdx = 0;
      for (var i = leftN; i <= rightN; i++) {
        if (sprite.imgs[i - leftN]) {
          planeIdx++;
          var p = new C3D.Plane(); // 精灵元素的切面
          var ry = (-360 / n) * i; // 精灵切片旋转角度
          var rya = (ry / 180) * Math.PI; // 精灵切片旋转弧度

          p.size(w, sprite.h)
            .name("sprite" + index + "-" + planeIdx)
            .position(
              (Math.sin(rya) * r).toFixed(5),
              sprite.y + sprite.h / 2 - rect.h / 2,
              (Math.cos(rya) * r).toFixed(5)
            )
            .rotation(0, ry + 180, 0)
            .material({
              image: sprite.imgs[i - leftN],
              bothsides: !1,
            })
            .update();

          s.addChild(p);
        }
      }

      var F = ((-360 / n) * (rightN + leftN)) / 2 + 180; // 精灵旋转角度
      var H = (F / 180) * Math.PI; // 精灵旋转角度
      var J = sprite.l; // 精灵圆柱内缩距离，类似于控制精灵的z-index，内缩距离越大，z-index越大

      s.position(Math.sin(H) * J, 0, Math.cos(H) * J).updateT();

      panoSprites.addChild(s);
    });

    this.container.addChild(panoSprites);

    this.panoSprites = panoSprites;
  },

  // 事件绑定
  _bindEV: function () {
    // 全景 拖拽 & 陀螺仪
    this._panoHandle();
  },

  // 全景 拖拽 & 陀螺仪
  _panoHandle: function () {
    var stage = this.stage,
      container = this.container,
      panoBg = this.panoBg,
      panoSprites = this.panoSprites;

    var p = true;
    var d = {
        lat: 0,
        lon: 0,
      },
      f = {
        lon: 0,
        lat: 0,
      };
    var c = {
      lon: 25,
      lat: 0,
    };

    var originTouchPos = {
        x: 0,
        y: 0,
      },
      oldTouchPos = {
        x: 0,
        y: 0,
      },
      newTouchPos = {
        x: 0,
        y: 0,
      },
      firstDir = "",
      originTime = 0,
      oldTime = 0,
      newTime = 0,
      dx = 0,
      dy = 0,
      ax = 0,
      ay = 0,
      time = 0;

    var onTouchStart = function (t) {
      (firstDir = ""), (t = t.changedTouches[0]);

      originTouchPos.x = oldTouchPos.x = newTouchPos.x = t.clientX;
      originTouchPos.y = oldTouchPos.y = newTouchPos.y = t.clientY;
      originTime = oldTime = newTime = Date.now();
      (dx = dy = ax = ay = 0),
        stage.on("touchmove", onTouchMove),
        stage.on("touchend", onTouchEnd);
    };
    stage.on("touchstart", onTouchStart);

    var onTouchMove = function (t) {
      return (
        (t = t.changedTouches[0]),
        (newTouchPos.x = t.clientX),
        (newTouchPos.y = t.clientY),
        (newTime = Date.now()),
        checkGesture(),
        (oldTouchPos.x = newTouchPos.x),
        (oldTouchPos.y = newTouchPos.y),
        (oldTime = newTime),
        !1
      );
    };

    var onTouchEnd = function () {
      newTime = Date.now();
      var t = (newTime - oldTime) / 1e3;

      stage.off("touchmove", onTouchMove), stage.off("touchend", onTouchEnd);
    };

    function checkGesture() {
      (dx = Util.fixed2(newTouchPos.x - originTouchPos.x)),
        (dy = Util.fixed2(newTouchPos.y - originTouchPos.y)),
        (ax = Util.fixed2(newTouchPos.x - oldTouchPos.x)),
        (ay = Util.fixed2(newTouchPos.y - oldTouchPos.y)),
        (time = (newTime - oldTime) / 1e3),
        "" == firstDir &&
          (Math.abs(ax) > Math.abs(ay)
            ? (firstDir = "x")
            : Math.abs(ax) < Math.abs(ay) && (firstDir = "y"));

      if (!p) {
        (c.lon = (c.lon - 0.2 * ax) % 360),
          (c.lat = Math.max(-90, Math.min(90, c.lat + 0.2 * ay)));
      }
    }

    //执行move动画
    function actiondh() {
      var t = (d.lon + f.lon + c.lon) % 360,
        i = 0.35 * (d.lat + f.lat + c.lat);
      t - panoBg.rotationY > 180 && (panoBg.rotationY += 360),
        t - panoBg.rotationY < -180 && (panoBg.rotationY -= 360);
      var n = t - panoBg.rotationY,
        a = i - panoBg.rotationX;
      Math.abs(n) < 0.1
        ? (panoBg.rotationY = t)
        : (panoBg.rotationY += 0.3 * n),
        Math.abs(a) < 0.1
          ? (panoBg.rotationX = i)
          : (panoBg.rotationX += 0.15 * a),
        panoBg.updateT();

      t - panoSprites.rotationY > 180 && (panoSprites.rotationY += 360),
        t - panoSprites.rotationY < -180 && (panoSprites.rotationY -= 360);
      var o = t - panoSprites.rotationY,
        r = i - panoSprites.rotationX;
      Math.abs(o) < 0.1
        ? (panoSprites.rotationY = t)
        : (panoSprites.rotationY += 0.25 * o),
        Math.abs(r) < 0.1
          ? (panoSprites.rotationX = i)
          : (panoSprites.rotationX += 0.15 * r),
        panoSprites.updateT();

      var s12 = -150 - 20 * Math.abs(n);
      (container.z += 0.1 * (s12 - container.z)),
        container.updateT(),
        requestAnimationFrame(actiondh);
    }

    document.addEventListener(
      "ontouchmove",
      function (event) {
        event.preventDefault();
      },
      { passive: false }
    );

    const _initOrienter = () => {
      //重力感应
      var o2 = new Orienter();
      o2.onOrient = function (t) {
        (d.lon = -t.lon), (d.lat = t.lat);
        if (p) {
          (f.lat = -d.lat), (f.lon = -d.lon);
        }
      };
      o2.init();
    };

    if (
      "DeviceMotionEvent" in window &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      // 需要授权

      // if (localStorage.getItem("deviceMotionPermission") === "true") {
      //   // 已授权，直接调用（不太准确，requestPermission 权限后一段时间后会失效）
      //   _initOrienter();
      // } else {
      // 未授权，先请求授权
      const element = document.getElementById("requestPermission");
      element.style.display = "block";

      element.addEventListener("click", function () {
        // 请求设备运动传感器访问权限相关代码
        DeviceMotionEvent.requestPermission()
          .then((state) => {
            if ("granted" === state) {
              _initOrienter();
              // localStorage.setItem("deviceMotionPermission", "true");
            } else {
              alert(`Apply permission state: ${state}`);
            }
          })
          .catch((err) => {
            alert(`Error: ${err}`);
          });

        element.style.display = "none";
      });
      // }
    } else {
      // 不需要授权，直接调用
      _initOrienter();
    }

    p = false;
    actiondh();
  },

  // 性能监测
  /*_initState() {
        var mystats = new MyStats()
        mystats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(mystats.dom)

        function animate() {
            mystats.update();
            requestAnimationFrame( animate );
            // setTimeout(animate,1000/60);
        }

        requestAnimationFrame(animate)
    }*/
};

var timer = setInterval(function () {
  if (window.config) {
    App.init(window.config);
    clearInterval(timer);
  }
}, 10);

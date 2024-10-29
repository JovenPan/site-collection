window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  "a-year-ago-new": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0740dHzEshLlKl3CNlblk5l", "a-year-ago-new");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        roleLayer: {
          default: null,
          type: cc.Node
        },
        hideRole: {
          default: null,
          type: cc.Node
        },
        targetRole: {
          default: null,
          type: cc.Node
        },
        dateIcon: {
          default: null,
          type: cc.Node
        },
        popup: {
          default: null,
          type: cc.Node
        },
        yearLabel: {
          default: null,
          type: cc.Label
        },
        yearAddBtn: {
          default: null,
          type: cc.Node
        },
        yearSubBtn: {
          default: null,
          type: cc.Node
        },
        monthLabel: {
          default: null,
          type: cc.Label
        },
        monthAddBtn: {
          default: null,
          type: cc.Node
        },
        monthSubBtn: {
          default: null,
          type: cc.Node
        },
        dayLabel: {
          default: null,
          type: cc.Label
        },
        dayAddBtn: {
          default: null,
          type: cc.Node
        },
        daySubBtn: {
          default: null,
          type: cc.Node
        },
        okBtn: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var now = new Date();
        this.year = now.getFullYear();
        this.month = now.getMonth() + 1;
        this.day = now.getDate();
      },
      start: function start() {
        this.passed = false;
        this.yearInput = this.year;
        this.monthInput = this.month;
        this.dayInput = this.day;
        this.updateInput();
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        var roles = this.roleLayer.children;
        roles.forEach(function(role) {
          role.on("touchend", Utils.throttle(_this.onTouch, 500), _this);
        });
        this.dateIcon.on("touchend", Utils.throttle(this.onShowPopup, 500), this);
        this.okBtn.on("touchend", Utils.throttle(this.onConfirm, 100), this);
        this.yearAddBtn.on("touchend", Utils.throttle(this.onYearAdd, 100), this);
        this.yearSubBtn.on("touchend", Utils.throttle(this.onYearSub, 100), this);
        this.monthAddBtn.on("touchend", Utils.throttle(this.onMonthAdd, 100), this);
        this.monthSubBtn.on("touchend", Utils.throttle(this.onMonthSub, 100), this);
        this.dayAddBtn.on("touchend", Utils.throttle(this.onDayAdd, 100), this);
        this.daySubBtn.on("touchend", Utils.throttle(this.onDaySub, 100), this);
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        var pos = event.getLocation();
        if (event.target.uuid === this.targetRole.uuid) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no", pos);
      },
      onShowPopup: function onShowPopup() {
        Utils.play("clickAudio");
        this.popup.active = true;
        Utils.menuComp.gameMenu.opacity = 10;
        Utils.menuComp.menuLocked = true;
      },
      hidePopup: function hidePopup() {
        this.popup.active = false;
        Utils.menuComp.gameMenu.opacity = 255;
        Utils.menuComp.menuLocked = false;
      },
      onDestroy: function onDestroy() {
        Utils.menuComp.gameMenu.opacity = 255;
        Utils.menuComp.menuLocked = false;
      },
      onConfirm: function onConfirm() {
        if (this.passed) return;
        Utils.play("clickAudio");
        if (this.yearInput === this.year - 1) {
          this.hideRole.active = false;
          this.targetRole.active = true;
        } else {
          this.hideRole.active = true;
          this.targetRole.active = false;
        }
        this.hidePopup();
      },
      onYearAdd: function onYearAdd() {
        if (this.passed) return;
        if (this.yearInput < this.year + 10) {
          Utils.play("clickAudio");
          this.yearInput += 1;
          this.updateInput();
        }
      },
      onYearSub: function onYearSub() {
        if (this.passed) return;
        if (this.yearInput > this.year - 10) {
          Utils.play("clickAudio");
          this.yearInput -= 1;
          this.updateInput();
        }
      },
      onMonthAdd: function onMonthAdd() {
        if (this.passed) return;
        if (this.monthInput < 12) {
          Utils.play("clickAudio");
          this.monthInput += 1;
          this.updateInput();
        }
      },
      onMonthSub: function onMonthSub() {
        if (this.passed) return;
        if (this.monthInput > 1) {
          Utils.play("clickAudio");
          this.monthInput -= 1;
          this.updateInput();
        }
      },
      onDayAdd: function onDayAdd() {
        if (this.passed) return;
        if (this.dayInput < 31) {
          Utils.play("clickAudio");
          this.dayInput += 1;
          this.updateInput();
        }
      },
      onDaySub: function onDaySub() {
        if (this.passed) return;
        if (this.dayInput > 1) {
          Utils.play("clickAudio");
          this.dayInput -= 1;
          this.updateInput();
        }
      },
      updateInput: function updateInput() {
        this.yearLabel.string = this.yearInput.toString();
        this.monthLabel.string = this.monthInput.toString();
        this.dayLabel.string = this.dayInput.toString();
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "a-year-ago": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6bca43P6sdGz6jv5dqdeOX+", "a-year-ago");
    "use strict";
    var Utils = require("utils");
    var ONE_YEAR_TIME = 2592e7;
    cc.Class({
      extends: cc.Component,
      properties: {
        roleLayer: {
          default: null,
          type: cc.Node
        },
        hideRole: {
          default: null,
          type: cc.Node
        },
        targetRole: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.startTime = +new Date();
        this.backOneYear = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        var roles = this.roleLayer.children;
        roles.forEach(function(role) {
          role.on("touchend", Utils.throttle(_this.onTouch, 500), _this);
        });
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        var pos = event.getLocation();
        if (event.target.uuid === this.targetRole.uuid) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no", pos);
      },
      aYearAgo: function aYearAgo() {
        if (this.passed || this.backOneYear) return;
        this.backOneYear = true;
        this.hideRole.active = false;
        this.targetRole.active = true;
      },
      update: function update(dt) {
        if (this.backOneYear) return;
        var now = +new Date();
        this.startTime - now > ONE_YEAR_TIME && this.aYearAgo();
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "audio-game": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "807aaFoUAZLlq0TYt6sRCTi", "audio-game");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        if (navigator.getUserMedia) {
          Utils.log("getUserMedia support");
          navigator.getUserMedia({
            audio: true
          }, this.onAudioSuccess, this.onAudioError);
        } else Utils.log("getUserMedia not support");
        navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? Utils.log("mediaDevices.getUserMedia support") : Utils.log("mediaDevices.getUserMedia not support");
      },
      onAudioSuccess: function onAudioSuccess(stream) {
        Utils.log("onAudioSuccess");
        var audioContext = window.AudioContext || window.webkitAudioContext;
        if (audioContext) {
          Utils.log("audioContext support");
          var context = new audioContext();
          var liveSource = context.createMediaStreamSource(stream);
          var levelChecker = context.createScriptProcessor(4096, 1, 1);
          liveSource.connect(levelChecker);
          liveSource ? Utils.log("liveSource support") : Utils.log("liveSource not support");
          levelChecker ? Utils.log("levelChecker support") : Utils.log("levelChecker not support");
          levelChecker.onaudioprocess = function(e) {
            Utils.log("onaudioprocess");
            var buffer = e.inputBuffer.getChannelData(0);
            var maxVal = 0;
            for (var i = 0; i < buffer.length; i++) maxVal < buffer[i] && (maxVal = buffer[i]);
            Utils.log("\u60a8\u7684\u97f3\u91cf\u503c\uff1a" + Math.round(100 * maxVal));
            if (maxVal > .5) {
              Utils.log("\u60a8\u7684\u58f0\u97f3\u592a\u54cd\u4e86!!");
              liveSource.disconnect(levelChecker);
            }
          };
        } else Utils.log("audioContext not support");
      },
      onAudioError: function onAudioError() {
        Utils.log("onAudioError");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  audio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3b35PPaLZIrqNVqIriMMWa", "audio");
    "use strict";
    var Utils = require("utils");
    var Config = require("config");
    var IN_WX = Config.IN_WX;
    cc.Class({
      extends: cc.Component,
      properties: {
        soundBtn: {
          default: null,
          type: cc.Node
        },
        mute: {
          default: null,
          type: cc.Node
        },
        bgmAudio: {
          default: null,
          type: cc.AudioClip
        },
        btnAudio: {
          default: null,
          type: cc.AudioClip
        },
        clickAudio: {
          default: null,
          type: cc.AudioClip
        },
        yesAudio: {
          default: null,
          type: cc.AudioClip
        },
        noAudio: {
          default: null,
          type: cc.AudioClip
        },
        passAudio: {
          default: null,
          type: cc.AudioClip
        },
        champagneAudio: {
          default: null,
          type: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node);
        Utils.audioComp = this;
        this.soundStatus = Utils.getData("sound_btn");
        this.setSound(this.soundStatus);
        if (IN_WX) {
          var bgm = wx.createInnerAudioContext();
          bgm.autoplay = true;
          bgm.loop = true;
          bgm.src = "https://cdn.zykpi.com/unbelievable/bgmusic.mp3";
          "off" === this.soundStatus ? bgm.pause() : bgm.play();
          this.bgm = bgm;
        } else this.bgmAudioId = cc.audioEngine.play(this.bgmAudio, true, "off" === this.soundStatus ? 0 : 1);
      },
      start: function start() {
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        var self = this;
        this.soundBtn.on("touchstart", function() {
          _this.setSound("on" === _this.soundStatus ? "off" : "on");
          _this.play("btnAudio");
        }, this);
        if (IN_WX) {
          wx.onShow(function() {
            "on" === self.soundStatus && self.bgm.play();
          });
          wx.onAudioInterruptionEnd(function() {
            "on" === self.soundStatus && self.bgm.play();
          });
        }
      },
      play: function play(file) {
        var loop = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var volume = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        "off" !== this.soundStatus && cc.audioEngine.play(this[file], loop, volume);
      },
      setSound: function setSound(status) {
        var flag = "off" === status ? "off" : "on";
        Utils.setData("sound_btn", flag);
        this.soundStatus = flag;
        this.mute.active = "off" === flag;
        this.setBgmVolume();
      },
      setBgmVolume: function setBgmVolume() {
        var volume = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        IN_WX ? this.bgm && ("off" === this.soundStatus ? this.bgm.pause() : this.bgm.play()) : cc.audioEngine.setVolume(this.bgmAudioId, "off" === this.soundStatus ? 0 : volume);
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ],
  background: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8673cyOyEJIuZWLz9ZIEiFs", "background");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.node.zIndex = -1;
        cc.game.addPersistRootNode(this.node);
      }
    });
    cc._RF.pop();
  }, {} ],
  balance: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1b72wm1d1AfauVCUzUPPB9", "balance");
    "use strict";
    var Utils = require("utils");
    var MAX_ROTATION = 30;
    var ROTATE_SPEED = .02;
    var MOVE_DURATION = .2;
    var STICK_DISTANCE = 100;
    var PASS_DURATION = 3;
    var ANIMAL_WEIGHT = {
      monkey: 65,
      dog: 32,
      rabbit: 16,
      bird: 8,
      snail: 4
    };
    var TOTAL_WEIGHT = 0;
    Object.keys(ANIMAL_WEIGHT).forEach(function(key) {
      TOTAL_WEIGHT += ANIMAL_WEIGHT[key];
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        bar: {
          default: null,
          type: cc.Node
        },
        leftPlate: {
          default: null,
          type: cc.Node
        },
        rightPlate: {
          default: null,
          type: cc.Node
        },
        leftStick: {
          default: null,
          type: cc.Node
        },
        rightStick: {
          default: null,
          type: cc.Node
        },
        animals: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var animals = this.animals.children;
        var animalsObj = {};
        animals.forEach(function(animal) {
          animalsObj[animal.name] = {
            node: animal,
            oriPos: animal.position,
            posType: "ori"
          };
        });
        this.animalsObj = animalsObj;
        this.animalsNode = animals;
      },
      start: function start() {
        this.passed = false;
        this.rotation = 0;
        this.bindEv();
        this.animalsObj["monkey"].posType = "left";
        this.animalsObj["snail"].posType = "right";
        this.animalsObj["bird"].posType = "right";
        this.animalsObj["rabbit"].posType = "right";
        this.checkBalance();
      },
      bindEv: function bindEv() {
        this.node.on("drag-start", this.onDragStart, this);
        this.node.on("drag-end", this.onDragEnd, this);
        this.node.on("screen-edge", this.onDragEnd, this);
      },
      onDragStart: function onDragStart(event) {
        event.stopPropagation();
        if (this.passed) return;
        var target = event.target;
        this.animalsObj[target.name].isDragging = true;
      },
      onDragEnd: function onDragEnd(event) {
        event.stopPropagation();
        if (this.passed) return;
        var target = event.target;
        var leftWorldPos = this.leftStick.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var leftPos = this.animals.convertToNodeSpaceAR(leftWorldPos);
        var rightWorldPos = this.rightStick.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var rightPos = this.animals.convertToNodeSpaceAR(rightWorldPos);
        var leftDistance = target.position.sub(leftPos).mag();
        var rightDistance = target.position.sub(rightPos).mag();
        var posType = "";
        if (leftDistance < STICK_DISTANCE) posType = "left"; else if (rightDistance < STICK_DISTANCE) posType = "right"; else {
          posType = "ori";
          target.stopAllActions();
          var targetPos = this.animalsObj[target.name].oriPos;
          var move = cc.moveTo(MOVE_DURATION, targetPos).easing(cc.easeSineInOut());
          target.runAction(move);
        }
        this.animalsObj[target.name].posType = posType;
        this.animalsObj[target.name].isDragging = false;
        this.checkBalance();
      },
      checkBalance: function checkBalance() {
        var _this = this;
        var leftWeight = 0;
        var rightWeight = 0;
        Object.keys(this.animalsObj).forEach(function(key) {
          var animalObj = _this.animalsObj[key];
          "left" === animalObj.posType && (leftWeight += ANIMAL_WEIGHT[key]);
          "right" === animalObj.posType && (rightWeight += ANIMAL_WEIGHT[key]);
        });
        var delta = rightWeight - leftWeight;
        0 === delta ? this.scheduleOnce(this.pass, PASS_DURATION) : this.unschedule(this.pass);
        this.rotation = Math.abs(delta) > MAX_ROTATION ? delta / Math.abs(delta) * MAX_ROTATION : delta;
      },
      update: function update(dt) {
        var _this2 = this;
        if (this.passed) return;
        var curRotation = this.bar.rotation;
        var delta = this.rotation - curRotation;
        if (0 !== delta) {
          var rotation = Math.abs(delta) < .05 ? this.rotation : curRotation + delta * ROTATE_SPEED;
          this.bar.rotation = rotation;
          this.leftPlate.rotation = -rotation;
          this.rightPlate.rotation = -rotation;
        }
        var leftWorldPos = this.leftStick.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var leftPos = this.animals.convertToNodeSpaceAR(leftWorldPos);
        var rightWorldPos = this.rightStick.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var rightPos = this.animals.convertToNodeSpaceAR(rightWorldPos);
        this.animalsNode.forEach(function(animal) {
          var animalObj = _this2.animalsObj[animal.name];
          var oriPos = animalObj.oriPos, posType = animalObj.posType, isDragging = animalObj.isDragging;
          if (!isDragging && "ori" !== posType) switch (posType) {
           case "left":
            animal.setPosition(leftPos);
            break;

           case "right":
            animal.setPosition(rightPos);
          }
        });
      },
      pass: function pass() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        this.animalsNode.forEach(function(animal) {
          animal.getComponent("draggable").draggable = false;
        });
        Utils.feedback("yes");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "biggest-fire": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "114f4H+LdlLmZ9bXqYpRcCF", "biggest-fire");
    "use strict";
    var Utils = require("utils");
    var COMBINE_THRESHOLD = 225;
    cc.Class({
      extends: cc.Component,
      properties: {
        firesLayer: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.fires = this.firesLayer.children;
      },
      start: function start() {
        this.passed = false;
        this.count = 4;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        this.node.on("drag-end", function(event) {
          event.stopPropagation();
          if (_this.passed) return;
          var target = event.target;
          _this.fires.forEach(function(fire) {
            if (fire.active && fire.uuid !== target.uuid) {
              var distance = target.position.sub(fire.position).mag();
              distance <= COMBINE_THRESHOLD && _this.combineFires(target, fire);
            }
          });
        });
      },
      combineFires: function combineFires(a, b) {
        this.count -= 1;
        a.active = false;
        b.scale = Math.max(a.scale, b.scale) + .15;
        if (1 === this.count) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        }
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "body-temperature": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5b3fioEOdEe6LyzqkqJkXV", "body-temperature");
    "use strict";
    var Utils = require("utils");
    var ANIMATION_DURATION = .5;
    var DELAY_TIME = .8;
    cc.Class({
      extends: cc.Component,
      properties: {
        inner: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("press-start", this.onPressStart, this);
      },
      onPressStart: function onPressStart() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        var scale = cc.scaleTo(ANIMATION_DURATION, 1, 1.2).easing(cc.easeSineInOut());
        var delay = cc.delayTime(DELAY_TIME);
        var callback = cc.callFunc(function() {
          Utils.feedback("yes");
        }, this);
        this.inner.runAction(cc.sequence(scale, delay, callback));
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "broken-house": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47242dHg9tB7YEkZc5T4+mL", "broken-house");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        goodHouse: {
          default: null,
          type: cc.Node
        },
        brokenHouse: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("shaken", this.onShaken, this);
      },
      onShaken: function onShaken() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        this.goodHouse.active = false;
        this.brokenHouse.active = true;
        this.scheduleOnce(function() {
          Utils.feedback("yes");
        }, 1);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "burst-acne": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "488b2ZPXbVKErGzRnHmRaC8", "burst-acne");
    "use strict";
    var Utils = require("utils");
    var MULTITOUCH_COUNT = 3;
    var SCALE_DURATION = .1;
    cc.Class({
      extends: cc.Component,
      properties: {
        burst: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.count = 0;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("multi-touch", Utils.throttle(this.onMultiTouch, 800), this);
      },
      onMultiTouch: function onMultiTouch(event) {
        event.stopPropagation();
        if (this.passed) return;
        this.count += 1;
        this.count >= MULTITOUCH_COUNT && this.onPass();
      },
      onPass: function onPass() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        this.burst.active = true;
        var scale = cc.scaleTo(SCALE_DURATION, 1, 1).easing(cc.easeSineInOut());
        var delay = cc.delayTime(1);
        var callback = cc.callFunc(function() {
          Utils.feedback("yes");
        }, this);
        this.burst.runAction(cc.sequence(scale, delay, callback));
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "car-parked": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1f1dYlVmxM7aVAiTLR3p6j", "car-parked");
    "use strict";
    var Utils = require("utils");
    var ANSWER = 87;
    var ROTATE_DURATION = 1;
    cc.Class({
      extends: cc.Component,
      properties: {
        car: {
          default: null,
          type: cc.Node
        },
        counterPrefab: cc.Prefab
      },
      onLoad: function onLoad() {
        var counter = cc.instantiate(this.counterPrefab);
        counter.y = -400;
        counter.getComponent("counter").init({
          initNumber: 81,
          maxNumber: 99,
          minNumber: 0
        });
        this.node.addChild(counter);
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("input-confirm", this.onInputConfirm, this);
      },
      onInputConfirm: function onInputConfirm(event) {
        event.stopPropagation();
        if (this.passed) return;
        if (event.detail.number === ANSWER) {
          this.passed = true;
          Utils.menuLock();
          var delay1 = cc.delayTime(.5);
          var rotate = cc.rotateBy(ROTATE_DURATION, -180).easing(cc.easeSineInOut());
          var delay2 = cc.delayTime(1.5);
          var callback = cc.callFunc(function() {
            Utils.feedback("yes");
          }, this);
          this.car.runAction(cc.sequence(delay1, rotate, delay2, callback));
        } else Utils.feedback("no");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "click-animals": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf039MaYgJHDJMfG0ma9e6g", "click-animals");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        roleLayer: {
          default: null,
          type: cc.Node
        },
        bird: {
          default: null,
          type: cc.Node
        },
        monkey: {
          default: null,
          type: cc.Node
        },
        rabbit: {
          default: null,
          type: cc.Node
        },
        snail: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.roles = this.roleLayer.children;
        this.birdUuid = this.bird.uuid;
        this.monkeyUuid = this.monkey.uuid;
        this.rabbitUuid = this.rabbit.uuid;
        this.snailUuid = this.snail.uuid;
      },
      start: function start() {
        this.passed = false;
        this.init();
        this.bindEv();
      },
      init: function init() {
        this.touchedArr = [];
        this.roles.forEach(function(role) {
          var index = role.getChildByName("index");
          index.getComponent(cc.Label).string = "";
        });
      },
      bindEv: function bindEv() {
        var _this = this;
        this.roles.forEach(function(role) {
          role.on("touchend", Utils.throttle(_this.onTouch, 500), _this);
        });
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        var node = event.target;
        var uuid = node.uuid;
        if (-1 === this.touchedArr.indexOf(uuid)) {
          this.touchedArr.push(uuid);
          var index = node.getChildByName("index");
          index.getComponent(cc.Label).string = this.touchedArr.length.toString();
          this.check();
        }
      },
      check: function check() {
        var arr = this.touchedArr;
        if (4 === arr.length) {
          if (arr[0] === this.birdUuid && arr[1] === this.monkeyUuid && arr[2] === this.rabbitUuid && arr[3] === this.snailUuid) {
            this.passed = true;
            Utils.menuLock();
            Utils.feedback("yes");
          }
        } else if (arr.length === this.roles.length) {
          Utils.feedback("no");
          this.init();
        }
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "click-duck": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "409c5dl7d9G/K2Sr/XuiwNG", "click-duck");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        puzzleTitlePrefab: cc.Prefab,
        roleLayer: {
          default: null,
          type: cc.Node
        },
        duck: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var scene = Utils.menuComp.scene;
        var puzzleTitle = cc.instantiate(this.puzzleTitlePrefab);
        puzzleTitle.addComponent("draggable");
        this.puzzleTitle = puzzleTitle;
        var puzzleTitleComp = puzzleTitle.getComponent("puzzle-title");
        puzzleTitleComp.setTitle(scene);
        this.node.addChild(puzzleTitle);
        this.roleLayer.zIndex = 10;
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        var roles = this.roleLayer.children;
        roles.forEach(function(role) {
          role.on("touchstart", Utils.throttle(_this.onTouch, 1e3), _this);
        });
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        if (event.target.uuid === this.duck.uuid && this.puzzleTitle.y < this.duck.y) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no", event.getLocation());
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "click-plane": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3b20LMdtFHp41/2DfKGgyR", "click-plane");
    "use strict";
    var Utils = require("utils");
    var CLICK_COUNT = 1;
    cc.Class({
      extends: cc.Component,
      properties: {
        puzzleTitle: {
          default: null,
          type: cc.Label
        },
        puzzleIndex: {
          default: null,
          type: cc.Label
        },
        targetRole: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        Utils.setPuzzleTitle(this.puzzleTitle, this.puzzleIndex);
      },
      start: function start() {
        this.passed = false;
        this.clickCount = 0;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        this.targetRole.on("touchend", function() {
          if (_this.passed) return;
          Utils.play("btnAudio");
          _this.clickCount += 1;
          if (_this.clickCount >= CLICK_COUNT) {
            _this.passed = true;
            Utils.menuLock();
            Utils.feedback("yes");
          }
        }, this);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "click-propagation": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04090HqxTRHzK0N6pdz7vHJ", "click-propagation");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("touchend", Utils.throttle(this.onTouch, 100), this);
      },
      onTouch: function onTouch() {
        var clickEvent = new cc.Event.EventCustom("click-propagation", true);
        this.node.dispatchEvent(clickEvent);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "combine-largest": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a479nS4R5KX4eQNQd2tZUT", "combine-largest");
    "use strict";
    var Utils = require("utils");
    var MOVE_DURATION = .1;
    var PADDING_LEFT = 20;
    var OFFSET_LEFT = 4;
    cc.Class({
      extends: cc.Component,
      properties: {
        zero1: {
          default: null,
          type: cc.Node
        },
        zero2: {
          default: null,
          type: cc.Node
        },
        input: {
          default: null,
          type: cc.Node
        },
        okBtn: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.inputPos = this.input.position;
      },
      start: function start() {
        this.passed = false;
        this.isRendering = false;
        this.inputUuidArr = [];
        this.inputNodeArr = [];
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.okBtn.on("touchend", Utils.throttle(this.onTouch, 1e3), this);
        this.node.on("drag-end", this.onDragEnd, this);
      },
      onDragEnd: function onDragEnd(event) {
        event.stopPropagation();
        if (this.passed) return;
        var target = event.target;
        var collision = Utils.collision(target, this.input);
        -1 === this.inputUuidArr.indexOf(target.uuid) ? collision && this.inputPush(target) : collision ? this.rerenderInput() : this.inputPop(target);
      },
      inputPush: function inputPush(node) {
        this.inputUuidArr.push(node.uuid);
        this.inputNodeArr.push(node);
        this.rerenderInput();
      },
      inputPop: function inputPop(node) {
        var index = this.inputUuidArr.indexOf(node.uuid);
        this.inputUuidArr.splice(index, 1);
        this.inputNodeArr.splice(index, 1);
        this.rerenderInput();
      },
      rerenderInput: function rerenderInput() {
        var _this = this;
        if (this.isRendering) return;
        this.inputNodeArr.length && (this.isRendering = true);
        var inputPos = this.inputPos;
        var inputWidthHalf = this.input.width / 2;
        var offsetX = -inputWidthHalf + PADDING_LEFT;
        this.inputNodeArr.forEach(function(node, index) {
          offsetX += node.width / 2;
          var targetPos = cc.v2(inputPos.x + offsetX, inputPos.y);
          offsetX += node.width / 2 - OFFSET_LEFT;
          var move = cc.moveTo(MOVE_DURATION, targetPos).easing(cc.easeSineInOut());
          if (index === _this.inputNodeArr.length - 1) {
            var callback = cc.callFunc(function() {
              _this.isRendering = false;
            });
            node.runAction(cc.sequence(move, callback));
          } else node.runAction(move);
        });
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        if (this.checkResult()) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no");
      },
      checkResult: function checkResult() {
        return 2 === this.inputUuidArr.length && -1 !== this.inputUuidArr.indexOf(this.zero1.uuid) && -1 !== this.inputUuidArr.indexOf(this.zero2.uuid);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "combine-smallest": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc837dQX2NCyazkR3VbPgAB", "combine-smallest");
    "use strict";
    var Utils = require("utils");
    var MOVE_DURATION = .1;
    cc.Class({
      extends: cc.Component,
      properties: {
        numbers: {
          default: null,
          type: cc.Node
        },
        three: {
          default: null,
          type: cc.Node
        },
        six: {
          default: null,
          type: cc.Node
        },
        eight: {
          default: null,
          type: cc.Node
        },
        nine: {
          default: null,
          type: cc.Node
        },
        dot: {
          default: null,
          type: cc.Node
        },
        okBtn: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        var scene = Utils.menuComp.scene;
        var index = scene.index;
        index >= 9 && (this.dot.x += 60);
        var initArr = [ "three", "eight", "six", "nine" ];
        this.initPos = [];
        this.nodeArr = [];
        initArr.forEach(function(num) {
          _this.initPos.push(_this[num].position);
          _this.nodeArr.push(_this[num]);
        });
      },
      start: function start() {
        this.passed = false;
        this.dotStick = false;
        this.isMoving = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this2 = this;
        var numbers = this.numbers.children;
        numbers.forEach(function(number) {
          number.on("touchmove", _this2.onTouchMove, _this2);
        });
        this.node.on("drag-end", this.onDragEnd, this);
        this.node.on("screen-edge", this.onDragEnd, this);
        this.node.on("stick-end", this.onStickEnd, this);
        this.okBtn.on("touchend", Utils.throttle(this.onTouch, 1e3), this);
      },
      onStickEnd: function onStickEnd() {
        if (this.passed || this.dotStick) return;
        this.dotStick = true;
      },
      onDragEnd: function onDragEnd(event) {
        var _this3 = this;
        event.stopPropagation();
        if (this.passed) return;
        this.nodeArr.forEach(function(node, index) {
          node.uuid === event.target.uuid && _this3.renderNode(node, index);
        });
      },
      onTouchMove: function onTouchMove(event) {
        var _this4 = this;
        if (this.isMoving) return;
        this.isMoving = true;
        this.nodeArr.sort(function(a, b) {
          return a.x - b.x;
        });
        this.nodeArr.forEach(function(node, index) {
          node.uuid !== event.target.uuid && _this4.renderNode(node, index);
        });
        this.scheduleOnce(function() {
          _this4.isMoving = false;
        }, MOVE_DURATION);
      },
      renderNode: function renderNode(node, index) {
        node.stopAllActions();
        var targetPos = this.initPos[index];
        var move = cc.moveTo(MOVE_DURATION, targetPos).easing(cc.easeSineInOut());
        node.runAction(move);
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        if (this.checkResult()) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no");
      },
      checkResult: function checkResult() {
        return this.dotStick && this.nodeArr[0].uuid === this.three.uuid && this.nodeArr[1].uuid === this.six.uuid && this.nodeArr[2].uuid === this.eight.uuid && this.nodeArr[3].uuid === this.nine.uuid;
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c1c8AdA/VFS4vk57DVuemB", "config");
    "use strict";
    module.exports = {
      IN_FB: !!window.FBInstant,
      IN_FB_WEB: !!(window.FBInstant && "WEB" === FBInstant.getPlatform()),
      INTERSTITIAL_AD_ID: "1859036124160601_1859195310811349",
      REWARDED_VIDEO_ID: "1859036124160601_1859039200826960",
      LOGO_BASE64: "data:image/jpeg;base64,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UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8IAEQgEAAQAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAMCBAEFAAYHCAkKC//EAMMQAAEDAwIEAwQGBAcGBAgGcwECAAMRBBIhBTETIhAGQVEyFGFxIweBIJFCFaFSM7EkYjAWwXLRQ5I0ggjhU0AlYxc18JNzolBEsoPxJlQ2ZJR0wmDShKMYcOInRTdls1V1pJXDhfLTRnaA40dWZrQJChkaKCkqODk6SElKV1hZWmdoaWp3eHl6hoeIiYqQlpeYmZqgpaanqKmqsLW2t7i5usDExcbHyMnK0NTV1tfY2drg5OXm5+jp6vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAQIAAwQFBgcICQoL/8QAwxEAAgIBAwMDAgMFAgUCBASHAQACEQMQEiEEIDFBEwUwIjJRFEAGMyNhQhVxUjSBUCSRoUOxFgdiNVPw0SVgwUThcvEXgmM2cCZFVJInotIICQoYGRooKSo3ODk6RkdISUpVVldYWVpkZWZnaGlqc3R1dnd4eXqAg4SFhoeIiYqQk5SVlpeYmZqgo6SlpqeoqaqwsrO0tba3uLm6wMLDxMXGx8jJytDT1NXW19jZ2uDi4+Tl5ufo6ery8/T19vf4+fr/2wBDAA8PDw8PDxoPDxokGhoaJDEkJCQkMT4xMTExMT5LPj4+Pj4+S0tLS0tLS0taWlpaWlppaWlpaXZ2dnZ2dnZ2dnb/2wBDARITEx4cHjQcHDR7VEVUe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3v/2gAMAwEAAhEDEQAAAeh21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbUnSmE7Y2idW0KEle0dtq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq0TFJVGqJQOj6vFVrqVNXiufXV3LB5Am2jttW21bbVttW21bbVttW21bbVtk0rJ1KyNS8manbVttW21bbVttW21bbVttWyZqdtW21bbVttW21bbVttW21bbVttW21bbVttW0apyJpW2rbatsmlaJrbattq22rbattq22rbatorKtEcu1VuqDzpA1wKvXM4FCgwkuFRS4S8K2O52Cl0xp1AuWxVh2I7Uk1Su0wauU/0WMP9VVYEpzj2+AfTDbattq22rbattq22rbattq22qJiKytq22pOUmGUnUrbR22rbattqyVIpeia22pO0wnbR22rbattq22rbattq22rbattq22rbatExUJVBGhWqFpUDttSIVEMrTHbattq22rZC62TqVEoqYiKr6GX6bJPsnTttNttW21bbVtohUW9RcHLbYbbbVttW21bbVtlQRTWAm5+kc163we6JI22rbattq22rbattq22rbaslSanZNLjTWidScpMJmJjttW21bbVkq1JUmanbUmYmE7aO21bbVttW21bbVttW21bbVth0SI1SmIguY1RtjTtFKlMCVG1bQutto7bVttW21RCkVGnUtMTQxatBprenUnRb6vUNH2Y6L4bZlK+eMns22wfbaFPb1b85G2w2ia+wK7bBtsmCs3albBi3dWbe0nTt2lpqZdRytm/LdbZk22rbattq22rbaoidUaYhExNQqJimFxSslVZKkUqYmttq22rbattqjaIKiJjGnQnJmM7attq22rbattq22rbattFZCohO2NttW21aJ1RO1bbVtpFO2jttW21bbVttW21bbVq+w50GucLdJ1MzGwdql5qZ55qZIsNCpswsZLfRI222ixkzI42m2GzENmI5ME2SoVM281WOXWmiW7KjSGzlmNWzxZUxW5umbUR6un/JjI7TVlmc9tjbbVttW21RG0NtNRp1RtMdMatEzUTE1ttW21bbVttWSqK20EbaKVokU7aO21bbVttW21bbVttSdohMbGnRNbbVttW21bbVtlCido7bVttW21bbVttW21bZNKrCMQaZyIaavysBjS2mnVG2YBARcECYa6JwO20dtqiouKs5WchNPokIJtUQcrcdVMHjYjs1e+c4PtsHDV3TY5sbA0x2aN6sxFwen6rnXD8nTbZ8ttq22rJUmttiNMYU6NWidULQuo06O21bbVttW21bbVttSdMQiZxtE6p0YGdtW21bbVttW21bbVonVE7Vkq1Jykw2lNTCppC0zGdtW21bbVttW21bbVttWQnlQbKpiwTZg4e4bNjq022gHDJEAN38lWL/AGm22DbIYFLLVFtUsXzahPqm2l22GoYPiqF7A7aKnJTRMFJDjMwS2DALuRvYCbxsslQ1aCLDc3VbbTDbattqTGXBOmK22NttWnSClSVVttW21bbVttW21bbVttWSpNTtiI2mo2mp0SDttW21bbVttW21bbVttW21bbVomKjQqohSalW1bbVttW21bbVttW21VPPdXyivbqGTPt0Aryj9sByc26bFdVU22jU62iqtdhFNFmSCxOJ8UWbZejDJqpLiotGxNtl222jq2ygpT640lPriaqF2miwO400TsGzJ7iKi2EaWvO1eHO3ecycr0Orn7YK2xkL2rbak7JgrZVZKkxhadSttW21bbVttW21bbVttWSqKjTiI2monatMSDttW21bbVttW21bbVttW21bbVonUlW1bbVttW21bbVttW21bbVttWqLenBo3IEJuN4J1FzLeRsfATTnM0wfZq5jO2DbbVGnQ22jttVU8bHbB3XWNaHstkB16uclXEokNO0VOGkg2bIg7boby2m2Gu21N2dpjnWGeVpQHRc84OPX5k9fPbaojaGmdFCpTSoTNQvattq22rbattq22rbattq22qNtCJ2NtGFlRqnbR22rbattq22rbattq22rbattq22rbattq22rbattq22rbatsmqOrRZZ7rVsvSBrY4rWJtdLUqtNVdNho1EW7aTOhFtdtg221bbVttTKHEHI9bZN4uNsHasrfFKWbfSVGt1RqF2uqtK8iKK20TSlgRM5zEUtg2buzmxeWTyRvT9CmuWvW9SR2s01w2c7Y221bbVttW21bbVttW21bbVttW21bbVttWiYqNphO2jGnVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbUmkmiVtZ18Lrc5Kl6dto7bVttW21bbVttW21bbVttW2mEbIKklqEpYxUIltRMjykStRVuh+WqlN2SqCeiVXOq6KRc+W8mqp070UL2rbattqirtYrlL9rVFe21dYtntsbbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbRU6E0vbVttW21atccqCN2Ho00HUdDFcuW6ZRAZqCa0mn0biaaY3Gp9VxqfVcam1XEVGhaor1wdDg0Gw7RxChX0JIUJ7marnLjGQqdW2wO21bbVttW21bbVttW21bbVttW21RR3oYc/1XJ2DL0WiWTbatkxS9tW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVtk1OiYbbVpSqO21ZC6MVe0RdLo7d7A7bR22qEr1CSfQbQ60Wmd6mmd6minOoCi6hqVqidq22rbattq22rbattFTqopFhEsBOS8y9IushYbbattq22rbattq22rbaq6k6qhhdv+U6h88nSypUQYssSqJhkjttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21JmUwnbVComO21N+StaZXddGzfK220dtq22rbattq22rbattq22rbattq22rbattq22rbattqwyIrnThKUvqm2DNzmIMq7uebMD0mr3sV7YHbattq22rbattqzZzEOVvmbAjrcgmmWlJQUJgtIlMkE2wO21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVCV6tkzWGSqqhMzvs9bGdo7bVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttWidXPJctCnRLGQOwpuorStPlJIlw2mrZ1zygekVziq6KaC0i72wO21bbVttQua6qlg6t+U6l85UmGUiEwDJR6BdtHbattq22rbattq22rRoqZTEFaNUxoqdE0rRMdtq22rbattq22rbattq22rbattq22qNEwjaKnm+j5IMHqOf6NNJ20dtq22rbattq22rbattq22rbattq22rbattq22rbattq22rbahjcattq0Tqranp68rTZSSNtqykzUypFXjzm74MbbA7bVttWZvA1zPW8l07ZvIVLImCCrTsRiBWGXtq22rbattq22rbaoiUwnbGjDgRZCatEzU7aO21bbVttW21bbVttW21bbVttW21bbVkq1JytQuN67j1a0u6m2V9to7bVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbUyqOkERzWsGMqdsbLRql201dOqrtA22wO21YZBm5jpOc6IpZbZkyVagrhJExOpahqErbR22rbattq22rROpO2IRBE0kkTWmFC22jttW21bbVttW21bbVttW21bbVttW21bbVttTPkuq5RXvbOvsFfbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22qG7nVRs+nAV53WLGCZTJl33OvQb3RIbbasMgyOZ6LneiKWW2ZdtqQg0UiU4iVIKLbaO21bbVttW21aJTWiYInaKmNNRMSLKSqO21bbVttW21baKnbVsmanJ1KyZqdtW21bbVttVby/Tcyr9C/YP1fbattq22rbattq22rbattq22rbats3rMmQivSqDgxsItbbVttW21bbVttW21bbVttW21bbVttW21YJtVYzv4I5ld7oLJsDttHDIMjmei5zpCljtmXbattqhK9SNoomia22rbattq22rRMVG0QnbG22rKSoHbattq22rbattqTtBGnatkzUxOraJErbR22rbattqqua6bmVfoX9fYK+21bbVttW21baKlLSrItW9VELOK3QstW6rPVmp+0HqzhvbU+orOmi/uqq1jtsDttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttWCZsRznUcv1hR1tmXbattq22qJ2rbattq22rbattqyVakxMEadhaJ1RtNK20dtq22rbattqTC0w0TjAmcJS4k2UlQO21bbVttW21MOU7Pj1a2t+e6BXnbR22rbatsipqxsCsxGInbVG2rbatsqky9sQWNkWliAabSV64jB5iNU6NGcnUrJ1KydSsnUrJ1KyZqdGqdGqdGqdGgrJmp0ap0TW21bbVmT2qIqev5XrSi9sy7bVttW21bZNK2RUEQuttq22rbattq22rbattq22rbattq22rbattq0SmtoxGhWrbRUqThK0THbattq22qOU6ylBo+n5S9TSz20dtq20VFMquK7aSIxnQq+bY8aOegVVE4t5iwdFwOmIjNdYRVfYaKVkwCrJilZMRXCdSsnUrJ1KlGpeRNKydSsnUrJ0F5E0rJ1LyJpUokhUpmplMwnbVqK85uB+oob589tiNtqSpM1ChkrCKKiiUuonattq22rbattq22rbattq22rbattq22rbattqTlRBM7GjTq0Tq2VgYnattq22rbas3cauJO6q0061TV0DttHNHbYjn4K7lBaOlzIXoBmIa07iuRVpFYSn8CWGVCYirJ1TogU6NGY2rbattq22rbattq22rbAg41aErcakSa91GqrrVJhWObnmmUzSpTMFymSJmJgLmej5qHSWbJ6+W2xttqTlakSrUlW1bbVttW21bZNKyZqdGqdE1ttW21bbVttW21bbVttW21ZMxCJ0GnbVtGpeTIM7attq22rbattqruX7XkFexuOa6RWnbR22oa51baKzJsIqB1eHZKddroVTe90eVT1jUGtc1crpZ6JXTbattq22rbattq22rbattqzRvLZtz3rl8qx050BrnGSI+pk3tcLmRdWxDNjUdsuplRIaVJUVmYmDTnuh54jrXLdw+W21bbVttW21bbVttW21bbVolNTE6ETtUKiKVo0Z21bbVttW21bbVttW21ZKtSJVoJytFOVqTM6ttq22rbattq22qOU6vlVZr0/LdQrl20dtq22qKY4ys385s9tjbbVttW21RRX2FytsOsTW4yVLrttW21bbVttW21bbVmbylKuOkCfTn22NttW21bbVttW21MaPquUVryUrTbTpI0xMA811VDC1tOT6l817Yjbattq22rbattq22rbaslSYTtq22rbatGVW20dtq22rbattq22rbattq22rbattq22rbattq22rbatsChcq5Zo5On5/ow07aO21ZC2pqbqqDomy22I22rbattq22rbatS3WFytsxlNn22XTbattq22rbattqTUW9O2fW7bTHbattq22rZNMK7zR2bbatzHT8oDdFhSa7Tq22rNHehydo4pyOrPxvQMlltiNtq22rbattq22rbaohSYTtq22rbRUztHbattq22rbattq22rbattq22rbattq22rbattq22rbak8zdcqrZaekV4dbVttHbaszdtqaX/N9I+W2xG21bbVttUUd5UAls6+whtsYfKdfzQNjITZdG20dtq22rbattq1LdMytu45/oNOfbY221bbUii6DCYvtjbbUHmrIStZzGXSdtW21bMx1YCUuFGw6mkNbWPKdU2c7Yjbattq22rbattq22pMxoTomomdHbattq22rbattq22rbattq22rbattq22rRE1Oia22rbattqo6G3qUe7tELD7ZvTjRNaJishSY8/1VJLZX22Zdtq22rbattq22rbatznR8uC+OMmXRttHbattq22rbattqpeiYVj49bgHfPbattq22rbasNfOCbXjGwTZcpmMzEw20VWkA5BFZVtky6tsqmq7ruT60orbMu21bbVttW2TSsmanbUmYVW21bbVttW21bbVttW21bbVttW21bbVttW21aJio21TomtMap21bbVzTCwr006rbBmta51OnLN5UbRURKQyaS7GQZ/yV8+L/AGxG21bbVttW21baKDzDoqu822e+21bDDB1hkjolpBWUsjEZOIlbOcDS37SsfHrNzNkyWmYzB7mI6sk01dF0Cwta5sl4MMxe1rYNeShYMgPX0I6RBi2Aiskc9aUIrLpK+wfPbYjbattq22qNKYTtFKiURVO1bRqnbVttW21bbVttW21bbVttW21bbVttW21bbUnKTWmNU6JqJjUrbVR0fU8sj9WqvsA9YYRojsaq1hETEYSpIKdLOj1F8dkq7ipq2z63c65q51WuFjq7VY6pZxvKBs/DAs8NNiaJByVBpu6GgrC9FOGbhFLjDp0zeM6e7YNttQKy6CVrnLC/fFgS8xFW/JBCsOKLgJpxynQ0itbFiV0iqdNomkVnCRrpaaO2XUsjidmTbattq22rbatE6ojaExpjKdMNtFTO0dtq22rbattq22rbattq22rbattq22rbattqjTqTlRUTtW0xUct1LMHmul5g6aXAX7KIbWteUbYVLhozp7XK6FkLOzJkq1Mm9rhUre6qA4NZ5Na87nVEibxIlbiETsGyF6mTpCyqp2DRCtWQtEGjlazRpwMadUadVM8PVvjdQ6cslbrLQrlP9TI5sZvznV86DaEorZdG47PCSqK6MU2uiri0iWz22NttW21bbVttW21ZKtSJnQ22qJnR22rbattq22rbattq22rbattq22rbattq22rbattq22rbaonRUxphWc72bMPz3Q86JX6llmNCcWz5s6V880NtjbbVttWzNsKWEiV7RLaV1UB0amjlejGnVGnVGnUkDCwKNEX52Tmd0+I5mel1czumSLn3SakPf6QroXJXUAc6FDYu69kvSclaNnc6JI22rROqgY9axBblpAK7tiW/pneTLJtsRttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttUadW21AoukQDxqrpgG6BxEsm21bbVttW21bbVXV99yyte5UpqjK0U5U0jL1IloQg4S19V3QVYCnVN+dQRfxR4G8miiuhJzUGfNFZTdtXemZPFao06o0zQay3ZQYdJzjxs7zbMu21bbUinu8LkrazpY325/oIbRBlZEUTJ1K21bRNbbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttTGhX0ANPek0NtjbbVttW21bbVs2oxWlKa2Dk05XjTqjTqjTqr3ilUmnuqIh02dN01HOxO21bbVttRRySV84rrJs9E4HbashddTF8O/fKosD6G2xttq22rbattq56xSAG3hcEJmJITC9Up2FCtBl7YHbattq22rbattq22rbattq22rbattq22rbattq22rbattq2iKVkzU7attq22rbattq22rlup5bpQSbYjbattq22rbatWuecBVcFWum2wO21bbVttW21bbVFBf0BD9s5apqnbE7bVttW21Z01NAN7Q2xycbaO21amuawg9tU2zZbbG22rbattq22rbaqwSXANltiE5SITtjaJ1QqMJURFKkZK22jttW21bbVttW21bbVttW21bbVttW21bbVttW21aJittEJ21bRNTto7bVttW21bbVRunNED022I22rbattq22qhcVd8jq2wfbattq22rbattq22qKC+oIWDR00XXbYnbattq22rTGpwiWxz6DIXDbashern78VKydVqu0ZNtq22rbattq0TTiremqbqO2xG2TUbaGy9SMvUnK0dtq22rbattq22rbattq22rbattq22rbattq22rbattq0SmpidU7RWiYqZia22rbattq22rc90KBMbHl7eNjtiNtq22rbNK57oaC/TSdsG22rbattq22rbattqTQX9BB62cthrttHbattq22rbapWNxAthS3TZbbA7bVkq1UN3XM2TqtEsm21bbVtFTRK3dGDM7EbbVttWQvVE7VttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21baK22hE6Y5M6tE6tMTW21bbVttW21bbUjn+jwuduRU8em3MvquEM0wa1lkcNQXI6gN1c0duGLtq22rbattq22rbao5/oOfIeNzgXXbaO21bbVttW21Y4DQb39BfNlO2B20VNeimhnTtqy9VOzJsiuFaMaY8QO7RxUTsRttW21bbVttW21bbVttW21bbVttW21baKnJVW21bbVttW21bbVttW21bbVttWjatExBUaYpVtUROhpiY7bVttW21bbVttW21bbU3Z2mFQh6TR5d/c6orrLEcbPVUquV9zC1bqNT2EXGia22rbattqjn+goCHQDBXXbaO2TBUDVCYIuZuo46grcsB3tHeHNWyamrHVQm5perZXdD0EFOZnodHmnl7NN3GxG21bbVttW21bbVttW21bbVttW21bbVttW21QnRUxCqXhkrbattq22rbattq22rbattq0TqiFRWjTW0ap0TDTEx22rbattq22rbattq22rbattq22rbattqb1V7geOF2TAGosGTEN06+WdA9Bq57Em2rUl2wIaIStdISkkRlPKvC0qDpzltDbabN3GKseh56/flml1fWJaVNOOqqrd89tiNtq22rbattq22rbattq22rbattq22rbattq22rbattqQko6mdoaJTRMlUdtq22rbattq22rbattq22qNohtpqJianbR22rbattq22rbattq22rbattq22rbattq22rbattqgDjVSUfWcor5d21Vl2PMFrpksX8eeW8aRKXbPp22jttRFgdFGu2D7bUzdNG+nIi9bW8K+msAEdIeJfPbattq22rbattq22rNKijrqH3Guq7DCpav9yurqtz9xTjIaU+1Wenuia22rbattq22oeJFRkKgleREuSqttq22rbattq22rbattFaNMImJqJhUdtq22rbattq22rbattq22rbattq22rbattq22rbattq22oXIdnyys/saK9V29VexHk7iKmHT0dxX0XCLn17bR22rOWxyokrQDttFmzes9OXonITQooMzK9dkqfPbattq2S1p5qMFdDV0dfXZl5vpA3K9C4lWb8r2XMkHpn7sip3XqB4qwPUMljX2T4HnldRS1ZdB5/1ZFq0pqSurd8MSu+1LdVttW21QgmpEp0MrJiTRNbbVttW21bbVttWiJqJjQ22qZiY7bVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttWo7xmDzPS8t0SaOttFHOdNUQG/pLw1U8ZPU322XXbasQegtG0dtqFWXFW+F67pbk5Nee6PmiLq98+6p87jbVmzmorn2k9GDze69YblLW5XERdlbbatWWYSOU63juoKvdsr1vM9NzL59a7aulfNnMR4uHzBsptbGwDMaLqebofZ8T2rIrRFK0ap0apQpFaQip4qvRVnqdNXW2rbattq22qInVG2hE6Y6Ymttq22rbattq22rbattq22rbattq22rbattq22rbattq21RVuOkZ0C0p7FNLvbBs1dJrlLqukhT1i+TbaBLqbM1Nm5SghVA3pJaubUpFPXdJBXlz9cZ8uRtLyKZ03QAFSdNzQ66upC3jQ31IOurjldHpAUc1brpk11jzjesVjJUkNx3Q8/bPneZo6V6vnOgoGTrnNSlXuMyeVW812vIlLJxz0EOmyrIFk/fqx1r02ejWay1Vc2eBq1WWquK80WgrDKWIbSoZey23TzbbVttW21JmUwnRNbbVO2jttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVtk0ribhVVNlZprnC3CASIggLRlfQRzM9MIGlNXSHfP6gRXp18iiuvFy5Ab8VQYF8IZEZo+SukIdSrViLfA1S7LBmCnuUtFOdEA3eEyz3ENikwI2Vi2YUHV8p1HVyWMSldOQTjNm26nleipFBf0BnrHoU4bUXRUC98ew5y/q1aguKboUaS7c3TttHbattq22rbattq22qKa2rdcexyR9XKbbVttW21aNq0TNRCtW21bbVktOYrpnHFlrtdSzVylrytdmvhLquh0TSKAVTVhe1D4Nc5DUq5redbV09nwy673MX1baKnCracVVb0FWROfb107fmJVrxsxIj4LsitVqtMrMFPcDWJtcDXGd4MJasjbbR22rbattq22rbattq22rbattq22rbaszeVrpU9Ty/WdXI8bnrg/Nvq+4AqOi5zqGVvQX1CboiDJxdtdU9JQ9HNaDqdrnF/SXuWh9tzdW21bbVttW21bbVttW21Nqt/W9HN2PKdjw++FxOnDeDBijLaYh7mOIsSVCaupo4Iv559NdHPNiITZ1HXkQ1ec6GrXK+mK8uBVoQ+W6y6YZKyHO9Lz3XlVbQulJT9gBkoehNIIeQt6dltzkOhrU2qEeri0yaMFvMrNyEytE7Bttq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq1ZZgZOfftQ9nHZxW6l3jG25+jmny2e2JQTYRsFbcfZhk0G0uMQIuwO20dtq22rbattq22rbattqrWTkPVydlxXbcZplaOGbzj7ttlbbattq22rbattqzN42ZWHU8b1HXyOuU6rlasbmkvAePuaqwZbzZirmq6VZU/Wcn1lC5i75uugctx4bBrn63SlsrFaabbY7bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbUhu6grXkfZlSrZNNE6onattq20VO2rbattq22rbattq22rbattq22qmiCdnF13HdhyDo8e19hx9u2yPttW21bbVttWidW21VTDpBbYME2CTVnVcXa7YErei5Y3aUdjVhq+2rbvHTm+w5K62yPzvS8zXRzE8XZttHbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22pmOWu3Pc7bHo22rbattq22rMX1U+dmoZEfbaO21bbVttW21bbVttW21bbVRHbuO3h63kOu5NlJZVtlx9m2yabbVttW21bbVttW21bbVttTGp6QeuNEOwbb4PD0t2RT3/PWOeimF9QA9DzcH1yvFRPF27bR22radUadUadUadWmIgqI1bbR22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22qvaOmvRy3e25+rbattq22rbaoqLem0xtDAOmm2wbbattq22rbattq22rbattqoHLdx3cHW8j1vJEFsq2y4+zbZNNtq22rbattq22rbattq22rbattqqa/pgbYc/bHcVMMXmeiCqwbbYHbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbattq22rbaq5s4B0ctztufq22rbattq22qKS5o9sLg4i5a7bBttq22rbattq22rbattq22qhctHvdwdPynVcqQSzrbLj7Ntk022rbattq22rbattq22rbattq22rbattqpXzJxvzWO2w6dtq22rbattq22rbattq22rNXVU+diRm8Vttg221bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttVaEwejmuNtz9O21bbVttW21BprWq35r1W2HRttHbattq22rbattq22rbattq594ye93B03K9VypDiwYP+Pt22R9tq22rbattq22rbattq22rbattq22rbaqdWB08l7onm69tq22rbattq22rbattq22rVNtU6ZHf1tkDtsmkZg20yudtnrttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttVaEwejluMBhltbane072yabbVttTFk6B0c1xtufp22rbattq22rbattq22rbattq5121f93B0fKdXyhD16xfcXbtsr7bVttW21bbVttW21bbVttW21bbVttW21VTV4z6eO5MA/P1bbBttq22rbattq22rbattq1PcU+mJLSrtI7bZ60ojR1cd1tuXs22rbattq22rbathsmSxyFq220cMjMq7musa22DbZvBxqZWmVvmTxNJ2wbbaq1s5ZdPItGfkMNdtFdNjQWiM722W+21VWQXo5bPbc/VttW21bYMDasU6WObuEfbaO21bbVttXPWFe+7uDpOT6vlYPnjN5x9u2yvttW2TSsIsNto7bVttW21bNpKuNsG22rbattqrWT5j08lwdu1x3fop4fO8XQPA1nonLXbaO21bbVttW21amuabTEtpV2gO2yatM6lk22V9tq2zeDjV+dLDN3CPttFvU3NLvzPrGhvFdW2y2zJ6wZBWlZZsu22eqKV4x35pJZOAaG0TILvbZb7bVWsnrLp5DXLJ7ltttnqxZXVNtz3WEXHfbRGmctHnRy2G25+rbatsCA6vF6eXPHcZa0lnWvdM7Hbc/VttW21bbVzz1m67uDo+Y6fmIPnjR3x9u2yvttWbOWjKzt6G9fKdtlvttW0BgfbRYpULbCzYGqQTGZ7XG+mrtOfp22V2FfY13RyumsqZEHsy5bU4L8Bq24pHkLDbY9G21bBSVcaJB22jqa5ptMS2lXaR20Z6VZ6530c1ptufq2zYhsyzvo5YdutjvVTY02md5mznHeKK+p9MQWdY60ztdtzderLOp0yLYsnoOiW6vUumlxvzHEVvh0NbGkunzVts9ttqrWT1l08lyZKufq22B1XaVj5OnLN4G0TCtRv2D/o5n225+rbatS2VRtzzcVz+nFUgBGtGdqCrbY9G21bbVttVCYZe3h6Pl+l5ki0ct3HF27bBttqzR20ZKy9or589tst9tqTSXtJrhbFbuM9WLZyy2wM3z1ldpPufporhiXXF9tsehlW2Vb0cusq29BVtsOnbamtZe0u3Pcy3cZbJq0i2wzp24Vqmwakp5tst9TXNPpiu1qbaOiU56UT1lY9PK+23N16ptqLXFN3VXMNtst9SW1PthYPWjvPTV9gCqeY3TyXqmD/AJeyKa3pNMrVyheeuZvGJDC9prl0zJ7WqzO6pLt8ybbHo22qtZPWXTyX07c3XttWrLOp0ycvWL5TomFejfsH3RzP9o5+qdWWbLXMbGu25tiXEaZzYqz0QvbPXbaO21bbVttVLBBdnF0nN3/PMtwYZOLu22B22rNXTdkqb2ht9MnG2x6Ntq1HdUWuFwdC89WVdZVm/PrqnvVbbbHoZt3TLbC322O7OstKvo5V3lPcJpttltttWrLOufNZmy2WufsLh8zp1XjvD1jaaZk22O+qLeq0yRcUd4RhFBnpT2lXa787rbc/Uiku6PbncW9A8NZprAKxhLfuhSaOfonRNUorSr6eWbGtxDkQ3wNjtubrzJ6IrW29Lc6ZzTv66ArukuiC5Ox3Vto1zd8HfnsdXKz0f5qgF5Rmb7YWjtC8OjRODUZYB1cdqwDIK7ts5x3BT39QyN37Da5X+rH/AD9JNkKy4as3S0XXvw07ZW22qraPWXXx9FzvQc6yX6kq4u7baO21YZNCgfNVdPLc7bm69tqbVjtG/NabbDpZ1lrVdHKe4rLPPXbbPVtXWFdvz3e2w6G1Tb1G/Me4p7hH22z222rVlnS6ZOJUlkYu2loyMFPzpoI+jLacItass2DpX39BdPmVs5a5a1VrVXG2J9th06muWz51OmOjlcvamU0vBVUKzxqPPm+sKi3y3mptkq1Fnbfo5k3Td5jtttntttVWi2rtsG7pL+qgzyqZTvq61RibbLcNReVuuLPTG3PtlUl7Njltttj0bbUxr70OuNXaGlW22TTIXoUwb1hvzsZlOmREp0dMOBHsEL5uvbYNttTCusqrq5Ok5/oKJ0u524u7battq22qtZWtV0ct6qtssd9EsAWVlWXmuM7bHobVNzTb81g/Yvstdtl0a1tjWb819tsOkdJfUW3OW5qbZW2hqmjvNm5BK3G357Ibvc/RQGcMujmsy00q9mwEplLatXuW2aOxI9LY1z3o5rJu4jn6qW7Qtk22TTbam9bdQ+dDrYGuLDO4KtVu3quNxth0bbR22rbattq22rbattq22qJ2rbattqSM2IGucLbaO21bbVttW21bbVttW21IA6xVimwzKzdKyttsG22rbamVNcVXVydDUW1aVtdtydu21bbVttSaO+rdMWRRbfncN8YF0/iefr22Vk0d9V64uHgyZ6bbBmddbh1webbLfVNtmRrJqdkWDbfDbKhFwhzh07bZ64RdBkKyzpXuT4HbZX22qhf57tgrbY77bVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttTGqtavp5bxm4Cy2G25Ozbattq22rbamQLTPnXP1YHbZX22rbattq22rbattq22rMH+K0s3O0zrXxMj7bK+21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21MK2zrOnls8ExD7bcvXttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttTCusa/p5f//aAAgBAQABBQL/AKe8qGZI2biMP3pD96fvSn7ypi6aZ0q/1RX/AJE/JIZmjD95jfvaH74/e1P3pb95kfvEjFzI455FK7KmjSzdpZu1l86QsqJdC8FPlqfKL5RfKL5ZZQoOCYg/8jGufBquJFPrL5anyi+U+UHykvlpeCXgljRpkDuJiSgqKTGqoifKD5aXgHQffLOhjNUf8i+DVlzTYAAqIQB/OHVQ4fzh4HjDpH/qqn+/89iXXseHmogBSitSU0H82X+b+dlUHCjNSp0RtM8anWv/ACLI4FjtV0cg6E8fvKUEsSVP3ToocP5okBqkaUlTAo1R5MxqDimUgpIUP9Sa/wC+mvc/6no6Ojo6Ua5kIaroEHVhag+aXznznznzmTVoR96T2kGqeyj1/cyDMiQzKX1KaYnw+5KHaK0/5Fu4l5aQFLPKfKeAfKD5QfKD5T5TMWiVFLSoK+7KHEe8ofMU+Yp5KfU8VMRliIOlOy1uKvbg1qq7TRqnQl+9oYuo2laVf8ixd+1Fw/mVoq9UkcO8g6Yz1duL5aXgl4h0H3DIA1LJaUFTAo+DUuvbM0CFF8lmIsKUgwzhf/Ir3MeaQSliV8wPIfcVI0mo7UH3S+Ch96oeYZlZWSwgqaYwO6xUHRpSVNMYH3FJBeqTDJzEf8inUBquI0s3bWvN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n88888888888888888888888888888888888888888888888888888888888oQq6qtX8888888888842w8888888848888888888888w0880w88888889njkK6EmDf4+suXc888888888k8sTL8888884T8888888888888E8+8T+888Y48Elv8Avvvr4vvvvvu3WtPPPPPPPPPDMIE1PPPOPvP/ADzzzzzzzzTBe7yjc6vzzzyzDStz3ybz6+77D7PRuU2nzzzzzwgevjhj5zzzzw/rNzzzzzzzzgcwzzzzyZzzzzzzyxQ12w0Pf776q6IknLmDqzfzzzyefsAjRTzzzzwX0vzzzzzzy+zTzzzivzzzzzzzzl/PPz2/755Xot+nV/pT2Yrzzzjxuv8A7s888888/wAUVPPPPPPPPDF9txPPPPPPPOKvDd12dPuWKFfvT89vfc8t0/POO2/PABvPPPPPPPgeefPPPPPPPPPPENPPPPPPPHdpDdYBKCpXquO/qdivrP8A13mLezTwevyzzzzzzzzjHmFTzzzzzzzzzyzzzzzzzzyZTRDDTX74/wC+x8/8vz5xq++NkSx8nUksk8888888sDhPz8888888888888888884q/8AP7vO9Pvvvkmb7C+v/XSeyc29l/PPPPPPPPPPPPLPzHPPPPPPPPPPPPPPPPPOLxvvvvvvvvvvu8ELmhQFPR+3jvvvtl/PPPPPPPPPPPPHPPPPPPPPPPPPPPONNPPKTm07DaTSTDUd+7zzXTvvvvvvvvvvmxPPPPPPPPPPPPPPPPPPPPPPPPPPPOCw3PK7V/vvj7vvrrvrvvvvvuhM3dvvvvvvrktON29PPPPPPPPPPPPPPPPPPPPPPPJw/PKP/vvvvvvvvvvvvvvvvvu/fCtfvvvvvjxocHHfPPPPPPPPPPPPPPPPPPPPPPLGGFLnvvvvvvvvvvvvvvvvvql9tdCOq+Nvvvk/YBN9PPPPPPJlz3//ADzzzzzzzzzzxtOG/wC++++++++++++++++++ue+P88ocA+++6FP3j8088888Pd3Xbc88888888888c8f/8AvvvvvvvvvvvvvvvvvvvvvrgP/LGGfvrKPPIAE/PPPPPFbfY/PPPPPPPPPPPPPJNvvvvvvvvvvvvvvvvvvvvvvvvru9yGtvvafPGKi/PPPPKBVfY/PPPPMMOPPPPPPHHvvvvvvvvvvtkkvvvvvvvvvvvvvnqG9/ubfPPPENPPPPON/PPPPPPPFbeZV/PPPKNvvvvvpDnz37+46MsssssssssssstvvvvefPPPLPPPPPKNd0+/PPPPP7f/AFbzzzx3/wC+++jME888yYTifwsAEcc4wwy/LHKS+tm88888ws88888888888880V85z8888dq++6X8/63su00Umhkdx1sIQw9JzKpgvSHl88UU8Yc8888888888888z19ZG8888493+53YmaWTCEpnqSzjDDzzzDEc7B53Er/f88ssM888s84088888888P90tw88888of+u+ih1/eaRjDDDDDDDDB9PscvKBipDg188888888sTjj088888888vcOM888886b++qin8888vHKDDDDDDG3888888qGQqrd88888888nDDDHc88888888888888883L++QM88884876DDDDDDt8888z08oXTG7pZ0888888/DDDc8888888888888888zKf+ieW8888qf85HOOOOOa/888r88DnC+C38Y888888svL0888888888888Qw888ve+iTUn88888884X+yyyyiu08888rWErynxp+88880c4E8888888888888o8IA0sK+Givitc888888ZDDHCXtkCX27/g9Eg/WmdKM8888vHsUw88888888888888sIo8HWlK+GlEF+7/APmQCxnyqYQQw1vlueMdnzEvpHPPPPKH+Gx1PPPPPPPPPPPPPLAEFGKr6o41HPD1OgSCbnqbjiwAoggVn73fRT5mX/PPPPPHGx/PPPPPPPPPPPPPPPPLCCzMMDb3PPN88ttDTScmsAN7CBAYENPLOR5nvPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOpPPPPPPB+/usqDJzhzwIxBDCGhvPPD4W9IPOPPPPPPPPPPPPPPPPPPPPPPPPPPPPb/PPPPP5U8886pboAAAAeUgklX/PPPPAeHHG6fPPPPPPPPPPPPPPPPPNOPPPPPPHPPPPPNDPvvvvvsQwAAAAb/vrN/PPPPPIfP8AxzPPvzzzzzzzzzzzzzzygcNvTzzzy3zzzzx/7777774sMAAAADX774zzzzzy+TzhfvdxzzzzzzzzzzzzzzzywQRzzzzzztbzzywf7777776uEAAAAABX77ojzzz3FzywxzzzzzzzzzzzzzzzzzzgPRhDTzzzzx8XK+69b777775WkAAAAAG375fzT9hRzzzzzzzzzzzzzTzzzzzzzzyBcRRMTzzzzzzy+562Bp77776gkAF8jAjb79zvjRzzzzzzzzzzzzzjwTjzzzzzzzzxhQQvzzzzzzzzzzzywr1FfLYgZiNK8BCd6qXzzzzzzzzzzzzzzzyxT8/TzzzzzzzyvvvzzzzzzzzzzzzzzzyxzJq7oMABQAB7dVTzzzzzgD3zzzzzzzzyzh+zzzzzzzzhuvTzzzzzzzzzzzzzzzzxau6YssAAAMAgbFTzzTjTi8Ezp1+sRDBTzyi9DTzzzzxifvzzzzzzzzzzzzzzzzzz7b7MCkAAMADRc93yzLJx77hr5RXz7MFzzjhCDDDzzzyh/DzzzzzzzzzzzzzzzzzzTHb7yso0QPG70zN+LY0DS+7j1BjUeW3NI344ym3zzyycsPzzzzzzzzzzzzzzzzjDgHcUom3UHUY1Y0x4x783yu51sDIQI9/zzzzzzzHTzzyzBzzyhHyDzjgjjCTzjRBjy3Hf95x5zzzzzzzzzzzyi/1UMhSECHzzzzzzzz2SKKqiL2QyMuOtz9eosuQ/t44/zzzzzzzzzzzzzzzzzzzyr9/IERy+4/zzzzzzzz1fTzzzzzzyElsmmyEUfJzzzzzzzzzzzzzzzzzzzzzzzzzzxJ3zxzzzzzzzzzzzzzChTzzzzzwxlDdnSHpTXzzzzzzzzzzzzzzzzzzzzzzzzzzzyfzzzzzZbzzzzzzzzxKzfzyzzzzzzzknsW4N3zzDDDCU/wA888888888888888888818888861888888888A8X8888888888sC+Bc88888888888888888888888888888Z88888M1888888888eo/8APPPPPPPPPPPLLvPPPPPPPPMVvPPPPPPPPPPPPPPPPPPJPPPPPLV/PPPPPPPPHsFPPPPPPOPPPPPPMPPPPPPPPPOHfJPPPPPPPPPPPPPPPPPAccvPPIPPPPPPPPPLNmH/ADzzzzzzzzzzzyNXzzzzzzzzv3wJzzzzzz3fyp7zrv3zwGADvzy3zzzrLbzzzxa/3zzzfzzzzrzzzyhALjXzzzzz/wD8Y88+1+85Q86V82R+88Ct8L/sd8866Dy8888431888J8828gcAV8CDyom88818+9p9842VwcrB819817r88I88/d5t88Bbbn8888+eW889C88D0PNdb8KS88hRfjr870pR8k38EUsT2/Vus9988s88tX964cr6f8AfPPPEpNPPKVvPNvQQ/OPKdPPKoKfjPKHOQfL2EOO9YkAvPnV7ufKMdffuIBflhOvePPPGH1/PPzvPBfIePCPCt/PMIx7nv8AqO8LwxsbHKgww/zxQRwvyg8tvzxRby8FHDv7zwrVzzzxpnqPyn/wbw1/na7Ovty3oGw3zwwk877zzzzzzyzzzxx7zzzzzzzz013zzxXfzzzz8kNTxBbxvzm+AN7x903yzjzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxYnzzzyzz3zyzzzzzx633zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzX3zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzy3/xAAzEQEBAQADAAECBQUBAQABAQkBABEhMRBBUWEgcfCRgaGx0cHh8TBAUGBwgJCgsMDQ4P/aAAgBAxEBPxD/APNf/wBgctWrX/6mGwmE/EfQh24jjmV5D+kUL5Y8n7Mf/wBj/wDkn/0gnX4W7r+LbZhI9/8A6Hvu2x/8OSPi33b78QTg31xfjcnmkOeEIfz3OWzn/wDF3/5b+M/+A1lGsF8X2b7c2K49e8F83arftvvYdxBGEBk9pH4nO5M//Lfx5/8AEUPgsOyD8lpxHofgPBNjZYaWfpbei+Td54vIh5MJyQTGxU/+J/8Ai5ZZ/wDHSZg9wOjxF3LwjDzvPONc9x59iAOrbH1n6knPGmrGHeru/wD0lyM4h4F8W37b7196z6bP5tc0DqTTJ4p6owb89+aKD8eGMZNDAIxdTPw5/wDoWt4g8OruO+7ffvvw9Pc+feDvgS5ItLZL5n6s+D0a1uv7hpJ/+jAuNlyD+ClB2jH4W+ciiec4W/ra+WPlYK+WsvmQ6ndX52Wkmf8A6J81u2Hev/pD9BNP17b82tzc2Wfi0kz/APQtoLIDpg4rf0vy35bf09lX5lPmyyyz/wCj/wDoUGwf/h7Mf/EkM8y6/wDzTH/4fzJ4Nv8A8BJnp/8Al8mP/wAT58T8KP4WMW//AC223/8AAHMf/jp+Efxck/8AzR/+QxPwD+Dr6kNv/wAj/wC/WP8A8pmeL1un4Ms//J6x/wDR/wDxA3T/AOj/APhdY/E+Gtratgl/+Gbr/wDXP/lvh+IfhfxCdEG2WWWWWWWWWWWWWfhf/wA++Y/AvmWvcmTqMWWWWWWWWWWWWWWWWet3/wDyc/CQ+tkesQILLLP/AIqHc1iz4CPXiT4z3/8AnviPw4zdWpS37/8AlnwS233WUtpnxn/8bP8A5D8Iu/hHL43/AOGRLv43lvrHP/zxkfgX4xy+F/H8fwh/8CWP/wCafmPwPV2/EfHDp+I6SfgHPR+Jjj/8c/8Aw+n4Sw/+Lp+PL8QbZmz6eIn/APN9PBpr6W5J+Pd9QeLnhfDJvDOSrGxicOrdp37uETLX/wDMfHnTwiXO5/ysHq1Y2NqdgHj1HBt1yTy5a7dj004nS1b5kd8Jdf8A8+WQyxnvzJbe6x158gk4g3l9D49ftB8v4M7bbbZ5DtniyXf/AM7CGWZr+DLi2/ixe4Atttsupdq1bkltnm+lP4BCOJd//QBF0/Gstttt8PC45W1bt3CPPm22PmH4By0ZM83/APO6l38Qb+NbPwjSHj1fDfxfH/6MGwZ+P5Px5jnvSe/x/Hj+DY//AAs/H2fiP/w+T8Z+fwqfhCXx+DLLP/xH8Q5J8n/1/J+MaZH/AMILr/8ALfxjlw2rLgl/8Pk/+Hy+rLvmWfWX6f8A5j/8dteByLv4n1YV6Qsjb8M9vFnDlp/+aP8A8ARFJvrLSNXIPcRz1gF8uy+Pn/8AUnZb4dgAw94p64qP/kz/APSnHu46Whp+C6eDF/8AFrCQ+bF58pnEOWf/AKKuY8fH090MYMM85iEgn3TyA9TSXx52ukyY31IGf/oa/B8oezI9SvglY+dleLX3G1Clr2NvO9t2tzhh2Hzbyd4j7789n62frfevv+MXp/8AljLcthHcowk/N9pCuiG+IS5uWPvgfXx+3fblvi+zBdEart4Nxds8n4GNWNzIkjAHX/w5g/8Anln4RSZ+PJXxH0Ify2PrfeiQfiAdf/V47tLHVbt5dCycW8yDy/8Ai2fFzZ/AS/bvtSXLacssLXlg1ywtiHz5owE9eIT4m+UfLBfEF0f/AIugE7wtdTaWVdXIokHu+xAHX/xXeO56fc/Adcvi6XXwXLnt0m7hK6d2/ds1f/y0cMDzn/4C5+df/wANHZoQ92XDcXZQ1XFxumP/AM1T8XCdD/5Pl/8ARHkdxuElpMG4OI1GR1+Pn/8AM3wuj/5d3/7O7saAEwB0f/oi+i6P/l2f/wABef8AyvoWQ/8A4n978S6wf/Ls+dP/ANnCf/mvj4A5/wDhf3rhJrPwc8//AD7Rdf8A9u26P/j1eo3P4z4MO8nmglz3gDW+xFyPViZXCEafgo5/l+BAa+Y8j8PaO7p9YR6/Dj8J3WD2X8ETx+N1fiYDk33YOR50Noa8fP14hbGq4n173We/r5qDLTfOfsBr5DQRIc/D3Y7un3vtNPUDj4tQ4QTo2XfOyVQR/K+aIPt8G+9XizJ8Aa2zMWRGTY8DYHxUYJ4LciyxNuZ73QwD3XGfwfSIBpfZFza/D33a6Pe2+Xp6ZaFnhYI4OENvPdaemKG2DIvghzZ0Trzq8XqGjziC7vHIF12iec5dRDAXfHhZY7u+93qvVPsB4hjsvcR3BnB+E47vdT3vuZPX0RwHnzL5wHqeT+Dw1bUz94q76vkS5evcgGQPhaJgA84C6W2O+bJPkWji7tvx53+ni/Vj4lgHiupcTJyXwJHp4C53E6/Ajyu8deppksPev6jv50evf7hiyhbqVdUAMIR6hznyl3w89B40foLtGSnNnyA4lm165KrDBmnnxnkssm302aR83vxN4ZzmdWoK8WbPwZ1z8OFI7CNbRPwTq/BHkYTtGGbs8otCA7uPZw1jqJYbYSx+jyh9X2ZXcAw/+iXsgHX/AMe0L7N1B+GGn8OpiFOS1cuG8VBLJPH08y5MQiLXz7w8Qe5X4gdeqbf/ANGhx/Em63/4kcb711H/AO1x/wD/2gAIAQIRAT8Q/wDzT/8AYHbFpaf/AGyz/wDIz/6v4vrmfwZq1/8AcLPwn/4b/wDhD+MLT/8AEfH/AOue5ZP/AMFk2yxgn18z3LMlhn/8c/8Ann/zz/79Jbbbbbv34823xtk/SC4eSj+E/wDs/wDwPx7/APFSQsPAf/IcEvgy2eP/AOL/APi7bb/8VyZtvusvgSRPm/gyyzLv8ffwP/wP/wAoFwWnjbS4n7evo/gG+bLfHEvzb+Hf/kfgf/xH73E2WWWfieo8z8GWe7Gw5/8Ao6823xtv1n8O8R4NvjW1iyyz0ch3/wDRFJ/9A8YeM/8AmOR/+hL8GWfhDLLP/wAJe5/+cuf/AI2f/JWW2b/+av8A8fP/AIrId9f/AMt//HPcss/EpNsvv/8AHLLLP/u//wAgfwv4uw//ABPNif8A9Ib/APHt6Mln/wAn/wDSm+v4O34Nl/8Aye3/ANc//A238Hb/AOh/9X8Pb8eWeZZ6T/8AoDf/AIHmeP8A82fi38W+b/8Ao7Pwj8J7tttvm222222222222222/i6f/i7+DfxP4d9yx823/wCevfX4z/8AFP8A8AETLJ/+hSZ7kxx+E/8Axt83/wCkIPwp/wDHHMH4x+Ff/E//ABl3/wChP/rd/wDgGP8A4D/8VfiPwsf/ABLmPwJ6vxr/APM7fiX/AMT/APWWX8D/APn3vxefwLIfxv3PAuJIfHbbbbN78vrt9H/5nbzt+DItqW222+K74XzfaOrjI9IZZZ6vQzwf/mjxjrzPwGXHq1ast+nr+BfwPzLPBZ6Gwf8A5z4ILPwb5z8aeWbMiyz0H8CSQbBn/wCgJtn4xZZZZZB4P4P3n8JL8GWZD5n/AOd3B+JZfxEfhO/whZ+L5/8A0A/Etv8A8D8Ld8+kfj+fD8Gf/h7+P5/E/wDw+I/F9H4B/Ex+Dbbf/wAQ/EkP4X/4fEf/ADX4Nu//AMs/GlyW2+J/8PiPxN8fgDzbfpZ9f/zD/wCOWWWT/wDAe/nYsTHXoksbP/zH/wDASbn4Ce7rufpiTxZfHo//AFIfg6bLvp9PTo8P/wBXfaTPe3vTw/G4l2VueRsR/wDop/D3/EvjwPwLnl9HrpPhM1/93/8AEfwfCBerXjNjyz3SxcPjFhJnj150jnk8diN5vy35bf0tfS+xfZl3dP8A8vHnEk759FHbJfM3xcE/bK+nj9++/H1L7st2zh9LNXS6R8lwNLtIBJV7/wDhxT/89/Fj/wCGwu2ZR8Fr6X2plf5lPf8A9Tp9PALpdLs2hrwzh/8AHm+DuR+Cr+/fckOEoay5bhbKXhF24HMh8wfCfjlPmW7f/wAXFWEeSwuIEB3dimFOr7kp7/8AiKxx+7+B4fHe7T15w8dNj5urKyYP/wAsXUvxvh/9hx87/wD4YGTCU6hvJdMu04J5NI7T/wDm7fibTt/8uj/6K8I/pnh20jQ3OB2fx8f/AJl3u7/5dD/7GRkEQsEU9v8A+iI7bu/+XQ//AAAb/wDIGDDMf/lJ7S67/wDLoed//wBg3H/zhj8VN/8Aw3mLlPwcdf8Az6Tdv/26ru/+lrNfjbkSZx5phuG8RcLcvb06CA8yHG+P68fgouHinB/CdT1dv4Ezv8O/wnTafIPyzkz8XZ+JhHgvtydvO6xfHT78osnBco96bXHmLUmOfhkWEZ8QIv8AD0J6u/3rss9E8ngQ3lKGJbc864DT7sSZ9+172eZCPzRh4ENwEwclylo/BXrhqFxBDRYO+9MtV9Rji7PeObMdqcP4XRdLs9674ersjiCG4lvm3Z5eOmwx7uasFDGt8E7r352eR3Pn4eVuo8PC3bYB84S7mepuufIR03U96fRe+Ls8TvPjfRyPUu/hWm6Xd703EPo7ZanzXAecn6rkPwOkwruQGew5G6vXozrSX5QuE8vnORd7HF48DHmw5XUs86x5/bu22gxAYXORcHmMY+YE7v8ABnwus9+jjsNfe16vx3/irbXhgGITiKrWRO5cYcDdcvG7nw2PrYDqIPFtheRuo9EylmERzZOPBOHzYc9MTGTh4OckLxO7EgLVv4Pgb+F7VwlWEsA8c7/wK4Sc6SR8QQOAZrlSFcJYGGuWht/q8IW+/E6kXX/6COmU9/8AxC6b792H4V4/w5uSD3YG3KeZaNoPh8vm3bQgAw86jrwU6g5XpOT/APRjv/EO7j/4utLX0u8//Tej/wDYFv/aAAgBAQABPxD/APXSSjp//A6RR6ef+SXfr+f/ANuIRtFj+X/4IHm+RvqoTP8A9uJUVLrSR6qddKI8f/gjZMafF/yc0D/+10n/AOIrxSXOeKCXLVMDz/q+P3hvG/Xe3NRsjgvq0LxfFTjR01lJx/NGST/9FDSY8WAeVl9Nl2vzSHk/Vxw/m54R/wDoPk3w8f8A63mObxG+7wbeNTQcj/kHcBV8AXphdrP+ai/RAKkTizEjlkwZOi5rfPLxUbo74KRNvO04Qv8AwCOqd7/2HpV53FnDZDTjP/0TUHmwJb2OX/8AAkvT/wA3+igeP/yhcvD/APgeL0p/D/8AS0mHdHh5s6Xk02yf/gUNay4o8mjJP/58hRzZtPqriQfBWWV/4CRyj/iA7N9FBoOgKBxhY0I9lkeORLyAvdUo2annQ8qDq8FRwCwf/iBRsneys/3/APojCeFcTxv/AOFJIqkP/OGH/wCV6qk3/rxei8n/AOlKCzLNjUebGBfKjQ//AAb9lhr1TgmiDf8A8aBB7/8Awgy6uoSEqdEC11SZAuuSrK03SWnAP/ylCbpnuiI8f/mkis0nbeUj/wDRRCU80nXBdHWR/wCAGTv/AJ4Cs8tP+dzw/wD5I35ow/r/AK3gvd9//pB/wSU0vCR/3kv1/wDgQ4E2AeWgP/yDxc6qgfNCOSvVyCH/AJzxWcKdTZUDmWCgg5//ADOX/i4P/wAwDyAunNz4phQaWe6RWx4ubC+6VLJ/+hmo+aJrqsEmBvzUAQkoiSVmMso/4Ma7/P8A+SJLyVSf94R4vD/9GUccteSoc/e+i+42EZ/0sE0QR/xPW1l/p/wS8Dj/APJMs9VSL6gc3eeOD/hUOvilYuuq8pPZQ84pA/8A4gW98V5sBp/+ASi6fVSD1/2B1v8A+QZLq9Y82avHbQ95hRWnr4oJl7j1Vak//NKmC/Kw+V+T9VRTZfLbqbg2wfNgMhuwfVON/wC8Hxe7zv8A+VwxeGfP/EFHWiSGiPH/AOhKBLVNMsDBtlyeq20uef8AoOaIP+SrnVnzsTzv/eX7UgIP/wAp1LZXyAsXN+Fk5d1g+7lTPgrRkamZT1cFZRdn/wCBVEZuzn5sclP/AOKf92Qf9LM1SH/qHLeALxjWOIU7Jv8ArLDsF4Bn/powe6q08j/81Cz3fNvz/wAkPU0BvdfJyWZPBdfKqE1TwaciSeqf8cw9UDn/AOUMk6uJdebx/wBSap5//QWSDxYTnfm8VOysvMUA4/8AwR4vs/8A4ZlgoAQf/np8B1E0+VSLaAeazgquP/wSZPVcyEsF67LKH/8AFE3gf9mHRQAPFWrs19hTsr4ddPdKgRUCW8xoUn/WDwYUk0QibnM31WblXYbUAY//AC1FPLz/AM3hxceFNcx8WdnMcVbAfNhEboQB4sCxa8teH/5acj8f9WDKOS/8P4f/AKA9Kjt1v9P/AM30c0Q//QOY4iug6/8AyhOKuNkagLv/APBJer8k/wC84D/iC6UDgULgUBwf8RpuWa3AmC8AKB8Z/wBwWGXA/oLsxHtp20PKmyMIoh/tf/yVAlprL/nL4d/9QeaB7L7r7rK4fmgd5f8Amvl/+Xw/4ylVQRTin8P/AM9dLx/xEj/+ZK5/+hADObQ0xOSocbz2XgKOI/8AFglvi47vIj/1SQ//AAyPldqQP/RskFAky+ypct5ujYL20VLDPL/w0AEH/bsq82JcPNAlJozj/rOTa6VCZVC9X/5Dafb/ALwz0/8AVBQgirI82DZ9/wDEO8N1yr/+YkkUrPVigB/zTSiP/wCcnNa92He2TjmkmP1/+SsUTzhQAg//AEA2APdytvVJzD3YjF5Kx43gtvZqeMp2FWLlR2Wm10//ACZF81xfGf8AXRysOMRXnV5TeWG7qhdVJe6AQI//AAyQ54sO4Koa3uZoHZmqQv8AwhHd2LH/APIkc+P/AMEJ/Sx9LMp6P+CdfVL4H/56TplJlH/8ElSaPTz/APnIeaeL/kSQ1XkPFn/8Mz5WZQ5sUBx/+gNQA82NfsLzzOrpxH/NC5lsAf8AkV5AvN14hdhzeDR/+HiiMD/3S7KTn/8ABzwUKuDKBwf/AJJkq9bFY4KFx/0Yb+z/APjUsPuu5yP1TmHn/wDE611V4vB/+gHn/rxYyKV8nVGSf/0JHK+q2fmsdtgyH/B+RVJP/wCfwFU7SOtMeCncS0A4/wDwQO77b6l9S+4snS+z/wDBMn/hgBmtg13/AM+MP/JGk/8A4pL7LByKnyal1qdi7mn5m5VDsKgT8VC2RzF7MLIGf+LJXX8v/wATxekd0AIKh5u/2f8A4TkvLUHGsHh/+g8P+vH/AA5f+dj/APRTKoDPPFFMPdUudXjvKmY5P/zjFw0HAKRP+i5UXD1fCLyVexfavtX2rF2oHC/4DktpFtfqLeoS7UUIw/58cVQvh/8AxGNUgkLJ3U3VexZu3/Actn/MbQmhwI/4gkNROD4uL+yxXlQS1vJcorFDSv8A8Dw06f8A4BzOPFA/8CUdH/FLBxRHGlEST/8AQDxe7HilPDTz/wA5P/6LB904hYRl2uoj5/8Az4M4aWCMKoEf87wa9Kq0TXYgvnH/ABno30b6NX61alKV81fJsCePNhA4/wDwGQvoxsR/yEx/+DUFC6X1X1X0WD/8iWDaEEFecDy0mCxSezegtOUOLI/9Acf/AIJFnoqPLsyiEi0AIP8Ai55xuEfq83x/+gOfKtGvn/8AByf/ANFQ81U5RBH/AOhMjgcnmwZ+yu8zVlOrf6TSoY//ADCoM0qDH/4oTf8ALIHb/wDNJuAsQHP/AOKYXqj+KhdkZVZWcfp/+FBnLWXn9UJQcFkujuPmnxf8eum6vv8AigBB/wDoAkim2LD/APgEFm86f/qdAlwpq/kb3sXlZF4r8FUbJfZ/0AXEtanK34NCyT/+XF7CyIrxdXz/AMcUxPLzzFOAL7r7Kjy15A/4QXEtempvKaAen/45c3qFWHFJ+KAF2iJJ/wBgLBNm/wBChBB/xJxsjjfmy4l+connCgGH/wChYZ/P/wCBeqcw/wDDPl/+p5gRHL/sQoQeaJmXotSqXX/J0l7LfbW9MqH6rgMf/lgOnleT5f8AiAh/5INfsL7F9jfa2fKvYKnnKdjZQprsILgj8lyd/wDvH/ECYb35oAsqsKgHLIDIsKu//p2iE40ozZVgoRUGx5UXK/8A6mB3o/5rACD/APLNgTXZxdEN/wDyuwhfOLerJSx//Ag81XkX1KdIoDih2I5bPlYulR6XtC9hR11F46a7w3UvUSkwP+CQKSIVPCSkBtoCT/8ATFBcMojXl/8A1SypKl6s7NJ9j/8ASQaL1fIhXrb5peCJqHFq6KvwqndewvmNnyU8qnlXyF5Ssof/AAji1AOP/wAICGgULITEoAm1Ak//AEvmgHH/AOqQEtiF7pPLQEMaEaIQ/wD6M64rwG09vDL3i/I3sV6yp5p2V39oOSirrFH1QqBoPq+iwf8A5QCGyyFmJkUUm/8A7CqV1XrStHBWY1oGVaNLxibwCP8AlhODZeBZ8i/f/wCD7ueSz2Fh5NR5NeVfkFFwUKcEi9pe3L/znJf9hnT3h6AWCwf/AKNgnBoPcphP/wBdSeCxshL+Lwf/AInqdrxqdAyhw/4LAvVUL40vdL4DY8lj7aD233t97fe32t9zfYs3mzdNO0/4jnCpoddLePrhCwdf/psAay8XbaUh/wDggYEtOp/kf/rMJQ04sF5rkjx/+FV1VkmKQ7qTU3/8SnN5Qq3SqdKtTR6L6L6L6P8AgC6UOguqH1Q+rB1/+ggJbHgoGT/9AdyzQNLJuIaKF3/iz39viodS/NnKdWelQzrw/wBUCVP/AOsBKXSh0/8AwGfP/wDAsE2Da77GxgNoR/8AqPYsga3/AAHancWUOWWH/wCgDE10LKDTjTId3cvO/m9B4kuJ5Kgqc8q9FlkNOWPHmupBoDYHE/8A1hEo6f8A8Bp9f/gYH/AhBUwpH/8AUhzXmqj/AIEf9AAsoJH/APQGGbYBxDYltv8AAWZ3jbICwHhUY5z92Eq8/EWBzH9VGROSpgifH/6vSSLPXL/pyfP/AFYJupViHdAka/8A6lMqiUqiuCuyNrJf9kQ5QagSv/zkkhseVQPdB3DH5vMlD4qUQxx5XjLhxvmoKHi5C7F2QJlD/wDrBB5seqBnNGST/nxb6m1FfNgl4KBD/wDUulYnYtsg/wCEhb/+AAI4vCtBK7W8I33UTj/8okVRj3Y1rxDpP21BIanuP2WLYPNXDPZ/1VMEcM3DjHr/APQI9bTxR/xPW2dR7Eu81Z9fxRHP/wClCSK9i9Tz/wAnA839l0HL/wDqZJLmaFg7qAf+JJFivJ/+DBH/ADgG8A2Lu65SQXbz/wDkJJFgYVbiC64f3QOVUmA4s2A8NCRwnGkkw0/ZRBJx/wDncY8t4q67aYhZ/wDwIoX2VJIqkP8A+kSeFA440QyVTKrBNT0L8mUCP/1OFAsAFCEH/QCGx0LGD/k//hS/8ABKb/8AkkiqH02Yer+g/wBWVeR/iuN26/NhEWe3FCk8jinwweTw/wD53X5qwTQjXn/nKUTwVCD/AIJKfIohH/6O6U8VJuxD+aPBVt6LPfdjHxRAP/1aAhoCdjR/+EUoGk6kg0Uzv/5EnxUy/NiLPGUjxQEUAV3cWPi8lCJUSl9HAo4Xw+SnIf8A5jBFAgfP/eekz+S8Hz/3jHv/APSUNg92PGnnly3iyP3Zl/8Aq8g818G1PGf/AIsIakUgmUhH/wCMSFMD3Vj/APA2ch+/VU/8rf8AkY93YdePmyXCMj/80SRRkn/hvtQig8uv+8Z8/wD6aof1d/Jdj/8ArF9CuvBXoH/4ZmjKbPUZJ/8Axcl/evD/APhA9gemkv4WkGtCZRndB5Y9dWRgh/8AzX6H/iCQ35UOH/FB7oQR/wDpv0G6Vgl/+sgEUVhv/MHYH/SwE1SFN7/+Lkv7V4f/AMMsnMV7E474oD/jqDXxZnI//mIM5aj/AEUUY5Cgf+vQ1onXWw6yijun/wCmRUeaf/1oeAo3BZyjX/Cf+E25SkP/AMPJf2Lw/wD4hKOy5D5sp3Ew+bwPke/JRBJ3/wDma3uqGt4fNQebCw9/mgHF0QE92Xw0Sy4f/pkTvd4f/wBJgkDSH/8ATCDzedLzb4AvELBFCA//AIeS/tXg/wDx8Ii9AnpPJTE3TR81b4nrw9//AJiFmgUcx/8Ai5fj/wDMU5WfRQcKjlfUvzVKy+C/DZD/APJer3eP/wDRpKul2zPqoEea0quwv/6cTlC8sV2RQj/8Lh1T81ED/wDJk5x/DdWQ+Y80g1P/AOW6hZYjh5qkf/h5r9f/AJnKf+apMKAf/g0nh4oztM+f/wCTz3u8f/5pEq80o9Vd9V9V9VPBZeKBFSBz/wAgCl8RdEqoLTj/APUkSqk+f/yhQImKDh/+Zy+f+J2c0Hx/xY45svNAdv5uwhef/wAs7+WuvDv/AKIi4DRBJ/yTTuiX9P8A8kyr3Zof/lgJrMe1TmK8h/8AyglgqFCnqss3kf8A9SyN/kv1L/8ARkkhspXgsDcL4UszZ26cjfZQUZn/AOWqZL2Xz/zlpeW/yf8AOx9//liwv/zGATq3/MEf8n/8hCCgiyxA8Vg9VgFiD/s2bNmzZs2bNmzZs2bNmzZs2bNmz/8AmSt+zWIev/zYIUZJ/wD0xI+X/EkhucdWRQID/nQ//K+PL8wX51VJP/5EyK4vVVl/6Fz/APDDWIFeGgRG0gKS9KigsUDTCLNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs//kQ2+4WJPX/5SFFAtmEpmuc8tCCP/wBMElGf+Jd4sO9/7tPjP/ypgs6817A//kRoRPl5/wDwydWbtewXoLyn/wCBhATXf+TDyP8AyBP/AOjgAABNmzZs2bNn/wDE8WSNhqEA/wDwJJFeK6/5t/15PFclObgKOuXz/wDpixrZPGFSNOb9H/eObKo4G+iwnC2Q/wDycGcXhuseP/xEy6qBMqzz/wAQikv+DG5vK3pigdKcCsLNmzZs2bP/AOEJs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNn/8ACobZY/8Ax3BUqgqnKv8Ap/kXgKD1QBB/+m9Tr/kzA6/56LD3+bC9njbKcjdYFEP/AMkPQVmdNcDpsGP/AMLIHdUpf+KDGUUeVJgP+zZs2bNn/wDECbNmzZ//AEObNmzZs2bNmjRo/wD4JBZL5sF/+JOgw2PFcYdvpWXaoAg//IJIn/8AR0Ehse9vEPR/+Hkpx/8AliSLlzGoY6//ABYZ4u1KMLP/AMJAWSD3VI2rvT5sP/ux/wDu5of3vKKzZs2bNn/9Cm5sjwX/AGO8ID4Lhfivs/enT75L80nCg/6G5sD4cs/9KUp/+CH7N+gf/oYJl7sJw0lUHzZXqizD/wDoSgS2ef6rIdf/AIeEec//ADZcHFmPC8i//Cg41RLQECP/AME5/RllBR4oHiffNGaPgv8Agl/xSiSXpi8Wx3qtRh4r8Hb/APosv/VWQFDSHkHf+lGlj8FFj7G0iCfBfS/FeYvovNX6up+Jsose9s1k9/6VqTB2s3N7OylKUpSlUW0PmwfB/wDofX/idnNCPn/jxRkn/wDQRJlGag839KI8f830L8mx7fzWwz0//lgh4vzBYg81QP8A+QoEvBVmsfkfFT+zd/Fi2/a5f/xk/pBv17D+7CbdPCgEkf8A9CYXgcvmtfd9vxQs3ya//lqDPC7+a7m/eog4OFKUpSlK2cE+aULx/wDobvx//EkIC+5QPH/6AEZPu+S61M0dsmLYBHNxzlg+XxQhvf8A+XtXKWQe7Ev/AONQS4FQJA5fNgRjr2/8U8cDgP8A8l0cjyNRXL4OqT07niilkf8A9AUU/wBNWL8/t8UwcBwf/mgFlK8+qg+RUKFKf/gkVT3TNun/AOh6l8//AJEdeKEEf/qJyNJIv7F/S/8AxuO3k9eKcNvh5aAIMD/8xTyTi793kn3PFMPI/wD5/OTaGnkJfl//ADyxhIX3WLFj/wDAJCvAqELjRXd/+g8GnH/43X/9SHxO1mbAPdEB/wDi4ChNPjah+gI//OKH3C/ksiP6qIkn/wCaoT1Ys9n/APQP49H41j/8RpHNirkVgcNlFJn/APP5Kcf/AIz29/8A6jVJW4OWIKheFgD/APE0DuCgz7P/AMuQ/wDwMJDcG3303at/R/8Amj2hZC6f/wAmQ8L0guq//D6rJfRYP/xpJDSUNvGKZhppNqBJ/wDnmP8A+I6n/wCowquq0TChQBKWluXb/wDH+6f/AJf7FYJxfJP/AOANpBF4TkBoAOyf/wA14HmFInMQ/J/+RI08eC2Jf/gAn2R81Tvs+v8A8ahz/wBgAqyKz8yKAJv/AOeysk3/APAvRzYPn/8AUeUqoqDUqinNH/8AkESdE/igx3f/AJSBH/NsCeX/AOE09JTMfH/5v+UJZZvB8/8A5MP/AMOD/wDDLH2n/wCMCihu1Pmm0/7AZoQljVC//n8o6bJYW8X3aAcf/pShR7f/AMmL/jGz+h/+STcSRegmQvFaJ/8Ayo//ABMYeDf1v/zUBLu9ObJS6egf3/8AmKXAPzWD38S8QAo//j4xI6rDTL/3mL+1eP4//KmOaI8f/g0r4oATz/8Apixt5f8ACaP/AOJ4/wCVBPYLwDAf9kLX/wCGA1rRG4+Fk37ZdP8A+gA/gP6X1p/+c8COV4V4eShG37B//KRJAVpjx+3zc7/oUaNP/wAMFU5vi7U/6f8AwcYB/wDkrBNCdbBVOPP/ABYJoSh9v/6bxp/+CaM//geP+Agev/SfJXlCsHx/1rWstBy+IJlUs0Dp59//AJwu8hB8tNNS0MI//JAS0kFB4P8A+CHFA8Pm6vDkeGlE+Rf1/wDkLSB22Tl7fLZPtx5n/VCZj4UDqPWU1pfNQ8U//BIjRJ8U3uf8Jls8Ktggj/8AJ5v+n7f83Fd3/wDTvFPP/wCDij/14uRq+A/97MrN6v2r/rWtakPHh8NOQ8gO7wkOTz8f/mIkgOW/VH7fNaF/0/8A4Qt5/wCAv/rCbaAM1L9L+DSkfn/uawOKfgUIpwf8Jouz60ovb8X/ADjUe34vE/pirIb5qLtXA4pM3eT/AHsDD40Hj8FGhm84rpovtQSLw3qgZ7/7kLDFerAA7/4ah2/Iloipv/5SSRTj/j18/wDFmXzlCCP+epN9X/6Uk3wanizP/wCBsp/+DE5Qpo9OGuRs1Qn4rMXn/jWtf+wS+HssQLA42MKTx/ux9l8f/kxunrtsn8T2/NAHA4PP/wCGc8bIrPFBgFKcyOqA4pTmVeIUZLqYaUyp6j/8O77AsSGUSNPY3Iub/wDdqOTvSD4KuP6WwY/D/wDCAeApXQZxUd/4TLqy9wuL5qeZ/wCIFUAcVwLKID/8tyXn/nCqKHDxVDW7p4/7mT/9KSbDWVpz/wB93nf+4CySoMng+KZhX7a6Pd+a/wDWta0IErl8WEeTujONeZpswv8ALGvTqwAPly98+micnf8AMX/IX/IX9oGUFAL45vNC9r/4lH/JxbRBJ/2VCcb40vKSifMLOcWHysabIMRQmX03/wDFw+ThupS5KeEdbhoHizYOWod1LlqX/BnWC4iKR+b1AZKf8gId1o/4FUTxFCRsxenikAf/AJiSRTw3hVlPW3BL3edf+rFEH/6YhsD3c+Lt54sZF2gNBl3UIMbzFHJ5KsUj+r5g7uo5rBUgT/rUvIR4LN5amwnAEH/Yoh7vkn2i/sA2rHf7LiKPiP8AqIX+i7jJ7oMEH/HORrdn1QBB/wB9oV7IByoAOv8Agn/pwKa6xsB9n/4kkiqHqk2XI7b46n5qXmp+aG5UT/hjkwVueOPkrSvGH/t/pRry06F1QJaKLtDDq0AHaEf/AJqTZjH/AIDt/wCzPG01L/8Ap6DfWwKeX/ILI4rPKUhd5v8A9ih0o4ITz/yi0WoJUXgd93tj9UeAfy3eHbYwEeXz/wDj+tC8ubR//A5zSeZaxQHZWI//AAn0PKiml/8AwSWSp1wWP/yGXeicU+kpZI7rk/8AyX5by+msG6deb4B4f9Fmni7ZlzNiAKUT/wDQPRi+yy82Pe//AKkQ3eX/AEBUJUzGxx/xGUtOKCvul/CjxWAlXo4sUwfbYuz4LtR82qBAg/8AyI5/+VQOerIXgj/hUzgXbdeAf/hj/pgvoFfj8214YfB/xf8AE0Dj9r5Rf93LKiGq6rBg+lixYsWLCHHzdiEcUNDh48/djZPr/wDGnCTEau+f8iyiWXaA/wCYJxKEclWvIFJ//roTkUZ/4EzNSobWOZfmSHTTCfLxeMAcUhNH/wCUiYZYqJRBOVCDk3rKXtw2hMCxYsWLFixcK1ADFRonrqiwX4oaALBYLBYLB4uOT8lFDXhlRnkfzYsgsSSgsWLCDn/iDRE7LPH+a7KBUThP/wAcv8C4fmx3jwOGlamgBSQJaLH/AOvCOr7N4/4xGuOxVYVWBylXlH/5hPcFHT/8YCLFixYvnI4+a/tik1QSVCzkGe6hXsaJQtCdLxhZSzXoxP5ox/ySQ/NYAWLFix/ypJPLFCXs8Ui2PJ4f/wAbIyebMSD7vpsLEukrRqd9URJP/wAMjx/+vDsHzfHqacDaX/VAHAf/AJnEcUq7NIpoNixYsWLFilA5RLTlOyxm7Z/FJO7fuwE4rhIXQwWTtD/rvssPNQ5WVFfD6gTsqeVhYsWLFixKDy2MCboLwRV6ifn/APJgPPuj43XsfFDvKwXVEEnDWDBzfgrRtAZizSePmn3+P+SeaBY//W0T2ur2VWj58X3R0IP3/wDmqH8fB83m5MiiAWLFixYsWLFTP+IDIdX1EH7/AOgXH/5C0X4I34qsf8j/APAg4CgiUmAqOEvVM+QX843/APKicsTo5T3Z3yn4dU8Pi/lTWfH/AAwDxUWWnSo7aameb1P/AOtfhsUCGPYv/wCbzQXA5r6ReORusv3NiPB/+TJ5P+zHpC9Xl/8AyZBfh20nyD/+PzAKC3i+/wD841rqK8fZ/wAT1lCFH/8ABCNu8s/5EOf/AK1Ur/jP/wCagWV+qkRSdboTeT/83kv2Z/zn/wDyeNpGnZfCSxRkk/8AxMA8lm7vB8H/AOdK+SVvmH/cx/8AgJJFnyWZY4+aA4/4g5vmf/1Frj82PO2PGXHP/wCa/wAUUhOh/wDyzQ5SCw1c76KZMf8A5xy/F2nt/n/m/k//ACsV1+YzQ7Lv/wDE72SGuBrD4f8A87by7ZZd36//AAI8+PP/AOHmwnDF+FsnVN/uqSf/ANQaY/8AwiM5p0c//L9vY0JPL+n/APLU/gS/NA35n9f/AJ/P8Xfvf3/xyn3/APlMQ6vjKnb5mPk//FxU0FzVrpLGxg5X9f8A5hrxBNkO5fReM4x/+BYJs0vFZ5H4/wCHsvsvpthdR833TfR/+oe3/kKfJUjSyXkqkF//ACi7aJPmwGH/AOW3+OsykAOj/wDP/Qb+xVCfX/5nY+r7RzR4EJ//ABRp+HssjWBxsC/h6f8Ar/8ALV+QTo8VZg9f7/8A4dIeKSYwmr/Hv/kHiweP/wBS9v8AyFwoQQV4qMMp2Xh/+WsR5/TQCQcfJ/8AkuE1ZB2fzf0P/wA/9Rv7F/S//MgB1dL5WU5P4/8A404SqKlm14bDep7e/wD8lS4vl/xzdIxZVCRgID/8KOVgiKJ6+aEN/wD1OcrThZ1IpgFl4L3pTv5vD8//AJY8SEU+jqTp1A/3edP/AMbMuUChwE2w4f8A5/6j/wAHP/8Am9iyC4kf/jWNax53VrAeqBcDv/4gZICkKdD4/F36T07oI4HB/wDq7iqvx/zlC+21YJsSMr2eqcXh/wDmIZR1WknmOSyxj/NIcvh5/wDwIUoZmP8A4cVUq3bZaZFLLtFk/wDzuX4ufevL/wDm8x7qhfJTg/8AwqCWsF2yFt7AmkQ6/wDwhI9OoZkXFuNZz5/dDEBwH/6v6Tx/3s/8U4aJIawQP+DD6f8A83myhT/4RY9JcV4PDrl/zrvx81RDHZKKeu6fivKAkp17MiujUwr/APN5/i/Zl/m//N4F+Af7rlvX/wCABLQCm3zxbwqqZk2+KIBOH/kGJ9taVPzwWZCDdQf1d2Jb9rX/APS1HG0+Q/8A0VZwvFhQgi+Ciz/nhTP+cH/5+oa+TG/7rbtfOZeCT4ajJZ+TwGVpsUuHa1EqnOUQwo8qz/8Alc3xVI1xfP8A+OSoLCwo/wDCw9Xm39d/0GaIqbZQuaOb2MFUTjlFCTDBCbCv1NshEndNCiPBThM8v/0xRdneenzZ7Pssr1RnT/8AQl2P+wVRj/yAz/x34f8AAnX/APRI/wDwKgVppHAlf5oZQrKOB/8AkcGzD8Nf0H/4Qd3jU0HKJymnguURZuio91sA9f8AD+if9Acqf8sOVCZ/xw6byC+qrI34vBI//TVjLLz32XI8/wALqigihV6oiSf/AKCg82HWWKVy9XEpUpiKr8Xj/iyPH/6SjlSIC89ENrJKXOrIX/ABHj/8Wz5Lg94/H/eUvUMvINokBeKULlj/APgga96I+eKIDwH/ABAiUvlNMO9i1MKYj/8AUSBDWRh56bqz7of8O1gy/wD0SWo+rwnzcmfcWJY6pmPN1zzQnP8A+lxNNgWSRFmUzdkJUMVwaylT5X/4G7ayGexZGkXbdCzY/wCpUXv3URh//AmRYCHQqD4K4pYEbN7ARZn5usP/ANSAIbqh4/8AwHss+f8A6E6H/G6YWF4R4/8A1DyheYFUA/4Fow1/GwNCZX/AQ7sC7JLkdi6PL/8AFynDzeAff/4YcvCwC9WL8zS4bcxV9xQA/wDzlBLlyjmh0s8f/wBEQSGonkoe8/7yDi9b/wDoPa3RX/i3k/8A6j+mX+SikdXnpqC8kywCbQZrN8lgDw//ACOK+I//AA4vg1EoOFCEH/MAqYJ/+aoJeCvNcY0HMDYHwXdAsgOWT2islA7QQVKWhyRVIoyRNbigsqf/AMs/lRXFEeP+J9L0P0//AJ6wTXItOK/8N+F4f/qOPeq4vf8AwCDzTdLLU+KlxLtNec0GVw5/+Q9nuiEe/wD8Bj0KH5qX/wCADwP/AMpUsRe/Kz21QFoywhpNWiTZT4VkcSrhdVVS60WRRpXVECLODK5SCoyq2PFo5RFYFoCigS3EsSRN4wojp/8AiClGf9Hi6rBjx0//AJyy1qH/AB4/4cnz/wDqSYLNeV0NOP8AgENJQUw+KQNdT5scvJj/APj50Y//AAUh9Nx81U/F/wAS9pYIf/h4vDBTsJ9VqFajIKqgwVHkbxmLo7U4B/xuLKWtvVQeAoKLKNCa5DFkYpy1JuCRWW4xlF8YlnKKlM2OUU4gi7jv/wCNBum806VzfsLJ1/8AmL1T9Kaz/wAeLwocH/6llgP+Ahv+iRWWiqSUysld/wD4z34aTPD/APBEuzf+EET/AJJ0kuIanJD6fugCSPH/AOHxVDKV9lsXTR+Br8PYIvAh/wDhN46XiVtMXv8A6DO8PzRH/QESqj5sNuWOM2DKz5WAcGtC7a5H/wCNBxsGcPNlzwqVT5f/AJmmLEKk82SvF5acr/8AqUfiVn43/wDCjjf+EQirK8//AJiSRYn6sFHsrIGXo5rwIKy25LsJch4f/wADgHdhPOnzK0Li041uOj/8fxnYI6a0rx/1cbw/P/4KJRc1w3B0sYBaAEFElUYdKFi83iLpElTJT+aPMIxzRyCRRyREsfKUQgI+bln61LOEA6Gf4srBfQ91GxKOMpko3xB/unYV40rJwPl//JRmSpXKemw1I7vlV0//AKljnqwT3/8AhgVQfgaJnimFPJ/P/wCJ5FR5oNdhXzVCNtSSOKncNmiD6otz+a8KT2qsKR04sAAHHIURUjvR+qWFKFodMBIn/JkdWD8KZ6f+ARzeLT/zWyZikJHNGd/5+hf2LCeH/YRXH80x/wDgwYclDM6s3eKEk75axSHgyqkutC7lCgS9otJphTV905AwZ6oyBA87eCmECbmCRewvkpOACMvRLjxZA/sqoFDztVQK5tFkB+6J2zgkX4j/APJUYc/8i6c3lqQJrCgf/qNwC4QwTR8r6KxHn0JUo5x+V4F6/wCydMg4bAVYj7P+IEtweX1V0f23noPxemPua/Z9FLYA7Puh/wDpqCNPdkeyK0gCX/gbhAseKE0HzdM+fguMF9C094BRIfmoO/GP+qpgD1tDgYHqvJCLpZbtBeKN032rwiKCDl+Cf+fqXPyVFKwRqgJP+D9i6EAuI0jAw0AkoIeLAvdFOLrVIFEC8AKBzFmz/wAi5YP/AMWf8brMH/5DxlP/AMPYp/8AqJMpeCoToi1IUPIn9Suw3/BzYCD3f43mkP8AbebL8C1xPZRB+69H866JZ9WWEqjyDaXcuGe1wvYn9UqDWQ5Bf5FLNHwm1jkn6hs1Q8j9t/ivMD8thoCUgFhJoEZxeEU2Elc1/bTuv5qkYovMfmwsb5v1pESqtOtO2d4KvT/w6Gh11QsAYpz/ANZy39qzKwwdK6Hn/g4fmlwmockU4vFjV28leDYJmpk5vFqAcf8A56g+FmVXV/P/AOSh5uk9xZP+n/6iOhc5a66RD/Hitkl1Dn28t4l/mW8oD5D+6zPwf+01PD+z/VOz85/q/t1P6i6UPyX+W8gfPIUZA/FikEnijgya8Vn2qoB9FOj6WUyDeFbw1X5ozG+r2Sk55+706yf4KGJXL3r9tzQKpI0JUDf+5c//ADCNu6/+H8BfYTQl+KYdmheC8HzSwTlYxqotNMZQJuheBqn4/wD9BjbxY1zv/wCUde9vCPNJTGWPldzP/wAT4wPNRw0+fsP/AMHHRcg3/wDA/eAres1WUsUn/kQRZoTYYIsMHx/+NqmTg/34p9ouGT8H90Uc+j/gEoD3ZMkHjf4v8EcfzcwnymswCfgUCFx7qPJ9rL1XxiO1qD95QubTsH/JcGm8C3ggsB1/+kyNHNiP+fGX/CPiGqXYv+A4Pm/rf8yi6vj/AJvgHxTmoP8A+gofbKqXhYfurOErSLTp5f8A8fCPNOV+qur4oQR/+NVLSzNl1dNx5oyF8UTL/hQJ9KoQiVlhs0Ce/wDmgBLqsFnF89+6sFUavFL2Fnql8CpIC6ViGXq/tcIpBxfOR/0CQPusQV9ixm5RNB5poBoGv5WaMMhimvJe86qro9GXn35nP3SGqV/EUPOu6SfdAQEc2Lv/AODP/wBOjKMg90COZTiNl/KhLFkfi8lBJUQX9i/pf8FlUuZYfFl4pgCqa/8A0EAk81+krU5fYihe5xRSg+kKyDCRufvmr0bPMVZ6CP8A6qdRb5+rMcXUN8Wj56qUF+9qJPkc91SSHzxlJSXY4sIYjzJxd0HyNO+Oxo0TjvHDS5R/dkxMspiZnqgwxVXgvLierCRivzIvWmnG7cA0qfFZu5ipL3QyWv8AsqmXNxSgJKjQz5pkUReJUoUUQsW1D9MR+7PTskLtggcIl/VARVFHh92JKBQ+B6vIzXFNxgH/AOqVyoB8VauC6FJQeBVIsUHiiUaMGiueFYB5sA9f941/0Tj1ACD/APQUOlLRM3mupApP1etwb3YHTl/9ZQOmrs7XlGvn/ihKJSOPqyaUvwL0Aj5q+y8Ah+76/wB2Ak1VGJZi3aJ8B/yEHCmRzQimAKs3zUrN/wDwZ/m5BO2BOj/iXLY8BYQ3YcwUWSCyGTtovRamOPGxWJF+WSocD0qtLP8A+Hf/ANVzfaphMsP/AAFwqItChT/ycpErCjb6/wD0ibwKBSf/ALXAUE9fi6nESqAPp/8Aj4//ACOagTP/AGSmjeb4v7l5/wDigS1yHZYVm/4qSqyCbqLZM5fBWERe28jh4KtBV9XPTxP/AOtRc31lZca5LQIH/V+S+hQDj/8ASVJPAsDhAP7rBEyqFB8WZHM//nqB1SR6aeYTZEytJphR0i/N6ZL/AMZezZKKtks6SmjJNxVNTtoYFMijuVdlPkaVB/D/APWxGaYj/wDMch/+iyegKQ31EUCSjLTku6BqYD6//NQQMUE5qAhsoV0BVh2fKkn3ZQuNJ91SAfNAjzlhDut/zqCcHFfyigN4o1f37xf/AK6Ux22Evf8A+W1Re4b7EP8A9Ec/PZpjhm43jexPVnBvKqCnk/8A0CJ5vCldhsyHJY84lxcNJAWKFDtU/MP+fjpMu66PNCR0qvFX2apT1/8Arrj9r9p//L4WYngLv4v/ANEk3LDsvVRiChfFcEvLHj/8ahz/APmmODYIa5tXd8tkUxqgOP8AnJG3mwplc7qphKXgr9L/APOk6vqs+4/NQ/8A1S+Hzf03/wCXwqn0Vy3r/wDRHKdKoCEiHKCHE/4uAg1Sz/F//RSYNlKrrAUNklYNgsqWaAvqgz7KpIYs5JY8UNDCxP8A+Ylsvmy//qz9RvD8j+f/AMvhVK+//wBFGk8laY7NQaEi5pJJ2f7s1T4f/wBHCxELLxOGqqXWqO6pMNBzNJpoSBH/AOu/1rv4X/5kpPtoj4n+f/0Sb5f81gO5/d9DP+KG9p7o7e//ANIQSGuy0lNRYxVboWD/AP16/S//ADGmXqqU0Q//ANDdVIeS+Rp2b0id0Zl11F2/L/8AS3iz+2yK8f8A6H1UP40/cf8A6pgT8r/H/wCXMvX/AD1ED9f/AKH1YHIJ/wA3mDBj01BOEuPPX7oqkROUb+H/APTDFcn2f/ofVT+P/wCqoR/I/h//AC5E80QeV4//AESPpl/NZKIJ4f8AiKiMSsfPB/8App1Xz/8Aobxf4S8D1/8AgR21WKY//Uf+R7v8z+H/APBv/wCP5A34i/z/APojxTAHlrB03myHsVQPRf4pxv8A+eIR/wDmmPqqAaZ8ST/+hNe/g/8AwyKSOKUlnCev/wBR/wCV7v7f9UuOafyD1Z0N+bEf0n/5BoB7X8H/AOiz38rKnI0+64zH2uRlMfT/APpg/V/xS/X/AOhufpv7D/8ABKB8qc00H/8AQ4R4tk3J/wDnf5Xu+o6w/wDwCITX0f8A4pgeCyB8C/8A6I8XveWjyvXdJS+D5uQGZnmjH5j/APTBt/x/I/l//RD+x/k//B+Qr4OmX4P/AM2ZpeJ0ovu//C/xakrhJPr/APDyAf6q8pvFKq/20OH/AOH/ACPdGP8Ah/heKYOB8UIakVDzdw8fs/8AwdWT0U/C/t/+QFDnwKzEPe0XA/DFV1PxU/8A5DxZvyv82ANkh4uy59K8UXzI/wD0KQ5s/wD5J1oufs/ls3jsvRC8Gv8A+f8AuX9j/J/+ATzRDXANYfH/AObMiqGUXXyPm+//AMD0eUpl+n/X/wCGCawrYES1El/Fe1jdxz/+F/le/wDkOvJ8LgQf9FIvmp4J347px/14qk+6N/R/+MBzr9VEkrYm1BHAvdUJLx+P/wAjq5l8v5sI9sCPi86aRntugI7adv8A8c74Uwf/AJTXBFHr/wDJG3p/5gYE/wA1txKumzUJUWJ+c7otpH/839y/sf5P/wACHLRHj/8AEvJ9FLP87f8Aw2s6l4qT/vxhP4/4hchtADpP/wCD7hRt7/yf/gjeLXyoKhy0sEvn1VhK4V/FqGf/AMP+V7/5KvKj6P8A8AEHhv6Js6+I/Gf95Lr5W9vx/f8A+IZz1VEkrR1iofL5pO9L8t5U/U//ACWPkcWTJIHfqy4OybKOHmym/wDxqyeQqlaD/wDkrD3cD1VAl/4jQzOoHyndGtK//AOfz/xffJ/L/wARglok5+cpcpHraiMN8wfCiEkdP/zP3L+x/k/6sJ8VbuXjG5//AAuLwOXzdW9MlEQJv+ARSjy/qiJJ/wAEHyL6Mf8Aku9/0/8A4QfBAP8ApcSE3mQU3xh/P/jk+1Ak1vH/APHXxtP53/8ADAnksC8k/v8A7zX9teX7P/wqBXgqN8cHxWLkaC7OaASoC/8A1OaeLOr/APkwGnJ9w/1fSRPvaUOdmZoTwT/+P+BXDf0D/wDDNeFj19D/AN/Ysa8i5Zy1Ky/9aV/rf/wcr2/8ZA8Urztgp7drxzfiz4I86nPi8i+/7H/4VIOfW1KM/JSpYnr/APD+xf2P8n/f0Gryu09v/wAHxc/X/PEKgEYLxSV4S48T+q3cZ/7E/O/n/m74Mf8A4JIeLF58Pwf9/EX5/wCQLvT/AM+QQWI8KpD5P/x0fQAXv/8AB+rf2v8AB/3nv7rf2j/8IgHWf8yQBJPmjySeC/qC/v8A4RykZ/8AyUk5MfxRARgM7KBPKIvDmwckb/8Aj/iXneB6P/wmS9VrpiNblzz9f84/m/I5/i5Tq8paowS9rzUODolQZJZO5SH5P+/vP/SbmyfB/wDhKEpzEKafEhP/ABEkFUfhaqg1bLk/4o+FQ8n/AOD9y8vy/wC/oNebJ4oH5/8AwS51iwA7pEeN/wCqE+qs/M//AAMKXeP/ADlAU3iQE/8AOH/BSjyX+v8AqgvP9L7oShAB1/yHy2f+X6x/+Ov1v/wdV5er8AD/AN57++v7B/2ZvVmiyP8AwF4srxqsSIsO5ef/AMqZ5SFDmEqH0BZOBNMD5/8Ax/xLw3A//CJEb3HDTHt/t/zi+b8nV/eXlvh/f/YB7xs3lJ/P/wCFjmxF0D/8Iki/lErSfKkB4Co/DgojZbzwqKTD6KOR/wDgxVQXkf4/64X0/wDIvJQ/H/VBfF9iNlLzP4//AAH5Ig+752PzX/sAc4fX/cF/f/BO+qqvbN9EB/1wXtsD9/8AOv8Aqofpn/4sEAd//ilTwijb2f8Aee/stWfE/wA/8ZYBSxMxI/4ZX3/ycOO6CghoHB/+ZB5lL3KIvLn8X5qxH/8AGJ+xXB4NABwk/wD4Xi+ylYH6n8s/84PmqFrzfOES/f8A2T0JYPIX/Tt/x7EP8/8A44vMLP4iP5/+WZDnH/DXpD/jLhKtH5sivj/8Aj6bIfcfk/65Hr/g18/4P+qX7f8ABU9j/mWFQe7D5fuoDkaZmv8Ax3Gv0HJ8f8MNCcVEgg8d3Aob7Sf1/wDgZ8P+V/nU4vG+L4E4Lyv6/wD+E/Ua/XDL9f8A4SbiL7IbIeR/3nogfbZXxIb3gue48CgH/CbjnVSP+AJs6aaf/hnTAUSHfH/4iTdw0zPd6pSr6oykykaojv8A/H8Dh/f/ADZc7fX/AOH16VSm+kw/VL/L/wA9qAsQQf8AdP6vyCT9f9/hf8gb5X8H/wCP9Rrg/RcPn/5+QvzcnC8W390wMqkfbv8A60x8wvqY/wA/9ce3/n8r/o9sqIaih1RuB23ER8CzZF+bw0HlpMuf+FS4psn/AD7efj/8MreMHy//AIPI8SfJZ75RRkpqlEx5ac1T8NE8rzn/AKTvE2bOfDeGA91Os1RISm5H5v4FCoA5aHgy9/8AHi/Kv+jClbzjXfj/AIgIe6ipy/4MX/1gKBJ/D/zjYvGqH8joUwaVz/q8H/4fvqUiL3Uidy2TN5oBOI7/APx+9xrjY2dkn1/+Ge+Ct4o/7/Mf8+PS/g//AAcv1VC+n/TK+H/P5H8P/wCJ4sniF/yPdeXr/gdiCJi6IfNVg+7POVy//g7ojzCjDJQAdk/85Pk/5/I/6kkVlP8Aii4zH7vbT8NI6pcWZeq3DD91mTK8Gycv9FUlqDjV7jx/0FotPvO/n/8AC8d/S0W/3dIlqVk6eZPhu+QIn/gUp/7uKI//ABEjvB7f/wAPEf8AQiMVr5f/AMDy8JGef+jKFAo+f+Aq81JnJrgXX/8AEVXobr2iyDPmnh82TL4f/jSS/JdmnSx+f/wyh62z64P7f+j9X/Jv8It6/wC8nyXPw/5/78Tj/n7T/H/4lIlsXcTlcPiKdvX/AAYBwcUTKPypMAB6/wCSJgPNlp4f9y+U/wCfHA/Gf85vh/xBv/0//B4IXjR/ybOgESxUeP8AhUR5sD/wvCRr1TTWfi8R9Dx/+JOUqkkA8PN6apwFnRh4bLANw153n/pMu6wD2FWZZWVdgK+q5MSgIEB/+E2CSs8xYIQf/ihzJQdh4rUFP/wBNjgsBc//AIuFjuJrQPN+bnw6smE90oD0H/5Ea9lFQnVAnpP/AEG4Co723Y8ufr/pn/jh8R/+D+YqhPT+f+/Nj/kv/wAWB38nr/kWedPuuPyPiiLrP1SMvw4pFMKbBldZzocUlrRAeX/PhB/xD8aPv/nwBGlPuoAOv/wkcFM9Hn/8RQZafIv9f/hg/wDzHAJvDh/+LjH6X1qcT8F4aPj/APQTIJvDkfF7JZf/ADXpZsKIP/x8NcNMLMhHjaEry0z/APIlBzr/AILJHZ4ognR/wdPy1+VKKb4hH/YD6/5+0f8A4HBPIuW9n/RJ5FmnpixPQz/yREFgLDzeRteDj3VVyNcl5P8AgAlQLt6qsENFOL7P+Z4p59pn/PjD+P8An+d7vdBdhrUwf/jEgXfiXql/vKjwN+OyP4rHh/8Aq3f/AMyeHHL8VgtcuORKJev/AMk0eyqr0x/zkCPFnRj4qqy3m+L+19f9EhZNdNh8n+H/AODXzX3EP/wIAx2l0btnjssAyDx/+AwcrxfOrV/1BpsA1GpPna9YszbqUAYf9Ei7s49MVhHcH/7EhmnDhRlpHeZf4oJo6/8Aymgs5fNSP+wdg5UycGD/APAwkNjrU+bH/wCDFc3zMcf/AIEOpea83/4BJSt5hrvx/wDjz/8AG94tXpQ//Ykzv/gszco8UP8A8oRBI1ySPTfBH7q2YDwUyEB/+KEzG/8A5YBDUJp9NSh+ovAfdlWkB4NbC2PL2/8A7Mzx/wAxWgfd/wAmZaWV8n/53H/7XsDnelKjIPBLPY7/AP29edTPrB/dSdxMfizk6/8A29j/AJuquFkb+S//2Q==",
      AD_MIN_TIME_GAP: 18e4,
      IN_WX: false,
      WX_VIDEO_ADUNITID: "adunit-bfde4b5c41edcecd",
      WX_BANNER_ADUNITID: "",
      DIRECTION: cc.Enum({
        LEFT: 1,
        RIGHT: 2,
        UP: 3,
        DOWN: 4,
        FRONT: 5,
        BACK: 6
      })
    };
    cc._RF.pop();
  }, {} ],
  "counter-game": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0fe155WqElJe7gERPLnr2s0", "counter-game");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        answer: 9,
        counterY: -400,
        initNumber: 0,
        maxNumber: 99,
        minNumber: 0,
        counterPrefab: cc.Prefab
      },
      onLoad: function onLoad() {
        var counterY = this.counterY, initNumber = this.initNumber, maxNumber = this.maxNumber, minNumber = this.minNumber;
        var counter = cc.instantiate(this.counterPrefab);
        counter.y = counterY;
        counter.getComponent("counter").init({
          initNumber: initNumber,
          maxNumber: maxNumber,
          minNumber: minNumber
        });
        this.node.addChild(counter);
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("input-confirm", this.onInputConfirm, this);
      },
      onInputConfirm: function onInputConfirm(event) {
        event.stopPropagation();
        if (this.passed) return;
        if (event.detail.number === this.answer) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  counter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "797fcg5uHhMSYXjvyCbfaOi", "counter");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        numLabel: {
          default: null,
          type: cc.Label
        },
        addBtn: {
          default: null,
          type: cc.Node
        },
        subBtn: {
          default: null,
          type: cc.Node
        },
        okBtn: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.bindEv();
      },
      init: function init(data) {
        var initNumber = data.initNumber, maxNumber = data.maxNumber, minNumber = data.minNumber;
        this.initNumber = initNumber;
        this.maxNumber = maxNumber;
        this.minNumber = minNumber;
        this.number = this.initNumber;
        this.updateLabel();
      },
      updateLabel: function updateLabel() {
        var number = this.number;
        var numberFormat = number > 9 ? number : "0" + number;
        this.numLabel.string = numberFormat.toString();
      },
      bindEv: function bindEv() {
        this.addBtn.on("touchend", Utils.throttle(this.onAdd, 100), this);
        this.subBtn.on("touchend", Utils.throttle(this.onSub, 100), this);
        this.okBtn.on("touchend", Utils.throttle(this.onOk, 100), this);
      },
      onAdd: function onAdd() {
        if (this.number < this.maxNumber) {
          Utils.play("clickAudio");
          this.number += 1;
          this.updateLabel();
        }
      },
      onSub: function onSub() {
        if (this.number > this.minNumber) {
          Utils.play("clickAudio");
          this.number -= 1;
          this.updateLabel();
        }
      },
      onOk: function onOk() {
        Utils.play("clickAudio");
        var inputConfirmEvent = new cc.Event.EventCustom("input-confirm", true);
        inputConfirmEvent.setUserData({
          number: this.number
        });
        this.node.dispatchEvent(inputConfirmEvent);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "cover-money": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a610PhDrtJsqhwx8smFFCK", "cover-money");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        roleLayer: {
          default: null,
          type: cc.Node
        },
        cash: {
          default: null,
          type: cc.Node
        },
        paper: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        this.node.on("drag-end", function(event) {
          event.stopPropagation();
          if (_this.passed) return;
          if (Utils.checkCover(_this.paper, _this.cash)) {
            _this.passed = true;
            Utils.menuLock();
            Utils.feedback("yes");
          }
        });
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "cut-hair": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ae1450OcBF0pBpgTh7/Aoh", "cut-hair");
    "use strict";
    var Utils = require("utils");
    var CUT_DELTA = 6;
    var NEED_CUT_COUNT = 3;
    var FADE_OUT_DURATION = 1;
    cc.Class({
      extends: cc.Component,
      properties: {
        babyNormal: {
          default: null,
          type: cc.Node
        },
        babySleep: {
          default: null,
          type: cc.Node
        },
        babyCry: {
          default: null,
          type: cc.Node
        },
        hair: {
          default: null,
          type: cc.Node
        },
        cutter: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.updateBaby("normal");
        this.passed = false;
        this.cutCount = 0;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("stick-end", this.onStickEnd, this);
        this.cutter.on("touchmove", Utils.throttle(this.onTouchMove, 300), this);
      },
      onTouchMove: function onTouchMove(event) {
        var _this = this;
        if (this.passed) return;
        switch (this.babyStatus) {
         case "normal":
          if (Utils.collision(this.cutter, this.hair)) {
            this.updateBaby("cry");
            this.scheduleOnce(function() {
              _this.updateBaby("normal");
            }, 3);
          }
          break;

         case "sleep":
          if (Utils.collision(this.cutter, this.hair)) {
            var _event$getDelta = event.getDelta(), x = _event$getDelta.x, y = _event$getDelta.y;
            var delta = Math.sqrt(x * x + y * y);
            delta > CUT_DELTA && (this.cutCount += 1);
          }
          if (this.cutCount >= NEED_CUT_COUNT) {
            this.passed = true;
            Utils.menuLock();
            var fade = cc.fadeOut(FADE_OUT_DURATION);
            var delay = cc.delayTime(.5);
            var callback = cc.callFunc(function() {
              Utils.feedback("yes");
            });
            this.hair.runAction(cc.sequence(fade, delay, callback));
          }
        }
      },
      onStickEnd: function onStickEnd(event) {
        var _this2 = this;
        event.stopPropagation();
        if (this.passed || "sleep" === this.babyStatus) return;
        this.scheduleOnce(function() {
          _this2.updateBaby("sleep");
        }, 1);
      },
      updateBaby: function updateBaby(status) {
        if ("sleep" === this.babyStatus) return;
        this.babyNormal.active = "normal" === status;
        this.babySleep.active = "sleep" === status;
        this.babyCry.active = "cry" === status;
        this.babyStatus = status;
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  debug: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "742a4lwSOFH24x4cIVtWGFm", "debug");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        content: {
          default: null,
          type: cc.Node
        },
        logLabel: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        if (this.node.active) {
          this.node.zIndex = 1e3;
          cc.game.addPersistRootNode(this.node);
          Utils.debugComp = this;
          this.node.on("touchstart", function(event) {
            event.stopPropagation();
          }, this);
        }
      },
      log: function log(txt) {
        var str = txt;
        "object" === ("undefined" === typeof txt ? "undefined" : _typeof(txt)) && (str = JSON.stringify(txt));
        this.logLabel.string += "\n" + str.toString();
        this.updateContent();
      },
      logReplace: function logReplace(txt) {
        var str = txt;
        "object" === ("undefined" === typeof txt ? "undefined" : _typeof(txt)) && (str = JSON.stringify(txt));
        this.logLabel.string = "\n" + str.toString();
        this.updateContent();
      },
      updateContent: function updateContent() {
        this.content.height = this.logLabel.node.height + 40;
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "device-motion": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "573d6iwGVFGc5jtLBD0JPKW", "device-motion");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.data = {
          CocosDeviceMotion: {},
          H5DeviceMotion: {},
          H5DeviceOrientation: {}
        };
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.DeviceMotionThrottle = Utils.throttle(this.onDeviceMotionEvent, 200);
        cc.systemEvent.setAccelerometerEnabled(true);
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.DeviceMotionThrottle, this);
        window.addEventListener("devicemotion", Utils.throttle(this.motionHandler, 200).bind(this), false);
        window.addEventListener("deviceorientation", Utils.throttle(this.orientationHandler, 200).bind(this), false);
      },
      onDestroy: function onDestroy() {
        cc.systemEvent.setAccelerometerEnabled(false);
        cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.DeviceMotionThrottle, this);
      },
      onDeviceMotionEvent: function onDeviceMotionEvent(event) {
        this.data.CocosDeviceMotion = event.acc;
        this.updateLog();
      },
      motionHandler: function motionHandler(event) {
        this.data.H5DeviceMotion = {
          acc: event.acceleration,
          accGravity: event.accelerationIncludingGravity,
          rotationRate: event.rotationRate
        };
        this.updateLog();
      },
      orientationHandler: function orientationHandler(event) {
        var alpha = event.alpha, beta = event.beta, gamma = event.gamma, webkitCompassHeading = event.webkitCompassHeading, webkitCompassAccuracy = event.webkitCompassAccuracy;
        this.data.H5DeviceOrientation = {
          alpha: alpha,
          beta: beta,
          gamma: gamma,
          heading: webkitCompassHeading,
          accuracy: webkitCompassAccuracy
        };
        this.updateLog();
      },
      updateLog: function updateLog() {
        var _data = this.data, CocosDeviceMotion = _data.CocosDeviceMotion, H5DeviceMotion = _data.H5DeviceMotion, H5DeviceOrientation = _data.H5DeviceOrientation;
        var acc = H5DeviceMotion.acc, accGravity = H5DeviceMotion.accGravity, rotationRate = H5DeviceMotion.rotationRate;
        var alpha = H5DeviceOrientation.alpha, beta = H5DeviceOrientation.beta, gamma = H5DeviceOrientation.gamma, heading = H5DeviceOrientation.heading, accuracy = H5DeviceOrientation.accuracy;
        Utils.logReplace("Cocos DeviceMotion\nacc.x: " + CocosDeviceMotion.x.toFixed(2) + "\nacc.y: " + CocosDeviceMotion.y.toFixed(2) + "\nacc.z: " + CocosDeviceMotion.z.toFixed(2) + "\n\nH5 DeviceMotion\nacc.x: " + acc.x.toFixed(2) + "\nacc.y: " + acc.y.toFixed(2) + "\nacc.z: " + acc.z.toFixed(2) + "\naccGravity.x: " + accGravity.x.toFixed(2) + "\naccGravity.y: " + accGravity.y.toFixed(2) + "\naccGravity.z: " + accGravity.z.toFixed(2) + "\nr.alpha: " + rotationRate.alpha.toFixed(2) + "\nr.beta: " + rotationRate.beta.toFixed(2) + "\nr.gamma: " + rotationRate.gamma.toFixed(2) + "\n\nH5 DeviceOrientation\nalpha: " + alpha.toFixed(2) + "\nbeta: " + beta.toFixed(2) + "\ngamma: " + gamma.toFixed(2) + "\nalpha+gamma: " + (alpha + gamma).toFixed(2) + "\nheading: " + heading.toFixed(2) + "\naccuracy: " + accuracy.toFixed(2) + "\n\nH5 OrientationChange\norientation: " + window.orientation + "\n");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  draggable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3720d3/E39P+bQWGcBZxidu", "draggable");
    "use strict";
    var Utils = require("utils");
    var ADJUST_DURATION = .3;
    var ADJUST_PADDING = 10;
    cc.Class({
      extends: cc.Component,
      properties: {
        stickyDistanceThreshold: 30,
        stickTarget: {
          default: null,
          type: cc.Node
        },
        stickOffset: {
          default: cc.Vec2.ZERO
        },
        onlyHorizontal: {
          default: false
        },
        onlyVertical: {
          default: false
        },
        autoOut: false,
        screenEdgeAdjust: true
      },
      onLoad: function onLoad() {
        this.originalPos = this.node.position;
      },
      start: function start() {
        this.draggable = true;
        this.dragging = false;
        this.adjusting = false;
        this.offset = cc.v2(0, 0);
        this.bindEv();
      },
      bindEv: function bindEv() {
        var node = this.node;
        node.on("touchstart", this.onTouchstart, this);
        node.on("touchmove", this.onTouchmove, this);
        node.on("touchend", this.onTouchend, this);
      },
      onTouchstart: function onTouchstart(event) {
        if (this.dragging || !this.draggable) return;
        this.dragging = true;
        var eventPos = event.getLocation();
        var pos = this.node.parent.convertToNodeSpaceAR(eventPos);
        this.offset = cc.v2(pos.x - this.node.x, pos.y - this.node.y);
        var dragStartEvent = new cc.Event.EventCustom("drag-start", true);
        this.node.dispatchEvent(dragStartEvent);
      },
      onTouchmove: function onTouchmove(event) {
        if (!this.draggable) return;
        if (this.dragging) {
          var eventPos = event.getLocation();
          if (this.autoOut) if (Utils.checkOriginScreenOut(this.node)) {
            var screenOutEvent = new cc.Event.EventCustom("screen-out", true);
            this.node.dispatchEvent(screenOutEvent);
          } else this.follow(eventPos); else if (eventPos.x <= ADJUST_PADDING || eventPos.x >= cc.winSize.width - ADJUST_PADDING || eventPos.y <= 5 * ADJUST_PADDING || eventPos.y >= cc.winSize.height - ADJUST_PADDING) if (this.screenEdgeAdjust) this.adjustToOriginal(); else {
            var screenEdgeEvent = new cc.Event.EventCustom("screen-edge", true);
            this.node.dispatchEvent(screenEdgeEvent);
          } else this.follow(eventPos);
        }
      },
      onTouchend: function onTouchend(event) {
        if (!this.draggable) return;
        this.dragging = false;
        var dragEndEvent = new cc.Event.EventCustom("drag-end", true);
        dragEndEvent.setUserData({
          pos: event.getLocation()
        });
        this.node.dispatchEvent(dragEndEvent);
        if (null !== this.stickTarget) {
          var targetPos = this.stickTarget.position;
          var pos = this.node.position;
          var distance = targetPos.sub(pos).mag();
          distance <= this.stickyDistanceThreshold ? this.adjustToTarget(event) : this.adjustToOriginal();
        }
      },
      follow: function follow(eventPos) {
        var pos = this.node.parent.convertToNodeSpaceAR(eventPos);
        var posX = this.onlyVertical ? this.node.x : pos.x - this.offset.x;
        var posY = this.onlyHorizontal ? this.node.y : pos.y - this.offset.y;
        this.node.position = cc.v2(posX, posY);
      },
      adjustToOriginal: function adjustToOriginal() {
        var _this = this;
        if (this.adjusting) return;
        this.adjusting = true;
        var move = cc.moveTo(ADJUST_DURATION, this.originalPos).easing(cc.easeSineInOut());
        var callback = cc.callFunc(function() {
          _this.dragging = false;
          _this.adjusting = false;
        }, this);
        this.node.runAction(cc.sequence(move, callback));
      },
      adjustToTarget: function adjustToTarget(event) {
        var _this2 = this;
        if (this.adjusting) return;
        this.adjusting = true;
        var targetPos = this.stickTarget.position;
        var pos = cc.v2(targetPos.x + this.stickOffset.x, targetPos.y + this.stickOffset.y);
        var move = cc.moveTo(ADJUST_DURATION, pos).easing(cc.easeSineInOut());
        var callback = cc.callFunc(function() {
          _this2.dragging = false;
          _this2.adjusting = false;
          _this2.draggable = false;
          var stickEndEvent = new cc.Event.EventCustom("stick-end", true);
          stickEndEvent.setUserData({
            pos: event.getLocation()
          });
          _this2.node.dispatchEvent(stickEndEvent);
        }, this);
        this.node.runAction(cc.sequence(move, callback));
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "elevator-fall": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10c2bUpzwZGtoIMgs5MEhhy", "elevator-fall");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        elevator: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        this.node.on("drag-end", function(event) {
          event.stopPropagation();
          if (_this.passed) return;
          var pos = _this.elevator.convertToWorldSpaceAR(cc.Vec2.ZERO);
          if (pos.y - _this.elevator.height / 2 <= 0) {
            _this.passed = true;
            Utils.menuLock();
            Utils.feedback("yes");
          }
        });
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "facebook-api": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e610Jf/BRK0KS20tFc4+fQ", "facebook-api");
    "use strict";
    var Utils = require("utils");
    var Config = require("config");
    var IN_FB = Config.IN_FB;
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        if (IN_FB) {
          var entryPointData = FBInstant.getEntryPointData();
          FBInstant.player.getStatsAsync([ "puzzle_index" ]).then(function(stats) {
            Utils.log(stats);
          });
          var contextID = FBInstant.context.getID();
          var contextType = FBInstant.context.getType();
          this.scheduleOnce(function() {
            Utils.log({
              entryPointData: entryPointData,
              contextID: contextID,
              contextType: contextType
            });
          }, 1);
          FBInstant.player.getConnectedPlayersAsync().then(function(players) {
            Utils.log(players);
          });
        }
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ],
  feedback: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "377a5+lMepDa5rbCREUKj7C", "feedback");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        yesPrefab: cc.Prefab,
        noPrefab: cc.Prefab
      },
      onLoad: function onLoad() {
        this.node.zIndex = 998;
        cc.game.addPersistRootNode(this.node);
        Utils.feedbackComp = this;
        this.yesPool = new cc.NodePool();
        this.noPool = new cc.NodePool();
        for (var i = 0; i < 3; i++) {
          var yesFeedback = cc.instantiate(this.yesPrefab);
          var noFeedback = cc.instantiate(this.noPrefab);
          this.yesPool.put(yesFeedback);
          this.noPool.put(noFeedback);
        }
      },
      start: function start() {},
      update: function update(dt) {},
      createFeedback: function createFeedback(type, pos) {
        var _this = this;
        var pool = null;
        var prefab = null;
        if ("yes" === type) {
          pool = this.yesPool;
          prefab = this.yesPrefab;
          Utils.play("yesAudio");
          Utils.menuComp.updatePuzzleStep();
        } else {
          pool = this.noPool;
          prefab = this.noPrefab;
          Utils.play("noAudio");
        }
        var newFeedback = null;
        newFeedback = pool.size() > 0 ? pool.get() : cc.instantiate(prefab);
        newFeedback.position = pos ? this.node.convertToNodeSpaceAR(pos) : cc.v2(0, 0);
        this.node.addChild(newFeedback);
        this.scheduleOnce(function() {
          _this.removeFeedback(newFeedback, type);
          "yes" === type && Utils.showPopup("end");
        }, "yes" === type ? 2 : 1);
      },
      removeFeedback: function removeFeedback(feedback, type) {
        var pool = null;
        pool = "yes" === type ? this.yesPool : this.noPool;
        pool.put(feedback);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "find-differences": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91173CFaCJJYaWwYNkN+feV", "find-differences");
    "use strict";
    var Utils = require("utils");
    var DIFFERENCE_COUNT = 8;
    cc.Class({
      extends: cc.Component,
      properties: {
        circleLayer: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.groups = this.circleLayer.children;
      },
      start: function start() {
        this.passed = false;
        this.groupArr = [];
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        this.groups.forEach(function(group) {
          group.on("click-propagation", function(event) {
            event.stopPropagation();
            if (_this.passed) return;
            if (-1 === _this.groupArr.indexOf(group.uuid)) {
              _this.groupArr.push(group.uuid);
              group.opacity = 255;
              if (_this.groupArr.length === DIFFERENCE_COUNT) {
                _this.passed = true;
                Utils.menuLock();
                Utils.feedback("yes");
              }
            }
          }, _this);
        });
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "find-food": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "486654km89GEqk9/c9WoTQx", "find-food");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        roleLayer: {
          default: null,
          type: cc.Node
        },
        topPart: {
          default: null,
          type: cc.Node
        },
        bottomPart: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.combined = false;
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        var roles = this.roleLayer.children;
        roles.forEach(function(role) {
          role.on("touchstart", Utils.throttle(_this.onTouch, 1e3), _this);
        });
        this.node.on("stick-end", function(event) {
          event.stopPropagation();
          if (_this.passed) return;
          _this.combined = true;
        });
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        if (this.combined) if (event.target.uuid === this.bottomPart.uuid || event.target.uuid === this.topPart.uuid) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no", event.getLocation()); else event.target.uuid !== this.bottomPart.uuid && Utils.feedback("no", event.getLocation());
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "find-largest": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f2cdqwqlxC77SkS6LTF/lm", "find-largest");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        numberLayer: {
          default: null,
          type: cc.Node
        },
        targetRole: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.bindEv();
        this.passed = false;
      },
      bindEv: function bindEv() {
        var _this = this;
        var numbers = this.numberLayer.children;
        numbers.forEach(function(num) {
          num.on("touchend", Utils.throttle(_this.onTouch, 1e3), _this);
        });
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        var pos = event.getLocation();
        if (event.target.uuid === this.targetRole.uuid) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no", pos);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "find-male": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c37e6DtBkJGaYGAGSIi4ygL", "find-male");
    "use strict";
    var Utils = require("utils");
    var Config = require("config");
    var DIRECTION = Config.DIRECTION;
    cc.Class({
      extends: cc.Component,
      properties: {
        roleLayer: {
          default: null,
          type: cc.Node
        },
        targetRole: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        var roles = this.roleLayer.children;
        var normalArr = [];
        var skirtUpArr = [];
        roles.forEach(function(role) {
          var normalNode = role.getChildByName("normal");
          var skirtUpNode = role.getChildByName("skirt-up");
          normalArr.push(normalNode);
          skirtUpArr.push(skirtUpNode);
          normalNode.on("touchend", Utils.throttle(_this.onTouch, 500), _this);
          skirtUpNode.on("touchend", Utils.throttle(_this.onTouch, 500), _this);
        });
        this.normalArr = normalArr;
        this.skirtUpArr = skirtUpArr;
      },
      start: function start() {
        this.passed = false;
        this.skirtUp = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("screen-invert", this.onScreenInvert, this);
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        var pos = event.getLocation();
        if (event.target.uuid === this.targetRole.uuid) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no", pos);
      },
      onScreenInvert: function onScreenInvert(event) {
        if (this.passed) return;
        var direction = event.detail.direction;
        direction !== DIRECTION.UP && direction !== DIRECTION.DOWN || this.toggleSkirt(direction);
      },
      toggleSkirt: function toggleSkirt(direction) {
        this.skirtUp = direction === DIRECTION.UP;
        this.updateSkirt();
      },
      updateSkirt: function updateSkirt() {
        var _this2 = this;
        this.normalArr.forEach(function(normal) {
          normal.active = !_this2.skirtUp;
        });
        this.skirtUpArr.forEach(function(skirtUp) {
          skirtUp.active = _this2.skirtUp;
        });
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ],
  "find-palm": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e4aaPimf1OE4JOO6fQBvrY", "find-palm");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        palmsLayer: {
          default: null,
          type: cc.Node
        },
        targetRole: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.bindEv();
        this.passed = false;
      },
      bindEv: function bindEv() {
        var _this = this;
        var palms = this.palmsLayer.children;
        palms.forEach(function(role) {
          role.on("touchend", Utils.throttle(_this.onTouch, 1e3), _this);
        });
        this.targetRole.on("touchend", Utils.throttle(this.onTouchTarget, 1e3), this);
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        Utils.feedback("no", event.getLocation());
      },
      onTouchTarget: function onTouchTarget(event) {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        Utils.feedback("yes");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "find-pentagon": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8625VKBoFHp6z7nAJvw14i", "find-pentagon");
    "use strict";
    var Utils = require("utils");
    var STICKY_DISTANCE_THRESHOLD = 100;
    var ADJUST_DURATION = .3;
    cc.Class({
      extends: cc.Component,
      properties: {
        triangle: {
          default: null,
          type: cc.Node
        },
        square: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.combined = false;
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.triangle.on("touchstart", Utils.throttle(this.onTouch, 1e3), this);
        this.square.on("touchstart", Utils.throttle(this.onTouch, 1e3), this);
        this.node.on("drag-end", this.onDragEnd, this);
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        if (this.combined) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        }
      },
      onDragEnd: function onDragEnd(event) {
        event.stopPropagation();
        if (this.passed) return;
        var targetUuid = event.target.uuid;
        var isTriangle = targetUuid === this.triangle.uuid;
        var isSquare = targetUuid === this.square.uuid;
        if (isTriangle || isSquare) {
          var pos1 = this.triangle.position;
          var pos2 = this.square.position;
          var distance = pos1.sub(pos2).mag();
          if (distance <= STICKY_DISTANCE_THRESHOLD) {
            this.combined = true;
            this.triangle.getComponent("draggable").draggable = false;
            this.square.getComponent("draggable").draggable = false;
            var pos = isTriangle ? pos2 : pos1;
            var move = cc.moveTo(ADJUST_DURATION, pos).easing(cc.easeSineInOut());
            event.target.runAction(move);
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "find-rainbow": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90a5dwAt1NOiIdmInW0FAAK", "find-rainbow");
    "use strict";
    var Utils = require("utils");
    var MOVE_DISTANCE = 280;
    var FADE_OUT_DURATION = 1;
    cc.Class({
      extends: cc.Component,
      properties: {
        touchArea: {
          default: null,
          type: cc.Node
        },
        leftCloud: {
          default: null,
          type: cc.Node
        },
        rightCloud: {
          default: null,
          type: cc.Node
        },
        rain: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.leftCloudOriX = this.leftCloud.x;
        this.rightCloudOriX = this.rightCloud.x;
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        this.touchArea.on("touchmove", function(event) {
          if (_this.passed) return;
          var touches = event.getTouches();
          if (touches.length >= 2) {
            var touch1 = touches[0];
            var touch2 = touches[1];
            var delta1 = touch1.getDelta();
            var delta2 = touch2.getDelta();
            var touchPoint1 = _this.node.convertToNodeSpaceAR(touch1.getLocation());
            var touchPoint2 = _this.node.convertToNodeSpaceAR(touch2.getLocation());
            var distance = touchPoint1.sub(touchPoint2);
            var delta = delta1.sub(delta2);
            var rate = delta.x / distance.x * 20;
            var leftTarget = _this.leftCloud.x - rate;
            var rightTarget = _this.rightCloud.x + rate;
            leftTarget < _this.leftCloudOriX && (_this.leftCloud.x = leftTarget);
            rightTarget > _this.rightCloudOriX && (_this.rightCloud.x = rightTarget);
            var maxDistance = Math.max(_this.leftCloudOriX - leftTarget, rightTarget - _this.rightCloudOriX);
            maxDistance > MOVE_DISTANCE && _this.onPass();
          }
        }, this);
      },
      onPass: function onPass() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        var move1 = cc.moveBy(FADE_OUT_DURATION, -MOVE_DISTANCE, 0).easing(cc.easeSineInOut());
        var fade1 = cc.fadeOut(FADE_OUT_DURATION);
        this.leftCloud.runAction(cc.spawn(move1, fade1));
        var move2 = cc.moveBy(FADE_OUT_DURATION, MOVE_DISTANCE, 0).easing(cc.easeSineInOut());
        var fade2 = cc.fadeOut(FADE_OUT_DURATION);
        this.rightCloud.runAction(cc.spawn(move2, fade2));
        var fade3 = cc.fadeOut(FADE_OUT_DURATION);
        var delay = cc.delayTime(.5);
        var callback = cc.callFunc(function() {
          Utils.feedback("yes");
        }, this);
        this.rain.runAction(cc.sequence(fade3, delay, callback));
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "find-ring": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08cb47GPopFNJW4aXNrFNLX", "find-ring");
    "use strict";
    var Utils = require("utils");
    var ANIMATION_DURATION = .5;
    cc.Class({
      extends: cc.Component,
      properties: {
        ring: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.ringClickable = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.ring.on("touchend", Utils.throttle(this.onTouch, 1e3), this);
        this.node.on("stick-end", this.onStickEnd, this);
      },
      onTouch: function onTouch() {
        if (this.passed || !this.ringClickable) return;
        this.passed = true;
        Utils.menuLock();
        Utils.feedback("yes");
      },
      onStickEnd: function onStickEnd(event) {
        var _this = this;
        event.stopPropagation();
        if (this.passed) return;
        var move = cc.moveTo(ANIMATION_DURATION, 470, -615).easing(cc.easeSineInOut());
        var rotate = cc.rotateTo(ANIMATION_DURATION, 0).easing(cc.easeSineInOut());
        var scale = cc.scaleTo(ANIMATION_DURATION, 1).easing(cc.easeSineInOut());
        var callback = cc.callFunc(function() {
          _this.ringClickable = true;
        }, this);
        this.ring.runAction(cc.sequence(cc.spawn(move, rotate, scale), callback));
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "find-toilet": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c382bxJoepF97LKGcAxtCdd", "find-toilet");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        triangle: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("wiped", this.onWiped, this);
      },
      onWiped: function onWiped() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        this.triangle.active = false;
        this.scheduleOnce(function() {
          Utils.feedback("yes");
        }, 1);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "green-light": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79570SPHiNB7Z1pSVk8OJPG", "green-light");
    "use strict";
    var Utils = require("utils");
    var INIT_DELAY = .5;
    var MIN_DURATION = .3;
    var MAX_DURATION = .5;
    cc.Class({
      extends: cc.Component,
      properties: {
        tree: {
          default: null,
          type: cc.Node
        },
        targetLight: {
          default: null,
          type: cc.Node
        },
        targetRole: {
          default: null,
          type: cc.Node
        },
        btn: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.btn.on("touchstart", this.onTouchStart, this);
        this.btn.on("touchend", this.onTouchEnd, this);
        this.btn.on("touchcancel", this.onTouchEnd, this);
      },
      onTouchStart: function onTouchStart() {
        if (this.passed || this.startLock) return;
        Utils.play("btnAudio");
        this.startLock = true;
        this.updateBtn("start");
        this.lampTurn();
      },
      onTouchEnd: function onTouchEnd() {
        var _this = this;
        if (this.passed || !this.startLock) return;
        this.startLock = false;
        this.updateBtn("stop");
        if (this.targetRole.active) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else {
          Utils.feedback("no");
          var lamps = this.tree.children;
          lamps.forEach(function(lamp) {
            _this.toggleLamp(lamp, "off");
          });
        }
        this.unscheduleAllCallbacks();
      },
      lampTurn: function lampTurn() {
        var _this2 = this;
        var lamps = this.getRandomLamp();
        var delay = INIT_DELAY;
        lamps.forEach(function(lamp, index) {
          _this2.scheduleOnce(function() {
            _this2.toggleLamp(lamp, "on");
            index !== lamps.length - 1 && _this2.scheduleOnce(function() {
              _this2.toggleLamp(lamp, "off");
            }, lamp.lightDuration);
          }, delay);
          delay += lamp.lightDuration;
        });
      },
      getRandomLamp: function getRandomLamp() {
        var _this3 = this;
        var lamps = this.tree.children;
        lamps.forEach(function(lamp) {
          lamp.uuid === _this3.targetLight.uuid ? lamp.lightDuration = MIN_DURATION : lamp.lightDuration = Utils.getRandom(MIN_DURATION, MAX_DURATION);
        });
        var pre = lamps.slice(0, 3);
        var last = lamps.slice(-1);
        var arr = lamps.slice(3, -1);
        arr.sort(function() {
          return .5 - Math.random();
        });
        return pre.concat(arr, last);
      },
      toggleLamp: function toggleLamp(lamp, status) {
        lamp.getChildByName("normal").active = "off" === status;
        lamp.getChildByName("light").active = "on" === status;
      },
      updateBtn: function updateBtn(type) {
        this.btn.getChildByName("normal").active = "stop" === type;
        this.btn.getChildByName("press").active = "start" === type;
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "help-cat": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbc724L/C9HSbzwtzoPxyKt", "help-cat");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        ice: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("wiped", this.onWiped, this);
      },
      onWiped: function onWiped() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        this.ice.active = false;
        this.scheduleOnce(function() {
          Utils.feedback("yes");
        }, 1);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "hide-underwear": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3cfa/kUPpF8ICktRu4ktd0", "hide-underwear");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("press-start", this.onPressStart, this);
      },
      onPressStart: function onPressStart() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        Utils.feedback("yes");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "invert-game": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "05be3l0extEZb4L2zbkWqDQ", "invert-game");
    "use strict";
    var Utils = require("utils");
    var Config = require("config");
    var DIRECTION = Config.DIRECTION;
    var FLAT_ARR = [ DIRECTION.UP, DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT ];
    var Z_ARR = [ DIRECTION.FRONT, DIRECTION.BACK ];
    cc.Class({
      extends: cc.Component,
      properties: {
        direction: {
          default: DIRECTION.UP,
          type: DIRECTION
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("screen-invert", this.onScreenInvert, this);
      },
      onScreenInvert: function onScreenInvert(event) {
        if (this.passed) return;
        if (!event.detail) return;
        var direction = event.detail.direction;
        if (-1 !== FLAT_ARR.indexOf(this.direction) && -1 !== Z_ARR.indexOf(direction)) return;
        if (-1 !== FLAT_ARR.indexOf(direction) && -1 !== Z_ARR.indexOf(this.direction)) return;
        direction === this.direction ? this.scheduleOnce(this.pass, .5) : this.unschedule(this.pass);
      },
      pass: function pass() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        Utils.feedback("yes");
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ],
  invertable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d13465u4cdFLLEA+zaCG4Wh", "invertable");
    "use strict";
    var Utils = require("utils");
    var device = Utils.deviceDetection().device;
    var isAndroid = !!("android" === device);
    var Config = require("config");
    var DIRECTION = Config.DIRECTION, IN_WX = Config.IN_WX;
    cc.Class({
      extends: cc.Component,
      properties: {
        accXThreshold: -.4,
        accYThreshold: .4,
        accZThreshold: .4
      },
      start: function start() {
        this.lastAccX = null;
        this.lastAccY = null;
        this.lastAccZ = null;
        this.bindEv();
      },
      bindEv: function bindEv() {
        if (IN_WX) wx.onAccelerometerChange(this.onDeviceMotionEvent.bind(this)); else {
          this.DeviceMotionThrottle = Utils.throttle(this.onDeviceMotionEvent, 200);
          cc.systemEvent.setAccelerometerEnabled(true);
          cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.DeviceMotionThrottle, this);
        }
      },
      onDestroy: function onDestroy() {
        if (IN_WX) wx.stopAccelerometer(); else {
          cc.systemEvent.setAccelerometerEnabled(false);
          cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.DeviceMotionThrottle, this);
        }
      },
      onDeviceMotionEvent: function onDeviceMotionEvent(event) {
        var acc = IN_WX ? event : event.acc;
        if (null === this.lastAccX) acc.x >= this.accXThreshold ? this.screenInvert(DIRECTION.RIGHT) : this.screenInvert(DIRECTION.LEFT); else {
          this.lastAccX < this.accXThreshold && acc.x >= this.accXThreshold && this.screenInvert(DIRECTION.RIGHT);
          this.lastAccX > this.accXThreshold && acc.x <= this.accXThreshold && this.screenInvert(DIRECTION.LEFT);
        }
        if (null === this.lastAccY) acc.y >= this.accYThreshold ? this.screenInvert(DIRECTION.UP) : this.screenInvert(DIRECTION.DOWN); else {
          this.lastAccY < this.accYThreshold && acc.y >= this.accYThreshold && this.screenInvert(DIRECTION.UP);
          this.lastAccY > this.accYThreshold && acc.y <= this.accYThreshold && this.screenInvert(DIRECTION.DOWN);
        }
        var accZ = isAndroid ? -acc.z : acc.z;
        if (null === this.lastAccZ) accZ >= this.accZThreshold ? this.screenInvert(DIRECTION.FRONT) : this.screenInvert(DIRECTION.BACK); else {
          this.lastAccZ < this.accZThreshold && accZ >= this.accZThreshold && this.screenInvert(DIRECTION.FRONT);
          this.lastAccZ > this.accZThreshold && accZ <= this.accZThreshold && this.screenInvert(DIRECTION.BACK);
        }
        this.lastAccX = acc.x;
        this.lastAccY = acc.y;
        this.lastAccZ = accZ;
      },
      screenInvert: function screenInvert(direction) {
        this.node.emit("screen-invert", {
          direction: direction
        });
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ],
  "light-lamp": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "091e9fAwiNOw4feer+M+VSp", "light-lamp");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        touchLeft: {
          default: null,
          type: cc.Node
        },
        touchRight: {
          default: null,
          type: cc.Node
        },
        lightRoom: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.leftTouch = false;
        this.rightTouch = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.touchLeft.on("touchstart", this.onLeftTouchStart, this);
        this.touchLeft.on("touchend", this.onLeftTouchEnd, this);
        this.touchLeft.on("touchcancel", this.onLeftTouchEnd, this);
        this.touchRight.on("touchstart", this.onRightTouchStart, this);
        this.touchRight.on("touchend", this.onRightTouchEnd, this);
        this.touchRight.on("touchcancel", this.onRightTouchEnd, this);
      },
      onLeftTouchStart: function onLeftTouchStart() {
        this.leftTouch = true;
      },
      onLeftTouchEnd: function onLeftTouchEnd() {
        this.leftTouch = false;
      },
      onRightTouchStart: function onRightTouchStart() {
        this.rightTouch = true;
      },
      onRightTouchEnd: function onRightTouchEnd() {
        this.rightTouch = false;
      },
      update: function update(dt) {
        if (this.passed) return;
        this.leftTouch && this.rightTouch && this.light();
      },
      light: function light() {
        this.passed = true;
        Utils.menuLock();
        this.lightRoom.active = true;
        Utils.feedback("yes");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "loading-end": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4bbdrFoTRK5L5SodNt4Fxq", "loading-end");
    "use strict";
    var Utils = require("utils");
    var Config = require("config");
    var DIRECTION = Config.DIRECTION;
    var SCALE_DURATION = .5;
    var SCALE_X = 1.4;
    cc.Class({
      extends: cc.Component,
      properties: {
        inner: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("screen-invert", this.onScreenInvert, this);
      },
      onScreenInvert: function onScreenInvert(event) {
        if (this.passed) return;
        if (!event.detail) return;
        event.detail.direction === DIRECTION.RIGHT ? this.scheduleOnce(this.pass, .5) : this.unschedule(this.pass);
      },
      pass: function pass() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        var scale = cc.scaleTo(SCALE_DURATION, SCALE_X, 1).easing(cc.easeSineInOut());
        var callback = cc.callFunc(function() {
          Utils.feedback("yes");
        }, this);
        this.inner.runAction(cc.sequence(scale, callback));
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ],
  "make-sleep": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97e535/wydNYqqa3iZKxXTa", "make-sleep");
    "use strict";
    var Utils = require("utils");
    var ACC_THRESHOLD = 1;
    var NEED_ROCK_COUNT = 4;
    var INVALID_DURATION = 1;
    cc.Class({
      extends: cc.Component,
      properties: {
        babySleep: {
          default: null,
          type: cc.Node
        },
        babyCry: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.rockCount = 0;
        this.startRock = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.motionHandlerFn = this.motionHandler.bind(this);
        window.addEventListener("devicemotion", this.motionHandlerFn, false);
      },
      onDestroy: function onDestroy() {
        window.removeEventListener("devicemotion", this.motionHandlerFn, false);
      },
      motionHandler: function motionHandler(event) {
        if (this.passed) return;
        var y = event.acceleration.y;
        if (y > ACC_THRESHOLD && y < 2 * ACC_THRESHOLD) {
          this.startRock = true;
          this.scheduleOnce(this.rockInvalid, INVALID_DURATION);
        } else if (y < -ACC_THRESHOLD && y > 2 * -ACC_THRESHOLD && this.startRock) {
          this.unschedule(this.rockInvalid);
          this.rockInvalid();
          this.rockCount += 1;
          this.rockCount >= NEED_ROCK_COUNT && this.pass();
        }
      },
      rockInvalid: function rockInvalid() {
        this.startRock = false;
      },
      pass: function pass() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        this.updateBaby("sleep");
        this.scheduleOnce(function() {
          Utils.feedback("yes");
        }, 1.5);
      },
      updateBaby: function updateBaby(status) {
        this.babySleep.active = "sleep" === status;
        this.babyCry.active = "cry" === status;
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "make-wind": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cebc34+fZBMeb4RI45zWPqH", "make-wind");
    "use strict";
    var Utils = require("utils");
    var ROTATION_DURATION = .5;
    var ROTATE_COUNT = 10;
    var ACC_THRESHOLD = 10;
    cc.Class({
      extends: cc.Component,
      properties: {
        fan: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.motionHandlerFn = this.motionHandler.bind(this);
        window.addEventListener("devicemotion", this.motionHandlerFn, false);
      },
      onDestroy: function onDestroy() {
        window.removeEventListener("devicemotion", this.motionHandlerFn, false);
      },
      motionHandler: function motionHandler(event) {
        if (this.passed) return;
        var x = event.acceleration.x;
        x > ACC_THRESHOLD && this.pass();
      },
      pass: function pass() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        var rotate = cc.rotateBy(ROTATION_DURATION, 360);
        this.fan.runAction(cc.repeat(rotate, ROTATE_COUNT));
        this.scheduleOnce(function() {
          Utils.feedback("yes");
        }, 3);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  menu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9af8HySIxJpbQ05aKFu/xW", "menu");
    "use strict";
    var Utils = require("utils");
    var Config = require("config");
    var IN_FB = Config.IN_FB, IN_WX = Config.IN_WX;
    var sceneList = require("scene-list");
    var SCENE_LIST = sceneList.SCENE_LIST;
    cc.Class({
      extends: cc.Component,
      properties: {
        startMenu: {
          default: null,
          type: cc.Node
        },
        entryMenu: {
          default: null,
          type: cc.Node
        },
        gameMenu: {
          default: null,
          type: cc.Node
        },
        startBtn: {
          default: null,
          type: cc.Node
        },
        shareBtn: {
          default: null,
          type: cc.Node
        },
        likeBtn: {
          default: null,
          type: cc.Node
        },
        backBtn: {
          default: null,
          type: cc.Node
        },
        listBtn: {
          default: null,
          type: cc.Node
        },
        keyCountLabel: {
          default: null,
          type: cc.Label
        },
        tipsBtn: {
          default: null,
          type: cc.Node
        },
        puzzleTitlePrefab: cc.Prefab,
        userGuide: {
          default: null,
          type: cc.Node
        },
        userGuideBtn: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        if (IN_WX) {
          wx.showShareMenu({
            withShareTicket: false
          });
          wx.onShareAppMessage(function() {
            return {
              title: "\u8fd9\u9053\u9898\u592a\u96be\u4e86\uff0c\u5feb\u5e2e\u5e2e\u6211\uff01",
              imageUrl: "https://cdn.zykpi.com/unbelievable/share.png"
            };
          });
        }
        this.node.zIndex = 999;
        cc.game.addPersistRootNode(this.node);
        Utils.menuComp = this;
        this.puzzleTitle = cc.instantiate(this.puzzleTitlePrefab);
        this.puzzleTitleComp = this.puzzleTitle.getComponent("puzzle-title");
        this.node.addChild(this.puzzleTitle);
        this.menuType = "start";
        this.updateMenu();
        this.puzzleCount = SCENE_LIST.length;
        this.getData();
      },
      start: function start() {
        this.menuLocked = false;
        this.bindEv();
      },
      getData: function getData() {
        var self = this;
        if (IN_FB) FBInstant.player.getDataAsync([ "keyCount", "puzzleStep", "rewardShared" ]).then(function(data) {
          Utils.log({
            data: data
          });
          self.initKeyCount(data.keyCount, !data.hasOwnProperty("keyCount"));
          self.puzzleStep = data.hasOwnProperty("puzzleStep") ? self.puzzleStepFormat(data.puzzleStep) : 1;
          self.rewardShared = data.hasOwnProperty("rewardShared") ? data.rewardShared : "no";
          self.startBtn.active = true;
        }).catch(function(err) {
          Utils.log("getData fail: " + err.message);
          self.getData();
        }); else {
          var keyCount = 99;
          this.initKeyCount(keyCount, null === keyCount || "" === keyCount);
          var puzzleStep = Utils.getData("puzzleStep");
          this.puzzleStep = null === puzzleStep || "" === puzzleStep ? 1 : this.puzzleStepFormat(puzzleStep);
          this.rewardShared = "yes" === Utils.getData("rewardShared") ? "yes" : "no";
          this.startBtn.active = true;
        }
      },
      initKeyCount: function initKeyCount(keyCount, isFirst) {
        if (isFirst) {
          this.keyCount = 2;
          this.setData("keyCount");
        } else this.keyCount = parseInt(keyCount) > 0 ? parseInt(keyCount) : 0;
        this.renderKeyCount();
      },
      renderKeyCount: function renderKeyCount() {
        this.keyCountLabel.string = this.keyCount;
      },
      changeKeyCount: function changeKeyCount(value) {
        var keyCount = this.keyCount + value;
        keyCount = Math.min(keyCount, 99);
        keyCount = Math.max(keyCount, 0);
        this.keyCount = keyCount;
        this.setData("keyCount");
        this.renderKeyCount();
      },
      bindEv: function bindEv() {
        this.startBtn.on("touchend", Utils.throttle(this.onStart, 500), this);
        this.shareBtn.on("touchend", Utils.throttle(this.onShare, 500), this);
        this.likeBtn.on("touchend", Utils.throttle(this.onLike, 500), this);
        this.backBtn.on("touchend", Utils.throttle(this.onBack, 500), this);
        this.listBtn.on("touchend", Utils.throttle(this.onList, 500), this);
        this.tipsBtn.on("touchend", Utils.throttle(this.onTipsClick, 500), this);
        this.userGuideBtn.on("touchend", Utils.throttle(this.onCloseUserGuide, 500), this);
      },
      onCloseUserGuide: function onCloseUserGuide() {
        this.userGuide.active = false;
        this.menuLocked = false;
        Utils.setData("userGuideShowed", "yes");
      },
      onStart: function onStart() {
        var _this = this;
        Utils.play("btnAudio");
        Utils.inviteFriend();
        "https:" == location.protocol && "DeviceMotionEvent" in window && "function" === typeof DeviceMotionEvent.requestPermission ? DeviceMotionEvent.requestPermission().then(function(state) {
          "granted" !== state && alert("Apply permission state: " + state);
          _this.loadScene({
            name: "Entry"
          });
        }).catch(function(err) {
          alert("Error: " + err);
        }) : this.loadScene({
          name: "Entry"
        });
      },
      onBack: function onBack() {
        Utils.play("btnAudio");
        this.loadScene({
          name: "Start"
        });
      },
      onList: function onList() {
        if (this.menuLocked) return;
        Utils.play("btnAudio");
        this.loadScene({
          name: "Entry"
        });
      },
      onShare: function onShare() {
        Utils.play("btnAudio");
        Utils.share();
      },
      onLike: function onLike() {
        Utils.play("btnAudio");
        Utils.log("onLike");
      },
      onTipsClick: function onTipsClick() {
        if (this.menuLocked) return;
        Utils.play("btnAudio");
        if (this.keyCount > 0) {
          this.changeKeyCount(-1);
          Utils.showPopup("tips");
        } else Utils.showPopup("key");
      },
      loadScene: function loadScene(scene) {
        this.scene = scene;
        cc.director.loadScene(this.scene.name, this.onLoadSceneFinish.bind(this));
      },
      onLoadSceneFinish: function onLoadSceneFinish() {
        "Start" === this.scene.name ? this.menuType = "start" : "Entry" === this.scene.name ? this.menuType = "entry" : this.menuType = "game";
        this.updateMenu();
      },
      reloadScene: function reloadScene() {
        this.loadScene(this.scene);
      },
      nextScene: function nextScene() {
        var index = this.scene.index;
        index + 1 === SCENE_LIST.length ? this.loadScene({
          name: "Entry"
        }) : this.loadScene(SCENE_LIST[index + 1]);
      },
      updateMenu: function updateMenu() {
        this.startMenu.active = "start" === this.menuType;
        this.entryMenu.active = "entry" === this.menuType;
        this.gameMenu.active = "game" === this.menuType;
        switch (this.menuType) {
         case "start":
          this.puzzleTitle.active = false;
          cc.director.preloadScene("Entry");
          Utils.audioComp.setBgmVolume();
          break;

         case "entry":
          this.puzzleTitle.active = false;
          var puzzleStep = this.puzzleStep;
          if (puzzleStep && puzzleStep <= SCENE_LIST.length) {
            Utils.log("preload scene " + (puzzleStep - 1));
            cc.director.preloadScene(SCENE_LIST[puzzleStep - 1].name);
          }
          Utils.audioComp.setBgmVolume();
          break;

         case "game":
          var _scene = this.scene, index = _scene.index, customTitle = _scene.customTitle;
          if (customTitle) this.puzzleTitle.active = false; else {
            this.puzzleTitle.active = true;
            this.puzzleTitleComp.setTitle(this.scene);
          }
          if (index + 1 !== SCENE_LIST.length) {
            Utils.log("preload scene " + (index + 1));
            cc.director.preloadScene(SCENE_LIST[index + 1].name);
          }
          Utils.audioComp.setBgmVolume(.6);
          if (0 === index && "yes" !== Utils.getData("userGuideShowed")) {
            this.menuLocked = true;
            this.userGuide.active = true;
            this.userGuide.zIndex = 1e3;
          }
        }
      },
      puzzleStepFormat: function puzzleStepFormat(value) {
        var result = parseInt(value);
        result = Math.min(result, SCENE_LIST.length);
        result = Math.max(result, 0);
        return result;
      },
      updatePuzzleStep: function updatePuzzleStep() {
        if (this.scene.index + 1 === this.puzzleStep) {
          this.puzzleStep = this.puzzleStepFormat(this.puzzleStep + 1);
          this.setData("puzzleStep");
        }
      },
      rewardShareSuccess: function rewardShareSuccess() {
        this.changeKeyCount(2);
        this.rewardShared = "yes";
        this.setData("rewardShared");
      },
      setData: function setData(item) {
        var self = this;
        var value = this[item];
        if (IN_FB) {
          var obj = {};
          obj[item] = value;
          FBInstant.player.setDataAsync(obj).then(function() {
            Utils.log("set " + item + " success");
          }).catch(function(err) {
            Utils.log("setData " + item + " fail: " + err.message);
            self.setData(item);
          });
        } else Utils.setData(item, value);
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    "scene-list": "scene-list",
    utils: "utils"
  } ],
  "milk-cow": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5b1f0VsjZNd4bQEPQrx3LJ", "milk-cow");
    "use strict";
    var Utils = require("utils");
    var MOVE_DURATION = 2;
    var MULTITOUCH_COUNT = 3;
    cc.Class({
      extends: cc.Component,
      properties: {
        bull: {
          default: null,
          type: cc.Node
        },
        cow: {
          default: null,
          type: cc.Node
        },
        bullTouchArea: {
          default: null,
          type: cc.Node
        },
        milk: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.moveDistance = (cc.winSize.width + this.cow.width) / 2 - 20;
        this.cow.x += this.moveDistance;
      },
      start: function start() {
        this.passed = false;
        this.bullClicked = false;
        this.cowCanMilk = false;
        this.count = 0;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.bullTouchArea.on("touchend", Utils.throttle(this.onTouchBull, 500), this);
        this.node.on("multi-touch", Utils.throttle(this.onMultiTouch, 800), this);
      },
      onTouchBull: function onTouchBull() {
        var _this = this;
        if (this.bullClicked) return;
        this.bullClicked = true;
        var bullMove = cc.moveBy(MOVE_DURATION, -this.moveDistance, 0).easing(cc.easeSineInOut());
        var delay = cc.delayTime(.2);
        var callback1 = cc.callFunc(function() {
          var cowMove = cc.moveBy(MOVE_DURATION, -_this.moveDistance, 0).easing(cc.easeSineInOut());
          var callback2 = cc.callFunc(function() {
            _this.cowCanMilk = true;
          }, _this);
          _this.cow.runAction(cc.sequence(cowMove, callback2));
        }, this);
        this.bull.runAction(cc.sequence(bullMove, delay, callback1));
      },
      onMultiTouch: function onMultiTouch() {
        if (this.passed || !this.cowCanMilk) return;
        this.count += 1;
        if (this.count >= MULTITOUCH_COUNT) {
          this.milk.active = true;
          this.passed = true;
          Utils.menuLock();
          this.scheduleOnce(function() {
            Utils.feedback("yes");
          }, 1);
        }
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "mix-cocktails": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f06b3FdGH9A0K3K6yxqjKpR", "mix-cocktails");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        initTube: {
          default: null,
          type: cc.Node
        },
        splashTube: {
          default: null,
          type: cc.Node
        },
        mixedTube: {
          default: null,
          type: cc.Node
        },
        tubeMouth: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.ended = false;
        this.mouthBlocked = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        this.tubeMouth.on("touchstart", function() {
          _this.mouthBlocked = true;
        }, this);
        this.tubeMouth.on("touchend", function() {
          _this.mouthBlocked = false;
        }, this);
        this.tubeMouth.on("touchcancel", function() {
          _this.mouthBlocked = false;
        }, this);
        this.node.on("shaken", this.onShaken, this);
      },
      onShaken: function onShaken() {
        if (this.ended) return;
        this.ended = true;
        if (this.mouthBlocked) {
          Utils.menuLock();
          this.initTube.active = false;
          this.mixedTube.active = true;
          this.scheduleOnce(function() {
            Utils.feedback("yes");
          }, 2);
        } else {
          this.initTube.active = false;
          this.splashTube.active = true;
          Utils.feedback("no");
          this.scheduleOnce(function() {
            Utils.menuComp.reloadScene();
          }, 2);
        }
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "move-cake": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9368NLGqtD8o85Pc4AJltT", "move-cake");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        puzzleTitle: {
          default: null,
          type: cc.Label
        },
        puzzleIndex: {
          default: null,
          type: cc.Label
        },
        cake: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var scene = Utils.menuComp.scene;
        var index = scene.index;
        this.puzzleIndex.string = (index + 1 + ". ").toString();
        var node = this.puzzleTitle.node;
        if (index < 9) {
          node.x = -388;
          node.width = 940;
        } else {
          node.x = -358;
          node.width = 910;
          this.cake.node.x += 30;
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("stick-end", this.onStickEnd, this);
      },
      onStickEnd: function onStickEnd(event) {
        event.stopPropagation();
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        Utils.feedback("yes");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "move-vodka": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d211q4XblKoIbEjaU0RelD", "move-vodka");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        puzzleTitle: {
          default: null,
          type: cc.Label
        },
        puzzleIndex: {
          default: null,
          type: cc.Label
        },
        vodka: {
          default: null,
          type: cc.Label
        },
        dot: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var scene = Utils.menuComp.scene;
        var index = scene.index;
        this.puzzleIndex.string = (index + 1 + ". ").toString();
        var node = this.puzzleTitle.node;
        if (index < 9) {
          node.x = -388;
          node.width = 940;
        } else {
          node.x = -358;
          node.width = 910;
          this.vodka.node.x += 30;
          this.dot.node.x += 30;
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("stick-end", this.onStickEnd, this);
      },
      onStickEnd: function onStickEnd(event) {
        event.stopPropagation();
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        Utils.feedback("yes");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "multi-touch": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "181c1uEhE9MAJ4kOd8mXl4o", "multi-touch");
    "use strict";
    var Utils = require("utils");
    var device = Utils.deviceDetection().device;
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.bindEv();
        this.hasTouchPoint = false;
      },
      bindEv: function bindEv() {
        this.node.on("touchstart", this.onTouchStart, this);
        this.node.on("touchend", this.onTouchEnd, this);
        this.node.on("touchcancle", this.onTouchEnd, this);
      },
      onTouchStart: function onTouchStart(event) {
        if ("android" === device) if (this.hasTouchPoint) {
          this.multiTouch();
          this.hasTouchPoint = false;
        } else this.hasTouchPoint = true; else {
          var touches = event.getTouches();
          touches.length >= 2 && this.multiTouch();
        }
      },
      onTouchEnd: function onTouchEnd() {
        "android" === device && (this.hasTouchPoint = false);
      },
      multiTouch: function multiTouch() {
        Utils.log("multiTouch");
        var multiTouchEvent = new cc.Event.EventCustom("multi-touch", true);
        this.node.dispatchEvent(multiTouchEvent);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  nav: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc4d2ZkCo5AMr2jYXNC55JV", "nav");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nav: {
          default: null,
          type: cc.Node
        },
        activeNav: {
          default: null,
          type: cc.Node
        }
      },
      setStatus: function setStatus(active) {
        this.nav.active = !active;
        this.activeNav.active = active;
      }
    });
    cc._RF.pop();
  }, {} ],
  "need-triangle": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e316NY1QJKyp2QzYFpLnzs", "need-triangle");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        arrow: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        this.node.on("drag-end", function(event) {
          event.stopPropagation();
          if (_this.passed) return;
          var pos = _this.arrow.convertToWorldSpaceAR(cc.Vec2.ZERO);
          if (pos.x <= 0) {
            _this.passed = true;
            Utils.menuLock();
            Utils.feedback("yes");
          }
        });
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "open-champagne": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3efc3HmybNLdKJG7AYUMLiw", "open-champagne");
    "use strict";
    var Utils = require("utils");
    var ANIMATION_DURATION = .1;
    cc.Class({
      extends: cc.Component,
      properties: {
        cap: {
          default: null,
          type: cc.Node
        },
        splash: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.shaken = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.cap.on("touchstart", Utils.throttle(this.onTouch, 500), this);
        this.node.on("shaken", this.onShaken, this);
      },
      onTouch: function onTouch(event) {
        if (this.passed || !this.shaken) return;
        this.passed = true;
        Utils.menuLock();
        Utils.play("champagneAudio");
        var move = cc.moveTo(2 * ANIMATION_DURATION, 200, cc.winSize.height).easing(cc.easeSineInOut());
        this.cap.runAction(move);
        this.splash.active = true;
        var scale = cc.scaleTo(ANIMATION_DURATION, 1).easing(cc.easeSineInOut());
        var delay = cc.delayTime(1);
        var callback = cc.callFunc(function() {
          Utils.feedback("yes");
        }, this);
        this.splash.runAction(cc.sequence(scale, delay, callback));
      },
      onShaken: function onShaken() {
        if (this.passed) return;
        this.shaken = true;
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "open-door": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4ddb38BkpPpK+8ZNOJYgF/", "open-door");
    "use strict";
    var Utils = require("utils");
    var device = Utils.deviceDetection().device;
    var Config = require("config");
    var IN_WX = Config.IN_WX;
    var ROTATION_DURATION = .5;
    var GAMMA_THRESHOLD = 30;
    cc.Class({
      extends: cc.Component,
      properties: {
        knob: {
          default: null,
          type: cc.Node
        },
        open: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      start: function start() {
        this.passed = false;
        this.startLock = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var self = this;
        this.knob.on("touchstart", this.onTouchStart, this);
        this.knob.on("touchend", this.onTouchEnd, this);
        this.knob.on("touchcancel", this.onTouchEnd, this);
        if (IN_WX) wx.onCompassChange(function(res) {
          self.compassDirection = res.direction;
        }); else {
          this.orientationThrottle = Utils.throttle(this.orientationHandler, 200).bind(this);
          window.addEventListener("deviceorientation", this.orientationThrottle, false);
        }
      },
      onDestroy: function onDestroy() {
        IN_WX ? wx.stopCompass && wx.stopCompass() : window.removeEventListener("deviceorientation", this.orientationThrottle, false);
      },
      onTouchStart: function onTouchStart() {
        var self = this;
        if (this.passed || this.startLock) return;
        this.startLock = true;
        var rotate = cc.rotateTo(ROTATION_DURATION, -90).easing(cc.easeSineInOut());
        this.knob.runAction(rotate);
        IN_WX && (this.startCompassDirection = this.compassDirection);
      },
      onTouchEnd: function onTouchEnd() {
        if (this.passed || !this.startLock) return;
        this.startLock = false;
        var rotate = cc.rotateTo(ROTATION_DURATION, 0).easing(cc.easeSineInOut());
        this.knob.runAction(rotate);
        IN_WX && (this.startCompassDirection = null);
      },
      orientationHandler: function orientationHandler(event) {
        if (this.passed) return;
        var alpha = event.alpha, beta = event.beta, gamma = event.gamma;
        var realGamma = alpha + gamma;
        realGamma %= 360;
        realGamma < 0 && (realGamma += 360);
        realGamma = Math.round(realGamma);
        "android" === device ? this.startLock ? this.scheduleOnce(this.pass, 1) : this.unschedule(this.pass) : this.startLock && realGamma > GAMMA_THRESHOLD && realGamma < 90 ? this.scheduleOnce(this.pass, .2) : this.unschedule(this.pass);
      },
      pass: function pass() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        this.open.active = true;
        this.scheduleOnce(function() {
          Utils.feedback("yes");
        }, 1);
      },
      update: function update(dt) {
        IN_WX && this.startLock && this.startCompassDirection - this.compassDirection > 30 && this.pass();
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ],
  "open-elevator": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3aa0n3wUZGzI1WCf64DJLJ", "open-elevator");
    "use strict";
    var Utils = require("utils");
    var MOVE_DISTANCE = 280;
    cc.Class({
      extends: cc.Component,
      properties: {
        touchArea: {
          default: null,
          type: cc.Node
        },
        leftDoor: {
          default: null,
          type: cc.Node
        },
        rightDoor: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.leftDoorOriX = this.leftDoor.x;
        this.rightDoorOriX = this.rightDoor.x;
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        this.touchArea.on("touchmove", function(event) {
          if (_this.passed) return;
          var touches = event.getTouches();
          if (touches.length >= 2) {
            var touch1 = touches[0];
            var touch2 = touches[1];
            var delta1 = touch1.getDelta();
            var delta2 = touch2.getDelta();
            var touchPoint1 = _this.node.convertToNodeSpaceAR(touch1.getLocation());
            var touchPoint2 = _this.node.convertToNodeSpaceAR(touch2.getLocation());
            var distance = touchPoint1.sub(touchPoint2);
            var delta = delta1.sub(delta2);
            var rate = delta.x / distance.x * 10;
            var leftTarget = _this.leftDoor.x - rate;
            var rightTarget = _this.rightDoor.x + rate;
            leftTarget < _this.leftDoorOriX && (_this.leftDoor.x = leftTarget);
            rightTarget > _this.rightDoorOriX && (_this.rightDoor.x = rightTarget);
            var maxDistance = Math.max(_this.leftDoorOriX - leftTarget, rightTarget - _this.rightDoorOriX);
            maxDistance > MOVE_DISTANCE && _this.onPass();
          }
        }, this);
      },
      onPass: function onPass() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        Utils.feedback("yes");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  plane: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e9a2hypN9EhquGO13PdYWX", "plane");
    "use strict";
    var Utils = require("utils");
    var PROPELLER_TIME = .04;
    var MOVE_TIME = 4;
    var PLANE_WIDTH = 228;
    cc.Class({
      extends: cc.Component,
      properties: {
        propellerOpen: {
          default: null,
          type: cc.Node
        },
        propellerClose: {
          default: null,
          type: cc.Node
        },
        no: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.no.opacity = 0;
        var fadeOutOpen = cc.fadeOut(0);
        var delay1Open = cc.delayTime(PROPELLER_TIME);
        var fadeInOpen = cc.fadeIn(0);
        var delay2Open = cc.delayTime(PROPELLER_TIME);
        this.propellerOpen.runAction(cc.repeatForever(cc.sequence(fadeOutOpen, delay1Open, fadeInOpen, delay2Open)));
        var fadeOutClose = cc.fadeOut(0);
        var delay1Close = cc.delayTime(PROPELLER_TIME);
        var fadeInClose = cc.fadeIn(0);
        var delay2Close = cc.delayTime(PROPELLER_TIME);
        this.propellerClose.runAction(cc.repeatForever(cc.sequence(fadeInClose, delay1Close, fadeOutClose, delay2Close)));
        var winWidth = cc.winSize.width;
        var oriPos = this.node.position;
        var worldPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var partOneTime = (winWidth - worldPos.x) / winWidth * MOVE_TIME;
        var partTwoTime = MOVE_TIME - partOneTime;
        var move1 = cc.moveBy(partOneTime, winWidth - worldPos.x + PLANE_WIDTH / 2, 0);
        var move2 = cc.moveBy(0, -(winWidth + PLANE_WIDTH), 0);
        var move3 = cc.moveTo(partTwoTime, oriPos);
        this.node.runAction(cc.repeatForever(cc.sequence(move1, move2, move3)));
      },
      start: function start() {
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("touchend", Utils.throttle(this.onTouch, 1e3), this);
      },
      onTouch: function onTouch(event) {
        var _this = this;
        Utils.play("noAudio");
        this.no.opacity = 255;
        this.scheduleOnce(function() {
          _this.no.opacity = 0;
        }, 1);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14f22SZpXtIKrIKrEXcBVBw", "popup");
    "use strict";
    var Utils = require("utils");
    var Config = require("config");
    var IN_FB = Config.IN_FB, IN_FB_WEB = Config.IN_FB_WEB, INTERSTITIAL_AD_ID = Config.INTERSTITIAL_AD_ID, REWARDED_VIDEO_ID = Config.REWARDED_VIDEO_ID, AD_MIN_TIME_GAP = Config.AD_MIN_TIME_GAP, IN_WX = Config.IN_WX, WX_VIDEO_ADUNITID = Config.WX_VIDEO_ADUNITID, WX_BANNER_ADUNITID = Config.WX_BANNER_ADUNITID;
    cc.Class({
      extends: cc.Component,
      properties: {
        popup: {
          default: null,
          type: cc.Node
        },
        keyLayer: {
          default: null,
          type: cc.Node
        },
        tipsLayer: {
          default: null,
          type: cc.Node
        },
        endLayer: {
          default: null,
          type: cc.Node
        },
        tipsLabel: {
          default: null,
          type: cc.Label
        },
        endLabel: {
          default: null,
          type: cc.Label
        },
        tipsKeyLabel: {
          default: null,
          type: cc.Label
        },
        tipsKeyBtn: {
          default: null,
          type: cc.Node
        },
        tipsContinueBtn: {
          default: null,
          type: cc.Node
        },
        endShareBtn: {
          default: null,
          type: cc.Node
        },
        endReloadBtn: {
          default: null,
          type: cc.Node
        },
        endNextBtn: {
          default: null,
          type: cc.Node
        },
        keyContinueBtn: {
          default: null,
          type: cc.Node
        },
        keyShareBtn: {
          default: null,
          type: cc.Node
        },
        keyNoAddShareBtn: {
          default: null,
          type: cc.Node
        },
        keyWatchBtn: {
          default: null,
          type: cc.Node
        },
        keyAdWrap: {
          default: null,
          type: cc.Node
        },
        keyNotAdWrap: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.node.zIndex = 1e3;
        cc.game.addPersistRootNode(this.node);
        Utils.popupComp = this;
        IN_FB && this.initFbAd();
        IN_WX && this.initWxAd();
      },
      initFbAd: function initFbAd() {
        var getInterstitialAdAsync = Utils.supportedAPI("getInterstitialAdAsync");
        var getRewardedVideoAsync = Utils.supportedAPI("getRewardedVideoAsync");
        this.scheduleOnce(function() {
          Utils.log({
            SDKVersion: FBInstant.getSDKVersion(),
            getInterstitialAdAsync: getInterstitialAdAsync,
            getRewardedVideoAsync: getRewardedVideoAsync
          });
        }, 0);
        getInterstitialAdAsync && this.preloadInterstitialAd();
        getRewardedVideoAsync && this.preloadRewardedVideo();
      },
      initWxAd: function initWxAd() {
        var self = this;
        var sysInfo = wx.getSystemInfoSync();
        var version = Utils.version2Float(sysInfo.SDKVersion);
        var compareV = Utils.version2Float("2.0.4");
        if (version >= compareV && (WX_VIDEO_ADUNITID || WX_BANNER_ADUNITID)) {
          if (WX_VIDEO_ADUNITID) {
            this.rewardedVideoAd = wx.createRewardedVideoAd({
              adUnitId: WX_VIDEO_ADUNITID
            });
            this.rewardedVideoAd.onClose(function(res) {
              (res && res.isEnded || void 0 === res) && Utils.menuComp.changeKeyCount(1);
            });
            this.preloadWxVideoAd();
          }
          WX_BANNER_ADUNITID && this.createWxBannerAd();
        } else {
          this.keyAdWrap.active = false;
          this.keyNotAdWrap.active = true;
        }
      },
      preloadWxVideoAd: function preloadWxVideoAd() {
        var self = this;
        this.rewardedVideoPreloaded = false;
        this.rewardedVideoAd.load().then(function() {
          Utils.log("Rewarded video preloaded");
          self.rewardedVideoPreloaded = true;
        }).catch(function(err) {
          Utils.log("Rewarded video failed to preload: " + err.errMsg);
          self.preloadWxVideoAd();
        });
      },
      createWxBannerAd: function createWxBannerAd() {
        var self = this;
        this.bannerAd && this.bannerAd.destroy();
        this.bannerAd = wx.createBannerAd({
          adUnitId: WX_VIDEO_ADUNITID,
          style: {
            left: 10,
            top: 76,
            width: 320
          }
        });
        this.bannerAd.onError(function(err) {
          Utils.log(err);
          self.createWxBannerAd();
        });
      },
      preloadInterstitialAd: function preloadInterstitialAd(type) {
        var self = this;
        "reload" !== type && (this.lastAdTime = +new Date());
        this.interstitialAdPreloaded = false;
        FBInstant.getInterstitialAdAsync(INTERSTITIAL_AD_ID).then(function(interstitial) {
          Utils.log(interstitial);
          self.interstitialAd = interstitial;
          return interstitial.loadAsync();
        }).then(function() {
          Utils.log("Interstitial Ad preloaded");
          self.interstitialAdPreloaded = true;
        }).catch(function(err) {
          Utils.log("Interstitial Ad failed to preload: " + err.message);
          self.preloadInterstitialAd("reload");
        });
      },
      preloadRewardedVideo: function preloadRewardedVideo() {
        var self = this;
        this.rewardedVideoPreloaded = false;
        FBInstant.getRewardedVideoAsync(REWARDED_VIDEO_ID).then(function(rewarded) {
          Utils.log(rewarded);
          self.rewardedVideo = rewarded;
          return rewarded.loadAsync();
        }).then(function() {
          Utils.log("Rewarded video preloaded");
          self.rewardedVideoPreloaded = true;
        }).catch(function(err) {
          Utils.log("Rewarded video failed to preload: " + err.message);
          self.preloadRewardedVideo();
        });
      },
      start: function start() {
        this.passedPuzzle = 0;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.endShareBtn.on("touchend", Utils.throttle(this.share, 500), this);
        this.endReloadBtn.on("touchend", Utils.throttle(this.reload, 500), this);
        this.endNextBtn.on("touchend", Utils.throttle(this.next, 500), this);
        this.tipsContinueBtn.on("touchend", Utils.throttle(this.hide, 500), this);
        this.keyContinueBtn.on("touchend", Utils.throttle(this.hide, 500), this);
        this.tipsKeyBtn.on("touchend", Utils.throttle(this.tipsKey, 500), this);
        this.keyNoAddShareBtn.on("touchend", Utils.throttle(this.rewardShare, 500), this);
        this.keyShareBtn.on("touchend", Utils.throttle(this.rewardShare, 500), this);
        this.keyWatchBtn.on("touchend", Utils.throttle(this.watch, 500), this);
      },
      share: function share() {
        Utils.play("btnAudio");
        Utils.share();
      },
      reload: function reload() {
        this.hide();
        Utils.menuComp.reloadScene();
      },
      next: function next() {
        this.hide();
        Utils.menuComp.nextScene();
      },
      show: function show(type) {
        var self = this;
        var _Utils$menuComp = Utils.menuComp, scene = _Utils$menuComp.scene, puzzleCount = _Utils$menuComp.puzzleCount;
        Utils.menuComp.menuLocked = true;
        this.popup.active = true;
        "tips" !== type && "end" !== type || (this[type + "Label"].string = scene[type + "Word"]);
        "tips" === type && (this.tipsKeyLabel.string = Utils.menuComp.keyCount);
        if ("end" === type) {
          Utils.play("passAudio");
          this.passedPuzzle += 1;
          if (IN_FB) {
            var now = +new Date();
            if ((2 === this.passedPuzzle || now - this.lastAdTime > AD_MIN_TIME_GAP) && this.interstitialAdPreloaded) {
              Utils.log("Call Interstitial Ad showAsync");
              this.interstitialAd.showAsync().then(function() {
                Utils.log("Interstitial Ad finished successfully");
              }).catch(function(err) {
                Utils.log("Interstitial Ad failed to show: " + err.message);
              });
              this.preloadInterstitialAd();
            } else (0 !== scene.index && (scene.index + 1) % 10 === 0 || scene.index === puzzleCount - 1) && Utils.inviteFriend();
          }
        }
        if ("key" === type) {
          this.renderRewardBtn();
          if (IN_FB_WEB) {
            this.keyWatchWrap.active = false;
            this.keyMessengerWrap.active = false;
            this.keyWebWrap.active = true;
          } else if (IN_FB && !Utils.supportedAPI("getRewardedVideoAsync")) {
            this.keyWatchWrap.active = false;
            this.keyMessengerWrap.active = true;
            this.keyWebWrap.active = false;
          }
        }
        this.keyLayer.active = "key" === type;
        this.tipsLayer.active = "tips" === type;
        this.endLayer.active = "end" === type;
      },
      hide: function hide() {
        Utils.play("btnAudio");
        this.popup.active = false;
        Utils.menuComp.menuLocked = false;
      },
      tipsKey: function tipsKey() {
        Utils.play("btnAudio");
        this.show("key");
      },
      renderRewardBtn: function renderRewardBtn() {
        var rewardShared = Utils.menuComp.rewardShared;
        this.keyShareBtn.active = "no" === rewardShared;
      },
      rewardShare: function rewardShare() {
        Utils.play("btnAudio");
        Utils.share("reward");
      },
      watch: function watch() {
        var self = this;
        Utils.play("btnAudio");
        if (IN_FB && this.rewardedVideoPreloaded) {
          Utils.log("Call Rewarded video showAsync");
          this.rewardedVideo.showAsync().then(function() {
            Utils.log("Rewarded video watched successfully");
            Utils.menuComp.changeKeyCount(1);
          }).catch(function(err) {
            Utils.log("Rewarded video failed to show: " + err.message);
          });
          this.preloadRewardedVideo();
        }
        IN_WX && self.rewardedVideoPreloaded && self.rewardedVideoAd.show().then(function() {
          Utils.log("\u5956\u52b1\u89c6\u9891\u663e\u793a\u6210\u529f");
        }).catch(function(err) {
          Utils.log("\u5956\u52b1\u89c6\u9891\u663e\u793a\u5931\u8d25: " + err.errMsg);
          self.preloadWxVideoAd();
        });
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ],
  "press-pig": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a23eb94jE9MtJbjYQQ/q1pK", "press-pig");
    "use strict";
    var Utils = require("utils");
    var FADE_IN_DURATION = 3;
    var FADE_OUT_DURATION = .3;
    cc.Class({
      extends: cc.Component,
      properties: {
        sleepPig: {
          default: null,
          type: cc.Node
        },
        pressPig: {
          default: null,
          type: cc.Node
        },
        wakenUpPig: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("press-start", this.onPressStart, this);
        this.node.on("press-end", this.onPressEnd, this);
      },
      onPressStart: function onPressStart() {
        if (this.passed) return;
        var fade = cc.fadeIn(FADE_IN_DURATION);
        this.pressPig.stopAllActions();
        this.pressPig.runAction(fade);
        this.scheduleOnce(this.waken, FADE_IN_DURATION);
      },
      onPressEnd: function onPressEnd() {
        if (this.passed) return;
        var fade = cc.fadeOut(FADE_OUT_DURATION);
        this.pressPig.stopAllActions();
        this.pressPig.runAction(fade);
        this.unschedule(this.waken);
      },
      waken: function waken() {
        this.passed = true;
        Utils.menuLock();
        this.wakenUpPig.active = true;
        this.sleepPig.active = false;
        this.pressPig.active = false;
        this.scheduleOnce(function() {
          Utils.feedback("yes");
        }, 1);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  pressable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbfdcKxbmpLC7gmNz2GjEE6", "pressable");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        timeThreshold: 3
      },
      start: function start() {
        this.pressing = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("touchstart", this.onTouchStart, this);
        this.node.on("touchend", this.onTouchEnd, this);
        this.node.on("touchcancel", this.onTouchEnd, this);
      },
      onTouchStart: function onTouchStart() {
        this.scheduleOnce(this.pressStart, this.timeThreshold);
      },
      onTouchEnd: function onTouchEnd() {
        this.unschedule(this.pressStart);
        if (this.pressing) {
          var pressEndEvent = new cc.Event.EventCustom("press-end", true);
          this.node.dispatchEvent(pressEndEvent);
        }
        this.pressing = false;
      },
      pressStart: function pressStart() {
        this.pressing = true;
        var pressStartEvent = new cc.Event.EventCustom("press-start", true);
        this.node.dispatchEvent(pressStartEvent);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "puzzle-btn-list": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce29cGwRXpIn5OONPICKYuH", "puzzle-btn-list");
    "use strict";
    var Utils = require("utils");
    var sceneList = require("scene-list");
    var SCENE_LIST = sceneList.SCENE_LIST;
    var GROUP_ROWS = 4;
    var GROUP_COLS = 3;
    var GROUP_WIDTH = 1080;
    var ADJUST_DURATION = .5;
    cc.Class({
      extends: cc.Component,
      properties: {
        puzzleBtnGroupPrefab: cc.Prefab,
        puzzleBtnPrefab: cc.Prefab,
        scrollView: {
          default: null,
          type: cc.Node
        },
        navPrefab: cc.Prefab,
        navWrapper: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this.scrollViewComp = this.scrollView.getComponent(cc.ScrollView);
        this.puzzleBtnGroupArr = [];
        this.navArr = [];
        var menu = Utils.menuComp;
        var puzzleStep = menu.puzzleStep;
        var navIndex = 0;
        var groupCount = Math.ceil(SCENE_LIST.length / (GROUP_ROWS * GROUP_COLS));
        var _loop = function _loop(i) {
          var puzzleBtnGroup = cc.instantiate(_this.puzzleBtnGroupPrefab);
          var startIndex = i * GROUP_ROWS * GROUP_COLS;
          var endIndex = (i + 1) * GROUP_ROWS * GROUP_COLS;
          var list = SCENE_LIST.slice(startIndex, endIndex);
          list.forEach(function(scene, index) {
            var puzzleBtn = cc.instantiate(_this.puzzleBtnPrefab);
            puzzleBtn.getComponent("puzzle-btn").init({
              scene: scene,
              index: startIndex + index,
              menu: menu,
              list: _this
            });
            puzzleBtnGroup.addChild(puzzleBtn);
            puzzleStep === startIndex + index + 1 && (navIndex = i);
          });
          _this.node.addChild(puzzleBtnGroup);
          _this.puzzleBtnGroupArr.push(puzzleBtnGroup);
          var nav = cc.instantiate(_this.navPrefab);
          _this.navWrapper.addChild(nav);
          _this.navArr.push(nav);
        };
        for (var i = 0; i < groupCount; i++) _loop(i);
        this.scheduleOnce(function() {
          _this.updateNav(navIndex);
        }, 0);
      },
      start: function start() {
        this.lock = false;
        this.scrollView.on("swiped", this.onSwiped, this);
        this.scrollView.on("custom-touch-end", this.onTouchend, this);
      },
      onSwiped: function onSwiped(event) {
        var index = this.index;
        var isEdge = false;
        event.detail && ("left" === event.detail.direction ? index < this.navArr.length - 1 ? index += 1 : isEdge = true : "right" === event.detail.direction && index > 0 && (index > 0 ? index -= 1 : isEdge = true));
        isEdge || this.updateNav(index);
      },
      onTouchend: function onTouchend() {
        var offsetX = this.scrollViewComp.getScrollOffset().x;
        var offsetXAbs = Math.abs(offsetX);
        var index = Math.floor(offsetXAbs / GROUP_WIDTH);
        offsetXAbs % GROUP_WIDTH > GROUP_WIDTH / 2 && (index += 1);
        this.updateNav(index);
      },
      updateNav: function updateNav(index) {
        var len = this.navArr.length;
        index < 0 ? index = 0 : index > len - 1 && (index = len - 1);
        this.index = index;
        this.navArr.forEach(function(nav, idx) {
          var navComp = nav.getComponent("nav");
          navComp.setStatus(index === idx);
        });
        var x = GROUP_WIDTH * index;
        index === len - 1 && (x -= 1);
        this.scrollViewComp.scrollToOffset(cc.v2(x, 0), ADJUST_DURATION);
      }
    });
    cc._RF.pop();
  }, {
    "scene-list": "scene-list",
    utils: "utils"
  } ],
  "puzzle-btn": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67940y/2DtCqaMONqrIhxpH", "puzzle-btn");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        btnTxt: {
          default: null,
          type: cc.Label
        },
        lockNode: {
          default: null,
          type: cc.Node
        },
        loading: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.node.on("touchend", Utils.throttle(this.onTouch, 500), this);
      },
      init: function init(data) {
        var scene = data.scene, index = data.index, menu = data.menu, list = data.list;
        var step = index + 1;
        this.lock = false;
        this.list = list;
        this.menu = menu;
        this.scene = scene;
        this.scene.index = index;
        this.btnTxt.string = step.toString();
        this.btnTxt.node.active = !this.lock;
        this.lockNode.active = this.lock;
      },
      onTouch: function onTouch() {
        var _this = this;
        if (!this.lock && !this.list.lock) {
          this.list.lock = true;
          Utils.play("btnAudio");
          this.scheduleOnce(function() {
            _this.loading.active = true;
            var rotate = cc.rotateBy(2, 360).easing(cc.easeSineInOut());
            _this.loading.runAction(cc.repeatForever(rotate));
          }, .2);
          this.menu.loadScene(this.scene);
        }
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "puzzle-title": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99366k0B5ZOrqthgKj6hg5P", "puzzle-title");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        index: {
          default: null,
          type: cc.Label
        },
        title: {
          default: null,
          type: cc.Label
        }
      },
      setTitle: function setTitle(scene) {
        var index = scene.index, puzzle = scene.puzzle;
        this.index.string = (index + 1 + "\u3001").toString();
        this.title.string = puzzle.toString();
        if (index < 9) {
          this.node.x = -388;
          this.node.width = 940;
        } else {
          this.node.x = -358;
          this.node.width = 910;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  "real-breast": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b09f8Ub2tpMa4FTX2THT5s2", "real-breast");
    "use strict";
    var Utils = require("utils");
    var Config = require("config");
    var DIRECTION = Config.DIRECTION;
    cc.Class({
      extends: cc.Component,
      properties: {
        roleLayer: {
          default: null,
          type: cc.Node
        },
        targetRole: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        var roles = this.roleLayer.children;
        var upArr = [];
        var downArr = [];
        roles.forEach(function(role) {
          var upNode = role.getChildByName("up");
          var downNode = role.getChildByName("down");
          upArr.push(upNode);
          downArr.push(downNode);
          upNode.on("touchend", Utils.throttle(_this.onTouch, 500), _this);
          downNode.on("touchend", Utils.throttle(_this.onTouch, 500), _this);
        });
        this.upArr = upArr;
        this.downArr = downArr;
      },
      start: function start() {
        this.passed = false;
        this.womanDown = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("screen-invert", this.onScreenInvert, this);
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        var pos = event.getLocation();
        if (event.target.uuid === this.targetRole.uuid) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no", pos);
      },
      onScreenInvert: function onScreenInvert(event) {
        if (this.passed) return;
        if (!event.detail) return;
        var direction = event.detail.direction;
        direction !== DIRECTION.LEFT && direction !== DIRECTION.RIGHT && direction !== DIRECTION.DOWN && direction !== DIRECTION.UP || this.toggleWoman(event.detail.direction);
      },
      toggleWoman: function toggleWoman(direction) {
        this.womanDown = direction === DIRECTION.LEFT;
        this.updateWoman();
      },
      updateWoman: function updateWoman() {
        var _this2 = this;
        this.upArr.forEach(function(up) {
          up.active = !_this2.womanDown;
        });
        this.downArr.forEach(function(down) {
          down.active = _this2.womanDown;
        });
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ],
  "scene-list": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "354096O/z1La7tB0rQhX9pD", "scene-list");
    "use strict";
    var Config = require("config");
    var IN_FB_WEB = Config.IN_FB_WEB;
    var arr = [ {
      name: "FindPalm",
      puzzle: "\u4ed4\u7ec6\u770b\u5973\u5b69\u4f38\u51fa\u7684\u624b\u638c\uff0c\u54ea\u4e2a\u624b\u638c\u4e0e\u5176\u6700\u76f8\u4f3c\uff1f",
      tipsWord: "\u5973\u5b69\u7684\u5de6\u624b\u3002",
      endWord: "\u4e0d\u8981\u88ab\u8ff7\u60d1\u5566\uff5e"
    }, {
      name: "ClickDuck",
      customTitle: true,
      puzzle: "\u70b9\u51fb\u9898\u76ee\u4e0a\u65b9\u7684\u5c0f\u9ec4\u9e2d\u3002",
      tipsWord: "\u79fb\u52a8\u6807\u9898\u5230\u5c0f\u9ec4\u9e2d\u4e0b\u9762\u3002",
      endWord: "\u6ca1\u96be\u5ea6\uff01"
    }, {
      name: "FindLargest",
      puzzle: "\u627e\u5230\u6700\u5927\u7684\u6570\u3002",
      tipsWord: "\u201c\u6700\u5927\u7684\u201d\u6570\u5b57\uff01",
      endWord: "\u68d2\uff01"
    }, {
      name: "ShakeCola",
      puzzle: "\u54ea\u74f6\u662f\u53ef\u4e50\uff1f",
      tipsWord: "\u53ef\u4e50\u8981\u6447\u4e00\u6447\u518d\u559d\u3002",
      endWord: "\u559d\u524d\u6447\u4e00\u6447\uff5e",
      onlyMobile: true
    }, {
      name: "SeeBeauty",
      puzzle: "Jack\u7684\u89c6\u529b\u592a\u5dee\u4e86\uff0c\u600e\u4e48\u8ba9\u4ed6\u770b\u89c1\u7f8e\u5973\u5462\uff1f",
      tipsWord: "\u773c\u955c\u8be5\u64e6\u4e00\u64e6\u4e86\u3002",
      endWord: "\u54c7\uff01\u5927\u53cc\u773c\u76ae\u513f\uff01"
    }, {
      name: "CarParked",
      puzzle: "\u6c7d\u8f66\u505c\u5728\u51e0\u53f7\u8f66\u4f4d\uff1f",
      tipsWord: "87",
      endWord: "\u6570\u6570\u5c31\u884c\uff01"
    }, {
      name: "ClickPlane",
      customTitle: true,
      puzzle: "\u8fc5\u901f\u70b9\u51fb\u4e09\u6b21\u98de\u673a\u3002",
      tipsWord: "\u70b9\u51fb\u6807\u9898\u91cc\u7684\u4e09\u6b21\u98de\u673a\u3002",
      endWord: "\u68d2\uff01"
    }, {
      name: "NeedTriangle",
      puzzle: "\u6211\u9700\u8981\u4e00\u4e2a\u4e09\u89d2\u5f62\u3002",
      tipsWord: "\u5de6\u53f3\u79fb\u52a8\u8bd5\u8bd5\uff01",
      endWord: "\u4f60\u8d62\u4e86\uff5e"
    }, {
      name: "ElevatorFall",
      puzzle: "\u8ba9\u7535\u68af\u4e0b\u964d\u3002",
      tipsWord: "\u5411\u4e0b\u62d6\u52a8\u7535\u68af\u3002",
      endWord: "\u8fd9\u7535\u68af\u592a\u6050\u6016\u4e86\uff01"
    }, {
      name: "MixCocktails",
      puzzle: "\u6df7\u5408\u9e21\u5c3e\u9152\u3002",
      tipsWord: "\u5835\u4f4f\u74f6\u53e3\uff0c\u7136\u540e\u6643\u52a8\u624b\u673a\u3002",
      endWord: "\u68d2\uff01",
      onlyMobile: true
    }, {
      name: "BiggestFire",
      puzzle: "\u627e\u51fa\u6700\u5927\u7684\u706b\u3002",
      tipsWord: "\u628a\u706b\u5806\u79fb\u5230\u4e00\u8d77\u3002",
      endWord: "\u5f88\u7b80\u5355!"
    }, {
      name: "CutHair",
      puzzle: "\u7ed9\u5b9d\u5b9d\u7406\u53d1\u3002",
      tipsWord: "\u628a\u5c0f\u718a\u7ed9\u5b9d\u5b9d\uff0c\u518d\u7ed9\u4ed6\u7406\u53d1\u54e6\uff5e",
      endWord: "\u5b9e\u5728\u662f\u592a\u96be\u4e86\uff01"
    }, {
      name: "BrokenHouse",
      puzzle: "\u7834\u623f\u5b50\u540e\u9762\u6709\u4ec0\u4e48\uff1f",
      tipsWord: "\u628a\u623f\u5b50\u6447\u57ae\u3002",
      endWord: "\u5e72\u5f97\u4e0d\u9519\uff01",
      onlyMobile: true
    }, {
      name: "CoverMoney",
      puzzle: "\u4e0d\u8981\u8ba9\u4eba\u77e5\u9053\u4f60\u6709\u94b1\uff01",
      tipsWord: "\u7528\u767d\u7eb8\u76d6\u4f4f\u94b1\u3002",
      endWord: "\u55ef\u2026\u8fd9\u662f\u4e2a\u597d\u4e3b\u610f\u3002"
    }, {
      name: "FindToilet",
      puzzle: "Sam\u5c3f\u6025\uff0c\u5e2e\u4ed6\u627e\u5230\u5395\u6240\u3002",
      tipsWord: "\u628a\u5973\u5395\u6240\u6807\u5fd7\u7684\u88d9\u5b50\u64e6\u6389\u3002",
      endWord: "\u4f60\u771f\u7684\u5e2e\u4e86\u5927\u5fd9\u4e86\uff01"
    }, {
      name: "CombineLargest",
      puzzle: "\u7ec4\u5408\u51fa\u6700\u5927\u7684\u6570\u503c\u3002",
      tipsWord: "\u221e",
      endWord: "\u221e"
    }, {
      name: "ShakeTree",
      puzzle: "\u53eb\u9192Jimmy\u3002",
      tipsWord: "\u7528\u529b\u6447\u6643\u8fd9\u68f5\u82f9\u679c\u6811\u3002",
      endWord: "\u4f60\u89c9\u5f97\u8fd9\u4e2a\u5c0f\u7537\u5b69\u5e94\u8be5\u662f\u8c01\uff1f",
      onlyMobile: true
    }, {
      name: "SortDoll",
      puzzle: "\u5927\u7684\u5957\u5a03\u6392\u53f3\u8fb9\uff0c\u5c0f\u7684\u5957\u5a03\u6392\u5de6\u8fb9\u3002",
      tipsWord: "\u5c4f\u5e55\u5782\u76f4\u65cb\u8f6c180\u5ea6\u3002",
      endWord: "\u5e72\u5f97\u4e0d\u9519\uff01",
      onlyMobile: true
    }, {
      name: "Balance",
      puzzle: "\u8ba9\u5929\u5e73\u4fdd\u6301\u5e73\u8861\u3002",
      tipsWord: "\u79fb\u8d70\u6240\u6709\u52a8\u7269\u3002",
      endWord: "\u4f60\u592a\u806a\u660e\u4e86\uff01"
    }, {
      name: "SameBrother",
      puzzle: "Henry\u67096\u4e2a\u5973\u513f\uff0c\u6bcf\u4e2a\u5973\u513f\u90fd\u6709\u4e00\u4e2a\u54e5\u54e5\uff0cHenry\n\u4e00\u5171\u6709\u51e0\u4e2a\u5b69\u5b50\uff1f",
      tipsWord: "\u516d\u4e2a\u5973\u513f\u6709\u540c\u4e00\u4e2a\u54e5\u54e5\u3002",
      endWord: "\u5979\u4eec\u6709\u4e00\u4e2a\u5171\u540c\u7684\u54e5\u54e5\u5440\uff01"
    }, {
      name: "HelpCat",
      puzzle: "\u5e2e\u5e2e\u5c0f\u72d7\u5427\uff0c\u51bb\u574f\u4e86\u3002",
      tipsWord: "\u6469\u64e6\u53ef\u4ee5\u751f\u70ed\uff5e",
      endWord: "\u592a\u597d\u4e86!"
    }, {
      name: "MoveVodka",
      customTitle: true,
      puzzle: "\u8bf7\u8ba9\u676f\u5b50\u90fd\u88c5\u4e0a\u4f0f\u7279\u52a0\u3002",
      tipsWord: "\u79fb\u52a8\u201c\u4f0f\u7279\u52a0\u201d\u3002",
      endWord: "\u8fd9\u676f\u4f0f\u7279\u52a0\u4f60\u53ef\u6ca1\u6cd5\u513f\u559d\uff01"
    }, {
      name: "PressPig",
      puzzle: "\u53eb\u9192\u5c0f\u732a\u3002",
      tipsWord: "\u8bd5\u8bd5\u770b\u6309\u4f4f\u5c0f\u732a\u7684\u9f3b\u5b50\u3002",
      endWord: "\u4f60\u592a\u806a\u660e\u4e86\uff01"
    }, {
      name: "CombineSmallest",
      puzzle: "\u7ec4\u5408\u51fa\u6700\u5c0f\u7684\u6570\u503c",
      tipsWord: "\u79fb\u52a8\u6807\u9898\u91cc\u7684\u6807\u70b9\u3002",
      endWord: "\u6ce8\u610f\u6807\u70b9\u7b26\u53f7\uff01"
    }, {
      name: "LightLamp",
      puzzle: "\u5929\u9ed1\u4e86\uff0c\u8bf7\u70b9\u4eae\u706f\u6ce1\u3002",
      tipsWord: "\u4e24\u53ea\u624b\u540c\u65f6\u6309\u4f4f\u65ad\u6389\u7684\u7ebf\u7684\u4e24\u7aef\u3002",
      endWord: "\u4f60\u611f\u53d7\u5230\u7535\u6d41\u4e86\u5417\uff1f",
      onlyMobile: true
    }, {
      name: "WakeUp",
      puzzle: "\u53ebMike\u8d77\u5e8a\u3002",
      tipsWord: "\u6447\u6643\u624b\u673a\u3002",
      endWord: "\u522b\u628a\u624b\u673a\u7529\u51fa\u53bb\u4e86\uff01",
      onlyMobile: true
    }, {
      name: "OvertakeScore",
      puzzle: "\u5e2e\u52a9\u767d\u961f\u53cd\u8d85\u6bd4\u5206\u3002",
      tipsWord: "\u628a\u624b\u673a\u5012\u8fc7\u6765\uff01",
      endWord: "\u767d\u961f\u662f\u6211\u559c\u6b22\u7684\u7403\u961f\uff0c\u539f\u8c05\u6211\u7684\u81ea\u79c1\uff01",
      onlyMobile: true
    }, {
      name: "ZhugeLight",
      puzzle: "\u8c01\u662f\u8bf8\u845b\u4eae\uff1f",
      tipsWord: "\u8c03\u4eae\u4f60\u7684\u5c4f\u5e55\u8bd5\u8bd5\u3002",
      endWord: "\u8bf8\u845b\uff5e\u4eae\uff5e"
    }, {
      name: "BurstAcne",
      puzzle: "\u8ba8\u538c\u7684\u75d8\u75d8\uff0c\u6324\u7206\u5b83\uff01",
      tipsWord: "\u4e24\u6839\u624b\u6307\u6309\u538b\u5728\u5c4f\u5e55\u4e0a\uff0c\u6a21\u4eff\u6324\u75d8\u5b50\u7684\u52a8\u4f5c\u3002",
      endWord: "\u6211\u7f8e\u4e3d\u7684\u9752\u6625\uff5e",
      onlyMobile: true
    }, {
      name: "MoveCake",
      customTitle: true,
      puzzle: "\u8bf7\u628a\u86cb\u7cd5\u653e\u5165\u70e4\u7bb1\u3002",
      tipsWord: "\u5c06\u201c\u86cb\u7cd5\u201d\u62d6\u5230\u4e0b\u9762\u70e4\u7bb1\u4e2d\u3002",
      endWord: "\u68d2\uff01"
    }, {
      name: "FindPentagon",
      puzzle: "\u627e\u5230\u4e94\u8fb9\u5f62\u3002",
      tipsWord: "\u62c9\u51fa\u957f\u65b9\u5f62\uff0c\u518d\u653e\u4e0a\u4e09\u89d2\u5f62\u3002",
      endWord: "\u54c7\uff01"
    }, {
      name: "MoveWatter",
      customTitle: true,
      puzzle: "John\u6e34\u4e86,\u8bf7\u7ed9John\u4e00\u74f6\u6c34\u3002",
      tipsWord: "\u628a\u201c\u4e00\u74f6\u6c34\u201d\u7ed9John\u3002",
      endWord: "\u5f88\u7b80\u5355!"
    }, {
      name: "HideUnderwear",
      puzzle: "\u628a\u5185\u88e4\u85cf\u8d77\u6765\u3002",
      tipsWord: "\u7528\u624b\u6307\u5c06\u5185\u88e4\u4e00\u76f4\u76d6\u4f4f\u3002",
      endWord: "\u592a\u5c0f\u4e86\uff01"
    }, {
      name: "ClothesHoles",
      puzzle: "\u8863\u670d\u6709\u51e0\u4e2a\u6d1e\uff1f",
      tipsWord: "9",
      endWord: "\u5e72\u5f97\u6f02\u4eae\uff01"
    }, {
      name: "WearHat",
      puzzle: "\u6234\u4e0a\u5e3d\u5b50\u3002",
      tipsWord: "\u6a21\u62df\u6234\u5e3d\u5b50\u7684\u52a8\u4f5c\u3002",
      endWord: "\u5e72\u5f97\u6f02\u4eae\uff01",
      onlyMobile: true
    }, {
      name: "OpenElevator",
      puzzle: "\u6253\u5f00\u7535\u68af\u95e8\u3002",
      tipsWord: "\u4e24\u6839\u624b\u6307\u6309\u538b\u5728\u7535\u68af\u95e8\u4e0a\uff0c\u540c\u65f6\u5411\u5916\u6ed1\u52a8\uff0c\u53cd\u590d\u591a\u6b21\uff0c\u76f4\u81f3\u95e8\u5b8c\u5168\u6253\u5f00\u3002",
      endWord: "\u54c7\u54e6\uff5e\u529b\u6c14\u8fd9\u4e48\u5927\uff01",
      onlyMobile: true
    }, {
      name: "FoldPaper",
      puzzle: "\u4e00\u5f20\u539a\u5ea6\u4e3a0.01cm\u7684\u7eb8\uff0c\u8fde\u7eed\u5bf9\u62985\u6b21\uff0c\u5c06\u53d8\u6210\u591a\u539a\uff1f",
      tipsWord: "0.01",
      endWord: "\u65e0\u8bba\u6298\u591a\u5c11\u6b21\u8fd9\u5f20\u7eb8\u90fd\u662f 0.01\u3002"
    }, {
      name: "FindRing",
      puzzle: "\u65b0\u5a18\u548c\u5c0f\u72d7\u73a9\u800d\u7684\u65f6\u5019\u628a\u6212\u6307\u5f04\u4e22\u4e86\uff0c\u5e2e\u5979\u627e\u5230\u6212\u6307\u3002",
      tipsWord: "\u7ed9\u72d7\u5403\u4e2a\u9aa8\u5934\uff0c\u72d7\u4f1a\u544a\u8bc9\u4f60\u771f\u76f8\u3002",
      endWord: "\u6211\u7684\u5929\u54ea\uff01"
    }, {
      name: "MilkCow",
      puzzle: "\u6324\u725b\u5976\u3002",
      tipsWord: "\u62cd\u51e0\u4e0b\u516c\u725b\u7684\u5c41\u80a1\uff0c\u4f60\u5c31\u4ec0\u4e48\u90fd\u61c2\u4e86\u3002",
      endWord: "\u6324\u725b\u5976\u6709\u70b9\u7d2f\u3002",
      onlyMobile: true
    }, {
      name: "FindRainbow",
      puzzle: "\u627e\u5230\u5f69\u8679\u3002",
      tipsWord: "\u7528\u4e24\u53ea\u624b\u6307\u628a\u4e4c\u4e91\u6495\u5f00\u3002",
      endWord: "\u597d\u5fc3\u60c5\u3002",
      onlyMobile: true
    }, {
      name: "LoadingEnd",
      puzzle: "\u4e0b\u9762\u8fdb\u5ea6\u6761\u7ed3\u675f\u624d\u80fd\u8fdb\u5165\u4e0b\u4e00\u5173\u3002",
      tipsWord: "\u628a\u624b\u673a\u6a2a\u8fc7\u6765\u8ba9\u8fdb\u5ea6\u6761\u6d41\u52a8\u3002",
      endWord: "\u667a\u5546\u7206\u8868\u3002",
      onlyMobile: true
    }, {
      name: "WinOther",
      puzzle: "\u8d62\u8fc7Mayer\u3002",
      tipsWord: "\u5c06\u201c\u6211\u201d\u548c\u201cMayer\u201d\u6362\u4f4d\u7f6e\u3002",
      endWord: "\u5c31\u8fd9\u4e48\u7b80\u5355\uff01"
    }, {
      name: "SoHot",
      puzzle: "\u4ec0\u4e48\u662f\u89e3\u6691\u7684\u6700\u597d\u529e\u6cd5\u3002",
      tipsWord: "\u8ba9\u4e91\u6321\u4f4f\u592a\u9633\u3002",
      endWord: "\u4f60\u5f88\u806a\u660e!"
    }, {
      name: "CannotEat",
      puzzle: "\u4e0b\u9762\u54ea\u4e2a\u4e0d\u80fd\u5403\uff1f",
      tipsWord: "\u76d8\u5b50\u53ef\u4e0d\u80fd\u5403\u554a\uff01",
      endWord: "\u8fd9\u662f\u5e38\u8bc6\u3002"
    }, {
      name: "BodyTemperature",
      puzzle: "\u4f60\u7684\u4f53\u6e29\u662f\u591a\u5c11\uff1f",
      tipsWord: "\u624b\u6307\u6309\u4f4f\u6e29\u5ea6\u8ba1\u6c34\u94f6\u7403\uff0c\u4e09\u79d2\u4ee5\u4e0a\u3002",
      endWord: "\u4f60\u53d1\u70e7\u4e86\uff01"
    }, {
      name: "RealBreast",
      puzzle: "Mammy\u505a\u4e86\u9686\u80f8\u624b\u672f\u54ea\u4e00\u4e2a\u662fMammy\uff1f",
      tipsWord: "\u8c03\u6574\u624b\u673a\u65b9\u5411\uff0c\u8ba9\u4f17\u5973\u751f\u8eba\u4e0b\uff0c\u771f\u76f8\u7acb\u663e\u3002",
      endWord: "\u97e9\u56fd\u6280\u672f\u771f\u4e0d\u9519\uff01",
      onlyMobile: true
    }, {
      name: "SunOut",
      puzzle: "\u53eb\u9192\u732b\u5934\u9e70\u3002",
      tipsWord: "\u628a\u592a\u9633\u79fb\u51fa\u5c4f\u5e55\u3002",
      endWord: "\u732b\u5934\u9e70\u662f\u591c\u884c\u52a8\u7269\u3002"
    }, {
      name: "AYearAgo",
      puzzle: "Jerry\u4e00\u5e74\u524d\u505a\u4e86\u53d8\u6027\u624b\n\u672f\uff0c\u54ea\u4e00\u4e2a\u662fJerry\uff1f",
      tipsWord: "\u70b9\u51fb\u65e5\u5386\uff0c\u518d\u628a\u65e5\u5386\u65f6\u95f4\u5f80\u524d\u8c03\u4e00\u5e74\u3002",
      endWord: "\u6cf0\u56fd\u7684\u6280\u672f\u771f\u7684\u5f88\u68d2\uff01"
    }, {
      name: "BlackDots",
      puzzle: "\u56fe\u7247\u4e2d\u6709\u51e0\u4e2a\u9ed1\u70b9\uff1f",
      tipsWord: "0",
      endWord: "\u4f59\u8f89\u6548\u5e94\u3002"
    }, {
      name: "FindFood",
      puzzle: "\u627e\u51fa\u4e0b\u9762\u53ef\u4ee5\u5403\u7684\u98df\u7269\u3002",
      tipsWord: "\u4e00\u8d77\u753b\u4e24\u5f20\u56fe\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u5de7\u514b\u529b\u751c\u7b52\u3002",
      endWord: "\u54e6\uff0c\u6211\u7684\u4e0a\u5e1d\uff01\u6211\u4e0d\u4f1a\u518d\u5403\u751c\u7b52\uff01"
    }, {
      name: "GreenLight",
      puzzle: "\u6309\u4e0b\u6309\u94ae\uff0c\u76f4\u5230\u6700\u4e0a\u9762\u7684\u7eff\u706f\u70b9\u4eae\u3002",
      tipsWord: "\u5f53\u9876\u90e8\u7eff\u706f\u4eae\u8d77\u65f6\uff0c\u5feb\u901f\u79fb\u5f00\u624b\u6307\u3002",
      endWord: "\u54c7\uff01\u8fd9\u4e48\u5feb\uff01"
    }, {
      name: "OpenDoor",
      puzzle: "\u5f00\u95e8\u3002",
      tipsWord: "\u628a\u624b\u673a\u76f4\u7acb\uff0c\u70b9\u51fb\u5e76\u6309\u4f4f\u95e8\u628a\u624b\uff0c\u518d\u65cb\u8f6c\u624b\u673a\u8ba9\u95e8\u548c\u5899\u5206\u5f00\u3002",
      endWord: "\u62bd\u8c61\u4e3b\u4e49\u3002",
      onlyMobile: true
    }, {
      name: "OpenChampagne",
      puzzle: "\u606d\u559c\u4f60\u5373\u5c06\u901a\u5173\uff0c\u5f00\u4e2a\u9999\u69df\u5e86\u795d\u5427\uff01",
      tipsWord: "\u6a21\u4eff\u5f00\u9999\u69df\u7684\u59ff\u52bf\u3002",
      endWord: "\u606d\u559c\u4f60\u901a\u5173\uff01",
      onlyMobile: true
    } ];
    var sceneList = [];
    sceneList = IN_FB_WEB ? arr.filter(function(scene) {
      return !scene.onlyMobile;
    }) : arr;
    module.exports = {
      SCENE_LIST: sceneList
    };
    cc._RF.pop();
  }, {
    config: "config"
  } ],
  "screen-out-game": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "269695rsVZFyJZ7CiN1vrhx", "screen-out-game");
    "use strict";
    var Utils = require("utils");
    var FADE_OUT_DURATION = .2;
    cc.Class({
      extends: cc.Component,
      properties: {
        target: {
          default: null,
          type: cc.Node
        },
        successHide: {
          default: null,
          type: cc.Node
        },
        successShow: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("screen-out", this.onScreenOut, this);
      },
      onScreenOut: function onScreenOut(event) {
        event.stopPropagation();
        if (this.passed) return;
        var fade = cc.fadeOut(FADE_OUT_DURATION);
        this.target.runAction(fade);
        this.passed = true;
        Utils.menuLock();
        var delay = 0;
        if (null !== this.successHide) {
          delay = 1;
          this.successHide.active = false;
        }
        if (null !== this.successShow) {
          delay = 1;
          this.successShow.active = true;
        }
        this.scheduleOnce(function() {
          Utils.feedback("yes");
        }, delay);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "see-beauty": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d29578YIL5Ia7YcASuFVwsd", "see-beauty");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        wipeArea: {
          default: null,
          type: cc.Node
        },
        dirtyRole: {
          default: null,
          type: cc.Node
        },
        cleanRole: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("wiped", this.onWiped, this);
      },
      onWiped: function onWiped() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        this.dirtyRole.active = false;
        this.cleanRole.active = true;
        this.scheduleOnce(function() {
          Utils.feedback("yes");
        }, 1);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "shake-cola": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1e0c2THx9BUp6iF2NnrGhO", "shake-cola");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        roleLayer: {
          default: null,
          type: cc.Node
        },
        targetRole: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        var roles = this.roleLayer.children;
        roles.forEach(function(role) {
          role.on("touchend", Utils.throttle(_this.onTouch, 500), _this);
        });
        this.node.on("shaken", this.onShaken, this);
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        var pos = event.getLocation();
        if (event.target.uuid === this.targetRole.uuid) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no", pos);
      },
      onShaken: function onShaken() {
        if (this.passed) return;
        this.targetRole.active = true;
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  shakeable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3bcceMQde5ObZgyPR59hvwt", "shakeable");
    "use strict";
    var Utils = require("utils");
    var Config = require("config");
    var IN_WX = Config.IN_WX;
    cc.Class({
      extends: cc.Component,
      properties: {
        speedThreshold: 1,
        needShakeCount: 3
      },
      start: function start() {
        this.lastAccX = 0;
        this.lastAccY = 0;
        this.lastAccZ = 0;
        this.lastSpeed = 0;
        this.shakeCount = 0;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        if (IN_WX) wx.onAccelerometerChange(this.onDeviceMotionEvent.bind(this)); else {
          this.DeviceMotionThrottle = Utils.throttle(this.onDeviceMotionEvent, 100);
          cc.systemEvent.setAccelerometerEnabled(true);
          "https:" == location.protocol && "DeviceMotionEvent" in window && "function" === typeof DeviceMotionEvent.requestPermission ? DeviceMotionEvent.requestPermission().then(function(state) {
            "granted" !== state && alert("Apply permission state: " + state);
            cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, _this.DeviceMotionThrottle, _this);
          }).catch(function(err) {
            alert("Error: " + err);
          }) : cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.DeviceMotionThrottle, this);
        }
      },
      onDestroy: function onDestroy() {
        if (IN_WX) wx.stopAccelerometer(); else {
          cc.systemEvent.setAccelerometerEnabled(false);
          cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.DeviceMotionThrottle, this);
        }
      },
      onDeviceMotionEvent: function onDeviceMotionEvent(event) {
        var acc = IN_WX ? event : event.acc;
        var x = acc.x, y = acc.y, z = acc.z;
        var speed = Math.sqrt(x * x + y * y + z * z);
        var deltaSpeed = Math.abs(speed - this.lastSpeed);
        this.lastAccX = x;
        this.lastAccY = y;
        this.lastAccZ = z;
        this.lastSpeed = speed;
        if (deltaSpeed > this.speedThreshold) {
          this.shakeCount += 1;
          if (this.shakeCount >= this.needShakeCount) {
            this.shaken();
            this.shakeCount = 0;
          }
        } else this.shakeCount = 0;
      },
      shaken: function shaken() {
        this.node.emit("shaken");
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ],
  swipeable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfc946y9tFNZZ75VGGaIqhs", "swipeable");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        timeThreshold: 200,
        distanceThreshold: 20
      },
      start: function start() {
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("touchstart", this.onTouchstart, this);
        this.node.on("touchend", this.onTouchEnd, this);
        this.node.on("touchcancel", this.onTouchEnd, this);
      },
      onTouchstart: function onTouchstart(event) {
        if (this.startLock) return;
        this.startLock = true;
        this.startX = event.getLocation().x;
        this.startTime = +new Date();
      },
      onTouchEnd: function onTouchEnd(event) {
        var eventType = "custom-touch-end";
        if (this.startLock) {
          var x = event.getLocation().x;
          var time = +new Date();
          var offsetX = x - this.startX;
          var offsetTime = time - this.startTime;
          if (offsetTime < this.timeThreshold && Math.abs(offsetX) > this.distanceThreshold) {
            eventType = "swiped";
            this.swiped(offsetX > 0 ? "right" : "left");
          }
          this.startLock = false;
        }
        "custom-touch-end" === eventType && this.customTouchEnd();
      },
      swiped: function swiped(direction) {
        this.node.emit("swiped", {
          direction: direction
        });
      },
      customTouchEnd: function customTouchEnd() {
        this.node.emit("custom-touch-end");
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2690etMTb5LR7njNjvJTLpg", "utils");
    "use strict";
    var Config = require("config");
    var IN_FB = Config.IN_FB, LOGO_BASE64 = Config.LOGO_BASE64, IN_WX = Config.IN_WX;
    module.exports = {
      deviceDetection: function deviceDetection() {
        var ua = navigator.userAgent;
        var osVersion = "";
        var device = "";
        try {
          if (/android/i.test(ua)) {
            device = "android";
            osVersion = ua.match(/Android\s+([\d\.]+)/i)[0].replace("Android ", "");
          } else if (/ipad|iphone|ipod/i.test(ua)) {
            device = "ios";
            osVersion = ua.match(/OS\s+([\d_]+)/i)[0].replace(/_/g, ".").replace("OS ", "");
          }
        } catch (err) {
          console.error(err);
        }
        return {
          osVersion: osVersion,
          device: device
        };
      },
      log: function log(txt) {
        this.debugComp ? this.debugComp.log(txt) : cc.log(txt);
      },
      logReplace: function logReplace(txt) {
        this.debugComp ? this.debugComp.logReplace(txt) : cc.log(txt);
      },
      feedback: function feedback(type, pos) {
        this.feedbackComp.createFeedback(type, pos);
      },
      play: function play(file, loop, volume) {
        this.audioComp.play(file, loop, volume);
      },
      showPopup: function showPopup(type) {
        this.popupComp.show(type);
      },
      getRandom: function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      },
      throttle: function throttle(func, wait) {
        var context, args, timeout, result;
        var previous = 0;
        var later = function later() {
          previous = new Date();
          timeout = null;
          result = func.apply(context, args);
        };
        return function() {
          var now = new Date();
          var remaining = wait - (now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
          } else timeout || (timeout = setTimeout(later, remaining));
          return result;
        };
      },
      debounce: function debounce(func, wait, immediate) {
        var timeout, result;
        return function() {
          var context = this, args = arguments;
          var later = function later() {
            timeout = null;
            immediate || (result = func.apply(context, args));
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          callNow && (result = func.apply(context, args));
          return result;
        };
      },
      checkCover: function checkCover(a, b) {
        return a.x - a.width / 2 <= b.x - b.width / 2 && a.x + a.width / 2 >= b.x + b.width / 2 && a.y - a.height / 2 <= b.y - b.height / 2 && a.y + a.height / 2 >= b.y + b.height / 2;
      },
      collision: function collision(a, b) {
        var aLeftX = a.x - a.width / 2;
        var aRightX = a.x + a.width / 2;
        var bLeftX = b.x - b.width / 2;
        var bRightX = b.x + b.width / 2;
        var aTopY = a.y + a.height / 2;
        var aBottomY = a.y - a.height / 2;
        var bTopY = b.y + b.height / 2;
        var bBottomY = b.y - b.height / 2;
        return (aLeftX > bLeftX && aLeftX < bRightX || aRightX > bLeftX && aRightX < bRightX) && (aBottomY > bBottomY && aBottomY < bTopY || aTopY > bBottomY && aTopY < bTopY);
      },
      checkOriginScreenOut: function checkOriginScreenOut(node) {
        var pos = node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var winSize = cc.winSize;
        var isLeft = pos.x <= 0;
        var isRight = pos.x >= winSize.width;
        var isBottom = pos.y <= 0;
        var isTop = pos.y >= winSize.height;
        return isLeft || isRight || isBottom || isTop;
      },
      checkScreenOut: function checkScreenOut(node) {
        var pos = node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var winSize = cc.winSize;
        var isLeft = pos.x + node.width / 2 <= 0;
        var isRight = pos.x - node.width / 2 >= winSize.width;
        var isBottom = pos.y + node.height / 2 <= 0;
        var isTop = pos.y - node.height / 2 >= winSize.height;
        return isLeft || isRight || isBottom || isTop;
      },
      setPuzzleTitle: function setPuzzleTitle(puzzleTitle, puzzleIndex) {
        var scene = this.menuComp.scene;
        var index = scene.index;
        puzzleIndex.string = (index + 1 + ". ").toString();
        var node = puzzleTitle.node;
        if (index < 9) {
          node.x = -388;
          node.width = 940;
        } else {
          node.x = -358;
          node.width = 910;
        }
      },
      getData: function getData(item) {
        return cc.sys.localStorage.getItem("unbelievable_wechat_" + item);
      },
      setData: function setData(item, value) {
        cc.sys.localStorage.setItem("unbelievable_wechat_" + item, value);
      },
      share: function share(type) {
        var self = this;
        if (IN_FB && this.supportedAPI("shareAsync")) {
          var userName = FBInstant.player.getName();
          FBInstant.shareAsync({
            intent: "SHARE",
            image: LOGO_BASE64,
            text: userName + " is asking for your help!",
            data: {
              myReplayData: "This is a share from " + userName
            }
          }).then(function() {
            self.log("share end");
            if ("reward" === type) {
              self.menuComp.rewardShareSuccess();
              self.popupComp.renderRewardBtn();
            }
          }).catch(function(err) {
            self.log("Share failed: " + err.message);
          });
        }
        if (IN_WX) {
          wx.shareAppMessage({
            title: "\u8fd9\u9053\u9898\u592a\u96be\u4e86\uff0c\u5feb\u5e2e\u5e2e\u6211\uff01",
            imageUrl: "https://cdn.zykpi.com/unbelievable/share.png"
          });
          if ("reward" === type) {
            self.menuComp.rewardShareSuccess();
            self.popupComp.renderRewardBtn();
          }
        }
      },
      inviteFriend: function inviteFriend() {
        var self = this;
        IN_FB && FBInstant.context.chooseAsync().then(function() {
          self.log("inviteFriend");
        });
      },
      supportedAPI: function supportedAPI(name) {
        if (IN_FB) {
          var supportedAPIs = FBInstant.getSupportedAPIs();
          return supportedAPIs.includes(name);
        }
        return false;
      },
      menuLock: function menuLock() {
        this.menuComp.menuLocked = true;
      },
      version2Float: function version2Float(version) {
        var versionArr = version.split(".");
        var major = parseInt(versionArr[0] || 0, 10);
        var minor = parseInt(versionArr[1] || 0, 10);
        var patch = parseInt(versionArr[2] || 0, 10);
        minor < 10 && (minor = "0" + minor);
        patch < 10 && (patch = "0" + patch);
        return parseFloat(major + "." + minor + patch);
      }
    };
    cc._RF.pop();
  }, {
    config: "config"
  } ],
  "wake-up": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df9d8/lK6tJQooKz+yLsa+c", "wake-up");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        sleep: {
          default: null,
          type: cc.Node
        },
        wakenUp: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("shaken", this.onShaken, this);
      },
      onShaken: function onShaken() {
        if (this.passed) return;
        this.passed = true;
        Utils.menuLock();
        this.sleep.active = false;
        this.wakenUp.active = true;
        this.scheduleOnce(function() {
          Utils.feedback("yes");
        }, 1);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "win-mayer": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9e47MrBsFLvKA5o19p2s9D", "win-mayer");
    "use strict";
    var Utils = require("utils");
    var MOVE_DURATION = .1;
    cc.Class({
      extends: cc.Component,
      properties: {
        names: {
          default: null,
          type: cc.Node
        },
        me: {
          default: null,
          type: cc.Node
        },
        mayer: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        var initArr = [ "me", "mayer" ];
        this.initPos = [];
        this.nodeArr = [];
        initArr.forEach(function(name) {
          _this.initPos.push(_this[name].position);
          _this.nodeArr.push(_this[name]);
        });
      },
      start: function start() {
        this.passed = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this2 = this;
        var names = this.names.children;
        names.forEach(function(name) {
          name.on("touchmove", Utils.throttle(_this2.onTouchMove, 100), _this2);
        });
        this.node.on("drag-end", this.onDragEnd, this);
        this.node.on("screen-edge", this.onDragEnd, this);
      },
      onDragEnd: function onDragEnd(event) {
        var _this3 = this;
        event.stopPropagation();
        if (this.passed) return;
        this.nodeArr.forEach(function(node, index) {
          node.uuid === event.target.uuid && _this3.renderNode(node, index);
        });
        if (this.checkResult()) {
          this.passed = true;
          Utils.menuLock();
          this.me.getComponent("draggable").draggable = false;
          this.mayer.getComponent("draggable").draggable = false;
          this.scheduleOnce(function() {
            Utils.feedback("yes");
          }, 1);
        }
      },
      onTouchMove: function onTouchMove(event) {
        var _this4 = this;
        if (this.passed) return;
        this.nodeArr.sort(function(a, b) {
          return a.x - b.x;
        });
        this.nodeArr.forEach(function(node, index) {
          node.uuid !== event.target.uuid && _this4.renderNode(node, index);
        });
      },
      renderNode: function renderNode(node, index) {
        node.stopAllActions();
        var targetPos = this.initPos[index];
        var move = cc.moveTo(MOVE_DURATION, targetPos).easing(cc.easeSineInOut());
        node.runAction(move);
      },
      checkResult: function checkResult() {
        return this.nodeArr[0].uuid === this.mayer.uuid && this.nodeArr[1].uuid === this.me.uuid;
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  wipeable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf69agijiZGQbW081IQPrHa", "wipeable");
    "use strict";
    var Utils = require("utils");
    cc.Class({
      extends: cc.Component,
      properties: {
        cleanThreshold: 6,
        needCleanCount: 8
      },
      start: function start() {
        this.cleanCount = 0;
        this.bindEv();
      },
      bindEv: function bindEv() {
        this.node.on("touchmove", Utils.throttle(this.onTouchmove, 100), this);
        this.node.on("touchend", this.onTouchEnd, this);
        this.node.on("touchcancel", this.onTouchEnd, this);
      },
      onTouchmove: function onTouchmove(event) {
        var _event$getDelta = event.getDelta(), x = _event$getDelta.x, y = _event$getDelta.y;
        var delta = Math.sqrt(x * x + y * y);
        if (delta > this.cleanThreshold) {
          this.cleanCount += 1;
          if (this.cleanCount >= this.needCleanCount) {
            this.wiped();
            this.cleanCount = 0;
          }
        }
      },
      onTouchEnd: function onTouchEnd() {
        this.cleanCount = 0;
      },
      wiped: function wiped() {
        var wipedEvent = new cc.Event.EventCustom("wiped", true);
        this.node.dispatchEvent(wipedEvent);
      }
    });
    cc._RF.pop();
  }, {
    utils: "utils"
  } ],
  "zhuge-light": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46641Y5T0tJf7g+TYWjsvqu", "zhuge-light");
    "use strict";
    var Utils = require("utils");
    var Config = require("config");
    var IN_WX = Config.IN_WX;
    var BRIGHT_THRESHOLD = .8;
    cc.Class({
      extends: cc.Component,
      properties: {
        roleLayer: {
          default: null,
          type: cc.Node
        },
        targetRole: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {
        this.passed = false;
        this.targetActive = false;
        this.bindEv();
      },
      bindEv: function bindEv() {
        var _this = this;
        var self = this;
        var roles = this.roleLayer.children;
        roles.forEach(function(role) {
          role.on("touchend", Utils.throttle(_this.onTouch, 500), _this);
        });
      },
      onTouch: function onTouch(event) {
        if (this.passed) return;
        var pos = event.getLocation();
        if (event.target.uuid === this.targetRole.uuid) {
          this.passed = true;
          Utils.menuLock();
          Utils.feedback("yes");
        } else Utils.feedback("no", pos);
      },
      toggleTarget: function toggleTarget() {
        if (this.passed || !this.targetRole) return;
        this.targetActive = !this.targetActive;
        this.targetRole.active = this.targetActive;
      },
      update: function update(dt) {
        var self = this;
        IN_WX && wx.getScreenBrightness && wx.getScreenBrightness({
          success: function success(res) {
            (self.targetActive && res.value < BRIGHT_THRESHOLD || !self.targetActive && res.value >= BRIGHT_THRESHOLD) && self.toggleTarget();
          }
        });
      }
    });
    cc._RF.pop();
  }, {
    config: "config",
    utils: "utils"
  } ]
}, {}, [ "click-propagation", "config", "counter", "draggable", "invertable", "multi-touch", "pressable", "puzzle-title", "scene-list", "shakeable", "swipeable", "utils", "wipeable", "nav", "puzzle-btn-list", "puzzle-btn", "a-year-ago-new", "a-year-ago", "balance", "biggest-fire", "body-temperature", "broken-house", "burst-acne", "car-parked", "click-animals", "click-duck", "click-plane", "combine-largest", "combine-smallest", "cover-money", "cut-hair", "elevator-fall", "find-differences", "find-food", "find-largest", "find-male", "find-palm", "find-pentagon", "find-rainbow", "find-ring", "find-toilet", "green-light", "help-cat", "hide-underwear", "light-lamp", "loading-end", "make-sleep", "make-wind", "milk-cow", "mix-cocktails", "move-cake", "move-vodka", "need-triangle", "open-champagne", "open-door", "open-elevator", "plane", "press-pig", "real-breast", "see-beauty", "shake-cola", "audio-game", "counter-game", "invert-game", "screen-out-game", "wake-up", "win-mayer", "zhuge-light", "audio", "background", "debug", "feedback", "menu", "popup", "device-motion", "facebook-api" ]);
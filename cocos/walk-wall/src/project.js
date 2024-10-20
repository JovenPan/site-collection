window.__require=function e(t,c,n){function o(s,r){if(!c[s]){if(!t[s]){var a=s.split("/");if(a=a[a.length-1],!t[a]){var l="function"==typeof __require&&__require;if(!r&&l)return l(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+s+"'")}}var h=c[s]={exports:{}};t[s][0].call(h.exports,function(e){return o(t[s][1][e]||e)},h,h.exports,e,t,c,n)}return c[s].exports}for(var i="function"==typeof __require&&__require,s=0;s<n.length;s++)o(n[s]);return o}({bgManager:[function(e,t,c){"use strict";cc._RF.push(t,"90caforWK1F94pkxDZidUuF","bgManager");var n=e("config").DOWN_DURATION;cc.Class({extends:cc.Component,properties:{bg:{default:null,type:cc.Node}},onLoad:function(){this.bgHeight=this.bg.height},down:function(e){var t=this,c=cc.moveBy(n,cc.v2(0,-e)).easing(cc.easeSineOut()),o=cc.callFunc(function(){var e=t.node.y,c=t.bgHeight;Math.abs(e)>=c&&(t.node.y=e%c)},this);this.node.runAction(cc.sequence(c,o))}}),cc._RF.pop()},{config:"config"}],config:[function(e,t,c){"use strict";cc._RF.push(t,"3a7f1gu/ctLTZnzNzfbiCg3","config"),t.exports={DOWN_DURATION:.3,JUMP_HEIGHT:600},cc._RF.pop()},{}],game:[function(e,t,c){"use strict";cc._RF.push(t,"2b44exk26JD14sbTO84OFle","game");var n=e("utils");cc.Class({extends:cc.Component,properties:{bgLayer:{default:null,type:cc.Node},wheelLayer:{default:null,type:cc.Node},wallLayer:{default:null,type:cc.Node},role:{default:null,type:cc.Node},prick:{default:null,type:cc.Node},ground:{default:null,type:cc.Node},endPopup:{default:null,type:cc.Node},restartBtn:{default:null,type:cc.Node},score:{default:null,type:cc.Node},bestScore:{default:null,type:cc.Label}},onLoad:function(){this.bgManager=this.bgLayer.getComponent("bgManager"),this.wallManager=this.wallLayer.getComponent("wallManager"),this.wheelManager=this.wheelLayer.getComponent("wheelManager"),this.roleComp=this.role.getComponent("role"),this.roleComp.game=this,this.groundComp=this.ground.getComponent("ground"),this.prickComp=this.prick.getComponent("prick"),this.scoreComp=this.score.getComponent("score"),cc.director.getCollisionManager().enabled=!0},start:function(){this.firstJump=!0,this.gameEnd=!1,this.bindEv()},bindEv:function(){this.node.on("touchend",n.throttle(this.onTouchScreen,500),this),this.restartBtn.on("touchend",n.throttle(this.restart,500),this)},onTouchScreen:function(){if(!this.gameEnd&&"jump"!==this.roleComp.status)if(this.firstJump)this.roleComp.jump(),this.firstJump=!1;else{var e=this.role.convertToWorldSpaceAR(cc.Vec2.ZERO).y;this.scoreComp.add(e),this.wheelManager.createWheel(),this.roleComp.jump(),this.bgManager.down(e),this.wallManager.down(e),this.wheelLayer.children.forEach(function(t){t.getComponent("wheel").down(e)}),this.groundComp.down(e),this.prickComp.down()}},gameOver:function(){var e=this;this.gameEnd=!0,this.prickComp.stop(),this.scheduleOnce(function(){var t=cc.sys.localStorage.getItem("walk_wall_best_score")||0,c=Math.max(t,e.score.getComponent("score").formatScore());e.bestScore.string=c,cc.sys.localStorage.setItem("walk_wall_best_score",c),e.endPopup.active=!0},.2)},restart:function(){cc.director.loadScene("Game")}}),cc._RF.pop()},{utils:"utils"}],ground:[function(e,t,c){"use strict";cc._RF.push(t,"1937doZh+JPdZWCATqruIhD","ground");var n=e("config").DOWN_DURATION;cc.Class({extends:cc.Component,properties:{},start:function(){},down:function(e){if(this.node.active){var t=cc.moveBy(n,cc.v2(0,-e)).easing(cc.easeSineOut());this.node.runAction(t)}},update:function(e){this.node.convertToWorldSpaceAR(cc.Vec2.ZERO).y+this.node.height<0&&(this.node.active=!1)}}),cc._RF.pop()},{config:"config"}],prick:[function(e,t,c){"use strict";cc._RF.push(t,"ce092SO/oxJGrrkfNfCtg29","prick");var n=e("config").DOWN_DURATION;cc.Class({extends:cc.Component,properties:{},start:function(){this.status="stop"},down:function(){var e=this;this.status="stop";var t=this.node.convertToWorldSpaceAR(cc.Vec2.ZERO).y+this.node.height+100,c=cc.moveBy(n,cc.v2(0,-t)).easing(cc.easeSineOut()),o=cc.callFunc(function(){e.status="active"},this);this.node.runAction(cc.sequence(c,o))},stop:function(){this.status="stop",this.node.stopAllActions()},update:function(e){"stop"!==this.status&&(this.node.y+=2)}}),cc._RF.pop()},{config:"config"}],role:[function(e,t,c){"use strict";cc._RF.push(t,"b1cbae5EcFAYqXy61euo/8F","role");var n=e("config"),o=n.DOWN_DURATION,i=n.JUMP_HEIGHT;cc.Class({extends:cc.Component,properties:{roleCenter:{default:null,type:cc.Node},roleLeft:{default:null,type:cc.Node},roleRight:{default:null,type:cc.Node},wall:{default:null,type:cc.Node}},onLoad:function(){this.wallWidth=this.wall.width},jump:function(){var e=this;if(this.status="jump",this.game.firstJump){var t=-(540-this.wallWidth-this.node.width/2+10),c=500-this.game.ground.height,n=cc.moveBy(o,cc.v2(t,c)).easing(cc.easeSineOut()),s=cc.callFunc(function(){e.status="idle",e.rerender()},this);this.node.runAction(cc.sequence(n,s))}else{var r=this.node.convertToWorldSpaceAR(cc.Vec2.ZERO),a=i-r.y,l=cc.moveBy(o,cc.v2(2*-this.node.x,0)).easing(cc.easeSineOut()),h=cc.moveBy(o/3*2,cc.v2(0,a+100)).easing(cc.easeSineInOut()),u=cc.moveBy(o/3*1,cc.v2(0,-100)).easing(cc.easeSineInOut()),d=cc.callFunc(function(){e.status="down",e.rerender()},this);this.node.runAction(cc.sequence(cc.spawn(l,cc.sequence(h,u)),d))}},start:function(){this.status="idle"},update:function(e){"down"===this.status&&(this.node.y-=2)},rerender:function(){this.roleCenter.active=0===this.node.x,this.roleLeft.active=this.node.x<0,this.roleRight.active=this.node.x>0},onCollisionEnter:function(e,t){var c=this;if("dead"!==this.status){this.game.gameOver(),this.status="dead",this.node.stopAllActions();var n=this.node.convertToWorldSpaceAR(cc.Vec2.ZERO).y+this.node.height+100,o=cc.moveBy(1,cc.v2(1.5*-this.node.x,0)).easing(cc.easeSineInOut()),i=cc.moveBy(.25,cc.v2(0,100)).easing(cc.easeSineInOut()),s=cc.moveBy(.75,cc.v2(0,-n)).easing(cc.easeSineInOut()),r=cc.rotateBy(1,this.node.x?-180:180),a=cc.callFunc(function(){c.destroy()},this);this.node.runAction(cc.sequence(cc.spawn(o,cc.sequence(i,s),r),a))}}}),cc._RF.pop()},{config:"config"}],score:[function(e,t,c){"use strict";cc._RF.push(t,"3fe92GtjPRIGpILfuuFUb4n","score");var n=e("config").DOWN_DURATION;cc.Class({extends:cc.Component,properties:{scoreLabel:{default:null,type:cc.Label}},start:function(){this.score=0},getScore:function(){return this.score},rerender:function(){this.scoreLabel.string=this.formatScore()},formatScore:function(){return(this.score/1e3).toFixed(1).toString()},add:function(e){var t=this;this.node.active||(this.node.active=!0),this.schedule(function(){t.score+=e/10,t.rerender()},n/10,10)}}),cc._RF.pop()},{config:"config"}],utils:[function(e,t,c){"use strict";cc._RF.push(t,"4b3afDZQqdHCYH7MXVkVD1l","utils"),t.exports={throttle:function(e,t){var c,n,o,i,s=0,r=function(){s=new Date,o=null,i=e.apply(c,n)};return function(){var a=new Date,l=t-(a-s);return c=this,n=arguments,l<=0?(clearTimeout(o),o=null,s=a,i=e.apply(c,n)):o||(o=setTimeout(r,l)),i}},getRandom:function(e,t){return parseInt(Math.random()*(t-e)+e)}},cc._RF.pop()},{}],wallManager:[function(e,t,c){"use strict";cc._RF.push(t,"e752dKOixVJ+q6I/gOkH4nv","wallManager");var n=e("config").DOWN_DURATION;cc.Class({extends:cc.Component,properties:{wall:{default:null,type:cc.Node}},onLoad:function(){this.wallHeight=this.wall.height},down:function(e){var t=this,c=cc.moveBy(n,cc.v2(0,-e)).easing(cc.easeSineOut()),o=cc.callFunc(function(){var e=t.node.y,c=t.wallHeight;Math.abs(e)>=c&&(t.node.y=e%c)},this);this.node.runAction(cc.sequence(c,o))}}),cc._RF.pop()},{config:"config"}],wheelManager:[function(e,t,c){"use strict";cc._RF.push(t,"2fc86D0G8JG1qxjZHEm8euz","wheelManager");var n=e("utils"),o=e("config").JUMP_HEIGHT,i=[300,600,-300,300,300];cc.Class({extends:cc.Component,properties:{wheelPrefab:cc.Prefab,role:{default:null,type:cc.Node}},onLoad:function(){this.roleHeight=this.role.height,this.wheelPool=new cc.NodePool;for(var e=0;e<2;e++){var t=cc.instantiate(this.wheelPrefab);this.wheelPool.put(t)}},start:function(){this.latestWheel=null,this.index=0,this.createWheel()},createWheel:function(){if(!(this.node.children.length>=3)){var e=this.latestWheel,t=null;t=this.wheelPool.size()>0?this.wheelPool.get():cc.instantiate(this.wheelPrefab);var c=o+this.roleHeight+t.height+200,s=0===this.index?(1080-t.width)/2:-e.x,r=(this.index<=i.length-1?i[this.index]:n.getRandom(200,o))+c+(this.latestWheel?this.latestWheel.y:0);t.position=cc.v2(s,r),t.parent=this.node,t.getComponent("wheel").manager=this,this.latestWheel=t,this.index+=1}},removeWheel:function(e){this.wheelPool.put(e)}}),cc._RF.pop()},{config:"config",utils:"utils"}],wheel:[function(e,t,c){"use strict";cc._RF.push(t,"379fcfDW7dJQ4x0y4D7WC42","wheel");var n=e("config").DOWN_DURATION;cc.Class({extends:cc.Component,properties:{},onLoad:function(){var e=cc.rotateBy(1,360);this.node.runAction(cc.repeatForever(e))},down:function(e){var t=cc.moveBy(n,cc.v2(0,-e)).easing(cc.easeSineOut());this.node.runAction(t)},update:function(e){this.node.convertToWorldSpaceAR(cc.Vec2.ZERO).y+this.node.height/2<0&&this.manager.removeWheel(this.node)}}),cc._RF.pop()},{config:"config"}]},{},["config","utils","bgManager","game","ground","prick","role","score","wallManager","wheel","wheelManager"]);
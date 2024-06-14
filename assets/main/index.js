System.register("chunks:///_virtual/game.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,n,i,r,s,a,l,h,c,p,u,g,y,d,f,b,P,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized,r=e.defineProperty},function(e){s=e.cclegacy,a=e._decorator,l=e.Node,h=e.Prefab,c=e.Label,p=e.Collider2D,u=e.Contact2DType,g=e.director,y=e.Director,d=e.instantiate,f=e.input,b=e.Input,P=e.KeyCode,v=e.Component}],execute:function(){var m,C,D,E,I,R,A,_,w,x,z,L,N,O,T;s._RF.push({},"ff4fdCeUyNIqo+k+ovD//bz","game",void 0);var k=a.ccclass,K=a.property;e("game",(m=k("game"),C=K(l),D=K(l),E=K(l),I=K(h),R=K(c),A=K(l),m((x=t((w=function(e){function t(){for(var t,o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return t=e.call.apply(e,[this].concat(s))||this,n(i(t),"player",x,i(t)),n(i(t),"hensRoot",z,i(t)),n(i(t),"eggsRoot",L,i(t)),n(i(t),"eggPrefab",N,i(t)),n(i(t),"scoreLabel",O,i(t)),n(i(t),"gameOverNode",T,i(t)),r(i(t),"playerPosIndex",2),r(i(t),"hensPosXArr",[]),r(i(t),"score",0),r(i(t),"hp",3),t}o(t,e);var s=t.prototype;return s.initData=function(){for(var e=0;e<this.hensRoot.children.length;e++){var t=this.hensRoot.children[e];this.hensPosXArr[e]=t.position.x}this.oepnCoillder2DEvent(),console.log("@@@this.hensPosXArr",this.hensPosXArr)},s.start=function(){this.initData(),this.openInputEvent(),this.startCreateEggs(),this.renderLabel()},s.oepnCoillder2DEvent=function(){var e=this;this.player.getComponent(p).on(u.BEGIN_CONTACT,(function(t,o,n){g.once(y.EVENT_AFTER_PHYSICS,(function(){o.node.destroy()})),console.log("onBeginContact"),e.score+=1,e.renderLabel()}),this)},s.renderLabel=function(){this.scoreLabel.string="目前得 "+this.score+" 分，生命值"+this.hp},s.startCreateEggs=function(){var e=this;this.schedule((function(){e.createOneEgg()}),2)},s.createOneEgg=function(){if(!(this.hp<0)){var e=Math.floor(5*Math.random()),t=d(this.eggPrefab);this.eggsRoot.addChild(t),t.setPosition(this.hensPosXArr[e],this.hensRoot.position.y)}},s.openInputEvent=function(){f.on(b.EventType.KEY_DOWN,this.onKeyDown,this)},s.movePlayer=function(e){this.playerPosIndex+=e,this.playerPosIndex<0&&(this.playerPosIndex=4),this.playerPosIndex>4&&(this.playerPosIndex=0),this.renderPlayerPos()},s.renderPlayerPos=function(){var e=this.hensPosXArr[this.playerPosIndex],t=this.player.position.y;this.player.setPosition(e,t)},s.onKeyDown=function(e){switch(e.keyCode){case P.KEY_A:console.log("@@@A"),this.movePlayer(-1);break;case P.KEY_D:console.log("@@@D"),this.movePlayer(1)}},s.checkGameOver=function(){return this.hp<1&&(console.log("@@@遊戲結束"),this.gameOverNode.active=!0,!0)},s.update=function(e){for(var t=0;t<this.eggsRoot.children.length;t++){var o=this.eggsRoot.children[t],n=o.position.x,i=o.position.y-150*e;o.setPosition(n,i),i<-600&&(o.destroy(),this.hp-=1,this.checkGameOver())}},t}(v)).prototype,"player",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=t(w.prototype,"hensRoot",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(w.prototype,"eggsRoot",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=t(w.prototype,"eggPrefab",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=t(w.prototype,"scoreLabel",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=t(w.prototype,"gameOverNode",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=w))||_));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./game.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213e8b"],{af4d:function(i,e,t){"use strict";t.r(e),t.d(e,"ion_phaser",(function(){return s}));var n=t("8203");const a="ion-phaser{display:block}",s=class{constructor(i){Object(n["d"])(this,i),this.initialize=!0,this.initializeGame=(i=this.game)=>{if(null!==i&&void 0!==i){if(void 0!==i.instance&&null!==i.instance)throw new Error("A Phaser game already exist");i.parent=i.parent||this.el,i.instance=new Phaser.Game(i)}}}onGameChange(i){this.initialize&&!this.hasInitialized()&&this.initializeGame(i)}onInitialize(i,e){i&&!e&&this.initializeGame()}async getInstance(){const{instance:i}=this.game||{};return Promise.resolve(i)}async destroy(){this.hasInitialized()&&(this.game.instance.destroy(!0),this.game.instance=null)}connectedCallback(){!this.hasInitialized()&&this.initialize&&this.initializeGame()}disconnectedCallback(){this.destroy()}hasInitialized(){return this.game&&void 0!==this.game.instance&&null!==this.game.instance}get el(){return Object(n["b"])(this)}static get watchers(){return{game:["onGameChange"],initialize:["onInitialize"]}}};s.style=a}}]);
//# sourceMappingURL=chunk-2d213e8b.dff9344f.js.map
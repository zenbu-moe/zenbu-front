(function(e){function t(t){for(var c,s,i=t[0],r=t[1],b=t[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,b||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],c=!0,i=1;i<a.length;i++){var r=a[i];0!==n[r]&&(c=!1)}c&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var c={},n={index:0},o=[];function s(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=c,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(a,c,function(t){return e[t]}.bind(null,c));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var l=r;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("017b")},"017b":function(e,t,a){"use strict";a.r(t);var c=a("7a23");function n(e,t,a,n,o,s){const i=Object(c["j"])("navigation"),r=Object(c["j"])("pageContent"),b=Object(c["j"])("footerWrap");return Object(c["g"])(),Object(c["b"])("div",{class:["container",{"site-light-mode":!o.isDarkTheme,"site-dark-mode":o.isDarkTheme}],id:"app"},[Object(c["f"])(i,{onChangeTheme:t[1]||(t[1]=e=>s.changeTheme()),isDark:o.isDarkTheme},null,8,["isDark"]),Object(c["f"])(r),Object(c["f"])(b,{isDark:o.isDarkTheme},null,8,["isDark"])],2)}const o=Object(c["k"])("data-v-57e0c957");Object(c["i"])("data-v-57e0c957");const s={class:"navbar"};Object(c["h"])();const i=o((e,t,a,n,o,i)=>{const r=Object(c["j"])("navleft"),b=Object(c["j"])("navright");return Object(c["g"])(),Object(c["b"])("div",s,[Object(c["f"])(r),Object(c["f"])(b,{onChangeTheme:t[1]||(t[1]=t=>e.$emit("change-theme")),isDark:a.isDark,onOpenPopup:t[2]||(t[2]=t=>e.$emit("open-popup",e.id))},null,8,["isDark"])])});var r=a("94e9"),b=a.n(r);const l=Object(c["k"])("data-v-c7295520");Object(c["i"])("data-v-c7295520");const f={class:"navleft"},d=Object(c["f"])("div",{class:"logo"},[Object(c["f"])("a",{href:""},[Object(c["f"])("img",{src:b.a,alt:"Zenbu"})])],-1);Object(c["h"])();const u=l((e,t,a,n,o,s)=>(Object(c["g"])(),Object(c["b"])("div",f,[d])));var p={name:"navleft",components:{}};a("b747");p.render=u,p.__scopeId="data-v-c7295520";var O=p;const j=Object(c["k"])("data-v-46c15255");Object(c["i"])("data-v-46c15255");const h={class:"navright"},v=Object(c["f"])("i",{class:"fal fa-moon"},null,-1),g=Object(c["f"])("i",{class:"fas fa-moon"},null,-1),m=Object(c["f"])("a",{href:"https://discord.gg/mVpKe4y"},[Object(c["f"])("i",{class:"fab fa-discord"})],-1),k=Object(c["f"])("a",{href:"https://github.com/zenbu-moe"},[Object(c["f"])("i",{class:"fab fa-github"})],-1);Object(c["h"])();const y=j((e,t,a,n,o,s)=>(Object(c["g"])(),Object(c["b"])("div",h,[a.isDark?Object(c["c"])("",!0):(Object(c["g"])(),Object(c["b"])("a",{key:0,onClick:t[1]||(t[1]=t=>e.$emit("change-theme")),class:"dark"},[v])),a.isDark?(Object(c["g"])(),Object(c["b"])("a",{key:1,onClick:t[2]||(t[2]=t=>e.$emit("change-theme")),class:"dark"},[g])):Object(c["c"])("",!0),m,k])));var w={name:"navright",components:{},props:["isDark"],data(){return{profileDropdownVisible:!1,messageDropdownVisible:!1,notifDropdownVisible:!1}},methods:{setProfileVisible(){this.profileDropdownVisible=!this.profileDropdownVisible}}};a("5213");w.render=y,w.__scopeId="data-v-46c15255";var D=w,x={name:"navigation",components:{navleft:O,navright:D},props:["isDark"],data(){return{isOverlayVisible:!0}}};a("3bdb");x.render=i,x.__scopeId="data-v-57e0c957";var _=x,T=a("068d"),V=a.n(T),P=a("7052"),C=a.n(P),I=a("85b6"),M=a.n(I);const S=Object(c["k"])("data-v-66b3c664");Object(c["i"])("data-v-66b3c664");const Z={class:"page-content"},z=Object(c["f"])("div",{class:"title-wrap","data-aos":"fade-down"},[Object(c["f"])("div",{class:"launch"},[Object(c["f"])("p",null,"COMING SOON")]),Object(c["f"])("div",{class:"text-box"},[Object(c["f"])("h1",null,"Discover and track your anime."),Object(c["f"])("h1",null,"In an old way. On a new platform.")]),Object(c["f"])("hr"),Object(c["f"])("div",{class:"dictionary"},[Object(c["f"])("p",null,[Object(c["f"])("strong",null,"Zenbu"),Object(c["e"])(" (全部) - "),Object(c["f"])("i",null,"jap. noun"),Object(c["e"])(),Object(c["f"])("strong",null,"everything")])]),Object(c["f"])("hr"),Object(c["f"])("div",{class:"text-box wrap"},[Object(c["f"])("p",null,[Object(c["e"])("Discover new anime and keep track of old shows. Find your community or make one. Be in the spotlight or track privately. You can do "),Object(c["f"])("i",null,"everything"),Object(c["e"])(". On "),Object(c["f"])("i",null,"Zenbu.")])]),Object(c["f"])("a",{class:"wip bottom",href:"https://github.com/zenbu-moe"},[Object(c["f"])("i",{class:"fab fa-github"}),Object(c["f"])("p",null,"Visit our GitHub")]),Object(c["f"])("img",{class:"site-pictures",src:V.a})],-1),$=Object(c["f"])("div",{class:"showcase",id:"showcase"},[Object(c["f"])("div",{class:"showcase-item","data-aos":"fade-left"},[Object(c["f"])("div",{class:"info"},[Object(c["f"])("h2",null,"Modern design. Simple and responsive layout."),Object(c["f"])("p",null," Zenbu is a modern platform, so, naturally, it comes with a modern look and feel. It is easy to navigate, and just makes sense. Zenbu also offers a mobile site that makes you want to keep using it. ")]),Object(c["f"])("div",null,[Object(c["f"])("video",{loop:"",muted:"",autoplay:"",class:"image"},[Object(c["f"])("source",{src:C.a})])])]),Object(c["f"])("hr"),Object(c["f"])("div",{class:"showcase-item","data-aos":"fade-right"},[Object(c["f"])("div",null,[Object(c["f"])("video",{loop:"",muted:"",autoplay:"",class:"image"},[Object(c["f"])("source",{src:M.a})])]),Object(c["f"])("div",{class:"info"},[Object(c["f"])("h2",null,"Make your page your own."),Object(c["f"])("p",null," User pages feature a fully customizable grid layout with an option of disabling absolutely everything (including even the social feed), allowing users to tweak their experience to their own tastes. ")])]),Object(c["f"])("hr"),Object(c["f"])("a",{class:"wip top",style:{width:"380px"},href:"https://github.com/zenbu-moe"},[Object(c["f"])("i",{class:"fab fa-github"}),Object(c["f"])("p",null,"More features in development")])],-1);Object(c["h"])();const G=S((e,t,a,n,o,s)=>(Object(c["g"])(),Object(c["b"])("div",Z,[z,$])));var J=a("f5af"),K=a.n(J),N=(a("e829"),{name:"pageContent",created(){K.a.init()}});a("8b95");N.render=G,N.__scopeId="data-v-66b3c664";var W=N,A=a("9b15"),B=a.n(A);const F=Object(c["k"])("data-v-12e154d4");Object(c["i"])("data-v-12e154d4");const H={class:"footer"},U={class:"wrap"},Y={class:"logo"},q={key:0,src:b.a},E={key:1,src:B.a},L=Object(c["d"])('<div class="actions" data-v-12e154d4><a class="button" href="https://discord.gg/mVpKe4y" data-v-12e154d4><i class="fab fa-discord" data-v-12e154d4></i><p data-v-12e154d4>Discord</p></a><a class="button" href="https://github.com/zenbu-moe" data-v-12e154d4><i class="fab fa-github" data-v-12e154d4></i><p data-v-12e154d4>Github</p></a></div>',1),Q=Object(c["f"])("hr",{style:{opacity:"0.3"}},null,-1),R=Object(c["f"])("div",{class:"copyright"},[Object(c["f"])("p",null," © Zenbu 2021. All rights reserved.")],-1);Object(c["h"])();const X=F((e,t,a,n,o,s)=>(Object(c["g"])(),Object(c["b"])("div",H,[Object(c["f"])("div",U,[Object(c["f"])("div",Y,[a.isDark?(Object(c["g"])(),Object(c["b"])("img",q)):Object(c["c"])("",!0),a.isDark?Object(c["c"])("",!0):(Object(c["g"])(),Object(c["b"])("img",E))]),L]),Q,R])));var ee={name:"footer",props:["isDark"]};a("e39e");ee.render=X,ee.__scopeId="data-v-12e154d4";var te=ee,ae={name:"app",components:{navigation:_,pageContent:W,footerWrap:te},data(){return{isDarkTheme:!1}},methods:{changeTheme(){this.isDarkTheme=!this.isDarkTheme}}};a("4f68");ae.render=n;var ce=ae;Object(c["a"])(ce).mount("#app")},"068d":function(e,t,a){e.exports=a.p+"img/layout.af92890a.png"},3749:function(e,t,a){},"3bdb":function(e,t,a){"use strict";a("3749")},"4f68":function(e,t,a){"use strict";a("f47e")},5213:function(e,t,a){"use strict";a("aae1")},7052:function(e,t,a){e.exports=a.p+"media/layout.bcee4481.mp4"},8360:function(e,t,a){},"85b6":function(e,t,a){e.exports=a.p+"media/about.772b31c2.mp4"},"8b95":function(e,t,a){"use strict";a("ed2c")},"8cee":function(e,t,a){},"94e9":function(e,t,a){e.exports=a.p+"img/logo_light.d8dec212.png"},"9b15":function(e,t,a){e.exports=a.p+"img/logo_dark.beffbf7c.png"},aae1:function(e,t,a){},b747:function(e,t,a){"use strict";a("8360")},e39e:function(e,t,a){"use strict";a("8cee")},ed2c:function(e,t,a){},f47e:function(e,t,a){}});
//# sourceMappingURL=index.cba48038.js.map
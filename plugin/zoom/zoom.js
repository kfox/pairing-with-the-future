!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).RevealZoom=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},n=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),r={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=u,a=Function.prototype.call,l=c?a.bind(a):function(){return a.apply(a,arguments)},f={},s={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,p=d&&!s.call({1:2},1);f.f=p?function(t){var e=d(this,t);return!!e&&e.enumerable}:s;var y,g,m=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},b=u,v=Function.prototype,h=v.bind,w=v.call,x=b&&h.bind(w,w),O=b?function(t){return t&&x(t)}:function(t){return t&&function(){return w.apply(t,arguments)}},S=O,E=S({}.toString),j=S("".slice),I=function(t){return j(E(t),8,-1)},P=O,T=o,R=I,C=n.Object,z=P("".split),L=T((function(){return!C("z").propertyIsEnumerable(0)}))?function(t){return"String"==R(t)?z(t,""):C(t)}:C,k=n.TypeError,A=function(t){if(null==t)throw k("Can't call method on "+t);return t},M=L,F=A,_=function(t){return M(F(t))},N=function(t){return"function"==typeof t},D=N,W=function(t){return"object"==typeof t?null!==t:D(t)},Y=n,K=N,X=function(t){return K(t)?t:void 0},B=function(t,e){return arguments.length<2?X(Y[t]):Y[t]&&Y[t][e]},H=O({}.isPrototypeOf),U=n,G=B("navigator","userAgent")||"",$=U.process,q=U.Deno,V=$&&$.versions||q&&q.version,Z=V&&V.v8;Z&&(g=(y=Z.split("."))[0]>0&&y[0]<4?1:+(y[0]+y[1])),!g&&G&&(!(y=G.match(/Edge\/(\d+)/))||y[1]>=74)&&(y=G.match(/Chrome\/(\d+)/))&&(g=+y[1]);var J=g,Q=o,tt=!!Object.getOwnPropertySymbols&&!Q((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&J&&J<41})),et=tt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,nt=B,rt=N,ot=H,it=et,ut=n.Object,ct=it?function(t){return"symbol"==typeof t}:function(t){var e=nt("Symbol");return rt(e)&&ot(e.prototype,ut(t))},at=n.String,lt=N,ft=function(t){try{return at(t)}catch(t){return"Object"}},st=n.TypeError,dt=function(t){if(lt(t))return t;throw st(ft(t)+" is not a function")},pt=l,yt=N,gt=W,mt=n.TypeError,bt={exports:{}},vt=n,ht=Object.defineProperty,wt=function(t,e){try{ht(vt,t,{value:e,configurable:!0,writable:!0})}catch(n){vt[t]=e}return e},xt=wt,Ot="__core-js_shared__",St=n[Ot]||xt(Ot,{}),Et=St;(bt.exports=function(t,e){return Et[t]||(Et[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var jt=A,It=n.Object,Pt=function(t){return It(jt(t))},Tt=O({}.hasOwnProperty),Rt=Object.hasOwn||function(t,e){return Tt(Pt(t),e)},Ct=O,zt=0,Lt=Math.random(),kt=Ct(1..toString),At=function(t){return"Symbol("+(void 0===t?"":t)+")_"+kt(++zt+Lt,36)},Mt=n,Ft=bt.exports,_t=Rt,Nt=At,Dt=tt,Wt=et,Yt=Ft("wks"),Kt=Mt.Symbol,Xt=Kt&&Kt.for,Bt=Wt?Kt:Kt&&Kt.withoutSetter||Nt,Ht=function(t){if(!_t(Yt,t)||!Dt&&"string"!=typeof Yt[t]){var e="Symbol."+t;Dt&&_t(Kt,t)?Yt[t]=Kt[t]:Yt[t]=Wt&&Xt?Xt(e):Bt(e)}return Yt[t]},Ut=l,Gt=W,$t=ct,qt=function(t,e){var n=t[e];return null==n?void 0:dt(n)},Vt=function(t,e){var n,r;if("string"===e&&yt(n=t.toString)&&!gt(r=pt(n,t)))return r;if(yt(n=t.valueOf)&&!gt(r=pt(n,t)))return r;if("string"!==e&&yt(n=t.toString)&&!gt(r=pt(n,t)))return r;throw mt("Can't convert object to primitive value")},Zt=Ht,Jt=n.TypeError,Qt=Zt("toPrimitive"),te=function(t,e){if(!Gt(t)||$t(t))return t;var n,r=qt(t,Qt);if(r){if(void 0===e&&(e="default"),n=Ut(r,t,e),!Gt(n)||$t(n))return n;throw Jt("Can't convert object to primitive value")}return void 0===e&&(e="number"),Vt(t,e)},ee=ct,ne=function(t){var e=te(t,"string");return ee(e)?e:e+""},re=W,oe=n.document,ie=re(oe)&&re(oe.createElement),ue=function(t){return ie?oe.createElement(t):{}},ce=ue,ae=!i&&!o((function(){return 7!=Object.defineProperty(ce("div"),"a",{get:function(){return 7}}).a})),le=i,fe=l,se=f,de=m,pe=_,ye=ne,ge=Rt,me=ae,be=Object.getOwnPropertyDescriptor;r.f=le?be:function(t,e){if(t=pe(t),e=ye(e),me)try{return be(t,e)}catch(t){}if(ge(t,e))return de(!fe(se.f,t,e),t[e])};var ve={},he=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),we=n,xe=W,Oe=we.String,Se=we.TypeError,Ee=function(t){if(xe(t))return t;throw Se(Oe(t)+" is not an object")},je=i,Ie=ae,Pe=he,Te=Ee,Re=ne,Ce=n.TypeError,ze=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,ke="enumerable",Ae="configurable",Me="writable";ve.f=je?Pe?function(t,e,n){if(Te(t),e=Re(e),Te(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Me in n&&!n.writable){var r=Le(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Ae in n?n.configurable:r.configurable,enumerable:ke in n?n.enumerable:r.enumerable,writable:!1})}return ze(t,e,n)}:ze:function(t,e,n){if(Te(t),e=Re(e),Te(n),Ie)try{return ze(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ce("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Fe=ve,_e=m,Ne=i?function(t,e,n){return Fe.f(t,e,_e(1,n))}:function(t,e,n){return t[e]=n,t},De={exports:{}},We=N,Ye=St,Ke=O(Function.toString);We(Ye.inspectSource)||(Ye.inspectSource=function(t){return Ke(t)});var Xe,Be,He,Ue=Ye.inspectSource,Ge=N,$e=Ue,qe=n.WeakMap,Ve=Ge(qe)&&/native code/.test($e(qe)),Ze=bt.exports,Je=At,Qe=Ze("keys"),tn=function(t){return Qe[t]||(Qe[t]=Je(t))},en={},nn=Ve,rn=n,on=O,un=W,cn=Ne,an=Rt,ln=St,fn=tn,sn=en,dn="Object already initialized",pn=rn.TypeError,yn=rn.WeakMap;if(nn||ln.state){var gn=ln.state||(ln.state=new yn),mn=on(gn.get),bn=on(gn.has),vn=on(gn.set);Xe=function(t,e){if(bn(gn,t))throw new pn(dn);return e.facade=t,vn(gn,t,e),e},Be=function(t){return mn(gn,t)||{}},He=function(t){return bn(gn,t)}}else{var hn=fn("state");sn[hn]=!0,Xe=function(t,e){if(an(t,hn))throw new pn(dn);return e.facade=t,cn(t,hn,e),e},Be=function(t){return an(t,hn)?t[hn]:{}},He=function(t){return an(t,hn)}}var wn={set:Xe,get:Be,has:He,enforce:function(t){return He(t)?Be(t):Xe(t,{})},getterFor:function(t){return function(e){var n;if(!un(e)||(n=Be(e)).type!==t)throw pn("Incompatible receiver, "+t+" required");return n}}},xn=i,On=Rt,Sn=Function.prototype,En=xn&&Object.getOwnPropertyDescriptor,jn=On(Sn,"name"),In=jn&&"something"===function(){}.name,Pn=jn&&(!xn||xn&&En(Sn,"name").configurable),Tn=n,Rn=N,Cn=Rt,zn=Ne,Ln=wt,kn=Ue,An={EXISTS:jn,PROPER:In,CONFIGURABLE:Pn}.CONFIGURABLE,Mn=wn.get,Fn=wn.enforce,_n=String(String).split("String");(De.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,u=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet,a=r&&void 0!==r.name?r.name:e;Rn(n)&&("Symbol("===String(a).slice(0,7)&&(a="["+String(a).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Cn(n,"name")||An&&n.name!==a)&&zn(n,"name",a),(o=Fn(n)).source||(o.source=_n.join("string"==typeof a?a:""))),t!==Tn?(i?!c&&t[e]&&(u=!0):delete t[e],u?t[e]=n:zn(t,e,n)):u?t[e]=n:Ln(e,n)})(Function.prototype,"toString",(function(){return Rn(this)&&Mn(this).source||kn(this)}));var Nn={},Dn=Math.ceil,Wn=Math.floor,Yn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Wn:Dn)(e)},Kn=Yn,Xn=Math.max,Bn=Math.min,Hn=Yn,Un=Math.min,Gn=function(t){return t>0?Un(Hn(t),9007199254740991):0},$n=_,qn=function(t,e){var n=Kn(t);return n<0?Xn(n+e,0):Bn(n,e)},Vn=function(t){return Gn(t.length)},Zn=function(t){return function(e,n,r){var o,i=$n(e),u=Vn(i),c=qn(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},Jn={includes:Zn(!0),indexOf:Zn(!1)},Qn=Rt,tr=_,er=Jn.indexOf,nr=en,rr=O([].push),or=function(t,e){var n,r=tr(t),o=0,i=[];for(n in r)!Qn(nr,n)&&Qn(r,n)&&rr(i,n);for(;e.length>o;)Qn(r,n=e[o++])&&(~er(i,n)||rr(i,n));return i},ir=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ur=or,cr=ir.concat("length","prototype");Nn.f=Object.getOwnPropertyNames||function(t){return ur(t,cr)};var ar={};ar.f=Object.getOwnPropertySymbols;var lr=B,fr=Nn,sr=ar,dr=Ee,pr=O([].concat),yr=lr("Reflect","ownKeys")||function(t){var e=fr.f(dr(t)),n=sr.f;return n?pr(e,n(t)):e},gr=Rt,mr=yr,br=r,vr=ve,hr=o,wr=N,xr=/#|\.prototype\./,Or=function(t,e){var n=Er[Sr(t)];return n==Ir||n!=jr&&(wr(e)?hr(e):!!e)},Sr=Or.normalize=function(t){return String(t).replace(xr,".").toLowerCase()},Er=Or.data={},jr=Or.NATIVE="N",Ir=Or.POLYFILL="P",Pr=Or,Tr=n,Rr=r.f,Cr=Ne,zr=De.exports,Lr=wt,kr=function(t,e,n){for(var r=mr(e),o=vr.f,i=br.f,u=0;u<r.length;u++){var c=r[u];gr(t,c)||n&&gr(n,c)||o(t,c,i(e,c))}},Ar=Pr,Mr={};Mr[Ht("toStringTag")]="z";var Fr=n,_r="[object z]"===String(Mr),Nr=N,Dr=I,Wr=Ht("toStringTag"),Yr=Fr.Object,Kr="Arguments"==Dr(function(){return arguments}()),Xr=_r?Dr:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Yr(t),Wr))?n:Kr?Dr(e):"Object"==(r=Dr(e))&&Nr(e.callee)?"Arguments":r},Br=n.String,Hr=Ee,Ur=o,Gr=n.RegExp,$r=Ur((function(){var t=Gr("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),qr=$r||Ur((function(){return!Gr("a","y").sticky})),Vr={BROKEN_CARET:$r||Ur((function(){var t=Gr("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:qr,UNSUPPORTED_Y:$r},Zr={},Jr=or,Qr=ir,to=Object.keys||function(t){return Jr(t,Qr)},eo=i,no=he,ro=ve,oo=Ee,io=_,uo=to;Zr.f=eo&&!no?Object.defineProperties:function(t,e){oo(t);for(var n,r=io(e),o=uo(e),i=o.length,u=0;i>u;)ro.f(t,n=o[u++],r[n]);return t};var co,ao=B("document","documentElement"),lo=Ee,fo=Zr,so=ir,po=en,yo=ao,go=ue,mo=tn("IE_PROTO"),bo=function(){},vo=function(t){return"<script>"+t+"</"+"script>"},ho=function(t){t.write(vo("")),t.close();var e=t.parentWindow.Object;return t=null,e},wo=function(){try{co=new ActiveXObject("htmlfile")}catch(t){}var t,e;wo="undefined"!=typeof document?document.domain&&co?ho(co):((e=go("iframe")).style.display="none",yo.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(vo("document.F=Object")),t.close(),t.F):ho(co);for(var n=so.length;n--;)delete wo.prototype[so[n]];return wo()};po[mo]=!0;var xo,Oo,So=Object.create||function(t,e){var n;return null!==t?(bo.prototype=lo(t),n=new bo,bo.prototype=null,n[mo]=t):n=wo(),void 0===e?n:fo.f(n,e)},Eo=o,jo=n.RegExp,Io=Eo((function(){var t=jo(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Po=o,To=n.RegExp,Ro=Po((function(){var t=To("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Co=l,zo=O,Lo=function(t){if("Symbol"===Xr(t))throw TypeError("Cannot convert a Symbol value to a string");return Br(t)},ko=function(){var t=Hr(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Ao=Vr,Mo=bt.exports,Fo=So,_o=wn.get,No=Io,Do=Ro,Wo=Mo("native-string-replace",String.prototype.replace),Yo=RegExp.prototype.exec,Ko=Yo,Xo=zo("".charAt),Bo=zo("".indexOf),Ho=zo("".replace),Uo=zo("".slice),Go=(Oo=/b*/g,Co(Yo,xo=/a/,"a"),Co(Yo,Oo,"a"),0!==xo.lastIndex||0!==Oo.lastIndex),$o=Ao.BROKEN_CARET,qo=void 0!==/()??/.exec("")[1];(Go||qo||$o||No||Do)&&(Ko=function(t){var e,n,r,o,i,u,c,a=this,l=_o(a),f=Lo(t),s=l.raw;if(s)return s.lastIndex=a.lastIndex,e=Co(Ko,s,f),a.lastIndex=s.lastIndex,e;var d=l.groups,p=$o&&a.sticky,y=Co(ko,a),g=a.source,m=0,b=f;if(p&&(y=Ho(y,"y",""),-1===Bo(y,"g")&&(y+="g"),b=Uo(f,a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==Xo(f,a.lastIndex-1))&&(g="(?: "+g+")",b=" "+b,m++),n=new RegExp("^(?:"+g+")",y)),qo&&(n=new RegExp("^"+g+"$(?!\\s)",y)),Go&&(r=a.lastIndex),o=Co(Yo,p?n:a,b),p?o?(o.input=Uo(o.input,m),o[0]=Uo(o[0],m),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:Go&&o&&(a.lastIndex=a.global?o.index+o[0].length:r),qo&&o&&o.length>1&&Co(Wo,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&d)for(o.groups=u=Fo(null),i=0;i<d.length;i++)u[(c=d[i])[0]]=o[c[1]];return o});(function(t,e){var n,r,o,i,u,c=t.target,a=t.global,l=t.stat;if(n=a?Tr:l?Tr[c]||Lr(c,{}):(Tr[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(u=Rr(n,r))&&u.value:n[r],!Ar(a?r:c+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;kr(i,o)}(t.sham||o&&o.sham)&&Cr(i,"sham",!0),zr(n,r,i,t)}})({target:"RegExp",proto:!0,forced:/./.exec!==Ko},{exec:Ko});
/*!
	 * reveal.js Zoom plugin
	 */
var Vo={id:"zoom",init:function(t){t.getRevealElement().addEventListener("mousedown",(function(e){var n=/Linux/.test(window.navigator.platform)?"ctrl":"alt",r=(t.getConfig().zoomKey?t.getConfig().zoomKey:n)+"Key",o=t.getConfig().zoomLevel?t.getConfig().zoomLevel:2;e[r]&&!t.isOverview()&&(e.preventDefault(),Zo.to({x:e.clientX,y:e.clientY,scale:o,pan:!1}))}))},destroy:function(){Zo.reset()}},Zo=function(){var t=1,e=0,n=0,r=-1,o=-1,i="transform"in document.body.style;function u(e,n){var r=a();if(e.width=e.width||1,e.height=e.height||1,e.x-=(window.innerWidth-e.width*n)/2,e.y-=(window.innerHeight-e.height*n)/2,i)if(1===n)document.body.style.transform="";else{var o=r.x+"px "+r.y+"px",u="translate("+-e.x+"px,"+-e.y+"px) scale("+n+")";document.body.style.transformOrigin=o,document.body.style.transform=u}else 1===n?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(r.x+e.x)/n+"px",document.body.style.top=-(r.y+e.y)/n+"px",document.body.style.width=100*n+"%",document.body.style.height=100*n+"%",document.body.style.zoom=n);t=n,document.documentElement.classList&&(1!==t?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function c(){var r=.12*window.innerWidth,o=.12*window.innerHeight,i=a();n<o?window.scroll(i.x,i.y-14/t*(1-n/o)):n>window.innerHeight-o&&window.scroll(i.x,i.y+(1-(window.innerHeight-n)/o)*(14/t)),e<r?window.scroll(i.x-14/t*(1-e/r),i.y):e>window.innerWidth-r&&window.scroll(i.x+(1-(window.innerWidth-e)/r)*(14/t),i.y)}function a(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}}return i&&(document.body.style.transition="transform 0.8s ease"),document.addEventListener("keyup",(function(e){1!==t&&27===e.keyCode&&Zo.out()})),document.addEventListener("mousemove",(function(r){1!==t&&(e=r.clientX,n=r.clientY)})),{to:function(e){if(1!==t)Zo.out();else{if(e.x=e.x||0,e.y=e.y||0,e.element){var n=e.element.getBoundingClientRect();e.x=n.left-20,e.y=n.top-20,e.width=n.width+40,e.height=n.height+40}void 0!==e.width&&void 0!==e.height&&(e.scale=Math.max(Math.min(window.innerWidth/e.width,window.innerHeight/e.height),1)),e.scale>1&&(e.x*=e.scale,e.y*=e.scale,u(e,e.scale),!1!==e.pan&&(r=setTimeout((function(){o=setInterval(c,1e3/60)}),800)))}},out:function(){clearTimeout(r),clearInterval(o),u({x:0,y:0},1),t=1},magnify:function(t){this.to(t)},reset:function(){this.out()},zoomLevel:function(){return t}}}();return function(){return Vo}}));
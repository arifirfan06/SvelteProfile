import{s as H,k as q,e as g,a as L,t as I,c as _,l as A,g as R,b as P,f,d as O,o as r,q as D,i as x,h as w,p as T}from"../chunks/scheduler.Bso-5iR9.js";import{S as j,i as B,c as G,a as N,m as V,t as z,b as J,d as K}from"../chunks/index.DVUUAQG0.js";import{A as Q}from"../chunks/AuthCheck.BcyXFMdR.js";import{c as W,u as X,r as Y,d as Z,e as ee,g as te,f as se,h as ae,i as le}from"../chunks/firebase.z92QYSMm.js";function F(c){let t,n="Uploading...",s,a;return{c(){t=g("p"),t.textContent=n,s=L(),a=g("progress"),this.h()},l(e){t=_(e,"P",{"data-svelte-h":!0}),A(t)!=="svelte-be0b5h"&&(t.textContent=n),s=R(e),a=_(e,"PROGRESS",{class:!0}),P(a).forEach(f),this.h()},h(){r(a,"class","progress progress-info w-56 mt-6")},m(e,o){x(e,t,o),x(e,s,o),x(e,a,o)},d(e){e&&(f(t),f(s),f(a))}}}function re(c){let t,n="Upload a Profile Photo",s,a,e,o,b,U,u,v='<span class="label-text">Pick a file</span>',C,h,y,k,d,$,E,M,i=c[2]&&F();return{c(){t=g("h2"),t.textContent=n,s=L(),a=g("form"),e=g("div"),o=g("img"),U=L(),u=g("label"),u.innerHTML=v,C=L(),h=g("input"),y=L(),i&&i.c(),k=L(),d=g("a"),$=I("Finish"),this.h()},l(l){t=_(l,"H2",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-1whglfv"&&(t.textContent=n),s=R(l),a=_(l,"FORM",{class:!0});var p=P(a);e=_(p,"DIV",{class:!0});var m=P(e);o=_(m,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),U=R(m),u=_(m,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),A(u)!=="svelte-pgn15e"&&(u.innerHTML=v),C=R(m),h=_(m,"INPUT",{name:!0,type:!0,class:!0,accept:!0}),y=R(m),i&&i.l(m),m.forEach(f),p.forEach(f),k=R(l),d=_(l,"A",{href:!0,class:!0});var S=P(d);$=O(S,"Finish"),S.forEach(f),this.h()},h(){var l;r(t,"class","card-title"),D(o.src,b=c[1]??((l=c[0])==null?void 0:l.photoURL)??"/user.png")||r(o,"src",b),r(o,"alt","photoURL"),r(o,"width","256"),r(o,"height","256"),r(o,"class","mx-auto"),r(u,"for","photoURL"),r(u,"class","label"),r(h,"name","photoURL"),r(h,"type","file"),r(h,"class","file-input file-input-bordered w-full max-w-xs"),r(h,"accept","image/png, image/jpeg, image/gif, image/webp"),r(e,"class","form-control w-full max-w-xs my-10 mx-auto text-center"),r(a,"class","max-w-screen-md w-full"),r(d,"href",c[3]),r(d,"class","btn btn-primary")},m(l,p){x(l,t,p),x(l,s,p),x(l,a,p),w(a,e),w(e,o),w(e,U),w(e,u),w(e,C),w(e,h),w(e,y),i&&i.m(e,null),x(l,k,p),x(l,d,p),w(d,$),E||(M=T(h,"change",c[4]),E=!0)},p(l,p){var m;p&3&&!D(o.src,b=l[1]??((m=l[0])==null?void 0:m.photoURL)??"/user.png")&&r(o,"src",b),l[2]?i||(i=F(),i.c(),i.m(e,null)):i&&(i.d(1),i=null),p&8&&r(d,"href",l[3])},d(l){l&&(f(t),f(s),f(a),f(k),f(d)),i&&i.d(),E=!1,M()}}}function oe(c){let t,n;return t=new Q({props:{$$slots:{default:[re]},$$scope:{ctx:c}}}),{c(){G(t.$$.fragment)},l(s){N(t.$$.fragment,s)},m(s,a){V(t,s,a),n=!0},p(s,[a]){const e={};a&79&&(e.$$scope={dirty:a,ctx:s}),t.$set(e)},i(s){n||(z(t.$$.fragment,s),n=!0)},o(s){J(t.$$.fragment,s),n=!1},d(s){K(t,s)}}}function ne(c,t,n){let s,a,e;q(c,W,u=>n(5,a=u)),q(c,X,u=>n(0,e=u));let o,b=!1;async function U(u){n(2,b=!0);const v=u.target.files[0];n(1,o=URL.createObjectURL(v));const C=Y(Z,`users/${a.uid}/profile.png`),h=await ee(C,v),y=await te(h.ref);await se(ae(le,"users",a.uid),{photoURL:y}),n(2,b=!1)}return c.$$.update=()=>{c.$$.dirty&1&&n(3,s=`/${e==null?void 0:e.username}/edit`)},[e,o,b,s,U]}class pe extends j{constructor(t){super(),B(this,t,ne,oe,H,{})}}export{pe as component};
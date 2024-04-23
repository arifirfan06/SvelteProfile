import{k as V,q as W,l as X,m as Y,n as Z,i as ee}from"../chunks/firebase.z92QYSMm.js";import{H as te}from"../chunks/control.CYgJF_JY.js";import{s as se,e as w,a as y,t as P,G as ae,c as $,f as d,g as R,b as j,d as A,o as m,q as B,h as _,i as C,j as D,H as ne,I as oe}from"../chunks/scheduler.Bso-5iR9.js";import{S as le,i as re,t as H,e as ie,b as G,c as ce,a as ue,m as me,d as _e,g as fe}from"../chunks/index.DVUUAQG0.js";import{e as N,U as he,g as pe,a as de}from"../chunks/UserLink.BV0RGjwU.js";function F(l,n){throw new te(l,n)}new TextEncoder;const ge=async({params:l})=>{var c,p;const n=V(ee,"users"),r=W(n,Y("username","==",l.username),X(1)),i=await Z(r),u=(c=i.docs[0])==null?void 0:c.exists(),e=(p=i.docs[0])==null?void 0:p.data();if(!u)throw F(404,"that user does not exist!");if(!e.published)throw F(403,`The profile of @${e.username} is not public!`);return{username:e.username,photoURL:e.photoURL,bio:e.bio,links:e.links??[]}},Ue=Object.freeze(Object.defineProperty({__proto__:null,load:ge},Symbol.toStringTag,{value:"Module"}));function J(l,n,r){const i=l.slice();return i[1]=n[r],i}function K(l){let n,r;const i=[l[1]];let u={};for(let e=0;e<i.length;e+=1)u=oe(u,i[e]);return n=new he({props:u}),{c(){ce(n.$$.fragment)},l(e){ue(n.$$.fragment,e)},m(e,c){me(n,e,c),r=!0},p(e,c){const p=c&1?pe(i,[de(e[1])]):{};n.$set(p)},i(e){r||(H(n.$$.fragment,e),r=!0)},o(e){G(n.$$.fragment,e),r=!1},d(e){_e(n,e)}}}function be(l){let n,r,i,u,e,c,p,L=l[0].username+"",U,M,f,x,S,k,E=(l[0].bio??"no bio yet...")+"",q,T,g,h;document.title=n="@"+l[0].username+" Links";let b=N(l[0].links),a=[];for(let t=0;t<b.length;t+=1)a[t]=K(J(l,b,t));const Q=t=>G(a[t],1,1,()=>{a[t]=null});return{c(){r=w("meta"),u=y(),e=w("main"),c=w("h1"),p=P("@"),U=P(L),M=y(),f=w("img"),S=y(),k=w("p"),q=P(E),T=y(),g=w("ul");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){const o=ae("svelte-2pftis",document.head);r=$(o,"META",{name:!0,content:!0}),o.forEach(d),u=R(t),e=$(t,"MAIN",{class:!0});var s=j(e);c=$(s,"H1",{class:!0});var v=j(c);p=A(v,"@"),U=A(v,L),v.forEach(d),M=R(s),f=$(s,"IMG",{src:!0,alt:!0,width:!0,class:!0}),S=R(s),k=$(s,"P",{class:!0});var O=j(k);q=A(O,E),O.forEach(d),T=R(s),g=$(s,"UL",{class:!0});var z=j(g);for(let I=0;I<a.length;I+=1)a[I].l(z);z.forEach(d),s.forEach(d),this.h()},h(){m(r,"name","description"),m(r,"content",i=l[0].bio),m(c,"class","text-7xl text-purple-500"),B(f.src,x=l[0].photoURL??"/user.png")||m(f,"src",x),m(f,"alt","photoURL"),m(f,"width","256"),m(f,"class","mx-auto"),m(k,"class","text-xl my-8"),m(g,"class","list-none"),m(e,"class","prose text-center mx-auto mt-8")},m(t,o){_(document.head,r),C(t,u,o),C(t,e,o),_(e,c),_(c,p),_(c,U),_(e,M),_(e,f),_(e,S),_(e,k),_(k,q),_(e,T),_(e,g);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(g,null);h=!0},p(t,[o]){if((!h||o&1)&&n!==(n="@"+t[0].username+" Links")&&(document.title=n),(!h||o&1&&i!==(i=t[0].bio))&&m(r,"content",i),(!h||o&1)&&L!==(L=t[0].username+"")&&D(U,L),(!h||o&1&&!B(f.src,x=t[0].photoURL??"/user.png"))&&m(f,"src",x),(!h||o&1)&&E!==(E=(t[0].bio??"no bio yet...")+"")&&D(q,E),o&1){b=N(t[0].links);let s;for(s=0;s<b.length;s+=1){const v=J(t,b,s);a[s]?(a[s].p(v,o),H(a[s],1)):(a[s]=K(v),a[s].c(),H(a[s],1),a[s].m(g,null))}for(fe(),s=b.length;s<a.length;s+=1)Q(s);ie()}},i(t){if(!h){for(let o=0;o<b.length;o+=1)H(a[o]);h=!0}},o(t){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)G(a[o]);h=!1},d(t){t&&(d(u),d(e)),d(r),ne(a,t)}}}function ke(l,n,r){let{data:i}=n;return l.$$set=u=>{"data"in u&&r(0,i=u.data)},[i]}class xe extends le{constructor(n){super(),re(this,n,ke,be,se,{data:0})}}export{xe as component,Ue as universal};
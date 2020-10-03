let s=document.createElement("style");s.innerHTML="",document.head.appendChild(s);import{S as n,i as a,s as t,w as e,c as p,a as o,m as c,A as r,K as l,t as u,b as i,d,B as m,a4 as $,C as f,v as k,z as g,g as h,h as x,j as w,k as b,l as v,n as F,o as E,p as j,N as I,q as T,r as P,Y as y}from"./index.4c25e3ff.js";import"./Button.b18180bc.js";import"./index.1d7db40c.js";import{C as q,P as U}from"./Preview.d9075994.js";import"./ChevronDown16.e1f7710f.js";import"./Loading.3d142f94.js";import{F as C}from"./Form.0dcb9cea.js";import"./Column.e0763a34.js";import{T as L}from"./TextInput.560b6880.js";import{P as _}from"./PasswordInput.d1bbd5de.js";import"./Content.ef39761a.js";import"./store.e0a281c6.js";function A(s){let n;const a=s[1].default,t=k(a,s,s[2],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),n=!0},p(s,n){t&&t.p&&4&n&&g(t,a,s,s[2],n,null,null)},i(s){n||(u(t,s),n=!0)},o(s){i(t,s),n=!1},d(s){t&&t.d(s)}}}function B(s){let n,a;const t=[{class:"bx--form--fluid"},s[0]];let m={$$slots:{default:[A]},$$scope:{ctx:s}};for(let s=0;s<t.length;s+=1)m=e(m,t[s]);return n=new C({props:m}),{c(){p(n.$$.fragment)},l(s){o(n.$$.fragment,s)},m(s,t){c(n,s,t),a=!0},p(s,[a]){const e=1&a?r(t,[t[0],l(s[0])]):{};4&a&&(e.$$scope={dirty:a,ctx:s}),n.$set(e)},i(s){a||(u(n.$$.fragment,s),a=!0)},o(s){i(n.$$.fragment,s),a=!1},d(s){d(n,s)}}}function D(s,n,a){const t=[];let p=m(n,t),{$$slots:o={},$$scope:c}=n;return $("Form",{isFluid:!0}),s.$$set=s=>{n=e(e({},n),f(s)),a(0,p=m(n,t)),"$$scope"in s&&a(2,c=s.$$scope)},[p,o,c]}class H extends n{constructor(s){super(),a(this,s,D,B,t,{})}}function z(s){let n,a,t,e;return n=new L({props:{labelText:"User name",placeholder:"Enter user name...",required:!0}}),t=new _({props:{required:!0,type:"password",labelText:"Password",placeholder:"Enter password..."}}),{c(){p(n.$$.fragment),a=w(),p(t.$$.fragment)},l(s){o(n.$$.fragment,s),a=j(s),o(t.$$.fragment,s)},m(s,p){c(n,s,p),T(s,a,p),c(t,s,p),e=!0},p:y,i(s){e||(u(n.$$.fragment,s),u(t.$$.fragment,s),e=!0)},o(s){i(n.$$.fragment,s),i(t.$$.fragment,s),e=!1},d(s){d(n,s),s&&E(a),d(t,s)}}}function K(s){let n,a;return n=new H({props:{$$slots:{default:[z]},$$scope:{ctx:s}}}),{c(){p(n.$$.fragment)},l(s){o(n.$$.fragment,s)},m(s,t){c(n,s,t),a=!0},p(s,a){const t={};1&a&&(t.$$scope={dirty:a,ctx:s}),n.$set(t)},i(s){a||(u(n.$$.fragment,s),a=!0)},o(s){i(n.$$.fragment,s),a=!1},d(s){d(n,s)}}}function M(s){let n,a,t,e,p,o,c,r,l,u;return{c(){n=h("div"),a=h("ul"),t=h("li"),e=h("a"),p=x("Usage"),o=w(),c=h("ul"),r=h("li"),l=h("a"),u=x("Fluid form"),this.h()},l(s){n=b(s,"DIV",{slot:!0});var i=v(n);a=b(i,"UL",{class:!0});var d=v(a);t=b(d,"LI",{class:!0});var m=v(t);e=b(m,"A",{class:!0,href:!0});var $=v(e);p=F($,"Usage"),$.forEach(E),o=j(m),c=b(m,"UL",{class:!0});var f=v(c);r=b(f,"LI",{class:!0});var k=v(r);l=b(k,"A",{class:!0,href:!0});var g=v(l);u=F(g,"Fluid form"),g.forEach(E),k.forEach(E),f.forEach(E),m.forEach(E),d.forEach(E),i.forEach(E),this.h()},h(){I(e,"class","bx--link"),I(e,"href","#usage"),I(l,"class","bx--link"),I(l,"href","#fluid-form"),I(r,"class","bx--list__item"),I(c,"class","bx--list--unordered bx--list--nested"),I(t,"class","bx--list__item"),I(a,"class","bx--list--unordered"),I(n,"slot","aside")},m(s,i){T(s,n,i),P(n,a),P(a,t),P(t,e),P(e,p),P(t,o),P(t,c),P(c,r),P(r,l),P(l,u)},d(s){s&&E(n)}}}function N(s){let n,a,t,e,r,l;return e=new U({props:{codeRaw:'<script>\n  import {\n    FluidForm,\n    TextInput,\n    PasswordInput,\n  } from "carbon-components-svelte";\n<\/script>\n\n<FluidForm>\n  <TextInput labelText="User name" placeholder="Enter user name..." required />\n  <PasswordInput\n    required\n    type="password"\n    labelText="Password"\n    placeholder="Enter password..."\n  />\n</FluidForm>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span>\n    FluidForm<span class="token punctuation">,</span>\n    TextInput<span class="token punctuation">,</span>\n    PasswordInput<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FluidForm</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span> <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter user name...<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PasswordInput</span>\n    <span class="token attr-name">required</span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>\n    <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter password...<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FluidForm</span><span class="token punctuation">></span></span>\n',$$slots:{default:[K]},$$scope:{ctx:s}}}),{c(){n=h("h3"),a=x("Fluid form"),t=w(),p(e.$$.fragment),r=w(),this.h()},l(s){n=b(s,"H3",{id:!0});var p=v(n);a=F(p,"Fluid form"),p.forEach(E),t=j(s),o(e.$$.fragment,s),r=j(s),this.h()},h(){I(n,"id","fluid-form")},m(s,p){T(s,n,p),P(n,a),T(s,t,p),c(e,s,p),T(s,r,p),l=!0},p(s,n){const a={};1&n&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){l||(u(e.$$.fragment,s),l=!0)},o(s){i(e.$$.fragment,s),l=!1},d(s){s&&E(n),s&&E(t),d(e,s),s&&E(r)}}}function R(s){let n,a;return n=new q({props:{$$slots:{default:[N],aside:[M]},$$scope:{ctx:s}}}),{c(){p(n.$$.fragment)},l(s){o(n.$$.fragment,s)},m(s,t){c(n,s,t),a=!0},p(s,[a]){const t={};1&a&&(t.$$scope={dirty:a,ctx:s}),n.$set(t)},i(s){a||(u(n.$$.fragment,s),a=!0)},o(s){i(n.$$.fragment,s),a=!1},d(s){d(n,s)}}}export default class extends n{constructor(s){super(),a(this,s,null,R,t,{})}}

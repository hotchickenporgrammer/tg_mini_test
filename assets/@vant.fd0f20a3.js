import{r as e,c as n,f as t,o as r,e as a,s as o,x as i,w as s,k as l,n as u,y as c,i as d,a as f,p as v,g as h,z as p}from"./@vue.17467843.js";var m="undefined"!=typeof window;function w(e){return m?requestAnimationFrame(e):-1}function y(n=!1){const t=e(n);return[t,(e=!t.value)=>{t.value=e}]}function x(t){const r=d(t,null);if(r){const e=h(),{link:t,unlink:a,internalChildren:i}=r;t(e),o((()=>a(e)));return{parent:r,index:n((()=>i.indexOf(e)))}}return{parent:null,index:e(-1)}}var g=(e,n)=>{const t=e.indexOf(n);return-1===t?e.findIndex((e=>void 0!==n.key&&null!==n.key&&e.type===n.type&&e.key===n.key)):t};function k(e,n,t){const r=function(e){const n=[],t=e=>{Array.isArray(e)&&e.forEach((e=>{var r;p(e)&&(n.push(e),(null==(r=e.component)?void 0:r.subTree)&&(n.push(e.component.subTree),t(e.component.subTree.children)),e.children&&t(e.children))}))};return t(e),n}(e.subTree.children);t.sort(((e,n)=>g(r,e.vnode)-g(r,n.vnode)));const a=t.map((e=>e.proxy));n.sort(((e,n)=>a.indexOf(e)-a.indexOf(n)))}function M(e){const n=f([]),t=f([]),r=h();return{children:n,linkChildren:a=>{v(e,Object.assign({link:e=>{e.proxy&&(t.push(e),n.push(e.proxy),k(r,n,t))},unlink:e=>{const r=t.indexOf(e);n.splice(r,1),t.splice(r,1)},children:n,internalChildren:t},a))}}}var b,O;function C(o){let i,s,l,u;const c=e(o.time),d=n((()=>{return{total:e=c.value,days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3),milliseconds:Math.floor(e%1e3)};var e})),f=()=>{var e;l=!1,e=i,m&&cancelAnimationFrame(e)},v=()=>Math.max(s-Date.now(),0),h=e=>{var n,t;c.value=e,null==(n=o.onChange)||n.call(o,d.value),0===e&&(f(),null==(t=o.onFinish)||t.call(o))},p=()=>{i=w((()=>{l&&(h(v()),c.value>0&&p())}))},y=()=>{i=w((()=>{if(l){const t=v();e=t,n=c.value,(Math.floor(e/1e3)!==Math.floor(n/1e3)||0===t)&&h(t),c.value>0&&y()}var e,n}))},x=()=>{m&&(o.millisecond?p():y())};return t(f),r((()=>{u&&(l=!0,u=!1,x())})),a((()=>{l&&(f(),u=!0)})),{start:()=>{l||(s=Date.now()+c.value,l=!0,x())},pause:f,reset:(e=o.time)=>{f(),c.value=e},current:d}}function T(e){let n;l((()=>{e(),u((()=>{n=!0}))})),r((()=>{n&&e()}))}function E(e,n,t={}){if(!m)return;const{target:r=window,passive:l=!1,capture:u=!1}=t;let d,f=!1;const v=t=>{if(f)return;const r=c(t);r&&!d&&(r.addEventListener(e,n,{capture:u,passive:l}),d=!0)},h=t=>{if(f)return;const r=c(t);r&&d&&(r.removeEventListener(e,n,u),d=!1)};let p;return o((()=>h(r))),a((()=>h(r))),T((()=>v(r))),i(r)&&(p=s(r,((e,n)=>{h(n),v(e)}))),()=>{null==p||p(),h(r),f=!0}}function L(){if(!b&&(b=e(0),O=e(0),m)){const e=()=>{b.value=window.innerWidth,O.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:b,height:O}}var A=/scroll|auto|overlay/i,D=m?window:void 0;function F(e){return"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType}function N(e,n=D){let t=e;for(;t&&t!==n&&F(t);){const{overflowY:e}=window.getComputedStyle(t);if(A.test(e))return t;t=t.parentNode}return n}var j=Symbol("van-field");export{j as C,E as a,x as b,M as c,C as d,y as e,N as g,T as o,L as u};

var s,a;import{s as t,E as o}from"./vant.ebd7adcf.js";import{u as i}from"./vue-clipboard3.d985be48.js";import{a as e}from"./axios.3faf9f74.js";import{_ as n}from"./@twa-dev.365bd15d.js";import{L as r,M as c,r as d,P as l,D as v,E as A,G as f,b as u,y as m}from"./@vue.3e811d60.js";import"./@vant.352727c2.js";import"./clipboard.9f726ff1.js";const p=e.create({timeout:3e4,baseURL:"/api"});p.interceptors.request.use((s=>{console.log(n);const a=n&&n.initData;return a&&(s.headers.Authorization=a),s}));p.interceptors.response.use((s=>{const{code:a,data:o,msg:i}=s.data;if(200==a)return Promise.resolve(o);t({message:i})}),(s=>(console.log(s),Promise.reject(s))));const b=null==(a=null==(s=n.initDataUnsafe)?void 0:s.user)?void 0:a.id;r("data-v-dab95f56");const g={class:"invite_wrap"},R=f("div",{class:"invite_info"},[f("div",{class:"invite_info_title"},"REFER&EARN"),f("div",{class:"invite_info_desc"},"Inviting 1 friend earns 2 diamonds, with a maximum of 20 diamonds per day")],-1),S=f("div",{class:"my_title"},[f("span",null,"INVITATION LINK")],-1),y={class:"link_wrap"},w=f("div",{class:"link_wrap_input"},[f("div",{class:"van-ellipsis"},"https://www.baidu.com/s?tn=15007414_18_dg&ie=utf-8&wd=123")],-1),N=f("div",{class:"share_wrap"},[f("div",{class:"my_btn van-haptics-feedback"},"Share With Friends")],-1),h=f("div",{class:"my_title"},[f("span",null,"INVITATION RECORD")],-1),E={class:"record_wrap"};c();const M={setup(s){const{toClipboard:a}=i(),e=d("...");l((()=>{n()}));const n=async()=>{try{const s=await p({url:"/v1/userinvitestate/"+b,method:"get"});e.value=s.link,console.log(s,"res")}catch(s){console.log(s)}};return(s,i)=>{const n=o;return v(),A("div",g,[R,S,f("div",y,[w,f("div",{class:"my_btn van-haptics-feedback",onClick:i[0]||(i[0]=s=>(async s=>{try{await a(s),t({message:"Copy successfully"})}catch(o){console.error(o)}})(e.value))},"copy")]),N,h,f("div",E,[u(n,{image:m("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAABpCAMAAADCxcfjAAAAPFBMVEUAAADR0dHS0tLPz8/R0dHS0tLQ0NDR0dHQ0NDPz8/R0dHQ0NDR0dHPz8/S0tLT09PR0dHQ0NDS0tLR0dEfMNSsAAAAE3RSTlMA32Agn79A74AQzzCQcK9/cFCPb7EOwgAAAxxJREFUaN7t2+tu4yAQBeCBAWPwJbF5/3fdXdLktHUaRmVKtZLPnzatNV+5BITj0r/wbrJSgrdM8lyyaowVyy5r5yqUx6yfSSRz/oF4ET2XybFE0kkciy0ql/5daXVctGUjQUqjSTGMtghoQ5o56ZM+6ZM+6ZM+6ZM+6d+lebuO7m/2cZs60vG6hvwhfehoPUDEXLiBZlNPvIT8VRx/n871AK7g2jRi3LJNzDwMi0uVk7Ym7Zf4qSLi4g/SbnhWMT0aztozPPq3FvMXSwq7uz3p0vHWqrC9WM2sudlhUqMhe365kLKHrUbfOnOuruEjxluBRsWRKjTsFJXoAfJrGvauQ8cyfVYS0LgpN6jQO4avRmNGmlYaKw2TkCYOGJ9G2qFQncZwh9hMM7pbSJNBs5toh8JSeit0aKUZl8toNHuQ09E/SSoN8PfI6KXQs+6mKaNjQI93psmjx3vS6PFrbxqlnJgmPqb03ITXQpoClGe09L59IkRKr6XZTTQ+15DT2L+4gY6HIRPSYzPNWBrkNKb40EqP36Dtf093H2tMs/Ub9Fzo2EBTaHlfB2qhDSpIaXyE6Jvo9TBkIjpW1nBJFuxAUhqHBiumozvGl6vxWki7Qk+/sWkaIB1p9LfrTqO/O9MolEhOx+FZ5nL9/VWVRqOtysEH7y8JzRmEwnEvRDlt0OgGGodWL6ZHpfM1al2E9JZLWIWmhB6s0TjYK9AoZwU0G7yxNGiyGfZLejK4caZB45bUpULbgJu0OjTslV/Qcc+ImXRo2MZ+SQ8mv0+Y2mnYwI8Vd3///XzHrRZNS3jg/Lkikphga9HE6FE/DvGx6VwzMn94gPCiQKPTkZC89ya8/5EfqAS2Gk3sRA9WxgS7nQZugB1bfLQVaMSuofo4Z3z8gU6FRoZl9bfiwazzs9nMsBVphONx0zzaKXb76Pxocy/6aBvuTNMUYPejj3ZHGicg2EH76dkJ9CH2wyaasALoZMTNooo9lq9WC457qSfYcvzPPB/uqG4HfK8YwySwdf8XAFOobnt8rxZT5Kq9ve26Sa3FXvBsv/XGDfQHb//fTbS7uFAAAAAASUVORK5CYII="),description:"No Record","image-size":"40"},null,8,["image"])])])}},__scopeId:"data-v-dab95f56"};export{M as default};

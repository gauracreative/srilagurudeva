import{m as l}from"./module.esm-a9f152bb.js";const u=o=>({data:o,loaded:20,statuses:{},languages:{},countries:{},filter:{country:!1,language:!1,status:!1,sort:"name"},init(){this.updateDDs(!0),this.loadMore()},updateDDs(n=!1){const a=new Map,t=new Map,s=new Map;this.getFiltered().forEach(e=>{n&&e.country!==void 0&&e.country!==null&&e.country!==""&&a.set(e.country,(a.get(e.country)||0)+1),e.status!==void 0&&e.status!==null&&e.status!==""&&t.set(e.status,(t.get(e.status)||0)+1),e.language!==void 0&&e.language!==null&&e.language!==""&&s.set(e.language,(s.get(e.language)||0)+1)}),n&&(this.countries=Array.from(a.entries()).sort((e,r)=>r[1]-e[1])),this.statuses=Array.from(t.entries()).sort((e,r)=>r[1]-e[1]),this.languages=Array.from(s.entries()).sort((e,r)=>r[1]-e[1])},getFiltered(){const n=a=>!(this.filter.country&&a.country!==this.filter.country||this.filter.status&&a.status!==this.filter.status||this.filter.language&&a.language!==this.filter.language);return this.data.filter(n)},getItems(){const n=this.getFiltered();return this.updateDDs(),n.length<=this.loaded?n:n.slice(0,this.loaded)},loadMore(){window.addEventListener("scroll",()=>{const n=window.scrollY,a=window.innerHeight,t=document.body.clientHeight,s=200;n+a>=t-s&&(this.loaded+=4)})},reset(){this.filter={country:!1,language:!1,status:!1,sort:"name"}}}),d=o=>({data:o,loaded:20,countries:{},roles:{},relations:{},filter:{country:!1,role:!1,relation:!1,sort:"name"},init(){this.updateDDs(!0),this.loadMore()},updateDDs(n=!1){const a=new Map,t=new Map,s=new Map;this.getFiltered().forEach(e=>{n&&e.country!==void 0&&e.country!==null&&e.country!==""&&a.set(e.country,(a.get(e.country)||0)+1),e.roles!==void 0&&e.roles!==null&&e.roles!==""&&t.set(e.roles,(t.get(e.roles)||0)+1),e.relation!==void 0&&e.relation!==null&&e.relation!==""&&s.set(e.relation,(s.get(e.relation)||0)+1)}),n&&(this.countries=Array.from(a.entries()).sort((e,r)=>r[1]-e[1])),this.roles=Array.from(t.entries()).sort((e,r)=>r[1]-e[1]),this.relations=Array.from(s.entries()).sort((e,r)=>r[1]-e[1])},getFiltered(){const n=a=>!(this.filter.country&&a.country!==this.filter.country||this.filter.role&&a.roles!==this.filter.role||this.filter.relation&&a.relation!==this.filter.relation);return this.data.filter(n)},getItems(){const n=this.getFiltered();return this.updateDDs(),n.length<=this.loaded?n:n.slice(0,this.loaded)},loadMore(){window.addEventListener("scroll",()=>{const n=window.scrollY,a=window.innerHeight,t=document.body.clientHeight,s=200;n+a>=t-s&&(this.loaded+=4)})},reset(){this.filter={country:!1,language:!1,status:!1,sort:"name"}}}),f=()=>({user:!1,current:!1,all:!1,deleteMarkUpdate(){this.user?(this.current=!0,this.all=!0):this.all&&(this.current=!0)}}),c=(o,n,a)=>({data:o,reviewers:n,reviewersData:a,tab:"gram",loaded:20,languages:{},countries:{},filter:{country:!1,language:!1,sort:"name"},init(){this.updateDDs(!0),this.loadMore()},updateDDs(t=!1){const s=new Map,e=new Map;this.getFiltered().forEach(r=>{t&&r.country!==void 0&&r.country!==null&&r.country!==""&&s.set(r.country,(s.get(r.country)||0)+1),r.language!==void 0&&r.language!==null&&r.language!==""&&e.set(r.language,(e.get(r.language)||0)+1)}),t&&(this.countries=Array.from(s.entries()).sort((r,i)=>i[1]-r[1])),this.languages=Array.from(e.entries()).sort((r,i)=>i[1]-r[1])},getFiltered(){const t=s=>this.filter.country&&s.country!==this.filter.country||this.filter.language&&s.language!==this.filter.language||this.tab==="gram"&&!["admin","grammatic"].includes(s.type)?!1:!(this.tab==="sidh"&&!["admin","sidhantic"].includes(s.type));return this.data.filter(t)},getItems(){const t=this.getFiltered();return this.updateDDs(),t.length<=this.loaded?t:t.slice(0,this.loaded)},getReviewers(){const t=s=>this.tab==="gram"&&s.type!=="grammatic"?!1:!(this.tab==="sidh"&&s.type!=="sidhantic");return this.reviewers.filter(t)},loadMore(){window.addEventListener("scroll",()=>{const t=window.scrollY,s=window.innerHeight,e=document.body.clientHeight,r=200;t+s>=e-r&&(this.loaded+=4)})},reset(){this.filter={country:!1,language:!1,sort:"name"}},selected(t){this.tab=t;const s=this.$el.parentNode.parentNode,e=["border-l","border-t","border-r","rounded-t","font-semibold"];document.querySelectorAll(".tabs").forEach(r=>{r.style.display="none"}),t=["gram","sidh"].includes(t)?"reviews":t,document.getElementById(t+"Tab").style.display="block",s.querySelectorAll("li").forEach(r=>{r.classList.remove("-mb-px")}),s.querySelectorAll("li button").forEach(r=>{r.classList.remove(...e)}),this.$el.parentNode.classList.add("-mb-px"),this.$el.classList.add(...e)},media(t,s){return s=s.replace("000",t.id),t.media?'Yes, <a class="text-indigo-700 font-semibold" href="'+s+'" title="move">move</a>':""},tabTitle(t){let s=this.data.filter(e=>e.type===t.toLowerCase()).length;return`For ${t} Review (${s})`},sum(t){return this.reviewersData.reduce((s,e)=>(e[t]&&(s+=parseInt(e[t])),s),0)}});window.Alpine=l;l.data("all",u);l.data("users",d);l.data("user",f);l.data("assign",c);l.start();
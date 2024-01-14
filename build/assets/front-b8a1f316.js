import{m as l}from"./module.esm-a9f152bb.js";const f=(i,a)=>({data:i,filter:a,loaded:10,languages:{},countries:{},tags:{},filter:{country:!1,language:!1,tag:[],search:""},init(){this.updateDDs(!0),this.loadMore()},updateDDs(t=!1){const n=new Map,e=new Map,r=new Map;this.getItems().forEach(s=>{t&&(s.country!==void 0&&s.country!==null&&s.country!==""&&n.set(s.country,(n.get(s.country)||0)+1),r.set(4,"written offering"),r.set(2,"video offering"),r.set(3,"audio offering"));const o=s.language;o!=null&&o!==""&&e.set(o,(e.get(o)||0)+1)}),t&&(this.countries=Array.from(n.entries()).sort((s,o)=>o[1]-s[1]),this.tags=r),this.languages=Array.from(e.entries()).sort((s,o)=>o[1]-s[1])},getFiltered(){const t=this.getItems();return this.updateDDs(),t.length<=this.loaded?t:t.slice(0,this.loaded)},getItems(){const t=n=>{if(this.filter.country&&n.country!==this.filter.country||this.filter.language&&n.language!==this.filter.language||this.filter.search&&n.name.search(this.filter.search)===-1)return!1;if(Array.isArray(this.filter.tag)&&this.filter.tag.length&&n.tag_ids!==null&&n.tag_ids!==""){const e=new Set(n.tag_ids.split(",").map(Number)),r=new Set(this.filter.tag.map(Number)),s=new Set([...e].filter(o=>r.has(o)));if(console.log(s),s.size==0)return!1}return!0};return this.data.filter(t)},randImg(){return Math.floor(Math.random()*28)+1},location(t){return t.location?t.location+", "+t.country:t.country},loadMore(){window.addEventListener("scroll",()=>{const t=window.scrollY,n=window.innerHeight,e=document.body.clientHeight,r=200;t+n>=e-r&&(this.loaded+=2)})},reset(){this.filter={country:!1,language:!1,tag:[],search:""}}}),g=i=>({data:i,loaded:10,init(){this.loadMore()},getFiltered(){const a=this.data;return a.length<=this.loaded?a:a.slice(0,this.loaded)},randImg(){return Math.floor(Math.random()*28)+1},location(a){return a.location?a.location+", "+a.country:a.country},loadMore(){window.addEventListener("scroll",()=>{const a=window.scrollY,t=window.innerHeight,n=document.body.clientHeight,e=200;a+t>=n-e&&(this.loaded+=2)})}}),m=(i,a=108)=>({audio:new Audio(i),petals:a,divs:[],playing:!1,play(){let t=window.innerWidth-window.innerWidth/100*10,n=window.innerHeight;const e=(s,o)=>s+Math.random()*(o-s);this.audio.play();for(var r=0;r<this.petals;r++){let s=document.createElement("div");TweenLite.set(s,{attr:{class:"dot",style:"z-index: 1000"},x:e(0,t),y:e(-200,-200),z:e(-200,200)}),document.getElementById("pushpa").appendChild(s),this.divs[r]=s,TweenMax.to(s,e(6,15),{y:n+100,ease:Linear.easeNone,repeat:-1,delay:-15}),TweenMax.to(s,e(4,8),{x:"+=100",rotationZ:e(0,180),repeat:-1,yoyo:!0,ease:Sine.easeInOut}),TweenMax.to(s,e(2,8),{rotationX:e(0,360),rotationY:e(0,360),repeat:-1,yoyo:!0,ease:Sine.easeInOut,delay:-5})}this.playing=!0},stop(){for(var t=0;t<this.divs.length;t++)this.divs[t].remove();this.audio.pause(),this.playing=!1}}),p=(i,a)=>({skey:i,url:a,form:{name:"",email:"",message:"",bug:!1,file:"",_token:"",_rct:""},status:{message:"",error:!1},init(){this.form._token=document.querySelector('meta[name="csrf-token"]').content},submit(){if(this.status.message="",this.status.error=!1,this.form.name.length<3){this.status.message="please use your real name",this.status.error=!0;return}else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)){if(this.form.message.length<5){this.status.message="is this all you have to say?",this.status.error=!0;return}}else{this.status.message="invalid email",this.status.error=!0;return}let t=this;grecaptcha.ready(()=>{grecaptcha.execute(this.skey,{action:"contact"}).then(n=>{t.form._rct=n,fetch(this.url,{method:"POST",body:JSON.stringify(t.form),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>{e.res=="OK"?(t.status.error=!1,t.status.message=e.message,t.form.name="",t.form.email="",t.form.message=""):e.res=="error"&&(t.status.error=!0,t.status.message=e.message)})})})}});l.data("filter",f);l.data("simple",g);l.data("pushpa",m);l.data("contact",p);window.Alpine=l;window.Alpine.start();const h=document.getElementById("topNav").offsetHeight+document.getElementById("midNav").offsetHeight-108;document.body.clientHeight;const y=window.innerHeight,d=document.getElementById("pushpa");d&&(d.style.height=y-h-150+"px");const c=document.getElementById("fixNav"),u=document.getElementById("upBtn");document.querySelector("div.filter-page");window.addEventListener("scroll",function(){window.scrollY>h?(c.classList.add("sm:fixed","top-0","shadow"),u.style.display="block"):(c.classList.remove("sm:fixed","top-0","shadow"),u.style.display="none")});document.getElementById("upBtn").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
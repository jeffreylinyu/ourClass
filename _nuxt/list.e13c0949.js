import{_ as w}from"./layout.218b83be.js";import{a as x,r as y,y as k,C as S,c as M,w as d,l as p,o as c,u as i,k as m,e,H as N,f as s,z as T,p as B,b as C}from"./entry.901372f0.js";import{g as I}from"./task.01ab21d8.js";const r=n=>(B("data-v-e9bd79d3"),n=n(),C(),n),D={key:0,class:"manage"},J=r(()=>e("div",{class:"manage-between"},[e("div",{class:"manage-head"},"任務總覽"),e("div",{class:"manage-row"})],-1)),O=r(()=>e("div",{class:"manage-center"},[e("div",null,"尚無任何任務")],-1)),V=[J,O],z={key:1,class:"manage"},E={class:"manage-between"},F=r(()=>e("div",{class:"manage-head"},"任務總覽",-1)),H={class:"manage-row"},L={class:"manage-num"},R={class:"Mtable"},$={class:"Mtable-row"},j={__name:"list",setup(n){const u=y(!1),h=[{id:0,text:"小學 (低年級)"},{id:1,text:"小學 (中年級)"},{id:2,text:"小學 (高年級)"},{id:3,text:"小學 (7年級)"},{id:4,text:"小學 (8年級)"},{id:5,text:"小學 (9年級)"}],b={0:"開啟任務",1:"進行中",2:"完成(包含結束)"},o=k([]);async function g(){const{data:_}=await I();let a=JSON.parse(JSON.stringify(_.value.data.list));a=a.filter(t=>t.status!==2),a.map(t=>{t.learningStr=h.filter(l=>l.id==t.learning)[0].text,t.statusStr=b[t.status],t.endTime=t.endTime.split(" ")[0]}),o.length=0,o.push(...a),console.log("我的任務 all data",o)}g();const v=S();return(_,a)=>{const t=p("el-table-column"),l=p("el-table"),f=w;return c(),M(f,{name:"custom"},{default:d(()=>[i(u)?(c(),m("div",D,V)):(c(),m("div",z,[e("div",E,[F,e("div",H,[e("div",L,"項目數量："+N(i(o).length),1)])]),e("div",R,[s(l,{data:i(o),style:{width:"100%"}},{default:d(()=>[s(t,{prop:"taskName",label:"任務名稱",sortable:"","min-width":"160"}),s(t,{prop:"script",label:"劇本",sortable:"","min-width":"160"}),s(t,{prop:"learningStr",label:"學習對象",sortable:"","min-width":"160"}),s(t,{prop:"statusStr",label:"任務狀態",sortable:"","min-width":"160"}),s(t,{prop:"endTime",label:"結束時間",sortable:"","min-width":"160"}),s(t,{prop:"createTime",label:"建立時間",sortable:"","min-width":"160"}),s(t,{label:"操作",sortable:"","min-width":"260"},{default:d(q=>[e("div",$,[e("div",{onClick:a[0]||(a[0]=T(A=>i(v).push({path:"/mission/myMission"}),["stop"])),class:"Mtable-look"},"查看 -> ")])]),_:1})]),_:1},8,["data"])])]))]),_:1})}}},Q=x(j,[["__scopeId","data-v-e9bd79d3"]]);export{Q as default};

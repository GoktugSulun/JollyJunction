import{n as h,I as F,c as ie,D as di,s as jt,M as $e,a as vt,k as ui,F as pi,b as mi,O as fi,S as hi,d as xi,j as t,u as gi,P as l,e as _t,_ as be,f as yi,o as bi,g as Pe,h as J,i as ji,l as de,r as j,m as v,p as vi,q as _i,t as se,v as Fi,w as Ft,x as ki,y as kt,z as Ci,N as rt,A as Ct,C as Ei,B as ue,E as y,G as E,H as wi,J as Ti,K as Ni,L as Si,Q as $i,R as T,T as Pi,U as C,V as Ii,W as Ri,X as Ai,Y as Mi,Z as Li,$ as Et,a0 as M,a1 as Ui,a2 as Oi,a3 as wt,a4 as Di,a5 as Tt,a6 as Ie,a7 as Oe,a8 as De,a9 as Nt,aa as St,ab as $t,ac as zi,ad as qi,ae as W,af as Pt,ag as It,ah as Rt,ai as At,aj as Mt,ak as Bi,al as Hi,am as Ki,an as Vi,ao as ve,ap as Wi,aq as Gi,ar as Yi,as as at,at as Qi,au as Lt,av as Xi,aw as ze,ax as Ji,ay as Zi,az as es,aA as ts,aB as is,aC as ss,aD as ns,aE as os,aF as rs,aG as ne,aH as as,aI as cs,aJ as ls,aK as ds,aL as us,aM as ps,aN as ms,aO as fs}from"./vendor-e142fa1b.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const hs=h.div`
   width: 100vw;
   min-height: 100vh;
   height: auto;
   background-color: #0f0f0f;
`,xs=h.div`
   width: 100vw;
   height: 90px;
   background-color: #181818;
   display: flex;
   justify-content: space-between;
   padding: 0 75px;
   transition: padding 350ms;

   @media (max-width: 1536px) {
      padding: 0 40px;
   }
   @media (max-width: 900px) {
      padding: 0 20px;
   }
`,gs=h.div`
   display: flex;
   align-items: center;
   gap: 35px;
   .title {
      color: #927CD9;
      font-size: 35px;
      border-radius: 10px;
      padding: 10px 20px;
      :hover {
         background: #333;
      }
   }
   .MuiOutlinedInput-root {
      background-color: #2d2d2d;
      color: #FFFFFF;
      input {
         padding: 10px 5px 10px 15px;
      }
      fieldset {
         border: none;
      }
      .MuiIconButton-root {
         svg {
            opacity: .4;
            transition: opacity 350ms;
            path {
               fill: #FFFFFF;
            }
         }
         :hover {
            background-color: #333;
            svg {
               opacity: 1;
            }
         }
      }
   }
`,ys=h.div`
   display: flex;
   align-items: center;
   gap: 25px;
   transition: gap 350ms;
   .MuiIconButton-root {
      width: 40px;
      height: 40px;
      :hover {
         background-color: #333;
      }
      svg {
         width: 100%;
         height: 100%;
         path {
            fill: #FFFFFF;
         }
      }
   }
   @media (max-width: 900px) {
      gap: 15px;
   }
`,bs=h.div`
   .menu-button {
      display: none;
   }
   .MuiIconButton-root {
      width: 40px;
      height: 40px;
   }
   @media (max-width: 600px) {
      .menu-button {
         display: block;
      }
      .profile-button {
         display: none;
      }
   }
`,js=h(F)`
   position: relative;
   ${e=>e.open&&ie`
      background: #333;
   `}
   ::before {
      content: ${e=>`"${e.count}"`};
      scale: ${e=>e.count>0?1:0};
      transition: scale 350ms;
      position: absolute;
      top: 0;
      right: 0;
      width: 15px;
      height: 15px;
      padding: 2px;
      background-color: red;
      color: #fff;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
   }
`,ct=h(di)`
   margin: ${e=>e.margin||"5px 0"};
   border-color: #444;
`;jt($e)(({theme:e})=>({"& .MuiPaper-root":{borderRadius:6,backgroundColor:"#2d2d2d",marginTop:"15px",width:600,overflowX:"hidden",color:e.palette.mode==="light"?"rgb(55, 65, 81)":e.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"0"},"& .MuiMenuItem-root":{color:"#c7c5c5",padding:"10px 20px","&:not(:last-child)":{borderBottom:"1px solid #555"},"& .user-info__name":{fontSize:16},"& .MuiSvgIcon-root":{fontSize:18,color:"#c7c5c5",marginRight:e.spacing(1.5),"& path":{fill:"#c7c5c5"}},"&:active":{backgroundColor:vt(e.palette.primary.main,e.palette.action.selectedOpacity)}}}}));const Re={shouldForwardProp:e=>!e.startsWith("$")};ui`
   0% { transform: translateX(0) }
   25% { transform: translateX(10px) }
   50% { transform: translateX(-10px) }
   75% { transform: translateX(10px) }
   100% { transform: translateX(0) }
`;const Ut=h(pi,Re)`
   ${e=>e.$withLabel&&ie`
      margin-top: 20px;
   `}
`,Ot=h(mi)`
   transform: translate(0, -20px);
   line-height: 20px;
   font-size: 14px;
   &.Mui-focused:not(.Mui-error) {
      color: ${e=>e.palette.inputColor||e.palette.defaultColor}
   }
`,Dt=e=>i=>i.palette[e]&&ie`border-color: ${i.palette[e]};`,vs=h(fi)`
   &.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline,
   &.Mui-focused:not(.Mui-error):hover .MuiOutlinedInput-notchedOutline,
   &:hover:not(.Mui-error) .MuiOutlinedInput-notchedOutline {
      ${Dt("inputColor")}
   }
`,_s=h(hi)`
   &.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline,
   &.Mui-focused:not(.Mui-error):hover .MuiOutlinedInput-notchedOutline,
   &:hover:not(.Mui-error) .MuiOutlinedInput-notchedOutline {
      ${Dt("inputColor")}
   }
`,Fs=h(xi,Re)`
   color: ${e=>e.error&&"#d32f2f"};
   .MuiCheckbox-root {
      color: ${e=>e.error&&"#d32f2f"};
   }
`,ks=e=>function(s){if(!s.control)return t.jsx(e,{...s});const{field:n,fieldState:r}=gi({name:s==null?void 0:s.name,control:s==null?void 0:s.control,rules:s==null?void 0:s.rules,defaultValue:s==null?void 0:s.defaultValue});return t.jsx(e,{control:s.control,field:n,fieldState:r,...s})},qe=e=>{var n,r,o,a,d,c,f,p;const i=u=>{be.isEmpty(e.control)||e.field.onChange(u.target.value),e.onChange(u,u.target.value)},s=()=>be.isEmpty(e.control)?e.value!==null?{value:e.value}:{}:{value:e.field.value};return t.jsxs(Ut,{fullWidth:e.fullWidth,$withLabel:!!e.label,children:[t.jsx(Ot,{shrink:!0,error:e.error||!!((n=e.fieldState)!=null&&n.error),htmlFor:e.id,palette:e.palette,children:e.label}),t.jsx(vs,{...e.id?{id:e.id}:{},startAdornment:e.startAdornment,endAdornment:e.endAdornment,onChange:i,onBlur:((r=e.field)==null?void 0:r.onBlur)||e.onBlur,onKeyDown:e.onKeyDown,...s(),name:((o=e.field)==null?void 0:o.name)||e.name,inputRef:((a=e.field)==null?void 0:a.ref)||e.inputRef,type:e.type,placeholder:e.placeholder,disabled:e.disabled,notched:!1,error:e.error||!!((d=e.fieldState)!=null&&d.error),color:e.palette.defaultColor,palette:e.palette,inputProps:e.inputProps,readOnly:e.readOnly}),t.jsx(_t,{error:e.error||!!((c=e.fieldState)!=null&&c.error),children:((p=(f=e.fieldState)==null?void 0:f.error)==null?void 0:p.message)||e.helperText})]})},L=ks(qe);qe.propTypes={name:l.string,control:l.object,field:l.object,fieldState:l.object,id:l.string,fullWidth:l.bool,startAdornment:l.element,endAdornment:l.element,placeholder:l.string,label:l.string,helperText:l.string,error:l.bool,type:l.string,onChange:l.any,onKeyDown:l.func,rules:l.object,defaultValue:l.any,palette:l.object,value:l.any,onBlur:l.func,inputRef:l.any,disabled:l.bool,inputProps:l.object,readOnly:l.bool};qe.defaultProps={name:"",control:{},field:{},fieldState:{},id:"",fullWidth:!1,startAdornment:null,endAdornment:null,placeholder:"",label:"",helperText:"",error:!1,type:"text",onChange:()=>{},onKeyDown:()=>{},rules:{},defaultValue:null,palette:{defaultColor:"primary",inputColor:"#4A329A",labelColor:"",hoverColor:""},value:null,onBlur:()=>{},inputRef:null,disabled:!1,inputProps:{},readOnly:!1};const pe=({defaultValues:e,schema:i,mode:s="onSubmit",reValidateMode:n="onChange"})=>{const r=yi({defaultValues:e,...i?{resolver:bi(i)}:{},mode:s,reValidateMode:n});return{form:r,registerHandler:o=>({control:r.control,name:o})}},Cs={search:""},Es=Pe({}),ws=()=>{const e=J();return pe({defaultValues:Cs,schema:Es}),t.jsx(gs,{children:t.jsx(F,{className:"title",onClick:()=>e("/"),children:" Socialpedia "})})},q=h(ji,Re)`
   color: ${e=>e.$color||"#FFFFFF"};
   background: ${e=>e.bgColor||"#4A329A"};
   text-transform: unset;
   padding: ${e=>e.padding||"10px 15px"};
   font-size: ${e=>e.fontSize||"16px"};
   width: ${e=>e.fullWidth?"100%":e.width||"initial"};
   border-radius: ${e=>e.borderRadius||"10px"};
   border: ${e=>e.border||"none"};
   font-weight: ${e=>e.fontWeight||500};
   min-width: ${e=>e.minWidth||"64px"};
   :disabled {
      background-color: #202022;
      color: #7d7c7c;
   }
   :hover {
      color: ${e=>e.hoverColor||e.$color||"#FFFFFF"};
      background: ${e=>e.hoverBgColor||e.bgColor||"#4A329A"};
   }
`,Ts=jt(e=>t.jsx($e,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},...e}))(({theme:e})=>({"& .MuiPaper-root":{borderRadius:6,backgroundColor:"#2d2d2d",marginTop:e.spacing(1),minWidth:180,color:e.palette.mode==="light"?"rgb(55, 65, 81)":e.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{color:"#c7c5c5","& .MuiSvgIcon-root":{fontSize:18,color:"#c7c5c5",marginRight:e.spacing(1.5),"& path":{fill:"#c7c5c5"}},"&:active":{backgroundColor:vt(e.palette.primary.main,e.palette.action.selectedOpacity)}}}})),Ns=()=>{const e=J(),{pathname:i}=de(),[s,n]=j.useState(null),{authorizedUser:r}=v(u=>u.AppConfig.init),o=!!s,a=u=>{n(u.currentTarget)},d=()=>{n(null)},c=()=>{d(),localStorage.clear(),location.reload()},f=()=>{d();const u=`/profile/${r.name.split(" ").join("")}${r.surname.split(" ").join("")}/${r.id}`;i!==u&&e(u)},p=()=>{d(),i!=="/settings"&&e("/settings")};return t.jsxs(bs,{children:[t.jsx(F,{onClick:a,className:"menu-button",children:t.jsx(vi,{})}),t.jsx(q,{className:"profile-button",id:"demo-customized-button","aria-controls":o?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,variant:"contained",disableElevation:!0,onClick:a,endIcon:t.jsx(_i,{}),bgColor:"#2d2d2d",$color:"#c7c5c5",children:`${r==null?void 0:r.name} ${r==null?void 0:r.surname}`}),t.jsxs(Ts,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:s,open:o,onClose:d,children:[t.jsxs(se,{onClick:f,disableRipple:!0,children:[t.jsx(Fi,{}),"Profile"]}),t.jsx(ct,{}),t.jsxs(se,{onClick:p,disableRipple:!0,children:[t.jsx(Ft,{}),"Settings"]}),t.jsx(ct,{}),t.jsxs(se,{onClick:c,disableRipple:!0,children:[t.jsx(ki,{}),"Logout"]})]})]})},Ss=()=>{const e=J();kt("(min-width: 600px)");const{unseenNotificationsCount:i}=v(s=>s.AppConfig.init);return t.jsxs(ys,{children:[t.jsx(js,{count:i,onClick:()=>e("/notifications"),children:t.jsx(Ci,{})}),t.jsx(Ns,{})]})},$s=()=>t.jsxs(xs,{children:[t.jsx(ws,{}),t.jsx(Ss,{})]}),Be=({isAllowed:e,redirectPath:i})=>localStorage.getItem("token")?e?t.jsxs(hs,{children:[t.jsx($s,{}),t.jsx(j.Suspense,{fallback:t.jsx("div",{}),children:t.jsx(Ct,{})})]}):t.jsx(rt,{to:i,replace:!0}):t.jsx(rt,{to:"/login",replace:!0});Be.propTypes={isAllowed:l.bool,redirectPath:l.string};Be.defaultProps={isAllowed:!0,redirectPath:"/login"};const Ps=h.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${e=>e.fullWidth||"auto"};
   height: auto;
   margin: ${e=>e.margin};
   ${e=>e.blur&&ie`
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: inherit;
      z-index: 99;
      /* filter: blur(10px);
      background-color: rgba(255, 255, 255, .3); */
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);
   `}
   .MuiCircularProgress-root svg circle {
      stroke: ${e=>e.color};
   }
`,z=({fullWidth:e,blur:i,size:s,color:n,margin:r})=>t.jsx(Ps,{fullWidth:e,margin:r,color:n,blur:i,children:t.jsx(Ei,{size:s})});z.propTypes={blur:l.bool,fullWidth:l.bool,color:l.string,size:l.number,margin:l.string};z.defaultProps={blur:!1,fullWidth:!0,color:"#4A329A",size:40,margin:"0"};const Is=h.div`
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   background-color: #0f0f0f;
   display: flex;
   justify-content: center;
   align-items: center;
`,N=Object.freeze({GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE",PATCH:"PATCH"}),k=Object.freeze({TAKE_LATEST:"TAKE_LATEST",TAKE_LEADING:"TAKE_LEADING",TAKE_EVERY:"TAKE_EVERY"}),V=Object.freeze({IDLE:"IDLE",LOADING:"LOADING",SUCCESS:"SUCCESS",FAILURE:"FAILURE"}),X=Object.freeze({SUCCESS:"success",WARNING:"warning",ERROR:"error",INFO:"info",DEFAULT:"default"}),ee=Object.freeze({REQUEST_FOR_FRIENDSHIP:1,LIKED_POST:2,COMMENTED_POST:3,YOU_ARE_FRIEND_NOW:4,ACCEPTED_FRIENDSHIP_REQUEST:5,LIKED_COMMENT:6}),le=Object.freeze({OPEN:!0,CLOSE:!1}),we={idle:e=>({type:e.concat("/",V.IDLE)}),loading:e=>({type:e.concat("/",V.LOADING)}),success:e=>({type:e.concat("/",V.SUCCESS)}),failure:e=>({type:e.concat("/",V.FAILURE)})};class lt extends Error{constructor(i){super(i)}}const me=(e,i)=>{const s=(o,a="")=>Object.values(i).some(d=>`${d().type}${a?`/${a}`:""}`===o.type&&o.type.includes("request")),n=o=>o.type.split("/")[2],r=(o,a,d,c)=>{o!=null&&o.loading&&(o.loading[n(a)]=d),o!=null&&o.requestStatus&&(o.requestStatus[n(a)]=c)};e.addMatcher(o=>s(o),(o,a)=>{o.loading||(o.loading={}),o.requestStatus||(o.requestStatus={}),o.actionPayload||(o.actionPayload={}),a.payload&&(o.actionPayload[n(a)]=a.payload)}).addMatcher(o=>s(o,V.IDLE),(o,a)=>r(o,a,!1,V.IDLE)).addMatcher(o=>s(o,V.LOADING),(o,a)=>r(o,a,!0,V.LOADING)).addMatcher(o=>s(o,V.SUCCESS),(o,a)=>r(o,a,!1,V.SUCCESS)).addMatcher(o=>s(o,V.FAILURE),(o,a)=>r(o,a,!1,V.FAILURE))},Rs="AppConfig",As={notifications:[],init:{authorizedUser:{},unseenNotificationsCount:0,advertisements:[]}},Ms=ue({name:Rs,initialState:As,reducers:{enqueueSnackbar:(e,i)=>{var n,r,o,a;const s={message:((n=i.payload)==null?void 0:n.message)||"",options:{...((r=i.payload)==null?void 0:r.options)||{},key:new Date().getTime()+Math.random()*999,variant:((a=(o=i.payload)==null?void 0:o.options)==null?void 0:a.variant)||X.SUCCESS}};e.notifications.push(s)},closeSnackbar:(e,i)=>{e.notifications=[...e.notifications.filter(s=>s.options.key!==i.payload)]},setInit:(e,i)=>{e.init=i.payload},setUnseenNotificationsCount:(e,i)=>{e.init.unseenNotificationsCount=i.payload},setUser:(e,i)=>{e.init.authorizedUser=i.payload}},extraReducers:e=>me(e,oe)}),{actions:Ls,reducer:Us}=Ms,ge=Ls,I=(e,i)=>ge.enqueueSnackbar({message:e,options:i}),Os=e=>function*(i){try{yield y(we.loading(i.type)),yield E(e,i),yield y(we.success(i.type))}catch(s){console.log("hata => ",s),yield y(we.failure(i.type)),yield y(I((s==null?void 0:s.message)||"Sunucu ile bağlantı kesildi",{variant:X.ERROR}))}},S=({actionType:e,takeType:i,func:s})=>{if([e,i,s].some(o=>!o))throw Error("createSagaWatcher: missing arguments.");const n=Os(s);function*r(){switch(i){case k.TAKE_LEADING:yield Ni(e,n);break;case k.TAKE_LATEST:yield Ti(e,n);break;case k.TAKE_EVERY:yield wi(e,n);break;default:throw Error("createSagaWatcher: undefined takeType argument.")}}return r()},Ds=e=>{const{status:i}=e;if(i>=200&&i<=299)return e.data;throw Error(e)},zs=e=>{var i,s;throw((i=e==null?void 0:e.response)==null?void 0:i.status)===404?new lt(e):(((s=e==null?void 0:e.response)==null?void 0:s.status)===401&&(localStorage.clear(),window.location.replace("#/login")),e instanceof Si?new lt(e):(console.error(e),Error(e)))},qs="http://localhost:3000",Bs=(e,i)=>{const s=new FormData;if(Array.isArray(i))for(let n=0;n<i.length;n++)s.append("files",i[n]);else s.append("files",i);return s.append("data",JSON.stringify(e)),s},$=async(e,i,s=void 0,n=null)=>{var r,o;try{const a=n?Bs(s,n):s,d=await $i({method:e,url:i,baseURL:qs,data:a});if((r=d==null?void 0:d.data)!=null&&r.type)return Ds(d);throw Error(((o=d==null?void 0:d.data)==null?void 0:o.message)||"error")}catch(a){return zs(a)}},P=Object.freeze({getInit:"/Init/get",getAllUsers:"/User/getAll",getUserById:"/User/getById",createUser:"/User/create",editUser:"/User/edit",getAllPosts:"/Post/getAll",getPostById:"/Post/getById",getPosts:"/Post/get",deletePost:"/Post/delete",createPost:"/Post/create",likeUnlikePost:"/Post/like",saveUnsavePost:"/Post/save",getNotifications:"/Notification/get",markNotificationsSeen:"/Notification/seen",markNotificationsRead:"/Notification/read",deleteNotifications:"/Notification/delete",friendship:"/Notification/friendship",addFriend:"/Notification/addFriend",cancelFriendshipRequest:"/Notification/cancel",acceptFriendship:"/Notification/acceptFriendship",rejectFriendship:"/Notification/rejectFriendship",getFriends:"/Friend/get",deleteFriend:"/Friend/delete",getAllComments:"/Comment/getAll",getCommentById:"/Comment/getById",getComments:"/Comment/get",createComment:"/Comment/create",likeComment:"/Comment/like",deleteComment:"/Comment/delete",editComment:"/Comment/edit"}),Ue="AppConfig/request",oe={getInit:T(`${Ue}/getInit`),getUnseenNotifications:T(`${Ue}/getUnseenNotifications`),editUser:T(`${Ue}/editUser`)},Hs=[S({actionType:oe.getInit.type,takeType:k.TAKE_LATEST,*func(){const e=yield E($,N.GET,P.getInit);yield y(ge.setInit(e.data))}}),S({actionType:oe.getUnseenNotifications.type,takeType:k.TAKE_LATEST,*func({payload:e}){const{query:i}=e,s=yield E($,N.GET,`${P.getNotifications}${i}`);yield y(ge.setUnseenNotificationsCount(s.data.notifications.length))}}),S({actionType:oe.editUser.type,takeType:k.TAKE_LATEST,*func({payload:e}){const{id:i,data:s,file:n}=e,r=yield E($,N.PUT,`${P.editUser}/${i}`,s,n);yield y(I("Your informations is saved")),yield y(ge.setUser(r.data))}})],Fe=h.div`
   width: 100vw;
   height: auto;
   min-height: calc(100vh - 90px);
   background-color: #0f0f0f;
   display: grid;
   grid-template-columns: 1fr 2fr 1fr;
   align-items: start;
   padding: 0 75px;
   margin: 30px 0;
   gap: 50px;
   transition: padding 350ms, gap 350ms;

   @media (max-width: 1536px) {
      padding: 0 40px;
      gap: 35px;
   }
   @media (max-width: 1200px) {
      grid-template-columns: 1fr 2fr;
   }
   @media (max-width: 900px) {
      grid-template-columns: 1fr;
      padding: 0 5px;
      gap: 0;
   }
`;h(Fe)`
   min-height: calc(100vh - 150px);
`;const Ks=h.div`
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   height: max-content;
   ::-webkit-scrollbar {
      width: 5px;
   }
   ::-webkit-scrollbar-track {
      background: inherit; 
   }
   ::-webkit-scrollbar-thumb {
      background: #555; 
      border-radius: 10px;
   }
`,Vs=h.div`
   display: flex;
   align-items: center;
   gap: 25px;
   flex: 1;
   .dot {
      min-width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${e=>e.read?"inherit":"red"};
   }
   .content {
      display: flex;
      align-items: center;
      gap: 25px;
      img {
         width: 60px;
         height: 60px;
         border-radius: 50%;
      }
      &__main {
         display: flex;
         align-items: center;
         flex-wrap: wrap;
         gap: 10px 25px;
         .description {
            font-size: 16px;/
            span {
               white-space: normal;
            }
            &__sender-user {
               font-weight: 600;
               color: #c7c5c5;
               text-decoration: none;
               :hover {
                  text-decoration: underline;
               }
            }
            &__text {
               color: #c7c5c5;
            }
            &__date {
               font-size: 14px;
               color: #9f9d9d;
            }
         }
      }
   }
`,Ws=h.div`
   .MuiIconButton-root {
      width: 40px;
      height: 40px;
      :hover {
         background-color: #333;
         svg path {
            fill: #FFFFFF;
         }
      }
      svg {
         width: 100%;
         height: 100%;
         path {
            transition: fill 150ms;
            fill: #9a9a9a
         }
      }
   }
`,zt=h($e)`
   .MuiPaper-root {
      background-color: #2d2d2d;
      .MuiList-root {
         color: #c7c5c5;
         padding: 0;
         .MuiMenuItem-root {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px 20px 15px 15px;
            :hover {
               background-color: #454444;
            }
            svg {
               font-size: 20px;
            }
         }
      }
   }
`,Gs=h.div`
   display: flex;
   align-items: center;
   gap: 10px;
   button {
      padding: 5px 10px;
      font-size: 14px;
   }
`,Ys=h.button`
   all: unset;
   display: flex;
   align-items: center;
   gap: 15px;
   padding: 15px 20px;
   background-color: #181818;
   cursor: pointer;
   position: relative;
   transition: background-color 150ms;
   border-radius: 10px;
   margin-bottom: 20px;
   /* :first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
   }
   :last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
   } */
   :hover {
      background-color: #222;
   }
   position: relative;
   /* :not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #555; 
   } */
 `,Qs=h(Pi)`
   width: 100%;
   position: absolute;
   left: 0;
   bottom: 0;
   z-index: 1;
   background-color: #0f0f0f;
   span {
      background-color: #4A329A;
   }
`;h(Fe)``;h.div`
   display: flex;
   flex-direction: column;
   gap: 25px;

   @media (max-width: 900px) {
      margin-bottom: 25px;
   }
`;const Xs=h.div`
   .posts-wrapper {
      .loading-container {
         margin: 50px 0;
      }
   }
`;h.div`
   @media (max-width: 900px) {
      display: none;
   }
`;const Js=h.div`
   background: #181818;
   border-radius: 10px;
   padding: 25px;
   top: 400px;
   width: 100%;
   transition: width 350ms;
   .user {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      .MuiIconButton-root {
         background-color: #333;
         :hover {
            background-color: #555;
         }
         svg path {
            fill: #927CD9;
         }
         &.settings {
            background-color: transparent;
            svg {
               path {
                  fill: #9a9a9a;
               }
            }
            :hover {
                  background-color: #333;
                  svg path {
                     fill: #FFFFFF;
                  }
               }
            }
      }
   }
   .user-detail {
      &__row {
         display: flex;
         align-items: center;
         gap: 15px;
         :not(:last-child) {
            margin-bottom: 10px;
         }
         svg {
            font-size: 30px;
            path {
               fill: #9a9a9a;
            }
         }
         span {
            color: #7a7a7a;
            font-size: 14px;
         }
      }
   }
   .profile-data {
      &__row {
         :not(:last-child) {
            margin-bottom: 10px;
         }
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      &__key {
         color: #7a7a7a;
         font-size: 14px;
      }
      &__value {
         color: #9c9c9c;
         font-size: 14px;
      }
   }
   .social-profile {
      &__title {
         color: #9a9a9a;
      }
      &__row {
         display: flex;
         align-items: center;
         justify-content: space-between;
         margin-top: 20px;
         gap: 10px;
         svg {
            font-size: 22px;
            path {
               fill: #9a9a9a;
            }
         }
         .MuiIconButton-root {
            &:has(+ .social-profile__names .link:hover) {
               svg path {
                  fill: #FFFFFF;
               }
            }
            :hover {
               background-color: #333;
               svg path {
                  fill: #FFFFFF;
               }
               + .social-profile__names .link {
                  color: #FFFFFF;
               }
            }
            svg path {
               fill: #9a9a9a;
            }
         }
      }
      &__info {
         display: flex;
         align-items: center;
         gap: 15px;
         color: #7a7a7a;
         svg {
            font-size: 30px;
         }
      }
      &__names {
         display: flex;
         flex-direction: column;
         color: #9a9a9a;
         font-size: 14px;
         word-break: break-all;
         .link {
            color: #7a7a7a;
            transition: all 350ms;
            :hover {
               color: #FFFFFF;
            }
         }
      }
   }
`,Zs=h.div`
   background: #181818;
   padding: 25px;
   border-radius: 10px;
   .header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      &__title {
         font-weight: 500;
         color: #c9c9c9;
      }
   }
   .carousel {
      position: relative;
      margin: 15px 0;
      display: flex;
      align-items: center;
      :hover {
         .overlay {
            opacity: 1;
         }
         .arrow {
            opacity: 1;
            background-color: rgba(0, 0, 0, 0.3);
            svg path {
               fill: #FFFFFF;
            }
         }
      }
      .overlay {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: calc(100%);
         background-color: rgba(0, 0, 0, 0.3); 
         z-index: 99;
         border-radius: 10px;
         opacity: 0;
         transition: opacity 0.3s ease-in-out;
         cursor: pointer;
      }
      .dots {
         position: absolute;
         width: 100%;
         bottom: 5px;
         display: flex;
         z-index: 999;
         justify-content: center;
         align-items: center;
         gap: 10px;
      }
      .arrow {
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         z-index: 999;
         opacity: 0;
         transition: background 350ms, opacity 350ms;
         &__back {
            left: 5px;
         }
         &__forward {
            right: 5px;
         }
      }
      .image {
         border-radius: 10px;
         width: 100%;
         max-height: 300px;
         cursor: pointer;
         object-fit: cover;
         object-position: center;
         display: none;
         &__active {
            display: block;
         }
      }
   }
   .sponsor {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      &__name {
         font-size: 14px;
         color: #c9c9c9;
         opacity: .7;
      }
      &__url {
         font-size: 14px;
         color: #575757;
         text-decoration: none;
         transition: color 350ms;
         :hover {
            color: #b0aeae;
            text-decoration: underline;
         }
      }
   }
   .description {
      margin-top: 15px;
      color: #575757;
      font-size: 14px;
   }
`,en=h(F,Re)`
   padding: 0;
   svg {
      font-size: 10px;
      path {
         transition: fill 350ms;
         fill: ${e=>e.$active?"#FFFFFF":"#333333"};
      }
   }
`,tn=h.div`
   background: #181818;
   border-radius: 10px;
   margin-top: 30px;
   padding-bottom: 20px;
   .title {
      color: #c9c9c9;
      font-weight: 500;
      padding: 25px 25px 0 25px;
   }
   .friend-list {
      max-height: 30vh;
      overflow: auto;
      padding: 0 15px 10px;
      margin: 0 10px;
      ::-webkit-scrollbar {
         width: 5px;
      }
      .friend {
         display: flex;
         justify-content: space-between;
         align-items: center;
         gap: 10px;
         margin-top: 20px;
         .MuiIconButton-root {
            background-color: #333;
            :hover {
               background-color: #555;
            }
            svg path {
               fill: #927CD9;
            }
         }
      }
      .no-friend {
         color: #575757;
         font-size: 14px;
      }
   }
`,sn=h.div`
   background: #181818;
   border-radius: 10px;
   padding: 25px 25px 15px 25px;
   margin-bottom: 25px;
   .header {
      display: flex;
      align-items: center;
      gap: 30px;
      img {
         width: 60px;
         height: 60px;
         border-radius: 50%;
      }
      .MuiOutlinedInput-root {
         background-color: #2d2d2d;
         border-radius: 30px;
         input {
            color: #FFFFFF;
            padding: 20px 30px;
         }
         fieldset {
            border: none;
         }
      }
   }
   .file-container {
      position: relative;
      .file-wrapper {
         display: flex;
         justify-content: center;
         .file {
            width: 100%;
            max-height: 60vh;
            object-fit: cover;
            height: auto;
            border-radius: 10px;
         }
      }
      .clear-file-button {
         position: absolute;
         top: 25px;
         right: -25px;
         transform: translate(-50%, -50%);
         background-color: red;
         width: 30px;
         height: 30px;
         z-index: 99;
         transition: scale 350ms;
         :hover {
            scale: 1.1;
         }
         svg path {
            color: #FFFFFF;
         }
      }
   }
   .tools {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      .MuiButton-root {
         position: relative;
         background-color: transparent;
         color: #7a7a7a;
         border-radius: 30px;
         &.create-post {
            color: #927CD9;
            background-color: #222;
            :hover {
               background-color: #333;
            }
         }
         :not(.create-post):hover {
            color: #FFFFFF;
            background-color: #333333;
         }
         input {
            opacity: 0;
            visibility: hidden;
            width: 100%;
            height: 100%;
            position: absolute;
         }
      }
   }
`,nn=h.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, .8); 
   z-index: 99;
   border-radius: 10px;
   opacity: ${e=>e.isDeleting?1:0};
   visibility: ${e=>e.isDeleting?"visible":"hidden"};
   transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
   display: flex;
   justify-content: center;
   align-items: center;
`,qt=h.div`
   background-color: #181818;
   border-radius: 10px;
   margin-bottom: 25px;
   padding: 25px 25px 15px 25px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   position: relative;
   .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      > .MuiIconButton-root {
         background-color: #333;
         :hover {
            background-color: #555;
         }
         svg path {
            fill: #927CD9;
         }
      }
   }
   .description {
      color: #c9c9c9;
      font-size: 14px;
      /* margin-top: 10px; */
   }
   .file {
      /* width: 100%;
      height: 60vh; */
      max-width: 100%;
      height: auto;
      max-height: 60vh;
      object-fit: cover;
      border-radius: 10px;
      cursor: pointer;
      /* object-fit: scale-down; */
      &__image {
         /* object-fit: cover; */
      }
      &__video {
         /* object-fit: contain; */
         background-color: #0f0f0f;
      }
   }
   .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      .MuiIconButton-root {
         :hover {
            background-color: #333;
         }
         svg path {
            fill: #927CD9;
         }
      }
      .comment {
         margin-left: 15px;
      }
      .count {
         color: #927CD9;
      }
   }
`,on=h.div`
   .text {
      color: #c9c9c9;
      font-size: 14px;
   }
   .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 5px;
      .MuiIconButton-root {
         background-color: #333;
         :hover {
            background-color: #555;
         }
         svg path {
            fill: #927CD9;
         }
      }
   }
`,rn=h(F)`
   :hover {
      background-color: #333;
      svg path {
         fill: #FFFFFF;
      }
   }
   svg path {
      fill: #c9c9c9;
      transition: fill 350ms;
   }
`,an=h(zt)`
   .MuiPaper-root {
      .MuiList-root {
         .MuiMenuItem-root {
            padding: 10px 20px 10px 10px;
            :hover {
               background-color: #333;
            }
            &.delete {
               :hover {
                  color: red;
               }
            }
         }
      }
   }
`,ce=h.div`
   width: 100%;
   height: ${e=>e.height||"1px"};
   background-color: ${e=>e.backgroundColor||"#5e5e5e"};
   margin: ${e=>e.margin||"15px 0"};
`,Bt=(e,i)=>{const{post_id:s,like:n}=i.payload;e.posts=e.posts.map(r=>r.id===s?{...r,liked:n,likes_count:n?r.likes_count+1:r.likes_count-1}:r)},Ht=(e,i)=>{const{post_id:s,save:n}=i.payload;e.posts=e.posts.map(r=>r.id===s?{...r,saved:n}:r)},cn="Dashboard",dt={posts:[],page:1,limit:10,canBeMorePost:!0,friends:[],isMuted:!0,videoData:{isLegal:!1,currentTime:0,isPlaying:!1},postsInProcess:[]},ln=ue({name:cn,initialState:dt,reducers:{setReset:()=>dt,setPosts:(e,i)=>{e.page===1?e.posts=i.payload:e.posts=[...e.posts,...i.payload],e.posts.length+i.payload.length>=e.limit*e.page&&(e.page+=1),i.payload.length<e.limit&&(e.canBeMorePost=!1)},setPost:(e,i)=>{e.posts.unshift(i.payload),e.posts.length+1>=e.limit*e.page&&(e.page+=1)},deletePost:(e,i)=>{const{id:s}=i.payload;e.posts=e.posts.filter(n=>n.id!==s)},setIsMuted:(e,i)=>{e.isMuted=i.payload},setPage:(e,i)=>{e.page=i.payload},setCommentCount:(e,i)=>{const{post_id:s,comments_count:n}=i.payload;e.posts=e.posts.map(r=>r.id===s?{...r,comments_count:n}:r)},decreaseCommentCount:(e,i)=>{const{post_id:s}=i.payload;e.posts=e.posts.map(n=>n.id===s?{...n,comments_count:n.comments_count-1}:n)},editFriendAttribute:(e,i)=>{const{receiver_id:s,canBeFriend:n}=i.payload;e.posts=e.posts.map(r=>r.user.id===s?{...r,canBeFriend:n}:r)},setFriends:(e,i)=>{e.friends=i.payload},setVideoData:(e,i)=>{const{isLegal:s,currentTime:n,isPlaying:r}=i.payload;s?e.videoData={isLegal:s,currentTime:n,isPlaying:r}:e.videoData={isLegal:!1,currentTime:0,isPlaying:!1}},filterFriends:(e,i)=>{const{friend_id:s}=i.payload;e.friends=e.friends.filter(n=>n.id!==s)},setPostInProcess:(e,i)=>{e.postsInProcess.push(i.payload)},removePostInProcess:(e,i)=>{e.postsInProcess=e.postsInProcess.filter(s=>s!==i.payload)},likePost:Bt,savePost:Ht},extraReducers:e=>me(e,_)}),{reducer:dn,actions:un}=ln,A=un,te="Dashboard/request",_={getPosts:T(`${te}/getPosts`),createPost:T(`${te}/createPost`),likePost:T(`${te}/likePost`),savePost:T(`${te}/savePost`),addFriend:T(`${te}/addFriend`),acceptFriendship:T(`${te}/acceptFriendship`),rejectFriendship:T(`${te}/rejectFriendship`),getFriends:T(`${te}/getFriends`),deleteFriend:T(`${te}/deleteFriend`),deletePost:T(`${te}/deletePost`)},pn=[S({actionType:_.getPosts.type,takeType:k.TAKE_LATEST,*func({payload:e}){const{page:i,limit:s,user_id:n}=e,r=`?page=${i}&limit=${s}${n?`&user_id=${n}`:""}&is_removed=false`,o=yield E($,N.GET,`${P.getPosts}${r}`);yield y(A.setPosts((o==null?void 0:o.data)||[]))}}),S({actionType:_.createPost.type,takeType:k.TAKE_LATEST,*func({payload:e}){const i=yield E($,N.POST,`${P.createPost}`,e.data,e.files);yield y(A.setPost(i.data)),yield y(I("Post is created successfully"))}}),S({actionType:_.likePost.type,takeType:k.TAKE_LATEST,*func({payload:e}){const i=yield E($,N.POST,`${P.likeUnlikePost}`,e);yield y(A.likePost(e)),yield y(I(i.message))}}),S({actionType:_.savePost.type,takeType:k.TAKE_LATEST,*func({payload:e}){const i=yield E($,N.POST,`${P.saveUnsavePost}`,e);yield y(A.savePost(e)),yield y(I(i.message))}}),S({actionType:_.addFriend.type,takeType:k.TAKE_LATEST,*func({payload:e}){const{data:{receiver_id:i},sender_id:s}=e,n=yield E($,N.POST,`${P.addFriend}`,e.data);yield y(A.editFriendAttribute({receiver_id:i,canBeFriend:{sender_id:s}})),yield y(I(n.message))}}),S({actionType:_.acceptFriendship.type,takeType:k.TAKE_LATEST,*func({payload:e}){const i=yield E($,N.PUT,`${P.acceptFriendship}`,e);yield y(A.editFriendAttribute({receiver_id:e.sender_id,canBeFriend:!1})),yield y(I(i.message))}}),S({actionType:_.rejectFriendship.type,takeType:k.TAKE_LATEST,*func({payload:e}){const i=yield E($,N.PUT,`${P.rejectFriendship}`,e);yield y(A.editFriendAttribute({receiver_id:e.sender_id,canBeFriend:!0})),yield y(I(i.message))}}),S({actionType:_.getFriends.type,takeType:k.TAKE_LATEST,*func({payload:e}){const{query:i}=e,s=yield E($,N.GET,`${P.getFriends}${i}`);yield y(A.setFriends(s.data))}}),S({actionType:_.deleteFriend.type,takeType:k.TAKE_LATEST,*func({payload:e}){const{user_id:i,friend_id:s}=e,n=yield E($,N.DELETE,`${P.deleteFriend}?user_id=${i}&friend_id=${s}`);yield y(I(n.message)),yield y(A.filterFriends(e)),yield y(A.editFriendAttribute({receiver_id:s,canBeFriend:!0}))}}),S({actionType:_.deletePost.type,takeType:k.TAKE_EVERY,*func({payload:e}){const{id:i}=e;yield y(A.setPostInProcess(i));const s=yield E($,N.DELETE,`${P.deletePost}/${i}`);yield y(I(s.message)),yield y(A.deletePost(e)),yield y(A.removePostInProcess(i))}})],D=({idle:e,loading:i,success:s,failure:n},r)=>{const o=C(),[a,,d]=r.type.split("/"),c=v(u=>{var m,g;return(g=(m=u[a])==null?void 0:m.requestStatus)==null?void 0:g[d]})??V.IDLE,f=v(u=>{var m,g;return(g=(m=u[a])==null?void 0:m.actionPayload)==null?void 0:g[d]})??null,p=()=>{o(we.idle(r.type))};j.useEffect(()=>{switch(c){case V.IDLE:e==null||e({idleAction:p,payload:f}),i==null||i(!1);break;case V.LOADING:i==null||i(!0);break;case V.SUCCESS:s==null||s({idleAction:p,payload:f}),i==null||i(!1);break;case V.FAILURE:n==null||n({idleAction:p,payload:f}),i==null||i(!1);break;default:throw Error("useHttpResponse: undefined requestStatus value!")}},[c])},mn=h.div`
   display: flex;
   align-items: center;
   gap: 15px;
   .user-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      ${e=>e.clickable&&ie`
         cursor: pointer;
         :hover {
            + .user-info .user-info__name {
               color: #FFFFFF;   
            }  
         }
      `}
   }
   .user-info {
      ${e=>e.justImage&&ie`
         display: none;
      `}
      &__name {
         color: #c9c9c9;
         font-size: ${e=>e.small?"16px":"18px"};
         ${e=>e.clickable&&ie`
            cursor: pointer;
            transition: color 350ms;
            :hover {
               color: #FFFFFF;
            }
         `}
      }
      &__position {
         margin-top: 2px;
         color: #9d9a9a;
         font-size: ${e=>e.small?"12px":"14px"};
      }
   }
`,fn=h.div`
   background-color: ${e=>e.bgColor||"transparent"};
   border-radius: 50%;
   border: 1px solid ${e=>e.color||"#FFFFFF"};
   min-width: 60px;
   height: 60px;
   display: flex;
   justify-content: center;
   align-items: center;
   span {
      color: ${e=>e.color||"#FFFFFF"};
      font-size: ${e=>e.fontSize};
   }
`,ke=e=>{var i,s;return t.jsx(fn,{fontSize:e.fontSize,children:t.jsxs("span",{children:[" ",((s=(i=e.name)==null?void 0:i[0])==null?void 0:s.trim())||"?"," "]})})};ke.propTypes={name:l.string,fontSize:l.string,className:l.string};ke.defaultProps={name:"?",fontSize:"35px",className:""};const fe=e=>{const i=J(),s=de(),n=()=>{const o=`/profile/${e.name.split(" ").join("")}/${e.id}`;o!==s.pathname&&i(o)},r=e.clickable?{onClick:n}:{};return t.jsxs(mn,{small:e.small,justImage:!e.name.trim()&&!e.position.trim(),clickable:e.clickable,children:[e.src?t.jsx("img",{...r,className:"user-img",src:e.src,alt:"user"}):t.jsx(ke,{...r,className:"user-img",fontSize:e.fontSize,name:e.name}),e.displayName&&t.jsxs("div",{className:"user-info",children:[t.jsxs("div",{...r,className:"user-info__name",children:[" ",e.name," "]}),t.jsxs("div",{className:"user-info__position",children:[" ",e.position," "]})]})]})},hn=(e,i,s)=>{const n=e[i];return e.clickable&&n===void 0?new Error(`The prop '${i}' is required when 'clickable' is set to true in ${s}.`):null};fe.propTypes={src:l.string,name:l.string,position:l.string,small:l.bool,fontSize:l.string,displayName:l.bool,clickable:l.bool,id:hn};fe.defaultProps={src:"",name:"",position:"",small:!1,fontSize:"35px",clickable:!0,displayName:!0};const Z=({name:e,type:i}={})=>!e||!i?"":`http://localhost:3000/${e}.${i}`,Q=Object.freeze({IMAGE:"image",VIDEO:"video"}),xn=Object.freeze({MP4:"mp4"}),ut={value:""},gn=()=>{const e=C(),[i,s]=j.useState(null),[n,r]=j.useState([]),{authorizedUser:o}=v(g=>g.AppConfig.init),{loading:a}=v(g=>g.Dashboard),{registerHandler:d,form:c}=pe({defaultValues:ut}),f=async()=>{if(!c.getValues("value")&&!n.length){e(I("Write something or upload an image, audio, attachment to create a post!",{variant:X.ERROR}));return}const g={data:{description:c.getValues("value"),user_id:o.id},files:n};e(_.createPost(g))},p=g=>{const b=g.target.files;if(b.length){const x=b[0],[O,B]=x.type.split("/");if(O===Q.VIDEO&&B!==xn.MP4){e(I("Invalid video format! You can only upload mp4 video.",{variant:X.ERROR}));return}r([...b]);const re=URL.createObjectURL(x);s({url:re,type:x.type.split("/")[0]}),URL.revokeObjectURL(x)}},u=({url:g,type:b})=>{switch(b){case Q.IMAGE:return t.jsx("img",{loading:"lazy",className:"file",src:g,alt:"user-post"});case Q.VIDEO:return t.jsxs("video",{id:"video",className:"file",controls:!0,preload:"metadata",children:[t.jsx("source",{src:g+"#t=0.5",type:"video/mp4"}),"Your browser does not support the video tag."]},g);default:throw Error("Undefied file type: "+b)}},m=()=>{s(null),r([])};return D({success:({idleAction:g})=>{c.reset(ut),s(null),g()}},_.createPost()),t.jsxs(sn,{children:[t.jsxs("div",{className:"header",children:[t.jsx(fe,{name:o.name,clickable:!1,src:Z(o.img),displayName:!1}),t.jsx(L,{...d("value"),placeholder:"What's on your mind...",fullWidth:!0})]}),t.jsx("div",{className:"file-container",children:i&&t.jsxs(t.Fragment,{children:[t.jsx(ce,{margin:"20px 0"}),t.jsxs("div",{className:"file-wrapper",children:[" ",u(i)," "]}),t.jsx(F,{disabled:a==null?void 0:a.createPost,className:"clear-file-button",onClick:m,children:t.jsx(Ii,{})})]})}),t.jsx(ce,{margin:"20px 0"}),t.jsxs("div",{className:"tools",children:[t.jsxs(q,{startIcon:t.jsx(Ri,{}),component:"label",onChange:p,children:["Image",t.jsx("input",{type:"file",accept:"image/*"})]}),t.jsxs(q,{startIcon:t.jsx(Ai,{}),component:"label",onChange:p,children:["Video",t.jsx("input",{type:"file",accept:"video/*"})]}),t.jsx(q,{startIcon:t.jsx(Mi,{}),children:"Music"}),t.jsx(q,{startIcon:t.jsx(Li,{}),children:"Attachment"}),t.jsx(q,{endIcon:a!=null&&a.createPost?t.jsx(z,{size:20}):t.jsx(Et,{}),className:"create-post",onClick:f,disabled:a==null?void 0:a.createPost,children:"POST"})]})]})},he="PostModal/request",H={getSpecificPost:T(`${he}/getSpecificPost`),getComments:T(`${he}/getComments`),createComment:T(`${he}/createComment`),likeComment:T(`${he}/likeComment`),deleteComment:T(`${he}/deleteComment`),editComment:T(`${he}/editComment`)},yn=[S({actionType:H.getSpecificPost.type,takeType:k.TAKE_LATEST,*func({payload:e}){const{post_id:i}=e,s=yield E($,N.GET,`${P.getPostById}/${i}`);yield y(K.setPostData((s==null?void 0:s.data)||{}))}}),S({actionType:H.getComments.type,takeType:k.TAKE_LATEST,*func({payload:e}){const{page:i,limit:s,post_id:n}=e,r=`?post_id=${n}&page=${i}&limit=${s}&is_removed=false`,o=yield E($,N.GET,`${P.getComments}${r}`);yield y(K.setComments((o==null?void 0:o.data)||[]))}}),S({actionType:H.createComment.type,takeType:k.TAKE_LATEST,*func({payload:e}){const i=yield E($,N.POST,`${P.createComment}`,e);yield y(K.setComment(i.data)),yield y(I(i.message))}}),S({actionType:H.likeComment.type,takeType:k.TAKE_LATEST,*func({payload:e}){const i=yield E($,N.POST,`${P.likeComment}`,e);yield y(K.likeComment({id:e.id,data:i.data})),yield y(I(i.message))}}),S({actionType:H.deleteComment.type,takeType:k.TAKE_EVERY,*func({payload:e}){const i=yield E($,N.DELETE,`${P.deleteComment}/${e.id}`);yield y(K.deleteComment({id:e.id})),yield y(A.decreaseCommentCount({post_id:e.post_id})),yield y(I(i.message)),e.clearCommentIdsFunc()}}),S({actionType:H.editComment.type,takeType:k.TAKE_EVERY,*func({payload:e}){const i=yield E($,N.PUT,`${P.editComment}`,e.data);yield y(K.editComment(e.data)),yield y(I(i.message)),e.resetHandler()}})],bn="PostModal",pt={isOpen:!1,page:1,limit:10,canBeMoreComment:!0,postData:{},comments:[],videoData:{currentTime:0,isPlaying:!1}},jn=ue({name:bn,initialState:pt,reducers:{setReset:()=>pt,setPostData:(e,i)=>{e.postData=i.payload},setComments:(e,i)=>{e.comments=[...e.comments,...i.payload],e.comments.length+i.payload.length>=e.limit*e.page&&(e.page+=1),i.payload.length<e.limit&&(e.canBeMoreComment=!1)},handleModal:(e,i)=>{e.isOpen=i.payload},setComment:(e,i)=>{e.comments.unshift(i.payload),e.postData.comments_count++},likeComment:(e,i)=>{const{id:s,data:n}=i.payload;e.comments=e.comments.map(r=>r.id===s?n:r)},deleteComment:(e,i)=>{const{id:s}=i.payload;e.comments=e.comments.filter(n=>n.id!==s),e.postData.comments_count--},editComment:(e,i)=>{const{id:s,comment:n}=i.payload;e.comments=e.comments.map(r=>r.id===s?{...r,comment:n}:r)},setVideoData:(e,i)=>{e.videoData=i.payload},likePost:Bt,savePost:Ht},extraReducers:e=>me(e,H)}),{actions:vn,reducer:_n}=jn,K=vn,He=({id:e})=>{const i=C(),{authorizedUser:s}=v(r=>r.AppConfig.init),n=()=>{const r={data:{receiver_id:e,type:ee.REQUEST_FOR_FRIENDSHIP},sender_id:s.id};i(_.addFriend(r))};return t.jsx(M,{title:"Add Friend",placement:"top",children:t.jsx(F,{onClick:n,children:t.jsx(Ui,{})})})};He.propTypes={id:l.number.isRequired};const Ke=({sender_id:e})=>{const i=C(),{authorizedUser:s}=v(o=>o.AppConfig.init),n=()=>{const o={sender_id:e};i(_.acceptFriendship(o))},r=()=>{const o={sender_id:e};i(_.rejectFriendship(o))};return D({success:({idleAction:o})=>{o(),i(oe.getUnseenNotifications({query:`?is_removed=false&seen=false&receiver_id=${s.id}`}))}},_.rejectFriendship()),t.jsx(on,{children:t.jsxs("div",{className:"buttons",children:[t.jsx(M,{title:"Accept friendship request",children:t.jsx(F,{onClick:n,children:t.jsx(Oi,{})})}),t.jsx(M,{title:"Reject friendship request",children:t.jsx(F,{onClick:r,children:t.jsx(wt,{})})})]})})};Ke.propTypes={sender_id:l.number.isRequired};const Fn="Notifications",mt={notifications:[],targetNotificationIds:[],targetRemovedNotificationsIds:[],page:1,limit:10,canBeMore:!0},kn=ue({name:Fn,initialState:mt,reducers:{setReset:()=>mt,setNotifications:(e,i)=>{e.notifications=[...e.notifications,...i.payload]},setNotification:(e,i)=>{e.notifications.unshift(i.payload)},filterNotifications:(e,i)=>{const{notification_ids:s}=i.payload;e.notifications=e.notifications.filter(n=>!s.includes(n.id))},unshiftNotification:(e,i)=>{e.notifications.unshift(i.payload)},markNotificationsSeen:e=>{e.notifications=e.notifications.map(i=>({...i,seen:!0}))},markNotificationsRead:(e,i)=>{const{notification_ids:s}=i.payload;e.notifications=e.notifications.map(n=>s.includes(n.id)?{...n,read:!0}:n)},setTargetNotificationIds:(e,i)=>{e.targetNotificationIds=i.payload},setTargetRemovedNotificationIds:(e,i)=>{e.targetRemovedNotificationsIds=i.payload},setPage:(e,i)=>{e.page=i.payload},setCanBeMore:(e,i)=>{i.payload&&(e.page+=1),e.canBeMore=i.payload}},extraReducers:e=>me(e,U)}),{reducer:Cn,actions:En}=kn,Y=En,Te=Object.freeze({ACCEPT:1,REJECT:2}),xe="Notifications/request",U={getNotifications:T(`${xe}/getNotifications`),markNotificationsSeen:T(`${xe}/markNotificationsSeen`),markNotificationsRead:T(`${xe}/markNotificationsRead`),deleteNotifications:T(`${xe}/deleteNotifications`),friendship:T(`${xe}/friendship`),cancelFriendshipRequest:T(`${xe}/cancelFriendshipRequest`)},wn=[S({actionType:U.getNotifications.type,takeType:k.TAKE_LATEST,*func({payload:e}){var s,n;const i=yield E($,N.GET,`${P.getNotifications}${e.queries}`);yield y(Y.setNotifications(((s=i==null?void 0:i.data)==null?void 0:s.notifications)||[])),yield y(Y.setCanBeMore(((n=i==null?void 0:i.data)==null?void 0:n.more)||!1))}}),S({actionType:U.markNotificationsSeen.type,takeType:k.TAKE_LATEST,*func({payload:e}){yield E($,N.PUT,`${P.markNotificationsSeen}`,e),yield y(Y.markNotificationsSeen()),yield y(ge.setUnseenNotificationsCount(0))}}),S({actionType:U.markNotificationsRead.type,takeType:k.TAKE_LATEST,*func({payload:e}){yield y(Y.setTargetNotificationIds(e.data.notification_ids)),yield E($,N.PUT,`${P.markNotificationsRead}`,e.data),yield y(Y.markNotificationsRead(e.data)),e.snackbar&&(yield y(I("Marked as read")))}}),S({actionType:U.deleteNotifications.type,takeType:k.TAKE_LATEST,*func({payload:e}){yield y(Y.setTargetRemovedNotificationIds(e.notification_ids)),yield E($,N.DELETE,`${P.deleteNotifications}`,e),yield y(I("Notifications is deleted")),yield y(Y.filterNotifications(e))}}),S({actionType:U.friendship.type,takeType:k.TAKE_LATEST,*func({payload:e}){const i=yield E($,N.POST,`${P.friendship}`,e);yield y(Y.filterNotifications({notification_ids:[e.notification_id]})),yield y(I(i.message)),e.type===Te.ACCEPT&&(yield y(Y.setNotification(i.data)))}}),S({actionType:U.cancelFriendshipRequest.type,takeType:k.TAKE_LATEST,*func({payload:e}){const{receiver_id:i}=e,s=yield E($,N.PUT,`${P.cancelFriendshipRequest}`,e);yield y(I(s.message)),yield y(A.editFriendAttribute({receiver_id:i,canBeFriend:!0}))}})],Ve=({receiver_id:e})=>{const i=C(),s=()=>{const n={receiver_id:e,type:ee.REQUEST_FOR_FRIENDSHIP};i(U.cancelFriendshipRequest(n))};return t.jsx(M,{title:"Cancel friendship request",children:t.jsx(F,{onClick:s,children:t.jsx(Di,{})})})};Ve.propTypes={receiver_id:l.number.isRequired};const Tn={anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},id:"post-settings-menu",MenuListProps:{"aria-labelledby":"post-settings-button"}},Kt=({id:e})=>{const i=C(),[s,n]=j.useState(null),r=!!s,o=c=>{n(c.currentTarget)},a=()=>{n(null)},d=()=>{i(_.deletePost({id:e})),a()};return t.jsxs("div",{children:[t.jsx(rn,{id:"post-settings-button","aria-controls":r?"post-settings-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:o,children:t.jsx(Tt,{})}),t.jsx(an,{anchorEl:s,open:r,onClose:a,...Tn,children:t.jsxs(se,{className:"delete",onClick:d,children:[t.jsx(Ie,{})," Delete"]})})]})};Kt.propTypes={id:l};const Vt=({data:e})=>{var o,a,d,c;const{authorizedUser:i}=v(f=>f.AppConfig.init),{loading:s}=v(f=>f.Dashboard),{loading:n}=v(f=>f.Notifications),r=()=>{var f,p;return((f=e==null?void 0:e.canBeFriend)==null?void 0:f.sender_id)===i.id?t.jsx(Ve,{receiver_id:e.user.id}):((p=e==null?void 0:e.canBeFriend)==null?void 0:p.sender_id)===e.user.id?t.jsx(Ke,{sender_id:e.user.id}):e!=null&&e.canBeFriend?t.jsx(He,{id:e.user.id}):e.user.id===i.id?t.jsx(Kt,{id:e.id}):null};return t.jsxs("div",{className:"header",children:[t.jsx(fe,{name:`${((o=e==null?void 0:e.user)==null?void 0:o.name)||""} ${((a=e==null?void 0:e.user)==null?void 0:a.surname)||""}`,position:((d=e==null?void 0:e.user)==null?void 0:d.position)||"",src:Z((c=e==null?void 0:e.user)==null?void 0:c.img),id:e.user.id}),s!=null&&s.addFriend||n!=null&&n.cancelFriendshipRequest||s!=null&&s.acceptFriendship?t.jsxs("div",{children:[" ",t.jsx(z,{color:"#FFF",size:25})," "]}):r()]})};Vt.propTypes={data:l.object.isRequired};const We=({data:e,likeHandler:i,videoRef:s})=>{const n=C(),r=()=>{const a={save:!e.saved,post_id:e.id};n(_.savePost(a))},o=()=>{s.current&&(n(K.setVideoData({currentTime:s.current.currentTime,isPlaying:!s.current.paused})),s.current.pause()),n(K.setPostData(e)),n(K.handleModal(le.OPEN))};return t.jsxs("div",{className:"buttons",children:[t.jsxs("div",{className:"buttons__group",children:[t.jsx(M,{title:e.liked?"Unlike":"Like",children:t.jsx(F,{onClick:i,children:e.liked?t.jsx(Oe,{}):t.jsx(De,{})})}),t.jsxs("span",{className:"count",children:[" ",e.likes_count," "]}),t.jsx(M,{title:"Comment",children:t.jsx(F,{onClick:o,className:"comment",children:t.jsx(Nt,{})})}),t.jsxs("span",{className:"count",children:[" ",e.comments_count," "]})]}),t.jsx(M,{title:e.saved?"Unsave":"Save",children:t.jsx(F,{onClick:r,children:e.saved?t.jsx(St,{}):t.jsx($t,{})})})]})};We.propTypes={data:l.object.isRequired,likeHandler:l.func.isRequired,videoRef:l.shape({current:l.oneOfType([l.instanceOf(Element),l.oneOf([null])])})};We.defaultProps={videoRef:{current:null}};const Nn={root:null,rootMargin:"0px",threshold:0},je=({options:e={},dependencies:i=[],triggerOnce:s=!1,element:n=null})=>{const r=j.useRef(null),[o,a]=j.useState(!1),[d,c]=j.useState(!1),[f,p]=j.useState(0);return j.useEffect(()=>{const u=(g,b)=>{const x=g[0];c(x),a(x.isIntersecting),p(Math.round(x.intersectionRatio*100)),x.isIntersecting&&s&&b.unobserve(r.current)},m=new IntersectionObserver(u,{...Nn,...e});return n&&(r.current=n),r.current&&m.observe(r.current),()=>{r.current&&m.unobserve(r.current)}},[...i,e,n]),{ref:r,isIntersecting:o,entry:d,intersectionRatio:f}},Sn={mp4:Q.VIDEO,png:Q.IMAGE,jpg:Q.IMAGE,jpeg:Q.IMAGE},Wt=e=>Sn[e],R=h(zi)`
   background-color: #292828;
   ::after {
      background: linear-gradient(
         90deg,
         transparent,
         rgb(183 176 176 / 4%),
         transparent
      );
   }
`,$n=h(qt)`
   .header {
      display: flex;
      align-items: center;
      justify-content: initial;
      gap: 15px;
      .user {
         display: flex;
         flex-direction: column;
         gap: 10px;
      }
   }
   .body {
      display: flex;
      flex-direction: column;
      gap: 15px;
   }
   .footer {
      display: flex;
      justify-content: space-between;
      &__buttons {
         display: flex;
         gap: 15px;
      }
   }
`,Pn=h.div`
   display: flex;
   gap: 20px;
   .content {
      flex: 1;
      &__header {
         display: flex;
         justify-content: space-between;
         align-items: center;
         .user {
            flex: 1;
            .MuiSkeleton-root:nth-child(1) {
               margin-bottom: 10px;
            }
         }
      }
      &__body {
         margin: 15px 0;
         display: flex;
         flex-direction: column;
         gap: 10px;
      }
      &__footer {
         display: flex;
         gap: 10px;
      }
   }
`,In=h.div`
   display: flex;
   align-items: center;
   gap: 30px;
   background: #181818;
   padding: 15px 25px;
   border-radius: 10px;
   :not(:last-child) {
      margin-bottom: 20px;
   }
   .content {
      flex: 1;
      .MuiSkeleton-root:nth-child(1) {
         margin-bottom: 10px;
      }
   }
`,Rn=h.div`
   display: flex;
   align-items: center;
   gap: 20px;
   margin-top: 20px;
   .content {
      flex: 1;
      .MuiSkeleton-root:nth-child(1) {
         margin-bottom: 10px;
      }
   }
`,Ae=({data:e,src:i,likeHandler:s,inPostModal:n})=>{const r=C(),o=j.useRef(null),a=()=>{e.liked||s()},d=()=>{clearTimeout(o.current),o.current?(a(),o.current=null):o.current=setTimeout(()=>{r(K.setPostData(e)),r(K.handleModal(le.OPEN)),o.current=null},300)};return i?t.jsx("img",{...n?{onDoubleClick:a}:{onClick:d},loading:"lazy",className:"file file__image",src:i,alt:"post-content"}):t.jsx(R,{animation:"wave",variant:"rounded",width:"100%",height:300})};Ae.propTypes={data:l.object.isRequired,src:l.string.isRequired,likeHandler:l.func.isRequired,inPostModal:l.bool};Ae.defaultProps={inPostModal:!1};const Gt=({data:e,src:i,videoRef:s,isVideoIntersecting:n})=>{const r=C(),{isMuted:o,videoData:{isLegal:a,currentTime:d,isPlaying:c}}=v(f=>f.Dashboard);return j.useEffect(()=>{s.current&&(n?s.current.paused&&s.current.play():s.current.paused||s.current.pause())},[n,e.id]),j.useEffect(()=>{!s.current||!a||!n||(s.current.currentTime=d,c&&s.current.play(),r(A.setVideoData({isLegal:!1})))},[a,n]),t.jsxs("video",{ref:s,className:"file file__video",controls:n,preload:"metadata",loop:!0,muted:o,onVolumeChange:f=>r(A.setIsMuted(f.target.muted)),children:[t.jsx("source",{src:i+"#t=0.5",type:"video/mp4"}),"Your browser does not support the video tag."]},i)};Gt.propTypes={data:l.object.isRequired,src:l.string.isRequired,videoRef:l.object.isRequired,isVideoIntersecting:l.bool.isRequired};const An={rootMargin:"100% 0px"},Mn={threshold:1},Ln={threshold:.7},Me=({data:e,isLastElement:i,fetchMorePost:s})=>{var O;const n=C(),[r,o]=j.useState(""),{postsInProcess:a}=v(B=>B.Dashboard),{ref:d,isIntersecting:c}=je({options:An}),{ref:f,isIntersecting:p}=je({options:Mn,triggerOnce:!0}),{ref:u,isIntersecting:m}=je({options:Ln,dependencies:[r]}),g=()=>{const B={like:!e.liked,post_id:e.id};n(_.likePost(B))},b=Wt((O=e.files[0])==null?void 0:O.type),x={[Q.IMAGE]:t.jsx(Ae,{data:e,likeHandler:g,src:r}),[Q.VIDEO]:t.jsx(Gt,{data:e,src:r,videoRef:u,isVideoIntersecting:m})};return j.useEffect(()=>{if(c){const re=d.current.dataset.src;o(re)}else o("")},[c,e]),j.useEffect(()=>{p&&s()},[p]),t.jsxs(qt,{...e.files.length?{"data-src":Z(e.files[0])}:{},ref:B=>{e.files.length&&(d.current=B),i&&(f.current=B)},children:[t.jsx(nn,{isDeleting:a.includes(e.id),children:t.jsx(z,{color:"#FFFFFF",size:80})}),t.jsx(Vt,{data:e}),e.description&&t.jsxs("p",{className:"description",children:[" ",e.description," "]}),!!e.files.length&&x[b],t.jsx(We,{likeHandler:g,data:e,...b===Q.VIDEO?{videoRef:u}:{}})]})};Me.propTypes={data:l.object.isRequired,isLastElement:l.bool,fetchMorePost:l.func};Me.defaultProps={isLastElement:!1,fetchMorePost:()=>{}};const Ce=({count:e})=>Array.from({length:e}).map((i,s)=>t.jsxs($n,{children:[t.jsxs("div",{className:"header",children:[t.jsx(R,{animation:"wave",variant:"circular",width:60,height:60}),t.jsxs("div",{className:"user",children:[t.jsx(R,{animation:"wave",variant:"rounded",width:350,height:15}),t.jsx(R,{animation:"wave",variant:"rounded",width:250,height:15})]})]}),t.jsxs("div",{className:"body",children:[t.jsx(R,{animation:"wave",variant:"rounded",width:"100%",height:15}),t.jsx(R,{animation:"wave",variant:"rounded",width:"75%",height:15}),t.jsx(R,{animation:"wave",variant:"rounded",width:"100%",height:250})]}),t.jsxs("div",{className:"footer",children:[t.jsxs("div",{className:"footer__buttons",children:[t.jsx(R,{animation:"wave",width:60,height:30}),t.jsx(R,{animation:"wave",width:60,height:30})]}),t.jsx("div",{children:t.jsx(R,{animation:"wave",width:60,height:30})})]})]},s));Ce.propTypes={count:l.number};Ce.defaultProps={count:1};const Ne=({count:e})=>Array.from({length:e}).map((i,s)=>t.jsxs(Pn,{children:[t.jsx(R,{animation:"wave",variant:"circular",width:50,height:50}),t.jsxs("div",{className:"content",children:[t.jsxs("div",{className:"content__header",children:[t.jsxs("div",{className:"user",children:[t.jsx(R,{animation:"wave",variant:"rounded",width:"75%",height:10}),t.jsx(R,{animation:"wave",variant:"rounded",width:"50%",height:10})]}),t.jsx(R,{animation:"wave",variant:"circular",width:20,height:20})]}),t.jsx("div",{className:"content__body",children:t.jsx(R,{animation:"wave",variant:"rounded",width:"100%",height:15})}),t.jsxs("div",{className:"content__footer",children:[t.jsx(R,{animation:"wave",variant:"rounded",width:40,height:15}),t.jsx(R,{animation:"wave",variant:"rounded",width:40,height:15}),t.jsx(R,{animation:"wave",variant:"rounded",width:40,height:15})]})]})]},s));Ne.propTypes={count:l.number};Ne.defaultProps={count:1};const Ge=({count:e})=>Array.from({length:e}).map((i,s)=>t.jsxs(In,{children:[t.jsx(R,{animation:"wave",variant:"circular",width:60,height:60}),t.jsxs("div",{className:"content",children:[t.jsx(R,{animation:"wave",variant:"rounded",width:"100%",height:15}),t.jsx(R,{animation:"wave",variant:"rounded",width:"70%",height:15})]}),t.jsx(R,{animation:"wave",variant:"circular",width:20,height:20})]},s));Ge.propTypes={count:l.number};Ge.defaultProps={count:1};const Ye=({count:e})=>Array.from({length:e}).map((i,s)=>t.jsxs(Rn,{children:[t.jsx(R,{animation:"wave",variant:"circular",width:60,height:60}),t.jsxs("div",{className:"content",children:[t.jsx(R,{animation:"wave",variant:"rounded",width:"100%",height:15}),t.jsx(R,{animation:"wave",variant:"rounded",width:"70%",height:15})]}),t.jsx(R,{animation:"wave",variant:"circular",width:30,height:30})]},s));Ye.propTypes={count:l.number};Ye.defaultProps={count:1};const Un=()=>{const e=C(),{posts:i,page:s,limit:n,canBeMorePost:r,loading:o}=v(d=>d.Dashboard),a=()=>{r&&e(_.getPosts({page:s,limit:n}))};return t.jsxs("div",{className:"posts-wrapper",children:[i.map((d,c)=>t.jsx(Me,{data:d,...i.length-1===c?{fetchMorePost:a,isLastElement:!0}:{}},d.id)),(o==null?void 0:o.getPosts)&&t.jsx(Ce,{count:2}),(o==null?void 0:o.getPosts)&&t.jsx("div",{className:"loading-container",children:t.jsx(z,{size:50})})]})},On=()=>{const e=C(),{loading:i}=v(n=>n.Dashboard),{authorizedUser:s}=v(n=>n.AppConfig.init);return D({success:({idleAction:n})=>{n()}},_.createPost()),D({success:({idleAction:n})=>{n(),e(oe.getUnseenNotifications({query:`?is_removed=false&seen=false&receiver_id=${s.id}`})),e(_.getFriends({query:`?user_id=${s.id}&is_removed=false`}))}},_.acceptFriendship()),j.useEffect(()=>(e(_.getPosts({page:1,limit:10})),e(_.getFriends({query:`?user_id=${s.id}&is_removed=false`})),()=>{e(A.setReset()),e(K.handleModal(le.CLOSE))}),[]),t.jsxs(Xs,{children:[t.jsx(gn,{}),(i==null?void 0:i.createPost)&&t.jsx(Ce,{}),t.jsx(Un,{})]})},Dn=h.div`
   width: 100vw;
   min-height: 100vh;
   height: auto;
   overflow: hidden;
`,Yt=h(Dn)`
   display: flex;
   justify-content: center;
   align-items: center;
   background: linear-gradient(to right, #e2e2e2, #c9d6ff);
   .container {
      background: #FFFFFF;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 15px;
      display: flex;
      .sign-in, .sign-up {
         width: 500px;
         padding: 50px 70px;
         display: flex;
         flex-direction: column;
         gap: 25px;
         transition: width 350ms;
         &__title {
            font-weight: 600;
            text-align: center;
            font-size: 35px;
         }
         &__icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            .MuiIconButton-root {
               border: 1px solid #EAEAEA;
               border-radius: 10px;
            }
         }
         &__horizontal-line {
            width: 100%;
            height: 1px;
            background-color: #EAEAEA;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 15px 0;
         }
         &__or {
            color: grey;
            font-size: 14px;
            padding: 0 10px;
            background-color: #FFFFFF;
         }
         &__forgot-password {
            color: grey;
            font-size: 14px;
         }
         &__button {
            margin-top: 20px;
            position: relative;
         }
         &__sign-up, &__sign-in {
            color: grey;
            font-size: 14px;
            text-align: center;
            display: none;
            a {
               color: #4A329A;
               :hover {
                  font-weight: 600;
               }
            }
         }
      }
      .overlay {
         background-color: #4A329A;
         padding: 25px 50px;
         border-radius: 100px 15px 15px 100px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         gap: 20px;
         width: 500px;
         transition: width 600ms, scale 500ms 350ms;
         &__title {
            font-weight: 600;
            color: #FFFFFF;
            font-size: 30px;
         }
         &__description {
            color: #e6e3e3;
            text-align: center;
         }
         &__button {
            border: 1px solid #FFFFFF;
            border-radius: 50px;
            width: 50%;
            transition: all 350ms;
            :hover {
               width: 60%;
               background-color: #FFFFFF;
               color: #4A329A;
               font-weight: 600;
            }
         }
      }
   }
   
   @media (max-width: 1200px) {
      .container {
         .sign-in, .overlay {
            width: 450px;
         }
      }
   }

   @media (max-width: 900px) {
      .container {
         width: 90%;
         .sign-in, .sign-up {
            width: 100%;
            &__sign-up {
               display: block;
            }
         }
         .overlay {
            flex: 0;
            width: 0;
            padding: 0;
            opacity: 0;
            scale: 0;
            visibility: hidden;
            overflow: hidden;
         }
      }
   }

   @media (max-width: 600px) {
      .container {
         width: 95%;
         .sign-in, .sign-up {
            padding: 50px 25px;
         }
      }
   }
`,Qt=e=>{var n,r,o,a,d,c,f,p;console.log(e.data," data");const i=u=>{be.isEmpty(e.control)||e.field.onChange(u.target.value),e.onChange(u,u.target.value)},s=()=>be.isEmpty(e.control)?e.value!==null?{value:e.value}:{}:{value:e.field.value};return t.jsxs(Ut,{fullWidth:e.fullWidth,$withLabel:!!e.label,children:[t.jsx(Ot,{shrink:!0,error:e.error||!!((n=e.fieldState)!=null&&n.error),htmlFor:e.id,palette:e.palette,children:e.label}),t.jsxs(_s,{id:e.id,...s(),startAdornment:e.startAdornment,endAdornment:e.endAdornment,onChange:i,onBlur:((r=e.field)==null?void 0:r.onBlur)||e.onBlur,name:((o=e.field)==null?void 0:o.name)||e.name,inputRef:((a=e.field)==null?void 0:a.ref)||e.inputRef,type:e.type,placeholder:e.placeholder,notched:!1,error:e.error||!!((d=e.fieldState)!=null&&d.error),color:e.palette.defaultColor,palette:e.palette,children:[!!e.emptyValue&&t.jsxs(se,{value:"",children:[" ",t.jsx("em",{children:e.emptyValue})," "]}),e.data.map((u,m)=>t.jsxs(se,{value:u.id,children:[" ",u.name," "]},u.id||m))]}),t.jsx(_t,{error:e.error||!!((c=e.fieldState)!=null&&c.error),children:((p=(f=e.fieldState)==null?void 0:f.error)==null?void 0:p.message)||e.helperText})]})};Qt.propTypes={name:l.string,control:l.object,field:l.object,fieldState:l.object,id:l.string,fullWidth:l.bool,startAdornment:l.element,endAdornment:l.element,placeholder:l.string,label:l.string,helperText:l.string,error:l.bool,type:l.string,onChange:l.any,rules:l.object,defaultValue:l.any,palette:l.object,value:l.any,onBlur:l.func,inputRef:l.any,data:l.array,emptyValue:l.string};Qt.defaultProps={name:"",control:{},field:{},fieldState:{},id:"",fullWidth:!1,startAdornment:null,endAdornment:null,placeholder:"deneme",label:"",helperText:"",error:!1,type:"text",onChange:()=>{},rules:{},defaultValue:null,palette:{defaultColor:"primary",inputColor:"#4A329A",labelColor:"",hoverColor:""},value:null,onBlur:()=>{},inputRef:null,data:[],emptyValue:""};const Xt=e=>{var n,r;const i=o=>{be.isEmpty(e.control)||e.field.onChange(o.target.checked),e.onChange(o,o.target.checked)},s=()=>be.isEmpty(e.control)?e.checked!==null?{checked:e.checked}:{}:{checked:e.field.value};return t.jsx(Fs,{error:!!((n=e.fieldState)!=null&&n.error),$color:e.$color,control:t.jsx(qi,{color:(r=e.fieldState)!=null&&r.error?"error":e.color,...e.defaultChecked===null?{}:{defaultChecked:e.defaultChecked}}),label:e.label,...s(),onChange:i,labelPlacement:e.labelPlacement,disabled:e.disabled})};Xt.propTypes={name:l.string,control:l.object,field:l.object,fieldState:l.object,id:l.string,label:l.string,defaultChecked:l.any,checked:l.any,disabled:l.bool,labelPlacement:l.oneOf(["bottom","end","start","top"]),onChange:l.func,color:l.oneOf(["default"|"primary"|"secondary"|"error"|"info"|"success"|"warning"]),$color:l.string};Xt.defaultProps={name:"",control:{},field:{},fieldState:{},id:"",label:"",defaultChecked:null,checked:null,disabled:!1,labelPlacement:"end",onChange:()=>{},color:"primary",$color:"#1976d2"};const zn="Login",qn={user:{}},Bn=ue({name:zn,initialState:qn,reducers:{setUser:(e,i)=>{e.user=i.payload},updateUserFriends:(e,i)=>{e.user.friends=i.payload}},extraReducers:e=>me(e,_e)}),{actions:Hn,reducer:Kn}=Bn,ft=Hn,ht="Login/request",_e={login:T(`${ht}/login`),getUser:T(`${ht}/getUser`)},Vn=[S({actionType:_e.login.type,takeType:k.TAKE_LATEST,*func({payload:e}){var s;const i=yield E($,N.GET,`${P.user}?email=${e.email}&password=${e.password}`);if(!((s=i==null?void 0:i.data)!=null&&s.length))yield y(I("Email or password are wrong!",{variant:X.ERROR}));else{const n={...i.data[0]};delete n.password,yield y(ft.setUser(n)),localStorage.setItem("token","ABC123ABC123")}}}),S({actionType:_e.getUser.type,takeType:k.TAKE_LATEST,*func({payload:e}){var s;const i=yield E($,N.GET,`${P.getUserById}/${e.user_id}`);if(!((s=i==null?void 0:i.data)!=null&&s.id))yield y(I("Unauthorized!",{variant:X.ERROR})),localStorage.clear(),window.location.href="/login";else{const n={...i.data};delete n.password,yield y(ft.setUser(n))}}})],Wn=Pe({email:W().email("Invalid email format!").required("Required!"),password:W().required("Required!")}),Gn={email:"",password:""},Yn=()=>{const e=C(),i=J(),{loading:s,user:n}=v(u=>u.Login),{registerHandler:r,form:o}=pe({defaultValues:Gn,schema:Wn}),a=u=>{e(_e.login(u))},d=u=>`${u[0].toUpperCase()}${u.slice(1)}`,c=u=>{const m=Object.entries(u).find(([,g])=>g.type==="required");m!=null&&m.length?e(I(`${d(m[0])} cannot be empty!`,{variant:X.ERROR})):e(I(`${Object.values(u)[0].message}`,{variant:X.ERROR}))},f=()=>{o.handleSubmit(a,c)()},p=u=>{u.key==="Enter"&&f()};return D({success:({idleAction:u})=>{u(),localStorage.setItem("user_id",n==null?void 0:n.id),i("/")}},_e.login()),t.jsx(Yt,{children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"sign-in",children:[t.jsx("h1",{className:"sign-in__title",children:" Sign In "}),t.jsxs("div",{className:"sign-in__icons",children:[t.jsx(M,{title:"Google",children:t.jsx(F,{children:t.jsx(Pt,{})})}),t.jsx(M,{title:"Facebook",children:t.jsx(F,{children:t.jsx(It,{})})}),t.jsx(M,{title:"Github",children:t.jsx(F,{children:t.jsx(Rt,{})})}),t.jsx(M,{title:"LinkedIn",children:t.jsx(F,{children:t.jsx(At,{})})})]}),t.jsx("div",{className:"sign-in__horizontal-line",children:t.jsx("div",{className:"sign-in__or",children:" or "})}),t.jsx(L,{label:"Email",...r("email"),onKeyDown:p}),t.jsx(L,{label:"Password",...r("password"),type:"password",onKeyDown:p}),t.jsx("a",{className:"sign-in__forgot-password",children:" Forgot your password ? "}),t.jsx(q,{className:"sign-in__button",onClick:f,children:s!=null&&s.login?t.jsx(z,{size:30,color:"#FFFFFF"}):"Sign in"}),t.jsxs("p",{className:"sign-in__sign-up",children:[" Don't you have an account ? ",t.jsx(Mt,{to:"/register",children:" Click here "})," to sign up. "]})]}),t.jsxs("div",{className:"overlay",children:[t.jsx("h2",{className:"overlay__title",children:" Hello, Friend! "}),t.jsx("p",{className:"overlay__description",children:"Register with your personal details to share post, view other posts and interact with them by liking, commenting."}),t.jsx(q,{onClick:()=>i("/register"),className:"overlay__button",children:"Sign up"})]})]})})},Qn=h(Yt)`
   .container {
      .sign-up {
         padding: 40px 60px;
         width: 600px;
         &__fullname {
            display: flex;
            gap: 20px;
         }
         &__sign-in {
            display: block;
         }
      }
   }

   @media (max-width: 900px) {
      .container {
         .sign-up {
            width: 100%;
         }
      }
   }

   @media (max-width: 600px) {
      .container {
         .sign-up {
            padding: 20px;
            &__fullname {
               display: flex;
               flex-direction: column;
               gap: 25px;
            }
         }
      }
   }
`,Xn="Register/request",Se={register:T(`${Xn}/register`)},Jn=[S({actionType:Se.register.type,takeType:k.TAKE_LATEST,*func({payload:e}){yield E($,N.POST,P.users,e)}})],Zn=Pe({name:W().required("Required!").min(2,"Name must be at least 2 character"),surname:W().required("Required!").min(2,"Name must be at least 2 character"),email:W().email("Invalid email format!").required("Required!"),password:W().required("Required!").test("password match","Passwords does not match!",(e,i)=>e===i.parent.rpassword),rpassword:W().required("Required!").test("password match","Passwords does not match!",(e,i)=>e===i.parent.password)}),eo={name:"",surname:"",email:"",password:"",rpassword:""},to=()=>{const e=C(),i=J(),{loading:s}=v(p=>p.Register),[n,r]=j.useState(!1),{registerHandler:o,form:a}=pe({defaultValues:eo,schema:Zn}),d=p=>{const u={...p};delete u.rpassword,e(Se.register(u))},c=p=>{const u=Object.entries(p).find(([,m])=>m.type==="required");u!=null&&u.length?e(I("Boş alan bırakılamaz!",{variant:X.ERROR})):e(I(`${Object.values(p)[0].message}`,{variant:X.ERROR}))},f=()=>{r(!0),a.handleSubmit(d,c)()};return D({success:({idleAction:p})=>{e(I("Kayıt işlemi başarılı, giriş yapabilirsiniz.")),p(),i("/login")}},Se.register()),t.jsx(Qn,{children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"sign-up",children:[t.jsx("h1",{className:"sign-up__title",children:" Sign Up "}),t.jsxs("div",{className:"sign-up__icons",children:[t.jsx(M,{title:"Google",children:t.jsx(F,{children:t.jsx(Pt,{})})}),t.jsx(M,{title:"Facebook",children:t.jsx(F,{children:t.jsx(It,{})})}),t.jsx(M,{title:"Github",children:t.jsx(F,{children:t.jsx(Rt,{})})}),t.jsx(M,{title:"LinkedIn",children:t.jsx(F,{children:t.jsx(At,{})})})]}),t.jsx("div",{className:"sign-up__horizontal-line",children:t.jsx("div",{className:"sign-up__or",children:" or "})}),t.jsxs("div",{className:"sign-up__fullname",children:[t.jsx(L,{fullWidth:!0,label:"Name",...o("name")}),t.jsx(L,{fullWidth:!0,label:"Surname",...o("surname")})]}),t.jsx(L,{label:"Email",...o("email")}),t.jsx(L,{label:"Password",...o("password"),onChange:async()=>{n&&await a.trigger("rpassword")}}),t.jsx(L,{label:"R-Password",...o("rpassword"),onChange:async()=>{n&&await a.trigger("password")}}),t.jsx(q,{className:"sign-up__button",onClick:f,children:s!=null&&s.register?t.jsx(z,{size:30,color:"#FFFFFF"}):"Sign up"}),t.jsxs("p",{className:"sign-up__sign-in",children:[" Do you have already an account ? ",t.jsx(Mt,{to:"/login",children:" Click here "})," to sign in. "]})]})})})};h(Fe)`
    background-color: #0f0f0f;
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 0 75px;
    margin-top: 30px;
    gap: 50px;
    transition: padding 350ms;
    .post-wrapper {
        div:first-child {
            margin-top: 0;
        }
        .loading-container {
            margin: 25px 0;
        }
        .more-button-container {
            display: flex;
            justify-content: center;
            margin-top: 25px;
            button {
                width: 100%;
            }
        }
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 0 40px;
    }
`;const io=h.div`
    background-color: #181818;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    p {
        color: #c9c9c9;
    }
    svg {
        font-size: 120px;
        path {
            fill: #7a7a7a;
        }
    }
`,Qe=({message:e})=>t.jsxs(io,{children:[t.jsx(Bi,{}),t.jsxs("p",{children:[" ",e," "]})]});Qe.propTypes={message:l.string.isRequired};const so="UserProfile",xt={user:{}},no=ue({name:so,initialState:xt,reducers:{setReset:()=>xt,setUser:(e,i)=>{e.user=i.payload}},extraReducers:e=>{me(e,Le)}}),{reducer:oo,actions:ro}=no,ao=ro,co="UserProfile/request",Le={getUserById:T(`${co}/getUserById`)},lo=[S({actionType:Le.getUserById.type,takeType:k.TAKE_LATEST,*func({payload:e}){const{user_id:i}=e,s=yield E($,N.GET,`${P.getUserById}/${i}`);yield y(ao.setUser((s==null?void 0:s.data)||{}))}})],uo=()=>{const e=C(),i=J(),s=Hi(),{authorizedUser:n}=v(p=>p.AppConfig.init),{posts:r,loading:o,page:a,limit:d,canBeMorePost:c}=v(p=>p.Dashboard),f=()=>{c&&e(_.getPosts({page:a,limit:d,user_id:s.id}))};return D({failure:({idleAction:p})=>{p(),i("/")}},Le.getUserById()),D({success:({idleAction:p})=>{p(),e(oe.getUnseenNotifications({query:`?is_removed=false&seen=false&receiver_id=${n.id}`}))}},_.acceptFriendship()),j.useEffect(()=>{isNaN(parseInt(s.id))?(e(I("Url couldn't found",{variant:X.WARNING})),i("/")):(e(A.setReset()),e(_.getPosts({page:1,limit:10,user_id:parseInt(s.id)})))},[s.id]),j.useEffect(()=>()=>{e(A.setReset()),e(K.handleModal(le.CLOSE))},[]),t.jsxs("div",{children:[!r.length&&(o==null?void 0:o.getPosts)===!1?t.jsx(Qe,{message:"There is no post in this profile."}):r.map((p,u)=>t.jsx(Me,{data:p,className:"post",...r.length-1===u?{fetchMorePost:f,isLastElement:!0}:{}},p.id)),(o==null?void 0:o.getPosts)&&t.jsx(Ce,{count:2}),(o==null?void 0:o.getPosts)&&t.jsxs("div",{className:"loading-container",children:[" ",t.jsx(z,{})," "]})]})},po={anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},id:"notification-settings-menu",MenuListProps:{"aria-labelledby":"notification-setting-button"}},Jt=({data:e})=>{const i=C(),[s,n]=j.useState(null),r=!!s,{loading:o,targetNotificationIds:a,targetRemovedNotificationsIds:d}=v(m=>m.Notifications),c=m=>{m.stopPropagation(),n(m.currentTarget)},f=m=>{m==null||m.stopPropagation(),n(null)},p=m=>{m.stopPropagation();const g={data:{notification_ids:[e.id]},settings:!0,snackbar:!0};i(U.markNotificationsRead(g))},u=m=>{m.stopPropagation();const g={notification_ids:[e.id]};i(U.deleteNotifications(g))};return D({success:({idleAction:m,payload:g})=>{g!=null&&g.settings&&(m(),a.includes(e.id)&&(f(),i(Y.setTargetNotificationIds([]))))}},U.markNotificationsRead()),D({success:({idleAction:m})=>{m(),d.includes(e.id)&&i(Y.setTargetRemovedNotificationIds([]))}},U.deleteNotifications()),t.jsxs(Ws,{children:[t.jsx(F,{id:"notification-setting-button","aria-controls":r?"notification-settings-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:c,children:t.jsx(Ki,{})}),t.jsxs(zt,{anchorEl:s,open:r,onClose:f,...po,children:[t.jsxs(se,{onClick:p,disabled:a.includes(e.id)&&(o==null?void 0:o.markNotificationsRead)||e.read,children:[o!=null&&o.markNotificationsRead&&a.includes(e.id)?t.jsx(z,{fullWidth:!1,color:"#FFFFFF",size:18}):t.jsx(Vi,{})," Mark as Read"]}),t.jsx(ce,{margin:"0"}),t.jsxs(se,{onClick:u,disabled:d.includes(e.id)&&(o==null?void 0:o.deleteNotifications),children:[o!=null&&o.deleteNotifications&&d.includes(e.id)?t.jsx(z,{fullWidth:!1,color:"#FFFFFF",size:18}):t.jsx(Ie,{})," Delete This Notification"]})]})]})};Jt.propTypes={data:l.object.isRequired};const Zt=({data:e})=>{const i=C(),{loading:s}=v(o=>o.Notifications),n=()=>{const o={notification_id:e.id,type:Te.ACCEPT};i(U.friendship(o))},r=()=>{const o={notification_id:e.id,type:Te.REJECT};i(U.friendship(o))};return t.jsxs(Gs,{children:[t.jsx(q,{disabled:(s==null?void 0:s.rejectFriendshipRequest)||(s==null?void 0:s.acceptFriendshipRequest),onClick:()=>n(),children:s!=null&&s.acceptFriendshipRequest?t.jsx(z,{size:25,color:"#FFFFFF"}):"Accept"}),t.jsx(q,{bgColor:"#484747",disabled:(s==null?void 0:s.rejectFriendshipRequest)||(s==null?void 0:s.acceptFriendshipRequest),onClick:()=>r(),children:s!=null&&s.rejectFriendshipRequest?t.jsx(z,{size:25,color:"#FFFFFF"}):"Delete"})]})};Zt.propTypes={data:l.object.isRequired};const ei=({data:e})=>{const i=J(),s=(r,o)=>{r.stopPropagation();const a=`/profile/${o.name.split(" ").join("")}${o.surname}/${o.id}`;i(a)},n=()=>{switch(e.type){case ee.REQUEST_FOR_FRIENDSHIP:return"sent you a friendship request.";case ee.LIKED_POST:return"liked your post.";case ee.COMMENTED_POST:return"commented on your post.";case ee.ACCEPTED_FRIENDSHIP_REQUEST:return"accepted your friendship request.";case ee.YOU_ARE_FRIEND_NOW:return"and you are friends now.";case ee.LIKED_COMMENT:return"liked your comment.";default:throw new Error("undefined notification type!")}};return t.jsxs(Vs,{read:e.read,children:[t.jsx("div",{className:"dot",children:" "}),t.jsxs("div",{className:"content",children:[t.jsx(fe,{name:e.sender_user.name,id:e.sender_user.id,displayName:!1,src:Z(e.sender_user.img)}),t.jsxs("div",{className:"content__main",children:[t.jsxs("p",{className:"description",children:[t.jsx(q,{className:"description__sender-user",bgColor:"transparent",padding:"0",onClick:r=>s(r,e.sender_user),children:`${e.sender_user.name} ${e.sender_user.surname}`}),t.jsxs("span",{className:"description__text",children:[" ",n()," "]}),t.jsxs("span",{className:"description__date",children:[" ",ve(e.created_at).fromNow()," "]})]}),e.type===ee.REQUEST_FOR_FRIENDSHIP&&t.jsx(Zt,{data:e})]})]})]})};ei.propTypes={data:l.object.isRequired};const mo={threshold:.5},Xe=({data:e,isLastElement:i,loadingState:s,fetchNotifications:n})=>{const r=C(),[o,a]=s,{loading:d}=v(u=>u.PostModal),{ref:c,isIntersecting:f}=je({options:mo,triggerOnce:!0}),p=(u,m,g,b)=>{if(u){a(m),r(H.getSpecificPost({post_id:u}));return}if(b===ee.ACCEPTED_FRIENDSHIP_REQUEST||b===ee.YOU_ARE_FRIEND_NOW){a(m);const x={data:{notification_ids:[m]},snackbar:!1,navigate:!0,url:`/profile/${g.name.split(" ").join("")}${g.surname}/${g.id}`};r(U.markNotificationsRead(x))}};return j.useEffect(()=>{f&&n()},[f]),t.jsxs(Ys,{className:"notification-item",disabled:d==null?void 0:d.getSpecificPost,onClick:()=>p(e.post_id,e.id,e.sender_user,e.type),...i?{ref:c}:{},children:[(d==null?void 0:d.getSpecificPost)&&o===e.id&&t.jsx(Qs,{}),t.jsx(ei,{data:e}),t.jsx(Jt,{data:e})]})};Xe.propTypes={data:l.object.isRequired,loadingState:l.array.isRequired,isLastElement:l.bool,fetchNotifications:l.func};Xe.defaultProps={isLastElement:!1,fetchNotifications:()=>{}};const fo=()=>{const e=C(),i=J(),[s,n]=j.useState(null),{loading:r,notifications:o,page:a,limit:d,canBeMore:c}=v(u=>u.Notifications),{authorizedUser:f}=v(u=>u.AppConfig.init),p=()=>{if(c){const u={queries:`?page=${a}&limit=${d}&receiver_id=${f.id}&is_removed=${!1}`};e(U.getNotifications(u))}};return D({success:({idleAction:u,payload:m})=>{m!=null&&m.navigate&&(u(),i(m.url))}},U.markNotificationsRead()),D({success:({idleAction:u})=>{if(u(),!o.find(g=>g.id===s).read){const g={data:{notification_ids:[s]}};e(U.markNotificationsRead(g))}e(K.handleModal(le.OPEN)),n(null)},failure:({idleAction:u})=>{u(),n(null)}},H.getSpecificPost()),D({success:({idleAction:u,payload:m})=>{if(u(),m.type===Te.ACCEPT){const g={query:`?user_id=${f.id}&is_removed=false`};e(_.getFriends(g))}}},U.friendship()),D({success:({idleAction:u})=>{u();const m=o.filter(b=>!b.seen).map(b=>b.id);if(!m.length)return;const g={notification_ids:m};e(U.markNotificationsSeen(g))}},U.getNotifications()),j.useEffect(()=>(e(U.getNotifications({queries:`?page=1&limit=${d}&receiver_id=${f.id}&is_removed=${!1}`})),e(_.getFriends({query:`?user_id=${f.id}&is_removed=false`})),()=>{e(Y.setReset()),e(K.handleModal(le.CLOSE))}),[]),t.jsxs(Ks,{children:[!o.length&&(r==null?void 0:r.getNotifications)===!1?t.jsx(Qe,{message:"You have not received notification yet."}):o.map((u,m)=>t.jsx(Xe,{data:u,...o.length-1===m?{fetchNotifications:p,isLastElement:!0}:{},loadingState:[s,n]},u.id)),(r==null?void 0:r.getNotifications)&&t.jsx(Ge,{count:5}),(r==null?void 0:r.getNotifications)&&t.jsx(z,{margin:"15px 0 0 0"})]})},ho=h(Fe)``,xo=h.div`
   display: flex;
   flex-direction: column;
   gap: 25px;
   position: sticky;
   top: 20px;
   max-height: calc(100vh - 40px);
   overflow-x: hidden;
   overflow-y: auto;

   ::-webkit-scrollbar {
      width: 0;
   }

   @media (max-width: 1200px) {
      padding-right: 5px;
   }

   @media (max-width: 900px) {
      position: static;
      max-height: initial;
      margin-bottom: 25px;
   }
`,go=h.div`
   position: sticky;
   top: 20px;
`,ye=Object.freeze({LINKEDIN:1,INSTAGRAM:2,TWITTER:3}),yo=()=>{var g;const e=C(),i=J(),{pathname:s}=de(),[n,r]=j.useState({}),{authorizedUser:o}=v(b=>b.AppConfig.init),{user:a,loading:d}=v(b=>b.UserProfile),c=()=>{i("/settings")},f=b=>{const x={user_id:o.id,friend_id:b};e(_.deleteFriend(x))},p=b=>{switch(b){case ye.INSTAGRAM:return t.jsx(Qi,{});case ye.LINKEDIN:return t.jsx(at,{});case ye.TWITTER:return t.jsx(at,{});default:throw Error("undefined type of social media")}},u=()=>{var b,x;return!(n!=null&&n.id)||o.id===n.id?null:((b=n.canBeFriend)==null?void 0:b.sender_id)===n.id?t.jsx(Ke,{sender_id:n.id}):((x=n.canBeFriend)==null?void 0:x.sender_id)===o.id?t.jsx(Ve,{receiver_id:n.id}):(n==null?void 0:n.canBeFriend)===!1?t.jsx(M,{title:"Remove Friend",placement:"top",children:t.jsx(F,{onClick:()=>f(n.id),children:t.jsx(Lt,{})})}):(n==null?void 0:n.canBeFriend)===!0?t.jsx(He,{id:n.id}):null},m=()=>{var x;const b=(x=s==null?void 0:s.split("/"))==null?void 0:x[3];if(s.includes("/profile")&&(o==null?void 0:o.id)!==parseInt(b)){const O=s.split("/")[3];e(Le.getUserById({user_id:O}))}};return j.useEffect(()=>{var x;if(d!=null&&d.getUserById)return;const b=(x=s==null?void 0:s.split("/"))==null?void 0:x[3];s.includes("/profile")&&(o==null?void 0:o.id)!==parseInt(b)?(r(a),console.log(a," user")):r(o)},[d,s]),j.useEffect(()=>{m()},[s]),D({success:()=>{m()}},_.acceptFriendship()),D({success:()=>{m()}},_.deleteFriend()),D({success:()=>{m()}},_.rejectFriendship()),D({success:()=>{m()}},_.addFriend()),D({success:()=>{m()}},U.cancelFriendshipRequest()),t.jsxs(Js,{children:[t.jsxs("div",{className:"user",children:[t.jsx(fe,{name:`${(n==null?void 0:n.name)||""} ${(n==null?void 0:n.surname)||""}`,position:(n==null?void 0:n.position)||"",src:Z(n==null?void 0:n.img),clickable:!1}),o.id===(n==null?void 0:n.id)?t.jsx(M,{title:"Edit My Informations",children:t.jsx(F,{className:"settings",onClick:c,children:t.jsx(Ft,{})})}):(n==null?void 0:n.id)&&u()]}),t.jsx(ce,{}),t.jsxs("div",{className:"user-detail",children:[t.jsxs("div",{className:"user-detail__row",children:[t.jsx(Wi,{}),t.jsxs("span",{children:[" ",(n==null?void 0:n.location)||"",", ",(n==null?void 0:n.city)||""," "]})]}),t.jsxs("div",{className:"user-detail__row",children:[t.jsx(Gi,{}),t.jsxs("span",{children:[" ",(n==null?void 0:n.school)||""," "]})]}),t.jsxs("div",{className:"user-detail__row",children:[t.jsx(Yi,{}),t.jsxs("span",{children:[" ",(n==null?void 0:n.company)||""," "]})]})]}),t.jsx(ce,{}),t.jsxs("div",{className:"social-profile",children:[t.jsx("div",{className:"social-profile__title",children:" Social Profiles "}),(g=n==null?void 0:n.social_medias)==null?void 0:g.map(b=>b.url?t.jsx("div",{className:"social-profile__row",children:t.jsxs("div",{className:"social-profile__info",children:[t.jsxs(F,{children:[" ",p(b.type)," "]}),t.jsxs("div",{className:"social-profile__names",children:[t.jsxs("span",{children:[" ",b.name," "]}),t.jsxs("a",{href:b.url,target:"_blank",className:"link",rel:"noreferrer",children:[" ",b.url," "]})]})]})},b.id):null)]})]})},bo=h.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    outline: none;
    border: none;
    border-radius: 10px;
    width: ${e=>e.file?"80vw":"50vw"};
    height: 80vh;
    display: flex;
    transition: width 350ms;
    @media (max-width: 900px) {
        width: 95%;
    }
`,jo=h.div`
    flex: 1.5;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #0f0f0f;
    display: flex;
    justify-content: center;
    align-items: center;
    .file {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        background-color: #0f0f0f;
        border-radius: 10px;
    }
    @media (max-width: 900px) {
        display: none;
    }
`,vo=h.div`
    flex: 1;
    background: #0f0f0f;
    display: flex;
    flex-direction: column;
    ${e=>e.file?ie`
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        `:ie`border-radius: 10px;`}
`,_o=h.div`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px 10px 20px;
        .user {
            display: flex;
            align-items: center;
            gap: 20px;
            &__info {
                display: flex;
                flex-direction: column;
            }
            &__position {
                font-size: 12px;
                color: #9a9a9a;
            }
            &__name {
                color: #c9c9c9;
                text-decoration: none;
                transition: all 350ms;
                cursor: pointer;
                :hover {
                    color: #FFFFFF;
                }
            }
            .MuiButton-root {
                :hover + .user__info .user__name {
                    color: #FFFFFF;
                }
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }
        }
        .MuiIconButton-root {
            background: #222;
            :hover {
                background: #333;
                svg path {
                    fill: #FFFFFF;
                }
            }
            svg {
                path {
                    fill: #9a9a9a;
                }
            }
        }
    }
    .description {
        padding: 0 20px;
        color: #c9c9c9;
        font-size: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`,Fo=h.div`
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 10px 5px 10px 0;
    .loading-container {
        height: 100%;
        display: flex;
        align-items: center;
    }
`,ko=h.div`
    display: flex;
    gap: 20px;
    .MuiButton-root {
        align-self: flex-start;
        min-width: initial;
        :hover + .comment-wrapper div .header .user .user__name {
            color: #FFFFFF;
        }
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
    .comment-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;
    }
`,Co=h.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        .user {
            display: flex;
            flex-direction: column;
            &__name {
                color: #c9c9c9;
                text-decoration: none;
                cursor: pointer;
                :hover {
                    color: #FFFFFF;
                }
            }
            &__position {
                font-size: 12px;
                color: #9a9a9a;
            }
        }
        .MuiIconButton-root {
            :hover {
                background-color: #333;
            }
            svg path {
                fill: #927CD9;
            }
        }
    }
    .text {
        color: #c9c9c9;
        font-size: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .edit-section {
        .MuiOutlinedInput-root {
            background-color: #222;
            border-radius: 10px;
            input {
                color: #FFFFFF;
                padding: 15px 20px;
            }
            fieldset {
                border: none;
            }
        }
        &__buttons {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 15px;
            margin-top: 10px;
        }
    }
    .footer {
        display: flex;
        align-items: center;
        gap: 15px;
        > * {
            font-size: 12px;
            color: #9a9a9a;
        }
        .likes {
            align-self: center;
            line-height: 18px;
            /* :hover {
                color: #FFFFFF;
            } */
        }
    }
`,Eo=h.div`
    padding: 0 10px 10px;
    .tools {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        &__like-comment {
            display: flex;
            gap: 5px;
        }
        .MuiIconButton-root {
            :hover {
                background-color: #333;
            }
            svg {
                path {
                    fill: #927CD9;
                }
            }
        }
    }
    .post-detail {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        &__likes {
            padding: 0;
            background: transparent;
            font-size: 14px;
            min-width: initial;
            color: #9d9a9a;
            transition: color 350ms;
            :hover {
                color: #FFFFFf;
                background: transparent;
            }
        }
        &__date {
            color: #9d9a9a;
            font-size: 12px;
        }
    }
`,wo=h.div`
    padding: 10px 0;
    .MuiFormControl-root .MuiOutlinedInput-root {
        background-color: transparent;
        color: #c9c9c9;
        input {
            padding: 10px 5px 10px 15px;
            ::placeholder {
                color: #9d9a9a;
            }
        }
        fieldset {
            border: none;
        }
        .MuiIconButton-root {
            svg {
                path {
                    fill: ${e=>e.disabled?"#9d9a9a":"#c9c9c9"};
                }
            }
            :hover {
                background-color: #333;
            }
        }
    }
`,To=h.div`
    .setting {
        padding: 5px;
        :hover {
            background-color: #333;
        }
        svg path {
            fill: #c9c9c9;
        }
    }
`,No=h($e)`
    .MuiPaper-root {
        padding: 0;
        background-color: transparent;
    }
    ul {
        background-color: #222;
        padding: 0;
        border-radius: 5px;
        li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #c9c9c9;
            padding: 10px;
            font-size: 14px;
            min-width: 120px;
            :not(:last-child) {
                border-bottom: 1px solid #333;
            }
            :hover {
                background-color: #333;
                color: #927CD9;
                    svg path {
                        fill: #927CD9;
                    }
            }
            &.delete {
                :hover {
                    color: red;
                    svg path {
                        fill: red;
                    }
                }
            }
            svg {
                font-size: 22px;
            }
        }
    }
`,ti=({handleClose:e})=>{var a,d,c,f,p;const i=C(),s=J(),n=de(),{postData:r}=v(u=>u.PostModal),o=()=>{const u=`profile/${r.user.name.split(" ").join("")}${r.user.surname}/${r.user.id}`;n.pathname!==u&&(i(K.handleModal(le.CLOSE)),i(A.setReset()),s(u))};return t.jsxs(_o,{children:[t.jsxs("div",{className:"header",children:[t.jsxs("div",{className:"user",children:[t.jsx(q,{bgColor:"transparent",padding:"0",minWidth:"0",disableRipple:!0,onClick:o,children:(a=r==null?void 0:r.user)!=null&&a.img?t.jsx("img",{src:Z(r.user.img),alt:"user"}):t.jsx(ke,{fontSize:"30px",name:(d=r==null?void 0:r.user)==null?void 0:d.name})}),t.jsxs("div",{className:"user__info",children:[t.jsxs("div",{className:"user__name",onClick:o,children:[" ",(c=r==null?void 0:r.user)==null?void 0:c.name," ",(f=r==null?void 0:r.user)==null?void 0:f.surname," "]}),t.jsxs("span",{className:"user__position",children:[" ",(p=r==null?void 0:r.user)==null?void 0:p.position," "]})]})]}),t.jsx(M,{title:"Close",children:t.jsx(F,{onClick:e,children:t.jsx(wt,{})})})]}),t.jsxs("p",{className:"description",children:[" ",r==null?void 0:r.description," "]})]})};ti.propTypes={handleClose:l.func.isRequired};const G=Object.freeze({EDIT:1,DELETE:2,LIKE:3}),ii=({commentId:e,commentLoadingStates:i,startEditingHandler:s,isEditing:n})=>{const r=C(),[o,a]=j.useState(null),[d,c]=i,f=!!o,{postData:p}=v(x=>x.PostModal),u=x=>{a(x.currentTarget)},m=()=>{a(null)},g=()=>{const x={id:e,post_id:p.id,clearCommentIdsFunc:()=>c(O=>O.filter(B=>B.id!==e))};c(O=>[...O,{id:e,type:G.DELETE}]),r(H.deleteComment(x))},b=()=>{s(),m()};return t.jsxs(To,{children:[t.jsx(F,{"aria-controls":f?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":f?"true":void 0,onClick:u,className:"setting",children:t.jsx(Tt,{})}),t.jsxs(No,{id:"basic-menu",anchorEl:o,open:f,onClose:m,MenuListProps:{"aria-labelledby":"basic-button"},children:[t.jsxs(se,{disableRipple:!0,onClick:b,disabled:!!d.find(x=>x.id===e&&(x.type===G.EDIT||x.type===G.DELETE))||n,children:[d.find(x=>x.id===e&&x.type===G.EDIT)?t.jsx(z,{color:"white",size:18}):t.jsx(Xi,{})," Edit"]}),t.jsxs(se,{disableRipple:!0,className:"delete",onClick:g,disabled:!!d.find(x=>x.id===e&&(x.type===G.EDIT||x.type===G.DELETE)),children:[d.find(x=>x.id===e&&x.type===G.DELETE)?t.jsx(z,{color:"white",size:18}):t.jsx(Ie,{})," Delete"]})]})]})};ii.propTypes={commentId:l.number.isRequired,commentLoadingStates:l.array.isRequired,startEditingHandler:l.func.isRequired,isEditing:l.bool.isRequired};const So={threshold:.5},gt={comment:""},Je=({data:e,commentLoadingStates:i,isLastElement:s,fetchMoreComment:n})=>{var tt,it,st,nt,ot;const r=C(),o=J(),a=de(),[d,c]=i,[f,p]=j.useState({isEditing:!1,data:{}}),{authorizedUser:u}=v(w=>w.AppConfig.init),{form:m,registerHandler:g}=pe({defaultValues:gt}),b=ze({control:m.control,name:"comment"}),{ref:x,isIntersecting:O}=je({options:So,triggerOnce:!0}),B=w=>!!w.find(ae=>ae===u.id),re=(w,ae)=>{const li={id:w,like:!B(ae)};r(H.likeComment(li))},ri=w=>`${ve.duration(ve().diff(w)).humanize()} ago`,Ze=()=>{m.reset(gt),p({isEditing:!1,data:{}}),c(w=>w.filter(ae=>ae.id!==e.id))},ai=()=>{c(ae=>[...ae,{id:e.id,type:G.EDIT}]);const w={data:{id:e.id,comment:m.getValues("comment")},resetHandler:Ze};r(H.editComment(w))},ci=()=>{m.setValue("comment",e.comment),p({isEditing:!0,data:e})},et=()=>{const w=`profile/${e.user.name.split(" ").join("")}${e.user.surname}/${e.user.id}`;a.pathname!==w&&(r(K.handleModal(le.CLOSE)),r(A.setReset()),o(w))};return j.useEffect(()=>{O&&n()},[O]),t.jsxs(ko,{className:"comment",...s?{ref:x}:{},children:[t.jsx(q,{bgColor:"transparent",padding:"0",disableRipple:!0,minWidth:"0",onClick:et,children:(tt=e==null?void 0:e.user)!=null&&tt.img?t.jsx("img",{src:Z(e.user.img),alt:"user"}):t.jsx(ke,{fontSize:"30px",name:(it=e==null?void 0:e.user)==null?void 0:it.name})}),t.jsx("div",{className:"comment-wrapper",children:t.jsxs(Co,{children:[t.jsxs("div",{className:"header",children:[t.jsxs("div",{className:"user",children:[t.jsxs("div",{className:"user__name",onClick:et,children:[" ",(st=e==null?void 0:e.user)==null?void 0:st.name," ",(nt=e==null?void 0:e.user)==null?void 0:nt.surname," "]}),t.jsxs("span",{className:"user__position",children:[" ",(ot=e==null?void 0:e.user)==null?void 0:ot.position," "]})]}),t.jsx(M,{title:B(e.likes)?"Unlike":"Like",children:t.jsx(F,{disabled:!!d.find(w=>w.id===e.id&&w.type===G.LIKE),onClick:()=>re(e.id,e.likes),children:B(e.likes)?t.jsx(Oe,{}):t.jsx(De,{})})})]}),f.isEditing?t.jsxs("div",{className:"edit-section",children:[t.jsx(L,{fullWidth:!0,...g("comment"),disabled:!!d.find(w=>w.id===e.id&&w.type===G.EDIT)}),t.jsxs("div",{className:"edit-section__buttons",children:[t.jsx(q,{bgColor:"#202022",padding:"5px 15px",fontSize:"14px",onClick:Ze,disabled:!!d.find(w=>w.id===e.id&&w.type===G.EDIT),children:"Cancel"}),t.jsx(q,{padding:"5px 15px",fontSize:"14px",disabled:b.trim()===""||b.trim()===e.comment||!!d.find(w=>w.id===e.id&&w.type===G.EDIT),onClick:ai,children:d.find(w=>w.id===e.id&&w.type===G.EDIT)?t.jsx(z,{color:"#FFFFFF",size:24}):"Edit"})]})]}):t.jsxs("p",{className:"text",children:[" ",e==null?void 0:e.comment," "]}),t.jsxs("div",{className:"footer",children:[t.jsxs("span",{className:"date",children:[" ",ri(e==null?void 0:e.created_at)," "]}),t.jsxs(q,{disableRipple:!0,bgColor:"trasparent",minWidth:"inital",padding:"0",className:"likes",children:[e.likes.length," likes"]}),u.id===e.user_id&&t.jsx(ii,{startEditingHandler:ci,commentLoadingStates:i,commentId:e.id,isEditing:f.isEditing})]})]})})]})};Je.propTypes={data:l.object.isRequired,commentLoadingStates:l.array.isRequired,isLastElement:l.bool,fetchMoreComment:l.func};Je.defaultProps={isLastElement:!1,fetchMoreComment:()=>{}};const $o=()=>{const e=C(),{comments:i,loading:s,canBeMoreComment:n,page:r,limit:o,postData:a}=v(p=>p.PostModal),[d,c]=j.useState([]),f=()=>{n&&e(H.getComments({post_id:a.id,page:r,limit:o}))};return t.jsxs(Fo,{children:[(s==null?void 0:s.createComment)&&t.jsx(Ne,{}),i.map((p,u)=>t.jsx(Je,{data:p,commentLoadingStates:[d,c],...i.length-1===u?{fetchMoreComment:f,isLastElement:!0}:{}},p.id)),(s==null?void 0:s.getComments)&&t.jsx(Ne,{count:3}),(s==null?void 0:s.getComments)&&t.jsx(z,{})]})},Po=()=>{const e=C(),{postData:i}=v(a=>a.PostModal),s=()=>`${ve.duration(ve().diff(i==null?void 0:i.created_at)).humanize()} ago`,n=()=>{document.getElementById("create-comment-input").focus()},r=()=>{const a={like:!i.liked,post_id:i.id};e(_.likePost(a))},o=()=>{const a={save:!i.saved,post_id:i.id};e(_.savePost(a))};return t.jsxs(Eo,{children:[t.jsxs("div",{className:"tools",children:[t.jsxs("div",{className:"tools__like-comment",children:[t.jsx(M,{title:i.liked?"Unlike":"Like",placement:"top",children:t.jsx(F,{onClick:r,children:i.liked?t.jsx(Oe,{}):t.jsx(De,{})})}),t.jsx(M,{title:"Comment",placement:"top",children:t.jsx(F,{onClick:n,children:t.jsx(Nt,{})})})]}),t.jsx(M,{title:i.saved?"Unsave":"Save",placement:"top",children:t.jsx(F,{onClick:o,children:i.saved?t.jsx(St,{}):t.jsx($t,{})})})]}),t.jsxs("div",{className:"post-detail",children:[t.jsxs(q,{disableRipple:!0,className:"post-detail__likes",children:[(i==null?void 0:i.likes_count)||0," likes"]}),t.jsxs("span",{className:"post-detail__date",children:[" ",s()," "]})]})]})},yt={comment:""},Io=()=>{const e=C(),{postData:i,loading:s}=v(c=>c.PostModal),{registerHandler:n,form:r}=pe({defaultValues:yt}),o=ze({control:r.control,name:"comment"}),a=()=>{const c={comment:r.getValues("comment"),post_id:i.id};e(H.createComment(c))},d=c=>{c.code==="Enter"&&o.trim()!==""&&!(s!=null&&s.getComments)&&a()};return D({success:({idleAction:c})=>{c(),e(A.setCommentCount({post_id:i.id,comments_count:i.comments_count})),r.reset(yt)}},H.createComment()),t.jsx(wo,{disabled:o==="",children:t.jsx(L,{fullWidth:!0,id:"create-comment-input",placeholder:"Make a comment...",readOnly:s==null?void 0:s.createComment,endAdornment:s!=null&&s.createComment?t.jsx(z,{size:25,color:"#FFFFFF"}):t.jsxs(F,{onClick:a,disabled:o.trim()===""||(s==null?void 0:s.getComments),children:[" ",t.jsx(Et,{})," "]}),...n("comment"),onKeyDown:d})})},si=({handleClose:e})=>{var s;const{postData:i}=v(n=>n.PostModal);return t.jsxs(vo,{file:!!((s=i==null?void 0:i.files)!=null&&s.length),children:[t.jsx(ti,{handleClose:e}),t.jsx(ce,{margin:"10px 0 0 0",height:"0.1px"}),t.jsx($o,{}),t.jsx(ce,{margin:"0 0 10px 0",height:"0.1px"}),t.jsx(Po,{}),t.jsx(ce,{margin:"0",height:"0.1px"}),t.jsx(Io,{})]})};si.propTypes={handleClose:l.func.isRequired};const ni=({videoRef:e})=>{var a;const i=C(),{isMuted:s}=v(d=>d.Dashboard),{isOpen:n,postData:r,videoData:o}=v(d=>d.PostModal);return j.useEffect(()=>{!e.current||!n||(e.current.currentTime=o.currentTime,o.isPlaying&&e.current.play())},[n]),t.jsxs("video",{ref:e,className:"file file__video",controls:!0,preload:"metadata",loop:!0,muted:s,onVolumeChange:d=>i(A.setIsMuted(d.target.muted)),children:[t.jsx("source",{src:Z((a=r==null?void 0:r.files)==null?void 0:a[0])+"#t=0.5",type:"video/mp4"}),"Your browser does not support the video tag."]})};ni.propTypes={videoRef:l.object.isRequired};const Ro=()=>{var p,u,m,g,b;const e=C(),i=j.useRef(),{isOpen:s,postData:n,limit:r}=v(x=>x.PostModal),o=()=>{if(i.current){const x={isLegal:!0,currentTime:i.current.currentTime,isPlaying:!i.current.paused};e(A.setVideoData(x))}e(K.setReset())},a=()=>{const x={like:!n.liked,post_id:n.id};e(_.likePost(x))},d=Z((p=n==null?void 0:n.files)==null?void 0:p[0]),c=Wt((m=(u=n==null?void 0:n.files)==null?void 0:u[0])==null?void 0:m.type),f={[Q.IMAGE]:t.jsx(Ae,{data:n,likeHandler:a,src:d}),[Q.VIDEO]:t.jsx(ni,{videoRef:i})};return D({success:({idleAction:x})=>{s&&(e(H.getSpecificPost({post_id:n.id})),x())}},_.likePost()),D({success:({idleAction:x})=>{s&&(e(H.getSpecificPost({post_id:n.id})),x())}},_.savePost()),j.useEffect(()=>{s&&e(H.getComments({post_id:n.id,page:1,limit:r}))},[s]),t.jsx("div",{children:t.jsx(Ji,{open:s,onClose:o,children:t.jsxs(bo,{file:!!((g=n==null?void 0:n.files)!=null&&g.length),isOpen:s,children:[((b=n==null?void 0:n.files)==null?void 0:b.length)&&t.jsxs(jo,{children:[" ",f[c]," "]}),t.jsx(si,{handleClose:o})]})})})},Ao=()=>{const e=j.useRef(null),[i,s]=j.useState(0),{advertisements:n}=v(m=>m.AppConfig.init),{title:r,description:o,url:a,url_path:d}=(n==null?void 0:n[i])||{},c=()=>{window.open(d,"_blank")},f=m=>{s(m)},p=()=>{s(i===0?n.length-1:m=>m-1)},u=()=>{i===n.length-1?s(0):s(m=>m+1)};return j.useEffect(()=>{n.length&&(e.current&&clearInterval(e.current),e.current=setInterval(()=>{u()},3e3))},[i,n]),t.jsxs(Zs,{children:[t.jsx("div",{className:"header",children:t.jsx("span",{className:"header__title",children:" Sponsored "})}),t.jsxs("div",{className:"carousel",children:[t.jsx("div",{onClick:c,className:"overlay",children:" "}),t.jsx(F,{onClick:p,className:"arrow arrow__back",children:t.jsx(Zi,{})}),t.jsx(F,{onClick:u,className:"arrow arrow__forward",children:t.jsx(es,{})}),t.jsx("div",{className:"dots",children:n.map((m,g)=>t.jsx(en,{onClick:()=>f(g),$active:g===i,children:t.jsx(ts,{})},m.id))}),n.map((m,g)=>t.jsx("img",{className:`image ${g===i?"image__active":""}`,onClick:c,src:Z(m.img),alt:"advertisement"},m.id))]}),t.jsxs("div",{className:"sponsor",children:[t.jsxs("span",{className:"sponsor__name",children:[" ",r," "]}),t.jsxs("a",{href:d,target:"_blank",className:"sponsor__url",rel:"noreferrer",children:[" ",a," "]})]}),t.jsxs("p",{className:"description",children:[" ",o," "]})]})},Mo=()=>{const e=C(),{friends:i,loading:s}=v(o=>o.Dashboard),{authorizedUser:n}=v(o=>o.AppConfig.init),r=o=>{const a={user_id:n.id,friend_id:o};e(_.deleteFriend(a))};return t.jsxs(tn,{children:[t.jsx("div",{className:"title",children:" Friend List "}),t.jsxs("div",{className:"friend-list",children:[!i.length&&(s==null?void 0:s.getFriends)===!1?t.jsx("div",{className:"no-friend",children:' Click "Add Friend" Icon on the top right of the post in order to add friend. '}):i.map(o=>t.jsxs("div",{className:"friend",children:[t.jsx(fe,{name:`${(o==null?void 0:o.name)||""} ${(o==null?void 0:o.surname)||""}`,id:o.id,position:(o==null?void 0:o.position)||"",fontSize:"25px",small:!0,src:Z(o.img)}),t.jsx(M,{title:"Remove Friend",placement:"top",children:t.jsx(F,{onClick:()=>r(o.id),children:t.jsx(Lt,{})})})]},o.id)),(s==null?void 0:s.getFriends)&&t.jsx(Ye,{count:2}),(s==null?void 0:s.getFriends)&&t.jsx(z,{margin:"20px"})]})]})},bt=()=>{const{pathname:e}=de();return t.jsxs("div",{children:[t.jsx(Ao,{}),!e.includes("profile")&&t.jsx(Mo,{})]})},Lo=()=>{const e=kt("(min-width: 1200px)");return t.jsxs(ho,{children:[t.jsxs(xo,{children:[t.jsx(yo,{}),!e&&t.jsx(bt,{})]}),t.jsx(Ct,{}),t.jsx(go,{children:e&&t.jsx(bt,{})}),t.jsx(Ro,{})]})},Uo=h(Fe)`
   display: flex;
   justify-content: center;
   .content {
      width: 70%;
      background: #181818;
      border-radius: 10px;
      padding: 20px;
      transition: width 350ms;
      display: flex;
      flex-direction: column;
      gap: 25px;
      .MuiFormControl-root {
         .MuiInputLabel-root {
            color: #888;
            &.Mui-error {
               color: #d32f2f;
            }
         }
         .MuiOutlinedInput-root {
            background-color: #333;
            border-radius: 5px;
            .MuiIconButton-root {
               :hover {
                  background-color: #222;
               }
               svg path {
                  fill: #888;
               }
            }
            input {
               color: #FFFFFF;
               padding: 15px;
               ::placeholder {
                  color: #999;
               }
            }
            fieldset {
               border: none
            }
            &.Mui-error {
               fieldset {
                  border: 1px solid #d32f2f;
               }
            }
         }
      }
      section {
         .title {
            color: #c9c9c9;
            font-weight: 500;
            margin-bottom: 20px;
         }
         .container {
            display: flex;
            align-items: center;
            gap: 40px;
         }
         .group {
            flex: 1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            :not(:last-child) {
               margin-bottom: 15px;
            }
            > div {
               flex: 1;
            }
         }
      }
      &__footer {
         display: flex;
         justify-content: flex-end;
      }
   }
   @media (max-width: 1200px) {
      .content {
         width: 100%;
      }
   }
   @media (max-width: 900px) {
      .content section {
         .container {
            flex-direction: column;
            .group {
               align-self: stretch;
            }
         }
      }
   }
   @media (max-width: 600px) {
      .content section {
         .group {
            grid-template-columns: 1fr;
         }
         .container {
            flex-direction: column;
            gap: 20px;
            align-items: stretch;
            .img-container {
               align-self: center;
            }
         }
      }
   }
`,Oo=h.div`
   align-self: center;
   .img-container {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      position: relative;
      ${e=>!e.isUploading&&ie`
         :hover {
            .overlay {
               opacity: 1;
               .MuiIconButton-root {
                  svg {
                     scale: 1;
                  }
               }
            }
            .img.img__letter {
               opacity: 0;
               color: red;
            }
         }
      `}
      .loading-container {
         width: 100%;
         height: 100%;
         border-radius: 50%;
         position: absolute;
         top: 0;
         left: 0;
         display: flex;
         align-items: center;
         justify-content: center;
      }
      .img {
         width: 100%;
         height: 100%;
         border-radius: 50%;
         object-fit: cover;
         &__letter {
            border: 2px solid #333;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #888;
            font-size: 90px;
         }
      }
      .overlay {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         border-radius: 50%;
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: rgba(0, 0, 0, 0.5); 
         z-index: 99;
         opacity: 0;
         transition: opacity 0.3s ease-in-out;
         cursor: pointer;
         input {
            opacity: 0;
            visibility: hidden;
            width: 100%;
            height: 100%;
            position: absolute;
         }
         .MuiIconButton-root {
            width: 100%;
            height: 100%;
            svg {
               font-size: 70px;
               scale: 0;
               transition: scale 0.3s ease-in-out;
               path {
                  fill: #FFFFFF;
               }
            }
         }
      }
   }
   .delete-button {
      background-color: transparent;
      color: #7d7c7c;
      padding: 5px 20px;
      margin-top: 10px;
      font-size: 14px;
      :hover {
         color: #dc3545;
         background-color: transparent;
      }
      &.Mui-disabled {
         color: #7d7c7c;
         background-color: transparent;
      }
   }
`,Do=Pe().shape({name:W().required("Required!"),surname:W().required("Required!"),email:W().email("Invalid email format!").required("Required!"),password:W().required("Required!"),country:W(),city:W(),location:W(),school:W(),position:W()}),zo={name:"",surname:"",email:"",password:"",country:"",city:"",location:"",school:"",position:"",company:"",social_medias:[{id:1,name:"LinkedIn",url:"",type:ye.LINKEDIN},{id:2,name:"Instagram",url:"",type:ye.INSTAGRAM},{id:3,name:"Twitter",url:"",type:ye.TWITTER}]},qo=()=>{const e=C(),[i,s]=j.useState(!1),[n,r]=j.useState(""),[o,a]=j.useState(null),{init:{authorizedUser:d},loading:c}=v(x=>x.AppConfig),{form:f,registerHandler:p}=pe({defaultValues:zo,schema:Do,mode:"onChange"}),u=ze({control:f.control,name:"name"}),m=x=>{var re;const O=(re=x.target.files)==null?void 0:re[0],B=URL.createObjectURL(O);r(B),a(O),URL.revokeObjectURL(O)},g=async()=>{if(!await f.trigger()){e(I("Please fill all the required inputs",{variant:X.ERROR}));return}const O={id:d.id,data:{...f.getValues(),...o?{}:{is_file_deleted:!!d.img.name&&!n}},file:o};e(oe.editUser(O))},b=()=>{r("")};return j.useEffect(()=>{const{id:x,img:O,...B}=d;f.reset(B),O&&r(Z(O))},[d]),t.jsx(Uo,{children:t.jsxs("div",{className:"content",children:[t.jsxs("section",{children:[t.jsx("h2",{className:"title",children:" Account "}),t.jsxs("div",{className:"container",children:[t.jsxs(Oo,{isUploading:c==null?void 0:c.editUser,children:[t.jsxs("div",{className:"img-container",children:[t.jsx("div",{className:"overlay",children:t.jsxs(F,{disabled:c==null?void 0:c.editUser,component:"label",onChange:m,children:[t.jsx(is,{}),t.jsx("input",{type:"file"})]})}),n?t.jsx("img",{className:"img",src:n}):t.jsxs("div",{className:"img img__letter",children:[" ",(u==null?void 0:u.at(0))||"?"," "]})]}),n&&t.jsx(q,{disabled:c==null?void 0:c.editUser,onClick:b,startIcon:t.jsx(Ie,{}),className:"delete-button",children:" Delete Image "})]}),t.jsxs("div",{className:"group",children:[t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"Name*",placeholder:"Goktug",...p("name")}),t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"Surname*",placeholder:"Sulun",...p("surname")}),t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"Email*",placeholder:"goktug.sulun@hotmail.com",...p("email")}),t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"Password*",type:i?"text":"password",placeholder:"******",...p("password"),endAdornment:t.jsx(ss,{position:"end",children:t.jsx(M,{title:i?"Hide":"Show",children:t.jsx(F,{onClick:()=>s(x=>!x),children:i?t.jsx(ns,{}):t.jsx(os,{})})})})})]})]})]}),t.jsxs("section",{children:[t.jsx("h2",{className:"title",children:" Personal "}),t.jsxs("div",{className:"group",children:[t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"Country",placeholder:"Türkiye",...p("country")}),t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"City",placeholder:"Istanbul",...p("city")}),t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"Location",placeholder:"Kucukcekmece",...p("location")}),t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"School",placeholder:"Bahcesehir University",...p("school")}),t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"Company",placeholder:"Trendyol",...p("company")}),t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"Position",placeholder:"Frontend Developer",...p("position")})]})]}),t.jsxs("section",{children:[t.jsx("h2",{className:"title",children:" Social Media "}),t.jsxs("div",{className:"group",children:[t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"LinkedIn",placeholder:"www.linkedin.com/in/username",...p("social_medias[0].url")}),t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"Instagram",placeholder:"www.instagram.com/username",...p("social_medias[1].url")}),t.jsx(L,{disabled:c==null?void 0:c.editUser,label:"Twitter",placeholder:"https://twitter.com/username",...p("social_medias[2].url")})]})]}),t.jsx("div",{className:"content__footer",children:t.jsx(q,{disabled:c==null?void 0:c.editUser,onClick:g,padding:"5px 15px",minWidth:"100px",children:c!=null&&c.editUser?t.jsx(z,{size:25,color:"#FFFFFF"}):"Save"})})]})})},Bo=()=>{const e=localStorage.getItem("token"),i=C(),s=de(),{authorizedUser:n}=v(r=>r.AppConfig.init);return j.useEffect(()=>{!(n!=null&&n.id)&&e&&i(oe.getInit())},[n==null?void 0:n.id,e]),j.useEffect(()=>{window.scrollTo(0,0)},[s.pathname]),!(n!=null&&n.id)&&e?t.jsx(Is,{children:t.jsx(z,{size:80})}):t.jsxs(rs,{children:[t.jsx(ne,{path:"/login",element:t.jsx(Yn,{})}),t.jsx(ne,{path:"/register",element:t.jsx(to,{})}),t.jsxs(ne,{element:t.jsx(Be,{isAllowed:!0}),children:[t.jsxs(ne,{element:t.jsx(Lo,{}),children:[t.jsx(ne,{path:"/",element:t.jsx(On,{})}),t.jsx(ne,{path:"/profile/:user/:id",element:t.jsx(uo,{})}),t.jsx(ne,{path:"/notifications",element:t.jsx(fo,{})})]}),t.jsx(ne,{path:"/settings",element:t.jsx(qo,{})})]}),t.jsx(ne,{path:"*",element:t.jsx("div",{children:" Page Not Found! "})})]})};let Ee=[];const Ho=()=>{const e=C(),{notifications:i}=v(a=>a.AppConfig),{enqueueSnackbar:s,closeSnackbar:n}=as(),r=a=>{Ee.push(a)},o=a=>{Ee=[...Ee.filter(d=>d!==a)]};j.useEffect(()=>{i.forEach(a=>{const{message:d,options:c}=a;Ee.includes(c.key)||(s(d,{...c,onExited:(f,p)=>{e(ge.closeSnackbar(p)),o(p)}}),r(c.key))})},[i])},Ko=()=>(Ho(),t.jsx(Bo,{}));const Vo="Register",Wo={},Go=ue({name:Vo,initialState:Wo,reducers:{},extraReducers:e=>me(e,Se)}),{actions:ir,reducer:Yo}=Go,Qo=Object.freeze(Object.defineProperty({__proto__:null,AppConfig:Us,Dashboard:dn,Login:Kn,Notifications:Cn,PostModal:_n,Register:Yo,UserProfile:oo},Symbol.toStringTag,{value:"Module"})),Xo=[pn,Vn,Jn,lo,wn,yn,Hs].flat(),oi=cs(),Jo=ls({reducer:{...Qo},middleware:e=>e().concat(oi)});function*Zo(){yield fs(Xo)}oi.run(Zo);const er=document.getElementById("root");ds.createRoot(er).render(t.jsx(us,{store:Jo,children:t.jsx(ps,{children:t.jsx(ms,{maxSnack:3,autoHideDuration:3e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:t.jsx(Ko,{})})})}));

import{d as C,u as N,r as g,a as U,b as S,c as F,e as n,o as I,f as B,g as t,w as a,h as r,i as R,l as w,j as b,E as h,p as j,k as z,m as _,_ as T}from"./index-afa834e1.js";const c=i=>(j("data-v-b1c1e3de"),i=i(),z(),i),$={class:"login_container"},q=c(()=>_("h2",null,"精品严选后台注册",-1)),A=c(()=>_("text",null,"用户名",-1)),D=c(()=>_("text",null,"密码",-1)),G=c(()=>_("text",null,"确认密码",-1)),H=C({__name:"regist",setup(i){let v=N(),f=g(),x=U();S();let u=g(!1),s=F({username:"admin",password:"atguigu123",checkPass:"atguigu123"});const V=async()=>{await f.value.validate(),u.value=!0;try{let l={username:s.username,password:s.password};await v.userRegist(l),x.push("/login"),h({type:"success",message:"注册成功，请登录"}),u.value=!1}catch(l){u.value=!1,h({type:"error",message:l.message})}},y={username:[{trigger:"change",validator:(l,o,e)=>{o.length>=5?e():e(new Error("账号长度至少五位"))}}],password:[{trigger:"blur",validator:(l,o,e)=>{o.length>=6?(s.checkPass==s.password?e():e(new Error("两次密码不一致")),e()):e(new Error("密码长度至少六位"))}}],checkPass:[{trigger:"blur",validator:(l,o,e)=>{o.length>=6?(s.checkPass==s.password?e():e(new Error("两次密码不一致")),e()):e(new Error("密码长度至少六位"))}}]};return(l,o)=>{const e=n("el-col"),m=n("el-input"),p=n("el-form-item"),P=n("el-button"),k=n("el-form"),E=n("el-row");return I(),B("div",$,[t(E,null,{default:a(()=>[t(e,{span:12,xs:0}),t(e,{span:12,xs:24},{default:a(()=>[t(k,{class:"login_form",model:r(s),rules:y,ref_key:"registForms",ref:f},{default:a(()=>[q,t(p,{prop:"username"},{default:a(()=>[A,t(m,{"prefix-icon":r(R),modelValue:r(s).username,"onUpdate:modelValue":o[0]||(o[0]=d=>r(s).username=d)},null,8,["prefix-icon","modelValue"])]),_:1}),t(p,{prop:"password"},{default:a(()=>[D,t(m,{type:"password","prefix-icon":r(w),modelValue:r(s).password,"onUpdate:modelValue":o[1]||(o[1]=d=>r(s).password=d),"show-password":""},null,8,["prefix-icon","modelValue"])]),_:1}),t(p,{prop:"checkPass"},{default:a(()=>[G,t(m,{type:"password","prefix-icon":r(w),modelValue:r(s).checkPass,"onUpdate:modelValue":o[2]||(o[2]=d=>r(s).checkPass=d),"show-password":""},null,8,["prefix-icon","modelValue"])]),_:1}),t(p,null,{default:a(()=>[t(P,{loading:r(u),class:"login_btn",type:"primary",size:"default",onClick:V},{default:a(()=>[b("注册")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})])}}});const O=T(H,[["__scopeId","data-v-b1c1e3de"]]);export{O as default};
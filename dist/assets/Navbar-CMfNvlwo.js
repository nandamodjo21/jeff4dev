import{d,r,c as l,o,a as t,m,F as f,f as x,t as u}from"./index-Be8qgjOG.js";const p={class:"max-w-full z-20"},h={class:"flex border-b-2 border-b-primary3 items-center relative p-3 justify-between md:h-16 h-28 mx-auto md:px-4 container flex-wrap md:flex-nowrap"},v={class:"md:hidden z-30"},g={key:0,class:"text-5xl"},b={key:1,class:"text-5xl"},y={class:"flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 font-medium"},_=["href","onClick"],j=d({__name:"Navbar",setup(k){const s=r(!1),i=r([{name:"Service",href:"#services"},{name:"Project",href:"#projects"},{name:"Contact",href:"#contacts"}]),c=a=>{s.value=!1;const e=document.querySelector(a);e&&e.scrollIntoView({behavior:"smooth"})};return(a,e)=>(o(),l("header",p,[t("nav",h,[e[3]||(e[3]=t("div",{class:"text-3xl font-bold flex text-primary"}," LOGO ",-1)),t("div",v,[t("button",{class:"block focus:outline-none",onClick:e[0]||(e[0]=n=>s.value=!s.value)},[s.value?(o(),l("span",g,e[1]||(e[1]=[t("img",{src:"https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png",alt:"delete-sign",width:"50",height:"50"},null,-1)]))):(o(),l("span",b,e[2]||(e[2]=[t("img",{src:"https://img.icons8.com/ios-filled/100/menu--v6.png",alt:"delete-sign",width:"50",height:"50"},null,-1)])))])]),t("div",{class:m(["fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row md:space-x-5",s.value?"block":"hidden"])},[t("ul",y,[(o(!0),l(f,null,x(i.value,n=>(o(),l("li",{key:n.name},[t("a",{href:n.href,class:"block transition hover:text-primary ease-linear text-2xl md:text-sm lg:text-lg text-white md:text-black",onClick:w=>c(n.href)},u(n.name),9,_)]))),128))])],2)])]))}});export{j as default};

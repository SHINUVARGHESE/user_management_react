(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(29),s=a.n(n),i=(a(36),a(37),a(38),a(5)),r=a(2),l=a(3),d=(a(39),a(0));var j=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(r.e)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("form",{onSubmit:function(){s.push("/searchResult/".concat(a))},children:Object(d.jsxs)("div",{className:"search-bar",style:{position:"absolute",left:"44%"},children:[Object(d.jsx)("input",{id:"search",required:!0,type:"text",onChange:function(e){n(e.target.value)},placeholder:"Search User"}),Object(d.jsx)("button",{type:"submit",children:Object(d.jsx)("i",{className:"fa fa-search"})})]})}),Object(d.jsx)(i.b,{to:"/adduser",children:Object(d.jsx)("button",{className:"addUsers",children:"Add User"})})]})},b=a(10),u=a.n(b);a(27);var o=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)("disabled"),j=Object(l.a)(r,2),b=j[0];j[1],Object(c.useEffect)((function(){u.a.get("http://3.23.104.74/allUsers").then((function(e){s(e.data)}))}),[]);var o=function(e){var t={id:e.target.name};u.a.post("http://3.23.104.74/removeUser",t),window.location.reload()};return Object(d.jsx)("div",{children:Object(d.jsxs)("table",{className:"table data",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Number"}),Object(d.jsxs)("th",{children:["Actions",Object(d.jsx)(i.b,{to:"/adduser",children:Object(d.jsx)("button",{className:"addUser",children:"Add new"})})]})]})}),Object(d.jsx)("tbody",{children:n.map((function(e,t){return Object(d.jsxs)("tr",{className:"pl-5px",children:[Object(d.jsx)("td",{className:"data",children:Object(d.jsx)("input",{className:"input",type:"text",disabled:b?"disabled":"",value:e.name})}),Object(d.jsx)("td",{className:"data",children:Object(d.jsx)("input",{className:"input",type:"text",disabled:b?"disabled":"",value:e.mail})}),Object(d.jsx)("td",{className:"data",children:Object(d.jsx)("input",{className:"input",type:"text",disabled:b?"disabled":"",value:e.phonenumber})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{id:"save",className:"save",children:"save"}),Object(d.jsx)(i.b,{to:"/editUser/".concat(e._id,"/").concat(e.name,"/").concat(e.mail,"/").concat(e.phonenumber),children:Object(d.jsx)("button",{id:"edit",className:"edit",children:"Edit"})}),Object(d.jsx)("button",{onClick:o,name:e._id,className:"delete",children:"Delete"})]})]},t)}))})]})})};a(64);var h=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(r.e)();return Object(d.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-sm mt-0 mb-0",children:[Object(d.jsx)(i.b,{to:"/",style:{fontSize:"30px",fontWeight:"bolder"},className:"navbar-brand",children:"User Management"}),Object(d.jsx)("ul",{children:Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/table",style:{textDecoration:"none"},children:Object(d.jsx)("h4",{style:{fontSize:"18px",marginTop:"60px",marginLeft:"50px",color:"#fff"},children:"All users"})})})}),Object(d.jsxs)("form",{onSubmit:function(){s.push("/searchResult/".concat(a))},style:{position:"absolute",right:"0",marginRight:"35px"},className:"form-inline",children:[Object(d.jsx)("input",{required:!0,onChange:function(e){n(e.target.value)},style:{fontStyle:"italic"},className:"form-control mr-2",type:"search",placeholder:"Search User","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-info",type:"submit",children:Object(d.jsx)("i",{className:"fa fa-search"})})]})]})};a(28);var m=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),j=i[0],b=i[1],o=Object(c.useState)(""),h=Object(l.a)(o,2),m=h[0],O=h[1],x=Object(c.useState)(""),p=Object(l.a)(x,2),f=p[0],v=p[1],N=Object(r.e)(),g=function(e){"userName"==e.target.name?b({name:e.target.value}):"mail"==e.target.name?O({mail:e.target.value}):"phone"==e.target.name&&v({phonenum:e.target.value}),n({name:j.name,mail:m.mail,phonenumber:f.phonenum})};return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{id:"contact",onSubmit:function(e){e.preventDefault(),u.a.post("http://3.23.104.74/addUser",a).then((function(){console.log("User Added")})).catch((function(e){console.error(e)})),N.push("/table")},children:[Object(d.jsx)("h3",{children:"Add User"}),Object(d.jsx)("fieldset",{children:Object(d.jsx)("input",{placeholder:"Name",onChange:g,name:"userName",type:"text",tabIndex:"1",required:!0,autoFocus:!0})}),Object(d.jsx)("fieldset",{children:Object(d.jsx)("input",{placeholder:"Email Address",onChange:g,name:"mail",type:"email",tabIndex:"2",required:!0})}),Object(d.jsx)("fieldset",{children:Object(d.jsx)("input",{placeholder:"Phone Number",onChange:g,name:"phone",type:"tel",pattern:"[0-9]{10}",tabIndex:"3",required:!0})}),Object(d.jsx)("fieldset",{children:Object(d.jsx)("button",{name:"submit",type:"submit",id:"contact-submit",children:"Add"})})]})})};var O=function(e){console.log(e.id+" hi");var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(""),j=Object(l.a)(i,2),b=j[0],o=j[1],h=Object(c.useState)(""),m=Object(l.a)(h,2),O=m[0],x=m[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),v=f[0],N=f[1],g=Object(r.f)(),y=g.id,S=g.name,U=g.mail,A=g.phonenumber,E=Object(r.e)();Object(c.useEffect)((function(){o({name:S}),x({mail:U}),N({phonenum:A})}),[]);var C=function(e){"userName"==e.target.name?o({name:e.target.value}):"mail"==e.target.name?x({mail:e.target.value}):"phone"==e.target.name&&N({phonenum:e.target.value}),s({userid:y,name:b.name,mail:O.mail,phonenumber:v.phonenum})};return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{id:"contact",onSubmit:function(e){e.preventDefault(),u.a.post("http://3.23.104.74/editUser",n).then((function(){console.log("User Edited")})).catch((function(e){console.error(e)})),E.push("/table")},children:[Object(d.jsx)("h3",{children:"Edit User"}),Object(d.jsx)("fieldset",{children:Object(d.jsx)("input",{value:b.name,onChange:C,name:"userName",type:"text",tabIndex:"1",required:!0,autoFocus:!0})}),Object(d.jsx)("fieldset",{children:Object(d.jsx)("input",{value:O.mail,onChange:C,name:"mail",type:"email",tabIndex:"2",required:!0})}),Object(d.jsx)("fieldset",{children:Object(d.jsx)("input",{value:v.phonenum,onChange:C,name:"phone",type:"tel",pattern:"[0-9]{10}",tabIndex:"3",required:!0})}),Object(d.jsx)("fieldset",{children:Object(d.jsx)("button",{name:"submit",type:"submit",id:"contact-submit",children:"Update"})})]})})};function x(){var e=Object(r.f)().name,t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],s=a[1],j=Object(c.useState)("disabled"),b=Object(l.a)(j,2),o=b[0];b[1];Object(c.useEffect)((function(){u.a.get("http://3.23.104.74/searchUser",{params:{userName:e}}).then((function(e){e.data?s([e.data]):alert("no such a user")}))}),[]);var h=function(e){var t={id:e.target.name};u.a.post("http://3.23.104.74/removeUser",t),window.location.reload()};return Object(d.jsx)("div",{children:Object(d.jsxs)("table",{className:"table data",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Number"}),Object(d.jsxs)("th",{children:["Actions",Object(d.jsx)(i.b,{to:"/adduser",children:Object(d.jsx)("button",{className:"addUser",children:"Add new"})})]})]})}),Object(d.jsx)("tbody",{children:n.map((function(e,t){return Object(d.jsxs)("tr",{className:"pl-5px",children:[Object(d.jsx)("td",{className:"data",children:Object(d.jsx)("input",{className:"input",type:"text",disabled:o?"disabled":"",value:e.name})}),Object(d.jsx)("td",{className:"data",children:Object(d.jsx)("input",{className:"input",type:"text",disabled:o?"disabled":"",value:e.mail})}),Object(d.jsx)("td",{className:"data",children:Object(d.jsx)("input",{className:"input",type:"text",disabled:o?"disabled":"",value:e.phonenumber})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{id:"save",className:"save",children:"save"}),Object(d.jsx)(i.b,{to:"/editUser/".concat(e._id,"/").concat(e.name,"/").concat(e.mail,"/").concat(e.phonenumber),children:Object(d.jsx)("button",{id:"edit",className:"edit",children:"Edit"})}),Object(d.jsx)("button",{onClick:h,name:e._id,className:"delete",children:"Delete"})]})]},t)}))})]})})}var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(r.a,{exact:!0,path:"/",children:Object(d.jsx)(j,{})}),Object(d.jsx)(r.a,{path:"/home",children:Object(d.jsx)(j,{})}),Object(d.jsx)(r.a,{path:"/table",children:Object(d.jsx)(o,{})}),Object(d.jsx)(r.a,{path:"/adduser",children:Object(d.jsx)(m,{})}),Object(d.jsx)(r.a,{path:"/editUser/:id/:name/:mail/:phonenumber",children:Object(d.jsx)(O,{})}),Object(d.jsx)(r.a,{path:"/searchResult/:name",children:Object(d.jsx)(x,{})})]})})};s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.8e7cc82d.chunk.js.map
(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[14],{498:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(46),n=a(16),r=a(57),i=a(6),j=a(509),l=a(508),o=a(2),d=a(511),m=a(5),b=function(e){return Object(m.jsx)(d.a,Object(o.a)(Object(o.a)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))},u=function(e){var t=e.name,a=e.suffix,c=e.subTitle,s=e.id,n=e.type,r=e.src,i=e.icon,j=e.size,l=e.shape,o=e.gap,d=e.text,u=e.onNameClick;return Object(m.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[b({icon:i,src:r,type:n,size:j,shape:l,gap:o,text:d}),Object(m.jsxs)("div",{className:"ml-2",children:[Object(m.jsxs)("div",{children:[u?Object(m.jsx)("div",{onClick:function(){return u({name:t,subTitle:c,src:r,id:s})},className:"avatar-status-name clickable",children:t}):Object(m.jsx)("div",{className:"avatar-status-name",children:t}),Object(m.jsx)("span",{children:a})]}),Object(m.jsx)("div",{className:"text-muted avatar-status-subtitle",children:c})]})]})},x=a(105),h=a(51),O=function(e){var t=e.match;console.log(t);var a=Object(c.useState)([]),s=Object(i.a)(a,2),o=s[0],d=s[1],b=Object(c.useState)(!1),O=Object(i.a)(b,2),p=O[0],f=O[1],v=[{title:"\u0418\u043c\u044f",dataIndex:"name",sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}},render:function(e,a){return Object(m.jsx)("div",{className:"d-flex",children:Object(m.jsx)(h.b,{to:"".concat(t.url,"/").concat(a.id),children:Object(m.jsx)(u,{name:a.name,subTitle:a.email})})})}},{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",dataIndex:"phone",sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}},{title:"\u0421\u0430\u0439\u0442",dataIndex:"website",sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}}];return Object(c.useEffect)((function(){var e=function(){var e=Object(r.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){e.ok?e.json().then(d):d([])}));case 3:f(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),p?Object(m.jsx)(x.a,{cover:"content"}):Object(m.jsx)(j.a,{bodyStyle:{padding:"0px"},children:Object(m.jsx)(l.a,{columns:v,dataSource:o,rowKey:"id"})})},p=a(34),f=a(259),v=a(510),y=a(492),w=a(493),g=a(418),N=a(118),I=a(473),k=function(){var e=Object(s.h)().id,t=Object(c.useState)(!1),a=Object(i.a)(t,2),j=a[0],l=a[1],o=Object(I.a)(),d=Object(i.a)(o,1)[0];Object(c.useEffect)((function(){var t=function(){var t=Object(r.a)(Object(n.a)().mark((function t(){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(e){e.ok&&e.json().then((function(e){d.setFieldsValue({name:e.name,email:e.email,username:e.username,phoneNumber:e.phone,website:e.website,address:e.address.street,city:e.address.city,postcode:e.address.zipcode})}))}));case 3:l(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);return j?Object(m.jsx)(x.a,{cover:"content"}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"mt-4",children:Object(m.jsx)(v.a,{form:d,name:"basicInformation",layout:"vertical",initialValues:{name:"",email:"",username:"",phoneNumber:"",website:"",address:"",city:"",postcode:""},onFinish:function(e){var t="updatable";f.b.loading({content:"Updating...",key:t}),setTimeout((function(){f.b.success({content:"Done!",key:t,duration:2})}),1e3)},onFinishFailed:function(e){console.log("Failed:",e)},children:Object(m.jsx)(y.a,{children:Object(m.jsxs)(w.a,{xs:24,sm:24,md:24,lg:16,children:[Object(m.jsxs)(y.a,{gutter:p.c,children:[Object(m.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(m.jsx)(v.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:Object(m.jsx)(g.a,{})})}),Object(m.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(m.jsx)(v.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(m.jsx)(g.a,{})})}),Object(m.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(m.jsx)(v.a.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:Object(m.jsx)(g.a,{})})}),Object(m.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(m.jsx)(v.a.Item,{label:"Phone Number",name:"phoneNumber",children:Object(m.jsx)(g.a,{})})}),Object(m.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(m.jsx)(v.a.Item,{label:"Website",name:"website",children:Object(m.jsx)(g.a,{})})}),Object(m.jsx)(w.a,{xs:24,sm:24,md:24,children:Object(m.jsx)(v.a.Item,{label:"Address",name:"address",children:Object(m.jsx)(g.a,{})})}),Object(m.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(m.jsx)(v.a.Item,{label:"City",name:"city",children:Object(m.jsx)(g.a,{})})}),Object(m.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(m.jsx)(v.a.Item,{label:"Post code",name:"postcode",children:Object(m.jsx)(g.a,{})})})]}),Object(m.jsx)(N.a,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})})};t.default=function(e){var t=e.match;return Object(m.jsxs)(s.d,{children:[Object(m.jsx)(s.b,{exact:!0,path:t.url,children:Object(m.jsx)(O,{match:t})}),Object(m.jsx)(s.b,{exact:!0,path:"".concat(t.url,"/:id"),children:Object(m.jsx)(k,{match:t})})]})}}}]);
//# sourceMappingURL=14.19567fce.chunk.js.map
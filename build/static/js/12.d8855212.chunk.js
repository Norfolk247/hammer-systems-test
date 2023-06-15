(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[12],{447:function(e,t,s){"use strict";var a=s(449),r=s.n(a),i=s(19),n=s(450).a(),c=s(30),o=s(260),l=r.a.create({baseURL:i.a,timeout:6e4}),u="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(c.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(n.push(u),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(c.b),n.push(u),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var m=l,d={login:function(e){return m({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return m({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=d},457:function(e,t,s){"use strict";var a=s(6),r=s(0),i=s(42),n=s(436),c=s(513),o=s(510),l=s(512),u=s(418),m=s(118),d=s(59),j=s(46),h=s(452),g=s(447),b=s(5),p={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,s){return s&&t("password")!==s?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},x={showAuthMessage:d.c,hideAuthMessage:d.b,showLoading:d.d,authenticated:d.a};t.a=Object(i.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),x)((function(e){var t=e.showLoading,s=e.token,i=e.loading,x=e.redirect,f=e.message,O=e.showMessage,v=e.hideAuthMessage,w=e.authenticated,y=e.allowRedirect,N=o.a.useForm(),k=Object(a.a)(N,1)[0],P=Object(j.g)();return Object(r.useEffect)((function(){null!==s&&y&&P.push(x),O&&setTimeout((function(){v()}),3e3)})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(b.jsx)(l.a,{type:"error",showIcon:!0,message:f})}),Object(b.jsxs)(o.a,{form:k,layout:"vertical",name:"register-form",onFinish:function(){k.validateFields().then((function(e){t();g.a.signUp(e).then((function(e){w("fakeToken")})).then((function(e){Object(d.c)(e)}))})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(b.jsx)(o.a.Item,{name:"email",label:"Email",rules:p.email,hasFeedback:!0,children:Object(b.jsx)(u.a,{prefix:Object(b.jsx)(n.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{name:"password",label:"Password",rules:p.password,hasFeedback:!0,children:Object(b.jsx)(u.a.Password,{prefix:Object(b.jsx)(c.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{name:"confirm",label:"ConfirmPassword",rules:p.confirm,hasFeedback:!0,children:Object(b.jsx)(u.a.Password,{prefix:Object(b.jsx)(c.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{children:Object(b.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,loading:i,children:"Sign Up"})})]})]})}))},504:function(e,t,s){"use strict";s.r(t);var a=s(2),r=(s(0),s(457)),i=s(492),n=s(493),c=s(42),o=s(5),l={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(c.c)((function(e){return e.theme.currentTheme}));return Object(o.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(o.jsxs)(i.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(o.jsx)(n.a,{xs:20,sm:20,md:24,lg:16,children:Object(o.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(o.jsx)(i.a,{justify:"center",children:Object(o.jsxs)(n.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(o.jsx)("h1",{children:"Sign Up"}),Object(o.jsxs)("p",{children:["Already have an account? ",Object(o.jsx)("a",{href:"/auth/login-2",children:"Sign In"})]}),Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsx)(r.a,Object(a.a)({},e))})]})})})}),Object(o.jsx)(n.a,{xs:0,sm:0,md:0,lg:8,children:Object(o.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(o.jsx)("div",{className:"text-right",children:Object(o.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(o.jsx)(i.a,{justify:"center",children:Object(o.jsxs)(n.a,{xs:0,sm:0,md:0,lg:20,children:[Object(o.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-19.png",alt:""}),Object(o.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(o.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(o.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(o.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(o.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=12.d8855212.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t){},18:function(e,t){},19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(16),r=a.n(o),l=(a(24),a(5)),i=a(6),s=a(9),u=a(8),m=a(10),p=a(35),d=a(37),h=a(33),f=(a(26),a(34)),E=function(e){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__logo"}),c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(f.a,{to:"/home",activeClassName:"active",className:"nav__link"},"Home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(f.a,{to:"/about",activeClassName:"active",className:"nav__link"},"About")),c.a.createElement("li",{className:"nav__item"},e.accountInfo.accountLoggedIn?c.a.createElement(f.a,{to:"/home",activeClassName:"active",className:"nav__link",onClick:e.logout},"Logout"):c.a.createElement(f.a,{to:"/login",activeClassName:"active",className:"nav__link"},"Login")),e.accountInfo.accountLoggedIn?c.a.createElement("li",{className:"nav__item"},c.a.createElement(f.a,{to:"/dashboard/parties",activeClassName:"active",className:"nav__link"},"Parties")):"",e.accountInfo.accountLoggedIn?c.a.createElement("li",{className:"nav__item"},c.a.createElement(f.a,{to:"/dashboard/settings",activeClassName:"active",className:"nav__link"},"Settings")):"")))},y=a(31),b=function(e){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer-section"},c.a.createElement("ul",{className:"footer-group"},c.a.createElement("li",{className:"footer-group__item"},c.a.createElement(y.a,{to:"/about",className:"footer-group__link"},"About")),c.a.createElement("li",{className:"footer-group__item"},c.a.createElement(y.a,{to:"/about",className:"footer-group__link"},"About")),c.a.createElement("li",{className:"footer-group__item"},c.a.createElement(y.a,{to:"/about",className:"footer-group__link"},"About"))),c.a.createElement("ul",{className:"footer-group"},c.a.createElement("li",{className:"footer-group__item"},c.a.createElement(y.a,{to:"/about",className:"footer-group__link"},"About")),c.a.createElement("li",{className:"footer-group__item"},c.a.createElement(y.a,{to:"/about",className:"footer-group__link"},"About")),c.a.createElement("li",{className:"footer-group__item"},c.a.createElement(y.a,{to:"/about",className:"footer-group__link"},"About"))),c.a.createElement("ul",{className:"footer-group"},c.a.createElement("li",{className:"footer-group__item"},c.a.createElement(y.a,{to:"/about",className:"footer-group__link"},"About")),c.a.createElement("li",{className:"footer-group__item"},c.a.createElement(y.a,{to:"/about",className:"footer-group__link"},"About")),c.a.createElement("li",{className:"footer-group__item"},c.a.createElement(y.a,{to:"/about",className:"footer-group__link"},"About")))))},v=function(e){return c.a.createElement("div",{id:"home"},c.a.createElement("h1",null,"Home"))},g=function(e){return c.a.createElement("div",{id:"About"},c.a.createElement("h1",null,"About"))},_=function(e){return c.a.createElement("div",{id:"login"},c.a.createElement("h1",null,"Login"))},N=function(e){return c.a.createElement("div",{id:"signup"})},k=a(7),j=a(36),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={dispatches:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({dispatches:[{dispatchtext:"hello how are you today?",accountid:2,accountname:"Jol",dispatchcreated:new Date},{dispatchtext:"I am doing well how are you?",accountid:1,accountname:"Matt",dispatchcreated:new Date},{dispatchtext:"It was a bit snowy today.",accountid:2,accountname:"Jol",dispatchcreated:new Date},{dispatchtext:"I enjoyed going to the movies last night.",accountid:1,accountname:"Matt",dispatchcreated:new Date}]})}},{key:"render",value:function(){var e=this;return c.a.createElement("article",{className:"col--8 col--mdm--9 col--lrg--10 bg-theme-blue"},c.a.createElement("div",{className:"dispatch__container"},this.state.dispatches.map(function(t,a){return c.a.createElement(w,{dispatch:t,key:a,accountInfo:e.props.accountInfo})}),c.a.createElement("form",null,c.a.createElement("fieldset",{className:"field btn-pair"},c.a.createElement("div",{className:"field--btn-pair"},c.a.createElement("input",{type:"text",className:"input full btn-pair"}),c.a.createElement("button",{className:"btn--input"},"Send"))))))}}]),t}(c.a.Component),w=function(e){var t="dispatch";return e.dispatch.accountid===e.accountInfo.accountid&&(t="dispatch self"),c.a.createElement("div",{className:t},c.a.createElement("p",{className:"dispatch__account"},e.dispatch.accountname," ",c.a.createElement("span",{className:"dispatch__time"},e.dispatch.dispatchcreated.toDateString())),c.a.createElement("p",{className:"dispatch__message"},e.dispatch.dispatchtext))},I=function(){function e(){Object(l.a)(this,e),this.headers={"Content-Type":"application/json",Accept:"application/json"}}return Object(i.a)(e,[{key:"concatArray",value:function(e,t){return e.concat(t)}}],[{key:"createRandomKey",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}},{key:"htmlDecode",value:function(e){var t=document.createElement("div");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue}},{key:"htmlEncode",value:function(e){var t=document.createElement("span");return t.textContent=e,t.innerHTML}},{key:"createRequest",value:function(e){return{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}}},{key:"createBody",value:function(e,t,a){return{controller:e,action:t,payload:a}}},{key:"createRequestBody",value:function(e){return{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}}},{key:"getRequest",value:function(e,t){fetch("".concat(this.url).concat(e)).then(function(e){return e.json}).then(function(e){console.log(e.status),"success"===e.status&&t(e.data)})}}]),e}(),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).newParty=a.newParty.bind(Object(k.a)(Object(k.a)(a))),a.createParty=a.createParty.bind(Object(k.a)(Object(k.a)(a))),a.state={toggleNewParty:!1,partyName:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"createParty",value:function(){var e=this,t={partyName:this.state.partyName,accountId:this.props.accountInfo.accountId},a=I.createRequestBody(t);fetch("/createParty",a).then(function(e){return e.json()}).then(function(t){e.props.updateParties(t.data),console.log(t)})}},{key:"newParty",value:function(){this.setState(function(e){return{toggleNewParty:!e.toggleNewParty}})}},{key:"handlePartyName",value:function(e){this.setState({partyName:e.target.value})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"grid page__full--header"},c.a.createElement("ul",{className:"party__list col--lrg--2 col--mdm--3 col--4 bg-theme-black"},this.props.parties.map(function(e,t){return c.a.createElement("li",{className:"party__item",key:t},c.a.createElement(f.a,{activeClassName:"party__link active",to:"/dashboard/parties/".concat(e.partyid),className:"party__link "},e.partyname))}),c.a.createElement("li",{className:"party__item--btn-pair"},c.a.createElement("fieldset",{className:"field"},c.a.createElement("div",{className:"field--btn-pair"},c.a.createElement("input",{type:"text",className:"input sml",onChange:this.handlePartyName}),c.a.createElement("label",{className:"btn icon btn-pair tiny",onClick:this.createParty},"New"))))),c.a.createElement(h.a,{path:"/dashboard/parties/:partyid",render:function(t){return c.a.createElement(O,Object.assign({accountInfo:e.props.accountInfo},t))}}))}}]),t}(c.a.Component),A=a(17),C=a.n(A),D=a(18),S=a.n(D),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).updateParties=a.updateParties.bind(Object(k.a)(Object(k.a)(a))),a.state={parties:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({parties:[{partyid:1,partyname:"joll's party",partycreated:new Date,accountId:5},{partyid:2,partyname:"matt's party",partycreated:new Date,accountId:4},{partyid:3,partyname:"amy's party",partycreated:new Date,accountId:2},{partyid:4,partyname:"rachel's party",partycreated:new Date,accountId:3}]})}},{key:"updateParties",value:function(e){this.setState({parties:e})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"Dashbaord"},c.a.createElement(d.a,null,c.a.createElement(h.a,{path:"/dashboard/parties",render:function(t){return c.a.createElement(P,Object.assign({accountInfo:e.props.accountInfo,parties:e.state.parties,updateParties:e.updateParties},t))}}),c.a.createElement(h.a,{path:"/dashboard/settings",render:function(e){return c.a.createElement(C.a,e)}}),c.a.createElement(h.a,{path:"/dashboard/admin",render:function(t){return e.state.isAdmin?c.a.createElement(S.a,t):c.a.createElement(j.a,{to:"/login"})}})))}}]),t}(c.a.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={accountInfo:{accountLoggedIn:!0,accountLevel:"user",accountid:1}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){return console.log("blue")}},{key:"render",value:function(){var e=this;return c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement(E,{accountInfo:this.state.accountInfo,logout:this.logout}),c.a.createElement(d.a,null,c.a.createElement(h.a,{path:"/",exact:!0,component:v}),c.a.createElement(h.a,{path:"/home",component:v}),c.a.createElement(h.a,{path:"/about",component:g}),c.a.createElement(h.a,{path:"/login",component:_}),c.a.createElement(h.a,{path:"/singup",component:N}),c.a.createElement(h.a,{path:"/dashboard",render:function(t){return c.a.createElement(x,Object.assign({accountInfo:e.state.accountInfo},t))}})),c.a.createElement(b,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.fb7cbf3b.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(4),r=a.n(c),i=a(5),s=a.n(i),l=a(15),m=a(1),u=a(3),d=a.n(u),p=a(16),v=a.n(p),h=o.a.createContext(),f=h.Provider,w=(h.Consumer,h),b=o.a.createContext(),E=b.Provider,g=(b.Consumer,b);a(42);var y=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(m.a)(r,2),s=i[0],l=i[1],u=Object(n.useState)(""),p=Object(m.a)(u,2),h=p[0],f=p[1],b=Object(n.useState)(!0),E=Object(m.a)(b,2),y=E[0],O=E[1],N=Object(n.useState)(!1),j=Object(m.a)(N,2),C=j[0],S=j[1],k=Object(n.useContext)(w).setShowModal,x=Object(n.useContext)(g),M=(x.contactsList,x.setContactsList,Object(n.useState)({})),q=Object(m.a)(M,2),F=q[0],L=q[1],P=Object(n.useState)({}),z=Object(m.a)(P,2),B=z[0],J=z[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"close",onClick:function(){return k(!1)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),"Novo contato 23343333333"),o.a.createElement("form",{autoComplete:"off",onSubmit:function(e){var t={name:a,phone:s,company:h,givewayParticipant:y};e.preventDefault(),S(!0),J(t);var n={method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},data:t,url:"https://send-message-iv2.herokuapp.com/api/v1/contact"};d()(n).then(function(e){L(e)}).catch(function(e){L(e)}),c(""),l(""),f(""),O(!0),S(!1)}},o.a.createElement("div",{className:"form-inputs"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"phone"},"Telefone"),o.a.createElement(v.a,{value:s,type:"tel",mask:"(99) 9 9999-9999",id:"phone",name:"phone",onChange:function(e){return l(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"name"},"Nome"),o.a.createElement("input",{value:a,type:"text",id:"name",name:"name",onChange:function(e){return c(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"company"},"Empresa"),o.a.createElement("input",{value:h,type:"text",id:"company",name:"company",onChange:function(e){return f(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group form-check"},o.a.createElement("label",{htmlFor:"giveaway",className:"checkbox"},o.a.createElement("input",{type:"checkbox",name:"giveway",id:"giveaway",defaultChecked:"true",onChange:function(e){return O(e.target.checked)}}),"Quer participar do sorteio"))),JSON.stringify(B),"-------------------------------------------------",JSON.stringify(F),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{type:"submit",disabled:C},C?"agora vai...":"Enviar"))))};a(43);var O=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(m.a)(r,2),u=i[0],p=i[1],v=Object(n.useState)(!0),h=Object(m.a)(v,2),w=h[0],b=h[1];return Object(n.useEffect)(function(){!function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://send-message-iv2.herokuapp.com/api/v1/contact");case 2:t=e.sent,b(!1),c(t.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),Object(n.useEffect)(function(){document.querySelector("body").style.overflowY=u?"hidden":"auto"},[u]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header-list"},w?"Carregando contatos...":"Contatos (".concat(a.length,")")),o.a.createElement("div",{className:"contact-list"},a.map(function(e){return o.a.createElement("div",{className:"contact-list-item",key:e._id,onClick:function(){return function(e){var t,a=e.name,n=e.phone,o=e.giveawayNumber,c=e.givewayParticipant;t=window.encodeURIComponent("Ol\xe1 "+a+",\n\nAgradecemos a sua visita em nosso Stand, foi um prazer receb\xea-lo!\n"+(c?"O seu n\xfamero para participar do sorteio \xe9: "+o+". Boa Sorte!\n":"")+"E conforme conversamos, segue o material sobre os Apps e solu\xe7\xf5es da iv2.\nEasy Quality https://www.youtube.com/watch?v=-xYYd9CbCo4\nEasy Project https://www.youtube.com/watch?v=jaeVf8NhJCY&t\nEasy Calendar https://www.youtube.com/watch?v=VzMcqAoVGt0&t\nMake it Easy https://www.youtube.com/watch?v=b3a3gfTEtpo&t\n\nQualquer d\xfavida , estamos \xe1 disposi\xe7\xe3o :)\n\nAbra\xe7o,\nGrupo iv2"),window.open("https://api.whatsapp.com/send?phone=55".concat(n.replace(/[(,),\-, ]/g,""),"&text=").concat(t),"_blank")}(e)}},o.a.createElement("div",null,o.a.createElement("div",{className:"contact-inital"},e.name.substr(0,1))),o.a.createElement("div",{className:"contact-info-container"},e.name,o.a.createElement("div",{className:"info"},e.company),o.a.createElement("div",{className:"info phone"},e.phone)),e.givewayParticipant&&o.a.createElement("div",{className:"giveaway-number-container"},"n\xb0 ",e.giveawayNumber))})),o.a.createElement("button",{type:"button",className:"fab",onClick:function(){return p(!0)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"#fff"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),o.a.createElement(f,{value:{setShowModal:p}},o.a.createElement("div",{id:"modalContainer",onClick:function(e){return"modalContainer"===e.target.id&&p(!1)},className:"modal-container"+(u?" visible":"")},o.a.createElement("div",{className:"form-modal"+(u?" visible":"")},o.a.createElement(E,{value:{contactsList:a,setContactsList:c}},o.a.createElement(y,null))))))};a(44);var N=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1];return o.a.createElement("div",{className:"auth-container"},o.a.createElement("form",{onSubmit:function(e){return function(e){return e.preventDefault(),"totvs@iv2"===a?(localStorage.setItem("password",a),window.location.reload()):alert("Senha inv\xe1lida")}(e)}},o.a.createElement("input",{type:"text",name:"password",placeholder:"Senha",className:"password-input",onChange:function(e){return c(e.target.value.toLocaleLowerCase())},required:!0,autoFocus:!0}),o.a.createElement("button",{type:"submit",className:"password-submit"},"Entrar")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45);r.a.render(localStorage.getItem("password")?o.a.createElement(O,null):o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.e51957df.chunk.js.map
(this.webpackJsonpsendmessageiv2js=this.webpackJsonpsendmessageiv2js||[]).push([[0],{1:function(e,t,a){e.exports={overlay:"NewContactForm_overlay__EEbkJ",modalContainer:"NewContactForm_modalContainer__OvWGE",header:"NewContactForm_header__2QR91",closeContainer:"NewContactForm_closeContainer__1wQ4H",close:"NewContactForm_close__pmQW6",label:"NewContactForm_label__2bSkk",checkboxLabel:"NewContactForm_checkboxLabel__W2aLm",checkbox:"NewContactForm_checkbox__3OhBC",formInput:"NewContactForm_formInput__2RCve",formEditableContent:"NewContactForm_formEditableContent__1XQr_",buttonContainer:"NewContactForm_buttonContainer__3A8wi",submitButton:"NewContactForm_submitButton__3AOXx"}},15:function(e,t,a){e.exports={authContainer:"AuthForm_authContainer__3IuZE",passwordInput:"AuthForm_passwordInput__1rY24",passwordSubmitButton:"AuthForm_passwordSubmitButton__1MrkF"}},37:function(e,t,a){e.exports=a(71)},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(17),r=a.n(c),s=a(10),i=a(14);function m(e){return e&&"totvs@iv2"===e}var l=a(9),u=a.n(l),p=a(5),d=a(13),v=a.n(d),w=a(32),b=a.n(w),h=a(33),f=a.n(h),_=a(34),E=a.n(_),C=o.a.createContext(),g=C.Provider,N=(C.Consumer,C),y=(window&&window.location&&window.location.hostname,"".concat("https://send-message-iv2.herokuapp.com","/api/").concat("v1")),x=a(1),L=a.n(x);var S=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),m=Object(p.a)(s,2),l=m[0],d=m[1],w=Object(n.useState)(""),h=Object(p.a)(w,2),_=h[0],C=h[1],g=Object(n.useState)(""),x=Object(p.a)(g,2),S=x[0],O=x[1],j=Object(n.useState)(!0),F=Object(p.a)(j,2),I=F[0],k=F[1],A=Object(n.useState)(!1),B=Object(p.a)(A,2),G=B[0],J=B[1],z=Object(n.useContext)(N),H=z.contactsList,M=z.setContactsList;function Q(e){var t=H;t.unshift(e),M(t)}function V(){e.history.push("/contacts")}return o.a.createElement("div",{className:L.a.overlay,onClick:function(e){return e.target.className===L.a.overlay&&V()}},o.a.createElement("div",{className:L.a.modalContainer},o.a.createElement("div",{className:L.a.header},o.a.createElement(i.b,{className:L.a.closeContainer,to:"/contacts"},o.a.createElement("svg",{className:L.a.close,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#212121"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),"Novo contato"),o.a.createElement("form",{autoComplete:"off",onSubmit:function(e){var t,a,n;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=f.a.stringify({name:c,phone:l,company:_,givewayParticipant:I,observation:S}),a={},n="",e.preventDefault(),J(!0),o.next=7,u.a.awrap(v.a.post("".concat(y,"/contact"),t));case 7:a=o.sent,n=window.encodeURIComponent("Ol\xe1 "+a.data.name+",\n\nAgradecemos a sua visita em nosso Stand, foi um prazer receb\xea-lo!\n\n"+(I?"Voc\xea est\xe1 participando do sorteio de um Brinde!!! \n\nSeu c\xf3digo \xe9: "+a.data.giveawayNumber+". Boa Sorte!\n\n":"")+"E conforme conversamos, segue o material sobre os Apps e solu\xe7\xf5es da iv2.\n\nEasy Quality https://www.youtube.com/watch?v=-xYYd9CbCo4\n\nMake it Easy https://www.youtube.com/watch?v=b3a3gfTEtpo&t\n\nEmployee Journey  https://www.youtube.com/watch?v=J9_fWGw9gJc&t\n\nGOF - Gest\xe3o de Objeto Fluig  https://www.youtube.com/watch?v=_VpESoY_o3Q\n\nQualquer d\xfavida , estamos \xe0 disposi\xe7\xe3o :)\n\nAbra\xe7o,\nGrupo iv2"),Q(a.data),r(""),d(""),C(""),O(""),k(!0),J(!1),window.open("https://api.whatsapp.com/send?phone=55".concat(l.replace(/[(,),\-, ]/g,""),"&text=").concat(n),"_blank"),V();case 18:case"end":return o.stop()}}))}},o.a.createElement("div",{className:L.a.formInputs},o.a.createElement("div",{className:L.a.formGroup},o.a.createElement("label",{htmlFor:"phone",className:L.a.label},"Telefone"),o.a.createElement(E.a,{value:l,type:"tel",mask:"(99) 9 9999-9999",id:"phone",name:"phone",autoFocus:!0,className:L.a.formInput,onChange:function(e){return d(e.target.value)},required:!0})),o.a.createElement("div",{className:L.a.formGroup},o.a.createElement("label",{htmlFor:"name",className:L.a.label},"Nome"),o.a.createElement("input",{value:c,type:"text",id:"name",name:"name",className:L.a.formInput,onChange:function(e){return r(e.target.value)},required:!0})),o.a.createElement("div",{className:L.a.formGroup},o.a.createElement("label",{htmlFor:"company",className:L.a.label},"Empresa"),o.a.createElement("input",{value:_,type:"text",id:"company",name:"company",className:L.a.formInput,onChange:function(e){return C(e.target.value)},required:!0})),o.a.createElement("div",{className:L.a.formGroup},o.a.createElement(b.a,{html:S,id:"observation",className:L.a.formEditableContent,onChange:function(e){return O(e.target.value)}}))),o.a.createElement("div",{className:L.a.buttonContainer},o.a.createElement("button",{type:"submit",disabled:G,className:L.a.submitButton},G?"Enviando...":"Enviar")))))},O=a(8),j=a.n(O);var F=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),m=Object(p.a)(r,2),l=m[0],d=m[1];return Object(n.useEffect)((function(){!function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(v.a.get("".concat(y,"/contact")));case 2:e=t.sent,d(!1),c(e.data);case 5:case"end":return t.stop()}}))}()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:j.a.headerList},l?"Carregando contatos...":"Contatos (".concat(a.length,")")),o.a.createElement("div",{className:j.a.contactList},a.map((function(e){return o.a.createElement("div",{className:j.a.contactListItem,key:e._id,onClick:function(){return function(e){var t=e.phone,a=window.encodeURIComponent("PARAB\xc9NS\n\nDurante o Evento, o Grupo iv2 estar\xe1 sorteando um brinde!\n\nSegue informa\xe7\xf5es:\n\nData: 16/01/2020\nHor\xe1rio: 15h00\nAproveite e Siga nosso Linkedin: https://www.linkedin.com/company/iv2-tecnologia-e-sistemas/?viewAsMember=true\n\nVenha aprender como conseguimos turbinar novas aplica\xe7\xf5es do fluig com esta tecnologia!\n\nAbra\xe7os.");window.open("https://api.whatsapp.com/send?phone=55".concat(t.replace(/[(,),\-, ]/g,""),"&text=").concat(a),"_blank")}(e)}},o.a.createElement("div",null,o.a.createElement("div",{className:j.a.contactInital},e.name.substr(0,1).toUpperCase())),o.a.createElement("div",{className:j.a.contactInfoContainer},e.name,o.a.createElement("div",{className:j.a.info},e.company),o.a.createElement("div",{className:j.a.phone},e.phone)),e.givewayParticipant&&o.a.createElement("div",{className:j.a.giveawayNumberContainer},"n\xb0 ",e.giveawayNumber))}))),o.a.createElement(i.b,{to:"/contacts/new",className:j.a.fab},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"#fff"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),o.a.createElement(g,{value:{contactsList:a,setContactsList:c}},o.a.createElement(s.b,{path:"/contacts/new",component:S})))},I=a(15),k=a.n(I);var A=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],r=a[1];return o.a.createElement("div",{className:k.a.authContainer},o.a.createElement("form",{onSubmit:function(e){return function(e){return e.preventDefault(),m(c)?(localStorage.setItem("password",c),window.location.reload()):alert("Senha inv\xe1lida")}(e)}},o.a.createElement("input",{type:"text",name:"password",placeholder:"Senha",className:k.a.passwordInput,onChange:function(e){return r(e.target.value.toLocaleLowerCase())},required:!0,autoFocus:!0}),o.a.createElement("button",{type:"submit",className:k.a.passwordSubmitButton},"Entrar")))};var B=function(){var e=m(localStorage.password),t=o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/login",exact:!0,component:A}),o.a.createElement(s.a,{from:"*",to:"/login"})),a=o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/contacts",exact:!0,component:F}),o.a.createElement(s.b,{path:"/contacts/new",exact:!0,component:F}),o.a.createElement(s.a,{from:"*",to:"/contacts"}));return o.a.createElement(i.a,null,e?a:t)};function G(e){localStorage.appVersion=e,window.location.reload(!0)}a(70);r.a.render(o.a.createElement(B,null),document.getElementById("root")),function(){var e,t;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(v.a.get("".concat(y,"/frontEndVersion")));case 2:e=a.sent,t=e.data.version,localStorage.appVersion!==t&&G(t);case 5:case"end":return a.stop()}}))}()},8:function(e,t,a){e.exports={headerList:"ContactsList_headerList__2-Xzi",contactList:"ContactsList_contactList__2wCbj",contactListItem:"ContactsList_contactListItem__3cgs9",contactInital:"ContactsList_contactInital__3b6qJ",contactInfoContainer:"ContactsList_contactInfoContainer__2zw_J",info:"ContactsList_info__28LtU",phone:"ContactsList_phone__23fHp",giveawayNumberContainer:"ContactsList_giveawayNumberContainer__3HP2i",fab:"ContactsList_fab__3rxS_"}}},[[37,1,2]]]);
//# sourceMappingURL=main.581bc090.chunk.js.map
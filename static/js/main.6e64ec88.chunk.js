(this["webpackJsonpkendo-ui"]=this["webpackJsonpkendo-ui"]||[]).push([[0],{34:function(e,t,a){e.exports=a(56)},39:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(11),l=a.n(o),s=(a(39),a(25)),i=a(18),r="1084271638688-t6s75cnrcee96gsc46gr0q7uqrfnovt2.apps.googleusercontent.com",m="AIzaSyDC6A1Y0eo0voX2_yJs-1CqnvMAJzyQSXI",u="https://www.googleapis.com/auth/calendar.readonly",d="https://www.googleapis.com/auth/contacts.readonly",f="https://www.googleapis.com/auth/gmail.readonly",p=a(15),h=a(5),E=(a(50),a(14)),g=a(20),v=function(e){var t=e.emails,a=Object(n.useState)({take:10,skip:0,sort:[{field:"date",dir:"des"}]}),o=Object(i.a)(a,2),l=o[0],s=o[1],r=Object(n.useState)(!1),m=Object(i.a)(r,2),u=m[0],d=m[1],f=Object(n.useState)({}),h=Object(i.a)(f,2),v=h[0],b=h[1];return c.a.createElement("div",{className:"inbox"},c.a.createElement("div",{className:"site-grid-container"},!1===u?c.a.createElement(g.a,{onRowClick:function(e){d(!0),b(e.dataItem)},data:Object(E.c)(t,l.sort),pageable:!0,sortable:!0,sort:l.sort,skip:l.skip,take:l.take,total:t.length,onDataStateChange:function(e){s(e.data)},className:"site-grid"},c.a.createElement(g.b,{field:"sender",width:"320px",title:"SENDER"}),c.a.createElement(g.b,{field:"clippedSubject",width:"350px",title:"SUBJECT"}),c.a.createElement(g.b,{field:"clippedContent",title:"CONTENT"}),c.a.createElement(g.b,{field:"date",width:"230px",title:"DATE",filter:"date",format:"{0:d-MMM-yyyy}"})):c.a.createElement(p.b,null,c.a.createElement(p.e,null,v.sender),c.a.createElement(p.d,null,c.a.createElement(p.f,null,v.subject),c.a.createElement("p",null,v.date.toString()),c.a.createElement("p",null,v.content),c.a.createElement("p",null,v.clippedContent)),c.a.createElement(p.c,null,c.a.createElement("span",{className:"k-button k-flat k-primary",onClick:function(){d(!1)}},"Back"),c.a.createElement("span",{className:"k-button k-flat k-primary"},"Reply")))))},b=(a(51),a(22)),w=a(33),k=function(e){var t=e.events;return c.a.createElement("div",{className:"Calendar"},c.a.createElement(b.c,{data:t,defaultView:"week"},c.a.createElement(b.b,null),c.a.createElement(b.d,{workWeekStart:w.a.Monday,workWeekEnd:w.a.Friday}),c.a.createElement(b.a,{startTime:"09:00",endTime:"18:00"})))},N=(a(52),a(27)),j=function(e){var t=e.dataItem;return c.a.createElement("div",{className:"row p-2 border-bottom list-item"},c.a.createElement("div",{className:"col-2 avatar"},c.a.createElement(p.a,{shape:"circle",type:"img",className:"picture-avatar"},c.a.createElement("img",{src:t.photo,alt:"",className:"photo"}))),c.a.createElement("div",{className:"col-3 contact-name"},c.a.createElement("div",null,t.title)),c.a.createElement("div",{className:"col-3 contact-email"},c.a.createElement("div",null,t.email)),c.a.createElement("div",{className:"col-4 contact-phone"},c.a.createElement("div",{className:"k-chip-content"},t.phone)))},y=function(){return c.a.createElement(N.b,{className:"contacts-header list-item"},c.a.createElement("div",{className:"col-2 avatar"}),c.a.createElement("div",{className:"col-3 contact-name"},"NAME"),c.a.createElement("div",{className:"col-3 contact-email"},"EMAIL"),c.a.createElement("div",{className:"col-4 contact-phone"},"PHONE"))},O=function(e){var t=e.contacts;return c.a.createElement("div",{className:"Contacts"},c.a.createElement(N.a,{data:t,item:j,header:y,style:{width:"100%"}}))},S=(a(53),a(54),a(55),function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),E=Object(i.a)(l,2),g=E[0],b=E[1],w=Object(n.useState)([]),N=Object(i.a)(w,2),j=N[0],y=N[1],S=Object(n.useState)([]),C=Object(i.a)(S,2),_=C[0],I=C[1],T=function(){setTimeout((function(){window.gapi.auth.authorize({client_id:r,scope:"".concat(f," ").concat(u," ").concat(d),immediate:!1},x)}))},x=function(e){A(e.access_token),D(e.access_token),M(e.access_token)},A=function(e){fetch("https://www.googleapis.com/gmail/v1/users/me/messages?access_token=".concat(e,"&maxResults=30")).then((function(e){return e.json()})).then((function(t){return t.messages.forEach((function(t){fetch("https://www.googleapis.com/gmail/v1/users/me/messages/".concat(t.id,"?access_token=").concat(e)).then((function(e){return e.json()})).then((function(e){if(e.labelIds.includes("INBOX")){var t={},a=e.payload.headers;t.sender=a.find((function(e){return"From"===e.name})).value;var n=a.find((function(e){return"Subject"===e.name})).value;t.subject=n,t.date=new Date(a.find((function(e){return"Date"===e.name})).value),t.content=e.snippet,t.clippedContent=e.snippet.substr(0,50),t.clippedSubject=n.substr(0,50),b((function(e){return[].concat(Object(s.a)(e),[t])}))}}))})),t})).catch((function(e){console.log(e)}))},D=function(e){fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=".concat(e)).then((function(e){return e.json()})).then((function(e){e.items.forEach((function(e){var t={};e.start&&e.end&&(t.id=e.id,t.start=new Date(e.start.dateTime),t.end=new Date(e.end.dateTime),t.title=e.summary,y((function(e){return[].concat(Object(s.a)(e),[t])})))}))})).catch((function(e){console.log(e)}))},M=function(e){fetch("https://www.google.com/m8/feeds/contacts/default/full?alt=json&access_token=".concat(e,"&max-results=25&v=3.0")).then((function(e){return e.json()})).then((function(t){return t.feed.entry.forEach((function(t){var a={};t.title?a.title=t.title.$t:a.title="",t.gd$phoneNumber?a.phone=t.gd$phoneNumber[0].$t:a.phone="",t.gd$email?a.email=t.gd$email[0].address:a.email="",t.photo="";var n=t.link[0].href;n&&fetch("".concat(n,"&access_token=").concat(e)).then((function(e){a.photo=e.url})).catch((function(e){console.log(e)})),I((function(e){return[].concat(Object(s.a)(e),[a])}))})),t})).catch((function(e){console.log(e)}))};return c.a.createElement("div",{className:"App"},g.length>0?c.a.createElement("div",{className:"tabs"},c.a.createElement(p.g,{selected:a,onSelect:function(e){o(e.selected)}},c.a.createElement(p.h,{title:"Inbox"},c.a.createElement(v,{emails:g})),c.a.createElement(p.h,{title:"Calendar"},c.a.createElement(k,{events:j})),c.a.createElement(p.h,{title:"Contacts"},c.a.createElement(O,{contacts:_})))):c.a.createElement("div",null,c.a.createElement("p",null,"Please login"),c.a.createElement(h.a,{onClick:function(){window.gapi.client.setApiKey(m),T()},className:"auth-btn"},"Login")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.6e64ec88.chunk.js.map
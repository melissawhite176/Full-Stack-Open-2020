(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),u=n(4),l=n(2),i=function(e){var t=e.note,n=e.toggleImportance,a=t.important?"make not important":"make important";return o.a.createElement("li",{className:"note"},t.content,o.a.createElement("button",{onClick:n},a))},m=n(3),s=n.n(m),f="http://localhost:3001/api/notes",p=function(){return console.log("get all promise returned"),s.a.get(f).then((function(e){return e.data}))},d=function(e){return console.log("create promise returned"),s.a.post(f,e).then((function(e){return e.data}))},E=function(e,t){return console.log("update promise returned"),s.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},b=function(e){var t=e.message;return null===t||0===t.length?null:o.a.createElement("div",{className:"error"},t)},g=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],c=n[1],m=Object(a.useState)(""),s=Object(l.a)(m,2),f=s[0],g=s[1],h=Object(a.useState)(!0),v=Object(l.a)(h,2),O=v[0],j=v[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),y=k[0],w=k[1];Object(a.useEffect)((function(){p().then((function(e){c(e)}))}),[]);var C=O?r:r.filter((function(e){return!0===e.important})),I=function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},o.a.createElement("br",null),o.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))};return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(b,{message:y}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return j(!O)}},"show ",O?"important":"all")),o.a.createElement("ul",null,C.map((function(e){return o.a.createElement(i,{key:e.id,note:e,toggleImportance:function(){return function(e){console.log("importance changed on note id:  ".concat(e));var t=r.find((function(t){return t.id===e})),n=Object(u.a)(Object(u.a)({},t),{},{important:!t.important});E(e,n).then((function(t){c(r.map((function(n){return n.id!==e?n:t})))})).catch((function(n){w("the note '".concat(t.content,"' was already deleted from server")),setTimeout((function(){w(null)}),5e3),c(r.filter((function(t){return t.id!==e})))}))}(e.id)}})}))),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={content:f,date:(new Date).toISOString(),important:Math.random()>.5};d(t).then((function(e){c(r.concat(e)),g("")}))}},o.a.createElement("input",{value:f,onChange:function(e){g(e.target.value)}}),o.a.createElement("button",{type:"submit"},"save")),o.a.createElement(I,null))};n(37);c.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.555ca97c.chunk.js.map
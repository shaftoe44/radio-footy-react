(this["webpackJsonpradio-footy-ui"]=this["webpackJsonpradio-footy-ui"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(5),r=n.n(c),o=(n(20),n(3)),s=n(6),u=(n(21),n(11)),l=n.n(u),f=n(44),m=n(45),h=n(1),j=function(t){var e=t.title,n=t.station,a=t.competition,i=t.time,c=t.datetime,r=new Date,o=function(t,e){var n=Date.parse(e);return Object(f.a)(t,{start:n,end:l()(n,2)})}(r,c),s=function(t,e){var n=Date.parse(e);return Object(m.a)(l()(n,2),t)}(r,c);return Object(h.jsxs)("div",{className:"match ".concat(o?"on-air":""," ").concat(s?"past":""),children:[Object(h.jsx)("div",{className:"match-time",children:i}),Object(h.jsx)("div",{className:"match-title",children:e}),Object(h.jsx)("div",{className:"match-station",children:n}),Object(h.jsx)("div",{className:"match-competition",children:a})]})},b=(n(25),function(t){var e=t.matches,n=t.date;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"date-title",children:n}),Object(h.jsx)("div",{children:e.map((function(t){return Object(h.jsx)(j,{station:t.station,time:t.time,competition:t.competition,title:t.title,datetime:t.datetime},t.station+t.title)}))})]})}),d=(n(26),n(12)),p=function(t){var e=t.filterCategory,n=t.filterValue,a=t.setFilterCategory,i=t.setFilterValue,c=t.matches,r=c.flatMap((function(t){return t.matches.map((function(t){return t.competition}))})).filter((function(t,e,n){return n.indexOf(t)===e})).sort(),o=c.flatMap((function(t){return t.matches.flatMap((function(t){return t.title.split(" v ")}))})).filter((function(t,e,n){return n.indexOf(t)===e})).sort(),s=c.flatMap((function(t){return t.matches.map((function(t){return t.station}))})).filter((function(t,e,n){return n.indexOf(t)===e})).sort(),u=[{value:"competition",label:"Competition"},{value:"station",label:"Station"},{value:"team",label:"Team"}],l=function(){switch(e){case"team":return o;case"competition":return r;case"station":return s;default:return[]}}().map((function(t){return{value:t,label:t}}));return Object(h.jsxs)("div",{children:[Object(h.jsx)(d.a,{placeholder:"Filter by...",onChange:function(t){a(t?t.value:"None")},options:u,value:u.find((function(t){return t.value===e}))||"None",isClearable:!0,isSearchable:!1}),"None"!==e&&Object(h.jsx)(d.a,{options:l,onChange:function(t){return i(t.value)},value:l.find((function(t){return t.value===n}))||"None",isSearchable:"team"===e})]})};var O=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1],c=Object(a.useState)("None"),r=Object(s.a)(c,2),u=r[0],l=r[1],f=Object(a.useState)("None"),m=Object(s.a)(f,2),j=m[0],d=m[1];return Object(a.useEffect)((function(){fetch("https://shaftoe44.github.io/radio-footy/data.json").then((function(t){return t.json()})).then((function(t){return i(t)}))}),[i]),Object(a.useEffect)((function(){d("None")}),[u,d]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{filterCategory:u,filterValue:j,setFilterCategory:l,setFilterValue:d,matches:n}),Object(h.jsx)("h1",{className:"title",children:"Football"}),Object(h.jsx)("h2",{className:"subtitle",children:"on the radio"}),("None"===u||"None"===j?n:"team"===u?n.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{matches:t.matches.filter((function(t){return t.title.split(" v ").includes(j)}))})})).filter((function(t){return t.matches.length>0})):"station"===u?n.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{matches:t.matches.filter((function(t){return t.station===j}))})})).filter((function(t){return t.matches.length>0})):"competition"===u?n.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{matches:t.matches.filter((function(t){return t.competition===j}))})})).filter((function(t){return t.matches.length>0})):(console.warn('Filter is not "None" but is not recognised: '+u),n)).map((function(t){return Object(h.jsx)(b,{date:t.date,matches:t.matches},t.date)}))]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),c(t),r(t)}))};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),v()}},[[42,1,2]]]);
//# sourceMappingURL=main.9f815426.chunk.js.map
(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{37:function(e,c,t){},62:function(e,c,t){"use strict";t.r(c);var a=t(1),r=t.n(a),n=t(28),i=t.n(n),s=t(19),l=(t(37),t(38),t(29)),j=t.n(l),o=t(83),h=t(87),d=t(90),b=t(92),g=t(85),x=t(88),O=t(89),p=t(86),m=t(91),u=t(2),_=Object(o.a)({table:{minWidth:650},media:{height:30,width:30}});var y=function(){var e=_(),c=r.a.useState([]),t=Object(s.a)(c,2),a=t[0],n=t[1],i=r.a.useState(""),l=Object(s.a)(i,2),o=l[0],y=l[1];r.a.useEffect((function(){j.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((function(e){console.log(e.data),n(e.data)})).catch((function(e){return console.log(e)}))}));var f=a.filter((function(e){return e.name.toLowerCase().includes(o.toLocaleLowerCase())}));return Object(u.jsxs)("div",{className:"crypto__tracker",children:[Object(u.jsxs)("div",{className:"crypto__search",children:[Object(u.jsx)("h1",{className:"crypto__searchHeading",children:"Search Coin"}),Object(u.jsx)("input",{type:"text",className:"crypto__searchBar",placeholder:"Search by coin name",onChange:function(e){return y(e.target.value)}})]}),Object(u.jsx)("div",{className:"crypto__container",children:Object(u.jsx)(g.a,{component:p.a,children:Object(u.jsxs)(h.a,{className:e.table,"aria-label":"simple table",children:[Object(u.jsx)(x.a,{children:Object(u.jsxs)(O.a,{children:[Object(u.jsx)(b.a,{children:Object(u.jsx)("strong",{children:"Coin"})}),Object(u.jsx)(b.a,{children:Object(u.jsx)("strong",{children:"Name"})}),Object(u.jsx)(b.a,{align:"right",children:Object(u.jsx)("strong",{children:"Symbol"})}),Object(u.jsx)(b.a,{align:"right",children:Object(u.jsx)("strong",{children:"Price"})}),Object(u.jsx)(b.a,{align:"right",children:Object(u.jsx)("strong",{children:"Price Change"})}),Object(u.jsx)(b.a,{align:"right",children:Object(u.jsx)("strong",{children:"Volume"})}),Object(u.jsxs)(b.a,{align:"right",children:[Object(u.jsx)("strong",{children:"NMarket Captial"})," "]})]})}),Object(u.jsx)(d.a,{children:f.map((function(c){return Object(u.jsxs)(O.a,{children:[Object(u.jsx)(b.a,{component:"th",scope:"row",children:Object(u.jsx)(m.a,{className:e.media,image:c.image,title:"Crypto-Currency"})}),Object(u.jsx)(b.a,{component:"th",scope:"row",children:c.name}),Object(u.jsx)(b.a,{align:"right",children:c.symbol}),Object(u.jsx)(b.a,{align:"right",children:c.current_price.toFixed(2)}),Object(u.jsxs)(b.a,{align:"right",children:[c.price_change_percentage_24h.toFixed(2),"%"]}),Object(u.jsx)(b.a,{align:"right",children:c.total_volume}),Object(u.jsxs)(b.a,{align:"right",children:[Object(u.jsx)("strong",{children:"Mkt. Cap:"}),c.market_cap.toLocaleString()]})]},c.id)}))})]})})})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.de628a8d.chunk.js.map
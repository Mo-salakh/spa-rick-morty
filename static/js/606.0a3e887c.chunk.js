"use strict";(self.webpackChunkspa_task=self.webpackChunkspa_task||[]).push([[606],{606:(e,s,n)=>{n.r(s),n.d(s,{Character:()=>c});var a=n(733),i=n(966),t=n(43),l=n(141),r=n(579);function c(){const{id:e}=(0,a.g)(),s=(0,a.Zp)(),n=(0,t.useContext)(l.B);if(!n)throw new Error("Error in context");const{qualityCh:c}=n,{characters:d}=(0,i.s)(c),o=d.find((s=>s.id===Number(e)));return o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"title",children:" \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435 "}),(0,r.jsx)("div",{className:"card",children:(0,r.jsxs)("div",{className:"card_info",children:[(0,r.jsx)("span",{className:"close",onClick:()=>s("/characters"),children:"X"}),(0,r.jsx)("img",{src:null===o||void 0===o?void 0:o.image,alt:null===o||void 0===o?void 0:o.name}),(0,r.jsxs)("div",{className:"card_text",children:[(0,r.jsxs)("h2",{className:"title",children:["name: ",null===o||void 0===o?void 0:o.name]}),(0,r.jsxs)("span",{children:["Gender: ",null===o||void 0===o?void 0:o.gender]}),null!==o&&void 0!==o&&o.type?(0,r.jsxs)("span",{children:["Type: $",null===o||void 0===o?void 0:o.type]}):null,(0,r.jsxs)("span",{children:["status: ",null===o||void 0===o?void 0:o.status]}),(0,r.jsxs)("span",{children:["species: ",null===o||void 0===o?void 0:o.species]}),(0,r.jsxs)("p",{children:["created: ",null===o||void 0===o?void 0:o.created]})]})]})})]}):(0,r.jsx)("h1",{className:"not_found_title",children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"})}},966:(e,s,n)=>{n.d(s,{s:()=>i});var a=n(43);function i(e){const[s,n]=(0,a.useState)([]),[i,t]=(0,a.useState)(!1),[l,r]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{r(!0),fetch("https://rickandmortyapi.com/api/character?page=".concat(e)).then((e=>e.json())).then((e=>{var s;n((s=>{const n=e.results.filter((e=>!s.some((s=>s.id===e.id))));return[...s,...n]})),t(null!==(null===(s=e.info)||void 0===s?void 0:s.next)),r(!1)})).catch((e=>console.error(e.message))).finally((()=>r(!1)))}),[e]),{characters:s,hasMore:i,loading:l}}}}]);
//# sourceMappingURL=606.0a3e887c.chunk.js.map
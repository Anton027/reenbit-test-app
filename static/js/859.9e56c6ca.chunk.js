"use strict";(self.webpackChunkreact_test_template=self.webpackChunkreact_test_template||[]).push([[859],{4859:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,i,a,c,p,o,s,l,d,u,x,m=t(3433),f=t(9439),h=t(2791),g=t(1087),w=t(6768),Z=t(2006),b=t(4153),v=t(168),y=t(6444),j=y.ZP.section(r||(r=(0,v.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n    justify-content: center;\n    align-items: center;\n    padding-left: 24px;\n    padding-right: 24px;\n"]))),P=y.ZP.img(i||(i=(0,v.Z)(["\n    max-height: 104px;\n    max-width: 312px;\n    @media screen and (min-width: 1440px) {\n        display: none;\n    }\n"]))),k=y.ZP.img(a||(a=(0,v.Z)(["\n    display: none;\n    @media screen and (min-width: 1440px) {\n        display: inline-flex;\n        min-height:200px;\n        min-width:500px;\n    }\n"]))),C=y.ZP.label(c||(c=(0,v.Z)(["\n    margin-left: auto;\n    margin-right: auto;\n\n    /* @media screen and (max-width: 767px) {\n        max-width: 312px;\n    } */\n    min-width: 312px;\n    display: inline-flex;\n    align-items: center;\n    padding: 16px;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n    border-radius: 8px;\n\n    cursor: pointer;\n\n    @media screen and (min-width: 1440px) {\n        min-width:1020px ;\n    }\n"]))),S=y.ZP.input(p||(p=(0,v.Z)(["\n    border: none;\n"]))),_=t(8820),z=t(184),H=function(n){var e=n.value,t=n.onChange;return(0,z.jsxs)(C,{children:[(0,z.jsx)(_.RB5,{size:22}),(0,z.jsx)(S,{placeholder:"Filter by name...",type:"text",name:"filter",value:e,onChange:function(n){return t(n.target.value)}})]})},N=t(7689);var R=y.ZP.ul(o||(o=(0,v.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 24px;\n\n    @media screen and (min-width: 1440px) {\n        max-width: 1020px;\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n        grid-template-rows: repeat(2, 1fr);\n        grid-column-gap: 20px;\n        grid-row-gap: 24px;\n    }\n"]))),E=y.ZP.img(s||(s=(0,v.Z)(["\n    min-width: 312px;\n    /* @media screen and (max-width: 767px) {\n       \n    } */\n    @media screen and (min-width: 1440px) {\n        min-width:240px ;\n        max-width: 240px;\n    }\n"]))),I=y.ZP.li(l||(l=(0,v.Z)(["\n    min-width: 312px;\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);\n    border-radius: 4px;\n    &:hover,:focus{\n        scale: 1.04;\n    }\n    @media screen and (min-width: 1440px) {\n        min-width:240px;\n    }\n"]))),J=y.ZP.div(d||(d=(0,v.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 12px 16px;\n    gap: 10px;\n"]))),L=y.ZP.p(u||(u=(0,v.Z)(["\n    color: rgba(0, 0, 0, 0.87);\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 30px;\n    letter-spacing: 0.15px;\n"]))),O=y.ZP.p(x||(x=(0,v.Z)(["\n    color: rgba(0, 0, 0, 0.6);\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 21px;\n    letter-spacing: 0.25px;\n"]))),B=function(n){var e=n.characters,t=(0,N.TH)(),r=function(n,e){var t=(0,h.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem(n)))&&void 0!==t?t:e})),r=(0,f.Z)(t,2),i=r[0],a=r[1];return(0,h.useEffect)((function(){window.localStorage.setItem(n,JSON.stringify(i))}),[i,n]),[i,a]}("characters",e),i=(0,f.Z)(r,1)[0];return(0,z.jsx)(R,{children:i.map((function(n){var e=n.id,r=n.name,i=n.species,a=n.image;return(0,z.jsx)(I,{children:(0,z.jsxs)(g.rU,{to:"".concat(e),state:{from:t},children:[(0,z.jsx)(E,{src:a,alt:r}),(0,z.jsxs)(J,{children:[(0,z.jsx)(L,{children:r}),(0,z.jsx)(O,{children:i})]})]})},e)}))})},F=function(){var n,e=(0,h.useState)([]),t=(0,f.Z)(e,2),r=t[0],i=t[1],a=(0,g.lr)(),c=(0,f.Z)(a,2),p=c[0],o=c[1];(0,h.useEffect)((function(){(0,w.H)().then((function(n){return i(n)}))}),[]);var s=(0,m.Z)(r).sort((function(n,e){return n.name.localeCompare(e.name)})),l=null!==(n=p.get("name"))&&void 0!==n?n:"",d=s.filter((function(n){return n.name.toLowerCase().includes(l.toLowerCase())}));return(0,z.jsx)("main",{children:(0,z.jsxs)(j,{children:[(0,z.jsx)(P,{src:Z,alt:"mobile"}),(0,z.jsx)(k,{src:b,alt:"desctop"}),(0,z.jsx)(H,{value:l,onChange:function(n){o(""!==n?{name:n}:{})}}),r.length>0?(0,z.jsx)(B,{characters:d}):(0,z.jsx)("h3",{children:"Not found"})]})})}},6768:function(n,e,t){t.d(e,{H:function(){return p},u:function(){return s}});var r=t(5861),i=t(7757),a=t.n(i),c=t(1243);function p(n){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://rickandmortyapi.com/api/character");case 3:return t=n.sent,n.next=6,t.data.results;case 6:return r=n.sent,n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return");case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function s(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://rickandmortyapi.com/api/character/".concat(e));case 3:return t=n.sent,n.abrupt("return",t);case 7:return n.prev=7,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},4153:function(n,e,t){n.exports=t.p+"static/media/desctop.5d713b1e7be9cb53079f.png"},2006:function(n,e,t){n.exports=t.p+"static/media/mobile.f0a28677015be676ed49.png"}}]);
//# sourceMappingURL=859.9e56c6ca.chunk.js.map
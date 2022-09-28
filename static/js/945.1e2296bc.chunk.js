"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[945],{8009:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ve}});var r,i=t(95193),o=t(61889),c=t(68870),s=t(39504),a=t(20890),l=t(23060),u=t(30418),d=t(10757),h=t(22020),f=t(76899),x=t(3992),p=t(29439),Z=t(30168),m=t(63204),j=t(55200),v=t(9585),g=t(94721),b=t(66647),y=t(81918),w=t(72791),T=t(43504),C=t(10658),k=t(95614),z=t(71310),D=t(82095),M=t(55942),L=t(75545),P=t(947),A=t(66218),H=t(31096),S=t(69210),V=t(42320),R=t(24351),G=t(60393),O=t(80184);function _(){var e=(0,h.$)(["page_home","ui"]).t,n=(0,w.useContext)(H.t).database,t=(0,S.Z)(n),o=(0,V.Z)((function(){return P.Z.getAll}),[]),c=(0,w.useMemo)((function(){var e=n.chars.keys,r=(0,G.O)(R.N,(function(){return 0}));return o&&e.forEach((function(e){var n=o(e,t).elementKey;r[n]=r[n]+1})),{characterTally:r,characterTotal:e.length}}),[n,o,t]),l=c.characterTally,d=c.characterTotal,f=(0,V.Z)((function(){return A.Z.getAll}),[]),_=(0,w.useMemo)((function(){var e=n.weapons.values,t=(0,G.O)(R.yd,(function(){return 0}));return f&&e.forEach((function(e){var n=f(e.key).weaponType;t[n]=t[n]+1})),{weaponTally:t,weaponTotal:e.length}}),[n,f]),N=_.weaponTally,W=_.weaponTotal,q=(0,w.useMemo)((function(){var e=(0,G.O)(R.eV,(function(){return 0})),t=n.arts.values;return t.forEach((function(n){var t=n.slotKey;e[t]=e[t]+1})),{artifactTally:e,artifactTotal:t.length}}),[n]),E=q.artifactTally,F=q.artifactTotal,U=(0,u.Z)(),B=!(0,i.Z)(U.breakpoints.up("md"));return(0,O.jsxs)(x.Z,{children:[(0,O.jsx)(v.Z,{title:(0,O.jsx)(a.Z,{variant:"h5",children:e(r||(r=(0,Z.Z)(["inventoryCard.title"])))}),avatar:(0,O.jsx)(m.Z,{fontSize:"large"})}),(0,O.jsx)(g.Z,{}),(0,O.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,O.jsx)(z.Z,{children:(0,O.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:T.rU,to:"/characters",children:[(0,O.jsx)(y.Z,{label:(0,O.jsxs)("strong",{children:[e("ui:tabs.characters")," ",d]}),icon:(0,O.jsx)(j.Z,{}),sx:{flexBasis:B?"100%":"auto",flexGrow:1,cursor:"pointer"},color:d?"primary":"secondary"}),Object.entries(l).map((function(e){var n=(0,p.Z)(e,2),t=n[0],r=n[1];return(0,O.jsx)(y.Z,{sx:{flexGrow:1,cursor:"pointer"},color:r?t:"secondary",icon:(0,O.jsx)(D.Z,{icon:L.z[t]}),label:(0,O.jsx)("strong",{children:r})},t)}))]})}),(0,O.jsx)(z.Z,{children:(0,O.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:T.rU,to:"/weapons",children:[(0,O.jsx)(y.Z,{label:(0,O.jsxs)("strong",{children:[e("ui:tabs.weapons")," ",W]}),icon:C.Z.svg.anvil,sx:{flexBasis:B?"100%":"auto",flexGrow:1,cursor:"pointer"},color:W?"primary":"secondary"}),Object.entries(N).map((function(e){var n,t=(0,p.Z)(e,2),r=t[0],i=t[1];return(0,O.jsx)(y.Z,{sx:{flexGrow:1,cursor:"pointer"},color:i?"success":"secondary",icon:(0,O.jsx)(M.Z,{src:null===(n=C.Z.weaponTypes)||void 0===n?void 0:n[r],size:2}),label:(0,O.jsx)("strong",{children:i})},r)}))]})}),(0,O.jsx)(z.Z,{children:(0,O.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:T.rU,to:"/artifacts",children:[(0,O.jsx)(y.Z,{label:(0,O.jsxs)("strong",{children:[e("ui:tabs.artifacts")," ",F]}),icon:(0,O.jsx)(D.Z,{icon:k.xe.flower}),sx:{flexBasis:B?"100%":"auto",flexGrow:1,cursor:"pointer"},color:F?"primary":"secondary"}),Object.entries(E).map((function(e){var n=(0,p.Z)(e,2),t=n[0],r=n[1];return(0,O.jsx)(y.Z,{sx:{flexGrow:1,cursor:"pointer"},color:r?"success":"secondary",icon:(0,O.jsx)(D.Z,{icon:k.xe[t]}),label:(0,O.jsx)("strong",{children:r})},t)}))]})})]})]})}var N,W,q=t(74223),E=(0,q.Z)((0,O.jsx)("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube"),F=JSON.parse(null!==(N='["HGti4mHrmYE","hiRjngMgHfQ","d1O3pYM0bAc","49ywkUZIauA","B-DZGcEfpiY","j6Y1dZwb1sY"]')?N:"[]");function U(){var e=(0,h.$)(["page_home","ui"]).t;return F.length?(0,O.jsxs)(x.Z,{children:[(0,O.jsx)(v.Z,{title:(0,O.jsx)(a.Z,{variant:"h5",component:l.Z,color:"inherit",href:"https://youtube.com/playlist?list=PLcVsEMZO5IVFQdeh8zteZwiNchObfQ684",target:"_blank",rel:"noopener",children:e(W||(W=(0,Z.Z)(["vidGuideCard.title"])))}),avatar:(0,O.jsx)(E,{fontSize:"large"})}),(0,O.jsx)(g.Z,{}),(0,O.jsx)(s.Z,{children:(0,O.jsx)(o.ZP,{container:!0,columns:{xs:1,sm:2},spacing:2,children:F.map((function(e){return(0,O.jsx)(o.ZP,{item:!0,xs:1,children:(0,O.jsx)(c.Z,{sx:{position:"relative",pb:"56.25%",pt:"25px",height:0,borderRadius:2,overflow:"hidden","> iframe":{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},children:(0,O.jsx)("iframe",{width:"560",height:"349",title:"Genshin Optimizer Guide",src:"https://www.youtube-nocookie.com/embed/".concat(e),frameBorder:0,allowFullScreen:!0})},e)},e)}))})})]}):null}var B,I,J,K,Y,Q,$,X,ee,ne,te,re=t(27118),ie=(0,q.Z)((0,O.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),oe=(0,q.Z)((0,O.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter"),ce=t(35210),se=(0,q.Z)((0,O.jsx)("path",{d:"M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63c-1.17-1.17-1.17-3.07 0-4.24l4.24-4.24c1.17-1.17 3.07-1.17 4.24 0L16.48 9c.39.39.39 1.02 0 1.41zm.7-2.12c.78.78.78 2.05 0 2.83-1.27 1.27-2.61.22-2.83 0l-3.76-3.76-5.57 5.57c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l8.32-8.34c1.17-1.17 1.17-3.07 0-4.24l-4.24-4.24c-1.15-1.15-3.01-1.17-4.18-.06l4.47 4.47z"}),"Handshake"),ae=t(18801),le=t(40315),ue=t(40165),de=t(24518),he=[{tooltip:"Genshin Optimizer Discord",icon:(0,O.jsx)(D.Z,{icon:re.omb}),url:"https://discord.gg/CXUbQXyfUs",color:"discord"},{tooltip:"Genshin Optimizer Github",icon:(0,O.jsx)(ie,{}),url:"https://github.com/frzyc/genshin-optimizer",color:"white"},{tooltip:"Youtube (frzyc)",icon:(0,O.jsx)(E,{}),url:"https://www.youtube.com/user/Frzyc",color:"red"},{tooltip:"Twitch (frzyc)",icon:(0,O.jsx)(D.Z,{icon:re.z0T}),url:"https://www.twitch.tv/frzyc",color:"twitch"},{tooltip:"Twitter (frzyc)",icon:(0,O.jsx)(oe,{}),url:"https://twitter.com/frzyc",color:"twitter"},{tooltip:"Patreon (frzyc)",icon:(0,O.jsx)(D.Z,{icon:re.MkT}),url:"https://www.patreon.com/frzyc",color:"patreon"},{tooltip:"PayPal (frzyc)",icon:(0,O.jsx)(D.Z,{icon:re.PDv}),url:"https://www.paypal.com/donate?hosted_button_id=WAHN2DGLCXPZW",color:"paypal"}],fe=[{title:function(e){return e(B||(B=(0,Z.Z)(["quickLinksCard.buttons.tyGuide.title"])))},icon:(0,O.jsx)(E,{}),tooltip:function(e){return e(I||(I=(0,Z.Z)(["quickLinksCard.buttons.tyGuide.tooltip"])))},url:"https://youtube.com/playlist?list=PLcVsEMZO5IVFQdeh8zteZwiNchObfQ684",color:"red"},{title:function(e){return e(J||(J=(0,Z.Z)(["quickLinksCard.buttons.scanners.title"])))},icon:(0,O.jsx)(ce.Z,{}),tooltip:function(e){return e(K||(K=(0,Z.Z)(["quickLinksCard.buttons.scanners.tooltip"])))},to:"/scanner",color:"primary"},{title:function(e){return e(Y||(Y=(0,Z.Z)(["quickLinksCard.buttons.kqm.title"])))},icon:(0,O.jsx)(se,{}),tooltip:function(e){return e(Q||(Q=(0,Z.Z)(["quickLinksCard.buttons.kqm.tooltip"])))},url:"https://keqingmains.com/",color:"keqing"},{title:function(e){return e($||($=(0,Z.Z)(["quickLinksCard.buttons.devDiscord.title"])))},icon:(0,O.jsx)(D.Z,{icon:re.omb}),tooltip:function(e){return e(X||(X=(0,Z.Z)(["quickLinksCard.buttons.devDiscord.tooltip"])))},url:"https://discord.gg/8Hpz2F7AnR",color:"discord"},{title:function(e){return e(ee||(ee=(0,Z.Z)(["quickLinksCard.buttons.good.title"])))},icon:(0,O.jsx)(ae.Z,{}),tooltip:function(e){return e(ne||(ne=(0,Z.Z)(["quickLinksCard.buttons.good.tooltip"])))},to:"/doc",color:"primary"}];function xe(){var e=(0,h.$)(["page_home","ui"]).t;return(0,O.jsxs)(x.Z,{children:[(0,O.jsx)(v.Z,{title:(0,O.jsx)(a.Z,{variant:"h5",children:e(te||(te=(0,Z.Z)(["quickLinksCard.title"])))}),avatar:(0,O.jsx)(le.Z,{fontSize:"large"})}),(0,O.jsx)(g.Z,{}),(0,O.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,O.jsx)(c.Z,{display:"flex",justifyContent:"space-between",gap:1,children:he.map((function(e){var n=e.tooltip,t=e.icon,r=e.url,i=e.color;return(0,O.jsx)(ue.Z,{title:n,placement:"top",arrow:!0,children:(0,O.jsx)(de.Z,{fullWidth:!0,color:i,sx:{p:1,minWidth:0},component:l.Z,href:r,target:"_blank",rel:"noopener",children:t},n)},n)}))}),fe.map((function(n,t){var r,i=n.title,o=n.icon,c=n.tooltip,s=n.color;return"to"in n&&(r=(0,O.jsx)(de.Z,{fullWidth:!0,color:s,component:T.rU,to:n.to,startIcon:o,children:i(e)},t)),"url"in n&&(r=(0,O.jsx)(de.Z,{fullWidth:!0,color:s,component:l.Z,href:n.url,target:"_blank",rel:"noopener",startIcon:o,children:i(e)},t)),(0,O.jsx)(ue.Z,{title:c(e),placement:"top",arrow:!0,children:r},t)}))]})]})}var pe=(0,q.Z)((0,O.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"}),"AccessTimeFilled"),Ze=t(93758),me=t(589),je=t(17278),ve=t(52771);function ge(){var e=(0,je.Z)("ToolsDisplayTimezone",me.z1),n=(0,p.Z)(e,1)[0].timeZoneKey,t=(0,w.useState)(new Date(Date.now()+me.W3[n])),r=(0,p.Z)(t,2),i=r[0],o=r[1];(0,w.useEffect)((function(){var e=function t(){return o(new Date(Date.now()+me.W3[n])),setTimeout((function(){e=t()}),ve.vL-Date.now()%ve.vL)}();return function(){return clearTimeout(e)}}),[n]);var c=(0,je.Z)("ToolsDisplayResin",Ze._T),l=(0,p.Z)(c,2),u=l[0],d=u.resin,h=u.date,f=l[1],Z=(0,w.useRef)(void 0);return(0,w.useEffect)((function(){if(d<Ze.nD){var e=Date.now(),n=Ze.nD-d,t=Math.min(Math.floor((e-h)/Ze.T5),n),r=d+t,i=h+t*Ze.T5;f({resin:r,date:i}),r<Ze.nD&&(Z.current=setTimeout((function(){return(e=r+1)>=Ze.nD?(Z.current&&clearTimeout(Z.current),Z.current=void 0):Z.current=setTimeout((function(){return console.log("set resin",e+1)}),Ze.T5),void f({resin:e,date:(new Date).getTime()});var e}),e-i))}return function(){return Z.current&&clearTimeout(Z.current)}}),[]),(0,O.jsxs)(x.Z,{children:[(0,O.jsx)(v.Z,{title:(0,O.jsxs)(a.Z,{variant:"h5",children:[n," ",i.toLocaleTimeString([],{timeZone:"UTC"})]}),avatar:(0,O.jsx)(pe,{fontSize:"large"})}),(0,O.jsx)(g.Z,{}),(0,O.jsx)(s.Z,{children:(0,O.jsx)(z.Z,{children:(0,O.jsx)(b.Z,{sx:{p:2},component:T.rU,to:"/tools",children:(0,O.jsxs)(a.Z,{variant:"h2",sx:{textAlign:"center"},children:[(0,O.jsx)(M.Z,{src:C.Z.resin.fragile}),(0,O.jsxs)("span",{children:[d,"/",Ze.nD]})]})})})})]})}var be,ye,we,Te,Ce,ke,ze=t.p+"static/media/frzyc.f212a854d96a06634299.png",De=t.p+"static/media/lantua.ee2d4bdd1f99b6b5d189.png",Me=t.p+"static/media/van.7fffd8572b1a7cebf234.png",Le=t.p+"static/media/stain.a1ff1f2839ae1dc7a7fc.png",Pe=t.p+"static/media/sin.62c279bb0076b8046b5b.png",Ae=t(35893),He=[{name:"frzyc",img:ze,title:function(e){return e(be||(be=(0,Z.Z)(["teamCard.jobTitle.leadDev"])))},subtitle:"Insomniac in Chief",url:"https://github.com/frzyc"},{name:"Lantua",img:De,title:function(e){return e(ye||(ye=(0,Z.Z)(["teamCard.jobTitle.dev"])))},subtitle:"Copium Calculator",url:"https://github.com/lantua"},{name:"Van",img:Me,title:function(e){return e(we||(we=(0,Z.Z)(["teamCard.jobTitle.dev"])))},subtitle:"Waverider Stowaway",url:"https://github.com/nguyentvan7"},{name:"\u2726 Sin \u2726",img:Pe,title:function(e){return e(Te||(Te=(0,Z.Z)(["teamCard.jobTitle.mod"])))},subtitle:"Ohh, shiny.",url:""},{name:"Stain",img:Le,title:function(e){return e(Ce||(Ce=(0,Z.Z)(["teamCard.jobTitle.mod"])))},subtitle:"Australia Man",url:""}];function Se(){var e=(0,h.$)(["page_home","ui"]).t;return(0,O.jsxs)(x.Z,{children:[(0,O.jsx)(v.Z,{title:(0,O.jsx)(a.Z,{variant:"h5",children:e(ke||(ke=(0,Z.Z)(["teamCard.title"])))}),avatar:(0,O.jsx)(Ae.Z,{fontSize:"large"})}),(0,O.jsx)(g.Z,{}),(0,O.jsx)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:(0,O.jsx)(o.ZP,{container:!0,columns:{xs:6,md:5},spacing:1,children:He.map((function(n,t){var r=n.name,i=n.img,u=n.title,d=n.subtitle,h=n.url;return(0,O.jsx)(o.ZP,{item:!0,xs:t<2?3:2,md:1,children:(0,O.jsx)(z.Z,{sx:{height:"100%"},children:(0,O.jsxs)(s.Z,{children:[(0,O.jsx)(c.Z,{component:"img",src:i,sx:{width:"100%",height:"auto",borderRadius:"50%"}}),(0,O.jsxs)(c.Z,{display:"flex",flexDirection:"column",children:[h?(0,O.jsx)(a.Z,{variant:"h6",sx:{textAlign:"center"},color:"inherit",component:l.Z,href:h,target:"_blank",rel:"noopener",children:(0,O.jsx)("strong",{children:r})}):(0,O.jsx)(a.Z,{variant:"h6",sx:{textAlign:"center"},children:(0,O.jsx)("strong",{children:r})}),(0,O.jsx)(a.Z,{variant:"subtitle1",sx:{textAlign:"center"},children:u(e)}),(0,O.jsx)(a.Z,{variant:"subtitle2",sx:{textAlign:"center",transform:"Stain"===r?"rotate(180deg)":void 0},color:"secondary.light",children:d})]})]})})},r)}))})})]})}function Ve(){var e=(0,u.Z)(),n=(0,i.Z)(e.breakpoints.up("lg"));return d.ZP.send({hitType:"pageview",page:"/home"}),n?(0,O.jsxs)(o.ZP,{container:!0,spacing:2,direction:"row-reverse",sx:{my:2},children:[(0,O.jsxs)(o.ZP,{item:!0,xs:12,lg:5,xl:4,sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,O.jsx)(xe,{}),(0,O.jsx)(ge,{})]}),(0,O.jsxs)(o.ZP,{item:!0,xs:12,lg:7,xl:8,sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,O.jsx)(Re,{}),(0,O.jsx)(_,{}),(0,O.jsx)(U,{}),(0,O.jsx)(Se,{})]})]}):(0,O.jsxs)(c.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,O.jsx)(Re,{}),(0,O.jsx)(xe,{}),(0,O.jsx)(_,{}),(0,O.jsx)(ge,{}),(0,O.jsx)(U,{}),(0,O.jsx)(Se,{})]})}function Re(){var e=(0,h.$)("page_home").t;return(0,O.jsx)(x.Z,{children:(0,O.jsx)(s.Z,{children:(0,O.jsx)(a.Z,{variant:"subtitle1",children:(0,O.jsxs)(f.c,{t:e,i18nKey:"intro",children:["The ",(0,O.jsx)("strong",{children:"ultimate"})," ",(0,O.jsx)(l.Z,{href:"https://genshin.mihoyo.com/",target:"_blank",rel:"noreferrer",children:(0,O.jsx)("i",{children:"Genshin Impact"})})," calculator, GO will keep track of your artifact/weapon/character inventory, and help you create the best build based on how you play, with what you have."]})})})})}},93758:function(e,n,t){t.d(n,{T5:function(){return v},ZP:function(){return b},_T:function(){return g},nD:function(){return j}});var r=t(29439),i=t(61889),o=t(20890),c=t(94721),s=t(39504),a=t(4834),l=t(2199),u=t(24518),d=t(72791),h=t(10658),f=t(3992),x=t(55942),p=t(17278),Z=t(52771),m=t(80184),j=160,v=8*Z.g4;function g(){return{resin:j,date:(new Date).getTime()}}function b(){var e=(0,p.Z)("ToolsDisplayResin",g),n=(0,r.Z)(e,2),t=n[0],b=t.resin,y=t.date,w=n[1],T=(0,d.useRef)(void 0),C=function(e){e>=j?(T.current&&clearTimeout(T.current),T.current=void 0):T.current=setTimeout((function(){return console.log("set resin",e+1)}),v),w({resin:e,date:(new Date).getTime()})};(0,d.useEffect)((function(){if(b<j){var e=Date.now(),n=j-b,t=Math.min(Math.floor((e-y)/v),n),r=b+t,i=y+t*v;w({resin:r,date:i}),r<j&&(T.current=setTimeout((function(){return C(r+1)}),e-i))}return function(){return T.current&&clearTimeout(T.current)}}),[]);var k=b>=j?y:y+v,z=new Date(b>=j?y:y+(j-b)*v),D=(0,Z.JR)(Math.abs(k-Date.now()));return(0,m.jsxs)(f.Z,{children:[(0,m.jsxs)(i.ZP,{container:!0,sx:{px:2,py:1},spacing:2,children:[(0,m.jsx)(i.ZP,{item:!0,children:(0,m.jsx)(x.Z,{src:h.Z.resin.fragile,sx:{fontSize:"2em"}})}),(0,m.jsx)(i.ZP,{item:!0,children:(0,m.jsx)(o.Z,{variant:"h6",children:"Resin Counter"})})]}),(0,m.jsx)(c.Z,{}),(0,m.jsx)(s.Z,{children:(0,m.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(i.ZP,{item:!0,children:(0,m.jsxs)(o.Z,{variant:"h2",children:[(0,m.jsx)(x.Z,{src:h.Z.resin.fragile}),(0,m.jsx)(a.ZP,{type:"number",sx:{width:"2em",fontSize:"4rem"},value:b,inputProps:{min:0,max:999,sx:{textAlign:"right"}},onChange:function(e){return C(parseInt(e.target.value))}}),(0,m.jsxs)("span",{children:["/",j]})]})}),(0,m.jsxs)(i.ZP,{item:!0,flexGrow:1,children:[(0,m.jsxs)(l.Z,{fullWidth:!0,children:[(0,m.jsx)(u.Z,{onClick:function(){return C(0)},disabled:0===b,children:"0"}),(0,m.jsx)(u.Z,{onClick:function(){return C(b-1)},disabled:0===b,children:"-1"}),(0,m.jsx)(u.Z,{onClick:function(){return C(b-20)},disabled:b<20,children:"-20"}),(0,m.jsx)(u.Z,{onClick:function(){return C(b-40)},disabled:b<40,children:"-40"}),(0,m.jsx)(u.Z,{onClick:function(){return C(b-60)},disabled:b<60,children:"-60"}),(0,m.jsx)(u.Z,{onClick:function(){return C(b+1)},children:"+1"}),(0,m.jsx)(u.Z,{onClick:function(){return C(b+60)},children:"+60"}),(0,m.jsxs)(u.Z,{onClick:function(){return C(j)},disabled:b===j,children:["MAX ",j]})]}),(0,m.jsx)(o.Z,{variant:"subtitle1",sx:{mt:2},children:b<j?(0,m.jsxs)("span",{children:["Next resin in ",D,", full Resin at ",z.toLocaleTimeString()," ",z.toLocaleDateString()]}):(0,m.jsxs)("span",{children:["Resin has been full for at least ",D,", since ",z.toLocaleTimeString()," ",z.toLocaleDateString()]})})]}),(0,m.jsx)(i.ZP,{item:!0,xs:12,children:(0,m.jsx)(o.Z,{variant:"caption",children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})})]})})]})}},589:function(e,n,t){t.d(n,{W3:function(){return m},ZP:function(){return v},z1:function(){return j}});var r=t(29439),i=t(53174),o=t(54483),c=t(61889),s=t(20890),a=t(23786),l=t(94721),u=t(39504),d=t(72791),h=t(3992),f=t(33890),x=t(17278),p=t(52771),Z=t(80184),m={America:-5*p.yJ,Europe:p.yJ,Asia:8*p.yJ,"TW, HK, MO":8*p.yJ};function j(){return{timeZoneKey:Object.keys(m)[0]}}function v(){var e=(0,x.Z)("ToolsDisplayTimezone",j),n=(0,r.Z)(e,2),t=n[0].timeZoneKey,v=n[1],g=(0,d.useCallback)((function(e){return v({timeZoneKey:e})}),[v]),b=(0,d.useState)(new Date(Date.now()+m[t])),y=(0,r.Z)(b,2),w=y[0],T=y[1];(0,d.useEffect)((function(){var e=function n(){return T(new Date(Date.now()+m[t])),setTimeout((function(){e=n()}),p.vL-Date.now()%p.vL)}();return function(){return clearTimeout(e)}}),[t]);var C=new Date(w);C.getUTCHours()<4?C.setUTCHours(4,0,0,0):(C=new Date(C.getTime()+p.mf)).setUTCHours(4,0,0,0);var k=C.getTime()-w.getTime(),z=(0,p.JR)(k);return(0,Z.jsxs)(h.Z,{children:[(0,Z.jsxs)(c.ZP,{container:!0,sx:{px:2,py:1},spacing:2,children:[(0,Z.jsx)(c.ZP,{item:!0,children:(0,Z.jsx)(s.Z,{variant:"h6",children:(0,Z.jsx)(o.G,{icon:i.SZw,className:"fa-fw"})})}),(0,Z.jsx)(c.ZP,{item:!0,flexGrow:1,children:(0,Z.jsx)(s.Z,{variant:"h6",children:"Teyvat Time"})}),(0,Z.jsx)(c.ZP,{item:!0,children:(0,Z.jsx)(f.Z,{title:t,children:Object.keys(m).map((function(e){return(0,Z.jsx)(a.Z,{selected:t===e,disabled:t===e,onClick:function(){return g(e)},children:e},e)}))})})]}),(0,Z.jsx)(l.Z,{}),(0,Z.jsx)(u.Z,{children:(0,Z.jsxs)(c.ZP,{container:!0,justifyContent:"center",spacing:3,children:[(0,Z.jsx)(c.ZP,{item:!0,sx:{my:4},children:(0,Z.jsx)(s.Z,{variant:"h2",children:w.toLocaleTimeString([],{timeZone:"UTC"})})}),(0,Z.jsxs)(c.ZP,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[(0,Z.jsxs)(s.Z,{children:["Server Date: ",(0,Z.jsx)("b",{children:w.toDateString()})]}),(0,Z.jsxs)(s.Z,{children:["Time until reset: ",(0,Z.jsx)("b",{children:z})]}),(0,Z.jsxs)(s.Z,{children:["Resin until reset: ",(0,Z.jsx)("b",{children:Math.floor(k/(8*p.g4))})]})]})]})})]})}},69210:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),i=t(72791);function o(e){var n=(0,i.useState)(e.gender),t=(0,r.Z)(n,2),o=t[0],c=t[1];return(0,i.useEffect)((function(){return e.states.follow("dbMeta",(function(){return c(e.gender)}))}),[e,c]),o}},52771:function(e,n,t){t.d(n,{JR:function(){return l},e6:function(){return u},g4:function(){return o},mf:function(){return s},vL:function(){return i},yJ:function(){return c}});var r=t(60393),i=1e3,o=60*i,c=60*o,s=24*c;function a(e){var n=e%1e3,t=Math.floor(e/1e3%60),r=Math.floor(e/6e4%60);return{hours:Math.floor(e/36e5),minutes:r,seconds:t,milliseconds:n}}function l(e){var n=a(e),t=n.hours,i=n.minutes,o=n.seconds,c="Minutes";return t&&(c="Hours"),"".concat(t?"".concat(t,":"):"").concat((0,r.H_)(i,"0",2),":").concat((0,r.H_)(o,"0",2)," ").concat(c)}function u(e){var n=a(e),t=n.hours,i=n.minutes,o=n.seconds,c=n.milliseconds,s="Minutes";return t&&(s="Hours"),"".concat(t?"".concat(t,":"):"").concat((0,r.H_)(i,"0",2),":").concat((0,r.H_)(o,"0",2),".").concat((0,r.H_)(c,"0",3)," ").concat(s)}},63204:function(e,n,t){var r=t(74223),i=t(80184);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter")},35893:function(e,n,t){var r=t(74223),i=t(80184);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"}),"Groups")},40315:function(e,n,t){var r=t(74223),i=t(80184);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"InsertLink")},66647:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(4942),i=t(87462),o=t(63366),c=t(72791),s=t(28182),a=t(94419),l=t(31402),u=t(66934),d=t(21217);function h(e){return(0,d.Z)("MuiCardActionArea",e)}var f=(0,t(75878).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),x=t(23701),p=t(80184),Z=["children","className","focusVisibleClassName"],m=(0,u.ZP)(x.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,t=e.theme;return n={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(n,"&:hover .".concat(f.focusHighlight),{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(n,"&.".concat(f.focusVisible," .").concat(f.focusHighlight),{opacity:(t.vars||t).palette.action.focusOpacity}),n})),j=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,n){return n.focusHighlight}})((function(e){var n=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:n.transitions.create("opacity",{duration:n.transitions.duration.short})}})),v=c.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCardActionArea"}),r=t.children,c=t.className,u=t.focusVisibleClassName,d=(0,o.Z)(t,Z),f=t,x=function(e){var n=e.classes;return(0,a.Z)({root:["root"],focusHighlight:["focusHighlight"]},h,n)}(f);return(0,p.jsxs)(m,(0,i.Z)({className:(0,s.Z)(x.root,c),focusVisibleClassName:(0,s.Z)(u,x.focusVisible),ref:n,ownerState:f},d,{children:[r,(0,p.jsx)(j,{className:x.focusHighlight,ownerState:f})]}))}))},23060:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(93433),i=t(29439),o=t(4942),c=t(63366),s=t(87462),a=t(72791),l=t(28182),u=t(94419),d=t(18529),h=t(12065),f=t(14036),x=t(66934),p=t(31402),Z=t(68221),m=t(42071),j=t(20890),v=t(21217);function g(e){return(0,v.Z)("MuiLink",e)}var b=(0,t(75878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=t(80184),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],T={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=(0,x.ZP)(j.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["underline".concat((0,f.Z)(t.underline))],"button"===t.component&&n.button]}})((function(e){var n=e.theme,t=e.ownerState,r=(0,d.D)(n,"palette.".concat(function(e){return T[e]||e}(t.color)))||t.color;return(0,s.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,h.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&(0,o.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),k=a.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiLink"}),o=t.className,d=t.color,h=void 0===d?"primary":d,x=t.component,j=void 0===x?"a":x,v=t.onBlur,b=t.onFocus,k=t.TypographyClasses,z=t.underline,D=void 0===z?"always":z,M=t.variant,L=void 0===M?"inherit":M,P=t.sx,A=(0,c.Z)(t,w),H=(0,Z.Z)(),S=H.isFocusVisibleRef,V=H.onBlur,R=H.onFocus,G=H.ref,O=a.useState(!1),_=(0,i.Z)(O,2),N=_[0],W=_[1],q=(0,m.Z)(n,G),E=(0,s.Z)({},t,{color:h,component:j,focusVisible:N,underline:D,variant:L}),F=function(e){var n=e.classes,t=e.component,r=e.focusVisible,i=e.underline,o={root:["root","underline".concat((0,f.Z)(i)),"button"===t&&"button",r&&"focusVisible"]};return(0,u.Z)(o,g,n)}(E);return(0,y.jsx)(C,(0,s.Z)({color:h,className:(0,l.Z)(F.root,o),classes:k,component:j,onBlur:function(e){V(e),!1===S.current&&W(!1),v&&v(e)},onFocus:function(e){R(e),!0===S.current&&W(!0),b&&b(e)},ref:q,ownerState:E,variant:L,sx:[].concat((0,r.Z)(Object.keys(T).includes(h)?[]:[{color:h}]),(0,r.Z)(Array.isArray(P)?P:[P]))},A))}))}}]);
//# sourceMappingURL=945.1e2296bc.chunk.js.map
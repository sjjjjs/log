(this.webpackJsonplog0107=this.webpackJsonplog0107||[]).push([[0],{150:function(e,t,n){e.exports={comments:"logComments_comments__1LjH6",comment:"logComments_comment__GP3sS",commentTime:"logComments_commentTime__3ccqY",commentMeta:"logComments_commentMeta__2p6gN",commentMetaItem:"logComments_commentMetaItem__2-ZM7"}},183:function(e,t,n){e.exports={container:"logDetail_container__w0WFV",logContentBox:"logDetail_logContentBox__2FBOS",logContent:"logDetail_logContent__2q741",commentBox:"logDetail_commentBox__2xmER",commentContent:"logDetail_commentContent__2yOe-",footerActions:"logDetail_footerActions__ax9Jf",hide:"logDetail_hide__3XdPe",editorOuter:"logDetail_editorOuter__1Gkc2"}},208:function(e,t,n){e.exports={markdownBody:"markdownPreview_markdownBody__3D-P7"}},247:function(e,t,n){e.exports={container:"appFrame_container__28Uto",body:"appFrame_body__1wP9K"}},251:function(e,t,n){e.exports={container:"logItem_container__1HQ_G",metaBlock:"logItem_metaBlock__19X2m",meta:"logItem_meta__JAOjF",metaItem:"logItem_metaItem__37psE",markdownBody:"logItem_markdownBody__1O-pH"}},252:function(e,t,n){e.exports={container:"setting_container__32Nic",indent:"setting_indent__24ct8"}},287:function(e,t,n){e.exports={container:"normalNavigator_container__155OS",content:"normalNavigator_content__3QptO"}},295:function(e,t,n){e.exports={container:"alia_container__3sOFO"}},296:function(e,t,n){e.exports={container:"log_container__1snyH"}},298:function(e,t,n){e.exports={container:"logCommentCreate_container__3qGs1"}},299:function(e,t,n){e.exports={textarea:"logCommentEditor_textarea__ltzcQ",container:"logCommentEditor_container__3s0iH",buttonWrap:"logCommentEditor_buttonWrap__o5tot"}},301:function(e,t,n){e.exports={container:"logCreate_container__19vSt"}},302:function(e,t,n){e.exports={container:"logEditor_container__1GeHV"}},337:function(e,t,n){e.exports=n(567)},342:function(e,t,n){},567:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),o=n(100),c=n.n(o),i=(n(342),n(162)),l=n(174),u=n(69),m=n(87),s=n.n(m),d=n(125),f=n(247),p=n.n(f),E=n(588),g=n(95),_=n(589),h=function(){return"/l"},O=function(e){return"/l/d/".concat(e)},v=function(e){return"/l/a/".concat(e)},b=function(){return"/l/s"},y=n(287),T=n.n(y),x=n(199),w=n.n(x);function k(e){var t=e.actions,n=void 0===t?null:t,a=Object(l.g)();return r.a.createElement(E.k,{fixedToTop:!0,style:{userSelect:"none"}},r.a.createElement("div",{className:T.a.container},r.a.createElement(E.k.Group,{align:"left"},r.a.createElement(E.a,{minimal:!0,text:"Home",onClick:function(){a.push(h())}}),r.a.createElement(E.a,{text:"Today",minimal:!0,onClick:function(){a.push(v(w()(Date.now()).format("YYYYMMDD")))}}),r.a.createElement(E.a,{text:"Setting",minimal:!0,onClick:function(){a.push(b())}}),r.a.createElement(E.m,{minimal:!0,content:r.a.createElement(_.a,{showActionsBar:!0,shortcuts:!0,highlightCurrentDay:!0,onChange:function(e){e&&a.push(v(w()(e).format("YYYYMMDD")))}}),position:g.a.BOTTOM_RIGHT},r.a.createElement(E.a,{text:"Daily",minimal:!0,rightIcon:"caret-down"}))),n&&r.a.createElement(E.k.Group,{align:"right"},n)))}var N=function(e){return r.a.createElement("div",{className:p.a.container},r.a.createElement(k,{actions:e.actions}),r.a.createElement("div",{className:p.a.body},e.children))},C=n(230),S=new(n(293).a)("EfficientDatabase");S.version(1).stores({logs:"++id, content, time"}),S.version(2).stores({logComments:"++id, content, time, lid"}),S.version(3).stores({textToIdMap:"++id, &text, lid"});var j=S,I=n(294),D=n.n(I).a.create({timeout:3e3,headers:{"Content-Type":"application/x-www-form-urlencoded",token:window.localStorage.getItem("HERO_BOOK_SETTING_DATA_REMOTE_TOKEN")||""}}),B=n(110),M=n.n(B),R=window.localStorage.getItem("HERO_BOOK_SETTING_DATA_REMOTE_URL")||"/",A={get:function(e){return D.post(R,M.a.stringify({action:"logs.get",payload:JSON.stringify({id:e})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))},add:function(e){return D.post(R,M.a.stringify({action:"logs.add",payload:JSON.stringify({content:e.content})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))},del:function(e){return D.post(R,M.a.stringify({action:"logs.del",payload:JSON.stringify({id:e})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))},upd:function(e,t){return D.post(R,M.a.stringify({action:"logs.upd",payload:JSON.stringify({id:e,content:t.content})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))},all:function(){return D.post(R,M.a.stringify({action:"logs.all",payload:JSON.stringify({})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))}},H="2"===window.localStorage.getItem("HERO_BOOK_SETTING_DATA_SOURCE")?A:{get:function(e){return j.logs.get(Number(e))},add:function(e){return j.logs.add(Object(C.a)({},e,{time:new Date}))},del:function(e){return j.logs.delete(Number(e))},upd:function(e,t){return j.logs.update(Number(e),t)},all:function(){return j.logs.orderBy("time").toArray().then((function(e){return e.reverse()}))}},L=window.localStorage.getItem("HERO_BOOK_SETTING_DATA_REMOTE_URL")||"/",U={findMapByText:function(e){return D.post(L,M.a.stringify({action:"textToIdMap.findMapByText",payload:JSON.stringify({text:e})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))},link:function(e,t){return D.post(L,M.a.stringify({action:"textToIdMap.link",payload:JSON.stringify({text:e,lid:t})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))},relink:function(e,t){return D.post(L,M.a.stringify({action:"textToIdMap.relink",payload:JSON.stringify({text:e,lid:t})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))}},G="2"===window.localStorage.getItem("HERO_BOOK_SETTING_DATA_SOURCE")?U:{findMapByText:function(e){return j.textToIdMap.where({text:e}).first((function(e){return e})).catch((function(){return null}))},link:function(e,t){return j.textToIdMap.add({text:e,lid:t})},relink:function(e,t){return j.textToIdMap.where({text:e}).first((function(e){return j.textToIdMap.update(e.id,{lid:t})}))}},K=n(295),J=n.n(K),P=E.r.create({className:"recipe-toaster",position:g.a.TOP}),Y=function(){return!1},q=function(e){return new Promise((function(t){setTimeout(t,e)}))},X=function(){var e=Object(d.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!0,r="","m"===t&&(r="\u7f8e\u597d\u7684\u4e00\u5929\uff01"),e.prev=3,e.next=6,H.add({content:r||t+"\n---\n"});case 6:return a=e.sent,e.next=9,G.link(t,a);case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),P.show({timeout:2e3,message:e.t0.message,intent:"danger"}),n=!1;case 15:return e.abrupt("return",n?a:null);case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!0,r="","m"===t&&(r="\u7f8e\u597d\u7684\u4e00\u5929\uff01"),e.prev=3,e.next=6,H.add({content:r||t+"\n---\n"});case 6:return a=e.sent,e.next=9,G.relink(t,a);case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),P.show({timeout:2e3,message:e.t0.message,intent:"danger"}),n=!1;case 15:return e.abrupt("return",n?a:null);case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();function W(){var e=Object(l.h)(),t=Object(l.g)(),n=e.text,o=void 0===n?"":n,c=o.match(/^\S{1,100}$/),i=Object(a.useState)(!1),m=Object(u.a)(i,2),f=m[0],p=m[1],g=Object(a.useState)(!1),_=Object(u.a)(g,2),h=_[0],v=_[1],b=Object(a.useState)(!1),y=Object(u.a)(b,2),T=y[0],x=y[1],w=Object(a.useState)(!1),C=Object(u.a)(w,2),S=C[0],j=C[1],I=h&&S;Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(s.a.mark((function e(){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(350);case 2:return e.next=4,G.findMapByText(o);case 4:if(!(n=e.sent)){e.next=14;break}return p(!0),e.next=9,H.get(n.lid);case 9:if(!(a=e.sent)){e.next=14;break}return x(!0),t.replace(O(a.id)),e.abrupt("return");case 14:v(!0),j(!0);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o,t]);var D=r.a.createElement(E.q,{intent:"warning",minimal:!0,large:!0},o),B="",M="",R=null;return c?f?T||(B="warning-sign",M="\u54ce\u5440\uff0c\u9996\u9875\u7684\u65e5\u5fd7\u88ab\u5220\u9664\u4e86\uff01",R=r.a.createElement(E.a,{minimal:!0,onClick:function(){return F(o).then((function(e){return e&&t.replace(O(e))}))},intent:"primary"},"\u65b0\u5efa\u65e5\u5fd7\u5e76\u91cd\u65b0\u5173\u8054"),"m"===o&&(B="warning-sign",M="\u65e5\u5fd7\u6d88\u5931\u4e86\uff0c\u91cd\u65b0\u5173\u8054\u5427\uff01",R=r.a.createElement(E.a,{minimal:!0,onClick:function(){return F(o).then((function(e){return e&&t.replace(O(e))}))},intent:"primary"},"\u65b0\u5efa\u65e5\u5fd7\u5e76\u91cd\u65b0\u5173\u8054"))):(B="info-sign",M="\u6b64\u5173\u952e\u5b57\u5c1a\u672a\u5173\u8054\u4efb\u4f55\u65e5\u5fd7",R=r.a.createElement(E.a,{minimal:!0,onClick:function(){return X(o).then((function(e){return e&&t.replace(O(e))}))},intent:"primary"},"\u65b0\u5efa\u65e5\u5fd7\u5e76\u5173\u8054"),"m"===o&&(B="play",M="\u6b22\u8fce\u4f7f\u7528\uff0c\u5f00\u59cb\u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u7bc7\u65e5\u5fd7\u5427\uff01",R=r.a.createElement(E.a,{minimal:!0,onClick:function(){return X(o).then((function(e){return e&&t.replace(O(e))}))},intent:"primary"},"\u5f00\u542f\u65e5\u5fd7"))):(B="error",M="\u683c\u5f0f\u4e0d\u6b63\u786e",R=null),r.a.createElement(N,{header:r.a.createElement(k,{showBack:"m"!==o,title:"\u6682\u672a\u5173\u8054\u65e5\u5fd7"})},r.a.createElement("div",{className:J.a.container},!I&&r.a.createElement(E.p,null),I&&r.a.createElement(E.l,{icon:B,title:D,action:R,extra:M})))}var z=n(296),V=n.n(z),Q=n(228),Z=n(16),$=n(92),ee=n.n($),te=n(251),ne=n.n(te),ae=n(297),re=n.n(ae),oe=n(208),ce=n.n(oe);function ie(e){var t=e.source,n=void 0===t?"":t,a=e.className,o=e.selectAble,c=void 0!==o&&o,i=function(e){return e.replace(/(.?)#([A-Za-z0-9_\u4E00-\u9FA5]{1,100})/g,(function(e,t,n){return"\\"===t?"#"+n:"".concat(t,"[").concat(e,"](#/l/a/").concat(n,")")}))}(n),l=i.indexOf("\n---"),u=l>0?i.slice(0,l):"";return r.a.createElement(E.c,null,r.a.createElement("div",{className:ee()("markdown-body",a,ce.a.markdownBody,c?ce.a.active:""),onClick:function(t){if(e.selectAble&&"function"===typeof e.onSelect&&t.shiftKey){t.preventDefault();var n=function e(t){if(!(t instanceof HTMLElement))return null;if(!(t.parentNode instanceof HTMLElement))return null;if(t.classList.contains(ce.a.markdownBody))return null;var n=t.parentElement;return n.classList.contains(ce.a.markdownBody)?t:e(n)}(t.target);if(n){var a=n.getAttribute("data-sourcePos");e.onSelect(a)}}}},r.a.createElement(re.a,{source:e.short&&u||i,sourcePos:c})))}var le=function(e){var t=Object(l.g)();return r.a.createElement("div",{className:ne.a.container},r.a.createElement("div",{className:ne.a.meta},r.a.createElement("span",{className:ee()(Z.a.TEXT_MUTED,Z.a.TEXT_SMALL)},r.a.createElement(Q.a,{datetime:e.date,locale:"zh_CN"}))),r.a.createElement("div",{onClick:function(){return t.push(O(e.id))}},r.a.createElement(ie,{source:e.children,short:!0})))};function ue(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.all();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(N,null,r.a.createElement("div",{className:V.a.container},n.map((function(e){return r.a.createElement(le,{key:e.id,id:e.id,date:e.time},e.content)}))))}var me=n(298),se=n.n(me),de=n(299),fe=n.n(de),pe=n(300),Ee=n.n(pe),ge={selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!1},_e=function(e){var t=e.value,n=void 0===t?"":t,a=e.onChange,o=void 0===a?Y:a;return r.a.createElement(Ee.a,{language:"javascript",value:n,options:ge,onChange:function(e){return o(e)}})};function he(e){var t=e.value,n=void 0===t?"":t,a=e.onChange,o=void 0===a?Y:a,c=e.placeholder,i=void 0===c?"":c,l=e.onConfirm,u=void 0===l?Y:l;return r.a.createElement("div",{className:fe.a.container},r.a.createElement(_e,{value:n,placeholder:i,onChange:function(e){return o(e)},onSubmit:function(){return u()}}))}var Oe=window.localStorage.getItem("HERO_BOOK_SETTING_DATA_REMOTE_URL")||"/",ve={get:function(e){return D.post(Oe,M.a.stringify({action:"logComments.get",payload:JSON.stringify({id:e})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))},add:function(e,t){return D.post(Oe,M.a.stringify({action:"logComments.add",payload:JSON.stringify({content:t.content,lid:e})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))},del:function(e){return D.post(Oe,M.a.stringify({action:"logComments.del",payload:JSON.stringify({id:e})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))},upd:function(e,t){return D.post(Oe,M.a.stringify({action:"logComments.upd",payload:JSON.stringify({id:e,content:t.content})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))},all:function(e){return D.post(Oe,M.a.stringify({action:"logComments.all",payload:JSON.stringify({lid:e})})).then((function(e){return e.data})).then((function(e){return 0===e.code?e.data:null})).catch((function(e){return null}))}},be="2"===window.localStorage.getItem("HERO_BOOK_SETTING_DATA_SOURCE")?ve:{get:function(e){return j.logComments.get(Number(e))},add:function(e,t){return j.logComments.add(Object(C.a)({},t,{lid:Number(e),time:new Date}))},del:function(e){return j.logComments.delete(Number(e))},upd:function(e,t){return j.logComments.update(Number(e),t)},all:function(e){return j.logComments.where({lid:Number(e)}).toArray()}};function ye(){var e=Object(l.h)(),t=e.id,n=void 0===t?null:t,o=e.cid,c=void 0===o?null:o,i=Object(a.useState)(!1),m=Object(u.a)(i,2),f=m[0],p=m[1],g=Object(a.useState)(!0),_=Object(u.a)(g,2),h=_[0],O=_[1],v=Object(a.useState)(""),b=Object(u.a)(v,2),y=b[0],T=b[1],x=Object(l.g)();return Object(a.useEffect)((function(){Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=3;break}return p(!0),e.abrupt("return");case 3:be.get(c).then((function(e){e&&T(e.content),O(!1)})).finally((function(){p(!0)}));case 5:case"end":return e.stop()}}),e)})))()}),[c]),r.a.createElement(N,{header:r.a.createElement(k,{showBack:!0,title:"\u8bc4\u8bba",actions:r.a.createElement(E.a,{minimal:!0,intent:"primary",onClick:function(){(h?be.add(n,{content:y}):be.upd(c,{content:y})).then((function(){x.goBack()})).catch((function(e){alert(e.message)}))}},"\u63d0\u4ea4")})},r.a.createElement("div",{className:se.a.container},f&&r.a.createElement(he,{value:y,onChange:function(e){return T(e)},placeholder:"\u8bf7\u4ece\u6b64\u51fa\u5f00\u59cb..."})))}var Te=n(301),xe=n.n(Te),we=n(302),ke=n.n(we);function Ne(e){var t=e.value,n=void 0===t?"":t,a=e.onChange,o=void 0===a?Y:a,c=e.placeholder,i=void 0===c?"":c,l=e.onConfirm,u=void 0===l?Y:l;return r.a.createElement("div",{className:ke.a.container},r.a.createElement(_e,{value:n,placeholder:i,onChange:function(e){return o(e)},onSubmit:function(){return u()}}))}function Ce(){var e=Object(l.g)(),t=Object(l.h)().id,n=void 0===t?null:t,o=Object(a.useState)(!1),c=Object(u.a)(o,2),i=c[0],m=c[1],f=Object(a.useState)(!0),p=Object(u.a)(f,2),g=p[0],_=p[1],h=Object(a.useState)(""),O=Object(u.a)(h,2),v=O[0],b=O[1];return Object(a.useEffect)((function(){Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return m(!0),e.abrupt("return");case 3:H.get(n).then((function(e){e&&b(e.content),_(!1)})).finally((function(){m(!0)}));case 5:case"end":return e.stop()}}),e)})))()}),[n]),r.a.createElement(N,{header:r.a.createElement(k,{showBack:!0,actions:r.a.createElement(E.a,{minimal:!0,intent:"primary",onClick:function(){(g?H.add({content:v}):H.upd(n,{content:v})).then((function(){e.goBack()})).catch((function(e){P.show({timeout:2e3,message:e.message,intent:"error"})}))}},"\u63d0\u4ea4")})},r.a.createElement("div",{className:xe.a.container},i&&r.a.createElement(Ne,{value:v,onChange:function(e){return b(e)},placeholder:"\u8bf7\u7531\u6b64\u5f00\u59cb..."})))}var Se=n(183),je=n.n(Se),Ie=n(150),De=n.n(Ie),Be=function(e){var t=e.time,n=void 0===t?new Date:t,a=e.showTooltip,o=void 0===a||a;return r.a.createElement(E.s,{position:g.a.TOP,disabled:!o,content:w()(n).format("YYYY.MM.DD HH:mm")},r.a.createElement(Q.a,{datetime:n,locale:"zh_CN"}))};function Me(e){var t=e.comment,n=e.onRequestDelete,a=void 0===n?Y:n,o=e.onRequestUpdate,c=void 0===o?Y:o;return r.a.createElement("div",{className:De.a.comment,key:t.id},r.a.createElement("div",{className:ee()(Z.a.TEXT_MUTED,De.a.commentMeta)},r.a.createElement("div",{className:De.a.commentMetaBlock},r.a.createElement("span",{className:De.a.commentMetaItem},r.a.createElement(Be,{time:t.time}))),r.a.createElement("div",{className:ee()(De.a.commentMetaBlock,De.a.hoverVisible)},r.a.createElement(E.m,{minimal:!0,content:r.a.createElement(E.b,null,r.a.createElement(E.a,{minimal:!0,onClick:function(){return c(t)}},"\u7f16\u8f91"),r.a.createElement(E.d,null),r.a.createElement(E.a,{minimal:!0,intent:"danger",onClick:function(){return a(t.id)}},"\u5220\u9664")),position:g.a.TOP,interactionKind:"hover"},r.a.createElement("a",{className:ee()(De.a.commentMetaItem,Z.a.TEXT_MUTED,Z.a.TEXT_SMALL)},r.a.createElement(E.g,{icon:"more"}))))),r.a.createElement("div",{className:ee()(De.a.commentContent,Z.a.RUNNING_TEXT)},r.a.createElement(ie,{source:t.content})))}function Re(e){var t=e.list,n=void 0===t?[]:t,a=e.onRequestDelete,o=e.onRequestUpdate;return r.a.createElement("div",{className:De.a.comments},n.map((function(e){return r.a.createElement(Me,{key:e.id,comment:e,onRequestDelete:a,onRequestUpdate:o})})))}var Ae=/(\d+):(\d+)-(\d+):(\d+)/;function He(e,t){var n=e.split("\n"),a=function(e){var t=Ae.exec(e);return t?{startLine:Number(t[1]),startIndex:Number(t[2]),endLine:Number(t[3]),endIndex:Number(t[4])}:null}(t);return{from:n.slice(0,a.startLine-1).map((function(e){return e.length})).reduce((function(e,t){return e+t}),0)+(a.startLine-1)+a.startIndex,to:n.slice(0,a.endLine-1).map((function(e){return e.length})).reduce((function(e,t){return e+t}),0)+(a.endLine-1)+a.endIndex}}var Le="10001",Ue="20001",Ge="30001",Ke="40001",Je="50001",Pe="60001";function Ye(){var e=Object(l.g)(),t=Object(l.h)(),n=Object(a.useState)(!1),o=Object(u.a)(n,2),c=o[0],i=o[1],m=Object(a.useState)(!1),f=Object(u.a)(m,2),p=f[0],_=f[1],h=Object(a.useState)(null),O=Object(u.a)(h,2),v=O[0],b=O[1],y=Object(a.useState)([]),T=Object(u.a)(y,2),x=T[0],w=T[1],k=Object(a.useState)(""),C=Object(u.a)(k,2),S=C[0],j=C[1],I=Object(a.useState)(""),D=Object(u.a)(I,2),B=D[0],M=D[1],R=Object(a.useState)(null),A=Object(u.a)(R,2),L=A[0],U=A[1],G=Object(a.useState)(Le),K=Object(u.a)(G,2),J=K[0],Y=K[1];Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get(t.id);case 2:n=e.sent,b(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.id,c]),Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be.all(t.id);case 2:n=e.sent,w(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.id,p]);var q=r.a.createElement(E.m,{minimal:!0,content:r.a.createElement(E.i,null,r.a.createElement(E.j,{text:"Append",onClick:function(){j(""),Y(Ke)}}),r.a.createElement(E.i.Divider,null),r.a.createElement(E.j,{intent:"danger",text:"Delete",onClick:function(){window.confirm("Please confirm DELETE item.")&&H.del(t.id).then((function(){P.show({timeout:2e3,message:"\u5220\u9664\u6210\u529f",intent:"success"}),e.goBack()})).catch((function(e){alert(e.message)}))}})),position:g.a.BOTTOM_RIGHT},r.a.createElement(E.b,null,r.a.createElement(E.a,{minimal:!0,text:"Edit",onClick:function(){j(v.content),Y(Ue)}}),r.a.createElement(E.a,{minimal:!0,text:"Note",onClick:function(){j(""),M(""),Y(Ge)}}),r.a.createElement(E.a,{minimal:!0,rightIcon:"caret-down"}))),X=r.a.createElement(E.b,null,r.a.createElement(E.a,{minimal:!0,text:"Undo",onClick:function(){Y(Le),j("")}}),r.a.createElement(E.a,{minimal:!0,text:"Okay",intent:"primary",onClick:function(){H.upd(t.id,{content:S}).then((function(){Y(Le),j(""),i(!c)}))}})),F=r.a.createElement(E.b,null,r.a.createElement(E.a,{minimal:!0,text:"Undo",onClick:function(){Y(Le),j("")}}),r.a.createElement(E.a,{minimal:!0,text:"Okay",intent:"primary",onClick:function(){be.add(t.id,{content:S}).then((function(){j(""),M(""),_(!p),Y(Le)}))}})),W=r.a.createElement(E.b,null,r.a.createElement(E.a,{minimal:!0,text:"Undo",onClick:function(){Y(Le),j("")}}),r.a.createElement(E.a,{minimal:!0,text:"Okay",intent:"primary",onClick:function(){H.upd(t.id,{content:v.content+"\n\n"+S}).then((function(){Y(Le),j(""),i(!c)}))}})),z=r.a.createElement(E.b,null,r.a.createElement(E.a,{minimal:!0,text:"Undo",onClick:function(){Y(Le),j(""),M("")}}),r.a.createElement(E.a,{minimal:!0,text:"Okay",intent:"primary",onClick:function(){be.upd(B,{content:S}).then((function(){Y(Le),j(""),M(""),_(!p)}))}})),V=r.a.createElement(E.b,null,r.a.createElement(E.a,{minimal:!0,text:"Undo",onClick:function(){Y(Le),j(""),M("")}}),r.a.createElement(E.a,{minimal:!0,text:"Okay",intent:"primary",onClick:function(){var e=function(e,t,n){var a=He(e,t);return e.slice(0,a.from-1)+n+e.slice(a.to-1)}(v.content,L,S);H.upd(t.id,{content:e}).then((function(){Y(Le),j(""),i(!c),U(null)}))}}));return r.a.createElement(N,{actions:J===Ke&&W||J===Ue&&X||J===Ge&&F||J===Je&&z||J===Pe&&V||q},v&&x&&r.a.createElement("div",{className:ee()(je.a.container)},r.a.createElement("div",{className:je.a.logContentBox},r.a.createElement("div",{className:je.a.logContent},r.a.createElement(ie,{source:v.content,selectAble:!0,onSelect:function(e){var t=function(e,t){var n=He(e,t);return e.slice(n.from-1,n.to-1)}(v.content,e);j(t),U(e),Y(Pe)}}))),r.a.createElement("div",{className:je.a.commentBox},r.a.createElement("div",{className:je.a.commentContent},r.a.createElement(Re,{list:x,onRequestUpdate:function(e){j(e.content),M(e.id),Y(Je)},onRequestDelete:function(e){window.confirm("Please confirm DELETE item.")&&be.del(e).then((function(){_(!p)})).catch((function(e){alert(e.message)}))}})))),J!==Le&&r.a.createElement("div",{className:ee()(je.a.editorOuter)},r.a.createElement(_e,{value:S,onChange:function(e){return j(e)}})))}var qe=n(252),Xe=n.n(qe),Fe="1",We="2";function ze(e){var t=window.localStorage.getItem("HERO_BOOK_SETTING_DATA_SOURCE"),n=window.localStorage.getItem("HERO_BOOK_SETTING_DATA_REMOTE_URL"),o=window.localStorage.getItem("HERO_BOOK_SETTING_DATA_REMOTE_TOKEN"),c=Object(a.useState)(t||""),i=Object(u.a)(c,2),l=i[0],m=i[1],s=Object(a.useState)(n||""),d=Object(u.a)(s,2),f=d[0],p=d[1],g=Object(a.useState)(o||""),_=Object(u.a)(g,2),h=_[0],O=_[1];return r.a.createElement(N,null,r.a.createElement("div",{className:Xe.a.container},r.a.createElement(E.o,{label:"Database",selectedValue:l,onChange:function(e){var t=e.target.value;window.localStorage.setItem("HERO_BOOK_SETTING_DATA_SOURCE",t),m(t)}},r.a.createElement(E.n,{label:"Local",value:Fe}),r.a.createElement(E.n,{label:"Remote",value:We})),l===We&&r.a.createElement(E.c,{className:Xe.a.indent},r.a.createElement(E.e,{inline:!0,label:"url"},r.a.createElement(E.h,{placeholder:"place input url",value:f,onChange:function(e){var t=e.target.value;window.localStorage.setItem("HERO_BOOK_SETTING_DATA_REMOTE_URL",t),p(t)}})),r.a.createElement(E.e,{inline:!0,label:"validation"},r.a.createElement(E.h,{placeholder:"please input validation",value:h,onChange:function(e){var t=e.target.value;window.localStorage.setItem("HERO_BOOK_SETTING_DATA_REMOTE_TOKEN",t),O(t)}})))))}n(562),n(563),n(564),n(565);var Ve=function(){return r.a.createElement(i.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/l/l",component:ue}),r.a.createElement(l.b,{path:"/l/s",component:ze}),r.a.createElement(l.b,{path:"/l/d/:id",component:Ye}),r.a.createElement(l.b,{path:"/l/a/:text",component:W}),r.a.createElement(l.b,{path:"/l/ce/:id?",component:Ce}),r.a.createElement(l.b,{path:"/l/lc/ce/:id/:cid?",component:ye}),r.a.createElement(l.a,{to:"/l/a/m"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[337,1,2]]]);
//# sourceMappingURL=main.bf67f6e9.chunk.js.map
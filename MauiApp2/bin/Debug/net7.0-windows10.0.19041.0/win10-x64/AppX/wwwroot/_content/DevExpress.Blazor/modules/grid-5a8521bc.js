import{b as e,d as t}from"./dom-25ebd160.js";import{e as o}from"./evt-f1163bed.js";import{t as l}from"./touch-db2033c5.js";import{l as n,d as r,m as i,n as s,h as c,q as a,e as u,u as d,r as f,b as p,o as h,f as m,p as g,v as y,w as S,g as b}from"./dom-utils-304c8c50.js";import{d as v,r as x}from"./disposable-d2c2d283.js";import{S as H}from"./svg-utils-0be6c8b2.js";import{minColumnWidth as T,ColumnResizeMode as w}from"./column-resize-87e3249d.js";import{updateScrollbarStyle as E}from"./dx-style-helper-bd6b6422.js";import{ListBoxCssClasses as L}from"./dx-listbox-e9543f9f.js";import"./_tslib-6e8ca86b.js";import"./css-classes-f3f8ed66.js";import"./key-1994c54c.js";import"./lit-element-base-c6695e09.js";import"./data-qa-utils-8be7c726.js";import"./lit-element-70cf14f4.js";import"./custom-element-267f9a21.js";import"./dx-ui-element-39d22b67.js";import"./logicaltreehelper-ec583f1d.js";import"./layouthelper-910ca836.js";import"./rect-6159d026.js";import"./point-37917280.js";import"./dx-html-element-pointer-events-helper-10ee3756.js";import"./eventhelper-8570b930.js";import"./property-d3853089.js";const N="data-dxdg-column-id",I="data-dxdg-draggable-id",B={GroupPanelHead:"gph",ColumnHead:"ch"};function C(e){if(!e.hasAttribute(I))return null;const t=e.getAttribute(N).split("|"),o=!(t.length>2)||"1"===t[2],l=t.length>1?B[t[1]]:B.ColumnHead,n=l===B.ColumnHead?parseInt(t[0]):-1,r=l===B.GroupPanelHead?parseInt(t[0]):-1,i=e.previousElementSibling;return{columnVisibleIndex:n,groupVisibleIndex:r,columnHeadType:l,canBeGrouped:o,needInsertBeforeToo:!i||!C(i),element:e}}function R(e){return"["+I+"="+e+"]"}function M(e,t,o){var l,n,r;l=e,n=D(t,"clientX")-o.left,r=D(t,"clientY")-o.top,l.style.transform=["translate(",Math.round(n),"px, ",Math.round(r),"px)"].join("")}function D(e,t){return void 0!==e[t]?e[t]:void 0!==e.touches?e.touches[0][t]:0}function V(t,o,c,a){const u=D(t,"clientX"),d=D(t,"clientY"),f=t.target;if(c){const e=n(t.target,"th");if(e&&u>=e.getBoundingClientRect().right-T)return}let p=!1;const h=function(e){const t=Math.abs(u-D(e,"clientX"))>10,c=Math.abs(d-D(e,"clientY"))>10;return(t||c)&&(p=!0,m(),function(e,t,o,c){const a=R(o),u=n(t,a);if(!u)return;const d=r(u,"dxbs-gridview").getBoundingClientRect(),f=C(u),p=s(),h=i();let m={left:0,top:0};const g=function(e,t){const o=[],l=R(t),n=document.querySelectorAll(l);let r=!1,i=!1;for(let e=0;e<n.length;e++){const t=n[e],l=t.getBoundingClientRect(),s=C(t),c=s.columnVisibleIndex,a=s.groupVisibleIndex,u=s.columnHeadType;u===B.GroupPanelHead?r=!0:u===B.ColumnHead&&(i=!0),s.needInsertBeforeToo&&o.push(new q(t,l.left,l.top,l.bottom,c,a,u,!0,!1)),o.push(new q(t,l.right,l.top,l.bottom,c,a,u,!1,!1))}if(r||i){if(!r){const e=document.querySelector("[data-dxdg-drag-group-panel="+t+"]");if(e){const t=e.getBoundingClientRect();o.push(new q(e,t.left,t.top,t.bottom,-1,0,B.GroupPanelHead,!1,!0,!0))}}if(!i){const e=document.querySelector("[data-dxdg-drag-head-row="+t+"]");if(e){const t=e.getBoundingClientRect();o.push(new q(e,t.right,t.top,t.bottom,-1,-1,B.ColumnHead,!1,!0,!0))}}}return o}(0,o),y=function(e,t){let o=e.cloneNode(!0);const l=e.getBoundingClientRect(),n={left:D(t,"clientX")-l.left,top:D(t,"clientY")-l.top};if("DIV"!==o.tagName){const t=document.createElement("DIV"),n=window.getComputedStyle(e);t.innerHTML=o.innerHTML,t.className="card "+e.className,t.style.width=l.width+"px",t.style.height=l.height+"px",t.style.paddingTop=n.paddingTop,t.style.paddingBottom=n.paddingBottom,t.style.paddingLeft=n.paddingLeft,t.style.paddingRight=n.paddingRight,o=t}else o.style.width=l.width+"px",o.style.height=l.height+"px";o.className=o.className+" dx-dragging-state",document.body.appendChild(o);const r=o.getBoundingClientRect();return{dragElement:o,offsetFromMouse:{left:r.left+n.left,top:r.top+n.top}}}(u,e),S=y.dragElement,b=y.offsetFromMouse;M(S,e,b);let v=!0,x=null;const T=function(e){v&&(S.style.visibility="visible",v=!1);return M(S,e,{left:b.left+m.left,top:b.top+m.top}),x=function(e,t,o,l,n,r){!function(e){const t=R(e),o="div."+W+t,l=document.querySelectorAll(o);for(let e=0;e<l.length;e++){const t=l[e];t.parentNode.removeChild(t)}}(t);let c=null;const a=[],u=D(l,"clientX"),d=D(l,"clientY");for(let t=0;t<e.length;t++){const l=e[t];if(l.columnHeadType===B.GroupPanelHead&&!o.canBeGrouped)continue;if(l.top+n.top<=d&&d<=l.bottom+n.top){if(l.wholeRowIsRarget){c=l;break}a.push({distance:Math.abs(Math.abs(l.x+n.left)-Math.abs(u)),target:l})}}if(null==c){let e=1e6;for(const t in a)e>a[t].distance&&O(u,o,a[t].target)&&(e=a[t].distance,c=a[t].target)}null==c||A(o,c)||c.x>=r.left&&c.x<=r.right&&function(e,t){const o=document.createElement("DIV"),l=1,n=16,r=e.bottom-e.top+2*l,c=2*(n+l)+r;o.className=W,o.dataset.dxdgDraggableId=t,o.style.top=e.top+(e.docScrollTop-i())+i()-1-l-n+"px",o.style.height=c+"px",o.style.left=e.x+(e.docScrollLeft-s())+s()-n/2+"px",o.innerHTML=[H.getSvgHtml(H.ArrowDownIconName),"<div style='height:",r,"px'></div>",H.getSvgHtml(H.ArrowUpIconName)].join(""),document.body.appendChild(o),e.mark=o}(c,t);return c}(g,o,f,e,m,d),e.preventDefault(),!1},w=function(){if(x&&!A(f,x)){c.invokeMethodAsync("OnGridColumnHeadDragNDrop",f.columnHeadType===B.GroupPanelHead?f.groupVisibleIndex:f.columnVisibleIndex,f.columnHeadType,x.columnHeadType===B.GroupPanelHead?x.groupVisibleIndex:x.columnVisibleIndex,x.columnHeadType,x.insertBefore),x.mark&&x.mark.parentNode.removeChild(x.mark)}document.removeEventListener(l.TouchUtils.touchMouseMoveEventName,T),document.removeEventListener(l.TouchUtils.touchMouseUpEventName,w),window.removeEventListener("scroll",E),S.parentNode.removeChild(S)},E=function(){m={left:p-s(),top:h-i()}};document.addEventListener(l.TouchUtils.touchMouseMoveEventName,T),document.addEventListener(l.TouchUtils.touchMouseUpEventName,w),window.addEventListener("scroll",E)}(e,f,o,a)),e.preventDefault(),!1},m=function(){document.removeEventListener(l.TouchUtils.touchMouseMoveEventName,h),document.removeEventListener(l.TouchUtils.touchMouseUpEventName,m),!p&&f&&e.Browser.WebKitTouchUI&&f.click()};document.addEventListener(l.TouchUtils.touchMouseMoveEventName,h),document.addEventListener(l.TouchUtils.touchMouseUpEventName,m),t.preventDefault(),f.focus()}function q(e,t,o,l,n,r,c,a,u){this.element=e,this.x=t,this.top=o,this.bottom=l,this.columnVisibleIndex=n,this.groupVisibleIndex=r,this.columnHeadType=c,this.insertBefore=a,this.wholeRowIsRarget=u,this.docScrollTop=i(),this.docScrollLeft=s()}function A(e,t){function o(e,t){return t.groupVisibleIndex===e.groupVisibleIndex||t.groupVisibleIndex===e.groupVisibleIndex-1&&!t.insertBefore}function l(e,t){return t.columnVisibleIndex===e.columnVisibleIndex||t.columnVisibleIndex===e.columnVisibleIndex-1&&!t.insertBefore}if(t.columnHeadType===e.columnHeadType&&e.columnHeadType===B.GroupPanelHead&&o(e,t))return!0;if(t.columnHeadType===e.columnHeadType&&e.columnHeadType===B.ColumnHead&&l(e,t))return!0;if(e.columnHeadType===B.GroupPanelHead&&t.columnHeadType===B.ColumnHead&&-1!==e.columnVisibleIndex&&l(e,t))return!0;return!(e.columnHeadType!==B.ColumnHead||t.columnHeadType!==B.GroupPanelHead||-1===e.groupVisibleIndex||!o(e,t))}function O(e,t,o){const l=t.element.getBoundingClientRect();if(A(t,o)&&(e<l.left||e>l.right))return!1;if(o.x<l.left){if(e>l.right)return!1}else if(e<l.left)return!1;return!0}B[1]=B.ColumnHead,B[0]=B.GroupPanelHead;const W="dxgv-target-marks";const P=200,U="dxbs-data-row",_={GridSelectedRowCell:".dxbs-table td.table-active"},j={SELECTION_BG:"--selection-bg",COMPONENT_WIDTH:"--component-width",SCROLL_LEFT:"--scroll-left"},G=new ResizeObserver((e=>{for(let t=0;t<e.length;t++){const o=e[t],l=o.target;l.style.setProperty(j.COMPONENT_WIDTH,o.contentRect.width+"px"),l._dxOnWindowResize&&l._dxOnWindowResize()}}));class k{constructor(e,t,o){this._itemHeight=e,this._scrollTop=t,this._scrollHeight=o}get itemHeight(){return this._itemHeight}get scrollTop(){return this._scrollTop}get scrollHeight(){return this._scrollHeight}isEqual(e){return this.itemHeight===e.itemHeight&&this.scrollTop===e.scrollTop&&this.scrollHeight===e.scrollHeight}toJSON(){return{ItemHeight:this.itemHeight,ScrollTop:this.scrollTop,ScrollHeight:this.scrollHeight}}}function z(e){if(!c(e))return;let t=function(e){let t=e.querySelector("*[id$='_LB']");!t&&e.parentNode&&(t=e.parentNode.querySelector("*[id$='_LB']"));t||(t=e);if(t){let e=t.querySelector(L.ItemSelected);if(e||(e=t.querySelector(_.GridSelectedRowCell)),e)return e.parentNode}return null}(e);if(t||(t=function(e){let t=null;a(e,(o=>{t=e.querySelector("*"+o+" > *[id$='_LB']")})),t||a(e.parentNode,(o=>{e.parentNode&&(t=e.parentNode.querySelector("*"+o+" > *[id$='_LB']"))}));const o=t?t.querySelector(_.GridSelectedRowCell):null;return o?o.parentNode:null}(e)),t){const o=e;let l=t.offsetTop;if(t.offsetParent&&"TABLE"===t.offsetParent.tagName){const e=t.offsetParent.previousElementSibling;e&&(l+=e.clientHeight)}const n=o.scrollTop+o.clientHeight<l+t.offsetHeight;o.scrollTop>l&&(o.scrollTop=l),n&&(o.scrollTop=l-(o.clientHeight-t.offsetHeight))}}function F(e){if(!c(e))return;const t=function(e){let t=e.querySelector("*[id$='_LB']");!t&&e.parentNode&&(t=e.parentNode.querySelector("*[id$='_LB']"));t||(t=e);if(t){const e=t.querySelector(L.ItemActive);if(e)return"TR"===e.tagName?e:e.parentNode}return null}(e);if(t){let o=e.querySelector(".dxgvCSD");o||(o=e);const l=o.scrollTop+o.clientHeight<t.offsetTop+t.offsetHeight;o.scrollTop>t.offsetTop&&(o.scrollTop=t.offsetTop),l&&(o.scrollTop=t.offsetTop-(o.clientHeight-t.offsetHeight))}}function X(e){void 0===e.dataset.virtualScrollLock&&(e.dataset.virtualScrollLock="0")}function $(e){X(e);const t=Number(e.dataset.virtualScrollLock)+1;e.dataset.virtualScrollLock=t.toString()}function Y(e){X(e);const t=Number(e.dataset.virtualScrollLock)-1;e.dataset.virtualScrollLock=t.toString()}function J(e,t,o,l,n,r,i){o.isHorizontalScrolling&&K(e,l,n),o.isVirtualScrolling&&function(e,t,o,l,n){if(r=o,X(r),Number(r.dataset.virtualScrollLock)>0)return;var r;!function(e,t,o,l,n){let r=!0;o.dataset.prevScrollTop?r=o.dataset.prevScrollTop!==o.scrollTop.toString():o.dataset.prevScrollTop=o.scrollTop.toString();Q(o),r&&(o.dataset.OnScrollTimerId=setTimeout((function(){(function(e,t,o,l){const n=Z(t),r=le(t),i=r.scrollTop,s=r.scrollBottom,c=o.clientHeight>0&&i<o.offsetHeight,a=l.clientHeight>0&&s>o.offsetHeight+n.offsetHeight;return c||a?function(e,t,o){const l=e;return l.dxScrollStateCache&&l.dxScrollStateCache.isEqual(o)?Promise.resolve():(l.dxScrollStateCache=o,t.DxRestoreScrollTop=t.scrollTop,$(t),e.invokeMethodAsync("OnGridVirtualScroll",o.itemHeight,o.scrollTop,o.scrollHeight).then((o=>{!function(e,t){he(e.mainElement,e,t)}(o,e),Y(t)})).catch(ne))}(e,t,r.requestScrollState):Promise.resolve()})(e,o,l,n).then((()=>{delete o.dataset.prevScrollTop})),t.needInternalSettings&&ie(t)}),P).toString(),function(e){const t=0===e.scrollTop,o=e.scrollHeight-e.scrollTop===e.clientHeight,l="dx-scrolling";e.classList.remove(l),t||o||e.classList.add(l)}(o))}(e,t,o,l,n)}(t,o,l,r,i)}function K(e,t,l){if(t.scrollLeft===l.scrollLeft)return;const n=o.EvtUtils.getEventSource(e);if(n===t){const e=t.scrollLeft;l.scrollLeft=e,t.style.setProperty(j.SCROLL_LEFT,e+"px")}else n===l&&setTimeout((()=>t.scrollLeft=l.scrollLeft),0)}function Q(e){e.dataset.OnScrollTimerId&&(clearTimeout(Number(e.dataset.OnScrollTimerId)),delete e.dataset.OnScrollTimerId)}function Z(e){const t=e.querySelector("table.dxbs-table"),o=e.classList.contains(L.ListBox)?e.querySelector("ul"):null;return t||o}function ee(e,t,o,l,n){const r=Z(t),i=function(e,t){const o=oe(e),l=t.virtualScrollingOptions.itemsAbove*o,n=t.virtualScrollingOptions.itemsBelow*o;return{itemHeight:o,spacerTop:l,spacerBelow:n}}(r,n);o.style.height=i.spacerTop+"px",l.style.height=i.spacerBelow+"px",function(e,t,o){e.scrollTop<o.clientHeight&&(e.scrollTop=o.clientHeight+1);e.scrollTop+e.clientHeight>o.clientHeight+t.offsetHeight&&(e.scrollTop=o.clientHeight+t.offsetHeight-e.clientHeight-1)}(t,r,o)}function te(e){return Array.from(function(e){switch(e.tagName){case"TABLE":return e.querySelectorAll(":scope > tbody > tr");case"UL":return e.querySelectorAll(":scope > li");default:throw new Error("Unexpected data container element")}}(e),(e=>e.offsetHeight))}function oe(e){const t=te(e),o={};for(let e=0;e<t.length;e++){const l=t[e];o[l]=o[l]?o[l]+1:1}let l=0,n=0;for(const e in o)o[e]>n&&(n=o[e],l=Number(e));return l}function le(e){const t=300,o=Z(e);let l=e.scrollTop-t;l<0&&(l=0);const n=e.scrollTop+e.clientHeight+t;let r=l-t;r<0&&(r=0);const i=n-r+t,s=oe(o);return{scrollTop:l,scrollBottom:n,requestScrollState:new k(s,r,i)}}function ne(e){e&&e.mainElement&&me(e.mainElement)}function re(e){return()=>{if(!e)return;const t=e.parentStyleSheet;if(!t)return;const o=Array.prototype.indexOf.call(t.cssRules,e);o>-1&&t.deleteRule(o)}}function ie(e){const t=e.elementsStorage,o=u(e.mainElement).parentElement;if(!o)return null;const l=u(t.scrollElement),n=u(t.scrollHeaderElement),r=[],i=window.getComputedStyle(o);if(!i)return null;if(!l.style.maxHeight)if(e.isDropDown)l.style.maxHeight=ae(i,n)+"px";else{const e=m(o,(e=>{l.style.maxHeight=e.height-n.offsetHeight+"px"})),t=m(n,(e=>{l.style.maxHeight=o.clientHeight-(e.height+2*g(n))+"px"}));r.push((()=>{d(e),d(t)})),l.style.maxHeight=o.clientHeight-n.offsetHeight+"px"}if(e.isDropDown&&2!==e.dropDownWidthMode){const t=ce(l,n,o,e,i),s=l.querySelector("table");if(!s)return null;x(s,(()=>{t&&t()}));const c=m(s,(t=>{v(s);const r=ce(l,n,o,e,i);x(s,(function(){r&&r()}))}));r.push((function(){d(c),v(s)}))}return r.length>0?()=>{r.forEach((e=>e()))}:null}function se(e,o,l){const n="dxbs-vertical-scrollbar-visible";o&&!l?t.DomUtils.addClassName(e,n):t.DomUtils.removeClassName(e,n)}function ce(e,t,o,l,n){function r(e,t){const o=e.querySelector(t);return o?o.children:null}let i=null;const s=e.querySelector("table"),c=t.querySelector("table");if(!s||!c)return null;const a=r(s,"tbody>tr"),d=a&&1===a.length&&s.querySelector("tr.dxbs-empty-data-row"),f=r(c,"colgroup"),h=r(s,"colgroup");o.dataset.calculated&&function(e,t){if(!e||!t)return;for(let o=0;o<e.length;o++){const l=e[o];l.dataset.autoWidth&&de(l,t.item(o))}}(f,h);let m=0;if(d){c.style.width="auto",c.style.tableLayout="auto";const e=window.getComputedStyle(c).width;c.removeAttribute("style"),m=parseFloat(e)}else{const e=r(c,"thead>tr");if(!(f&&e&&a&&h))return null;s.style.width=c.style.width="auto",s.style.tableLayout=c.style.tableLayout="auto";const t=[];for(let o=0;o<f.length;o++){const n=f[o];if(n.style.width)if(-1!==n.style.width.indexOf("%"))t.push(o);else{const e=b(),t=u(l.mainElement).getAttribute("data-dxdg-id");let r=null;e&&(e.insertRule("[data-dxdg-id='"+t+"'] table tr>td:nth-child("+(o+1)+"), [data-dxdg-id='"+t+"'] table tr>th:nth-child("+(o+1)+") { max-width:"+n.style.width+"; }",e.cssRules.length),r=e.cssRules[e.cssRules.length-1],m+=parseFloat(n.style.width)),i=re(r)}else n.dataset.autoWidth="true",m+=ue(n,h[o],e[o],a[o])}if(t.length>0)for(let o=0;o<t.length;o++)m+=ue(f[o],h[o],e[o],a[o]);s.removeAttribute("style"),c.removeAttribute("style")}if(0===l.dropDownWidthMode||1===l.dropDownWidthMode){const r=l.editor;if(!r)return null;const i=parseInt(n.borderRightWidth,10)+parseInt(n.borderLeftWidth,10),s=m+(e.querySelector("table").offsetHeight>ae(n,t)?p():0)+i;0===l.dropDownWidthMode&&r.offsetWidth>s?(!function(e,t,o){if(!e||!t)return;const l=Array.from(e),n=l.filter((e=>e.dataset.autoWidth));if(n.length>0){const e=Math.floor(o/n.length);for(let o=0;o<n.length-1;o++){const r=n[o],i=t[l.indexOf(r)],s=Number.parseInt(r.style.width);i.style.width=r.style.width=s+e+"px"}const r=n[n.length-1];de(r,t[l.indexOf(r)])}}(f,h,r.offsetWidth-s),o.style.width=r.offsetWidth-2+"px"):o.style.width=s+"px"}return o.dataset.calculated="true",i}function ae(e,t){const o=parseInt(e.borderTopWidth,10)+parseInt(e.borderBottomWidth,10);return parseInt(e.maxHeight,10)-o-t.offsetHeight}function ue(e,t,o,l){const n=Math.ceil(o.getBoundingClientRect().width),r=Math.ceil(l.getBoundingClientRect().width),i=n>r?n:r;return t.style.width=e.style.width=i+"px",i}function de(e,t){e.style.width="",t&&(t.style.width="")}k.Auto=new k(0,0,0);const fe=document.createElement("TD");async function pe(e,o){try{const l=u(e);if(!l)throw new Error("failed");await function(e){return new Promise(((t,o)=>{!function l(n){e.clientHeight>0?t():0===n?o("DxDataGrid.Init error: can't measure layout"):setTimeout(l,100,n-1)}(10)}))}(l),l._dxResizeAttached||(l._dxResizeAttached=!0,G.observe(l)),cancelAnimationFrame(l._dxNextRafId||-1);const n=l.clientWidth+"px",r=t.DomUtils.getCurrentStyle(fe).backgroundColor,i=o(l);return l._dxNextRafId=requestAnimationFrame((()=>{l.style.setProperty(j.SELECTION_BG,r),l.style.setProperty(j.COMPONENT_WIDTH,n)})),i}catch(e){throw new Error(`DxDataGrid.Init error: ${e}`)}}function he(e,n,i){return pe(e,(e=>{const s=i,c=n.isMultipleSelectionEnabled,a=n.scrollToSelectedItemRequested,m=n.elementsStorage;v(e);let g=null,b=null,H=null,T=null,L=null;n.needInternalSettings&&(L=ie(n));const N=u(m.scrollElement),I=u(m.scrollHeaderElement);if(N){const o=u(m.virtualScrollSpacerTopElement),l=u(m.virtualScrollSpacerBottomElement);if($(N),n.isVirtualScrolling||n.isVerticalScrolling){t.DomUtils.addClassName(e,"dxbs-has-vertical-scrollbar"),se(e,N.scrollHeight>N.clientHeight,n.isHorizontalScrolling);n.isFirstScrollableRender&&n.isAutoVerticalScrollBarMode&&(e.disposeVerticalScrollBarSubscriber=function(e,t,o){const l=y(t,(t=>{se(e,t,o)}));return()=>{d(l)}}(e,N,n.isHorizontalScrolling)),n.isFirstScrollableRender&&(e.disposeVerticalScrollBarWidthSubscriber=function(){const e=S((()=>E()));return()=>{d(e)}}())}if(n.isVirtualScrolling&&(ee(0,N,o,l,n),a?z(N):N.DxRestoreScrollTop&&(N.scrollTop=N.DxRestoreScrollTop,delete N.DxRestoreScrollTop)),function(e){const t=e.querySelectorAll(".btn.btn-toggle");if(0!==t.length)for(let o=0;o<t.length;o++){const l=t[o],n=l.offsetWidth+h(l.parentNode);if(n>0){requestAnimationFrame((()=>{e.style.setProperty("--button-w",n+"px")}));break}}}(e),g=e=>J(e,s,n,N,I,o,l),N.addEventListener("scroll",g),I&&I.addEventListener("scroll",g),Y(N),function(e){return!e.needInternalSettings&&(e.isHorizontalScrolling||e.isVerticalScrolling&&e.columnResizeMode!==w.Component)}(n)){const t=u(m.rootElement);b=()=>function(e,t,o,l){let n="",r="";t&&($(t),n=t.style.overflowX,t.style.overflowX="hidden",t.style.width="0"),o&&(r=o.style.overflowX,o.style.overflowX="hidden",o.style.width="0");const i=e.clientWidth;if(t&&(i&&(t.style.width=i+"px"),t.style.overflowX=n),o){const e=function(e,t){return(t.isVerticalScrolling||t.isVirtualScrolling)&&(e.clientHeight<e.scrollHeight||"scroll"===e.style.overflowY)}(t,l)?p():0;i&&(o.style.width=i-e+"px"),o.style.overflowX=r}t&&Y(t)}(t,N,I,n),b(),window.addEventListener("resize",b),e._dxOnWindowResize=b}}function B(e){C(e)}function C(e){if(!c||!e.shiftKey||!o.EvtUtils.isLeftButtonPressed(e))return;const t=o.EvtUtils.getEventSource(e);r(t,U)&&f()}e.addEventListener("mousedown",B);let R=null,M=null;const D=n.columnResizeMode!==w.Disabled;if(n.isColumnDragEnabled){const t=e.dataset.dxdgId;t&&(R=e.querySelector("[data-dxdg-drag-head-row='"+t+"']"),R&&(H=e=>V(e,t,D,s),R.addEventListener(l.TouchUtils.touchMouseDownEventName,H)),M=e.querySelector("[data-dxdg-gp='"+t+"']"),M&&(T=e=>V(e,t,D,s),M.addEventListener(l.TouchUtils.touchMouseDownEventName,T)))}if(x(e,(function(){L&&L(),g&&(N.removeEventListener("scroll",J),I&&I.removeEventListener("scroll",J)),b&&window.removeEventListener("resize",b),N&&Q(N),H&&R&&R.removeEventListener(l.TouchUtils.touchMouseDownEventName,H),T&&M&&M.removeEventListener(l.TouchUtils.touchMouseDownEventName,T),e.removeEventListener("mousedown",B)})),n.isFirstScrollableRender&&n.isVirtualScrolling&&n.virtualScrollingOptions.itemsBelow>0){const e=le(N);return JSON.stringify(e.requestScrollState)}return JSON.stringify(k.Auto)}))}function me(e){return(e=u(e))&&function(e){G.unobserve(e),v(e),function(e){e.disposeVerticalScrollBarSubscriber&&(e.disposeVerticalScrollBarSubscriber(),delete e.disposeVerticalScrollBarSubscriber)}(e),function(e){e.disposeVerticalScrollBarWidthSubscriber&&(e.disposeVerticalScrollBarWidthSubscriber(),delete e.disposeVerticalScrollBarWidthSubscriber)}(e)}(e),Promise.resolve("ok")}fe.style.cssText="display: none; position: fixed; top: -1000px; left: -1000px;",fe.className="table-active",document.body.appendChild(fe);const ge={init:he,dispose:me};export{ge as default,me as dispose,le as getParametersForVirtualScrollingRequest,he as init,F as scrollToFocusedItem,z as scrollToSelectedItem};

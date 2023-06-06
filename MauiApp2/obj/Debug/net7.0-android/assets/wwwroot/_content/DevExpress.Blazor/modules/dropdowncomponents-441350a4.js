import{_ as t}from"./_tslib-6e8ca86b.js";import{D as e,B as i,a as r,b as o,I as s}from"./popup-1940fd5f.js";import{ThumbDragStartedEvent as a,ThumbDragDeltaEvent as d,ThumbDragCompletedEvent as n}from"./thumb-0cefcb05.js";import{P as h}from"./point-37917280.js";import{R as l,a as p}from"./rect-6159d026.js";import{L as c,D as g}from"./layouthelper-910ca836.js";import{E as m}from"./eventhelper-8570b930.js";import{C as u}from"./custom-events-helper-18f7786a.js";import{i as b,d as f}from"./events-interseptor-8aee1ab4.js";import{y as x,s as y,i as v}from"./lit-element-70cf14f4.js";import{e as C}from"./property-d3853089.js";import{e as D}from"./custom-element-267f9a21.js";import{D as R,a as S}from"./popupportal-d99ac31f.js";import{dxBranchTagName as H}from"./branch-bf06b0d2.js";const w="dxbl-dropdown",z="data-dropdown-thumb";class W{constructor(t,e){this.width=Math.floor(t),this.height=Math.floor(e)}}class N extends CustomEvent{constructor(t,e){super(N.eventName,{detail:new W(t,e),bubbles:!0,composed:!0,cancelable:!0})}}N.eventName=w+".resizeStarted",u.register(N.eventName,(t=>t.detail));class $ extends CustomEvent{constructor(t,e){super($.eventName,{detail:new W(t,e),bubbles:!0,composed:!0,cancelable:!0})}}$.eventName=w+".resizeCompleted",u.register($.eventName,(t=>t.detail));class L extends e{constructor(){super(...arguments),this.dragStart=null,this.dragBounds=null,this.dragStartedHandler=this.handleDragStarted.bind(this),this.dragDeltaHandler=this.handleDragDelta.bind(this),this.dragCompletedHandler=this.handleDragCompleted.bind(this),this.dragWidth=0,this.dragHeight=0,this.dragMaxWidth=0,this.dragMaxHeight=0,this.isInDragOperation=!1,this.dragCssStyle=null}get branchType(){return i.DropDown}renderTemplate(){return x`
            <dxbl-branch
                id="branch"
                branch-id="${this.branchId}"
                parent-branch-id="${this.parentBranchId}"
                type="${this.branchType}"
                style="${this.dragCssStyle}">
                <dxbl-dropdown-root
                    id="root"
                    style="${this.rootCssStyle}"
                    ?resizing="${this.resizing}"
                    drop-opposite="${this.actualDropOpposite}"
                    drop-direction="${this.actualDropDirection}"
                    drop-alignment="${this.actualDropAlignment}">
                    ${this.renderDefaultSlot()}
                    ${this.renderAdditionalSlots()}
                    ${this.renderBridgeSlot()}
                </dxbl-dropdown-root>
            </dxbl-branch>
        `}getRootTagName(){return"dxbl-dropdown-root"}connectedCallback(){super.connectedCallback(),this.addEventListener(a.eventName,this.dragStartedHandler),this.addEventListener(d.eventName,this.dragDeltaHandler),this.addEventListener(n.eventName,this.dragCompletedHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(a.eventName,this.dragStartedHandler),this.removeEventListener(d.eventName,this.dragDeltaHandler),this.removeEventListener(n.eventName,this.dragCompletedHandler)}get child(){return this.root}handleDragStarted(t){const e=m.getOriginalSource(t);if(!e)return;if(!e.hasAttribute(z))return;if(!this.child)return;this.lockPlacement(),this.dragStart=new h(t.detail.x,t.detail.y);const i=this.getRestrictBounds(),r=this.getPlacementTargetInterestPoints(this.placement),o=this.actualDropAlignment,s=this.actualDropDirection,a=c.getRelativeElementRect(this.child);this.dragBounds=this.calcResizeRect(i,r,o,s),this.dragMaxWidth=this.dragBounds.width,this.dragMaxHeight=this.dragBounds.height,this.isInDragOperation=!0,this.dragWidth=a.width,this.dragHeight=a.height,this.raiseResizeStarted(this.dragWidth,this.dragHeight)}willUpdate(t){super.willUpdate(t),this.dragCssStyle=this.isInDragOperation?`width: ${g.toPx(this.dragWidth)}; height: ${g.toPx(this.dragHeight)}; max-width: ${g.toPx(this.dragMaxWidth)}; max-height: ${g.toPx(this.dragMaxHeight)};`:null}updated(t){super.updated(t),this.root.offsetWidth<this.root.scrollWidth&&(this.dragWidth=this.root.scrollWidth),this.root.offsetHeight<this.root.scrollHeight&&(this.dragHeight=this.root.scrollHeight)}handleDragDelta(t){const e=m.getOriginalSource(t);e&&e.hasAttribute(z)&&(this.dragWidth=Math.min(this.dragMaxWidth,this.actualDropDirection===r.Near?t.detail.x-this.offset.x:this.offset.x+this.childSize.width-t.detail.x),this.dragHeight=Math.min(this.dragMaxHeight,this.actualDropAlignment===o.bottom?t.detail.y-this.offset.y:this.offset.y+this.childSize.height-t.detail.y))}handleDragCompleted(t){var e,i;const r=m.getOriginalSource(t);r&&r.hasAttribute(z)&&(this.isInDragOperation=!1,this.dragWidth=null!==(e=this.branch.offsetWidth)&&void 0!==e?e:0,this.dragHeight=null!==(i=this.branch.offsetHeight)&&void 0!==i?i:0,this.desiredWidth=g.toPx(this.dragWidth),this.desiredHeight=g.toPx(this.dragHeight),this.unlockPlacement(),this.raiseResizeCompleted(this.dragWidth,this.dragHeight))}calcResizeRect(t,e,i,a){if(a===r.Near){if(i===o.top){return l.intersect(t,p.createFromPoints(e[s.TopLeft],t.topRight))}return l.intersect(t,p.createFromPoints(e[s.BottomLeft],t.bottomRight))}if(i===o.top){return l.intersect(t,p.createFromPoints(e[s.TopRight],t.topLeft))}return l.intersect(t,p.createFromPoints(e[s.BottomRight],t.bottomLeft))}raiseResizeStarted(t,e){this.dispatchEvent(new N(t,e))}raiseResizeCompleted(t,e){this.dispatchEvent(new $(t,e))}calcRenderWidth(){return this.isInDragOperation?null:super.calcRenderWidth()}calcRenderHeight(){return this.isInDragOperation?null:super.calcRenderHeight()}shouldUpdateRootCssStyle(t){return super.shouldUpdateRootCssStyle(t)||t.has("isInDragOperation")||t.has("dragWidth")||t.has("dragHeight")||t.has("dragMaxWidth")||t.has("dragMaxHeight")}}t([b("#root",!0)],L.prototype,"root",void 0),t([b("#branch")],L.prototype,"branch",void 0),t([C({type:Number,reflect:!1})],L.prototype,"dragWidth",void 0),t([C({type:Number,reflect:!1})],L.prototype,"dragHeight",void 0),t([C({type:Number,reflect:!1})],L.prototype,"dragMaxWidth",void 0),t([C({type:Number,reflect:!1})],L.prototype,"dragMaxHeight",void 0),t([C({type:Boolean,reflect:!1})],L.prototype,"isInDragOperation",void 0),t([C({type:String,reflect:!1})],L.prototype,"dragCssStyle",void 0);let j=class extends L{};j=t([D(w)],j);const M="dxbl-dropdown-dialog";let O=class extends R{createRenderRoot(){return this}};O=t([D(M)],O);const P="dxbl-dropdown-root";let E=class extends y{constructor(){super(...arguments),this.topLeftClass=null,this.topRightClass=null,this.bottomLeftClass=null,this.bottomRightClass=null,this.dropOpposite=!1,this.dropDirection=r.Near,this.dropAlignment=o.bottom,this.resizing=!1}static get styles(){return v`
            :host {
                display: flex;
                position: relative;
                flex: 1 1 auto;
                flex-direction: column;
                box-sizing: border-box;
                min-height: 0;
            }
            .hidden {
                display: none;
            }
            ::slotted([slot="top-right"]) {
                position: absolute;
                z-index: 1001;
                top: 0px;
                right: 0px;
                transform: rotate(270deg);
                cursor: ne-resize;
            }
            ::slotted([slot="top-left"]) {
                position: absolute;
                z-index: 1001;
                top: 0px;
                left: 0px;
                transform: rotate(180deg);
                cursor: nw-resize;
            }
            ::slotted([slot="bottom-left"]) {
                position: absolute;
                z-index: 1001;
                bottom: 0px;
                left: 0px;
                transform: rotate(90deg);
                cursor: sw-resize;
            }
            ::slotted([slot="bottom-right"]) {
                position: absolute;
                z-index: 1001;
                bottom: 0px;
                right: 0px;
                cursor: se-resize;
                transform: rotate(0deg);
            }
        }`}connectedCallback(){super.connectedCallback(),this.calculateStyles(this.resizing,this.dropAlignment,this.dropDirection)}willUpdate(t){(t.has("dropAlignment")||t.has("dropDirection")||t.has("resizing"))&&this.calculateStyles(this.resizing,this.dropAlignment,this.dropDirection)}calculateStyles(t,e,i){this.topLeftClass=t&&e===o.top&&i===r.Far?null:"hidden",this.topRightClass=t&&e===o.top&&i===r.Near?null:"hidden",this.bottomLeftClass=t&&e===o.bottom&&i===r.Far?null:"hidden",this.bottomRightClass=t&&e===o.bottom&&i===r.Near?null:"hidden"}render(){return x`
            <slot></slot>
            <dxbl-thumb data-qa-thumb-location="top-left" data-dropdown-thumb class="${this.topLeftClass}">
                <slot name="top-left"></slot>
            </dxbl-thumb>
            <dxbl-thumb data-qa-thumb-location="top-right" data-dropdown-thumb class="${this.topRightClass}">
                <slot name="top-right"></slot>
            </dxbl-thumb>
            <dxbl-thumb data-qa-thumb-location="bottom-left" data-dropdown-thumb class="${this.bottomLeftClass}">
                <slot name="bottom-left"></slot>
            </dxbl-thumb>
            <dxbl-thumb data-qa-thumb-location="bottom-right" data-dropdown-thumb class="${this.bottomRightClass}">
                <slot name="bottom-right"></slot>
            </dxbl-thumb>`}};t([C({type:String,reflect:!1})],E.prototype,"topLeftClass",void 0),t([C({type:String,reflect:!1})],E.prototype,"topRightClass",void 0),t([C({type:String,reflect:!1})],E.prototype,"bottomLeftClass",void 0),t([C({type:String,reflect:!1})],E.prototype,"bottomRightClass",void 0),t([C({type:Object,attribute:"drop-opposite"})],E.prototype,"dropOpposite",void 0),t([C({type:String,attribute:"drop-direction"})],E.prototype,"dropDirection",void 0),t([C({type:String,attribute:"drop-alignment"})],E.prototype,"dropAlignment",void 0),t([C({type:Boolean,attribute:"resizing"})],E.prototype,"resizing",void 0),E=t([D(P)],E);const A=[w,M,P,H,S,f];function B(t){if(!t)throw new Error("failed");return t}const I=Object.freeze({__proto__:null,registeredComponents:A,getReference:B,default:{getReference:B,registeredComponents:A}});export{L as D,E as a,I as d,A as r};

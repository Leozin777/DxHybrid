import{_ as t}from"./_tslib-6e8ca86b.js";import{b as e}from"./text-editor-1a26e95f.js";import{f as s}from"./constants-4c28185b.js";import{C as i}from"./css-classes-f3f8ed66.js";import{e as r}from"./custom-element-267f9a21.js";import"./dx-ui-element-39d22b67.js";import"./logicaltreehelper-ec583f1d.js";import"./layouthelper-910ca836.js";import"./rect-6159d026.js";import"./point-37917280.js";import"./lit-element-base-c6695e09.js";import"./data-qa-utils-8be7c726.js";import"./lit-element-70cf14f4.js";import"./custom-events-helper-18f7786a.js";import"./eventhelper-8570b930.js";import"./property-d3853089.js";class o{}o.Memo=i.Prefix+"-memo-edit";let n=class extends e{constructor(){super(),this.textAreaObserver=new MutationObserver(this.textAreaSizeChanged.bind(this))}onSlotChanged(t){super.onSlotChanged(t);const e=this.getFieldElement();this.textAreaObserver.observe(e,{attributes:!0})}disconnectedCallback(){this.textAreaObserver.disconnect(),super.disconnectedCallback()}textAreaSizeChanged(t,e){const s=t[0].target,i=parseInt(s.style.width);if(!isNaN(i)){const t=this.offsetWidth-this.clientWidth+i;this.offsetWidth!==t&&(this.style.width=t+"px")}const r=parseInt(s.style.height);if(!isNaN(r)){const t=parseInt(getComputedStyle(s).minHeight),e=this.offsetHeight-this.clientHeight+(r>=t?r:t);this.offsetHeight!==e&&(this.style.height=e+"px")}}get shouldForceInputOnEnter(){return!1}getFieldElement(){return this.querySelector("textarea")}};n=t([r(s)],n);const a={loadModule:function(){}};export{n as DxMemoEditor,o as MemoCssClasses,a as default};

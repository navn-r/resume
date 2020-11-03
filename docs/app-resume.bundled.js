/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${s}`);class o{constructor(t,e){this.parts=[],this.element=e;const s=[],o=[],a=document.createTreeWalker(e.content,133,null,!1);let d=0,h=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=a.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)r(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=p[u],i=l.exec(e)[2],s=i.toLowerCase()+"$lit$",o=t.getAttribute(s);t.removeAttribute(s);const r=o.split(n);this.parts.push({type:"attribute",index:h,name:i,strings:r}),u+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,o=e.split(n),a=o.length-1;for(let e=0;e<a;e++){let s,n=o[e];if(""===n)s=c();else{const t=l.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++h})}""===o[a]?(i.insertBefore(c(),t),s.push(t)):t.data=o[a],u+=a}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&h!==d||(h++,e.insertBefore(c(),t)),d=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(s.push(t),h--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),u++}}else a.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}const r=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},a=t=>-1!==t.index,c=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let o=u(s),r=s[o],a=-1,c=0;const l=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-c,o=u(s,o),r=s[o]}l.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},u=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(a(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new WeakMap,m=t=>"function"==typeof t&&p.has(t),f={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,r=0,c=0,l=n.nextNode();for(;r<s.length;)if(o=s[r],a(o)){for(;c<o.index;)c++,"TEMPLATE"===l.nodeName&&(i.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=i.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=` ${i} `;class y{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const a=l.exec(t);e+=null===a?t+(n?w:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(b(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||b(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=c()),t.s(this.endNode=c())}insertAfterPart(t){t.s(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.i);){const t=this.i;this.i=f,t(this)}const t=this.i;t!==f&&(b(t)?t!==this.value&&this.o(t):t instanceof y?this.l(t):t instanceof Node?this.h(t):x(t)?this.u(t):t===g?(this.value=g,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}h(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.h(document.createTextNode(i)),this.value=t}l(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),s=i._clone();i.update(t.values),this.h(s),this.value=i}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new P(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;m(this.i);){const t=this.i;this.i=f,t(this)}if(this.i===f)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=f}}class _ extends S{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends C{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class k{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.p=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;m(this.i);){const t=this.i;this.i=f,t(this)}if(this.i===f)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.p,this.m),s&&(this.m=O(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.i=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function $(t){let e=E.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},E.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(i);return s=e.keyString.get(n),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const E=new Map,T=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new _(t,e.slice(1),i).parts}return"@"===n?[new k(t,e.slice(1),s.eventContext)]:"?"===n?[new A(t,e.slice(1),i)]:new S(t,e,i).parts}handleTextExpression(t){return new P(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const N=(t,...e)=>new y(t,e,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,I=(t,e)=>`${t}--${e}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const R=t=>e=>{const s=I(e.type,t);let n=E.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},E.set(s,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(i);if(r=n.keyString.get(a),void 0===r){const i=e.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(i,t),r=new o(e,i),n.keyString.set(a,r)}return n.stringsArray.set(e.strings,r),r},z=["html","svg"],F=new Set,J=(t,e,i)=>{F.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{z.forEach(e=>{const i=E.get(I(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),d(t,i)})})})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const o=document.createTreeWalker(s,133,null,!1);let r=u(n),a=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===i&&(a=h(e),i.parentNode.insertBefore(e,i));-1!==r&&n[r].index===c;){if(a>0){for(;-1!==r;)n[r].index+=a,r=u(n,r);return}r=u(n,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),d(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},L=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:L};class V extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||H}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=L){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||B,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||B.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=H){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,n=s.getPropertyOptions(t);s._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}V.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),q=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function G(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):q(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Y=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new X(i,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Z={};class tt extends V{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Z}}tt.finalized=!0,tt.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,o=T.has(i),r=D&&11===i.nodeType&&!!i.host,a=r&&!F.has(n),c=a?document.createDocumentFragment():i;if(((t,i,s)=>{let n=T.get(i);void 0===n&&(e(i,i.firstChild),T.set(i,n=new P(Object.assign({templateFactory:$},s))),n.appendInto(i)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:R(n)},s)),a){const t=T.get(c);T.delete(c);const s=t.value instanceof v?t.value.template:void 0;J(n,c,s),e(i,i.firstChild),i.appendChild(c),T.set(i,t)}!o&&r&&window.ShadyCSS.styleElement(i.host)};var et=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let it=class extends tt{constructor(){super(...arguments),this.class="fas fa-coffee"}render(){return N`
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      /><i class=${this.class}></i>
    `}};et([G({type:String})],it.prototype,"class",void 0),it=et([W("fa-icon")],it);var st=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let nt=class extends tt{constructor(){super(),this.time=new Date(Date.now()),this.getRecentCommit()}getRecentCommit(){fetch("https://api.github.com/repos/navn-r/resume").then(t=>t.json()).then(t=>{this.time=new Date(t.pushed_at)})}render(){return N`
      <div id="header">
        <div id="name">
          <h1>Navinn <span id="lastName">Ravindaran</span></h1>
        </div>
        <div id="contact-container">
          <div class="contact">
            <fa-icon class="fas fa-link"></fa-icon>
            <a href="https://navn-r.github.io">navn.me</a>
          </div>
          <div class="contact">
            <fa-icon class="fas fa-paper-plane"></fa-icon>
            <a href="mailto:navinn.ravindaran@mail.utoronto.ca"
              >navinn.ravindaran@mail.utoronto.ca</a
            >
          </div>
          <div class="contact">
            <fa-icon class="fab fa-linkedin"></fa-icon>
            <a href="https://linkedin.com/in/navinn-ravindaran"
              >navinn-ravindaran</a
            >
          </div>
          <div class="contact">
            <fa-icon class="fab fa-github"></fa-icon>
            <a href="https://github.com/navn-r">navn-r</a>
          </div>
        </div>
      </div>
      <div class="footer">
        <div style="display: flex; align-items: center;">
          <em>Updated: ${this.time.toDateString()}</em>
        </div>
        <div>
          Made with <fa-icon class="far fa-heart"></fa-icon>
        </div>
      </div>
    `}};nt.styles=Y`
    #header {
      background-color: var(--primary);
      display: grid;
      grid-template-columns: 2fr 1fr;
      padding: 2rem;
      color: #fff;
    }

    fa-icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      color: var(--accent);
    }

    #name h1 {
      font-size: 3.5rem;
      font-weight: 400;
      font-style: italic;
      text-align: center;
    }

    #lastName {
      font-weight: 600;
      color: var(--accent);
    }

    #contact-container {
      display: grid;
      grid-template-rows: auto;
      row-gap: 10px;
    }

    .contact {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }

    .contact a {
      text-decoration: none;
      color: #fff;
    }

    .footer {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      background-color: var(--text);
      color: var(--accent);
      padding: 1rem 0;
    }

    .footer fa-icon {
      font-size: 1rem;
    }

    
    @media print {
      .footer {
        display: none;
      }
    }

    @media screen and (max-width: 900px) {
      @media (max-width: 900px) {
        #header {
          grid-template-columns: auto;
          justify-content: center;
        }

        #contact-container {
          grid-template-columns: repeat(4, 1fr);
        }

        .contact {
          justify-content: center;
          padding: 0 1rem;
        }
      }

      @media (max-width: 600px) {
        #header {
          padding: 1rem;
        }

        #contact-container {
          grid-template-columns: repeat(2, 1fr);
        }

        .contact {
          justify-content: flex-start;
        }

        #name h1 {
          font-size: 2.5rem;
        }
      }

      @media (max-width: 375px) {
        #contact-container {
          grid-template-columns: auto;
          margin-bottom: 1.5rem;
        }
      }
    }
  `,st([G({attribute:!1})],nt.prototype,"time",void 0),nt=st([W("app-header")],nt);var ot=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let rt=class extends tt{constructor(){super(...arguments),this.title="Experience",this.subtitle="summary/degree/position",this.location="",this.time="",this.isProject=""}render(){return N`
      <div id="card">
        <div id="title-container">
          <h3 id="title">${this.title}</h3>
          <h4 id="subtitle">${this.subtitle}</h4>
          ${this.getInfo()}
          <span id="time">${this.time}</span>
        </div>
        <slot name="body"></slot>
      </div>
    `}getInfo(){return this.isProject?N`<a href="https://${this.location}" id="location">${this.location}</a>`:N`<span id="location">${this.location}</span>`}};rt.styles=Y`
    #card {
      margin: 0 2rem;
      color: var(--text);
    }

    #title-container {
      display: grid;
      justify-content: space-between;
      grid-template-areas:
        'title location'
        'subtitle time';
    }

    #subtitle {
      margin: 0;
      grid-area: subtitle;
    }

    #title {
      grid-area: title;
      margin: 0;
      font-weight: 600;
      font-size: 1.45rem;
    }

    #time {
      grid-area: time;
      text-align: right;
      font-style: italic;
    }
    #location {
      grid-area: location;
      font-style: italic;
      text-align: right;
      font-size: 1.25rem;
      text-decoration: none;
      color: var(--text);
    }
  `,ot([G({type:String})],rt.prototype,"title",void 0),ot([G({type:String})],rt.prototype,"subtitle",void 0),ot([G({type:String})],rt.prototype,"location",void 0),ot([G({type:String})],rt.prototype,"time",void 0),ot([G({type:String})],rt.prototype,"isProject",void 0),rt=ot([W("experience-card")],rt);var at=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let ct=class extends tt{render(){return N`
      <app-header></app-header>
      <div id="content">
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-graduation-cap"></fa-icon>
            <h2>EDUCATION</h2>
          </div>
          <experience-card
            title="University of Toronto"
            subtitle="Honours Bachelor of Science, Computer Science Co-op"
            location="Toronto, ON"
            time="2019 — Present"
          >
            <div slot="body" class="body">
              Cumulative GPA: <strong>3.75 / 4.00</strong> <br />
              Notable Courses: Software Design, Intro to Software Engineering,
              Discrete Mathematics, Multivariable Calculus, Linear Algebra<br />
              Awards:
              <ul id="uni-awards">
                <li><strong>Dean's List</strong> 2019-20</li>
                <li><strong>University of Toronto Scholar</strong> ($7500)</li>
              </ul>
            </div>
          </experience-card>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-briefcase"></fa-icon>
            <h2>EXPERIENCES</h2>
          </div>
          <experience-card
            title="Software Developer"
            subtitle="CaseWare International Inc. &bull; Co-op"
            location="Toronto, ON"
            time="Sept. 2020 — Present"
          >
            <div slot="body" class="body">
              <ul>
                <li>
                  Engaged in an <strong>Agile Scrum</strong> of 11 team members
                  for the <strong>CaseWare Cloud</strong> product.
                </li>
                <li>
                  Developed bug fixes using <strong>Angular</strong> and
                  <strong>AngularJS</strong> <em>improving</em> the end
                  experience for distributors
                </li>
                <li>
                  Designed and implemented <strong>Unit Tests</strong> from
                  existing manual tests <strong><em>reducing</em></strong> the
                  developer and QA regression effort.
                </li>
              </ul>
            </div>
          </experience-card>
          <experience-card
            title="Food Service Associate — Tim Hortons"
            subtitle="Canada's Wonderland"
            location="Vaughan, ON"
            time="July — Sept. 2017"
          >
            <div slot="body" class="body">
              <ul>
                <li>
                  Prepared and served
                  <strong>food and beverage items</strong> to park guests and
                  operated cash registers
                </li>
                <li>
                  Provided <strong>quality service</strong> to guests,
                  <em><strong>excelling</strong></em> in
                  <strong>customer service</strong> and
                  <strong>communication</strong>
                </li>
                <li>
                  Fulfilled orders while focusing on
                  <strong>direct Guest-Associate interactions</strong> in
                  compliance with <strong>WHMIS</strong> and company protocol
                </li>
              </ul>
            </div>
          </experience-card>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-code"></fa-icon>
            <h2>PROJECTS</h2>
          </div>
          <experience-card
            title="Ritrovo"
            subtitle="Full-Stack Social Platform"
            isProject="true"
            location="ritrovo.herokuapp.com"
            time="Sept. 2020"
            ><div slot="body" class="body">
              <ul>
                <li>
                  Built a <strong>Markdown</strong> post based dashboard using
                  <strong>Angular</strong> and <strong>Bootstrap</strong>
                  <em>while maintaining</em> a clean design
                </li>
                <li>
                  Implemented a <strong>REST API</strong> with
                  <strong>Node and ExpressJS</strong> featuring standard
                  <strong>CRUD</strong> operations for Users and Posts
                </li>
                <li>
                  Added <strong>Password Hashing</strong> to the
                  <strong>MongoDB</strong> database to improve User security and
                  authentication
                </li>
              </ul>
            </div></experience-card
          >
          <experience-card
            title="Noten"
            subtitle="Cloud Based Grade Management Application"
            isProject="true"
            location="ply.gl/com.noten"
            time="May 2020"
          >
            <div slot="body" class="body">
              <ul>
                <li>
                  Built using <strong>React Native</strong> to achieve
                  <em>a single codebase</em> deployable on
                  <strong>Android</strong> and <strong>iOS</strong>
                </li>
                <li>
                  Implemented
                  <strong>Firebase Auth and Realtime Database</strong> to allow
                  users to login and sync data
                  <em><strong>instantly</strong></em>
                </li>
                <li>
                  Followed modern React practices such as
                  <strong>Hooks and Lifecycle</strong> methods
                </li>
                <li>
                  Learned the basics of async functions and promises with
                  <strong>JavaScript ES6</strong>
                </li>
              </ul>
            </div>
          </experience-card>
          <experience-card
            title="Personal Portfolio"
            subtitle="Showcase of Projects and Experiences"
            isProject="true"
            location="navn.me"
            time="Jan. 2020 — Present"
          >
            <div slot="body" class="body">
              <ul>
                <li>
                  Built using <strong>HTML</strong>, <strong>CSS</strong> and
                  <strong>JavaScript</strong> with a focus on
                  <strong>responsive web design</strong>
                </li>
                <li>
                  Used modular <strong>Web Components</strong> to
                  <em><strong>decrease</strong></em> redundant code and
                  <em><strong>increase</strong></em> code reusability
                </li>
                <li>
                  Implemented <strong>CSS Grid</strong> to increase usability
                  across various screen sizes
                </li>
              </ul>
            </div>
          </experience-card>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-medal"></fa-icon>
            <h2>SKILLS</h2>
          </div>
          <div id="skills">
            <div class="category">
              <strong>Programming:</strong> HTML, CSS, TypeScript, JavaScript,
              Java, C, Python, Shell
            </div>
            <div class="category">
              <strong>Frameworks and Tools:</strong> Angular, React Native,
              Jira, Git, TravisCI, MongoDB, Firebase
            </div>
            <div class="category">
              <strong>Development Methodology:</strong> Agile with Scrum
              Framework
            </div>
          </div>
        </div>
      </div>
    `}};ct.styles=Y`
    :host {
      font-family: 'IBM Plex Sans', sans-serif;
    }

    @media screen {
      :host {
        display: grid;
        grid-template-areas:
          'header header header header'
          '. content content .';
        margin-bottom: 5rem;
      }

      @media (max-width: 900px) {
        :host {
          grid-template-areas: 'header' 'content';
        }
      }
    }

    #content {
      grid-area: content;
    }

    app-header {
      grid-area: header;
    }

    fa-icon {
      font-size: 1.5rem;
    }

    h2 {
      margin: 0;
    }

    li {
      margin: 0.25rem 0;
    }

    .title {
      display: grid;
      color: var(--text);
      grid-template-columns: 3rem auto;
      align-items: flex-end;
      border-bottom: 0.25rem var(--primary) solid;
      margin: 2rem 2rem 0 2rem;
      padding-bottom: 0.75rem;
    }

    .section {
      display: grid;
      grid-template-rows: auto;
      row-gap: 1rem;
    }

    .body {
      margin-top: 0.5rem;
      font-size: 1.1rem;
      padding-right: 2rem;
    }
    
    #uni-awards {
      margin-top: 0.5rem;
    }

    ul {
      margin-top: 0;
    }
    
    #skills {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      row-gap: 1rem;
      color: var(--text);
      margin-left: 2rem;
      font-size: 1.1rem;
    }
  `,ct=at([W("app-resume")],ct);export{ct as Resume};

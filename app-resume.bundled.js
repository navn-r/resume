!function(t){
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
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,o=new RegExp(`${s}|${n}`);class r{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],r=document.createTreeWalker(e.content,133,null,!1);let c=0,d=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=r.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)a(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=p[u],i=h.exec(e)[2],s=i.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const r=n.split(o);this.parts.push({type:"attribute",index:d,name:i,strings:r}),u+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,n=e.split(o),r=n.length-1;for(let e=0;e<r;e++){let i,o=n[e];if(""===o)i=l();else{const t=h.exec(o);null!==t&&a(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(o)}s.insertBefore(i,t),this.parts.push({type:"node",index:++d})}""===n[r]?(s.insertBefore(l(),t),i.push(t)):t.data=n[r],u+=r}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(l(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(i.push(t),d--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),u++}}else r.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let o=p(s),r=s[o],a=-1,c=0;const l=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&c++;void 0!==r&&r.index===a;)r.index=null!==h?-1:r.index-c,o=p(s,o),r=s[o]}l.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(c(e))return i}return-1};
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
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},v={};
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
class y{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,l=n.nextNode();for(;r<s.length;)if(o=s[r],c(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(i.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=i.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
     */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${s} `;class S{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const a=h.exec(t);e+=null===a?t+(i?b:n):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==w&&(e=w.createHTML(e)),t.innerHTML=e,t}}
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
     */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),$=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class A{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!$(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(x(t)||!$(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||x(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=l()),t.s(this.endNode=l())}insertAfterPart(t){t.s(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.i);){const t=this.i;this.i=g,t(this)}const t=this.i;t!==g&&(x(t)?t!==this.value&&this.o(t):t instanceof S?this.l(t):t instanceof Node?this.h(t):$(t)?this.u(t):t===v?(this.value=v,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}h(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.h(document.createTextNode(i)),this.value=t}l(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const i=new y(e,t.processor,this.options),s=i._clone();i.update(t.values),this.h(s),this.value=i}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new P(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class j{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=g,t(this)}if(this.i===g)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=g}}class M extends A{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new D(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class D extends C{}let _=!1;(()=>{try{const t={get capture(){return _=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class k{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.p=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=g,t(this)}if(this.i===g)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.p,this.m),s&&(this.m=T(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.i=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(_?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function O(t){let e=E.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},E.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(s);return i=e.keyString.get(n),void 0===i&&(i=new r(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const E=new Map,U=new WeakMap;
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
     */const N=new
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
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new M(t,e.slice(1),i).parts}return"@"===n?[new k(t,e.slice(1),s.eventContext)]:"?"===n?[new j(t,e.slice(1),i)]:new A(t,e,i).parts}handleTextExpression(t){return new P(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const R=(t,...e)=>new S(t,e,"html",N)
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
     */,I=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const z=t=>e=>{const i=I(e.type,t);let n=E.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},E.set(i,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(s);if(o=n.keyString.get(a),void 0===o){const i=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(i,t),o=new r(e,i),n.keyString.set(a,o)}return n.stringsArray.set(e.strings,o),o},B=["html","svg"],J=new Set,L=(t,e,i)=>{J.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{B.forEach(e=>{const i=E.get(I(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),d(t,i)})})})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const o=document.createTreeWalker(s,133,null,!1);let r=p(n),a=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===i&&(a=u(e),i.parentNode.insertBefore(e,i));-1!==r&&n[r].index===c;){if(a>0){for(;-1!==r;)n[r].index+=a,r=p(n,r);return}r=p(n,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),d(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const G={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},H=(t,e)=>e!==t&&(e==e||t==t),V={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:H};class q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=V){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||V}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=H){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||G,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||G.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=V){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}q.finalized=!0;
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
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),K=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Q(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):K(t,e)}
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const X=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class Z{constructor(t,e){if(e!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof Z)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new Z(i,Y)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class it extends q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!X){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new Z(String(e),Y)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}it.finalized=!0,it.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,o=U.has(e),r=F&&11===e.nodeType&&!!e.host,a=r&&!J.has(n),c=a?document.createDocumentFragment():e;if(((t,e,s)=>{let n=U.get(e);void 0===n&&(i(e,e.firstChild),U.set(e,n=new P(Object.assign({templateFactory:O},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:z(n)},s)),a){const t=U.get(c);U.delete(c);const s=t.value instanceof y?t.value.template:void 0;L(n,c,s),i(e,e.firstChild),e.appendChild(c),U.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};var st=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let nt=class extends it{constructor(){super(...arguments),this.class="fas fa-coffee"}render(){return R`
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      /><i class=${this.class}></i>
    `}};st([Q({type:String})],nt.prototype,"class",void 0),nt=st([W("fa-icon")],nt);var ot=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let rt=class extends it{constructor(){super(),this.time=new Date(Date.now()),this.getRecentCommit()}getRecentCommit(){fetch("https://api.github.com/repos/navn-r/resume").then(t=>t.json()).then(t=>{this.time=new Date(t.pushed_at)})}render(){return R`
      <div id="header">
        <div id="name">
          <h1>${this.about.firstName} <span id="lastName">${this.about.lastName}</span></h1>
        </div>
        <div id="contact-container">
          <div class="contact">
            <fa-icon class="fas fa-link"></fa-icon>
            <a href="https://${this.about.contact.portfolio}">${this.about.contact.portfolio}</a>
          </div>
          <div class="contact">
            <fa-icon class="fas fa-paper-plane"></fa-icon>
            <a href="mailto:${this.about.contact.email}"
              >${this.about.contact.email}</a
            >
          </div>
          <div class="contact">
            <fa-icon class="fab fa-linkedin"></fa-icon>
            <a href="https://linkedin.com/in/${this.about.contact.linkedIn}"
              >${this.about.contact.linkedIn}</a
            >
          </div>
          <div class="contact">
            <fa-icon class="fab fa-github"></fa-icon>
            <a href="https://github.com/${this.about.contact.github}">${this.about.contact.github}</a>
          </div>
        </div>
      </div>
      <div class="footer">
        <div style="display: flex; align-items: center;">
          <em>Updated: ${this.time.toDateString()}</em>
        </div>
        <div>
          <a href="./RavindaranNavinn_Resume.pdf" target="_blank">
            Download PDF <fa-icon class="fas fa-download"></fa-icon>
          </a>
        </div>
      </div>
    `}};rt.styles=tt`
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

    a {
      text-decoration: none;
      color: var(--accent);
      outline: none;
      border: 0;
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
  `,ot([Q({attribute:!1})],rt.prototype,"time",void 0),ot([Q({type:Object})],rt.prototype,"about",void 0),rt=ot([W("app-header")],rt);
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
const at=new WeakMap,ct=(lt=t=>e=>{if(!(e instanceof P))throw new Error("unsafeHTML can only be used in text bindings");const i=at.get(e);if(void 0!==i&&x(t)&&t===i.value&&e.value===i.fragment)return;const s=document.createElement("template");s.innerHTML=t;const n=document.importNode(s.content,!0);e.setValue(n),at.set(e,{value:t,fragment:n})},(...t)=>{const e=lt(...t);return m.set(e,!0),e});var lt,ht=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let dt=class extends it{constructor(){super(...arguments),this.name="Experience",this.subtitle="summary/degree/position",this.location="",this.time="",this.isProject="",this.repo=""}render(){return R`
      <div class="card">
        <div class="title-container">
          <h3 class="title">${this.name}</h3>
          <h4 class="subtitle">${ct(this.subtitle)}</h4>
          ${this.getInfo()}
          <span class="time">${this.time}</span>
        </div>
        <slot name="body"></slot>
      </div>
    `}getLocationText(){return this.location.includes("play.google.com")?"Google Play":this.location.includes("api")?"Documentation":"Website"}getRepoText(){return this.repo.includes("github.com")?"GitHub":"Repo"}getInfo(){return this.isProject?R`<div class="location">
          (<a href="${this.location}">${this.getLocationText()}</a>)&nbsp;(<a
            href="${this.repo}"
            >${this.getRepoText()}</a
          >)
        </div>`:R`<span class="location">${this.location}</span>`}};dt.styles=tt`
    .card {
      margin: 0 1.625rem;
      color: var(--text);
    }

    .title-container {
      display: grid;
      justify-content: space-between;
      row-gap: 0.25rem;
      grid-template-areas:
        'title location'
        'subtitle time';
    }

    .subtitle {
      margin: 0;
      grid-area: subtitle;
    }

    .title {
      grid-area: title;
      margin: 0;
      font-weight: 600;
      font-size: 1.45rem;
    }

    .time {
      grid-area: time;
      text-align: right;
    }

    .location {
      grid-area: location;
      text-align: right;
      font-size: 1.25rem;
    }

    a {
      text-decoration: none;
      font-weight: 500;
      color: var(--text);
    }
  `,ht([Q({type:String})],dt.prototype,"name",void 0),ht([Q({type:String})],dt.prototype,"subtitle",void 0),ht([Q({type:String})],dt.prototype,"location",void 0),ht([Q({type:String})],dt.prototype,"time",void 0),ht([Q({type:String})],dt.prototype,"isProject",void 0),ht([Q({type:String})],dt.prototype,"repo",void 0),dt=ht([W("experience-card")],dt);var ut={firstName:"Navinn",lastName:"Ravindaran",contact:{portfolio:"navn.me",email:"navinn.ravindaran@mail.utoronto.ca",linkedIn:"navn-r",github:"navn-r"}},pt={Programming:["HTML","CSS","TypeScript","JavaScript","Java","C","Python","Shell","LaTeX"],"Frameworks and Tools":["Angular","React","React Native","Node.js","Express.js","Jira","Git","GitHub Actions","TravisCI","MongoDB","Firebase"],"Development Methodologies":["Agile Scrum","Agile Kanban","Test Driven Development"]},mt=[{school:"University of Toronto",degree:"Honours Bachelor of Science, Computer Science & Statistics Co-op",location:"Toronto, ON",duration:"Sept. 2019 — Apr. 2023 (Expected)",cgpa:"3.78 / 4.00",courses:["Software Design","Intro to Software Engineering","Principles of Programming Languages","Software Tools and Systems Programming"],awards:["Dean's List of Academic Excellence (2019-20)","University of Toronto Scholar ($7500)"]}],ft=[{position:"Software Developer &bull; Co-op",employer:"CaseWare International Inc.",location:"Toronto, ON",duration:"Sept. 2020 — Apr. 2021",info:["Active contributor in an <strong>Agile Scrum</strong> of <strong>11</strong> members, closely collaborating with developers, manual & automation QA and product owners","Facilitated <strong>Daily Standup</strong> meetings using various Sprint, Regression, and On Call <strong>Jira</strong> Boards","Decreased developer & QA regression efforts by <strong>60%</strong> by converting manual tests to unit tests with <strong>Karma/Jasmine</strong> and <strong>TypeScript</strong>",'Developed major features and hot<span class="space">f</span>ixes using <strong>Angular, AngularJS, RxJS</strong> and <strong>NGXS</strong> improving the end-user experience for <strong>60+</strong> international distributors']}],gt=[{name:"UImpactify",date:"Sept. 2020 — Dec. 2020",shortDesc:"Online Learning Platform",repoUrl:"https://github.com/navn-r/uimpactify",demoUrl:"https://uimpactify.herokuapp.com",info:["Developed in an Agile Scrum of <strong>7</strong> members over <strong>4</strong> sprints, specializing in education for the social purpose sector",'Facilitated Daily Standup, Backlog Re<span class="space">f</span>inement, and Software Architecture Design meetings <strong>following best Agile practices<strong>',"Reduced meeting times by <strong>50%</strong> by developing and deploying a <strong>Discord Bot</strong> to supplement Daily Standup meetings"],features:["Course Creation and Enrollment","Recorded Lectures and Graded Assessments","Student Analytics","Course Surveys & Ratings","Realtime Chat","Volunteer & Employment Opportunities and a Community-driven Donation System"],technology:["MongoDB","Express.js","Angular","Node.js","Clarity Design","Socket.io","Chart.js","Multer","GridFS","Figma","Jira"]},{name:"Spotify API Clone",date:"Nov. 2020 — Dec. 2020",shortDesc:"Social-centric Music Player REST API",repoUrl:"https://github.com/navn-r/spotify-api-clone",demoUrl:"https://navn.me/spotify-api-clone",info:[],features:['Creating and following user pro<span class="space">f</span>iles',"Uploading and liking songs","Playlist generation and Querying liked songs from followers"],technology:["Java","Spring Boot","MongoDB","Neo4j","Microservices Architecture"]},{name:"Ritrovo",date:"Sept. 2020",shortDesc:"Full-Stack Social Platform",repoUrl:"https://github.com/navn-r/ritrovo",demoUrl:"https://ritrovo.herokuapp.com",info:["Built a <strong>REST API</strong> and Frontend for creating posts and collaborating with users in a community dashboard with <strong>Hashed Password Authentication</strong>"],technology:["MongoDB","Express.js","Angular","Node.js","bcrypt","Mongoose","Markdown","Heroku"]},{name:"Noten",date:"May 2020",shortDesc:"Cloud Based Grade Management Application",repoUrl:"https://github.com/navn-r/noten",demoUrl:"https://play.google.com/store/apps/details?id=com.noten",info:["Developed using a single codebase, deployable to both <strong>iOS</strong> and <strong>Android</strong>","Implemented a flattened data store, resulting in <strong>4x</strong> fewer database queries on all <strong>CRUD</strong> operations on grades"],features:["Multi-Semester and Course Management","Grade Prediction Calculator","Pass/Fail Courses","Multiple Grade Scales and Incognito Grades (Ignores Grade during GPA calculations)"],technology:["React Native","Firebase Realtime Database","Firebase Authentication with Google OAuth 2.0"]}],vt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};t.Resume=class extends it{render(){return R`
      <app-header .about="${ut}"></app-header>
      <div id="content">
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-graduation-cap"></fa-icon>
            <h2>EDUCATION</h2>
          </div>
          ${mt.map(({school:t,degree:e,location:i,duration:s,cgpa:n,courses:o,awards:r})=>R`
          <experience-card name="${t}" subtitle="${e}" location="${i}" time="${s}">
            <div slot="body" class="body education">
              <strong>Cumulative GPA:</strong> ${ct(n)} <br />
              <strong>Notable Courses:</strong> ${ct(o.join(", "))} <br />
              <strong>Awards:</strong> <em>${ct(r.join(", "))}</em>
            </div>
          </experience-card>
          `)}
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-stream"></fa-icon>
            <h2>SKILLS</h2>
          </div>
          <div id="skills">
            ${Object.keys(pt).map(t=>R`<div class="category"><strong>${t}:</strong> ${ct(pt[t].join(", "))}</div>`)}
          </div>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-briefcase"></fa-icon>
            <h2>EXPERIENCE</h2>
          </div>
          ${ft.map(({position:t,employer:e,location:i,duration:s,info:n})=>R`
          <experience-card name="${e}" subtitle="${t}" location="${i}" time="${s}">
            <div slot="body" class="body">
              <ul>${n.map(t=>R`<li>${ct(t)}</li>`)}</ul>
            </div>
          </experience-card>
          `)}
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-code"></fa-icon>
            <h2>PROJECTS</h2>
          </div>
          ${gt.map(({name:t,date:e,shortDesc:i,repoUrl:s,demoUrl:n,info:o,features:r,technology:a})=>R`
          <experience-card name="${t}" subtitle="${i}" location="${n}" time="${e}" repo="${s}" isProject="true">
            <div slot="body" class="body">
              <ul>
                ${o.map(t=>R`<li>${ct(t)}</li>`)}
                ${!!r&&R`<li><strong>Core features:</strong> ${ct(r.join(", "))}</li></li>`||""}
                <li><strong>Technology:</strong> ${ct(a.join(", "))}</li>
              </ul>
            </div>
          </experience-card>
          `)}
        </div>
      </div>
    `}},t.Resume.styles=tt`
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
      margin-top: 0.75rem;
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
      line-height: 1.35rem;
    }

    .title {
      display: grid;
      color: var(--text);
      grid-template-columns: 2.5rem auto;
      align-items: flex-end;
      border-bottom: 0.25rem var(--primary) solid;
      margin: 1rem 1.625rem;
      padding-bottom: 0.5rem;
    }

    .section {
      display: grid;
      grid-template-rows: auto;
    }

    .body {
      margin-top: 0.625rem;
      font-size: 1.1rem;
    }

    .education {
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }

    .space {
      margin-right: 0.25px;
    }

    ul {
      margin-top: 0;
      margin-bottom: 1.125rem;
      margin-left: -0.5rem;
    }

    #skills {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      row-gap: 0.75rem;
      color: var(--text);
      margin-left: 2rem;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  `,t.Resume=vt([W("app-resume")],t.Resume)}({});

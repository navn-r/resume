!function(t){
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class s{constructor(t,e){if(e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return e&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n=new Map,r=t=>{let e=n.get(t);return void 0===e&&n.set(t,e=new s(t,i)),e},o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return r(i)},a=(t,i)=>{e?t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):i.forEach(e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)})},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>r("string"==typeof t?t:t+""))(e)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var h,c,u,d;const f={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:p};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=g){var s,n;const r=this.constructor.Πp(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:f.toAttribute)(e,i.type);this.Πh=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this.Πh=null}}K(t,e){var i,s,n;const r=this.constructor,o=r.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=r.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:f.fromAttribute;this.Πh=o,this[o]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,e)=>this[e]=t),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,e)=>this.Πj(e,this[e],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var v,b,w,y;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(c=(h=globalThis).reactiveElementPlatformSupport)||void 0===c||c.call(h,{ReactiveElement:m}),(null!==(u=(d=globalThis).reactiveElementVersions)&&void 0!==u?u:d.reactiveElementVersions=[]).push("1.0.0-rc.2");const k=globalThis.trustedTypes,$=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,S="?"+x,_=`<${S}>`,A=document,z=(t="")=>A.createComment(t),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,E=/>/g,R=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,I=/"/g,M=/^(?:script|style|textarea)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),P=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Z=new WeakMap,N=A.createTreeWalker(A,129,null,!1);class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=C;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===C?"!--"===l[1]?o=T:void 0!==l[1]?o=E:void 0!==l[2]?(M.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=R):void 0!==l[3]&&(o=R):o===R?">"===l[0]?(o=null!=n?n:C,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?R:'"'===l[3]?I:O):o===I||o===O?o=R:o===T||o===E?o=C:(o=R,n=void 0);const u=o===R&&t[e+1].startsWith("/>")?" ":"";r+=o===C?i+_:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+x+u):i+x+(-2===h?(s.push(void 0),e):u)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==$?$.createHTML(a):a,s]})(t,e);if(this.el=q.createElement(l,i),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=N.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Q:"@"===e[1]?W:H})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],z()),N.nextNode(),a.push({type:2,index:++n});s.append(t[e],z())}}}else if(8===s.nodeType)if(s.data===S)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)a.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){var n,r,o,a;if(e===P)return e;let l=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const h=j(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l.O)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l.T(t,i,s)),void 0!==s?(null!==(o=(a=i).Σi)&&void 0!==o?o:a.Σi=[])[s]=l:i.Σo=l),void 0!==l&&(e=F(t,l.S(t,e.values),l,s)),e}class B{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);N.currentNode=n;let r=N.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new G(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new K(r,this,t)),this.l.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(r=N.nextNode(),o++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class G{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=F(this,t,e),j(t)?t===U||null==t||""===t?(this.H!==U&&this.R(),this.H=U):t!==this.H&&t!==P&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return D(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(A.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=q.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new B(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new q(t)),e}g(t){D(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new G(this.k(z()),this.k(z()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class H{constructor(t,e,i,s,n){this.type=1,this.H=U,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(U),this.strings=i):this.H=U}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=F(this,t,e,0),r=!j(t)||t!==this.H&&t!==P,r&&(this.H=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=F(this,s[i+o],e,o),a===P&&(a=this.H[o]),r||(r=!j(a)||a!==this.H[o]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+n[o+1]),this.H[o]=a}r&&!s&&this.W(t)}W(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===U?void 0:t}}class Q extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class W extends H{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:U)===P)return;const s=this.H,n=t===U&&s!==U||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==U&&(s===U||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){F(this,t)}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var V,X,Y,tt,et,it;null===(b=(v=globalThis).litHtmlPlatformSupport)||void 0===b||b.call(v,q,G),(null!==(w=(y=globalThis).litHtmlVersions)&&void 0!==w?w:y.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(V=(it=globalThis).litElementVersions)&&void 0!==V?V:it.litElementVersions=[]).push("3.0.0-rc.2");class st extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new G(e.insertBefore(z(),t),t,void 0,i)}return o.I(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return P}}st.finalized=!0,st._$litElement$=!0,null===(Y=(X=globalThis).litElementHydrateSupport)||void 0===Y||Y.call(X,{LitElement:st}),null===(et=(tt=globalThis).litElementPlatformSupport)||void 0===et||et.call(tt,{LitElement:st});
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const nt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */}function at(t){return ot({...t,state:!0,attribute:!1})}var lt={exports:{}};function ht(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}lt.exports={defaults:{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:ht,changeDefaults:function(t){lt.exports.defaults=t}};const ct=/[&<>"']/,ut=/[&<>"']/g,dt=/[<>"']|&(?!#?\w+;)/,ft=/[<>"']|&(?!#?\w+;)/g,pt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gt=t=>pt[t];const mt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function vt(t){return t.replace(mt,(t,e)=>"colon"===(e=e.toLowerCase())?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):"")}const bt=/(^|[^\[])\^/g;const wt=/[^\w:]/g,yt=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const kt={},$t=/^[^:]+:\/*[^/]*$/,xt=/^([^:]+:)[\s\S]*$/,St=/^([^:]+:\/*[^/]*)[\s\S]*$/;function _t(t,e){kt[" "+t]||($t.test(t)?kt[" "+t]=t+"/":kt[" "+t]=At(t,"/",!0));const i=-1===(t=kt[" "+t]).indexOf(":");return"//"===e.substring(0,2)?i?e:t.replace(xt,"$1")+e:"/"===e.charAt(0)?i?e:t.replace(St,"$1")+e:t+e}function At(t,e,i){const s=t.length;if(0===s)return"";let n=0;for(;n<s;){const r=t.charAt(s-n-1);if(r!==e||i){if(r===e||!i)break;n++}else n++}return t.substr(0,s-n)}var zt={escape:function(t,e){if(e){if(ct.test(t))return t.replace(ut,gt)}else if(dt.test(t))return t.replace(ft,gt);return t},unescape:vt,edit:function(t,e){t=t.source||t,e=e||"";const i={replace:(e,s)=>(s=(s=s.source||s).replace(bt,"$1"),t=t.replace(e,s),i),getRegex:()=>new RegExp(t,e)};return i},cleanUrl:function(t,e,i){if(t){let t;try{t=decodeURIComponent(vt(i)).replace(wt,"").toLowerCase()}catch(t){return null}if(0===t.indexOf("javascript:")||0===t.indexOf("vbscript:")||0===t.indexOf("data:"))return null}e&&!yt.test(i)&&(i=_t(e,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch(t){return null}return i},resolveUrl:_t,noopTest:{exec:function(){}},merge:function(t){let e,i,s=1;for(;s<arguments.length;s++)for(i in e=arguments[s],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},splitCells:function(t,e){const i=t.replace(/\|/g,(t,e,i)=>{let s=!1,n=e;for(;--n>=0&&"\\"===i[n];)s=!s;return s?"|":" |"}).split(/ \|/);let s=0;if(i[0].trim()||i.shift(),i[i.length-1].trim()||i.pop(),i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(/\\\|/g,"|");return i},rtrim:At,findClosingBracket:function(t,e){if(-1===t.indexOf(e[1]))return-1;const i=t.length;let s=0,n=0;for(;n<i;n++)if("\\"===t[n])n++;else if(t[n]===e[0])s++;else if(t[n]===e[1]&&(s--,s<0))return n;return-1},checkSanitizeDeprecation:function(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},repeatString:function(t,e){if(e<1)return"";let i="";for(;e>1;)1&e&&(i+=t),e>>=1,t+=t;return i+t}};const{defaults:jt}=lt.exports,{rtrim:Dt,splitCells:Ct,escape:Tt,findClosingBracket:Et}=zt;function Rt(t,e,i,s){const n=e.href,r=e.title?Tt(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");return"!"!==t[0].charAt(0)?(s.state.inLink=!0,{type:"link",raw:i,href:n,title:r,text:o,tokens:s.inlineTokens(o,[])}):{type:"image",raw:i,href:n,title:r,text:Tt(o)}}var Ot=class{constructor(t){this.options=t||jt}space(t){const e=this.rules.block.newline.exec(t);if(e)return e[0].length>1?{type:"space",raw:e[0]}:{raw:"\n"}}code(t){const e=this.rules.block.code.exec(t);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Dt(t,"\n")}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const t=e[0],i=function(t,e){const i=t.match(/^(\s+)(?:```)/);if(null===i)return e;const s=i[1];return e.split("\n").map(t=>{const e=t.match(/^\s+/);if(null===e)return t;const[i]=e;return i.length>=s.length?t.slice(s.length):t}).join("\n")}(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim():e[2],text:i}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let t=e[2].trim();if(/#$/.test(t)){const e=Dt(t,"#");this.options.pedantic?t=e.trim():e&&!/ $/.test(e)||(t=e.trim())}const i={type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const t=e[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:e[0],tokens:this.lexer.blockTokens(t,[]),text:t}}}list(t){let e=this.rules.block.list.exec(t);if(e){let i,s,n,r,o,a,l,h,c,u,d=e[1].trim();const f=d.length>1,p={type:"list",raw:"",ordered:f,start:f?+d.slice(0,-1):"",loose:!1,items:[]};d=f?"\\d{1,9}\\"+d.slice(-1):"\\"+d,this.options.pedantic&&(d=f?d:"[*+-]");const g=new RegExp(`^( {0,3}${d})((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))`);for(;t&&!this.rules.block.hr.test(t)&&(e=g.exec(t));){c=e[2].split("\n"),this.options.pedantic?(r=2,u=c[0].trimLeft()):(r=e[2].search(/[^ ]/),r=e[1].length+(r>4?1:r),u=c[0].slice(r-e[1].length)),a=!1,i=e[0],!c[0]&&/^ *$/.test(c[1])&&(i=e[1]+c.slice(0,2).join("\n")+"\n",p.loose=!0,c=[]);const d=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(o=1;o<c.length;o++){if(h=c[o],this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),d.test(h)){i=e[1]+c.slice(0,o).join("\n")+"\n";break}if(a){if(!(h.search(/[^ ]/)>=r)&&h.trim()){i=e[1]+c.slice(0,o).join("\n")+"\n";break}u+="\n"+h.slice(r)}else h.trim()||(a=!0),h.search(/[^ ]/)>=r?u+="\n"+h.slice(r):u+="\n"+h}p.loose||(l?p.loose=!0:/\n *\n *$/.test(i)&&(l=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(u),s&&(n="[ ] "!==s[0],u=u.replace(/^\[[ xX]\] +/,""))),p.items.push({type:"list_item",raw:i,task:!!s,checked:n,loose:!1,text:u}),p.raw+=i,t=t.slice(i.length)}p.items[p.items.length-1].raw=i.trimRight(),p.items[p.items.length-1].text=u.trimRight(),p.raw=p.raw.trimRight();const m=p.items.length;for(o=0;o<m;o++)this.lexer.state.top=!1,p.items[o].tokens=this.lexer.blockTokens(p.items[o].text,[]),p.items[o].tokens.some(t=>"space"===t.type)&&(p.loose=!0,p.items[o].loose=!0);return p}}html(t){const e=this.rules.block.html.exec(t);if(e){const t={type:"html",raw:e[0],pre:!this.options.sanitizer&&("pre"===e[1]||"script"===e[1]||"style"===e[1]),text:e[0]};return this.options.sanitize&&(t.type="paragraph",t.text=this.options.sanitizer?this.options.sanitizer(e[0]):Tt(e[0]),t.tokens=[],this.lexer.inline(t.text,t.tokens)),t}}def(t){const e=this.rules.block.def.exec(t);if(e){e[3]&&(e[3]=e[3].substring(1,e[3].length-1));return{type:"def",tag:e[1].toLowerCase().replace(/\s+/g," "),raw:e[0],href:e[2],title:e[3]}}}table(t){const e=this.rules.block.table.exec(t);if(e){const t={type:"table",header:Ct(e[1]).map(t=>({text:t})),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]?e[3].replace(/\n$/,"").split("\n"):[]};if(t.header.length===t.align.length){t.raw=e[0];let i,s,n,r,o=t.align.length;for(i=0;i<o;i++)/^ *-+: *$/.test(t.align[i])?t.align[i]="right":/^ *:-+: *$/.test(t.align[i])?t.align[i]="center":/^ *:-+ *$/.test(t.align[i])?t.align[i]="left":t.align[i]=null;for(o=t.rows.length,i=0;i<o;i++)t.rows[i]=Ct(t.rows[i],t.header.length).map(t=>({text:t}));for(o=t.header.length,s=0;s<o;s++)t.header[s].tokens=[],this.lexer.inlineTokens(t.header[s].text,t.header[s].tokens);for(o=t.rows.length,s=0;s<o;s++)for(r=t.rows[s],n=0;n<r.length;n++)r[n].tokens=[],this.lexer.inlineTokens(r[n].text,r[n].tokens);return t}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e){const t={type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const t={type:"paragraph",raw:e[0],text:"\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}text(t){const e=this.rules.block.text.exec(t);if(e){const t={type:"text",raw:e[0],text:e[0],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:Tt(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):Tt(e[0]):e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const e=Dt(t.slice(0,-1),"\\");if((t.length-e.length)%2==0)return}else{const t=Et(e[2],"()");if(t>-1){const i=(0===e[0].indexOf("!")?5:4)+e[1].length+t;e[2]=e[2].substring(0,t),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let i=e[2],s="";if(this.options.pedantic){const t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);t&&(i=t[1],s=t[3])}else s=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(t)?i.slice(1):i.slice(1,-1)),Rt(e,{href:i?i.replace(this.rules.inline._escapes,"$1"):i,title:s?s.replace(this.rules.inline._escapes,"$1"):s},e[0],this.lexer)}}reflink(t,e){let i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){let t=(i[2]||i[1]).replace(/\s+/g," ");if(t=e[t.toLowerCase()],!t||!t.href){const t=i[0].charAt(0);return{type:"text",raw:t,text:t}}return Rt(i,t,i[0],this.lexer)}}emStrong(t,e,i=""){let s=this.rules.inline.emStrong.lDelim.exec(t);if(!s)return;if(s[3]&&i.match(/[\p{L}\p{N}]/u))return;const n=s[1]||s[2]||"";if(!n||n&&(""===i||this.rules.inline.punctuation.exec(i))){const i=s[0].length-1;let n,r,o=i,a=0;const l="*"===s[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,e=e.slice(-1*t.length+i);null!=(s=l.exec(e));){if(n=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!n)continue;if(r=n.length,s[3]||s[4]){o+=r;continue}if((s[5]||s[6])&&i%3&&!((i+r)%3)){a+=r;continue}if(o-=r,o>0)continue;if(r=Math.min(r,r+o+a),Math.min(i,r)%2){const e=t.slice(1,i+s.index+r);return{type:"em",raw:t.slice(0,i+s.index+r+1),text:e,tokens:this.lexer.inlineTokens(e,[])}}const e=t.slice(2,i+s.index+r-1);return{type:"strong",raw:t.slice(0,i+s.index+r+1),text:e,tokens:this.lexer.inlineTokens(e,[])}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let t=e[2].replace(/\n/g," ");const i=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return i&&s&&(t=t.substring(1,t.length-1)),t=Tt(t,!0),{type:"codespan",raw:e[0],text:t}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2],[])}}autolink(t,e){const i=this.rules.inline.autolink.exec(t);if(i){let t,s;return"@"===i[2]?(t=Tt(this.options.mangle?e(i[1]):i[1]),s="mailto:"+t):(t=Tt(i[1]),s=t),{type:"link",raw:i[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(t,e){let i;if(i=this.rules.inline.url.exec(t)){let t,s;if("@"===i[2])t=Tt(this.options.mangle?e(i[0]):i[0]),s="mailto:"+t;else{let e;do{e=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0]}while(e!==i[0]);t=Tt(i[0]),s="www."===i[1]?"http://"+t:t}return{type:"link",raw:i[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(t,e){const i=this.rules.inline.text.exec(t);if(i){let t;return t=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Tt(i[0]):i[0]:Tt(this.options.smartypants?e(i[0]):i[0]),{type:"text",raw:i[0],text:t}}}};const{noopTest:It,edit:Mt,merge:Lt}=zt,Pt={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:It,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Pt.def=Mt(Pt.def).replace("label",Pt._label).replace("title",Pt._title).getRegex(),Pt.bullet=/(?:[*+-]|\d{1,9}[.)])/,Pt.listItemStart=Mt(/^( *)(bull) */).replace("bull",Pt.bullet).getRegex(),Pt.list=Mt(Pt.list).replace(/bull/g,Pt.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Pt.def.source+")").getRegex(),Pt._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Pt._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Pt.html=Mt(Pt.html,"i").replace("comment",Pt._comment).replace("tag",Pt._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Pt.paragraph=Mt(Pt._paragraph).replace("hr",Pt.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Pt._tag).getRegex(),Pt.blockquote=Mt(Pt.blockquote).replace("paragraph",Pt.paragraph).getRegex(),Pt.normal=Lt({},Pt),Pt.gfm=Lt({},Pt.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)\\|?(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Pt.gfm.table=Mt(Pt.gfm.table).replace("hr",Pt.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Pt._tag).getRegex(),Pt.pedantic=Lt({},Pt.normal,{html:Mt("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Pt._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:It,paragraph:Mt(Pt.normal._paragraph).replace("hr",Pt.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Pt.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const Ut={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:It,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:It,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};Ut.punctuation=Mt(Ut.punctuation).replace(/punctuation/g,Ut._punctuation).getRegex(),Ut.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,Ut.escapedEmSt=/\\\*|\\_/g,Ut._comment=Mt(Pt._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),Ut.emStrong.lDelim=Mt(Ut.emStrong.lDelim).replace(/punct/g,Ut._punctuation).getRegex(),Ut.emStrong.rDelimAst=Mt(Ut.emStrong.rDelimAst,"g").replace(/punct/g,Ut._punctuation).getRegex(),Ut.emStrong.rDelimUnd=Mt(Ut.emStrong.rDelimUnd,"g").replace(/punct/g,Ut._punctuation).getRegex(),Ut._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Ut._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Ut._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Ut.autolink=Mt(Ut.autolink).replace("scheme",Ut._scheme).replace("email",Ut._email).getRegex(),Ut._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Ut.tag=Mt(Ut.tag).replace("comment",Ut._comment).replace("attribute",Ut._attribute).getRegex(),Ut._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ut._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Ut._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Ut.link=Mt(Ut.link).replace("label",Ut._label).replace("href",Ut._href).replace("title",Ut._title).getRegex(),Ut.reflink=Mt(Ut.reflink).replace("label",Ut._label).getRegex(),Ut.reflinkSearch=Mt(Ut.reflinkSearch,"g").replace("reflink",Ut.reflink).replace("nolink",Ut.nolink).getRegex(),Ut.normal=Lt({},Ut),Ut.pedantic=Lt({},Ut.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Mt(/^!?\[(label)\]\((.*?)\)/).replace("label",Ut._label).getRegex(),reflink:Mt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ut._label).getRegex()}),Ut.gfm=Lt({},Ut.normal,{escape:Mt(Ut.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),Ut.gfm.url=Mt(Ut.gfm.url,"i").replace("email",Ut.gfm._extended_email).getRegex(),Ut.breaks=Lt({},Ut.gfm,{br:Mt(Ut.br).replace("{2,}","*").getRegex(),text:Mt(Ut.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var Zt={block:Pt,inline:Ut};const Nt=Ot,{defaults:qt}=lt.exports,{block:Ft,inline:Bt}=Zt,{repeatString:Gt}=zt;function Ht(t){return t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Jt(t){let e,i,s="";const n=t.length;for(e=0;e<n;e++)i=t.charCodeAt(e),Math.random()>.5&&(i="x"+i.toString(16)),s+="&#"+i+";";return s}const{defaults:Qt}=lt.exports,{cleanUrl:Wt,escape:Kt}=zt;var Vt=class{constructor(t){this.options=t||Qt}code(t,e,i){const s=(e||"").match(/\S*/)[0];if(this.options.highlight){const e=this.options.highlight(t,s);null!=e&&e!==t&&(i=!0,t=e)}return t=t.replace(/\n$/,"")+"\n",s?'<pre><code class="'+this.options.langPrefix+Kt(s,!0)+'">'+(i?t:Kt(t,!0))+"</code></pre>\n":"<pre><code>"+(i?t:Kt(t,!0))+"</code></pre>\n"}blockquote(t){return"<blockquote>\n"+t+"</blockquote>\n"}html(t){return t}heading(t,e,i,s){return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+s.slug(i)+'">'+t+"</h"+e+">\n":"<h"+e+">"+t+"</h"+e+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(t,e,i){const s=e?"ol":"ul";return"<"+s+(e&&1!==i?' start="'+i+'"':"")+">\n"+t+"</"+s+">\n"}listitem(t){return"<li>"+t+"</li>\n"}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return"<p>"+t+"</p>\n"}table(t,e){return e&&(e="<tbody>"+e+"</tbody>"),"<table>\n<thead>\n"+t+"</thead>\n"+e+"</table>\n"}tablerow(t){return"<tr>\n"+t+"</tr>\n"}tablecell(t,e){const i=e.header?"th":"td";return(e.align?"<"+i+' align="'+e.align+'">':"<"+i+">")+t+"</"+i+">\n"}strong(t){return"<strong>"+t+"</strong>"}em(t){return"<em>"+t+"</em>"}codespan(t){return"<code>"+t+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return"<del>"+t+"</del>"}link(t,e,i){if(null===(t=Wt(this.options.sanitize,this.options.baseUrl,t)))return i;let s='<a href="'+Kt(t)+'"';return e&&(s+=' title="'+e+'"'),s+=">"+i+"</a>",s}image(t,e,i){if(null===(t=Wt(this.options.sanitize,this.options.baseUrl,t)))return i;let s='<img src="'+t+'" alt="'+i+'"';return e&&(s+=' title="'+e+'"'),s+=this.options.xhtml?"/>":">",s}text(t){return t}},Xt=class{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,i){return""+i}image(t,e,i){return""+i}br(){return""}},Yt=class{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let i=t,s=0;if(this.seen.hasOwnProperty(i)){s=this.seen[t];do{s++,i=t+"-"+s}while(this.seen.hasOwnProperty(i))}return e||(this.seen[t]=s,this.seen[i]=0),i}slug(t,e={}){const i=this.serialize(t);return this.getNextSafeSlug(i,e.dryrun)}};const te=Vt,ee=Xt,ie=Yt,{defaults:se}=lt.exports,{unescape:ne}=zt;const re=class t{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||qt,this.options.tokenizer=this.options.tokenizer||new Nt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:Ft.normal,inline:Bt.normal};this.options.pedantic?(e.block=Ft.pedantic,e.inline=Bt.pedantic):this.options.gfm&&(e.block=Ft.gfm,this.options.breaks?e.inline=Bt.breaks:e.inline=Bt.gfm),this.tokenizer.rules=e}static get rules(){return{block:Ft,inline:Bt}}static lex(e,i){return new t(i).lex(e)}static lexInline(e,i){return new t(i).inlineTokens(e)}lex(t){let e;for(t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(t,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){let i,s,n,r;for(this.options.pedantic&&(t=t.replace(/^ +$/gm,""));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>!!(i=s.call({lexer:this},t,e))&&(t=t.substring(i.raw.length),e.push(i),!0))))if(i=this.tokenizer.space(t))t=t.substring(i.raw.length),i.type&&e.push(i);else if(i=this.tokenizer.code(t))t=t.substring(i.raw.length),s=e[e.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?e.push(i):(s.raw+="\n"+i.raw,s.text+="\n"+i.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(i=this.tokenizer.fences(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.heading(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.hr(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.blockquote(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.list(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.html(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.def(t))t=t.substring(i.raw.length),s=e[e.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(s.raw+="\n"+i.raw,s.text+="\n"+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(i=this.tokenizer.table(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.lheading(t))t=t.substring(i.raw.length),e.push(i);else{if(n=t,this.options.extensions&&this.options.extensions.startBlock){let e=1/0;const i=t.slice(1);let s;this.options.extensions.startBlock.forEach((function(t){s=t.call({lexer:this},i),"number"==typeof s&&s>=0&&(e=Math.min(e,s))})),e<1/0&&e>=0&&(n=t.substring(0,e+1))}if(this.state.top&&(i=this.tokenizer.paragraph(n)))s=e[e.length-1],r&&"paragraph"===s.type?(s.raw+="\n"+i.raw,s.text+="\n"+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(i),r=n.length!==t.length,t=t.substring(i.raw.length);else if(i=this.tokenizer.text(t))t=t.substring(i.raw.length),s=e[e.length-1],s&&"text"===s.type?(s.raw+="\n"+i.raw,s.text+="\n"+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(i);else if(t){const e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}return this.state.top=!0,e}inline(t,e){this.inlineQueue.push({src:t,tokens:e})}inlineTokens(t,e=[]){let i,s,n,r,o,a,l=t;if(this.tokens.links){const t=Object.keys(this.tokens.links);if(t.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(l));)t.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,r.index)+"["+Gt("a",r[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,r.index)+"["+Gt("a",r[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,r.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(o||(a=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(s=>!!(i=s.call({lexer:this},t,e))&&(t=t.substring(i.raw.length),e.push(i),!0))))if(i=this.tokenizer.escape(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.tag(t))t=t.substring(i.raw.length),s=e[e.length-1],s&&"text"===i.type&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):e.push(i);else if(i=this.tokenizer.link(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(i.raw.length),s=e[e.length-1],s&&"text"===i.type&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):e.push(i);else if(i=this.tokenizer.emStrong(t,l,a))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.codespan(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.br(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.del(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.autolink(t,Jt))t=t.substring(i.raw.length),e.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(t,Jt))){if(n=t,this.options.extensions&&this.options.extensions.startInline){let e=1/0;const i=t.slice(1);let s;this.options.extensions.startInline.forEach((function(t){s=t.call({lexer:this},i),"number"==typeof s&&s>=0&&(e=Math.min(e,s))})),e<1/0&&e>=0&&(n=t.substring(0,e+1))}if(i=this.tokenizer.inlineText(n,Ht))t=t.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(a=i.raw.slice(-1)),o=!0,s=e[e.length-1],s&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):e.push(i);else if(t){const e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}else t=t.substring(i.raw.length),e.push(i);return e}},oe=class t{constructor(t){this.options=t||se,this.options.renderer=this.options.renderer||new te,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ee,this.slugger=new ie}static parse(e,i){return new t(i).parse(e)}static parseInline(e,i){return new t(i).parseInline(e)}parse(t,e=!0){let i,s,n,r,o,a,l,h,c,u,d,f,p,g,m,v,b,w,y,k="";const $=t.length;for(i=0;i<$;i++)if(u=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(y=this.options.extensions.renderers[u.type].call({parser:this},u),!1!==y||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))k+=y||"";else switch(u.type){case"space":continue;case"hr":k+=this.renderer.hr();continue;case"heading":k+=this.renderer.heading(this.parseInline(u.tokens),u.depth,ne(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":k+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(h="",l="",r=u.header.length,s=0;s<r;s++)l+=this.renderer.tablecell(this.parseInline(u.header[s].tokens),{header:!0,align:u.align[s]});for(h+=this.renderer.tablerow(l),c="",r=u.rows.length,s=0;s<r;s++){for(a=u.rows[s],l="",o=a.length,n=0;n<o;n++)l+=this.renderer.tablecell(this.parseInline(a[n].tokens),{header:!1,align:u.align[n]});c+=this.renderer.tablerow(l)}k+=this.renderer.table(h,c);continue;case"blockquote":c=this.parse(u.tokens),k+=this.renderer.blockquote(c);continue;case"list":for(d=u.ordered,f=u.start,p=u.loose,r=u.items.length,c="",s=0;s<r;s++)m=u.items[s],v=m.checked,b=m.task,g="",m.task&&(w=this.renderer.checkbox(v),p?m.tokens.length>0&&"paragraph"===m.tokens[0].type?(m.tokens[0].text=w+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&"text"===m.tokens[0].tokens[0].type&&(m.tokens[0].tokens[0].text=w+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:w}):g+=w),g+=this.parse(m.tokens,p),c+=this.renderer.listitem(g,b,v);k+=this.renderer.list(c,d,f);continue;case"html":k+=this.renderer.html(u.text);continue;case"paragraph":k+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(c=u.tokens?this.parseInline(u.tokens):u.text;i+1<$&&"text"===t[i+1].type;)u=t[++i],c+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);k+=e?this.renderer.paragraph(c):c;continue;default:{const t='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(t);throw new Error(t)}}return k}parseInline(t,e){e=e||this.renderer;let i,s,n,r="";const o=t.length;for(i=0;i<o;i++)if(s=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(n=this.options.extensions.renderers[s.type].call({parser:this},s),!1!==n||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)))r+=n||"";else switch(s.type){case"escape":r+=e.text(s.text);break;case"html":r+=e.html(s.text);break;case"link":r+=e.link(s.href,s.title,this.parseInline(s.tokens,e));break;case"image":r+=e.image(s.href,s.title,s.text);break;case"strong":r+=e.strong(this.parseInline(s.tokens,e));break;case"em":r+=e.em(this.parseInline(s.tokens,e));break;case"codespan":r+=e.codespan(s.text);break;case"br":r+=e.br();break;case"del":r+=e.del(this.parseInline(s.tokens,e));break;case"text":r+=e.text(s.text);break;default:{const t='Token with "'+s.type+'" type was not found.';if(this.options.silent)return void console.error(t);throw new Error(t)}}return r}},ae=Ot,le=Vt,he=Xt,ce=Yt,{merge:ue,checkSanitizeDeprecation:de,escape:fe}=zt,{getDefaults:pe,changeDefaults:ge,defaults:me}=lt.exports;function ve(t,e,i){if(null==t)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof t)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if("function"==typeof e&&(i=e,e=null),e=ue({},ve.defaults,e||{}),de(e),i){const s=e.highlight;let n;try{n=re.lex(t,e)}catch(t){return i(t)}const r=function(t){let r;if(!t)try{e.walkTokens&&ve.walkTokens(n,e.walkTokens),r=oe.parse(n,e)}catch(e){t=e}return e.highlight=s,t?i(t):i(null,r)};if(!s||s.length<3)return r();if(delete e.highlight,!n.length)return r();let o=0;return ve.walkTokens(n,(function(t){"code"===t.type&&(o++,setTimeout(()=>{s(t.text,t.lang,(function(e,i){if(e)return r(e);null!=i&&i!==t.text&&(t.text=i,t.escaped=!0),o--,0===o&&r()}))},0))})),void(0===o&&r())}try{const i=re.lex(t,e);return e.walkTokens&&ve.walkTokens(i,e.walkTokens),oe.parse(i,e)}catch(t){if(t.message+="\nPlease report this to https://github.com/markedjs/marked.",e.silent)return"<p>An error occurred:</p><pre>"+fe(t.message+"",!0)+"</pre>";throw t}}ve.options=ve.setOptions=function(t){return ue(ve.defaults,t),ge(ve.defaults),ve},ve.getDefaults=pe,ve.defaults=me,ve.use=function(...t){const e=ue({},...t),i=ve.defaults.extensions||{renderers:{},childTokens:{}};let s;t.forEach(t=>{if(t.extensions&&(s=!0,t.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if(t.renderer){const e=i.renderers?i.renderers[t.name]:null;i.renderers[t.name]=e?function(...i){let s=t.renderer.apply(this,i);return!1===s&&(s=e.apply(this,i)),s}:t.renderer}if(t.tokenizer){if(!t.level||"block"!==t.level&&"inline"!==t.level)throw new Error("extension level must be 'block' or 'inline'");i[t.level]?i[t.level].unshift(t.tokenizer):i[t.level]=[t.tokenizer],t.start&&("block"===t.level?i.startBlock?i.startBlock.push(t.start):i.startBlock=[t.start]:"inline"===t.level&&(i.startInline?i.startInline.push(t.start):i.startInline=[t.start]))}t.childTokens&&(i.childTokens[t.name]=t.childTokens)})),t.renderer){const i=ve.defaults.renderer||new le;for(const e in t.renderer){const s=i[e];i[e]=(...n)=>{let r=t.renderer[e].apply(i,n);return!1===r&&(r=s.apply(i,n)),r}}e.renderer=i}if(t.tokenizer){const i=ve.defaults.tokenizer||new ae;for(const e in t.tokenizer){const s=i[e];i[e]=(...n)=>{let r=t.tokenizer[e].apply(i,n);return!1===r&&(r=s.apply(i,n)),r}}e.tokenizer=i}if(t.walkTokens){const i=ve.defaults.walkTokens;e.walkTokens=e=>{t.walkTokens.call(this,e),i&&i(e)}}s&&(e.extensions=i),ve.setOptions(e)})},ve.walkTokens=function(t,e){for(const i of t)switch(e(i),i.type){case"table":for(const t of i.header)ve.walkTokens(t.tokens,e);for(const t of i.rows)for(const i of t)ve.walkTokens(i.tokens,e);break;case"list":ve.walkTokens(i.items,e);break;default:ve.defaults.extensions&&ve.defaults.extensions.childTokens&&ve.defaults.extensions.childTokens[i.type]?ve.defaults.extensions.childTokens[i.type].forEach((function(t){ve.walkTokens(i[t],e)})):i.tokens&&ve.walkTokens(i.tokens,e)}},ve.parseInline=function(t,e){if(null==t)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof t)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=ue({},ve.defaults,e||{}),de(e);try{const i=re.lexInline(t,e);return e.walkTokens&&ve.walkTokens(i,e.walkTokens),oe.parseInline(i,e)}catch(t){if(t.message+="\nPlease report this to https://github.com/markedjs/marked.",e.silent)return"<p>An error occurred:</p><pre>"+fe(t.message+"",!0)+"</pre>";throw t}},ve.Parser=oe,ve.parser=oe.parse,ve.Renderer=le,ve.TextRenderer=he,ve.Lexer=re,ve.lexer=re.lex,ve.Tokenizer=ae,ve.Slugger=ce,ve.parse=ve;var be=ve;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const we=2;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
class ye extends class{constructor(t){}T(t,e,i){this.Σdt=t,this.M=e,this.Σct=i}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.vt=U,t.type!==we)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U)return this.Vt=void 0,this.vt=t;if(t===P)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.vt)return this.Vt;this.vt=t;const e=[t];return e.raw=e,this.Vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ye.directiveName="unsafeHTML",ye.resultType=1;const ke=(t=>(...e)=>({_$litDirective$:t,values:e}))(ye),$e=t=>ke(t.replace(/fi/g,'<span style="margin-right: 0.25px">f</span>i').replace(/(\*\*|__)(.*?)\1/gim,"<strong>$2</strong>")),xe=(t,e={month:"short",year:"numeric"})=>new Date(t).toLocaleString("default",e),Se=o`
  .card {
    margin-bottom: 1.375rem;
  }

  @media screen {
    a:hover {
      background: rgba(255, 255, 0, 0.2) !important;
      box-shadow: 0px 2px 10px rgba(255, 255, 0, 0.2) !important;
    }
  }
`,_e=o`
  .title-container {
    display: grid;
    justify-content: space-between;
    row-gap: 0.25rem;
    grid-template-areas:
      'title location'
      'subtitle time';
    margin-bottom: 0.5rem;
  }

  .title-container a:first-child {
    font-family: var(--title);
    font-size: 1.25rem;
    font-weight: 600;
    grid-area: title;
  }

  a {
    text-decoration: none;
    outline: none;
    border: 0;
    color: var(--text);
  }

  h4 {
    font-family: var(--main);
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 1rem;
  }

  .title-container h4:first-child {
    grid-area: subtitle;
  }

  .title-container h4:nth-child(3) {
    grid-area: location;
    text-align: right;
    font-size: 1.25rem;
  }
`,Ae=o`
  p,
  ul {
    margin: 0;
    padding: 0;
    font-size: 1.0625rem;
  }

  ul {
    padding-left: 1.375rem;
    line-height: 1.25rem;
  }

  li:not(:first-child) {
    margin: 0.25rem 0;
  }

  li::marker {
    font-size: 0.825rem;
  }
`;var ze=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let je=class extends st{render(){return L`
      <div class="card">
        <div class="title-container">
          <a href="${this.education.url}">${this.education.institution}</a>
          <h4>${this.education.studyType}, ${this.education.area}</h4>
          <h4>${this.education.location}</h4>
          <h4>
            ${xe(this.education.startDate)} —
            ${xe(this.education.endDate)} (Expected)
          </h4>
        </div>
        <div class="body">
          <p><strong>Cumulative GPA:</strong> ${this.education.score}</p>
          <p>
            <strong>Notable Courses:</strong> ${$e(this.education.courses.join(", "))}
          </p>
          <p>
            <strong>Awards:</strong>
            <em>${this.education.awards.join(", ")}</em>
          </p>
        </div>
      </div>
    `}};je.styles=[Se,_e,Ae,o`
      .body {
        display: grid;
        grid-template-rows: auto;
        row-gap: 0.375rem;
      }

      .body p {
        margin: 0;
        padding: 0;
      }
    `],ze([ot({type:Object})],je.prototype,"education",void 0),je=ze([nt("education-card")],je);var De=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ce=class extends st{constructor(){super(...arguments),this.class="fas fa-coffee"}render(){return L`
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      /><i class=${this.class}></i>
    `}};De([ot({type:String})],Ce.prototype,"class",void 0),Ce=De([nt("fa-icon")],Ce);var Te=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ee=class extends st{constructor(){super(),this.hideFooter=!1,this.time=new Date(Date.now()),"localhost"!==window.location.hostname&&this._getRecentCommit()}async _getRecentCommit(){const[{commit:{author:{date:t}}}]=await fetch("https://api.github.com/repos/navn-r/resume/commits?per_page=1&path=src/resume.json").then(t=>t.json());this.time=new Date(t)}_getIcon(t){var e;return null!==(e={GitHub:"fab fa-github",LinkedIn:"fab fa-linkedin"}[t])&&void 0!==e?e:"fas-fa-link"}_renderFooter(){return this.hideFooter?null:L`
      <div class="footer">
        <em>Last Updated: ${this.time.toDateString()}</em>
        <a href="./RavindaranNavinn_Resume.pdf" target="_blank">
          Download PDF <fa-icon class="fas fa-download"></fa-icon>
        </a>
      </div>
    `}render(){return L`
      <div id="header">
        <h1 id="name">${this.basics.name}</h1>
        <div id="contact-container">
          <div class="contact">
            <fa-icon class="fas fa-map-marker-alt"></fa-icon>
            ${Object.values(this.basics.location).join(", ")}
          </div>
          <div class="contact">
            <fa-icon class="fas fa-paper-plane"></fa-icon>
            <a href="mailto:${this.basics.email}">${this.basics.email}</a>
          </div>
          <div id="lower-row">
            <div class="contact">
              <fa-icon class="fas fa-link"></fa-icon>
              <a href="${this.basics.url}"
                >${this.basics.url.replace("https://","")}</a
              >
            </div>
            ${this.basics.profiles.map(({network:t,url:e,username:i})=>L`
                <div class="contact">
                  <fa-icon class="${this._getIcon(t)}"></fa-icon>
                  <a href="${e}">${i}</a>
                </div>
              `)}
          </div>
        </div>
      </div>
      ${this._renderFooter()}
    `}};Ee.styles=o`
    #header {
      display: grid;
      background-color: var(--gray);
      color: var(--bg);
      display: grid;
      grid-template-columns: 2fr 1fr;
      padding: 2.5rem;
    }

    fa-icon {
      font-size: 1.25rem;
      text-align: right;
    }

    #name {
      font-family: var(--title);
      font-size: 3.5rem;
      margin: auto 0;
      text-align: center;
      font-weight: 600;
    }

    #contact-container {
      display: grid;
      row-gap: 1rem;
      max-width: 20rem;
    }

    #lower-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .contact {
      display: grid;
      grid-template-columns: 2rem auto;
      align-items: center;
      column-gap: 0.5rem;
    }

    #lower-row .contact {
      justify-content: center;
    }

    a {
      text-decoration: none;
      outline: none;
      border: 0;
      color: var(--off-white);
    }

    .contact a {
      color: var(--bg);
    }

    .footer {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: var(--dark-gray);
      color: var(--off-white);
      padding: 1rem 0;
      font-family: var(--main);
    }

    .footer fa-icon {
      font-size: 1rem;
    }

    @media print {
      .footer {
        display: none;
      }
    }

    @media screen {
      #contact-container a:hover {
        background: rgba(255, 255, 0, 0.2) !important;
        box-shadow: 0px 2px 10px rgba(255, 255, 0, 0.2) !important;
      }
    }
  `,Te([ot({type:Boolean})],Ee.prototype,"hideFooter",void 0),Te([at()],Ee.prototype,"time",void 0),Te([ot({type:Object})],Ee.prototype,"basics",void 0),Ee=Te([nt("app-header")],Ee);var Re=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Oe=class extends st{render(){return L`
      <div class="card">
        <div class="title-container">
          <p>
            <strong>${this.project.name}</strong> —
            ${$e(this.project.description)}
          </p>
          ${this.project.repo&&this.project.url?L`
                <p>
                  <a href="${this.project.url}"
                    >(<strong>${this.project.type}</strong>)</a
                  >
                  <a href="${this.project.repo}">(<strong>GitHub</strong>)</a>
                </p>
              `:L``}
        </div>
        <ul>
          ${this.project.highlights.map(t=>L`<li>${$e(t)}</li>`)}
          ${this.project.features?L`<li>
                <strong>Core Features:</strong> ${$e(this.project.features.join(", "))}
              </li>`:""}
          <li>
            <strong>Technology:</strong> ${$e(this.project.technology.join(", "))}
          </li>
        </ul>
      </div>
    `}};Oe.styles=[Se,Ae,o`
      .title-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }

      .title-container * {
        font-size: 1.125rem;
      }

      .title-container > p > strong:first-of-type {
        font-size: 1.25rem;
        font-family: var(--title);
        font-weight: 600;
      }

      a {
        border: 0;
        outline: none;
        text-decoration: none;
        color: var(--text);
      }

      a strong {
        font-weight: 500;
      }
    `],Re([ot({type:Object})],Oe.prototype,"project",void 0),Oe=Re([nt("project-card")],Oe);var Ie=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Me=class extends st{render(){return L`
      <div class="skills-card">
        ${this.skills.map(t=>L`
            <p>
              <strong>${t.name}:</strong> ${$e(t.keywords.join(", "))}
            </p>
          `)}
      </div>
    `}};Me.styles=[Ae,o`
      .skills-card {
        display: grid;
        grid-template-rows: auto;
        row-gap: 0.5rem;
      }
    `],Ie([ot({type:Array})],Me.prototype,"skills",void 0),Me=Ie([nt("skills-card")],Me);var Le=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Pe=class extends st{render(){return L`
      <div class="card">
        <div class="title-container">
          <a href="${this.work.url}">${this.work.name}</a>
          <h4>${this.work.position}</h4>
          <h4>${this.work.location}</h4>
          <h4>
            ${xe(this.work.startDate)} —
            ${xe(this.work.endDate)}
          </h4>
        </div>
        <ul class="body">
          ${this.work.highlights.map(t=>L`<li>${$e(t)}</li>`)}
        </ul>
      </div>
    `}};Pe.styles=[Se,_e,Ae],Le([ot({type:Object})],Pe.prototype,"work",void 0),Pe=Le([nt("work-card")],Pe);var Ue="https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",Ze={name:"Navinn Ravindaran",label:"Developer, Learner",email:"navinn.ravindaran@mail.utoronto.ca",url:"https://navn.me",location:{city:"Toronto",region:"Ontario",countryCode:"CA"},profiles:[{network:"GitHub",username:"navn-r",url:"https://github.com/navn-r"},{network:"LinkedIn",username:"navn-r",url:"https://www.linkedin.com/in/navn-r"}]},Ne=[{name:"Major League Hacking",location:"Remote",position:"MLH Fellowship — Open Source Track",url:"https://fellowship.mlh.io",startDate:"2021-06-05",endDate:"2021-08-31",highlights:["Summer 2021 Fellow — Contributing to the open source JupyterLab project using **React**, **TypeScript** and **Python**"]},{name:"Halo Science",location:"Chicago, IL",position:"Full-Stack Software Engineer Intern",url:"https://www.halo.science",startDate:"2021-05-03",endDate:"2021-08-31",highlights:["Reduced developer environment setup by **80%** by containerizing the app with **Docker** and **Docker Compose**","Eliminated repetitive manual tests by spearheading the creation of an **E2E automation suite** with **Jest** and **Playwright**","Built a database seeding script with auto-generated data using **Faker** and **Ruby**, replacing outdated migration scripts","Developed core features using **React**, **Ruby on Rails**, and **PostgreSQL**, used by industry leaders including **P&G** and **Pfizer**"]},{name:"CaseWare International",location:"Toronto, ON",position:"Front-End Software Developer Co-op",url:"https://www.caseware.com/ca",startDate:"2020-09-08",endDate:"2021-04-30",highlights:["Facilitated **Daily Standup** meetings using multiple **JIRA** project boards in an **Agile Scrum** of **12** members","Decreased developer & QA regression efforts by **60%** by converting manual tests to unit tests with **Karma** and **Jasmine**","Developed major features and critical hotfixes using **Angular** and **AngularJS**, improving the end-user experience for **130+** international accounting firms"]}],qe=[{institution:"University of Toronto",location:"Toronto, ON",url:"https://www.utoronto.ca/",area:"Computer Science & Statistics Co-op",studyType:"Honours Bachelor of Science",startDate:"2019-09-08",endDate:"2023-04-30",score:"3.77 / 4.00",courses:["Software Design","Software Engineering","Programming Languages","Software Tools and Systems Programming"],awards:["Dean's List of Academic Excellence (2019-20)","University of Toronto Scholar ($7500)"]}],Fe=[{name:"Languages",keywords:["TypeScript","JavaScript","HTML","CSS","Java","Python","Ruby","SQL","C","Shell"]},{name:"Frameworks & Tools",keywords:["React","Angular","Node.js","Ruby on Rails","Docker","JIRA","GitHub Actions","MongoDB","PostgreSQL","Firebase"]},{name:"Concepts",keywords:["APIs (REST, GraphQL)","Agile Methodologies (Scrum, Kanban)","Test Driven Development","CI/CD"]}],Be=[{name:"UImpactify",description:"Online Learning Platform",highlights:["Developed in an Agile Scrum of **7** over **4** sprints to combat the lack of specialized education in the social purpose sector"],startDate:"2020-09",endDate:"2020-12",repo:"https://github.com/navn-r/uimpactify",url:"https://uimpactify.herokuapp.com",type:"Website",features:["Courses","Lectures & Assessments","Analytics","Realtime Chat","Volunteer & Employment","Donation System"],technology:["MongoDB","Express.js","Angular","Node.js","Socket.io","Chart.js","Multer","GridFS","Heroku","Figma","JIRA"]},{name:"Noten",description:"Grade Management App (**75+** Installs)",highlights:[],startDate:"2020-04",endDate:"2020-05",repo:"https://github.com/navn-r/noten",url:"https://play.google.com/store/apps/details?id=com.noten",type:"Google Play Store",features:["Semester & Course Management","Grade Prediction","Multiple Grade Scales","Selective Grade Calculation"],technology:["Ionic","React","TypeScript","Firebase Realtime Database","Firebase Authentication with Google OAuth 2.0"]},{name:"Spotify API Clone",description:"Social-centric Music Player REST API",highlights:[],startDate:"2020-11",endDate:"2020-12",repo:"https://github.com/navn-r/spotify-api-clone",url:"https://navn.me/spotify-api-clone",type:"Documentation",features:["Create and follow user profiles","Upload and like songs","Playlist generation","Query liked songs from followers"],technology:["Java","Spring Boot","MongoDB","Neo4j","Microservices Architecture"]}],Ge={$schema:Ue,basics:Ze,work:Ne,education:qe,skills:Fe,projects:Be},He=Object.freeze({__proto__:null,$schema:Ue,basics:Ze,work:Ne,education:qe,skills:Fe,projects:Be,default:Ge}),Je=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};t.App=class extends st{constructor(){super(),this._showLetter=!1,this.letter="",this.data=He,this._showLetter=Boolean(new URLSearchParams(window.location.search).get("letter")),this._showLetter&&this._fetchLetter()}async _fetchLetter(){const t=await fetch("letter.md").then(t=>t.text());this.letter=be(t,{smartLists:!0,smartypants:!0})}_renderLetter(){return L`<div class="letter">${$e(this.letter)}</div>`}_renderResume(){return L`
      <div class="section">
        <h1 class="title">Education</h1>
        ${this.data.education.map(t=>L`<education-card .education="${t}"></education-card>`)}
      </div>
      <div class="section">
        <h1 class="title">Skills</h1>
        <skills-card .skills="${this.data.skills}"></skills-card>
      </div>
      <div class="section">
        <h1 class="title">Experiences</h1>
        ${this.data.work.map(t=>L`<work-card .work="${t}"></work-card>`)}
      </div>
      <div class="section">
        <h1 class="title">Projects</h1>
        ${this.data.projects.map(t=>L`<project-card .project="${t}"></project-card>`)}
      </div>
    `}render(){return L`
      <app-header
        .basics="${this.data.basics}"
        ?hidefooter="${this._showLetter}"
      ></app-header>
      ${this._showLetter?this._renderLetter():this._renderResume()}
    `}},t.App.styles=o`
    :host {
      font-family: var(--main);
    }

    .section {
      width: 95%;
      margin: 1.5rem auto;
    }

    .title {
      font-family: var(--title);
      font-size: 1.25rem;
      font-weight: 500;
      text-transform: uppercase;
      padding-bottom: 2px;
      border-bottom: 1.5px solid var(--text);
      margin-bottom: 1rem;
    }

    .letter {
      margin: 0.5in 1in;
      font-size: 1.0625rem;
      line-height: 1.25;
    }

    .letter * {
      margin: revert;
      padding: revert;
      border: revert;
      font: revert;
      vertical-align: revert;
    }
  `,Je([at()],t.App.prototype,"_showLetter",void 0),Je([at()],t.App.prototype,"letter",void 0),Je([ot({attribute:!1})],t.App.prototype,"data",void 0),t.App=Je([nt("app-resume")],t.App)}({});

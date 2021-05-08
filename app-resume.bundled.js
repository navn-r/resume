!function(t){
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class s{constructor(t,i){if(i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return i&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n=new Map,o=t=>{let i=n.get(t);return void 0===i&&n.set(t,i=new s(t,e)),i},r=(t,...i)=>{const e=1===t.length?t[0]:i.reduce((i,e,n)=>i+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[n+1],t[0]);return o(e)},a=(t,e)=>{i?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(i=>{const e=document.createElement("style");e.textContent=i.cssText,t.appendChild(e)})},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>o("string"==typeof t?t:t+""))(i)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var c,h,d,u;const v={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},p=(t,i)=>i!==t&&(i==i||t==t),f={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:p};class g extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,e)=>{const s=this.Πp(e,i);void 0!==s&&(this.Πm.set(s,e),t.push(s))}),t}static createProperty(t,i=f){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(l(t))}else void 0!==t&&i.push(l(t));return i}static"Πp"(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var i,e;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return a(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,i,e){this.K(t,e)}"Πj"(t,i,e=f){var s,n;const o=this.constructor.Πp(t,e);if(void 0!==o&&!0===e.reflect){const r=(null!==(n=null===(s=e.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:v.toAttribute)(i,e.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,i){var e,s,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(s=null===(e=a)||void 0===e?void 0:e.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:v.fromAttribute;this.Πh=r,this[r]=l(i,t.type),this.Πh=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===e.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,i)=>this[i]=t),this.Πi=void 0);let i=!1;const e=this.L;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)}),this.update(e)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(e)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach(t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,i)=>this.Πj(i,this[i],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var m,y,b,w;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null===(h=(c=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(c,{ReactiveElement:g}),(null!==(d=(u=globalThis).reactiveElementVersions)&&void 0!==d?d:u.reactiveElementVersions=[]).push("1.0.0-rc.2");const S=globalThis.trustedTypes,$=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,x="?"+k,j=`<${x}>`,C=document,D=(t="")=>C.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,R=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,I=/'/g,P=/"/g,N=/^(?:script|style|textarea)$/i,z=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),L=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),_=new WeakMap,F=C.createTreeWalker(C,129,null,!1);class B{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=((t,i)=>{const e=t.length-1,s=[];let n,o=2===i?"<svg>":"",r=T;for(let i=0;i<e;i++){const e=t[i];let a,l,c=-1,h=0;for(;h<e.length&&(r.lastIndex=h,l=r.exec(e),null!==l);)h=r.lastIndex,r===T?"!--"===l[1]?r=M:void 0!==l[1]?r=R:void 0!==l[2]?(N.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=E):void 0!==l[3]&&(r=E):r===E?">"===l[0]?(r=null!=n?n:T,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?E:'"'===l[3]?P:I):r===P||r===I?r=E:r===M||r===R?r=T:(r=E,n=void 0);const d=r===E&&t[i+1].startsWith("/>")?" ":"";o+=r===T?e+j:c>=0?(s.push(a),e.slice(0,c)+"$lit$"+e.slice(c)+k+d):e+k+(-2===c?(s.push(void 0),i):d)}const a=o+(t[e]||"<?>")+(2===i?"</svg>":"");return[void 0!==$?$.createHTML(a):a,s]})(t,i);if(this.el=B.createElement(l,e),F.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=F.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(k)){const e=c[o++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(k),i=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?Q:"?"===i[1]?q:"@"===i[1]?K:W})}else a.push({type:6,index:n})}for(const i of t)s.removeAttribute(i)}if(N.test(s.tagName)){const t=s.textContent.split(k),i=t.length-1;if(i>0){s.textContent=S?S.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],D()),F.nextNode(),a.push({type:2,index:++n});s.append(t[i],D())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,i){const e=C.createElement("template");return e.innerHTML=t,e}}function G(t,i,e=t,s){var n,o,r,a;if(i===L)return i;let l=void 0!==s?null===(n=e.Σi)||void 0===n?void 0:n[s]:e.Σo;const c=A(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l.O)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l.T(t,e,s)),void 0!==s?(null!==(r=(a=e).Σi)&&void 0!==r?r:a.Σi=[])[s]=l:e.Σo=l),void 0!==l&&(i=G(t,l.S(t,i.values),l,s)),i}class H{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:e},parts:s}=this.D,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:C).importNode(e,!0);F.currentNode=n;let o=F.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new J(o,o.nextSibling,this,t):1===l.type?i=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(i=new V(o,this,t)),this.l.push(i),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=F.nextNode(),r++)}return n}v(t){let i=0;for(const e of this.l)void 0!==e&&(void 0!==e.strings?(e.I(t,e,i),i+=e.strings.length-2):e.I(t[i])),i++}}class J{constructor(t,i,e,s){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=e,this.options=s}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=G(this,t,i),A(t)?t===U||null==t||""===t?(this.H!==U&&this.R(),this.H=U):t!==this.H&&t!==L&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return O(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(C.createTextNode(t)),this.H=t}_(t){var i;const{values:e,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(i=this.H)||void 0===i?void 0:i.D)===n)this.H.v(e);else{const t=new H(n,this),i=t.u(this.options);t.v(e),this.$(i),this.H=t}}C(t){let i=_.get(t.strings);return void 0===i&&_.set(t.strings,i=new B(t)),i}g(t){O(this.H)||(this.H=[],this.R());const i=this.H;let e,s=0;for(const n of t)s===i.length?i.push(e=new J(this.k(D()),this.k(D()),this,this.options)):e=i[s],e.I(n),s++;s<i.length&&(this.R(e&&e.B.nextSibling,s),i.length=s)}R(t=this.A.nextSibling,i){var e;for(null===(e=this.P)||void 0===e||e.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class W{constructor(t,i,e,s,n){this.type=1,this.H=U,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=s,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this.H=Array(e.length-1).fill(U),this.strings=e):this.H=U}get tagName(){return this.element.tagName}I(t,i=this,e,s){const n=this.strings;let o=!1;if(void 0===n)t=G(this,t,i,0),o=!A(t)||t!==this.H&&t!==L,o&&(this.H=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=G(this,s[e+r],i,r),a===L&&(a=this.H[r]),o||(o=!A(a)||a!==this.H[r]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+n[r+1]),this.H[r]=a}o&&!s&&this.W(t)}W(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Q extends W{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===U?void 0:t}}class q extends W{constructor(){super(...arguments),this.type=4}W(t){t&&t!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class K extends W{constructor(){super(...arguments),this.type=5}I(t,i=this){var e;if((t=null!==(e=G(this,t,i,0))&&void 0!==e?e:U)===L)return;const s=this.H,n=t===U&&s!==U||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==U&&(s===U||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,e;"function"==typeof this.H?this.H.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this.H.handleEvent(t)}}class V{constructor(t,i,e){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=e}I(t){G(this,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Z,X,Y,tt,it,et;null===(y=(m=globalThis).litHtmlPlatformSupport)||void 0===y||y.call(m,B,J),(null!==(b=(w=globalThis).litHtmlVersions)&&void 0!==b?b:w.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(Z=(et=globalThis).litElementVersions)&&void 0!==Z?Z:et.litElementVersions=[]).push("3.0.0-rc.2");class st extends g{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();super.update(t),this.Φt=((t,i,e)=>{var s,n;const o=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new J(i.insertBefore(D(),t),t,void 0,e)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return L}}st.finalized=!0,st._$litElement$=!0,null===(Y=(X=globalThis).litElementHydrateSupport)||void 0===Y||Y.call(X,{LitElement:st}),null===(it=(tt=globalThis).litElementPlatformSupport)||void 0===it||it.call(tt,{LitElement:st});
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const nt=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,ot=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};function rt(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):ot(t,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}const at=2;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class lt extends class{constructor(t){}T(t,i,e){this.Σdt=t,this.M=i,this.Σct=e}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){if(super(t),this.vt=U,t.type!==at)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U)return this.Vt=void 0,this.vt=t;if(t===L)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.vt)return this.Vt;this.vt=t;const i=[t];return i.raw=i,this.Vt={_$litType$:this.constructor.resultType,strings:i,values:[]}}}lt.directiveName="unsafeHTML",lt.resultType=1;const ct=(t=>(...i)=>({_$litDirective$:t,values:i}))(lt),ht=t=>ct(t.replace(/fi/g,'<span style="margin-right: 0.25px">f</span>i').replace(/(\*\*|__)(.*?)\1/gim,"<strong>$2</strong>")),dt=(t,i={month:"short",year:"numeric"})=>new Date(t).toLocaleString("default",i),ut=r`
  .card {
    margin-bottom: 1.375rem;
  }

  @media screen {
    a:hover {
      background: rgba(255, 255, 0, 0.2) !important;
      box-shadow: 0px 2px 10px rgba(255, 255, 0, 0.2) !important;
    }
  }
`,vt=r`
  .title-container {
    display: grid;
    justify-content: space-between;
    row-gap: 0.125rem;
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
`,pt=r`
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
`;var ft=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let gt=class extends st{render(){return z`
      <div class="card">
        <div class="title-container">
          <a href="${this.education.url}">${this.education.institution}</a>
          <h4>${this.education.studyType}, ${this.education.area}</h4>
          <h4>${this.education.location}</h4>
          <h4>
            ${dt(this.education.startDate)} —
            ${dt(this.education.endDate)} (Expected)
          </h4>
        </div>
        <div class="body">
          <p><strong>Cumulative GPA:</strong> ${this.education.score}</p>
          <p>
            <strong>Notable Courses:</strong> ${ht(this.education.courses.join(", "))}
          </p>
          <p>
            <strong>Awards:</strong>
            <em>${this.education.awards.join(", ")}</em>
          </p>
        </div>
      </div>
    `}};gt.styles=[ut,vt,pt,r`
      .body {
        display: grid;
        grid-template-rows: auto;
        row-gap: 0.375rem;
      }

      .body p {
        margin: 0;
        padding: 0;
      }
    `],ft([rt({type:Object})],gt.prototype,"education",void 0),gt=ft([nt("education-card")],gt);var mt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let yt=class extends st{constructor(){super(...arguments),this.class="fas fa-coffee"}render(){return z`
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      /><i class=${this.class}></i>
    `}};mt([rt({type:String})],yt.prototype,"class",void 0),yt=mt([nt("fa-icon")],yt);var bt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let wt=class extends st{constructor(){super(),this.hideFooter=!1,this.time=new Date(Date.now()),this.getRecentCommit()}getRecentCommit(){fetch("https://api.github.com/repos/navn-r/resume").then(t=>t.json()).then(t=>{this.time=new Date(t.pushed_at)})}render(){return z`
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
            ${this.basics.profiles.map(({network:t,url:i,username:e})=>z`
                <div class="contact">
                  <fa-icon class="${(t=>{switch(t){case"GitHub":return"fab fa-github";case"LinkedIn":return"fab fa-linkedin"}return"fas fa-link"})(t)}"></fa-icon>
                  <a href="${i}">${e}</a>
                </div>
              `)}
          </div>
        </div>
      </div>
      ${this.hideFooter?"":z`
            <div class="footer">
              <em>Last Updated: ${this.time.toDateString()}</em>
              <a href="./RavindaranNavinn_Resume.pdf" target="_blank">
                Download PDF <fa-icon class="fas fa-download"></fa-icon>
              </a>
            </div>
          `}
    `}};wt.styles=r`
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
    }

    #lower-row {
      display: grid;
      grid-template-columns: 2fr 3fr 2fr;
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
  `,bt([rt({type:Boolean})],wt.prototype,"hideFooter",void 0),bt([rt({attribute:!1})],wt.prototype,"time",void 0),bt([rt({type:Object})],wt.prototype,"basics",void 0),wt=bt([nt("app-header")],wt);var St=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let $t=class extends st{render(){return z`
      <div class="card">
        <div class="title-container">
          <p>
            <strong>${this.project.name}</strong> —
            ${ht(this.project.description)}
          </p>
          ${this.project.repo&&this.project.url?z`
                <p>
                  <a href="${this.project.url}"
                    >(<strong>${this.project.type}</strong>)</a
                  >
                  <a href="${this.project.repo}">(<strong>GitHub</strong>)</a>
                </p>
              `:z``}
        </div>
        <ul>
          ${this.project.highlights.map(t=>z`<li>${ht(t)}</li>`)}
          ${this.project.features?z`<li>
                <strong>Core Features:</strong> ${ht(this.project.features.join(", "))}
              </li>`:""}
          <li>
            <strong>Technology:</strong> ${ht(this.project.technology.join(", "))}
          </li>
        </ul>
      </div>
    `}};$t.styles=[ut,pt,r`
      .title-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }

      .title-container * {
        font-size: 1.125rem;
      }

      .title-container p:first-child > strong {
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
    `],St([rt({type:Object})],$t.prototype,"project",void 0),$t=St([nt("project-card")],$t);var kt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let xt=class extends st{render(){return z`
      <div class="skills-card">
        ${this.skills.map(t=>z`
            <p>
              <strong>${t.name}:</strong> ${ht(t.keywords.join(", "))}
            </p>
          `)}
      </div>
    `}};xt.styles=[pt,r`
      .skills-card {
        display: grid;
        grid-template-rows: auto;
        row-gap: 0.5rem;
      }
    `],kt([rt({type:Array})],xt.prototype,"skills",void 0),xt=kt([nt("skills-card")],xt);var jt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let Ct=class extends st{render(){return z`
      <div class="card">
        <div class="title-container">
          <a href="${this.work.url}">${this.work.name}</a>
          <h4>${this.work.position}</h4>
          <h4>${this.work.location}</h4>
          <h4>
            ${dt(this.work.startDate)} —
            ${dt(this.work.endDate)}
          </h4>
        </div>
        <ul class="body">
          ${this.work.highlights.map(t=>z`<li>${ht(t)}</li>`)}
        </ul>
      </div>
    `}};Ct.styles=[ut,vt,pt],jt([rt({type:Object})],Ct.prototype,"work",void 0),Ct=jt([nt("work-card")],Ct);var Dt="https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",At={name:"Navinn Ravindaran",label:"Developer, Learner",email:"navinn.ravindaran@mail.utoronto.ca",url:"https://navn.me",location:{city:"Toronto",region:"Ontario",countryCode:"CA"},profiles:[{network:"GitHub",username:"navn-r",url:"https://github.com/navn-r"},{network:"LinkedIn",username:"navn-r",url:"https://www.linkedin.com/in/navn-r"}]},Ot=[{name:"Halo",location:"Chicago, IL",position:"Full-Stack Software Engineer Intern",url:"https://halo.science",startDate:"2021-05-03",endDate:"2021-08-31",highlights:["Incoming Summer 2021 intern - React + Ruby on Rails"]},{name:"CaseWare International",location:"Toronto, ON",position:"Front-End Software Developer Co-op",url:"https://www.caseware.com/ca",startDate:"2020-09-08",endDate:"2021-04-30",highlights:["Facilitated **Daily Standup** meetings using multiple **JIRA** project boards in an **Agile Scrum** of **12** members","Decreased developer & QA regression efforts by **60%** by converting manual tests to unit tests with **Karma**, **Jest** and **Jasmine**","Developed major features and critical hotfixes using **Angular** and **AngularJS**, improving the end-user experience for **130+** international accounting firms"]}],Tt=[{institution:"University of Toronto",location:"Toronto, ON",url:"https://www.utoronto.ca/",area:"Computer Science & Statistics Co-op",studyType:"Honours Bachelor of Science",startDate:"2019-09-08",endDate:"2023-04-30",score:"3.77 / 4.00",courses:["Software Design","Software Engineering","Programming Languages","Software Tools and Systems Programming"],awards:["Dean's List of Academic Excellence (2019-20)","University of Toronto Scholar ($7500)"]}],Mt=[{name:"Languages",keywords:["TypeScript","JavaScript","Java","HTML","CSS","C","Python","SQL","Shell"]},{name:"Frameworks & Tools",keywords:["React","React Native","Angular","Node.js","Express.js","JIRA","GitHub Actions","TravisCI","MongoDB","Firebase"]},{name:"Concepts",keywords:["APIs (REST, GraphQL)","Agile Methodologies (Scrum, Kanban, Test Driven Development)","CI/CD"]}],Rt=[{name:"UImpactify",description:"Online Learning Platform",highlights:["Engaged in an Agile Scrum of **7** over **4** sprints, battling the lack of specialized education in the social purpose sector","Facilitated Daily Standup, Backlog Refinement, and Architecture Design meetings **following best Agile practices**",'Developed and deployed a <a href="https://github.com/navn-r/standup-bot">**Discord Bot**</a> to supplement Daily Standup meetings, reducing overall time by **50%**'],startDate:"2020-09",endDate:"2020-12",repo:"https://github.com/navn-r/uimpactify",url:"https://uimpactify.herokuapp.com",type:"Website",features:["Course Enrollment","Lectures & Assessments","Student Analytics","Course Surveys","Realtime Chat","Volunteer Opportunities","Donation System"],technology:["MongoDB","Express.js","Angular","Node.js","Socket.io","Chart.js","Multer","GridFS","Heroku","Figma","JIRA"]},{name:"Noten",description:"Cloud Based Grade Management Application",highlights:["Implemented a flattened data store, resulting in **4x** fewer database queries on all **CRUD** operations on grades"],startDate:"2020-04",endDate:"2020-05",repo:"https://github.com/navn-r/noten",url:"https://play.google.com/store/apps/details?id=com.noten",type:"Google Play Store",features:["Semester & Course Management","Grade Prediction","Multiple Grade Scales","Selective Course & Grade Calculation"],technology:["React Native","Firebase Realtime Database","Firebase Authentication with Google OAuth 2.0"]},{name:"Ritrovo",description:"Full-Stack Social Platform",highlights:["Built an authenticated **GraphQL API** and community dashboard for creating posts and collaborating with users","Eliminated code duplication by **3x** using **auto generated** schemas for database models, API queries and TypeScript interfaces"],startDate:"2020-09",endDate:"2020-09",repo:"https://github.com/navn-r/ritrovo",url:"https://ritrovo.vercel.app",type:"Website",technology:["React","Next.js","TypeScript","Apollo","MongoDB","Mongoose","JSON Web Tokens","Vercel"]},{name:"Spotify API Clone",description:"Social-centric Music Player REST API",highlights:[],startDate:"2020-11",endDate:"2020-12",repo:"https://github.com/navn-r/spotify-api-clone",url:"https://navn.me/spotify-api-clone",type:"Documentation",features:["Create and follow user profiles","Upload and like songs","Playlist generation","Query liked songs from followers"],technology:["Java","Spring Boot","MongoDB","Neo4j","Microservices Architecture"]}],Et={$schema:Dt,basics:At,work:Ot,education:Tt,skills:Mt,projects:Rt},It=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};const Pt=Object.freeze({__proto__:null,$schema:Dt,basics:At,work:Ot,education:Tt,skills:Mt,projects:Rt,default:Et});t.Resume=class extends st{render(){return z`
      <app-header .basics="${Pt.basics}"></app-header>
      <div class="section">
        <h1 class="title">Education</h1>
        ${Pt.education.map(t=>z`<education-card .education="${t}"></education-card>`)}
      </div>
      <div class="section">
        <h1 class="title">Skills</h1>
        <skills-card .skills="${Pt.skills}"></skills-card>
      </div>
      <div class="section">
        <h1 class="title">Work Experience</h1>
        ${Pt.work.map(t=>z`<work-card .work="${t}"></work-card>`)}
      </div>
      <div class="section">
        <h1 class="title">Projects</h1>
        ${Pt.projects.map(t=>z`<project-card .project="${t}"></project-card>`)}
      </div>
    `}},t.Resume.styles=r`
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
  `,t.Resume=It([nt("app-resume")],t.Resume)}({});

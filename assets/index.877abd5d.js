const nt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}};nt();function q(){}const We=t=>t;function Ue(t){return t()}function Ce(){return Object.create(null)}function be(t){t.forEach(Ue)}function Ye(t){return typeof t=="function"}function ne(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let fe;function lt(t,e){return fe||(fe=document.createElement("a")),fe.href=e,t===fe.href}function st(t){return Object.keys(t).length===0}const Ve=typeof window!="undefined";let it=Ve?()=>window.performance.now():()=>Date.now(),ke=Ve?t=>requestAnimationFrame(t):q;const te=new Set;function Xe(t){te.forEach(e=>{e.c(t)||(te.delete(e),e.f())}),te.size!==0&&ke(Xe)}function ot(t){let e;return te.size===0&&ke(Xe),{promise:new Promise(s=>{te.add(e={c:t,f:s})}),abort(){te.delete(e)}}}function r(t,e){t.appendChild(e)}function Ze(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function rt(t){const e=u("style");return at(Ze(t),e),e.sheet}function at(t,e){r(t.head||t,e)}function S(t,e,s){t.insertBefore(e,s||null)}function y(t){t.parentNode.removeChild(t)}function W(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function u(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function v(){return D(" ")}function et(){return D("")}function d(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function ct(t){return Array.from(t.childNodes)}function H(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ut(t,e,{bubbles:s=!1,cancelable:n=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,s,n,e),l}const _e=new Map;let ve=0;function ft(t){let e=5381,s=t.length;for(;s--;)e=(e<<5)-e^t.charCodeAt(s);return e>>>0}function ht(t,e){const s={stylesheet:rt(e),rules:{}};return _e.set(t,s),s}function pt(t,e,s,n,l,o,i,a=0){const m=16.666/n;let c=`{
`;for(let E=0;E<=1;E+=m){const z=e+(s-e)*o(E);c+=E*100+`%{${i(z,1-z)}}
`}const f=c+`100% {${i(s,1-s)}}
}`,p=`__svelte_${ft(f)}_${a}`,j=Ze(t),{stylesheet:g,rules:w}=_e.get(j)||ht(j,t);w[p]||(w[p]=!0,g.insertRule(`@keyframes ${p} ${f}`,g.cssRules.length));const C=t.style.animation||"";return t.style.animation=`${C?`${C}, `:""}${p} ${n}ms linear ${l}ms 1 both`,ve+=1,p}function Ee(t,e){const s=(t.style.animation||"").split(", "),n=s.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),l=s.length-n.length;l&&(t.style.animation=n.join(", "),ve-=l,ve||dt())}function dt(){ke(()=>{ve||(_e.forEach(t=>{const{stylesheet:e}=t;let s=e.cssRules.length;for(;s--;)e.deleteRule(s);t.rules={}}),_e.clear())})}let Se;function ue(t){Se=t}const ce=[],Te=[],me=[],je=[],mt=Promise.resolve();let $e=!1;function gt(){$e||($e=!0,mt.then(tt))}function G(t){me.push(t)}const we=new Set;let he=0;function tt(){const t=Se;do{for(;he<ce.length;){const e=ce[he];he++,ue(e),_t(e.$$)}for(ue(null),ce.length=0,he=0;Te.length;)Te.pop()();for(let e=0;e<me.length;e+=1){const s=me[e];we.has(s)||(we.add(s),s())}me.length=0}while(ce.length);for(;je.length;)je.pop()();$e=!1,we.clear(),ue(t)}function _t(t){if(t.fragment!==null){t.update(),be(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}let oe;function vt(){return oe||(oe=Promise.resolve(),oe.then(()=>{oe=null})),oe}function Re(t,e,s){t.dispatchEvent(ut(`${e?"intro":"outro"}${s}`))}const ge=new Set;let bt;function V(t,e){t&&t.i&&(ge.delete(t),t.i(e))}function re(t,e,s,n){if(t&&t.o){if(ge.has(t))return;ge.add(t),bt.c.push(()=>{ge.delete(t),n&&(s&&t.d(1),n())}),t.o(e)}else n&&n()}const yt={duration:0};function pe(t,e,s){let n=e(t,s),l=!1,o,i,a=0;function m(){o&&Ee(t,o)}function c(){const{delay:p=0,duration:j=300,easing:g=We,tick:w=q,css:C}=n||yt;C&&(o=pt(t,0,1,j,p,g,C,a++)),w(0,1);const E=it()+p,z=E+j;i&&i.abort(),l=!0,G(()=>Re(t,!0,"start")),i=ot(T=>{if(l){if(T>=z)return w(1,0),Re(t,!0,"end"),m(),l=!1;if(T>=E){const $=g((T-E)/j);w($,1-$)}}return l})}let f=!1;return{start(){f||(f=!0,Ee(t),Ye(n)?(n=n(),vt().then(c)):c())},invalidate(){f=!1},end(){l&&(m(),l=!1)}}}function ae(t){t&&t.c()}function X(t,e,s,n){const{fragment:l,on_mount:o,on_destroy:i,after_update:a}=t.$$;l&&l.m(e,s),n||G(()=>{const m=o.map(Ue).filter(Ye);i?i.push(...m):be(m),t.$$.on_mount=[]}),a.forEach(G)}function Z(t,e){const s=t.$$;s.fragment!==null&&(be(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function wt(t,e){t.$$.dirty[0]===-1&&(ce.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function le(t,e,s,n,l,o,i,a=[-1]){const m=Se;ue(t);const c=t.$$={fragment:null,ctx:null,props:o,update:q,not_equal:l,bound:Ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:Ce(),dirty:a,skip_bound:!1,root:e.target||m.$$.root};i&&i(c.root);let f=!1;if(c.ctx=s?s(t,e.props||{},(p,j,...g)=>{const w=g.length?g[0]:j;return c.ctx&&l(c.ctx[p],c.ctx[p]=w)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](w),f&&wt(t,p)),j}):[],c.update(),f=!0,be(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const p=ct(e.target);c.fragment&&c.fragment.l(p),p.forEach(y)}else c.fragment&&c.fragment.c();e.intro&&V(t.$$.fragment),X(t,e.target,e.anchor,e.customElement),tt()}ue(m)}class se{$destroy(){Z(this,1),this.$destroy=q}$on(e,s){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const l=n.indexOf(s);l!==-1&&n.splice(l,1)}}$set(e){this.$$set&&!st(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function de(t,{delay:e=0,duration:s=400,easing:n=We}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:s,easing:n,css:o=>`opacity: ${o*l}`}}const ee=t=>new Date(t).toLocaleString("en-GB",{month:"short",year:"numeric"});function Ae(t,e,s){const n=t.slice();return n[1]=e[s],n}function Le(t){let e,s,n,l,o=t[1].institution+"",i,a,m,c,f=t[1].location+"",p,j,g,w,C=t[1].studyType+"",E,z,T=t[1].area+"",$,k,A,P=ee(t[1].endDate)+"",B,R,b,h,L,N,x=t[1].score+"",J,Q,_=t[1].awards.join(", ")+"",M,U,F,Y,ie,K=t[1].courses.join(", ")+"",ye,De;return{c(){e=u("div"),s=u("p"),n=u("a"),l=u("h4"),i=D(o),m=v(),c=u("span"),p=D(f),j=v(),g=u("p"),w=u("span"),E=D(C),z=D(", "),$=D(T),k=v(),A=u("span"),B=D(P),R=D(" (Expected)"),b=v(),h=u("p"),L=u("strong"),L.textContent="Cumulative GPA:",N=v(),J=D(x),Q=D(" \u2014 "),M=D(_),U=v(),F=u("p"),Y=u("strong"),Y.textContent="Teaching Assistant:",ie=v(),ye=D(K),De=v(),d(n,"href",a=t[1].url),d(n,"class","svelte-zbv5qa"),d(s,"class","svelte-zbv5qa"),d(g,"class","svelte-zbv5qa"),d(e,"class","svelte-zbv5qa")},m(O,I){S(O,e,I),r(e,s),r(s,n),r(n,l),r(l,i),r(s,m),r(s,c),r(c,p),r(e,j),r(e,g),r(g,w),r(w,E),r(w,z),r(w,$),r(g,k),r(g,A),r(A,B),r(A,R),S(O,b,I),S(O,h,I),r(h,L),r(h,N),r(h,J),r(h,Q),r(h,M),S(O,U,I),S(O,F,I),r(F,Y),r(F,ie),r(F,ye),r(F,De)},p(O,I){I&1&&o!==(o=O[1].institution+"")&&H(i,o),I&1&&a!==(a=O[1].url)&&d(n,"href",a),I&1&&f!==(f=O[1].location+"")&&H(p,f),I&1&&C!==(C=O[1].studyType+"")&&H(E,C),I&1&&T!==(T=O[1].area+"")&&H($,T),I&1&&P!==(P=ee(O[1].endDate)+"")&&H(B,P),I&1&&x!==(x=O[1].score+"")&&H(J,x),I&1&&_!==(_=O[1].awards.join(", ")+"")&&H(M,_),I&1&&K!==(K=O[1].courses.join(", ")+"")&&H(ye,K)},d(O){O&&y(e),O&&y(b),O&&y(h),O&&y(U),O&&y(F)}}}function $t(t){let e,s=t[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=Le(Ae(t,s,l));return{c(){e=u("section");for(let l=0;l<n.length;l+=1)n[l].c()},m(l,o){S(l,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null)},p(l,[o]){if(o&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const a=Ae(l,s,i);n[i]?n[i].p(a,o):(n[i]=Le(a),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},i:q,o:q,d(l){l&&y(e),W(n,l)}}}function kt(t,e,s){let{education:n}=e;return t.$$set=l=>{"education"in l&&s(0,n=l.education)},[n]}class St extends se{constructor(e){super(),le(this,e,kt,$t,ne,{education:0})}}function Ne(t,e,s){const n=t.slice();return n[1]=e[s],n}function ze(t,e,s){const n=t.slice();return n[4]=e[s],n}function Pe(t){let e,s,n=t[1].highlights,l=[];for(let o=0;o<n.length;o+=1)l[o]=Oe(ze(t,n,o));return{c(){e=u("ul");for(let o=0;o<l.length;o+=1)l[o].c();s=v()},m(o,i){S(o,e,i);for(let a=0;a<l.length;a+=1)l[a].m(e,null);r(e,s)},p(o,i){if(i&1){n=o[1].highlights;let a;for(a=0;a<n.length;a+=1){const m=ze(o,n,a);l[a]?l[a].p(m,i):(l[a]=Oe(m),l[a].c(),l[a].m(e,s))}for(;a<l.length;a+=1)l[a].d(1);l.length=n.length}},d(o){o&&y(e),W(l,o)}}}function Oe(t){let e,s=t[4]+"";return{c(){e=u("li")},m(n,l){S(n,e,l),e.innerHTML=s},p(n,l){l&1&&s!==(s=n[4]+"")&&(e.innerHTML=s)},d(n){n&&y(e)}}}function He(t){let e,s,n,l=t[1].name+"",o,i,a,m=t[1].position+"",c,f,p,j=ee(t[1].startDate)+"",g,w,C=ee(t[1].endDate)+"",E,z,T,$=t[1].highlights.length>0&&Pe(t);return{c(){e=u("p"),s=u("span"),n=u("a"),o=D(l),a=D(" | "),c=D(m),f=v(),p=u("span"),g=D(j),w=D(" \u2014 "),E=D(C),z=v(),$&&$.c(),T=et(),d(n,"href",i=t[1].url),d(n,"class","svelte-r19qi2"),d(e,"class","svelte-r19qi2")},m(k,A){S(k,e,A),r(e,s),r(s,n),r(n,o),r(s,a),r(s,c),r(e,f),r(e,p),r(p,g),r(p,w),r(p,E),S(k,z,A),$&&$.m(k,A),S(k,T,A)},p(k,A){A&1&&l!==(l=k[1].name+"")&&H(o,l),A&1&&i!==(i=k[1].url)&&d(n,"href",i),A&1&&m!==(m=k[1].position+"")&&H(c,m),A&1&&j!==(j=ee(k[1].startDate)+"")&&H(g,j),A&1&&C!==(C=ee(k[1].endDate)+"")&&H(E,C),k[1].highlights.length>0?$?$.p(k,A):($=Pe(k),$.c(),$.m(T.parentNode,T)):$&&($.d(1),$=null)},d(k){k&&y(e),k&&y(z),$&&$.d(k),k&&y(T)}}}function Dt(t){let e,s=t[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=He(Ne(t,s,l));return{c(){e=u("section");for(let l=0;l<n.length;l+=1)n[l].c()},m(l,o){S(l,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null)},p(l,[o]){if(o&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const a=Ne(l,s,i);n[i]?n[i].p(a,o):(n[i]=He(a),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},i:q,o:q,d(l){l&&y(e),W(n,l)}}}function Ct(t,e,s){let{experience:n}=e;return t.$$set=l=>{"experience"in l&&s(0,n=l.experience)},[n]}class Et extends se{constructor(e){super(),le(this,e,Ct,Dt,ne,{experience:0})}}function Me(t,e,s){const n=t.slice();return n[1]=e[s],n}function Ie(t){let e,s,n,l,o,i=t[1].username+"",a,m,c;return{c(){e=u("div"),s=u("i"),l=v(),o=u("a"),a=D(i),c=v(),d(s,"class",n="fab fa-"+t[1].network+" svelte-1d7dtv7"),d(o,"href",m=t[1].url),d(e,"class","contact svelte-1d7dtv7")},m(f,p){S(f,e,p),r(e,s),r(e,l),r(e,o),r(o,a),r(e,c)},p(f,p){p&1&&n!==(n="fab fa-"+f[1].network+" svelte-1d7dtv7")&&d(s,"class",n),p&1&&i!==(i=f[1].username+"")&&H(a,i),p&1&&m!==(m=f[1].url)&&d(o,"href",m)},d(f){f&&y(e)}}}function Tt(t){let e,s,n=t[0].name+"",l,o,i,a,m,c,f,p=t[0].email+"",j,g,w,C,E,z,T,$,k=t[0].url.replace("https://","")+"",A,P,B,R=t[0].profiles,b=[];for(let h=0;h<R.length;h+=1)b[h]=Ie(Me(t,R,h));return{c(){e=u("section"),s=u("h1"),l=D(n),o=v(),i=u("div"),a=u("div"),m=u("i"),c=v(),f=u("a"),j=D(p),w=v(),C=u("div"),E=u("div"),z=u("i"),T=v(),$=u("a"),A=D(k),B=v();for(let h=0;h<b.length;h+=1)b[h].c();d(s,"class","svelte-1d7dtv7"),d(m,"class","fas fa-inbox svelte-1d7dtv7"),d(f,"href",g="mailto:"+t[0].email),d(a,"class","contact svelte-1d7dtv7"),d(z,"class","fas fa-link svelte-1d7dtv7"),d($,"href",P=t[0].url),d(E,"class","contact svelte-1d7dtv7"),d(C,"class","lower svelte-1d7dtv7"),d(i,"class","contacts svelte-1d7dtv7"),d(e,"class","svelte-1d7dtv7")},m(h,L){S(h,e,L),r(e,s),r(s,l),r(e,o),r(e,i),r(i,a),r(a,m),r(a,c),r(a,f),r(f,j),r(i,w),r(i,C),r(C,E),r(E,z),r(E,T),r(E,$),r($,A),r(C,B);for(let N=0;N<b.length;N+=1)b[N].m(C,null)},p(h,[L]){if(L&1&&n!==(n=h[0].name+"")&&H(l,n),L&1&&p!==(p=h[0].email+"")&&H(j,p),L&1&&g!==(g="mailto:"+h[0].email)&&d(f,"href",g),L&1&&k!==(k=h[0].url.replace("https://","")+"")&&H(A,k),L&1&&P!==(P=h[0].url)&&d($,"href",P),L&1){R=h[0].profiles;let N;for(N=0;N<R.length;N+=1){const x=Me(h,R,N);b[N]?b[N].p(x,L):(b[N]=Ie(x),b[N].c(),b[N].m(C,null))}for(;N<b.length;N+=1)b[N].d(1);b.length=R.length}},i:q,o:q,d(h){h&&y(e),W(b,h)}}}function jt(t,e,s){let{basics:n}=e;return t.$$set=l=>{"basics"in l&&s(0,n=l.basics)},[n]}class Rt extends se{constructor(e){super(),le(this,e,jt,Tt,ne,{basics:0})}}function xe(t,e,s){const n=t.slice();return n[1]=e[s],n}function qe(t){let e,s=t[1].name+"",n,l,o,i=t[1].keywords.join(", ")+"",a,m,c;return{c(){e=u("strong"),n=D(s),l=D(":"),o=v(),a=D(i),m=v(),c=u("br"),d(e,"class","svelte-n17fg2")},m(f,p){S(f,e,p),r(e,n),r(e,l),S(f,o,p),S(f,a,p),S(f,m,p),S(f,c,p)},p(f,p){p&1&&s!==(s=f[1].name+"")&&H(n,s),p&1&&i!==(i=f[1].keywords.join(", ")+"")&&H(a,i)},d(f){f&&y(e),f&&y(o),f&&y(a),f&&y(m),f&&y(c)}}}function At(t){let e,s=t[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=qe(xe(t,s,l));return{c(){e=u("section");for(let l=0;l<n.length;l+=1)n[l].c();d(e,"class","svelte-n17fg2")},m(l,o){S(l,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null)},p(l,[o]){if(o&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const a=xe(l,s,i);n[i]?n[i].p(a,o):(n[i]=qe(a),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},i:q,o:q,d(l){l&&y(e),W(n,l)}}}function Lt(t,e,s){let{skills:n}=e;return t.$$set=l=>{"skills"in l&&s(0,n=l.skills)},[n]}class Nt extends se{constructor(e){super(),le(this,e,Lt,At,ne,{skills:0})}}function Be(t,e,s){const n=t.slice();return n[1]=e[s],n}function Fe(t,e,s){const n=t.slice();return n[4]=e[s],n}function Ge(t){let e,s,n,l=t[1].type+"",o,i,a;return{c(){e=u("a"),s=D("("),n=u("strong"),o=D(l),i=D(")"),d(n,"class","svelte-yb239a"),d(e,"href",a=t[1].url),d(e,"class","svelte-yb239a")},m(m,c){S(m,e,c),r(e,s),r(e,n),r(n,o),r(e,i)},p(m,c){c&1&&l!==(l=m[1].type+"")&&H(o,l),c&1&&a!==(a=m[1].url)&&d(e,"href",a)},d(m){m&&y(e)}}}function Je(t){let e,s=t[1].highlights,n=[];for(let l=0;l<s.length;l+=1)n[l]=Qe(Fe(t,s,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=et()},m(l,o){for(let i=0;i<n.length;i+=1)n[i].m(l,o);S(l,e,o)},p(l,o){if(o&1){s=l[1].highlights;let i;for(i=0;i<s.length;i+=1){const a=Fe(l,s,i);n[i]?n[i].p(a,o):(n[i]=Qe(a),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},d(l){W(n,l),l&&y(e)}}}function Qe(t){let e,s=t[4]+"";return{c(){e=u("li")},m(n,l){S(n,e,l),e.innerHTML=s},p(n,l){l&1&&s!==(s=n[4]+"")&&(e.innerHTML=s)},d(n){n&&y(e)}}}function Ke(t){let e,s,n=t[1].name+"",l,o,i,a,m,c,f,p,j,g,w,C=t[1].description+"",E,z,T,$,k,A=t[1].technology.join(", ")+"",P,B,R=t[1].url&&Ge(t),b=t[1].highlights&&Je(t);return{c(){e=u("p"),s=u("strong"),l=D(n),o=v(),R&&R.c(),i=v(),a=u("a"),m=D("("),c=u("strong"),c.textContent="GitHub",f=D(")"),j=v(),g=u("ul"),w=u("li"),E=v(),b&&b.c(),z=v(),T=u("li"),$=u("strong"),$.textContent="Technology:",k=v(),P=D(A),B=v(),d(s,"class","svelte-yb239a"),d(c,"class","svelte-yb239a"),d(a,"href",p=t[1].repo),d(a,"class","svelte-yb239a"),d(e,"class","svelte-yb239a")},m(h,L){S(h,e,L),r(e,s),r(s,l),r(e,o),R&&R.m(e,null),r(e,i),r(e,a),r(a,m),r(a,c),r(a,f),S(h,j,L),S(h,g,L),r(g,w),w.innerHTML=C,r(g,E),b&&b.m(g,null),r(g,z),r(g,T),r(T,$),r(T,k),r(T,P),r(g,B)},p(h,L){L&1&&n!==(n=h[1].name+"")&&H(l,n),h[1].url?R?R.p(h,L):(R=Ge(h),R.c(),R.m(e,i)):R&&(R.d(1),R=null),L&1&&p!==(p=h[1].repo)&&d(a,"href",p),L&1&&C!==(C=h[1].description+"")&&(w.innerHTML=C),h[1].highlights?b?b.p(h,L):(b=Je(h),b.c(),b.m(g,z)):b&&(b.d(1),b=null),L&1&&A!==(A=h[1].technology.join(", ")+"")&&H(P,A)},d(h){h&&y(e),R&&R.d(),h&&y(j),h&&y(g),b&&b.d()}}}function zt(t){let e,s=t[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=Ke(Be(t,s,l));return{c(){e=u("section");for(let l=0;l<n.length;l+=1)n[l].c()},m(l,o){S(l,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null)},p(l,[o]){if(o&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const a=Be(l,s,i);n[i]?n[i].p(a,o):(n[i]=Ke(a),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},i:q,o:q,d(l){l&&y(e),W(n,l)}}}function Pt(t,e,s){let{projects:n}=e;return t.$$set=l=>{"projects"in l&&s(0,n=l.projects)},[n]}class Ot extends se{constructor(e){super(),le(this,e,Pt,zt,ne,{projects:0})}}function Ht(t){let e,s,n,l,o,i,a,m,c,f,p,j,g,w,C,E,z,T,$,k,A,P,B,R,b,h,L,N,x,J,Q;return f=new Rt({props:{basics:t[0].basics}}),w=new St({props:{education:t[0].education}}),T=new Nt({props:{skills:t[0].skills}}),P=new Et({props:{experience:t[0].work}}),h=new Ot({props:{projects:t[0].projects}}),{c(){e=u("p"),s=u("a"),s.innerHTML='Download PDF <i class="fas fa-download svelte-zx7rx3"></i>',l=v(),o=u("img"),m=v(),c=u("main"),ae(f.$$.fragment),p=v(),j=u("h3"),j.textContent="EDUCATION",g=v(),ae(w.$$.fragment),C=v(),E=u("h3"),E.textContent="SKILLS",z=v(),ae(T.$$.fragment),$=v(),k=u("h3"),k.textContent="EXPERIENCE",A=v(),ae(P.$$.fragment),B=v(),R=u("h3"),R.textContent="PROJECTS",b=v(),ae(h.$$.fragment),N=v(),x=u("p"),x.innerHTML=`Made with <i class="fas fa-heart svelte-zx7rx3"></i>
  from <i class="fab fa-canadian-maple-leaf svelte-zx7rx3"></i>`,d(s,"href","./RavindaranNavinn_Resume.pdf"),d(s,"target","__blank"),d(s,"class","svelte-zx7rx3"),d(e,"class","svelte-zx7rx3"),lt(o.src,i="./qr.png")||d(o,"src",i),d(o,"alt","QR Code for PDF link"),d(o,"class","svelte-zx7rx3"),d(j,"class","svelte-zx7rx3"),d(E,"class","svelte-zx7rx3"),d(k,"class","svelte-zx7rx3"),d(R,"class","svelte-zx7rx3"),d(c,"class","svelte-zx7rx3"),d(x,"class","svelte-zx7rx3")},m(_,M){S(_,e,M),r(e,s),S(_,l,M),S(_,o,M),S(_,m,M),S(_,c,M),X(f,c,null),r(c,p),r(c,j),r(c,g),X(w,c,null),r(c,C),r(c,E),r(c,z),X(T,c,null),r(c,$),r(c,k),r(c,A),X(P,c,null),r(c,B),r(c,R),r(c,b),X(h,c,null),S(_,N,M),S(_,x,M),Q=!0},p(_,[M]){const U={};M&1&&(U.basics=_[0].basics),f.$set(U);const F={};M&1&&(F.education=_[0].education),w.$set(F);const Y={};M&1&&(Y.skills=_[0].skills),T.$set(Y);const ie={};M&1&&(ie.experience=_[0].work),P.$set(ie);const K={};M&1&&(K.projects=_[0].projects),h.$set(K)},i(_){Q||(n||G(()=>{n=pe(s,de,{delay:200,duration:300}),n.start()}),a||G(()=>{a=pe(o,de,{delay:250,duration:300}),a.start()}),V(f.$$.fragment,_),V(w.$$.fragment,_),V(T.$$.fragment,_),V(P.$$.fragment,_),V(h.$$.fragment,_),L||G(()=>{L=pe(c,de,{delay:250,duration:300}),L.start()}),J||G(()=>{J=pe(x,de,{delay:300,duration:300}),J.start()}),Q=!0)},o(_){re(f.$$.fragment,_),re(w.$$.fragment,_),re(T.$$.fragment,_),re(P.$$.fragment,_),re(h.$$.fragment,_),Q=!1},d(_){_&&y(e),_&&y(l),_&&y(o),_&&y(m),_&&y(c),Z(f),Z(w),Z(T),Z(P),Z(h),_&&y(N),_&&y(x)}}}function Mt(t,e,s){let{resume:n}=e;return t.$$set=l=>{"resume"in l&&s(0,n=l.resume)},[n]}class It extends se{constructor(e){super(),le(this,e,Mt,Ht,ne,{resume:0})}}const xt="https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",qt={name:"Navinn Ravindaran",label:"",email:"navinn.ravindaran@mail.utoronto.ca",url:"https://navn.me",location:{city:"Toronto",region:"Ontario",countryCode:"CA"},profiles:[{network:"github-alt",username:"navn-r",url:"https://github.com/navn-r"},{network:"linkedin",username:"navn-r",url:"https://www.linkedin.com/in/navn-r"}]},Bt=[{name:"American Express",location:"Toronto, ON",position:"Full-Stack Software Engineer Intern",url:"https://www.americanexpress.com/en-ca/",startDate:"2023-09-05",endDate:"2023-12-22",highlights:["Leveraging React, TypeScript, and Node.js to streamline card member connections at Pearson International Airport (YYZ)"]},{name:"HubSpot",location:"Toronto, ON",position:"Software Engineer Co-op",url:"https://www.hubspot.com/",startDate:"2022-08-29",endDate:"2022-12-16",highlights:["Developed a VSCode extension leveraging TypeScript's internal type checker to provide full type introspection for symbols, eliminating the need to traverse multiple locations for nested type definitions","Implemented the ability to re-run migrations across <strong>1000+</strong> front-end repositories using React and Redux, streamlining core infrastructure workflows by removing redundant duplication of settings","Extended a project generator CLI to support automated code refactoring scripts using Node and TypeScript, enabling all HubSpot front-end developers to build code mods using the TypeScript abstract syntax tree"]},{name:"Royal Bank of Canada",location:"Toronto, ON",position:"Full-Stack Software Developer Co-op",url:"https://www.rbc.com/",startDate:"2022-01-10",endDate:"2022-04-22",highlights:["Optimised <strong>35+</strong> crucial user interactions by leveraging Google Analytics to streamline the mortgage application process","Expanded access to new French and Bilingual mortgage clients by implementing automated language preference with app-wide translations using Angular and Spring boot"]},{name:"Halo Science",location:"Chicago, IL",position:"Full-Stack Software Engineer Intern",url:"https://www.halo.science",startDate:"2021-05-03",endDate:"2021-08-31",highlights:["Pioneered an E2E automation pipeline with Jest, Playwright and GitHub Actions, eliminating redundant manual user tests","Reduced developer setup from <strong>2 hours</strong> to <strong>10 minutes</strong> by dockerizing the React and Rails codebase with Docker Compose","Built a <strong>33%</strong> faster database seeding script with auto-generated data using Ruby, replacing outdated migration scripts"]},{name:"CaseWare International",location:"Toronto, ON",position:"Software Developer Co-op",url:"https://www.caseware.com/ca",startDate:"2020-09-08",endDate:"2021-04-30",highlights:["Decreased developer & QA regression efforts by <strong>60%</strong> by converting manual tests to unit tests with Karma and Jasmine","Refactored <strong>700+</strong> lines of legacy AngularJS plugins to Angular, improving code modularity using dependency injection","Developed an audit trail function used by <strong>130+</strong> international accounting firms, minimizing problematic behaviors such as asset misappropriation and protecting clients by providing transaction history"]}],Ft=[{institution:"University of Toronto",location:"Toronto, ON",url:"https://www.utoronto.ca/",area:"Computer Science Co-op",studyType:"Honours Bachelor of Science",startDate:"2019-09-08",endDate:"2024-04-30",score:"3.26",courses:["Software Design (CSCB07)","Intro to Software Engineering (CSCC01)","Programming on the Web (CSCC09)","Engineering Large Software Systems (CSCD01)"],awards:["Dean's List","UofT Scholar"]}],Gt=[{name:"Languages",keywords:["TypeScript","JavaScript","HTML","CSS","Java","Python","Ruby","SQL","C","Shell"]},{name:"Frameworks & Tools",keywords:["React","Angular","Node.js","Ruby on Rails","Docker","Jira","MongoDB","PostgreSQL","Firebase"]},{name:"Concepts",keywords:["APIs (REST, GraphQL)","Agile Methodologies (Scrum, Kanban)","Test Driven Development","DBMS","CI/CD"]}],Jt=[{name:"DrawHub",description:"A realtime collaborative whiteboard platform featuring custom visibility, email notifications, and exportable canvasses",highlights:[],startDate:"2022-07",endDate:"2022-08",repo:"https://github.com/navn-r/drawhub",type:"Website",technology:["React","NestJS","WebSockets","GraphQL","MongoDB","Redis","Auth0","AWS S3","Kubernetes","DigitalOcean"]},{name:"Noten",description:"A semester-based grade tracker with <strong>100+</strong> installs, multiple grade scales, grade prediction, and selective calculation",highlights:[],startDate:"2020-04",endDate:"2020-05",repo:"https://github.com/navn-r/noten",url:"https://play.google.com/store/apps/details?id=com.noten",type:"Google Play Store",features:[],technology:["Ionic","React","TypeScript","Firebase Realtime Database + Authentication"]}];var Qt={$schema:xt,basics:qt,work:Bt,education:Ft,skills:Gt,projects:Jt};new It({target:document.getElementById("app"),props:{resume:Qt},intro:!0});
import{S as Z,i as x,s as ee,e as r,t as k,a as d,b as u,c as $,d as i,f as I,g as y,n as z,h as W,j as Ce,k as te,l as Le,m as le,o as oe,p as ne,q as se,r as ae,u as re,v as ce}from"./vendor.2dff160a.js";const Ae=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};Ae();const K=a=>new Date(a).toLocaleString("en-GB",{month:"short",year:"numeric"});function he(a,l,s){const e=a.slice();return e[1]=l[s],e}function ge(a){let l,s,e,t,o=a[1].institution+"",n,h,T,g,f=a[1].location+"",v,N,P,j,H=a[1].studyType+"",A,B,L=a[1].area+"",O,S,w,p=K(a[1].startDate)+"",M,_,D=K(a[1].endDate)+"",m,q,b,J,Q,R=a[1].score+"",c,C,U=a[1].awards.join(", ")+"",X,V,G,Y,fe,ie=a[1].courses.join(", ")+"",ue,pe;return{c(){l=r("div"),s=r("p"),e=r("a"),t=r("h4"),n=k(o),T=d(),g=r("span"),v=k(f),N=d(),P=r("p"),j=r("span"),A=k(H),B=k(", "),O=k(L),S=d(),w=r("span"),M=k(p),_=k(" \u2014 "),m=k(D),q=d(),b=r("p"),J=r("strong"),J.textContent="Cumulative GPA:",Q=d(),c=k(R),C=k(" \u2014 "),X=k(U),V=d(),G=r("p"),Y=r("strong"),Y.textContent="Teaching Assistant:",fe=d(),ue=k(ie),pe=d(),u(e,"href",h=a[1].url),u(e,"class","svelte-zbv5qa"),u(s,"class","svelte-zbv5qa"),u(P,"class","svelte-zbv5qa"),u(l,"class","svelte-zbv5qa")},m(E,F){$(E,l,F),i(l,s),i(s,e),i(e,t),i(t,n),i(s,T),i(s,g),i(g,v),i(l,N),i(l,P),i(P,j),i(j,A),i(j,B),i(j,O),i(P,S),i(P,w),i(w,M),i(w,_),i(w,m),$(E,q,F),$(E,b,F),i(b,J),i(b,Q),i(b,c),i(b,C),i(b,X),$(E,V,F),$(E,G,F),i(G,Y),i(G,fe),i(G,ue),i(G,pe)},p(E,F){F&1&&o!==(o=E[1].institution+"")&&I(n,o),F&1&&h!==(h=E[1].url)&&u(e,"href",h),F&1&&f!==(f=E[1].location+"")&&I(v,f),F&1&&H!==(H=E[1].studyType+"")&&I(A,H),F&1&&L!==(L=E[1].area+"")&&I(O,L),F&1&&p!==(p=K(E[1].startDate)+"")&&I(M,p),F&1&&D!==(D=K(E[1].endDate)+"")&&I(m,D),F&1&&R!==(R=E[1].score+"")&&I(c,R),F&1&&U!==(U=E[1].awards.join(", ")+"")&&I(X,U),F&1&&ie!==(ie=E[1].courses.join(", ")+"")&&I(ue,ie)},d(E){E&&y(l),E&&y(q),E&&y(b),E&&y(V),E&&y(G)}}}function Me(a){let l,s=a[0],e=[];for(let t=0;t<s.length;t+=1)e[t]=ge(he(a,s,t));return{c(){l=r("section");for(let t=0;t<e.length;t+=1)e[t].c()},m(t,o){$(t,l,o);for(let n=0;n<e.length;n+=1)e[n].m(l,null)},p(t,[o]){if(o&1){s=t[0];let n;for(n=0;n<s.length;n+=1){const h=he(t,s,n);e[n]?e[n].p(h,o):(e[n]=ge(h),e[n].c(),e[n].m(l,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i:z,o:z,d(t){t&&y(l),W(e,t)}}}function Re(a,l,s){let{education:e}=l;return a.$$set=t=>{"education"in t&&s(0,e=t.education)},[e]}class He extends Z{constructor(l){super();x(this,l,Re,Me,ee,{education:0})}}function de(a,l,s){const e=a.slice();return e[1]=l[s],e}function me(a,l,s){const e=a.slice();return e[4]=l[s],e}function ve(a){let l,s=a[4]+"";return{c(){l=r("li")},m(e,t){$(e,l,t),l.innerHTML=s},p(e,t){t&1&&s!==(s=e[4]+"")&&(l.innerHTML=s)},d(e){e&&y(l)}}}function _e(a){let l,s,e,t=a[1].name+"",o,n,h,T=a[1].position+"",g,f,v,N=K(a[1].startDate)+"",P,j,H=K(a[1].endDate)+"",A,B,L,O,S=a[1].highlights,w=[];for(let p=0;p<S.length;p+=1)w[p]=ve(me(a,S,p));return{c(){l=r("p"),s=r("span"),e=r("a"),o=k(t),h=k(" | "),g=k(T),f=d(),v=r("span"),P=k(N),j=k(" \u2014 "),A=k(H),B=d(),L=r("ul");for(let p=0;p<w.length;p+=1)w[p].c();O=d(),u(e,"href",n=a[1].url),u(e,"class","svelte-r19qi2"),u(l,"class","svelte-r19qi2")},m(p,M){$(p,l,M),i(l,s),i(s,e),i(e,o),i(s,h),i(s,g),i(l,f),i(l,v),i(v,P),i(v,j),i(v,A),$(p,B,M),$(p,L,M);for(let _=0;_<w.length;_+=1)w[_].m(L,null);i(L,O)},p(p,M){if(M&1&&t!==(t=p[1].name+"")&&I(o,t),M&1&&n!==(n=p[1].url)&&u(e,"href",n),M&1&&T!==(T=p[1].position+"")&&I(g,T),M&1&&N!==(N=K(p[1].startDate)+"")&&I(P,N),M&1&&H!==(H=K(p[1].endDate)+"")&&I(A,H),M&1){S=p[1].highlights;let _;for(_=0;_<S.length;_+=1){const D=me(p,S,_);w[_]?w[_].p(D,M):(w[_]=ve(D),w[_].c(),w[_].m(L,O))}for(;_<w.length;_+=1)w[_].d(1);w.length=S.length}},d(p){p&&y(l),p&&y(B),p&&y(L),W(w,p)}}}function Ee(a){let l,s=a[0],e=[];for(let t=0;t<s.length;t+=1)e[t]=_e(de(a,s,t));return{c(){l=r("section");for(let t=0;t<e.length;t+=1)e[t].c()},m(t,o){$(t,l,o);for(let n=0;n<e.length;n+=1)e[n].m(l,null)},p(t,[o]){if(o&1){s=t[0];let n;for(n=0;n<s.length;n+=1){const h=de(t,s,n);e[n]?e[n].p(h,o):(e[n]=_e(h),e[n].c(),e[n].m(l,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i:z,o:z,d(t){t&&y(l),W(e,t)}}}function Ie(a,l,s){let{experience:e}=l;return a.$$set=t=>{"experience"in t&&s(0,e=t.experience)},[e]}class Ne extends Z{constructor(l){super();x(this,l,Ie,Ee,ee,{experience:0})}}function be(a,l,s){const e=a.slice();return e[1]=l[s],e}function we(a){let l,s,e,t,o,n=a[1].username+"",h,T,g;return{c(){l=r("div"),s=r("i"),t=d(),o=r("a"),h=k(n),g=d(),u(s,"class",e="fab fa-"+a[1].network+" svelte-1d7dtv7"),u(o,"href",T=a[1].url),u(l,"class","contact svelte-1d7dtv7")},m(f,v){$(f,l,v),i(l,s),i(l,t),i(l,o),i(o,h),i(l,g)},p(f,v){v&1&&e!==(e="fab fa-"+f[1].network+" svelte-1d7dtv7")&&u(s,"class",e),v&1&&n!==(n=f[1].username+"")&&I(h,n),v&1&&T!==(T=f[1].url)&&u(o,"href",T)},d(f){f&&y(l)}}}function Pe(a){let l,s,e=a[0].name+"",t,o,n,h,T,g,f,v=a[0].email+"",N,P,j,H,A,B,L,O,S=a[0].url.replace("https://","")+"",w,p,M,_=a[0].profiles,D=[];for(let m=0;m<_.length;m+=1)D[m]=we(be(a,_,m));return{c(){l=r("section"),s=r("h1"),t=k(e),o=d(),n=r("div"),h=r("div"),T=r("i"),g=d(),f=r("a"),N=k(v),j=d(),H=r("div"),A=r("div"),B=r("i"),L=d(),O=r("a"),w=k(S),M=d();for(let m=0;m<D.length;m+=1)D[m].c();u(s,"class","svelte-1d7dtv7"),u(T,"class","fas fa-inbox svelte-1d7dtv7"),u(f,"href",P="mailto:"+a[0].email),u(h,"class","contact svelte-1d7dtv7"),u(B,"class","fas fa-link svelte-1d7dtv7"),u(O,"href",p=a[0].url),u(A,"class","contact svelte-1d7dtv7"),u(H,"class","lower svelte-1d7dtv7"),u(n,"class","contacts svelte-1d7dtv7"),u(l,"class","svelte-1d7dtv7")},m(m,q){$(m,l,q),i(l,s),i(s,t),i(l,o),i(l,n),i(n,h),i(h,T),i(h,g),i(h,f),i(f,N),i(n,j),i(n,H),i(H,A),i(A,B),i(A,L),i(A,O),i(O,w),i(H,M);for(let b=0;b<D.length;b+=1)D[b].m(H,null)},p(m,[q]){if(q&1&&e!==(e=m[0].name+"")&&I(t,e),q&1&&v!==(v=m[0].email+"")&&I(N,v),q&1&&P!==(P="mailto:"+m[0].email)&&u(f,"href",P),q&1&&S!==(S=m[0].url.replace("https://","")+"")&&I(w,S),q&1&&p!==(p=m[0].url)&&u(O,"href",p),q&1){_=m[0].profiles;let b;for(b=0;b<_.length;b+=1){const J=be(m,_,b);D[b]?D[b].p(J,q):(D[b]=we(J),D[b].c(),D[b].m(H,null))}for(;b<D.length;b+=1)D[b].d(1);D.length=_.length}},i:z,o:z,d(m){m&&y(l),W(D,m)}}}function Oe(a,l,s){let{basics:e}=l;return a.$$set=t=>{"basics"in t&&s(0,e=t.basics)},[e]}class qe extends Z{constructor(l){super();x(this,l,Oe,Pe,ee,{basics:0})}}function ke(a,l,s){const e=a.slice();return e[1]=l[s],e}function $e(a){let l,s=a[1].name+"",e,t,o,n=a[1].keywords.join(", ")+"",h,T,g;return{c(){l=r("strong"),e=k(s),t=k(":"),o=d(),h=k(n),T=d(),g=r("br"),u(l,"class","svelte-n17fg2")},m(f,v){$(f,l,v),i(l,e),i(l,t),$(f,o,v),$(f,h,v),$(f,T,v),$(f,g,v)},p(f,v){v&1&&s!==(s=f[1].name+"")&&I(e,s),v&1&&n!==(n=f[1].keywords.join(", ")+"")&&I(h,n)},d(f){f&&y(l),f&&y(o),f&&y(h),f&&y(T),f&&y(g)}}}function Je(a){let l,s=a[0],e=[];for(let t=0;t<s.length;t+=1)e[t]=$e(ke(a,s,t));return{c(){l=r("section");for(let t=0;t<e.length;t+=1)e[t].c();u(l,"class","svelte-n17fg2")},m(t,o){$(t,l,o);for(let n=0;n<e.length;n+=1)e[n].m(l,null)},p(t,[o]){if(o&1){s=t[0];let n;for(n=0;n<s.length;n+=1){const h=ke(t,s,n);e[n]?e[n].p(h,o):(e[n]=$e(h),e[n].c(),e[n].m(l,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i:z,o:z,d(t){t&&y(l),W(e,t)}}}function Be(a,l,s){let{skills:e}=l;return a.$$set=t=>{"skills"in t&&s(0,e=t.skills)},[e]}class Fe extends Z{constructor(l){super();x(this,l,Be,Je,ee,{skills:0})}}function ye(a,l,s){const e=a.slice();return e[1]=l[s],e}function De(a,l,s){const e=a.slice();return e[4]=l[s],e}function Se(a){let l,s=a[1].highlights,e=[];for(let t=0;t<s.length;t+=1)e[t]=Te(De(a,s,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=Ce()},m(t,o){for(let n=0;n<e.length;n+=1)e[n].m(t,o);$(t,l,o)},p(t,o){if(o&1){s=t[1].highlights;let n;for(n=0;n<s.length;n+=1){const h=De(t,s,n);e[n]?e[n].p(h,o):(e[n]=Te(h),e[n].c(),e[n].m(l.parentNode,l))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},d(t){W(e,t),t&&y(l)}}}function Te(a){let l,s=a[4]+"";return{c(){l=r("li")},m(e,t){$(e,l,t),l.innerHTML=s},p(e,t){t&1&&s!==(s=e[4]+"")&&(l.innerHTML=s)},d(e){e&&y(l)}}}function je(a){let l,s,e=a[1].name+"",t,o,n,h,T,g=a[1].type+"",f,v,N,P,j,H,A,B,L,O,S,w,p=a[1].description+"",M,_,D,m,q,b=a[1].technology.join(", ")+"",J,Q,R=a[1].highlights&&Se(a);return{c(){l=r("p"),s=r("strong"),t=k(e),o=d(),n=r("a"),h=k("("),T=r("strong"),f=k(g),v=k(")"),P=d(),j=r("a"),H=k("("),A=r("strong"),A.textContent="GitHub",B=k(")"),O=d(),S=r("ul"),w=r("li"),M=d(),R&&R.c(),_=d(),D=r("li"),m=r("strong"),m.textContent="Technology:",q=d(),J=k(b),Q=d(),u(s,"class","svelte-yb239a"),u(T,"class","svelte-yb239a"),u(n,"href",N=a[1].url),u(n,"class","svelte-yb239a"),u(A,"class","svelte-yb239a"),u(j,"href",L=a[1].repo),u(j,"class","svelte-yb239a"),u(l,"class","svelte-yb239a")},m(c,C){$(c,l,C),i(l,s),i(s,t),i(l,o),i(l,n),i(n,h),i(n,T),i(T,f),i(n,v),i(l,P),i(l,j),i(j,H),i(j,A),i(j,B),$(c,O,C),$(c,S,C),i(S,w),w.innerHTML=p,i(S,M),R&&R.m(S,null),i(S,_),i(S,D),i(D,m),i(D,q),i(D,J),i(S,Q)},p(c,C){C&1&&e!==(e=c[1].name+"")&&I(t,e),C&1&&g!==(g=c[1].type+"")&&I(f,g),C&1&&N!==(N=c[1].url)&&u(n,"href",N),C&1&&L!==(L=c[1].repo)&&u(j,"href",L),C&1&&p!==(p=c[1].description+"")&&(w.innerHTML=p),c[1].highlights?R?R.p(c,C):(R=Se(c),R.c(),R.m(S,_)):R&&(R.d(1),R=null),C&1&&b!==(b=c[1].technology.join(", ")+"")&&I(J,b)},d(c){c&&y(l),c&&y(O),c&&y(S),R&&R.d()}}}function Ge(a){let l,s=a[0],e=[];for(let t=0;t<s.length;t+=1)e[t]=je(ye(a,s,t));return{c(){l=r("section");for(let t=0;t<e.length;t+=1)e[t].c()},m(t,o){$(t,l,o);for(let n=0;n<e.length;n+=1)e[n].m(l,null)},p(t,[o]){if(o&1){s=t[0];let n;for(n=0;n<s.length;n+=1){const h=ye(t,s,n);e[n]?e[n].p(h,o):(e[n]=je(h),e[n].c(),e[n].m(l,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i:z,o:z,d(t){t&&y(l),W(e,t)}}}function ze(a,l,s){let{projects:e}=l;return a.$$set=t=>{"projects"in t&&s(0,e=t.projects)},[e]}class Qe extends Z{constructor(l){super();x(this,l,ze,Ge,ee,{projects:0})}}function Ke(a){let l,s,e,t,o,n,h,T,g,f,v,N,P,j,H,A,B,L,O,S,w,p,M,_,D,m,q,b,J,Q,R;return f=new qe({props:{basics:a[0].basics}}),j=new He({props:{education:a[0].education}}),L=new Fe({props:{skills:a[0].skills}}),p=new Ne({props:{experience:a[0].work}}),m=new Qe({props:{projects:a[0].projects}}),{c(){l=r("p"),s=r("a"),s.innerHTML='Download PDF <i class="fas fa-download svelte-ri9uc9"></i>',t=d(),o=r("img"),T=d(),g=r("main"),te(f.$$.fragment),v=d(),N=r("h3"),N.innerHTML='<span class="svelte-ri9uc9">EDUCATION</span>',P=d(),te(j.$$.fragment),H=d(),A=r("h3"),A.innerHTML='<span class="svelte-ri9uc9">SKILLS</span>',B=d(),te(L.$$.fragment),O=d(),S=r("h3"),S.innerHTML='<span class="svelte-ri9uc9">EXPERIENCE</span>',w=d(),te(p.$$.fragment),M=d(),_=r("h3"),_.innerHTML='<span class="svelte-ri9uc9">PROJECTS</span>',D=d(),te(m.$$.fragment),b=d(),J=r("p"),J.innerHTML=`Made with <i class="fas fa-heart svelte-ri9uc9"></i>
  from <i class="fab fa-canadian-maple-leaf svelte-ri9uc9"></i>`,u(s,"href","./RavindaranNavinn_Resume.pdf"),u(s,"target","__blank"),u(s,"class","svelte-ri9uc9"),u(l,"class","svelte-ri9uc9"),Le(o.src,n="./qr.png")||u(o,"src",n),u(o,"alt","QR Code for PDF link"),u(o,"class","svelte-ri9uc9"),u(N,"class","svelte-ri9uc9"),u(A,"class","svelte-ri9uc9"),u(S,"class","svelte-ri9uc9"),u(_,"class","svelte-ri9uc9"),u(g,"class","svelte-ri9uc9"),u(J,"class","svelte-ri9uc9")},m(c,C){$(c,l,C),i(l,s),$(c,t,C),$(c,o,C),$(c,T,C),$(c,g,C),le(f,g,null),i(g,v),i(g,N),i(g,P),le(j,g,null),i(g,H),i(g,A),i(g,B),le(L,g,null),i(g,O),i(g,S),i(g,w),le(p,g,null),i(g,M),i(g,_),i(g,D),le(m,g,null),$(c,b,C),$(c,J,C),R=!0},p(c,[C]){const U={};C&1&&(U.basics=c[0].basics),f.$set(U);const X={};C&1&&(X.education=c[0].education),j.$set(X);const V={};C&1&&(V.skills=c[0].skills),L.$set(V);const G={};C&1&&(G.experience=c[0].work),p.$set(G);const Y={};C&1&&(Y.projects=c[0].projects),m.$set(Y)},i(c){R||(e||oe(()=>{e=re(s,ce,{delay:200,duration:300}),e.start()}),h||oe(()=>{h=re(o,ce,{delay:250,duration:300}),h.start()}),ne(f.$$.fragment,c),ne(j.$$.fragment,c),ne(L.$$.fragment,c),ne(p.$$.fragment,c),ne(m.$$.fragment,c),q||oe(()=>{q=re(g,ce,{delay:250,duration:300}),q.start()}),Q||oe(()=>{Q=re(J,ce,{delay:300,duration:300}),Q.start()}),R=!0)},o(c){se(f.$$.fragment,c),se(j.$$.fragment,c),se(L.$$.fragment,c),se(p.$$.fragment,c),se(m.$$.fragment,c),R=!1},d(c){c&&y(l),c&&y(t),c&&y(o),c&&y(T),c&&y(g),ae(f),ae(j),ae(L),ae(p),ae(m),c&&y(b),c&&y(J)}}}function Ue(a,l,s){let{resume:e}=l;return a.$$set=t=>{"resume"in t&&s(0,e=t.resume)},[e]}class We extends Z{constructor(l){super();x(this,l,Ue,Ke,ee,{resume:0})}}const Xe="https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",Ve={name:"Navinn Ravindaran",label:"",email:"navinn.ravindaran@mail.utoronto.ca",url:"https://navn.me",location:{city:"Toronto",region:"Ontario",countryCode:"CA"},profiles:[{network:"github-alt",username:"navn-r",url:"https://github.com/navn-r"},{network:"linkedin",username:"navn-r",url:"https://www.linkedin.com/in/navn-r"}]},Ye=[{name:"Royal Bank of Canada",location:"Toronto, ON",position:"Full-Stack Software Developer Co-op",url:"https://www.rbc.com/",startDate:"2022-01-10",endDate:"2022-04-22",highlights:["Incoming Winter 2022 Co-op \u2014 OMNI Technology & Operations; primarily developing with Angular and Java Spring"]},{name:"Major League Hacking",location:"Remote, N.A.",position:"Open Source Fellow",url:"https://fellowship.mlh.io",startDate:"2021-06-05",endDate:"2021-08-31",highlights:["Selected as one of <strong>30</strong> fellows from over <strong>5000+</strong> international applicants, under the guidance of MLH mentors and coaches","Implemented and demoed Git merge conflict resolution in the Jupyterlab IDE using React, TypeScript and Python, allowing data scientists to preview and fix Jupyter Notebook conflicts without a terminal"]},{name:"Halo Science",location:"Chicago, IL",position:"Full-Stack Software Engineer Intern",url:"https://www.halo.science",startDate:"2021-05-03",endDate:"2021-08-31",highlights:["Pioneered an E2E automation pipeline with Jest, Playwright and GitHub Actions, eliminating redundant manual user tests","Reduced developer setup from <strong>2 hours</strong> to <strong>10 minutes</strong> by dockerizing the React and Rails codebase with Docker Compose","Built a <strong>33%</strong> faster database seeding script with auto-generated data using Ruby, replacing outdated migration scripts"]},{name:"CaseWare International",location:"Toronto, ON",position:"Software Developer Co-op",url:"https://www.caseware.com/ca",startDate:"2020-09-08",endDate:"2021-04-30",highlights:["Decreased developer & QA regression efforts by <strong>60%</strong> by converting manual tests to unit tests with Karma and Jasmine","Refactored <strong>700+</strong> lines of legacy AngularJS plugins to Angular, improving code modularity using dependency injection","Developed the foundation of an audit trail used by <strong>130+</strong> international accounting firms, preventing asset misappropriation"]}],Ze=[{institution:"University of Toronto",location:"Toronto, ON",url:"https://www.utoronto.ca/",area:"Computer Science & Statistics Co-op",studyType:"Honours Bachelor of Science",startDate:"2019-09-08",endDate:"2023-04-30",score:"3.58 / 4.00",courses:["Software Design (CSCB07)"],awards:["Dean's List of Academic Excellence","UofT Scholar ($7500)"]}],xe=[{name:"Languages",keywords:["TypeScript","JavaScript","HTML","CSS","Java","Python","Ruby","SQL","C","Shell"]},{name:"Frameworks & Tools",keywords:["React","Angular","Node.js","Ruby on Rails","Docker","Jira","MongoDB","PostgreSQL","Firebase"]},{name:"Concepts",keywords:["APIs (REST, GraphQL)","Agile Methodologies (Scrum, Kanban)","Test Driven Development","CI/CD"]}],et=[{name:"UImpactify",description:"An online learning and crowdfunding platform to provide accessible specialized education in the social purpose sector",highlights:["Spearheaded the design and development of course creation, realtime chat, assessment analytics and donation systems to effectively engage student and instructor collaboration"],startDate:"2020-09",endDate:"2020-12",repo:"https://github.com/navn-r/uimpactify",url:"https://uimpactify.herokuapp.com",type:"Website",technology:["MongoDB","Express.js","Angular","Node.js"]},{name:"Noten",description:"A grade tracker with <strong>80+</strong> installs featuring multi-semester management, multiple grade scales, grade prediction, and selective course + grade calculation",highlights:[],startDate:"2020-04",endDate:"2020-05",repo:"https://github.com/navn-r/noten",url:"https://play.google.com/store/apps/details?id=com.noten",type:"Google Play Store",features:[],technology:["Ionic","React","TypeScript","Firebase Realtime Database + Authentication"]},{name:"Spotify API Clone",description:"A microservices REST API backend to create and follow user profiles, upload and like songs, generate and query playlists",startDate:"2020-11",endDate:"2020-12",repo:"https://github.com/navn-r/spotify-api-clone",url:"https://navn.me/spotify-api-clone",type:"Documentation",technology:["Java","Spring Boot","MongoDB","Neo4j"]}];var tt={$schema:Xe,basics:Ve,work:Ye,education:Ze,skills:xe,projects:et};new We({target:document.getElementById("app"),props:{resume:tt},intro:!0});
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{6880:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,9324,23)),Promise.resolve().then(n.bind(n,766)),Promise.resolve().then(n.bind(n,96)),Promise.resolve().then(n.bind(n,3479)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,3704,23)),Promise.resolve().then(n.t.bind(n,2353,23)),Promise.resolve().then(n.t.bind(n,7275,23))},3479:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,height:n=null,width:o=null,children:i,dataNtpc:s=""}=e;return(0,a.useEffect)(()=>{s&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(s)}})},[s]),(0,r.jsxs)(r.Fragment,{children:[i,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":s,dangerouslySetInnerHTML:{__html:t}}):null]})};let r=n(5155),a=n(2115)},766:(e,t,n)=>{"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:n,dataLayerName:s="dataLayer",nonce:l}=e;return void 0===r&&(r=s),(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(s,"'] = window['").concat(s,"'] || [];\n          function gtag(){window['").concat(s,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"' ").concat(n?",{ 'debug_mode': true }":"",");")},nonce:l}),(0,a.jsx)(i.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),nonce:l})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===r){console.warn("@next/third-parties: GA has not been initialized");return}window[r]?window[r].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(r," does not exist"))};let a=n(5155),o=n(2115),i=function(e){return e&&e.__esModule?e:{default:e}}(n(6584))},96:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:n="https://www.googletagmanager.com/gtm.js",dataLayerName:s="dataLayer",auth:l,preview:c,dataLayer:d,nonce:u}=e;i=s;let f="dataLayer"!==s?"&l=".concat(s):"";return(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(d?"w[l].push(".concat(JSON.stringify(d),")"):"","\n      })(window,'").concat(s,"');")},nonce:u}),(0,r.jsx)(o.default,{id:"_next-gtm","data-ntpc":"GTM",src:"".concat(n,"?id=").concat(t).concat(f).concat(l?"&gtm_auth=".concat(l):"").concat(c?"&gtm_preview=".concat(c,"&gtm_cookies_win=x"):""),nonce:u})]})};let r=n(5155),a=n(2115),o=function(e){return e&&e.__esModule?e:{default:e}}(n(6584)),i="dataLayer";t.sendGTMEvent=(e,t)=>{let n=t||i;window[n]=window[n]||[],window[n].push(e)}},6584:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a.a});var r=n(3704),a=n.n(r),o={};for(let e in r)"default"!==e&&(o[e]=()=>r[e]);n.d(t,o)},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return y},handleClientScriptLoad:function(){return p},initScriptLoader:function(){return m}});let r=n(306),a=n(9955),o=n(5155),i=r._(n(7650)),s=a._(n(2115)),l=n(1147),c=n(2815),d=n(8571),u=new Map,f=new Set,_=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},g=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:s="afterInteractive",onError:l,stylesheets:d}=e,g=n||t;if(g&&f.has(g))return;if(u.has(t)){f.add(g),u.get(t).then(r,l);return}let p=()=>{a&&a(),f.add(g)},m=document.createElement("script"),h=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),p()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});o?(m.innerHTML=o.__html||"",p()):i?(m.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",p()):t&&(m.src=t,u.set(t,h)),(0,c.setAttributesFromProps)(m,e),"worker"===s&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",s),d&&_(d),document.body.appendChild(m)};function p(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>g(e))}):g(e)}function m(e){e.forEach(p),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function h(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:u,stylesheets:_,...p}=e,{updateScripts:m,scripts:h,getIsSsr:y,appDir:b,nonce:w}=(0,s.useContext)(l.HeadManagerContext),v=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||n;v.current||(a&&e&&f.has(e)&&a(),v.current=!0)},[a,t,n]);let x=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{!x.current&&("afterInteractive"===c?g(e):"lazyOnload"===c&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>g(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(h[c]=(h[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:u,...p}]),m(h)):y&&y()?f.add(t||n):y&&!y()&&g(e)),b){if(_&&_.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:w,crossOrigin:p.crossOrigin}:{as:"script",nonce:w,crossOrigin:p.crossOrigin}),(0,o.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===c&&n&&i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:w,crossOrigin:p.crossOrigin}:{as:"script",nonce:w,crossOrigin:p.crossOrigin})}return null}Object.defineProperty(h,"__nextScript",{value:!0});let y=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return o}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function o(e,t){for(let[o,i]of Object.entries(t)){if(!t.hasOwnProperty(o)||r.includes(o)||void 0===i)continue;let s=n[o]||o.toLowerCase();"SCRIPT"===e.tagName&&a(s)?e[s]=!!i:e.setAttribute(s,String(i)),(!1===i||"SCRIPT"===e.tagName&&a(s)&&(!i||"false"===i))&&(e.setAttribute(s,""),e.removeAttribute(s))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9324:()=>{},2353:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},7275:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}}},e=>{var t=t=>e(e.s=t);e.O(0,[519,8173,8441,1517,7358],()=>t(6880)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7990],{3106:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/phmapfestival",function(){return a(2877)}])},5079:(e,t,a)=>{"use strict";a.d(t,{A:()=>x});var r=a(4848),s=a(6540),n=a(1194),l=a(1460),o=a(8985);let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("textarea",{className:(0,o.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...s})});i.displayName="Textarea";var d=a(192),u=a(8875);let c=d.bL,p=d.l9,f=d.ZL;d.bm;let m=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(d.hJ,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s})});m.displayName=d.hJ.displayName;let h=s.forwardRef((e,t)=>{let{className:a,children:s,...n}=e;return(0,r.jsxs)(f,{children:[(0,r.jsx)(m,{}),(0,r.jsxs)(d.UC,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...n,children:[s,(0,r.jsxs)(d.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(u.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=d.UC.displayName;let b=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};b.displayName="DialogHeader";let g=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(d.hE,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",a),...s})});g.displayName=d.hE.displayName;let y=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(d.VY,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...s})});y.displayName=d.VY.displayName;let x=e=>{let{src:t="",triggerType:a="image",linkText:o="Share Feedback",imageSrc:d="/images/icon-boy-phone-talk.png"}=e,[u,f]=(0,s.useState)(""),[m,x]=(0,s.useState)(""),[v,_]=(0,s.useState)(!1),[w,j]=(0,s.useState)(!1),[N,k]=(0,s.useState)(!1),E=async e=>{e.preventDefault(),_(!0);try{await fetch("https://bentraje-api-production.up.railway.app/receivefeedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,message:m,src:t})}),j(!0)}catch(e){console.error("Submission error:",e)}finally{_(!1)}};return(0,s.useEffect)(()=>{let e=()=>{k(window.innerWidth<=640)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,r.jsxs)(c,{children:[(0,r.jsx)(p,{asChild:!0,children:"image"===a?(0,r.jsx)(n.$,{variant:"ghost",className:"fixed bottom-2 right-0 px-2 py-0 hover:bg-transparent focus:ring-2 focus:ring-primary","aria-label":"Open feedback form",children:(0,r.jsx)("img",{src:d,alt:"Feedback icon",className:"transition-transform duration-200 hover:scale-105",style:{width:N?"46px":"64px",height:N?"46px":"64px"}})}):(0,r.jsx)(n.$,{variant:"link",className:"inline font-inherit text-inherit leading-none bg-transparent border-0 cursor-pointer text-primary hover:text-primary/90 transition-colors duration-200 p-0 m-0 h-auto appearance-none",style:{lineHeight:"inherit",verticalAlign:"baseline"},"aria-label":"Open feedback form",children:o})}),(0,r.jsxs)(h,{className:"max-w-sm mx-auto rounded-lg bg-white dark:bg-gray-900",children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(g,{className:"text-xl font-semibold text-gray-900 dark:text-gray-100",children:"Feedback Form"}),(0,r.jsx)(y,{className:"text-gray-600 dark:text-gray-400",children:"Got any ideas? I'd love to hear them! \uD83D\uDCA1\uD83D\uDE0A"})]}),w?(0,r.jsxs)("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[(0,r.jsx)("p",{children:"Thanks so much for your feedback! \uD83D\uDE0A"}),(0,r.jsx)("p",{children:"I can't promise I'll be able to make it happen, but I really appreciate you taking the time ❤️"}),(0,r.jsx)("p",{children:"Have a great day ahead! ☀️"})]}):(0,r.jsxs)("form",{onSubmit:E,className:"space-y-5",children:[(0,r.jsx)("div",{className:"space-y-2",children:(0,r.jsx)(l.p,{id:"email",placeholder:"Your Email (Optional, if you want updates)",type:"email",value:u,onChange:e=>f(e.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"})}),(0,r.jsx)(i,{id:"feedback",placeholder:"How can we improve?",value:m,onChange:e=>x(e.target.value),required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white min-h-[120px]"}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(n.$,{type:"submit",disabled:v,className:"bg-primary text-white hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50",children:v?"Sending...":"\uD83D\uDCAC Share Your Thoughts!"})})]})]})]})}},1194:(e,t,a)=>{"use strict";a.d(t,{$:()=>d});var r=a(4848),s=a(6540),n=a(3362),l=a(2732),o=a(8985);let i=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:a,variant:s,size:l,asChild:d=!1,...u}=e,c=d?n.DX:"button";return(0,r.jsx)(c,{className:(0,o.cn)(i({variant:s,size:l,className:a})),ref:t,...u})});d.displayName="Button"},1460:(e,t,a)=>{"use strict";a.d(t,{p:()=>l});var r=a(4848),s=a(6540),n=a(8985);let l=s.forwardRef((e,t)=>{let{className:a,type:s,...l}=e;return(0,r.jsx)("input",{type:s,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...l})});l.displayName="Input"},8985:(e,t,a)=>{"use strict";a.d(t,{cn:()=>n});var r=a(4164),s=a(856);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.QP)((0,r.$)(t))}},3089:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return o},noSSR:function(){return l}});let r=a(7677);a(4848),a(6540);let s=r._(a(8446));function n(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let a=s.default,r={loading:e=>{let{error:t,isLoading:a,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let o=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?a({...r,loader:()=>null!=o?o().then(n):Promise.resolve(n(()=>null))}):(delete r.webpack,delete r.modules,l(a,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9232:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});let r=a(7677)._(a(6540)).default.createContext(null)},8446:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let r=a(7677)._(a(6540)),s=a(9232),n=[],l=[],o=!1;function i(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function i(){if(!n){let t=new d(e,a);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!o){let e=a.webpack?a.webpack():a.modules;e&&l.push(t=>{for(let a of e)if(t.includes(a))return i()})}function u(e,t){!function(){i();let e=r.default.useContext(s.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let l=r.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),r.default.useMemo(()=>{var t;return l.loading||l.error?r.default.createElement(a.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:n.retry}):l.loaded?r.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return u.preload=()=>i(),u.displayName="LoadableComponent",r.default.forwardRef(u)}(i,e)}function c(e,t){let a=[];for(;e.length;){let r=e.pop();a.push(r(t))}return Promise.all(a).then(()=>{if(e.length)return c(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{c(n).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let a=()=>(o=!0,t());c(l,e).then(a,a)})),window.__NEXT_PRELOADREADY=u.preloadReady;let p=u},2877:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var r=a(4848);a(6540);var s=a(4953),n=a.n(s),l=a(2439),o=a.n(l),i=a(3368),d=a.n(i),u=a(3804),c=a(5079),p=a(1106),f=a.n(p);a(7537);let m=n()(()=>Promise.all([a.e(1166),a.e(5826),a.e(4780),a.e(4917),a.e(1578)]).then(a.bind(a,1578)),{loadableGenerated:{webpack:()=>[1578]},ssr:!1}),h=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d(),{children:[(0,r.jsx)("title",{children:"Philippines Map Festival | Ben Traje"})," "]}),(0,r.jsx)("div",{className:"".concat(o().className),children:(0,r.jsx)(m,{})}),(0,r.jsx)(c.A,{src:"phfestivalmap"}),(0,r.jsx)(u.GoogleAnalytics,{gaId:"G-XMRE4ES9RK"}),(0,r.jsx)(f(),{href:"/tokyomap",children:(0,r.jsx)("div",{className:"".concat(o().className," absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm p-0 rounded-xl shadow-lg w-36"),children:(0,r.jsx)("div",{className:"flex items-center justify-center mb-0",children:(0,r.jsx)("p",{className:"text-sm text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500",children:"See Other Maps"})})})})]})},7537:()=>{},2439:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}},4953:(e,t,a)=>{e.exports=a(3089)}},e=>{var t=t=>e(e.s=t);e.O(0,[6197,6119,9076,2801,1106,7003,636,6593,8792],()=>t(3106)),_N_E=e.O()}]);
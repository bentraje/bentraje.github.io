(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[584],{4842:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/tokyomap",function(){return a(2767)}])},5079:(e,t,a)=>{"use strict";a.d(t,{A:()=>b});var r=a(4848),s=a(6540),o=a(1194),n=a(1460),i=a(8985);let d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("textarea",{className:(0,i.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...s})});d.displayName="Textarea";var l=a(1782),c=a(8875);let u=l.bL,m=l.l9,p=l.ZL;l.bm;let f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.hJ,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s})});f.displayName=l.hJ.displayName;let g=s.forwardRef((e,t)=>{let{className:a,children:s,...o}=e;return(0,r.jsxs)(p,{children:[(0,r.jsx)(f,{}),(0,r.jsxs)(l.UC,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...o,children:[s,(0,r.jsxs)(l.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(c.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});g.displayName=l.UC.displayName;let x=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};x.displayName="DialogHeader";let h=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.hE,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",a),...s})});h.displayName=l.hE.displayName;let y=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.VY,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",a),...s})});y.displayName=l.VY.displayName;let b=e=>{let{src:t="",triggerType:a="image",linkText:i="Share Feedback",imageSrc:l="/images/icon-boy-phone-talk.png"}=e,[c,p]=(0,s.useState)(""),[f,b]=(0,s.useState)(""),[v,k]=(0,s.useState)(!1),[w,N]=(0,s.useState)(!1),[j,D]=(0,s.useState)(!1),_=async e=>{e.preventDefault(),k(!0);try{await fetch("https://bentraje-api-production.up.railway.app/receivefeedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,message:f,src:t})}),N(!0)}catch(e){console.error("Submission error:",e)}finally{k(!1)}};return(0,s.useEffect)(()=>{let e=()=>{D(window.innerWidth<=640)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,r.jsxs)(u,{children:[(0,r.jsx)(m,{asChild:!0,children:"image"===a?(0,r.jsx)(o.$,{variant:"ghost",className:"fixed bottom-2 right-0 px-2 py-0 hover:bg-transparent focus:ring-2 focus:ring-primary","aria-label":"Open feedback form",children:(0,r.jsx)("img",{src:l,alt:"Feedback icon",className:"transition-transform duration-200 hover:scale-105",style:{width:j?"46px":"64px",height:j?"46px":"64px"}})}):(0,r.jsx)(o.$,{variant:"link",className:"inline font-inherit text-inherit leading-none bg-transparent border-0 cursor-pointer text-primary hover:text-primary/90 transition-colors duration-200 p-0 m-0 h-auto appearance-none",style:{lineHeight:"inherit",verticalAlign:"baseline"},"aria-label":"Open feedback form",children:i})}),(0,r.jsxs)(g,{className:"max-w-sm mx-auto rounded-lg bg-white dark:bg-gray-900",children:[(0,r.jsxs)(x,{children:[(0,r.jsx)(h,{className:"text-xl font-semibold text-gray-900 dark:text-gray-100",children:"Feedback Form"}),(0,r.jsx)(y,{className:"text-gray-600 dark:text-gray-400",children:"Got any ideas? I'd love to hear them! \uD83D\uDCA1\uD83D\uDE0A"})]}),w?(0,r.jsxs)("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[(0,r.jsx)("p",{children:"Thanks so much for your feedback! \uD83D\uDE0A"}),(0,r.jsx)("p",{children:"I can't promise I'll be able to make it happen, but I really appreciate you taking the time ❤️"}),(0,r.jsx)("p",{children:"Have a great day ahead! ☀️"})]}):(0,r.jsxs)("form",{onSubmit:_,className:"space-y-5",children:[(0,r.jsx)("div",{className:"space-y-2",children:(0,r.jsx)(n.p,{id:"email",placeholder:"Your Email (Optional, if you want updates)",type:"email",value:c,onChange:e=>p(e.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"})}),(0,r.jsx)(d,{id:"feedback",placeholder:"How can we improve?",value:f,onChange:e=>b(e.target.value),required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white min-h-[120px]"}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(o.$,{type:"submit",disabled:v,className:"bg-primary text-white hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50",children:v?"Sending...":"\uD83D\uDCAC Share Your Thoughts!"})})]})]})]})}},1194:(e,t,a)=>{"use strict";a.d(t,{$:()=>l});var r=a(4848),s=a(6540),o=a(3362),n=a(2732),i=a(8985);let d=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=s.forwardRef((e,t)=>{let{className:a,variant:s,size:n,asChild:l=!1,...c}=e,u=l?o.DX:"button";return(0,r.jsx)(u,{className:(0,i.cn)(d({variant:s,size:n,className:a})),ref:t,...c})});l.displayName="Button"},1460:(e,t,a)=>{"use strict";a.d(t,{p:()=>n});var r=a(4848),s=a(6540),o=a(8985);let n=s.forwardRef((e,t)=>{let{className:a,type:s,...n}=e;return(0,r.jsx)("input",{type:s,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...n})});n.displayName="Input"},8985:(e,t,a)=>{"use strict";a.d(t,{cn:()=>o});var r=a(4164),s=a(856);function o(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.QP)((0,r.$)(t))}},2767:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var r=a(4848);a(6540),a(7537);var s=a(1106),o=a.n(s),n=a(5079),i=a(6169),d=a.n(i);let l=[["Tokyo Musems","/tokyomuseum"],["Tokyo Festivals","/tokyofestival"],["Tokyo Day Trips","/tokyodaytrip"],["Tokyo Markets Shotengai","/tokyomarket"],["Tokyo Outlet Stores","/tokyooutlet"],["PH Festivals","/phmapfestival"]],c=()=>(0,r.jsxs)("div",{className:"".concat(d().className," p-6 max-w-5xl mx-auto"),children:[(0,r.jsx)("h1",{className:"text-xl font-bold mb-2 text-center text-gray-800 dark:text-white",children:"\uD83D\uDDFA️\uD83D\uDCCDTokyo Map Guides(?)\uD83E\uDD14\uD83D\uDE35‍\uD83D\uDCAB"}),(0,r.jsxs)("p",{className:"text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm mb-5",children:["Random Tokyo notes, mapped out from my previous and upcoming trips. Hopefully, this can help others too! Feel free to share your  ",(0,r.jsx)(n.A,{src:"tokyomaps",triggerType:"text",linkText:"suggestions \uD83D\uDD17"})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4",children:l.map((e,t)=>(0,r.jsx)(o(),{href:e[1],children:(0,r.jsx)("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center cursor-pointer",children:(0,r.jsx)("span",{className:"text-center text-gray-700 dark:text-gray-200 font-medium",children:(0,r.jsx)("h2",{children:e[0]})})},t)}))})]})},7537:()=>{},6169:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[992,385,106,3,636,593,792],()=>t(4842)),_N_E=e.O()}]);
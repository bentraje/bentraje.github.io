(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7220],{98178:(e,a,t)=>{Promise.resolve().then(t.bind(t,2987))},2987:(e,a,t)=>{"use strict";t.d(a,{default:()=>k});var r=t(95155),s=t(12115),o=t(12317),n=t(31027),i=t(43463),d=t(69795);function l(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,d.QP)((0,i.$)(a))}let c=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=s.forwardRef((e,a)=>{let{className:t,variant:s,size:n,asChild:i=!1,...d}=e,u=i?o.DX:"button";return(0,r.jsx)(u,{className:l(c({variant:s,size:n,className:t})),ref:a,...d})});u.displayName="Button";let f=s.forwardRef((e,a)=>{let{className:t,type:s,...o}=e;return(0,r.jsx)("input",{type:s,className:l("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:a,...o})});f.displayName="Input";let m=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("textarea",{className:l("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:a,...s})});m.displayName="Textarea";var p=t(56095),g=t(23753);let x=p.bL,h=p.l9,b=p.ZL;p.bm;let y=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(p.hJ,{ref:a,className:l("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s})});y.displayName=p.hJ.displayName;let v=s.forwardRef((e,a)=>{let{className:t,children:s,...o}=e;return(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{}),(0,r.jsxs)(p.UC,{ref:a,className:l("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...o,children:[s,(0,r.jsxs)(p.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(g.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});v.displayName=p.UC.displayName;let w=e=>{let{className:a,...t}=e;return(0,r.jsx)("div",{className:l("flex flex-col space-y-1.5 text-center sm:text-left",a),...t})};w.displayName="DialogHeader";let N=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(p.hE,{ref:a,className:l("text-lg font-semibold leading-none tracking-tight",t),...s})});N.displayName=p.hE.displayName;let j=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(p.VY,{ref:a,className:l("text-sm text-muted-foreground",t),...s})});j.displayName=p.VY.displayName;let k=e=>{let{src:a="",triggerType:t="image",linkText:o="Share Feedback",imageSrc:n="/images/icon-boy-phone-talk.png"}=e,[i,d]=(0,s.useState)(""),[l,c]=(0,s.useState)(""),[p,g]=(0,s.useState)(!1),[b,y]=(0,s.useState)(!1),[k,S]=(0,s.useState)(!1),C=async e=>{e.preventDefault(),g(!0);try{await fetch("https://bentraje-api-production.up.railway.app/receivefeedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,message:l,src:a})}),y(!0)}catch(e){console.error("Submission error:",e)}finally{g(!1)}};return(0,s.useEffect)(()=>{let e=()=>{S(window.innerWidth<=640)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,r.jsxs)(x,{children:[(0,r.jsx)(h,{asChild:!0,children:"image"===t?(0,r.jsx)(u,{variant:"ghost",className:"fixed bottom-2 right-0 px-2 py-0 hover:bg-transparent focus:ring-2 focus:ring-primary","aria-label":"Open feedback form",children:(0,r.jsx)("img",{src:n,alt:"Feedback icon",className:"transition-transform duration-200 hover:scale-105",style:{width:k?"46px":"64px",height:k?"46px":"64px"}})}):(0,r.jsx)(u,{"aria-label":"Open feedback form",children:o})}),(0,r.jsxs)(v,{className:"max-w-sm mx-auto rounded-lg bg-white dark:bg-gray-900",children:[(0,r.jsxs)(w,{children:[(0,r.jsx)(N,{className:"text-xl font-semibold text-gray-900 dark:text-gray-100",children:"Contact Form"}),(0,r.jsx)(j,{className:"text-gray-600 dark:text-gray-400",children:"Got any inquiries? Ideas? Happy to hear them! \uD83D\uDCA1\uD83D\uDE0A"})]}),b?(0,r.jsxs)("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[(0,r.jsx)("p",{children:"Thanks for the message! "}),(0,r.jsx)("p",{children:"I'll get back to you as soon as I can ❤️"})]}):(0,r.jsxs)("form",{onSubmit:C,className:"space-y-5",children:[(0,r.jsx)("div",{className:"space-y-2",children:(0,r.jsx)(f,{id:"email",placeholder:"Your Email",type:"email",value:i,onChange:e=>d(e.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"})}),(0,r.jsx)(m,{id:"feedback",placeholder:"Your Message",value:l,onChange:e=>c(e.target.value),required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white min-h-[120px]"}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(u,{type:"submit",disabled:p,className:"bg-primary text-white hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50",children:p?"Sending...":"\uD83D\uDCAC Share Your Thoughts!"})})]})]})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[8928,8441,1517,7358],()=>a(98178)),_N_E=e.O()}]);
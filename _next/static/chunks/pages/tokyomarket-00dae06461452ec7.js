(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3698,5826],{5362:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/tokyomarket",function(){return a(9125)}])},57:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var o=a(4848),n=a(6540),r=a(1194),i=a(1460),s=a(8985);let l=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,o.jsx)("textarea",{className:(0,s.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...n})});l.displayName="Textarea";var d=a(4734);let u=e=>{let{src:t="",triggerType:a="image",linkText:s="Share Feedback",imageSrc:u="/images/icon-boy-phone-talk.png"}=e,[c,p]=(0,n.useState)(""),[m,h]=(0,n.useState)(""),[f,g]=(0,n.useState)(!1),[b,x]=(0,n.useState)(!1),[y,k]=(0,n.useState)(!1),w=async e=>{e.preventDefault(),g(!0);try{await fetch("https://bentraje-api-production.up.railway.app/receivefeedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,message:m,src:t})}),x(!0)}catch(e){console.error("Submission error:",e)}finally{g(!1)}};return(0,n.useEffect)(()=>{let e=()=>{k(window.innerWidth<=640)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,o.jsxs)(d.lG,{children:[(0,o.jsx)(d.zM,{asChild:!0,children:"image"===a?(0,o.jsx)(r.$,{variant:"ghost",className:"fixed bottom-2 right-0 px-2 py-0 hover:bg-transparent focus:ring-2 focus:ring-primary","aria-label":"Open feedback form",children:(0,o.jsx)("img",{src:u,alt:"Feedback icon",className:"transition-transform duration-200 hover:scale-105",style:{width:y?"46px":"64px",height:y?"46px":"64px"}})}):(0,o.jsx)(r.$,{variant:"link",className:"inline font-inherit text-inherit leading-none bg-transparent border-0 cursor-pointer text-primary hover:text-primary/90 transition-colors duration-200 p-0 m-0 h-auto appearance-none",style:{lineHeight:"inherit",verticalAlign:"baseline"},"aria-label":"Open feedback form",children:s})}),(0,o.jsxs)(d.Cf,{className:"max-w-sm mx-auto rounded-lg bg-white dark:bg-gray-900",children:[(0,o.jsxs)(d.c7,{children:[(0,o.jsx)(d.L3,{className:"text-xl font-semibold text-gray-900 dark:text-gray-100",children:"Feedback Form"}),(0,o.jsx)(d.rr,{className:"text-gray-600 dark:text-gray-400",children:"Got any ideas? I'd love to hear them! \uD83D\uDCA1\uD83D\uDE0A"})]}),b?(0,o.jsxs)("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[(0,o.jsx)("p",{children:"Thanks so much for your feedback! \uD83D\uDE0A"}),(0,o.jsx)("p",{children:"I can't promise I'll be able to make it happen, but I really appreciate you taking the time ❤️"}),(0,o.jsx)("p",{children:"Have a great day ahead! ☀️"})]}):(0,o.jsxs)("form",{onSubmit:w,className:"space-y-5",children:[(0,o.jsx)("div",{className:"space-y-2",children:(0,o.jsx)(i.p,{id:"email",placeholder:"Your Email (Optional, if you want updates)",type:"email",value:c,onChange:e=>p(e.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"})}),(0,o.jsx)(l,{id:"feedback",placeholder:"How can we improve?",value:m,onChange:e=>h(e.target.value),required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white min-h-[120px]"}),(0,o.jsx)("div",{className:"flex justify-end",children:(0,o.jsx)(r.$,{type:"submit",disabled:f,className:"bg-primary text-white hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50",children:f?"Sending...":"\uD83D\uDCAC Share Your Thoughts!"})})]})]})]})}},319:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var o=a(4848);let n=e=>{let{yOffset:t=0}=e;return(0,o.jsxs)("svg",{display:"block",height:"41px",width:"27px",viewBox:"0 0 27 41",style:{transform:"translateY(".concat(t,"px)")},children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("radialGradient",{id:"shadowGradient",children:[(0,o.jsx)("stop",{offset:"10%",stopOpacity:"0.4"}),(0,o.jsx)("stop",{offset:"100%",stopOpacity:"0.05"})]})}),(0,o.jsx)("ellipse",{cx:"13.5",cy:"34.8",rx:"10.5",ry:"5.25",fill:"url(#shadowGradient)"}),(0,o.jsx)("path",{fill:"red",d:"M27,13.5C27,19.07 20.25,27 14.75,34.5C14.02,35.5 12.98,35.5 12.25,34.5C6.75,27 0,19.22 0,13.5C0,6.04 6.04,0 13.5,0C20.96,0 27,6.04 27,13.5Z"}),(0,o.jsx)("path",{opacity:"0.25",d:"M13.5,0C6.04,0 0,6.04 0,13.5C0,19.22 6.75,27 12.25,34.5C13,35.52 14.02,35.5 14.75,34.5C20.25,27 27,19.07 27,13.5C27,6.04 20.96,0 13.5,0ZM13.5,1C20.42,1 26,6.58 26,13.5C26,15.9 24.5,19.18 22.22,22.74C19.95,26.3 16.71,30.14 13.94,33.91C13.74,34.18 13.61,34.32 13.5,34.44C13.39,34.32 13.26,34.18 13.06,33.91C10.28,30.13 7.41,26.31 5.02,22.77C2.62,19.23 1,15.95 1,13.5C1,6.58 6.58,1 13.5,1Z"}),(0,o.jsx)("circle",{fill:"white",cx:"13.5",cy:"13.5",r:"5.5"})]})}},1194:(e,t,a)=>{"use strict";a.d(t,{$:()=>d});var o=a(4848),n=a(6540),r=a(3362),i=a(2732),s=a(8985);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:a,variant:n,size:i,asChild:d=!1,...u}=e,c=d?r.DX:"button";return(0,o.jsx)(c,{className:(0,s.cn)(l({variant:n,size:i,className:a})),ref:t,...u})});d.displayName="Button"},4734:(e,t,a)=>{"use strict";a.d(t,{Cf:()=>p,L3:()=>h,c7:()=>m,lG:()=>l,rr:()=>f,zM:()=>d});var o=a(4848),n=a(6540),r=a(605),i=a(8875),s=a(8985);let l=r.bL,d=r.l9,u=r.ZL;r.bm;let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,o.jsx)(r.hJ,{ref:t,className:(0,s.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...n})});c.displayName=r.hJ.displayName;let p=n.forwardRef((e,t)=>{let{className:a,children:n,...l}=e;return(0,o.jsxs)(u,{children:[(0,o.jsx)(c,{}),(0,o.jsxs)(r.UC,{ref:t,className:(0,s.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...l,children:[n,(0,o.jsxs)(r.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,o.jsx)(i.A,{className:"h-4 w-4"}),(0,o.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});p.displayName=r.UC.displayName;let m=e=>{let{className:t,...a}=e;return(0,o.jsx)("div",{className:(0,s.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};m.displayName="DialogHeader";let h=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,o.jsx)(r.hE,{ref:t,className:(0,s.cn)("text-lg font-semibold leading-none tracking-tight",a),...n})});h.displayName=r.hE.displayName;let f=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,o.jsx)(r.VY,{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",a),...n})});f.displayName=r.VY.displayName},1460:(e,t,a)=>{"use strict";a.d(t,{p:()=>i});var o=a(4848),n=a(6540),r=a(8985);let i=n.forwardRef((e,t)=>{let{className:a,type:n,...i}=e;return(0,o.jsx)("input",{type:n,className:(0,r.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...i})});i.displayName="Input"},3205:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var o=a(4848),n=a(6540),r=a(4917),i=a(8985);let s=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,o.jsxs)(r.bL,{ref:t,className:(0,i.cn)("relative flex w-full touch-none select-none items-center",a),...n,children:[(0,o.jsx)(r.CC,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:(0,o.jsx)(r.Q6,{className:"absolute h-full bg-transparent"})}),(0,o.jsx)(r.zi,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]})});s.displayName=r.bL.displayName},8985:(e,t,a)=>{"use strict";a.d(t,{cn:()=>r});var o=a(4164),n=a(856);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.QP)((0,o.$)(t))}},9125:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>b,default:()=>x});var o=a(4848),n=a(6540),r=a(3368),i=a.n(r),s=a(9627),l=a(6914);a(4084),a(7537),a(4496);let d=JSON.parse('[{"count":56,"location":"Flea Market at Yoyogi Park","longitude":139.698316,"latitude":35.671839,"name":"Flea Market at Yoyogi Park","description":"- \uD83C\uDFAA Features **periodic markets**\\n- \uD83C\uDFA8 Known for **crafts**\\n- \uD83D\uDC55 Houses **vintage items**\\n- \uD83C\uDFAD Popular for **antiques**\\n- \uD83C\uDF3F Park **atmosphere**"},{"count":57,"location":"Koenji Street Market","longitude":139.649153770307,"latitude":35.70593046440971,"name":"Koenji Street Market","description":"- \uD83D\uDC55 Features **second-hand items**\\n- \uD83C\uDFAD Known for **vintage**\\n- \uD83C\uDFA8 Houses **unique finds**\\n- \uD83D\uDECD️ Popular for **clothing**\\n- \uD83C\uDFAA Market **atmosphere**"},{"count":61,"location":"Aoyama Farmer\'s Market","longitude":139.70855774975988,"latitude":35.6622001333877,"name":"Aoyama Farmer\'s Market","description":"- \uD83C\uDF3E Features **organic produce**\\n- \uD83C\uDFA8 Known for **handmade goods**\\n- \uD83C\uDF5C Houses **food vendors**\\n- \uD83C\uDF3F Popular for **fresh food**\\n- \uD83C\uDFAA Weekend **market atmosphere**"},{"count":63,"location":"Shibuya Chuogai","longitude":139.70010710368928,"latitude":35.65801121128269,"name":"Shibuya Chuogai","description":""},{"count":64,"location":"Tsukishima Monja Street","longitude":139.774694,"latitude":35.67117,"name":"Tsukishima Monja Street","description":"- \uD83C\uDF73 Features **monjayaki**\\n- \uD83C\uDF5C Known for **local cuisine**\\n- \uD83C\uDFEE Houses **restaurants**\\n- \uD83C\uDFAD Popular for **dining**\\n- \uD83C\uDFAA Traditional **atmosphere**"},{"count":1,"location":"Kappabashi Street","longitude":139.790957,"latitude":35.710313,"name":"Kappabashi Street","description":"- \uD83C\uDF73 Known as **Kitchen Town**, famous for kitchenware shops\\n- \uD83C\uDFA8 Features unique **replica food models**\\n- \uD83D\uDECD️ Houses numerous **cooking supply stores**\\n- \uD83D\uDD2A Known for **Japanese knives** and culinary tools\\n- \uD83C\uDFFA Offers traditional **Japanese ceramics**"},{"count":3,"location":"Shimokitazawa","longitude":139.6682297801306,"latitude":35.66230827223979,"name":"Shimokitazawa","description":"- \uD83D\uDC55 Famous for **vintage clothing shops**\\n- ☕ Features unique **indie cafes**\\n- \uD83C\uDFAD Known for **live music venues**\\n- \uD83C\uDFAA Popular for **street performances**\\n- \uD83C\uDFA8 Houses **art galleries**"},{"count":5,"location":"Jiyugaoka Sweet Forest","longitude":139.669623,"latitude":35.607095,"name":"Jiyugaoka Sweet Forest","description":"- \uD83C\uDF70 Famous for **dessert shops**\\n- \uD83C\uDF6A Features unique **sweet treats**\\n- \uD83C\uDF66 Known for **ice cream parlors**\\n- \uD83C\uDF6B Houses **chocolate boutiques**\\n- \uD83E\uDED6 Popular for **tea houses**"},{"count":6,"location":"Nakano Broadway","longitude":139.665832,"latitude":35.707195,"name":"Nakano Broadway","description":"- \uD83C\uDF8C Center for **otaku culture**\\n- \uD83D\uDCDA Features extensive **manga shops**\\n- \uD83C\uDFAE Known for **retro gaming**\\n- \uD83C\uDFA8 Houses **anime collectibles**\\n- \uD83D\uDECD️ Popular for **vintage toys**"},{"count":7,"location":"Togoshi Ginza Shopping Street","longitude":139.71712552928025,"latitude":35.61612107351639,"name":"Togoshi Ginza","description":"- \uD83D\uDECD️ **Longest shopping street** in Tokyo\\n- \uD83C\uDF5C Features numerous **food stalls**\\n- ☕ Houses local **cafes**\\n- \uD83C\uDFEA Known for **traditional shops**\\n- \uD83C\uDF71 Popular for **local delicacies**"},{"count":8,"location":"Okachimachi Panda Square","longitude":139.774153,"latitude":35.707506,"name":"Okachimachi Panda Square","description":"- \uD83D\uDC3C Features **panda-themed goods**\\n- \uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66 **Family-friendly** shopping area\\n- \uD83C\uDF6D Known for **local snacks**\\n- \uD83C\uDF81 Houses **gift shops**\\n- \uD83C\uDF88 Popular for **family activities**"},{"count":9,"location":"Koenji Junjo Shotengai","longitude":139.649879,"latitude":35.706446,"name":"Koenji Junjo Shotengai","description":"- \uD83C\uDFFA Features **retro atmosphere**\\n- \uD83C\uDFB8 Known for **indie music scene**\\n- \uD83C\uDF5C Houses local **eateries**\\n- \uD83D\uDC55 Popular for **vintage shopping**\\n- \uD83C\uDFA8 Center for **alternative culture**"},{"count":10,"location":"Ochanomizu Book Town","longitude":139.764846,"latitude":35.696021,"name":"Ochanomizu","description":"- \uD83D\uDCDA Famous for **rare books**\\n- \uD83D\uDCD6 Houses **second-hand bookstores**\\n- \uD83C\uDFB8 Known for **musical instruments**\\n- \uD83C\uDFBC Center for **music culture**\\n- \uD83D\uDCDC Features **academic books**"},{"count":11,"location":"Daikanyama Log Road","longitude":139.703427,"latitude":35.650626,"name":"Daikanyama","description":"- \uD83C\uDFA8 **Stylish shopping** area\\n- ☕ Features **trendy cafes**\\n- \uD83D\uDC57 Houses **fashion boutiques**\\n- \uD83C\uDF33 Known for **open spaces**\\n- \uD83D\uDCDA Popular for **modern design**"},{"count":12,"location":"Omotesando Hills","longitude":139.710659,"latitude":35.66537,"name":"Omotesando Hills","description":"- \uD83D\uDECD️ Features **luxury brands**\\n- \uD83C\uDFDB️ Known for **sophisticated architecture**\\n- \uD83C\uDFA8 Houses **art installations**\\n- ☕ Popular for **high-end cafes**\\n- \uD83D\uDC57 Center for **fashion culture**"},{"count":13,"location":"Sugamo Jizodori Shopping Street","longitude":139.73640422024144,"latitude":35.735038877800996,"name":"Sugamo Jizodori Shopping Street","description":""},{"count":14,"location":"Takadanobaba Station Market","longitude":139.704034,"latitude":35.712379,"name":"Takadanobaba","description":"- \uD83C\uDF5C Known for **local food stalls**\\n- \uD83D\uDC68‍\uD83C\uDF93 Popular with **students**\\n- \uD83C\uDFAE Features **gaming centers**\\n- \uD83C\uDF71 Houses **affordable eateries**\\n- \uD83D\uDCDA Near **university area**"},{"count":15,"location":"Meguro Kaisen Ichiba","longitude":139.715648,"latitude":35.632914,"name":"Meguro","description":"- \uD83D\uDC1F Specializes in **fresh seafood**\\n- \uD83C\uDF63 Known for **sushi restaurants**\\n- \uD83E\uDD90 Features **seafood products**\\n- \uD83D\uDC21 Houses **fish markets**\\n- \uD83C\uDF71 Popular for **seafood bowls**"},{"count":17,"location":"Takeshita Street","longitude":139.70282,"latitude":35.670122,"name":"Harajuku Takeshita Street","description":"- \uD83D\uDC57 Center of **youth fashion**\\n- \uD83C\uDF6D Known for **trendy shops**\\n- \uD83C\uDFA8 Features **pop culture**\\n- \uD83C\uDF70 Houses **cute cafes**\\n- \uD83C\uDFAA Popular for **street fashion**"},{"count":18,"location":"Kiyosumi Shirakawa Street Market","longitude":139.803089,"latitude":35.683829,"name":"Kiyosumi Shirakawa","description":"- ☕ Known for **specialty cafes**\\n- \uD83C\uDFA8 Features **artisan shops**\\n- \uD83C\uDF71 Houses **local food specialties**\\n- \uD83D\uDCDA Popular for **book cafes**\\n- \uD83C\uDFAD Center for **art galleries**"},{"count":21,"location":"Shinjuku Golden Gai","longitude":139.703143,"latitude":35.694237,"name":"Shinjuku Golden Gai","description":"- \uD83C\uDF7A Features **tiny bars**\\n- \uD83C\uDFEE Known for **unique atmosphere**\\n- \uD83C\uDF76 Houses **traditional izakayas**\\n- \uD83C\uDFAD Popular with **nightlife enthusiasts**\\n- \uD83D\uDCF8 Perfect for **photography**"},{"count":22,"location":"Omoide Yokocho","longitude":139.700331,"latitude":35.693275,"name":"Omoide Yokocho","description":"- \uD83C\uDF62 Known for **yakitori stalls**\\n- \uD83C\uDFEE Features **nostalgic atmosphere**\\n- \uD83C\uDF7A Houses **small bars**\\n- \uD83C\uDFAD Popular for **night dining**\\n- \uD83D\uDCF8 Iconic **photo spot**"},{"count":23,"location":"Nonbei Yokocho","longitude":139.699763,"latitude":35.658463,"name":"Nonbei Yokocho","description":"- \uD83C\uDF76 Features **cozy bars**\\n- \uD83C\uDFEE Known for **local atmosphere**\\n- \uD83C\uDF7A Houses **traditional pubs**\\n- \uD83C\uDFAD Popular with **locals**\\n- \uD83C\uDF19 Perfect for **evening drinks**"},{"count":25,"location":"Ebisu Yokocho","longitude":139.711221,"latitude":35.64629,"name":"Ebisu Yokocho","description":"- \uD83C\uDF7A Features **lively izakayas**\\n- \uD83C\uDF5C Known for **street food**\\n- \uD83C\uDFEE Houses **food vendors**\\n- \uD83C\uDFAD Popular for **night dining**\\n- \uD83C\uDF06 Vibrant **evening scene**"},{"count":29,"location":"Shibuya Center-gai","longitude":139.70148,"latitude":35.659204,"name":"Shibuya Center-gai","description":"- \uD83C\uDFAE Features **entertainment centers**\\n- \uD83C\uDF5C Known for **restaurants**\\n- \uD83C\uDFAD Houses **karaoke venues**\\n- \uD83C\uDF03 Vibrant **night scene**\\n- \uD83D\uDECD️ Popular for **shopping**"},{"count":32,"location":"Roppongi Hills","longitude":139.731026,"latitude":35.65858,"name":"Roppongi Hills","description":"- \uD83C\uDFE2 Features **luxury shopping**\\n- \uD83C\uDFAD Known for **entertainment**\\n- \uD83C\uDF78 Houses **upscale bars**\\n- \uD83C\uDFA8 Popular for **art exhibits**\\n- \uD83C\uDF03 Vibrant **nightlife**"},{"count":33,"location":"Kagurazaka Night Market","longitude":139.737615,"latitude":35.70311,"name":"Kagurazaka","description":"- \uD83C\uDFEE Features **traditional atmosphere**\\n- \uD83C\uDF76 Known for **sake bars**\\n- \uD83C\uDF5C Houses **Japanese restaurants**\\n- \uD83C\uDFAD Popular for **cultural events**\\n- \uD83C\uDF19 Charming **evening ambiance**"},{"count":34,"location":"Yanaka Street Market","longitude":139.770598,"latitude":35.733686,"name":"Yanaka Ginza","description":"- \uD83C\uDFFA Features **traditional shops**\\n- \uD83C\uDF5C Known for **local eateries**\\n- \uD83C\uDFAD Houses **artisan crafts**\\n- \uD83C\uDF38 Popular for **old Tokyo charm**\\n- \uD83D\uDCF8 Perfect for **photography**"},{"count":37,"location":"Kyodai Market","longitude":139.7246040355823,"latitude":35.626815729544816,"name":"Kyodai Market","description":""},{"count":40,"location":"Toyosu Market","longitude":139.810911,"latitude":35.645956,"name":"Toyosu Market","description":"- \uD83D\uDC1F Features **tuna auctions**\\n- \uD83C\uDF63 Known for **fresh seafood**\\n- \uD83E\uDD90 Houses **wholesale market**\\n- \uD83C\uDF71 Popular for **sushi**\\n- \uD83C\uDFE2 Modern **market facility**"},{"count":41,"location":"Gransta Tokyo Tokyo Station","longitude":139.767125,"latitude":35.681167,"name":"Gransta Tokyo","description":"- \uD83C\uDF5C Features **gourmet food**\\n- \uD83C\uDFAD Known for **food halls**\\n- \uD83C\uDF71 Houses **specialty stores**\\n- \uD83D\uDECD️ Popular for **shopping**\\n- \uD83D\uDE89 Connected to **station**"},{"count":42,"location":"Oedo Antique Market","longitude":139.76450746441768,"latitude":35.677418709417694,"name":"Oedo Antique Market","description":"- \uD83C\uDFFA Features **antique treasures**\\n- \uD83C\uDFAD Known for **vintage items**\\n- \uD83C\uDFA8 Houses **art pieces**\\n- \uD83D\uDCDA Popular for **collectors**\\n- \uD83D\uDECD️ Traditional **market atmosphere**"},{"count":43,"location":"Shinjuku Ni-chome Flea Market","longitude":139.68981733373573,"latitude":35.68945794968176,"name":"Shinjuku Chuo Flea Market","description":"- \uD83D\uDC55 Features **second-hand items**\\n- \uD83C\uDFAD Known for **vintage clothing**\\n- \uD83D\uDECD️ Houses **unique finds**\\n- \uD83C\uDFA8 Popular for **collectors**\\n- \uD83C\uDFAA Vibrant **market atmosphere**"},{"count":44,"location":"Sangenjaya Market","longitude":139.653575,"latitude":35.646731,"name":"Sangenjaya","description":"- \uD83C\uDF5C Features **local food**\\n- \uD83C\uDFEE Known for **unique shops**\\n- \uD83C\uDFAD Houses **entertainment venues**\\n- \uD83C\uDF19 Popular for **evening scene**\\n- \uD83C\uDF7A Vibrant **atmosphere**"},{"count":47,"location":"Shin-Nakamise Street","longitude":139.7945095580149,"latitude":35.712428268979764,"name":"Shin-Nakamise Street","description":""},{"count":47,"location":"Nakamise Street","longitude":139.796696,"latitude":35.711601,"name":"Nakamise Street","description":"- ⛩️ Features **traditional shops**\\n- \uD83C\uDFAD Known for **souvenirs**\\n- \uD83C\uDF5C Houses **local snacks**\\n- \uD83C\uDFEE Popular for **traditional items**\\n- \uD83C\uDFAA Historic **shopping street**"},{"count":48,"location":"Tsukiji Outer Market","longitude":139.770154,"latitude":35.665492,"name":"Tsukiji Market","description":"- \uD83D\uDC1F Features **fresh seafood**\\n- \uD83C\uDF63 Known for **sushi**\\n- \uD83C\uDF5C Houses **food stalls**\\n- \uD83C\uDFEE Popular for **breakfast**\\n- \uD83C\uDFAD Traditional **market culture**"},{"count":49,"location":"Ameyoko Market","longitude":139.776156,"latitude":35.711203,"name":"Ameyoko Market","description":"- \uD83D\uDECD️ Features **open-air market**\\n- \uD83C\uDF5C Known for **street food**\\n- \uD83D\uDC55 Houses **clothing shops**\\n- \uD83C\uDFAD Popular for **cosmetics**\\n- \uD83C\uDFAA Vibrant **atmosphere**"},{"count":50,"location":"Nippori Fabric Town","longitude":139.779792,"latitude":35.733959,"name":"Nippori Fabric Town","description":"- \uD83E\uDDF5 Features **fabric shops**\\n- \uD83C\uDFAD Known for **sewing supplies**\\n- \uD83C\uDFA8 Houses **craft materials**\\n- \uD83D\uDC55 Popular for **DIY**\\n- \uD83C\uDFAA Creative **atmosphere**"},{"count":52,"location":"Kichijoji SUNROAD shopping district","longitude":139.57982354554133,"latitude":35.703827963009374,"name":"Kichijoji SUNROAD shopping district","description":""},{"count":24,"location":"Harmonica Yokocho","longitude":139.57909031191616,"latitude":35.70364513723445,"name":"Harmonica Yokocho","description":""},{"count":24,"location":"Daiya Shopping Arcade","longitude":139.57929719941205,"latitude":35.70404043568048,"name":"Daiya Shopping Arcade","description":""}]');var u=a(319),c=a(3243),p=a.n(c),m=a(3804);a(3205);var h=a(57),f=a(1106),g=a.n(f),b=!0;function x(e){let{geoJsonFiles:t}=e,[a,r]=(0,n.useState)(!1),[c,f]=(0,n.useState)(null),[b,x]=(0,n.useState)(5),y=(e,t)=>{t.originalEvent.stopPropagation(),f(e)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:"Tokyo Market | Ben Traje"})," "]}),(0,o.jsx)("div",{className:"".concat(p().className),children:(0,o.jsxs)("div",{className:"relative w-full h-screen",children:[(0,o.jsx)("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 p-2 rounded-lg shadow-lg w-96",children:(0,o.jsx)("h1",{className:"text-lg font-bold text-center",children:"Tokyo Market, Street, Shotengai, Yokocho"})}),(0,o.jsxs)("div",{className:"absolute inset-0 z-0",children:[(0,o.jsxs)(l.Ay,{initialViewState:{longitude:139.76705077707368,latitude:35.681501242868755,zoom:12},mapboxAccessToken:"pk.eyJ1IjoiYmVudHJhamUiLCJhIjoiY202Y25hZ3N5MGhjYTJpc2R0MXR5cDlzdCJ9.jjTJwGtgOzI4fGZDNJ8wRg",minZoom:9,maxZoom:16,mapStyle:"mapbox://styles/bentraje/cm6donq1s004w01qrfs4d7x9q",style:{width:"100%",height:"100vh"},attributionControl:!1,doubleClickZoom:!1,interactiveLayerIds:Object.keys(t).map(e=>"".concat(e,"-layer")),children:[d.map((e,t)=>(0,o.jsxs)(l.pH,{longitude:e.longitude,latitude:e.latitude,color:"red",width:30,height:30,anchor:"top",onClick:t=>y(e,t),onMouseEnter:()=>{console.log("Weee"),setHoveredMuseum(e)},onMouseLeave:()=>setHoveredMuseum(null),style:{cursor:"pointer"},children:[(0,o.jsx)("div",{style:{position:"absolute",left:"15px",top:"-25px",backgroundColor:"white",padding:"5px",borderRadius:"4px",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.3)",whiteSpace:"nowrap"},children:(0,o.jsx)("p",{className:"".concat(p().className),children:e.name})}),(0,o.jsx)(u.A,{})]},t)),c&&(0,o.jsx)(l.zD,{longitude:c.longitude,latitude:c.latitude,anchor:"top",onClose:()=>f(null),className:"rounded-2xl p-4",focusAfterOpen:!0,closeButton:!1,maxWidth:400,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"".concat(p().className," text-base font-bold"),children:c.name.toUpperCase()}),(0,o.jsx)("div",{className:"".concat(p().className," mb-2"),style:{width:"320px"},children:(0,o.jsx)(s.o,{children:c.description})}),(0,o.jsx)("div",{className:"flex space-x-4",children:(0,o.jsx)("a",{href:"https://www.google.com/search?q=".concat(encodeURIComponent(c.name)," Market"),target:"_blank",rel:"noopener noreferrer",style:{color:"blue",textDecoration:"underline"},className:"".concat(p().className),children:"Google Search"})})]})})]}),(0,o.jsx)(h.A,{src:"tokyomarketmap"}),a&&(0,o.jsx)("div",{style:{position:"absolute",top:"10px",left:"10px",background:"white",padding:"5px"},children:"Hovering over GeoJSON"})]}),(0,o.jsx)(g(),{href:"/tokyomap",children:(0,o.jsx)("div",{className:"".concat(p().className," absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm p-0 rounded-xl shadow-lg w-36"),children:(0,o.jsx)("div",{className:"flex items-center justify-center mb-0",children:(0,o.jsx)("p",{className:"text-sm text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500",children:"See Other Maps"})})})}),(0,o.jsx)(h.A,{src:"tokyomarket"})]})}),(0,o.jsx)(m.GoogleAnalytics,{gaId:"G-XMRE4ES9RK"})]})}},7537:()=>{},3243:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[6197,6119,6914,1166,4935,4179,1106,2801,9627,7003,636,6593,8792],()=>t(5362)),_N_E=e.O()}]);
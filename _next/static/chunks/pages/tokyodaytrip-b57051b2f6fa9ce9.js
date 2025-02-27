(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5826,9477],{4068:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/tokyodaytrip",function(){return t(9703)}])},57:(e,a,t)=>{"use strict";t.d(a,{A:()=>u});var n=t(4848),i=t(6540),o=t(1194),r=t(1460),s=t(8985);let l=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,n.jsx)("textarea",{className:(0,s.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:a,...i})});l.displayName="Textarea";var d=t(4734);let u=e=>{let{src:a="",triggerType:t="image",linkText:s="Share Feedback",imageSrc:u="/images/icon-boy-phone-talk.png"}=e,[c,h]=(0,i.useState)(""),[m,p]=(0,i.useState)(""),[f,g]=(0,i.useState)(!1),[x,b]=(0,i.useState)(!1),[y,w]=(0,i.useState)(!1),v=async e=>{e.preventDefault(),g(!0);try{await fetch("https://bentraje-api-production.up.railway.app/receivefeedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,message:m,src:a})}),b(!0)}catch(e){console.error("Submission error:",e)}finally{g(!1)}};return(0,i.useEffect)(()=>{let e=()=>{w(window.innerWidth<=640)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,n.jsxs)(d.lG,{children:[(0,n.jsx)(d.zM,{asChild:!0,children:"image"===t?(0,n.jsx)(o.$,{variant:"ghost",className:"fixed bottom-2 right-0 px-2 py-0 hover:bg-transparent focus:ring-2 focus:ring-primary","aria-label":"Open feedback form",children:(0,n.jsx)("img",{src:u,alt:"Feedback icon",className:"transition-transform duration-200 hover:scale-105",style:{width:y?"46px":"64px",height:y?"46px":"64px"}})}):(0,n.jsx)(o.$,{variant:"link",className:"inline font-inherit text-inherit leading-none bg-transparent border-0 cursor-pointer text-primary hover:text-primary/90 transition-colors duration-200 p-0 m-0 h-auto appearance-none",style:{lineHeight:"inherit",verticalAlign:"baseline"},"aria-label":"Open feedback form",children:s})}),(0,n.jsxs)(d.Cf,{className:"max-w-sm mx-auto rounded-lg bg-white dark:bg-gray-900",children:[(0,n.jsxs)(d.c7,{children:[(0,n.jsx)(d.L3,{className:"text-xl font-semibold text-gray-900 dark:text-gray-100",children:"Feedback Form"}),(0,n.jsx)(d.rr,{className:"text-gray-600 dark:text-gray-400",children:"Got any ideas? I'd love to hear them! \uD83D\uDCA1\uD83D\uDE0A"})]}),x?(0,n.jsxs)("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[(0,n.jsx)("p",{children:"Thanks so much for your feedback! \uD83D\uDE0A"}),(0,n.jsx)("p",{children:"I can't promise I'll be able to make it happen, but I really appreciate you taking the time ❤️"}),(0,n.jsx)("p",{children:"Have a great day ahead! ☀️"})]}):(0,n.jsxs)("form",{onSubmit:v,className:"space-y-5",children:[(0,n.jsx)("div",{className:"space-y-2",children:(0,n.jsx)(r.p,{id:"email",placeholder:"Your Email (Optional, if you want updates)",type:"email",value:c,onChange:e=>h(e.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"})}),(0,n.jsx)(l,{id:"feedback",placeholder:"How can we improve?",value:m,onChange:e=>p(e.target.value),required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white min-h-[120px]"}),(0,n.jsx)("div",{className:"flex justify-end",children:(0,n.jsx)(o.$,{type:"submit",disabled:f,className:"bg-primary text-white hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50",children:f?"Sending...":"\uD83D\uDCAC Share Your Thoughts!"})})]})]})]})}},319:(e,a,t)=>{"use strict";t.d(a,{A:()=>i});var n=t(4848);let i=e=>{let{yOffset:a=0}=e;return(0,n.jsxs)("svg",{display:"block",height:"41px",width:"27px",viewBox:"0 0 27 41",style:{transform:"translateY(".concat(a,"px)")},children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("radialGradient",{id:"shadowGradient",children:[(0,n.jsx)("stop",{offset:"10%",stopOpacity:"0.4"}),(0,n.jsx)("stop",{offset:"100%",stopOpacity:"0.05"})]})}),(0,n.jsx)("ellipse",{cx:"13.5",cy:"34.8",rx:"10.5",ry:"5.25",fill:"url(#shadowGradient)"}),(0,n.jsx)("path",{fill:"red",d:"M27,13.5C27,19.07 20.25,27 14.75,34.5C14.02,35.5 12.98,35.5 12.25,34.5C6.75,27 0,19.22 0,13.5C0,6.04 6.04,0 13.5,0C20.96,0 27,6.04 27,13.5Z"}),(0,n.jsx)("path",{opacity:"0.25",d:"M13.5,0C6.04,0 0,6.04 0,13.5C0,19.22 6.75,27 12.25,34.5C13,35.52 14.02,35.5 14.75,34.5C20.25,27 27,19.07 27,13.5C27,6.04 20.96,0 13.5,0ZM13.5,1C20.42,1 26,6.58 26,13.5C26,15.9 24.5,19.18 22.22,22.74C19.95,26.3 16.71,30.14 13.94,33.91C13.74,34.18 13.61,34.32 13.5,34.44C13.39,34.32 13.26,34.18 13.06,33.91C10.28,30.13 7.41,26.31 5.02,22.77C2.62,19.23 1,15.95 1,13.5C1,6.58 6.58,1 13.5,1Z"}),(0,n.jsx)("circle",{fill:"white",cx:"13.5",cy:"13.5",r:"5.5"})]})}},1194:(e,a,t)=>{"use strict";t.d(a,{$:()=>d});var n=t(4848),i=t(6540),o=t(3362),r=t(2732),s=t(8985);let l=(0,r.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,a)=>{let{className:t,variant:i,size:r,asChild:d=!1,...u}=e,c=d?o.DX:"button";return(0,n.jsx)(c,{className:(0,s.cn)(l({variant:i,size:r,className:t})),ref:a,...u})});d.displayName="Button"},4734:(e,a,t)=>{"use strict";t.d(a,{Cf:()=>h,L3:()=>p,c7:()=>m,lG:()=>l,rr:()=>f,zM:()=>d});var n=t(4848),i=t(6540),o=t(605),r=t(8875),s=t(8985);let l=o.bL,d=o.l9,u=o.ZL;o.bm;let c=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,n.jsx)(o.hJ,{ref:a,className:(0,s.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...i})});c.displayName=o.hJ.displayName;let h=i.forwardRef((e,a)=>{let{className:t,children:i,...l}=e;return(0,n.jsxs)(u,{children:[(0,n.jsx)(c,{}),(0,n.jsxs)(o.UC,{ref:a,className:(0,s.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...l,children:[i,(0,n.jsxs)(o.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(r.A,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=o.UC.displayName;let m=e=>{let{className:a,...t}=e;return(0,n.jsx)("div",{className:(0,s.cn)("flex flex-col space-y-1.5 text-center sm:text-left",a),...t})};m.displayName="DialogHeader";let p=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,n.jsx)(o.hE,{ref:a,className:(0,s.cn)("text-lg font-semibold leading-none tracking-tight",t),...i})});p.displayName=o.hE.displayName;let f=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,n.jsx)(o.VY,{ref:a,className:(0,s.cn)("text-sm text-muted-foreground",t),...i})});f.displayName=o.VY.displayName},1460:(e,a,t)=>{"use strict";t.d(a,{p:()=>r});var n=t(4848),i=t(6540),o=t(8985);let r=i.forwardRef((e,a)=>{let{className:t,type:i,...r}=e;return(0,n.jsx)("input",{type:i,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:a,...r})});r.displayName="Input"},3205:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});var n=t(4848),i=t(6540),o=t(4917),r=t(8985);let s=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,n.jsxs)(o.bL,{ref:a,className:(0,r.cn)("relative flex w-full touch-none select-none items-center",t),...i,children:[(0,n.jsx)(o.CC,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:(0,n.jsx)(o.Q6,{className:"absolute h-full bg-transparent"})}),(0,n.jsx)(o.zi,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]})});s.displayName=o.bL.displayName},8985:(e,a,t)=>{"use strict";t.d(a,{cn:()=>o});var n=t(4164),i=t(856);function o(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,i.QP)((0,n.$)(a))}},9703:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>b,default:()=>y});var n=t(4848),i=t(6540),o=t(3368),r=t.n(o),s=t(9627),l=t(6914);t(4084),t(7537),t(4496);let d=JSON.parse('[{"name":"Mount Fuji","location":"Fuji Station","longitude":138.65051898084948,"latitude":35.160391584779326,"description":"- \uD83D\uDDFB Japan\'s **Highest Mountain** (3,776 meters) \\n- \uD83C\uDF8C Designated as a **UNESCO World Heritage Site**\\n- \uD83C\uDFD4️ Features **Five Lakes** (Fuji Five Lakes/Fujigoko) \\n- \uD83C\uDFA2 Home to the famous **Fuji-Q Highland** theme park\\n- \uD83C\uDF43 Surrounded by the peaceful **Aokigahara Forest**\\n- ⛩️ Houses the historic **Fujisan Sengen Shrine**\\n- \uD83C\uDF38 Offers stunning views from the **Chureito Pagoda** in spring"},{"name":"Kawagoe","location":"Kawagoe","longitude":139.48341435537728,"latitude":35.923652574616966,"description":"- \uD83C\uDFEF Known as **Little Edo** for its preserved historic district\\n- \uD83C\uDFEE Features historic **Warehouse District** \\n- \uD83C\uDF6C Home to **Candy Alley**\\n- ⛩️ Houses the important **Kitain Temple**\\n- \uD83C\uDF8E Celebrates the grand **Kawagoe Festival** with traditional floats\\n- \uD83C\uDF60 Famous for **Sweet Potatoes** and sweet potato treats"},{"name":"Chichibu","location":"Seibu-Chichibu Station","longitude":139.08335896859796,"latitude":35.99013921768792,"description":"- \uD83C\uDF38 Famous for its spectacular **Pink Moss** fields\\n- ⛩️ Home to the historic **Chichibu Shrine** \\n- \uD83D\uDDFB Gateway to the **Chichibu-Tama-Kai National Park**\\n- \uD83D\uDC8E Houses the unique **Chichibu Bridge of Dreams**\\n-  \uD83E\uDD43 Home to the historic **Chichibu Distillery** and sake breweries\\n- \uD83D\uDE82 Accessible by the scenic **Paleo Express** steam locomotive\\n- \uD83C\uDFA8 Features the famous **Chichibunomiya Memorial Park**"},{"name":"Utsunomiya","location":"Utsunomiya","longitude":139.89908269666728,"latitude":36.56026602368366,"description":"- \uD83E\uDD5F Known as Japan\'s **Gyoza Capital** with over 200 gyoza restaurants\\n- \uD83C\uDFDB️ Home to the historic **Futaarayama Shrine**\\n- \uD83D\uDDFF Features the ancient **Oya Stone Quarry** and Underground Museum\\n- \uD83D\uDEB2 Host city for **Japan Cup** cycling race\\n- \uD83C\uDF5C Known for its unique **Jazz and Gyoza** culture\\n- ⛩️ Home to the impressive **Utsunomiya Castle Ruins Park**\\n- \uD83C\uDF3F Features beautiful **Romantic Village** gardens"},{"name":"Sakura","location":"Sakura Station","longitude":140.22619467475576,"latitude":35.710156372208914,"description":"- \uD83C\uDFEF Home to historic **Sakura Castle Ruins**\\n- \uD83C\uDFDB️ Known for preserved **Samurai District**\\n- \uD83C\uDF43 Features peaceful **Iwamoto-ji Temple**\\n- \uD83C\uDF8B Beautiful **Japanese Gardens** in historic districts\\n- \uD83D\uDEB6‍♂️ Popular for its historic **Walking Tours**"},{"name":"Narita City","location":"Keisei Narita","longitude":140.315684231873,"latitude":35.77698776647374,"description":"- ⛩️ Home to the famous **Naritasan Shinshoji Temple**\\n- \uD83D\uDEE3️ Features historic **Omotesando Street**\\n- ✈️ Known for **Narita International Airport**\\n- \uD83C\uDF56 Famous for **Unagi** (grilled eel) restaurants**"},{"name":"Sawara","location":"Sawara Station","longitude":140.49219817508236,"latitude":35.8950972037182,"description":"- \uD83C\uDFEF Known as **Little Edo** with preserved historic district\\n- ⛩️ Home to historic **Katori Shrine**\\n- \uD83C\uDF8E Hosts the grand **Sawara Grand Festival**\\n- \uD83C\uDFEE Preserved **Edo Period Merchants\' Houses**\\n- ⚓ Historic **Canal Town** with traditional boats\\n- \uD83C\uDF76 Houses traditional **Sake Breweries**\\n- \uD83C\uDFB5 Known for traditional **Karakuri Dolls**"},{"name":"Choshi","location":"Choshi Station","longitude":140.82790880842944,"latitude":35.73106906099079,"description":"\uD83D\uDDFC Features the historic **Choshi Port Tower**\\n- \uD83D\uDE82 Home to the charming **Choshi Electric Railway**\\n- \uD83C\uDF0A Known for **Inubosaki Lighthouse**\\n- \uD83D\uDC1F Famous for **Fresh Seafood** and Fish Markets\\n- \uD83C\uDFED Houses traditional **Yamasa Soy Sauce** factories\\n- \uD83C\uDFA3 Popular for **Sport Fishing** and Surfing spots\\n- \uD83C\uDF0A Features **Byobugaura Cliffs**\\n- \uD83C\uDF7A Home to local **Choshi Beer** brewery\\n- \uD83C\uDF05 Spectacular **Pacific Ocean Sunrise** views"},{"name":"Tsukuba","location":"Tsukuba","longitude":140.111429513642,"latitude":36.083695923292275,"description":"- \uD83D\uDD2C Home to **Tsukuba Science City**\\n- \uD83C\uDF93 Features the prestigious **University of Tsukuba**\\n- ⛰️ Famous for **Mount Tsukuba**\\n- \uD83C\uDFDB️ Houses **JAXA** (Japan Aerospace Exploration Agency)\\n- \uD83D\uDD2D Features **Science Museum** and Space Center\\n- ⛩️ Historic **Tsukuba Shrine**"},{"name":"Mito","location":"Mito Station","longitude":140.47604394003037,"latitude":36.3735782744706,"description":"- \uD83C\uDF38 Famous for **Kairakuen Garden**\\n- \uD83C\uDFEF Features historic **Mito Castle Ruins**\\n- \uD83C\uDFA8 Houses **Tokugawa Museum**\\n- \uD83C\uDF60 Famous for **Sweet Potatoes** and **Natto**\\n- \uD83C\uDF3F Beautiful **Semba Lake** and park area\\n- ⚔️ Known for **Mito Tokugawa** clan history"},{"name":"Oarai","location":"Oarai Station","longitude":140.563148987513,"latitude":36.31513541110357,"description":"- \uD83C\uDF0A Famous for **Oarai Beach** and surfing spots\\n- ⛩️ Features the scenic **Oarai Isosaki Shrine**\\n- \uD83D\uDC1F Home to **Oarai Aqua World**\\n- \uD83E\uDD90 Famous for fresh **Seafood Markets**\\n- \uD83C\uDFA3 Popular for **Sport Fishing**\\n- \uD83E\uDD80 Known for Fresh **Anglerfish** dishes\\n- ⚓ Houses the **Yamato Museum**\\n- \uD83C\uDF8C Popular for **Girls und Panzer** anime tourism"},{"name":"Hitachi Seaside Park","location":"Hitachi Seaside Park","longitude":140.59658268515636,"latitude":36.4067521528981,"description":"\uD83C\uDF37 Known for **Seasonal Flower Fields**:\\n  - Spring: **Blue Nemophila**\\n  - Summer: **Zinnias** and **Sunflowers**\\n  - Fall: **Red Kochia**\\n  - Winter: **Ice Tulips**\\n- \uD83C\uDFA1 Features the iconic **Hitachi Seaside Park Ferris Wheel**\\n- \uD83D\uDEB2 Offers **Rental Bicycles**\\n- \uD83C\uDF3A Houses the **Miharashi Gardens**\\n- \uD83C\uDFA2 Includes **Family-Friendly Amusement Rides**"},{"name":"Yokohama","location":"Yokohama Station","longitude":139.6220010676399,"latitude":35.46664576150786,"description":"- \uD83C\uDF07 Japan\'s **second-largest city** \\n- \uD83D\uDEA2 One of Japan\'s **oldest and busiest port cities**.\\n- \uD83E\uDD5F Famous for Japan\'s **biggest Chinatown**.\\n- \uD83C\uDFA1 Stunning views of the iconic **Minato Mirai 21 skyline**.\\n- \uD83C\uDFA8 Visit the **unique Cup Noodles Museum** for a fun experience.\\n- \uD83C\uDFDB️ A beautiful blend of **Western and Japanese architecture**.\\n- \uD83C\uDF3A Don\'t miss the historic and serene **Sankeien Garden**."},{"name":"Kamakura","location":"Kamakura Station","longitude":139.551383182116,"latitude":35.32441983388068,"description":"- \uD83D\uDDFF Home to the iconic Great Buddha (Daibutsu)\\n- ⛩️ Features the Tsurugaoka Hachimangu Shrine\\n- \uD83C\uDFD6️ Known for Yuigahama Beach\\n- \uD83C\uDF8E Rich in Samurai History and culture\\n- \uD83D\uDEB6‍♂️ Popular for the Daibutsu Hiking Trail\\n- \uD83C\uDFFA Features traditional Japanese Gardens\\n- \uD83C\uDF5C Famous for Shirasu (whitebait) dishes"},{"name":"Hakone","location":"Hakone","longitude":139.04816386972036,"latitude":35.251331966601114,"description":"- ♨️ Famous for its numerous Hot Springs (Onsen)\\n- \uD83D\uDDFB Spectacular Mount Fuji Views from many locations\\n- \uD83D\uDEA0 Popular Hakone Ropeway with volcanic valley views\\n- ⛵ Scenic Lake Ashi with sightseeing cruises\\n- ⛩️ Historic Hakone Shrine with lakeside torii gate\\n- \uD83C\uDFA8 Home to the Hakone Open-Air Museum\\n- \uD83D\uDE82 Famous Hakone Tozan Railway (mountain railway)\\n- \uD83E\uDD5A Known for black Kuro-tamago eggs from Owakudani"},{"name":"Enoshima","location":"Enoshima","longitude":139.4808239268947,"latitude":35.30172063045741,"description":"- \uD83C\uDFDD️ Scenic Island connected by bridge to mainland\\n- ⛩️ Home to the historic Enoshima Shrine\\n- \uD83C\uDF0A Famous for Beaches and surfing spots\\n- \uD83D\uDDFC Features the Enoshima Sea Candle lighthouse observatory\\n- \uD83D\uDC20 Houses the popular Enoshima Aquarium\\n- \uD83C\uDF05 Spectacular Sunset Views of Mount Fuji"},{"location":"Tobuko Niko","longitude":139.61879960910338,"latitude":36.74903943029093,"name":"Nikko World Heritage Area","description":"*TOSHOGU AREA*:\\n- ⛩️ Home to the magnificent **Toshogu Shrine Complex**\\n- \uD83C\uDFA8 Famous for extravagant **Golden Decorations**\\n- \uD83C\uDF09 Known for the iconic **Shinkyo Bridge**\\n- \uD83C\uDFEF Features the historic **Rinnoji Temple**\\n\\n*LAKE CHUZENJI AREA:*\\n- \uD83D\uDDFB Beautiful **Lake Chuzenji** with mountain views\\n- \uD83D\uDCA6 Famous **Kegon Falls**\\n- \uD83C\uDF41 Spectacular **Autumn Colors** along Irohazaka Road\\n- ⛰️ Popular **Mount Nantai** hiking trails\\n\\n*OKUNIKKO AREA:*\\n- ♨️ **Yumoto Onsen** hot spring resort\\n- \uD83C\uDF3F **Senjogahara Marshland** hiking trails\\n- \uD83D\uDCA6 **Ryuzu Waterfall** and scenic nature spots"},{"location":"Kinugawaonsen Station","longitude":139.7164616781316,"latitude":36.82517405892222,"name":"Kinugawa Area","description":"- \uD83C\uDFA2 Home to **Tobu World Square** with miniature world monuments\\n- ♨️ Famous for **Kinugawa Onsen** hot spring resorts\\n- \uD83D\uDE82 Features the retro **SL Taiju** steam locomotive experience\\n- \uD83C\uDFAA Houses **Edo Wonderland** theme park\\n- \uD83C\uDF0A Known for scenic **Kinugawa River** boat rides\\n- \uD83C\uDFA1 Home to **Nikko Teddy Bear World**\\n- \uD83D\uDEA0 Features the **Kinugawa Ropeway** with mountain views"},{"location":"Kashima Station","longitude":140.62586287462258,"latitude":35.97121604138904,"name":"Kashima","description":"- ⛩️ Home to the famous **Kashima Shrine**, one of Japan\'s oldest shrines\\n- ⚽ Features **Kashima Soccer Stadium**, home of Kashima Antlers\\n- \uD83C\uDFC6 Known for **Kashima Antlers** (most successful J-League team)\\n- \uD83C\uDF0A Houses **Kashima Port** and Industrial Zone\\n- \uD83C\uDFD6️ Features **Kashima Beach** for surfing and swimming\\n- \uD83C\uDF3F Houses the scenic **Kashima Jingu Forest**\\n- ⚔️ Known for **Kashima Shinto-ryu** sword fighting style\\n- \uD83E\uDD88 Popular for **Sport Fishing** at Kashima Port\\n- \uD83C\uDF76 Known for traditional **Sake Breweries**  \\n  \uD83D\uDD14  \\n- \\n- - - P.S. Train schedules to Kashima are __limited__. Plan accordingly."}]');var u=t(319),c=t(3928),h=t.n(c),m=t(3804);t(3205);var p=t(57),f=t(1106),g=t.n(f);let x=()=>"#".concat(Math.floor(0xffffff*Math.random()).toString(16).padStart(6,"0"));var b=!0;function y(e){let{geoJsonFiles:a}=e,[t,o]=(0,i.useState)(!1),[c,f]=(0,i.useState)(null),[b,y]=(0,i.useState)(5),w=(e,a)=>{a.originalEvent.stopPropagation(),f(e)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"Tokyo Day Trip | Ben Traje"})," "]}),(0,n.jsx)("div",{className:"".concat(h().className),children:(0,n.jsxs)("div",{className:"relative w-full h-screen",children:[(0,n.jsx)("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 p-2 rounded-lg shadow-lg w-96",children:(0,n.jsx)("h1",{className:"text-lg font-bold text-center",children:"\uD83D\uDE84\uD83C\uDFDE️ Tokyo Day Trips \uD83C\uDFA2\uD83C\uDFEF"})}),(0,n.jsxs)("div",{className:"absolute inset-0 z-0",children:[(0,n.jsxs)(l.Ay,{initialViewState:{longitude:139.76705077707368,latitude:35.681501242868755,zoom:5},mapboxAccessToken:"pk.eyJ1IjoiYmVudHJhamUiLCJhIjoiY202Y25hZ3N5MGhjYTJpc2R0MXR5cDlzdCJ9.jjTJwGtgOzI4fGZDNJ8wRg",minZoom:7,maxZoom:10,mapStyle:"mapbox://styles/mapbox/light-v11",style:{width:"100%",height:"100vh"},attributionControl:!1,doubleClickZoom:!1,interactiveLayerIds:Object.keys(a).map(e=>"".concat(e,"-layer")),children:[Object.entries(a).map(e=>{let[a,t]=e,i=x();return(0,n.jsx)(l.kL,{id:"".concat(a,"-layer"),type:"geojson",data:t,children:(0,n.jsx)(l.Wd,{type:"line",paint:{"line-color":i,"line-width":3},layout:{"line-cap":"round","line-join":"round"},id:"".concat(a,"-layer")})},a)}),d.map((e,a)=>(0,n.jsxs)(l.pH,{longitude:e.longitude,latitude:e.latitude,color:"red",width:30,height:30,anchor:"bottom",onClick:a=>w(e,a),onMouseEnter:()=>{console.log("Weee"),setHoveredMuseum(e)},onMouseLeave:()=>setHoveredMuseum(null),style:{cursor:"pointer"},children:[(0,n.jsx)("div",{style:{position:"absolute",left:"15px",top:"-25px",backgroundColor:"white",padding:"5px",borderRadius:"4px",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.3)",whiteSpace:"nowrap"},children:(0,n.jsx)("p",{className:"".concat(h().className),children:e.name})}),(0,n.jsx)(u.A,{})]},a)),c&&(0,n.jsx)(l.zD,{longitude:c.longitude,latitude:c.latitude,anchor:"top",onClose:()=>f(null),className:"rounded-2xl p-4",focusAfterOpen:!0,closeButton:!1,maxWidth:400,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"".concat(h().className," text-base font-bold"),children:c.name.toUpperCase()}),(0,n.jsx)("div",{className:"".concat(h().className," mb-2"),style:{width:"320px"},children:(0,n.jsx)(s.o,{children:c.description})}),(0,n.jsx)("div",{className:"flex space-x-4",children:(0,n.jsx)("a",{href:"https://www.google.com/search?q=".concat(encodeURIComponent(c.name)," Day Trip"),target:"_blank",rel:"noopener noreferrer",style:{color:"blue",textDecoration:"underline"},className:"".concat(h().className),children:"Google Search"})})]})})]}),(0,n.jsx)(p.A,{src:"tokyodaytrip"}),t&&(0,n.jsx)("div",{style:{position:"absolute",top:"10px",left:"10px",background:"white",padding:"5px"},children:"Hovering over GeoJSON"})]}),(0,n.jsx)(g(),{href:"/tokyomap",children:(0,n.jsx)("div",{className:"".concat(h().className," absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm p-0 rounded-xl shadow-lg w-36"),children:(0,n.jsx)("div",{className:"flex items-center justify-center mb-0",children:(0,n.jsx)("p",{className:"text-sm text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500",children:"See Other Maps"})})})}),(0,n.jsx)(p.A,{src:"tokyodaytrip"})]})}),(0,n.jsx)(m.GoogleAnalytics,{gaId:"G-XMRE4ES9RK"})]})}},7537:()=>{},3928:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var a=a=>e(e.s=a);e.O(0,[6197,6119,6914,1166,4935,4179,1106,2801,9627,7003,636,6593,8792],()=>a(4068)),_N_E=e.O()}]);
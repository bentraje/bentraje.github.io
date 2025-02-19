(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2247],{1134:()=>{},6245:()=>{},5079:(e,t,a)=>{"use strict";a.d(t,{A:()=>f});var s=a(4848),o=a(6540),i=a(1194),l=a(1460),r=a(8985);let n=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,s.jsx)("textarea",{className:(0,r.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...o})});n.displayName="Textarea";var u=a(192),p=a(8875);let d=u.bL,m=u.l9,c=u.ZL;u.bm;let y=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,s.jsx)(u.hJ,{ref:t,className:(0,r.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...o})});y.displayName=u.hJ.displayName;let h=o.forwardRef((e,t)=>{let{className:a,children:o,...i}=e;return(0,s.jsxs)(c,{children:[(0,s.jsx)(y,{}),(0,s.jsxs)(u.UC,{ref:t,className:(0,r.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...i,children:[o,(0,s.jsxs)(u.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(p.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=u.UC.displayName;let g=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,r.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};g.displayName="DialogHeader";let w=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,s.jsx)(u.hE,{ref:t,className:(0,r.cn)("text-lg font-semibold leading-none tracking-tight",a),...o})});w.displayName=u.hE.displayName;let b=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,s.jsx)(u.VY,{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",a),...o})});b.displayName=u.VY.displayName;let f=e=>{let{src:t="",triggerType:a="image",linkText:r="Share Feedback",imageSrc:u="/images/icon-boy-phone-talk.png"}=e,[p,c]=(0,o.useState)(""),[y,f]=(0,o.useState)(""),[v,O]=(0,o.useState)(!1),[x,k]=(0,o.useState)(!1),[C,S]=(0,o.useState)(!1),j=async e=>{e.preventDefault(),O(!0);try{await fetch("https://bentraje-api-production.up.railway.app/receivefeedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:p,message:y,src:t})}),k(!0)}catch(e){console.error("Submission error:",e)}finally{O(!1)}};return(0,o.useEffect)(()=>{let e=()=>{S(window.innerWidth<=640)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,s.jsxs)(d,{children:[(0,s.jsx)(m,{asChild:!0,children:"image"===a?(0,s.jsx)(i.$,{variant:"ghost",className:"fixed bottom-2 right-0 px-2 py-0 hover:bg-transparent focus:ring-2 focus:ring-primary","aria-label":"Open feedback form",children:(0,s.jsx)("img",{src:u,alt:"Feedback icon",className:"transition-transform duration-200 hover:scale-105",style:{width:C?"46px":"64px",height:C?"46px":"64px"}})}):(0,s.jsx)(i.$,{variant:"link",className:"inline font-inherit text-inherit leading-none bg-transparent border-0 cursor-pointer text-primary hover:text-primary/90 transition-colors duration-200 p-0 m-0 h-auto appearance-none",style:{lineHeight:"inherit",verticalAlign:"baseline"},"aria-label":"Open feedback form",children:r})}),(0,s.jsxs)(h,{className:"max-w-sm mx-auto rounded-lg bg-white dark:bg-gray-900",children:[(0,s.jsxs)(g,{children:[(0,s.jsx)(w,{className:"text-xl font-semibold text-gray-900 dark:text-gray-100",children:"Feedback Form"}),(0,s.jsx)(b,{className:"text-gray-600 dark:text-gray-400",children:"Got any ideas? I'd love to hear them! \uD83D\uDCA1\uD83D\uDE0A"})]}),x?(0,s.jsxs)("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[(0,s.jsx)("p",{children:"Thanks so much for your feedback! \uD83D\uDE0A"}),(0,s.jsx)("p",{children:"I can't promise I'll be able to make it happen, but I really appreciate you taking the time ❤️"}),(0,s.jsx)("p",{children:"Have a great day ahead! ☀️"})]}):(0,s.jsxs)("form",{onSubmit:j,className:"space-y-5",children:[(0,s.jsx)("div",{className:"space-y-2",children:(0,s.jsx)(l.p,{id:"email",placeholder:"Your Email (Optional, if you want updates)",type:"email",value:p,onChange:e=>c(e.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"})}),(0,s.jsx)(n,{id:"feedback",placeholder:"How can we improve?",value:y,onChange:e=>f(e.target.value),required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white min-h-[120px]"}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)(i.$,{type:"submit",disabled:v,className:"bg-primary text-white hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50",children:v?"Sending...":"\uD83D\uDCAC Share Your Thoughts!"})})]})]})]})}},319:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var s=a(4848);let o=e=>{let{yOffset:t=0}=e;return(0,s.jsxs)("svg",{display:"block",height:"41px",width:"27px",viewBox:"0 0 27 41",style:{transform:"translateY(".concat(t,"px)")},children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("radialGradient",{id:"shadowGradient",children:[(0,s.jsx)("stop",{offset:"10%",stopOpacity:"0.4"}),(0,s.jsx)("stop",{offset:"100%",stopOpacity:"0.05"})]})}),(0,s.jsx)("ellipse",{cx:"13.5",cy:"34.8",rx:"10.5",ry:"5.25",fill:"url(#shadowGradient)"}),(0,s.jsx)("path",{fill:"red",d:"M27,13.5C27,19.07 20.25,27 14.75,34.5C14.02,35.5 12.98,35.5 12.25,34.5C6.75,27 0,19.22 0,13.5C0,6.04 6.04,0 13.5,0C20.96,0 27,6.04 27,13.5Z"}),(0,s.jsx)("path",{opacity:"0.25",d:"M13.5,0C6.04,0 0,6.04 0,13.5C0,19.22 6.75,27 12.25,34.5C13,35.52 14.02,35.5 14.75,34.5C20.25,27 27,19.07 27,13.5C27,6.04 20.96,0 13.5,0ZM13.5,1C20.42,1 26,6.58 26,13.5C26,15.9 24.5,19.18 22.22,22.74C19.95,26.3 16.71,30.14 13.94,33.91C13.74,34.18 13.61,34.32 13.5,34.44C13.39,34.32 13.26,34.18 13.06,33.91C10.28,30.13 7.41,26.31 5.02,22.77C2.62,19.23 1,15.95 1,13.5C1,6.58 6.58,1 13.5,1Z"}),(0,s.jsx)("circle",{fill:"white",cx:"13.5",cy:"13.5",r:"5.5"})]})}},1194:(e,t,a)=>{"use strict";a.d(t,{$:()=>u});var s=a(4848),o=a(6540),i=a(3362),l=a(2732),r=a(8985);let n=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=o.forwardRef((e,t)=>{let{className:a,variant:o,size:l,asChild:u=!1,...p}=e,d=u?i.DX:"button";return(0,s.jsx)(d,{className:(0,r.cn)(n({variant:o,size:l,className:a})),ref:t,...p})});u.displayName="Button"},1460:(e,t,a)=>{"use strict";a.d(t,{p:()=>l});var s=a(4848),o=a(6540),i=a(8985);let l=o.forwardRef((e,t)=>{let{className:a,type:o,...l}=e;return(0,s.jsx)("input",{type:o,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...l})});l.displayName="Input"},3205:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var s=a(4848),o=a(6540),i=a(4917),l=a(8985);let r=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,s.jsxs)(i.bL,{ref:t,className:(0,l.cn)("relative flex w-full touch-none select-none items-center",a),...o,children:[(0,s.jsx)(i.CC,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:(0,s.jsx)(i.Q6,{className:"absolute h-full bg-transparent"})}),(0,s.jsx)(i.zi,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]})});r.displayName=i.bL.displayName},8985:(e,t,a)=>{"use strict";a.d(t,{cn:()=>i});var s=a(4164),o=a(856);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,o.QP)((0,s.$)(t))}},7537:()=>{},7342:e=>{"use strict";e.exports=JSON.parse('[{"name":"Mitsui Outlet Park Makuhari","reviews":9253,"types":"[\\n  \\"Outlet mall\\",\\n  \\"Shopping mall\\"\\n]","type":"Outlet mall","website":"https://mitsui-shopping-park.com/mop/makuhari/","latitude":35.6472857,"longitude":140.0413817,"popularity":"A"},{"name":"Mitsui Outlet Park Kisarazu","reviews":15674,"types":"[\\n  \\"Outlet mall\\",\\n  \\"Shopping mall\\"\\n]","type":"Outlet mall","website":"https://mitsui-shopping-park.com/mop/kisarazu/","latitude":35.4340459,"longitude":139.9344002,"popularity":"A"},{"name":"Tanger Outlets Southaven","reviews":6988,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.tangeroutlet.com/southaven","latitude":34.9362555,"longitude":-89.9916172,"popularity":"A"},{"name":"Gotemba Premium Outlets","reviews":25908,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.co.jp/gotemba/","latitude":35.3067588,"longitude":138.9620686,"popularity":"A"},{"name":"AEON LakeTown OUTLET","reviews":6990,"types":"[\\n  \\"Outlet mall\\",\\n  \\"Shopping mall\\"\\n]","type":"Outlet mall","website":"http://laketown-outlet.jp/?utm_source=google_maps&utm_medium=organic&utm_campaign=website","latitude":35.8808758,"longitude":139.8247389,"popularity":"A"},{"name":"Shoten","reviews":null,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":null,"latitude":35.7017475,"longitude":139.9714985,"popularity":"E"},{"name":"LOVERS","reviews":10,"types":"[\\n  \\"Outlet store\\",\\n  \\"Clothing store\\",\\n  \\"Men\'s clothing store\\"\\n]","type":"Outlet store","website":"http://lovers.on.omisenomikata.jp/","latitude":35.7067038,"longitude":139.7863924,"popularity":"E"},{"name":"ドリアンドゥ","reviews":1,"types":"[\\n  \\"Outlet store\\",\\n  \\"Business management consultant\\",\\n  \\"Clothing store\\",\\n  \\"Telemarketing service\\",\\n  \\"Women\'s clothing store\\"\\n]","type":"Outlet store","website":null,"latitude":35.6955174,"longitude":139.7843892,"popularity":"E"},{"name":"Mitsui Outlet Park Iruma","reviews":10863,"types":"[\\n  \\"Outlet mall\\",\\n  \\"Shopping mall\\"\\n]","type":"Outlet mall","website":"https://mitsui-shopping-park.com/mop/iruma/","latitude":35.8103454,"longitude":139.3802642,"popularity":"A"},{"name":"NJ Outlet","reviews":null,"types":"[\\n  \\"Shopping mall\\"\\n]","type":"Shopping mall","website":null,"latitude":39.7840276,"longitude":-75.052072,"popularity":"E"},{"name":"Outlet","reviews":152,"types":"[\\n  \\"Shopping mall\\"\\n]","type":"Shopping mall","website":"https://www.premiumoutlets.com/outlet/gloucester","latitude":39.7830177,"longitude":-75.0526272,"popularity":"D"},{"name":"Gloucester Premium Outlets","reviews":7885,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.com/outlet/gloucester","latitude":39.7847048,"longitude":-75.0525004,"popularity":"A"},{"name":"Factory Outlet Men\'s Clothing","reviews":134,"types":"[\\n  \\"Men\'s clothing store\\",\\n  \\"Clothing alteration service\\",\\n  \\"Clothing store\\",\\n  \\"Formal wear store\\",\\n  \\"Hat shop\\",\\n  \\"Tailor\\",\\n  \\"Tuxedo shop\\"\\n]","type":"Men\'s clothing store","website":null,"latitude":39.9810962,"longitude":-75.0226774,"popularity":"D"},{"name":"Philadelphia Premium Outlets","reviews":9706,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.com/outlet/philadelphia","latitude":40.2368752,"longitude":-75.5716966,"popularity":"A"},{"name":"Dixie Outlet","reviews":14,"types":"[\\n  \\"Shopping mall\\"\\n]","type":"Shopping mall","website":null,"latitude":32.0240227,"longitude":35.8524911,"popularity":"E"},{"name":"البيادر للتصفية albayader outlet","reviews":21,"types":"[\\n  \\"Shopping mall\\"\\n]","type":"Shopping mall","website":"https://www.facebook.com/albayader.outlet/","latitude":31.9540378,"longitude":35.8378405,"popularity":"E"},{"name":"Bickel Outlet Center","reviews":null,"types":"[\\n  \\"Shopping mall\\"\\n]","type":"Shopping mall","website":null,"latitude":32.3229621,"longitude":34.8720846,"popularity":"E"},{"name":"Leesburg Premium Outlets","reviews":7153,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.com/outlet/leesburg","latitude":39.1055544,"longitude":-77.5391308,"popularity":"A"},{"name":"Hagerstown Premium Outlets","reviews":5058,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.com/outlet/hagerstown","latitude":39.6080927,"longitude":-77.7331293,"popularity":"A"},{"name":"Finger Lakes Premium Outlets","reviews":5484,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.com/outlet/finger-lakes","latitude":42.9562432,"longitude":-76.9212572,"popularity":"A"},{"name":"Today Mall","reviews":8,"types":"[\\n  \\"Outlet mall\\",\\n  \\"Beauty salon\\"\\n]","type":"Outlet mall","website":null,"latitude":40.7612413,"longitude":-73.8311476,"popularity":"E"},{"name":"Express Factory Outlet","reviews":61,"types":"[\\n  \\"Outlet store\\",\\n  \\"Clothing store\\",\\n  \\"Jeans shop\\",\\n  \\"Dress store\\",\\n  \\"Fashion accessories store\\",\\n  \\"Men\'s clothing store\\",\\n  \\"T-shirt store\\",\\n  \\"Women\'s clothing store\\",\\n  \\"Work clothes store\\"\\n]","type":"Outlet store","website":"https://stores.expressfactoryoutlet.com/us/il/rockford/7200-harrison-ave?CID=Yext","latitude":42.245599,"longitude":-88.974526,"popularity":"D"},{"name":"adidas Outlet Store Aurora, Chicago Premium Outlets","reviews":1007,"types":"[\\n  \\"Sportswear store\\",\\n  \\"Clothing store\\",\\n  \\"Exercise equipment store\\",\\n  \\"Shoe store\\"\\n]","type":"Sportswear store","website":"https://go.adidas.com/ihha/11c0ab86","latitude":41.80096,"longitude":-88.27271,"popularity":"C"},{"name":"Ollie\'s Bargain Outlet","reviews":527,"types":"[\\n  \\"Discount store\\",\\n  \\"Appliance store\\",\\n  \\"Book store\\",\\n  \\"Flooring store\\",\\n  \\"Gift shop\\",\\n  \\"Hardware store\\",\\n  \\"Home goods store\\",\\n  \\"Mattress store\\",\\n  \\"Seasonal goods store\\"\\n]","type":"Discount store","website":"http://www.ollies.us/","latitude":42.2223949,"longitude":-88.2862146,"popularity":"C"},{"name":"Our Wisconsin Outlet and More","reviews":17,"types":"[\\n  \\"Outlet store\\",\\n  \\"Historical landmark\\",\\n  \\"Shopping mall\\"\\n]","type":"Outlet store","website":"http://shopourwisconsin.com/","latitude":42.9412861,"longitude":-87.9954829,"popularity":"E"},{"name":"Evris Plaza","reviews":2,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":null,"latitude":41.9460366,"longitude":-87.8066083,"popularity":"E"},{"name":"Mitsui Outlet Park Yokohama Bayside","reviews":7312,"types":"[\\n  \\"Outlet mall\\",\\n  \\"Shopping mall\\"\\n]","type":"Outlet mall","website":"https://mitsui-shopping-park.com/mop/yokohama/","latitude":35.3798991,"longitude":139.6464076,"popularity":"A"},{"name":"Shisui Premium Outlets","reviews":12394,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.co.jp/shisui/","latitude":35.7132177,"longitude":140.2940201,"popularity":"A"},{"name":"Sano Premium Outlets","reviews":13032,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.co.jp/sano/","latitude":36.2930054,"longitude":139.6048892,"popularity":"A"},{"name":"Ami Premium Outlets","reviews":9261,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.co.jp/ami/","latitude":35.9836814,"longitude":140.2382985,"popularity":"A"},{"name":"MITSUI OUTLET PARK Tama Minami-Osawa","reviews":7101,"types":"[\\n  \\"Outlet mall\\",\\n  \\"Shopping mall\\"\\n]","type":"Outlet mall","website":"https://mitsui-shopping-park.com/mop/tama/","latitude":35.6150793,"longitude":139.3783724,"popularity":"A"},{"name":"THE OUTLETS SHONAN HIRATSUKA","reviews":2412,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://the-outlets-shonan-hiratsuka.aeonmall.com/?utm_source=google_maps&utm_medium=organic&utm_campaign=website","latitude":35.3921962,"longitude":139.3635755,"popularity":"B"},{"name":"Fukaya-Hanazono Premium Outlets","reviews":3664,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.co.jp/fukayahanazono/","latitude":36.1329225,"longitude":139.2495877,"popularity":"B"},{"name":"Don Quijote Outlet Store","reviews":558,"types":"[\\n  \\"Discount store\\"\\n]","type":"Discount store","website":"http://www.donki.com/store/shop_detail.php?shop_id=169","latitude":35.4543443,"longitude":139.3585726,"popularity":"C"},{"name":"Domremy Outlet Takasaki","reviews":951,"types":"[\\n  \\"Dessert restaurant\\",\\n  \\"Cake shop\\"\\n]","type":"Dessert restaurant","website":"http://www.domremy.com/outlet/takasaki/","latitude":36.3240829,"longitude":139.0134308,"popularity":"C"},{"name":"WORLD OUTLET Machida","reviews":150,"types":"[\\n  \\"Clothing store\\"\\n]","type":"Clothing store","website":"https://store.world.co.jp/real-store/1000006102","latitude":35.5090982,"longitude":139.4727273,"popularity":"D"},{"name":"SPA OUTLET 上野店","reviews":742,"types":"[\\n  \\"Men\'s tailor\\",\\n  \\"Outlet store\\"\\n]","type":"Men\'s tailor","website":"https://www.uktsc.com/men/?cm=1&utm_source=GMB&utm_medium=GBP&utm_campaign=770","latitude":35.7089777,"longitude":139.7738299,"popularity":"C"},{"name":"M’S SHOE FACTORY OUTLET","reviews":7,"types":"[\\n  \\"Shoe store\\"\\n]","type":"Shoe store","website":"https://instagram.com/msshoefactoryoutlet?utm_medium=copy_link","latitude":35.7828428,"longitude":139.8981824,"popularity":"E"},{"name":"Sanyo GB Outlet","reviews":26,"types":"[\\n  \\"Outlet store\\"\\n]","type":"Outlet store","website":"https://www.sanyo-shokai.co.jp/brand/sanyogandb/","latitude":35.7111924,"longitude":139.6852956,"popularity":"E"},{"name":"GMT OUTLET","reviews":2,"types":"[\\n  \\"Shoe store\\"\\n]","type":"Shoe store","website":null,"latitude":35.6703372,"longitude":139.6818652,"popularity":"E"},{"name":"BELLE MAISON outlet 五反田TOC / ベルメゾン アウトレット","reviews":10,"types":"[\\n  \\"Linens store\\"\\n]","type":"Linens store","website":"http://www.inter-commerce.co.jp/shops_g.html","latitude":35.6222466,"longitude":139.7193629,"popularity":"E"},{"name":"Patagonia Surf Tokyo / Outlet","reviews":246,"types":"[\\n  \\"Outdoor sports store\\",\\n  \\"Sporting goods store\\"\\n]","type":"Outdoor sports store","website":"http://www.patagonia.com/jp/patagonia.go?assetid=7977","latitude":35.670051,"longitude":139.7085735,"popularity":"D"},{"name":"Bic Camera Outlet x Sofmap Yokohama Vivre Store","reviews":524,"types":"[\\n  \\"Electronics store\\",\\n  \\"Computer accessories store\\",\\n  \\"Computer service\\",\\n  \\"Computer store\\",\\n  \\"Computer support and services\\",\\n  \\"Outlet store\\",\\n  \\"Used computer store\\"\\n]","type":"Electronics store","website":"https://www.sofmap.com/tenpo/contents/?id=shops&sid=yokohama&utm_source=google&utm_medium=map&utm_campaign=yokohama","latitude":35.4650739,"longitude":139.6183378,"popularity":"C"},{"name":"Fashion Outlets of Niagara Falls USA","reviews":13122,"types":"[\\n  \\"Clothing store\\",\\n  \\"Shopping mall\\",\\n  \\"Restaurant\\"\\n]","type":"Clothing store","website":"https://www.fashionoutletsniagara.com/?utm_source=google&utm_medium=onlinesearch&utm_content=gmp_website_button&utm_campaign=yext","latitude":43.0989798,"longitude":-78.9781667,"popularity":"A"},{"name":"adidas Outlet Store Cypress","reviews":631,"types":"[\\n  \\"Sportswear store\\",\\n  \\"Clothing store\\",\\n  \\"Exercise equipment store\\",\\n  \\"Shoe store\\"\\n]","type":"Sportswear store","website":"https://go.adidas.com/ihha/11c0ab86","latitude":29.9979115,"longitude":-95.7564198,"popularity":"C"},{"name":"The Outlet Shoppes at Gettysburg","reviews":4121,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.theoutletshoppesatgettysburg.com/","latitude":39.7952821,"longitude":-77.2009371,"popularity":"B"},{"name":"Tory Burch Outlet","reviews":349,"types":"[\\n  \\"Women\'s clothing store\\",\\n  \\"Fashion accessories store\\"\\n]","type":"Women\'s clothing store","website":"https://www.toryburch.com/en-us/store-locator/us/cypress-houston-premium-outlet/543/","latitude":29.9977084,"longitude":-95.7566314,"popularity":"D"},{"name":"Outlets Sarasota","reviews":20,"types":"[\\n  \\"Clothing store\\"\\n]","type":"Clothing store","website":null,"latitude":27.5341584,"longitude":-82.507117,"popularity":"E"},{"name":"Bend Factory Outlet Stores","reviews":1276,"types":"[\\n  \\"Outlet mall\\",\\n  \\"Outlet store\\"\\n]","type":"Outlet mall","website":"http://www.bendfactorystores.com/","latitude":44.0269065,"longitude":-121.3128781,"popularity":"C"},{"name":"Gap Outlet","reviews":53,"types":"[\\n  \\"Clothing store\\"\\n]","type":"Clothing store","website":"http://gapoutletjp.tumblr.com/","latitude":35.6538114,"longitude":139.8823672,"popularity":"D"},{"name":"Yamada Outlet","reviews":153,"types":"[\\n  \\"Electronics store\\",\\n  \\"Air conditioning store\\",\\n  \\"Cell phone store\\",\\n  \\"Computer service\\",\\n  \\"Refrigerator store\\",\\n  \\"Used appliance store\\",\\n  \\"Used computer store\\",\\n  \\"Washer & dryer store\\"\\n]","type":"Electronics store","website":null,"latitude":36.2949705,"longitude":139.3601583,"popularity":"D"},{"name":"Kelty・Sierra Designs Outlet Store Yaesu","reviews":4,"types":"[\\n  \\"Outdoor clothing and equipment shop\\"\\n]","type":"Outdoor clothing and equipment shop","website":"http://www.kelty.co.jp/item/outlet-store/","latitude":35.6825184,"longitude":139.7707465,"popularity":"E"},{"name":"Denver Premium Outlets","reviews":4987,"types":"[\\n  \\"Outlet mall\\"\\n]","type":"Outlet mall","website":"https://www.premiumoutlets.com/outlet/denver","latitude":39.9473688,"longitude":-104.9857779,"popularity":"B"},{"name":"IDC Otsuka Outlet & Re-worth Yokohama","reviews":150,"types":"[\\n  \\"Furniture store\\",\\n  \\"Bed shop\\",\\n  \\"Carpet store\\",\\n  \\"Curtain store\\",\\n  \\"Home goods store\\",\\n  \\"Lighting store\\"\\n]","type":"Furniture store","website":"https://www.idc-otsuka.jp/showroom/outlet_reworth_yokohama","latitude":35.5008058,"longitude":139.6975989,"popularity":"D"},{"name":"Karuizawa Prince Shopping Plaza","reviews":19000,"types":"[\\n  \\"Boutique\\",\\n  \\"Outlet store\\"\\n]","type":"Outlet mall","website":"https://www.karuizawa-psp.jp/en","latitude":36.3410882,"longitude":138.633702,"popularity":"A"},{"name":"Karimoku Tsurumi Outlet","reviews":221,"types":"[\\n  \\"Furniture store\\",\\n  \\"Home goods store\\",\\n  \\"Outlet store\\"\\n]","type":"Furniture store","website":"https://www.karimoku.co.jp/index.cgi?mode=showroom_detail&key=23&utm_source=google&utm_medium=MEO","latitude":35.4958761,"longitude":139.6848405,"popularity":"D"}]')}}]);
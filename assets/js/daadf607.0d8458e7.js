"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3206,9378],{8482:(e,t,o)=>{o.r(t),o.d(t,{StyledMarkdown:()=>n,default:()=>c});var r=o(2005),a=o(6171),s=o(4848);function n(e){let{content:t}=e;return(0,s.jsx)(r.o,{remarkPlugins:[a.A],components:{h1:e=>{let{node:t,...o}=e;return(0,s.jsx)("h1",{className:"text-2xl font-bold mb-4",...o})},h2:e=>{let{node:t,...o}=e;return(0,s.jsx)("h2",{className:"text-xl font-semibold mb-3",...o})},h3:e=>{let{node:t,...o}=e;return(0,s.jsx)("h3",{className:"text-lg font-semibold mb-2",...o})},p:e=>{let{node:t,...o}=e;return(0,s.jsx)("p",{className:"mb-4",...o})},ul:e=>{let{node:t,...o}=e;return(0,s.jsx)("ul",{className:"list-disc pl-5 mb-4",...o})},ol:e=>{let{node:t,...o}=e;return(0,s.jsx)("ol",{className:"list-decimal pl-5 mb-4",...o})},li:e=>{let{node:t,...o}=e;return(0,s.jsx)("li",{className:"mb-1",...o})},blockquote:e=>{let{node:t,...o}=e;return(0,s.jsx)("blockquote",{className:"border-l-4 border-gray-300 pl-4 italic mb-4",...o})},code:e=>{let{node:t,inline:o,...r}=e;return o?(0,s.jsx)("code",{className:"bg-gray-100 rounded px-1 py-0.5",...r}):(0,s.jsx)("code",{className:"block bg-gray-100 rounded p-2 mb-4",...r})}},children:t})}const c=n},8205:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var r=o(6540),a=o(4335),s=o(8482),n=o(8051),c=o.n(n),d=o(4848);const l=()=>{const[e,t]=(0,r.useState)(""),[o,n]=(0,r.useState)("reddit"),[l,i]=(0,r.useState)(""),[u,m]=(0,r.useState)(!1),[b,h]=(0,r.useState)(null),[p,y]=(0,r.useState)([]),[f,x]=(0,r.useState)(null);(0,r.useEffect)((()=>{(async()=>{try{const e=await a.A.get("https://lottie.host/514b9bad-1394-4fe0-a81c-66fbe3cbaabf/hu3lBaxVXi.json");x(e.data)}catch(b){console.error("Error fetching Lottie animation:",b)}})()}),[]);return(0,d.jsx)("div",{className:"max-w-xl mx-auto bg-[#f6f8fa] shadow-sm rounded-lg border border-gray-200 mt-20",children:(0,d.jsxs)("div",{className:"p-6",children:[(0,d.jsx)("h2",{className:"text-xl font-semibold text-center mb-6",children:"\ud83d\udcc4 Contents \u2702\ufe0f Summarizer \ud83d\udcdd 1.6"}),(0,d.jsxs)("div",{className:"space-y-6",children:[(0,d.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[(0,d.jsxs)("select",{value:o,onChange:e=>n(e.target.value),className:"h-10 border border-gray-300 rounded-md px-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-32",children:[(0,d.jsx)("option",{value:"reddit",children:"Reddit"}),(0,d.jsx)("option",{value:"youtube_comments",children:"YouTube Comments"}),(0,d.jsx)("option",{value:"youtube_captions",children:"YouTube Captions"})]}),(0,d.jsx)("input",{type:"text",placeholder:"youtube_comments"===o||"youtube_captions"===o?"Enter YouTube Video URL":"Enter Reddit Thread URL ",value:e,onChange:e=>t(e.target.value),className:"mb-0 h-10 border border-gray-300 rounded-md px-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"}),(0,d.jsx)("button",{onClick:async()=>{if(m(!0),h(null),i(""),y([]),"reddit"===o&&!(e=>e.includes("reddit.com"))(e))return h("Please enter a valid Reddit URL."),void m(!1);if(("youtube_comments"===o||"youtube_captions"===o)&&!(e=>e.includes("youtube.com")||e.includes("youtu.be"))(e))return h("Please enter a valid YouTube URL."),void m(!1);try{"youtube_comments"===o?await(async e=>{try{const t=await a.A.post("https://bentraje.pythonanywhere.com/getyoutubecomments",{url:e});if(!t.data||"string"!=typeof t.data.summary)throw new Error("Invalid response format from YouTube comments API.");i(t.data.summary),y(t.data.comments||[])}catch(b){throw console.error("Error fetching YouTube comments:",b),new Error("Failed to fetch YouTube comments.")}})(e):"youtube_captions"===o?await(async e=>{try{const t=await a.A.post("https://bentraje.pythonanywhere.com/getcaptions",{url:e});if(!t.data||"string"!=typeof t.data.summary)throw new Error("Invalid response format from YouTube captions API.");i(t.data.summary),y(t.data.captions||[])}catch(b){throw console.error("Error fetching YouTube captions:",b),new Error("Failed to fetch YouTube captions.")}})(e):await(async e=>{try{const t=await a.A.post("https://bentraje.pythonanywhere.com/getredditcomments",{url:e});if(!t.data||"string"!=typeof t.data.summary)throw new Error("Invalid response format from Reddit comments API.");i(t.data.summary),y(t.data.comments||[])}catch(b){throw console.error("Error fetching Reddit comments:",b),new Error("Failed to fetch Reddit comments.")}})(e)}catch(t){h(t instanceof Error?t.message:"An unknown error occurred.")}finally{m(!1)}},disabled:u,className:"h-10 bg-[#2da44e] hover:bg-[#2c974b] text-white font-medium px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap",children:u?"Summarizing...":"Summarize"})]}),b&&(0,d.jsx)("p",{className:"text-red-500 text-center mb-4",children:b}),u&&f&&(0,d.jsx)(c(),{animationData:f,loop:!0,autoplay:!0,style:{width:"300px",height:"300px",margin:"0 auto"}}),l&&(0,d.jsx)("div",{className:"mt-6",children:(0,d.jsx)("div",{className:"bg-gray-100 p-4 rounded-lg",children:(0,d.jsx)(s.StyledMarkdown,{content:l})})})]})]})})}}}]);
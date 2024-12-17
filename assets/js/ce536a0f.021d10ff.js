"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4410],{6453:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var a=s(6540),n=s(4335),r=s(2005),o=s(4848);const l=()=>{const[e,t]=(0,a.useState)(""),[s,l]=(0,a.useState)(""),[i,c]=(0,a.useState)(!1),[m,u]=(0,a.useState)(null);return(0,o.jsxs)("div",{className:"max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg",children:[(0,o.jsx)("h2",{className:"text-2xl font-bold mb-4 text-center",children:"YouTube Comments Summarizer"}),(0,o.jsxs)("div",{className:"flex justify-center mb-4",children:[(0,o.jsx)("input",{type:"text",placeholder:"Enter YouTube URL",value:e,onChange:e=>t(e.target.value),className:"border border-gray-300 rounded-lg p-2 w-full max-w-xs mr-2"}),(0,o.jsx)("button",{onClick:async()=>{c(!0),u(null),l("");try{const t=(e=>{const t=new URL(e);return t.hostname.includes("youtube.com")?t.searchParams.get("v"):t.hostname.includes("youtu.be")?t.pathname.substring(1):null})(e);if(!t)throw new Error("Invalid YouTube URL.");const s=await(async e=>{const t=[];let s="";try{for(;;){const a=await n.A.get("https://www.googleapis.com/youtube/v3/commentThreads",{params:{part:"snippet,replies",videoId:e,key:"AIzaSyCZYMu8qJsRZnz68ePTTSyNACtP_lzrk68",maxResults:100,pageToken:s}});if(a.data.items.forEach((e=>{const s=e.snippet.topLevelComment.snippet.textOriginal;t.push(s)})),s=a.data.nextPageToken,!s)break}return t}catch(m){throw console.error("Error fetching comments:",m),new Error("Failed to fetch YouTube comments.")}})(t),a=await(async e=>{const t="Can you summarize and categorize the following comments?\n\n"+e.join("\n");try{return(await n.A.post("https://api.openai.com/v1/chat/completions",{model:"gpt-4o-mini",messages:[{role:"system",content:"You are a helpful assistant."},{role:"user",content:t}]},{headers:{Authorization:"Bearer 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","Content-Type":"application/json"}})).data.choices[0].message.content}catch(m){throw console.error("Error summarizing comments:",m),new Error("Failed to summarize comments.")}})(s);l(a)}catch(t){u(t.message)}finally{c(!1)}},disabled:i,className:"bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition",children:i?"Summarizing...":"Summarize"})]}),m&&(0,o.jsx)("p",{className:"text-red-500 text-center",children:m}),s&&(0,o.jsxs)("div",{className:"mt-6",children:[(0,o.jsx)("h3",{className:"text-xl font-semibold",children:"Summary:"}),(0,o.jsx)("div",{className:"bg-gray-100 p-4 rounded-lg mt-2",children:(0,o.jsx)(r.o,{children:s})})]})]})}}}]);
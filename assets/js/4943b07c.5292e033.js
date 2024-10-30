"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3605],{1632:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var s=a(6540),i=a(4335),r=a(781),c=a(4848);const n=()=>{const[e,t]=(0,s.useState)(null),[a,n]=(0,s.useState)("Tokyo"),[d,h]=(0,s.useState)([]),l="7e83cdb1e29ab891ea31dcb42f939a4d",p=`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${l}&units=metric`,o=`https://api.openweathermap.org/data/2.5/forecast?q=${a}&appid=${l}&units=metric`;(0,s.useEffect)((()=>{m(),u()}),[a]);const m=async()=>{try{const e=await i.A.get(p);t(e.data)}catch(e){console.error("Error fetching weather data:",e)}},u=async()=>{try{const e=(await i.A.get(o)).data.list.filter((e=>e.dt_txt.includes("12:00:00")));h(e.slice(0,3))}catch(e){console.error("Error fetching forecast data:",e)}};return(0,c.jsx)(r.A,{title:"Weather",description:"Simple Weather App",children:(0,c.jsx)("div",{className:"app",children:(0,c.jsxs)("div",{className:"weather-container",children:[(0,c.jsx)("h1",{children:"Weather App"}),(0,c.jsx)("input",{type:"text",value:a,onChange:e=>{n(e.target.value)},placeholder:"Enter city"}),e&&(0,c.jsxs)("div",{className:"current-weather",children:[(0,c.jsx)("h2",{children:e.name}),(0,c.jsx)("h3",{children:e.weather[0].description}),(0,c.jsxs)("p",{children:["Temperature: ",e.main.temp,"\xb0C"]}),(0,c.jsxs)("p",{children:["Humidity: ",e.main.humidity,"%"]}),(0,c.jsxs)("p",{children:["Wind Speed: ",e.wind.speed," m/s"]}),(0,c.jsxs)("p",{children:["Last updated: ",new Date(1e3*e.dt).toLocaleDateString()," ",new Date(1e3*e.dt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]}),(0,c.jsxs)("div",{className:"forecast",children:[(0,c.jsx)("h3",{children:"3-Day Forecast"}),(0,c.jsx)("div",{className:"forecast-cards",children:d.map(((e,t)=>(0,c.jsxs)("div",{className:"forecast-card",children:[(0,c.jsxs)("p",{children:[new Date(e.dt_txt).toLocaleDateString()," ",new Date(e.dt_txt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]}),(0,c.jsx)("p",{children:e.weather[0].description}),(0,c.jsxs)("p",{children:["Temp: ",e.main.temp,"\xb0C"]})]},t)))})]})]})})})}}}]);
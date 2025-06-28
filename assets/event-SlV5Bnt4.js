import{O as r,k as a,p as c,N as v,q as d,P as i,t as l}from"./main-hJlMxpLw.js";const y=r("event",()=>{const t=a([]);return{events:t,fetchEvents:async()=>{try{const e=c(v,"events"),o=d(e,i("createdAt","desc")),n=await l(o);t.value=n.docs.map(s=>({id:s.id,...s.data()}))}catch(e){console.error("Failed to fetch events:",e)}}}});export{y as u};
//# sourceMappingURL=event-SlV5Bnt4.js.map

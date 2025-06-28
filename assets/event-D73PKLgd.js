import{O as r,r as a,x as c,N as v,y as d,P as i,A as l}from"./main-V8uREbGC.js";const f=r("event",()=>{const t=a([]);return{events:t,fetchEvents:async()=>{try{const e=c(v,"events"),o=d(e,i("createdAt","desc")),n=await l(o);t.value=n.docs.map(s=>({id:s.id,...s.data()}))}catch(e){console.error("Failed to fetch events:",e)}}}});export{f as u};
//# sourceMappingURL=event-D73PKLgd.js.map

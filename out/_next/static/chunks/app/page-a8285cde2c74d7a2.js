(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{947:function(e,t,n){Promise.resolve().then(n.bind(n,2666))},2666:function(e,t,n){"use strict";n.r(t);var s=n(7437),r=n(2265);t.default=()=>{let e=new Date("May 31, 2024 00:00:00").getTime(),[t,n]=(0,r.useState)(a());function a(){let t=e-new Date().getTime();return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}}return(0,r.useEffect)(()=>{let e=setInterval(()=>{n(a())},1e3);return()=>clearInterval(e)},[]),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex flex-col translate-y-20",children:[(0,s.jsx)("h1",{className:"flex justify-center px-2 py-2 font-bold",children:"START TIME"}),(0,s.jsx)("p",{className:"flex justify-center font-extrabold bg-orange-300 hover:bg-orange-100 p-4 ring-2 rounded-2xl",children:e>new Date().getTime()?"".concat(t.days,"d ").concat(t.hours,"h ").concat(t.minutes,"m ").concat(t.seconds,"s"):"GO"})]})})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=947)}),_N_E=e.O()}]);
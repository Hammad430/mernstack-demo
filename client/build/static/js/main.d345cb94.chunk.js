(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){e.exports=a(252)},136:function(e,t,a){e.exports=a.p+"static/media/img2.07632929.jpg"},137:function(e,t,a){e.exports=a.p+"static/media/img3.60d8d791.jpg"},138:function(e,t,a){e.exports=a.p+"static/media/img1.92c89e9c.jpg"},252:function(e,t,a){"use strict";a.r(t);a(109);var n=a(0),r=a.n(n),l=a(43),c=a.n(l),s=a(105),o=a(10),i=a(107),u=a(253),m=a(254),d=a(255),h=a(256),E=a(257),p=a(258),g=a(259),f=a(274),v=a(275),y=a(276),b=a(260),R=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(u.a,{color:"light",light:!0,expand:"md"},r.a.createElement(m.a,{href:"/"},"Poultry App"),r.a.createElement(d.a,{onClick:function(){return c(!l)}}),r.a.createElement(h.a,{isOpen:l,navbar:!0},r.a.createElement(E.a,{className:"ml-auto",navbar:!0},r.a.createElement(p.a,null,r.a.createElement(g.a,{href:"/showRate"},"Rates")),r.a.createElement(p.a,null,r.a.createElement(g.a,{href:"/sell"},"Sell")),r.a.createElement(p.a,null,r.a.createElement(g.a,{href:"/buy"},"Buy")),r.a.createElement(f.a,{nav:!0,inNavbar:!0},r.a.createElement(v.a,{nav:!0,caret:!0},"Options"),r.a.createElement(y.a,{right:!0},r.a.createElement(b.a,{href:"/addRate"},"Add Rate"),r.a.createElement(b.a,{href:"/graph"},"Graph"),r.a.createElement(b.a,{divider:!0}),r.a.createElement(b.a,null,"Reset")))))))},S=a(273),D=(a(30),[{src:a(136),altText:"Slide 1",caption:"See daily and previous rates for all regions",header:"Check Rates",key:"1"},{src:a(137),altText:"Slide 2",caption:"List your Flock to sell",header:"Sell Flock",key:"2"},{src:a(138),altText:"Slide 3",caption:"See information  for  ready flocks",header:"Buy Flock",key:"3"}]),w=function(){return r.a.createElement(S.a,{items:D})},x=a(18),k=a(19),N=a(21),A=a(20),j=a(14),O=a.n(j),C=a(261),M=a(262),T=a(263),F=a(264),B=a(265),W=a(266),P=a(267),L=a(268),I=a(269),z=a(277),G=a(101),K=function(e){Object(N.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).resetForm=function(){document.getElementById("rateForm").reset()},n.createDate=function(e,t){return e=new Date(e.setDate(e.getDate()+t)),String(e.getDate()).padStart(2,"0")+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+e.getFullYear()},n.state={regions:["Punjab","Sindh","Balochistan","KPK","Federal"],Alertvisible:!1},n}return Object(k.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={region:this.region.value,rate:this.rate.value,tag:"rate",date:this.createDate(new Date,0),timeStamp:Date.now()};console.log(a),O()({url:"/api/save",method:"POST",data:a}).then((function(){console.log("New rate sent to the server!"),t.setState({Alertvisible:!0,alertColor:"primary",message:"New rate added"},(function(){window.setTimeout((function(){t.setState({Alertvisible:!1})}),3e3)})),t.resetForm()})).catch((function(){console.log("Internal server error!")}))}},{key:"render",value:function(){var e=this,t=this.state.regions;return t=t.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("div",{className:"addRate"},r.a.createElement("div",{class:"container h-100"},r.a.createElement("div",{class:"row h-100 justify-content-center align-items-center"},r.a.createElement(C.a,{className:"rateContainer"},r.a.createElement(M.a,null,r.a.createElement(T.a,null,r.a.createElement(F.a,null,r.a.createElement(B.a,{id:"rateForm",onSubmit:this.handleSubmit.bind(this)},r.a.createElement(M.a,null,r.a.createElement(T.a,{className:"rateCol"},r.a.createElement("br",null),r.a.createElement("p",{className:"rateFormTitle"},"Enter Todays Rate"),r.a.createElement(W.a,null,r.a.createElement(P.a,null,r.a.createElement(L.a,null,"Select Region"),r.a.createElement(I.a,{type:"select",innerRef:function(t){return e.region=t}},t)),r.a.createElement(P.a,null,r.a.createElement(L.a,null,"Enter Rate"),r.a.createElement(I.a,{type:"number",placeholder:"123",innerRef:function(t){return e.rate=t}})),r.a.createElement("div",{className:"alertDiv"},r.a.createElement(z.a,{color:this.state.alertColor,isOpen:this.state.Alertvisible}," ",this.state.message," "))),r.a.createElement(G.a,{block:!0,className:"butt"},"Add"),r.a.createElement("br",null)))))))))))}}]),a}(r.a.Component),Y=a(16),J=a.n(Y),V=a(28),_=a(272),H=a(270),U=a(271),$=a(4),q=a.n($),Q=a(36),X=function(e){Object(N.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).toggle=function(e){n.state.activeTab!==e&&n.setState({activeTab:e})},n.handleWindowSizeChange=function(){n.setState({width:window.innerWidth})},n.createDate=function(e,t){return e=new Date(e.setDate(e.getDate()+t)),String(e.getDate()).padStart(2,"0")+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+e.getFullYear()},n.componentDidMount=Object(V.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getRegions();case 2:return e.next=4,n.getRates(n.createDate(new Date,0),"today");case 4:return e.next=6,n.getRates(n.createDate(new Date,-1),"lastDay");case 6:return e.next=8,n.getRates(n.createDate(new Date,-7),"lastWeek");case 8:return e.next=10,n.getRates(n.createDate(new Date,-30),"lastMonth");case 10:return e.next=12,n.getGraphData(7);case 12:n.setState({dataRecieved:1});case 13:case"end":return e.stop()}}),e)}))),n.randomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},n.randomByte=function(){return n.randomNumber(0,255)},n.randomPercent=function(){return(.01*n.randomNumber(50,100)).toFixed(2)},n.randomCssRgba=function(){return"rgba(".concat([n.randomByte(),n.randomByte(),n.randomByte(),n.randomPercent()].join(","),")")},n.getGraphData=function(){var e=Object(V.a)(J.a.mark((function e(t){var a,r,l,c,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/rates/Last"+t);case 2:return a=e.sent,e.next=5,a.data;case 5:r=e.sent,console.log(r),l=[],c=[],s=r[0].rate.length-1,r[0].rate.forEach((function(e){c.push(n.createDate(new Date,-s)),s-=1})),n.setState({labels:c}),r.forEach((function(e){var t=n.randomCssRgba();console.log(t),l.push({label:e._id,fill:!1,lineTension:.5,borderColor:t,data:e.rate})})),console.log(l),n.setState({datasets:l});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getRegions=Object(V.a)(J.a.mark((function e(){var t,a,r,l;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/regions");case 2:return t=e.sent,e.next=5,t.data;case 5:for(a=e.sent,n.setState({regions:a}),r=[],l=0;l<n.state.regions.length;l++)r.push({region:n.state.regions[l]});n.setState({finalArr:r});case 10:case"end":return e.stop()}}),e)}))),n.getRates=function(){var e=Object(V.a)(J.a.mark((function e(t,a){var r,l;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/"+t);case 2:return r=e.sent,e.next=5,r.data;case 5:l=e.sent,n.setState({ratesData:l}),n.populateRates(a);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.populateRates=function(e){for(var t=n.state.finalArr,a=0;a<n.state.regions.length;a++){for(var r=0,l=0,c=0;c<n.state.ratesData.length;c++)n.state.regions[a]===n.state.ratesData[c].region&&(r=1,l=n.state.ratesData[c].rate);1===r?"today"===e?t[a].today=l:"lastDay"===e?t[a].lastDay=l:"lastWeek"===e?t[a].lastWeek=l:"lastMonth"===e&&(t[a].lastMonth=l):"today"===e?t[a].today="-":"lastDay"===e?t[a].lastDay="-":"lastWeek"===e?t[a].lastWeek="-":"lastMonth"===e&&(t[a].lastMonth="-")}n.setState({finalArr:t})},n.displayRates=function(e){return e.length?e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row",style:{textAlign:"left"}},e.region),r.a.createElement("td",null,e.today),r.a.createElement("td",null,e.lastDay),r.a.createElement("td",null,e.lastWeek),r.a.createElement("td",null,e.lastMonth))})):null},n.displayRatesMob=function(e,t){return e.length?1===t?e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row",style:{textAlign:"left"}},e.region),r.a.createElement("td",null,e.today))})):2===t?e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row",style:{textAlign:"left"}},e.region),r.a.createElement("td",null,e.lastDay))})):3===t?e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row",style:{textAlign:"left"}},e.region),r.a.createElement("td",null,e.lastWeek))})):4===t?e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row",style:{textAlign:"left"}},e.region),r.a.createElement("td",null,e.lastMonth))})):void 0:null},n.state={finalArr:[],ratesData:[],regions:[],width:window.innerWidth,activeTab:"1",flag:0,dataRecieved:0,labels:[],datasets:[]},n}return Object(k.a)(a,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this,t=this.state.width<=500;return 1===this.state.dataRecieved?t?r.a.createElement("div",{className:"mobileView"},r.a.createElement("div",null,r.a.createElement(E.a,{tabs:!0},r.a.createElement(p.a,null,r.a.createElement(g.a,{className:q()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"Today")),r.a.createElement(p.a,null,r.a.createElement(g.a,{className:q()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Yesterday")),r.a.createElement(p.a,null,r.a.createElement(g.a,{className:q()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"Last Week")),r.a.createElement(p.a,null,r.a.createElement(g.a,{className:q()({active:"4"===this.state.activeTab}),onClick:function(){e.toggle("4")}},"Last Month"))),r.a.createElement(H.a,{activeTab:this.state.activeTab},r.a.createElement(U.a,{tabId:"1"},r.a.createElement(_.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left"}},"Region"),r.a.createElement("th",null,"Rate"))),r.a.createElement("tbody",null,this.displayRatesMob(this.state.finalArr,1)))),r.a.createElement(U.a,{tabId:"2"},r.a.createElement(_.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left"}},"Region"),r.a.createElement("th",null,"Rate"))),r.a.createElement("tbody",null,this.displayRatesMob(this.state.finalArr,2)))),r.a.createElement(U.a,{tabId:"3"},r.a.createElement(_.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left"}},"Region"),r.a.createElement("th",null,"Rate"))),r.a.createElement("tbody",null,this.displayRatesMob(this.state.finalArr,3)))),r.a.createElement(U.a,{tabId:"4"},r.a.createElement(_.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left"}},"Region"),r.a.createElement("th",null,"Rate"))),r.a.createElement("tbody",null,this.displayRatesMob(this.state.finalArr,4)))))),r.a.createElement("div",{className:"mobileViewGraphDiv"},r.a.createElement(Q.Line,{data:this.state,options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Rates per Region"},legend:{display:!0,position:"bottom"},scales:{xAxes:[{ticks:{autoSkip:!1,maxRotation:0,minRotation:0,fontSize:7}}],yAxes:[{ticks:{fontSize:7}}]}}}))):r.a.createElement("div",{className:"browserView"},r.a.createElement("div",{className:"ratesTable"},r.a.createElement(_.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left"}},"Region"),r.a.createElement("th",null,"Today"),r.a.createElement("th",null,"Yesterday"),r.a.createElement("th",null,"Last Week"),r.a.createElement("th",null,"Last Month"))),r.a.createElement("tbody",null,this.displayRates(this.state.finalArr)))),r.a.createElement("div",{className:"graphDiv"},r.a.createElement(Q.Line,{data:this.state,options:{maintainAspectRatio:!1,responsive:!0,title:{display:!1,text:"Rates per Region Chart",fontSize:16},legend:{display:!0,position:"bottom"}}}))):r.a.createElement("span",null,"Loading rates...")}}]),a}(r.a.Component),Z=function(e){Object(N.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).createDate=function(e,t){return e=new Date(e.setDate(e.getDate()+t)),String(e.getDate()).padStart(2,"0")+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+e.getFullYear()},n.resetForm=function(){document.getElementById("sellForm").reset()},n.state={regions:["Punjab","Sindh","Balochistan","KPK","Federal"],Alertvisible:!1},n}return Object(k.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={shedName:this.shed.value,sellRate:this.rate.value,address:this.address.value,contact:this.contact.value,city:this.city.value,region:this.region.value,tag:"sell",date:this.createDate(new Date,0),timeStamp:Date.now()};console.log(a),O()({url:"/api/saveSelling",method:"POST",data:a}).then((function(){console.log("New rate sent to the server!"),t.setState({Alertvisible:!0,alertColor:"primary",message:"Selling details added"},(function(){window.setTimeout((function(){t.setState({Alertvisible:!1})}),3e3)})),t.resetForm()})).catch((function(){console.log("Internal server error!")}))}},{key:"render",value:function(){var e=this,t=this.state.regions;return t=t.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("div",{className:"addRate"},r.a.createElement(C.a,null,r.a.createElement(M.a,null,r.a.createElement(T.a,null,r.a.createElement(B.a,{className:"sellForm",id:"sellForm",onSubmit:this.handleSubmit.bind(this)},r.a.createElement(M.a,null,r.a.createElement("br",null),r.a.createElement("p",{className:"sellFormTitle"},"Enter Flock Details")),r.a.createElement(W.a,{className:"sellJumbotron"},r.a.createElement(M.a,{form:!0},r.a.createElement(T.a,{md:6},r.a.createElement(P.a,null,r.a.createElement(L.a,null,"Shed Name"),r.a.createElement(I.a,{type:"text",placeholder:"enter shed name e.g (Chick House)",innerRef:function(t){return e.shed=t}}))),r.a.createElement(T.a,{md:6},r.a.createElement(P.a,null,r.a.createElement(L.a,null,"Selling Rate"),r.a.createElement(I.a,{type:"number",placeholder:"enter selling rate e.g (123 /Kg)",innerRef:function(t){return e.rate=t}})))),r.a.createElement(P.a,null,r.a.createElement(L.a,null,"Address"),r.a.createElement(I.a,{type:"text",placeholder:"1234 Main St",innerRef:function(t){return e.address=t}})),r.a.createElement(P.a,null,r.a.createElement(L.a,null,"Contact No"),r.a.createElement(I.a,{type:"text",placeholder:"0345 8509705",innerRef:function(t){return e.contact=t}})),r.a.createElement(M.a,{form:!0},r.a.createElement(T.a,{md:6},r.a.createElement(P.a,null,r.a.createElement(L.a,null,"City"),r.a.createElement(I.a,{type:"text",placeholder:"Islamabad",innerRef:function(t){return e.city=t}}))),r.a.createElement(T.a,{md:6},r.a.createElement(P.a,null,r.a.createElement(L.a,null,"Select Region"),r.a.createElement(I.a,{type:"select",innerRef:function(t){return e.region=t}},t)))),r.a.createElement("div",{className:"alertDiv"},r.a.createElement(z.a,{color:this.state.alertColor,isOpen:this.state.Alertvisible}," ",this.state.message," "))),r.a.createElement(G.a,{block:!0,className:"sellButt"},"Submit"),r.a.createElement("br",null))))))}}]),a}(r.a.Component),ee=function(e){Object(N.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={posts:[]},e.componentDidMount=function(){e.getBlogPost()},e.getBlogPost=function(){O.a.get("/api/listings").then((function(t){var a=t.data;console.log(a),e.setState({posts:a}),console.log("Data has been received!")})).catch((function(){alert("Error receiving data!")}))},e.displayBlogPost=function(e){return e.length?e.map((function(e,t){return r.a.createElement("div",{key:t,className:"listingDiv"},r.a.createElement(W.a,null,r.a.createElement("h1",{className:"display-5"},e.shedName),r.a.createElement("p",{className:"lead"},"Selling Rate: ",e.sellRate," /Kg"),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("p",null,"Address: ",e.address),r.a.createElement("p",null,"Contact No: ",e.contact),r.a.createElement("p",null,"City: ",e.city),r.a.createElement("p",null,"Region: ",e.region)))})):null},e}return Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.displayBlogPost(this.state.posts))}}]),a}(r.a.Component),te=function(e){Object(N.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).createDate=function(e,t){return e=new Date(e.setDate(e.getDate()+t)),String(e.getDate()).padStart(2,"0")+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+e.getFullYear()},n.randomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},n.randomByte=function(){return n.randomNumber(0,255)},n.randomPercent=function(){return(.01*n.randomNumber(50,100)).toFixed(2)},n.randomCssRgba=function(){return"rgba(".concat([n.randomByte(),n.randomByte(),n.randomByte(),n.randomPercent()].join(","),")")},n.getGraphData=function(){var e=Object(V.a)(J.a.mark((function e(t){var a,r,l,c,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/rates/Last"+t);case 2:return a=e.sent,e.next=5,a.data;case 5:r=e.sent,console.log(r),l=[],c=[],s=r[0].rate.length-1,r[0].rate.forEach((function(e){c.push(n.createDate(new Date,-s)),s-=1})),n.setState({labels:c}),r.forEach((function(e){var t=n.randomCssRgba();console.log(t),l.push({label:e._id,fill:!1,lineTension:.5,borderColor:t,data:e.rate})})),console.log(l),n.setState({datasets:l});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={labels:[],datasets:[]},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){this.getGraphData(7)}},{key:"render",value:function(){return r.a.createElement("div",{className:"graphDiv2"},r.a.createElement(Q.Line,{data:this.state,options:{title:{display:!0,text:"Rates per Region",fontSize:20},legend:{display:!0,position:"bottom"}}}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(104);a.n(ae).a.init("xtdmy1/poultryapp"),c.a.render(r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(o.a,{path:"/",component:R}),r.a.createElement(o.a,{exact:!0,path:"/",component:w}),r.a.createElement(o.a,{exact:!0,path:"/sell",component:Z}),r.a.createElement(o.a,{exact:!0,path:"/buy",component:ee}),r.a.createElement(o.a,{exact:!0,path:"/addRate",component:K}),r.a.createElement(o.a,{exact:!0,path:"/showRate",component:X}),r.a.createElement(o.a,{exact:!0,path:"/graph",component:te}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.d345cb94.chunk.js.map
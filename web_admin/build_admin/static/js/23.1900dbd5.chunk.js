(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[23],{443:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(442),l=a(3),i=a.n(l),r=a(456),c=a.n(r),o=a(68),s=a.n(o),d=function(e){var t=Object(l.useState)(!0),a=Object(n.a)(t,2),r=a[0],o=a[1];return Object(l.useEffect)((function(){o(e.isLoading)}),[e.isLoading]),r?i.a.createElement("div",{style:{position:"absolute",borderRadius:20,left:"50%",top:"50%",marginLeft:"-50px",marginTop:"-50px",zIndex:10,background:"black",opacity:.4}},i.a.createElement("div",{style:{padding:35}},i.a.createElement(c.a,{width:100,height:100,type:"Bars",visible:!0,color:"#00BFFF"}))):null};d.prototype={isLoading:s.a.bool}},727:function(e,t,a){"use strict";a.r(t),a.d(t,"Transaction",(function(){return O}));var n=a(444),l=a.n(n),i=a(445),r=a(442),c=a(3),o=a.n(c),s=a(458),d=a(708),m=a(709),u=a(464),p=a(710),E=a(466),f=a(461),h=a(455),g=a.n(h),b=a(118),v=a.n(b),y=a(119),j=a(443),w=a(730),O=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],h=Object(c.useState)([]),b=Object(r.a)(h,2),O=b[0],k=b[1];function x(){return(x=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,g()({method:"GET",url:"https://antarblanja.com/api/admin/transaction",headers:{Authorization:v.a.get("admin_token")}});case 3:t=e.sent,k(t.data),console.log(t.data),n(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(j.a,{isLoading:a}),o.a.createElement(s.a,null,o.a.createElement(d.a,{xs:"12",lg:"6"},o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("i",{className:"fa fa-align-justify"})," Transaction"),O.length>0?o.a.createElement(p.a,null,o.a.createElement(E.a,{responsive:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Transaction id"),o.a.createElement("th",null,"Amount"),o.a.createElement("th",null,"Arrived time"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,O.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",{style:{verticalAlign:"middle"}},e.transaction_id),o.a.createElement("td",{style:{verticalAlign:"middle"}},e.amount),o.a.createElement("td",{style:{verticalAlign:"middle"}},Object(w.a)(new Date(e.arrived_time),"dd MMM yyyy")),o.a.createElement("td",{style:{verticalAlign:"middle"}},o.a.createElement(f.a,{onClick:function(){y.a.push("/admin/TransactionDetail/".concat(e.transaction_id))}},o.a.createElement("svg",{className:"bi bi-eye-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z",clipRule:"evenodd"})))))}))))):o.a.createElement("p",{style:{margin:20,alignSelf:"center"}},"No Transaction Yet")))))};t.default=O}}]);
//# sourceMappingURL=23.1900dbd5.chunk.js.map
(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[10],{443:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(442),r=t(3),o=t.n(r),l=t(456),s=t.n(l),c=t(68),i=t.n(c),u=function(e){var a=Object(r.useState)(!0),t=Object(n.a)(a,2),l=t[0],c=t[1];return Object(r.useEffect)((function(){c(e.isLoading)}),[e.isLoading]),l?o.a.createElement("div",{style:{position:"absolute",borderRadius:20,left:"50%",top:"50%",marginLeft:"-50px",marginTop:"-50px",zIndex:10,background:"black",opacity:.4}},o.a.createElement("div",{style:{padding:35}},o.a.createElement(s.a,{width:100,height:100,type:"Bars",visible:!0,color:"#00BFFF"}))):null};u.prototype={isLoading:i.a.bool}},444:function(e,a,t){e.exports=t(194)},445:function(e,a,t){"use strict";function n(e,a,t,n,r,o,l){try{var s=e[o](l),c=s.value}catch(i){return void t(i)}s.done?a(c):Promise.resolve(c).then(n,r)}function r(e){return function(){var a=this,t=arguments;return new Promise((function(r,o){var l=e.apply(a,t);function s(e){n(l,r,o,s,c,"next",e)}function c(e){n(l,r,o,s,c,"throw",e)}s(void 0)}))}}t.d(a,"a",(function(){return r}))},458:function(e,a,t){"use strict";var n=t(23),r=t(87),o=t(3),l=t.n(o),s=t(68),c=t.n(s),i=t(440),u=t.n(i),d=t(441),b=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.e,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,i=e.widths,b=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(a,t){var n=e[a];if(delete b[a],n){var r=!t;p.push(r?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var m=Object(d.c)(u()(a,o?"no-gutters":null,c?"form-row":"row",p),t);return l.a.createElement(s,Object(n.a)({},b,{className:m}))};f.propTypes=p,f.defaultProps=m,a.a=f},461:function(e,a,t){"use strict";var n=t(23),r=t(87),o=t(448),l=t(46),s=t(3),c=t.n(s),i=t(68),u=t.n(i),d=t(440),b=t.n(d),p=t(441),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.e,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,l=e.className,s=e.close,i=e.cssModule,u=e.color,d=e.outline,m=e.size,f=e.tag,v=e.innerRef,g=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(d?"-outline":"")+"-"+u,E=Object(p.c)(b()(l,{close:s},s||"btn",s||h,!!m&&"btn-"+m,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);g.href&&"button"===f&&(f="a");var j=s?"Close":null;return c.a.createElement(f,Object(n.a)({type:"button"===f&&g.onClick?"button":void 0},g,{className:E,ref:v,onClick:this.onClick,"aria-label":t||j}))},a}(c.a.Component);f.propTypes=m,f.defaultProps={color:"secondary",tag:"button"},a.a=f},464:function(e,a,t){"use strict";var n=t(23),r=t(87),o=t(3),l=t.n(o),s=t(68),c=t.n(s),i=t(440),u=t.n(i),d=t(441),b={tag:d.e,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),c=Object(d.c)(u()(a,"card-header"),t);return l.a.createElement(o,Object(n.a)({},s,{className:c}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},466:function(e,a,t){"use strict";var n=t(23),r=t(87),o=t(3),l=t.n(o),s=t(68),c=t.n(s),i=t(440),u=t.n(i),d=t(441),b={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.e,responsiveTag:d.e,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var a=e.className,t=e.cssModule,o=e.size,s=e.bordered,c=e.borderless,i=e.striped,b=e.dark,p=e.hover,m=e.responsive,f=e.tag,v=e.responsiveTag,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(d.c)(u()(a,"table",!!o&&"table-"+o,!!s&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!b&&"table-dark",!!p&&"table-hover"),t),j=l.a.createElement(f,Object(n.a)({},h,{ref:g,className:E}));if(m){var y=Object(d.c)(!0===m?"table-responsive":"table-responsive-"+m,t);return l.a.createElement(v,{className:y},j)}return j};p.propTypes=b,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},719:function(e,a,t){"use strict";t.r(a),t.d(a,"DropZone",(function(){return y}));var n=t(444),r=t.n(n),o=t(445),l=t(442),s=t(3),c=t.n(s),i=t(458),u=t(708),d=t(709),b=t(464),p=t(710),m=t(466),f=t(461),v=t(455),g=t.n(v),h=t(118),E=t.n(h),j=(t(119),t(443)),y=function(){var e=Object(s.useState)(!1),a=Object(l.a)(e,2),t=a[0],n=a[1],v=Object(s.useState)([]),h=Object(l.a)(v,2),y=h[0],O=h[1];function k(){return(k=Object(o.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,g()({method:"GET",url:"https://antarblanja.com/api/dropzone",headers:{Authorization:E.a.get("admin_token")}});case 3:a=e.sent,O(a.data),console.log(a.data),n(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[]),c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(j.a,{isLoading:t}),c.a.createElement(i.a,null,c.a.createElement(u.a,{xs:"12",lg:"6"},c.a.createElement(d.a,null,c.a.createElement(b.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," DropZone"),y.length>0?c.a.createElement(p.a,null,c.a.createElement(m.a,{responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Drop zone id"),c.a.createElement("th",null,"name"),c.a.createElement("th",null,"action"))),c.a.createElement("tbody",null,y.map((function(e,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",{style:{verticalAlign:"middle"}},e.dropzone_id),c.a.createElement("td",{style:{verticalAlign:"middle"}},e.nama),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement(f.a,{onClick:function(){alert("edit"+e.dropzone_id)}},c.a.createElement("svg",{className:"bi bi-pen",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M5.707 13.707a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391L10.086 2.5a2 2 0 012.828 0l.586.586a2 2 0 010 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 011.414 0l.586.586a1 1 0 010 1.414L5 13l-3 1 1-3z",clipRule:"evenodd"}),c.a.createElement("path",{fillRule:"evenodd",d:"M9.854 2.56a.5.5 0 00-.708 0L5.854 5.855a.5.5 0 01-.708-.708L8.44 1.854a1.5 1.5 0 012.122 0l.293.292a.5.5 0 01-.707.708l-.293-.293z",clipRule:"evenodd"}),c.a.createElement("path",{d:"M13.293 1.207a1 1 0 011.414 0l.03.03a1 1 0 01.03 1.383L13.5 4 12 2.5l1.293-1.293z"})))))}))))):c.a.createElement("p",{style:{margin:20,alignSelf:"center"}},"No Dropzone Yet")))))};a.default=y}}]);
//# sourceMappingURL=10.07957381.chunk.js.map
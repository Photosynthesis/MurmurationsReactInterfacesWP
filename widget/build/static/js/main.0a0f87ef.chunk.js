(this.webpackJsonpwidget=this.webpackJsonpwidget||[]).push([[0],{242:function(e,t,a){},494:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(62),i=a.n(n),s=(a(242),a(10)),c=a(236),o=a(235),l=a.n(o),d=a(2);var j=function(e){if(!e.value)return null;if(e.value===Object(e.value)&&!Array.isArray(e.value))return null;var t=e.value,a=e.field,r=e.attribs,n=e.nodeData;Array.isArray(t)&&(t=t.join(", "));var i="";if(1==r.showLabel){var s=r.label;i=Object(d.jsx)("div",{className:"node-field-label "+a,children:s})}else i="";return r.truncate&&t.length>r.truncate&&(t=t.slice(0,r.truncate)+"..."),r.link&&(t=Object(d.jsx)("a",{href:n[r.link],children:t})),Object(d.jsxs)("div",{className:"node-field "+a,children:[i,Object(d.jsx)("div",{className:"node-field-value "+a,children:t})]})};var u=function(e){var t=[];if("HTML"==e.settings.apiNodeFormat)t=Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:e.nodeData}});else if(e.settings.directoryDisplaySchema)for(var a in e.settings.directoryDisplaySchema)e.settings.directoryDisplaySchema.hasOwnProperty(a)&&t.push(Object(d.jsx)(j,{field:a,value:e.nodeData[a],attribs:e.settings.directoryDisplaySchema[a],nodeData:e.nodeData}));return Object(d.jsx)("div",{className:"directory-node",children:t})};var p=function(e){var t,a=Object(r.useState)(0),n=Object(s.a)(a,2),i=n[0],c=n[1],o=Object(r.useState)(null),j=Object(s.a)(o,2),p=j[0],b=j[1],m=parseInt(e.settings.nodesPerPage)||15,h=e.nodes;return Object(r.useEffect)((function(){var e=parseInt(i)*m,t=parseInt(e)+m;b(h.slice(e,t))}),[i,h]),e.loaded||(t=Object(d.jsx)("div",{class:"mri-directory-loading",children:Object(d.jsx)("img",{src:e.settings.clientPathToApp+"public/images/spinner.gif"})})),Object(d.jsxs)("div",{children:[e.loaded?Object(d.jsxs)("div",{className:"nodeList",children:[Object(d.jsxs)("div",{className:"node-count",children:[h.length," results found"]}),p.map((function(t){return Object(d.jsx)(u,{nodeData:t,settings:e.settings})}))]}):t,Object(d.jsx)("div",{className:"react-paginate",children:Object(d.jsx)(l.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:h.length/m,marginPagesDisplayed:2,pageRangeDisplayed:m,onPageChange:function(e){c(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",pageClassName:"page-link-li",activeClassName:"active"})})]})},b=a(496),m=a(499),h=a(497),g=a(498),f=a(16),O=a.n(f),v=function(e){var t=e.node;return Object(d.jsxs)("div",{children:[t.image&&Object(d.jsx)("img",{src:t.image[0].url,alt:"Node logo",maxWidth:"50%",height:8}),Object(d.jsx)("div",{children:t.url||t.urls?Object(d.jsx)("a",{href:t.url||t.urls[0].url,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("span",{wordBreak:"break-all",children:t.name})}):Object(d.jsx)("span",{wordBreak:"break-all",children:t.name})}),t.description&&Object(d.jsx)("div",{children:t.description.length>250?"".concat(t.description.slice(0,250),"..."):t.description})]})};a(493);delete O.a.Icon.Default.prototype._getIconUrl;var x=function(e){var t,a=e.nodes,r=e.settings,n=e.loaded;return O.a.Icon.Default.mergeOptions({iconRetinaUrl:r.clientPathToApp+"public/images/marker-icon-2x.png",iconUrl:r.clientPathToApp+"public/images/marker-icon.png",shadowUrl:r.clientPathToApp+"public/images/marker-shadow.png"}),n||(t=Object(d.jsx)("div",{class:"mri-map-loading",children:Object(d.jsx)("img",{src:r.clientPathToApp+"public/images/spinner.gif"})})),Object(d.jsxs)("div",{class:"mri-map-outer-container",children:[t,Object(d.jsxs)(b.a,{center:r.mapCenter,zoom:r.mapZoom,scrollWheelZoom:r.mapAllowScrollZoom,style:{height:"70vh",width:"100%",margin:"auto"},children:[Object(d.jsx)(m.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.map((function(e){if(e.data){var t=e.id;(e=e.data).id=t}return Object(d.jsx)("div",{children:e.geolocation?Object(d.jsx)(h.a,{position:[parseFloat(e.geolocation.lat),parseFloat(e.geolocation.lon)],children:Object(d.jsx)(g.a,{children:Object(d.jsx)(v,{node:e})})}):null},"".concat(e.id||e.objectID))}))]})]})};var y=function(e){var t=this,a=e.settings,n=e.interfaceComp,i=Object(r.useState)(!1),o=Object(s.a)(i,2),l=o[0],j=o[1],u=Object(r.useState)(!1),b=Object(s.a)(u,2),m=b[0],h=b[1],g=Object(r.useState)([]),f=Object(s.a)(g,2),O=f[0],v=f[1],y=Object(r.useState)(null),S=Object(s.a)(y,2),w=S[0],D=S[1],k=Object(r.useState)(a.formData),N=Object(s.a)(k,2),C=N[0],P=N[1];Object(r.useEffect)((function(){I()}),[]);var A,I=function(e){var t=a.apiUrl,r=a.apiNodeFormat;j(!1),v([]);var i=new URLSearchParams(e);"directory"==n&&i.set("format",r),w&&i.set("search",w),fetch(t+"?"+i.toString()).then((function(e){return e.json()})).then((function(e){j(!0),v(e)}),(function(e){j(!0),h(e)}))},L=a.filterSchema;return m?A=Object(d.jsxs)("div",{children:["Error: ",m.message]}):"directory"==n?A=Object(d.jsx)(p,{nodes:O,settings:a,loaded:l}):"map"==n&&(A=Object(d.jsx)(x,{nodes:O,settings:a,loaded:l})),Object(d.jsxs)("div",{children:[a.showFilters?Object(d.jsx)("div",{className:"mri-filter-form",children:Object(d.jsx)(c.a,{schema:L,formData:C,onChange:function(e,t){var r=e.formData,n="";P(r),Object.keys(r).forEach((function(e,t){if(r[e]&&"any"!=r[e]&&""!=r[e]){if("operator"in a.filterSchema.properties[e])var i=a.filterSchema.properties[e].operator;else i="equals";n+="filters["+t+"][0]="+e+"&",n+="filters["+t+"][1]="+i+"&",n+="filters["+t+"][2]="+r[e]+"&"}})),I(n)},onError:function(){console.log("errors",t)}})}):null,Object(d.jsx)("div",{className:"mri-search-form",children:Object(d.jsxs)("form",{action:"/",onSubmit:function(e){e.preventDefault(),I()},children:[Object(d.jsx)("input",{type:"text",name:"search",onChange:function(e){D(e.target.value)},value:w}),Object(d.jsx)("button",{type:"submit",children:"Search"})]})}),A]})},S=document.getElementById("murmurations-react-directory"),w=document.getElementById("murmurations-react-map");if(S){var D=window.wpReactSettings;i.a.render(Object(d.jsx)(y,{settings:D,interfaceComp:"directory"}),S)}if(w){var k=window.wpReactSettings;i.a.render(Object(d.jsx)(y,{settings:k,interfaceComp:"map"}),w)}}},[[494,1,2]]]);
//# sourceMappingURL=main.0a0f87ef.chunk.js.map
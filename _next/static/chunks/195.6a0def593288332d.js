"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4352:function(f,b,a){a.d(b,{h:function(){return n}});var g=a(6521),c=a(6741),h=a.n(c),d=a(5619),i=a.n(d),e=a(5721),j=a(2127),k=a(8246),l=a(2443);function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var n=(0,e.forwardRef)(function(a,w){var c,b,F=a.aspect,f=a.width,x=void 0===f?"100%":f,n=a.height,y=void 0===n?"100%":n,z=a.minWidth,A=a.minHeight,B=a.maxHeight,G=a.children,o=a.debounce,p=void 0===o?0:o,q=a.id,C=a.className,r=a.initialWidth,s=a.initialHeight,t=(0,e.useState)({containerWidth:void 0===r?-1:r,containerHeight:void 0===s?-1:s}),H=t[0],I=t[1],d=(0,e.useRef)(null);(0,e.useImperativeHandle)(w,function(){return d},[d]);var u=(0,e.useState)(!1),D=u[0],J=u[1],K=function(){return d.current?{containerWidth:d.current.clientWidth,containerHeight:d.current.clientHeight}:null},v=function(){if(D){var a=K();if(a){var d=H.containerWidth,e=H.containerHeight,b=a.containerWidth,c=a.containerHeight;(b!==d||c!==e)&&I({containerWidth:b,containerHeight:c})}}},E=p>0?i().debounce(v,p):v;return(0,e.useEffect)(function(){if(D){var a=K();a&&I(a)}},[D]),(0,e.useEffect)(function(){J(!0)},[]),(0,g.jsx)(j.ZP,{handleWidth:!0,handleHeight:!0,onResize:E,targetRef:d,children:(0,g.jsx)("div",(c=function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){m(d,a,c[a])})}return d}({},null!=q?{id:"".concat(q)}:{}),b=(b={className:h()("recharts-responsive-container",C),style:{width:x,height:y,minWidth:z,minHeight:A,maxHeight:B},ref:d,children:function(){var c=H.containerWidth,d=H.containerHeight;if(c<0||d<0)return null;(0,l.Z)((0,k.hU)(x)||(0,k.hU)(y),"The width(%s) and height(%s) are both fixed numbers,\n        maybe you don't need to use a ResponsiveContainer.",x,y),(0,l.Z)(!F||F>0,"The aspect(%s) must be greater than zero.",F);var b=(0,k.hU)(x)?c:x,a=(0,k.hU)(y)?d:y;return F&&F>0&&(b?a=b/F:a&&(b=a*F),B&&a>B&&(a=B)),(0,l.Z)(b>0||a>0,"The width(%s) and height(%s) of chart should be greater than 0,\n        please check the style of container, or the props width(%s) and height(%s),\n        or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n        height and width.",b,a,x,y,z,A,F),(0,e.cloneElement)(G,{width:b,height:a})}()},b),Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):(function(b,d){var a=Object.keys(b);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(b);a.push.apply(a,c)}return a})(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))}),c))})})},9398:function(j,b,a){a.r(b),a.d(b,{SqliteHttpvfsDemo:function(){return $},Store:function(){return Y}});var k,e=a(6105),l=a.n(e),m=a(6521);a(2173);var n=a(4793),o=a(4070),c=a(4030),p=a(5721),f=a(2505),g=a.n(f),q=a(2086),r=a(706),h=a(2009),d=a.n(h),s=a(7357),i=a(432),t=a.n(i),u=a(8675),v=a(7290),w=a(8094),x=a(7077),y=a(7225),z=a(7571),A=a(4352);function B(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function C(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}function D(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function d(a){C(g,e,f,d,h,"next",a)}function h(a){C(g,e,f,d,h,"throw",a)}d(void 0)})}}function E(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||G(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(a){return function(a){if(Array.isArray(a))return B(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||G(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(a,c){if(a){if("string"==typeof a)return B(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return B(a,c)}}function H(){return(H=D(l().mark(function a(b,c){var d,e,f,g,h;return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(c.length<3)){a.next=2;break}return a.abrupt("return",[{error:"Type more..."}]);case 2:return a.prev=2,a.next=5,b.ready;case 5:return d=a.sent.db,e=c.split(" ").map(function(a){return a.replace(/"/g,"")}).map(function(a){return'"'.concat(a,'"*')}).join(" "),f="".concat(e),g="select *, snippet(indicator_search, -1, '\xa7', '\xa7', ' ... ', 32) as snippet from indicator_search where indicator_search match ? order by rank limit 10",console.log("executing search query",f,g),a.next=12,d.query(g,[f]);case 12:return h=a.sent,a.abrupt("return",h);case 16:throw a.prev=16,a.t0=a.catch(2),console.error("authorsSearch",a.t0),a.t0;case 20:case"end":return a.stop()}},a,null,[[2,16]])}))).apply(this,arguments)}var I=d()(function(a,b){return H.apply(this,arguments)},250);function J(){return(J=D(l().mark(function a(b,c){var d,e,f,g;return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.ready;case 3:return d=a.sent.db,e="select short_name, country_code from wdi_country where long_name like ? or short_name like ? or country_code like ? limit 10",console.log("executing search query",e),f="%".concat(c,"%"),a.next=9,d.query(e,[f,f,f]);case 9:return g=a.sent,a.abrupt("return",g);case 13:throw a.prev=13,a.t0=a.catch(0),console.error("authorsSearch",a.t0),a.t0;case 17:case"end":return a.stop()}},a,null,[[0,13]])}))).apply(this,arguments)}var K=d()(function(a,b){return J.apply(this,arguments)},250);function L(a,k){if(a.error)return a.error;if("value"===k.context)return a.indicator_name;var e=[],b=!0,f=!1,g=void 0;try{for(var h,c=a.snippet.split("\xa7").entries()[Symbol.iterator]();!(b=(h=c.next()).done);b=!0){var i=E(h.value,2),d=i[0],j=i[1];e.push(d%2==0?(0,m.jsx)("span",{children:j},d):(0,m.jsx)("b",{children:j},d))}}catch(l){f=!0,g=l}finally{try{b||null==c.return||c.return()}finally{if(f)throw g}}return(0,m.jsxs)(m.Fragment,{children:[a.indicator_name,(0,m.jsx)("br",{}),(0,m.jsx)("small",{children:a.topic}),(0,m.jsx)("br",{}),(0,m.jsx)("span",{style:{color:"gray"},children:e})]})}var M=[{short_name:"United States",country_code:"USA"},{short_name:"Germany",country_code:"DEU"},{short_name:"India",country_code:"IND"},{short_name:"China",country_code:"CHN"},{short_name:"Korea",country_code:"KOR"},],N={indicator_code:"IT.NET.USER.ZS",topic:"Infrastructure: Communications",indicator_name:"Individuals using the Internet (% of population)",short_definition:null,long_definition:"Internet users are individuals who have used the Internet (from any location) in the last 3 months. The Internet can be used via a computer, mobile phone, personal digital assistant, games machine, digital TV etc.",statistical_concept_and_methodology:"The Internet is a world-wide public computer network. It provides access to a number of communication services including the World Wide Web and carries email, news, entertainment and data files, irrespective of the device used (not assumed to be only via a computer - it may also be by mobile phone, PDA, games machine, digital TV etc.). Access can be via a fixed or mobile network. For additional/latest information on sources and country notes, please also refer to: https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx",development_relevance:"The digital and information revolution has changed the way the world learns, communicates, does business, and treats illnesses. New information and communications technologies (ICT) offer vast opportunities for progress in all walks of life in all countries - opportunities for economic growth, improved health, better service delivery, learning through distance education, and social and cultural advances.\n\nToday's smartphones and tablets have computer power equivalent to that of yesterday's computers and provide a similar range of functions. Device convergence is thus rendering the conventional definition obsolete.\n\nComparable statistics on access, use, quality, and affordability of ICT are needed to formulate growth-enabling policies for the sector and to monitor and evaluate the sector's impact on development. Although basic access data are available for many countries, in most developing countries little is known about who uses ICT; what they are used for (school, work, business, research, government); and how they affect people and businesses. The global Partnership on Measuring ICT for Development is helping to set standards, harmonize information and communications technology statistics, and build statistical capacity in developing countries. However, despite significant improvements in the developing world, the gap between the ICT haves and have-nots remains.",snippet:""},O=["#7cb5ec","#434348","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#2b908f","#f45b5b","#91e8e1",],P=function(h){var j=h.store,c=(0,p.useState)(!1),i=c[0],k=c[1],d=(0,p.useState)(M),e=d[0],n=d[1],f=(0,p.useState)(N),a=f[0],o=f[1],g=(0,p.useState)(null),b=g[0],q=g[1];function r(){return(r=D(l().mark(function b(){var c,d,f,g,h,k,m,n,o,p;return l().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(i){b.next=2;break}return b.abrupt("return");case 2:if(!(0===e.length||!a)){b.next=5;break}return q(null),b.abrupt("return");case 5:return console.log("plot",e,a),b.next=8,j.ready;case 8:return c=b.sent.db,b.next=11,c.query("select short_name, year, value from wdi_data join wdi_country using (country_code) where country_code in (select value from json_each(?)) and indicator_code = ? order by year asc",[JSON.stringify(e.map(function(a){return a.country_code})),a.indicator_code,]);case 11:for(d=b.sent,f=new Map,g=!0,h=!1,k=void 0,b.prev=14,m=d[Symbol.iterator]();!(g=(n=m.next()).done);g=!0)o=n.value,(p=f.get(o.year))||(p={year:o.year},f.set(o.year,p)),p[o.short_name]=o.value;b.next=22;break;case 18:b.prev=18,b.t0=b.catch(14),h=!0,k=b.t0;case 22:b.prev=22,b.prev=23,g||null==m.return||m.return();case 25:if(b.prev=25,!h){b.next=28;break}throw k;case 28:return b.finish(25);case 29:return b.finish(22);case 30:console.log("plotres",d),q({series:e.map(function(a){return a.short_name}),data:F(f.values())});case 32:case"end":return b.stop()}},b,null,[[14,18,22,30],[23,,25,29]])}))).apply(this,arguments)}return(0,p.useEffect)(function(){r.apply(this,arguments)},[a,e,i]),(0,m.jsx)(t(),{onChange:function(a){return k(a)},children:(0,m.jsxs)("div",{className:"sqlite-httpvfs-demo",children:["Countries:"," ",(0,m.jsx)(s.Z,{value:e,cacheOptions:!0,defaultOptions:!0,isMulti:!0,loadOptions:function(a){return K(j,a)},getOptionLabel:function(a){return a.short_name},getOptionValue:function(a){return a.country_code},onChange:function(a){return n(a)}}),"Indicator:"," ",(0,m.jsx)(s.Z,{value:a,cacheOptions:!0,defaultOptions:!0,loadOptions:function(a){return I(j,a)},getOptionLabel:function(a){return a.indicator_name},formatOptionLabel:L,getOptionValue:function(a){return a.indicator_code},onChange:function(a){return o(a)},isOptionDisabled:function(a){return!!a.error}}),b&&(0,m.jsx)(A.h,{width:"100%",height:300,initialWidth:600,initialHeight:300,children:(0,m.jsxs)(u.w,{data:b.data,children:[(0,m.jsx)(v.K,{dataKey:"year"}),(0,m.jsx)(w.B,{}),(0,m.jsx)(x.u,{}),(0,m.jsx)(y.D,{}),b.series.map(function(a,b){return(0,m.jsx)(z.x,{type:"monotone",dataKey:a,name:a,stroke:O[b%O.length],connectNulls:!0,strokeWidth:3},a)})]})}),(0,m.jsxs)("details",{children:[(0,m.jsx)("summary",{children:"Extra information about this indicator"}),(0,m.jsxs)("dl",{className:"maxheight",children:[(0,m.jsx)("dt",{children:"Indicator Code"}),(0,m.jsx)("dd",{children:null==a?void 0:a.indicator_code}),(0,m.jsx)("dt",{children:"Long definition"}),(0,m.jsx)("dd",{children:null==a?void 0:a.long_definition}),(0,m.jsx)("dt",{children:"Statistical concept and methodology"}),(0,m.jsx)("dd",{children:null==a?void 0:a.statistical_concept_and_methodology}),(0,m.jsx)("dt",{children:"Development relevance"}),(0,m.jsx)("dd",{children:null==a?void 0:a.development_relevance})]})]})]})})};function Q(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function R(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}function S(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function d(a){R(g,e,f,d,h,"next",a)}function h(a){R(g,e,f,d,h,"throw",a)}d(void 0)})}}function T(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function U(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){T(d,a,c[a])})}return d}function V(b,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(a)):(function(b,d){var a=Object.keys(b);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(b);a.push.apply(a,c)}return a})(Object(a)).forEach(function(c){Object.defineProperty(b,c,Object.getOwnPropertyDescriptor(a,c))}),b}function W(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||X(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(a,c){if(a){if("string"==typeof a)return Q(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return Q(a,c)}}g().setAppElement(".lh-copy");var Y=function(){function b(){!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,b),this.worker=null,this.error="",this.statsConnected=!1,Object.assign(window,{httpvfs:this}),this.ready=this.init()}return b.prototype.init=function(){var b=this;return S(l().mark(function c(){var d,e,f,g,h;return l().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return f=new a.U(a(4110)),console.log("worker url",f),g=new a.U(a(606)),h=new URLSearchParams(location.search).get("dbUrl")||"/world-development-indicators-sqlite/split-db",c.next=7,(0,q.createDbWorker)([{from:"jsonconfig",virtualFilename:"wdi.sqlite3",configUrl:h+"/config.json"},{from:"inline",virtualFilename:"dbstat.sqlite3",config:{serverMode:"full",requestChunkSize:4096,url:h+"/dbstat.sqlite3"}},],f.toString(),g.toString());case 7:return b.worker=c.sent,c.next=10,null===(d=k.worker)|| void 0===d?void 0:d.db.query("select * from sqlite_master");case 10:return c.next=12,null===(e=k.worker)|| void 0===e?void 0:e.worker.evalCode('\n			function getFlag(country_code) {\n				// just some unicode magic\n				return String.fromCodePoint(...Array.from(country_code||"")\n					.map(c => 127397 + c.codePointAt()));\n			}\n			\n			await db.create_function("get_flag", getFlag)');case 12:return c.abrupt("return",b.worker);case 13:case"end":return c.stop()}},c)}))()},b}();function Z(){return k||(k=new Y),k}var $=function(f){var g,z=Z(),a={},c=!0,h=!1,i=void 0;try{for(var d,j,e=((null===(d=f.className)|| void 0===d?void 0:d.split(" "))||[])[Symbol.iterator]();!(c=(j=e.next()).done);c=!0)a[j.value]=!0}catch(A){h=!0,i=A}finally{try{c||null==e.return||e.return()}finally{if(h)throw i}}if(a.ftsDemo)return(0,m.jsx)(P,{store:z});p.useEffect(function(){a.autorun&&J()},[]);var k=W(p.useState(f.value),2),q=k[0],D=k[1],s=W(p.useState(""),2),b=s[0],E=s[1],t=W(p.useState(null),2),u=t[0],F=t[1],v=W(p.useState(null),2),B=v[0],G=v[1],w=W(p.useState(!1),2),x=w[0],H=w[1],y=W(p.useState(100),2),C=y[0],I=y[1];function J(){return K.apply(this,arguments)}function K(){return(K=S(l().mark(function b(){var c,d,e,f,g,h,i,j;return l().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return E("[running...]"),c=a.js||!1,console.log("running",q),b.prev=3,b.next=6,z.ready;case 6:if(e=(d=b.sent).db,f=d.worker,!a.diffstat){b.next=14;break}return b.next=13,f.getStats();case 13:g=b.sent;case 14:if(!a.logPageReads){b.next=17;break}return b.next=17,f.getResetAccessedPages();case 17:return b.next=19,c?f.evalCode(q):e.query(q);case 19:if((i=JSON.stringify(h=b.sent,null,2))||(i="[no output, make sure your last statement has `return` before it]"),i.length>5e4&&(i=i.slice(0,5e4)+"\n[... (output truncated, total length ".concat(i.length,")]")),E(i),!a.diffstat){b.next=29;break}return b.next=27,f.getStats();case 27:j=b.sent,g&&j&&F({filename:j.filename,totalBytes:j.totalBytes,totalFetchedBytes:j.totalFetchedBytes-g.totalFetchedBytes,totalRequests:j.totalRequests-g.totalRequests});case 29:if(!a.logPageReads){b.next=35;break}return b.t0=G,b.next=33,f.getResetAccessedPages();case 33:b.t1=b.sent,(0,b.t0)(b.t1);case 35:b.next=40;break;case 37:b.prev=37,b.t2=b.catch(3),String(b.t2).includes("SharedArrayBuffer")?E((0,m.jsxs)(m.Fragment,{children:["[error: ",String(b.t2),"]",(0,m.jsx)("br",{}),"Your browser might either be too old to support SharedArrayBuffer, or too new and have some Spectre protections enabled that don't work on GitHub Pages since they don't allow setting the necessary isolation headers. Try going to"," ",(0,m.jsx)("a",{href:"https://phiresky.netlify.app/blog/2021/hosting-sqlite-databases-on-github-pages/",children:"the Netlify mirror of this blog"})," ","for the DOM demos."]})):E("[error: ".concat(String(b.t2),"]"));case 40:case"end":return b.stop()}},b,null,[[3,37]])}))).apply(this,arguments)}return g=b?"string"==typeof b?(0,m.jsx)(r.Z,{className:"inner-body maxheight",language:"json",wrap:!0,value:b}):(0,m.jsx)("div",{className:"like-codeblock",children:b}):(0,m.jsx)("div",{style:{paddingBottom:"1ex"}}),(0,m.jsxs)("div",{className:"sqlite-httpvfs-demo",children:[(0,m.jsxs)("div",{className:"box-title",children:[a.js?"JS ":"","Demo"]}),(0,m.jsxs)("div",{className:"with-inner-title",children:[(0,m.jsxs)("div",{className:"inner-title",children:[(0,m.jsxs)("div",{children:["Input ",a.js?"JavaScript":"SQL"]}),(0,m.jsx)("div",{role:"button",className:"floatright",onClick:function(){x||(G(null),F(null),E("")),H(!x)},children:x?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.G,{icon:n.r6l,size:"sm"})," Save"]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.G,{icon:n.UFh,size:"sm"})," Edit"]})})]}),x?(0,m.jsx)("textarea",{spellCheck:!1,className:"like-codeblock inner-body",style:{height:C},value:q,onChange:function(a){return D(a.currentTarget.value)}}):(0,m.jsx)("div",{className:"inner-body",ref:function(a){return a&&I(null==a?void 0:a.clientHeight)},children:(0,m.jsx)(r.Z,{className:"inner-body",language:a.js?"typescript":"sql",wrap:!0,value:q})})]}),(0,m.jsxs)("div",{className:"with-inner-title hanging",children:[(0,m.jsx)("div",{className:"inner-title",children:b?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:"Output JSON"})," ",(0,m.jsxs)("div",{role:"button",onClick:function(){J()},className:"floatright",children:[(0,m.jsx)(o.G,{icon:n.zc,size:"sm"})," Rerun"]})]}):(0,m.jsxs)("div",{role:"button",onClick:function(){J()},children:[(0,m.jsx)(o.G,{icon:n.zc,size:"sm"})," Run"]})}),g]}),a.diffstat&&u&&(0,m.jsx)(aa,{stats:u,readPages:B,defaultFlipped:a.defaultPageReadTable})]})};function _(a){return a>1e6?(a/1e6).toFixed(1)+"MB":a>1e3?(a/1e3).toFixed(1)+"KB":"".concat(a,"B")}var aa=(0,c.Pi)(function(b){var c=b.stats,a=b.readPages,i=b.defaultFlipped,k=Z(),d=W(p.useState(!1),2),e=d[0],q=d[1],f=W(p.useState(!1),2),j=f[0],r=f[1],g=W(p.useState("Loading..."),2),h=g[0],s=g[1];function t(){return u.apply(this,arguments)}function u(){return(u=S(l().mark(function b(){var c,d,f;return l().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(!e){b.next=3;break}return q(!1),b.abrupt("return");case 3:return q(!0),r(!0),b.next=7,k.ready;case 7:if(c=b.sent.db,a){b.next=10;break}return b.abrupt("return");case 10:if(b.prev=10,k.statsConnected){b.next=15;break}return b.next=14,c.query("attach 'dbstat.sqlite3' as stat");case 14:k.statsConnected=!0;case 15:return b.next=17,c.query("\n				select *, n.name, t.name as pagetype from stat.stat s\n				join stat.names n on n.id = s.name\n				join stat.pagetypes t on t.id = s.pagetype \n				where pageno in (".concat(a.map(function(a){return a.pageno}).join(","),")\n			"));case 17:d=b.sent,f=new Map(d.map(function(a){return[a.pageno,a]})),s(a.map(function(a){var b=f.get(a.pageno);return V(U({},a),{page:b})})),b.next=26;break;case 22:b.prev=22,b.t0=b.catch(10),console.error(b.t0),s(String(b.t0));case 26:case"end":return b.stop()}},b,null,[[10,22]])}))).apply(this,arguments)}return p.useEffect(function(){i&&!e&&a&&!j&&(console.log("showing effect"),t())},[i,e,a,j]),(0,m.jsx)("div",{className:"flip-box ".concat(e?"flipped":"unflipped"),children:(0,m.jsxs)("div",{className:"flip-box-inner",children:[(0,m.jsx)("div",{className:"flip-box-front",children:(0,m.jsxs)("div",{className:"with-inner-title hanging",children:[(0,m.jsxs)("div",{className:"inner-title",children:[(0,m.jsx)("div",{children:"Sqlite stats"}),a&&(0,m.jsxs)("div",{role:"button",className:"floatright",onClick:function(){t()},children:[(0,m.jsx)(o.G,{icon:n.sqG})," Show page read log (",a.length," reads)"]})]}),(0,m.jsxs)("div",{className:"inner-body like-codeblock",children:["fetched ",_(c.totalFetchedBytes)," in"," ",c.totalRequests," requests (DB size:"," ",_(c.totalBytes),")"]})]})}),(0,m.jsx)("div",{className:"flip-box-back",children:(0,m.jsxs)("div",{className:"with-inner-title hanging",children:[(0,m.jsxs)("div",{className:"inner-title",children:[(0,m.jsx)("div",{children:"Sqlite Page Read Requests"}),a&&(0,m.jsxs)("div",{role:"button",className:"floatright",onClick:function(){t()},children:[(0,m.jsx)(o.G,{icon:n.sqG})," Back to stats"]})]}),(0,m.jsx)("div",{className:"inner-body page-list maxheight",children:h&&(0,m.jsx)(ab,{pages:h})})]})})]})})}),ab=(0,c.Pi)(function(b){var c,a=b.pages;return 0===a.length?(0,m.jsx)(m.Fragment,{children:"[no data pages requested]"}):"string"==typeof a?(0,m.jsx)(m.Fragment,{children:a}):(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Page"}),(0,m.jsx)("th",{children:"Cache"}),(0,m.jsx)("th",{children:"Access pattern"}),(0,m.jsx)("th",{children:"Table / Index"}),(0,m.jsx)("th",{children:"Page Type"})]})}),(0,m.jsx)("tbody",{children:a.map(function(a,e){var b,d;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:a.pageno}),(0,m.jsx)("td",{children:a.wasCached?"hit":"miss"}),(0,m.jsx)("td",{children:a.wasCached?"":(a.prefetch?"sequential, prefetch ".concat(a.prefetch," pages"):"random")+" (".concat(a.prefetch+1," KiB XHR)")}),(0,m.jsx)("td",{children:null!==(c=null===(b=a.page)|| void 0===b?void 0:b.name)&& void 0!==c?c:"[system]"}),(0,m.jsx)("td",{children:null===(d=a.page)|| void 0===d?void 0:d.pagetype})]},e)})})]})})}}])
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97722],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return a?r.createElement(g,n(n({ref:t},m),{},{components:a})):r.createElement(g,n({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));a(36531),a(9819),a(78228),a(94733);const o={title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react","usestate","best-practices"],image:"/img/blog/2022-08-29-usestate-mistakes/usestate-mistakes-social.png",hide_table_of_contents:!1},n=void 0,s={permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",source:"@site/blog/2022-08-29-usestate-mistakes.md",title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",date:"2022-08-29T00:00:00.000Z",formattedDate:"August 29, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"usestate",permalink:"/blog/tags/usestate"},{label:"best-practices",permalink:"/blog/tags/best-practices"}],readingTime:16.26,hasTruncateMarker:!0,authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],frontMatter:{title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react","usestate","best-practices"],image:"/img/blog/2022-08-29-usestate-mistakes/usestate-mistakes-social.png",hide_table_of_contents:!1},prevItem:{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox"},nextItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},relatedPosts:[{title:"Simple Web Application Example with Refine",permalink:"/blog/simple-web-application-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:9.89,date:"2021-10-04T00:00:00.000Z"},{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.795,date:"2022-09-09T00:00:00.000Z"},{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:16.75,date:"2022-08-23T00:00:00.000Z"}],authorPosts:[{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:9.48,date:"2022-09-06T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The most challenging aspect of developing any application is often managing its state. However, we are often required to manage several pieces of state in our application, such as when data is retrieved from an external server or updated in the app. "),(0,i.kt)("p",null,"The difficulty of state management is the reason why so many state management libraries exist today - and more are still being developed. Thankfully, React has several built-in solutions in the form of hooks for state management, which makes managing states in React easier."))}p.isMDXComponent=!0},9819:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/direct-update-error-c9fb01421839572bb4a1283a5547e7e4.gif"},78228:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/direct-update-40504ea5a00f8428264e848372e52a69.gif"},94733:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/functional-state-update-ab397d41ebd1404c92708ae54629bb36.gif"},36531:(e,t,a)=>{a.p}}]);
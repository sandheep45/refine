"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"benchmarks",title:"Benchmarks"},s=void 0,p={unversionedId:"further-readings/benchmarks",id:"further-readings/benchmarks",title:"Benchmarks",description:"Many refine projects involve migrating an existing vanilla React application to the refine framework. By collecting data from various migration projects, we were able to do some benchmarking by comparing codebases.",source:"@site/docs/further-readings/benchmarks.md",sourceDirName:"further-readings",slug:"/further-readings/benchmarks",permalink:"/docs/further-readings/benchmarks",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/further-readings/benchmarks.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1695247840,formattedLastUpdatedAt:"Sep 20, 2023",frontMatter:{id:"benchmarks",title:"Benchmarks"},sidebar:"someSidebar",previous:{title:"Migrating Router Provider",permalink:"/docs/migration-guide/router-provider"},next:{title:"Telemetry",permalink:"/docs/further-readings/telemetry"}},l={},u=[],m={toc:u};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Many ",(0,n.kt)("strong",{parentName:"p"},"refine")," projects involve migrating an existing vanilla React application to the ",(0,n.kt)("strong",{parentName:"p"},"refine")," framework. By collecting data from various migration projects, we were able to do some benchmarking by comparing codebases. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," makes your codebase significantly smaller, by eliminating redundant code such as ",(0,n.kt)("em",{parentName:"p"},"reducers"),", ",(0,n.kt)("em",{parentName:"p"},"actions"),", and ",(0,n.kt)("em",{parentName:"p"},"unit tests"),".  We've measured a significant reduction in project size in terms of ",(0,n.kt)("em",{parentName:"p"},'"lines of code"')," and ",(0,n.kt)("em",{parentName:"p"},'"number of files"'),":"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/getting-started/benchmark.png",width:"400px",align:"center"})))}f.isMDXComponent=!0}}]);
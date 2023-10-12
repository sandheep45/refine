"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||u;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,c=new Array(u);c[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<u;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"useResourceWithRoute",title:"useResourceWithRoute"},a=void 0,s={unversionedId:"api-reference/core/hooks/resource/useResourceWithRoute",id:"version-3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute",title:"useResourceWithRoute",description:"useResourceWithRoute is used to get the resource object in resources array that you defined in `` by route name.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute.md",sourceDirName:"api-reference/core/hooks/resource",slug:"/api-reference/core/hooks/resource/useResourceWithRoute",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1697101466,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"useResourceWithRoute",title:"useResourceWithRoute"},sidebar:"someSidebar",previous:{title:"useResource",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResource"},next:{title:"useShow",permalink:"/docs/3.xx.xx/api-reference/core/hooks/show/useShow"}},l={},p=[{value:"API Reference",id:"api-reference",level:2},{value:"Return value",id:"return-value",level:3}],f={toc:p};function d(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)("wrapper",u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useResourceWithRoute")," is used to get the resource object in resources array that you defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>")," by route name."),(0,n.kt)("p",null,"The hook is used internal in ",(0,n.kt)("strong",{parentName:"p"},"refine"),". Normally you don't need this hook, but we export it as it may be useful for some use-cases."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResourceWithRoute } from "@pankod/refine-core";\n\nconst resourceWithRoute = useResourceWithRoute();\n\nconst resource = resourceWithRoute("posts");\n')),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resourceWithRoute"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},(0,n.kt)("inlineCode",{parentName:"a"},"(route: string) => IResourceItem")))))))}d.isMDXComponent=!0}}]);
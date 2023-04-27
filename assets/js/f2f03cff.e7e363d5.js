"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9272],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,k=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"useBack",title:"useBack",sidebar_label:"useBack \ud83c\udd95"},i=void 0,c={unversionedId:"api-reference/core/hooks/navigation/useBack",id:"api-reference/core/hooks/navigation/useBack",title:"useBack",description:"useBack is a hook that leverages the back method of the routerProvider to perform go back operation in the history stack.",source:"@site/docs/api-reference/core/hooks/navigation/useBack.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useBack",permalink:"/docs/api-reference/core/hooks/navigation/useBack",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/navigation/useBack.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1682602123,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"useBack",title:"useBack",sidebar_label:"useBack \ud83c\udd95"},sidebar:"someSidebar",previous:{title:"useParsed \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useParsed"},next:{title:"useLink \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useLink"}},s={},p=[{value:"Basic Usage",id:"basic-usage",level:2}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useBack")," is a hook that leverages the ",(0,o.kt)("inlineCode",{parentName:"p"},"back")," method of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"routerProvider"))," to perform go back operation in the history stack."),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useBack } from "@refinedev/core";\n\nconst MyComponent = () => {\n    const back = useBack();\n\n    return <Button onClick={() => back()}>Go Back</Button>;\n};\n')))}l.isMDXComponent=!0}}]);
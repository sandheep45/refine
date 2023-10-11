"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>s,toc:()=>l});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"mui-auto-save-indicator",title:"<AutoSaveIndicator>",sidebar_label:"<AutoSaveIndicator>",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"packages/antd/src/components/autoSaveIndicator/index.tsx"},u=void 0,s={unversionedId:"api-reference/mui/components/mui-auto-save-indicator",id:"api-reference/mui/components/mui-auto-save-indicator",title:"<AutoSaveIndicator>",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"@site/docs/api-reference/mui/components/auto-save-indicator.md",sourceDirName:"api-reference/mui/components",slug:"/api-reference/mui/components/mui-auto-save-indicator",permalink:"/docs/api-reference/mui/components/mui-auto-save-indicator",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/auto-save-indicator.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1697033236,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"mui-auto-save-indicator",title:"<AutoSaveIndicator>",sidebar_label:"<AutoSaveIndicator>",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"packages/antd/src/components/autoSaveIndicator/index.tsx"},sidebar:"someSidebar",previous:{title:"Url",permalink:"/docs/api-reference/mui/components/fields/url"},next:{title:"Theme",permalink:"/docs/api-reference/mui/theming"}},p={},l=[{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const f={toc:l};function v(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<AutoSaveIndicator>")," component from ",(0,n.kt)("strong",{parentName:"p"},"refine")," for ",(0,n.kt)("strong",{parentName:"p"},"Material UI")," can be used to communicate auto-save status to the user."),(0,n.kt)("p",null,"Simple usage is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AutoSaveIndicator, useForm } from "@refinedev/mui";\n\nconst MyComponent = () => {\n    const { refineCore: { autoSaveProps } } = useForm({\n        refineCoreProps: {\n            autoSave: {\n                enabled: true,\n            },\n        }\n    });\n\n    return (\n        <AutoSaveIndicator {...autoSaveProps}/>\n    );\n};\n')),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)(d,{module:"@refinedev/mui/AutoSaveIndicator",mdxType:"PropsTable"}))}v.isMDXComponent=!0}}]);
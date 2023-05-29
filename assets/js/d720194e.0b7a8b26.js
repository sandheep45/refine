"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},83474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={id:"useGetIdentity",title:"useGetIdentity",siderbar_label:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data"},a=void 0,s={unversionedId:"api-reference/core/hooks/auth/useGetIdentity",id:"version-3.xx.xx/api-reference/core/hooks/auth/useGetIdentity",title:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useGetIdentity.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useGetIdentity",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useGetIdentity",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useGetIdentity.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685362876,formattedLastUpdatedAt:"May 29, 2023",frontMatter:{id:"useGetIdentity",title:"useGetIdentity",siderbar_label:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data"},sidebar:"someSidebar",previous:{title:"useCheckError",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useCheckError"},next:{title:"useLogin",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogin"}},u={},d=[{value:"Usage",id:"usage",level:2}],c={toc:d};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,o.kt)("p",null,"It returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery"),"  which includes many properties, some of which being ",(0,o.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"isError"),". Data that is resolved from the ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," will be returned as the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," can be useful when you want to get the user information anywhere in your code."),(0,o.kt)("p",null,"Let's say that you want to show the user's name."),(0,o.kt)("p",null,"We have a logic in ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n  ...\n    // highlight-start\n    getUserIdentity: () =>\n            Promise.resolve({\n                id: 1,\n                fullName: "Jane Doe",\n            }),\n  // highlight-end\n  ...\n};\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can access identity data like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { useGetIdentity } from "@pankod/refine-core";\n\nexport const User: React.FC = () => {\n    // highlight-next-line\n    const { data: identity } = useGetIdentity<{ id: number; fullName: string}>();\n\n    return <span>{identity?.fullName}</span>\n}\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}l.isMDXComponent=!0}}]);
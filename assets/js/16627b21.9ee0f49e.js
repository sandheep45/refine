"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58361],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},i=void 0,p={unversionedId:"api-reference/core/components/accessControl/can-access",id:"api-reference/core/components/accessControl/can-access",title:"<CanAccess>",description:"` is the component form of useCan`.",source:"@site/docs/api-reference/core/components/accessControl/canAccess.md",sourceDirName:"api-reference/core/components/accessControl",slug:"/api-reference/core/components/accessControl/can-access",permalink:"/docs/api-reference/core/components/accessControl/can-access",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/components/accessControl/canAccess.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1697033236,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},sidebar:"someSidebar",previous:{title:"<Authenticated>",permalink:"/docs/api-reference/core/components/auth/authenticated"},next:{title:"Interface References",permalink:"/docs/api-reference/core/interfaceReferences"}},l={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Usage with props",id:"usage-with-props",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>onUnauthorized</code>",id:"onunauthorized",level:3},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(f="PropsTable",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var f;const m={toc:u};function k(e){var{components:n}=e,t=c(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CanAccess>")," is the component form of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,r.kt)("p",null,"It internally uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan")),"'s return values to provide its functionality."),(0,r.kt)("p",null,"Passes the given properties to the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method from your access control provider. After, if it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", it renders the children, otherwise, if it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", it renders ",(0,r.kt)("a",{parentName:"p",href:"#fallback"},(0,r.kt)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it renders ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"Access Control Provider ","\u2192"))),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," component will infer the current ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," based on your route automatically. ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," will also be inferred if the current route includes one."),(0,r.kt)("p",null,"So if you are at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts")," route, ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," will check authorization for the ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," resource and the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," action."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/show/:id")," route, the action will be ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@refinedev/core";\n\nconst MyComponent = () => (\n    <CanAccess fallback={<CustomFallback />}>\n        <YourComponent />\n    </CanAccess>\n);\n')),(0,r.kt)("h3",{id:"usage-with-props"},"Usage with props"),(0,r.kt)("p",null,"You may have a case like in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/show/:id")," page, where, inferred resource is ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," and action is ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),", but you want to authorize a different resource eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),"."),(0,r.kt)("p",null,"In this case, you can explicitly pass props to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," component for authorizing a different resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@refinedev/core";\n\nexport const MyComponent = () => {\n    return (\n        <Buttons>\n            <CreateButton>Create</CreateButton>\n            <CanAccess resource="posts" action="delete">\n                <DeleteButton>Delete</DeleteButton>\n            </CanAccess>\n        </Buttons>\n    );\n};\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"It also accepts all the properties of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,r.kt)("h3",{id:"onunauthorized"},(0,r.kt)("inlineCode",{parentName:"h3"},"onUnauthorized")),(0,r.kt)("p",null,"Callback to be called when ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan"))," returns false."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess\n    onUnauthorized={({ resource, reason, action, params }) =>\n        console.log(\n            `You cannot access ${resource}-${params.id} resource with ${action} action because ${reason}`,\n        )\n    }\n>\n    <YourComponent />\n</CanAccess>\n")),(0,r.kt)("h3",{id:"fallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,r.kt)("p",null,"Component to render if ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan"))," returns false. If ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", it renders ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess fallback={<div>You cannot access this section</div>}>\n    <YourComponent />\n</CanAccess>\n")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(d,{module:"@refinedev/core/CanAccess",mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);
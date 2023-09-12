"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89054],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>c});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"useInvalidate",title:"useInvalidate",source:"/packages/core/src/hooks/invalidate"},d=void 0,s={unversionedId:"api-reference/core/hooks/invalidate/useInvalidate",id:"api-reference/core/hooks/invalidate/useInvalidate",title:"useInvalidate",description:"useInvalidate is a hook that can be used to invalidate the state of a particular resource or dataProvider (with dataProviderName).",source:"@site/docs/api-reference/core/hooks/invalidate/useInvalidate.md",sourceDirName:"api-reference/core/hooks/invalidate",slug:"/api-reference/core/hooks/invalidate/useInvalidate",permalink:"/docs/api-reference/core/hooks/invalidate/useInvalidate",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/invalidate/useInvalidate.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1694498483,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{id:"useInvalidate",title:"useInvalidate",source:"/packages/core/src/hooks/invalidate"},sidebar:"someSidebar",previous:{title:"useImport",permalink:"/docs/api-reference/core/hooks/import-export/useImport"},next:{title:"usePublish",permalink:"/docs/api-reference/core/hooks/live/usePublish"}},p={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Invalidation Parameters",id:"invalidation-parameters",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>invalidates</code> <PropTag required />",id:"invalidates-",level:3},{value:"<code>invalidationFilters</code> and <code>invalidationOptions</code>",id:"invalidationfilters-and-invalidationoptions",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Invalidation Parameters",id:"invalidation-parameters-1",level:3}],u=(m="PropTag",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const k={toc:c};function v(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useInvalidate")," is a hook that can be used to invalidate the state of a particular ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," (with dataProviderName)."),(0,n.kt)("p",null,"This hook will be called when a mutation hook is successful. For example, creating a ",(0,n.kt)("inlineCode",{parentName:"p"},"Posts")," with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useCreate/"},"useCreate")," hook will invalidate the ",(0,n.kt)("inlineCode",{parentName:"p"},"list")," (",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useList/"},"useList"),") and ",(0,n.kt)("inlineCode",{parentName:"p"},"many")," (",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useMany/"},"useMany"),") state of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Posts")," resource."),(0,n.kt)("admonition",{type:"info-tip"},(0,n.kt)("p",{parentName:"admonition"},"The hook is used internally by ",(0,n.kt)("strong",{parentName:"p"},"refine"),". In most cases, you won't need this hook, but we export it as it may be useful for some use-cases that may require customized invalidation.")),(0,n.kt)("hr",null),(0,n.kt)("admonition",{type:"info-tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"refine")," uses ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query")," to fetch and manage the state of the data. For more information about invalidation, please read the TanStack Query's ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/query-invalidation"},"invalidation")," docs.")),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useInvalidate } from "@refinedev/core";\n\nconst invalidate = useInvalidate();\n\ninvalidate({\n    resource: "posts",\n    invalidates: ["list"],\n});\n')),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"To invalidate the ",(0,n.kt)("inlineCode",{parentName:"p"},'"list"')," and ",(0,n.kt)("inlineCode",{parentName:"p"},'"many"')," states of the Posts ",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n    resource: "posts",\n    invalidates: ["list", "many"],\n});\n')),(0,n.kt)("p",null,"To invalidate the state of a Posts with an id of ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n    resource: "posts",\n    invalidates: ["detail"],\n    id: 1,\n});\n')),(0,n.kt)("p",null,"To invalidate the ",(0,n.kt)("inlineCode",{parentName:"p"},'"list"')," and ",(0,n.kt)("inlineCode",{parentName:"p"},'"many"')," states of the Posts ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," named ",(0,n.kt)("inlineCode",{parentName:"p"},'"second-data-provider"'),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n    resource: "posts",\n    dataProviderName: "second-data-provider",\n    invalidates: ["list"],\n});\n')),(0,n.kt)("p",null,"To invalidate all states of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," named ",(0,n.kt)("inlineCode",{parentName:"p"},'"second-data-provider"'),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n    dataProviderName: "second-data-provider",\n    invalidates: ["all"],\n});\n')),(0,n.kt)("p",null,"To invalidate all states of the Posts."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n    resource: "posts",\n    invalidates: ["resourceAll"],\n});\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"invalidate")," function returns a promise that resolves when the invalidation process is completed.")),(0,n.kt)("h2",{id:"invalidation-parameters"},"Invalidation Parameters"),(0,n.kt)("h3",{id:"resource"},(0,n.kt)("inlineCode",{parentName:"h3"},"resource")),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," represents an entity in an endpoint in the API (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev/posts"},"https://api.fake-rest.refine.dev/posts"),"). It is used to invalidate the state of a particular resource."),(0,n.kt)("h3",{id:"id"},(0,n.kt)("inlineCode",{parentName:"h3"},"id")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," to use when invalidating the ",(0,n.kt)("inlineCode",{parentName:"p"},'"detail"')," state."),(0,n.kt)("h3",{id:"dataprovidername"},(0,n.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,n.kt)("p",null,"If there is more than one ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider")),", you should specify which one to use by passing the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop."),(0,n.kt)("h3",{id:"invalidates-"},(0,n.kt)("inlineCode",{parentName:"h3"},"invalidates")," ",(0,n.kt)(u,{required:!0,mdxType:"PropTag"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Type: ",(0,n.kt)("inlineCode",{parentName:"p"},'Array<"all", "resourceAll", "list", "many", "detail", "false">')," | ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"The states you want to invalidate. You can use the following values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"all"'),": Invalidates all states of the all resources."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"resourceAll"'),": Invalidates all states of the given ",(0,n.kt)("inlineCode",{parentName:"li"},"resource"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"list"'),": Invalidates the ",(0,n.kt)("inlineCode",{parentName:"li"},'"list"')," state of the given ",(0,n.kt)("inlineCode",{parentName:"li"},"resource"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"detail"'),": Invalidates the ",(0,n.kt)("inlineCode",{parentName:"li"},'"detail"')," state of the given ",(0,n.kt)("inlineCode",{parentName:"li"},"resource")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"many"'),": Invalidates the ",(0,n.kt)("inlineCode",{parentName:"li"},'"many"')," state of the given ",(0,n.kt)("inlineCode",{parentName:"li"},"resource"),".")),(0,n.kt)("h3",{id:"invalidationfilters-and-invalidationoptions"},(0,n.kt)("inlineCode",{parentName:"h3"},"invalidationFilters")," and ",(0,n.kt)("inlineCode",{parentName:"h3"},"invalidationOptions")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Type: ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientinvalidatequeries"},(0,n.kt)("inlineCode",{parentName:"a"},"InvalidateQueryFilters")))),(0,n.kt)("p",null,"The filters and options applied to the invalidation process when picking which queries to invalidate. By default ",(0,n.kt)("strong",{parentName:"p"},"refine")," applies some filters and options to fine-tune the invalidation process."),(0,n.kt)("p",null,"By default settings, all the targeted queries are invalidated and the active ones are triggered for a refetch. If there are any ongoing queries, they are kept as they are."),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"invalidation-parameters-1"},"Invalidation Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"required-block"},(0,n.kt)("div",null,"invalidates")," ",(0,n.kt)("div",{className:"required"},"Required"))),(0,n.kt)("td",{parentName:"tr",align:null},"The states you want to invalidate."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"list"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"many"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"detail"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resource"),(0,n.kt)("td",{parentName:"tr",align:null},"Resource name for State invalidation."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("inlineCode",{parentName:"td"},"id"),' to use when invalidating the "detail" state.'),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseKey"))),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the data provider whose state you want to invalidate."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"default"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"invalidationFilters"),(0,n.kt)("td",{parentName:"tr",align:null},"The filters to use when picking queries to invalidate"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientinvalidatequeries"},(0,n.kt)("inlineCode",{parentName:"a"},"InvalidateQueryFilters"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{ type: "all", refetchType: "active" }'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"invalidationOptions"),(0,n.kt)("td",{parentName:"tr",align:null},"The options to use in the invalidation process"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientinvalidatequeries"},(0,n.kt)("inlineCode",{parentName:"a"},"InvalidateOptions"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{ cancelRefetch: false }"))))))}v.isMDXComponent=!0}}]);
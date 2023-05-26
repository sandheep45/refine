"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"useDelete",siderbar_label:"useDelete",source:"packages/core/src/hooks/data/useDelete.ts"},o=void 0,l={unversionedId:"api-reference/core/hooks/data/useDelete/index",id:"api-reference/core/hooks/data/useDelete/index",title:"useDelete",description:"useDelete is an extended version of TanStack Query's useMutation. It supports all the features of useMutation and adds some extra features.",source:"@site/docs/api-reference/core/hooks/data/useDelete/index.md",sourceDirName:"api-reference/core/hooks/data/useDelete",slug:"/api-reference/core/hooks/data/useDelete/",permalink:"/docs/api-reference/core/hooks/data/useDelete/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useDelete/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1685081689,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"useDelete",siderbar_label:"useDelete",source:"packages/core/src/hooks/data/useDelete.ts"},sidebar:"someSidebar",previous:{title:"useDataProvider",permalink:"/docs/api-reference/core/hooks/data/useDataProvider"},next:{title:"useDeleteMany",permalink:"/docs/api-reference/core/hooks/data/useDeleteMany/"}},d={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Invalidating Queries",id:"invalidating-queries",level:2},{value:"Audit Logs",id:"audit-logs",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>mutationOptions</code>",id:"mutationoptions",level:3},{value:"Mutation Parameters",id:"mutation-parameters",level:2},{value:"<code>resource</code> <PropTag required />",id:"resource-",level:3},{value:"<code>id</code> <PropTag required />",id:"id-",level:3},{value:"<code>mutationMode</code>",id:"mutationmode",level:3},{value:"<code>undoableTimeout</code>",id:"undoabletimeout",level:3},{value:"<code>onCancel</code>",id:"oncancel",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>invalidates</code>",id:"invalidates",level:3},{value:"Return Values",id:"return-values",level:2},{value:"API",id:"api",level:2},{value:"Mutation Parameters",id:"mutation-parameters-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],s=(u="PropTag",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," is an extended version of TanStack Query's ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,r.kt)("inlineCode",{parentName:"a"},"useMutation")),". It supports all the features of ",(0,r.kt)("inlineCode",{parentName:"p"},"useMutation")," and adds some extra features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"deleteOne")," method as the ",(0,r.kt)("strong",{parentName:"li"},"mutation function")," from the ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/providers/data-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"<Refine>"),".")),(0,r.kt)("p",null,"It is useful when you want to update a record."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," hook returns many useful properties and methods. One of them is the ",(0,r.kt)("inlineCode",{parentName:"p"},"mutate")," method which expects ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," as parameters. These parameters will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteOne")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useDelete } from "@refinedev/core";\n\nconst { mutate } = useDelete();\n\nmutate({\n    resource: "products",\n    id: 1,\n});\n')),(0,r.kt)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Live Provider"),".")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," mutation runs successfully, it will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," method from ",(0,r.kt)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," etc. It is useful when you want to publish the changes to the subscribers on the client side."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"liveProvider")," documentation for more information ","\u2192")),(0,r.kt)("h2",{id:"invalidating-queries"},"Invalidating Queries"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," mutation runs successfully, by default it will invalidate the following queries from the current ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"list"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"many"'),". That means, if you use ",(0,r.kt)("inlineCode",{parentName:"p"},"useList")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," hooks on the same page, they will refetch the data after the mutation is completed. You can change this behavior by passing ",(0,r.kt)("a",{parentName:"p",href:"#invalidates"},(0,r.kt)("inlineCode",{parentName:"a"},"invalidates"))," prop."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/query-invalidation"},"Refer to the query invalidation documentation for more information ","\u2192")),(0,r.kt)("h2",{id:"audit-logs"},"Audit Logs"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/audit-log-provider/"},"Audit Log Provider"),".")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," mutation runs successfully, it will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," method from ",(0,r.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," with some parameters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"previousData")," etc. It is useful when you want to log the changes to the database."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/audit-log-provider/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"auditLogProvider")," documentation for more information ","\u2192")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"mutationoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"mutationOptions")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mutationOptions")," is used to pass options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMutation")," hook. It is useful when you want to pass additional options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMutation")," hook."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useDelete({\n    mutationOptions: {\n        retry: 3,\n    },\n});\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"mutationOptions")," does not support ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," props because they override the default ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," functions. If you want to use these props, you can pass them to mutate functions like this:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate(\n    {\n        resource: "products",\n        id: 1,\n    },\n    {\n        onError: (error, variables, context) => {\n            // An error occurred!\n        },\n        onSuccess: (data, variables, context) => {\n            // Let\'s celebrate!\n        },\n    },\n);\n'))),(0,r.kt)("h2",{id:"mutation-parameters"},"Mutation Parameters"),(0,r.kt)("h3",{id:"resource-"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")," ",(0,r.kt)(s,{required:!0,mdxType:"PropTag"})),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteOne")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as an API endpoint path. It all depends on how to handle the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteOne")," method. See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},"creating a data provider")," section for an example of how resources are handled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n    resource: "categories",\n});\n')),(0,r.kt)("h3",{id:"id-"},(0,r.kt)("inlineCode",{parentName:"h3"},"id")," ",(0,r.kt)(s,{required:!0,mdxType:"PropTag"})),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteOne")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine which record to delete."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate } = useDelete();\n\nmutate({\n    id: 123,\n});\n")),(0,r.kt)("h3",{id:"mutationmode"},(0,r.kt)("inlineCode",{parentName:"h3"},"mutationMode")),(0,r.kt)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,r.kt)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"optimistic"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"undoable"),". The default mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"pessimistic"),".\nEach mode corresponds to a different type of user experience."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode"},"Refer to the mutation mode documentation for more information ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n    mutationMode: "undoable",\n});\n')),(0,r.kt)("h3",{id:"undoabletimeout"},(0,r.kt)("inlineCode",{parentName:"h3"},"undoableTimeout")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"mutationMode")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"undoable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undoableTimeout")," is used to determine the duration to wait before executing the mutation. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"5000")," milliseconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n    mutationMode: "undoable",\n    undoableTimeout: 10000,\n});\n')),(0,r.kt)("h3",{id:"oncancel"},(0,r.kt)("inlineCode",{parentName:"h3"},"onCancel")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"mutationMode")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"undoable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onCancel")," is used to determine what to do when the user cancels the mutation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n    mutationMode: "undoable",\n    onCancel: (cancelMutation) => {\n        cancelMutation();\n        // you can do something else here\n    },\n});\n')),(0,r.kt)("h3",{id:"successnotification"},(0,r.kt)("inlineCode",{parentName:"h3"},"successNotification")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"After data is fetched successfully, ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," can call ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n    successNotification: (data, id, resource) => {\n        return {\n            message: `${data.title} Successfully fetched.`,\n            description: "Success with no errors",\n            type: "success",\n        };\n    },\n});\n')),(0,r.kt)("h3",{id:"errornotification"},(0,r.kt)("inlineCode",{parentName:"h3"},"errorNotification")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"After data fetching is failed, ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," will call ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n    errorNotification: (data, id, resource) => {\n        return {\n            message: `Something went wrong when getting ${data.id}`,\n            description: "Error",\n            type: "error",\n        };\n    },\n});\n')),(0,r.kt)("h3",{id:"meta"},(0,r.kt)("inlineCode",{parentName:"h3"},"meta")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,r.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/#meta"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation for more information ","\u2192")),(0,r.kt)("p",null,"In the following example, we pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," object to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteOne")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n    // highlight-start\n    meta: {\n        headers: { "x-meta-data": "true" },\n    },\n    // highlight-end\n});\n\nconst myDataProvider = {\n    //...\n    deleteOne: async ({\n        resource,\n        id,\n        // highlight-next-line\n        meta,\n    }) => {\n        // highlight-next-line\n        const headers = meta?.headers ?? {};\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        //...\n        //...\n\n        // highlight-next-line\n        const { data } = await httpClient.delete(url, undefined, { headers });\n\n        return {\n            data,\n        };\n    },\n    //...\n};\n')),(0,r.kt)("h3",{id:"dataprovidername"},(0,r.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,r.kt)("p",null,"If there is more than one ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n    dataProviderName: "second-data-provider",\n});\n')),(0,r.kt)("h3",{id:"invalidates"},(0,r.kt)("inlineCode",{parentName:"h3"},"invalidates")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"invalidates")," is used to specify which queries should be invalidated after the mutation is completed."),(0,r.kt)("p",null,"By default, it invalidates the following queries from the current ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"list"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"many"'),". That means, if you use ",(0,r.kt)("inlineCode",{parentName:"p"},"useList")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," hooks on the same page, they will refetch the data after the mutation is completed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n    invalidates: ["list", "many"],\n});\n')),(0,r.kt)("h2",{id:"return-values"},"Return Values"),(0,r.kt)("p",null,"Returns an object with TanStack Query's ",(0,r.kt)("inlineCode",{parentName:"p"},"useMutation")," return values."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"mutation-parameters-1"},"Mutation Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"required-block"},(0,r.kt)("div",null,"resource")," ",(0,r.kt)("div",{className:" required"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id ",(0,r.kt)("div",{className:" required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"id for mutation function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseKey"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/advanced-tutorials/mutation-mode"},"Determines when mutations are executed")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},' "pessimistic')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"optimistic')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"pessimistic"'),"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration to wait before executing the mutation when ",(0,r.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5000ms"),"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onCancel"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback that runs when undo button is clicked on ",(0,r.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(cancelMutation: () => void) => void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#successerrornotification"},(0,r.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,r.kt)("td",{parentName:"tr",align:null},'"Successfully deleted a ',(0,r.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#successerrornotification"},(0,r.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,r.kt)("td",{parentName:"tr",align:null},'"Error (status code: ',(0,r.kt)("inlineCode",{parentName:"td"},"status"),'"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"meta"),(0,r.kt)("td",{parentName:"tr",align:null},"Meta data query for ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#metadataquery"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,r.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invalidates"),(0,r.kt)("td",{parentName:"tr",align:null},"You can use it to manage the invalidations that will occur at the end of the mutation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"many"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"detail"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["list", "many"]'))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component. ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," will use what is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useMutation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,r.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"TError,"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," { id: BaseKey; },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," DeleteContext>")))))))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"refresh-button",title:"Refresh",swizzle:!0},l=void 0,p={unversionedId:"api-reference/mui/components/buttons/refresh-button",id:"api-reference/mui/components/buttons/refresh-button",title:"Refresh",description:"` uses Material UI  component to update the data shown on the page via the useInvalidate` hook.",source:"@site/docs/api-reference/mui/components/buttons/refresh.md",sourceDirName:"api-reference/mui/components/buttons",slug:"/api-reference/mui/components/buttons/refresh-button",permalink:"/docs/api-reference/mui/components/buttons/refresh-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/buttons/refresh.md",tags:[],version:"current",lastUpdatedBy:"necatiozmen",lastUpdatedAt:1695030347,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{id:"refresh-button",title:"Refresh",swizzle:!0},sidebar:"someSidebar",previous:{title:"List",permalink:"/docs/api-reference/mui/components/buttons/list-button"},next:{title:"Save",permalink:"/docs/api-reference/mui/components/buttons/save-button"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<del><code>resourceNameOrRouteName</code></del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("PropTag"),h=d("PropsTable"),f={toc:u};function b(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," uses Material UI ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component to update the data shown on the page via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/invalidate/useInvalidate"},(0,r.kt)("inlineCode",{parentName:"a"},"useInvalidate"))," hook."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI"))," to customize it.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport { useShow } from "@refinedev/core";\n// highlight-next-line\nimport { Show, RefreshButton } from "@refinedev/mui";\nimport { Typography, Stack } from "@mui/material";\n\nconst PostShow: React.FC = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show\n            isLoading={isLoading}\n            headerButtons={\n                // highlight-start\n                <RefreshButton />\n                // highlight-end\n            }\n        >\n            <Typography fontWeight="bold">Id</Typography>\n            <Typography>{record?.id}</Typography>\n            <Typography fontWeight="bold">Title</Typography>\n            <Typography>{record?.title}</Typography>\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts/show/123"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <RefineMui.List>\n                        <p>Rest of the page here...</p>\n                    </RefineMui.List>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"recorditemid"},(0,r.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which data is going to be refreshed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { RefreshButton } from "@refinedev/mui";\n\nconst MyRefreshComponent = () => {\n    return (\n        <RefreshButton\n            resource="posts"\n            // highlight-next-line\n            recordItemId="1"\n        />\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n        ]}\n        DashboardPage={MyRefreshComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/invalidate/useInvalidate"},(0,r.kt)("inlineCode",{parentName:"a"},"useInvalidate")),' hook and then fetch the record whose resource is "post" and whose id is "1".'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," component reads the id information from the route by default.")),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resource")," allows us to manage which resource is going to be refreshed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { RefreshButton } from "@refinedev/mui";\n\nconst MyRefreshComponent = () => {\n    return (\n        <RefreshButton\n            // highlight-next-line\n            resource="categories"\n            // highlight-next-line\n            recordItemId="2"\n        />\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n        ]}\n        DashboardPage={MyRefreshComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/invalidate/useInvalidate"},(0,r.kt)("inlineCode",{parentName:"a"},"useInvalidate")),' hook and then fetches the record whose resource is "categories" and whose id is "2".'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," component reads the resource name from the route by default.")),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hideText")," is used to show and hide the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { RefreshButton } from "@refinedev/mui";\n\nconst MyRefreshComponent = () => {\n    return (\n        <RefreshButton\n            // highlight-next-line\n            hideText\n            resourceNameOrRouteName="posts"\n            recordItemId="1"\n        />\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n        ]}\n        DashboardPage={MyRefreshComponent}\n    />,\n);\n')),(0,r.kt)("h3",{id:"resourcenameorroutename-"},(0,r.kt)("del",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"del"},"resourceNameOrRouteName"))," ",(0,r.kt)(m,{deprecated:!0,mdxType:"PropTag"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," prop is deprecated. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," allows us to manage which resource is going to be refreshed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { RefreshButton } from "@refinedev/mui";\n\nconst MyRefreshComponent = () => {\n    return (\n        <RefreshButton\n            // highlight-next-line\n            resourceNameOrRouteName="categories"\n            // highlight-next-line\n            recordItemId="2"\n        />\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n        ]}\n        DashboardPage={MyRefreshComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/invalidate/useInvalidate"},(0,r.kt)("inlineCode",{parentName:"a"},"useInvalidate")),' hook and then fetches the record whose resource is "categories" and whose id is "2".'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," component reads the resource name from the route by default.")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(h,{module:"@refinedev/mui/RefreshButton",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/button/"},"Button"),".")))}b.isMDXComponent=!0}}]);
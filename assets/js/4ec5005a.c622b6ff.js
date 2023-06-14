"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(c,".").concat(u)]||d[u]||l[u]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"mui-breadcrumb",title:"Breadcrumb",sidebar_label:"Breadcrumb",swizzle:!0},i=void 0,s={unversionedId:"api-reference/mui/components/mui-breadcrumb",id:"api-reference/mui/components/mui-breadcrumb",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component built with Material UI Breadcrumb components using the useBreadcrumb` hook.",source:"@site/docs/api-reference/mui/components/breadcrumb.md",sourceDirName:"api-reference/mui/components",slug:"/api-reference/mui/components/mui-breadcrumb",permalink:"/docs/api-reference/mui/components/mui-breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/breadcrumb.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1678868924,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id:"mui-breadcrumb",title:"Breadcrumb",sidebar_label:"Breadcrumb",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/api-reference/mui/components/basic-views/show"},next:{title:"Clone",permalink:"/docs/api-reference/mui/components/buttons/clone-button"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>breadcrumbProps</code>",id:"breadcrumbprops",level:3},{value:"<code>showHome</code>",id:"showhome",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>hideIcons</code>",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],m=(l="PropsTable",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var l;const d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component built with Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-breadcrumbs/#main-content"},"Breadcrumb")," components using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useBreadcrumb"},(0,o.kt)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=280px disableScroll",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"280px",disableScroll:!0},'// visible-block-start\nimport { Show, Breadcrumb } from "@refinedev/mui";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-next-line\n            breadcrumb={<Breadcrumb />}\n        >\n            <p>Content of your show page...</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nconst PostList = () => {\n    return (\n        <RefineMui.List>\n            <p>Content of your list page...</p>\n        </RefineMui.List>\n    )\n};\n\nconst PostIcon = (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-list"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        strokeWidth="2"\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <line x1={9} y1={6} x2={20} y2={6}></line>\n        <line x1={9} y1={12} x2={20} y2={12}></line>\n        <line x1={9} y1={18} x2={20} y2={18}></line>\n        <line x1={5} y1={6} x2={5} y2="6.01"></line>\n        <line x1={5} y1={12} x2={5} y2="12.01"></line>\n        <line x1={5} y1={18} x2={5} y2="18.01"></line>\n    </svg>\n);\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts/show/123"]}\n        resources={[\n            {\n                name: "posts",\n                icon: PostIcon,\n                show: PostShow,\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("admonition",{title:"Legacy Behavior (Dashboard Page)",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In earlier versions of ",(0,o.kt)("strong",{parentName:"p"},"refine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component had accepted ",(0,o.kt)("inlineCode",{parentName:"p"},"DashboardPage")," which could be used to add an index page to your app. With the changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," API of ",(0,o.kt)("strong",{parentName:"p"},"refine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DashboardPage")," is deprecated. You can now define an index route yourself manually by your router package."),(0,o.kt)("p",{parentName:"admonition"},"In earlier versions, the home icon in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," was created by the ",(0,o.kt)("inlineCode",{parentName:"p"},"DashboardPage"),", now it is rendered if you define a an action route as ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," in any one of your resources. It will be rendered with the home icon regardless of the current route. You can also hide the home icon by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"breadcrumbprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"breadcrumbProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-breadcrumbs/#main-content"},"Breadcrumb")," component so it can be configured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/mui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}>\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"showhome"},(0,o.kt)("inlineCode",{parentName:"h3"},"showHome")),(0,o.kt)("p",null,"If you have a page with route ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", it will be used as the root of the hierarchy and shown in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," with a home icon. To hide the root item, set ",(0,o.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb showHome={true} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"meta"},(0,o.kt)("inlineCode",{parentName:"h3"},"meta")),(0,o.kt)("p",null,"If your routes has additional parameters in their paths, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component to use them while creating the paths and filling the parameters in the paths. By default, existing URL parameters are used. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," to override them or add new ones."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/mui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb meta={{ authorId: "123" }} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"hideicons"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideIcons")),(0,o.kt)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/mui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List breadcrumb={<Breadcrumb hideIcons />}>...</List>;\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(m,{module:"@refinedev/mui/Breadcrumb","breadcrumbProps-type":"[BreadcrumbProps](https://mui.com/material-ui/react-breadcrumbs/#main-content)","breadcrumbProps-description":"Passes properties for [`<Breadcrumb>`](https://mui.com/material-ui/react-breadcrumbs/#api)",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);
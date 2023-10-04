"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,y=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"multi-level-menu",title:"Multi Level Menu",sidebar_label:"Multi Level Menu"},u=void 0,s={unversionedId:"advanced-tutorials/multi-level-menu/multi-level-menu",id:"advanced-tutorials/multi-level-menu/multi-level-menu",title:"Multi Level Menu",description:"This document is related to how to create a multi-level menu for refine applications.",source:"@site/docs/advanced-tutorials/multi-level-menu/multi-level-menu.md",sourceDirName:"advanced-tutorials/multi-level-menu",slug:"/advanced-tutorials/multi-level-menu/",permalink:"/docs/advanced-tutorials/multi-level-menu/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/multi-level-menu/multi-level-menu.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1696432001,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{id:"multi-level-menu",title:"Multi Level Menu",sidebar_label:"Multi Level Menu"},sidebar:"someSidebar",previous:{title:"Live / Realtime",permalink:"/docs/advanced-tutorials/real-time"},next:{title:"Appwrite",permalink:"/docs/advanced-tutorials/multi-tenancy/appwrite"}},c={},p=[{value:"What is Multi-level Menu?",id:"what-is-multi-level-menu",level:3},{value:"Usage",id:"usage",level:2},{value:"Headless",id:"headless",level:3},{value:"Ant Design",id:"ant-design",level:3},{value:"Example",id:"example",level:2}],m=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const y={toc:p};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document is related to how to create a multi-level menu for ",(0,r.kt)("strong",{parentName:"p"},"refine")," applications."),(0,r.kt)("h3",{id:"what-is-multi-level-menu"},"What is Multi-level Menu?"),(0,r.kt)("p",null,"The multi-level menu is a great way to organize your sider menu items. You can create groups and sub menus to keep your menu items organized. This makes it easy to find the menu items you are looking for."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To do this, it is necessary to create an object array with the following ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#resourceitemprops"},"resources properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'        <Refine\n           ...\n            resources={[\n                {\n                    // highlight-start\n                    name: "CMS",\n                    // highlight-end\n                },\n                {\n                    // highlight-start\n                    name: "posts",\n                    meta: { parent: "CMS" },\n                    // highlight-end\n                    list: "/posts",\n                },\n                {\n                    // highlight-start\n                    name: "category",\n                    meta: { parent: "CMS", canDelete: true },\n                    // highlight-end\n                    list: "/categories",\n                },\n            ]}\n        />\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"meta.parent")," you give in the resource objects must be strictly equal to the resource name you want to group under.")),(0,r.kt)("h3",{id:"headless"},"Headless"),(0,r.kt)("p",null,"If you want to create your multi-level menu without any UI framework integration, ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/ui/useMenu"},(0,r.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook gives your resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/layout/sider/index.tsx"',title:'"src/components/layout/sider/index.tsx"'},'//highlight-next-line\nimport { useMenu } from "@refinedev/core";\n\nexport const Sider: React.FC = () => {\n    //highlight-next-line\n    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();\n\n    // Here create your Sider to your UI choice\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="example output"',title:'"example','output"':!0},'\n// console.log(menuItems);\n[\n    {\n        name: "CMS",\n        key: "CMS",\n        ...\n        children: [\n            {\n                name: "posts",\n                key: "CMS/posts",\n                route: "/posts",\n                ...\n                children: [],\n            },\n            {\n                name: "category",\n                key: "CMS/category",\n                route: "/category",\n                ...\n                children: [],\n            },\n        ],\n    },\n];\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"ant-design"},"Ant Design"),(0,r.kt)("p",null,"The Sider component allows you to create the groups you want in the sider menu. By default, the sider will group menu items by their top-level heading. However, you can also add sub menu items to each group via ",(0,r.kt)("inlineCode",{parentName:"p"},"meta.parent"),"."),(0,r.kt)("p",null,"This gives you more control over the side menu and allows you to customize it to better suit your needs."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-level-menu/multi-level-menu.png",alt:"multiLevelMenu"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"You can review the example to examine the multi-level menu concept in more detail."),(0,r.kt)(m,{path:"multi-level-menu",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);
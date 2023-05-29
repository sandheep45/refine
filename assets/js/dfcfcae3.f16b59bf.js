"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36729],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,u=c["".concat(l,".").concat(d)]||c[d]||k[d]||i;return a?r.createElement(u,o(o({ref:t},m),{},{components:a})):r.createElement(u,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={id:"list-of-packages",title:"List of Packages"},o=void 0,p={unversionedId:"packages/list-of-packages",id:"version-3.xx.xx/packages/list-of-packages",title:"List of Packages",description:"- @pankod/refine-core - Collection of hooks,\xa0components\xa0and\xa0providers for authentication, access control, routing, networking, state management and i18n. Your starting point for headless projects.",source:"@site/versioned_docs/version-3.xx.xx/packages/list-of-packages.md",sourceDirName:"packages",slug:"/packages/list-of-packages",permalink:"/docs/3.xx.xx/packages/list-of-packages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/packages/list-of-packages.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685362876,formattedLastUpdatedAt:"May 29, 2023",frontMatter:{id:"list-of-packages",title:"List of Packages"},sidebar:"someSidebar",previous:{title:"Packages",permalink:"/docs/3.xx.xx/packages"},next:{title:"Documentation",permalink:"/docs/3.xx.xx/packages/documentation"}},l={},s=[{value:"UI Framework Packages:",id:"ui-framework-packages",level:3},{value:"Data Provider Packages:",id:"data-provider-packages",level:3},{value:"Router Provider Packages",id:"router-provider-packages",level:3},{value:"Live Provider Packages",id:"live-provider-packages",level:3},{value:"Integrations",id:"integrations",level:3},{value:"React Frameworks",id:"react-frameworks",level:3},{value:"React Frameworks",id:"react-frameworks-1",level:3},{value:"\u2764\ufe0f Community Packages:",id:"\ufe0f-community-packages",level:3}],m={toc:s};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-core")," - Collection of ",(0,n.kt)("inlineCode",{parentName:"li"},"hooks"),",\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"components"),"\xa0and\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"providers")," for ",(0,n.kt)("strong",{parentName:"li"},"authentication"),", ",(0,n.kt)("strong",{parentName:"li"},"access control"),", ",(0,n.kt)("strong",{parentName:"li"},"routing"),", ",(0,n.kt)("strong",{parentName:"li"},"networking"),", ",(0,n.kt)("strong",{parentName:"li"},"state management")," and ",(0,n.kt)("strong",{parentName:"li"},"i18n"),". Your starting point for headless projects."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-inferencer")," - Provides a way to automatically generate views for resources based on the data structure. The aim is to reduce the amount of time spent on creating views for resources by generating the code automatically that can be customized easily. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-cli")," - It is a tool that allows you to perform important commands while developing with refine.")),(0,n.kt)("h3",{id:"ui-framework-packages"},"UI Framework Packages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," -  ",(0,n.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design")," System UI Framework support.  ",(0,n.kt)("strong",{parentName:"p"},"20+")," ",(0,n.kt)("em",{parentName:"p"},"framework-specific"),"  ",(0,n.kt)("inlineCode",{parentName:"p"},"hooks")," and \xa0",(0,n.kt)("inlineCode",{parentName:"p"},"components"),"\xa0 incl. ",(0,n.kt)("em",{parentName:"p"},"Table, Form, Select, Menu, Layout, Notification and CRUD components."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," - ",(0,n.kt)("a",{parentName:"p",href:"https://mui.com/"},"Material UI")," Framework support. ",(0,n.kt)("strong",{parentName:"p"},"20+")," ",(0,n.kt)("em",{parentName:"p"},"framework-specific"),"  ",(0,n.kt)("inlineCode",{parentName:"p"},"hooks")," and \xa0",(0,n.kt)("inlineCode",{parentName:"p"},"components"),"\xa0 incl. ",(0,n.kt)("em",{parentName:"p"},"DataGrid (+ Pro), AutoComplete, Menu, Layout, Notification and CRUD components."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mantine")," - ",(0,n.kt)("a",{parentName:"p",href:"https://mantine.dev/"},"Mantine")," UI Framework support. ",(0,n.kt)("strong",{parentName:"p"},"20+")," framework-specific ",(0,n.kt)("strong",{parentName:"p"},"hooks")," and ",(0,n.kt)("strong",{parentName:"p"},"components")," incl. ",(0,n.kt)("em",{parentName:"p"},"Table, Form, AutoComplete, Menu, Layout, Notification and CRUD components."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," - ",(0,n.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra UI")," UI Framework support. ",(0,n.kt)("strong",{parentName:"p"},"20+")," framework-specific ",(0,n.kt)("strong",{parentName:"p"},"components")," incl. ",(0,n.kt)("em",{parentName:"p"},"Menu, Layout, Notification and CRUD components.")))),(0,n.kt)("h3",{id:"data-provider-packages"},(0,n.kt)("a",{parentName:"h3",href:"https://refine.dev/docs/core/providers/data-provider/"},"Data Provider")," Packages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-simple-rest")," - Connect any custom ",(0,n.kt)("strong",{parentName:"p"},"REST API")," backend.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-graphql")," - Connect any custom ",(0,n.kt)("strong",{parentName:"p"},"GraphQL")," backend.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-nestjsx-crud")," -  Consume ",(0,n.kt)("strong",{parentName:"p"},"REST API"),"'s built with ",(0,n.kt)("strong",{parentName:"p"},"NestJs"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-strapi-v4")," - ",(0,n.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," connector for ",(0,n.kt)("strong",{parentName:"p"},"v4 REST API."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-strapi-graphql")," - ",(0,n.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," connector for ",(0,n.kt)("strong",{parentName:"p"},"GraphQL API."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-strapi")," - ",(0,n.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," connector for ",(0,n.kt)("strong",{parentName:"p"},"legacy REST API."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-supabase")," -",(0,n.kt)("a",{parentName:"p",href:"https://supabase.com/"},"Supabase")," data provider. Supports ",(0,n.kt)("strong",{parentName:"p"},"Supabase Realtime")," for ",(0,n.kt)("strong",{parentName:"p"},"live/realtime")," projects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-hasura")," -  ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/"},"Hasura GraphQL")," data provider. Supports ",(0,n.kt)("strong",{parentName:"p"},"GraphQL Subscriptions")," for ",(0,n.kt)("strong",{parentName:"p"},"live/realtime")," projects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-appwrite")," - ",(0,n.kt)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite")," data provider. Supports ",(0,n.kt)("strong",{parentName:"p"},"Appwrite Realtime")," for ",(0,n.kt)("strong",{parentName:"p"},"live/realtime")," projects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-medusa")," -  ",(0,n.kt)("a",{parentName:"p",href:"https://medusajs.com/"},"Medusa")," connector for your e-commerce projects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-airtable")," - Use ",(0,n.kt)("a",{parentName:"p",href:"https://airtable.com/"},"Airtable")," as backend service.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-nhost")," -   ",(0,n.kt)("a",{parentName:"p",href:"https://nhost.io/"},"Nhost")," data provider. Supports ",(0,n.kt)("strong",{parentName:"p"},"GraphQL Subscriptions")," for ",(0,n.kt)("strong",{parentName:"p"},"live/realtime")," projects."))),(0,n.kt)("h3",{id:"router-provider-packages"},(0,n.kt)("a",{parentName:"h3",href:"https://refine.dev/docs/core/providers/router-provider/"},"Router Provider")," Packages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-router-v6")," - Router Provider for ",(0,n.kt)("a",{parentName:"p",href:"https://reactrouter.com"},"React Router (v6)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-router")," - Router Provider for ",(0,n.kt)("a",{parentName:"p",href:"https://v5.reactrouter.com/"},"React Router (v5)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-nextjs-router")," - Router Provider for ",(0,n.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next/router#userouter"},"Next.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-location")," - Router Provider for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-location"},"React Location"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-remix-router")," - Router Provider for ",(0,n.kt)("a",{parentName:"p",href:"https://remix.run/"},"Remix")))),(0,n.kt)("h3",{id:"live-provider-packages"},(0,n.kt)("a",{parentName:"h3",href:"https://refine.dev/docs/core/providers/live-provider/"},"Live Provider")," Packages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-ably")," - ",(0,n.kt)("a",{parentName:"li",href:"https://ably.com/"},"React Table")," support for for ",(0,n.kt)("strong",{parentName:"li"},"live/realtime")," projects.")),(0,n.kt)("h3",{id:"integrations"},"Integrations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-kbar")," - ",(0,n.kt)("a",{parentName:"li",href:"https://kbar.vercel.app/"},"kbar")," integration. Add ",(0,n.kt)("inlineCode",{parentName:"li"},"command"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"crtrl"),"+",(0,n.kt)("inlineCode",{parentName:"li"},"k")," interfaces to your project."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-react-table")," - ",(0,n.kt)("a",{parentName:"li",href:"https://tanstack.com/table/v8"},"React Table")," integration. Powerful tables & datagrids for your headless projects. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@pankod/refine-react-hook-form")," - ",(0,n.kt)("a",{parentName:"li",href:"https://react-hook-form.com/"},"React Hook Form")," integration. Extensible forms and validation for your projects.")),(0,n.kt)("h3",{id:"react-frameworks"},"React Frameworks"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"NextJS")," - SSR and SSG support for your projects."),(0,n.kt)("h3",{id:"react-frameworks-1"},"React Frameworks"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"Remix")," - SSR support for your projects."),(0,n.kt)("h3",{id:"\ufe0f-community-packages"},"\u2764\ufe0f Community Packages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/resulturan/refine-firebase"},(0,n.kt)("inlineCode",{parentName:"a"},"refine-firebase"))," - Support for ",(0,n.kt)("a",{parentName:"li",href:"https://firebase.google.com/"},"Firebase")," services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tspvivek/refine-directus"},(0,n.kt)("inlineCode",{parentName:"a"},"@tspvivek/refine-directus"))," - Connector for backends created with ",(0,n.kt)("a",{parentName:"li",href:"https://directus.io/"},"Directus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/chirdeeptomar/refine-elide-rest"},(0,n.kt)("inlineCode",{parentName:"a"},"refine-elide-rest"))," - Connector for backends created with ",(0,n.kt)("a",{parentName:"li",href:"https://elide.io/"},"Elide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/diazoxide/entrefine"},(0,n.kt)("inlineCode",{parentName:"a"},"ent-refine"))," - A library that generates fully customizable UI based on ",(0,n.kt)("a",{parentName:"li",href:"https://entgo.io/"},"Entgo ORM")," and ",(0,n.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL API")," with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine"},"refine"))))}k.isMDXComponent=!0}}]);
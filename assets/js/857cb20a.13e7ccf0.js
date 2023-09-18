"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}},l=void 0,p={unversionedId:"tutorial/getting-started/mui/generate-crud-pages",id:"tutorial/getting-started/mui/generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/docs/tutorial/1-getting-started/mui/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/mui",slug:"/tutorial/getting-started/mui/generate-crud-pages",permalink:"/docs/tutorial/getting-started/mui/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/mui/3-generate-crud-pages.md",tags:[],version:"current",lastUpdatedBy:"necatiozmen",lastUpdatedAt:1695030347,formattedLastUpdatedAt:"Sep 18, 2023",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}}},u={},d=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},h=c("Checklist"),m=c("ChecklistItem"),g={toc:d};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"inferencer"},"Inferencer"),(0,r.kt)("p",null,"Inferencer is a powerful tool in the ",(0,r.kt)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with the required forms and tables for CRUD operations."),(0,r.kt)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,r.kt)("p",null,"There are several benefits to using Inferencer:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Code generated by Inferencer is also easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to it according to your needs. This allows you to quickly iterate and get your project up and running faster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using Inferencer can also help you avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,r.kt)("p",null,"Overall, using Inferencer will greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, allowing you to focus on more complex tasks instead."),(0,r.kt)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,r.kt)("p",null,"You can Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"how Inferencer works")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/inferencer/"},"how to use it with Material UI")," in our documents."),(0,r.kt)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"<MuiInferencer/>")," component, which can be imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/mui"),". It is used to generate CRUD pages based on your API response with Material UI components."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<MuiInferencer/>")," component is used for passing appropriate values to the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," prop will be explained in detail in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-resources/index"},"Unit 4"),". For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport {\n    ThemedLayoutV2,\n    ErrorComponent,\n    RefineThemes,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route index element={<NavigateToResource resource="blog_posts" />} />\n                                {/* highlight-start */}\n                                <Route path="blog-posts">\n                                    <Route index element={<MuiInferencer />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n                                {/* highlight-end */}\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"At this point, ",(0,r.kt)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response."),(0,r.kt)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,r.kt)("p",null,"So far we have added complete CRUD pages by utilizing the Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,r.kt)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,r.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,r.kt)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"How ",(0,r.kt)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," will be explained in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/index"},"Unit 3"),".")),(0,r.kt)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.'),(0,r.kt)("h3",{id:"list-page"},"List Page"),(0,r.kt)("p",null,"To preview the list page, go back to your browser and go to ",(0,r.kt)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000"),"."),(0,r.kt)("p",null,"You should see the list page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When you navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,r.kt)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component, like ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@refinedev/core";\nimport {\n    ThemedLayoutV2,\n    ErrorComponent,\n    RefineThemes,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        //highlight-start\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        //highlight-end\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route index element={<NavigateToResource resource="blog_posts" />} />\n                                {/* highlight-start */}\n                                <Route path="blog-posts">\n                                    <Route index element={<MuiInferencer />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n                                {/* highlight-end */}\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("h3",{id:"create-page"},"Create Page"),(0,r.kt)("p",null,"To preview the create page, go back to your browser and go to ",(0,r.kt)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' or click the "Create" button on the list page.'),(0,r.kt)("p",null,"You should see the create page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@refinedev/core";\nimport {\n    ThemedLayoutV2,\n    ErrorComponent,\n    RefineThemes,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        //highlight-start\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        //highlight-end\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route index element={<NavigateToResource resource="blog_posts" />} />\n                                {/* highlight-start */}\n                                <Route path="blog-posts">\n                                    <Route index element={<MuiInferencer />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n                                {/* highlight-end */}\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("h3",{id:"edit-page"},"Edit Page"),(0,r.kt)("p",null,"To preview the edit page, go back to your browser and go to ",(0,r.kt)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' or click the "Edit" button on the record in the list page.'),(0,r.kt)("p",null,"You should see the edit page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport {\n    ThemedLayoutV2,\n    ErrorComponent,\n    RefineThemes,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        //highlight-start\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        //highlight-end\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route index element={<NavigateToResource resource="blog_posts" />} />\n                                {/* highlight-start */}\n                                <Route path="blog-posts">\n                                    <Route index element={<MuiInferencer />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n                                {/* highlight-end */}\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("h3",{id:"show-page"},"Show Page"),(0,r.kt)("p",null,"To preview the show page, go back to your browser and go to ",(0,r.kt)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' or click the "Show" button on the record in the list page.'),(0,r.kt)("p",null,"You should see the show page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport {\n    ThemedLayoutV2,\n    ErrorComponent,\n    RefineThemes,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        //highlight-start\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        //highlight-end\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route index element={<NavigateToResource resource="blog_posts" />} />\n                                {/* highlight-start */}\n                                <Route path="blog-posts">\n                                    <Route index element={<MuiInferencer />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n                                {/* highlight-end */}\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"You will learn how to create CRUD pages manually using the code generated by Inferencer as a reference in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/mui/index"},"Unit 5")),(0,r.kt)(h,{mdxType:"Checklist"},(0,r.kt)(m,{id:"generated-crud-pages",mdxType:"ChecklistItem"},"I understood what Inferencer is, how it works and how it can make my work easier."),(0,r.kt)(m,{id:"generated-crud-pages-2",mdxType:"ChecklistItem"},(0,r.kt)("p",null,"I have inspected the auto-generated ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," pages."))))}f.isMDXComponent=!0}}]);
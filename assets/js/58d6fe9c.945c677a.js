"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"list",title:"List",sidebar_label:"List",swizzle:!0},i=void 0,s={unversionedId:"api-reference/mui/components/basic-views/list",id:"version-3.xx.xx/api-reference/mui/components/basic-views/list",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/basic-views/list.md",sourceDirName:"api-reference/mui/components/basic-views",slug:"/api-reference/mui/components/basic-views/list",permalink:"/docs/3.xx.xx/api-reference/mui/components/basic-views/list",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/basic-views/list.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683546356,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{id:"list",title:"List",sidebar_label:"List",swizzle:!0},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/3.xx.xx/api-reference/mui/components/basic-views/edit"},next:{title:"Show",permalink:"/docs/3.xx.xx/api-reference/mui/components/basic-views/show"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canCreate</code> and <code>createButtonProps</code>",id:"cancreate-and-createbuttonprops",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"<del><code>cardProps</code></del>",id:"cardprops",level:3},{value:"<del><code>cardHeaderProps</code></del>",id:"cardheaderprops",level:3},{value:"<del><code>cardContentProps</code></del>",id:"cardcontentprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles."),(0,a.kt)("p",null,"We will show what ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/posts",live:!0,hideCode:!0,url:"http://localhost:3000/posts"},'// visible-block-start\nimport React from "react";\nimport { useMany } from "@pankod/refine-core";\nimport {\n    List,\n    DataGrid,\n    DateField,\n    useDataGrid,\n    GridColumns,\n} from "@pankod/refine-mui";\n\nconst SampleList = () => {\n    const { dataGridProps } = useDataGrid();\n\n    const { data: categoryData, isLoading: categoryIsLoading } = useMany({\n        resource: "categories",\n        ids: dataGridProps?.rows?.map((item: any) => item?.category?.id) ?? [],\n        queryOptions: {\n            enabled: !!dataGridProps?.rows,\n        },\n    });\n\n    const columns = React.useMemo<GridColumns<any>>(\n        () => [\n            {\n                field: "id",\n                headerName: "Id",\n                type: "number",\n                minWidth: 50,\n            },\n            {\n                field: "title",\n                headerName: "Title",\n                minWidth: 200,\n            },\n            {\n                field: "category",\n                headerName: "Category",\n                valueGetter: ({ row }) => {\n                    const value = row?.category?.id;\n\n                    return value;\n                },\n                minWidth: 300,\n                renderCell: function render({ value }) {\n                    return categoryIsLoading ? (\n                        <>Loading...</>\n                    ) : (\n                        categoryData?.data?.find((item) => item.id === value)\n                            ?.title\n                    );\n                },\n            },\n            {\n                field: "createdAt",\n                headerName: "Created At",\n                minWidth: 250,\n                renderCell: function render({ value }) {\n                    return <DateField value={value} />;\n                },\n            }\n        ],\n        [categoryData?.data],\n    );\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n// visible-block-end\n\nrender(<RefineMuiDemo initialRoutes={["/samples"]} resources={[ { name: "samples", list: SampleList } ]} />)\n')),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("p",null,"It allows adding title inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component. if you don't pass title props it uses the plural resource name by default. For example, for the ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts"),' resource, it will be "Posts".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { List, Typography } from "@pankod/refine-mui";\n\nconst ListPage: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            title={<Typography variant="h5">Custom Title</Typography>}\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: ListPage,\n            },\n        ]}\n    />\n);\n')),(0,a.kt)("h3",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component in a custom page, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/custom",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/custom"},'// handle initial routes in new way\nsetInitialRoutes(["/custom"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { List, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst CustomPage: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <List resource="posts">\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            Layout={Layout}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\n\nrender(<Wrapper><App /></Wrapper>);\n')),(0,a.kt)("h3",{id:"cancreate-and-createbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"canCreate")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"createButtonProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component. If resource is passed a create component, ",(0,a.kt)("strong",{parentName:"p"},"refine")," adds the create button by default. If you want to customize this button you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below."),(0,a.kt)("p",null,"Create button redirects to the create page of the resource according to the value it reads from the URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'const { default: simpleRest } = RefineSimpleRest;\n\nconst dataProvider = simpleRest("https://api.fake-rest.refine.dev");\n\nconst authProvider = {\n    login: () => Promise.resolve(),\n    logout: () => Promise.resolve(),\n    checkAuth: () => Promise.resolve(),\n    checkError: () => Promise.resolve(),\n    getPermissions: () => Promise.resolve("admin"),\n    getUserIdentity: () => Promise.resolve(),\n};\n\n// visible-block-start\nimport { List } from "@pankod/refine-mui";\nimport { usePermissions } from "@pankod/refine-core";\n\nconst PostList: React.FC = () => {\n    const { data: permissionsData } = usePermissions();\n    return (\n        <List\n            /* highlight-start */\n            canCreate={permissionsData?.includes("admin")}\n            createButtonProps={{ size: "small" }}\n            /* highlight-end */\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        authProvider={authProvider}\n        dataProvider={dataProvider}\n        initialRoutes={["/posts"]}\n        Layout={RefineMui.Layout}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/usePermissions"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,a.kt)("h3",{id:"breadcrumb"},(0,a.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,a.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," package."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mui/components/mui-breadcrumb"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List, Breadcrumb } from "@pankod/refine-mui";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            breadcrumb={\n                <div\n                    style={{\n                        padding: "3px 6px",\n                        border: "2px dashed cornflowerblue",\n                    }}\n                >\n                    <Breadcrumb />\n                </div>\n            }\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n        DashboardPage={() => {\n            return (\n                <div>\n                    <p>This page is empty.</p>\n                    <RefineMui.ListButton resource="posts" />\n                </div>\n            )\n        }}\n    />,\n);\n')),(0,a.kt)("h3",{id:"wrapperprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,a.kt)("p",null,"If you want to customize the wrapper of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Card")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@pankod/refine-mui";\n\nconst PostList: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <List\n            // highlight-start\n            wrapperProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList\n            },\n        ]}\n    />,\n);\n')),(0,a.kt)("h3",{id:"headerprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,a.kt)("p",null,"If you want to customize the header of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CardHeader")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@pankod/refine-mui";\n\nconst PostList: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <List\n            // highlight-start\n            headerProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList\n            },\n        ]}\n    />,\n);\n')),(0,a.kt)("h3",{id:"contentprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,a.kt)("p",null,"If you want to customize the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CardContent")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@pankod/refine-mui";\n\nconst PostList: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <List\n            // highlight-start\n            contentProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList\n            },\n        ]}\n    />,\n);\n')),(0,a.kt)("h3",{id:"headerbuttons"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,a.kt)("p",null,"You can customize the buttons at the header by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,a.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List, Button } from "@pankod/refine-mui";\n\nconst PostList: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <List\n            // highlight-start\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList\n            },\n        ]}\n    />,\n);\n')),(0,a.kt)("h3",{id:"headerbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,a.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/box/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List, Button } from "@pankod/refine-mui";\n\nconst PostList: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <List\n            // highlight-start\n            headerButtonProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList\n            },\n        ]}\n    />,\n);\n')),(0,a.kt)("h3",{id:"cardprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-card/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<Card>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardProps"),"."),(0,a.kt)("h3",{id:"cardheaderprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardHeaderProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"headerProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardHeader>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardHeaderProps"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/create.tsx"',title:'"src/pages/posts/create.tsx"'},'// highlight-next-line\nimport { List, Typography } from "@pankod/refine-mui";\n\nexport const CreatePage: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            cardHeaderProps={{\n                title: <Typography variant="h5">Custom Title</Typography>,\n            }}\n            // highlight-end\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"cardcontentprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardContentProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"contentProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardContent>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardContentProps"),"."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(d,{module:"@pankod/refine-mui/List","wrapperProps-type":"[`CardProps`](https://mui.com/material-ui/api/card/#props)","contentProps-type":"[`CardContentProps`](https://mui.com/material-ui/api/card-content/#props)","headerProps-type":"[`CardHeaderProps`](https://mui.com/material-ui/api/card-header/#props)","headerButtons-default":"[`CreateButton`](https://refine.dev/docs/api-reference/mui/components/buttons/create-button/)","headerButtonProps-type":"[`BoxProps`](https://mui.com/material-ui/api/box/#props)","breadcrumb-default":"[`<Breadcrumb/>`](/docs/api-reference/mui/components/mui-breadcrumb/)","createButtonProps-type":"[`CreateButtonProps`](https://refine.dev/docs/api-reference/mui/components/buttons/create-button/)",mdxType:"PropsTable"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'\nconst Wrapper = ({children}) => {\n    return (\n        <RefineMui.ThemeProvider theme={RefineMui.LightTheme}>\n            <RefineMui.CssBaseline />\n            <RefineMui.GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            {children}\n        </RefineMui.ThemeProvider>\n    )\n}\n\n')))}m.isMDXComponent=!0}}]);
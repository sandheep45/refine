"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35988],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},37113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"command-palette",title:"Command Palette",sidebar_label:"Command Palette"},l=void 0,d={unversionedId:"packages/documentation/command-palette",id:"packages/documentation/command-palette",title:"Command Palette",description:"refine supports the command palette feature and use the",source:"@site/docs/packages/documentation/command-palette.md",sourceDirName:"packages/documentation",slug:"/packages/documentation/command-palette",permalink:"/docs/packages/documentation/command-palette",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/documentation/command-palette.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1697033236,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"command-palette",title:"Command Palette",sidebar_label:"Command Palette"},sidebar:"someSidebar",previous:{title:"Inferencer",permalink:"/docs/packages/documentation/inferencer"},next:{title:"React Table",permalink:"/docs/packages/documentation/react-table"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Access Control",id:"access-control",level:2},{value:"Actions",id:"actions",level:2},{value:"Custom Actions",id:"custom-actions",level:2},{value:"Example",id:"example",level:2}],u=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:p};function h(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import {\n    useMany as CoreUseMany,\n    useShow as RefineCoreUseShow,\n    useOne as RefineCoreUseOne,\n} from "@refinedev/core";\nimport {\n    List as RefineAntdList,\n    TextField as RefineAntdTextField,\n    TagField as RefineAntdTagField,\n    useTable as RefineAntdUseTable,\n    EditButton as RefineAntdEditButton,\n    ShowButton as RefineAntdShowButton,\n    getDefaultSortOrder as RefineAntdGetDefaultSortOrder,\n    useForm as RefineAntdUseForm,\n    useSelect as RefineAntdUseSelect,\n    Create as RefineAntdCreate,\n    Show as RefineAntdShow,\n} from "@refinedev/antd";\nimport {\n    Table as AntdTable,\n    Space as AntdSpace,\n    Form as AntdForm,\n    Select as AntdSelect,\n    Input as AntdInput,\n    Typography as AntdTypography,\n} from "antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps, sorter } = RefineAntdUseTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.categoryId) ?? [];\n    const { data, isLoading } = CoreUseMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <RefineAntdList>\n            <AntdTable {...tableProps} rowKey="id">\n                <AntdTable.Column dataIndex="id" title="ID" />\n                <AntdTable.Column dataIndex="title" title="Title" />\n                <AntdTable.Column\n                    dataIndex={["category", "id"]}\n                    title="Category"\n                    render={(value) => {\n                        if (isLoading) {\n                            return <RefineAntdTextField value="Loading..." />;\n                        }\n\n                        return (\n                            <RefineAntdTextField\n                                value={\n                                    data?.data.find((item) => item.id === value)\n                                        ?.title\n                                }\n                            />\n                        );\n                    }}\n                />\n                <AntdTable.Column\n                    dataIndex="status"\n                    title="Status"\n                    render={(value: string) => (\n                        <RefineAntdTagField value={value} />\n                    )}\n                />\n                <AntdTable.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <AntdSpace>\n                            <RefineAntdEditButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <RefineAntdShowButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                        </AntdSpace>\n                    )}\n                />\n            </AntdTable>\n        </RefineAntdList>\n    );\n};\n\nconst PostCreate: React.FC = () => {\n    const { formProps, saveButtonProps } = RefineAntdUseForm<IPost>();\n\n    const { selectProps: categorySelectProps } = RefineAntdUseSelect<ICategory>(\n        {\n            resource: "61bc4afa9ee2c",\n            optionLabel: "title",\n            optionValue: "id",\n        },\n    );\n\n    return (\n        <RefineAntdCreate saveButtonProps={saveButtonProps}>\n            <AntdForm {...formProps} layout="vertical">\n                <AntdForm.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdInput />\n                </AntdForm.Item>\n                <AntdForm.Item\n                    label="Category"\n                    name="categoryId"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdSelect {...categorySelectProps} />\n                </AntdForm.Item>\n                <AntdForm.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdInput.TextArea />\n                </AntdForm.Item>\n            </AntdForm>\n        </RefineAntdCreate>\n    );\n};\n\nconst PostEdit: React.FC = () => {\n    const { formProps, saveButtonProps, queryResult } =\n        RefineAntdUseForm<IPost>();\n\n    const postData = queryResult?.data?.data;\n    const { selectProps: categorySelectProps } = RefineAntdUseSelect<ICategory>(\n        {\n            defaultValue: postData?.categoryId,\n            resource: "61c43adc284ac",\n            optionLabel: "title",\n            optionValue: "id",\n        },\n    );\n\n    return (\n        <RefineAntdCreate saveButtonProps={saveButtonProps}>\n            <AntdForm {...formProps} layout="vertical">\n                <AntdForm.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdInput />\n                </AntdForm.Item>\n                <AntdForm.Item\n                    label="Category"\n                    name="categoryId"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdSelect {...categorySelectProps} />\n                </AntdForm.Item>\n                <AntdForm.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdInput.TextArea />\n                </AntdForm.Item>\n            </AntdForm>\n        </RefineAntdCreate>\n    );\n};\n\nconst PostShow: React.FC = () => {\n    const { queryResult } = RefineCoreUseShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        RefineCoreUseOne<ICategory>({\n            resource: "categories",\n            id: record?.category?.id || "",\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n    return (\n        <RefineAntdShow isLoading={isLoading}>\n            <AntdTypography.Title level={5}>Id</AntdTypography.Title>\n            <AntdTypography.Text>{record?.id}</AntdTypography.Text>\n\n            <AntdTypography.Title level={5}>\n                AntdTypography.Title\n            </AntdTypography.Title>\n            <AntdTypography.Text>{record?.title}</AntdTypography.Text>\n\n            <AntdTypography.Title level={5}>Category</AntdTypography.Title>\n            <AntdTypography.Text>\n                {categoryIsLoading ? "Loading..." : categoryData?.data.title}\n            </AntdTypography.Text>\n\n            <AntdTypography.Title level={5}>Content</AntdTypography.Title>\n            <AntdTypography.Text>{record?.content}</AntdTypography.Text>\n        </RefineAntdShow>\n    );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," supports the command palette feature and use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,r.kt)("strong",{parentName:"a"},"kbar")),". ",(0,r.kt)("strong",{parentName:"p"},"kbar")," is a fully extensible ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"(MacOS) or ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"(Linux/Windows) interface for your site."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/kbar"},"@refinedev/kbar")," library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/kbar\n")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"First of all, you need to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/kbar")," library and we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineKbarProvider")," to wrap the whole application."),(0,r.kt)("p",null,"After that, we should mount the ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineKbar")," component inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'tile="src/App.tsx"',tile:'"src/App.tsx"'},'// highlight-next-line\nimport { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            // highlight-next-line\n            <RefineKbarProvider>\n                <Refine\n                    //...\n                >\n                    {/*...*/}\n                    {/* highlight-next-line */}\n                    <RefineKbar />\n                </Refine>\n            // highlight-next-line\n            </RefineKbarProvider>\n        </BrowserRouter>\n    );\n};\n')),(0,r.kt)("p",null,"You can click on the live preview area and test how it works with ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"(MacOS) or ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"(Linux/Windows)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly url=http://localhost:5173 previewHeight=650px",live:!0,previewOnly:!0,url:"http://localhost:5173",previewHeight:"650px"},'setInitialRoutes(["/posts"]);\nimport { Refine, Authenticated } from "@refinedev/core";\nimport routerProvider, {\n    CatchAllNavigate,\n    NavigateToResource,\n} from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    ThemedLayoutV2,\n    RefineThemes,\n    notificationProvider,\n    List,\n    EditButton,\n    ShowButton,\n    useTable,\n    AuthPage,\n    ErrorComponent,\n} from "@refinedev/antd";\nimport { ConfigProvider, Layout, Table, Space } from "antd";\nimport { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <RefineKbarProvider>\n                    <Refine\n                        dataProvider={dataProvider(API_URL)}\n                        routerProvider={routerProvider}\n                        resources={[\n                            {\n                                name: "posts",\n                                list: "/posts",\n                                create: "/posts/create",\n                                edit: "/posts/edit/:id",\n                                show: "/posts/show/:id",\n                                meta: {\n                                    canDelete: true,\n                                },\n                            },\n                        ]}\n                        notificationProvider={notificationProvider}\n                        options={{\n                            liveMode: "auto",\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route index element={<NavigateToResource />} />\n                                <Route path="/posts">\n                                    <Route index element={<PostList />} />\n                                    <Route\n                                        path="create"\n                                        element={<PostCreate />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<PostEdit />}\n                                    />\n                                    <Route\n                                        path="show/:id"\n                                        element={<PostShow />}\n                                    />\n                                </Route>\n                            </Route>\n                        </Routes>\n                        <RefineKbar />\n                    </Refine>\n                </RefineKbarProvider>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\nrender(<App />);\n')),(0,r.kt)("h2",{id:"access-control"},"Access Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar")," respects the access control settings of your App. To learn more about access control, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/accessControl-provider/"},"Access Control Provider")," section of the documentation. Also, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," to check the delete accessibility of the command palette.  "),(0,r.kt)("p",null,"For more information check out the source code of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/kbar"},(0,r.kt)("inlineCode",{parentName:"a"},"refine-kbar"))," package"),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar")," uses your resources to create default actions. Which includes; ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),". It will hide the current action of the page you are in."),(0,r.kt)("h2",{id:"custom-actions"},"Custom Actions"),(0,r.kt)("p",null,"If we want to add custom actions to the command palette, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useRegisterActions")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar"),".\ncheck the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/examples/finefoods-material-ui/src/hooks/useOrderCustomKbarActions/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"refine-finefoods"))," example.  "),(0,r.kt)("p",null,"Also you can find more information about actions in the ",(0,r.kt)("a",{parentName:"p",href:"https://kbar.vercel.app/docs/concepts/actions"},(0,r.kt)("inlineCode",{parentName:"a"},"kbar"))," package."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAction")," to create a new action and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useRegisterActions")," to register the action to the command palette."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Custom action example"',title:'"Custom',action:!0,'example"':!0},'import { createAction, useRegisterActions } from "@refinedev/kbar";\n\nconst customAction = createAction({\n    name: "my custom action",\n    section: "custom-actions",\n    perform: () => {\n        console.log("onSelect my custom action");\n    },\n    priority: Priority.HIGH,\n});\n\nuseRegisterActions(customAction);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar")," exports the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,r.kt)("inlineCode",{parentName:"a"},"kbar")),", you use all of its features")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(u,{path:"command-palette-kbar",mdxType:"CodeSandboxExample"}))}h.isMDXComponent=!0}}]);
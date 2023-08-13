"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/index",next:"tutorial/adding-crud-pages/{preferredUI}/add-show-page"}},l=void 0,d={unversionedId:"tutorial/adding-crud-pages/mui/add-edit-page",id:"version-3.xx.xx/tutorial/adding-crud-pages/mui/add-edit-page",title:"2. Adding Edit Page",description:"Edit page is the page where you can edit the record. In this tutorial, we will create the edit page for the blog_posts resource.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mui/add-edit-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/add-edit-page",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/mui/add-edit-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mui/add-edit-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1691929300,formattedLastUpdatedAt:"Aug 13, 2023",frontMatter:{id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/index",next:"tutorial/adding-crud-pages/{preferredUI}/add-show-page"}}},s={},c=[{value:"Creating Edit Page",id:"creating-edit-page",level:2},{value:"Understanding the Edit Component",id:"understanding-the-edit-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Edit Page to the App",id:"adding-the-edit-page-to-the-app",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=m("Checklist"),h=m("ChecklistItem"),f={toc:c};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Edit page is the page where you can edit the record. In this tutorial, we will create the edit page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource."),(0,r.kt)("h2",{id:"creating-edit-page"},"Creating Edit Page"),(0,r.kt)("p",null,"First, let's create our file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,r.kt)("inlineCode",{parentName:"p"},"edit.tsx"),". Then, we will copy the edit page code generated by Inferencer and paste it into the file."),(0,r.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To open the edit page, click any "Edit" button in the "Actions" column of the table.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'On the edit page, click on the "Show Code" button in the bottom right corner of the page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can see the edit page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,r.kt)("inlineCode",{parentName:"p"},"edit.tsx")," file."))),(0,r.kt)("p",null,"You can see the edit page code generated by Inferencer below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n    ThemeProvider,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    Layout={Layout}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: MuiInferencer,\n                            show: MuiInferencer,\n                            create: MuiInferencer,\n                            edit: MuiInferencer,\n                        },\n                    ]}\n                />\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("p",null,"Instead of coding the edit page component from scratch, Inferencer created the required code based on API response, so that we can customize."),(0,r.kt)("h2",{id:"understanding-the-edit-component"},"Understanding the Edit Component"),(0,r.kt)("p",null,"We will go through the edit page components and hooks one by one."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Edit/>")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button, refresh button etc."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/basic-views/edit"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Edit/>")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form")," package, has been developed by using the ",(0,r.kt)("strong",{parentName:"p"},"React Hook Form")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package."),(0,r.kt)("p",{parentName:"li"},"It provides all the features of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,r.kt)("strong",{parentName:"p"},"React Hook Form"),"."),(0,r.kt)("p",{parentName:"li"},"It also provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,r.kt)("p",{parentName:"li"},"When you use ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," in the edit page, it automatically fetches the data of the record by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in the URL, then fills the form with the data. It sends the form data to ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," method when the form is submitted."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"@pankod/refine-react-hook-form")," ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"React Hook Form")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All other components provided by ",(0,r.kt)("strong",{parentName:"p"},"Material UI")," are used to display the form fields."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/getting-started/overview/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"Material UI")," documentation for more information ","\u2192")))),(0,r.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.kt)("p",null,"In the edit page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category. In this case, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the params to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the necessary props for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Autocomplete/>")," component."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/hooks/useAutocomplete/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useAutocomplete")," documentation for more information ","\u2192")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-autocomplete/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"Material UI")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Autocomplete/>")," documentation for more information ","\u2192")),(0,r.kt)("p",null,"In the auto-generated edit page code, Inferencer used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook to select a category from the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({\n    resource: "categories",\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," returns 10 record by default, but the category of the blog post may not be in the first 10 records. To solve this problem, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," prop to set the default value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({\n    resource: "categories",\n    defaultValue: blogPostsData?.category?.id,\n});\n')),(0,r.kt)("h2",{id:"adding-the-edit-page-to-the-app"},"Adding the Edit Page to the App"),(0,r.kt)("p",null,"Now that we have created the edit page, we need to add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the created ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostEdit")," component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"MuiInferencer")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostEdit")," component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n    ThemeProvider,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nimport { BlogPostList } from "pages/blog-posts/list";\n//highlight-next-line\nimport { BlogPostEdit } from "pages/blog-posts/edit";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    Layout={Layout}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: BlogPostList,\n                            //highlight-next-line\n                            edit: BlogPostEdit,\n                            show: MuiInferencer,\n                            create: MuiInferencer,\n                        },\n                    ]}\n                />\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\nexport default App;\n')),(0,r.kt)("p",null,"Now, we can see the edit page in the browser at ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(u,{mdxType:"Checklist"},(0,r.kt)(h,{id:"add-edit-page-mui",mdxType:"ChecklistItem"},"I added the edit page to the app."),(0,r.kt)(h,{id:"add-edit-page-mui-2",mdxType:"ChecklistItem"},"I understood the edit page components and hooks."),(0,r.kt)(h,{id:"add-edit-page-mui-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}g.isMDXComponent=!0}}]);
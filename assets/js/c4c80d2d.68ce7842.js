"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=s(n),u=r,m=h["".concat(d,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:!1}},l=void 0,o={unversionedId:"tutorial/adding-crud-pages/headless/adding-sort-and-filters",id:"tutorial/adding-crud-pages/headless/adding-sort-and-filters",title:"6. Adding Sort and Filters",description:"In the previous Adding List Page section, we have displayed products data in a table. Now we will learn how to add sorting and filtering to the table to user can have more control over the data.",source:"@site/docs/tutorial/4-adding-crud-pages/headless/adding-sort-and-filters.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/adding-sort-and-filters",permalink:"/docs/tutorial/adding-crud-pages/headless/adding-sort-and-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/headless/adding-sort-and-filters.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679484544,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:!1}}},d={},s=[{value:"Sort and Filters",id:"sort-and-filters",level:2},{value:"Adding Sorting",id:"adding-sorting",level:2},{value:"Adding Filters",id:"adding-filters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("Checklist"),h=p("ChecklistItem"),u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the previous ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/headless/index"},"Adding List Page")," section, we have displayed products data in a table. Now we will learn how to add sorting and filtering to the table to user can have more control over the data."),(0,r.kt)("h2",{id:"sort-and-filters"},"Sort and Filters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package based on the ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},(0,r.kt)("strong",{parentName:"a"},"Tanstack Table"))," package. So, we can add sorting and filtering features to our table as suggested in the ",(0,r.kt)("strong",{parentName:"p"},"Tanstack Table")," documentation."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-table/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"@refinedev/react-table")," ",(0,r.kt)("inlineCode",{parentName:"a"},"useTable")," documentation for more information ","\u2192")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tanstack Table")," keeps the ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," states in the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook. When we change the these states, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook will automatically fetch the data and update the table with the new data."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Under the hood, ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting"),"\xa0and ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," states of ",(0,r.kt)("strong",{parentName:"p"},"Tanstack Table")," are converted to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CrudSorting")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CrudFilter")," types of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". So, when you change the ",(0,r.kt)("strong",{parentName:"p"},"Tanstack Table"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," state, ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook will pass the converted params to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," provides a headless solution, there are many ways to handle filtering and sorting. In this tutorial, we will show basic examples of how to add sorting and filtering to the table."),(0,r.kt)("h2",{id:"adding-sorting"},"Adding Sorting"),(0,r.kt)("p",null,"Let's add sorting to the table. We will add a clickable column header to the table. When the user clicks on the column header, the table will be sorted by the column."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/products/list.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<thead/>")," element with the following code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/products/list.tsx"',title:'"src/pages/products/list.tsx"'},'<thead>\n    {getHeaderGroups().map((headerGroup) => (\n        <tr key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n                <th key={header.id}>\n                    //highlight-next-line\n                    <div onClick={header.column.getToggleSortingHandler()}>\n                        {!header.isPlaceholder &&\n                            flexRender(\n                                header.column.columnDef.header,\n                                header.getContext(),\n                            )}\n                        //highlight-start\n                        {{\n                            asc: " \ud83d\udd3c",\n                            desc: " \ud83d\udd3d",\n                        }[header.column.getIsSorted() as string] ?? null}\n                        //highlight-end\n                    </div>\n                </th>\n            ))}\n        </tr>\n    ))}\n</thead>\n')),(0,r.kt)("p",{parentName:"li"},"In the above code, we have added a ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," event to the column header. When the user clicks on the column header, the ",(0,r.kt)("inlineCode",{parentName:"p"},"getToggleSortingHandler")," method of the column will be called. This method will toggle the sorting state of the column."),(0,r.kt)("p",{parentName:"li"},"We have also added a arrow icon to the column header. The arrow icon will be displayed based on the sorting state of the column. If the column is not sorted, no icon will be displayed. If the column is sorted in ascending order, the ",(0,r.kt)("inlineCode",{parentName:"p"},"\ud83d\udd3c")," icon will be displayed. If the column is sorted in descending order, the ",(0,r.kt)("inlineCode",{parentName:"p"},"\ud83d\udd3d")," icon will be displayed."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",null,"How can I disable sorting for a specific column?")),(0,r.kt)("p",null,"You can disable sorting for a specific column by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"enableSorting")," property of the column to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the column definition like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    title: "Category",\n    dataIndex: "category",\n    //highlight-next-line\n    enableSorting: false,\n},\n'))),(0,r.kt)("h2",{id:"adding-filters"},"Adding Filters"),(0,r.kt)("p",null,"Let's add filters to the table. We will add a basic text input to the table header. When the user types in the input, the table will be filtered by the input value of the column."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/products/list.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Change the filter operator for columns to "contains" by changing the ',(0,r.kt)("inlineCode",{parentName:"p"},"meta")," property of the column definition like below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "name",\n    accessorKey: "name",\n    header: "Name",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n{\n    id: "material",\n    accessorKey: "material",\n    header: "Material",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n{\n    id: "description",\n    accessorKey: "description",\n    header: "Description",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n')),(0,r.kt)("p",{parentName:"li"},"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterOperator"),' is set to "eq". So, we have changed the ',(0,r.kt)("inlineCode",{parentName:"p"},"filterOperator"),' to "contains" for specific columns.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Disable filtering for the "Action" column by setting the ',(0,r.kt)("inlineCode",{parentName:"p"},"enableFiltering")," property of the column to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the column definition like below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "actions",\n    accessorKey: "id",\n    header: "Actions",\n    //highlight-next-line\n    enableColumnFilter: false,\n    cell: function render({ getValue }) {\n        return (\n            <div\n                style={{\n                    display: "flex",\n                    flexDirection: "row",\n                    flexWrap: "wrap",\n                    gap: "4px",\n                }}\n            >\n                <button\n                    onClick={() => {\n                        show("products", getValue() as string);\n                    }}\n                >\n                    Show\n                </button>\n                <button\n                    onClick={() => {\n                        edit("products", getValue() as string);\n                    }}\n                >\n                    Edit\n                </button>\n            </div>\n        );\n    },\n},\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<thead/>")," element with the following code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<thead>\n    {getHeaderGroups().map((headerGroup) => (\n        <tr key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n                <th key={header.id}>\n                    <div onClick={header.column.getToggleSortingHandler()}>\n                        {!header.isPlaceholder &&\n                            flexRender(\n                                header.column.columnDef.header,\n                                header.getContext(),\n                            )}\n                        {{\n                            asc: " \ud83d\udd3c",\n                            desc: " \ud83d\udd3d",\n                        }[header.column.getIsSorted() as string] ?? null}\n                    </div>\n                    //highlight-start\n                    <div>\n                        {header.column.getCanFilter() && (\n                            <input\n                                value={\n                                    header.column.getFilterValue() as string\n                                }\n                                onChange={(e) => {\n                                    header.column.setFilterValue(\n                                        e.target.value,\n                                    );\n                                }}\n                                placeholder={`Search ${header.column.columnDef.header}`}\n                            />\n                        )}\n                    </div>\n                    //highlight-end\n                </th>\n            ))}\n        </tr>\n    ))}\n</thead>\n')),(0,r.kt)("p",{parentName:"li"},"In the above code, we have added a basic text input to the column header. When the user types in the input, the ",(0,r.kt)("inlineCode",{parentName:"p"},"setFilterValue")," method of the column will be called. This method will set the filter value of the column."),(0,r.kt)("p",{parentName:"li"},"Previous step, we have also added a ",(0,r.kt)("inlineCode",{parentName:"p"},"enableColumnFilter")," property to the column definition. This property will be used to determine whether the column should have a filter input or not by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"getCanFilter")," method of the column."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",null,"How can I change the filter operator?")),(0,r.kt)("p",null,'By default, filter operator is "eq" for columns. You can change the filter operator by passing the ',(0,r.kt)("inlineCode",{parentName:"p"},"filterOperator")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta"),' in column definition. For example, you can change the filter operator to "eq" like below:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    title: "Category",\n    dataIndex: "category",\n    //highlight-start\n    meta: {\n        filterOperator: "eq",\n    },\n    //highlight-end\n},\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",null,"How can I disable filtering for a specific column?")),(0,r.kt)("p",null,"You can disable filtering for a specific column by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"enableColumnFilter")," property of the column to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the column definition like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    title: "Category",\n    dataIndex: "category",\n    //highlight-next-line\n    enableColumnFilter: false,\n},\n'))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Checklist"},(0,r.kt)(h,{id:"add-search-and-filters-headless",mdxType:"ChecklistItem"},"I added search and filters to the table.")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73638],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(i),g=a,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||r;return i?n.createElement(h,o(o({ref:t},c),{},{components:i})):n.createElement(h,o({ref:t},c))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=i[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4041:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>p});i(67294);var n=i(3905);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}const l={title:"git diff - Comparing Changes in Git",description:"We'll explore Git's 'git diff' which helps you track changes throughout your working directory, commits, and branches.",slug:"git-diff-command",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/social.png",hide_table_of_contents:!1},s=void 0,m={permalink:"/blog/git-diff-command",source:"@site/blog/2023-05-12-git-diff.md",title:"git diff - Comparing Changes in Git",description:"We'll explore Git's 'git diff' which helps you track changes throughout your working directory, commits, and branches.",date:"2023-05-12T00:00:00.000Z",formattedDate:"May 12, 2023",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:11.99,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"git diff - Comparing Changes in Git",description:"We'll explore Git's 'git diff' which helps you track changes throughout your working directory, commits, and branches.",slug:"git-diff-command",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/social.png",hide_table_of_contents:!1},prevItem:{title:"What is Vite? & Vite vs Webpack",permalink:"/blog/what-is-vite-vs-webpack"},nextItem:{title:"refine.new - Introducing the Fastest Way to Create refine Apps",permalink:"/blog/what-is-refine-new"},relatedPosts:[{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",permalink:"/blog/lighthouse-google-chrome",formattedDate:"August 31, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:14.68,date:"2022-08-31T00:00:00.000Z"},{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",permalink:"/blog/astro-js-guide",formattedDate:"June 12, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.27,date:"2023-06-12T00:00:00.000Z"},{title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",permalink:"/blog/git-switch-and-git-checkout",formattedDate:"December 20, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.44,date:"2022-12-20T00:00:00.000Z"}],authorPosts:[{title:"Zsh and Bash",description:"We'll explore the unique features of these tools and their similarities and differences.",permalink:"/blog/zsh-vs-bash",formattedDate:"July 14, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:15.725,date:"2023-07-14T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.145,date:"2022-11-13T00:00:00.000Z"},{title:"How to use Docker Build Args and Environment Variables",description:"A guide for using Docker Build Args to Configure Image Builds",permalink:"/blog/docker-build-args-and-env-vars",formattedDate:"September 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.31,date:"2022-09-28T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Usage of Git Diff",id:"basic-usage-of-git-diff",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Advantage Usage of Git Diff",id:"advantage-usage-of-git-diff",level:2},{value:"Git Diff using a regular expression:",id:"git-diff-using-a-regular-expression",level:2},{value:"Highlighting Diff Changes in one line",id:"highlighting-diff-changes-in-one-line",level:3},{value:"Git Diff Between two branches",id:"git-diff-between-two-branches",level:3},{value:"Git Diff Between two branches (Two Dots Method)",id:"git-diff-between-two-branches-two-dots-method",level:3},{value:"Git Diff Between two branches (Three Dots Method)",id:"git-diff-between-two-branches-three-dots-method",level:3},{value:"Git Diff Best Practices",id:"git-diff-best-practices",level:2},{value:"Git Diff Between staging area and working directory",id:"git-diff-between-staging-area-and-working-directory",level:3},{value:"Git Diff Between staging area and last commit",id:"git-diff-between-staging-area-and-last-commit",level:3},{value:"Git Diff Between two commits",id:"git-diff-between-two-commits",level:3},{value:"<strong>Compare Using Commit hash(any specific commits)</strong>",id:"compare-using-commit-hashany-specific-commits",level:4},{value:"<strong>Compare Using Head (Last two commits)</strong>",id:"compare-using-head-last-two-commits",level:4},{value:"Using Git Diff with other Git Commands",id:"using-git-diff-with-other-git-commands",level:2},{value:"Using Git Diff with Git Blame",id:"using-git-diff-with-git-blame",level:3},{value:"Conclusion",id:"conclusion",level:2}],d=(g="PromotionBanner",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var g;const h={toc:p};function f(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){a(e,t,i[t])}))}return e}({},h,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Git can be thrilling and, at the same time, intimidating as well. Don't worry, we are here to make things easier for you. Today, we're exploring Git's '",(0,n.kt)("inlineCode",{parentName:"p"},"git diff'")," command, which developers use on a daily basis."),(0,n.kt)("p",null," This powerful tool helps you track changes throughout your working directory, commits, and branches. We will cover everything from fundamental usage to advanced capabilities like using regular expressions, highlighting changes in one line, and branch comparison using two- and three-dots. Let's unravel git diff's mysteries!"),(0,n.kt)("p",null,"Steps we'll cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#basic-usage-of-git-diff"},"Basic Usage of Git Diff")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#basic-example"},"Basic Example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#advantage-usage-of-git-diff"},"Advantage Usage of Git Diff")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#git-diff-using-a-regular-expression"},"Git Diff using a regular expression")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#highlighting-diff-changes-in-one-line"},"Highlighting Diff Changes in one line")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#git-diff-best-practices"},"Git Diff Best Practices"))),(0,n.kt)("h2",{id:"basic-usage-of-git-diff"},"Basic Usage of Git Diff"),(0,n.kt)("p",null,"The git diff command shows the code changes between two commits or between the current repository and an earlier commit. This command displays changes indicated by file headers and metadata for changed files."),(0,n.kt)("p",null,"Specifically, this command allows you to accept two input data sets and output the differences between them. This command executes a diff function against a Git data source. It is commonly used in conjunction with git status and git log to analyze the condition of a git repository."),(0,n.kt)("p",null,"The syntax for the git diff command is as follows::"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"git diff")),(0,n.kt)("p",null,"The git diff command displays any uncommitted repository modifications by default."),(0,n.kt)("p",null,"We can view the lines that have been removed from our original file, as well as any lines that have been added or modified. ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff")," is frequently used to compare branches in a Git repository."),(0,n.kt)("h3",{id:"basic-example"},"Basic Example"),(0,n.kt)("p",null,"Let's create a simple test repository and compare changes between our working directory and the last commit using ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff"),":"),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic1.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic2.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explanation:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We will create a repository using \u201c",(0,n.kt)("inlineCode",{parentName:"p"},"mkdir"),"\u201d command.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now we will utilize cd command to move to the repository we created.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"By using the touch command, we will add and modify a test file with name \u201c",(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt"),"\u201d.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'We need to add content to the "',(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt"),'" file, so we have passed the string "This is a Tech Guide for git diff" to the text file.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'"',(0,n.kt)("inlineCode",{parentName:"p"},"git init"),'" command creates a blank Git repository - basically a .git directory.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'"',(0,n.kt)("inlineCode",{parentName:"p"},"git add testDiff.txt"),'" command will add testDiff.txt to the staging area. This is the area where the files will be added in the next commit.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In this step, we have committed our changes by using \u201c",(0,n.kt)("inlineCode",{parentName:"p"},"git commit"),"\u201d. When calling ",(0,n.kt)("inlineCode",{parentName:"p"},"git commi"),"t, it is required to include a message. The message should be a short description of the changes being committed. Through the option -am, you can add and create a message for the commit in one command."))),(0,n.kt)("p",null,"Note that If we execute git diff at this stage, there will be no result. This is perfectly fine, as there are no changes in the code repository to display."),(0,n.kt)("p",null,"Now we will change the contents of ",(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt")," file in our working directory to start experimenting with diff output:"),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic3.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"When we Execute this command, it will change the content of ",(0,n.kt)("inlineCode",{parentName:"li"},"testDiff.txt")," file. Once this file is modified, then we can be able to see the difference and analyze the output.")),(0,n.kt)("p",null,"Now let's execute \"",(0,n.kt)("inlineCode",{parentName:"p"},"git diff"),'" command and analyze the results:'),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic4.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explanation:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'It tells us which files are being compared in the diff. We are comparing the "',(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"testDiff.txt")),'" file in the current version of the code to the "',(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"testDiff.txt"),'"')," file in the last committed version of our code.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A \u2013 Old version of the file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"B \u2013 New version of the file"))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This line shows some internal Git metadata. The numbers in this output match to Git object version hash identifiers. ",(0,n.kt)("strong",{parentName:"p"},"100644"),"\xa0is an internal file mode identifier.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A diff doesn't show the whole file. It shows only modified lines. It is standard naming convention that Git assigns a minus sign (-) to the A variant of the file and a plus sign (+) to the B variant of the file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The fourth line shows the symbol @@ followed by -1 +1. These are called 'hunks' in Git terminology. Hunks in a ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff")," provide a summary of the changes. In our example, -1 +1 implies that the changes started from the first line in both the original file and the new state, with a default context range of one line, indicating that one line has been altered."))),(0,n.kt)("hr",null),(0,n.kt)(d,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"advantage-usage-of-git-diff"},"Advantage Usage of Git Diff"),(0,n.kt)("h2",{id:"git-diff-using-a-regular-expression"},"Git Diff using a regular expression:"),(0,n.kt)("p",null,"We can use the git diff command with the regular expression to highlight only specific changes that match the regular expression in the difference between the current version with the previous version."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Syntax:"))," ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff --word-diff-regex=\\<regex here\\>")),(0,n.kt)("p",null,'For example, we have made a most recent change in our "',(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt"),'" file by adding a line "',(0,n.kt)("em",{parentName:"p"},"The current feature we are testing is the ",(0,n.kt)("inlineCode",{parentName:"em"},"git diff")," with regular expression"),'." Now, we will execute the command with the regex "Regular". The output should highlight the specific change provided to regex in the difference from the previous version.'),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic5.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explanation"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This is the difference in content from the last commit; this content is currently in the staging area.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This is the highlighted change that matches the regular expression in the content differences between the previous and current versions."))),(0,n.kt)("h3",{id:"highlighting-diff-changes-in-one-line"},"Highlighting Diff Changes in one line"),(0,n.kt)("p",null,"Another helpful option is ",(0,n.kt)("inlineCode",{parentName:"p"},"--color-words"),'. Instead of the "classic" display mode in diffs, sometimes we are interested only in viewing the exact words that have changed instead of viewing entire lines.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Syntax:"))," ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff --color-words")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic6.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explanation"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Now the changes can be seen in one line only. The word in red depicts that it has been deleted from the original file.")),(0,n.kt)("h3",{id:"git-diff-between-two-branches"},"Git Diff Between two branches"),(0,n.kt)("p",null,"Often, we are interested in finding the differences between the two branches. There are two ways to achieve this in Git. The first method involves running the '",(0,n.kt)("inlineCode",{parentName:"p"},"git diff"),"' command with two dots between the branch names, and the second method uses three dots instead."),(0,n.kt)("h3",{id:"git-diff-between-two-branches-two-dots-method"},"Git Diff Between two branches (Two Dots Method)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Syntax:"))," ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff branch1..branch2")),(0,n.kt)("p",null,"This will show you all of the commits that ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"branch2"))," has that ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"branch1"))," doesn't have."),(0,n.kt)("p",null,"For example, we have two branches: ",(0,n.kt)("strong",{parentName:"p"},"Main")," & ",(0,n.kt)("strong",{parentName:"p"},"Feature")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic7.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"Now we will Check the difference between the two branches by using the following command: ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff main..feature")),(0,n.kt)("p",null,'Both branches have a file "',(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt"),'", but with the different content'),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic8.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"This command checks the difference between the tips of the two branches (HEAD). Besides, it will show you what's different between the two branches."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explanation:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"A version"),': The main branch contains "',(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt"),'\u201d file with the content "This content is present in the main branch".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"B version"),': Feature Branch contains "',(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt"),'" file with the content "This content is present in feature branch".'))),(0,n.kt)("p",null,"Here is a visual explanation of evaluating the difference between the main branch and the feature branches using the two dots command:"),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic9.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"git-diff-between-two-branches-three-dots-method"},"Git Diff Between two branches (Three Dots Method)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Syntax:"))," ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff branch1...branch2")),(0,n.kt)("p",null,"Three dot diff shows changes between revisions A and revision B starting at the last common commit. This is useful for viewing pull request diffs. ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff")," with 3 dots compares the latest commit on your feature branch with that common ancestor commit, which is essentially the point from where you branched off to create your feature."),(0,n.kt)("p",null,"For example, we have two branches: ",(0,n.kt)("strong",{parentName:"p"},"Main")," & ",(0,n.kt)("strong",{parentName:"p"},"Feature,")," but before creating these branches and coming to the branch comparison section, we were on ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff")," Between staging area and last commit\" section, so the common ancestor commit was about staging area. Let's execute the 3 dot command to check the difference."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic10.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explanation:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"A version"),": This was the last commit we made before creating the feature branch, and it is the common ancestor between the main and feature command.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"B version"),": This says that the only difference between the main and the feature is the new line I added in the testDiff.txt file of the feature branch."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Find below an illustration that shows how to check the difference between the main and feature branches using the above command (3 Dots):")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic11.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"git-diff-best-practices"},"Git Diff Best Practices"),(0,n.kt)("h3",{id:"git-diff-between-staging-area-and-working-directory"},"Git Diff Between staging area and working directory"),(0,n.kt)("p",null,"We can also compare our changes in the working directory with the changes added in the staging area. For this purpose, we can use the following command:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"git diff")),(0,n.kt)("p",null,"Let me give you an example by adding the change to the staging area and then modifying the same file in the working directory to compare the changes between the staging area and the working directory:"),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic12.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,'Added the content in file "',(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt"),'" for staging area.'),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic13.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,'Now move the changes to the staging area by using the command "',(0,n.kt)("inlineCode",{parentName:"p"},"git add"),'"'),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic14.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'For comparison, now we will make a change in "',(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt"),'" which is in the working directory.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'By executing the command "',(0,n.kt)("inlineCode",{parentName:"p"},"git diff"),'" we will get the comparison result of the staging area and working directory.'))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Red"),": Represent the content that was added in the staging area"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Green"),": Represent the content that was changed in the working directory."),(0,n.kt)("h3",{id:"git-diff-between-staging-area-and-last-commit"},"Git Diff Between staging area and last commit"),(0,n.kt)("p",null,"Suppose you're about to lock in your changes with a commit. But wait, you want to see what differences there are between the changes you've staged and the most recent commit, right? No problem at all! By simply tacking on the '",(0,n.kt)("inlineCode",{parentName:"p"},"--staged"),"' flag, you'll be able to make this comparison in a snap."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Syntax:"))," ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff \u2013staged")),(0,n.kt)("p",null,"Now let me explain it through an example:"),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic15.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explanation:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'We have added a new line to the existing file "',(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt"),'".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Here we have added our changes to the staging area."))),(0,n.kt)("p",null,"Now, we will execute the command ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff \u2013staged")," to view the difference between the staging area and the last commit."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic16.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explanation:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"A version"),': last commit containing the line "This is the diff we are adding to the file" in testDiff.txt.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"B version"),': Staging area which differed from the last commit with a new line "Adding this new change for staging area" in testDiff.txt.'))),(0,n.kt)("h3",{id:"git-diff-between-two-commits"},"Git Diff Between two commits"),(0,n.kt)("p",null,"If you're aiming to compare files between two specific Git commits, all you need to do is specify the 'ref' that points to the commits you're interested in. A 'ref' could be a commit hash or even 'HEAD', which represents the current branch you're working on."),(0,n.kt)("h4",{id:"compare-using-commit-hashany-specific-commits"},(0,n.kt)("strong",{parentName:"h4"},"Compare Using Commit hash(any specific commits)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Syntax:"))," ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff \\<commit_hash\\> \\<commit_hash\\>")),(0,n.kt)("p",null,"Now we need to fetch the hashes of the commits we want to compare using ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff"),'. For that purpose, we will use another command "',(0,n.kt)("inlineCode",{parentName:"p"},"git log --pretty=oneline"),'".'),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic17.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"Let's assume we are going to compare these two commits ","[","hashes above in ",(0,n.kt)("strong",{parentName:"p"},"1 & 2"),"]",". We will execute the following command:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"git diff 21d752987e7f507494439a599a02a105039b4125 60b1649d99710436fb56991b1120736d5e33c63e")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic18.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"By executing this command, we'll be comparing two distinct commits. The output will display the differences between these two instances, effectively showing us what has changed within the files."),(0,n.kt)("h4",{id:"compare-using-head-last-two-commits"},(0,n.kt)("strong",{parentName:"h4"},"Compare Using Head (Last two commits)")),(0,n.kt)("p",null,"If you want to find the differences between the two most recent commits, you will use the following command:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Syntax:"))," ",(0,n.kt)("inlineCode",{parentName:"p"},"git diff HEAD HEAD~1")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic19.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"This command will compare the most recent commit (HEAD) with the commit before it (HEAD~1). The output will show you the differences between the two commits."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explanation:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"(HEAD)")," represent the most recent commit")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"(HEAD~1)")," represent the commit before ",(0,n.kt)("strong",{parentName:"p"},"(HEAD)")))),(0,n.kt)("h2",{id:"using-git-diff-with-other-git-commands"},"Using Git Diff with other Git Commands"),(0,n.kt)("h3",{id:"using-git-diff-with-git-blame"},"Using Git Diff with Git Blame"),(0,n.kt)("p",null,"We previously delved into how we can use '",(0,n.kt)("inlineCode",{parentName:"p"},"git diff"),"' with Git hashes to compare two specific commits. However, remembering the exact hashes of the commits we want to compare can be tricky. That's where '",(0,n.kt)("inlineCode",{parentName:"p"},"Git blame"),"' comes in handy. We can use it to retrieve the hashes of the commits we're interested in and then use 'git diff' to draw a comparison."),(0,n.kt)("p",null,"For example, we want to see the commit hash, author, and timestamp for the last change made to \u201c",(0,n.kt)("inlineCode",{parentName:"p"},"testDiff.txt"),"\u201d file."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic20.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"You can use commit hash to compare different commits using git Diff (Sample Below)."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-12-git-diff/pic21.png",alt:"react admin template 1"})),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://discord.gg/refine"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this article, the '",(0,n.kt)("inlineCode",{parentName:"p"},"git diff"),"' command was thoroughly examined. We've tried to uncover all the different commands for maximum utilization, from basics to advanced tricks to best practices. '",(0,n.kt)("inlineCode",{parentName:"p"},"git diff"),"' is just one command in Git's enormous ocean. Don't be afraid to try out all the coding examples provided in this article. "),(0,n.kt)("p",null,"After all, the more tools in your developer's kit, the better prepared you'll be to handle different challenges coming your way. Keep coding, and keep exploring different Git articles on our blog."))}f.isMDXComponent=!0}}]);
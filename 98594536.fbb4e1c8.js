(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{172:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return u})),o.d(t,"default",(function(){return h}));var n=o(1),a=o(9),i=(o(0),o(212)),r=o(213),l={id:"Tutorial_01",title:"Tutorial 1: Trying out the examples"},c={id:"Tutorials/Tutorial_01",title:"Tutorial 1: Trying out the examples",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Tutorials\\Tutorial_01.mdx",permalink:"/docs/Tutorials/Tutorial_01",sidebar:"docs",previous:{title:"Lowering Memory Usage with Partial Framebuffer",permalink:"/docs/Development/UIDevelopment/Scenarios/LoweringMemoryUsage"},next:{title:"Tutorial 2: Creating your own application",permalink:"/docs/Tutorials/Tutorial_02"}},u=[{value:"Getting started",id:"getting-started",children:[]},{value:"Running an example using the TouchGFX Simulator",id:"running-an-example-using-the-touchgfx-simulator",children:[]},{value:"Running an example on an STM32 Evaluation Kit",id:"running-an-example-on-an-stm32-evaluation-kit",children:[]}],p={rightToc:u},s="wrapper";function h(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)(s,Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Follow this tutorial to learn the very basics of TouchGFX. You will see how to install TouchGFX and how to run the provided examples on the TouchGFX Simulator and on an STM32 Evaluation Kit."),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("p",null,"First of all make sure you have the TouchGFX Designer installed. Read more on how to download and install TouchGFX ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Introduction/Installation"}),"here"),"."),Object(i.b)("h2",{id:"running-an-example-using-the-touchgfx-simulator"},"Running an example using the TouchGFX Simulator"),Object(i.b)("p",null,"TouchGFX has a lot of UI examples available through the Designer. These examples can help you learn more about specific TouchGFX topics, as they all focus on one particular TouchGFX Topic or widget. "),Object(i.b)("p",null,"You can use the examples as starting points for your own projects or use them as reference examples. The examples can run either on your PC using the TouchGFX Simulator, on a STM32 Evaluation Kit or even on your custom STM32 based hardware. "),Object(i.b)("p",null,'To create a new example project simply select "File/New" in the top bar menu in the Designer. Click the "Change" button in the "UI Template" section to select between all the available examples:'),Object(i.b)(r.a,{imageSource:"/img/Tutorials/tutorial01/selecting_a_UI_Template.png",caption:"Selecting a UI Template",mdxType:"Figure"}),Object(i.b)("p",null,'For this step in the tutorial we will try out the examples in the Simulator, so leave the "Application Template" unchanged (selecting the "Simulator" Application Template).'),Object(i.b)("p",null,'The TouchGFX Designer will now show you a window with the available UI examples. Click the "Matching UI Template" tab and select an example. Here we select the AnimatedImage example. Click the blue "Select" button in the bottom when you have selected.'),Object(i.b)(r.a,{imageSource:"/img/Tutorials/tutorial01/selecting_animatedImage.png",caption:"Selecting AnimatedImage example",mdxType:"Figure"}),Object(i.b)("p",null,'After you have clicked "Select", the TouchGFX Designer is ready to create a project for you. Here we have given the project the name "MyAnimatedImageExample".'),Object(i.b)(r.a,{imageSource:"/img/Tutorials/tutorial01/creating_the_project.png",caption:"Creating the project",mdxType:"Figure"}),Object(i.b)("p",null,'Click "Create" to create the project. The TouchGFX Designer will now combine the UI Template you selected with the Simulator Application Template to create a complete project. This process can last up to 10-20 seconds, depending on your download speed.'),Object(i.b)("p",null,"In the next step of this tutorial we will see how to select another Application Template."),Object(i.b)("p",null,'The TouchGFX Designer is now showing the combined project. To run the Windows simulator, click the "Run Simulator" button in the upper right part.'),Object(i.b)(r.a,{imageSource:"/img/Tutorials/tutorial01/the_project_is_ready.png",caption:"The project is ready",mdxType:"Figure"}),Object(i.b)("p",null,'The TouchGFX Simulator is now showing as a normal Windows application. The titlebar shows the application name. Click the "start" button to interact with the example.'),Object(i.b)(r.a,{imageSource:"/img/Tutorials/tutorial01/the_touchgfx_simulator.png",caption:"The TouchGFX Simulator",mdxType:"Figure"}),Object(i.b)("p",null,"Before moving on with the tutorial you can try out some more examples if you want. Just create a new project and select a new UI Template as before."),Object(i.b)("h2",{id:"running-an-example-on-an-stm32-evaluation-kit"},"Running an example on an STM32 Evaluation Kit"),Object(i.b)("p",null,"In this step you will learn how to start a project for a STM32F746-Disco board and how to run one of the TouchGFX example on that board. If you have no STM32 Evaluation Kit you can simply skip this step. If you have a different SMT32 Evaluation Kit have a look at the list of supported boards and see if you can find it there."),Object(i.b)("p",null,'The TouchGFX Designer comes with a list of premade Application Templates that matches a wide range of STM32 Evaluation Kit. To base your project on such a template, start out by creating a new project in TouchGFX Designer, by clicking "File/New" in the top bar menu or CTRL-n on your keyboard.'),Object(i.b)("p",null,'Select the Animated Image example as UI Template (if it is not already selected). Click the Application Template section to select another Application Template. The default Application Template "Simulator" will only allow you to run on Windows. '),Object(i.b)(r.a,{imageSource:"/img/Tutorials/tutorial01/selecting_an_app_template.png",caption:"Selecting an Application Template",mdxType:"Figure"}),Object(i.b)("p",null,'For this step we will use the STM32F846-Disco board, so click on the "STM32F746G Discovery Kit" and click "Select".'),Object(i.b)(r.a,{imageSource:"/img/Tutorials/tutorial01/select_disco_kit.png",caption:"Select Discovery kit",mdxType:"Figure"}),Object(i.b)("p",null,'You are now ready to create the project. You can change the application name if you like. Here we have changed it to MyAnimatedImageExample746. Click the "Create" button to continue.'),Object(i.b)(r.a,{imageSource:"/img/Tutorials/tutorial01/create_the_final_project.png",caption:"Create the project",mdxType:"Figure"}),Object(i.b)("p",null,'The look of the project is similar to what we saw in the previous step. The only difference is that we now also have a "Run Target" button next to the "Run Simulator" button. When you press this button, the TouchGFX Designer compiles your project using the GNU ARM C-compiler and flashes the application to your target. This process takes up to a minute, depending on your computer speed. The progress will be outputtet in the status bar in the bottom of the Designer. You can press the "Detailed Log" button if you want more details on the build and flashing step. '),Object(i.b)(r.a,{imageSource:"/img/Tutorials/tutorial01/the_project_is_ready_2.png",caption:"The project is ready",mdxType:"Figure"}),Object(i.b)("p",null,'The TouchGFX Designer will write "Flashing Done" in the status bar, when flashing is completed. You should now see the application running on your board. Please not that you will need to have Cube Programmer / ST-Link Utility installed as described in the installation step for this to succeed.'),Object(i.b)("p",null,'If you click the "Browse Code" button in the bottom right, TouchGFX Designer will open a file browser showing the directory where the new project is located. Navigating to "build\\bin" you can see the following files:'),Object(i.b)(r.a,{imageSource:"/img/Tutorials/tutorial01/the_projects_binary_files.png",caption:"The project\xb4s binary files",mdxType:"Figure"}),Object(i.b)("p",null,'The "simulator.exe" file is the Windows simulator application.\nThe "target.hex" file is the STM32 application for your board. This is the file the TouchGFX Designer just programmed to your board.'),Object(i.b)("p",null,"You can manually flash your board using Cube Programmer or ST-Link Utility. ###TODO insert link to article on how to manually program a board."),Object(i.b)("p",null,"###TODO Write"))}h.isMDXComponent=!0},212:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return b}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(o),h=n,g=s["".concat(r,".").concat(h)]||s[h]||m[h]||i;return o?a.a.createElement(g,l({ref:t},u,{components:o})):a.a.createElement(g,l({ref:t},u))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:n,r[1]=l;for(var u=2;u<i;u++)r[u]=o[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}g.displayName="MDXCreateElement"},213:function(e,t,o){"use strict";var n=o(5),a=o(0),i=o.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,o=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("img",{width:t,height:o,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("img",{width:t,height:o,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=r}}]);
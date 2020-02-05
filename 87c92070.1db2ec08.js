(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(9),i=(n(0),n(210)),o=n(213),s=n(214),c=n(211),l={id:"EmbeddedGraphics",title:"Embedded Graphics Primer"},d={id:"BasicConcepts/EmbeddedGraphics",title:"Embedded Graphics Primer",description:"import Link from '@docusaurus/Link';",source:"@site/docs\\BasicConcepts\\EmbeddedGraphics.mdx",permalink:"/docs/BasicConcepts/EmbeddedGraphics",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/Introduction/Installation"},next:{title:"Graphics Engine",permalink:"/docs/BasicConcepts/GraphicsEngine"}},p=[{value:"The four parts",id:"the-four-parts",children:[{value:"TODO SMM improve figure by using icons for mcu, display, flash, ram from folder/website, or introduce icons",id:"todo-smm-improve-figure-by-using-icons-for-mcu-display-flash-ram-from-folderwebsite-or-introduce-icons",children:[]},{value:"TODO SMM internal and external ram and flash is not well represented in the figure",id:"todo-smm-internal-and-external-ram-and-flash-is-not-well-represented-in-the-figure",children:[]},{value:"MCU",id:"mcu",children:[]},{value:"RAM",id:"ram",children:[]},{value:"Flash",id:"flash",children:[]},{value:"Display",id:"display",children:[]}]}],h={rightToc:p},u="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(u,Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Graphics is ultimately about getting something to show up on a physical display. Fast.")),Object(i.b)("p",null,"The term embedded graphics means many things."),Object(i.b)("p",null,"First of, the word embedded means different things to different people.\nTo some an embedded system means a very dependable old 8 bit microcontroller, with no operating system, and virtually no RAM, ROM or GPIO.\nTo others it might mean a modern day smart phone with gigabytes of everything.  "),Object(i.b)("p",null,"Secondly, the word graphics has many interpretations.\nTo some it means drawing your own pixels in your favourite painting program.\nTo others again it means the 3D rendering software running on your gaming console."),Object(i.b)("p",null,"To TouchGFX embedded systems mean any system based on an STM32 microcontroller.\nAnd graphics means interactive applications running at 60 frames per second."),Object(i.b)("h2",{id:"the-four-parts"},"The four parts"),Object(i.b)("p",null,"In order to do graphics applications on such platforms, we consider four main components directly involved.\nNaturally many more components might be present in an embedded system, but these are less related to the display of graphics."),Object(i.b)("h3",{id:"todo-smm-improve-figure-by-using-icons-for-mcu-display-flash-ram-from-folderwebsite-or-introduce-icons"},"TODO SMM improve figure by using icons for mcu, display, flash, ram from folder/website, or introduce icons"),Object(i.b)("h3",{id:"todo-smm-internal-and-external-ram-and-flash-is-not-well-represented-in-the-figure"},"TODO SMM internal and external ram and flash is not well represented in the figure"),Object(i.b)(c.a,{imageSource:"/img/BasicConcepts/four_parts.svg",caption:"MCU, RAM, Flash and display",noShadow:"true",width:480,mdxType:"Figure"}),Object(i.b)("p",null,"In short, TouchGFX, using the MCU, creates and updates an image in RAM, by assembling parts from flash. The assembled image is transferred to the display. This process is repeated as often as possible and needed."),Object(i.b)("h3",{id:"mcu"},"MCU"),Object(i.b)("p",null,"The MCU is doing all the heavy lifting in this process.\nIt reads images in flash and writes them to RAM.\nIt calculates the resulting colors when merging a semi-transparent red text onto an image and saves these to RAM.\nIt renders and stores all the pixels of a circle to RAM.\nAnd so on."),Object(i.b)("p",null,"STM32 MCUs have specific capabilities, like Chrom-ART, Chrom-GRC, ..., that help in the realization of graphics.\nSee the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Development/HardwareSelection/HardwareComponents/HardwareSelectionMCU"}),"guide for selecting the right MCU"),". "),Object(i.b)("h3",{id:"ram"},"RAM"),Object(i.b)("p",null,"RAM is where the calculated image is stored.\nThe RAM is being read and written by the MCU.\nAnd read again when the resulting image is transferred to the display."),Object(i.b)("p",null,"In many cases the RAM is internal to the MCU.\nIn cases where it is not feasible to have the resulting image (",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"Framebuffer"}),"framebuffer"),") in internal RAM, external RAM can be added to the setup."),Object(i.b)("h3",{id:"flash"},"Flash"),Object(i.b)("p",null,"Flash is where all static data is placed. Images, fonts and texts.\nThe flash is read by the MCU and the contents written to or combined with the RAM."),Object(i.b)("p",null,"Most often an external flash is added to the setup, as the internal flash is seldomly large enough to hold all graphics assets."),Object(i.b)("p",null,"Ideally the flash is memory mapped, such that pixels can be read directly from the flash and written to RAM. Otherwise, when the flash is not memory mapped, the contents of the flash can be transferred to RAM and then read from there instead. "),Object(i.b)("h3",{id:"display"},"Display"),Object(i.b)("p",null,"The display is where the image is actually displayed to the eyes of a person."),Object(i.b)("p",null,"The image stored in RAM is sent by the MCU to the display at regular intervals. "),Object(i.b)(s.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,"See ",Object(i.b)(o.a,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32-bit Arm Cortex MCUs")," for available STM32 microcontrollers."),Object(i.b)("li",null,"See ",Object(i.b)(o.a,{to:"/docs/Development/HardwareSelection/HardwareComponents/HardwareSelectionDisplay",mdxType:"Link"},"Display")," for details on the possible display choices."),Object(i.b)("li",null,"See ",Object(i.b)(o.a,{to:"/docs/Development/HardwareSelection/HardwareComponents/HardwareSelectionMCU",mdxType:"Link"},"MCU")," for details on the possible MCU choices."),Object(i.b)("li",null,"TODO find the right links, either to main section or flash and ram also.")))}m.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(o,".").concat(h)]||p[h]||u[h]||i;return n?a.a.createElement(m,s({ref:t},l,{components:n})):a.a.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},211:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=o},212:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return i.a.createElement("div",{class:e},i.a.createElement("div",{class:"highlight-heading"},i.a.createElement("h5",null,i.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.a.createElement("div",{class:"highlight-content"},this.props.children))},t}(a.Component);t.a=o},213:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n.n(a),o=n(34),s=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,c=e.href,l=n||c,d=s.test(l),p=Object(a.useRef)(!1),h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(a.useEffect)((function(){return!h&&d&&window.docusaurus.prefetch(l),function(){h&&t&&t.disconnect()}}),[l,h,d]),l&&d?i.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(l),p.current=!0)},innerRef:function(e){var n,r;h&&e&&d&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):i.a.createElement("a",Object(r.a)({},e,{href:l}))}},214:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=n(212),s=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:s},this.props.children)},t}(a.Component);t.a=c}}]);
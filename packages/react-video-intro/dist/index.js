!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.React);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./dist",r(r.s=5)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoIntroProvidier=t.useVideoIntroState=void 0;const u=i(r(0)),l=u.createContext(void 0);t.useVideoIntroState=()=>u.useContext(l),t.VideoIntroProvidier=e=>{const{playbackRate:t,tabs:r,onComplete:n,onSkipped:o,children:i}=e,c=a(e,["playbackRate","tabs","onComplete","onSkipped","children"]),[s,d]=u.useState(),[f,p]=u.useState(0),[b,y]=u.useState(0),[v,h]=u.useState(!1),m=r[b],O=m.url,_=b+1<r.length,g=b>0,j=u.useCallback(()=>{if(s){const e=s.played,t=e.end(e.length-1)==s.duration;!v&&t&&h(!0),p(s.currentTime)}},[s,v]),P=Object.assign({playbackRate:t,tabIndex:b+1,totalTabs:r.length,hasNext:_,handleNext:()=>{_&&y(e=>e+1)},hasPrevious:g,handlePrevious:()=>{g&&y(e=>e-1)},handleSkip:()=>{o?o():n()},currentTab:m,currentUrl:O,video:s,handleVideo:d,handleVideoTimeUpdate:j,program:m.program,loopCompleted:v,time:f},c);return u.default.createElement(l.Provider,{value:P},i)},t.VideoIntroProvidier.defaultProps={playbackRate:1,height:"auto",width:500,videoHeight:"70%",videoWidth:"100%"}},function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoPlayer=void 0;const i=o(r(0)),a=r(1),u=r(3);t.VideoPlayer=()=>{const{currentTab:e,height:t,width:r,videoWidth:o,videoHeight:c,playbackRate:s,style:d,handleVideo:f,video:p,program:b,tabIndex:y,showControls:v,handleVideoTimeUpdate:h}=a.useVideoIntroState(),m=u.useDriverState(b,p),O=d||{},{component:_}=m,g=n(m,["component"]),j=l(g);return i.default.createElement("div",{key:y,style:Object.assign({display:"flex",flexDirection:"column",width:r,height:t},O)},i.default.createElement("div",{style:{position:"relative",overflow:"hidden"}},i.default.createElement("video",{width:o,height:c,autoPlay:!0,loop:!0,controls:v,style:j,onTimeUpdate:h,onLoadedMetadata:e=>{(e=>{e&&(e.playbackRate=s,f(e))})(e.currentTarget)}},e.url&&i.default.createElement("source",{src:e.url})),i.default.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,pointerEvents:"none"}},_)),e.content)};const l=e=>{const{scale:t}=e,r=n(e,["scale"]);if(void 0===t)return r;const o=`scale(${t})`;return Object.assign({transform:o},r)}},function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.useDriverState=void 0;const o=r(0),i=r(4),a=r(1);t.useDriverState=(e,t)=>{const[r,n]=o.useState(u(e)),c=o.useRef(),{loopCompleted:s}=a.useVideoIntroState(),d=(r,o)=>{if(!t||!e)return;const a=t.currentTime,u=i.getStep(e,a,!!o);u&&(t.playbackRate=void 0!==u.playbackRate?u.playbackRate:1,u!==r&&n(l(u)),c.current=requestAnimationFrame(()=>d(u,o)))};return o.useEffect(()=>(e&&t&&(c.current=requestAnimationFrame(()=>d(void 0,s))),()=>cancelAnimationFrame(c.current)),[e,t,s]),r};const u=e=>{if(!e||!e.steps.length)return{scale:1};const t=e.steps[0];return l(t)},l=e=>{const{start:t,end:r}=e;return n(e,["start","end"])}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStep=void 0,t.getStep=(e,t,r)=>(r?e.steps.filter(e=>!1!==e.loop):e.steps).find(e=>t>=e.start&&void 0===e.end||t<e.end)},function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(6),t),o(r(2),t),o(r(1),t),o(r(4),t),o(r(3),t)},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoIntro=void 0;const o=n(r(0)),i=r(2),a=r(1);t.VideoIntro=e=>o.default.createElement(a.VideoIntroProvidier,Object.assign({},e),o.default.createElement(i.VideoPlayer,null))}])}));
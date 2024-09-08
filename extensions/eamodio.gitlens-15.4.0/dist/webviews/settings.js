var t={d:(e,i)=>{for(var o in i)t.o(i,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:i[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};void 0!==t&&Object.defineProperty(t,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(t){return"#{root}/dist/webviews/"}},set:function(t){}});var e={};t.d(e,{R:()=>SettingsApp});class IpcCall{constructor(t,e,i=!1,o=!1){this.scope=t,this.reset=i,this.pack=o,this.method=`${t}/${e}`}is(t){return t.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const i=new IpcCommand("core","webview/ready"),o=new IpcCommand("core","webview/focus/changed"),s=(new IpcCommand("core","command/execute"),new IpcCommand("core","configuration/update")),r=(new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange")),a=new IpcNotification("core","configuration/didChange");const l="settings",c=new class IpcRequest extends IpcCall{constructor(t,e,i,o){super(t,e,i,o),this.response=new IpcNotification(this.scope,`${e}/completion`,this.reset,this.pack)}}(l,"configuration/preview"),h=new IpcNotification(l,"didOpenAnchor"),p=new IpcNotification(l,"didChangeAccount"),d=new IpcNotification(l,"didChangeConnectedJira");function u(t,e,i){let o,s,r,a,l;function c(t){const i=t-(s??0);return null==s||i>=e||i<0}function h(){const t=Date.now();if(c(t))p();else{l=setTimeout(h,e-(t-(s??0)))}}function p(){return l=void 0,o?function(){const e=o,i=r;return o=r=void 0,a=t.apply(i,e),a}():(o=void 0,r=void 0,a)}function d(...t){const p=Date.now(),d=c(p);return o=null!=i&&o?i(o,t):t,r=this,s=p,d&&null==l?(l=setTimeout(h,e),a):(null==l&&(l=setTimeout(h,e)),a)}return d.cancel=function(){null!=l&&clearTimeout(l),o=void 0,s=void 0,r=void 0,l=void 0},d.flush=function(){return null==l?a:(clearTimeout(l),p())},d.pending=function(){return null!=l},d}const g=",",m="=",f="{",v="(",y=")",w=/\(([\s\S]*)\)/,C=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,_=/\s?=.*$/;function S(t){const e=.001*performance.now();let i=Math.floor(e),o=Math.floor(e%1*1e9);return void 0!==t&&(i-=t[0],o-=t[1],o<0&&(i--,o+=1e9)),[i,o]}const $=500;function x(){let t=0;return{get current(){return t},next:function(){return 1073741823===t&&(t=0),++t}}}const P=x(),A=new Map;function D(t){A.delete(t)}function T(t,e){return null==e?`[${t.toString(16).padStart(13)}]`:`[${e.toString(16).padStart(5)} → ${t.toString(16).padStart(5)}]`}function E(t,e){if(null!=e&&"boolean"!=typeof e)return{scopeId:e.scopeId,prevScopeId:e.prevScopeId,prefix:`${e.prefix}${t}`};const i=e?P.current:void 0,o=P.next();return{scopeId:o,prevScopeId:i,prefix:`${T(o)} ${t}`}}Error;function O(t){return null!=t&&(t instanceof Promise||"function"==typeof t?.then)}Error;var F=(t=>(t[t.Hash=35]="Hash",t[t.Slash=47]="Slash",t[t.Digit0=48]="Digit0",t[t.Digit1=49]="Digit1",t[t.Digit2=50]="Digit2",t[t.Digit3=51]="Digit3",t[t.Digit4=52]="Digit4",t[t.Digit5=53]="Digit5",t[t.Digit6=54]="Digit6",t[t.Digit7=55]="Digit7",t[t.Digit8=56]="Digit8",t[t.Digit9=57]="Digit9",t[t.Backslash=92]="Backslash",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.Z=90]="Z",t[t.a=97]="a",t[t.b=98]="b",t[t.c=99]="c",t[t.d=100]="d",t[t.e=101]="e",t[t.f=102]="f",t[t.z=122]="z",t))(F||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"])),Object.freeze({codeSuggest:"https://gitkraken.com/solutions/code-suggest?utm_source=gitlens-extension&utm_medium=in-app-links",cloudPatches:"https://gitkraken.com/solutions/cloud-patches?utm_source=gitlens-extension&utm_medium=in-app-links",graph:"https://gitkraken.com/solutions/commit-graph?utm_source=gitlens-extension&utm_medium=in-app-links",launchpad:"https://gitkraken.com/solutions/launchpad?utm_source=gitlens-extension&utm_medium=in-app-links",platform:"https://gitkraken.com/devex?utm_source=gitlens-extension&utm_medium=in-app-links",pricing:"https://gitkraken.com/gitlens/pricing?utm_source=gitlens-extension&utm_medium=in-app-links",proFeatures:"https://gitkraken.com/gitlens/pro-features?utm_source=gitlens-extension&utm_medium=in-app-links",security:"https://help.gitkraken.com/gitlens/security?utm_source=gitlens-extension&utm_medium=in-app-links",workspaces:"https://gitkraken.com/solutions/workspaces?utm_source=gitlens-extension&utm_medium=in-app-links",cli:"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links",browserExtension:"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links",desktop:"https://gitkraken.com/git-client?utm_source=gitlens-extension&utm_medium=in-app-links",releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:"https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?utm_source=gitlens-extension&utm_medium=in-app-links"});const{fromCharCode:B}=String;new TextEncoder;function U(t){const[e,i]=S(t);return 1e3*e+Math.floor(i/1e6)}function W(t,e,i){if(null==i)return`${e} ${t}${1===e?"":"s"}`;const o=1===e?t:i.plural??`${t}s`;return i.only?o:`${0===e?i.zero??e:i.format?.(e)??e}${i.infix??" "}${o}`}const z=Symbol("logInstanceNameFn");function G(t){return function(t,e=!1){let i,o,s,r,a,l=0,c=!1,h=!1,p=!0;null!=t&&({args:i,if:o,enter:s,exit:r,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:p=!0}=t);l>0&&(h=!0,p=!0);p&&(c=!0);const d=q.isDebugging,u=e?q.debug:q.log,x=d?"debug":"info";return(t,e,E)=>{let F,B;if("function"==typeof E.value?(F=E.value,B="value"):"function"==typeof E.get&&(F=E.get,B="get"),null==F||null==B)throw new Error("Not supported");const W=!1!==i?function(t){if("function"!=typeof t)throw new Error("Not supported");if(0===t.length)return[];let e=Function.prototype.toString.call(t);e=e.replace(C,"")||e,e=e.slice(0,e.indexOf(f));let i=e.indexOf(v),o=e.indexOf(y);i=i>=0?i+1:0,o=o>0?o:e.indexOf(m),e=e.slice(i,o),e=`(${e})`;const s=w.exec(e);return null!=s?s[1].split(g).map((t=>t.trim().replace(_,""))):[]}(F):[];E[B]=function(...t){if(!d&&!q.enabled(x)||null!=o&&!o.apply(this,t))return F.apply(this,t);const g=P.current,m=P.next(),f=null!=this?function(t){let e;if("function"==typeof t){if(null==t.prototype?.constructor)return t.name;e=t.prototype.constructor}else e=t.constructor;let i=e?.name??"";const o=i.indexOf("_");i=-1===o?i:i.substr(o+1),null!=e?.[z]&&(i=e[z](t,i));return i}(this):void 0;let v,y=f?c?`${T(m,g)} ${f}.${e}`:`${f}.${e}`:e;null!=a&&(y=a({id:m,instance:this,instanceName:f??"",name:e,prefix:y},...t)),c&&(v=function(t,e){return e={prevScopeId:P.current,...e},A.set(t,e),e}(m,{scopeId:m,prevScopeId:g,prefix:y}));const w=null!=s?s(...t):"";let C;if(!1===i||0===t.length)C="",h||u.call(q,`${y}${w}`);else{let e;C="";let o,s,r,a=-1;for(r of t){if(o=W[++a],e=i?.[a],null!=e){if("boolean"==typeof e)continue;if(C.length>0&&(C+=", "),"string"==typeof e){C+=e;continue}s=String(e(r))}else C.length>0&&(C+=", "),s=q.toLoggable(r);C+=o?`${o}=${s}`:s}h||u.call(q,C?`${y}${w}(${C})`:`${y}${w}`)}if(h||p||null!=r){const e=p?S():void 0,i=t=>{const i=void 0!==e?` [${U(e)}ms]`:"";h?q.error(t,C?`${y}${w}(${C})`:`${y}${w}`,v?.exitDetails?`failed${v.exitDetails}${i}`:`failed${i}`):q.error(t,y,v?.exitDetails?`failed${v.exitDetails}${i}`:`failed${i}`),c&&D(m)};let o;try{o=F.apply(this,t)}catch(t){throw i(t),t}const s=t=>{let i,o,s,a;if(null!=e?(i=U(e),i>$?(o=q.warn,s=` [*${i}ms] (slow)`):(o=u,s=` [${i}ms]`)):(s="",o=u),null!=r)if("function"==typeof r)try{a=r(t)}catch(t){a=`@log.exit error: ${t}`}else!0===r&&(a=`returned ${q.toLoggable(t)}`);else v?.exitFailed?(a=v.exitFailed,o=q.error):a="completed";h?(0===l||i>l)&&o.call(q,C?`${y}${w}(${C}) ${a}${v?.exitDetails||""}${s}`:`${y}${w} ${a}${v?.exitDetails||""}${s}`):o.call(q,C?`${y}(${C}) ${a}${v?.exitDetails||""}${s}`:`${y} ${a}${v?.exitDetails||""}${s}`),c&&D(m)};return null!=o&&O(o)?o.then(s,i):s(o),o}return F.apply(this,t)}}}(t,!0)}const N=new Set(["accessToken","password","token"]),j=function(t,e){return N.has(t)?`<${e}>`:e},q=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(t,e,i=!1){this.provider=t,this._isDebugging=i,this.logLevel=e}enabled(t){return this.level>=Z(t)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(t){this._logLevel=t,this.level=Z(this._logLevel),"off"===t?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(t,...e){if(this.level<4&&!this.isDebugging)return;let i;"string"==typeof t?i=t:(i=e.shift(),null!=t&&(i=`${t.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,e)}`)}error(t,e,...i){if(this.level<1&&!this.isDebugging)return;let o;if(o=null==e||"string"==typeof e?e:`${e.prefix} ${i.shift()??""}`,null==o){const e=t instanceof Error?t.stack:void 0;if(e){const t=/.*\s*?at\s(.+?)\s/.exec(e);null!=t&&(o=t[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,i)}${null!=t?`\n${String(t)}`:""}`)}log(t,...e){if(this.level<3&&!this.isDebugging)return;let i;"string"==typeof t?i=t:(i=e.shift(),null!=t&&(i=`${t.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,e)}`)}warn(t,...e){if(this.level<2&&!this.isDebugging)return;let i;"string"==typeof t?i=t:(i=e.shift(),null!=t&&(i=`${t.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,e)}`)}showOutputChannel(t){this.output?.show?.(t)}toLoggable(t,e){if("object"!=typeof t)return String(t);if(e??=this.provider.sanitize??j,Array.isArray(t))return`[${t.map((t=>this.toLoggable(t,e))).join(", ")}]`;const i=this.provider.toLoggable?.(t);if(null!=i)return i;try{return JSON.stringify(t,e)}catch{return"<error>"}}toLoggableParams(t,e){if(0===e.length||t&&this.level<4&&!this.isDebugging)return"";const i=e.map((t=>this.toLoggable(t))).join(", ");return 0!==i.length?` — ${i}`:""}};function Z(t){switch(t){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const J={enabled:t=>q.enabled(t)||q.isDebugging,log:(t,e,i,...o)=>{switch(t){case"error":q.error("",e,i,...o);break;case"warn":q.warn(e,i,...o);break;case"info":q.log(e,i,...o);break;default:q.debug(e,i,...o)}}};var Q;function K(t){return(t=t.toString().toLowerCase()).includes("ms")?parseFloat(t):t.includes("s")?1e3*parseFloat(t):parseFloat(t)}function Y(t,e){return new Promise((i=>{t.addEventListener(e,(function o(s){s.target===t&&(t.removeEventListener(e,o),i())}))}))}(Q||(Q={})).on=function(t,e,i,o){let s=!1;if("string"==typeof t){const r=function(e){const o=e?.target?.closest(t);null!=o&&i(e,o)};return document.addEventListener(e,r,o??!0),{dispose:()=>{s||(s=!0,document.removeEventListener(e,r,o??!0))}}}const r=function(t){i(t,this)};return t.addEventListener(e,r,o??!1),{dispose:()=>{s||(s=!0,t.removeEventListener(e,r,o??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(t,e,...i){let o;if(this._stopped=!1,this.logScope=null!=t&&"string"!=typeof t?t:E(t??"",!1),o="boolean"==typeof e?.log?e.log?{}:void 0:e?.log??{},this.logLevel=e?.logLevel??"info",this.logProvider=e?.provider??J,this._time=S(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[t,e]=S(this._time);return 1e3*t+Math.floor(e/1e6)}log(t){this.logCore(t,!1)}restart(t){this.logCore(t,!0),this._time=S(),this._stopped=!1}stop(t){this._stopped||(this.restart(t),this._stopped=!0)}logCore(t,e){if(!this.logProvider.enabled(this.logLevel))return;if(!e)return void this.logProvider.log(this.logLevel,this.logScope,`${t?.message??""}${t?.suffix??""}`);const[i,o]=S(this._time),s=1e3*i+Math.floor(o/1e6),r=t?.message??"";this.logProvider.log(s>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${s}ms]${t?.suffix??""}`)}}const X=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,e,i)=>{null==this.listeners&&(this.listeners=new LinkedList);const o=this.listeners.push(null==e?t:[t,e]),s={dispose:()=>{s.dispose=_Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(s),s}),this._event}fire(t){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let e=this.listeners.iterator(),i=e.next();!i.done;i=e.next())this._deliveryQueue.push([i.value,t]);for(;this._deliveryQueue.size>0;){const[t,e]=this._deliveryQueue.shift();try{"function"==typeof t?t(e):t[0].call(t[1],e)}catch(t){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};X._noop=function(){};let tt=X;const et={done:!0,value:void 0},it=class _Node{constructor(t){this.element=t,this.next=_Node.Undefined,this.prev=_Node.Undefined}};it.Undefined=new it(void 0);let nt=it;class LinkedList{constructor(){this._first=nt.Undefined,this._last=nt.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===nt.Undefined}clear(){this._first=nt.Undefined,this._last=nt.Undefined,this._size=0}unshift(t){return this._insert(t,!1)}push(t){return this._insert(t,!0)}_insert(t,e){const i=new nt(t);if(this._first===nt.Undefined)this._first=i,this._last=i;else if(e){const t=this._last;this._last=i,i.prev=t,t.next=i}else{const t=this._first;this._first=i,i.next=t,t.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===nt.Undefined)return;const t=this._first.element;return this._remove(this._first),t}pop(){if(this._last===nt.Undefined)return;const t=this._last.element;return this._remove(this._last),t}_remove(t){if(t.prev!==nt.Undefined&&t.next!==nt.Undefined){const e=t.prev;e.next=t.next,t.next.prev=e}else t.prev===nt.Undefined&&t.next===nt.Undefined?(this._first=nt.Undefined,this._last=nt.Undefined):t.next===nt.Undefined?(this._last=this._last.prev,this._last.next=nt.Undefined):t.prev===nt.Undefined&&(this._first=this._first.next,this._first.prev=nt.Undefined);this._size-=1}iterator(){let t,e=this._first;return{next:function(){return e===nt.Undefined?et:(null==t?t={done:!1,value:e.element}:t.value=e.element,e=e.next,t)}}}toArray(){const t=[];for(let e=this._first;e!==nt.Undefined;e=e.next)t.push(e.element);return t}}var ot=Object.defineProperty,st=Object.getOwnPropertyDescriptor,rt=(t,e,i,o)=>{for(var s,r=o>1?void 0:o?st(e,i):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&ot(e,i,r),r};let at;function lt(){return at??=acquireVsCodeApi()}const ct=x();function ht(){return`webview:${ct.next()}`}let pt=class{constructor(t){this.appName=t,this._onReceiveMessage=new tt,this._pendingHandlers=new Map,this._api=lt(),this._disposable=Q.on(window,"message",(t=>this.onMessageReceived(t)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(t){const e=A.get(P.current),i=t.data;if(i.packed&&i.params instanceof Uint8Array){const o=function(t,e,...i){return(e?.provider??J).enabled(e?.logLevel??"info")?new Stopwatch(t,e,...i):void 0}(E(` deserializing msg=${t.data.method}`,e),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,i.params=JSON.parse(this._textDecoder.decode(i.params)),o?.stop()}if(null==i.completionId)this._onReceiveMessage.fire(i);else{const t=ut(i.method,i.completionId);this._pendingHandlers.get(t)?.(i)}}sendCommand(t,e){const i=ht();this.postMessage({id:i,scope:t.scope,method:t.method,params:e})}async sendRequest(t,e){const i=ht(),o=new Promise(((e,o)=>{const s=ut(t.response.method,i);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(s)}r=setTimeout((()=>{a.call(this),o(new Error(`Timed out waiting for completion of ${s}`))}),6e4),this._pendingHandlers.set(s,(t=>{a.call(this),queueMicrotask((()=>e(t.params)))}))}));return this.postMessage({id:i,scope:t.scope,method:t.method,params:e,completionId:i}),o}setState(t){this._api.setState(t)}postMessage(t){this._api.postMessage(t)}};var dt;function ut(t,e){return`${t}|${e}`}rt([G({args:{0:t=>`${t.data.id}, method=${t.data.method}`}})],pt.prototype,"onMessageReceived",1),rt([G({args:{0:t=>t.method,1:!1}})],pt.prototype,"sendCommand",1),rt([G({args:{0:t=>t.method,1:!1,2:!1}})],pt.prototype,"sendRequest",1),rt([G({args:{0:t=>`${t.id}, method=${t.method}`}})],pt.prototype,"postMessage",1),pt=rt([(dt=(t,e)=>`${t.appName}(${e})`,t=>{t[z]=dt})],pt);function gt(t,e){const i=Math.pow(10,e);return Math.round(t*i)/i}class RGBA{constructor(t,e,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,t)),this.g=0|Math.min(255,Math.max(0,e)),this.b=0|Math.min(255,Math.max(0,i)),this.a=gt(Math.max(Math.min(1,o),0),3)}static equals(t,e){return t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a}}class HSLA{constructor(t,e,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=gt(Math.max(Math.min(1,e),0),3),this.l=gt(Math.max(Math.min(1,i),0),3),this.a=gt(Math.max(Math.min(1,o),0),3)}static equals(t,e){return t.h===e.h&&t.s===e.s&&t.l===e.l&&t.a===e.a}static fromRGBA(t){const e=t.r/255,i=t.g/255,o=t.b/255,s=t.a,r=Math.max(e,i,o),a=Math.min(e,i,o);let l=0,c=0;const h=(a+r)/2,p=r-a;if(p>0){switch(c=Math.min(h<=.5?p/(2*h):p/(2-2*h),1),r){case e:l=(i-o)/p+(i<o?6:0);break;case i:l=(o-e)/p+2;break;case o:l=(e-i)/p+4}l*=60,l=Math.round(l)}return new HSLA(l,c,h,s)}static _hue2rgb(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}static toRGBA(t){const e=t.h/360,{s:i,l:o,a:s}=t;let r,a,l;if(0===i)r=a=l=o;else{const t=o<.5?o*(1+i):o+i-o*i,s=2*o-t;r=HSLA._hue2rgb(s,t,e+1/3),a=HSLA._hue2rgb(s,t,e),l=HSLA._hue2rgb(s,t,e-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),s)}}class HSVA{constructor(t,e,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=gt(Math.max(Math.min(1,e),0),3),this.v=gt(Math.max(Math.min(1,i),0),3),this.a=gt(Math.max(Math.min(1,o),0),3)}static equals(t,e){return t.h===e.h&&t.s===e.s&&t.v===e.v&&t.a===e.a}static fromRGBA(t){const e=t.r/255,i=t.g/255,o=t.b/255,s=Math.max(e,i,o),r=s-Math.min(e,i,o),a=0===s?0:r/s;let l;return l=0===r?0:s===e?((i-o)/r%6+6)%6:s===i?(o-e)/r+2:(e-i)/r+4,new HSVA(Math.round(60*l),a,s,t.a)}static toRGBA(t){const{h:e,s:i,v:o,a:s}=t,r=o*i,a=r*(1-Math.abs(e/60%2-1)),l=o-r;let[c,h,p]=[0,0,0];return e<60?(c=r,h=a):e<120?(c=a,h=r):e<180?(h=r,p=a):e<240?(h=a,p=r):e<300?(c=a,p=r):e<=360&&(c=r,p=a),c=Math.round(255*(c+l)),h=Math.round(255*(h+l)),p=Math.round(255*(p+l)),new RGBA(c,h,p,s)}}function mt(t,e){return e.getPropertyValue(t).trim()}const ft=class _Color{static from(t){return t instanceof _Color?t:_t(t)||_Color.red}static fromCssVariable(t,e){return _t(mt(t,e))||_Color.red}static fromHex(t){return St(t)||_Color.red}static equals(t,e){return!t&&!e||!(!t||!e)&&t.equals(e)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(t){if(!t)throw new Error("Color needs a value");if(t instanceof RGBA)this.rgba=t;else if(t instanceof HSLA)this._hsla=t,this.rgba=HSLA.toRGBA(t);else{if(!(t instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=t,this.rgba=HSVA.toRGBA(t)}}equals(t){return null!=t&&(Boolean(t)&&RGBA.equals(this.rgba,t.rgba)&&HSLA.equals(this.hsla,t.hsla)&&HSVA.equals(this.hsva,t.hsva))}getRelativeLuminance(){return gt(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(t){const e=t/255;return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}luminance(t){return function(t,e){if(0===e)return new vt(new RGBA(0,0,0,t.rgba.a));if(1===e)return new vt(new RGBA(255,255,255,t.rgba.a));const i=t.getRelativeLuminance();let o=20;const s=(t,i)=>{const r=t.mix(i,.5),a=r.getRelativeLuminance();return Math.abs(e-a)<1e-7||!o--?r:a>e?s(t,r):s(r,i)},r=(i>e?s(vt.black,t):s(t,vt.white)).rgba;return new vt(new RGBA(r.r,r.g,r.b,t.rgba.a))}(this,t)}getContrastRatio(t){const e=this.getRelativeLuminance(),i=t.getRelativeLuminance();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(t){return this.getRelativeLuminance()>t.getRelativeLuminance()}isDarkerThan(t){return this.getRelativeLuminance()<t.getRelativeLuminance()}lighten(t){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){const{r:e,g:i,b:o,a:s}=this.rgba;return new _Color(new RGBA(e,i,o,s*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){const e=t.rgba,i=this.rgba.a,o=e.a,s=i+o*(1-i);if(s<1e-6)return _Color.transparent;const r=this.rgba.r*i/s+e.r*o*(1-i)/s,a=this.rgba.g*i/s+e.g*o*(1-i)/s,l=this.rgba.b*i/s+e.b*o*(1-i)/s;return new _Color(new RGBA(r,a,l,s))}mix(t,e){return function(t,e,i){const o=t.rgba,s=e.rgba;return new vt(new RGBA(o.r+i*(s.r-o.r),o.g+i*(s.g-o.g),o.b+i*(s.b-o.b),o.a+i*(s.a-o.a)))}(this,t,e)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;const{r:e,g:i,b:o,a:s}=this.rgba;return new _Color(new RGBA(t.rgba.r-s*(t.rgba.r-e),t.rgba.g-s*(t.rgba.g-i),t.rgba.b-s*(t.rgba.b-o),1))}flatten(...t){const e=t.reduceRight(((t,e)=>_Color._flatten(e,t)));return _Color._flatten(this,e)}static _flatten(t,e){const i=1-t.rgba.a;return new _Color(new RGBA(i*e.rgba.r+t.rgba.a*t.rgba.r,i*e.rgba.g+t.rgba.a*t.rgba.g,i*e.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(t){if(t.isOpaque())return wt(t);return bt(t)}(this)),this._toString}static getLighterColor(t,e,i){if(t.isLighterThan(e))return t;i=i||.5;const o=t.getRelativeLuminance(),s=e.getRelativeLuminance();return i=i*(s-o)/s,t.lighten(i)}static getDarkerColor(t,e,i){if(t.isDarkerThan(e))return t;i=i||.5;const o=t.getRelativeLuminance();return i=i*(o-e.getRelativeLuminance())/o,t.darken(i)}};ft.white=new ft(new RGBA(255,255,255,1)),ft.black=new ft(new RGBA(0,0,0,1)),ft.red=new ft(new RGBA(255,0,0,1)),ft.blue=new ft(new RGBA(0,0,255,1)),ft.green=new ft(new RGBA(0,255,0,1)),ft.cyan=new ft(new RGBA(0,255,255,1)),ft.lightgrey=new ft(new RGBA(211,211,211,1)),ft.transparent=new ft(new RGBA(0,0,0,0));let vt=ft;function bt(t){return`rgba(${t.rgba.r}, ${t.rgba.g}, ${t.rgba.b}, ${Number(t.rgba.a.toFixed(2))})`}function yt(t){const e=t.toString(16);return 2!==e.length?`0${e}`:e}function wt(t){return`#${yt(t.rgba.r)}${yt(t.rgba.g)}${yt(t.rgba.b)}`}const Ct=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function _t(t){if(0===(t=t.trim()).length)return null;if(t.charCodeAt(0)===F.Hash)return St(t);const e=Ct.exec(t);if(null==e)return null;const i=e[1];let o;switch(i){case"rgb":case"hsl":o=[parseInt(e[2],10),parseInt(e[3],10),parseInt(e[4],10),1];break;case"rgba":case"hsla":o=[parseInt(e[2],10),parseInt(e[3],10),parseInt(e[4],10),parseFloat(e[5])];break;default:return null}switch(i){case"rgb":case"rgba":return new vt(new RGBA(o[0],o[1],o[2],o[3]));case"hsl":case"hsla":return new vt(new HSLA(o[0],o[1],o[2],o[3]))}return vt.red}function St(t){const e=(t=t.trim()).length;if(0===e)return null;if(t.charCodeAt(0)!==F.Hash)return null;switch(e){case 7:{const e=16*$t(t.charCodeAt(1))+$t(t.charCodeAt(2)),i=16*$t(t.charCodeAt(3))+$t(t.charCodeAt(4)),o=16*$t(t.charCodeAt(5))+$t(t.charCodeAt(6));return new vt(new RGBA(e,i,o,1))}case 9:{const e=16*$t(t.charCodeAt(1))+$t(t.charCodeAt(2)),i=16*$t(t.charCodeAt(3))+$t(t.charCodeAt(4)),o=16*$t(t.charCodeAt(5))+$t(t.charCodeAt(6)),s=16*$t(t.charCodeAt(7))+$t(t.charCodeAt(8));return new vt(new RGBA(e,i,o,s/255))}case 4:{const e=$t(t.charCodeAt(1)),i=$t(t.charCodeAt(2)),o=$t(t.charCodeAt(3));return new vt(new RGBA(16*e+e,16*i+i,16*o+o))}case 5:{const e=$t(t.charCodeAt(1)),i=$t(t.charCodeAt(2)),o=$t(t.charCodeAt(3)),s=$t(t.charCodeAt(4));return new vt(new RGBA(16*e+e,16*i+i,16*o+o,(16*s+s)/255))}default:return null}}function $t(t){switch(t){case F.Digit0:return 0;case F.Digit1:return 1;case F.Digit2:return 2;case F.Digit3:return 3;case F.Digit4:return 4;case F.Digit5:return 5;case F.Digit6:return 6;case F.Digit7:return 7;case F.Digit8:return 8;case F.Digit9:return 9;case F.a:case F.A:return 10;case F.b:case F.B:return 11;case F.c:case F.C:return 12;case F.d:case F.D:return 13;case F.e:case F.E:return 14;case F.f:case F.F:return 15}return 0}const xt=new tt,kt=xt.event;function Pt(t){const e=document.documentElement,i=window.getComputedStyle(e),o=document.body.classList,s=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),r=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=mt("--vscode-editor-background",i);let l=mt("--vscode-editor-foreground",i);return l||(l=mt("--vscode-foreground",i)),{colors:{background:a,foreground:l},computedStyle:i,isLightTheme:s,isHighContrastTheme:r,isInitializing:null==t}}class App{constructor(t){this.appName=t;const e=[],o=Pt();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),e.push(kt(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",q.configure({name:t,createChannel:function(t){return{name:t,appendLine:function(t){}}}},"off"),this.log(`${t}()`),this._api=lt(),this._hostIpc=new pt(this.appName),e.push(this._hostIpc),null!=this.state){const t=this.getState();this.state.timestamp>=(t?.timestamp??0)?this._api.setState(this.state):this.state=t}e.push(function(){const t=new MutationObserver((t=>{xt.fire(Pt(t))}));return t.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>t.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${t}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&e.push(this._hostIpc.onReceiveMessage((t=>{if(!0===r.is(t))window.dispatchEvent(new CustomEvent(t.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(t)}))),this.sendCommand(i,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),e.push(Q.on(window,"pagehide",(()=>{e?.forEach((t=>t.dispose())),this.bindDisposables?.forEach((t=>t.dispose())),this.bindDisposables=void 0})))}bind(){document.querySelectorAll("a").forEach((t=>{t.href===t.title&&t.removeAttribute("title")})),this.bindDisposables?.forEach((t=>t.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const t=u((t=>{this.sendCommand(o,t)}),150);this.bindDisposables.push(Q.on(document,"focusin",(e=>{const i=e.composedPath().some((t=>"INPUT"===t.tagName));!0===this._focused&&this._inputFocused===i||(this._focused=!0,this._inputFocused=i,t({focused:!0,inputFocused:i}))})),Q.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,t({focused:!1,inputFocused:!1}))})))}log(t,...e){"string"==typeof t?q.log(t,...e):q.log(t,e.shift(),...e)}getState(){return this._api.getState()}sendCommand(t,e){this._hostIpc.sendCommand(t,e)}sendRequest(t,e){return this._hostIpc.sendRequest(t,e)}setState(t){this._api.setState(t)}}const At=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Rt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/;let Lt;const Dt=new Map;let Tt,Et,Ot;const Ft=new Map;function Mt(t,e,i,o=!0){const s=`${i??""}:${e=e??void 0}`;let r=Dt.get(s);if(null==r){const t=function(t){if(null==t)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const e=Rt.exec(t);if(null!=e?.groups){const{dateStyle:t,timeStyle:i}=e.groups;return{localeMatcher:"best fit",dateStyle:t||"full",timeStyle:i||void 0}}const i={localeMatcher:"best fit"};for(const{groups:e}of t.matchAll(At))if(null!=e)for(const[t,o]of Object.entries(e))if(null!=o)switch(t){case"year":i.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":i.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===o.length?"2-digit":"numeric",i.hour12="hh"===o||"h"===o;break;case"minute":i.minute=2===o.length?"2-digit":"numeric";break;case"second":i.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===o.length?"long":"short"}return i}(e);let a;a=null==i?Tt:"system"===i?void 0:[i],r=new Intl.DateTimeFormat(a,t),o&&Dt.set(s,r)}if(null==e||Rt.test(e))return r.format(t);function a(t){const e=`${i??""}:time:${t}`;let s=Dt.get(e);if(null==s){const r={localeMatcher:"best fit",timeStyle:t};let a;a=null==i?Tt:"system"===i?void 0:[i],s=new Intl.DateTimeFormat(a,r),o&&Dt.set(e,s)}return s}const l=r.formatToParts(t);return e.replace(At,((e,i,o,s,r,c,h,p,d,u,g,m,f,v,y)=>{if(null!=i)return i.substring(1,i.length-1);for(const[e,i]of Object.entries(y)){if(null==i)continue;const o=l.find((t=>t.type===e));if("Do"===i&&"day"===o?.type)return Bt(Number(o.value));if("a"===i&&"dayPeriod"===o?.type){const e=a("short").formatToParts(t).find((t=>"dayPeriod"===t.type));return` ${(e??o)?.value??""}`}return o?.value??""}return""}))}const It=["th","st","nd","rd"];function Bt(t){const e=t%100;return`${t}${It[(e-20)%10]??It[e]??It[0]}`}const Vt=globalThis,Ht=Vt.ShadowRoot&&(void 0===Vt.ShadyCSS||Vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ut=Symbol(),Wt=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ht&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Wt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Wt.set(e,t))}return t}toString(){return this.cssText}}const zt=t=>new n("string"==typeof t?t:t+"",void 0,Ut),Gt=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(i,t,Ut)},Nt=Ht?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return zt(e)})(t):t,{is:jt,defineProperty:qt,getOwnPropertyDescriptor:Zt,getOwnPropertyNames:Jt,getOwnPropertySymbols:Qt,getPrototypeOf:Kt}=Object,Yt=globalThis,Xt=Yt.trustedTypes,te=Xt?Xt.emptyScript:"",ee=Yt.reactiveElementPolyfillSupport,ie=(t,e)=>t,ne={toAttribute(t,e){switch(e){case Boolean:t=t?te:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},oe=(t,e)=>!jt(t,e),se={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:oe};Symbol.metadata??=Symbol("metadata"),Yt.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=se){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&qt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=Zt(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const r=o?.call(this);s.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??se}static _$Ei(){if(this.hasOwnProperty(ie("elementProperties")))return;const t=Kt(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ie("properties"))){const t=this.properties,e=[...Jt(t),...Qt(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Nt(t))}else void 0!==t&&e.push(Nt(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Ht)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),o=Vt.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:ne).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:ne;this._$Em=o,this[o]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??oe)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[ie("elementProperties")]=new Map,b[ie("finalized")]=new Map,ee?.({ReactiveElement:b}),(Yt.reactiveElementVersions??=[]).push("2.0.4");const re=globalThis,ae=re.trustedTypes,le=ae?ae.createPolicy("lit-html",{createHTML:t=>t}):void 0,ce="$lit$",he=`lit$${Math.random().toFixed(9).slice(2)}$`,pe="?"+he,de=`<${pe}>`,ue=document,ge=()=>ue.createComment(""),me=t=>null===t||"object"!=typeof t&&"function"!=typeof t,fe=Array.isArray,ve=t=>fe(t)||"function"==typeof t?.[Symbol.iterator],be="[ \t\n\f\r]",ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,Ce=/>/g,_e=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Se=/'/g,$e=/"/g,xe=/^(?:script|style|textarea|title)$/i,ke=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Pe=ke(1),Ae=ke(2),Re=Symbol.for("lit-noChange"),Le=Symbol.for("lit-nothing"),De=new WeakMap,Te=ue.createTreeWalker(ue,129);function Ee(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==le?le.createHTML(e):e}const Oe=(t,e)=>{const i=t.length-1,o=[];let s,r=2===e?"<svg>":"",a=ye;for(let e=0;e<i;e++){const i=t[e];let l,c,h=-1,p=0;for(;p<i.length&&(a.lastIndex=p,c=a.exec(i),null!==c);)p=a.lastIndex,a===ye?"!--"===c[1]?a=we:void 0!==c[1]?a=Ce:void 0!==c[2]?(xe.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=_e):void 0!==c[3]&&(a=_e):a===_e?">"===c[0]?(a=s??ye,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?_e:'"'===c[3]?$e:Se):a===$e||a===Se?a=_e:a===we||a===Ce?a=ye:(a=_e,s=void 0);const d=a===_e&&t[e+1].startsWith("/>")?" ":"";r+=a===ye?i+de:h>=0?(o.push(l),i.slice(0,h)+ce+i.slice(h)+he+d):i+he+(-2===h?e:d)}return[Ee(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const a=t.length-1,l=this.parts,[c,h]=Oe(t,e);if(this.el=V.createElement(c,i),Te.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=Te.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(ce)){const e=h[r++],i=o.getAttribute(t).split(he),a=/([.?@])?(.*)/.exec(e);l.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?k:"?"===a[1]?H:"@"===a[1]?I:R}),o.removeAttribute(t)}else t.startsWith(he)&&(l.push({type:6,index:s}),o.removeAttribute(t));if(xe.test(o.tagName)){const t=o.textContent.split(he),e=t.length-1;if(e>0){o.textContent=ae?ae.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],ge()),Te.nextNode(),l.push({type:2,index:++s});o.append(t[e],ge())}}}else if(8===o.nodeType)if(o.data===pe)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(he,t+1));)l.push({type:7,index:s}),t+=he.length-1}s++}}static createElement(t,e){const i=ue.createElement("template");return i.innerHTML=t,i}}function Fe(t,e,i=t,o){if(e===Re)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=me(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=Fe(t,s._$AS(t,e.values),s,o)),e}class lit_html_S{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??ue).importNode(e,!0);Te.currentNode=o;let s=Te.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new M(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new L(s,this,t)),this._$AV.push(e),l=i[++a]}r!==l?.index&&(s=Te.nextNode(),r++)}return Te.currentNode=ue,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Le,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Fe(this,t,e),me(t)?t===Le||null==t||""===t?(this._$AH!==Le&&this._$AR(),this._$AH=Le):t!==this._$AH&&t!==Re&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):ve(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Le&&me(this._$AH)?this._$AA.nextSibling.data=t:this.T(ue.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=V.createElement(Ee(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new lit_html_S(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=De.get(t.strings);return void 0===e&&De.set(t.strings,e=new V(t)),e}k(t){fe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new M(this.S(ge()),this.S(ge()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=Le,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Le}_$AI(t,e=this,i,o){const s=this.strings;let r=!1;if(void 0===s)t=Fe(this,t,e,0),r=!me(t)||t!==this._$AH&&t!==Re,r&&(this._$AH=t);else{const o=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Fe(this,o[i+a],e,a),l===Re&&(l=this._$AH[a]),r||=!me(l)||l!==this._$AH[a],l===Le?t=Le:t!==Le&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!o&&this.j(t)}j(t){t===Le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Le?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Le)}}class I extends R{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=Fe(this,t,e,0)??Le)===Re)return;const i=this._$AH,o=t===Le&&i!==Le||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==Le&&(i===Le||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Fe(this,t)}}const Me=re.litHtmlPolyfillSupport;Me?.(V,M),(re.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new M(e.insertBefore(ge(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Re}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const Ie=globalThis.litElementPolyfillSupport;Ie?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const Be=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},Ve={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:oe},He=(t=Ve,e,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t)}}throw Error("Unsupported decorator location: "+o)};function Ue(t){return(e,i)=>"object"==typeof i?He(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const We=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function ze(t,e){return(i,o,s)=>{const r=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof o?i:s??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return We(i,o,{get(){let i=t.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return We(i,o,{get(){return r(this)}})}}var Ge=(t=>(t.ActionPrefix="gitlens.action.",t.AddAuthors="gitlens.addAuthors",t.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",t.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",t.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",t.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",t.ClearFileAnnotations="gitlens.clearFileAnnotations",t.CloseUnchangedFiles="gitlens.closeUnchangedFiles",t.CompareWith="gitlens.compareWith",t.CompareHeadWith="gitlens.compareHeadWith",t.CompareWorkingWith="gitlens.compareWorkingWith",t.ComputingFileAnnotations="gitlens.computingFileAnnotations",t.ConnectRemoteProvider="gitlens.connectRemoteProvider",t.CopyCurrentBranch="gitlens.copyCurrentBranch",t.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",t.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",t.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",t.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",t.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",t.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",t.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",t.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",t.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",t.CopyMessageToClipboard="gitlens.copyMessageToClipboard",t.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",t.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",t.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",t.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",t.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",t.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",t.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",t.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",t.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",t.CopyShaToClipboard="gitlens.copyShaToClipboard",t.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",t.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",t.PastePatchFromClipboard="gitlens.pastePatchFromClipboard",t.CopyPatchToClipboard="gitlens.copyPatchToClipboard",t.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",t.CreatePatch="gitlens.createPatch",t.CreateCloudPatch="gitlens.createCloudPatch",t.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",t.DiffDirectory="gitlens.diffDirectory",t.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",t.DiffFolderWithRevision="gitlens.diffFolderWithRevision",t.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",t.DiffWith="gitlens.diffWith",t.DiffWithNext="gitlens.diffWithNext",t.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",t.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",t.DiffWithPrevious="gitlens.diffWithPrevious",t.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",t.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",t.DiffLineWithPrevious="gitlens.diffLineWithPrevious",t.DiffWithRevision="gitlens.diffWithRevision",t.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",t.DiffWithWorking="gitlens.diffWithWorking",t.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",t.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",t.DiffLineWithWorking="gitlens.diffLineWithWorking",t.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",t.DisableDebugLogging="gitlens.disableDebugLogging",t.EnableDebugLogging="gitlens.enableDebugLogging",t.DisableRebaseEditor="gitlens.disableRebaseEditor",t.EnableRebaseEditor="gitlens.enableRebaseEditor",t.ExternalDiff="gitlens.externalDiff",t.ExternalDiffAll="gitlens.externalDiffAll",t.FetchRepositories="gitlens.fetchRepositories",t.GenerateCommitMessage="gitlens.generateCommitMessage",t.GetStarted="gitlens.getStarted",t.GKSwitchOrganization="gitlens.gk.switchOrganization",t.InviteToLiveShare="gitlens.inviteToLiveShare",t.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",t.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",t.OpenBranchOnRemote="gitlens.openBranchOnRemote",t.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",t.OpenChangedFiles="gitlens.openChangedFiles",t.OpenCommitOnRemote="gitlens.openCommitOnRemote",t.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",t.OpenFileHistory="gitlens.openFileHistory",t.OpenFileFromRemote="gitlens.openFileFromRemote",t.OpenFileOnRemote="gitlens.openFileOnRemote",t.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",t.OpenFileAtRevision="gitlens.openFileRevision",t.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",t.OpenFolderHistory="gitlens.openFolderHistory",t.OpenOnRemote="gitlens.openOnRemote",t.OpenCloudPatch="gitlens.openCloudPatch",t.OpenPatch="gitlens.openPatch",t.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",t.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",t.OpenRepoOnRemote="gitlens.openRepoOnRemote",t.OpenRevisionFile="gitlens.openRevisionFile",t.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",t.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",t.OpenWalkthrough="gitlens.openWalkthrough",t.OpenWorkingFile="gitlens.openWorkingFile",t.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",t.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",t.PullRepositories="gitlens.pullRepositories",t.PushRepositories="gitlens.pushRepositories",t.GitCommands="gitlens.gitCommands",t.GitCommandsBranch="gitlens.gitCommands.branch",t.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",t.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",t.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",t.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",t.GitCommandsCheckout="gitlens.gitCommands.checkout",t.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",t.GitCommandsHistory="gitlens.gitCommands.history",t.GitCommandsMerge="gitlens.gitCommands.merge",t.GitCommandsRebase="gitlens.gitCommands.rebase",t.GitCommandsRemote="gitlens.gitCommands.remote",t.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",t.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",t.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",t.GitCommandsReset="gitlens.gitCommands.reset",t.GitCommandsRevert="gitlens.gitCommands.revert",t.GitCommandsShow="gitlens.gitCommands.show",t.GitCommandsStash="gitlens.gitCommands.stash",t.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",t.GitCommandsStashList="gitlens.gitCommands.stash.list",t.GitCommandsStashPop="gitlens.gitCommands.stash.pop",t.GitCommandsStashPush="gitlens.gitCommands.stash.push",t.GitCommandsStashRename="gitlens.gitCommands.stash.rename",t.GitCommandsStatus="gitlens.gitCommands.status",t.GitCommandsSwitch="gitlens.gitCommands.switch",t.GitCommandsTag="gitlens.gitCommands.tag",t.GitCommandsTagCreate="gitlens.gitCommands.tag.create",t.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",t.GitCommandsWorktree="gitlens.gitCommands.worktree",t.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",t.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",t.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",t.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",t.PlusConnectCloudIntegrations="gitlens.plus.cloudIntegrations.connect",t.PlusHide="gitlens.plus.hide",t.PlusLogin="gitlens.plus.login",t.PlusLogout="gitlens.plus.logout",t.PlusManage="gitlens.plus.manage",t.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",t.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",t.PlusResendVerification="gitlens.plus.resendVerification",t.PlusRestore="gitlens.plus.restore",t.PlusShowPlans="gitlens.plus.showPlans",t.PlusSignUp="gitlens.plus.signUp",t.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",t.PlusUpgrade="gitlens.plus.upgrade",t.PlusValidate="gitlens.plus.validate",t.QuickOpenFileHistory="gitlens.quickOpenFileHistory",t.RefreshLaunchpad="gitlens.launchpad.refresh",t.RefreshGraph="gitlens.graph.refresh",t.RefreshHover="gitlens.refreshHover",t.Reset="gitlens.reset",t.ResetAIKey="gitlens.resetAIKey",t.ResetViewsLayout="gitlens.resetViewsLayout",t.RevealCommitInView="gitlens.revealCommitInView",t.ShareAsCloudPatch="gitlens.shareAsCloudPatch",t.SearchCommits="gitlens.showCommitSearch",t.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",t.ShowBranchesView="gitlens.showBranchesView",t.ShowCommitDetailsView="gitlens.showCommitDetailsView",t.ShowCommitInView="gitlens.showCommitInView",t.ShowCommitsInView="gitlens.showCommitsInView",t.ShowCommitsView="gitlens.showCommitsView",t.ShowContributorsView="gitlens.showContributorsView",t.ShowDraftsView="gitlens.showDraftsView",t.ShowFileHistoryView="gitlens.showFileHistoryView",t.ShowFocusPage="gitlens.showFocusPage",t.ShowGraph="gitlens.showGraph",t.ShowGraphPage="gitlens.showGraphPage",t.ShowGraphView="gitlens.showGraphView",t.ShowHomeView="gitlens.showHomeView",t.ShowAccountView="gitlens.showAccountView",t.ShowInCommitGraph="gitlens.showInCommitGraph",t.ShowInCommitGraphView="gitlens.showInCommitGraphView",t.ShowInDetailsView="gitlens.showInDetailsView",t.ShowInTimeline="gitlens.showInTimeline",t.ShowLastQuickPick="gitlens.showLastQuickPick",t.ShowLaunchpad="gitlens.showLaunchpad",t.ShowLaunchpadView="gitlens.showLaunchpadView",t.ShowLineCommitInView="gitlens.showLineCommitInView",t.ShowLineHistoryView="gitlens.showLineHistoryView",t.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",t.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",t.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",t.ShowQuickCommit="gitlens.showQuickCommitDetails",t.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",t.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",t.ShowQuickFileHistory="gitlens.showQuickFileHistory",t.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",t.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",t.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",t.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",t.ShowQuickStashList="gitlens.showQuickStashList",t.ShowRemotesView="gitlens.showRemotesView",t.ShowRepositoriesView="gitlens.showRepositoriesView",t.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",t.ShowSettingsPage="gitlens.showSettingsPage",t.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",t.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",t.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",t.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",t.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",t.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",t.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",t.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",t.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",t.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",t.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",t.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",t.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",t.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",t.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",t.ShowStashesView="gitlens.showStashesView",t.ShowTagsView="gitlens.showTagsView",t.ShowTimelinePage="gitlens.showTimelinePage",t.ShowTimelineView="gitlens.showTimelineView",t.ShowWelcomePage="gitlens.showWelcomePage",t.ShowWorktreesView="gitlens.showWorktreesView",t.ShowWorkspacesView="gitlens.showWorkspacesView",t.StashApply="gitlens.stashApply",t.StashSave="gitlens.stashSave",t.StashSaveFiles="gitlens.stashSaveFiles",t.SwitchAIModel="gitlens.switchAIModel",t.SwitchMode="gitlens.switchMode",t.ToggleCodeLens="gitlens.toggleCodeLens",t.ToggleFileBlame="gitlens.toggleFileBlame",t.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",t.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",t.ToggleFileChanges="gitlens.toggleFileChanges",t.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",t.ToggleFileHeatmap="gitlens.toggleFileHeatmap",t.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",t.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",t.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",t.ToggleGraph="gitlens.toggleGraph",t.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",t.ToggleLineBlame="gitlens.toggleLineBlame",t.ToggleReviewMode="gitlens.toggleReviewMode",t.ToggleZenMode="gitlens.toggleZenMode",t.ViewsCopy="gitlens.views.copy",t.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",t.ViewsCopyUrl="gitlens.views.copyUrl",t.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",t.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",t.ViewsOpenUrl="gitlens.views.openUrl",t.Deprecated_DiffHeadWith="gitlens.diffHeadWith",t.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",t.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",t.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",t.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",t.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",t.Deprecated_OpenInRemote="gitlens.openInRemote",t.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",t.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",t))(Ge||{});var Ne=(t=>(t.Free="free",t.FreePlus="free+",t.Pro="pro",t.Teams="teams",t.Enterprise="enterprise",t))(Ne||{}),je=(t=>(t[t.VerificationRequired=-1]="VerificationRequired",t[t.Free=0]="Free",t[t.FreeInPreviewTrial=1]="FreeInPreviewTrial",t[t.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",t[t.FreePlusInTrial=3]="FreePlusInTrial",t[t.FreePlusTrialExpired=4]="FreePlusTrialExpired",t[t.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",t[t.Paid=6]="Paid",t))(je||{});function qe(t){switch(t){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function Ze(t,e){return Je(t.plan.effective.expiresOn,e)}function Je(t,e){return null!=t?function(t,e,i,o){const s=("number"==typeof e?e:e.getTime())-("number"==typeof t?t:t.getTime()),r=o??Math.floor;switch(i){case"days":return r(s/864e5);case"hours":return r(s/36e5);case"minutes":return r(s/6e4);case"seconds":return r(s/1e3);default:return s}}(Date.now(),new Date(t),e,Math.round):void 0}const Qe=[{key:"devexdays24",code:"DEVEXDAYS24",states:[je.FreePlusInTrial,je.FreePlusTrialExpired,je.FreePlusTrialReactivationEligible],expiresOn:new Date("2024-09-10T06:59:00.000Z").getTime(),commandTooltip:"Sale: Save up to 80% on GitLens Pro - lowest price of the year!"},{key:"pro50",states:[je.Free,je.FreeInPreviewTrial,je.FreePlusInTrial,je.FreePlusTrialExpired,je.FreePlusTrialReactivationEligible],commandTooltip:"Special: 1st seat of Pro is now 50%+ off. See your special price."}];Gt`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const Ke=Gt`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Ye=(Gt`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,Gt`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`),Xe=Gt`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Ke}
	}
	a:hover {
		text-decoration: underline;
	}
`;Gt`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`;var ti=Gt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,ei=Gt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ii=Object.defineProperty,ni=Object.defineProperties,oi=Object.getOwnPropertyDescriptor,si=Object.getOwnPropertyDescriptors,ri=Object.getOwnPropertySymbols,ai=Object.prototype.hasOwnProperty,li=Object.prototype.propertyIsEnumerable,ci=(t,e,i)=>e in t?ii(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,hi=(t,e)=>{for(var i in e||(e={}))ai.call(e,i)&&ci(t,i,e[i]);if(ri)for(var i of ri(e))li.call(e,i)&&ci(t,i,e[i]);return t},pi=(t,e)=>ni(t,si(e)),di=(t,e,i,o)=>{for(var s,r=o>1?void 0:o?oi(e,i):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&ii(e,i,r),r},ui=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([t,e])=>{this.constructor.define(t,e)}))}emit(t,e){const i=new CustomEvent(t,hi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o)return void customElements.define(t,class extends e{},i);let s=" (unknown version)",r=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in o&&o.version&&(r=" v"+o.version)}};ui.version="2.15.1",ui.dependencies={},di([Ue()],ui.prototype,"dir",2),di([Ue()],ui.prototype,"lang",2);const gi=Math.min,mi=Math.max,fi=Math.round,vi=Math.floor,bi=t=>({x:t,y:t}),yi={left:"right",right:"left",bottom:"top",top:"bottom"},wi={start:"end",end:"start"};function Ci(t,e,i){return mi(t,gi(e,i))}function _i(t,e){return"function"==typeof t?t(e):t}function Si(t){return t.split("-")[0]}function $i(t){return t.split("-")[1]}function xi(t){return"x"===t?"y":"x"}function ki(t){return"y"===t?"height":"width"}function Pi(t){return["top","bottom"].includes(Si(t))?"y":"x"}function Ai(t){return xi(Pi(t))}function Ri(t){return t.replace(/start|end/g,(t=>wi[t]))}function Li(t){return t.replace(/left|right|bottom|top/g,(t=>yi[t]))}function Di(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function Ti(t){const{x:e,y:i,width:o,height:s}=t;return{width:o,height:s,top:i,left:e,right:e+o,bottom:i+s,x:e,y:i}}function Ei(t,e,i){let{reference:o,floating:s}=t;const r=Pi(e),a=Ai(e),l=ki(a),c=Si(e),h="y"===r,p=o.x+o.width/2-s.width/2,d=o.y+o.height/2-s.height/2,u=o[l]/2-s[l]/2;let g;switch(c){case"top":g={x:p,y:o.y-s.height};break;case"bottom":g={x:p,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:d};break;case"left":g={x:o.x-s.width,y:d};break;default:g={x:o.x,y:o.y}}switch($i(e)){case"start":g[a]-=u*(i&&h?-1:1);break;case"end":g[a]+=u*(i&&h?-1:1)}return g}async function Oi(t,e){var i;void 0===e&&(e={});const{x:o,y:s,platform:r,rects:a,elements:l,strategy:c}=t,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:u=!1,padding:g=0}=_i(e,t),m=Di(g),f=l[u?"floating"===d?"reference":"floating":d],v=Ti(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(f)))||i?f:f.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:h,rootBoundary:p,strategy:c})),y="floating"===d?{x:o,y:s,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),C=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},_=Ti(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-_.top+m.top)/C.y,bottom:(_.bottom-v.bottom+m.bottom)/C.y,left:(v.left-_.left+m.left)/C.x,right:(_.right-v.right+m.right)/C.x}}function Fi(t){return Bi(t)?(t.nodeName||"").toLowerCase():"#document"}function Mi(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Ii(t){var e;return null==(e=(Bi(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Bi(t){return t instanceof Node||t instanceof Mi(t).Node}function Vi(t){return t instanceof Element||t instanceof Mi(t).Element}function Hi(t){return t instanceof HTMLElement||t instanceof Mi(t).HTMLElement}function Ui(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof Mi(t).ShadowRoot)}function Wi(t){const{overflow:e,overflowX:i,overflowY:o,display:s}=Zi(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(s)}function zi(t){return["table","td","th"].includes(Fi(t))}function Gi(t){return[":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(t){return!1}}))}function Ni(t){const e=ji(),i=Vi(t)?Zi(t):t;return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((t=>(i.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(i.contain||"").includes(t)))}function ji(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function qi(t){return["html","body","#document"].includes(Fi(t))}function Zi(t){return Mi(t).getComputedStyle(t)}function Ji(t){return Vi(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Qi(t){if("html"===Fi(t))return t;const e=t.assignedSlot||t.parentNode||Ui(t)&&t.host||Ii(t);return Ui(e)?e.host:e}function Ki(t){const e=Qi(t);return qi(e)?t.ownerDocument?t.ownerDocument.body:t.body:Hi(e)&&Wi(e)?e:Ki(e)}function Yi(t,e,i){var o;void 0===e&&(e=[]),void 0===i&&(i=!0);const s=Ki(t),r=s===(null==(o=t.ownerDocument)?void 0:o.body),a=Mi(s);return r?e.concat(a,a.visualViewport||[],Wi(s)?s:[],a.frameElement&&i?Yi(a.frameElement):[]):e.concat(s,Yi(s,[],i))}function Xi(t){const e=Zi(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=Hi(t),r=s?t.offsetWidth:i,a=s?t.offsetHeight:o,l=fi(i)!==r||fi(o)!==a;return l&&(i=r,o=a),{width:i,height:o,$:l}}function tn(t){return Vi(t)?t:t.contextElement}function en(t){const e=tn(t);if(!Hi(e))return bi(1);const i=e.getBoundingClientRect(),{width:o,height:s,$:r}=Xi(e);let a=(r?fi(i.width):i.width)/o,l=(r?fi(i.height):i.height)/s;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const nn=bi(0);function on(t){const e=Mi(t);return ji()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:nn}function sn(t,e,i,o){void 0===e&&(e=!1),void 0===i&&(i=!1);const s=t.getBoundingClientRect(),r=tn(t);let a=bi(1);e&&(o?Vi(o)&&(a=en(o)):a=en(t));const l=function(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==Mi(t))&&e}(r,i,o)?on(r):bi(0);let c=(s.left+l.x)/a.x,h=(s.top+l.y)/a.y,p=s.width/a.x,d=s.height/a.y;if(r){const t=Mi(r),e=o&&Vi(o)?Mi(o):o;let i=t,s=i.frameElement;for(;s&&o&&e!==i;){const t=en(s),e=s.getBoundingClientRect(),o=Zi(s),r=e.left+(s.clientLeft+parseFloat(o.paddingLeft))*t.x,a=e.top+(s.clientTop+parseFloat(o.paddingTop))*t.y;c*=t.x,h*=t.y,p*=t.x,d*=t.y,c+=r,h+=a,i=Mi(s),s=i.frameElement}}return Ti({width:p,height:d,x:c,y:h})}function rn(t){return sn(Ii(t)).left+Ji(t).scrollLeft}function an(t,e,i){let o;if("viewport"===e)o=function(t,e){const i=Mi(t),o=Ii(t),s=i.visualViewport;let r=o.clientWidth,a=o.clientHeight,l=0,c=0;if(s){r=s.width,a=s.height;const t=ji();(!t||t&&"fixed"===e)&&(l=s.offsetLeft,c=s.offsetTop)}return{width:r,height:a,x:l,y:c}}(t,i);else if("document"===e)o=function(t){const e=Ii(t),i=Ji(t),o=t.ownerDocument.body,s=mi(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=mi(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+rn(t);const l=-i.scrollTop;return"rtl"===Zi(o).direction&&(a+=mi(e.clientWidth,o.clientWidth)-s),{width:s,height:r,x:a,y:l}}(Ii(t));else if(Vi(e))o=function(t,e){const i=sn(t,!0,"fixed"===e),o=i.top+t.clientTop,s=i.left+t.clientLeft,r=Hi(t)?en(t):bi(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:s*r.x,y:o*r.y}}(e,i);else{const i=on(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return Ti(o)}function ln(t,e){const i=Qi(t);return!(i===e||!Vi(i)||qi(i))&&("fixed"===Zi(i).position||ln(i,e))}function cn(t,e,i){const o=Hi(e),s=Ii(e),r="fixed"===i,a=sn(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=bi(0);if(o||!o&&!r)if(("body"!==Fi(e)||Wi(s))&&(l=Ji(e)),o){const t=sn(e,!0,r,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else s&&(c.x=rn(s));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function hn(t){return"static"===Zi(t).position}function pn(t,e){return Hi(t)&&"fixed"!==Zi(t).position?e?e(t):t.offsetParent:null}function dn(t,e){const i=Mi(t);if(Gi(t))return i;if(!Hi(t)){let e=Qi(t);for(;e&&!qi(e);){if(Vi(e)&&!hn(e))return e;e=Qi(e)}return i}let o=pn(t,e);for(;o&&zi(o)&&hn(o);)o=pn(o,e);return o&&qi(o)&&hn(o)&&!Ni(o)?i:o||function(t){let e=Qi(t);for(;Hi(e)&&!qi(e);){if(Ni(e))return e;if(Gi(e))return null;e=Qi(e)}return null}(t)||i}const un={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:i,offsetParent:o,strategy:s}=t;const r="fixed"===s,a=Ii(o),l=!!e&&Gi(e.floating);if(o===a||l&&r)return i;let c={scrollLeft:0,scrollTop:0},h=bi(1);const p=bi(0),d=Hi(o);if((d||!d&&!r)&&(("body"!==Fi(o)||Wi(a))&&(c=Ji(o)),Hi(o))){const t=sn(o);h=en(o),p.x=t.x+o.clientLeft,p.y=t.y+o.clientTop}return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-c.scrollLeft*h.x+p.x,y:i.y*h.y-c.scrollTop*h.y+p.y}},getDocumentElement:Ii,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:o,strategy:s}=t;const r=[..."clippingAncestors"===i?Gi(e)?[]:function(t,e){const i=e.get(t);if(i)return i;let o=Yi(t,[],!1).filter((t=>Vi(t)&&"body"!==Fi(t))),s=null;const r="fixed"===Zi(t).position;let a=r?Qi(t):t;for(;Vi(a)&&!qi(a);){const e=Zi(a),i=Ni(a);i||"fixed"!==e.position||(s=null),(r?!i&&!s:!i&&"static"===e.position&&s&&["absolute","fixed"].includes(s.position)||Wi(a)&&!i&&ln(t,a))?o=o.filter((t=>t!==a)):s=e,a=Qi(a)}return e.set(t,o),o}(e,this._c):[].concat(i),o],a=r[0],l=r.reduce(((t,i)=>{const o=an(e,i,s);return t.top=mi(o.top,t.top),t.right=gi(o.right,t.right),t.bottom=gi(o.bottom,t.bottom),t.left=mi(o.left,t.left),t}),an(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:dn,getElementRects:async function(t){const e=this.getOffsetParent||dn,i=this.getDimensions,o=await i(t.floating);return{reference:cn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:i}=Xi(t);return{width:e,height:i}},getScale:en,isElement:Vi,isRTL:function(t){return"rtl"===Zi(t).direction}};function gn(t,e,i,o){void 0===o&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=o,h=tn(t),p=s||r?[...h?Yi(h):[],...Yi(e)]:[];p.forEach((t=>{s&&t.addEventListener("scroll",i,{passive:!0}),r&&t.addEventListener("resize",i)}));const d=h&&l?function(t,e){let i,o=null;const s=Ii(t);function r(){var t;clearTimeout(i),null==(t=o)||t.disconnect(),o=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:h,top:p,width:d,height:u}=t.getBoundingClientRect();if(l||e(),!d||!u)return;const g={rootMargin:-vi(p)+"px "+-vi(s.clientWidth-(h+d))+"px "+-vi(s.clientHeight-(p+u))+"px "+-vi(h)+"px",threshold:mi(0,gi(1,c))||1};let m=!0;function f(t){const e=t[0].intersectionRatio;if(e!==c){if(!m)return a();e?a(!1,e):i=setTimeout((()=>{a(!1,1e-7)}),1e3)}m=!1}try{o=new IntersectionObserver(f,{...g,root:s.ownerDocument})}catch(t){o=new IntersectionObserver(f,g)}o.observe(t)}(!0),r}(h,i):null;let u,g=-1,m=null;a&&(m=new ResizeObserver((t=>{let[o]=t;o&&o.target===h&&m&&(m.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var t;null==(t=m)||t.observe(e)}))),i()})),h&&!c&&m.observe(h),m.observe(e));let f=c?sn(t):null;return c&&function e(){const o=sn(t);!f||o.x===f.x&&o.y===f.y&&o.width===f.width&&o.height===f.height||i();f=o,u=requestAnimationFrame(e)}(),i(),()=>{var t;p.forEach((t=>{s&&t.removeEventListener("scroll",i),r&&t.removeEventListener("resize",i)})),null==d||d(),null==(t=m)||t.disconnect(),m=null,c&&cancelAnimationFrame(u)}}const mn=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:s,y:r,placement:a,middlewareData:l}=e,c=await async function(t,e){const{placement:i,platform:o,elements:s}=t,r=await(null==o.isRTL?void 0:o.isRTL(s.floating)),a=Si(i),l=$i(i),c="y"===Pi(i),h=["left","top"].includes(a)?-1:1,p=r&&c?-1:1,d=_i(e,t);let{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*p,y:u*h}:{x:u*h,y:g*p}}(e,t);return a===(null==(i=l.offset)?void 0:i.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:s+c.x,y:r+c.y,data:{...c,placement:a}}}}},fn=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:s}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...c}=_i(t,e),h={x:i,y:o},p=await Oi(e,c),d=Pi(Si(s)),u=xi(d);let g=h[u],m=h[d];if(r){const t="y"===u?"bottom":"right";g=Ci(g+p["y"===u?"top":"left"],g,g-p[t])}if(a){const t="y"===d?"bottom":"right";m=Ci(m+p["y"===d?"top":"left"],m,m-p[t])}const f=l.fn({...e,[u]:g,[d]:m});return{...f,data:{x:f.x-i,y:f.y-o}}}}},vn=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:s,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:h}=e,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...v}=_i(t,e);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const y=Si(s),w=Pi(l),C=Si(l)===l,_=await(null==c.isRTL?void 0:c.isRTL(h.floating)),S=u||(C||!f?[Li(l)]:function(t){const e=Li(t);return[Ri(t),e,Ri(e)]}(l)),$="none"!==m;!u&&$&&S.push(...function(t,e,i,o){const s=$i(t);let r=function(t,e,i){const o=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return i?e?s:o:e?o:s;case"left":case"right":return e?r:a;default:return[]}}(Si(t),"start"===i,o);return s&&(r=r.map((t=>t+"-"+s)),e&&(r=r.concat(r.map(Ri)))),r}(l,f,m,_));const x=[l,...S],P=await Oi(e,v),A=[];let D=(null==(o=r.flip)?void 0:o.overflows)||[];if(p&&A.push(P[y]),d){const t=function(t,e,i){void 0===i&&(i=!1);const o=$i(t),s=Ai(t),r=ki(s);let a="x"===s?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=Li(a)),[a,Li(a)]}(s,a,_);A.push(P[t[0]],P[t[1]])}if(D=[...D,{placement:s,overflows:A}],!A.every((t=>t<=0))){var T,E;const t=((null==(T=r.flip)?void 0:T.index)||0)+1,e=x[t];if(e)return{data:{index:t,overflows:D},reset:{placement:e}};let i=null==(E=D.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:E.placement;if(!i)switch(g){case"bestFit":{var O;const t=null==(O=D.filter((t=>{if($){const e=Pi(t.placement);return e===w||"y"===e}return!0})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:O[0];t&&(i=t);break}case"initialPlacement":i=l}if(s!==i)return{reset:{placement:i}}}return{}}}},bn=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:o,platform:s,elements:r}=e,{apply:a=()=>{},...l}=_i(t,e),c=await Oi(e,l),h=Si(i),p=$i(i),d="y"===Pi(i),{width:u,height:g}=o.floating;let m,f;"top"===h||"bottom"===h?(m=h,f=p===(await(null==s.isRTL?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(f=h,m="end"===p?"top":"bottom");const v=g-c.top-c.bottom,y=u-c.left-c.right,w=gi(g-c[m],v),C=gi(u-c[f],y),_=!e.middlewareData.shift;let S=w,$=C;if(d?$=p||_?gi(C,y):y:S=p||_?gi(w,v):v,_&&!p){const t=mi(c.left,0),e=mi(c.right,0),i=mi(c.top,0),o=mi(c.bottom,0);d?$=u-2*(0!==t||0!==e?t+e:mi(c.left,c.right)):S=g-2*(0!==i||0!==o?i+o:mi(c.top,c.bottom))}await a({...e,availableWidth:$,availableHeight:S});const x=await s.getDimensions(r.floating);return u!==x.width||g!==x.height?{reset:{rects:!0}}:{}}}},yn=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:s,rects:r,platform:a,elements:l,middlewareData:c}=e,{element:h,padding:p=0}=_i(t,e)||{};if(null==h)return{};const d=Di(p),u={x:i,y:o},g=Ai(s),m=ki(g),f=await a.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",C=v?"clientHeight":"clientWidth",_=r.reference[m]+r.reference[g]-u[g]-r.floating[m],S=u[g]-r.reference[g],$=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let x=$?$[C]:0;x&&await(null==a.isElement?void 0:a.isElement($))||(x=l.floating[C]||r.floating[m]);const P=_/2-S/2,A=x/2-f[m]/2-1,D=gi(d[y],A),T=gi(d[w],A),E=D,O=x-f[m]-T,F=x/2-f[m]/2+P,B=Ci(E,F,O),U=!c.arrow&&null!=$i(s)&&F!==B&&r.reference[m]/2-(F<E?D:T)-f[m]/2<0,W=U?F<E?F-E:F-O:0;return{[g]:u[g]+W,data:{[g]:B,centerOffset:F-B-W,...U&&{alignmentOffset:W}},reset:U}}}),wn=(t,e,i)=>{const o=new Map,s={platform:un,...i},r={...s.platform,_c:o};return(async(t,e,i)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:a}=i,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(e));let h=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:p,y:d}=Ei(h,o,c),u=o,g={},m=0;for(let i=0;i<l.length;i++){const{name:r,fn:f}=l[i],{x:v,y,data:w,reset:C}=await f({x:p,y:d,initialPlacement:o,placement:u,strategy:s,middlewareData:g,rects:h,platform:a,elements:{reference:t,floating:e}});p=null!=v?v:p,d=null!=y?y:d,g={...g,[r]:{...g[r],...w}},C&&m<=50&&(m++,"object"==typeof C&&(C.placement&&(u=C.placement),C.rects&&(h=!0===C.rects?await a.getElementRects({reference:t,floating:e,strategy:s}):C.rects),({x:p,y:d}=Ei(h,u,c))),i=-1)}return{x:p,y:d,placement:u,strategy:s,middlewareData:g}})(t,e,{...s,platform:r})},Cn=1;class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const _n=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends directive_i{constructor(t){if(super(t),t.type!==Cn||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return Re}});function Sn(t){return xn(t)}function $n(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function xn(t){for(let e=t;e;e=$n(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=$n(t);e;e=$n(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||"none"!==t.filter)return e;if("BODY"===e.tagName)return e}}return null}var kn=class extends ui{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let i=0,o=0,s=0,r=0,a=0,l=0,c=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(i=t.left,o=t.bottom,s=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(i=e.left,o=e.bottom,s=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(i=t.right,o=t.top,s=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(i=e.right,o=e.top,s=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=gn(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t()}))}reposition(){if(!this.active||!this.anchorEl)return;const t=[mn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(bn({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(vn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(fn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(bn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(yn({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>un.getOffsetParent(t,Sn):un.getOffsetParent;wn(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:pi(hi({},un),{getOffsetParent:e})}).then((({x:t,y:e,middlewareData:i,placement:o})=>{const s="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=i.arrow.x,e=i.arrow.y;let o="",a="",l="",c="";if("start"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?i:"",c=s?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":i,c=s?i:"",l="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof t?`${t}px`:"",o="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:l,left:c,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return Pe`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${_n({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${_n({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Pe`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};kn.styles=[ei,ti],di([ze(".popup")],kn.prototype,"popup",2),di([ze(".popup__arrow")],kn.prototype,"arrowEl",2),di([Ue()],kn.prototype,"anchor",2),di([Ue({type:Boolean,reflect:!0})],kn.prototype,"active",2),di([Ue({reflect:!0})],kn.prototype,"placement",2),di([Ue({reflect:!0})],kn.prototype,"strategy",2),di([Ue({type:Number})],kn.prototype,"distance",2),di([Ue({type:Number})],kn.prototype,"skidding",2),di([Ue({type:Boolean})],kn.prototype,"arrow",2),di([Ue({attribute:"arrow-placement"})],kn.prototype,"arrowPlacement",2),di([Ue({attribute:"arrow-padding",type:Number})],kn.prototype,"arrowPadding",2),di([Ue({type:Boolean})],kn.prototype,"flip",2),di([Ue({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],kn.prototype,"flipFallbackPlacements",2),di([Ue({attribute:"flip-fallback-strategy"})],kn.prototype,"flipFallbackStrategy",2),di([Ue({type:Object})],kn.prototype,"flipBoundary",2),di([Ue({attribute:"flip-padding",type:Number})],kn.prototype,"flipPadding",2),di([Ue({type:Boolean})],kn.prototype,"shift",2),di([Ue({type:Object})],kn.prototype,"shiftBoundary",2),di([Ue({attribute:"shift-padding",type:Number})],kn.prototype,"shiftPadding",2),di([Ue({attribute:"auto-size"})],kn.prototype,"autoSize",2),di([Ue()],kn.prototype,"sync",2),di([Ue({type:Object})],kn.prototype,"autoSizeBoundary",2),di([Ue({attribute:"auto-size-padding",type:Number})],kn.prototype,"autoSizePadding",2),di([Ue({attribute:"hover-bridge",type:Boolean})],kn.prototype,"hoverBridge",2);kn.define("sl-popup");const Pn=new WeakMap;function An(t,e){return function(i,o,s){let r=Pn.get(i.constructor);null==r&&Pn.set(i.constructor,r=[]),r.push({method:s.value,keys:Array.isArray(t)?t:[t],afterFirstUpdate:e?.afterFirstUpdate??!1})}}class GlElement extends lit_element_s{emit(t,e,i){const o=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:e});return this.dispatchEvent(o),o}update(t){const e=Pn.get(this.constructor);if(null!=e)for(const{keys:i,method:o,afterFirstUpdate:s}of e){if(s&&!this.hasUpdated)continue;const e=i.filter((e=>t.has(e)));e.length&&o.call(this,e)}super.update(t)}}var Rn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,Dn=(t,e,i,o)=>{for(var s,r=o>1?void 0:o?Ln(e,i):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Rn(e,i,r),r};let Tn=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=t=>{if(this.open&&this.hasTrigger("focus")){if(t.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handlePopupBlur=t=>{t.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=K(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),t)}},this.handleMouseOut=t=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=t.composedPath();if(e[e.length-2]===this)return;if(this.hasPopupFocus())return;const i=K(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),i)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(t){return this.trigger.split(" ").includes(t)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Y(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,Y(this,"gl-popover-after-hide")}render(){return Pe`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			arrow
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}};Tn.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},Tn.styles=Gt`
		:host {
			--hide-delay: 0ms;
			--show-delay: 500ms;

			display: contents;
		}

		.popover {
			--arrow-size: var(--sl-tooltip-arrow-size);
			--arrow-color: var(--sl-tooltip-background-color);
		}

		.popover::part(popup) {
			z-index: var(--sl-z-index-tooltip);
		}

		.popover::part(arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		.popover[placement^='top']::part(popup) {
			transform-origin: bottom;
		}

		.popover[placement^='bottom']::part(popup) {
			transform-origin: top;
		}

		.popover[placement^='left']::part(popup) {
			transform-origin: right;
		}

		.popover[placement^='right']::part(popup) {
			transform-origin: left;
		}

		.popover[data-current-placement^='top']::part(arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		.popover[data-current-placement^='bottom']::part(arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		.popover[data-current-placement^='left']::part(arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		.popover[data-current-placement^='right']::part(arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		.popover__body {
			display: block;
			width: fit-content;
			border: 1px solid var(--gl-tooltip-border-color);
			border-radius: var(--sl-tooltip-border-radius);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
			background-color: var(--sl-tooltip-background-color);
			font-family: var(--sl-tooltip-font-family);
			font-size: var(--sl-tooltip-font-size);
			font-weight: var(--sl-tooltip-font-weight);
			line-height: var(--sl-tooltip-line-height);
			text-align: start;
			white-space: normal;
			color: var(--sl-tooltip-color);
			padding: var(--sl-tooltip-padding);
			user-select: none;
			-webkit-user-select: none;
			max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
			/* max-height: var(--auto-size-available-height);
			overflow: auto; */
			pointer-events: all;
		}

		.popover[data-current-placement^='top'] .popover__body,
		.popover[data-current-placement^='bottom'] .popover__body {
			width: max-content;
		}

		/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
	`,Dn([ze("#popover")],Tn.prototype,"body",2),Dn([ze("sl-popup")],Tn.prototype,"popup",2),Dn([Ue({reflect:!0})],Tn.prototype,"placement",2),Dn([Ue({type:Object})],Tn.prototype,"anchor",2),Dn([Ue({reflect:!0,type:Boolean})],Tn.prototype,"disabled",2),Dn([Ue({type:Number})],Tn.prototype,"distance",2),Dn([Ue({reflect:!0,type:Boolean})],Tn.prototype,"open",2),Dn([Ue({type:Number})],Tn.prototype,"skidding",2),Dn([Ue()],Tn.prototype,"trigger",2),Dn([Ue({type:Boolean})],Tn.prototype,"hoist",2),Dn([An("open",{afterFirstUpdate:!0})],Tn.prototype,"handleOpenChange",1),Dn([An(["distance","hoist","placement","skidding"])],Tn.prototype,"handleOptionsChange",1),Dn([An("disabled")],Tn.prototype,"handleDisabledChange",1),Tn=Dn([Be("gl-popover")],Tn);var En=new Map,On=new WeakMap;function Fn(t){return null!=t?t:{keyframes:[],options:{duration:0}}}function Mn(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function In(t,e){En.set(t,Fn(e))}function Bn(t,e,i){const o=On.get(t);if(null==o?void 0:o[e])return Mn(o[e],i.dir);const s=En.get(e);return s?Mn(s,i.dir):{keyframes:[],options:{duration:0}}}var Vn=Gt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;function Hn(t,e){return new Promise((i=>{t.addEventListener(e,(function o(s){s.target===t&&(t.removeEventListener(e,o),i())}))}))}function Un(t,e,i){return new Promise((o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,pi(hi({},i),{duration:zn()?0:i.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})}))}function Wn(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function zn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Gn(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{t.cancel(),requestAnimationFrame(e)})))))}const Nn=new Set,jn=new Map;let qn,Zn="ltr",Jn="en";const Qn="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Qn){const t=new MutationObserver(Yn);Zn=document.documentElement.dir||"ltr",Jn=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Kn(...t){t.map((t=>{const e=t.$code.toLowerCase();jn.has(e)?jn.set(e,Object.assign(Object.assign({},jn.get(e)),t)):jn.set(e,t),qn||(qn=t)})),Yn()}function Yn(){Qn&&(Zn=document.documentElement.dir||"ltr",Jn=document.documentElement.lang||navigator.language),[...Nn.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}class LocalizeController{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Nn.add(this.host)}hostDisconnected(){Nn.delete(this.host)}dir(){return`${this.host.dir||Zn}`.toLowerCase()}lang(){return`${this.host.lang||Jn}`.toLowerCase()}getTranslationData(t){var e,i;const o=new Intl.Locale(t.replace(/_/g,"-")),s=null==o?void 0:o.language.toLowerCase(),r=null!==(i=null===(e=null==o?void 0:o.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:s,region:r,primary:jn.get(`${s}-${r}`),secondary:jn.get(s)}}exists(t,e){var i;const{primary:o,secondary:s}=this.getTranslationData(null!==(i=e.lang)&&void 0!==i?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(o&&o[t]||s&&s[t]||e.includeFallback&&qn&&qn[t])}term(t,...e){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let s;if(i&&i[t])s=i[t];else if(o&&o[t])s=o[t];else{if(!qn||!qn[t])return String(t);s=qn[t]}return"function"==typeof s?s(...e):s}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}}var Xn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Kn(Xn);var to=Xn,eo=class extends LocalizeController{};function io(t,e){const i=hi({waitUntilFirstUpdate:!1},e);return(e,o)=>{const{update:s}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),r=this[s];e!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](e,r))}})),s.call(this,t)}}}Kn(to);var no=class extends ui{constructor(){super(),this.localize=new eo(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Wn(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Wn(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Gn(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:i}=Bn(this,"tooltip.show",{dir:this.localize.dir()});await Un(this.popup.popup,e,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Gn(this.body);const{keyframes:t,options:i}=Bn(this,"tooltip.hide",{dir:this.localize.dir()});await Un(this.popup.popup,t,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Hn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Hn(this,"sl-after-hide")}render(){return Pe`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${_n({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};no.styles=[ei,Vn],no.dependencies={"sl-popup":kn},di([ze("slot:not([name])")],no.prototype,"defaultSlot",2),di([ze(".tooltip__body")],no.prototype,"body",2),di([ze("sl-popup")],no.prototype,"popup",2),di([Ue()],no.prototype,"content",2),di([Ue()],no.prototype,"placement",2),di([Ue({type:Boolean,reflect:!0})],no.prototype,"disabled",2),di([Ue({type:Number})],no.prototype,"distance",2),di([Ue({type:Boolean,reflect:!0})],no.prototype,"open",2),di([Ue({type:Number})],no.prototype,"skidding",2),di([Ue()],no.prototype,"trigger",2),di([Ue({type:Boolean})],no.prototype,"hoist",2),di([io("open",{waitUntilFirstUpdate:!0})],no.prototype,"handleOpenChange",1),di([io(["content","distance","hoist","placement","skidding"])],no.prototype,"handleOptionsChange",1),di([io("disabled")],no.prototype,"handleDisabledChange",1),In("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),In("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});no.define("sl-tooltip");var oo=Object.defineProperty,so=Object.getOwnPropertyDescriptor,ro=(t,e,i,o)=>{for(var s,r=o>1?void 0:o?so(e,i):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&oo(e,i,r),r};In("tooltip.show",null),In("tooltip.hide",null);let ao=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((t=>{for(const e of t)if("attributes"===e.type&&"data-current-placement"===e.attributeName){const t=e.target.getAttribute("data-current-placement");t?this.setAttribute("data-current-placement",t):this.removeAttribute("data-current-placement")}}));const t=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(t,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return Pe`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??Le}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};ao.styles=Gt`
		sl-tooltip {
			--max-width: 320px;
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}
	`,ro([Ue()],ao.prototype,"content",2),ro([Ue({reflect:!0})],ao.prototype,"placement",2),ro([Ue({type:Boolean})],ao.prototype,"disabled",2),ro([Ue({type:Number})],ao.prototype,"distance",2),ro([Ue({type:Boolean})],ao.prototype,"hoist",2),ao=ro([Be("gl-tooltip")],ao);var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,ho=(t,e,i,o)=>{for(var s,r=o>1?void 0:o?co(e,i):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&lo(e,i,r),r};let po=class extends lit_element_s{constructor(){super(...arguments),this.type="info"}render(){if(!this.promo)return;const t=this.renderPromo(this.promo);return t?"link"===this.type?Pe`<a
				class="link"
				href="${this.promo.command??"command:gitlens.plus.upgrade"}"
				title="${this.promo.commandTooltip}"
				>${t}</a
			>`:Pe`<p class="promo">${t}</p>`:void 0}renderPromo(t){switch(t.key){case"devexdays24":return Pe`<span class="header"><gl-svg-devexdays24-promo></gl-svg-devexdays24-promo>Sale:</span
					><span class="content"><b>Save up to 80% on GitLens Pro</b> - lowest price of the year!</span>`;case"pro50":return"link"===this.type?Pe`<span class="content"
						>Special: <b>1st seat of Pro is now 50%+ off.</b> See your special price.</span
					>`:Pe`<span class="content muted">Special: <b>1st seat of Pro is now 50%+ off</b></span>`}return Le}};po.styles=[Gt`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],ho([Ue({type:Object})],po.prototype,"promo",2),ho([Ue({reflect:!0,type:String})],po.prototype,"type",2),po=ho([Be("gl-promo")],po);let uo=class extends lit_element_s{render(){return Ae`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- a-prettier-ignore -->
			<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 25">
				<path
					d="M64.06 13.26c0 .73-.55 1.32-1.24 1.32-.68 0-1.24-.6-1.24-1.32 0-.73.56-1.33 1.24-1.33.69 0 1.24.6 1.24 1.33ZM29.84 19.64h-1.66l-4.2-13h1.57l3.47 11.06L32.5 6.65h1.55l-4.2 12.99ZM22.93 19.64H15.6c-1.65 0-2.43-.4-2.43-2.5v-8c0-2.1.78-2.5 2.43-2.5h5.38c1.66 0 2.44.4 2.44 2.5v2.96c0 2.1-.78 2.5-2.44 2.5h-6.3v2.51c0 1.04.33 1.06 2.14 1.06h6.1v1.47Zm-1-7.56V9.2c0-.69-.13-1.07-1.01-1.07h-5.23c-.88 0-1.01.38-1.01 1.07v3.94h6.24c.88 0 1.01-.38 1.01-1.06ZM8.79 19.64H3.4c-1.66 0-2.43-.4-2.43-2.5v-8c0-2.1.77-2.5 2.43-2.5h6.33V.75h1.48v16.4c0 2.1-.77 2.5-2.43 2.5Zm.95-2.53V8.13H3.5c-.89 0-1.02.38-1.02 1.07v7.91c0 .69.13 1.06 1.02 1.06h5.22c.89 0 1.02-.37 1.02-1.06ZM109.26 19.64h-6.7v-1.47h6.61c.89 0 1.02-.37 1.02-1.06v-2.2c0-.68-.13-1.06-1.02-1.06h-4.7c-1.65 0-2.42-.4-2.42-2.5v-2.2c0-2.1.77-2.5 2.43-2.5h6.66v1.48h-6.6c-.88 0-1.01.38-1.01 1.07v2.12c0 .64.13 1.07.95 1.07h4.78c1.66 0 2.43.4 2.43 2.5v2.24c0 2.1-.77 2.5-2.43 2.5ZM95.77 24.36H94.4l1.48-4.72-4.43-13h1.6l3.54 10.73 3.43-10.72h1.5l-5.75 17.71ZM88.22 19.64h-5.38c-1.66 0-2.43-.4-2.43-2.5v-3.12c0-2.1.77-2.5 2.43-2.5h6.33V9.2c0-.69-.14-1.07-1.02-1.07h-7.5V6.65h7.57c1.66 0 2.43.4 2.43 2.5v7.98c0 2.1-.77 2.5-2.43 2.5Zm.95-2.53V13h-6.24c-.89 0-1.02.38-1.02 1.06v3.05c0 .69.13 1.06 1.02 1.06h5.22c.88 0 1.02-.37 1.02-1.06ZM76.27 19.64h-5.38c-1.66 0-2.43-.4-2.43-2.5V9.14c0-2.1.77-2.5 2.43-2.5h6.33V.74h1.48v16.4c0 2.1-.77 2.5-2.43 2.5Zm.95-2.53V8.13h-6.24c-.89 0-1.02.38-1.02 1.07v7.91c0 .69.13 1.06 1.02 1.06h5.22c.89 0 1.02-.37 1.02-1.06ZM45.6 19.64h-7.33c-1.66 0-2.43-.4-2.43-2.5v-8c0-2.1.77-2.5 2.43-2.5h5.38c1.66 0 2.43.4 2.43 2.5v2.96c0 2.1-.77 2.5-2.43 2.5h-5.53v1.92c0 .8.2.83 1.17.83h6.3v2.29Zm-1.77-8.15v-1.7c0-.69-.13-.83-.8-.83h-4.11c-.67 0-.8.14-.8.83v2.52h4.91c.66 0 .8-.14.8-.82ZM137.37 19.64h-2.65V15.4h-7.97v-2.84l4.98-9.99h3.05l-5.13 10.11h5.07V6.65h2.65v12.99ZM125.83 19.64h-10.18V16.6l6.8-6.56c.86-.85.9-1.4.9-2.08V6c0-.69-.13-.71-.69-.71h-3.65c-.55 0-.68.02-.68.7v1.68h-2.68v-2.6c0-2.1.77-2.5 2.43-2.5h5.5c1.65 0 2.42.4 2.42 2.5v2.63c0 2.1-.02 2.9-1.37 4.2l-5.24 5.01h6.44v2.72ZM46.42 22.65c0-.63.48-1.14 1.07-1.14h10.1c.6 0 1.08.5 1.08 1.14 0 .63-.48 1.14-1.07 1.14H47.49c-.59 0-1.07-.51-1.07-1.14ZM47.54 17.98l2.99-4.46-3-5.03c-.42-.7.05-1.61.83-1.61h1.6c.35 0 .68.2.85.52l3.46 6.38-3.45 5.4a.97.97 0 0 1-.81.46h-1.67c-.8 0-1.27-.97-.8-1.66Z"
					fill="currentColor"
				/>
				<path
					opacity=".5"
					d="m57.8 17.98-2.99-4.46 3-5.03c.42-.7-.05-1.61-.83-1.61h-1.6c-.35 0-.68.2-.85.52l-3.46 6.38 3.45 5.4c.18.29.49.46.81.46H57c.8 0 1.27-.97.8-1.66Z"
					fill="currentColor"
				/>
			</svg>
		`}};uo.styles=[Gt`
			svg {
				max-width: 8rem;
				height: auto;
				vertical-align: text-bottom;
			}
		`],uo=ho([Be("gl-svg-devexdays24-promo")],uo);var go=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,fo=(t,e,i,o)=>{for(var s,r=o>1?void 0:o?mo(e,i):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&go(e,i,r),r};let vo=class extends lit_element_s{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:Ze(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return Pe`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const t=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===je.VerificationRequired)return Pe`${t} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(i=this.subscription,"free"!==(o=i.plan.actual.id)&&"free+"!==o||this.cloud&&null!=this.subscription.account)return Pe`${t} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(e=this.state)&&(1===e||3===e))return Pe`${t} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var e,i,o;return this.cloud?Pe`${t}<span class="badge-icon">☁️</span>`:t}renderPopoverHeader(){const t=Pe`<span class="popup-title"
			>${this.preview?"Preview feature":"Pro feature"}${this.cloud?" ☁️":""}</span
		>`;return this.state===je.Paid?Pe`<div class="popup-header">${t}</div>`:this.cloud?this.preview?Pe`<div class="popup-header">
					${t}<span class="popup-subtitle"
						>Requires an account and may require a paid plan in the future</span
					>
				</div>`:Pe`<div class="popup-header">
				${t}<span class="popup-subtitle"> Requires a paid plan</span>
			</div>`:this.preview?Pe`<div class="popup-header">
				${t}<span class="popup-subtitle">May require a paid plan in the future</span>
			</div>`:Pe`<div class="popup-header">
			${t}<span class="popup-subtitle"> Requires a paid plan for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return Le;let t;switch(this.state){case je.Paid:t=Pe`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${bo(Ge.ShowAccountView,void 0)}"
							>${qe(this.subscription?.plan.actual.id??Ne.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case je.VerificationRequired:t=Pe`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${bo(Ge.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${bo(Ge.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case je.FreePlusInTrial:{const e=this.daysRemaining;t=Pe`<p>
						You have
						<strong>${e<1?"<1 day":W("day",e,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case je.FreePlusTrialExpired:t=Pe`<p>
						Your Pro trial as ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(Pe`<p>Please upgrade for full access to Pro features:</p>`)}`;break;case je.FreePlusTrialReactivationEligible:t=Pe`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another 7 days!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${bo(Ge.PlusReactivateProTrial,this.source)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===je.FreeInPreviewTrial){const e=this.daysRemaining;t=Pe`<p>
							You have
							<strong>${e<1?"<1 day":W("day",e,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}t=Pe`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return Pe`<div class="popup-content">${t}</div>`}renderStartTrialActions(){return Pe`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${bo(Ge.PlusSignUp,this.source)}"
				>Start 7-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${bo(Ge.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(t){const e=function(t){if(null==t)return;const e=Date.now();for(const i of Qe)if((null==i.states||i.states.includes(t))&&(null==i.expiresOn||i.expiresOn>e)&&(null==i.startsOn||i.startsOn<e))return i}(this.state);return Pe`<div class="actions">
			${t??Le}
			<gl-button
				appearance="primary"
				density="tight"
				href="${bo(Ge.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo(e)}
		</div>`}renderPromo(t){return Pe`<gl-promo .promo=${t}></gl-promo>`}};function bo(t,e){return`command:${t}${e?`?${encodeURIComponent(JSON.stringify(e))}`:""}`}vo.styles=[Ye,Xe,Gt`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus {
				${zt(Ke)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],fo([Ue({type:Boolean})],vo.prototype,"cloud",2),fo([Ue({reflect:!0})],vo.prototype,"placement",2),fo([Ue({type:Boolean})],vo.prototype,"preview",2),fo([Ue({type:Object})],vo.prototype,"source",2),fo([Ue({attribute:!1})],vo.prototype,"subscription",2),vo=fo([Be("gl-feature-badge")],vo);var yo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor;let Co=class extends lit_element_s{render(){return Pe`<svg
			alt="GitLens"
			width="159"
			height="46"
			viewBox="0 0 159 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="23" cy="23" r="23" fill="#04090D" />
			<circle cx="23" cy="23" r="23" fill="url(#paint0_linear_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint1_radial_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint2_radial_43_72231)" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23 45.0272C35.1653 45.0272 45.0272 35.1653 45.0272 23C45.0272 10.8347 35.1653 0.97281 23 0.97281C10.8347 0.97281 0.97281 10.8347 0.97281 23C0.97281 35.1653 10.8347 45.0272 23 45.0272ZM23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
				fill="white"
				style="mix-blend-mode:soft-light"
			/>
			<mask id="path-3-inside-1_43_72231" fill="white">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				/>
			</mask>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				fill="url(#paint3_linear_43_72231)"
			/>
			<path
				d="M23.6825 13.6317L22.7391 13.3001L22.517 13.9317L23.0164 14.3776L23.6825 13.6317ZM23.7041 11.4729L24.652 11.1544L23.7041 11.4729ZM25.7364 15.5815L25.0281 16.2874V16.2874L25.7364 15.5815ZM29.656 20.0599L28.8521 20.6547L29.2988 21.2583L30.003 20.9978L29.656 20.0599ZM28.1778 21.0658L28.9218 21.734L29.4805 21.1119L28.9671 20.4518L28.1778 21.0658ZM24.5714 16.9401L23.8494 17.632V17.632L24.5714 16.9401ZM22.7043 15.0996L23.3845 14.3666L22.7107 13.7413L22.031 14.3601L22.7043 15.0996ZM21.3681 15.8837L21.6885 16.831L21.6885 16.831L21.3681 15.8837ZM20.7039 16.0445L20.5567 15.0553L19.7758 15.1715L19.7076 15.9581L20.7039 16.0445ZM20.8797 30.15L19.8878 30.2774L19.9875 31.0538L20.7651 31.1434L20.8797 30.15ZM22.4173 30.6606L21.9194 31.5278H21.9194L22.4173 30.6606ZM23.969 35.4466L23.1004 34.9512L23.969 35.4466ZM19.0708 36.5294L19.5687 35.6621L19.0708 36.5294ZM17.5191 31.7433L18.3878 32.2387H18.3878L17.5191 31.7433ZM19.0957 30.381L19.4695 31.3085L20.2212 31.0056L20.0805 30.2074L19.0957 30.381ZM18.8723 15.8552L19.8671 15.9566L19.9454 15.1888L19.2225 14.9185L18.8723 15.8552ZM16.8475 13.7923L15.8996 14.1107L16.8475 13.7923ZM24.6259 13.9634C24.9355 13.0825 24.97 12.1009 24.652 11.1544L22.7562 11.7913C22.9243 12.2919 22.9094 12.8155 22.7391 13.3001L24.6259 13.9634ZM26.4448 14.8756C25.6877 14.116 24.9877 13.4565 24.3485 12.8858L23.0164 14.3776C23.6258 14.9218 24.2977 15.5545 25.0281 16.2874L26.4448 14.8756ZM30.4598 19.4651C29.6154 18.3239 28.3296 16.7669 26.4448 14.8756L25.0281 16.2874C26.8464 18.1119 28.0679 19.5949 28.8521 20.6547L30.4598 19.4651ZM30.9435 18.8304C30.3707 18.8304 29.8196 18.9331 29.309 19.122L30.003 20.9978C30.2948 20.8898 30.6112 20.8304 30.9435 20.8304V18.8304ZM35.6656 23.5653C35.6656 20.9535 33.5547 18.8304 30.9435 18.8304V20.8304C32.4437 20.8304 33.6656 22.0516 33.6656 23.5653H35.6656ZM30.9435 28.3002C33.5547 28.3002 35.6656 26.1771 35.6656 23.5653H33.6656C33.6656 25.079 32.4437 26.3002 30.9435 26.3002V28.3002ZM26.2214 23.5653C26.2214 26.1771 28.3323 28.3002 30.9435 28.3002V26.3002C29.4434 26.3002 28.2214 25.079 28.2214 23.5653H26.2214ZM27.4338 20.3976C26.6806 21.2362 26.2214 22.3484 26.2214 23.5653H28.2214C28.2214 22.8598 28.486 22.2192 28.9218 21.734L27.4338 20.3976ZM23.8494 17.632C25.4595 19.3123 26.6038 20.671 27.3884 21.6798L28.9671 20.4518C28.1382 19.3862 26.9486 17.9756 25.2934 16.2483L23.8494 17.632ZM22.024 15.8325C22.5932 16.3607 23.2039 16.9585 23.8494 17.632L25.2934 16.2483C24.6208 15.5464 23.9822 14.9212 23.3845 14.3666L22.024 15.8325ZM21.6885 16.831C22.3336 16.6128 22.9041 16.27 23.3775 15.839L22.031 14.3601C21.7593 14.6076 21.4283 14.8077 21.0476 14.9365L21.6885 16.831ZM20.851 17.0336C21.1313 16.9919 21.4115 16.9247 21.6885 16.831L21.0476 14.9365C20.8838 14.9919 20.7195 15.0311 20.5567 15.0553L20.851 17.0336ZM21.4653 22.2681C21.4653 19.6222 21.5729 17.5986 21.7001 16.1308L19.7076 15.9581C19.5751 17.4867 19.4653 19.5681 19.4653 22.2681H21.4653ZM21.8715 30.0227C21.6881 28.5945 21.4653 26.0756 21.4653 22.2681H19.4653C19.4653 26.1534 19.6927 28.7578 19.8878 30.2774L21.8715 30.0227ZM20.7651 31.1434C21.1508 31.1879 21.5448 31.3127 21.9194 31.5278L22.9153 29.7933C22.3041 29.4425 21.6492 29.2321 20.9942 29.1566L20.7651 31.1434ZM21.9194 31.5278C23.3025 32.3219 23.7079 33.8857 23.1004 34.9512L24.8377 35.9419C26.0784 33.7662 25.0944 31.0445 22.9153 29.7933L21.9194 31.5278ZM23.1004 34.9512C22.4943 36.0141 20.9505 36.4555 19.5687 35.6621L18.5729 37.3966C20.7533 38.6485 23.5955 38.1204 24.8377 35.9419L23.1004 34.9512ZM19.5687 35.6621C18.1856 34.868 17.7802 33.3042 18.3878 32.2387L16.6504 31.248C15.4097 33.4237 16.3938 36.1454 18.5729 37.3966L19.5687 35.6621ZM18.3878 32.2387C18.6319 31.8105 19.01 31.4937 19.4695 31.3085L18.7218 29.4535C17.8741 29.7952 17.133 30.4016 16.6504 31.248L18.3878 32.2387ZM17.6075 22.2997C17.6075 26.6892 17.8689 29.1823 18.1108 30.5546L20.0805 30.2074C19.8656 28.9885 19.6075 26.6202 19.6075 22.2997H17.6075ZM17.8775 15.7537C17.7264 17.2346 17.6075 19.3393 17.6075 22.2997H19.6075C19.6075 19.3905 19.7245 17.3553 19.8671 15.9566L17.8775 15.7537ZM15.8996 14.1107C16.3345 15.4053 17.33 16.3461 18.5221 16.7919L19.2225 14.9185C18.5498 14.667 18.0237 14.1531 17.7955 13.4738L15.8996 14.1107ZM18.8631 8.43412C16.4958 9.23492 15.1049 11.7452 15.8996 14.1107L17.7955 13.4738C17.3837 12.2482 18.0845 10.8088 19.504 10.3287L18.8631 8.43412ZM24.652 11.1544C23.8567 8.78703 21.2317 7.6329 18.8631 8.43412L19.504 10.3287C20.9222 9.84892 22.345 10.5676 22.7562 11.7913L24.652 11.1544Z"
				fill="white"
				style="mix-blend-mode:soft-light"
				mask="url(#path-3-inside-1_43_72231)"
			/>
			<path
				d="M71.554 18.5081C71.0032 17.4524 70.2382 16.6607 69.2591 16.1328C68.2799 15.5846 67.1477 15.3106 65.8626 15.3106C64.455 15.3106 63.2005 15.6252 62.0989 16.2546C60.9974 16.884 60.1304 17.7773 59.498 18.9345C58.8861 20.0917 58.5801 21.4317 58.5801 22.9543C58.5801 24.477 58.8861 25.8271 59.498 27.0046C60.1304 28.1618 60.9974 29.0551 62.0989 29.6845C63.2005 30.3138 64.455 30.6285 65.8626 30.6285C67.7597 30.6285 69.2999 30.1007 70.483 29.0449C71.6662 27.9892 72.3903 26.5579 72.6555 24.7511H64.6692V21.9798H76.3886C76.3886 21.9798 76.4973 22.789 76.4973 23.4052C76.4973 23.9332 76.3886 24.6901 76.3886 24.6901C76.1642 26.3346 75.5726 27.8471 74.6139 29.2277C73.6755 30.6082 72.4413 31.7147 70.9114 32.5471C69.4019 33.3592 67.7189 33.7652 65.8626 33.7652C63.8635 33.7652 62.0377 33.3084 60.3854 32.3948C58.7331 31.4609 57.4173 30.1717 56.4381 28.5272C55.4794 26.8828 55 25.0251 55 22.9543C55 20.8835 55.4794 19.0259 56.4381 17.3814C57.4173 15.7369 58.7331 14.4579 60.3854 13.5443C62.0581 12.6104 63.8839 12.1434 65.8626 12.1434C68.1269 12.1434 70.1362 12.7017 71.8906 13.8184C73.6653 14.9147 74.9505 16.4779 75.746 18.5081H71.554Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path d="M82.7053 19.7872V33.5825H79.2171V19.7872H82.7053Z" fill="#F7DEFF" class="letters" />
			<path
				d="M90.7428 19.6349V28.9231C90.7428 29.5525 90.8856 30.0093 91.1712 30.2935C91.4772 30.5575 91.9872 30.6894 92.7011 30.6894H94.8431V33.5825H92.0892C90.5184 33.5825 89.3149 33.217 88.4785 32.4862C87.6421 31.7553 87.2239 30.5676 87.2239 28.9231V19.6349H85.235V16.8028H87.2239V12.4049H90.7428V16.8028H94.8431V19.6349H90.7428Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M100.934 30.7808H109.505V33.5825H97.4461V12.4175H100.934V30.7808Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M125.883 24.7815C125.883 25.4109 125.842 25.9793 125.76 26.4869H112.878C112.98 27.8268 113.48 28.9028 114.378 29.7149C115.275 30.527 116.377 30.933 117.682 30.933C119.559 30.933 120.885 30.1514 121.66 28.5882H125.424C124.914 30.1311 123.986 31.4 122.639 32.3948C121.313 33.3693 119.661 33.8566 117.682 33.8566C116.071 33.8566 114.622 33.5013 113.337 32.7907C112.072 32.0598 111.073 31.0447 110.339 29.7454C109.625 28.4257 109.268 26.9031 109.268 25.1774C109.268 23.4517 109.614 21.9392 110.308 20.6399C111.022 19.3202 112.011 18.3051 113.276 17.5946C114.561 16.884 116.03 16.5287 117.682 16.5287C119.273 16.5287 120.691 16.8738 121.935 17.5641C123.18 18.2544 124.149 19.2289 124.842 20.4876C125.536 21.726 125.883 23.1573 125.883 24.7815ZM122.241 23.6852C122.221 22.4062 121.762 21.3809 120.865 20.6094C119.967 19.8379 118.855 19.4522 117.529 19.4522C116.326 19.4522 115.296 19.8379 114.439 20.6094C113.582 21.3606 113.072 22.3859 112.909 23.6852H122.241Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M136.29 16.5287C137.616 16.5287 138.799 16.8028 139.84 17.3509C140.901 17.8991 141.727 18.7112 142.318 19.7872C142.91 20.8632 143.206 22.1625 143.206 23.6852V33.5825H139.748V24.2029C139.748 22.7005 139.371 21.5535 138.616 20.7617C137.861 19.9496 136.831 19.5436 135.525 19.5436C134.22 19.5436 133.179 19.9496 132.404 20.7617C131.65 21.5535 131.272 22.7005 131.272 24.2029V33.5825H127.784V16.8028H131.272V18.7213C131.843 18.031 132.568 17.493 133.445 17.1073C134.342 16.7216 135.291 16.5287 136.29 16.5287Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M152.243 33.8566C150.917 33.8566 149.724 33.6231 148.663 33.1561C147.623 32.6689 146.797 32.0192 146.185 31.2071C145.573 30.3747 145.246 29.451 145.206 28.4359H148.816C148.877 29.1465 149.214 29.7454 149.826 30.2326C150.458 30.6996 151.244 30.933 152.182 30.933C153.161 30.933 153.916 30.7503 154.446 30.3849C154.997 29.9991 155.273 29.5119 155.273 28.9231C155.273 28.2938 154.967 27.8268 154.355 27.5223C153.763 27.2178 152.815 26.8828 151.509 26.5173C150.244 26.1722 149.214 25.8372 148.418 25.5124C147.623 25.1875 146.929 24.6901 146.338 24.0202C145.767 23.3502 145.481 22.4671 145.481 21.3707C145.481 20.4775 145.746 19.6654 146.277 18.9345C146.807 18.1833 147.562 17.5946 148.541 17.1682C149.54 16.7419 150.683 16.5287 151.968 16.5287C153.885 16.5287 155.426 17.0159 156.588 17.9904C157.772 18.9446 158.404 20.2541 158.486 21.9189H154.997C154.936 21.1677 154.63 20.5688 154.079 20.1222C153.528 19.6755 152.784 19.4522 151.846 19.4522C150.928 19.4522 150.224 19.6248 149.734 19.9699C149.245 20.315 149 20.7718 149 21.3403C149 21.7869 149.163 22.1625 149.489 22.4671C149.816 22.7716 150.214 23.0152 150.683 23.1979C151.152 23.3604 151.846 23.5735 152.764 23.8375C153.987 24.1623 154.987 24.4973 155.762 24.8424C156.558 25.1672 157.241 25.6545 157.812 26.3042C158.384 26.9538 158.679 27.8167 158.7 28.8927C158.7 29.8469 158.435 30.6996 157.904 31.4508C157.374 32.2019 156.619 32.7907 155.64 33.217C154.681 33.6434 153.549 33.8566 152.243 33.8566Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M83.4777 14.9015C83.4777 16.2735 82.3602 17.3857 80.9817 17.3857C79.6031 17.3857 78.4856 16.2735 78.4856 14.9015C78.4856 13.5295 79.6031 12.4173 80.9817 12.4173C82.3602 12.4173 83.4777 13.5295 83.4777 14.9015Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_43_72231"
					x1="-5.14199"
					y1="15.148"
					x2="35.1957"
					y2="53.4671"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F1C6FF" />
					<stop offset="0.104167" stop-color="#DD74FF" />
					<stop offset="0.352245" stop-color="#DD74FF" stop-opacity="0" />
					<stop offset="0.62022" stop-color="#4E032E" stop-opacity="0" />
					<stop offset="0.825426" stop-color="#3C17A7" />
					<stop offset="1" stop-color="#3687FF" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(51.1591 15.2989) rotate(138.744) scale(31.2464 31.2515)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#00A3FF" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(-2.91103 29.7569) rotate(42.9991) scale(28.6895 28.728)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#0D1017" stop-opacity="0" />
				</radialGradient>
				<linearGradient
					id="paint3_linear_43_72231"
					x1="23.4169"
					y1="14.5226"
					x2="41.2576"
					y2="49.9689"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="white" />
					<stop offset="1" stop-color="#B7E1FF" stop-opacity="0.58" />
				</linearGradient>
			</defs>
		</svg>`}};Co.styles=[Gt`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			:host-context(.vscode-high-contrast-light) .letters,
			:host-context(.vscode-light) .letters {
				fill: var(--color-foreground);
			}

			svg {
				vertical-align: middle;
			}
		`],Co=((t,e,i,o)=>{for(var s,r=o>1?void 0:o?wo(e,i):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&yo(e,i,r),r})([Be("gitlens-logo")],Co);const _o=(new Date).getTimezoneOffset()/60*100,So=new Date(`Wed Jul 25 2018 19:18:00 GMT${_o>=0?"-":"+"}${String(Math.abs(_o)).padStart(4,"0")}`);class SettingsApp extends App{constructor(){super("SettingsApp"),this._scopes=null,this._activeSection="general",this._changes=Object.create(null),this._sections=new Map,this._updating=!1}onInitialize(){const t=document.getElementById("scopes");if(null!=t&&this.state.scopes.length>1){for(const[e,i]of this.state.scopes){const o=document.createElement("option");o.value=e,o.innerHTML=i,this.state.scope===e&&(o.selected=!0),t.appendChild(o)}t.parentElement.parentElement.classList.remove("hidden"),this._scopes=t}let e=83;const i=document.querySelector(".hero__area--sticky");null!=i&&(e=i.clientHeight),this._observer=new IntersectionObserver(this.onObserver.bind(this),{rootMargin:`-${e}px 0px 0px 0px`});for(const t of document.querySelectorAll("section[id]>.section__header"))this._sections.set(t.parentElement.id,!1),this._observer.observe(t);for(const t of document.querySelectorAll("[data-setting]")){t.title||"checkbox"!==t.type||(t.title=`Setting name: "gitlens.${t.name}"`);for(const e of document.querySelectorAll(`label[for="${t.id}"]`))e.title||(e.title=`Setting name: "gitlens.${t.name}"`)}}onBind(){const t=super.onBind?.()??[];return t.push(Q.on("input[type=checkbox][data-setting]","change",((t,e)=>this.onInputChecked(e))),Q.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","blur",((t,e)=>this.onInputBlurred(e))),Q.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","focus",((t,e)=>this.onInputFocused(e))),Q.on("input[type=text][data-setting][data-setting-preview], input[type=number][data-setting][data-setting-preview]","input",((t,e)=>this.onInputChanged(e))),Q.on("button[data-setting-clear]","click",((t,e)=>this.onButtonClicked(e))),Q.on("select[data-setting]","change",((t,e)=>this.onInputSelected(e))),Q.on(".token[data-token]","mousedown",((t,e)=>this.onTokenMouseDown(e,t))),Q.on(".section--collapsible>.section__header","click",((t,e)=>this.onSectionHeaderClicked(e,t))),Q.on(".setting--expandable .setting__expander","click",((t,e)=>this.onSettingExpanderCicked(e,t))),Q.on('a[data-action="jump"]',"mousedown",(t=>{t.target?.focus(),t.stopPropagation(),t.preventDefault()})),Q.on('a[data-action="jump"]',"click",((t,e)=>this.onJumpToLinkClicked(e,t))),Q.on("[data-action]","mousedown",(t=>{t.target?.focus(),t.stopPropagation(),t.preventDefault()})),Q.on("[data-action]","click",((t,e)=>this.onActionLinkClicked(e,t)))),t}onMessageReceived(t){switch(!0){case h.is(t):this.scrollToAnchor(t.params.anchor,t.params.scrollBehavior);break;case a.is(t):this.state.config=t.params.config,this.state.customSettings=t.params.customSettings,this.state.timestamp=Date.now(),this.setState(this.state),this.updateState();break;case p.is(t):this.state.hasAccount=t.params.hasAccount,this.setState(this.state),this.renderAutolinkIntegration();break;case d.is(t):this.state.hasConnectedJira=t.params.hasConnectedJira,this.setState(this.state),this.renderAutolinkIntegration();break;default:super.onMessageReceived?.(t)}}applyChanges(){this.sendCommand(s,{changes:{...this._changes},removes:Object.keys(this._changes).filter((t=>void 0===this._changes[t])),scope:this.getSettingsScope()}),this._changes=Object.create(null)}getSettingsScope(){return null!=this._scopes?this._scopes.options[this._scopes.selectedIndex].value:"user"}onInputBlurred(t){this.log(`onInputBlurred(${t.name}): value=${t.value})`);const e=document.getElementById(`${t.name}.popup`);null!=e&&e.classList.add("hidden");let i=t.value;if(null!=i&&0!==i.length||(i=t.dataset.defaultValue,void 0===i&&(i=null)),"arrayObject"===t.dataset.settingType){const e=t.name.split("."),o=e[0],s=parseInt(e[1],10),r=e.slice(2);let a=this.getSettingValue(o);if(null!=i||void 0!==a&&0!==a?.length){a=a??[];let e=a[s];(null!=i||null==i&&void 0!==e)&&(void 0===e&&(e=Object.create(null),a[s]=e),xo(e,r.join("."),"number"===t.type&&null!=i?Number(i):i),this._changes[o]=a)}else void 0!==a&&(this._changes[o]=void 0)}else this._changes[t.name]="number"===t.type&&null!=i?Number(i):i;this.applyChanges()}onButtonClicked(t){if("arrayObject"===t.dataset.settingType){const e=t.name.split("."),i=e[0],o=this.getSettingValue(i);if(void 0===o)return;const s=parseInt(e[1],10);if(null==o[s])return;o.splice(s,1),this._changes[i]=o.length?o:void 0,this.applyChanges()}}onInputChanged(t){if(!this._updating)for(const e of document.querySelectorAll(`span[data-setting-preview="${t.name}"]`))this.updatePreview(e,t.value)}onInputChecked(t){if(!this._updating){switch(this.log(`onInputChecked(${t.name}): checked=${t.checked}, value=${t.value})`),t.dataset.settingType){case"object":{const e=t.name.split("."),i=e.splice(0,1)[0],o=this.getSettingValue(i)??Object.create(null);t.checked?xo(o,e.join("."),Ao(t.value)):xo(o,e.join("."),!1),this._changes[i]=o;break}case"array":{const e=this.getSettingValue(t.name)??[];if(Array.isArray(e)){if(t.checked)e.includes(t.value)||e.push(t.value);else{const i=e.indexOf(t.value);-1!==i&&e.splice(i,1)}this._changes[t.name]=e}break}case"arrayObject":{const e=t.name.split("."),i=e[0],o=parseInt(e[1],10),s=e.slice(2),r=this.getSettingValue(i)??[],a=r[o]??Object.create(null);void 0===r[o]&&(r[o]=a),t.checked?xo(r[o],s.join("."),Ao(t.value)):xo(r[o],s.join("."),!1),this._changes[i]=r;break}case"custom":this._changes[t.name]=t.checked;break;default:t.checked?this._changes[t.name]=Ao(t.value):this._changes[t.name]=null!=t.dataset.valueOff&&t.dataset.valueOff}this.setAdditionalSettings(t.checked?t.dataset.addSettingsOn:t.dataset.addSettingsOff),this.applyChanges()}}onInputFocused(t){this.log(`onInputFocused(${t.name}): value=${t.value}`);const e=document.getElementById(`${t.name}.popup`);if(null!=e){if(0===e.childElementCount){const t=document.querySelector("#token-popup")?.content.cloneNode(!0);null!=t&&e.appendChild(t)}e.classList.remove("hidden")}}onInputSelected(t){if(t===this._scopes||this._updating)return;const e=t.options[t.selectedIndex].value;this.log(`onInputSelected(${t.name}): value=${e}`),this._changes[t.name]=$o(e),this.applyChanges()}onTokenMouseDown(t,e){if(this._updating)return;this.log(`onTokenMouseDown(${t.id})`);const i=t.closest(".setting");if(null==i)return;const o=i.querySelector("input[type=text], input:not([type])");if(null==o)return;const s=`\${${t.dataset.token}}`;let r=o.selectionStart;null!=r?(o.value=`${o.value.substring(0,r)}${s}${o.value.substr(o.selectionEnd??r)}`,r+=s.length):r=o.value.length,o.focus(),o.setSelectionRange(r,r),r===o.value.length&&(o.scrollLeft=o.scrollWidth),setTimeout((()=>this.onInputChanged(o)),0),setTimeout((()=>o.focus()),250),e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault()}scrollToAnchor(t,e,i){i=83;const o=document.querySelector(".hero__area--sticky");null!=o&&(i=o.clientHeight);const s=document.getElementById(t);null!=s&&this.scrollTo(s,e,i)}scrollTo(t,e,i){const o=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(i??0);window.scrollTo({top:o,behavior:e??"smooth"});const s=()=>{null!=this._scrollTimer&&clearTimeout(this._scrollTimer),this._scrollTimer=setTimeout((()=>{window.removeEventListener("scroll",s);const r=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(i??0);Math.abs(o-r)<2?t.focus({preventScroll:!0}):this.scrollTo(t,e,i)}),50)};window.addEventListener("scroll",s,!1)}evaluateStateExpression(t,e){let i=!1;for(const o of t.trim().split("&")){const[t,s,r]=ko(o);switch(s){case"=":{let o=e[t];void 0===o&&(o=this.getSettingValue(t),(void 0===o||null===o&&"string"!=typeof r)&&(o=!1)),i=void 0!==r?r===String(o):Boolean(o);break}case"!":{let o=e[t];void 0===o&&(o=this.getSettingValue(t),(void 0===o||null===o&&"string"!=typeof r)&&(o=!1)),i=void 0!==r?r!==String(o):!o;break}case"+":if(void 0!==r){const e=this.getSettingValue(t);i=void 0!==e&&e.includes(r.toString())}}if(!i)break}return i}getCustomSettingValue(t){return this.state.customSettings?.[t]}getSettingValue(t){const e=this.getCustomSettingValue(t);return null!=e?e:function(t,e){return e.split(".").reduce(((t={},e)=>null==t?void 0:t[e]),t)}(this.state.config,t)}updateState(){const{version:t}=this.state;document.getElementById("version").textContent=t;const e=document.activeElement?.id;var i;this.renderAutolinkIntegration(),this.renderAutolinks(),e?.startsWith("autolinks.")&&queueMicrotask((()=>{document.getElementById(e)?.focus()})),this._updating=!0,i=this.state.config.defaultDateLocale,Tt="string"==typeof i?"system"===i||0===i.trim().length?void 0:[i]:i??void 0,Et=void 0,Ot=void 0,Dt.clear(),Ft.clear(),Lt=void 0;try{for(const t of document.querySelectorAll("input[type=checkbox][data-setting]"))if("custom"===t.dataset.settingType)t.checked=this.getCustomSettingValue(t.name)??!1;else if("array"===t.dataset.settingType)t.checked=(this.getSettingValue(t.name)??[]).includes(t.value);else if(null!=t.dataset.valueOff){const e=this.getSettingValue(t.name);t.checked=t.dataset.valueOff!==e,t.indeterminate=null===e}else t.checked=this.getSettingValue(t.name)??!1;for(const t of document.querySelectorAll("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]"))t.value=this.getSettingValue(t.name)??"";for(const t of document.querySelectorAll("select[data-setting]")){const e=this.getSettingValue(t.name),i=t.querySelector(`option[value='${e}']`);null!=i&&(i.selected=!0)}for(const t of document.querySelectorAll("span[data-setting-preview]"))this.updatePreview(t)}finally{this._updating=!1}const o=Po(this.state.config);if(null!=this.state.customSettings)for(const[t,e]of Object.entries(this.state.customSettings))o[t]=e;this.setVisibility(o),this.setEnablement(o)}setAdditionalSettings(t){if(!t)return;const e=function(t){const e=t.trim().split(",");return e.map((t=>{const[e,i]=t.split("=");return[e,$o(i)]}))}(t);for(const[t,i]of e)this._changes[t]=i}setEnablement(t){for(const e of document.querySelectorAll("[data-enablement]")){const i=!this.evaluateStateExpression(e.dataset.enablement,t);if(i?e.setAttribute("disabled",""):e.removeAttribute("disabled"),e.matches("input,select"))e.disabled=i;else{const t=e.querySelector("input,select");if(null==t)continue;t.disabled=i}}}setVisibility(t){for(const e of document.querySelectorAll("[data-visibility]"))e.classList.toggle("hidden",!this.evaluateStateExpression(e.dataset.visibility,t))}updatePreview(t,e){const i=t.dataset.settingPreviewType;switch(i){case"date":if(void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),!e){const i=t.dataset.settingPreviewDefaultLookup;null!=i&&(e=this.getSettingValue(i)),null==e&&(e=t.dataset.settingPreviewDefault)}t.innerText=null==e?"":Mt(So,e,void 0,!1);break;case"date-locale":{void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),e||(e=void 0);const i=this.getSettingValue(t.dataset.settingPreviewDefault)??"MMMM Do, YYYY h:mma";try{t.innerText=Mt(So,i,e,!1)}catch(e){t.innerText=e.message}break}case"commit":case"commit-uncommitted":if(void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),!e&&null==(e=t.dataset.settingPreviewDefault)){const i=t.dataset.settingPreviewDefaultLookup;null!=i&&(e=this.getSettingValue(i))}if(null==e)return void(t.innerText="");this.sendRequest(c,{key:t.dataset.settingPreview,type:i,format:e}).then((e=>{t.innerText=e.preview??""}))}}onObserver(t,e){for(const e of t)this._sections.set(e.target.parentElement.id,e.isIntersecting);let i;for(const[t,e]of this._sections.entries())if(e){i=t;break}if(void 0===i){if(1!==t.length)return;const e=t[0];if(null==e.boundingClientRect||null==e.rootBounds)return;if(i=e.target.parentElement.id,e.boundingClientRect.top>=e.rootBounds.bottom){const t=[...this._sections.keys()],e=t.indexOf(i);if(e<=0)return;i=t[e-1]}}this._activeSection!==i&&(void 0!==this._activeSection&&this.toggleJumpLink(this._activeSection,!1),this._activeSection=i,this.toggleJumpLink(this._activeSection,!0))}onActionLinkClicked(t,e){switch(t.dataset.action){case"collapse":for(const t of document.querySelectorAll(".section--collapsible"))t.classList.add("collapsed");document.querySelector('[data-action="collapse"]').classList.add("hidden"),document.querySelector('[data-action="expand"]').classList.remove("hidden");break;case"expand":for(const t of document.querySelectorAll(".section--collapsible"))t.classList.remove("collapsed");document.querySelector('[data-action="collapse"]').classList.remove("hidden"),document.querySelector('[data-action="expand"]').classList.add("hidden");break;case"show":if(t.dataset.actionTarget)for(const e of document.querySelectorAll(`[data-region="${t.dataset.actionTarget}"]`))e.classList.remove("hidden"),e.querySelector("input,select,textarea,button")?.focus();break;case"hide":if(t.dataset.actionTarget)for(const e of document.querySelectorAll(`[data-region="${t.dataset.actionTarget}"]`))e.classList.add("hidden")}e.preventDefault(),e.stopPropagation()}onJumpToLinkClicked(t,e){const i=t.getAttribute("href");if(null==i)return;const o=i.substr(1);this.scrollToAnchor(o,"smooth"),e.stopPropagation(),e.preventDefault()}onSectionHeaderClicked(t,e){e.target.matches("a, input, label, i.icon__info")||t.parentElement.classList.toggle("collapsed")}onSettingExpanderCicked(t,e){t.parentElement.parentElement.classList.toggle("expanded")}toggleJumpLink(t,e){const i=document.querySelector(`a.sidebar__jump-link[href="#${t}"]`);null!=i&&i.classList.toggle("active",e)}renderAutolinkIntegration(){const t=document.querySelector('[data-component="autolink-integration"]');if(null==t)return;const{hasAccount:e,hasConnectedJira:i}=this.state;let o=`<a href="command:gitlens.plus.cloudIntegrations.connect?${encodeURIComponent(JSON.stringify({integrationIds:["jira"],source:"settings",detail:{action:"connect",integration:"jira"}}))}">Connect to Jira Cloud</a> &mdash; ${e?"":"sign up and "}get access to automatic rich Jira autolinks.`;e&&i&&(o='<i class="codicon codicon-check" style="vertical-align: text-bottom"></i> Jira connected &mdash; automatic rich Jira autolinks are enabled.'),t.innerHTML=o}renderAutolinks(){const t=document.querySelector('[data-component="autolinks"]');if(null==t)return;const e=(t,e,i=!1,o=!0)=>`\n\t\t\t<div class="setting${i?' hidden" data-region="autolink':""}">\n\t\t\t\t<div class="setting__group">\n\t\t\t\t\t<div class="setting__input setting__input--short setting__input--with-actions">\n\t\t\t\t\t\t<label for="autolinks.${t}.prefix">Prefix</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tid="autolinks.${t}.prefix"\n\t\t\t\t\t\t\tname="autolinks.${t}.prefix"\n\t\t\t\t\t\t\tplaceholder="TICKET-"\n\t\t\t\t\t\t\tdata-setting\n\t\t\t\t\t\t\tdata-setting-type="arrayObject"\n\t\t\t\t\t\t\t${e?.prefix?`value="${encodeURIComponent(e.prefix)}"`:""}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div class="setting__input-actions">\n\t\t\t\t\t\t\t<div class="toggle-button">\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\tid="autolinks.${t}.ignoreCase"\n\t\t\t\t\t\t\t\t\tname="autolinks.${t}.ignoreCase"\n\t\t\t\t\t\t\t\t\ttype="checkbox"\n\t\t\t\t\t\t\t\t\tclass="toggle-button__control"\n\t\t\t\t\t\t\t\t\tdata-setting\n\t\t\t\t\t\t\t\t\tdata-setting-type="arrayObject"\n\t\t\t\t\t\t\t\t\t${e?.ignoreCase?"checked":""}\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<label class="toggle-button__label" for="autolinks.${t}.ignoreCase" title="Case-sensitive" aria-label="Case-sensitive">Aa</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="toggle-button">\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\tid="autolinks.${t}.alphanumeric"\n\t\t\t\t\t\t\t\t\tname="autolinks.${t}.alphanumeric"\n\t\t\t\t\t\t\t\t\ttype="checkbox"\n\t\t\t\t\t\t\t\t\tclass="toggle-button__control"\n\t\t\t\t\t\t\t\t\tdata-setting\n\t\t\t\t\t\t\t\t\tdata-setting-type="arrayObject"\n\t\t\t\t\t\t\t\t\t${e?.alphanumeric?"checked":""}\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<label class="toggle-button__label" for="autolinks.${t}.alphanumeric" title="Alphanumeric" aria-label="Alphanumeric">a1</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="setting__input setting__input--long setting__input--centered">\n\t\t\t\t\t\t<label for="autolinks.${t}.url">URL</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tid="autolinks.${t}.url"\n\t\t\t\t\t\t\tname="autolinks.${t}.url"\n\t\t\t\t\t\t\ttype="text"\n\t\t\t\t\t\t\tplaceholder="https://example.com/TICKET?q=&lt;num&gt;"\n\t\t\t\t\t\t\tdata-setting\n\t\t\t\t\t\t\tdata-setting-type="arrayObject"\n\t\t\t\t\t\t\t${e?.url?`value="${encodeURIComponent(e.url)}"`:""}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t${i?'\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\tclass="button button--compact button--flat-subtle"\n\t\t\t\t\t\t\t\ttype="button"\n\t\t\t\t\t\t\t\tdata-action="hide"\n\t\t\t\t\t\t\t\tdata-action-target="autolink"\n\t\t\t\t\t\t\t\ttitle="Delete"\n\t\t\t\t\t\t\t\taria-label="Delete"\n\t\t\t\t\t\t\t><i class="codicon codicon-close"></i></button>\n\t\t\t\t\t\t':`\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\tid="autolinks.${t}.delete"\n\t\t\t\t\t\t\t\tname="autolinks.${t}.delete"\n\t\t\t\t\t\t\t\tclass="button button--compact button--flat-subtle"\n\t\t\t\t\t\t\t\ttype="button"\n\t\t\t\t\t\t\t\tdata-setting-type="arrayObject"\n\t\t\t\t\t\t\t\tdata-setting-clear\n\t\t\t\t\t\t\t\ttitle="Delete"\n\t\t\t\t\t\t\t\taria-label="Delete"\n\t\t\t\t\t\t\t><i class="codicon codicon-close"></i></button>\n\t\t\t\t\t\t`}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t${o&&i?'\n\t\t\t<div class="setting__hint">\n\t\t\t\t<span style="line-height: 2rem">\n\t\t\t\t\t<i class="icon icon--sm icon__info"></i> Matches prefixes that are followed by a reference value within commit messages.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The URL must contain a <code>&lt;num&gt;</code> for the reference value to be included in the link.\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t':""}\n\t\t\t</div>\n\t\t`,i=[],o=(this.state.config.autolinks?.length||0)>0;o&&this.state.config.autolinks?.forEach(((t,o)=>i.push(e(o,t)))),i.push(e(this.state.config.autolinks?.length??0,void 0,!0,!o)),o&&i.push('\n\t\t\t<div class="setting__hint">\n\t\t\t\t<span style="line-height: 2rem">\n\t\t\t\t\t<i class="icon icon--sm icon__info"></i> Matches prefixes that are followed by a reference value within commit messages.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The URL must contain a <code>&lt;num&gt;</code> for the reference value to be included in the link.\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t'),t.innerHTML=i.join("")}}function $o(t){return"true"===t||"false"!==t&&("null"===t?null:t)}function xo(t,e,i){const o=e.split("."),s=o.length,r=s-1;let a=-1,l=t;for(;null!=l&&++a<s;){const t=o[a];let e=i;if(a!==r){const i=l[t];e="object"==typeof i?i:{}}l[t]=e,l=l[t]}return t}function ko(t){const[e,i,o]=t.trim().split(/([=+!])/);return[e.trim(),void 0!==i?i.trim():"=",void 0!==o?o.trim():o]}function Po(t,e){const i={};for(const o in t){const s=t[o];Array.isArray(s)||("object"==typeof s?Object.assign(i,Po(s,void 0===e?o:`${e}.${o}`)):i[void 0===e?o:`${e}.${o}`]=s)}return i}function Ao(t){switch(t){case"on":return!0;case"null":return null;case"undefined":return;default:return t}}new SettingsApp;var Ro=e.R;export{Ro as SettingsApp};
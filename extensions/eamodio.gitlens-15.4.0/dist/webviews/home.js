var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{b:()=>HomeApp});var i=(e=>(e.Free="free",e.FreePlus="free+",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(i||{}),o=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",e[e.Paid=6]="Paid",e))(o||{});function s(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function r(e,t){return a(e.plan.effective.expiresOn,t)}function a(e,t){return null!=e?function(e,t,i,o){const s=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),r=o??Math.floor;switch(i){case"days":return r(s/864e5);case"hours":return r(s/36e5);case"minutes":return r(s/6e4);case"seconds":return r(s/1e3);default:return s}}(Date.now(),new Date(e),t,Math.round):void 0}const l=[{key:"devexdays24",code:"DEVEXDAYS24",states:[o.FreePlusInTrial,o.FreePlusTrialExpired,o.FreePlusTrialReactivationEligible],expiresOn:new Date("2024-09-10T06:59:00.000Z").getTime(),commandTooltip:"Sale: Save up to 80% on GitLens Pro - lowest price of the year!"},{key:"pro50",states:[o.Free,o.FreeInPreviewTrial,o.FreePlusInTrial,o.FreePlusTrialExpired,o.FreePlusTrialReactivationEligible],commandTooltip:"Special: 1st seat of Pro is now 50%+ off. See your special price."}];function c(e){if(null==e)return;const t=Date.now();for(const i of l)if((null==i.states||i.states.includes(e))&&(null==i.expiresOn||i.expiresOn>t)&&(null==i.startsOn||i.startsOn<t))return i}class IpcCall{constructor(e,t,i=!1,o=!1){this.scope=e,this.reset=i,this.pack=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const h=new IpcCommand("core","webview/ready"),p=new IpcCommand("core","webview/focus/changed"),d=new IpcCommand("core","command/execute"),u=(new IpcCommand("core","configuration/update"),new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const g="home",f=new IpcCommand(g,"section/collapse"),m=new IpcNotification(g,"repositories/didChange"),v=new IpcNotification(g,"integrations/didChange"),y=new IpcNotification(g,"subscription/didChange"),w=new IpcNotification(g,"org/settings/didChange");function C(e,t,i){let o,s,r,a,l;function c(e){const i=e-(s??0);return null==s||i>=t||i<0}function h(){const e=Date.now();if(c(e))p();else{l=setTimeout(h,t-(e-(s??0)))}}function p(){return l=void 0,o?function(){const t=o,i=r;return o=r=void 0,a=e.apply(i,t),a}():(o=void 0,r=void 0,a)}function d(...e){const p=Date.now(),d=c(p);return o=null!=i&&o?i(o,e):e,r=this,s=p,d&&null==l?(l=setTimeout(h,t),a):(null==l&&(l=setTimeout(h,t)),a)}return d.cancel=function(){null!=l&&clearTimeout(l),o=void 0,s=void 0,r=void 0,l=void 0},d.flush=function(){return null==l?a:(clearTimeout(l),p())},d.pending=function(){return null!=l},d}const x=",",_="=",$="{",S="(",P=")",A=/\(([\s\S]*)\)/,D=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,T=/\s?=.*$/;function E(e){const t=.001*performance.now();let i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],o-=e[1],o<0&&(i--,o+=1e9)),[i,o]}const O=500;function F(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const B=F(),z=new Map;function U(e){z.delete(e)}function W(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function N(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const i=t?B.current:void 0,o=B.next();return{scopeId:o,prevScopeId:i,prefix:`${W(o)} ${e}`}}Error;function G(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;var j=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(j||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"])),Object.freeze({codeSuggest:"https://gitkraken.com/solutions/code-suggest?utm_source=gitlens-extension&utm_medium=in-app-links",cloudPatches:"https://gitkraken.com/solutions/cloud-patches?utm_source=gitlens-extension&utm_medium=in-app-links",graph:"https://gitkraken.com/solutions/commit-graph?utm_source=gitlens-extension&utm_medium=in-app-links",launchpad:"https://gitkraken.com/solutions/launchpad?utm_source=gitlens-extension&utm_medium=in-app-links",platform:"https://gitkraken.com/devex?utm_source=gitlens-extension&utm_medium=in-app-links",pricing:"https://gitkraken.com/gitlens/pricing?utm_source=gitlens-extension&utm_medium=in-app-links",proFeatures:"https://gitkraken.com/gitlens/pro-features?utm_source=gitlens-extension&utm_medium=in-app-links",security:"https://help.gitkraken.com/gitlens/security?utm_source=gitlens-extension&utm_medium=in-app-links",workspaces:"https://gitkraken.com/solutions/workspaces?utm_source=gitlens-extension&utm_medium=in-app-links",cli:"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links",browserExtension:"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links",desktop:"https://gitkraken.com/git-client?utm_source=gitlens-extension&utm_medium=in-app-links",releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:"https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?utm_source=gitlens-extension&utm_medium=in-app-links"});const{fromCharCode:q}=String;new TextEncoder;function Q(e){const[t,i]=E(e);return 1e3*t+Math.floor(i/1e6)}function Z(e,t,i){if(null==i)return`${t} ${e}${1===t?"":"s"}`;const o=1===t?e:i.plural??`${e}s`;return i.only?o:`${0===t?i.zero??t:i.format?.(t)??t}${i.infix??" "}${o}`}const K=Symbol("logInstanceNameFn");function J(e){return function(e,t=!1){let i,o,s,r,a,l=0,c=!1,h=!1,p=!0;null!=e&&({args:i,if:o,enter:s,exit:r,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:p=!0}=e);l>0&&(h=!0,p=!0);p&&(c=!0);const d=ee.isDebugging,u=t?ee.debug:ee.log,g=d?"debug":"info";return(e,t,f)=>{let m,v;if("function"==typeof f.value?(m=f.value,v="value"):"function"==typeof f.get&&(m=f.get,v="get"),null==m||null==v)throw new Error("Not supported");const y=!1!==i?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(D,"")||t,t=t.slice(0,t.indexOf($));let i=t.indexOf(S),o=t.indexOf(P);i=i>=0?i+1:0,o=o>0?o:t.indexOf(_),t=t.slice(i,o),t=`(${t})`;const s=A.exec(t);return null!=s?s[1].split(x).map((e=>e.trim().replace(T,""))):[]}(m):[];f[v]=function(...e){if(!d&&!ee.enabled(g)||null!=o&&!o.apply(this,e))return m.apply(this,e);const f=B.current,v=B.next(),w=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let i=t?.name??"";const o=i.indexOf("_");i=-1===o?i:i.substr(o+1),null!=t?.[K]&&(i=t[K](e,i));return i}(this):void 0;let C,x=w?c?`${W(v,f)} ${w}.${t}`:`${w}.${t}`:t;null!=a&&(x=a({id:v,instance:this,instanceName:w??"",name:t,prefix:x},...e)),c&&(C=function(e,t){return t={prevScopeId:B.current,...t},z.set(e,t),t}(v,{scopeId:v,prevScopeId:f,prefix:x}));const _=null!=s?s(...e):"";let $;if(!1===i||0===e.length)$="",h||u.call(ee,`${x}${_}`);else{let t;$="";let o,s,r,a=-1;for(r of e){if(o=y[++a],t=i?.[a],null!=t){if("boolean"==typeof t)continue;if($.length>0&&($+=", "),"string"==typeof t){$+=t;continue}s=String(t(r))}else $.length>0&&($+=", "),s=ee.toLoggable(r);$+=o?`${o}=${s}`:s}h||u.call(ee,$?`${x}${_}(${$})`:`${x}${_}`)}if(h||p||null!=r){const t=p?E():void 0,i=e=>{const i=void 0!==t?` [${Q(t)}ms]`:"";h?ee.error(e,$?`${x}${_}(${$})`:`${x}${_}`,C?.exitDetails?`failed${C.exitDetails}${i}`:`failed${i}`):ee.error(e,x,C?.exitDetails?`failed${C.exitDetails}${i}`:`failed${i}`),c&&U(v)};let o;try{o=m.apply(this,e)}catch(e){throw i(e),e}const s=e=>{let i,o,s,a;if(null!=t?(i=Q(t),i>O?(o=ee.warn,s=` [*${i}ms] (slow)`):(o=u,s=` [${i}ms]`)):(s="",o=u),null!=r)if("function"==typeof r)try{a=r(e)}catch(e){a=`@log.exit error: ${e}`}else!0===r&&(a=`returned ${ee.toLoggable(e)}`);else C?.exitFailed?(a=C.exitFailed,o=ee.error):a="completed";h?(0===l||i>l)&&o.call(ee,$?`${x}${_}(${$}) ${a}${C?.exitDetails||""}${s}`:`${x}${_} ${a}${C?.exitDetails||""}${s}`):o.call(ee,$?`${x}(${$}) ${a}${C?.exitDetails||""}${s}`:`${x} ${a}${C?.exitDetails||""}${s}`),c&&U(v)};return null!=o&&G(o)?o.then(s,i):s(o),o}return m.apply(this,e)}}}(e,!0)}const Y=new Set(["accessToken","password","token"]),X=function(e,t){return Y.has(e)?`<${t}>`:t},ee=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,i=!1){this.provider=e,this._isDebugging=i,this.logLevel=t}enabled(e){return this.level>=te(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=te(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...i){if(this.level<1&&!this.isDebugging)return;let o;if(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`,null==o){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,i)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(t??=this.provider.sanitize??X,Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const i=t.map((e=>this.toLoggable(e))).join(", ");return 0!==i.length?` — ${i}`:""}};function te(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const ie={enabled:e=>ee.enabled(e)||ee.isDebugging,log:(e,t,i,...o)=>{switch(e){case"error":ee.error("",t,i,...o);break;case"warn":ee.warn(t,i,...o);break;case"info":ee.log(t,i,...o);break;default:ee.debug(t,i,...o)}}};var oe;function ne(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function se(e,t){return new Promise((i=>{e.addEventListener(t,(function o(s){s.target===e&&(e.removeEventListener(t,o),i())}))}))}(oe||(oe={})).on=function(e,t,i,o){let s=!1;if("string"==typeof e){const r=function(t){const o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,r,o??!0),{dispose:()=>{s||(s=!0,document.removeEventListener(t,r,o??!0))}}}const r=function(e){i(e,this)};return e.addEventListener(t,r,o??!1),{dispose:()=>{s||(s=!0,e.removeEventListener(t,r,o??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...i){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:N(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??ie,this._time=E(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=E(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=E(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[i,o]=E(this._time),s=1e3*i+Math.floor(o/1e6),r=e?.message??"";this.logProvider.log(s>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${s}ms]${e?.suffix??""}`)}}const re=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,i)=>{null==this.listeners&&(this.listeners=new LinkedList);const o=this.listeners.push(null==t?e:[e,t]),s={dispose:()=>{s.dispose=_Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(s),s}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};re._noop=function(){};let ae=re;const le={done:!0,value:void 0},ce=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};ce.Undefined=new ce(void 0);let he=ce;class LinkedList{constructor(){this._first=he.Undefined,this._last=he.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===he.Undefined}clear(){this._first=he.Undefined,this._last=he.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const i=new he(e);if(this._first===he.Undefined)this._first=i,this._last=i;else if(t){const e=this._last;this._last=i,i.prev=e,e.next=i}else{const e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===he.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===he.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==he.Undefined&&e.next!==he.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===he.Undefined&&e.next===he.Undefined?(this._first=he.Undefined,this._last=he.Undefined):e.next===he.Undefined?(this._last=this._last.prev,this._last.next=he.Undefined):e.prev===he.Undefined&&(this._first=this._first.next,this._first.prev=he.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===he.Undefined?le:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==he.Undefined;t=t.next)e.push(t.element);return e}}var pe=Object.defineProperty,de=Object.getOwnPropertyDescriptor,ue=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?de(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&pe(t,i,r),r};let ge;function fe(){return ge??=acquireVsCodeApi()}const me=F();function be(){return`webview:${me.next()}`}let ve=class{constructor(e){this.appName=e,this._onReceiveMessage=new ae,this._pendingHandlers=new Map,this._api=fe(),this._disposable=oe.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=z.get(B.current),i=e.data;if(i.packed&&i.params instanceof Uint8Array){const o=function(e,t,...i){return(t?.provider??ie).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...i):void 0}(N(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,i.params=JSON.parse(this._textDecoder.decode(i.params)),o?.stop()}if(null==i.completionId)this._onReceiveMessage.fire(i);else{const e=we(i.method,i.completionId);this._pendingHandlers.get(e)?.(i)}}sendCommand(e,t){const i=be();this.postMessage({id:i,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const i=be(),o=new Promise(((t,o)=>{const s=we(e.response.method,i);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(s)}r=setTimeout((()=>{a.call(this),o(new Error(`Timed out waiting for completion of ${s}`))}),6e4),this._pendingHandlers.set(s,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,completionId:i}),o}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var ye;function we(e,t){return`${e}|${t}`}ue([J({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],ve.prototype,"onMessageReceived",1),ue([J({args:{0:e=>e.method,1:!1}})],ve.prototype,"sendCommand",1),ue([J({args:{0:e=>e.method,1:!1,2:!1}})],ve.prototype,"sendRequest",1),ue([J({args:{0:e=>`${e.id}, method=${e.method}`}})],ve.prototype,"postMessage",1),ve=ue([(ye=(e,t)=>`${e.appName}(${t})`,e=>{e[K]=ye})],ve);function Ce(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=Ce(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Ce(Math.max(Math.min(1,t),0),3),this.l=Ce(Math.max(Math.min(1,i),0),3),this.a=Ce(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,i=e.g/255,o=e.b/255,s=e.a,r=Math.max(t,i,o),a=Math.min(t,i,o);let l=0,c=0;const h=(a+r)/2,p=r-a;if(p>0){switch(c=Math.min(h<=.5?p/(2*h):p/(2-2*h),1),r){case t:l=(i-o)/p+(i<o?6:0);break;case i:l=(o-t)/p+2;break;case o:l=(t-i)/p+4}l*=60,l=Math.round(l)}return new HSLA(l,c,h,s)}static _hue2rgb(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){const t=e.h/360,{s:i,l:o,a:s}=e;let r,a,l;if(0===i)r=a=l=o;else{const e=o<.5?o*(1+i):o+i-o*i,s=2*o-e;r=HSLA._hue2rgb(s,e,t+1/3),a=HSLA._hue2rgb(s,e,t),l=HSLA._hue2rgb(s,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),s)}}class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Ce(Math.max(Math.min(1,t),0),3),this.v=Ce(Math.max(Math.min(1,i),0),3),this.a=Ce(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,i=e.g/255,o=e.b/255,s=Math.max(t,i,o),r=s-Math.min(t,i,o),a=0===s?0:r/s;let l;return l=0===r?0:s===t?((i-o)/r%6+6)%6:s===i?(o-t)/r+2:(t-i)/r+4,new HSVA(Math.round(60*l),a,s,e.a)}static toRGBA(e){const{h:t,s:i,v:o,a:s}=e,r=o*i,a=r*(1-Math.abs(t/60%2-1)),l=o-r;let[c,h,p]=[0,0,0];return t<60?(c=r,h=a):t<120?(c=a,h=r):t<180?(h=r,p=a):t<240?(h=a,p=r):t<300?(c=a,p=r):t<=360&&(c=r,p=a),c=Math.round(255*(c+l)),h=Math.round(255*(h+l)),p=Math.round(255*(p+l)),new RGBA(c,h,p,s)}}function xe(e,t){return t.getPropertyValue(e).trim()}const ke=class _Color{static from(e){return e instanceof _Color?e:Ae(e)||_Color.red}static fromCssVariable(e,t){return Ae(xe(e,t))||_Color.red}static fromHex(e){return De(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return Ce(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new _e(new RGBA(0,0,0,e.rgba.a));if(1===t)return new _e(new RGBA(255,255,255,e.rgba.a));const i=e.getRelativeLuminance();let o=20;const s=(e,i)=>{const r=e.mix(i,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!o--?r:a>t?s(e,r):s(r,i)},r=(i>t?s(_e.black,e):s(e,_e.white)).rgba;return new _e(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:i,b:o,a:s}=this.rgba;return new _Color(new RGBA(t,i,o,s*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,i=this.rgba.a,o=t.a,s=i+o*(1-i);if(s<1e-6)return _Color.transparent;const r=this.rgba.r*i/s+t.r*o*(1-i)/s,a=this.rgba.g*i/s+t.g*o*(1-i)/s,l=this.rgba.b*i/s+t.b*o*(1-i)/s;return new _Color(new RGBA(r,a,l,s))}mix(e,t){return function(e,t,i){const o=e.rgba,s=t.rgba;return new _e(new RGBA(o.r+i*(s.r-o.r),o.g+i*(s.g-o.g),o.b+i*(s.b-o.b),o.a+i*(s.a-o.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:i,b:o,a:s}=this.rgba;return new _Color(new RGBA(e.rgba.r-s*(e.rgba.r-t),e.rgba.g-s*(e.rgba.g-i),e.rgba.b-s*(e.rgba.b-o),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const i=1-e.rgba.a;return new _Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return Pe(e);return $e(e)}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;const o=e.getRelativeLuminance(),s=t.getRelativeLuminance();return i=i*(s-o)/s,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;const o=e.getRelativeLuminance();return i=i*(o-t.getRelativeLuminance())/o,e.darken(i)}};ke.white=new ke(new RGBA(255,255,255,1)),ke.black=new ke(new RGBA(0,0,0,1)),ke.red=new ke(new RGBA(255,0,0,1)),ke.blue=new ke(new RGBA(0,0,255,1)),ke.green=new ke(new RGBA(0,255,0,1)),ke.cyan=new ke(new RGBA(0,255,255,1)),ke.lightgrey=new ke(new RGBA(211,211,211,1)),ke.transparent=new ke(new RGBA(0,0,0,0));let _e=ke;function $e(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function Se(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function Pe(e){return`#${Se(e.rgba.r)}${Se(e.rgba.g)}${Se(e.rgba.b)}`}const Re=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function Ae(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===j.Hash)return De(e);const t=Re.exec(e);if(null==t)return null;const i=t[1];let o;switch(i){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(i){case"rgb":case"rgba":return new _e(new RGBA(o[0],o[1],o[2],o[3]));case"hsl":case"hsla":return new _e(new HSLA(o[0],o[1],o[2],o[3]))}return _e.red}function De(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==j.Hash)return null;switch(t){case 7:{const t=16*Te(e.charCodeAt(1))+Te(e.charCodeAt(2)),i=16*Te(e.charCodeAt(3))+Te(e.charCodeAt(4)),o=16*Te(e.charCodeAt(5))+Te(e.charCodeAt(6));return new _e(new RGBA(t,i,o,1))}case 9:{const t=16*Te(e.charCodeAt(1))+Te(e.charCodeAt(2)),i=16*Te(e.charCodeAt(3))+Te(e.charCodeAt(4)),o=16*Te(e.charCodeAt(5))+Te(e.charCodeAt(6)),s=16*Te(e.charCodeAt(7))+Te(e.charCodeAt(8));return new _e(new RGBA(t,i,o,s/255))}case 4:{const t=Te(e.charCodeAt(1)),i=Te(e.charCodeAt(2)),o=Te(e.charCodeAt(3));return new _e(new RGBA(16*t+t,16*i+i,16*o+o))}case 5:{const t=Te(e.charCodeAt(1)),i=Te(e.charCodeAt(2)),o=Te(e.charCodeAt(3)),s=Te(e.charCodeAt(4));return new _e(new RGBA(16*t+t,16*i+i,16*o+o,(16*s+s)/255))}default:return null}}function Te(e){switch(e){case j.Digit0:return 0;case j.Digit1:return 1;case j.Digit2:return 2;case j.Digit3:return 3;case j.Digit4:return 4;case j.Digit5:return 5;case j.Digit6:return 6;case j.Digit7:return 7;case j.Digit8:return 8;case j.Digit9:return 9;case j.a:case j.A:return 10;case j.b:case j.B:return 11;case j.c:case j.C:return 12;case j.d:case j.D:return 13;case j.e:case j.E:return 14;case j.f:case j.F:return 15}return 0}const Ee=new ae,Le=Ee.event;function Oe(e){const t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,s=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),r=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=xe("--vscode-editor-background",i);let l=xe("--vscode-editor-foreground",i);return l||(l=xe("--vscode-foreground",i)),{colors:{background:a,foreground:l},computedStyle:i,isLightTheme:s,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],i=Oe();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(i),t.push(Le(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",ee.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=fe(),this._hostIpc=new ve(this.appName),t.push(this._hostIpc),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Ee.fire(Oe(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===u.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(h,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(oe.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=C((e=>{this.sendCommand(p,e)}),150);this.bindDisposables.push(oe.on(document,"focusin",(t=>{const i=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===i||(this._focused=!0,this._inputFocused=i,e({focused:!0,inputFocused:i}))})),oe.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?ee.log(e,...t):ee.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}const Fe=globalThis,Be=Fe.ShadowRoot&&(void 0===Fe.ShadyCSS||Fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ie=Symbol(),Me=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Be&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=Me.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Me.set(t,e))}return e}toString(){return this.cssText}}const ze=e=>new n("string"==typeof e?e:e+"",void 0,Ie),Ue=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new n(i,e,Ie)},He=Be?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ze(t)})(e):e,{is:We,defineProperty:Ve,getOwnPropertyDescriptor:Ne,getOwnPropertyNames:Ge,getOwnPropertySymbols:je,getPrototypeOf:qe}=Object,Qe=globalThis,Ze=Qe.trustedTypes,Ke=Ze?Ze.emptyScript:"",Je=Qe.reactiveElementPolyfillSupport,Ye=(e,t)=>e,Xe={toAttribute(e,t){switch(t){case Boolean:e=e?Ke:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},et=(e,t)=>!We(e,t),tt={attribute:!0,type:String,converter:Xe,reflect:!1,hasChanged:et};Symbol.metadata??=Symbol("metadata"),Qe.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Ve(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=Ne(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const r=o?.call(this);s.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tt}static _$Ei(){if(this.hasOwnProperty(Ye("elementProperties")))return;const e=qe(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ye("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ye("properties"))){const e=this.properties,t=[...Ge(e),...je(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(He(e))}else void 0!==e&&t.push(He(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Be)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),o=Fe.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:Xe).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Xe;this._$Em=o,this[o]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??et)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[Ye("elementProperties")]=new Map,b[Ye("finalized")]=new Map,Je?.({ReactiveElement:b}),(Qe.reactiveElementVersions??=[]).push("2.0.4");const it=globalThis,ot=it.trustedTypes,nt=ot?ot.createPolicy("lit-html",{createHTML:e=>e}):void 0,st="$lit$",rt=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+rt,lt=`<${at}>`,ct=document,ht=()=>ct.createComment(""),pt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,dt=Array.isArray,ut=e=>dt(e)||"function"==typeof e?.[Symbol.iterator],gt="[ \t\n\f\r]",ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mt=/-->/g,bt=/>/g,vt=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),yt=/'/g,wt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,xt=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),kt=xt(1),_t=xt(2),$t=Symbol.for("lit-noChange"),St=Symbol.for("lit-nothing"),Pt=new WeakMap,Rt=ct.createTreeWalker(ct,129);function At(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==nt?nt.createHTML(t):t}const Dt=(e,t)=>{const i=e.length-1,o=[];let s,r=2===t?"<svg>":"",a=ft;for(let t=0;t<i;t++){const i=e[t];let l,c,h=-1,p=0;for(;p<i.length&&(a.lastIndex=p,c=a.exec(i),null!==c);)p=a.lastIndex,a===ft?"!--"===c[1]?a=mt:void 0!==c[1]?a=bt:void 0!==c[2]?(Ct.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=vt):void 0!==c[3]&&(a=vt):a===vt?">"===c[0]?(a=s??ft,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?vt:'"'===c[3]?wt:yt):a===wt||a===yt?a=vt:a===mt||a===bt?a=ft:(a=vt,s=void 0);const d=a===vt&&e[t+1].startsWith("/>")?" ":"";r+=a===ft?i+lt:h>=0?(o.push(l),i.slice(0,h)+st+i.slice(h)+rt+d):i+rt+(-2===h?t:d)}return[At(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class V{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,r=0;const a=e.length-1,l=this.parts,[c,h]=Dt(e,t);if(this.el=V.createElement(c,i),Rt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Rt.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(st)){const t=h[r++],i=o.getAttribute(e).split(rt),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?k:"?"===a[1]?H:"@"===a[1]?I:R}),o.removeAttribute(e)}else e.startsWith(rt)&&(l.push({type:6,index:s}),o.removeAttribute(e));if(Ct.test(o.tagName)){const e=o.textContent.split(rt),t=e.length-1;if(t>0){o.textContent=ot?ot.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],ht()),Rt.nextNode(),l.push({type:2,index:++s});o.append(e[t],ht())}}}else if(8===o.nodeType)if(o.data===at)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(rt,e+1));)l.push({type:7,index:s}),e+=rt.length-1}s++}}static createElement(e,t){const i=ct.createElement("template");return i.innerHTML=e,i}}function Tt(e,t,i=e,o){if(t===$t)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=pt(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=Tt(e,s._$AS(e,t.values),s,o)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??ct).importNode(t,!0);Rt.currentNode=o;let s=Rt.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new M(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new L(s,this,e)),this._$AV.push(t),l=i[++a]}r!==l?.index&&(s=Rt.nextNode(),r++)}return Rt.currentNode=ct,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=St,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Tt(this,e,t),pt(e)?e===St||null==e||""===e?(this._$AH!==St&&this._$AR(),this._$AH=St):e!==this._$AH&&e!==$t&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ut(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==St&&pt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ct.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=V.createElement(At(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new lit_html_S(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Pt.get(e.strings);return void 0===t&&Pt.set(e.strings,t=new V(e)),t}k(e){dt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new M(this.S(ht()),this.S(ht()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=St,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=St}_$AI(e,t=this,i,o){const s=this.strings;let r=!1;if(void 0===s)e=Tt(this,e,t,0),r=!pt(e)||e!==this._$AH&&e!==$t,r&&(this._$AH=e);else{const o=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=Tt(this,o[i+a],t,a),l===$t&&(l=this._$AH[a]),r||=!pt(l)||l!==this._$AH[a],l===St?e=St:e!==St&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===St?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===St?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==St)}}class I extends R{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=Tt(this,e,t,0)??St)===$t)return;const i=this._$AH,o=e===St&&i!==St||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==St&&(i===St||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Tt(this,e)}}const Et=it.litHtmlPolyfillSupport;Et?.(V,M),(it.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new M(t.insertBefore(ht(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $t}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const Lt=globalThis.litElementPolyfillSupport;Lt?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const Ot=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Ft={attribute:!0,type:String,converter:Xe,reflect:!1,hasChanged:et},Bt=(e=Ft,t,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e)}}throw Error("Unsupported decorator location: "+o)};function It(e){return(t,i)=>"object"==typeof i?Bt(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}const Mt=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function zt(e,t){return(i,o,s)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?i:s??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Mt(i,o,{get(){let i=e.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return Mt(i,o,{get(){return r(this)}})}}Ue`
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
`;const Ut=Ue`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Ht=Ue`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,Wt=Ue`
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
`,Vt=Ue`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Ut}
	}
	a:hover {
		text-decoration: underline;
	}
`;Ue`
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
`;var Nt=Object.defineProperty,Gt=Object.defineProperties,jt=Object.getOwnPropertyDescriptor,qt=Object.getOwnPropertyDescriptors,Qt=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,Jt=(e,t,i)=>t in e?Nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Yt=(e,t)=>{for(var i in t||(t={}))Zt.call(t,i)&&Jt(e,i,t[i]);if(Qt)for(var i of Qt(t))Kt.call(t,i)&&Jt(e,i,t[i]);return e},Xt=(e,t)=>Gt(e,qt(t)),ei=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?jt(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Nt(t,i,r),r},ti=new Map,ii=new WeakMap;function oi(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function ni(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function si(e,t){ti.set(e,oi(t))}function ri(e,t,i){const o=ii.get(e);if(null==o?void 0:o[t])return ni(o[t],i.dir);const s=ti.get(t);return s?ni(s,i.dir):{keyframes:[],options:{duration:0}}}var ai=Ue`
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
`,li=Ue`
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
`,ci=Ue`
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
`,hi=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const i=new CustomEvent(e,Yt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o)return void customElements.define(e,class extends t{},i);let s=" (unknown version)",r=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(r=" v"+o.version)}};hi.version="2.15.1",hi.dependencies={},ei([It()],hi.prototype,"dir",2),ei([It()],hi.prototype,"lang",2);const pi=Math.min,di=Math.max,ui=Math.round,gi=Math.floor,fi=e=>({x:e,y:e}),mi={left:"right",right:"left",bottom:"top",top:"bottom"},bi={start:"end",end:"start"};function vi(e,t,i){return di(e,pi(t,i))}function yi(e,t){return"function"==typeof e?e(t):e}function wi(e){return e.split("-")[0]}function Ci(e){return e.split("-")[1]}function xi(e){return"x"===e?"y":"x"}function ki(e){return"y"===e?"height":"width"}function _i(e){return["top","bottom"].includes(wi(e))?"y":"x"}function $i(e){return xi(_i(e))}function Si(e){return e.replace(/start|end/g,(e=>bi[e]))}function Pi(e){return e.replace(/left|right|bottom|top/g,(e=>mi[e]))}function Ri(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Ai(e){const{x:t,y:i,width:o,height:s}=e;return{width:o,height:s,top:i,left:t,right:t+o,bottom:i+s,x:t,y:i}}function Di(e,t,i){let{reference:o,floating:s}=e;const r=_i(t),a=$i(t),l=ki(a),c=wi(t),h="y"===r,p=o.x+o.width/2-s.width/2,d=o.y+o.height/2-s.height/2,u=o[l]/2-s[l]/2;let g;switch(c){case"top":g={x:p,y:o.y-s.height};break;case"bottom":g={x:p,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:d};break;case"left":g={x:o.x-s.width,y:d};break;default:g={x:o.x,y:o.y}}switch(Ci(t)){case"start":g[a]-=u*(i&&h?-1:1);break;case"end":g[a]+=u*(i&&h?-1:1)}return g}async function Ti(e,t){var i;void 0===t&&(t={});const{x:o,y:s,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:u=!1,padding:g=0}=yi(t,e),f=Ri(g),m=l[u?"floating"===d?"reference":"floating":d],v=Ai(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(m)))||i?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:h,rootBoundary:p,strategy:c})),y="floating"===d?{x:o,y:s,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),C=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},x=Ai(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-x.top+f.top)/C.y,bottom:(x.bottom-v.bottom+f.bottom)/C.y,left:(v.left-x.left+f.left)/C.x,right:(x.right-v.right+f.right)/C.x}}function Ei(e){return Fi(e)?(e.nodeName||"").toLowerCase():"#document"}function Li(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Oi(e){var t;return null==(t=(Fi(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Fi(e){return e instanceof Node||e instanceof Li(e).Node}function Bi(e){return e instanceof Element||e instanceof Li(e).Element}function Ii(e){return e instanceof HTMLElement||e instanceof Li(e).HTMLElement}function Mi(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Li(e).ShadowRoot)}function zi(e){const{overflow:t,overflowX:i,overflowY:o,display:s}=Gi(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(s)}function Ui(e){return["table","td","th"].includes(Ei(e))}function Hi(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Wi(e){const t=Vi(),i=Bi(e)?Gi(e):e;return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((e=>(i.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(i.contain||"").includes(e)))}function Vi(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ni(e){return["html","body","#document"].includes(Ei(e))}function Gi(e){return Li(e).getComputedStyle(e)}function ji(e){return Bi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function qi(e){if("html"===Ei(e))return e;const t=e.assignedSlot||e.parentNode||Mi(e)&&e.host||Oi(e);return Mi(t)?t.host:t}function Qi(e){const t=qi(e);return Ni(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ii(t)&&zi(t)?t:Qi(t)}function Zi(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);const s=Qi(e),r=s===(null==(o=e.ownerDocument)?void 0:o.body),a=Li(s);return r?t.concat(a,a.visualViewport||[],zi(s)?s:[],a.frameElement&&i?Zi(a.frameElement):[]):t.concat(s,Zi(s,[],i))}function Ki(e){const t=Gi(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const s=Ii(e),r=s?e.offsetWidth:i,a=s?e.offsetHeight:o,l=ui(i)!==r||ui(o)!==a;return l&&(i=r,o=a),{width:i,height:o,$:l}}function Ji(e){return Bi(e)?e:e.contextElement}function Yi(e){const t=Ji(e);if(!Ii(t))return fi(1);const i=t.getBoundingClientRect(),{width:o,height:s,$:r}=Ki(t);let a=(r?ui(i.width):i.width)/o,l=(r?ui(i.height):i.height)/s;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Xi=fi(0);function eo(e){const t=Li(e);return Vi()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Xi}function to(e,t,i,o){void 0===t&&(t=!1),void 0===i&&(i=!1);const s=e.getBoundingClientRect(),r=Ji(e);let a=fi(1);t&&(o?Bi(o)&&(a=Yi(o)):a=Yi(e));const l=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==Li(e))&&t}(r,i,o)?eo(r):fi(0);let c=(s.left+l.x)/a.x,h=(s.top+l.y)/a.y,p=s.width/a.x,d=s.height/a.y;if(r){const e=Li(r),t=o&&Bi(o)?Li(o):o;let i=e,s=i.frameElement;for(;s&&o&&t!==i;){const e=Yi(s),t=s.getBoundingClientRect(),o=Gi(s),r=t.left+(s.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(s.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,h*=e.y,p*=e.x,d*=e.y,c+=r,h+=a,i=Li(s),s=i.frameElement}}return Ai({width:p,height:d,x:c,y:h})}function io(e){return to(Oi(e)).left+ji(e).scrollLeft}function oo(e,t,i){let o;if("viewport"===t)o=function(e,t){const i=Li(e),o=Oi(e),s=i.visualViewport;let r=o.clientWidth,a=o.clientHeight,l=0,c=0;if(s){r=s.width,a=s.height;const e=Vi();(!e||e&&"fixed"===t)&&(l=s.offsetLeft,c=s.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,i);else if("document"===t)o=function(e){const t=Oi(e),i=ji(e),o=e.ownerDocument.body,s=di(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=di(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+io(e);const l=-i.scrollTop;return"rtl"===Gi(o).direction&&(a+=di(t.clientWidth,o.clientWidth)-s),{width:s,height:r,x:a,y:l}}(Oi(e));else if(Bi(t))o=function(e,t){const i=to(e,!0,"fixed"===t),o=i.top+e.clientTop,s=i.left+e.clientLeft,r=Ii(e)?Yi(e):fi(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:s*r.x,y:o*r.y}}(t,i);else{const i=eo(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return Ai(o)}function no(e,t){const i=qi(e);return!(i===t||!Bi(i)||Ni(i))&&("fixed"===Gi(i).position||no(i,t))}function so(e,t,i){const o=Ii(t),s=Oi(t),r="fixed"===i,a=to(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=fi(0);if(o||!o&&!r)if(("body"!==Ei(t)||zi(s))&&(l=ji(t)),o){const e=to(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else s&&(c.x=io(s));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function ro(e){return"static"===Gi(e).position}function ao(e,t){return Ii(e)&&"fixed"!==Gi(e).position?t?t(e):e.offsetParent:null}function lo(e,t){const i=Li(e);if(Hi(e))return i;if(!Ii(e)){let t=qi(e);for(;t&&!Ni(t);){if(Bi(t)&&!ro(t))return t;t=qi(t)}return i}let o=ao(e,t);for(;o&&Ui(o)&&ro(o);)o=ao(o,t);return o&&Ni(o)&&ro(o)&&!Wi(o)?i:o||function(e){let t=qi(e);for(;Ii(t)&&!Ni(t);){if(Wi(t))return t;if(Hi(t))return null;t=qi(t)}return null}(e)||i}const co={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:s}=e;const r="fixed"===s,a=Oi(o),l=!!t&&Hi(t.floating);if(o===a||l&&r)return i;let c={scrollLeft:0,scrollTop:0},h=fi(1);const p=fi(0),d=Ii(o);if((d||!d&&!r)&&(("body"!==Ei(o)||zi(a))&&(c=ji(o)),Ii(o))){const e=to(o);h=Yi(o),p.x=e.x+o.clientLeft,p.y=e.y+o.clientTop}return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-c.scrollLeft*h.x+p.x,y:i.y*h.y-c.scrollTop*h.y+p.y}},getDocumentElement:Oi,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:s}=e;const r=[..."clippingAncestors"===i?Hi(t)?[]:function(e,t){const i=t.get(e);if(i)return i;let o=Zi(e,[],!1).filter((e=>Bi(e)&&"body"!==Ei(e))),s=null;const r="fixed"===Gi(e).position;let a=r?qi(e):e;for(;Bi(a)&&!Ni(a);){const t=Gi(a),i=Wi(a);i||"fixed"!==t.position||(s=null),(r?!i&&!s:!i&&"static"===t.position&&s&&["absolute","fixed"].includes(s.position)||zi(a)&&!i&&no(e,a))?o=o.filter((e=>e!==a)):s=t,a=qi(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=r[0],l=r.reduce(((e,i)=>{const o=oo(t,i,s);return e.top=di(o.top,e.top),e.right=pi(o.right,e.right),e.bottom=pi(o.bottom,e.bottom),e.left=di(o.left,e.left),e}),oo(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:lo,getElementRects:async function(e){const t=this.getOffsetParent||lo,i=this.getDimensions,o=await i(e.floating);return{reference:so(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:i}=Ki(e);return{width:t,height:i}},getScale:Yi,isElement:Bi,isRTL:function(e){return"rtl"===Gi(e).direction}};function ho(e,t,i,o){void 0===o&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=o,h=Ji(e),p=s||r?[...h?Zi(h):[],...Zi(t)]:[];p.forEach((e=>{s&&e.addEventListener("scroll",i,{passive:!0}),r&&e.addEventListener("resize",i)}));const d=h&&l?function(e,t){let i,o=null;const s=Oi(e);function r(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:h,top:p,width:d,height:u}=e.getBoundingClientRect();if(l||t(),!d||!u)return;const g={rootMargin:-gi(p)+"px "+-gi(s.clientWidth-(h+d))+"px "+-gi(s.clientHeight-(p+u))+"px "+-gi(h)+"px",threshold:di(0,pi(1,c))||1};let f=!0;function m(e){const t=e[0].intersectionRatio;if(t!==c){if(!f)return a();t?a(!1,t):i=setTimeout((()=>{a(!1,1e-7)}),1e3)}f=!1}try{o=new IntersectionObserver(m,{...g,root:s.ownerDocument})}catch(e){o=new IntersectionObserver(m,g)}o.observe(e)}(!0),r}(h,i):null;let u,g=-1,f=null;a&&(f=new ResizeObserver((e=>{let[o]=e;o&&o.target===h&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=f)||e.observe(t)}))),i()})),h&&!c&&f.observe(h),f.observe(t));let m=c?to(e):null;return c&&function t(){const o=to(e);!m||o.x===m.x&&o.y===m.y&&o.width===m.width&&o.height===m.height||i();m=o,u=requestAnimationFrame(t)}(),i(),()=>{var e;p.forEach((e=>{s&&e.removeEventListener("scroll",i),r&&e.removeEventListener("resize",i)})),null==d||d(),null==(e=f)||e.disconnect(),f=null,c&&cancelAnimationFrame(u)}}const po=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:s,y:r,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:i,platform:o,elements:s}=e,r=await(null==o.isRTL?void 0:o.isRTL(s.floating)),a=wi(i),l=Ci(i),c="y"===_i(i),h=["left","top"].includes(a)?-1:1,p=r&&c?-1:1,d=yi(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof f&&(g="end"===l?-1*f:f),c?{x:g*p,y:u*h}:{x:u*h,y:g*p}}(t,e);return a===(null==(i=l.offset)?void 0:i.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:s+c.x,y:r+c.y,data:{...c,placement:a}}}}},uo=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...c}=yi(e,t),h={x:i,y:o},p=await Ti(t,c),d=_i(wi(s)),u=xi(d);let g=h[u],f=h[d];if(r){const e="y"===u?"bottom":"right";g=vi(g+p["y"===u?"top":"left"],g,g-p[e])}if(a){const e="y"===d?"bottom":"right";f=vi(f+p["y"===d?"top":"left"],f,f-p[e])}const m=l.fn({...t,[u]:g,[d]:f});return{...m,data:{x:m.x-i,y:m.y-o}}}}},go=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:s,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:h}=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...v}=yi(e,t);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const y=wi(s),w=_i(l),C=wi(l)===l,x=await(null==c.isRTL?void 0:c.isRTL(h.floating)),_=u||(C||!m?[Pi(l)]:function(e){const t=Pi(e);return[Si(e),t,Si(t)]}(l)),$="none"!==f;!u&&$&&_.push(...function(e,t,i,o){const s=Ci(e);let r=function(e,t,i){const o=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?s:o:t?o:s;case"left":case"right":return t?r:a;default:return[]}}(wi(e),"start"===i,o);return s&&(r=r.map((e=>e+"-"+s)),t&&(r=r.concat(r.map(Si)))),r}(l,m,f,x));const S=[l,..._],P=await Ti(t,v),A=[];let D=(null==(o=r.flip)?void 0:o.overflows)||[];if(p&&A.push(P[y]),d){const e=function(e,t,i){void 0===i&&(i=!1);const o=Ci(e),s=$i(e),r=ki(s);let a="x"===s?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Pi(a)),[a,Pi(a)]}(s,a,x);A.push(P[e[0]],P[e[1]])}if(D=[...D,{placement:s,overflows:A}],!A.every((e=>e<=0))){var T,E;const e=((null==(T=r.flip)?void 0:T.index)||0)+1,t=S[e];if(t)return{data:{index:e,overflows:D},reset:{placement:t}};let i=null==(E=D.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!i)switch(g){case"bestFit":{var O;const e=null==(O=D.filter((e=>{if($){const t=_i(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:O[0];e&&(i=e);break}case"initialPlacement":i=l}if(s!==i)return{reset:{placement:i}}}return{}}}},fo=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:i,rects:o,platform:s,elements:r}=t,{apply:a=()=>{},...l}=yi(e,t),c=await Ti(t,l),h=wi(i),p=Ci(i),d="y"===_i(i),{width:u,height:g}=o.floating;let f,m;"top"===h||"bottom"===h?(f=h,m=p===(await(null==s.isRTL?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(m=h,f="end"===p?"top":"bottom");const v=g-c.top-c.bottom,y=u-c.left-c.right,w=pi(g-c[f],v),C=pi(u-c[m],y),x=!t.middlewareData.shift;let _=w,$=C;if(d?$=p||x?pi(C,y):y:_=p||x?pi(w,v):v,x&&!p){const e=di(c.left,0),t=di(c.right,0),i=di(c.top,0),o=di(c.bottom,0);d?$=u-2*(0!==e||0!==t?e+t:di(c.left,c.right)):_=g-2*(0!==i||0!==o?i+o:di(c.top,c.bottom))}await a({...t,availableWidth:$,availableHeight:_});const S=await s.getDimensions(r.floating);return u!==S.width||g!==S.height?{reset:{rects:!0}}:{}}}},mo=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:s,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:h,padding:p=0}=yi(e,t)||{};if(null==h)return{};const d=Ri(p),u={x:i,y:o},g=$i(s),f=ki(g),m=await a.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",C=v?"clientHeight":"clientWidth",x=r.reference[f]+r.reference[g]-u[g]-r.floating[f],_=u[g]-r.reference[g],$=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let S=$?$[C]:0;S&&await(null==a.isElement?void 0:a.isElement($))||(S=l.floating[C]||r.floating[f]);const P=x/2-_/2,A=S/2-m[f]/2-1,D=pi(d[y],A),T=pi(d[w],A),E=D,O=S-m[f]-T,F=S/2-m[f]/2+P,B=vi(E,F,O),z=!c.arrow&&null!=Ci(s)&&F!==B&&r.reference[f]/2-(F<E?D:T)-m[f]/2<0,U=z?F<E?F-E:F-O:0;return{[g]:u[g]+U,data:{[g]:B,centerOffset:F-B-U,...z&&{alignmentOffset:U}},reset:z}}}),bo=(e,t,i)=>{const o=new Map,s={platform:co,...i},r={...s.platform,_c:o};return(async(e,t,i)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:a}=i,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:d}=Di(h,o,c),u=o,g={},f=0;for(let i=0;i<l.length;i++){const{name:r,fn:m}=l[i],{x:v,y,data:w,reset:C}=await m({x:p,y:d,initialPlacement:o,placement:u,strategy:s,middlewareData:g,rects:h,platform:a,elements:{reference:e,floating:t}});p=null!=v?v:p,d=null!=y?y:d,g={...g,[r]:{...g[r],...w}},C&&f<=50&&(f++,"object"==typeof C&&(C.placement&&(u=C.placement),C.rects&&(h=!0===C.rects?await a.getElementRects({reference:e,floating:t,strategy:s}):C.rects),({x:p,y:d}=Di(h,u,c))),i=-1)}return{x:p,y:d,placement:u,strategy:s,middlewareData:g}})(e,t,{...s,platform:r})},vo=1;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const yo=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==vo||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return $t}});function wo(e){return xo(e)}function Co(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function xo(e){for(let t=e;t;t=Co(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Co(e);t;t=Co(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var ko=class extends hi{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let i=0,o=0,s=0,r=0,a=0,l=0,c=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(i=e.left,o=e.bottom,s=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(i=t.left,o=t.bottom,s=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(i=e.right,o=e.top,s=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(i=t.right,o=t.top,s=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=ho(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[po({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(fo({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(go({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(uo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(fo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(mo({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>co.getOffsetParent(e,wo):co.getOffsetParent;bo(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Xt(Yt({},co),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:i,placement:o})=>{const s="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=i.arrow.x,t=i.arrow.y;let o="",a="",l="",c="";if("start"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?i:"",c=s?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":i,c=s?i:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:l,left:c,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return kt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${yo({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${yo({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?kt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function _o(e,t){return new Promise((i=>{e.addEventListener(t,(function o(s){s.target===e&&(e.removeEventListener(t,o),i())}))}))}function $o(e,t,i){return new Promise((o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,Xt(Yt({},i),{duration:Po()?0:i.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})}))}function So(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Po(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ro(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}ko.styles=[ci,li],ei([zt(".popup")],ko.prototype,"popup",2),ei([zt(".popup__arrow")],ko.prototype,"arrowEl",2),ei([It()],ko.prototype,"anchor",2),ei([It({type:Boolean,reflect:!0})],ko.prototype,"active",2),ei([It({reflect:!0})],ko.prototype,"placement",2),ei([It({reflect:!0})],ko.prototype,"strategy",2),ei([It({type:Number})],ko.prototype,"distance",2),ei([It({type:Number})],ko.prototype,"skidding",2),ei([It({type:Boolean})],ko.prototype,"arrow",2),ei([It({attribute:"arrow-placement"})],ko.prototype,"arrowPlacement",2),ei([It({attribute:"arrow-padding",type:Number})],ko.prototype,"arrowPadding",2),ei([It({type:Boolean})],ko.prototype,"flip",2),ei([It({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],ko.prototype,"flipFallbackPlacements",2),ei([It({attribute:"flip-fallback-strategy"})],ko.prototype,"flipFallbackStrategy",2),ei([It({type:Object})],ko.prototype,"flipBoundary",2),ei([It({attribute:"flip-padding",type:Number})],ko.prototype,"flipPadding",2),ei([It({type:Boolean})],ko.prototype,"shift",2),ei([It({type:Object})],ko.prototype,"shiftBoundary",2),ei([It({attribute:"shift-padding",type:Number})],ko.prototype,"shiftPadding",2),ei([It({attribute:"auto-size"})],ko.prototype,"autoSize",2),ei([It()],ko.prototype,"sync",2),ei([It({type:Object})],ko.prototype,"autoSizeBoundary",2),ei([It({attribute:"auto-size-padding",type:Number})],ko.prototype,"autoSizePadding",2),ei([It({attribute:"hover-bridge",type:Boolean})],ko.prototype,"hoverBridge",2);const Ao=new Set,Do=new Map;let To,Eo="ltr",Lo="en";const Oo="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Oo){const e=new MutationObserver(Bo);Eo=document.documentElement.dir||"ltr",Lo=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Fo(...e){e.map((e=>{const t=e.$code.toLowerCase();Do.has(t)?Do.set(t,Object.assign(Object.assign({},Do.get(t)),e)):Do.set(t,e),To||(To=e)})),Bo()}function Bo(){Oo&&(Eo=document.documentElement.dir||"ltr",Lo=document.documentElement.lang||navigator.language),[...Ao.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ao.add(this.host)}hostDisconnected(){Ao.delete(this.host)}dir(){return`${this.host.dir||Eo}`.toLowerCase()}lang(){return`${this.host.lang||Lo}`.toLowerCase()}getTranslationData(e){var t,i;const o=new Intl.Locale(e.replace(/_/g,"-")),s=null==o?void 0:o.language.toLowerCase(),r=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:s,region:r,primary:Do.get(`${s}-${r}`),secondary:Do.get(s)}}exists(e,t){var i;const{primary:o,secondary:s}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||s&&s[e]||t.includeFallback&&To&&To[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else{if(!To||!To[e])return String(e);s=To[e]}return"function"==typeof s?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}var Io={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Fo(Io);var Mo=Io,zo=class extends LocalizeController{};function Uo(e,t){const i=Yt({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:s}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const s=t;if(e.has(s)){const t=e.get(s),r=this[s];t!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,r))}})),s.call(this,e)}}}Fo(Mo);var Ho=class extends hi{constructor(){super(),this.localize=new zo(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=So(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=So(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Ro(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=ri(this,"tooltip.show",{dir:this.localize.dir()});await $o(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Ro(this.body);const{keyframes:e,options:i}=ri(this,"tooltip.hide",{dir:this.localize.dir()});await $o(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,_o(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_o(this,"sl-after-hide")}render(){return kt`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${yo({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Ho.styles=[ci,ai],Ho.dependencies={"sl-popup":ko},ei([zt("slot:not([name])")],Ho.prototype,"defaultSlot",2),ei([zt(".tooltip__body")],Ho.prototype,"body",2),ei([zt("sl-popup")],Ho.prototype,"popup",2),ei([It()],Ho.prototype,"content",2),ei([It()],Ho.prototype,"placement",2),ei([It({type:Boolean,reflect:!0})],Ho.prototype,"disabled",2),ei([It({type:Number})],Ho.prototype,"distance",2),ei([It({type:Boolean,reflect:!0})],Ho.prototype,"open",2),ei([It({type:Number})],Ho.prototype,"skidding",2),ei([It()],Ho.prototype,"trigger",2),ei([It({type:Boolean})],Ho.prototype,"hoist",2),ei([Uo("open",{waitUntilFirstUpdate:!0})],Ho.prototype,"handleOpenChange",1),ei([Uo(["content","distance","hoist","placement","skidding"])],Ho.prototype,"handleOptionsChange",1),ei([Uo("disabled")],Ho.prototype,"handleDisabledChange",1),si("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),si("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Ho.define("sl-tooltip");var Wo=Object.defineProperty,Vo=Object.getOwnPropertyDescriptor,No=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?Vo(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Wo(t,i,r),r};si("tooltip.show",null),si("tooltip.hide",null);let Go=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return kt`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??St}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};Go.styles=Ue`
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
	`,No([It()],Go.prototype,"content",2),No([It({reflect:!0})],Go.prototype,"placement",2),No([It({type:Boolean})],Go.prototype,"disabled",2),No([It({type:Number})],Go.prototype,"distance",2),No([It({type:Boolean})],Go.prototype,"hoist",2),Go=No([Ot("gl-tooltip")],Go);var jo=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,Qo=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?qo(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&jo(t,i,r),r};let Zo=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?kt`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?kt`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?kt`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:kt`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};Zo.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},Zo.styles=[Wt,Ue`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
			}

			.control {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);

				color: inherit;
				text-decoration: none;

				width: max-content;
				height: 100%;
				cursor: pointer;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-block;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${Ht}
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			gl-tooltip {
				height: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],Qo([zt(".control")],Zo.prototype,"control",2),Qo([It({reflect:!0})],Zo.prototype,"appearance",2),Qo([It({type:Boolean,reflect:!0})],Zo.prototype,"disabled",2),Qo([It({reflect:!0})],Zo.prototype,"density",2),Qo([It({type:Boolean,reflect:!0})],Zo.prototype,"full",2),Qo([It()],Zo.prototype,"href",2),Qo([It({reflect:!0})],Zo.prototype,"role",1),Qo([It()],Zo.prototype,"tooltip",2),Zo=Qo([Ot("gl-button")],Zo);var Ko=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,Yo=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?Jo(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Ko(t,i,r),r};const Xo=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let en=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};en.styles=Ue`
		:host {
			--code-icon-size: 16px;
			--code-icon-v-align: text-bottom;

			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${ze(Object.entries(Xo).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,Yo([It({reflect:!0})],en.prototype,"icon",2),Yo([It({reflect:!0})],en.prototype,"modifier",2),Yo([It({type:Number})],en.prototype,"size",2),Yo([It({reflect:!0})],en.prototype,"flip",2),Yo([It({reflect:!0})],en.prototype,"rotate",2),en=Yo([Ot("code-icon")],en);var tn=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.PastePatchFromClipboard="gitlens.pastePatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusConnectCloudIntegrations="gitlens.plus.cloudIntegrations.connect",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowFocusPage="gitlens.showFocusPage",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLaunchpadView="gitlens.showLaunchpadView",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWelcomePage="gitlens.showWelcomePage",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(tn||{});ko.define("sl-popup");const on=new WeakMap;function nn(e,t){return function(i,o,s){let r=on.get(i.constructor);null==r&&on.set(i.constructor,r=[]),r.push({method:s.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_s{emit(e,t,i){const o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){const t=on.get(this.constructor);if(null!=t)for(const{keys:i,method:o,afterFirstUpdate:s}of t){if(s&&!this.hasUpdated)continue;const t=i.filter((t=>e.has(t)));t.length&&o.call(this,t)}super.update(e)}}var sn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,an=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?rn(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&sn(t,i,r),r};let ln=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=ne(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const i=ne(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),i)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,se(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,se(this,"gl-popover-after-hide")}render(){return kt`<sl-popup
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
		</sl-popup>`}};ln.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},ln.styles=Ue`
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
	`,an([zt("#popover")],ln.prototype,"body",2),an([zt("sl-popup")],ln.prototype,"popup",2),an([It({reflect:!0})],ln.prototype,"placement",2),an([It({type:Object})],ln.prototype,"anchor",2),an([It({reflect:!0,type:Boolean})],ln.prototype,"disabled",2),an([It({type:Number})],ln.prototype,"distance",2),an([It({reflect:!0,type:Boolean})],ln.prototype,"open",2),an([It({type:Number})],ln.prototype,"skidding",2),an([It()],ln.prototype,"trigger",2),an([It({type:Boolean})],ln.prototype,"hoist",2),an([nn("open",{afterFirstUpdate:!0})],ln.prototype,"handleOpenChange",1),an([nn(["distance","hoist","placement","skidding"])],ln.prototype,"handleOptionsChange",1),an([nn("disabled")],ln.prototype,"handleDisabledChange",1),ln=an([Ot("gl-popover")],ln);var cn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,pn=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?hn(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&cn(t,i,r),r};let dn=class extends lit_element_s{constructor(){super(...arguments),this.type="info"}render(){if(!this.promo)return;const e=this.renderPromo(this.promo);return e?"link"===this.type?kt`<a
				class="link"
				href="${this.promo.command??"command:gitlens.plus.upgrade"}"
				title="${this.promo.commandTooltip}"
				>${e}</a
			>`:kt`<p class="promo">${e}</p>`:void 0}renderPromo(e){switch(e.key){case"devexdays24":return kt`<span class="header"><gl-svg-devexdays24-promo></gl-svg-devexdays24-promo>Sale:</span
					><span class="content"><b>Save up to 80% on GitLens Pro</b> - lowest price of the year!</span>`;case"pro50":return"link"===this.type?kt`<span class="content"
						>Special: <b>1st seat of Pro is now 50%+ off.</b> See your special price.</span
					>`:kt`<span class="content muted">Special: <b>1st seat of Pro is now 50%+ off</b></span>`}return St}};dn.styles=[Ue`
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
		`],pn([It({type:Object})],dn.prototype,"promo",2),pn([It({reflect:!0,type:String})],dn.prototype,"type",2),dn=pn([Ot("gl-promo")],dn);let un=class extends lit_element_s{render(){return _t`
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
		`}};un.styles=[Ue`
			svg {
				max-width: 8rem;
				height: auto;
				vertical-align: text-bottom;
			}
		`],un=pn([Ot("gl-svg-devexdays24-promo")],un);var gn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,mn=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?fn(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&gn(t,i,r),r};let bn=class extends lit_element_s{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:r(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return kt`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===o.VerificationRequired)return kt`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(i=this.subscription,"free"!==(s=i.plan.actual.id)&&"free+"!==s||this.cloud&&null!=this.subscription.account)return kt`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(1===t||3===t))return kt`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t,i,s;return this.cloud?kt`${e}<span class="badge-icon">☁️</span>`:e}renderPopoverHeader(){const e=kt`<span class="popup-title"
			>${this.preview?"Preview feature":"Pro feature"}${this.cloud?" ☁️":""}</span
		>`;return this.state===o.Paid?kt`<div class="popup-header">${e}</div>`:this.cloud?this.preview?kt`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require a paid plan in the future</span
					>
				</div>`:kt`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires a paid plan</span>
			</div>`:this.preview?kt`<div class="popup-header">
				${e}<span class="popup-subtitle">May require a paid plan in the future</span>
			</div>`:kt`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires a paid plan for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return St;let e;switch(this.state){case o.Paid:e=kt`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${vn(tn.ShowAccountView,void 0)}"
							>${s(this.subscription?.plan.actual.id??i.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case o.VerificationRequired:e=kt`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${vn(tn.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${vn(tn.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case o.FreePlusInTrial:{const t=this.daysRemaining;e=kt`<p>
						You have
						<strong>${t<1?"<1 day":Z("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case o.FreePlusTrialExpired:e=kt`<p>
						Your Pro trial as ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(kt`<p>Please upgrade for full access to Pro features:</p>`)}`;break;case o.FreePlusTrialReactivationEligible:e=kt`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another 7 days!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${vn(tn.PlusReactivateProTrial,this.source)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===o.FreeInPreviewTrial){const t=this.daysRemaining;e=kt`<p>
							You have
							<strong>${t<1?"<1 day":Z("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=kt`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return kt`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return kt`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${vn(tn.PlusSignUp,this.source)}"
				>Start 7-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${vn(tn.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){const t=c(this.state);return kt`<div class="actions">
			${e??St}
			<gl-button
				appearance="primary"
				density="tight"
				href="${vn(tn.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo(t)}
		</div>`}renderPromo(e){return kt`<gl-promo .promo=${e}></gl-promo>`}};function vn(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}bn.styles=[Wt,Vt,Ue`
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
				${ze(Ut)}
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
		`],mn([It({type:Boolean})],bn.prototype,"cloud",2),mn([It({reflect:!0})],bn.prototype,"placement",2),mn([It({type:Boolean})],bn.prototype,"preview",2),mn([It({type:Object})],bn.prototype,"source",2),mn([It({attribute:!1})],bn.prototype,"subscription",2),bn=mn([Ot("gl-feature-badge")],bn);class HomeApp extends App{constructor(){super("HomeApp")}get blockRepoFeatures(){const{repositories:{openCount:e,hasUnsafe:t,trusted:i}}=this.state;return!i||0===e||t}onInitialize(){this.state=this.getState()??this.state,this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(oe.on("[data-action]","click",((e,t)=>this.onDataActionClicked(e,t))),oe.on('[data-requires="repo"]',"click",((e,t)=>this.onRepoFeatureClicked(e,t))),oe.on("[data-section-toggle]","click",((e,t)=>this.onSectionToggleClicked(e,t))),oe.on("[data-section-expand]","click",((e,t)=>this.onSectionExpandClicked(e,t)))),e}onMessageReceived(e){switch(!0){case m.is(e):this.state.repositories=e.params,this.state.timestamp=Date.now(),this.setState(this.state),this.updateNoRepo();break;case y.is(e):this.state.subscription=e.params.subscription,this.setState(this.state),this.updatePromos(),this.updateSourceAndSubscription();break;case w.is(e):this.state.orgSettings=e.params.orgSettings,this.setState(this.state),this.updateOrgSettings();break;case v.is(e):this.state.hasAnyIntegrationConnected=e.params.hasAnyIntegrationConnected,this.setState(this.state),this.updateIntegrations();break;default:super.onMessageReceived?.(e)}}onRepoFeatureClicked(e,t){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}onDataActionClicked(e,t){const i=t.dataset.action;this.onActionClickedCore(i)}onActionClickedCore(e){e?.startsWith("command:")&&this.sendCommand(d,{command:e.slice(8)})}onSectionToggleClicked(e,t){e.stopImmediatePropagation();"walkthrough"===t.dataset.sectionToggle&&this.updateCollapsedSections(!this.state.walkthroughCollapsed)}onSectionExpandClicked(e,t){"walkthrough"===t.dataset.sectionExpand&&this.updateCollapsedSections(!1)}updateNoRepo(){const{repositories:{openCount:e,hasUnsafe:t,trusted:i}}=this.state,o=document.getElementById("header");if(!i)return o.hidden=!1,yn("untrusted-alert",!0),yn("no-repo-alert",!1),void yn("unsafe-repo-alert",!1);yn("untrusted-alert",!1);const s=0===e;yn("no-repo-alert",s&&!t),yn("unsafe-repo-alert",t),o.hidden=!s&&!t}updatePromos(){const e=c(this.state.subscription.state);document.getElementById("promo").promo=e}updateOrgSettings(){const{orgSettings:{drafts:e}}=this.state;for(const t of document.querySelectorAll('[data-org-requires="drafts"]'))yn(t,e)}updateSourceAndSubscription(){const{subscription:e}=this.state,t=document.querySelectorAll("gl-feature-badge");for(const i of t)i.source={source:"home",detail:"badge"},i.subscription=e}updateCollapsedSections(e=this.state.walkthroughCollapsed){this.state.walkthroughCollapsed=e,this.setState({walkthroughCollapsed:e}),document.getElementById("section-walkthrough").classList.toggle("is-collapsed",e),this.sendCommand(f,{section:"walkthrough",collapsed:e})}updateIntegrations(){const{hasAnyIntegrationConnected:e}=this.state,t=document.querySelectorAll("[data-integrations]"),i=e?"connected":"none";for(const e of t)yn(e,e.dataset.integrations===i)}updateState(){this.updateNoRepo(),this.updatePromos(),this.updateSourceAndSubscription(),this.updateOrgSettings(),this.updateCollapsedSections(),this.updateIntegrations()}}function yn(e,t){let i;i="string"==typeof e?document.getElementById(e):e,null!=i&&(t?(i.removeAttribute("aria-hidden"),i.removeAttribute("hidden")):(i.setAttribute("aria-hidden",""),i?.setAttribute("hidden","")))}new HomeApp;var wn=t.b;export{wn as HomeApp};
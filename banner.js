var SlickstreamBanner=function(e){"use strict";const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${s}--\x3e`,n=new RegExp(`${s}|${o}`),a="$lit$";class r{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],r=document.createTreeWalker(t.content,133,null,!1);let l=0,p=-1,u=0;const{strings:g,values:{length:m}}=e;for(;u<m;){const e=r.nextNode();if(null!==e){if(p++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)c(t[e].name,a)&&s++;for(;s-- >0;){const t=g[u],i=h.exec(t)[2],s=i.toLowerCase()+a,o=e.getAttribute(s);e.removeAttribute(s);const r=o.split(n);this.parts.push({type:"attribute",index:p,name:i,strings:r}),u+=r.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,o=t.split(n),r=o.length-1;for(let t=0;t<r;t++){let i,n=o[t];if(""===n)i=d();else{const e=h.exec(n);null!==e&&c(e[2],a)&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-a.length)+e[3]),i=document.createTextNode(n)}s.insertBefore(i,e),this.parts.push({type:"node",index:++p})}""===o[r]?(s.insertBefore(d(),e),i.push(e)):e.data=o[r],u+=r}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&p!==l||(p++,t.insertBefore(d(),e)),l=p,this.parts.push({type:"node",index:p}),null===e.nextSibling?e.data="":(i.push(e),p--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),u++}}else r.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const c=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},l=e=>-1!==e.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:i},parts:s}=e,o=document.createTreeWalker(i,133,null,!1);let n=g(s),a=s[n],r=-1,c=0;const l=[];let d=null;for(;o.nextNode();){r++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==a&&a.index===r;)a.index=null!==d?-1:a.index-c,n=g(s,n),a=s[n]}l.forEach((e=>e.parentNode.removeChild(e)))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},g=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(l(t))return i}return-1};const m=new WeakMap,f=e=>"function"==typeof e&&m.has(e),v={},y={};class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let n,a=0,r=0,c=o.nextNode();for(;a<s.length;)if(n=s[a],l(n)){for(;r<n.index;)r++,"TEMPLATE"===c.nodeName&&(i.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=i.pop(),c=o.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));a++}else this.__parts.push(void 0),a++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),k=` ${s} `;class S{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const e=this.strings[n],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const c=h.exec(e);t+=null===c?e+(i?k:o):e.substr(0,c.index)+c[1]+c[2]+a+c[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==w&&(t=w.createHTML(t)),e.innerHTML=t,e}}const x=e=>null===e||!("object"==typeof e||"function"==typeof e),_=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new z(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!_(e))return e}let s="";for(let o=0;o<t;o++){s+=e[o];const t=i[o];if(void 0!==t){const e=t.value;if(x(e)||!_(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class z{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||x(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):_(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const i=new b(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const o of e)i=t[s],void 0===i&&(i=new P(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(o),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class M{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class I extends C{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends z{}let R=!1;(()=>{try{const e={get capture(){return R=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class T{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=E(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const E=e=>e&&(R?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function F(e){let t=O.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},O.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(s);return i=t.keyString.get(o),void 0===i&&(i=new r(e,e.getTemplateElement()),t.keyString.set(o,i)),t.stringsArray.set(e.strings,i),i}const O=new Map,H=new WeakMap;const B=new class{handleAttributeExpressions(e,t,i,s){const o=t[0];if("."===o){return new I(e,t.slice(1),i).parts}if("@"===o)return[new T(e,t.slice(1),s.eventContext)];if("?"===o)return[new M(e,t.slice(1),i)];return new C(e,t,i).parts}handleTextExpression(e){return new P(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const A=(e,...t)=>new S(e,t,"html",B),L=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const D=e=>t=>{const i=L(t.type,e);let o=O.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},O.set(i,o));let n=o.stringsArray.get(t.strings);if(void 0!==n)return n;const a=t.strings.join(s);if(n=o.keyString.get(a),void 0===n){const i=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(i,e),n=new r(t,i),o.keyString.set(a,n)}return o.stringsArray.set(t.strings,n),n},N=["html","svg"],$=new Set,U=(e,t,i)=>{$.add(e);const s=i?i.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,e);const a=document.createElement("style");for(let e=0;e<n;e++){const t=o[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{N.forEach((t=>{const i=O.get(L(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),p(e,i)}))}))})(e);const r=s.content;i?function(e,t,i=null){const{element:{content:s},parts:o}=e;if(null==i)return void s.appendChild(t);const n=document.createTreeWalker(s,133,null,!1);let a=g(o),r=0,c=-1;for(;n.nextNode();)for(c++,n.currentNode===i&&(r=u(t),i.parentNode.insertBefore(t,i));-1!==a&&o[a].index===c;){if(r>0){for(;-1!==a;)o[a].index+=r,a=g(o,a);return}a=g(o,a)}}(i,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const c=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){r.insertBefore(a,r.firstChild);const e=new Set;e.add(a),p(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const q={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},G=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:G},K="finalized";class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdateInternal(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(K)||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=G){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||q,o="function"==typeof s?s:s.fromAttribute;return o?o(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||q.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=W){const s=this.constructor,o=s._attributeNameForProperty(e,i);if(void 0!==o){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let s=!0;if(void 0!==e){const o=this.constructor;i=i||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;const Z=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),Y=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function Q(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Y(e,t)}const X=e=>function(e){return Q({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}(e);function ee(e,t){return(i,s)=>{const o={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t=void 0!==s?s:i.key,n="symbol"==typeof t?Symbol():`__${t}`;o.get=function(){return void 0===this[n]&&(this[n]=this.renderRoot.querySelector(e)),this[n]}}return void 0!==s?te(o,i,s):ie(o,i)}}const te=(e,t,i)=>{Object.defineProperty(t,i,e)},ie=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});const se=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol();class ne{constructor(e,t){if(t!==oe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(se?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ae=(e,...t)=>{const i=t.reduce(((t,i,s)=>t+(e=>{if(e instanceof ne)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1]),e[0]);return new ne(i,oe)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const re={};class ce extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),s=[];i.forEach((e=>s.unshift(e))),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!se){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new ne(String(t),oe)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==re&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return re}}ce.finalized=!0,ce.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const o=s.scopeName,n=H.has(t),a=V&&11===t.nodeType&&!!t.host,r=a&&!$.has(o),c=r?document.createDocumentFragment():t;if(((e,t,s)=>{let o=H.get(t);void 0===o&&(i(t,t.firstChild),H.set(t,o=new P(Object.assign({templateFactory:F},s))),o.appendInto(t)),o.setValue(e),o.commit()})(e,c,Object.assign({templateFactory:D(o)},s)),r){const e=H.get(c);H.delete(c);const s=e.value instanceof b?e.value.template:void 0;U(o,c,s),i(t,t.firstChild),t.appendChild(c),H.set(t,e)}!n&&a&&window.ShadyCSS.styleElement(t.host)},ce.shadowRootOptions={mode:"open"};var le=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},de=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};const he=window;class pe extends ce{constructor(){super(...arguments),this.dir="ltr"}static get styles(){return ae`
    * {box-sizing: border-box;}
    [hidden] {display: none !important;}
    .horizontal {display: flex; flex-direction: row;}
    .vertical {display: flex; flex-direction: column;}
    .center {align-items: center;}
    .center-center {justify-content: center; align-items: center;}
    .spaced {justify-content: space-between;}
    .flex {flex: 1;}
    .wrap {flex-wrap: wrap;}
    `}connectedCallback(){this.dir="rtl"===document.documentElement.dir?"rtl":"ltr",super.connectedCallback()}fire(e,t){this.dispatchEvent(new(he.SlickCustomEvent||CustomEvent)(e,{composed:!0,bubbles:!0,detail:t}))}}le([Q({reflect:!0}),de("design:type",String)],pe.prototype,"dir",void 0);const ue="box-shadow .28s cubic-bezier(.4,0,.2,1), opacity 15ms linear 30ms, transform .27s cubic-bezier(0,0,.2,1) 0ms",ge={contextTitle:"",groups:[{title:"Latest",pageIds:[1211,102270,102268,102267,102265,102269,102264,102259,102258,920,102256,102251],style:"carousel",templateId:"title-u-image",cellWidth:{target:160},displayImageAspectRatio:1,imageContainment:"cover",displayFields:["url","image","isFavorite","favoriteCount","title"],drillContext:"eyJ2IjoiNC4wIiwidGl0bGUiOiJMYXRlc3QiLCJncm91cFR5cGUiOiJyZWNlbnQiLCJhcnJhbmdlbWVudCI6ImNvbnRleHQtd2l0aC1zZWFyY2gifQ=="},{title:"Popular",pageIds:[102270,1211,41,31,80,102268,102249,67,16,34,116,120],style:"carousel",templateId:"title-u-image",cellWidth:{target:160},displayImageAspectRatio:1,imageContainment:"cover",displayFields:["url","image","isFavorite","favoriteCount","title"],drillContext:"eyJ2IjoiNC4wIiwidGl0bGUiOiJQb3B1bGFyIiwiZ3JvdXBUeXBlIjoicG9wdWxhciIsImFycmFuZ2VtZW50IjoiY29udGV4dC13aXRoLXNlYXJjaCJ9"},{title:"Stories",pageIds:[102208,102206,102205,102194,102153,102060,102058,102059,102004,102e3,102001,102002],style:"carousel",templateId:"title-on-image",cellWidth:{target:141,min:130},displayImageAspectRatio:.65,imageContainment:"cover",displayFields:["url","image","title","isFavorite","favoriteCount"],drillContext:"eyJ2IjoiNC4wIiwidGl0bGUiOiJTdG9yaWVzIiwiZ3JvdXBUeXBlIjoic3RvcmllcyIsImFycmFuZ2VtZW50IjoiY29udGV4dC13aXRoLXNlYXJjaCJ9"},{title:"Videos",pageIds:[-1211,-102270,-102268,-102259,-102258,-920,-102256,-102251,-102249,-102248,-102246,-102244],style:"carousel",templateId:"title-u-image",cellWidth:{target:184,min:160},displayImageAspectRatio:1.7,imageContainment:"cover",displayFields:["url","image","title"],drillContext:"eyJ2IjoiNC4wIiwidGl0bGUiOiJWaWRlb3MiLCJncm91cFR5cGUiOiJ2aWRlb3MiLCJhcnJhbmdlbWVudCI6ImNvbnRleHQtd2l0aC1zZWFyY2gifQ=="}],itemDescriptors:{16:{"@type":"GenericPageDescriptor",id:16,type:"webpage",url:"https://pinchofyum.com/protein-pancakes",titleHtml:"The Best Protein Pancakes",titleText:"The Best Protein Pancakes",descriptionHtml:"Protein Pancakes! super easy with no refined grains or refined sugar. just oats, banana, eggs, baking powder, and protein powder.",published:1465218e6,totalFavorites:61196,readingTime:6,hasVideo:!0,image:{pageId:16,url:"https://pinchofyum.com/wp-content/uploads/Protein-Pancakes-3.jpg",width:1200,height:1800},recipe:{ingredientListHtml:"oats, banana, eggs, egg, baking powder, salt, cinnamon, protein powder, flax meal",avgRating:4.3,reviewCount:128,prepMinutes:10,cookMinutes:10,totalMinutes:20},isFavorite:!1},31:{"@type":"GenericPageDescriptor",id:31,type:"webpage",url:"https://pinchofyum.com/the-best-soft-chocolate-chip-cookies",titleHtml:"The Best Soft Chocolate Chip Cookies",titleText:"The Best Soft Chocolate Chip Cookies",descriptionHtml:"These are THE BEST soft chocolate chip cookies! No chilling required. Just ultra thick, soft, classic chocolate chip cookies!",published:16027524e5,totalFavorites:217769,readingTime:7,hasVideo:!0,image:{pageId:31,url:"https://pinchofyum.com/wp-content/uploads/Chocolate-Chip-Cookies.jpg",width:1200,height:1950},recipe:{ingredientListHtml:"salted butter, white sugar, brown sugar, vanilla, egg, all purpose flour, baking soda, salt, chocolate chips",avgRating:4.6,reviewCount:1464,prepMinutes:10,cookMinutes:10,totalMinutes:20},isFavorite:!1},34:{"@type":"GenericPageDescriptor",id:34,type:"webpage",url:"https://pinchofyum.com/best-anytime-baked-chicken-meatballs",titleHtml:"Best Anytime Baked Chicken Meatballs",titleText:"Best Anytime Baked Chicken Meatballs",descriptionHtml:"These Baked Chicken Meatballs are the BEST! The perfect addition to any meal or to eat right on their own. Bonus: they&#39;re meal-prep friendly to stock up throughout the week!",published:15275844e5,totalFavorites:59140,readingTime:5,hasVideo:!0,image:{pageId:34,url:"https://pinchofyum.com/wp-content/uploads/Baked-Chicken-Meatball-Feature-1.jpg",width:1200,height:1200},recipe:{ingredientListHtml:"chicken, egg, panko breadcrumbs, grated parmesan, olive oil, garlic powder, onion powder, salt, black pepper, seasonings",avgRating:4.9,reviewCount:177,prepMinutes:10,cookMinutes:20,totalMinutes:30},isFavorite:!1},41:{"@type":"GenericPageDescriptor",id:41,type:"webpage",url:"https://pinchofyum.com/lo-mein",titleHtml:"15 Minute Lo Mein",titleText:"15 Minute Lo Mein",descriptionHtml:"THE BEST Easy Lo Mein! Five-ish ingredients and SO YUMMY! Naturally vegan / vegetarian, or you can add protein of choice.",published:1466775e6,totalFavorites:137432,readingTime:8,hasVideo:!0,image:{pageId:41,url:"https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2-Featured.jpg",width:1121,height:1682},recipe:{ingredientListHtml:"soy sauce, soy sauce, sesame oil, sugar, ramen noodles, sesame oil, green onions, cut or chopped vegetables like carrots, red peppers, cabbage, mushrooms, mirin",avgRating:4.4,reviewCount:117,prepMinutes:5,cookMinutes:15,totalMinutes:20},isFavorite:!1},67:{"@type":"GenericPageDescriptor",id:67,type:"webpage",url:"https://pinchofyum.com/5-minute-honey-mustard-sauce",titleHtml:"5 Minute Honey Mustard Sauce",titleText:"5 Minute Honey Mustard Sauce",descriptionHtml:"5 Minute Honey Mustard Sauce - just 5 ingredients to this smooth and creamy dipping sauce that can double as a dressing! So simple and delicious!",published:1437565853e3,totalFavorites:62351,readingTime:5,hasVideo:!0,image:{pageId:67,url:"https://pinchofyum.com/wp-content/uploads/Honey-Mustard-Sauce-in-bowl.jpg",width:1200,height:1800},recipe:{ingredientListHtml:"wholesome organic honey, mayonnaise, dijon mustard, white distilled vinegar, cayenne pepper",avgRating:4.4,reviewCount:68,prepMinutes:4,cookMinutes:1,totalMinutes:5},isFavorite:!1},80:{"@type":"GenericPageDescriptor",id:80,type:"webpage",url:"https://pinchofyum.com/spicy-shrimp-tacos-with-garlic-cilantro-lime-slaw",titleHtml:"Spicy Shrimp Tacos with Garlic Cilantro Lime Slaw",titleText:"Spicy Shrimp Tacos with Garlic Cilantro Lime Slaw",descriptionHtml:"Spicy Shrimp Tacos with Garlic Cilantro Lime Slaw - ready in about 30 minutes and loaded with flavor and texture. SO YUM!",published:15650103e5,totalFavorites:121243,readingTime:5,hasVideo:!0,image:{pageId:80,url:"https://pinchofyum.com/wp-content/uploads/Easy-Shrimp-Tacos.jpg",width:1200,height:1800},recipe:{ingredientListHtml:"oil, water, green onions, cilantro leaves, garlic, salt, juice, limes, sour cream, greek yogurt, chili powder and cumin, onion powder and garlic powder, cayenne pepper, coarse sea salt, shrimp, green cabbage, tortillas, avocados, cotija cheese",avgRating:4.7,reviewCount:222,prepMinutes:20,cookMinutes:10,totalMinutes:30},isFavorite:!1},116:{"@type":"GenericPageDescriptor",id:116,type:"webpage",url:"https://pinchofyum.com/quick-homemade-ramen",titleHtml:"Quick Homemade Ramen",titleText:"Quick Homemade Ramen",descriptionHtml:"This quick homemade ramen is a delicious way to make ramen a little more healthy! Fresh veggies and herbs take the usual ramen up a notch.",published:16157988e5,totalFavorites:21409,readingTime:6,hasVideo:!0,image:{pageId:116,url:"https://pinchofyum.com/wp-content/uploads/Homemade-Ramen-4-3.jpg",width:1200,height:1800},recipe:{ingredientListHtml:"sesame oil, ginger, garlic, broth, water, mushrooms, instant ramen, scallions, kale, carrots, sriracha, golden panko crumbs",avgRating:4.6,reviewCount:75,prepMinutes:5,cookMinutes:20,totalMinutes:25},isFavorite:!1},120:{"@type":"GenericPageDescriptor",id:120,type:"webpage",url:"https://pinchofyum.com/cinnamon-sugar-apple-cake",titleHtml:"Cinnamon Sugar Apple Cake",titleText:"Cinnamon Sugar Apple Cake",descriptionHtml:"This simple cinnamon sugar apple cake is light and fluffy, loaded with fresh apples, and topped with a crunchy cinnamon sugar layer!",published:156924e7,totalFavorites:63169,readingTime:5,hasVideo:!0,image:{pageId:120,url:"https://pinchofyum.com/wp-content/uploads/Apple-Cake-Slice.jpg",width:1200,height:1800},recipe:{ingredientListHtml:"brown sugar, oil, egg, buttermilk, vanilla, baking soda, flour, apples, sugar, cinnamon, butter",avgRating:4.7,reviewCount:282,prepMinutes:15,cookMinutes:45,totalMinutes:60},isFavorite:!1},920:{"@type":"GenericPageDescriptor",id:920,type:"webpage",url:"https://pinchofyum.com/30-minute-vegetarian-meatballs",titleHtml:"30 Minute Vegetarian Meatballs",titleText:"30 Minute Vegetarian Meatballs",descriptionHtml:"These vegetarian meatballs are incredibly easy and super versatile! Packed with cauliflower, quinoa, brown rice, garlic, and spices. YUMMY!",published:16306596e5,totalFavorites:17658,readingTime:6,hasVideo:!0,image:{pageId:920,url:"https://pinchofyum.com/wp-content/uploads/Veg-Meatballs-2.jpg",width:1500,height:2250},recipe:{ingredientListHtml:"cauliflower rice or cauliflower florets, quinoa, brown rice, panko breadcrumbs, eggs, spices, salt, olive oil",avgRating:4.9,reviewCount:85,prepMinutes:15,cookMinutes:15,totalMinutes:30},isFavorite:!1},1211:{"@type":"GenericPageDescriptor",id:1211,type:"webpage",url:"https://pinchofyum.com/sunday-chili",titleHtml:"Sunday Chili",titleText:"Sunday Chili",descriptionHtml:"This is the BEST Sunday Chili! Beef, bacon, tomatoes, chopped veggies, beans, and spices - it&#39;s a cozy weather weekend essential!",published:16330788e5,totalFavorites:67687,readingTime:7,hasVideo:!0,image:{pageId:1211,url:"https://pinchofyum.com/wp-content/uploads/Sunday-Chili.jpg",width:1200,height:1800},recipe:{ingredientListHtml:"salt, ground beef, bacon, onion, garlic, jalapeno, carrots, chili powder, cumin, oregano, garlic powder, tomato paste, fire, tomatoes, beans, beef, broth, toppings",avgRating:4.9,reviewCount:82,prepMinutes:30,cookMinutes:120,totalMinutes:150},isFavorite:!1},102e3:{"@type":"GenericPageDescriptor",id:102e3,type:"web-story",url:"https://pinchofyum.com/web-stories/cozy-veggie-korma",titleHtml:"Cozy Veggie Korma",titleText:"Cozy Veggie Korma",descriptionHtml:"Cozy Veggie Korma! A boatload of comforting vegetables like potatoes, bell peppers, and green beans, and a creamy golden sauce with onion, garlic, ginger, warming spices. So comforting!",published:1608258251e3,totalFavorites:17,readingTime:2,hasVideo:!1,image:{pageId:102e3,url:"https://pinchofyum.com/wp-content/uploads/Veggie-Korma-Stories-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102001:{"@type":"GenericPageDescriptor",id:102001,type:"web-story",url:"https://pinchofyum.com/web-stories/white-chicken-chili",titleHtml:"Sarah&#39;s White Chicken Chili",titleText:"Sarah's White Chicken Chili",descriptionHtml:"White Chicken Chili! One of my favorite soups. Creamy, smoky, cozy, and spicy with BIG flavor and simple ingredients. SO GOOD.",published:1608090554e3,totalFavorites:75,readingTime:1,hasVideo:!1,image:{pageId:102001,url:"https://pinchofyum.com/wp-content/uploads/Sarahs-White-Chicken-Chili-Stories-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102002:{"@type":"GenericPageDescriptor",id:102002,type:"web-story",url:"https://pinchofyum.com/web-stories/homemade-oreos",titleHtml:"Old School Homemade Oreos",titleText:"Old School Homemade Oreos",descriptionHtml:"Life-changing Homemade Oreos that are soft, buttery, moist, perfectly dense chocolate cookies stuffed with cream cheese frosting. SO GOOD.",published:1608063256e3,totalFavorites:51,readingTime:1,hasVideo:!1,image:{pageId:102002,url:"https://pinchofyum.com/wp-content/uploads/Homemade-Oreos-Stories-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102004:{"@type":"GenericPageDescriptor",id:102004,type:"web-story",url:"https://pinchofyum.com/web-stories/brussels-and-kale-caesar-salad",titleHtml:"Brussels and Kale Caesar Salad",titleText:"Brussels and Kale Caesar Salad",descriptionHtml:"Brussels &amp; Kale Caesar! Papery-thin shreds of brussels sprouts and chopped kale, tossed with a creamy avocado-based vegan caesar dressing, topped off with the most addicting cheezy croutons.",published:1608332743e3,totalFavorites:80,readingTime:1,hasVideo:!1,image:{pageId:102004,url:"https://pinchofyum.com/wp-content/uploads/Brussels-and-Kale-Caesar-4-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102058:{"@type":"GenericPageDescriptor",id:102058,type:"web-story",url:"https://pinchofyum.com/web-stories/coconut-curry-ramen",titleHtml:"Coconut Curry Ramen",titleText:"Coconut Curry Ramen",descriptionHtml:"Coconut Curry Ramen with a creamy golden broth, pan-fried vegetables, cubes of golden brown tofu, and steamy delicious ramen noodles. Bonus: it’s vegan!",published:1608577497e3,totalFavorites:83,readingTime:2,hasVideo:!1,image:{pageId:102058,url:"https://pinchofyum.com/wp-content/uploads/Coconut-Curry-Ramen-Web-Story-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102059:{"@type":"GenericPageDescriptor",id:102059,type:"web-story",url:"https://pinchofyum.com/web-stories/cheesecake-muffins",titleHtml:"Triple Berry Cheesecake Muffins",titleText:"Triple Berry Cheesecake Muffins",descriptionHtml:"Triple Berry Cheesecake Muffins! Juicy berries, a luscious cheesecake layer, and some heavy streusel on top to finish it off. Baked to perfection!",published:1608574821e3,totalFavorites:84,readingTime:1,hasVideo:!1,image:{pageId:102059,url:"https://pinchofyum.com/wp-content/uploads/Berry-Cheesecake-Muffins-Web-Story-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102060:{"@type":"GenericPageDescriptor",id:102060,type:"web-story",url:"https://pinchofyum.com/web-stories/curry-chicken-salad",titleHtml:"Curry Chicken Salad",titleText:"Curry Chicken Salad",descriptionHtml:"This Curry Chicken Salad is super clean and SO delicious. Loaded with spiced chicken, golden raisins, pistachios, herbs, and Greek yogurt + olive oil as a stand-in for mayo.",published:160860955e4,totalFavorites:49,readingTime:1,hasVideo:!1,image:{pageId:102060,url:"https://pinchofyum.com/wp-content/uploads/Curry-Chicken-Salad-Web-Story-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102153:{"@type":"GenericPageDescriptor",id:102153,type:"web-story",url:"https://stories.slickstream.com/pinchofyum/d/webstory/basic-awesome-broccoli-cheese-soup",titleHtml:"Basic + Awesome Broccoli Cheese Soup",titleText:"Basic + Awesome Broccoli Cheese Soup",descriptionHtml:"This Broccoli Cheese Soup is easy, creamy, and a perfect cozy classic. A silky-smooth soup base, little bites of just-right broccoli and carrots, and some sharp creamy cheddar cheese to finish it off.",published:1612478428038,totalFavorites:78,readingTime:1,hasVideo:!1,image:{pageId:102153,url:"https://s.slickstream.com/file-hosting/2021-02-04/87ffaac8-9929-4261-b3f6-e1aeac94ff5e/Broccoli-Cheese-Soup-1-2.jpg",width:1200,height:1800},recipe:{},isFavorite:!1},102194:{"@type":"GenericPageDescriptor",id:102194,type:"web-story",url:"https://pinchofyum.com/web-stories/crispy-black-bean-tacos",titleHtml:"Crispy Black Bean Tacos",titleText:"Crispy Black Bean Tacos",descriptionHtml:"These vegetarian tacos have a deliciously satisfying black bean filling with fresh salsa and seasonings all tucked into a golden crispy tortilla and served alongside a cool and cilantro sauce.",published:1618500033e3,totalFavorites:68,readingTime:2,hasVideo:!1,image:{pageId:102194,url:"https://pinchofyum.com/wp-content/uploads/black-bean-tacos-web-stories-cover-image-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102205:{"@type":"GenericPageDescriptor",id:102205,type:"web-story",url:"https://pinchofyum.com/web-stories/best-easy-spinach-artichoke-pizza",titleHtml:"Best Easy Spinach &amp; Artichoke Pizza",titleText:"Best Easy Spinach & Artichoke Pizza",descriptionHtml:"This really is the absolute easiest Spinach and Artichoke Pizza! Garlicky spreadable cheese, canned artichokes, fresh spinach, sun-dried tomatoes, and mozzarella - all on a pre-made pizza crust.",published:1620616405e3,totalFavorites:64,readingTime:1,hasVideo:!1,image:{pageId:102205,url:"https://pinchofyum.com/wp-content/uploads/spinach-artichoke-pizza-web-stories-cover-image-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102206:{"@type":"GenericPageDescriptor",id:102206,type:"web-story",url:"https://pinchofyum.com/web-stories/spicy-salmon-burgers",titleHtml:"Spicy Salmon Burgers",titleText:"Spicy Salmon Burgers",descriptionHtml:"These Spicy Salmon Burgers are little bundles of flavor! Canned salmon, panko, refreshing lemongrass, and a sweet-spicy zingy combo of red curry paste and brown sugar. So good and so simple!",published:1621216898e3,totalFavorites:21,readingTime:2,hasVideo:!1,image:{pageId:102206,url:"https://pinchofyum.com/wp-content/uploads/spicy-salmon-burgers-web-story-cover-image-3-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102208:{"@type":"GenericPageDescriptor",id:102208,type:"web-story",url:"https://pinchofyum.com/web-stories/black-pepper-stir-fried-udon",titleHtml:"Black Pepper Stir Fried Udon",titleText:"Black Pepper Stir Fried Udon",descriptionHtml:"This Black Pepper Stir Fried Udon is the perfect SOS dinner! Saucy udon noodles, dark soy sauce, stir fry veggies, fresh garlic, and lots of freshly ground black pepper. So easy!",published:1621868969e3,totalFavorites:37,readingTime:1,hasVideo:!1,image:{pageId:102208,url:"https://pinchofyum.com/wp-content/uploads/black-pepper-stir-fried-udon-web-stories-cover-image-1-640x853.jpg",width:640,height:853},recipe:{},isFavorite:!1},102249:{"@type":"GenericPageDescriptor",id:102249,type:"webpage",url:"https://pinchofyum.com/spaghetti-with-crispy-zucchini",titleHtml:"Spaghetti with Crispy Zucchini",titleText:"Spaghetti with Crispy Zucchini",descriptionHtml:"Spaghetti with Crispy Zucchini! It doesn&#39;t get much better than zucchini coated in a crispy, cheesy breading piled high on top of spaghetti.",published:1629882e6,totalFavorites:1927,readingTime:5,hasVideo:!0,image:{pageId:102249,url:"https://pinchofyum.com/wp-content/uploads/Crispy-Zucchini-Spaghetti-4.jpg",width:1500,height:2250},recipe:{ingredientListHtml:"spaghetti, spaghetti sauce, zucchini, egg, panko breadcrumbs, parmesan cheese, lemon zest, salt and pepper, italian seasoning, garlic powder, cheese, basil leaves",avgRating:5,reviewCount:14,prepMinutes:15,cookMinutes:30,totalMinutes:45},isFavorite:!1},102251:{"@type":"GenericPageDescriptor",id:102251,type:"webpage",url:"https://pinchofyum.com/hot-honey-salmon",titleHtml:"Hot Honey Salmon",titleText:"Hot Honey Salmon",descriptionHtml:"Spicy-sweet salmon coated in fresh garlic, stone ground mustard, sweet honey, and flecks of red peppers flakes. It&#39;s a magical little number!",published:1630314e6,totalFavorites:987,readingTime:5,hasVideo:!0,image:{pageId:102251,url:"https://pinchofyum.com/wp-content/uploads/Hot-Honey-Salmon-3.jpg",width:1500,height:2250},recipe:{ingredientListHtml:"honey, mustard, garlic, juice, lemon, salt, red pepper flakes, paprika, salmon",avgRating:5,reviewCount:6,prepMinutes:10,cookMinutes:10,totalMinutes:20},isFavorite:!1},102256:{"@type":"GenericPageDescriptor",id:102256,type:"webpage",url:"https://pinchofyum.com/three-cheese-baked-gnocchi-with-spinach",titleHtml:"Three Cheese Baked Gnocchi with Spinach",titleText:"Three Cheese Baked Gnocchi with Spinach",descriptionHtml:"Tender gnocchi blanketed in a creamy tomato sauce, speckled with fresh spinach and bites of melty cheese. Gorgeous!",published:16304868e5,totalFavorites:1236,readingTime:5,hasVideo:!0,image:{pageId:102256,url:"https://pinchofyum.com/wp-content/uploads/Three-Cheese-Gnocchi-3.jpg",width:1500,height:2250},recipe:{ingredientListHtml:"olive oil, onion, garlic, tomato purée, broth, basil, mascarpone cheese, salt, potato gnocchi, baby spinach, mozzarella cheese, cheese",avgRating:4.9,reviewCount:10,prepMinutes:10,cookMinutes:30,totalMinutes:40},isFavorite:!1},102258:{"@type":"GenericPageDescriptor",id:102258,type:"webpage",url:"https://pinchofyum.com/fall-favorite-maple-mustard-tempeh-bowls",titleHtml:"Fall Favorite Maple-Mustard Tempeh Bowls",titleText:"Fall Favorite Maple-Mustard Tempeh Bowls",descriptionHtml:"Massaged kale, sweet potatoes, roasty marinated maple-mustard tempeh, crunchy apple, and the unexpected pile of briney sauerkraut.",published:16310052e5,totalFavorites:528,readingTime:6,hasVideo:!0,image:{pageId:102258,url:"https://pinchofyum.com/wp-content/uploads/Tempeh-Bowls-6.jpg",width:1500,height:2250},recipe:{ingredientListHtml:"maple syrup, mustard, soy sauce, olive oil, sweet potatoes, tempeh, kale, avocado, sauerkraut, toppings",avgRating:4.9,reviewCount:7,prepMinutes:20,cookMinutes:30,totalMinutes:50},isFavorite:!1},102259:{"@type":"GenericPageDescriptor",id:102259,type:"webpage",url:"https://pinchofyum.com/vegan-mac-and-cheese",titleHtml:"Incredible Vegan Mac and Cheese",titleText:"Incredible Vegan Mac and Cheese",descriptionHtml:"Incredible Vegan Mac and Cheese! Silky cheese sauce, made with plant-based milk and nutritional yeast, is poured over macaroni noodles. Yummm!",published:1631178e6,totalFavorites:609,readingTime:6,hasVideo:!0,image:{pageId:102259,url:"https://pinchofyum.com/wp-content/uploads/Vegan-Mac-4.jpg",width:1500,height:2250},recipe:{ingredientListHtml:"nutritional yeast, cornstarch, onion powder, garlic powder, salt, turmeric and paprika, elbow macaroni pasta, milk, butter, lemon juice",avgRating:4.1,reviewCount:9,prepMinutes:10,cookMinutes:15,totalMinutes:25},isFavorite:!1},102264:{"@type":"GenericPageDescriptor",id:102264,type:"webpage",url:"https://pinchofyum.com/sos-series-2-recap",titleHtml:"The SOS Series 2.0 Recap",titleText:"The SOS Series 2.0 Recap",descriptionHtml:"How did that happen?! This series has been a total joy ride and it has absolutely flown by. Take a little look back at the highlights from the SOS Series 2.0 with us.",published:16317828e5,totalFavorites:418,readingTime:6,hasVideo:!1,image:{pageId:102264,url:"https://pinchofyum.com/wp-content/uploads/SOS-2.0-Series-Square-Hero.jpg",width:1080,height:1080},recipe:{},isFavorite:!1},102265:{"@type":"GenericPageDescriptor",id:102265,type:"webpage",url:"https://pinchofyum.com/coming-soon-the-soup-series",titleHtml:"Coming Soon: The Soup Series",titleText:"Coming Soon: The Soup Series",descriptionHtml:"Raise your hand if you&#39;re ready for cozy blankets, sweaters, cool breezes, and big soup pots gently simmering on the stove? If so, then you should know The Soup Series is making its way to you very, very soon!",published:1632147731e3,totalFavorites:208,readingTime:4,hasVideo:!1,image:{pageId:102265,url:"https://pinchofyum.com/wp-content/uploads/Soup-Series-Square-Feature-02.jpg",width:1081,height:1080},recipe:{},isFavorite:!1},102267:{"@type":"GenericPageDescriptor",id:102267,type:"webpage",url:"https://pinchofyum.com/september-coffee-date-3",titleHtml:"September Coffee Date",titleText:"September Coffee Date",descriptionHtml:"It&#39;s time for this month&#39;s coffee date where I dish on all the latest happenings in my life! What I&#39;m loving, what I&#39;m doing, and what&#39;s ahead.",published:1632330813e3,totalFavorites:1414,readingTime:10,hasVideo:!1,image:{pageId:102267,url:"https://pinchofyum.com/wp-content/uploads/October-Coffee-Date-9.jpg",width:1500,height:1999},recipe:{},isFavorite:!1},102268:{"@type":"GenericPageDescriptor",id:102268,type:"webpage",url:"https://pinchofyum.com/country-chicken-stew",titleHtml:"Country Chicken Stew",titleText:"Country Chicken Stew",descriptionHtml:"This Country Chicken Stew is waiting for you! Chicken, thick-cut bacon, navy beans, veggies, and fresh herbs all simmering in one big pot.",published:16327332e5,totalFavorites:1644,readingTime:9,hasVideo:!0,image:{pageId:102268,url:"https://pinchofyum.com/wp-content/uploads/Country-Chicken-Stew-2.jpg",width:1500,height:2250},recipe:{ingredientListHtml:"navy beans, bacon, onions, garlic, thyme, bay leaf, chicken, water, salt, carrots, cabbage, lemon or red wine vinegar, parsley, herbs",avgRating:5,reviewCount:4,prepMinutes:30,cookMinutes:75,totalMinutes:105},isFavorite:!1},102269:{"@type":"GenericPageDescriptor",id:102269,type:"webpage",url:"https://pinchofyum.com/delicious-soup-recipes-to-cozy-up-to-this-fall",titleHtml:"Delicious Soup Recipes To Cozy Up To This Fall",titleText:"Delicious Soup Recipes To Cozy Up To This Fall",descriptionHtml:"It’s soup season! :yellow_heart: We’re bringing all the fall vibes into your kitchen with different creamy, brothy, bright, nourishing cozy bowls of goodness. Catch all the yum of The Soup Series here over the next few weeks.",published:16319556e5,totalFavorites:26,readingTime:1,hasVideo:!1,image:{pageId:102269,url:"https://pinchofyum.com/wp-content/uploads/The-Soup-Series-Pin.jpg",width:1e3,height:2e3},recipe:{},isFavorite:!1},102270:{"@type":"GenericPageDescriptor",id:102270,type:"webpage",url:"https://pinchofyum.com/smoky-red-lentil-soup-with-spinach",titleHtml:"Smoky Red Lentil Soup with Spinach",titleText:"Smoky Red Lentil Soup with Spinach",descriptionHtml:"This Smoky Lentil Soup is ultra creamy and totally vegan! Packed to the brim with veggies, red lentils, coconut milk, and lots of spices, it&#39;s a total win for the coziest months of the year!",published:1632906e6,totalFavorites:1581,readingTime:7,hasVideo:!0,image:{pageId:102270,url:"https://pinchofyum.com/wp-content/uploads/Smoky-Red-Lentil-Stew-3.jpg",width:1500,height:2250},recipe:{ingredientListHtml:"olive oil, onion, carrots, celery, garlic, smoked paprika, cumin, turmeric, red lentils, vegetable broth, coconut milk, spinach, salt, lemon, garlic powder, onion power, black pepper, crispy socca",avgRating:5,reviewCount:2,prepMinutes:10,cookMinutes:25,totalMinutes:35},isFavorite:!1},"-1211":{"@type":"GenericPageDescriptor",id:-1211,type:"video",url:"https://pinchofyum.com/sunday-chili#cls-video-container-OB3NhB2C",titleHtml:"Sunday Chili",titleText:"Sunday Chili",descriptionHtml:"A winter weekend essential! Thick, hearty, slow-simmered chili makes for the BEST comfort food (and leftovers)!",published:16330788e5,image:{pageId:1211,url:"https://content.jwplatform.com/thumbs/OB3NhB2C-720.jpg"},totalFavorites:0},"-102270":{"@type":"GenericPageDescriptor",id:-102270,type:"video",url:"https://pinchofyum.com/smoky-red-lentil-soup-with-spinach#cls-video-container-xd0edY08",titleHtml:"Smoky Red Lentil Soup with Spinach",titleText:"Smoky Red Lentil Soup with Spinach",descriptionHtml:"This Smoky Lentil Soup is ultra creamy and totally vegan! Packed to the brim with veggies, red lentils, coconut milk, and lots of spices, it’s a total win for the coziest months of the year!",published:1632906e6,image:{pageId:102270,url:"https://content.jwplatform.com/thumbs/xd0edY08-720.jpg"},totalFavorites:0},"-102268":{"@type":"GenericPageDescriptor",id:-102268,type:"video",url:"https://pinchofyum.com/country-chicken-stew#cls-video-container-n9XcePtq",titleHtml:"Country Chicken Stew",titleText:"Country Chicken Stew",descriptionHtml:"A cozy, hearty, humble bowl of this Country Chicken Stew is waiting for you! Chicken, thick-cut bacon, navy beans, veggies, and fresh herbs all simmering in one big pot. It&#39;s a good one, friends! ",published:16327332e5,image:{pageId:102268,url:"https://content.jwplatform.com/thumbs/n9XcePtq-720.jpg"},totalFavorites:0},"-102259":{"@type":"GenericPageDescriptor",id:-102259,type:"video",url:"https://pinchofyum.com/vegan-mac-and-cheese#cls-video-container-Xhpld2Gb",titleHtml:"Incredible Vegan Mac and Cheese",titleText:"Incredible Vegan Mac and Cheese",descriptionHtml:"Truly incredible Vegan Mac and Cheese is ready for you! Silky cheese sauce made with plant milk and nutritional yeast is poured over macaroni noodles and comes together with creamy plant butter. It&#39;s luscious! ",published:1631178e6,image:{pageId:102259,url:"https://content.jwplatform.com/thumbs/Xhpld2Gb-720.jpg"},totalFavorites:0},"-102258":{"@type":"GenericPageDescriptor",id:-102258,type:"video",url:"https://pinchofyum.com/fall-favorite-maple-mustard-tempeh-bowls#cls-video-container-iR8myPng",titleHtml:"Fall Favorite Maple-Mustard Tempeh Bowls",titleText:"Fall Favorite Maple-Mustard Tempeh Bowls",descriptionHtml:"These tempeh bowls are a true fall favorite! Massaged kale, sweet potatoes, roasty marinated maple-mustard tempeh, crunchy apple, and the unexpected pile of briney sauerkraut.",published:16310052e5,image:{pageId:102258,url:"https://content.jwplatform.com/thumbs/iR8myPng-720.jpg",width:null,height:null},totalFavorites:0,duration:null},"-920":{"@type":"GenericPageDescriptor",id:-920,type:"video",url:"https://pinchofyum.com/30-minute-vegetarian-meatballs#cls-video-container-pJ45oVN3",titleHtml:"30 Minute Vegetarian Meatballs",titleText:"30 Minute Vegetarian Meatballs",descriptionHtml:"These vegetarian meatballs are incredibly easy and super versatile! Packed with cauliflower, quinoa, brown rice, garlic, and spices. Stockpile these in your freezer and your future self will thank you. ",published:16306596e5,image:{pageId:920,url:"https://content.jwplatform.com/thumbs/pJ45oVN3-720.jpg",width:null,height:null},totalFavorites:0,duration:null},"-102256":{"@type":"GenericPageDescriptor",id:-102256,type:"video",url:"https://pinchofyum.com/three-cheese-baked-gnocchi-with-spinach",titleHtml:"Three Cheese Baked Gnocchi with Spinach",titleText:"Three Cheese Baked Gnocchi with Spinach",descriptionHtml:"Tender gnocchi blanketed in a creamy tomato sauce, speckled with fresh spinach and bites of melty cheese. Gorgeous!",published:16304868e5,image:{pageId:102256,url:"https://pinchofyum.com/wp-content/uploads/o8oza4gnk7g.jpg",width:480,height:270},totalFavorites:0,duration:62},"-102251":{"@type":"GenericPageDescriptor",id:-102251,type:"video",url:"https://pinchofyum.com/hot-honey-salmon#cls-video-container-Gz57PLva",titleHtml:"Hot Honey Salmon",titleText:"Hot Honey Salmon",descriptionHtml:"This Hot Honey Salmon is giving off major fancy-to-eat-but-not-fancy-to-make vibes. Spicy-sweet salmon coated in fresh garlic, stone ground mustard, sweet honey, and flecks of red peppers flakes. It’s a magical little number!",published:1630314e6,image:{pageId:102251,url:"https://content.jwplatform.com/thumbs/Gz57PLva-720.jpg",width:null,height:null},totalFavorites:0,duration:null},"-102249":{"@type":"GenericPageDescriptor",id:-102249,type:"video",url:"https://pinchofyum.com/spaghetti-with-crispy-zucchini#cls-video-container-p3c5DjiA",titleHtml:"Spaghetti with Crispy Zucchini",titleText:"Spaghetti with Crispy Zucchini",descriptionHtml:"This Spaghetti with Crispy Zucchini is the perfect end-of-summer song! It doesn’t get much better than fresh summer zucchini coated in a crispy, cheesy breading piled high on top of spaghetti with fresh herbs. YUM! ",published:1629882e6,image:{pageId:102249,url:"https://content.jwplatform.com/thumbs/p3c5DjiA-720.jpg"},totalFavorites:0},"-102248":{"@type":"GenericPageDescriptor",id:-102248,type:"video",url:"https://pinchofyum.com/garlic-butter-shrimp-boil",titleHtml:"Garlic Butter Shrimp Boil Step 1",titleText:"Garlic Butter Shrimp Boil Step 1",descriptionHtml:"Butter Sauce: Melt your butter in a saucepan over medium low heat. Add the garlic and just let it hang out over gentle, low heat to infuse all the garlic flavor into the butter and soften the little pieces of garlic. Add a few thyme sprigs if you want to be extra. Keep an eye on it so you don&#39;t brown it or burn it. It will smell... how do I say this? AMAZING.",published:16297092e5,image:{pageId:102248,url:"https://i.vimeocdn.com/video/1219824661_295x166"},totalFavorites:0,duration:12},"-102246":{"@type":"GenericPageDescriptor",id:-102246,type:"video",url:"https://pinchofyum.com/roasted-broccoli-salad#cls-video-container-ygbSEaHk",titleHtml:"Liz&#39;s Roasted Broccoli Salad",titleText:"Liz's Roasted Broccoli Salad",descriptionHtml:"This Roasted Broccoli Salad is EVERYTHING! Bright lemon, crisped-up bacon, tangy feta, and it&#39;s all built around a big bowl of roasted broccoli. A true hero of a meal! ",published:162945e7,image:{pageId:102246,url:"https://content.jwplatform.com/thumbs/ygbSEaHk-720.jpg"},totalFavorites:0},"-102244":{"@type":"GenericPageDescriptor",id:-102244,type:"video",url:"https://pinchofyum.com/one-pan-farro-with-tomatoes-and-kale#cls-video-container-mmMVm2bY",titleHtml:"One-Pan Farro with Tomatoes and Kale",titleText:"One-Pan Farro with Tomatoes and Kale",descriptionHtml:"This One-Pan Farro with Tomatoes and Kale is a straight-up DREAM! Rustic farro cozied up to cherry tomatoes, onions, garlic, and kale. So good and so wholesome!",published:16292772e5,image:{pageId:102244,url:"https://content.jwplatform.com/thumbs/mmMVm2bY-720.jpg",width:null,height:null},totalFavorites:0,duration:null}},arrangement:"top-with-search",drillContext:"eyJ2IjoiNC4wIiwidGl0bGUiOiIiLCJncm91cFR5cGUiOiJub25lIiwiYXJyYW5nZW1lbnQiOiJ0b3Atd2l0aC1zZWFyY2gifQ=="};const me=new class{constructor(){this.map=new Map,this.maps=new Map}get(e,t){const i=t?this.maps.get(t):this.map;return i&&i.has(e)?i.get(e):""}define(e,t){let i=this.map;t&&(this.maps.has(t)||this.maps.set(t,new Map),i=this.maps.get(t));for(const t in e)i.set(t,e[t])}};me.define({menu:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",close:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z","checkbox-filled":"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z","checkbox-unfilled":"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z","radio-unchecked":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z","radio-checked":"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",search:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z","chevron-left":"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z","chevron-right":"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",more:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z","more-vert":"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z","more-horiz":"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",heart:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z","heart-outline":"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",star:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z","star-outline":"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",wine:"M6,3l0,6c0,2.97,2.16,5.43,5,5.91V19H8v2h8v-2h-3v-4.09c2.84-0.48,5-2.94,5-5.91l0-6H6z M16,8H8l0-3h8C16,5,16,8,16,8z","wine-outline":"M6,3l0,6c0,2.97,2.16,5.43,5,5.91V19H8v2h8v-2h-3v-4.09c2.84-0.48,5-2.94,5-5.91V3H6z M12,13c-1.86,0-3.41-1.28-3.86-3h7.72 C15.41,11.72,13.86,13,12,13z M16,8H8l0-3h8L16,8z",delete:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fullscreen:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z","fullscreen-exit":"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",refresh:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",pause:"M6 19h4V5H6v14zm8-14v14h4V5h-4z",play:"M8 5v14l11-7z",up:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z",down:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",right:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",left:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",bookmark:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z","bookmark-outline":"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z",pin:"M 14.490234 2.4902344 A 1.0001 1.0001 0 0 0 13.792969 4.2070312 L 14.388672 4.8027344 L 8.1894531 9.7753906 L 7.2070312 8.7929688 A 1.0001 1.0001 0 0 0 6.4902344 8.4902344 A 1.0001 1.0001 0 0 0 5.7929688 10.207031 L 9.09375 13.507812 L 3.2890625 19.310547 C 2.9020625 19.697547 2.9020625 20.323937 3.2890625 20.710938 C 3.6760625 21.097938 4.3024531 21.097938 4.6894531 20.710938 L 10.492188 14.90625 L 13.792969 18.207031 A 1.0001 1.0001 0 1 0 15.207031 16.792969 L 14.310547 15.896484 L 19.214844 9.6289062 L 19.792969 10.207031 A 1.0001 1.0001 0 1 0 21.207031 8.7929688 L 15.207031 2.7929688 A 1.0001 1.0001 0 0 0 14.490234 2.4902344 z","expand-less":"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",carousel:"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z","unfold-more":"M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z","open-panel":"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z",twitter:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",facebook:"M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"});const fe=new class{constructor(){this.listeners=new Map,this.counter=0}subscribe(e,t){return this.listeners.has(e)||this.listeners.set(e,new Map),this.listeners.get(e).set(++this.counter,t),this.counter}unsubscrive(e,t){return!!this.listeners.has(e)&&this.listeners.get(e).delete(t)}async dispatch(e,t){const i=this.listeners.get(e);i&&i.forEach((async i=>{try{await i(t,e)}catch(e){console.error(e)}}))}},ve=new Map;function ye(e,t){try{customElements.get(e)||customElements.define(e,t)}catch(t){console.log("Failed to register element: "+e,t)}}function be(e){return t=>{window.customElements?ye(e,t):ve.set(e,t)}}fe.subscribe("webcomponents-ready",(()=>{for(const[e,t]of ve)ye(e,t);ve.clear()}));var we=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},ke=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Se=class extends ce{static get styles(){return ae`
      :host {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        fill: currentColor;
        stroke: none;
        width: 24px;
        height: 24px;
        box-sizing: initial;
      }
      svg {
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
      }
    `}render(){const e=this.icon||"",t=me.get(e,this.iconkey);return this.customSvg?A``:A`
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
      <g>
        <path d="${t}"></path>
      </g>
    </svg>
    `}updated(e){e.has("customSvg")&&this.customSvg&&(this.shadowRoot.innerHTML=this.customSvg)}};we([Q({type:String}),ke("design:type",String)],Se.prototype,"icon",void 0),we([Q({type:String}),ke("design:type",String)],Se.prototype,"iconkey",void 0),we([Q(),ke("design:type",String)],Se.prototype,"customSvg",void 0),Se=we([be("soso-icon")],Se);var xe=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},_e=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ce=class extends ce{constructor(){super(...arguments),this.disabled=!1}static get styles(){return ae`
    :host {
      display: inline-block;
      line-height: 1;
    }
    button {
      background: none;
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 50%;
      overflow: hidden;
      padding: var(--soso-icon-button-padding, 10px);
      color: inherit;
      user-select: none;
      position: relative;
      display: block;
    }
    button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: currentColor;
      opacity: var(--soso-icon-button-before-opacity, 0);
      pointer-events: none;
    }
    button:focus::before {
      opacity: var(--soso-icon-button-before-opacity, 0.1);
    }
    button soso-icon {
      transition: transform 0.3s ease;
      width: var(--soso-button-icon-size, 24px);
      height: var(--soso-button-icon-size, 24px);
    }
    button:active soso-icon {
      transform: scale(1.15);
    }
    button:disabled {
      opacity: 0.8;
      color: var(--soso-disabled-color, #808080);
      cursor: initial;
      pointer-events: none;
    }

    @media (hover: hover) {
      button:hover::before {
        opacity: var(--soso-icon-button-before-opacity, 0.05);
      }
      button:focus::before {
        opacity: var(--soso-icon-button-before-opacity, 0.1);
      }
    }
    `}render(){return A`
    <button aria-label="${this.label||this.icon}" ?disabled="${this.disabled}">
      <soso-icon .icon="${this.icon}" .iconkey="${this.iconkey}" .customSvg="${this.customSvg}"></soso-icon>
    </button>`}updated(e){e.has("disabled")&&(this.style.pointerEvents=this.disabled?"none":"")}focus(){if(this.shadowRoot){const e=this.shadowRoot.querySelector("button");e&&e.focus()}}};xe([Q({type:String}),_e("design:type",String)],Ce.prototype,"icon",void 0),xe([Q({type:String}),_e("design:type",String)],Ce.prototype,"iconkey",void 0),xe([Q({type:Boolean}),_e("design:type",Object)],Ce.prototype,"disabled",void 0),xe([Q(),_e("design:type",String)],Ce.prototype,"customSvg",void 0),xe([Q(),_e("design:type",String)],Ce.prototype,"label",void 0),Ce=xe([be("soso-icon-button")],Ce);var ze=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Pe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Me=class extends ce{constructor(){super(...arguments),this.outlined=!1,this.solid=!1,this.disabled=!1}static get styles(){return ae`
    :host {
      display: inline-block;
      font-size: 14px;
      text-transform: uppercase;
    }
    button {
      cursor: pointer;
      outline: none;
      border-radius: var(--soso-button-radius, 4px);
      overflow: hidden;
      color: inherit;
      user-select: none;
      position: relative;
      font-family: inherit;
      text-align: center;
      font-size: inherit;
      letter-spacing: 1.25px;
      padding: var(--soso-button-padding, 1px 8px);
      min-height: 36px;
      text-transform: inherit;
      width: 100%;
      box-sizing: border-box;
    }
    button.flat {
      background: none;
      border: none;
    }
    button.outlined {
      background: none;
      border: 2px solid;
      padding: 1px 10px;
    }
    button.solid {
      background: currentColor;
      border: none;
      padding: 1px 10px;
      transition: box-shadow 0.3s ease;
      min-height: 40px;
    }

    button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: currentColor;
      opacity: 0;
      pointer-events: none;
    }
    button:focus::before {
      opacity: 0.1;
    }
    button.solid::before {
      display: none;
    }
    button.solid:focus {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
    }
    
    button.solid span {
      color: var(--soso-button-text-color, white);
    }
    button span {
      display: inline-block;
      transition: transform 0.2s ease;
    }
    button:active span {
      transform: scale(1.02);
    }

    button:disabled {
      opacity: 0.8;
      color: var(--soso-disabled-color, #808080);
      cursor: initial;
      pointer-events: none;
    }
    button.solid:disabled::before {
      opacity: 0.2;
    }

    @media (hover: hover) {
      button:hover::before {
        opacity: 0.05;
      }
      button.solid:hover {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);
      }
      button:focus::before {
        opacity: 0.1;
      }
      button.solid:focus {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
      }
    }
    `}render(){const e=this.solid?"solid":this.outlined?"outlined":"flat";return A`
    <button class="${e}" ?disabled="${this.disabled}">
      <span>
        <slot></slot>
      </span>
    </button>`}updated(e){e.has("disabled")&&(this.style.pointerEvents=this.disabled?"none":"")}focus(){if(this.shadowRoot){const e=this.shadowRoot.querySelector("button");e&&e.focus()}}};ze([Q({type:Boolean}),Pe("design:type",Object)],Me.prototype,"outlined",void 0),ze([Q({type:Boolean}),Pe("design:type",Object)],Me.prototype,"solid",void 0),ze([Q({type:Boolean}),Pe("design:type",Object)],Me.prototype,"disabled",void 0),Me=ze([be("soso-button")],Me);const Ie=new Map([["search","Search"],["loading","loading..."],["offline","Offline"],["favorites","Favorites"],["cancel","Cancel"],["my-favorite-pages","My Favorite Pages"],["related","Related"],["popular","Popular"],["latest","Latest"],["no-matches-found","No matches found"],["search-text","search text"],["favorite-added","Added to Favorites"],["forgot-password","Forgot password?"],["reset-code","Reset code"],["password","Password"],["sign-in","Sign in"],["sign-up","Sign up"],["submit","Submit"],["your-name","Your name"],["your-email","Your email"],["sign-out","Sign out"],["reset-password","Reset password"],["default-mandatory-favorites-cta","To use favorites, sign in.  We will synchronize your favorites across all of your devices."],["default-optional-favorites-cta","We save your favorites within your browser.  To ensure they are not lost and to synchronize them between devices, enter your email address."],["favorites-sign-in-cta","Enter your password to sign into your account."],["favorites-sign-up-cta","Enter your name and password to create your account."],["favorites-reset-password-cta","Enter your email address and we will send you an email to reset your password."],["favorites-reset-password-code-cta","Check your email for a message containing a confirmation code.  Enter it here along with a new password."],["notify-about-content","Notify me about new content"],["favorites-panel-optional-cta","Protect your favorites"],["favorites-panel-sign-in-button","Sign in"],["favorites-panel-mandatory-no-favorites","Create a collection of your favorites and synchronize them between devices.  Click on a heart anywhere to add to your list."],["favorites-panel-optional-no-favorites","Create a collection of your favorites.  Click on a heart anywhere to add to your list."],["more-results","More results"],["top-results","Top results"],["categories","Categories"],["searching-in","Searching in"],["my-views","My Visited Pages"],["ingredients","Ingredients"],["ingredient-search-placeholder","Enter comma-separated ingredients"],["notify-about-content-and-personalize","Notify me about new content and personalize my ads"],["prompt-to-sign-in","Saved to Favorites! Sign in to ensure your favorites are not lost."],["prompt-to-sign-in-short","Sign in to ensure your favorites are not lost"],["remove-favorite","Remove from Favorites"],["favorite-removed","Removed from Favorites"],["search4-top-pages","Top Pages"],["search4-pages","Pages"],["search4-top-stories","Top Stories"],["search4-stories","Stories"],["search4-favorite-pages","Favorite Pages"],["search4-my-favorite-stories","My Favorite Stories"],["search4-favorite-stories","Favorite Stories"],["search4-using-these-ingredients","Using These Ingredients"],["search4-using-ingredients","Ingredients"],["search4-my-viewing-history","Recently Viewed"],["search4-my-views","Recently Viewed"],["search4-featured","Featured"],["search4-my-favorites","My Favorites"],["search4-videos","Videos"],["search4-explore","Explore"],["more","More"],["undo","Undo"],["view","View"],["show-all","Show all"]]),je=new Map([["search","Suche"],["offline","Offline"],["loading","Wird geladen..."],["favorites","Lieblingsseiten"],["cancel","Stornieren"],["my-favorite-pages","Meine Lieblingsseiten"],["related","Ähnlich"],["popular","Beliebt"],["latest","Neueste"],["no-matches-found","Es wurden keine Inhalte gefunden"],["search-text","Suchtext"],["favorite-added","Favorit hinzugefügt"],["forgot-password","Passwort vergessen?"],["reset-code","Zurücksetzen-Code"],["password","Passwort"],["sign-in","Einloggen"],["sign-up","Anmelden"],["submit","Einreichen"],["your-name","Dein Name"],["your-email","Dein E-Mail"],["sign-out","Ausloggen"],["reset-password","Passwort zurücksetzen"],["default-mandatory-favorites-cta","Geben Sie Ihre E-Mail-Adresse ein, um Favoriten zu verwenden. Wir synchronisieren Ihre Favoriten auf allen Ihren Geräten."],["default-optional-favorites-cta","Wir speichern Ihre Favoriten in Ihrem Browser. Geben Sie Ihre E-Mail-Adresse ein, um sicherzustellen, dass sie nicht verloren gehen, und um sie zwischen Geräten zu synchronisieren."],["favorites-sign-in-cta","Geben Sie Ihr Passwort ein, um sich in Ihrem Konto anzumelden."],["favorites-sign-up-cta","Geben Sie Ihren Namen und Ihr Passwort ein, um Ihr Konto zu erstellen."],["favorites-reset-password-cta","Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen eine E-Mail, um Ihr Passwort zurückzusetzen."],["favorites-reset-password-code-cta","Überprüfen Sie Ihre E-Mail auf eine Nachricht mit einem Bestätigungscode. Geben Sie es hier zusammen mit einem neuen Passwort ein."],["notify-about-content","Benachrichtigen Sie mich über neue Inhalte"],["favorites-panel-optional-cta","Schützen Sie Ihre Favoriten"],["favorites-panel-sign-in-button","Einloggen"],["favorites-panel-mandatory-no-favorites","Erstellen Sie eine Sammlung Ihrer Favoriten und synchronisieren Sie sie zwischen Geräten. Melden Sie sich an und klicken Sie dann an einer beliebigen Stelle auf ein Herz, um es Ihrer Liste hinzuzufügen."],["favorites-panel-optional-no-favorites","Erstellen Sie eine Sammlung Ihrer Favoriten. Klicken Sie auf ein Herz, um die Seite zu Ihrer Liste hinzuzufügen. Wenn Sie sich anmelden, können Sie die Liste nie verlieren und von überall aus erreichen."],["more-results","Mehr Ergebnisse"],["top-results","Top Ergebnisse"],["categories","Kategorien"],["searching-in","Suchen in"],["my-views","Meine besuchten Seiten"],["ingredients","Zutaten"],["ingredient-search-placeholder","Geben Sie durch Kommas getrennte Zutaten ein"],["notify-about-content-and-personalize","Benachrichtigen Sie mich über neue Inhalte und personalisieren Sie meine Anzeigen"],["prompt-to-sign-in","In Favoriten gespeichert! Melden Sie sich an, um sicherzustellen, dass Ihre Favoriten nicht verloren gehen."],["prompt-to-sign-in-short","Melden Sie sich an, um sicherzustellen, dass Ihre Favoriten nicht verloren gehen"],["remove-favorite","Von Favoriten entfernen"],["favorite-removed","Aus Favoriten entfernt"],["search4-top-pages","Top Seiten"],["search4-pages","Seiten"],["search4-top-stories","Top-Geschichten"],["search4-stories","Geschichten"],["search4-favorite-pages","Lieblingsseiten"],["search4-my-favorite-stories","Meine Lieblingsgeschichten"],["search4-favorite-stories","Lieblingsgeschichten"],["search4-using-these-ingredients","Verwendung dieser Zutaten"],["search4-using-ingredients","Zutaten"],["search4-my-viewing-history","Bewertet angesehen"],["search4-my-views","Bewertet angesehen"],["search4-featured","Vorgestellt"],["search4-my-favorites","Meine Favoriten"],["search4-videos","Videos"],["search4-explore","Erkunden"],["more","Mehr"],["undo","Stornieren"],["view","Sehen"],["show-all","Zeige alles"]]),Re=new Map([["search","Buscar"],["offline","Offline"],["loading","Carregando..."],["favorites","Favoritas"],["cancel","Cancelar"],["my-favorite-pages","Minhas páginas favoritas"],["related","Relacionado"],["popular","Popular"],["latest","Recentes"],["no-matches-found","Nenhuma equivalência encontrada"],["search-text","digite aqui"],["favorite-added","Favorito Adicionado"],["forgot-password","Esqueceu a senha?"],["reset-code","Reiniciar código"],["password","senha"],["sign-in","assinar em"],["sign-up","inscrever-se"],["submit","enviar"],["your-name","seu nome"],["your-email","seu email"],["sign-out","Sair"],["reset-password","Redefinir senha"],["default-mandatory-favorites-cta","Para usar os favoritos, digite seu endereço de e-mail. Sincronizaremos seus favoritos em todos os seus dispositivos."],["default-optional-favorites-cta","Guardamos os seus favoritos no seu navegador. Para garantir que eles não sejam perdidos e para sincronizá-los entre dispositivos, digite seu endereço de email."],["favorites-sign-in-cta","Digite sua senha para entrar na sua conta."],["favorites-sign-up-cta","Digite seu nome e senha para criar sua conta."],["favorites-reset-password-cta","Digite seu endereço de e-mail e nós lhe enviaremos um e-mail para redefinir sua senha."],["favorites-reset-password-code-cta","Verifique no seu e-mail uma mensagem contendo um código de confirmação. Digite aqui junto com uma nova senha."],["notify-about-content","Notifique-me sobre novos conteúdos"],["favorites-panel-optional-cta","Proteja seus favoritos"],["favorites-panel-sign-in-button","assinar em"],["favorites-panel-mandatory-no-favorites","Crie uma coleção dos seus favoritos e sincronize-os entre dispositivos. Faça login e clique no coração em qualquer lugar para adicionar à sua lista."],["favorites-panel-optional-no-favorites","Crie uma coleção dos seus favoritos. Clique no coração em qualquer lugar para adicionar a página à sua lista. Se você entrar, nunca poderá perdê-los e alcançá-los de qualquer lugar."],["more-results","mais resultados"],["top-results","Principais resultados"],["categories","Categorias"],["searching-in","Procurando em"],["my-views","Minhas Páginas Visitadas"],["ingredients","Ingredientes"],["ingredient-search-placeholder","Digite ingredientes separados por vírgula"],["notify-about-content-and-personalize","Notifique-me sobre novos conteúdos e personalize meus anúncios"],["prompt-to-sign-in","Salvo nos favoritos! Faça login para garantir que seus favoritos não sejam perdidos."],["prompt-to-sign-in-short","Faça login para garantir que seus favoritos não sejam perdidos"],["remove-favorite","Remover dos favoritos"],["favorite-removed","Removido dos Favoritos"],["search4-top-pages","Páginas principais"],["search4-pages","Páginas"],["search4-top-stories","Histórias principais"],["search4-stories","Histórias"],["search4-favorite-pages","Páginas favoritas"],["search4-my-favorite-stories","As minhas histórias favoritas"],["search4-favorite-stories","Histórias favoritas"],["search4-using-these-ingredients","Utilizando estes ingredientes"],["search4-using-ingredients","Ingredientes"],["search4-my-viewing-history","Visto recentemente"],["search4-my-views","Visto recentemente"],["search4-featured","Em destaque"],["search4-my-favorites","Os meus favoritos"],["search4-videos","Videos"],["search4-explore","Explorar"],["more","Mais"],["undo","Desfazer"],["view","Ver"],["show-all","Mostre tudo"]]),Te=new Map([["search","Buscar"],["offline","Offline"],["loading","Cargando..."],["favorites","Favoritas"],["cancel","Cancelar"],["my-favorite-pages","Mis paginas favoritas"],["related","Relacionado"],["popular","Popular"],["latest","Recientes"],["no-matches-found","No se encontraron coincidencias"],["search-text","escriba aquí"],["favorite-added","Favorito Añadido"],["forgot-password","¿Se te olvidó tu contraseña?"],["reset-code","Restablecer Código"],["password","contraseña"],["sign-in","registrarse"],["sign-up","regístrate"],["submit","enviar"],["your-name","tu nombre"],["your-email","tu email"],["sign-out","desconectar"],["reset-password","restablecer la contraseña"],["default-mandatory-favorites-cta","Para usar favoritos, ingrese su dirección de correo electrónico. Sincronizaremos sus favoritos en todos sus dispositivos."],["default-optional-favorites-cta","Guardamos sus favoritos en su navegador. Para asegurarse de que no se pierdan y sincronizarlos entre dispositivos, ingrese su dirección de correo electrónico."],["favorites-sign-in-cta","Ingrese su contraseña para iniciar sesión en su cuenta."],["favorites-sign-up-cta","Ingrese su nombre y contraseña para crear su cuenta."],["favorites-reset-password-cta","Ingrese su dirección de correo electrónico y le enviaremos un correo electrónico para restablecer su contraseña."],["favorites-reset-password-code-cta","Revise su correo electrónico para ver un mensaje que contenga un código de confirmación. Ingrese aquí junto con una nueva contraseña."],["notify-about-content","Notificarme sobre nuevo contenido"],["favorites-panel-optional-cta","Protege tus favoritos"],["favorites-panel-sign-in-button","registrarse"],["favorites-panel-mandatory-no-favorites","Crea una colección de tus favoritos y sincronízalos entre dispositivos. Inicie sesión y luego haga clic en un corazón en cualquier lugar para agregar a su lista."],["favorites-panel-optional-no-favorites","Crea una colección de tus favoritos. Haga clic en un corazón en cualquier lugar para agregar la página a su lista. Si inicia sesión, nunca puede perderlos y puede acceder a ellos desde cualquier lugar."],["more-results","más resultados"],["top-results","Mejores resultados"],["categories","Categorías"],["searching-in","Buscando en"],["my-views","Mis páginas visitadas"],["ingredients","Ingredientes"],["ingredient-search-placeholder","Ingrese ingredientes separados por comas"],["notify-about-content-and-personalize","Notificarme sobre contenido nuevo y personalizar mis anuncios"],["prompt-to-sign-in","¡Guardado en Favoritos! Inicie sesión para asegurarse de que sus favoritos no se pierdan."],["prompt-to-sign-in-short","Inicie sesión para asegurarse de que sus favoritos no se pierdan"],["remove-favorite","Quitar de favoritos"],["favorite-removed","Eliminado de favoritos"],["search4-top-pages","Páginas principales"],["search4-pages","Páginas"],["search4-top-stories","Historias destacadas"],["search4-stories","Historias"],["search4-favorite-pages","Páginas favoritas"],["search4-my-favorite-stories","Mis Historias Favoritas"],["search4-favorite-stories","Historias Favoritas"],["search4-using-these-ingredients","Usando estos ingredientes"],["search4-using-ingredients","Ingredientes"],["search4-my-viewing-history","Visto recientemente"],["search4-my-views","Visto recientemente"],["search4-featured","Destacado"],["search4-my-favorites","Mis favoritos"],["search4-videos","Videos"],["search4-explore","Explorar"],["more","Más"],["undo","Deshacer"],["view","Ver"],["show-all","Mostrar todo"]]),Ee=new Map([["search","Zoeken"],["offline","Offline"],["loading","Bezig met laden..."],["favorites","Favorieten"],["cancel","Annuleren"],["my-favorite-pages","Mijn favoriete paginas"],["related","Verwant"],["popular","Populair"],["latest","Nieuwste"],["no-matches-found","Geen overeenkomsten gevonden"],["search-text","zoek tekst"],["favorite-added","Favoriet toegevoegd"],["forgot-password","Wachtwoord vergeten?"],["reset-code","Reset code"],["password","Wachtwoord"],["sign-in","Inloggen"],["sign-up","Inschrijven"],["submit","Voorleggen"],["your-name","Uw naam"],["your-email","Jouw email"],["sign-out","Afmelden"],["reset-password","Reset wachtwoord"],["default-mandatory-favorites-cta","Meld u aan om favorieten te gebruiken. We synchroniseren uw favorieten op al uw apparaten."],["default-optional-favorites-cta","We slaan uw favorieten op in uw browser. Voer uw e-mailadres in om ervoor te zorgen dat ze niet verloren gaan en om ze tussen apparaten te synchroniseren."],["favorites-sign-in-cta","Voer uw wachtwoord in om in te loggen op uw account."],["favorites-sign-up-cta","Voer uw naam en wachtwoord in om uw account aan te maken."],["favorites-reset-password-cta","Voer uw e-mailadres in en wij sturen u een e-mail om uw wachtwoord opnieuw in te stellen."],["favorites-reset-password-code-cta","Controleer uw e-mail op een bericht met een bevestigingscode. Voer het hier in samen met een nieuw wachtwoord."],["notify-about-content","Houd mij op de hoogte van nieuwe inhoud"],["favorites-panel-optional-cta","Bescherm je favorieten"],["favorites-panel-sign-in-button","Inloggen"],["favorites-panel-mandatory-no-favorites","Maak een verzameling van uw favorieten en synchroniseer ze tussen apparaten. Klik ergens op een hart om toe te voegen aan uw lijst."],["favorites-panel-optional-no-favorites","Maak een verzameling van uw favorieten. Klik ergens op een hart om toe te voegen aan uw lijst."],["more-results","Meer resultaten"],["top-results","Top resultaten"],["categories","Categorieën"],["searching-in","Zoeken in"],["my-views","Mijn bezochte paginas"],["ingredients","Ingrediënten"],["ingredient-search-placeholder","Voer door komma's gescheiden ingrediënten in"],["notify-about-content-and-personalize","Houd mij op de hoogte van nieuwe inhoud en personaliseer mijn advertenties"],["prompt-to-sign-in","Opgeslagen in favorieten! Log in om ervoor te zorgen dat uw favorieten niet verloren gaan."],["prompt-to-sign-in-short","Log in om ervoor te zorgen dat uw favorieten niet verloren gaan"],["remove-favorite","Verwijder van favorieten"],["favorite-removed","Verwijderd uit favorieten"],["search4-top-pages","Top Pagina's"],["search4-pages","Pagina's"],["search4-top-stories","Topverhalen"],["search4-stories","Verhalen"],["search4-favorite-pages","Favoriete pagina's"],["search4-my-favorite-stories","Mijn favoriete verhalen"],["search4-favorite-stories","Favoriete verhalen"],["search4-using-these-ingredients","Met behulp van deze ingrediënten"],["search4-using-ingredients","Ingrediënten"],["search4-my-viewing-history","Beoordeeld Bekeken"],["search4-my-views","Beoordeeld Bekeken"],["search4-featured","Uitgelicht"],["search4-my-favorites","Mijn favorieten"],["search4-videos","Videos"],["search4-explore","Verken"],["more","Meer"],["undo","Ongedaan maken"],["view","Zien"],["show-all","Toon alles"]]),Fe=new Map([["search","Rechercher"],["offline","Hors ligne"],["loading","Chargement..."],["favorites","Favorites"],["cancel","Annuler"],["my-favorite-pages","Mes pages favorites"],["related","Connexes"],["popular","Populaires"],["latest","Dernières"],["no-matches-found","Aucun résultat trouvé"],["search-text","Texte de recherche"],["favorite-added","Favori ajouté"],["forgot-password","Mot de passe oublié?"],["reset-code","Réinitialiser le code"],["password","Mot de passe"],["sign-in","Se connecter"],["sign-up","S'inscrire"],["submit","Soumettre"],["your-name","Votre nom"],["your-email","Votre adresse e-mail"],["sign-out","Se déconnecter"],["reset-password","Réinitialiser le mot de passe"],["default-mandatory-favorites-cta","Pour utiliser les favoris, connectez-vous. Nous synchroniserons vos favoris sur tous vos appareils."],["default-optional-favorites-cta","Nous enregistrons vos favoris dans votre navigateur.  Pour vous assurer qu'ils ne se perdent pas et pour les synchroniser entre les appareils, entrez votre adresse e-mail."],["favorites-sign-in-cta","Entrez votre mot de passe pour vous connecter à votre compte."],["favorites-sign-up-cta","Entrez votre nom et votre mot de passe pour créer votre compte."],["favorites-reset-password-cta","Entrez votre adresse e-mail et nous vous enverrons un e-mail pour réinitialiser votre mot de passe."],["favorites-reset-password-code-cta","Vérifiez votre e-mail pour un message contenant un code de confirmation. Entrez-le ici, ainsi qu'un nouveau mot de passe."],["notify-about-content","Avertissez-moi des nouveaux contenus."],["favorites-panel-optional-cta","Protégez vos favoris."],["favorites-panel-sign-in-button","Connectez-vous."],["favorites-panel-mandatory-no-favorites","Créez une collection de vos favoris et synchronisez-les entre les appareils.  Cliquez sur un cœur n'importe où pour l'ajouter à votre liste."],["favorites-panel-optional-no-favorites","Créez une collection de vos favoris.  Cliquez sur un cœur n'importe où pour l'ajouter à votre liste."],["more-results","Plus de résultats"],["top-results","Meilleurs résultats"],["categories","Catégories"],["searching-in","Recherche dans"],["my-views","Mes pages visitées"],["ingredients","Ingrédients"],["ingredient-search-placeholder","Entrez les ingrédients séparés par des virgules"],["notify-about-content-and-personalize","M'avertir des nouveaux contenus et personnaliser mes annonces"],["prompt-to-sign-in","Enregistré dans les favoris! Connectez-vous pour vous assurer que vos favoris ne sont pas perdus."],["prompt-to-sign-in-short","Connectez-vous pour vous assurer que vos favoris ne sont pas perdus"],["remove-favorite","Retirer des favoris"],["favorite-removed","Supprimé des favoris"],["search4-top-pages","Meilleures pages"],["search4-pages","Pages"],["search4-top-stories","Meilleures stories"],["search4-stories","Stories"],["search4-favorite-pages","Pages favorites"],["search4-my-favorite-stories","Mes histoires préférées"],["search4-favorite-stories","Stories préférées"],["search4-using-these-ingredients","Avec ces ingrédients"],["search4-using-ingredients","Ingrédients"],["search4-my-viewing-history","Vu récemment"],["search4-my-views","Vu récemment"],["search4-featured","Mis en avant"],["search4-my-favorites","Mes favoris"],["search4-videos","Vidéos"],["search4-explore","Explorer"],["more","Plus"],["undo","Annuler"],["view","Vue"],["show-all","Voir tout"]]),Oe=new Map([["search","Søk"],["offline","Offline"],["loading","laster..."],["favorites","Favoritter"],["cancel","Avbryt"],["my-favorite-pages","Mine favoritter"],["related","Relatert"],["popular","Populært"],["latest","Siste"],["no-matches-found","Ingen treff funnet"],["search-text","søketekst"],["favorite-added","Favoritt lagt til"],["forgot-password","Glemt passord?"],["reset-code","Tilbakestill kode"],["password","Passord"],["sign-in","Logg inn"],["sign-up","Meld deg på"],["submit","Send inn"],["your-name","Ditt navn"],["your-email","Din epost"],["sign-out","Logg ut"],["reset-password","tilbakestill passord"],["default-mandatory-favorites-cta","For å bruke favoritter, logg deg på. Vi synkroniserer favorittene dine på alle enhetene dine."],["default-optional-favorites-cta","Vi lagrer favorittene dine i nettleseren din. Legg inn e-postadressen din for å sikre at de ikke går tapt og for å synkronisere dem mellom enheter."],["favorites-sign-in-cta","Skriv inn passordet ditt for å logge på kontoen din."],["favorites-sign-up-cta","Skriv inn navn og passord for å opprette kontoen."],["favorites-reset-password-cta","Skriv inn e-postadressen din, så sender vi deg en e-post for å tilbakestille passordet ditt."],["favorites-reset-password-code-cta","Sjekk e-posten din for en melding som inneholder en bekreftelseskode. Skriv det inn her sammen med et nytt passord."],["notify-about-content","Gi meg beskjed om nytt innhold"],["favorites-panel-optional-cta","Beskytt favorittene dine"],["favorites-panel-sign-in-button","Logg inn"],["favorites-panel-mandatory-no-favorites","Lag en samling av favorittene dine og synkroniser dem mellom enheter. Klikk på et hjerte hvor som helst for å legge til listen."],["favorites-panel-optional-no-favorites","Lag en samling av favorittene dine. Klikk på et hjerte hvor som helst for å legge til listen."],["more-results","Flere treff"],["top-results","Beste treff"],["categories","Kategorier"],["searching-in","Søker i"],["my-views","Mine besøkte sider"],["ingredients","Ingredienser"],["ingredient-search-placeholder","Legg inn ingredienser med komma mellom hver ingrediens"],["notify-about-content-and-personalize","Gi meg beskjed om nytt innhold og personliggjør annonsene mine"],["prompt-to-sign-in","Lagret i favoritter! Logg på for å sikre at favorittene dine ikke går tapt."],["prompt-to-sign-in-short","Logg på for å sikre at favorittene dine ikke går tapt"],["remove-favorite","Fjern fra favoritter"],["favorite-removed","Fjernet fra favorittene"],["search4-top-pages","Beste sider"],["search4-pages","Sider"],["search4-top-stories","Beste historier"],["search4-stories","Historier"],["search4-favorite-pages","Favorittsider"],["search4-my-favorite-stories","Mine favoritthistorier"],["search4-favorite-stories","Favoritthistorier"],["search4-using-these-ingredients","Bruk av disse ingrediensene"],["search4-using-ingredients","Ingrediensene"],["search4-my-viewing-history","Vurdert sett"],["search4-my-views","Vurdert sett"],["search4-featured","Utvalgt"],["search4-my-favorites","Mine favoritter"],["search4-videos","Videoer"],["search4-explore","Utforske"],["more","Mer"],["undo","Angre"],["view","Utsikt"],["show-all","Se alt"]]),He=new Map([["search","Sök"],["offline","Off-line"],["loading","läser in..."],["favorites","Favoriter"],["cancel","Avbryt"],["my-favorite-pages","Mina Favoritsidor"],["related","Relaterad"],["popular","Populär"],["latest","Senast"],["no-matches-found","Inga Träffar Funna"],["search-text","söka text"],["favorite-added","Favorit tillagd"],["forgot-password","Glömt ditt lösenord?"],["reset-code","Återställ kod"],["password","Lösenord"],["sign-in","Logga in"],["sign-up","Bli Medlem"],["submit","Skicka in"],["your-name","Ditt namn"],["your-email","Din email"],["sign-out","Logga ut"],["reset-password","Återställ lösenord"],["default-mandatory-favorites-cta","Logga in för att använda favoriter. Vi synkroniserar dina favoriter på alla dina enheter."],["default-optional-favorites-cta","Vi sparar dina favoriter i din webbläsare. Ange din e-postadress för att se till att de inte går förlorade och synkronisera dem mellan enheter."],["favorites-sign-in-cta","Ange ditt lösenord för att logga in på ditt konto."],["favorites-sign-up-cta","Ange ditt namn och lösenord för att skapa ditt konto."],["favorites-reset-password-cta","Ange din e-postadress så skickar vi ett e-postmeddelande för att återställa ditt lösenord."],["favorites-reset-password-code-cta","Kolla in din e-post för ett meddelande som innehåller en bekräftelseskod. Ange det här tillsammans med ett nytt lösenord."],["notify-about-content","Meddela mig om nytt innehåll"],["favorites-panel-optional-cta","Skydda dina favoriter"],["favorites-panel-sign-in-button","Logga in"],["favorites-panel-mandatory-no-favorites","Skapa en samling av dina favoriter och synkronisera dem mellan enheter. Klicka på ett hjärta var som helst för att lägga till din lista."],["favorites-panel-optional-no-favorites","Skapa en samling av dina favoriter. Klicka på ett hjärta var som helst för att lägga till din lista."],["more-results","Fler resultat"],["top-results","Toppresultat"],["categories","kategorier"],["searching-in","Söker in"],["my-views","Mina besökta sidor"],["ingredients","Ingredienser"],["ingredient-search-placeholder","Ange kommaseparerade ingredienser"],["notify-about-content-and-personalize","Meddela mig om nytt innehåll och anpassa mina annonser"],["prompt-to-sign-in","Sparad till favoriter! Logga in så att dina favoriter inte går förlorade."],["prompt-to-sign-in-short","Logga in så att dina favoriter inte går förlorade"],["remove-favorite","Ta bort från favoriter"],["favorite-removed","Borttagen från favoriter"],["search4-top-pages","Populära sidor"],["search4-pages","Sidor"],["search4-top-stories","Populära stories"],["search4-stories","Stories"],["search4-favorite-pages","Favoritsidor"],["search4-my-favorite-stories","Mina favorit stories"],["search4-favorite-stories","Favorit stories"],["search4-using-these-ingredients","Använd dessa ingredienser"],["search4-using-ingredients","Ingredienser"],["search4-my-viewing-history","Senast visade"],["search4-my-views","Senast visade"],["search4-featured","Utvalda"],["search4-my-favorites","Mina favoriter"],["search4-videos","Videoklipp"],["search4-explore","Utforska"],["more","Mer"],["undo","Ångra"],["view","Se"],["show-all","Se allt"]]),Be=new Map([["search","Traži"],["offline","Offline"],["loading","Učitavam..."],["favorites","Omiljene stranice"],["cancel","Otkazati"],["my-favorite-pages","Moje omiljene stranice"],["related","Povezano"],["popular","Popularan"],["latest","Najnoviji"],["no-matches-found","Nije pronađeno nijedno podudaranje"],["search-text","tekst pretraživanja"],["favorite-added","Omiljeno dodano"],["forgot-password","Zaboravili ste lozinku?"],["reset-code","Resetiraj kod"],["password","Zaporka"],["sign-in","Prijaviti se"],["sign-up","Prijavite se"],["submit","Podnijeti"],["your-name","Tvoje ime"],["your-email","Tvoj email"],["sign-out","Odjavi se"],["reset-password","Resetiranje lozinke"],["default-mandatory-favorites-cta","Da biste koristili favorite, prijavite se. Sinkronizirat ćemo vaše favorite na svim vašim uređajima."],["default-optional-favorites-cta","Vaše favorite čuvamo u vašem pregledniku. Da biste osigurali da se ne izgube i da biste ih sinkronizirali između uređaja, unesite svoju adresu e-pošte."],["favorites-sign-in-cta","Unesite lozinku za prijavu na svoj račun."],["favorites-sign-up-cta","Unesite svoje ime i lozinku da biste stvorili svoj račun."],["favorites-reset-password-cta","Unesite svoju adresu e-pošte i poslat ćemo vam e-poruku za poništavanje lozinke."],["favorites-reset-password-code-cta","U svojoj e-pošti potražite poruku koja sadrži kôd za potvrdu. Unesite je ovdje zajedno s novom lozinkom."],["notify-about-content","Obavijesti me o novom sadržaju"],["favorites-panel-optional-cta","Zaštitite svoje favorite"],["favorites-panel-sign-in-button","Prijaviti se"],["favorites-panel-mandatory-no-favorites","Stvorite zbirku svojih omiljenih i sinkronizirajte ih između uređaja. Kliknite srce bilo gdje da biste ga dodali na svoj popis."],["favorites-panel-optional-no-favorites","Stvorite zbirku svojih omiljenih. Kliknite srce bilo gdje da biste ga dodali na svoj popis."],["more-results","Više rezultata"],["top-results","Vrhunski rezultati"],["categories","Kategorije"],["searching-in","Pretraživanje u"],["my-views","Moje posjećene stranice"],["ingredients","Sastojci"],["ingredient-search-placeholder","Unesite sastojke odvojene zarezom"],["notify-about-content-and-personalize","Obavijesti me o novom sadržaju i prilagodite moje oglase"],["prompt-to-sign-in","Spremljeno u Favorite! Prijavite se kako biste osigurali da se vaši favoriti ne izgube."],["prompt-to-sign-in-short","Prijavite se kako biste osigurali da se vaši favoriti ne izgube"],["remove-favorite","Ukloni iz Favorita"],["favorite-removed","Uklonjeno iz Favorita"],["search4-top-pages","Najbolje stranice"],["search4-pages","Stranice"],["search4-top-stories","Najbolje Priče"],["search4-stories","Priče"],["search4-favorite-pages","Omiljene stranice"],["search4-my-favorite-stories","Moje najdraže priče"],["search4-favorite-stories","Najdraže priče"],["search4-using-these-ingredients","Korištenje ovih sastojaka"],["search4-using-ingredients","Sastojci"],["search4-my-viewing-history","Recenzirano Pregledano"],["search4-my-views","Recenzirano Pregledano"],["search4-featured","Istaknuto"],["search4-my-favorites","Moji omiljeni"],["search4-videos","Videozapisi"],["search4-explore","Istražiti"],["more","Više"],["undo","Poništi"],["view","Pogled"],["show-all","Pogledaj sve"]]),Ae=new Map([["search","Поиск"],["offline","Не в сети"],["loading","загрузка..."],["favorites","Избранное"],["cancel","Отмена"],["my-favorite-pages","Мои любимые страницы"],["related","Связанный"],["popular","Популярное"],["latest","Последнее"],["no-matches-found","Совпадений не найдено"],["search-text","поисковый запрос"],["favorite-added","Добавлено в Избранное"],["forgot-password","Забыли пароль?"],["reset-code","Сброс кода"],["password","Пароль"],["sign-in","Войти"],["sign-up","Зарегистрироваться"],["submit","Отправить"],["your-name","Ваше имя"],["your-email","Ваш адрес электронной почты"],["sign-out","Выход"],["reset-password","Сброс пароля"],["default-mandatory-favorites-cta","Чтобы использовать избранное, войдите в систему. Мы синхронизируем избранное на всех ваших устройствах."],["default-optional-favorites-cta","Мы сохраняем Избранное в вашем браузере. Чтобы не потерять его и синхронизировать между устройствами, введите свой адрес электронной почты."],["favorites-sign-in-cta","Введите свой пароль, чтобы войти в свою учетную запись."],["favorites-sign-up-cta","Введите свое имя и пароль, чтобы создать учетную запись."],["favorites-reset-password-cta","Введите свой адрес электронной почты и мы отправим вам электронное письмо для сброса пароля."],["favorites-reset-password-code-cta","Проверьте свою электронную почту на наличие сообщения, содержащего код подтверждения. Введите его здесь вместе с новым паролем."],["notify-about-content","Сообщите мне о новом контенте"],["favorites-panel-optional-cta","Защитите своих избранных"],["favorites-panel-sign-in-button","войти в систему"],["favorites-panel-mandatory-no-favorites","Создайте коллекцию избранных и синхронизируйте их между устройствами. Щелкните сердце в любом месте, чтобы добавить его в список."],["favorites-panel-optional-no-favorites","Создайте коллекцию своих любимых. Щелкните сердце в любом месте, чтобы добавить его в список."],["more-results","больше результатов"],["top-results","лучшие результаты"],["categories","категории"],["searching-in","поиск в"],["my-views","мои посещенные страницы"],["ingredients","ингредиенты"],["ingredient-search-placeholder","Введите ингредиенты через запятую"],["notify-about-content-and-personalize","Уведомлять меня о новом содержании и персонализировать мою рекламу"],["prompt-to-sign-in","Сохранено в избранное! Войдите, чтобы убедиться, что ваши избранные не потеряны."],["prompt-to-sign-in-short","Войдите, чтобы убедиться, что ваши избранные не потеряны"],["remove-favorite","RУдалить из Избранного"],["favorite-removed","Удалено из избранного"],["search4-top-pages","Лучшие страницы"],["search4-pages","Страницы"],["search4-top-stories","Лучшие истории"],["search4-stories","Истории"],["search4-favorite-pages","Избранные страницы"],["search4-my-favorite-stories","Мои любимые истории"],["search4-favorite-stories","Любимые истории"],["search4-using-these-ingredients","Использование этих ингредиентов"],["search4-using-ingredients","Ингредиенты"],["search4-my-viewing-history","Проверено Просмотрено"],["search4-my-views","Проверено Просмотрено"],["search4-featured","Рекомендуемые"],["search4-my-favorites","Мои любимые"],["search4-videos","Видео"],["search4-explore","Проводить исследования"],["more","Более"],["undo","Отменить"],["view","Вид"],["show-all","Посмотреть все"]]),Le=new Map([["search","Søg"],["offline","Offline"],["loading","Indlæser..."],["favorites","Favoritsider"],["cancel","Afbestille"],["my-favorite-pages","Mine favoritsider"],["related","Relaterede"],["popular","Populær"],["latest","Seneste"],["no-matches-found","Ingen match fundet"],["search-text","søgetekst"],["favorite-added","Favorit gemt"],["forgot-password","Glemt kodeord?"],["reset-code","Nulstil kode"],["password","Adgangskode"],["sign-in","Log ind"],["sign-up","Tilmeld"],["submit","Send"],["your-name","Dit navn"],["your-email","Din email"],["sign-out","Log ud"],["reset-password","Nulstil adgangskode"],["default-mandatory-favorites-cta","Log ind for at bruge favoritter. Vi synkroniserer dine favoritter på tværs af alle dine enheder."],["default-optional-favorites-cta","Vi gemmer dine favoritter i din browser. For at sikre, at de ikke går tabt, og for at synkronisere dem mellem enheder, skal du indtaste din e-mail-adresse."],["favorites-sign-in-cta","Indtast din adgangskode for at logge ind på din konto."],["favorites-sign-up-cta","Indtast dit navn og din adgangskode for at oprette din konto."],["favorites-reset-password-cta","Indtast din e-mail-adresse, og vi sender dig en e-mail for at nulstille din adgangskode."],["favorites-reset-password-code-cta","Tjek din e-mail for en besked der indeholder en bekræftelseskode. Indtast koden her sammen med en ny adgangskode."],["notify-about-content","Giv mig besked om nyt indhold"],["favorites-panel-optional-cta","Beskyt dine favoritter"],["favorites-panel-sign-in-button","Log ind"],["favorites-panel-mandatory-no-favorites","Opret en samling af dine favoritter, og synkroniser dem mellem dine enheder. Klik på et hjerte hvor som helst for at føje til din favoritliste."],["favorites-panel-optional-no-favorites","Opret en samling af dine favoritter. Klik på et hjerte hvor som helst for at føje til din favoritliste."],["more-results","Flere resultater"],["top-results","Topresultater"],["categories","Kategorier"],["searching-in","Søger i"],["my-views","Mine besøgte sider"],["ingredients","Ingredienser"],["ingredient-search-placeholder","Indtast komma-adskilte ingredienser"],["notify-about-content-and-personalize","Giv mig besked om nyt indhold, og personaliser mine annoncer"],["prompt-to-sign-in","Gemt til favoritter! Log ind for at sikre, at dine favoritter ikke går tabt."],["prompt-to-sign-in-short","Log ind for at sikre, at dine favoritter ikke går tabt"],["remove-favorite","Fjern fra favoritter"],["favorite-removed","Fjernet fra favoritter"],["search4-top-pages","Bedste sider"],["search4-pages","Sider"],["search4-top-stories","Bedste historier"],["search4-stories","Historier"],["search4-favorite-pages","Favoritsider"],["search4-my-favorite-stories","Mine favorithistorier"],["search4-favorite-stories","Favorithistorier"],["search4-using-these-ingredients","Brug disse ingredienser"],["search4-using-ingredients","Ingredienser"],["search4-my-viewing-history","Set for nylig"],["search4-my-views","Set for nylig"],["search4-featured","Fremhævet"],["search4-my-favorites","Mine favoritter"],["search4-videos","Videoer"],["search4-explore","Udforsk"],["more","Mere"],["undo","Fortryd"],["view","Udsigt"],["show-all","Vis alt"]]),Ve=new Map([["search","לחפש"],["offline","לא מקוון"],["loading","טוען..."],["favorites","מועדפים"],["cancel","לְבַטֵל"],["my-favorite-pages","העמודים האהובים עלי"],["related","מתכונים דומים"],["popular","פופולרי"],["latest","מתכונים אחרונים"],["no-matches-found","לא נמצאו תוצאות תואמות"],["search-text","חיפוש טקסט"],["favorite-added","נוסף למועדפים"],["forgot-password","שכחת ססמא?"],["reset-code","אפס קוד"],["password","סיסמה"],["sign-in","להתחבר"],["sign-up","הירשם"],["submit","שלח"],["your-name","השם שלך"],["your-email","האימייל שלך"],["sign-out","התנתק"],["reset-password","לאפס את הסיסמה"],["default-mandatory-favorites-cta","כדי להשתמש במועדפים, התחברו. אנו נסנכרן את המועדפים שלך בכל המכשירים שלך."],["default-optional-favorites-cta",'אנו שומרים את המועדפים שלך בדפדפן שלך. כדי להבטיח שהם לא ילכו לאבוד וכדי לסנכרן אותם בין מכשירים, להזין את כתובת הדוא"ל שלך.'],["favorites-sign-in-cta","להזין את הסיסמה שלך כדי להיכנס לחשבונך."],["favorites-sign-up-cta","להזין את שמך וסיסמתך כדי ליצור את חשבונך."],["favorites-reset-password-cta",'להזין את כתובת הדוא"ל שלך ואנחנו נשלח לך דוא"ל לאיפוס הסיסמה שלך.'],["favorites-reset-password-code-cta",'לבדוק בדוא"ל שלך אם יש הודעה המכילה קוד אישור. להזין אותה כאן יחד עם סיסמה חדשה.'],["notify-about-content","הודיעו לי על תוכן חדש"],["favorites-panel-optional-cta","להגן על המועדפים שלך"],["favorites-panel-sign-in-button","להתחבר"],["favorites-panel-mandatory-no-favorites","לצור אוסף של המועדפים שלך ולסנכרן אותם בין מכשירים. לחצו על הלב בכל מקום כדי להוסיף לרשימה שלך."],["favorites-panel-optional-no-favorites","לצור אוסף של המועדפים שלך. לחצו על הלב בכל מקום כדי להוסיף לרשימה שלך."],["more-results","עוד תוצאות"],["top-results","תוצאות מובילות"],["categories","קטגוריות"],["searching-in","מחפש בתוך"],["my-views","העמודים שביקרתי בהם"],["ingredients","מצרכים"],["ingredient-search-placeholder","להזין מצרכים המופרדים באמצעות פסיק"],["notify-about-content-and-personalize","להודע לי על תוכן חדש והתואם אישית את המודעות שלי"],["prompt-to-sign-in","נשמר למועדפים! היכנס כדי להבטיח שהמועדפים שלך לא יאבדו"],["prompt-to-sign-in-short","היכנס כדי להבטיח שהמועדפים שלך לא יאבדו"],["remove-favorite","הסר מהמועדפים"],["favorite-removed","הוסר מהמועדפים"],["search4-top-pages","העמודים הטובים ביותר"],["search4-pages","עמודים"],["search4-top-stories","הסיפורים הטובים ביותר"],["search4-stories","סיפורים"],["search4-favorite-pages","דפים מועדפים"],["search4-my-favorite-stories","הסיפורים האהובים עלי"],["search4-favorite-stories","סיפורים אהובים"],["search4-using-these-ingredients","שימוש במרכיבים אלה"],["search4-using-ingredients","רכיבים"],["search4-my-viewing-history","נבדק נבדק"],["search4-my-views","נבדק נבדק"],["search4-featured","מומלצים"],["search4-my-favorites","המועדפים שלי"],["search4-videos","סרטונים"],["search4-explore","לַחקוֹר"],["more","יותר"],["undo","לבטל"],["view","נוף"],["show-all","תראה את כל"]]),De=new Map([["search","بحث"],["offline","غير متصل على الانترنت"],["loading","جار التحميل"],["favorites","المفضلة"],["cancel","يلغي"],["my-favorite-pages","صفحاتي المفضلة"],["related","ذات صلة"],["popular","جمع"],["latest","آخر"],["no-matches-found","لم يتم العثور على تطابق"],["search-text","نص البحث"],["favorite-added","تمت إضافة المفضلة"],["forgot-password","هل نسيت كلمة المرور؟"],["reset-code","إعادة تعيين الرمز"],["password","كلمه السر"],["sign-in","تسجيل الدخول"],["sign-up","سجل"],["submit","إرسال"],["your-name","اسمك"],["your-email","بريدك الالكتروني"],["sign-out","خروج"],["reset-password","إعادة تعيين كلمة المرور"],["default-mandatory-favorites-cta","لاستخدام المفضلة ، قم بتسجيل الدخول. سنقوم بمزامنة مفضلاتك عبر جميع أجهزتك."],["default-optional-favorites-cta","نحن نحفظ مفضلاتك في متصفحك. لضمان عدم فقدها ومزامنتها بين الأجهزة ، أدخل عنوان بريدك الإلكتروني."],["favorites-sign-in-cta","أدخل كلمة المرور الخاصة بك لتسجيل الدخول إلى حسابك."],["favorites-sign-up-cta","أدخل اسمك وكلمة المرور لإنشاء حسابك."],["favorites-reset-password-cta","أدخل عنوان بريدك الإلكتروني وسنرسل لك بريدًا إلكترونيًا لإعادة تعيين كلمة مرورك."],["favorites-reset-password-code-cta","تحقق من بريدك الإلكتروني بحثًا عن رسالة تحتوي على رمز التأكيد. أدخله هنا مع كلمة مرور جديدة."],["notify-about-content","أعلمني بالمحتوى الجديد"],["favorites-panel-optional-cta","حماية مفضلاتك"],["favorites-panel-sign-in-button","تسجيل الدخول"],["favorites-panel-mandatory-no-favorites","م بإنشاء مجموعة من مفضلاتك وقم بمزامنتها بين الأجهزة. انقر على قلب في أي مكان لإضافته إلى قائمتك."],["favorites-panel-optional-no-favorites","إنشاء مجموعة من المفضلة لديك. انقر على قلب في أي مكان لإضافته إلى قائمتك."],["more-results","نتائج أخرى"],["top-results","أهم النتائج"],["categories","التصنيفات"],["searching-in","البحث في"],["my-views","الصفحات التي زرتها"],["ingredients","مكونات"],["ingredient-search-placeholder","أدخل المكونات مفصولة بفواصل"],["notify-about-content-and-personalize","إعلامي بالمحتوى الجديد وتخصيص إعلاناتي"],["prompt-to-sign-in","تم الحفظ في المفضلة! قم بتسجيل الدخول للتأكد من عدم ضياع مفضلاتك."],["prompt-to-sign-in-short","قم بتسجيل الدخول للتأكد من عدم ضياع مفضلاتك"],["remove-favorite","إزالة من المفضلة"],["favorite-removed","تمت إزالته من المفضلة"],["search4-top-pages","أفضل الصفحات"],["search4-pages","الصفحات"],["search4-top-stories","احلى القصص"],["search4-stories","قصص"],["search4-favorite-pages","الصفحات المفضلة"],["search4-my-favorite-stories","قصصي المفضلة"],["search4-favorite-stories","القصص المفضلة"],["search4-using-these-ingredients","باستخدام هذه المكونات"],["search4-using-ingredients","مكونات"],["search4-my-viewing-history","استعرض تمت المشاهدة"],["search4-my-views","استعرض تمت المشاهدة"],["search4-featured","متميز"],["search4-my-favorites","مفضلتي"],["search4-videos","أشرطة فيديو"],["search4-explore","يستكشف"],["more","أكثر"],["undo","حل"],["view","منظر"],["show-all","عرض الكل"]]),Ne=new Map([["search","探す"],["offline","オフライン"],["loading","読み込み中"],["favorites","お気に入り"],["cancel","キャンセル"],["my-favorite-pages","お気に入りのページ"],["related","関連"],["popular","人気"],["latest","最新"],["no-matches-found","一致するものが見つかりません"],["search-text","テキスト検索"],["favorite-added","お気に入りに保存"],["forgot-password","パスワードをお忘れですか？"],["reset-code","コードをリセット"],["password","パスワード"],["sign-in","ログイン"],["sign-up","サインアップ"],["submit","送る"],["your-name","名前"],["your-email","メール"],["sign-out","サインアウト"],["reset-password","パスワードを再設定する"],["default-mandatory-favorites-cta","お気に入りを使用するには、サインインします。すべてのデバイス間でお気に入りを同期します。"],["default-optional-favorites-cta","ブラウザ内にお気に入りを保存します。お気に入りを消さずに、デバイス間で同期するには、メールアドレスを入力してください。"],["favorites-sign-in-cta","アカウントにサインインするには、パスワードを入力してください。"],["favorites-sign-up-cta","名前とパスワードを入力してアカウントを作成します。"],["favorites-reset-password-cta","メールアドレスを入力すると、パスワードをリセットするためのメールが送信されます。"],["favorites-reset-password-code-cta","確認コードを含むメッセージがないかメールを確認してください。ここに新しいパスワードと一緒に入力します。"],["notify-about-content","新しいコンテンツについて通知する"],["favorites-panel-optional-cta","お気に入りを守る"],["favorites-panel-sign-in-button","ログイン"],["favorites-panel-mandatory-no-favorites","お気に入りのコレクションを作成し、デバイス間で同期します。ハートをクリックしてリストに追加します。"],["favorites-panel-optional-no-favorites","お気に入りのコレクションを作成します。ハートをクリックしてリストに追加します。"],["more-results","より多くの結果"],["top-results","上位の結果"],["categories","カテゴリ"],["searching-in","で検索"],["my-views","訪問したページ"],["ingredients","材料"],["ingredient-search-placeholder","材料をコンマで区切って入力してください。"],["notify-about-content-and-personalize","新しいコンテンツについて通知し、広告をパーソナライズします"],["prompt-to-sign-in","お気に入りに保存しました！サインインして、お気に入りが失われないようにします。"],["prompt-to-sign-in-short","お気に入りに保存しました！サインインして、お気に入りが消えないようにします。"],["remove-favorite","お気に入りから削除"],["favorite-removed","お気に入りから削除"],["search4-top-pages","トップページ"],["search4-pages","ページ"],["search4-top-stories","トップストーリー"],["search4-stories","ストーリー"],["search4-favorite-pages","お気に入りのページ"],["search4-my-favorite-stories","お気に入りのストーリー"],["search4-favorite-stories","お気に入りのストーリー"],["search4-using-these-ingredients","この材料を使う"],["search4-using-ingredients","材料"],["search4-my-viewing-history","最近チェック済み"],["search4-my-views","最近チェック済み"],["search4-featured","特徴"],["search4-my-favorites","お気に入り"],["search4-videos","ビデオ"],["search4-explore","調べる"],["more","もっと"],["undo","アンドゥ"],["view","見る"],["show-all","すべて表示"]]),$e=new Map([["search","Tìm kiếm"],["loading","Đang tải..."],["offline","Ngoại tuyến"],["favorites","Yêu thích"],["cancel","Huỷ bỏ"],["my-favorite-pages","Các trang yêu thích của tôi"],["related","Có liên quan"],["popular","Phổ biến"],["latest","Mới nhất"],["no-matches-found","Không tìm thấy"],["search-text","văn bản tìm kiếm"],["favorite-added","Đã thêm vào Mục yêu thích"],["forgot-password","Quên mật khẩu?"],["reset-code","Đặt lại mã"],["password","Mật khẩu"],["sign-in","Đăng nhập"],["sign-up","Đăng ký"],["submit","Gửi đi"],["your-name","Tên của bạn"],["your-email","Email của bạn"],["sign-out","Đăng xuất"],["reset-password","Đặt lại mật khẩu"],["default-mandatory-favorites-cta","Để sử dụng các mục yêu thích, hãy đăng nhập. Chúng tôi sẽ đồng bộ hóa các mục yêu thích của bạn trên tất cả các thiết bị của bạn."],["default-optional-favorites-cta","Chúng tôi lưu các mục yêu thích của bạn trong trình duyệt của bạn. Để đảm bảo chúng không bị mất và đồng bộ hóa chúng giữa các thiết bị, hãy nhập địa chỉ email của bạn."],["favorites-sign-in-cta","Nhập mật khẩu của bạn để đăng nhập vào tài khoản của bạn."],["favorites-sign-up-cta","Nhập tên và mật khẩu của bạn để tạo tài khoản của bạn."],["favorites-reset-password-cta","Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn một email để đặt lại mật khẩu của bạn."],["favorites-reset-password-code-cta","Kiểm tra email của bạn để tìm tin nhắn có chứa mã xác nhận. Nhập nó vào đây cùng với một mật khẩu mới."],["notify-about-content","Thông báo cho tôi về nội dung mới"],["favorites-panel-optional-cta","Bảo vệ mục yêu thích của bạn"],["favorites-panel-sign-in-button","Đăng nhập"],["favorites-panel-mandatory-no-favorites","Tạo một bộ sưu tập các mục yêu thích của bạn và đồng bộ hóa chúng giữa các thiết bị. Nhấp vào một trái tim ở bất kỳ đâu để thêm vào danh sách của bạn."],["favorites-panel-optional-no-favorites","Tạo một bộ sưu tập các mục yêu thích của bạn. Nhấp vào một trái tim ở bất kỳ đâu để thêm vào danh sách của bạn."],["more-results","Kết quả khác"],["top-results","Kết quả hàng đầu"],["categories","Danh mục"],["searching-in","Tìm kiếm trong"],["my-views","Các trang đã truy cập của tôi"],["ingredients","Thành phần"],["ingredient-search-placeholder","Nhập các thành phần được phân tách bằng dấu phẩy"],["notify-about-content-and-personalize","Thông báo cho tôi về nội dung mới và cá nhân hóa quảng cáo của tôi"],["prompt-to-sign-in","Đã lưu vào Mục yêu thích! Đăng nhập để đảm bảo mục yêu thích của bạn không bị mất."],["prompt-to-sign-in-short","Đăng nhập để đảm bảo mục yêu thích của bạn không bị mất"],["remove-favorite","Loại bỏ khỏi mục ưa thích"],["favorite-removed","Đã xóa khỏi Mục yêu thích"],["search4-top-pages","Các trang hàng đầu"],["search4-pages","Các trang"],["search4-top-stories","Câu chuyện hàng đầu"],["search4-stories","Những câu chuyện"],["search4-favorite-pages","Trang yêu thích"],["search4-my-favorite-stories","Câu chuyện yêu thích của tôi"],["search4-favorite-stories","Câu chuyện yêu thích"],["search4-using-these-ingredients","Sử dụng các thành phần này"],["search4-using-ingredients","Thành phần"],["search4-my-viewing-history","Đã xem gần đây"],["search4-my-views","Đã xem gần đây"],["search4-featured","Đặc sắc"],["search4-my-favorites","Mục yêu thích của tôi"],["search4-videos","Video"],["search4-explore","Khám phá"],["more","Hơn"],["undo","Hoàn tác"],["view","Lượt xem"],["show-all","Xem tất cả"]]),Ue=new Map([["search","搜索"],["loading","加载中..."],["offline","离线"],["favorites","收藏夹"],["cancel","取消"],["my-favorite-pages","我最喜欢的页面"],["related","有关的"],["popular","受欢迎的"],["latest","最新的"],["no-matches-found","未找到匹配项"],["search-text","搜索文本"],["favorite-added","添加到收藏夹"],["forgot-password","忘记密码？"],["reset-code","重置代码"],["password","密码"],["sign-in","登入"],["sign-up","注册"],["submit","提交"],["your-name","你的名字"],["your-email","你的邮件"],["sign-out","登出"],["reset-password","重设密码"],["default-mandatory-favorites-cta","要使用收藏夹，请登录。我们将在您的所有设备上同步您的收藏夹。"],["default-optional-favorites-cta","我们将您的收藏夹保存在您的浏览器中。为确保它们不会丢失并在设备之间同步它们，请输入您的电子邮件地址。"],["favorites-sign-in-cta","输入您的密码以登录您的帐户。"],["favorites-sign-up-cta","输入您的姓名和密码以创建您的帐户。"],["favorites-reset-password-cta","输入您的电子邮件地址，我们将向您发送一封电子邮件以重置您的密码。"],["favorites-reset-password-code-cta","检查您的电子邮件是否有包含确认代码的消息。在此处输入它以及新密码。"],["notify-about-content","通知我有关新内容的信息"],["favorites-panel-optional-cta","保护您的收藏夹"],["favorites-panel-sign-in-button","登入"],["favorites-panel-mandatory-no-favorites","创建收藏夹集合并在设备之间同步它们。在任何地方单击一颗心以添加到您的列表中。"],["favorites-panel-optional-no-favorites","创建收藏夹。在任何地方单击一颗心以添加到您的列表中。"],["more-results","更多结果"],["top-results","最佳成绩"],["categories","类别"],["searching-in","搜索中"],["my-views","我访问过的页面"],["ingredients","原料"],["ingredient-search-placeholder","输入以逗号分隔的成分"],["notify-about-content-and-personalize","通知我新内容并个性化我的广告"],["prompt-to-sign-in","保存到收藏夹！登录以确保您的收藏夹不会丢失。"],["prompt-to-sign-in-short","登录以确保您的收藏夹不会丢失"],["remove-favorite","从收藏夹中删除"],["favorite-removed","从收藏夹中删除"],["search4-top-pages","热门页面"],["search4-pages","页面"],["search4-top-stories","头条新闻"],["search4-stories","故事"],["search4-favorite-pages","收藏页面"],["search4-my-favorite-stories","我最喜欢的故事"],["search4-favorite-stories","最喜欢的故事"],["search4-using-these-ingredients","使用这些成分"],["search4-using-ingredients","原料"],["search4-my-viewing-history","最近浏览过的"],["search4-my-views","最近浏览过的"],["search4-featured","精选"],["search4-my-favorites","我最喜欢的"],["search4-videos","视频"],["search4-explore","探索"],["more","更多的"],["undo","撤消"],["view","看法"],["show-all","显示所有"]]),qe=new Map([["search","찾다"],["loading","로딩 중..."],["offline","오프라인"],["favorites","즐겨찾기"],["cancel","취소"],["my-favorite-pages","내가 좋아하는 페이지"],["related","관련된"],["popular","인기있는"],["latest","최신"],["no-matches-found","검색 결과가 없습니다"],["search-text","검색 텍스트"],["favorite-added","즐겨찾기에 추가됨"],["forgot-password","비밀번호를 잊으 셨나요?"],["reset-code","재설정 코드"],["password","비밀번호"],["sign-in","로그인"],["sign-up","가입하기"],["submit","제출하다"],["your-name","당신의 이름"],["your-email","귀하의 이메일"],["sign-out","로그아웃"],["reset-password","암호를 재설정"],["default-mandatory-favorites-cta","즐겨찾기를 사용하려면 로그인하세요. 모든 기기에서 즐겨찾기를 동기화합니다."],["default-optional-favorites-cta","브라우저에 즐겨찾기를 저장합니다. 분실되지 않도록 하고 장치 간에 동기화하려면 이메일 주소를 입력하십시오."],["favorites-sign-in-cta","계정에 로그인하려면 비밀번호를 입력하세요."],["favorites-sign-up-cta","이름과 비밀번호를 입력하여 계정을 만드세요."],["favorites-reset-password-cta","이메일 주소를 입력하시면 비밀번호 재설정을 위한 이메일을 보내드립니다."],["favorites-reset-password-code-cta","이메일에서 확인 코드가 포함된 메시지를 확인하세요. 여기에 새 비밀번호와 함께 입력하십시오."],["notify-about-content","새로운 콘텐츠에 대해 알림"],["favorites-panel-optional-cta","즐겨찾기 보호"],["favorites-panel-sign-in-button","로그인"],["favorites-panel-mandatory-no-favorites","즐겨찾기 모음을 만들고 장치 간에 동기화하십시오. 목록에 추가할 하트를 클릭하세요."],["favorites-panel-optional-no-favorites","즐겨찾기 컬렉션을 만드세요. 목록에 추가할 하트를 클릭하세요."],["more-results","더 많은 결과"],["top-results","인기 검색결과"],["categories","카테고리"],["searching-in","검색 중"],["my-views","내가 방문한 페이지"],["ingredients","재료"],["ingredient-search-placeholder","쉼표로 구분된 재료를 입력하세요."],["notify-about-content-and-personalize","새로운 콘텐츠에 대한 알림 및 내 광고 맞춤화"],["prompt-to-sign-in","즐겨찾기에 저장했습니다! 즐겨찾기가 손실되지 않도록 로그인하십시오."],["prompt-to-sign-in-short","즐겨찾기가 손실되지 않도록 로그인하세요."],["remove-favorite","즐겨 찾기에서 삭제하기"],["favorite-removed","즐겨찾기에서 제거됨"],["search4-top-pages","상위 페이지"],["search4-pages","페이지"],["search4-top-stories","주요 기사"],["search4-stories","이야기"],["search4-favorite-pages","즐겨찾는 페이지"],["search4-my-favorite-stories","내가 좋아하는 이야기"],["search4-favorite-stories","좋아하는 이야기"],["search4-using-these-ingredients","이러한 성분을 사용하여"],["search4-using-ingredients","재료"],["search4-my-viewing-history","최근 본"],["search4-my-views","최근 본"],["search4-featured","추천"],["search4-my-favorites","내가 좋아하는 것들"],["search4-videos","비디오"],["search4-explore","탐구하다"],["more","더"],["undo","실행 취소"],["view","보다"],["show-all","모두 보이기"]]),Ge=new Map([["search","Ricerca"],["loading","Caricamento in corso..."],["offline","Disconnesso"],["favorites","Preferiti"],["cancel","Annulla"],["my-favorite-pages","Le mie pagine preferite"],["related","Imparentato"],["popular","Popolare"],["latest","Più recente"],["no-matches-found","Nessun risultato trovato"],["search-text","cerca testo"],["favorite-added","Aggiunto ai preferiti"],["forgot-password","Ha dimenticato la password?"],["reset-code","Reimposta codice"],["password","Parola d'ordine"],["sign-in","Registrazione"],["sign-up","Iscrizione"],["submit","Invia"],["your-name","Il tuo nome"],["your-email","La tua email"],["sign-out","disconnessione"],["reset-password","Resetta la password"],["default-mandatory-favorites-cta","Per utilizzare i preferiti, accedi. Sincronizzeremo i tuoi preferiti su tutti i tuoi dispositivi."],["default-optional-favorites-cta","Salviamo i tuoi preferiti all'interno del tuo browser. Per assicurarti che non vengano persi e per sincronizzarli tra i dispositivi, inserisci il tuo indirizzo email."],["favorites-sign-in-cta","Inserisci la tua password per accedere al tuo account."],["favorites-sign-up-cta","Inserisci il tuo nome e password per creare il tuo account."],["favorites-reset-password-cta","Inserisci il tuo indirizzo e-mail e ti invieremo un'e-mail per reimpostare la password."],["favorites-reset-password-code-cta","Controlla la tua email per un messaggio contenente un codice di conferma. Inseriscilo qui insieme a una nuova password."],["notify-about-content","Avvisami su nuovi contenuti"],["favorites-panel-optional-cta","Proteggi i tuoi preferiti"],["favorites-panel-sign-in-button","Registrazione"],["favorites-panel-mandatory-no-favorites","Crea una raccolta dei tuoi preferiti e sincronizzali tra i dispositivi. Fai clic su un cuore in qualsiasi punto per aggiungerlo alla tua lista."],["favorites-panel-optional-no-favorites","Crea una raccolta dei tuoi preferiti. Fai clic su un cuore in qualsiasi punto per aggiungerlo alla tua lista."],["more-results","Più risultati"],["top-results","Risultati migliori"],["categories","Categorie"],["searching-in","Cercando in"],["my-views","Le mie pagine visitate"],["ingredients","ingredienti"],["ingredient-search-placeholder","Inserisci gli ingredienti separati da virgole"],["notify-about-content-and-personalize","Avvisami sui nuovi contenuti e personalizza i miei annunci"],["prompt-to-sign-in","Salvato nei preferiti! Accedi per assicurarti che i tuoi preferiti non vadano persi."],["prompt-to-sign-in-short","Accedi per assicurarti che i tuoi preferiti non vadano persi"],["remove-favorite","Rimuovi dai preferiti"],["favorite-removed","Rimosso dai preferiti"],["search4-top-pages","Pagine principali"],["search4-pages","Pagine"],["search4-top-stories","Storie principali"],["search4-stories","Storie"],["search4-favorite-pages","Pagine preferite"],["search4-my-favorite-stories","Le mie storie preferite"],["search4-favorite-stories","Storie preferite"],["search4-using-these-ingredients","Usando questi ingredienti"],["search4-using-ingredients","ingredienti"],["search4-my-viewing-history","visualizzato recentemente"],["search4-my-views","visualizzato recentemente"],["search4-featured","In primo piano"],["search4-my-favorites","I miei preferiti"],["search4-videos","Video"],["search4-explore","Esplorare"],["more","Di più"],["undo","Disfare"],["view","Visualizzazione"],["show-all","Mostra tutto"]]),We=new Map([["search","Szukaj"],["loading","Ładowanie..."],["offline","Offline"],["favorites","Ulubione"],["cancel","Anulować"],["my-favorite-pages","Moje ulubione strony"],["related","Związane z"],["popular","Popularny"],["latest","Najnowszy"],["no-matches-found","Nie znaleziono żadnego meczu"],["search-text","szukaj tekstu"],["favorite-added","Dodano do Ulubionych"],["forgot-password","Zapomniałeś hasła?"],["reset-code","Zresetuj Kod"],["password","Hasło"],["sign-in","Zaloguj się"],["sign-up","Zapisz się"],["submit","Składać"],["your-name","Twoje imię"],["your-email","Twój email"],["sign-out","Wyloguj się"],["reset-password","Zresetuj hasło"],["default-mandatory-favorites-cta","Aby korzystać z ulubionych, zaloguj się. Zsynchronizujemy Twoje ulubione na wszystkich Twoich urządzeniach."],["default-optional-favorites-cta","Zapisujemy Twoje ulubione w Twojej przeglądarce. Aby upewnić się, że nie zostaną zgubione i zsynchronizować je między urządzeniami, wprowadź swój adres e-mail."],["favorites-sign-in-cta","Wprowadź swoje hasło, aby zalogować się na swoje konto."],["favorites-sign-up-cta","Wpisz swoje imię i hasło, aby utworzyć konto."],["favorites-reset-password-cta","Wpisz swój adres e-mail, a my wyślemy Ci e-mail, aby zresetować hasło."],["favorites-reset-password-code-cta","Sprawdź, czy w wiadomości e-mail nie ma wiadomości zawierającej kod potwierdzający. Wpisz go tutaj wraz z nowym hasłem."],["notify-about-content","Powiadom mnie o nowej treści"],["favorites-panel-optional-cta","Chroń swoich ulubionych"],["favorites-panel-sign-in-button","Zaloguj się"],["favorites-panel-mandatory-no-favorites","Stwórz kolekcję swoich ulubionych i synchronizuj je między urządzeniami. Kliknij serce w dowolnym miejscu, aby dodać je do listy."],["favorites-panel-optional-no-favorites","Stwórz kolekcję swoich ulubionych. Kliknij serce w dowolnym miejscu, aby dodać je do listy."],["more-results","Więcej wyników"],["top-results","Najlepsze wyniki"],["categories","Kategorie"],["searching-in","Wyszukiwanie w"],["my-views","Moje odwiedzone strony"],["ingredients","Składniki"],["ingredient-search-placeholder","Wpisz składniki oddzielone przecinkami"],["notify-about-content-and-personalize","Powiadamiaj mnie o nowych treściach i personalizuj moje reklamy"],["prompt-to-sign-in","Zapisano w Ulubionych! Zaloguj się, aby upewnić się, że Twoje ulubione nie zostaną utracone."],["prompt-to-sign-in-short","Zaloguj się, aby mieć pewność, że Twoje ulubione nie zostaną utracone"],["remove-favorite","Usuń z ulubionych"],["favorite-removed","Usunięto z Ulubionych"],["search4-top-pages","Najlepsze strony"],["search4-pages","Strony"],["search4-top-stories","Kultowe historie"],["search4-stories","Historie"],["search4-favorite-pages","Ulubione strony"],["search4-my-favorite-stories","Moje ulubione historie"],["search4-favorite-stories","Ulubione historie"],["search4-using-these-ingredients","Korzystanie z tych składników"],["search4-using-ingredients","Składniki"],["search4-my-viewing-history","Ostatnio oglądane"],["search4-my-views","Ostatnio oglądane"],["search4-featured","Wyróżniony"],["search4-my-favorites","Moje ulubione"],["search4-videos","Filmy"],["search4-explore","Badać"],["more","Więcej"],["undo","Cofnij"],["view","Pogląd"],["show-all","Pokaż wszystko"]]),Ke=new Map([["search","Arama"],["loading","Yükleniyor..."],["offline","Çevrimdışı"],["favorites","Favoriler"],["cancel","İptal"],["my-favorite-pages","Favori Sayfalarım"],["related","İlgili"],["popular","Popüler"],["latest","En sonuncu"],["no-matches-found","Hiçbir sonuç bulunamadı"],["search-text","arama metni"],["favorite-added","Favorilere eklendi"],["forgot-password","Parolanızı mı unuttunuz?"],["reset-code","Sıfırlama kodu"],["password","Parola"],["sign-in","Kayıt olmak"],["sign-up","Üye olmak"],["submit","Göndermek"],["your-name","Adınız"],["your-email","E-posta adresiniz"],["sign-out","oturumu Kapat"],["reset-password","Şifreyi yenile"],["default-mandatory-favorites-cta","Favorileri kullanmak için oturum açın. Favorilerinizi tüm cihazlarınızda senkronize edeceğiz."],["default-optional-favorites-cta","Favorilerinizi tarayıcınıza kaydediyoruz. Kaybolmadıklarından emin olmak ve cihazlar arasında senkronize etmek için e-posta adresinizi girin."],["favorites-sign-in-cta","Hesabınızda oturum açmak için şifrenizi girin."],["favorites-sign-up-cta","Hesabınızı oluşturmak için adınızı ve şifrenizi girin."],["favorites-reset-password-cta","E-posta adresinizi girin, şifrenizi sıfırlamanız için size bir e-posta gönderelim."],["favorites-reset-password-code-cta","Onay kodu içeren bir mesaj için e-postanızı kontrol edin. Yeni bir şifre ile birlikte buraya girin."],["notify-about-content","Yeni içerik hakkında beni bilgilendir"],["favorites-panel-optional-cta","Favorilerinizi koruyun"],["favorites-panel-sign-in-button","Kayıt olmak"],["favorites-panel-mandatory-no-favorites","Favorilerinizden oluşan bir koleksiyon oluşturun ve bunları cihazlar arasında senkronize edin. Listenize eklemek için herhangi bir yerde bir kalbe tıklayın."],["favorites-panel-optional-no-favorites","Favorilerinizden bir koleksiyon oluşturun. Listenize eklemek için herhangi bir yerde bir kalbe tıklayın."],["more-results","Daha fazla sonuç"],["top-results","En iyi sonuçlar"],["categories","Kategoriler"],["searching-in","içinde arama"],["my-views","Ziyaret Edilen Sayfalarım"],["ingredients","İçindekiler"],["ingredient-search-placeholder","Bileşenleri virgülle ayrılmış olarak girin"],["notify-about-content-and-personalize","Yeni içerik hakkında beni bilgilendir ve reklamlarımı kişiselleştir"],["prompt-to-sign-in","Favorilere kaydedildi! Favorilerinizin kaybolmadığından emin olmak için oturum açın."],["prompt-to-sign-in-short","Favorilerinizin kaybolmadığından emin olmak için oturum açın"],["remove-favorite","Favorilerden çıkar"],["favorite-removed","Favorilerden Kaldırıldı"],["search4-top-pages","En İyi Sayfalar"],["search4-pages","Sayfalar"],["search4-top-stories","En iyi hikayeler"],["search4-stories","hikayeler"],["search4-favorite-pages","Favori Sayfalar"],["search4-my-favorite-stories","Favori Hikayelerim"],["search4-favorite-stories","Favori Hikayeler"],["search4-using-these-ingredients","Bu Malzemeleri Kullanmak"],["search4-using-ingredients","İçindekiler"],["search4-my-viewing-history","Son Görüntülenen"],["search4-my-views","Son Görüntülenen"],["search4-featured","Öne çıkan"],["search4-my-favorites","Favorilerim"],["search4-videos","Videolar"],["search4-explore","Keşfetmek"],["more","Daha"],["undo","Geri alma"],["view","görüş"],["show-all","Hepsini Göster ↓"]]);class Je{constructor(e){switch(this.language=e,e){case"de":this.phrases=new Map(je);break;case"pt":this.phrases=new Map(Re);break;case"es":this.phrases=new Map(Te);break;case"nl":this.phrases=new Map(Ee);break;case"fr":this.phrases=new Map(Fe);break;case"nb":this.phrases=new Map(Oe);break;case"sv":this.phrases=new Map(He);break;case"hr":this.phrases=new Map(Be);break;case"ru":this.phrases=new Map(Ae);break;case"da":this.phrases=new Map(Le);break;case"ar":this.phrases=new Map(De);break;case"he":this.phrases=new Map(Ve);break;case"ja":this.phrases=new Map(Ne);break;case"vi":this.phrases=new Map($e);break;case"zh":this.phrases=new Map(Ue);break;case"ko":this.phrases=new Map(qe);break;case"it":this.phrases=new Map(Ge);break;case"pl":this.phrases=new Map(We);break;case"tr":this.phrases=new Map(Ke);break;default:this.phrases=new Map(Ie)}}getPhrase(e){return this.phrases.get(e)||e}setOverrides(e){for(const t of e)t.language===this.language&&this.phrases.set(t.phrase,t.override)}}function Ze(e,t){return t.startsWith("/")||(t="/"+t),e.endsWith("/")&&(e=e.substr(0,e.length-1)),e+t}class Ye{constructor(e,t,i){this.config=e,this.requestSender=t,this.siteCode=i}async siteInfo(e,t,i){const s=Ye.Paths.siteInfo+`?site=${this.siteCode}&epoch=${e}&auth=${t}${i?"&language="+i:""}`;return this.sendRequest(this.config.cacheableApiBaseUri,s,"GET",null,!1)}async siteInfoV2(e,t,i){const s=Ye.Paths.siteInfoV2+`?site=${this.siteCode}&epoch=${e}&auth=${t}${i?"&language="+i:""}`;return this.sendRequest(this.config.cacheableApiBaseUri,s,"GET",null,!1)}async theme(e,t){const i=Ye.Paths.themeTemplates+`?site=${this.siteCode}&theme=${e}&version=${t}`;return this.sendRequest(this.config.cacheableApiBaseUri,i,"GET",null,!1)}pageImage(e,t,i,s){const o=Ye.Paths.pageImage+`${this.siteCode}/${e}?site=${this.siteCode}&epoch=${s}${t?"&w="+t:""}${i?"&h="+i:""}`;return{method:"GET",url:Ze(this.config.cacheableApiBaseUri,o)}}async endSession(e){return this.sendRequest(this.config.nonCacheableApiBaseUri,Ye.Paths.endSession,"POST",e)}async sendRequest(e,t,i,s,o=!0,n=!1){return this.requestSender({method:i,url:Ze(e,t+(o?`?site=${this.siteCode}`:""))},s,n)}}Ye.Paths={siteInfo:"/p/embed-site-info",siteInfoV2:"/p/embed-site-info-v2",pageImage:"/p/pageimg/",endSession:"/d/embed-end-session",themeTemplates:"/p/theme"};const Qe={get(e,t=!1){if(!e)return null;const i=localStorage.getItem(e);return i&&t?JSON.parse(i):i},set(e,t){e&&t&&("string"==typeof t?localStorage.setItem(e,t):localStorage.setItem(e,JSON.stringify(t)))},delete(e){e&&localStorage.removeItem(e)}},Xe="slick-connection-stats",et="slick-navigation-info",tt="slick-reader-id",it={get readerId(){let e=Qe.get(tt);return e||(e=`${Date.now()}.${Math.random()*Number.MAX_SAFE_INTEGER}`,Qe.set(tt,e)),e},get clientFailureStats(){const e=Qe.get(Xe,!0);return e?(Qe.delete(Xe),e):null},set clientFailureStats(e){e?Qe.set(Xe,e):Qe.delete(Xe)},get navigationInfo(){const e=Qe.get(et,!0);if(e){const t=Date.now()-e.timestamp;if(Qe.delete(et),t<3e4)return e}return null},set navigationInfo(e){e?Qe.set(et,e):Qe.delete(et)}};function st(e,t){if(t)for(const i in t)e.append(i,t[i])}async function ot(e){return new Promise((t=>{setTimeout(t,e)}))}function nt(e){let t=e?e.split("?")[1]:window.location.search.slice(1);const i={};if(t){t=t.split("#")[0];const e=t.split("&");for(let t=0;t<e.length;t++){const s=e[t].split("="),o=s[0].toLowerCase(),n=void 0===s[1]?"":s[1];i[o]||(i[o]=decodeURIComponent(n))}}return i}class at{constructor(e){this.reportedBids=new Set,this.prebid=null,this.reporter=e}async run(){if(this.prebid||(this.prebid=await this.waitForPrebid()),this.prebid&&this.prebid.getAllWinningBids){const e=this.prebid.getAllWinningBids()||[];await this.reportAds(e),this.prebid.onEvent("bidWon",(e=>{e&&e.adId&&this.reportAds([e])}))}}async reportAds(e){const t=e.map((e=>this.cloneAd(e))).filter((e=>!this.reportedBids.has(e.adId)));t.length&&(t.forEach((e=>{e.adId&&this.reportedBids.add(e.adId)})),await this.reporter.reportPageAction("pbjs-bidwon",void 0,{bids:t}))}cloneAd(e){const t=JSON.parse(JSON.stringify(e));return delete t.ad,t}async waitForPrebid(){if(window.pbjs)return window.pbjs;for(let e=0;e<10;e++)if(await ot(1e3),window.pbjs)return window.pbjs;return null}}const rt=window.location.href,ct="slick-debug-log",lt="slick-debug-log-enabled",dt={_records:[],_enabled:rt.indexOf("127.0.0.1")>=0||rt.indexOf("localhost")>=0||rt.indexOf("slickLogging")>=0||"true"===Qe.get(lt),print(e){const{message:t,time:i,object:s}=e;s?console.log(`[Slick ${i}] ${t}`,s):console.log(`[Slick ${i}] ${t}`)},log(e,t){const i={message:e,object:t,time:Date.now()};this._records.push(i),this._records.length>200&&this._records.shift(),this._enabled&&this.print(i)},showLog(){for(const e of this._records)this.print(e)},enable(){this._enabled=!0,Qe.set(lt,"true")},storeLog(){const e=this._records.map((e=>({message:e.message,time:e.time})));Qe.set(ct,e)},clearStoredLog(){const e=Qe.get(ct,!0);return e&&Qe.delete(ct),e}};function ht(e,t){dt.log(e,t)}window.$slickLoggger=dt;class pt{constructor(e,t){this.stateMap=new Map,this.eventQueue=[],this._state=e;for(const e of t)this.stateMap.set(e.name,e)}get state(){return this._state}dispatch(e,t){this.eventQueue.push({event:e,data:t}),1===this.eventQueue.length&&this.processNextEvent()}processNextEvent(){if(!this.eventQueue.length)return;const e=this.eventQueue[0];if(e)try{const{event:t,data:i}=e;ht(`SM: Event: ${t} CurrentState: ${this._state}`);const s=this.stateMap.get(this._state);if(s)for(const e of s.events)if(e.name===t){const o=this.stateMap.get(e.to);o&&(s.onExit&&(ht(`SM: Exit ${this._state}`),s.onExit(s.name,e.to,t,i)),e.handler&&e.handler(s.name,o.name,t,i),this._state=o.name,ht(`SM: Enter ${this._state}`),o.onEnter&&o.onEnter(s.name,o.name,t,i));break}}catch(t){ht("Error processing socket fsm event",{item:e,err:t})}this.eventQueue.shift(),this.eventQueue.length&&this.processNextEvent()}}class ut extends Error{constructor(e,t){super(t),this.messageTimeout=!0,this.messageId=e}}class gt{constructor(e,t,i){var s;if(this.sessionRetryAttempts=0,this.sessionRetryTimer=0,this.pingTimer=0,this.lastPong=0,this.firtSessionConnection=!0,this.messageIdCounter=0,this.requestMap=new Map,this.failureStats={pageviewFailures:0,priorSocketRetries:0,priorStartFailures:0,priorDisconnects:0,priorReconnectFailures:0,priorRestartFailures:0,socketFailures:0},this.onVisibilityChange=()=>{this.machine.dispatch(document.hidden?"tab-inactive":"tab-active")},this.closeListener=e=>{ht("Socket closed",e),this.disconnectSocket(),this.machine.dispatch("socket-close")},this.messageListener=e=>{try{const t=JSON.parse(e.data);switch(t.direction){case"request":break;case"response":this.handleResponseMessage(t);break;case"error":this.handleErrorMessage(t);break;case"notify":this.handleNotificationMessage(t);break;case"pong":this.lastPong=Date.now();break;case"ping":this.send("pong");break;default:throw new Error(`Slick: Unexpected socket message direction: ${t.direction}`)}}catch(e){ht("Error parsing socket message",e)}},this.listener=i,this.sessionRequest=t,this.uri=e,this.uri.indexOf("?")>=0){const e=this.uri.split("?");this.uri=[e[0],"?site=",t.site].join("")}else this.uri=[this.uri,"?site=",t.site].join("");this.priorFailureStats=it.clientFailureStats,this.sessionRequest.failureStats=this.priorFailureStats||this.failureStats,this.failureStats.pageviewFailures=(null===(s=this.priorFailureStats)||void 0===s?void 0:s.pageviewFailures)||0,this.machine=new pt("initial",[{name:"initial",onExit:()=>this.onMachineStart(),events:[{name:"start",to:"connecting"}]},{name:"idle-no-session",onEnter:()=>this.onIdle(),events:[{name:"tab-active",to:"connecting"}]},{name:"connecting",onEnter:()=>this.startConnection(),events:[{name:"tab-inactive",to:"idle-no-session"},{name:"socket-timeout",to:"waiting-retry-no-session"},{name:"socket-error",to:"waiting-retry-no-session"},{name:"socket-connect",to:"starting-session"}]},{name:"waiting-retry-no-session",onEnter:e=>this.retryEnter(e),onExit:()=>this.retryExit(),events:[{name:"tab-inactive",to:"idle-no-session"},{name:"retry",to:"connecting"},{name:"disable",to:"disabled"}]},{name:"starting-session",onEnter:()=>this.startSession(),events:[{name:"tab-inactive",to:"idle-no-session"},{name:"session-established",to:"connected"},{name:"message-timeout",to:"waiting-retry-no-session"},{name:"socket-close",to:"waiting-retry-no-session"},{name:"disable",to:"disabled"}]},{name:"connected",onEnter:()=>this.sessionConnected(),onExit:()=>this.sessionDisconnected(),events:[{name:"disable",to:"disabled"},{name:"tab-inactive",to:"idle"},{name:"socket-close",to:"waiting-retry"},{name:"ping-timeout",to:"reconnecting"},{name:"reconnect-request",to:"reconnecting"}]},{name:"idle",onEnter:()=>this.onIdle(),events:[{name:"tab-active",to:"reconnecting"}]},{name:"reconnecting",onEnter:()=>this.startReconnection(),events:[{name:"tab-inactive",to:"idle"},{name:"socket-error",to:"waiting-retry"},{name:"socket-timeout",to:"waiting-retry"},{name:"socket-connect",to:"restarting-session"}]},{name:"restarting-session",onEnter:()=>this.restartSession(),events:[{name:"tab-inactive",to:"idle"},{name:"socket-close",to:"waiting-retry"},{name:"message-timeout",to:"waiting-retry"},{name:"disable",to:"disabled"},{name:"session-restarted",to:"connected",handler:this.onSessionRestarted.bind(this)}]},{name:"waiting-retry",onEnter:e=>this.retryEnter(e),onExit:()=>this.retryExit(),events:[{name:"tab-inactive",to:"idle"},{name:"retry",to:"reconnecting"},{name:"disable",to:"disabled"}]},{name:"disabled",onEnter:()=>this.onDisable(),events:[]}])}start(){this.machine.dispatch("start")}get session(){return this.sessionResponse}updateFailureStats(){it.clientFailureStats=this.failureStats}onMachineStart(){document.addEventListener("visibilitychange",this.onVisibilityChange,!1)}startConnection(){this.socket=new WebSocket(this.uri,"SLICK_CLIENT_1");let e=0;const t=()=>{e&&(window.clearTimeout(e),e=0)},i=()=>{if(this.socket){this.socket.removeEventListener("error",s),this.socket.removeEventListener("open",o);try{this.socket.close()}catch(e){}this.socket=void 0}},s=e=>{t(),i(),ht("Socket connect error",e),this.machine.dispatch("socket-error")},o=()=>{t(),this.socket&&(this.socket.removeEventListener("error",s),this.socket.removeEventListener("open",o)),ht("Socket opened"),this.machine.dispatch("socket-connect")};this.socket.addEventListener("error",s),this.socket.addEventListener("open",o),e=window.setTimeout((()=>{i(),this.machine.dispatch("socket-timeout")}),3e4)}async startSession(){this.attachSocketListeners();try{this.sessionRequest.failureStats&&(this.sessionRequest.failureStats.socketFailures=this.failureStats.priorSocketRetries),this.sessionResponse=await this.request("start-session",this.sessionRequest),ht("Session established",this.sessionResponse)}catch(e){return void(e.messageTimeout?(ht("Message timeout for start-session",e),this.machine.dispatch("message-timeout")):(ht("Error starting session",e),this.machine.dispatch("disable")))}this.machine.dispatch("session-established")}sessionConnected(){if(!this.sessionResponse)return void this.machine.dispatch("disable");"disable"!==(this.sessionResponse.settings.activation||"active")?(this.sessionRetryAttempts=0,this.startPinging(),this.firtSessionConnection?(this.firtSessionConnection=!1,this.listener.handleSocketSessionEstablished(this.sessionResponse)):this.listener.handleSocketSessionUpdated(this.sessionResponse),this.failureStats.pageviewFailures=0,this.updateFailureStats()):this.machine.dispatch("disable")}sessionDisconnected(){this.stopPinging(),this.detachSocketLiseteners(),this.listener.handleSocketSessionDisconnected()}startReconnection(){this.startConnection()}async restartSession(){this.attachSocketListeners();try{const e={site:this.sessionRequest.site,reader:this.sessionRequest.reader,start:this.sessionRequest.start,clientVersion:this.sessionRequest.clientVersion},t=await this.request("restart-session",e);this.machine.dispatch("session-restarted",t)}catch(e){e.messageTimeout?(ht("Message timeout for restart-session",e),this.machine.dispatch("message-timeout")):(ht("Error restarting session",e),this.machine.dispatch("disable"))}}onSessionRestarted(e,t,i,s){ht("Session restarted. updating session object."),this.sessionResponse&&s&&(this.sessionResponse.currentPage&&(this.sessionResponse.currentPage.totalFavorites=s.totalFavorites,this.sessionResponse.currentPage.isFavorite=s.isFavorite),this.sessionResponse.totalUserFavorites=s.totalUserFavorites||0,this.sessionResponse.activeVisitors=s.activeVisitors)}retryEnter(e){switch(this.cancelRetryTimer(),this.sessionRetryAttempts++,e){case"connecting":this.failureStats.priorSocketRetries=this.sessionRetryAttempts;break;case"starting-session":this.failureStats.priorStartFailures=this.sessionRetryAttempts;break;case"connected":this.failureStats.priorDisconnects++;break;case"reconnecting":this.failureStats.priorReconnectFailures=Math.max(this.failureStats.priorReconnectFailures,this.sessionRetryAttempts);break;case"restarting-session":this.failureStats.priorStartFailures=Math.max(this.failureStats.priorStartFailures,this.sessionRetryAttempts)}this.sessionRetryAttempts>3?this.machine.dispatch("disable"):this.sessionRetryTimer=window.setTimeout((()=>{this.machine.dispatch("retry")}),2*this.sessionRetryAttempts*1e3)}retryExit(){this.cancelRetryTimer()}cancelRetryTimer(){this.sessionRetryTimer&&(window.clearTimeout(this.sessionRetryTimer),this.sessionRetryTimer=0)}stopAndDie(){this.onDisable()}onDisable(){this.disconnectSocket(),this.listener.handleSocketSessionDisabled(),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),dt.storeLog(),this.sessionResponse||this.failureStats.pageviewFailures++,this.updateFailureStats()}onIdle(){this.disconnectSocket()}disconnectSocket(){if(this.socket){this.detachSocketLiseteners();try{this.socket.close()}catch(e){}this.socket=void 0}}attachSocketListeners(){this.detachSocketLiseteners(),this.socket&&(this.socket.addEventListener("close",this.closeListener),this.socket.addEventListener("message",this.messageListener))}detachSocketLiseteners(){this.socket&&(this.socket.removeEventListener("close",this.closeListener),this.socket.removeEventListener("message",this.messageListener))}handleResponseMessage(e){const t=e.messageId,i=this.requestMap.get(t);i&&(this.requestMap.delete(t),i[0](e.payload||{}))}handleErrorMessage(e){const t=e.messageId,i=this.requestMap.get(t);i?(this.requestMap.delete(t),i[1](new Error(e.payload.description))):ht("Error response message: ",e)}handleNotificationMessage(e){if("reconnect"===e.msgType)this.machine.dispatch("reconnect-request");this.listener.handleSocketSessionNotification(e)}handleMessageTimeout(e,t){const i=this.requestMap.get(e);i&&(this.requestMap.delete(e),i[1](new ut(e,`Message timeout for #${e}: ${t}`)))}nextId(){return++this.messageIdCounter}sendMessage(e){if(this.socket)switch(this.machine.state){case"starting-session":case"restarting-session":case"connected":return this.socket.send(JSON.stringify(e)),!0}return!1}send(e,t,i={},s){const o={at:Date.now(),messageId:s||this.nextId(),direction:e,payload:i};t&&(o.msgType=t),this.sendMessage(o)}async request(e,t,i=8e3){const s=this.nextId();return new Promise(((o,n)=>{this.requestMap.set(s,[o,n]),window.setTimeout((()=>this.handleMessageTimeout(s,i)),i),this.send("request",e,t,s)}))}startPinging(){this.pingTimer||(this.lastPong=Date.now(),this.nextPing())}stopPinging(){this.pingTimer&&(window.clearTimeout(this.pingTimer),this.pingTimer=0)}nextPing(){this.pingTimer=window.setTimeout((()=>{this.pingTimer=0,this.socket&&this.socket.readyState===WebSocket.OPEN&&(Date.now()-this.lastPong>4e4?this.machine.dispatch("ping-timeout"):(this.send("ping"),this.nextPing()))}),3e4)}}const mt={testNodeClasses:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",testNodeStyle:"height: 10px !important; font-size: 20px; color: transparent; position: absolute; bottom: 0; left: -10000px;",testInterval:51,testRuns:4};async function ft(){const e=mt,t=function(e,t){const i=window.document,s=i.createElement("div");return s.innerHTML="&nbsp;",s.setAttribute("class",e),s.setAttribute("style",t),i.body.appendChild(s),s}(e.testNodeClasses,e.testNodeStyle);let i=0,s=!1;return new Promise((o=>{const n=window.setInterval((()=>{i++,s=function(e){return 0===e.offsetHeight||!document.body.contains(e)||"none"===e.style.display||"hidden"===e.style.visibility}(t),(s||i===e.testRuns)&&(window.clearInterval(n),t.parentNode&&t.parentNode.removeChild(t),o(s))}),e.testInterval)}))}const vt=new class{constructor(){this.listeners=new Map,this.counter=0}subscribe(e,t){var i;return this.listeners.has(e)||this.listeners.set(e,new Map),null===(i=this.listeners.get(e))||void 0===i||i.set(++this.counter,t),this.counter}unsubscrive(e,t){const i=this.listeners.get(e);return!!i&&i.delete(t)}async dispatch(e,t){const i=this.listeners.get(e);i&&i.forEach((async i=>{try{await i(t,e)}catch(e){console.error(e)}}))}};function yt(){const e=window;return e.__gaTracker?"monster":e.gtag?"gtag":e.ga?"ga":null}async function bt(e){const t=await async function(e=5e3){const t=Date.now();let i=Date.now();for(;i-t<e;){const e=yt();if(e)return e;await ot(200),i=Date.now()}return null}();if(t)try{switch(t){case"gtag":window.gtag("event",e.action,{event_category:e.category,event_label:e.label,value:e.value,non_interaction:e.nonInteraction});break;case"ga":window.ga("send",{hitType:"event",eventCategory:e.category,eventAction:e.action,eventLabel:e.label,eventValue:e.value,nonInteraction:e.nonInteraction});break;case"monster":window.__gaTracker("send","event",{eventCategory:e.category,eventAction:e.action,eventLabel:e.label,eventValue:e.value,nonInteraction:e.nonInteraction})}}catch(e){console.warn("Slickstream failed to report to Google Analytics",e)}else console.warn("Slickstream failed to report to Google Analytics - GA not found")}let wt="";function kt(e){var t,i;if(e===wt)return;const s=()=>{var t;const i=null===(t=window.$mediavine)||void 0===t?void 0:t.web;try{i.identityOptIn({email:e},(t=>{t?ht("Error Opting-in with Mediavine",t):(wt=e,ht("Opted in with Mediavine"))}))}catch(e){ht("Exception Opting-in with Mediavine",e)}};(null===(i=null===(t=window.$mediavine)||void 0===t?void 0:t.web)||void 0===i?void 0:i.identityOptIn)?s():(ht("Mediavine identityOptIn not present. Waiting for ready event."),window.addEventListener("mediavineIdentityReady",(()=>{ht("Mediavine Identity ready event fired."),s()})))}let St="";function xt(e,t){if(e===St)return;let i=window.adthrive;(t||i)&&(window.adthrive=i||{},i=window.adthrive,i.cmd=i.cmd||[],i.cmd.push((()=>{window.adthrive.identityApi?window.adthrive.identityApi({source:"slickstream",plainText:e},(({success:t,data:i})=>{t?(St=e,ht("Identity registered with Adthrive")):ht("Adthrive Identity API error:",i)})):ht("Adthrive Identity API not present")})))}class _t{constructor(e){this._attched=!1,this._route={path:"",segments:[],params:{}},this._listener=e,window.addEventListener("hashchange",this.onHashChange.bind(this))}attach(){this._attched||(this._attched=!0,setTimeout((()=>this.onHashChange())))}onHashChange(){let e=window.location.hash||"";e&&(e=e.substring(1));const t=(e.split("/")||[]).map((e=>decodeURIComponent(e)));this._route={path:t[0]||"",segments:t,params:t[1]?nt(`?${t[1]}`):{}},this._listener.handleHashChange(this._route)}computeHash(e,t=!1){const i=(Array.isArray(e)?e:[e]).filter((e=>!!e));let s="#";if(i&&i.length){s+=(t?i:i.map((e=>encodeURIComponent(e)))).join("/")}return s}constructPath(e){const t=[];for(const i in e){t.length&&t.push("&"),t.push(i);const s=e[i];s&&t.push("=",encodeURIComponent(s))}return t.join("")}goto(e){const t=this.computeHash(e);this.gotoHash(t)}gotoHash(e){if("#"===e){const e=window.location.hash.length>1;window.history.pushState("",document.title,window.location.pathname+window.location.search),e&&this.onHashChange()}else window.history.pushState("",document.title,e),this.onHashChange()}computeHashUrl(e,t){return t?this.computeHash([encodeURIComponent(e),this.constructPath(t)],!0):this.computeHash([e])}gotoWithParams(e,t){const i=t?this.computeHash([encodeURIComponent(e),this.constructPath(t)],!0):this.computeHash([e]);this.gotoHash(i)}push(e,t){const i=t?this.computeHash([encodeURIComponent(e),this.constructPath(t)],!0):this.computeHash([e]);i.length>1?window.history.pushState("",document.title,i):window.history.pushState("",window.location.pathname+window.location.search)}replace(e,t){const i=t?this.computeHash([encodeURIComponent(e),this.constructPath(t)],!0):this.computeHash([e]);i.length>1?window.history.replaceState("",document.title,i):window.history.replaceState("",window.location.pathname+window.location.search)}}let Ct=!1;const zt=new WeakSet;let Pt=0;function Mt(e,t){e.addEventListener("submit",(()=>{const i={},s=e.attributes;if(s&&s.length)for(let e=0;e<s.length;e++){const t=s[e];i[t.name]=t.value}t.notifyFormSubmit(i)})),zt.add(e)}function It(e){const t=document.querySelectorAll("form");if(t&&t.length)for(let i=0;i<t.length;i++){const s=t[i];zt.has(s)||Mt(s,e)}Date.now()-Pt<3e4&&setTimeout((()=>{It(e)}),1e3)}function jt(e,t){e.enabled&&(Ct||(Pt=Date.now(),It(t),Ct=!0))}let Rt,Tt;const Et=new WeakMap,Ft=new WeakMap,Ot=new WeakMap,Ht=new WeakMap,Bt=new WeakMap;let At={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return Ft.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ot.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Dt(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Lt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Tt||(Tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Nt(this),t),Dt(Et.get(this))}:function(...t){return Dt(e.apply(Nt(this),t))}:function(t,...i){const s=e.call(Nt(this),t,...i);return Ot.set(s,t.sort?t.sort():[t]),Dt(s)}}function Vt(e){return"function"==typeof e?Lt(e):(e instanceof IDBTransaction&&function(e){if(Ft.has(e))return;const t=new Promise(((t,i)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",n),e.removeEventListener("abort",n)},o=()=>{t(),s()},n=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",n),e.addEventListener("abort",n)}));Ft.set(e,t)}(e),t=e,(Rt||(Rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,At):e);var t}function Dt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,i)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",n)},o=()=>{t(Dt(e.result)),s()},n=()=>{i(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",n)}));return t.then((t=>{t instanceof IDBCursor&&Et.set(t,e)})).catch((()=>{})),Bt.set(t,e),t}(e);if(Ht.has(e))return Ht.get(e);const t=Vt(e);return t!==e&&(Ht.set(e,t),Bt.set(t,e)),t}const Nt=e=>Bt.get(e);const $t=["get","getKey","getAll","getAllKeys","count"],Ut=["put","add","delete","clear"],qt=new Map;function Gt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(qt.get(t))return qt.get(t);const i=t.replace(/FromIndex$/,""),s=t!==i,o=Ut.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!o&&!$t.includes(i))return;const n=async function(e,...t){const n=this.transaction(e,o?"readwrite":"readonly");let a=n.store;return s&&(a=a.index(t.shift())),(await Promise.all([a[i](...t),o&&n.done]))[0]};return qt.set(t,n),n}At=(e=>{const t=Object.assign({},e);return t.get=(t,i,s)=>Gt(t,i)||e.get(t,i,s),t.has=(t,i)=>!!Gt(t,i)||e.has(t,i),t})(At);const Wt="urls",Kt="settings",Jt="themes",Zt="search-results",Yt="last-search",Qt="last-theme";class Xt{async initialize(){if(!this._db)return this._pendingInitialize?Promise.resolve(this._pendingInitialize):(this._pendingInitialize=this._initialize(),await Promise.resolve(this._pendingInitialize),void(this._pendingInitialize=void 0))}async _initialize(){try{await(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(t){var i=function(){return indexedDB.databases().finally(t)};e=setInterval(i,100),i()})).finally((function(){return clearInterval(e)})):Promise.resolve()),this._db=await function(e,t,{blocked:i,upgrade:s,blocking:o,terminated:n}={}){const a=indexedDB.open(e,t),r=Dt(a);return s&&a.addEventListener("upgradeneeded",(e=>{s(Dt(a.result),e.oldVersion,e.newVersion,Dt(a.transaction))})),i&&a.addEventListener("blocked",(()=>i())),r.then((e=>{n&&e.addEventListener("close",(()=>n())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),r}("slickstream-app",1,{upgrade(e){const t=e.objectStoreNames;t.contains(Wt)||e.createObjectStore(Wt),t.contains(Kt)||e.createObjectStore(Kt),t.contains(Jt)||e.createObjectStore(Jt),t.contains(Zt)||e.createObjectStore(Zt)}})}catch(e){console.error(e)}var e}async addCachedUrl(e){this._db&&this._db.put(Wt,{time:Date.now()},e)}async listCachedUrls(){return this._db?this._db.getAllKeys(Wt):[]}async deleteCachedUrl(e){this._db&&await this._db.delete(Wt,e)}async _getSettings(e){return this._db&&await this._db.get(Kt,e)||null}async getSettings(e,t=!1){let i=await this._getSettings(e);if(!i&&t&&(i=await this._getSettings("/"),!i&&this._db)){const e=await this._db.getAll(Kt,void 0,1);i=e&&e.length?e[0]:null}return(null==i?void 0:i.settings)||null}async addSettings(e,t){this._db&&await this._db.put(Kt,{time:Date.now(),settings:t},e)}async deleteSettings(e){if(this._db)return this._db.delete(Kt,e)}async _addTheme(e,t){this._db&&await this._db.put(Jt,e,t||e.themeId)}async addTheme(e){this._db&&(await this._addTheme(e),await this._addTheme(e,Qt),await this.deleteLastSearch())}async getLastTheme(){if(this._db){return await this._db.get(Jt,Qt)||null}return null}async getTheme(e,t){if(this._db&&e&&t){const i=await this._db.get(Jt,e);if(i&&i.version===t){return await this._db.count(Jt,Qt)||this._addTheme(i,Qt),i}}return null}searchKey(e,t){return`q:${e}|c:${t||""}`}async addSearchResponse(e,t,i,s,o,n,a){this._db&&await this._db.put(Zt,{time:Date.now(),url:e,q:i,scrollOffset:n,context:s,group:o,response:t},a||this.searchKey(i,s))}async deleteSearchResponse(e){this._db&&await this._db.delete(Zt,e)}async deleteLastSearch(){await this.deleteSearchResponse(Yt)}async setLastSearch(e,t,i,s,o,n){await this.addSearchResponse(e,t,i,s,o,n,Yt)}async getLastSearch(e,t=3e5){if(this._db){const i=await this._db.get(Zt,Yt)||null;if(i){if(Date.now()-i.time>t)return await this.deleteLastSearch(),null;if(i.url!==e)return null}return i}return null}}let ei;async function ti(){return ei||(ei=new Xt),await ei.initialize(),ei}const ii=e=>new Request(e,{cache:"no-store"});class si{async cache(){if(this._cache)return this._cache;return"caches"in self&&(this._cache=await caches.open("slickstream-code")),this._cache||null}async addUrl(e){await this.removeUrl(e);const t=await this.cache();if(t)try{return await t.add(ii(e)),!0}catch(e){console.log(e)}return!1}async addUrlIfNotCached(e){const t=await this.cache();if(t){const i=ii(e),s=await t.match(i);if(s&&s.ok)return;await t.add(i)}}async getUrl(e,t=!1){const i=await this.cache();if(i){const s=await i.match(ii(e));if(s&&s.ok)return t?await s.text():await s.json()}return null}async removeUrl(e){const t=await this.cache();t&&await t.delete(ii(e),{ignoreVary:!0})}async removeAllBootData(e){const t=await this.cache();if(t){const i=await t.keys(ii(`${e}/d/page-boot-data`),{ignoreSearch:!0});for(const e of i)await t.delete(e)}}async resetExpiredBootData(e,t){const i=`${e}/d/page-boot-data?${innerWidth<=600?"mobile&":""}site=${t}&url=${encodeURIComponent(location.href.split("#")[0])}`,s=await this.getUrl(i);s&&(s.bestBy||0)<Date.now()&&this.addUrl(i)}}let oi;const ni=document.querySelector('link[rel="canonical"]'),ai=ni&&ni.href,ri=!!(null==ni?void 0:ni.hasAttribute("slickstream-force-canonical")),ci=1e4;const li=new class{constructor(){this.readerId="",this.sessionTimestamp=Date.now(),this.firstEngagementTimestamp=0,this.lastEnagementTimestamp=0,this.lastPollTimestamp=Date.now(),this.userAuthenticated=!1,this.authenticatedUser=null,this.appSearchMode=!!window.slickAppSearchPreview,this.dictionary=new Je("en"),this.widgetActionDebounceMap=new Map,this.connectionState="offline",this.pendingSocketMessages=[],this.router=new _t(this),this.cachedSettings=null,this.requestSender=async(e,t)=>{switch(e.method){case"GET":return async function(e,t=!0,i){const s={credentials:t?"include":"same-origin"};if(i){const e=new Headers;st(e,i),s.headers=e}const o=await fetch(e,s);if(!o.ok){const e=await o.text();throw{status:o.status,message:e,response:o}}return await o.json()}(e.url,!1);case"POST":return async function(e,t,i=!0,s){const o={method:"POST",credentials:i?"include":"same-origin",body:JSON.stringify(t)},n=new Headers;n.append("Content-Type","application/json"),st(n,s),o.headers=n;const a=new Request(e,o),r=await fetch(a);if(!r.ok){const e=await r.text();throw{status:r.status,message:e,response:r}}return await r.json()}(e.url,t,!1)}},this.windowEventsAttached=!1,this.engagementHandler=e=>{if(setTimeout((()=>{vt.dispatch("engagement")}),10),e&&"click"===e.type){const t=e.srcElement||e.target;if(t){let i=null,s=t;const o=["body","head","html"];for(;s&&s.tagName;){const e=s.tagName.toLowerCase();if(o.indexOf(e)>=0)break;if("a"===e){i=s;break}s=s.parentElement}if(i){const t=e;if(!(t.button||0)){const e=t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||!1;return i.href&&!e&&this.saveNavigatingAwayInfo("link-click"),void this.reportPageAction("link-click",i.href,{modifier:e})}}}}if(this.lastEnagementTimestamp=Date.now(),!this.firstEngagementTimestamp){this.firstEngagementTimestamp=this.lastEnagementTimestamp;const e=this.getUnrepoertedActivity(!1);setTimeout((async()=>{this.pingSession(e),setTimeout((()=>{this.lastEnagementTimestamp=0,setInterval((()=>{this.pingSession(ci)}),ci)}),1e3)}))}}}get currentSession(){return this.sessionResponse}get sessionConnectionState(){return this.connectionState}initializeWPUser(){const e=document.querySelector('meta[property="slick:wpuser"]'),t=e?e.getAttribute("content"):null;if(t&&t.trim().length>0)this.userAuthenticated=!0,this.authenticatedUser=t.trim();else{let e=document.querySelector('meta[name="user-authenticated"]');e||(e=document.querySelector('meta[property="user-authenticated"]'));let t=document.querySelector('meta[name="authenticated-user"]');t||(t=document.querySelector('meta[property="authenticated-user"]'));const i=e?e.getAttribute("content"):null;"true"===i?this.userAuthenticated=!0:"false"===i?this.userAuthenticated=!1:i&&i.length>0&&(this.userAuthenticated=!0,this.authenticatedUser=i),this.userAuthenticated=!!i&&"true"===i;const s=t?t.getAttribute("content"):null;s&&s.length>0&&(this.userAuthenticated=!0,this.authenticatedUser=s)}}async start(e){if((window.navigator.userAgent||"").match(/googlebot|bot|crawler|spider|crawling/i))return void ht("Disabling Slickstream socket because bot/crawler agent was detected");this.appContext=e,this.readerId=it.readerId,this.sessionTimestamp=Date.now(),this.initializeWPUser();const t=e.bootData.services,i=e.bootData.siteCode;this.restApi=new Ye({cacheableApiBaseUri:t.engagementCacheableApiDomain,nonCacheableApiBaseUri:t.engagementNonCacheableApiDomain,resourcesBaseUri:t.engagementResourcesDomain},this.requestSender,i);const s=window.location.href,o=document.querySelector('meta[property="article:published_time"]'),n=o&&o.getAttribute("content");let a=document.querySelector('meta[property="article:modified_time"]');a||(a=document.querySelector('meta[property="og:updated_time"]'));const r=a&&a.getAttribute("content"),c={w:window.innerWidth,h:window.innerHeight},l=document.querySelector('meta[name="robots"]'),d=l&&l.getAttribute("content")||void 0;let h=!1;try{h=!!await ft()||!1}catch(e){h=!1}const p={site:i,reader:this.readerId,start:this.sessionTimestamp,url:ri&&ai||s,canonical:ai||void 0,publishedTime:n,updatedTime:r,referer:document.referrer,display:c,clientVersion:e.clientVersion,embedCodeVersion:e.embedCodeVersion,userAuthenticated:this.userAuthenticated,usingBrowserExtension:!!document.querySelector('meta[name="slick-extension-active"]'),adBlockerDetected:h,error404Detected:document.body.classList.contains("error404")||!1,robotsContent:d,clientMetrics:e.metrics,clientType:e.clientType};p.clientMetrics&&(p.clientMetrics.sessionStart=(performance||Date).now()),this.authenticatedUser&&(p.authenticatedUser=this.authenticatedUser),this.appSearchMode&&(p.siteSearchMode=!0);const u=it.navigationInfo;u&&(p.priorPageInfo={pageUrl:u.pageUrl,navType:u.navType,originalStart:u.originalStart}),this.socketManager=new gt(t.websocketUri||window.slickSocketUri,p,this),this.socketManager.start()}stop(){this.socketManager&&(this.socketManager.stopAndDie(),this.socketManager=void 0)}handleSocketSessionEstablished(e){this.sessionResponse=e,this.connectionState="online",this.initializePrebidMonitor(),this.attachWindowEvents(),this.initializeEmbedStoryMonitor(),this._pendingThemePromise=void 0,this.getTheme(!0);const t=e.language;this.dictionary=new Je(t),e.localizationOverrides&&this.dictionary.setOverrides(e.localizationOverrides);const i=e.gaEvent;i&&setTimeout((()=>{bt(i)})),e.settings.forms&&jt(e.settings.forms,this),this.registerWidthAdNetworks(),setTimeout((()=>{this.resolvePendingSocketMessages(),vt.dispatch("session-established",e),vt.dispatch("session-updated",e)})),this.startRouter(),setTimeout((()=>{var e;(null===(e=this.appContext)||void 0===e?void 0:e.addCurrentPageAsFavorite)&&(this.addHearts(1),this.appContext.addCurrentPageAsFavorite=!1)})),e.flushBootData&&this.appContext&&(oi||(oi=new si),oi).removeAllBootData(this.appContext.embedCodeRoot)}startRouter(){this.router.attach()}handleSocketSessionUpdated(e){this.sessionResponse=e,this.connectionState="online",setTimeout((()=>{vt.dispatch("session-updated",e)}))}handleSocketSessionNotification(e){vt.dispatch(`notification-${e.msgType}`,e)}handleSocketSessionDisconnected(){this.connectionState="offline",setTimeout((()=>{vt.dispatch("session-offline")}))}handleSocketSessionDisabled(){this.connectionState="disabled",setTimeout((()=>{vt.dispatch("session-disabled")}))}async handleHashChange(e){vt.dispatch("route",e)}computeHashUrl(e,t){return this.router.computeHashUrl(e,t)}goto(e){this.router.goto(e)}gotoWithParams(e,t){this.router.gotoWithParams(e,t)}pushHash(e,t){this.router.push(e,t)}replaceHash(e,t){this.router.replace(e,t)}phrase(e){return this.dictionary.getPhrase(e)||""}initializePrebidMonitor(){if(!this.prebidMonitor){this.prebidMonitor=new at(this);try{this.prebidMonitor.run()}catch(e){console.error("Failed to initialize prebid",e)}}}attachWindowEvents(){this.windowEventsAttached||(this.windowEventsAttached=!0,window.addEventListener("beforeunload",(()=>{this.sessionResponse&&this.endSession()}),!1),window.addEventListener("slick-engagement",this.engagementHandler,{passive:!0}),window.addEventListener("scroll",this.engagementHandler,{passive:!0}),window.addEventListener("keydown",this.engagementHandler,{passive:!0}),window.addEventListener("mousedown",this.engagementHandler,{passive:!0}),window.addEventListener("click",this.engagementHandler,{passive:!0}),window.addEventListener("touchstart",this.engagementHandler,{passive:!0}),window.addEventListener("touchmove",this.engagementHandler,{passive:!0}),window.addEventListener("mousewheel",this.engagementHandler,{passive:!0}),window.addEventListener("DOMMouseScroll",this.engagementHandler,{passive:!0}))}initializeEmbedStoryMonitor(){document.addEventListener("story-analytics",(e=>{const t=e.detail;if(t&&t.action)switch(t.action.type){case"story-loaded":this.widgetAction("story-viewer","story-loaded",0,void 0,t.storyId,{storyId:t.storyId,channelId:t.channelId});break;case"page-impression":this.widgetAction("story-viewer","story-page-impression",0,void 0,t.action.pageId,{storyId:t.storyId,channelId:t.channelId,pageId:t.action.pageId})}}))}saveNavigatingAwayInfo(e){it.navigationInfo={navType:e,originalStart:this.sessionTimestamp,timestamp:Date.now(),pageUrl:window.location.href}}getUnrepoertedActivity(e){const t=Math.max(0,Math.min(ci,this.lastEnagementTimestamp-(this.lastPollTimestamp||this.sessionTimestamp)));return e&&(this.lastPollTimestamp=Date.now()),t}pingSession(e){if("online"===this.connectionState&&this.lastEnagementTimestamp>this.lastPollTimestamp){const t={activity:e};this.lastPollTimestamp=Date.now(),this.send("notify","activity",t)}}async notifyFormSubmit(e){const t={attributes:e};this.send("notify","notify-form-submit",t)}async widgetAction(e,t,i,s,o,n){const a=`${e}-${t}`,r=Date.now();if(i>0){if(r-(this.widgetActionDebounceMap.get(a)||0)<=i)return}if(this.widgetActionDebounceMap.set(a,r),"online"===this.connectionState){"nav"===t?this.saveNavigatingAwayInfo("widget-click"):"link-nav"===t&&this.saveNavigatingAwayInfo("link-click");const i={action:t,type:e,data:n,url:s,variant:o};this.send("notify","widget-action",i)}}async _send(e,t,i={},s){"online"===this.connectionState&&this.socketManager&&this.socketManager.send(e,t,i,s)}async _request(e,t,i=3e4){if("online"===this.connectionState&&this.socketManager)return this.socketManager.request(e,t,i);throw new Error("Seems like slickstream is offline. try again later.")}async send(e,t,i={},s){return"online"===this.connectionState?this._send(e,t,i,s):new Promise(((o,n)=>{this.pendingSocketMessages.push({isRequest:!1,payload:i,type:t,direction:e,messageId:s,promisePair:[o,n]})}))}async request(e,t,i=3e4){return"online"===this.connectionState?this._request(e,t,i):new Promise(((s,o)=>{this.pendingSocketMessages.push({isRequest:!0,type:e,timeout:i,payload:t,promisePair:[s,o]})}))}async resolvePendingSocketMessages(){for(;this.pendingSocketMessages.length;){const e=this.pendingSocketMessages.shift();if(e)if(e.isRequest)try{const t=await this._request(e.type,e.payload,e.timeout);e.promisePair[0](t)}catch(t){e.promisePair[1](t)}else if(e.direction)try{await this._send(e.direction,e.type,e.payload,e.messageId),e.promisePair[0]()}catch(t){e.promisePair[1](t)}}}async reportPageAction(e,t,i){if("online"===this.connectionState){const s={action:e,url:t,data:i};await this.send("notify","page-action",s)}}async logOnServer(e,t="debug",i){if(this.sessionResponse){const s={message:e,severity:t,data:i};await this.send("notify","log",s)}}async endSession(){var e,t;if("online"===this.connectionState){const i=this.getUnrepoertedActivity(!0);if(i){const s={site:(null===(e=this.appContext)||void 0===e?void 0:e.bootData.siteCode)||"",reader:this.readerId,start:this.sessionTimestamp,activity:i,currentTimestamp:Date.now()};this.firstEngagementTimestamp&&(s.firstActivityTimestamp=this.firstEngagementTimestamp),await(null===(t=this.restApi)||void 0===t?void 0:t.endSession(s))}}}registerWidthAdNetworks(){var e,t,i,s,o;if((null===(e=this.sessionResponse)||void 0===e?void 0:e.identity.email)&&(null===(t=this.sessionResponse)||void 0===t?void 0:t.identity.optedIn)){(null===(i=this.sessionResponse)||void 0===i?void 0:i.settings.membership.ignoreMediavineApis)||kt(null===(s=this.sessionResponse)||void 0===s?void 0:s.identity.email);switch((null===(o=this.sessionResponse)||void 0===o?void 0:o.settings.membership.useAdThriveApis)||"if-present"){case"never":break;case"if-present":xt(this.sessionResponse.identity.email,!1);break;case"always":xt(this.sessionResponse.identity.email,!0)}}}reportGAEvent(e,t,i=!1){var s;if(null===(s=this.sessionResponse)||void 0===s?void 0:s.gaEvent){bt({action:e,label:t,nonInteraction:i,category:"slickstream",value:0})}}async notifyWidgetsRendered(e){if("online"===this.connectionState){const t={timestamp:e};await this.send("notify","widgets-rendered",t)}}async notifyWebVitals(e){const t={stats:e};if("online"!==this.connectionState)return new Promise(((e,i)=>{this.pendingSocketMessages.push({isRequest:!1,payload:t,type:"vital-stats",direction:"notify",promisePair:[e,i]})}));await this.send("notify","vital-stats",t)}thumbnailUrl(e,t,i){if(!e.noImg){const s=e.id;return this.thumbnailByPageId(s,t,i)}return null}thumbnailByPageId(e,t,i){var s;return this.restApi?this.restApi.pageImage(e,t||null,i||null,(null===(s=this.sessionResponse)||void 0===s?void 0:s.imageEpoch)||"0").url:null}getEpoch(){return this.sessionResponse?`${this.sessionResponse.siteEpoch}`:"0"}async getSiteInfo(){var e;if(this.pendingSiteInfo)return Promise.resolve(this.pendingSiteInfo);if(this.siteInfo)return this.siteInfo;this.pendingSiteInfo=this.restApi.siteInfo(this.getEpoch(),this.userAuthenticated,(null===(e=this.sessionResponse)||void 0===e?void 0:e.language)||"en");try{return this.siteInfo=await Promise.resolve(this.pendingSiteInfo),this.pendingSiteInfo=void 0,this.siteInfo}catch(e){throw this.pendingSiteInfo=void 0,e}}shouldPinFilmstripOnMobile(){var e;return!this.sessionResponse||!(null===(e=this.sessionResponse.settings.filmstrip)||void 0===e?void 0:e.omitPinnedOnMobile)}async getStripPages(e){var t,i;const s=null===(i=null===(t=this.sessionResponse)||void 0===t?void 0:t.currentPage)||void 0===i?void 0:i.id,o=await this.getRecommendedPages(),n=(await this.getSiteInfo()).pages;e&&o.sort(((e,t)=>e.pinned?-1:t.pinned?1:0));const a=new Set;o.forEach((e=>a.add(e.id)));const r=n.filter((e=>!a.has(e.id)));let c=o.concat(r);return s&&(c=c.filter((e=>e.id!==s))),c}async getRecommendedPages(){return this.sessionResponse?[...this.sessionResponse.recommendedPages]:[]}async memberSignout(e){const t={deleteAccountPermanently:e||!1},i=await this.request("signout-membership",t);if(this.sessionResponse){const t=this.sessionResponse.identity;this.sessionResponse.identity=i.identity||{signoutAllowed:!1,status:"anonymous"},this.sessionResponse.totalUserFavorites=i.totalUserFavorites,i.page&&(this.sessionResponse.currentPage=i.page),e&&t.optedIn&&function(){var e,t;wt="";const i=()=>{var e;const t=null===(e=window.$mediavine)||void 0===e?void 0:e.web;try{t.identityOptOut((e=>{e?ht("Error Opting out from Mediavine",e):ht("Opted out from Mediavine")}))}catch(e){ht("Exception Opting out from Mediavine",e)}};(null===(t=null===(e=window.$mediavine)||void 0===e?void 0:e.web)||void 0===t?void 0:t.identityOptOut)?i():(ht("Mediavine identityOptOut not present. Waiting for ready event."),window.addEventListener("mediavineIdentityReady",(()=>{ht("Mediavine Identity ready event fired."),i()})))}(),setTimeout((()=>{vt.dispatch("membership-updated",this.sessionResponse),vt.dispatch("membership-status-changed")}))}return i}updateSessionFromMembership(e,t){this.sessionResponse&&(this.sessionResponse.identity=e.identity,this.sessionResponse.totalUserFavorites=e.totalUserFavorites,e.page&&(this.sessionResponse.currentPage=e.page),setTimeout((()=>{vt.dispatch("membership-updated",this.sessionResponse),vt.dispatch("membership-status-changed")}))),t&&this.registerWidthAdNetworks()}async memberSignin(e,t){const i={isSignUp:!1,emailAddress:e,password:window.btoa(t)},s=await this.request("set-membership",i);return this.updateSessionFromMembership(s,!0),s}async memberSignup(e,t,i,s){var o,n;const a={isSignUp:!0,emailAddress:e,password:window.btoa(t),name:s,allowEmailContact:i},r=await this.request("set-membership",a);if(this.updateSessionFromMembership(r,!1),i){(null===(o=this.sessionResponse)||void 0===o?void 0:o.settings.membership.ignoreMediavineApis)||kt(e);switch((null===(n=this.sessionResponse)||void 0===n?void 0:n.settings.membership.useAdThriveApis)||"if-present"){case"never":break;case"if-present":xt(e,!1);break;case"always":xt(e,!0)}}return r}async memberResetPassword(e,t,i){const s={isSignUp:!1,emailAddress:e,password:window.btoa(t),confCode:i},o=await this.request("set-membership",s);return this.updateSessionFromMembership(o,!1),o}async requestMemberPasswordReset(e){const t={emailAddress:e};await this.request("request-reset-membership-password",t)}async checkMembership(e){const t={emailAddress:e};return this.request("check-membership",t)}async addHearts(e,t){var i;t||this.sessionResponse&&this.sessionResponse.currentPage&&(t=this.sessionResponse.currentPage.id);let s=!1;const o={count:e,pageId:t},n=null===(i=this.sessionResponse)||void 0===i?void 0:i.currentPage;this.sessionResponse&&n&&n.id===t?n.isFavorite||(n.totalFavorites=(n.totalFavorites||0)+1,n.isFavorite=!0,this.sessionResponse.totalUserFavorites=(this.sessionResponse.totalUserFavorites||0)+1,s=!0):t&&this.sessionResponse&&(this.sessionResponse.totalUserFavorites=(this.sessionResponse.totalUserFavorites||0)+1,s=!0),s&&setTimeout((()=>{vt.dispatch("membership-updated",this.sessionResponse)}));const a=await this.request("heart",o);return this.reportGAEvent("favorite-added","Slickstream favorite added"),a}async removeFavorite(e){const t={pageId:e};await this.request("delete-favorite",t),this.sessionResponse&&this.sessionResponse.currentPage&&this.sessionResponse.currentPage.id===e&&(this.sessionResponse.currentPage.totalFavorites=Math.max(0,(this.sessionResponse.currentPage.totalFavorites||1)-1),this.sessionResponse.currentPage.isFavorite=!1),this.sessionResponse&&(this.sessionResponse.totalUserFavorites=Math.max(0,(this.sessionResponse.totalUserFavorites||0)-1),setTimeout((()=>{vt.dispatch("membership-updated",this.sessionResponse)})))}isMemberSignedIn(){var e,t;return!!(null===(t=null===(e=this.sessionResponse)||void 0===e?void 0:e.identity)||void 0===t?void 0:t.email)}shouldSigninToFav(){return!!this.sessionResponse&&((!this.sessionResponse.identity||!this.sessionResponse.identity.email)&&"mandatory-membership"===this.sessionResponse.settings.membership.behavior)}async getGame(e){const t={slot:e||""};return this.request("get-game",t)}async updateGame(e,t,i){const s={id:e,status:t,data:i};await this.request("update-game",s)}async fastSearch(e,t,i,s,o,n){const a={searchString:e,speed:"fast",drillContext:s,width:t,height:i,arrangement:o,action:"type",widgetId:n};return this.request("search4-search",a)}async fullSearch(e,t,i,s,o,n,a,r){const c={searchString:e,speed:"full",drillContext:o,width:t,height:i,arrangement:a,requestedGroup:n,action:s,widgetId:r};return this.request("search4-search",c)}async fetchMoreSearchResults(e,t,i){const s={moreContext:e,width:t,height:i};return this.request("search4-more",s)}async search(e,t,i){const s={searchString:e,maxItems:100,userAction:t,contextId:i};return this.request("search3-search",s)}async searchSelectCard(e,t,i){const s={maxItems:100,searchString:e,selectedCardId:t,contextId:i};return this.request("search3-select-card",s)}async searchMoreCards(e){const t={type:"more-cards",maxItems:100,moreContext:e};return this.request("search3-more",t)}async searchMorePages(e,t,i=100){const s={type:"more-pages",maxItems:i,moreContext:e,reason:t};return this.request("search3-more",s)}async getPageInfo(e){const t={storyUrl:e};return this.request("query-page",t)}async getStoryPageInfo(e,t){const i={storyIds:{channelId:e,storyId:t}};return this.request("query-page",i)}async populateStories(){if(this._storyItems&&this._storyItems.length)return[...this._storyItems];const e=await this.request("populate-story-carousel",{});return this._storyItems=e.items,[...this._storyItems]}async contentGridItems(e,t){const i={id:t||"",count:e};return(await this.request("populate-content-grid",i)).items}async populateSlots(e){const t={slots:e};return(await this.request("populate-slots",t)).slots||[]}async notifySlotImpression(e){const t={id:e};this.send("notify","notify-slot-impression",t)}async notifySlotAction(e,t){const i={id:e,data:{href:t}};this.send("notify","notify-slot-action",i)}async getTheme(e=!1){if(this._pendingThemePromise)return Promise.resolve(this._pendingThemePromise);this._pendingThemePromise=this._getTheme(e);try{return await this._pendingThemePromise}finally{this._pendingThemePromise=void 0}}async _getTheme(e=!1){const t=await ti();if(!e){if(this.currentTheme)return this.currentTheme;if(!this.currentSession){const e=await t.getLastTheme();if(e)return this.currentTheme=e,this.currentTheme}}if(this.currentSession)try{const e=await ti();let t=await e.getTheme(this.currentSession.settings.themeId,this.currentSession.settings.themeVersion);t?this.currentTheme=t:this.restApi&&(t=await this.restApi.theme(this.currentSession.settings.themeId,this.currentSession.settings.themeVersion),t&&(this.currentTheme=t,e.addTheme(t)))}catch(e){ht("Failed to load theme",e)}return this.currentTheme||null}toast(e){this.snackbar||(this.snackbar=document.querySelector("slick-snackbar")),this.snackbar&&this.snackbar.show(e)}};var di=Object.prototype.toString,hi=Array.isArray||function(e){return"[object Array]"===di.call(e)};function pi(e){return"function"==typeof e}function ui(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function gi(e,t){return null!=e&&"object"==typeof e&&t in e}var mi=RegExp.prototype.test;var fi=/\S/;function vi(e){return!function(e,t){return mi.call(e,t)}(fi,e)}var yi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var bi=/\s*/,wi=/\s+/,ki=/\s*=/,Si=/\s*\}/,xi=/#|\^|\/|>|\{|&|=|!/;function _i(e){this.string=e,this.tail=e,this.pos=0}function Ci(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function zi(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}_i.prototype.eos=function(){return""===this.tail},_i.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var i=t[0];return this.tail=this.tail.substring(i.length),this.pos+=i.length,i},_i.prototype.scanUntil=function(e){var t,i=this.tail.search(e);switch(i){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,i),this.tail=this.tail.substring(i)}return this.pos+=t.length,t},Ci.prototype.push=function(e){return new Ci(e,this)},Ci.prototype.lookup=function(e){var t,i,s,o=this.cache;if(o.hasOwnProperty(e))t=o[e];else{for(var n,a,r,c=this,l=!1;c;){if(e.indexOf(".")>0)for(n=c.view,a=e.split("."),r=0;null!=n&&r<a.length;)r===a.length-1&&(l=gi(n,a[r])||(i=n,s=a[r],null!=i&&"object"!=typeof i&&i.hasOwnProperty&&i.hasOwnProperty(s))),n=n[a[r++]];else n=c.view[e],l=gi(c.view,e);if(l){t=n;break}c=c.parent}o[e]=t}return pi(t)&&(t=t.call(this.view)),t},zi.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},zi.prototype.parse=function(e,t){var i=this.templateCache,s=e+":"+(t||Pi.tags).join(":"),o=void 0!==i,n=o?i.get(s):void 0;return null==n&&(n=function(e,t){if(!e)return[];var i,s,o,n=!1,a=[],r=[],c=[],l=!1,d=!1,h="",p=0;function u(){if(l&&!d)for(;c.length;)delete r[c.pop()];else c=[];l=!1,d=!1}function g(e){if("string"==typeof e&&(e=e.split(wi,2)),!hi(e)||2!==e.length)throw new Error("Invalid tags: "+e);i=new RegExp(ui(e[0])+"\\s*"),s=new RegExp("\\s*"+ui(e[1])),o=new RegExp("\\s*"+ui("}"+e[1]))}g(t||Pi.tags);for(var m,f,v,y,b,w,k=new _i(e);!k.eos();){if(m=k.pos,v=k.scanUntil(i))for(var S=0,x=v.length;S<x;++S)vi(y=v.charAt(S))?(c.push(r.length),h+=y):(d=!0,n=!0,h+=" "),r.push(["text",y,m,m+1]),m+=1,"\n"===y&&(u(),h="",p=0,n=!1);if(!k.scan(i))break;if(l=!0,f=k.scan(xi)||"name",k.scan(bi),"="===f?(v=k.scanUntil(ki),k.scan(ki),k.scanUntil(s)):"{"===f?(v=k.scanUntil(o),k.scan(Si),k.scanUntil(s),f="&"):v=k.scanUntil(s),!k.scan(s))throw new Error("Unclosed tag at "+k.pos);if(b=">"==f?[f,v,m,k.pos,h,p,n]:[f,v,m,k.pos],p++,r.push(b),"#"===f||"^"===f)a.push(b);else if("/"===f){if(!(w=a.pop()))throw new Error('Unopened section "'+v+'" at '+m);if(w[1]!==v)throw new Error('Unclosed section "'+w[1]+'" at '+m)}else"name"===f||"{"===f||"&"===f?d=!0:"="===f&&g(v)}if(u(),w=a.pop())throw new Error('Unclosed section "'+w[1]+'" at '+k.pos);return function(e){for(var t,i=[],s=i,o=[],n=0,a=e.length;n<a;++n)switch((t=e[n])[0]){case"#":case"^":s.push(t),o.push(t),s=t[4]=[];break;case"/":o.pop()[5]=t[2],s=o.length>0?o[o.length-1][4]:i;break;default:s.push(t)}return i}(function(e){for(var t,i,s=[],o=0,n=e.length;o<n;++o)(t=e[o])&&("text"===t[0]&&i&&"text"===i[0]?(i[1]+=t[1],i[3]=t[3]):(s.push(t),i=t));return s}(r))}(e,t),o&&i.set(s,n)),n},zi.prototype.render=function(e,t,i,s){var o=this.getConfigTags(s),n=this.parse(e,o),a=t instanceof Ci?t:new Ci(t,void 0);return this.renderTokens(n,a,i,e,s)},zi.prototype.renderTokens=function(e,t,i,s,o){for(var n,a,r,c="",l=0,d=e.length;l<d;++l)r=void 0,"#"===(a=(n=e[l])[0])?r=this.renderSection(n,t,i,s,o):"^"===a?r=this.renderInverted(n,t,i,s,o):">"===a?r=this.renderPartial(n,t,i,o):"&"===a?r=this.unescapedValue(n,t):"name"===a?r=this.escapedValue(n,t,o):"text"===a&&(r=this.rawValue(n)),void 0!==r&&(c+=r);return c},zi.prototype.renderSection=function(e,t,i,s,o){var n=this,a="",r=t.lookup(e[1]);if(r){if(hi(r))for(var c=0,l=r.length;c<l;++c)a+=this.renderTokens(e[4],t.push(r[c]),i,s,o);else if("object"==typeof r||"string"==typeof r||"number"==typeof r)a+=this.renderTokens(e[4],t.push(r),i,s,o);else if(pi(r)){if("string"!=typeof s)throw new Error("Cannot use higher-order sections without the original template");null!=(r=r.call(t.view,s.slice(e[3],e[5]),(function(e){return n.render(e,t,i,o)})))&&(a+=r)}else a+=this.renderTokens(e[4],t,i,s,o);return a}},zi.prototype.renderInverted=function(e,t,i,s,o){var n=t.lookup(e[1]);if(!n||hi(n)&&0===n.length)return this.renderTokens(e[4],t,i,s,o)},zi.prototype.indentPartial=function(e,t,i){for(var s=t.replace(/[^ \t]/g,""),o=e.split("\n"),n=0;n<o.length;n++)o[n].length&&(n>0||!i)&&(o[n]=s+o[n]);return o.join("\n")},zi.prototype.renderPartial=function(e,t,i,s){if(i){var o=this.getConfigTags(s),n=pi(i)?i(e[1]):i[e[1]];if(null!=n){var a=e[6],r=e[5],c=e[4],l=n;0==r&&c&&(l=this.indentPartial(n,c,a));var d=this.parse(l,o);return this.renderTokens(d,t,i,l,s)}}},zi.prototype.unescapedValue=function(e,t){var i=t.lookup(e[1]);if(null!=i)return i},zi.prototype.escapedValue=function(e,t,i){var s=this.getConfigEscape(i)||Pi.escape,o=t.lookup(e[1]);if(null!=o)return"number"==typeof o&&s===Pi.escape?String(o):s(o)},zi.prototype.rawValue=function(e){return e[1]},zi.prototype.getConfigTags=function(e){return hi(e)?e:e&&"object"==typeof e?e.tags:void 0},zi.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!hi(e)?e.escape:void 0};var Pi={name:"mustache.js",version:"4.1.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){Mi.templateCache=e},get templateCache(){return Mi.templateCache}},Mi=new zi;Pi.clearCache=function(){return Mi.clearCache()},Pi.parse=function(e,t){return Mi.parse(e,t)},Pi.render=function(e,t,i,s){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+((hi(o=e)?"array":typeof o)+'" was given as the first argument for mustache#render(template, view, partials)'));var o;return Mi.render(e,t,i,s)},Pi.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return yi[e]}))},Pi.Scanner=_i,Pi.Context=Ci,Pi.Writer=zi;const Ii=ae`
.layout.horizontal,
.layout.vertical {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.layout.horizontal {
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.layout.vertical {
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.layout.center {
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.layout.wrap {
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.flex {
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  flex: 1;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
}
`;var ji=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Ri=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ti=class extends ce{constructor(){super(...arguments),this.open=!1}static get styles(){return[Ii,ae`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        overflow: hidden;
        box-sizing: border-box;
        z-index: var(--soso-dialog-z-index, var(--slick-discovery-zindex, var(--slick-toolbar-zindex, 900002)));
      }
      #contentCell {
        padding: var(--soso-dialog-content-padding, 5px);
      }
      #contentPanel {
        opacity: 0;
        transform: scale(0.8);
        transition: opacity 0.3s ease, transform 0.5s ease;
      }
      #glass {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--soso-dialog-glass-color, rgba(0,0,0,0.36));
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      #main {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      #container.showing {
        pointer-events: auto;
      }
      #container.showing #glass {
        opacity: 1;
      }
      #container.showing #contentPanel {
        opacity: 1;
        transform: scale(1);
      }
      `]}render(){return A`
    <div id="container" class="${this.open?"showing":""}">
      <div id="glass"></div>
      <div id="main" class="vertical layout">
        <div class="flex"></div>
        <div id="contentCell">
          <div id="contentPanel">
            <slot></slot>
          </div>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}};ji([Q(),Ri("design:type",Object)],Ti.prototype,"open",void 0),Ti=ji([be("soso-dialog-container")],Ti);const Ei=new class{constructor(){this.originalOverflows=["",""]}show(e){e?(this.view&&this.view.parentElement&&(this.view.parentElement.removeChild(this.view),this.view=void 0),this.dlg||(this.dlg=document.createElement("soso-dialog-container"),document.body.appendChild(this.dlg)),this.dlg.appendChild(e),this.view=e,setTimeout((()=>{this.dlg.open=!0}),150),this.originalOverflows=[document.body.style.overflow||"",document.documentElement.style.overflow||""],document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"):this.hide()}hide(){this.dlg&&(this.dlg.open=!1,setTimeout((()=>{this.dlg&&!this.dlg.open&&(document.body.style.overflow=this.originalOverflows[0]||"",document.documentElement.style.overflow=this.originalOverflows[1]||"")}),500))}},Fi=ae`
.layout.horizontal,
.layout.vertical {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.layout.horizontal {
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.layout.vertical {
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.layout.center {
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.layout.wrap {
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.flex {
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  flex: 1;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
}
`,Oi=window;function Hi(e,t,i,s=!0,o=!0){if(t){const n={bubbles:"boolean"!=typeof s||s,composed:"boolean"!=typeof o||o};i&&(n.detail=i);const a=Oi.SlickCustomEvent||CustomEvent;e.dispatchEvent(new a(t,n))}}var Bi=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Ai=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Li extends ce{constructor(){super(...arguments),this.keyListener=this.handleKeyDown.bind(this),this.showing=!1,this.dir="ltr"}static get styles(){return[Fi,ae`
      :host([dir="rtl"])  {
        --soso-dialog-title-align: right;
      }
      `]}connectedCallback(){this.dir="rtl"===document.documentElement.dir?"rtl":"ltr",super.connectedCallback()}async show(){this.showing=!0,await this.beforeShow(),this.showing&&(Ei.show(this),this.addKeyListeners(),await ot(300),this.showing&&this.afterShow())}hide(){this.showing=!1,this.removeKeyListeners(),Ei.hide()}async beforeShow(){}afterShow(){}addKeyListeners(){this.removeKeyListeners(),document.addEventListener("keydown",this.keyListener)}removeKeyListeners(){document.removeEventListener("keydown",this.keyListener)}handleKeyDown(e){switch(e.keyCode){case 13:this.onEnterKey();break;case 27:this.onEscKey()}}onEnterKey(){}onEscKey(){this.hide()}}Bi([Q({reflect:!0}),Ai("design:type",String)],Li.prototype,"dir",void 0);var Vi=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Di=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ni=class extends ce{constructor(){super(...arguments),this.label=""}static get styles(){return ae`
    :host {
      display: block;
      max-width: 500px;
      margin: 0 auto;
      box-sizing: border-box;
      background: white;
      border-radius: 3px;
      overflow: hidden;
      box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
    }
    #toolbar {
      padding: 16px;
      text-transform: capitalize;
      text-align: var(--soso-dialog-title-align, left);
      background: var(--soso-dialog-title-bg, var(--slick-discovery-highlight-color, #018786));
      color: var(--soso-dialog-title-color, white);
      border-bottom: var(--soso-dialog-title-border, none);
      letter-spacing: 0.8px;
      font-size: 1.15em;
      display: var(--soso-dialog-title-display, block);
    }
    #content {
      padding: var(--soso-dialog-content-padding, 16px);
    }
    #footer {
      padding: 16px;
      text-align: var(--soso-dialog-footer-align, right);
      background: var(--soso-dialog-footer-bg, none);
      border-top: var(--soso-dialog-footer-border, none);
    }
    #footer ::slotted(*) {
      margin-left: 8px;
    }
    `}render(){return A`
    <div id="toolbar">${this.label}</div>
    <div id="content">
      <slot name="main"></slot>
    </div>
    <div id="footer">
      <slot name="footer"></slot>
    </div>
    `}};Vi([Q(),Di("design:type",Object)],Ni.prototype,"label",void 0),Ni=Vi([be("soso-dialog-view")],Ni);var $i=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Ui=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let qi=class extends Li{constructor(){super(...arguments),this._data=[]}render(){return A`
    <style>
      :host {
        --soso-highlight-color: var(--slick-discovery-highlight-color);
        font-size: 14px;
      }
      soso-button {
        color: var(--slick-discovery-highlight-color);
      }
      #messagePanel {
        font-family: sans-serif;
        line-height: 18px;
      }
      span {
        white-space: pre-wrap;
        font-family: monospace;
        overflow-wrap: break-word;
      }
    </style>
    <soso-dialog-view label="Page Info">
      <div id="messagePanel" slot="main">
        ${this._data.map((e=>A`
        <div style="margin-bottom: 8px;">
          <strong>${e.key}:</strong> <span>${e.value}</span>
        </div>
        `))}
      </div>
      <soso-button slot="footer" @click="${this.onCancel}">Close</soso-button>
    </soso-dialog-view>
    `}firstUpdated(){this.resetState()}async beforeShow(){this.resetState()}resetState(){if(this._data=[],this.page)for(const e in this.page){const t=this.page[e];"object"==typeof t?(this._data.push({key:e,value:JSON.stringify(t,null,2)}),console.log(this._data)):this._data.push({key:e,value:`${t}`})}}onCancel(){this.hide()}};$i([X(),Ui("design:type",Array)],qi.prototype,"_data",void 0),qi=$i([Z("slick-page-preview-dialog")],qi);const Gi=new Map;var Wi=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Ki=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ji=class extends pe{constructor(){super(...arguments),this.label="",this.icon="",this.activeIcon="",this.active=!1}render(){return A`
    <style>
      :host {
        display: inline-block; 
      }
      #iconPanel {
        position: relative;
      }
      soso-icon {
        transition: opacity 100ms linear 30ms, transform .27s cubic-bezier(0,0,.2,1) 0ms;
        width: var(--fab-icon-size, 24px);
        height: var(--fab-icon-size, 24px);
      }
      button {
        background-color: var(--fab-background, none);
        background-size: cover;
        background-origin: border-box;
        background-position: 50% 50%;
        cursor: pointer;
        outline: none;
        border: none;
        overflow: hidden;
        padding: var(--fab-padding, 10px);
        border-radius: 50%;
        color: inherit;
        user-select: none;
        position: relative;
        transition: ${ue};
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--fab-before-bg, currentColor);
        opacity: 0;
        transition: ${ue};
      }
      button:focus::before {
        opacity: 0.1;
      }
      #icon {
        opacity: 1;
      }
      #activeIcon {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transform: rotateZ(-90deg);
      }
      img {
        display: block;
        border-radius: 50%;
        height: 48px;
        width: 48px;
      }
      button.hasImage {
        padding: 0;
      }
      button[active] #activeIcon {
        opacity: 1;
        transform: none;
      }
      button[active] #icon {
        opacity: 0;
        transform: rotateZ(90deg);
      }

      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
        button:focus::before {
          opacity: 0.1;
        }
      }
    </style>
    <button 
      ?active="${this.active}"
      aria-label="${this.label||this.icon||""}" 
      class="horizontal center ${this.image?"hasImage":""}">

      ${this.image?A`
        <img src="${this.image}" alt="${this.label}">
        `:A`
        <div id="iconPanel">
          <soso-icon id="icon" .icon="${this.icon}"></soso-icon>
          <soso-icon id="activeIcon" .icon="${this.activeIcon}"></soso-icon>
        </div>
        `}
    </button>
    `}};Wi([Q(),Ki("design:type",Object)],Ji.prototype,"label",void 0),Wi([Q(),Ki("design:type",Object)],Ji.prototype,"icon",void 0),Wi([Q(),Ki("design:type",Object)],Ji.prototype,"activeIcon",void 0),Wi([Q(),Ki("design:type",String)],Ji.prototype,"image",void 0),Wi([Q({type:Boolean}),Ki("design:type",Object)],Ji.prototype,"active",void 0),Ji=Wi([Z("slick-toggle-button")],Ji);var Zi=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Yi=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Qi=class extends pe{constructor(){super(...arguments),this.rightalign=!1,this.hidecount=!1}render(){var e,t,i;if(!this.page)return A``;const s=null===(e=li.currentSession)||void 0===e?void 0:e.settings,o=(null===(t=null==s?void 0:s.heartbeatIcon)||void 0===t?void 0:t.iconType)||"heart",n=(null===(i=null==s?void 0:s.heartbeat)||void 0===i?void 0:i.minVisibleCount)||0;return A`
    <style>
      :host {
        display: block;
        position: relative;
      }
      #favCount {
        color: var(--slick-discovery-highlight-color, #2196f3);
        font-size: 13px;
        font-family: sans-serif;
        line-height: 1;
        pointer-events: none;
        white-space: nowrap;
      }
    </style>
    <div class="horizontal center">
      <slick-toggle-button
        .active="${this.page.isFavorite||!1}" 
        .icon="${o}-outline"
        .activeIcon="${o}"
        label="${this.page.isFavorite?"Favorite":"Add to favorites"}"
        @click="${this.onToggleClick}">
      </slick-toggle-button>
      ${this.hidecount?A``:A`<div id="favCount">${this.countString(this.page.totalFavorites,n)}</div>`}
      <span class="flex"></span>
    </div>
    `}connectedCallback(){let e=this.parentElement;for(;e;){if(e.slickPageDescriptor){this.page=e.slickPageDescriptor;break}e=e.parentElement}super.connectedCallback()}firstUpdated(){this.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault()}))}countString(e,t){return e<=0||e<=t?"":e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e4?`${(e/1e3).toFixed(1)}k`:e.toLocaleString()}async onToggleClick(e){e.stopPropagation(),e.preventDefault(),this.toggleFav()}toggleFav(){var e;if(this.page){if(this.page.isFavorite)li.removeFavorite(this.page.id),this.page.totalFavorites--,li.toast({message:li.phrase("favorite-removed"),action:li.phrase("undo"),actionHandler:()=>{this.page&&(this.page.isFavorite||this.toggleFav())}});else{if(li.shouldSigninToFav())return void Hi(this,"signin-and-fav",{pageId:this.page.id});const t=(null===(e=li.currentSession)||void 0===e?void 0:e.totalUserFavorites)||0;li.addHearts(1,this.page.id),this.page.totalFavorites++;li.isMemberSignedIn()||0===t?li.toast({message:li.phrase("favorite-added"),action:li.phrase("view"),actionHandler:()=>{li.goto(["list","my-favorites"])}}):li.toast({message:li.phrase("prompt-to-sign-in"),action:li.phrase("sign-in"),duration:6e3,actionHandler:()=>{Hi(this,"signin-and-fav")}})}this.page.isFavorite=!this.page.isFavorite,this.requestUpdate()}}};Zi([X(),Yi("design:type",Object)],Qi.prototype,"page",void 0),Zi([Q({type:Boolean}),Yi("design:type",Object)],Qi.prototype,"rightalign",void 0),Zi([Q({type:Boolean}),Yi("design:type",Object)],Qi.prototype,"hidecount",void 0),Qi=Zi([Z("slick-favorite-button")],Qi);var Xi=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},es=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ts=class extends ce{constructor(){super(...arguments),this.src="",this.imagewidth=0,this.imageheight=0,this.width=0,this.height=0,this.sized=!1,this.contained=!1,this.currentImage="",this.intersecting=!1,this._connected=!1}render(){return A`
    <style>
      :host {
        display: block;
        position: relative;
        background-color: #f0f0f0;
        background-size: cover;
        background-origin: border-box;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        overflow: hidden;
      }
      :host([contained]) {
        background-color: initial;
        background-size: contain;
      }
    </style>
    `}firstUpdated(){"IntersectionObserver"in window?(this.reconnectObserver(),setTimeout((()=>{this._connected&&this.reconnectObserver()}),150)):(this.intersecting=!0,this.refreshImage())}connectedCallback(){super.connectedCallback(),this._connected=!0}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1}reconnectObserver(){this._observer&&this._observer.unobserve(this),this._observer=new IntersectionObserver((e=>{const t=e[0];this.intersecting=t.isIntersecting,this.refreshImage()})),this._observer.observe(this)}updated(e){e.has("src")&&this.refreshImage(),this.refreshSize()}getSizeProperty(e){const t=(window.getComputedStyle(this).getPropertyValue(e)||"").trim();if(t){const e=t.match(/\d+/g);if(e&&e[0]){const t=+e[0];if(!Number.isNaN(t))return t}}}refreshSize(){if(!this.sized){let e=this.imagewidth||128,t=this.imageheight||128,i=!0;const s=e/t;if(this.width?(e=this.width,this.height?(t=this.height,i=!1):t=e/s):this.height&&(t=this.height,e=s*this.height),i){const i=this.getSizeProperty("max-width"),o=this.getSizeProperty("max-height");i&&e>i&&(e=i,t=e/s),o&&t>o&&(t=o,e=s*t)}this.style.width=`${e}px`,this.style.height=`${t}px`}}refreshImage(){this.src?this.intersecting&&this.currentImage!==this.src&&(this.currentImage=this.src,this.style.backgroundImage=`url("${this.currentImage}")`):this.style.backgroundImage=""}};Xi([Q({type:String}),es("design:type",Object)],ts.prototype,"src",void 0),Xi([Q({type:Number}),es("design:type",Object)],ts.prototype,"imagewidth",void 0),Xi([Q({type:Number}),es("design:type",Object)],ts.prototype,"imageheight",void 0),Xi([Q({type:Number}),es("design:type",Object)],ts.prototype,"width",void 0),Xi([Q({type:Number}),es("design:type",Object)],ts.prototype,"height",void 0),Xi([Q({type:Boolean}),es("design:type",Object)],ts.prototype,"sized",void 0),Xi([Q({type:Boolean,reflect:!0}),es("design:type",Object)],ts.prototype,"contained",void 0),ts=Xi([Z("slick-image")],ts);var is=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},ss=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let os=class extends pe{constructor(){super(...arguments),this.rows=0}render(){return A`
    <style>
      :host {
        display: block;
        position: relative;
      }
      #textPanel {
        line-height: var(--slick-mulitiline-line-height, 1.4);
        -webkit-line-clamp: var(--slick-mulitiline-line-count, 2);
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
      }
    </style>
    <div id="textPanel">
      <slot></slot>
    </div>
    `}updated(){this.recompute()}getSizeProperty(e){const t=(window.getComputedStyle(this).getPropertyValue(e)||"").trim();if(t){const e=t.match(/\d+/g);if(e&&e[0]){const t=+e[0];if(!Number.isNaN(t))return t}}}recompute(){if(this.rows)this.style.setProperty("--slick-mulitiline-line-count",`${this.rows}`);else{const e=this.getBoundingClientRect().height;if(e){const t=this.getSizeProperty("font-size")||16,i=Math.max(1,Math.floor(e/(1.5*t)));this.style.setProperty("--slick-mulitiline-line-count",`${i}`)}}}};is([Q({type:Number}),ss("design:type",Object)],os.prototype,"rows",void 0),os=is([Z("slick-multiline")],os);var ns=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},as=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let rs=class extends ce{constructor(){super(...arguments),this.value=0}static get styles(){return ae`
      :host {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        fill: currentColor;
        stroke: none;
        width: 24px;
        height: 24px;
        box-sizing: initial;
      }
      svg {
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
      }
      path#backPath {
        fill: var(--slick-meted-icon-background, #d1d1d1);
      }
    `}render(){const e=this.icon||"",t=me.get(e,this.iconkey);return A`
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
      <clipPath id="meterClip" clipPathUnits="objectBoundingBox">
        <rect x="0" y="0" width="${this.value}" height="1"/>
      </clipPath>
      <g>
        <path id="backPath" d="${t}"></path>
        <path d="${t}" clip-path="url(#meterClip)"></path>
      </g>
    </svg>
    `}};ns([Q({type:String}),as("design:type",String)],rs.prototype,"icon",void 0),ns([Q({type:String}),as("design:type",String)],rs.prototype,"iconkey",void 0),ns([Q({type:Number}),as("design:type",Object)],rs.prototype,"value",void 0),rs=ns([Z("metered-icon")],rs);var cs=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},ls=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ds=class extends pe{constructor(){super(...arguments),this.rating=0,this.total=5}render(){const e=new Array(this.total).fill(0).map(((e,t)=>{const i=t+1;return i<this.rating?1:i-this.rating<1?1-(i-this.rating):0}));return A`
    <style>
      :host {
        display: block;
        position: relative;
      }
      metered-icon {
        color: #f1bc42;
        width: var(--slick-rating-icon-size, 24px);
        height: var(--slick-rating-icon-size, 24px);
      }
    </style>
    <div class="horizontal center">
      ${e.map((e=>A`
      <metered-icon icon="star" .value="${e}"></metered-icon>
      `))}
    </div>
    `}};cs([Q({type:Number}),ls("design:type",Object)],ds.prototype,"rating",void 0),cs([Q({type:Number}),ls("design:type",Object)],ds.prototype,"total",void 0),ds=cs([Z("slick-rating-bar")],ds);var hs=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},ps=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let us=class extends ce{constructor(){super(...arguments),this.src="",this.ratio=1,this.containment="auto",this._currentImage="",this._naturalSizedImage=!1,this._intersecting=!1,this._connected=!1}render(){let e=this.ratio?`padding: ${1/(2*this.ratio)*100}% 0;`:"";this._currentImage&&(e+=` background-image: url("${this._currentImage}");`);const t=this._naturalSizedImage&&"contain"===this.containment?"natural":this.containment;return A`
    <style>
      :host {
        display: block;
        position: relative;
        overflow: hidden;
      }
      #panel {
        display: block;
        position: relative;
        background-color: var(--slick-image-fit-background-color, white);
        background-size: cover;
        background-origin: border-box;
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
      #panel.contain {
        background-size: contain;
      }
      #panel.natural {
        background-size: auto;
      }
    </style>
    <div id="panel" class="${t}" style="${e}"></div>
    `}firstUpdated(){"IntersectionObserver"in window?(this.reconnectObserver(),setTimeout((()=>{this._connected&&this.reconnectObserver()}),150)):(this._intersecting=!0,this.refreshImage())}connectedCallback(){super.connectedCallback(),this._connected=!0}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1}reconnectObserver(){this._observer&&this._observer.unobserve(this),this._observer=new IntersectionObserver((e=>{const t=e[0];this._intersecting=t.isIntersecting,this.refreshImage()})),this._observer.observe(this)}updated(e){e.has("src")&&this.refreshImage(),(e.has("imagewidth")||e.has("imageheight")||e.has("ratio"))&&this.refreshImageSize()}refreshImage(){this.src?this._intersecting&&this._currentImage!==this.src&&(this._currentImage=this.src):this._currentImage=""}getPanelWidth(){const e=this.getRootNode().host;return e.computeImagePanelWidth?e.computeImagePanelWidth(this._panel):this._panel.getBoundingClientRect().width}refreshImageSize(){if(this.imageheight&&this.imagewidth&&this.ratio){const e=this.getPanelWidth(),t=e/this.ratio;if(this.imageheight<t&&this.imagewidth<e)return void(this._naturalSizedImage=!0)}this._naturalSizedImage=!1}};hs([Q({type:String}),ps("design:type",Object)],us.prototype,"src",void 0),hs([Q({type:Number}),ps("design:type",Object)],us.prototype,"ratio",void 0),hs([Q({type:Number}),ps("design:type",Number)],us.prototype,"imagewidth",void 0),hs([Q({type:Number}),ps("design:type",Number)],us.prototype,"imageheight",void 0),hs([Q(),ps("design:type",String)],us.prototype,"containment",void 0),hs([X(),ps("design:type",Object)],us.prototype,"_currentImage",void 0),hs([X(),ps("design:type",Object)],us.prototype,"_naturalSizedImage",void 0),hs([ee("#panel"),ps("design:type",HTMLElement)],us.prototype,"_panel",void 0),us=hs([Z("slick-image-fit")],us);var gs=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},ms=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let fs=class extends pe{constructor(){super(...arguments),this.prefersOriginalImage=!1,this.prefersPageTypeIndicator=!1}render(){return A`
    <style>
      :host  {
        display: block;
        position: relative;
      }
      #slickTemplateCellContainer {
        height: 100%;
      }
    </style>
    <div id="slickTemplateCellContainer" 
      .slickPageDescriptor="${this.page}"  
      @click="${this.onCellClick}"></div>
    `}updated(e){(e.has("page")||e.has("group")||e.has("prefersOriginalImage")||e.has("prefersPageTypeIndicator"))&&this.updateData(),this.renderTemplate()}updateData(){var e,t,i,s,o,n,a,r,c,l,d;if(this.page&&this.group){const h=!("no-favorites"===((null===(t=null===(e=li.currentSession)||void 0===e?void 0:e.settings)||void 0===t?void 0:t.membership.behavior)||(null===(i=li.cachedSettings)||void 0===i?void 0:i.membership.behavior)||"optional-membership")),p=this.page.image;let u,g;p&&(u=p.url||p.pageId&&li.thumbnailByPageId(p.pageId)||void 0,g=this.prefersOriginalImage?u:p.pageId&&li.thumbnailByPageId(p.pageId)||p.url);let m=this.group.displayImageAspectRatio,f=this.group.imageContainment;if(this.group.aspectRatioOverrides){const e=this.group.aspectRatioOverrides[this.page.id];"number"!=typeof e||isNaN(e)||(m=e)}if(this.group.imageContainmentOverrides){const e=this.group.imageContainmentOverrides[this.page.id];e&&(f=e)}this._data={pinned:!1,hasRating:!1,favoriteCount:this.page.totalFavorites,isFavorite:this.page.isFavorite||!1,titleHtml:"",titleText:"",url:this.page.url,viewerUrl:this.page.viewerUrl,navigationUrl:this.page.viewerUrl||this.page.url,allowFavorites:h,isVideo:"video"===this.page.type,isWebstory:"web-story"===this.page.type,showPageType:this.prefersPageTypeIndicator};for(const e of this.group.displayFields)switch(e){case"author":this._data.author=this.page.authorHtml,this.page.authorDrillContext&&(this._data.authorUrl=li.computeHashUrl("search",{c:this.page.authorDrillContext}));break;case"description":this._data.description=this.page.descriptionHtml||"";break;case"image":this._data.imageFull=u,this._data.imageThumbnail=g,this._data.imageWidth=null===(s=this.page.image)||void 0===s?void 0:s.width,this._data.imageHeight=null===(o=this.page.image)||void 0===o?void 0:o.height,this._data.imageAspectRatio=m||1,this._data.imageContainment=f||"auto";break;case"pinned":this._data.pinned=this.page.pinned||!1;break;case"published":this._data.published=this.page.published?new Date(this.page.published).toLocaleDateString():void 0;break;case"rating":this._data.hasRating="number"==typeof(null===(n=this.page.recipe)||void 0===n?void 0:n.reviewCount)&&"number"==typeof(null===(a=this.page.recipe)||void 0===a?void 0:a.avgRating),(null===(r=this.page.recipe)||void 0===r?void 0:r.avgRating)&&(this.page.recipe.avgRating=+(null===(c=this.page.recipe)||void 0===c?void 0:c.avgRating).toFixed(1)),this._data.recipe=this.page.recipe;break;case"readingTime":this._data.readingTime=this.timeString(this.page.readingTime);break;case"recipeIngredients":this._data.ingredientListHtml=null===(l=this.page.recipe)||void 0===l?void 0:l.ingredientListHtml;break;case"recipeTotalTime":this._data.cookingTime=this.timeString(null===(d=this.page.recipe)||void 0===d?void 0:d.totalMinutes);break;case"section":this._data.section=this.page.sectionHtml,this.page.sectionDrillContext&&(this._data.sectionUrl=li.computeHashUrl("search",{c:this.page.sectionDrillContext}));break;case"title":this._data.titleHtml=this.page.titleHtml||"",this._data.titleText=this.page.titleText||""}}else this._data=void 0}timeString(e){if(!e)return;let t="";if(e>=60){const i=Math.floor(e/60),s=e%60;t=1===i?"1 hr":`${i} hrs`,s&&(t+=` ${s} min`)}else t=`${e} min`;return t}renderTemplate(){this.container&&(this._data&&this.template?this.container.innerHTML=Pi.render(this.template,this._data):this.container.innerHTML="")}onCellClick(e){if(e.shiftKey&&e.metaKey)return e.stopPropagation(),e.preventDefault(),this._preview||(this._preview=new qi),this._preview.page=this.page,void this._preview.show();const t=e.srcElement||e.target;if(t){let i=null,s=t;const o=["body","head","html"];for(;s&&s.tagName;){const e=s.tagName.toLowerCase();if(o.indexOf(e)>=0)break;if("a"===e){i=s;break}s=s.parentElement}i&&i.href&&(e.stopPropagation(),this.fire("nav",{href:i.href,anchor:i}))}}updatePage(e){var t;if(!this.page||this.page.id!==e.id)return void(this.page=e);const i=[];for(const t of Object.keys(e)){if("score"===t)continue;JSON.stringify(e[t])!==JSON.stringify(this.page[t])&&i.push(t)}const s=(t,i)=>{const s=this.container.querySelectorAll(t);return!s||!s.length||(s.forEach((t=>t.innerHTML=e[i]||"")),!1)};if(i.length){let o=!1;if(this.container)for(const n of i){switch(n){case"titleHtml":s("*[data-title-html]",n),this.page[n]=e[n];break;case"descriptionHtml":s("*[data-description]",n),this.page[n]=e[n];break;case"sectionHtml":s("*[data-section]",n),this.page[n]=e[n];break;case"authorHtml":s("*[data-author]",n),this.page[n]=e[n];break;case"recipe":{this.page.recipe=e.recipe;const i=(null===(t=this.page.recipe)||void 0===t?void 0:t.ingredientListHtml)||"",s=this.container.querySelectorAll("*[data-ingredients]");s&&s.length&&s.forEach((e=>e.innerHTML=i));break}default:o=!0}if(o)break}else o=!0;o&&(this.page=e)}}computeImagePanelWidth(e){return this.group?function(e,t){const i=function(e){var t;return`${e.templateId}-${(null===(t=e.cellWidth)||void 0===t?void 0:t.target)||(e.drillContext||"")+(e.displayFields||[]).sort().join("-")}`}(t),s=Gi.get(i);if(s)return s;const{width:o}=e.getBoundingClientRect();return Gi.set(i,o),o}(e,this.group):e.getBoundingClientRect().width}};gs([Q({type:Object}),ms("design:type",Object)],fs.prototype,"group",void 0),gs([Q({type:Object}),ms("design:type",Object)],fs.prototype,"page",void 0),gs([Q(),ms("design:type",String)],fs.prototype,"template",void 0),gs([Q({type:Boolean}),ms("design:type",Object)],fs.prototype,"prefersOriginalImage",void 0),gs([Q({type:Boolean}),ms("design:type",Object)],fs.prototype,"prefersPageTypeIndicator",void 0),gs([ee("#slickTemplateCellContainer"),ms("design:type",HTMLDivElement)],fs.prototype,"container",void 0),fs=gs([Z("slick-template-cell")],fs);var vs=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},ys=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let bs=class extends pe{constructor(){super(...arguments),this.cellMap=new Map}render(){return this.group?A`
    <style>
      :host {
        display: block;
      }
      #container {
        margin: 0 auto;
      }
    </style>
    <div id="container"></div>
    `:A``}updated(e){(e.has("group")||e.has("descriptors"))&&this.refresh()}async refresh(){await this.refreshPages()}async refreshPages(){var e;if(this.container)if(this.group&&this.descriptors){const t=await li.getTheme(),i=(null===(e=null==t?void 0:t.templatesById[this.group.templateId||""])||void 0===e?void 0:e.htmlTemplate)||"",s=this.descriptors,o=this.group.pageIds.map((e=>s[e])).filter((e=>!!e)),n=new Map;for(const e of o){let t=this.cellMap.get(e.id);t?(this.cellMap.delete(e.id),t.updatePage(e)):(t=new fs,t.template=i,t.group=this.group,t.page=e),n.set(e.id,t),this.container.append(t)}for(const e of this.cellMap.values())e.remove();this.cellMap.clear(),this.cellMap=n}else this.cellMap.clear()}};vs([Q({type:Object}),ys("design:type",Object)],bs.prototype,"descriptors",void 0),vs([Q({type:Object}),ys("design:type",Object)],bs.prototype,"group",void 0),vs([ee("#container"),ys("design:type",HTMLDivElement)],bs.prototype,"container",void 0),bs=vs([Z("slick-search-list")],bs);var ws=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},ks=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ss=class extends pe{constructor(){super(...arguments),this._leftScroll=!1,this._rightScroll=!1,this._cellMap=new Map,this._pendingScroll=!1,this._cellWidth=175}render(){return this.group?A`
    <style>
      :host {
        display: block;
      }
      #outer {
        position: relative;
      }
      #scrollPanel {
        position: relative;
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        overflow-y: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;
        scroll-behavior: smooth;
      }
      #scrollPanel::-webkit-scrollbar {
        width: 0px;
        height: 0px;
        background: transparent;
      }
      slick-template-cell {
        flex: 0 0 auto;
      }
      .spacer {
        width: 40px;
        flex: 0 0 auto;
      }
      #overlay {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        pointer-events: none;
      }
      soso-icon-button {
        border-radius: 50%;
        --soso-icon-button-padding: 4px;
        cursor: pointer;
        background: var(--slick-discovery-highlight-color, #000);
        color: var(--slick-search-carousel-icon-color, #fff);
        transition: transform 0.28s ease;
        margin-top: -10px;
      }
      .overlayButton {
        cursor: pointer;
        opacity: 0;
        padding: 0 6px;
        transition: opacity 0.3s ease;
      }
      .overlayButton.showing {
        opacity: 1;
        pointer-events: auto;
      }

      @media(hover: hover) {
        #overlay {
          opacity: 0;
          transition: opacity 0.18s ease;
        }
        #outer:hover #overlay {
          opacity: 1;
        }
        soso-icon-button {
          border: 2px solid;
        }
        .overlayButton:hover soso-icon-button {
          transform: scale(1.2);
        }
      }
    </style>
    <div id="outer">
      <div id="scrollPanel" @scroll="${this.onScroll}">
        <div id="container" class="horizontal"></div>
      </div>
      <div id="overlay" class="horizontal">
        <div class="overlayButton horizontal center ${this._leftScroll?"showing":""}" @click="${this.prevPage}">
          <soso-icon-button label="Scroll left" .icon="${"rtl"===this.dir?"chevron-right":"chevron-left"}"></soso-icon-button>
        </div>
        <span class="flex"></span>
        <div class="overlayButton horizontal center ${this._rightScroll?"showing":""}" @click="${this.nextPage}">
          <soso-icon-button label="Scroll right" .icon="${"rtl"===this.dir?"chevron-left":"chevron-right"}"></soso-icon-button>
        </div>
      </div>
    </div>
    `:A``}updated(e){(e.has("group")||e.has("descriptors"))&&this.refresh()}async refresh(){await this.refreshPages(),this.onScroll()}async refreshPages(){var e,t;if(this._container){if(this.group&&this.descriptors){this._cellWidth=(null===(e=this.group.cellWidth)||void 0===e?void 0:e.target)||175;const i=await li.getTheme(),s=(null===(t=null==i?void 0:i.templatesById[this.group.templateId||""])||void 0===t?void 0:t.htmlTemplate)||"",o=this.descriptors,n=this.group.pageIds.map((e=>o[e])).filter((e=>!!e)),a=new Map;for(const e of n){let t=this._cellMap.get(e.id);t?(this._cellMap.delete(e.id),t.updatePage(e)):(t=new fs,t.template=s,t.group=this.group,t.page=e),t.style.width=`${this._cellWidth}px`,a.set(e.id,t),this._container.append(t)}for(const e of this._cellMap.values())e.remove();this._cellMap.clear(),this._cellMap=a}else this._cellMap.clear();this._cellMap.size?(this._spacer||(this._spacer=document.createElement("div"),this._spacer.classList.add("spacer")),this._container.appendChild(this._spacer)):this._spacer&&this._spacer.remove()}}onScroll(){this._pendingScroll||(this._pendingScroll=!0,setTimeout((()=>{if(this._pendingScroll&&(this._pendingScroll=!1,this._scrollPanel)){const e=Math.abs(this._scrollPanel.scrollLeft);this._leftScroll=e>0,this._rightScroll=this._cellMap.size*this._cellWidth+40-(e+this._scrollPanel.getBoundingClientRect().width)>0}}),300))}prevPage(){if(this._scrollPanel){const e=this._scrollPanel.getBoundingClientRect().width,t=Math.floor(e/this._cellWidth),i=Math.max(0,Math.floor(this._scrollPanel.scrollLeft/this._cellWidth)-t);this._scrollPanel.scrollLeft=i*this._cellWidth}}nextPage(){if(this._scrollPanel){const e=this._scrollPanel.getBoundingClientRect().width,t=Math.floor((this._scrollPanel.scrollLeft+e)/this._cellWidth);this._scrollPanel.scrollLeft=t*this._cellWidth}}};var xs;ws([Q(),ks("design:type",Object)],Ss.prototype,"descriptors",void 0),ws([Q({type:Object}),ks("design:type",Object)],Ss.prototype,"group",void 0),ws([X(),ks("design:type",Object)],Ss.prototype,"_leftScroll",void 0),ws([X(),ks("design:type",Object)],Ss.prototype,"_rightScroll",void 0),ws([ee("#container"),ks("design:type",HTMLDivElement)],Ss.prototype,"_container",void 0),ws([ee("#scrollPanel"),ks("design:type",HTMLDivElement)],Ss.prototype,"_scrollPanel",void 0),ws([(xs={passive:!0},(e,t)=>void 0!==t?((e,t,i)=>{Object.assign(t[i],e)})(xs,e,t):((e,t)=>Object.assign(Object.assign({},t),{finisher(i){Object.assign(i.prototype[t.key],e)}}))(xs,e)),ks("design:type",Function),ks("design:paramtypes",[]),ks("design:returntype",void 0)],Ss.prototype,"onScroll",null),Ss=ws([Z("slick-search-carousel")],Ss);var _s=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Cs=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let zs=class extends pe{constructor(){super(...arguments),this._columns=3,this._cellMap=new Map,this.resizeListener=()=>{this.regreshGridSize()}}render(){return this.group?A`
    <style>
      :host {
        display: block;
      }
      #container {
        display: grid;
        grid-template-columns: repeat(var(--slick-search-grid-col-count, 3), 1fr);
      }
    </style>
    <div id="container"></div>
    `:A``}updated(e){(e.has("group")||e.has("descriptors"))&&this.refresh()}async refresh(){this.regreshGridSize(),await this.refreshPages()}async refreshPages(){var e;if(this.container)if(this.group&&this.descriptors){const t=await li.getTheme(),i=(null===(e=null==t?void 0:t.templatesById[this.group.templateId||""])||void 0===e?void 0:e.htmlTemplate)||"",s=this.descriptors,o=this.group.pageIds.map((e=>s[e])).filter((e=>!!e)),n=new Map;for(const e of o){let t=this._cellMap.get(e.id);t?(this._cellMap.delete(e.id),t.updatePage(e)):(t=new fs,t.template=i,t.group=this.group,t.page=e),n.set(e.id,t),this.container.append(t)}for(const e of this._cellMap.values())e.remove();this._cellMap.clear(),this._cellMap=n}else this._cellMap.clear()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.resizeListener,{passive:!0})}disconnectedCallback(){window.removeEventListener("resize",this.resizeListener),super.disconnectedCallback()}regreshGridSize(){var e;if(this.group){let t=0;if(this.container&&(t=this.container.getBoundingClientRect().width),t<=0)setTimeout((()=>{this.regreshGridSize()}),200);else{const i=(null===(e=this.group.cellWidth)||void 0===e?void 0:e.target)||175,s=Math.max(1,Math.round(t/i));s!==this._columns&&(this._columns=s,this.style.setProperty("--slick-search-grid-col-count",`${s}`))}}}};_s([Q(),Cs("design:type",Object)],zs.prototype,"descriptors",void 0),_s([Q({type:Object}),Cs("design:type",Object)],zs.prototype,"group",void 0),_s([ee("#container"),Cs("design:type",HTMLDivElement)],zs.prototype,"container",void 0),zs=_s([Z("slick-search-grid")],zs);var Ps=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Ms=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Is=class extends pe{constructor(){super(...arguments),this.favCount=0}render(){var e,t,i,s;if(!this.membership)return A``;const o=!("mandatory-membership"!==(null===(e=li.currentSession)||void 0===e?void 0:e.settings.membership.behavior)),n=this.favCount?this.membership&&this.membership.optionaMembershipCta||li.phrase("favorites-panel-optional-cta"):(null===(s=null===(i=null===(t=li.currentSession)||void 0===t?void 0:t.settings)||void 0===i?void 0:i.discovery)||void 0===s?void 0:s.noFavoritesMessage)||li.phrase("favorites-panel-optional-no-favorites");return A`
    <style>
      :host {
        display: block;
        padding: 16px 12px;
      }
      #container {
        padding: 16px;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        font-size: 14px;
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.03);
      }
      soso-button {
        color: var(--slick-search-group-title-color, var(--slick-discovery-highlight-color, #000));
        white-space: nowrap;
      }
      #signOutButton {
        margin-left: 8px;
      }
      #signInButton {
        margin-left: 8px;
      }
    </style>
    <style rtl>
      :host([dir="rtl"]) #signOutButton {
        margin-right: 8px;
        margin-left: 0;
      }
      :host([dir="rtl"]) #signInButton {
        margin-right: 8px;
        margin-left: 0;
      }
    </style>
    <div id="container">
      ${this.user?A`
      <div class="horizontal center">
        <span class="flex"></span>
        <span>${this.user}</span>
        <soso-button 
          id="signOutButton"
          @click="${this.signOut}">
            ${li.phrase("sign-out")}
        </soso-button>
      </div>
      `:A`
        ${o?A`
        <div class="horizontal center">
          <span class="flex"></span>
          <div>
            <div>${this.membership&&this.membership.memberSignupMessage||this.getDefaultSignupMessage()}</div>
            <div style="margin-top: 16px; text-align: center;">
              <soso-button solid @click="${this.showDialog}">${li.phrase("favorites-panel-sign-in-button")}</soso-button>
            </div>
          </div>
          <span class="flex"></span>
        </div>
        `:A`
        <div class="horizontal center">
          <span class="flex"></span>
          <span>${n}</span>
          <soso-button id="signInButton" @click="${this.showDialog}">${li.phrase("favorites-panel-sign-in-button")}</soso-button>
          <span class="flex"></span>
        </div>
        `}
      `}
      
    </div>
    `}firstUpdated(){vt.subscribe("session-updated",(()=>{this.refreshState()})),vt.subscribe("membership-updated",(()=>{this.refreshState()})),this.refreshState()}refreshState(){const e=li.currentSession;if(e){this.membership=e.settings.membership;const t=e.identity;this.user=t.name||t.email||void 0,this.favCount=e.totalUserFavorites}else this.membership=void 0,this.user=void 0,this.favCount=0}async signOut(){this.fire("signout")}showDialog(){this.fire("signin-and-fav")}getDefaultSignupMessage(){var e;return"mandatory-membership"===(null===(e=this.membership)||void 0===e?void 0:e.behavior)?li.phrase("default-mandatory-favorites-cta"):li.phrase("default-optional-favorites-cta")}};Ps([X(),Ms("design:type",Object)],Is.prototype,"membership",void 0),Ps([X(),Ms("design:type",String)],Is.prototype,"user",void 0),Ps([X(),Ms("design:type",Object)],Is.prototype,"favCount",void 0),Is=Ps([Z("slick-search-favorites-header")],Is);var js=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Rs=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ts=class extends pe{constructor(){super(...arguments),this.showIcon=!1,this.favIcon="heart"}render(){var e;if(!this.group||!this.descriptors)return A``;const t=(this.group.title||"").trim(),i=this.showIcon&&(null===(e=this.group)||void 0===e?void 0:e.isMyFavorites)&&"custom"!==this.favIcon&&this.favIcon,s=!(!this.group.moreContext&&!this.group.addShowAll);return A`
    <style>
      :host {
        display: block;
        padding-bottom: 24px;
      }
      #titleBar {
        padding: 12px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
        color: var(--slick-search-group-title-color, var(--slick-discovery-highlight-color, #000));
      }
      #drillButton {
        --soso-icon-button-padding: 0px;
        margin: 0 4px;
        position: relative;
        display: none;
      }
      #titleBar.drillable #drillButton {
        display: block;
      }
      button.bottomButton {
        background: none;
        cursor: pointer;
        outline: none;
        border: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        padding: 8px;
        border-radius: 20px;
        color: var(--slick-search-group-title-color, var(--slick-discovery-highlight-color, #000));
      }
      button.bottomButton::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.1;
        background: var(--slick-search-group-title-color, var(--slick-discovery-highlight-color, #000));
        transition: opacity 0.28s ease;
      }
      button.bottomButton span {
        display: block;
        white-space: nowrap;
        font-family: ${'"SF Pro Display", -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif'};
        font-size: 14px;
        font-weight: 500;
        letter-spacing: .0892857143em;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        padding-left: 8px;
        padding-right: 12px;
      }
      #groupBottomPanel {
        padding: 24px 10px 32px;
        border-bottom: var(--slick-search-group-border-bottom, 1px solid #e5e5e5);
      }
      #groupBottomPanel.showall {
        padding: 16px 10px;
        border-bottom: none;
      }
      
      #titleIcon {
        margin-right: 8px;
      }
      a, a:hover, a:visited {
        text-decoration: none;
        outline: none;
        border: none;
        color: inherit;
      }
      #titleLink {
        position: relative;
      }
      #titleLink::after {
        content: var(--slick-show-all-label, 'Show all');
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translate3d(-25%, -50%, 0);
        background: rgba(0,0,0,0.05);
        border-radius: 4px;
        padding: 4px 6px;
        font-size: 12px;
        line-height: 1;
        white-space: nowrap;
        text-transform: none;
        letter-spacing: initial;
        color: rgba(0,0,0,0.6);
        font-weight: 400;
        opacity: 0;
        transition: opacity 0.28s ease, transform 0.28s ease;
      }

      @media (max-width: 600px) {
        :host {
          padding-bottom: 8px;
        }
      }

      @media (hover: hover) {
        #drillButton {
          opacity: 0;
          transform: translate3d(-50%, 0 , 0) scale(0);
          transition: ${ue};
        }
        :host(:hover) #drillButton {
          opacity: 1;
          transform: translate3d(0, 0 , 0) scale(1);
        }
        #drillButton:hover {
          --soso-icon-button-before-opacity: 0;
        }
        button.bottomButton:hover::before {
          opacity: 0.2;
        }
        #titleLink:hover::after {
          opacity: 1;
          transform: translate3d(0, -50%, 0);
        }
      }
    </style>
    <style rtl>
      :host([dir="rtl"]) #titleIcon {
        margin-left: 8px;
        margin-right: 0;
      }
      :host([dir="rtl"]) button.bottomButton span {
        padding-right: 8px;
        padding-left: 12px;
      }
    </style>

    ${t?A`
    <div id="titleBar" class="horizontal center ${this.group.drillContext?"drillable":""}">
      ${this.drillUrl?A`
      <a id="titleLink" href="${this.drillUrl}" class="horizontal center" @click="${this.titleClick}">
        ${i?A`<soso-icon id="titleIcon" .icon="${i}"></soso-icon>`:""}
        <span>${t}</span>
        <soso-icon-button id="drillButton" icon="chevron-right" label="${li.phrase("show-all")}"></soso-icon-button>
      </a>
      `:A`
      <label class="horizontal center">
        ${i?A`<soso-icon id="titleIcon" .icon="${i}"></soso-icon>`:""}
        <span>${t}</span>
      </label>
      `}
      
      <span class="flex"></span>
    </div>
    `:""}

    ${this.renderItems(this.group)}
    
    ${s?A`
    <div id="groupBottomPanel" class="${this.group.addShowAll?"showall":""}">
      
      ${this.group.moreContext?A`
      <button class="horizontal center bottomButton" @click="${this.fetchMore}">
        <span>${li.phrase("more")}</span>
        <soso-icon icon="more-horiz"></soso-icon>
      </button>
      `:null}

      ${this.group.addShowAll?A`
      <button class="horizontal center bottomButton" @click="${this.showAll}">
        <span>${li.phrase("show-all")}</span>
        <soso-icon icon="more-horiz"></soso-icon>
      </button>
      `:null}
      
    </div>`:null}
    
    `}renderItems(e){const t=this.descriptors||{};switch(e.style){case"list":return A`<slick-search-list id="itemCollection" .descriptors="${t}" .group="${e}"></slick-search-list>`;case"grid":return A`<slick-search-grid id="itemCollection" .descriptors="${t}" .group="${e}"></slick-search-grid>`;case"carousel":return A`<slick-search-carousel .descriptors="${t}" .group="${e}"></slick-search-carousel>`;case"favorites-heading":return A`<slick-search-favorites-header></slick-search-favorites-header>`}return A``}updated(){this.style.setProperty("--slick-show-all-label",`'${li.phrase("show-all")}'`)}titleClick(e){e.stopPropagation(),e.metaKey||e.shiftKey||e.ctrlKey||e.altKey||(e.preventDefault(),this.drillUrl&&this.fire("search-drill",this.group))}showAll(){this.fire("search-show-all")}async fetchMore(){this.fire("search-more",{group:this.group,groupUI:this})}refresh(){this.requestUpdate(),this.itemCollection&&this.itemCollection.refresh()}};js([Q(),Rs("design:type",Object)],Ts.prototype,"descriptors",void 0),js([Q({type:Object}),Rs("design:type",Object)],Ts.prototype,"group",void 0),js([Q({type:Boolean}),Rs("design:type",Object)],Ts.prototype,"showIcon",void 0),js([Q(),Rs("design:type",String)],Ts.prototype,"favIcon",void 0),js([Q(),Rs("design:type",String)],Ts.prototype,"drillUrl",void 0),js([ee("#itemCollection"),Rs("design:type",Object)],Ts.prototype,"itemCollection",void 0),Ts=js([Z("slick-search-group")],Ts);var Es=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},Fs=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};const Os=[{name:"The Best Vegan Broccoli Cheese Soup",id:101314},{name:"Super Easy Crockpot Broccoli Cheese Soup",id:100616},{name:"30 Minute Healthy Broccoli Cheese Rice",id:100875},{name:"Basic + Awesome Creamy Potato Soup",id:100563},{name:"Beer Cheese Soup with Soft Pretzels",id:100441},{name:"The Best Vegan Broccoli Cheese Soup",id:101314},{name:"Super Easy Crockpot Broccoli Cheese Soup",id:100616},{name:"30 Minute Healthy Broccoli Cheese Rice",id:100875},{name:"Basic + Awesome Creamy Potato Soup",id:100563},{name:"Beer Cheese Soup with Soft Pretzels",id:100441},{name:"The Best Vegan Broccoli Cheese Soup",id:101314},{name:"Super Easy Crockpot Broccoli Cheese Soup",id:100616},{name:"30 Minute Healthy Broccoli Cheese Rice",id:100875},{name:"Basic + Awesome Creamy Potato Soup",id:100563},{name:"Beer Cheese Soup with Soft Pretzels",id:100441},{name:"The Best Vegan Broccoli Cheese Soup",id:101314},{name:"Super Easy Crockpot Broccoli Cheese Soup",id:100616},{name:"30 Minute Healthy Broccoli Cheese Rice",id:100875},{name:"Basic + Awesome Creamy Potato Soup",id:100563},{name:"Beer Cheese Soup with Soft Pretzels",id:100441}],Hs=[{label:"Home",url:"/"},{label:"About",url:"/about"},{label:"Recipes",url:"/recipes"},{label:"Start Here",url:"/start-here"},{label:"My Favorites",url:"#list/favorites"}];return e.SlickBanner=class extends pe{constructor(){super(...arguments),this._state="closed",this._contentState="default",this._results=ge,this._posHeaderBottom=0,this._posRecipeStart=-1,this._posRecipeEnd=-1,this._posEmailStart=-1,this._posEmailEnd=-1,this._lastScrollValue=0,this._scrollAmount=0,this._scrollingUp=!1,this._onScroll=()=>{let e=0;e=window.scrollY;const t=e-this._lastScrollValue;this._lastScrollValue=e;const i=t<0;i===this._scrollingUp?this._scrollAmount+=Math.abs(t):(this._scrollingUp=i,this._scrollAmount=Math.abs(t)),this._updateStateBasedOnPosition(!1)}}render(){var e;const t="open"===this._state?"close":"search"===this._state?"back":"menu",i=[Os[0],Os[1],Os[2],Os[3]],s=i[0],o=(null===(e=this._results)||void 0===e?void 0:e.groups)||[];return A`
    <style>
      :host {
        display: contents;
        --slick-banner-bg: rgb(115, 64, 96);
        --slick-banner-color: white;
        --slick-site-color: rgb(115, 64, 96);
        --slick-heartbeat-color: var(--slick-site-color);
        --slick-discovery-highlight-color: var(--slick-site-color);
      }
      #banner {
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 0;
        width: 100%;
        pointer-events: none;
      }
      #banner.state-showing.content-nextup,
      #banner.state-showing.content-email {
        --slick-banner-bg: #edb654;
        --slick-banner-color: #000;
      }
      #banner.state-showing.content-strip {
        --slick-banner-bg: #fff;
        --slick-banner-color: #000;
      }

      input {
        margin: 0 0 0 12px;
        border: 0;
        font-size: 16px;
        font-family: sans-serif;
        padding: 11px 10px;
        border-radius: 4px;
        outline: 0;
        background: rgba(255,255,255,0.8);
      }
      input::placeholder {
        color: rgba(0,0,0,0.45);
        font-size: 14px;
        letter-spacing: 0.5px;
      }

      #backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        z-index: -1;
        background-color: var(--slick-banner-bg);
        transform-origin: top center;
        transition: transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
        transform: scaleY(0);
      }
      #backdrop::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        box-shadow: var(--slick-banner-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12));
        opacity: 1;
        transition: opacity 0.38s cubic-bezier(0.4, 0, 0.2, 1) 0.28s;
      }
      #banner.state-closed #backdrop::before {
        opacity: 0;
      }

      #menuButton {
        background: var(--slick-banner-bg);
        color: var(--slick-banner-color);
        border-radius: 50%;
        position: absolute;
        top: 6px;
        left: 8px;
        pointer-events: auto;
      }
      #banner.state-closed #menuButton {
        box-shadow: var(--slick-banner-menu-shadow, 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%));
      }

      #bar {
        height: 56px;
        padding: 0 4px 0 52px;
        position: relative;
        opacity: 1;
        transition: opacity 0.18s cubic-bezier(0.4, 0.0, 0.2, 1) 0.28s;
        overflow: hidden;
        pointer-events: none;
        color: var(--slick-banner-color);
      }
      #banner.state-showing.content-nextup #bar {
        height: 90px;
      }
      #barMain {
        height: 100%;
        position: relative;
        overflow: hidden;
      }
      #banner.state-closed #bar {
        opacity: 0;
        transition: opacity 0.18s cubic-bezier(0.4, 0.0, 0.2, 1) 0s;
      }

      #searchButton {
        pointer-events: auto;
      }
      #banner.state-closed #searchButton {
        pointer-events: none
      }

      #defaultBar {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        padding-left: 8px;
        transform: translate3d(0, -100%, 0);
        transition: transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      #banner.content-default #defaultBar {
        transform: none;
        pointer-events: auto;
      }

      #socialBar {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        padding-left: 8px;
        transform: translate3d(0, 100%, 0);
        transition: transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      #banner.content-social #socialBar {
        transform: none;
        pointer-events: auto;
      }
      .nextCell {
        width: 210px;
        flex: 0 0 auto;
        height: 100%;
        overflow: hidden;
        font-size: 13px;
        cursor: pointer;
      }
      .nextCell img {
        display: block;
        height: 100%;
        width: 56px;
        object-fit: cover;
      }
      .nextCell label {
        line-height: 1.5;
        max-height: calc((var(--slick-filmstrip-text-lines,  2) * 1.5em) - 0.25em);
        -webkit-line-clamp: var(--slick-filmstrip-text-lines,  2);
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-hyphens: var(--slick-filmstrip-hyphens, auto);
        -moz-hyphens: var(--slick-filmstrip-hyphens, auto);
        hyphens: var(--slick-filmstrip-hyphens, auto);
        overflow: hidden;
        letter-spacing: 0.2px;
        padding: 0 8px;
        pointer-events: none;
      }
      #socialNextLabel {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-family: sans-serif;
        margin-right: 8px;
      }
      #socialBar .nextCell {
        background: #edb654;
        color: #000;
      }

      #emailBar {
        transform: scale(0.4);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.18s cubic-bezier(0.4, 0.0, 0.2, 1) 0s, transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }
      #emailBar soso-button[solid] {
        margin-left: 12px;
      }
      #banner.content-email #emailBar {
        transform: scale(1);
        opacity: 1;
        pointer-events: auto;
      }


      #nextupBar {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        padding-left: 8px;
        transform: scale(0.8);
        opacity: 0;
        transition: transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      #banner.content-nextup #nextupBar {
        transform: scale(1);
        opacity: 1;
        pointer-events: auto;
      }
      #nextupBar .nextCell {
        height: 70px;
        font-size: 15px;
      }
      #nextupBar .nextCell img {
        width: 90px;
        border-radius: 4px;
      }

      #stripBar {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        padding-left: 8px;
        opacity: 0;
        transform: translate3d(0, -100%, 0);
        transition: transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      #banner.content-strip #stripBar {
        transform: none;
        opacity: 1;
        pointer-events: auto;
      }
      #strip {
        height: 100%;
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        overflow-y: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;
        scroll-behavior: smooth;
      }
      #strip::-webkit-scrollbar {
        width: 0px;
        height: 0px;
        background: transparent;
      }
      #strip .nextCell.flex {
        flex: 0 0 auto;
      }


      #searchBar {
        transform: scaleX(0);
        transform-origin: right center;
        opacity: 0;
        transition: opacity 0.18s cubic-bezier(0.4, 0.0, 0.2, 1) 0s, transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }
      #banner.content-search #searchBar {
        transform: scale(1);
        opacity: 1;
        pointer-events: auto;
      }
      #searchInput {
        width: 100%;
        background: rgba(255,255,255,0.95);
      }
      

      #menu {
        position: relative;
        border-top: 1px solid rgba(255,255,255,0.2);
        margin-top: 8px;
        color: white;
        letter-spacing: 0.5px;
        font-family: sans-serif;
        opacity: 0;
        transition: opacity 0.18s cubic-bezier(0.4, 0.0, 0.2, 1) 0s;
      }
      #banner.state-open #menu {
        transition: opacity 0.18s cubic-bezier(0.4, 0.0, 0.2, 1) 0.18s;
        opacity: 1;
        pointer-events: auto;
      }
      .menuLink {
        display: inline-flex;
        font-family: sans-serif;
        text-transform: uppercase;
        text-decoration: none;
        color: inherit;
        font-size: 14px;
        letter-spacing: 1.5px;
        padding: 8px 16px;
        margin: 4px 0;
      }
      .menuLink:hover {
        color: #edb654;
      }

      #linksPanel {
        padding: 16px;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }
      #menuEmailPanel {
        margin-top: 16px;
        padding: 16px;
        background: #edb654;
        color: #000;
        border-radius: 4px;
      }
      #menuEmailPanel input {
        margin: 0;
        width: 100%;
      }
      #menuEmailPanel h4 {
        font-weight: 400;
        font-size: 22px;
        margin: 0;
      }
      #menuRelatedPanel {
        padding: 12px 0 20px 16px;
        border-bottom: 1px solid rgba(255,255,255,0.2);
      }
      #menuRelatedPanel .nextCell {
        background: white;
        color: #000;
        margin-right: 11px;
        border-radius: 4px;
        width: 190px;
      }
      #menuRelatedPanel > label {
        padding-bottom: 16px;
        display: block;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 14px;
      }

    </style>

    <style search-panel>
      #searchPanel {
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        pointer-events: none;
        background: white;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
        display: none;
      }
      #searchPanel.open {
        display: block;
        pointer-events: auto;
        opacity: 1;
      }
      main {
        max-width: var(--slick-discovery-content-max-width, 1100px);
        margin: 0 auto;
        padding: 70px 0;
      }
    </style>

    <div id="searchPanel" class="${"search"===this._state?"open":""}">
      <main>
        ${o.map((e=>{var t;return A`
        <slick-search-group 
          .descriptors="${(null===(t=this._results)||void 0===t?void 0:t.itemDescriptors)||{}}" 
          .group="${e}"
          .showIcon="${!0}"
          .favIcon="${"heart"}">
        </slick-search-group>
        `}))}
      </main>
    </div>

    <div id="banner" class="state-${this._state} content-${this._contentState}">
      <div id="backdrop" style="transform: scaleY(${this._getBackdropScale()});"></div>
      <div id="bar" class="horizontal center">
        
        <div id="barMain" class="flex">
          
          <div id="defaultBar" class="horizontal center">
            <span>Pinch of Yum</span>
            <span class="flex"></span>
            <soso-button @click="${()=>window.location.assign("#tasty-recipes-42300-jump-target")}"><soso-icon icon="down"></soso-icon> Recipe</soso-button>
            <soso-icon-button icon="heart-outline"></soso-icon-button>
          </div>

          <div id="emailBar" class="horizontal center-center">
            <span>Sign up for email updates!</span>
            <input type="email" id="emailInput" autocomplete="off" spellcheck="false" placeholder="Email">
            <soso-button solid>GO</soso-button>
          </div>

          <div id="socialBar" class="horizontal center">
            <span id="socialNextLabel">Related →</span>
            <div class="nextCell horizontal center">
              <img src="https://c01f.app-staging.slickstream.com/p/pageimg/L8EAVD26/${s.id}?site=L8EAVD26&epoch=1631808946930&w=64&h=64">
              <span class="flex">
                <label>${s.name}</label>
              </span>
            </div>
            <span class="flex"></span>
            <soso-icon-button icon="twitter"></soso-icon-button>
            <soso-icon-button icon="facebook"></soso-icon-button>
            <soso-icon-button icon="heart-outline"></soso-icon-button>
          </div>

          <div id="nextupBar" class="horizontal center">
            ${i.map((e=>A`
            <div class="nextCell flex horizontal center">
              <img src="https://c01f.app-staging.slickstream.com/p/pageimg/L8EAVD26/${e.id}?site=L8EAVD26&epoch=1631808946930&w=64&h=64">
              <span class="flex">
                <label>${e.name}</label>
              </span>
            </div>
            `))}
            <soso-icon-button icon="heart-outline"></soso-icon-button>
          </div>

          <div id="stripBar">
            <div id="strip" class="horizontal center">
              ${Os.map((e=>A`
              <div class="nextCell flex horizontal center">
                <img src="https://c01f.app-staging.slickstream.com/p/pageimg/L8EAVD26/${e.id}?site=L8EAVD26&epoch=1631808946930&w=64&h=64">
                <span class="flex">
                  <label>${e.name}</label>
                </span>
              </div>
              `))}
            </div>
          </div>

          <div id="searchBar" class="horizontal center">
            <input 
              id="searchInput"
              autocomplete="off"
              spellcheck="false"
              placeholder="Search for a recipe"
              @focus="${this._onSearchFocus}"
              @blur="${this._onSearchBlur}">
          </div>

        </div>

        <soso-icon-button id="searchButton" .icon="${"search"}" @click="${this._searchButtonClick}"></soso-icon-button>
      </div>

      <div id="menu">
        <div id="menuRelatedPanel">
          <label>Related ▸</label>
          <div id="strip" class="horizontal center">
            ${Os.map((e=>A`
            <div class="nextCell flex horizontal center">
              <img src="https://c01f.app-staging.slickstream.com/p/pageimg/L8EAVD26/${e.id}?site=L8EAVD26&epoch=1631808946930&w=64&h=64">
              <span class="flex">
                <label>${e.name}</label>
              </span>
            </div>
            `))}
          </div>
        </div>
        <div class="horizontal">
          <nav id="linksPanel" class="flex">
            ${Hs.map((e=>A`
            <div>
              <a class="menuLink" href="${e.url}">${e.label}</a>
            </div>
            `))}
          </nav>  
          <div class="flex" style="padding: 16px;">
            <div class="horizontal center">
              <soso-icon-button icon="heart-outline"></soso-icon-button>
              <span>Add this recipe to favorites</span>
            </div>
            <div id="menuEmailPanel">
              <h4>Sign up for email updates!</h4>
              <p>Get a Free eCookbook with our top 25 recipes.</p>
              <div class="horizontal center">
                <div class="flex">
                  <input type="email" id="emailInput2" autocomplete="off" spellcheck="false" placeholder="Email">
                </div>
                <soso-button solid>submit</soso-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <soso-icon-button id="menuButton" .icon="${t}" @click="${this._menuClick}"></soso-icon-button>
    </div>
    `}_setBannerState(e){if(this._state!==e){const t=e;this._state=e,"search"===t&&(document.body.style.overflow="",document.documentElement.style.overflow="",this._searchPanel.style.display=""),"search"===e&&(document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",this._contentState="search",this._searchPanel.style.display="block",this._searchPanel.getBoundingClientRect(),this._searchInput.focus()),"open"===e&&(this._contentState="search")}}firstUpdated(){setTimeout((()=>{this._refreshPositions(),window.addEventListener("scroll",this._onScroll)}),100)}_onSearchFocus(){}_onSearchBlur(){}_searchButtonClick(){this._searchInput.value="","search"!==this._state&&this._setBannerState("search")}_menuClick(){var e;switch(this._state){case"open":case"search":this._updateStateBasedOnPosition(!0);break;case"closed":case"showing":this._setBannerState("open")}null===(e=document.activeElement)||void 0===e||e.blur()}_getBackdropScale(){switch(this._state){case"closed":return 0;case"open":{const{height:e}=this._menu.getBoundingClientRect();return(e+56+8)/100}case"search":case"showing":return"nextup"===this._contentState?.9:.56}}_refreshPositions(){const e=window.scrollY,t=window.innerHeight,i=document.querySelector("#global-navigation");if(i){const{top:t,height:s}=i.getBoundingClientRect();this._posHeaderBottom=Math.max(0,t+s+e)}const s=document.querySelector("#tasty-recipes-42300");if(s){const{top:i,height:o}=s.getBoundingClientRect();this._posRecipeStart=Math.max(0,this._posHeaderBottom,i+e-t),this._posRecipeEnd=i+o+e-t/2}else this._posRecipeStart=-1,this._posRecipeEnd=-1;const o=document.querySelector("#more-33151");if(o){const{top:i,height:s}=o.getBoundingClientRect();this._posEmailStart=Math.max(0,this._posHeaderBottom,i+e-t),this._posEmailEnd=i+s+e}else this._posEmailStart=-1,this._posEmailEnd=-1;this._updateStateBasedOnPosition(!1)}_updateStateBasedOnPosition(e){if(!e&&("search"===this._state||"open"===this._state||"search"===this._contentState))return;const t=window.scrollY;this._setBannerState(t>this._posHeaderBottom?"showing":"closed");let i="default";this._posRecipeEnd>0&&(t>this._posRecipeEnd?i="nextup":t>this._posRecipeStart&&(i="social")),this._posEmailStart>0&&t>=this._posEmailStart&&t<=this._posEmailEnd&&(i="email"),"email"!==i&&"nextup"!==i&&this._scrollingUp&&this._scrollAmount>=100&&(i="strip"),this._contentState=i}},Es([X(),Fs("design:type",String)],e.SlickBanner.prototype,"_state",void 0),Es([X(),Fs("design:type",String)],e.SlickBanner.prototype,"_contentState",void 0),Es([X(),Fs("design:type",Object)],e.SlickBanner.prototype,"_results",void 0),Es([ee("#searchInput"),Fs("design:type",HTMLInputElement)],e.SlickBanner.prototype,"_searchInput",void 0),Es([ee("#menu"),Fs("design:type",HTMLElement)],e.SlickBanner.prototype,"_menu",void 0),Es([ee("#searchPanel"),Fs("design:type",HTMLElement)],e.SlickBanner.prototype,"_searchPanel",void 0),e.SlickBanner=Es([Z("slick-banner")],e.SlickBanner),Object.defineProperty(e,"__esModule",{value:!0}),e}({});

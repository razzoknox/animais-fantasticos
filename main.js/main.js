(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,i){var o=e&&e.prototype instanceof y?e:y,r=Object.create(o.prototype),a=new S(i||[]);return r._invoke=function(t,e,n){var i=h;return function(o,r){if(i===v)throw new Error("Generator is already running");if(i===d){if("throw"===o)throw r;return A()}for(n.method=o,n.arg=r;;){var a=n.delegate;if(a){var s=T(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var c=l(t,e,n);if("normal"===c.type){if(i=n.done?d:f,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=d,n.method="throw",n.arg=c.arg)}}}(t,n,a),r}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",v="executing",d="completed",p={};function y(){}function m(){}function g(){}var w={};w[r]=function(){return this};var b=Object.getPrototypeOf,L=b&&b(b(D([])));L&&L!==n&&i.call(L,r)&&(w=L);var k=g.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function n(o,r,a,s){var c=l(t[o],t,r);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,i){function r(){return new e((function(e,o){n(t,i,e,o)}))}return o=o?o.then(r,r):r()}}function T(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var r=o.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function D(t){if(t){var n=t[r];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(i.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=k.constructor=g,g.constructor=m,m.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(M.prototype),M.prototype[a]=function(){return this},t.AsyncIterator=M,t.async=function(e,n,i,o,r){void 0===r&&(r=Promise);var a=new M(u(e,n,i,o),r);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),c(k,s,"Generator"),k[r]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=D,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(i,o){return s.type="throw",s.arg=t,n.next=i,o&&(n.method="next",n.arg=e),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:D(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}var o=function(){function e(n,i){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===i?{behavior:"smooth",block:"start"}:i,this.scrollToSection=this.scrollToSection.bind(this)}return i(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.lenght&&this.addLinkEvent(),this}}]),e}(),r=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return i(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.addAccordionEvent(),this.toggleAccordion(this.accordionList[0])),this}}]),e}(),a=function(){function e(n,i){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(i),this.activeClass="ativo"}return i(e,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)})),this.tabContent[t].classList.add(this.activeClass)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),s=function(){function e(n,i,o){t(this,e),this.openButton=document.querySelector(n),this.closeButton=document.querySelector(i),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOut=this.clickOut.bind(this)}return i(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOut",value:function(t){t.target===this.containerModal&&this.toggleModal(t)}},{key:"addModalEvent",value:function(){this.openButton.addEventListener("click",this.eventToggleModal),this.closeButton.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickOut)}},{key:"init",value:function(){return this.openButton&&this.closeButton&&this.containerModal&&this.addModalEvent(),this}}]),e}(),c=function(){function e(n){t(this,e),this.toolTips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return i(e,[{key:"onMouseMove",value:function(t){this.toolTipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.toolTipBox.style.left="".concat(t.pageX-200,"px"):this.toolTipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){this.toolTipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}},{key:"createToolTip",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("toolTip"),e.innerText=n,document.body.appendChild(e),this.toolTipBox=e}},{key:"onMouseOver",value:function(t){this.createToolTip(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addToolTipsEvents",value:function(){var t=this;this.toolTips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.toolTips.length&&this.addToolTipsEvents(),this}}]),e}();function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var l=function(){function e(n){var i,o;t(this,e),this.sections=document.querySelectorAll(n),this.halfWindow=.6*window.innerHeight,this.checkDistance=(i=this.checkDistance.bind(this),100,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];o&&clearTimeout(o),o=setTimeout((function(){i.apply(void 0,e),o=null}),100)})}return i(e,[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n)-e.halfWindow}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}();function h(t,e,n){var i=document.documentElement,o="data-outside";function r(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){i.removeEventListener(t,r)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){i.addEventListener(t,r)}))})),t.setAttribute(o,""))}var f=function(){function e(n,i){t(this,e),this.dropDownMenus=document.querySelectorAll(n),this.eventsList=void 0===i?["touchstart","click"]:i,this.activeClass="ativo",this.activeDropDownMenu=this.activeDropDownMenu.bind(this)}return i(e,[{key:"activeDropDownMenu",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),h(n,this.eventsList,(function(){n.classList.remove(e.activeClass)}))}},{key:"addDropDownEvent",value:function(){var t=this;this.dropDownMenus.forEach((function(e){t.eventsList.forEach((function(n){e.addEventListener(n,t.activeDropDownMenu)}))}))}},{key:"init",value:function(){return this.dropDownMenus.length&&this.addDropDownEvent(),this}}]),e}(),v=function(){function e(n,i,o){t(this,e),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(i),this.eventsList=void 0===o?["touchstart","click"]:o,this.activeClass="ativo",this.openMenu=this.openMenu.bind(this)}return i(e,[{key:"openMenu",value:function(){var t=this;this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),h(this.menuList,this.eventsList,(function(){t.menuList.classList.remove(t.activeClass),t.menuButton.classList.remove(t.activeClass)}))}},{key:"addMenuMobileEvents",value:function(){var t=this;this.eventsList.forEach((function(e){t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}]),e}(),d=function(){function e(n){t(this,e),this.works=document.querySelector(n),this.activeClass="aberto"}return i(e,[{key:"worksData",value:function(){this.daysWeek=this.works.dataset.semana.split(",").map(Number),this.hoursWeek=this.works.dataset.hora.split(",").map(Number)}},{key:"currentData",value:function(){this.dateNow=new Date,this.daysNow=this.dateNow.getDay(),this.hoursNow=this.dateNow.getUTCHours()-3}},{key:"isOpen",value:function(){var t=-1!==this.daysWeek.indexOf(this.daysNow),e=this.hoursNow>=this.hoursWeek[0]&&this.hoursNow<this.hoursWeek[1];return t&&e}},{key:"activeOpenClass",value:function(){this.isOpen()&&this.works.classList.add(this.activeClass)}},{key:"init",value:function(){return this.works&&(this.worksData(),this.currentData(),this.activeOpenClass()),this}}]),e}();function p(t,e,n,i,o,r,a){try{var s=t[r](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){p(r,i,o,a,s,"next",t)}function s(t){p(r,i,o,a,s,"throw",t)}a(void 0)}))}}var m,g=n(757),w=n.n(g),b=function(){function e(n,i,o){t(this,e),this.numbers=document.querySelectorAll(n),this.observeTarget=document.querySelector(i),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}return i(e,[{key:"numberAnimation",value:function(){var t=this;this.numbers.forEach((function(e){t.constructor.incNumber(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.numberAnimation())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observeTarget,{attributes:!0})}},{key:"init",value:function(){return this.numbers.length&&this.observeTarget&&this.addMutationObserver(),this}}],[{key:"incNumber",value:function(t){var e=+t.innerText,n=Math.floor(e/200),i=0,o=setInterval((function(){i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}}]),e}();new o('[data-menu="suave"] a[href^="#"]',{behavior:"smooth",block:"start"}).init(),new r('[data-anime="accordion"] dt').init(),new a('[data-tab="menu"] li','[data-tab="content"] section').init(),new s('[data-modal="abrir"]','[data-modal="fechar"]',".modal-container").init(),new c("[data-tooltip]").init(),new l('[data-anime="scroll"]').init(),new f("[data-dropdown]").init(),new v('[data-menu="button"]','[data-menu="list"]').init(),new d("[data-semana]").init(),(m=document.querySelectorAll(".animais-descricao section")).forEach((function(t,e){[e]%2==0?t.classList.add(t.dataset.anime="show-down"):t.classList.add(t.dataset.anime="show-right")})),m.forEach((function(t){"show-down"===t.dataset.anime?t.classList.add("show-down"):"show-right"===t.dataset.anime?t.classList.add("show-right"):console.log("Nenhuma classe foi definida.")})),function(t,e){var n=document.querySelector(".numeros-grid");function i(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function o(){new b("[data-numero]",".numeros","ativo").init()}function r(){return(r=y(w().mark((function e(){var n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.forEach((function(t){i(t)})),o(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(Error(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}("./data/animalsapi.json"),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((function(t){console.log(Error(t))}))})()})();
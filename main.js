(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,i){var o=e&&e.prototype instanceof y?e:y,r=Object.create(o.prototype),s=new C(i||[]);return r._invoke=function(t,e,n){var i=h;return function(o,r){if(i===v)throw new Error("Generator is already running");if(i===f){if("throw"===o)throw r;return A()}for(n.method=o,n.arg=r;;){var s=n.delegate;if(s){var a=S(s,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var c=l(t,e,n);if("normal"===c.type){if(i=n.done?f:d,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=f,n.method="throw",n.arg=c.arg)}}}(t,n,s),r}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",v="executing",f="completed",p={};function y(){}function m(){}function g(){}var w={};w[r]=function(){return this};var b=Object.getPrototypeOf,E=b&&b(b(O([])));E&&E!==n&&i.call(E,r)&&(w=E);var k=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,r,s,a){var c=l(t[o],t,r);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var o;this._invoke=function(t,i){function r(){return new e((function(e,o){n(t,i,e,o)}))}return o=o?o.then(r,r):r()}}function S(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var r=o.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function O(t){if(t){var n=t[r];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function n(){for(;++o<t.length;)if(i.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=k.constructor=g,g.constructor=m,m.displayName=c(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,a,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},L(x.prototype),x.prototype[s]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,i,o,r){void 0===r&&(r=Promise);var s=new x(u(e,n,i,o),r);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},L(k),c(k,a,"Generator"),k[r]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=O,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(i,o){return a.type="throw",a.arg=t,n.next=i,o&&(n.method="next",n.arg=e),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=i.call(s,"catchLoc"),u=i.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:O(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}var o=function(){function e(n,i){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===i?{behavior:"smooth",block:"start"}:i,this.scrollToSection=this.scrollToSection.bind(this)}return i(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.lenght&&this.addLinkEvent(),this}}]),e}(),r=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return i(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.addAccordionEvent(),this.toggleAccordion(this.accordionList[0])),this}}]),e}(),s=function(){function e(n,i){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(i),this.activeClass="ativo"}return i(e,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)})),this.tabContent[t].classList.add(this.activeClass)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),a=function(){function e(n,i,o){t(this,e),this.openButton=document.querySelector(n),this.closeButton=document.querySelector(i),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOut=this.clickOut.bind(this)}return i(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOut",value:function(t){t.target===this.containerModal&&this.toggleModal(t)}},{key:"addModalEvent",value:function(){this.openButton.addEventListener("click",this.eventToggleModal),this.closeButton.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickOut)}},{key:"init",value:function(){return this.openButton&&this.closeButton&&this.containerModal&&this.addModalEvent(),this}}]),e}(),c=function(){function e(n){t(this,e),this.toolTips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return i(e,[{key:"onMouseMove",value:function(t){this.toolTipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.toolTipBox.style.left="".concat(t.pageX-200,"px"):this.toolTipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){this.toolTipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}},{key:"createToolTip",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("toolTip"),e.innerText=n,document.body.appendChild(e),this.toolTipBox=e}},{key:"onMouseOver",value:function(t){this.createToolTip(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addToolTipsEvents",value:function(){var t=this;this.toolTips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.toolTips.length&&this.addToolTipsEvents(),this}}]),e}();function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){var n;return function(){for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,o),n=null}),e)}}var d=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.halfWindow=.6*window.innerHeight,this.checkDistance=h(this.checkDistance.bind(this),100)}return i(e,[{key:"getDistance",value:function(){var t=this;this.distance=l(this.sections).map((function(e){var n=e.offsetTop;return{element:e,offset:Math.floor(n)-t.halfWindow}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}();function v(t,e,n){var i=document.documentElement,o="data-outside";function r(s){t.contains(s.target)||(t.removeAttribute(o),e.forEach((function(t){i.removeEventListener(t,r)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){i.addEventListener(t,r)}))})),t.setAttribute(o,""))}var f=function(){function e(n,i){t(this,e),this.dropDownMenus=document.querySelectorAll(n),this.eventsList=void 0===i?["touchstart","click"]:i,this.activeClass="ativo",this.activeDropDownMenu=this.activeDropDownMenu.bind(this)}return i(e,[{key:"activeDropDownMenu",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),v(n,this.eventsList,(function(){n.classList.remove(e.activeClass)}))}},{key:"addDropDownEvent",value:function(){var t=this;this.dropDownMenus.forEach((function(e){t.eventsList.forEach((function(n){e.addEventListener(n,t.activeDropDownMenu)}))}))}},{key:"init",value:function(){return this.dropDownMenus.length&&this.addDropDownEvent(),this}}]),e}(),p=function(){function e(n,i,o){t(this,e),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(i),this.eventsList=void 0===o?["touchstart","click"]:o,this.activeClass="ativo",this.openMenu=this.openMenu.bind(this)}return i(e,[{key:"openMenu",value:function(){var t=this;this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),v(this.menuList,this.eventsList,(function(){t.menuList.classList.remove(t.activeClass),t.menuButton.classList.remove(t.activeClass)}))}},{key:"addMenuMobileEvents",value:function(){var t=this;this.eventsList.forEach((function(e){t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}]),e}(),y=function(){function e(n){t(this,e),this.works=document.querySelector(n),this.activeClass="aberto"}return i(e,[{key:"worksData",value:function(){this.daysWeek=this.works.dataset.semana.split(",").map(Number),this.hoursWeek=this.works.dataset.hora.split(",").map(Number)}},{key:"currentData",value:function(){this.dateNow=new Date,this.daysNow=this.dateNow.getDay(),this.hoursNow=this.dateNow.getUTCHours()-3}},{key:"isOpen",value:function(){var t=-1!==this.daysWeek.indexOf(this.daysNow),e=this.hoursNow>=this.hoursWeek[0]&&this.hoursNow<this.hoursWeek[1];return t&&e}},{key:"activeOpenClass",value:function(){this.isOpen()&&this.works.classList.add(this.activeClass)}},{key:"init",value:function(){return this.works&&(this.worksData(),this.currentData(),this.activeOpenClass()),this}}]),e}();function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var E=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(s,e);var n,o,r=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(n);if(o){var i=b(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return w(this,t)});function s(){return t(this,s),r.apply(this,arguments)}return i(s,[{key:"addArrow",value:function(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvents()}},{key:"addArrowEvents",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}},{key:"createControl",value:function(){var t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach((function(e,n){t.innerHTML+='<li><a href="#slide'.concat(n+1,'">').concat(n+1,"</a></li>")})),this.wrapper.appendChild(t),t}},{key:"eventControl",value:function(t,e){var n=this;t.addEventListener("click",(function(t){t.preventDefault(),n.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}},{key:"addControlEvents",value:function(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=l(this.control.children),this.activeControlItem(),this.controlArray.forEach(this.eventControl)}},{key:"activeControlItem",value:function(){var t=this;this.controlArray.forEach((function(e){return e.classList.remove(t.activeClass)})),this.controlArray[this.index.active].classList.add(this.activeClass)}}]),s}(function(){function e(n,i){t(this,e),this.slide=document.querySelector(n),this.wrapper=document.querySelector(i),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent"),this.onStart=this.onStart.bind(this),this.onEnd=this.onEnd.bind(this),this.onMove=this.onMove.bind(this),this.onResize=h(this.onResize.bind(this),200),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}return i(e,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .5s":""}},{key:"updatePosition",value:function(t){return this.dist.movement=1.575*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1),this.slide.style.cursor="grabbing"}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchmove";this.dist.finalPosition=this.dist.movePosition,this.wrapper.removeEventListener(e,this.onMove),this.transition(!0),this.changeSlideOnEnd(),this.slide.style.cursor="grab"}},{key:"changeSlideOnEnd",value:function(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"onMove",value:function(t){var e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,n=this.updatePosition(e);this.moveSlide(n)}},{key:"moveSlide",value:function(t){this.dist.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0)")}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=l(this.slide.children).map((function(e){return{position:t.slidePosition(e),element:e}}))}},{key:"slideIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}},{key:"changeSlide",value:function(t){var e=this.slideArray[t];this.moveSlide(e.position),this.slideIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"changeActiveClass",value:function(){var t=this;this.slideArray.forEach((function(e){return e.element.classList.remove(t.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){var t=this;setTimeout((function(){t.slidesConfig(),t.changeSlide(t.index.active)}),1500)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"init",value:function(){return this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.addResizeEvent(),this.changeSlide(0),this}}]),e}());function k(t,e,n,i,o,r,s){try{var a=t[r](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(i,o)}function L(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function s(t){k(r,i,o,s,a,"next",t)}function a(t){k(r,i,o,s,a,"throw",t)}s(void 0)}))}}var x,S=n(757),M=n.n(S),T=function(){function e(n,i,o){t(this,e),this.numbers=document.querySelectorAll(n),this.observeTarget=document.querySelector(i),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}return i(e,[{key:"numberAnimation",value:function(){var t=this;this.numbers.forEach((function(e){t.constructor.incNumber(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.numberAnimation())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observeTarget,{attributes:!0})}},{key:"init",value:function(){return this.numbers.length&&this.observeTarget&&this.addMutationObserver(),this}}],[{key:"incNumber",value:function(t){var e=+t.innerText,n=Math.floor(e/200),i=0,o=setInterval((function(){i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}}]),e}();new o('[data-menu="suave"] a[href^="#"]',{behavior:"smooth",block:"start"}).init(),new r('[data-anime="accordion"] dt').init(),new s('[data-tab="menu"] li','[data-tab="content"] section').init(),new a('[data-modal="abrir"]','[data-modal="fechar"]',".modal-container").init(),new c("[data-tooltip]").init(),new d('[data-anime="scroll"]').init(),new f("[data-dropdown]").init(),new p('[data-menu="button"]','[data-menu="list"]').init(),new y("[data-semana]").init(),(x=document.querySelectorAll(".animais-descricao section")).forEach((function(t,e){[e]%2==0?t.classList.add(t.dataset.anime="show-down"):t.classList.add(t.dataset.anime="show-right")})),x.forEach((function(t){"show-down"===t.dataset.anime?t.classList.add("show-down"):"show-right"===t.dataset.anime?t.classList.add("show-right"):console.log("Nenhuma classe foi definida.")})),function(t,e){var n=document.querySelector(".numeros-grid");function i(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function o(){new T("[data-numero]",".numeros","ativo").init()}function r(){return(r=L(M().mark((function e(){var n;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.forEach((function(t){i(t)})),o(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(Error(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}("./data/animalsapi.json"),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((function(t){console.log(Error(t))}));var C=new E(".slide",".slideWrapper");C.init(),C.addControlEvents(".customControl")})()})();
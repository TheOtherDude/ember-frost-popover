"use strict";define("dummy/app",["exports","ember","ember-load-initializers","dummy/config/environment","dummy/resolver"],function(e,t,n,r,o){var l=t.default.Application,s=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,s=l.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:o.default}),(0,n.default)(s,r.default.modulePrefix),e.default=s}),define("dummy/components/from-elsewhere",["exports","ember-elsewhere/components/from-elsewhere"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-button",["exports","ember-frost-core/components/frost-button"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-checkbox",["exports","ember-frost-core/components/frost-checkbox"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-combobox",["exports","ember-frost-core/components/frost-combobox"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-icon",["exports","ember-frost-core/components/frost-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-link",["exports","ember-frost-core/components/frost-link"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-loading",["exports","ember-frost-core/components/frost-loading"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-multi-select",["exports","ember-frost-core/components/frost-multi-select"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-password",["exports","ember-frost-core/components/frost-password"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-popover",["exports","ember-frost-popover/components/frost-popover"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-radio-button",["exports","ember-frost-core/components/frost-radio-button"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-radio-group",["exports","ember-frost-core/components/frost-radio-group"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-scroll",["exports","ember-frost-core/components/frost-scroll"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-select-dropdown",["exports","ember-frost-core/components/frost-select-dropdown"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-select-li",["exports","ember-frost-core/components/frost-select-li"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-select-outlet",["exports","ember-frost-core/components/frost-select-outlet"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-select",["exports","ember-frost-core/components/frost-select"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-text",["exports","ember-frost-core/components/frost-text"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-textarea",["exports","ember-frost-core/components/frost-textarea"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-toggle",["exports","ember-frost-core/components/frost-toggle"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/hookable-input",["exports","ember-frost-core/components/hookable-input"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/hookable-textarea",["exports","ember-frost-core/components/hookable-textarea"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/notification-container",["exports","ember-cli-notifications/components/notification-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/notification-message",["exports","ember-cli-notifications/components/notification-message","dummy/config/environment"],function(e,t,n){var r=n.default["ember-cli-notifications"]||{};e.default=t.default.extend({icons:r.icons||"font-awesome"})}),define("dummy/components/to-elsewhere",["exports","ember-elsewhere/components/to-elsewhere"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.andHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.andHelper)),e.default=r}),define("dummy/helpers/array",["exports","ember-frost-core/helpers/array"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"array",{enumerable:!0,get:function(){return t.array}})}),define("dummy/helpers/cancel-all",["exports","ember","ember-concurrency/-helpers"],function(e,t,n){function r(e){var r=e[0];return r&&"function"==typeof r.cancelAll||t.default.assert("The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed "+r,!1),(0,n.taskHelperClosure)("cancelAll",e)}e.cancelHelper=r,e.default=t.default.Helper.helper(r)}),define("dummy/helpers/ehook",["exports","ember-frost-core/helpers/ehook"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"ehook",{enumerable:!0,get:function(){return t.ehook}})}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.equalHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.equalHelper)),e.default=r}),define("dummy/helpers/extend",["exports","ember-frost-core/helpers/extend"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"extend",{enumerable:!0,get:function(){return t.extend}})}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.gtHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.gtHelper)),e.default=r}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.gteHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.gteHelper)),e.default=r}),define("dummy/helpers/hook",["exports","ember-hook/helpers/hook"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"hook",{enumerable:!0,get:function(){return t.hook}})}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.isArrayHelper)),e.default=r}),define("dummy/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("dummy/helpers/local-class",["exports","ember-css-modules/helpers/local-class"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"localClass",{enumerable:!0,get:function(){return t.localClass}})}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.ltHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.ltHelper)),e.default=r}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.lteHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.lteHelper)),e.default=r}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.notEqualHelper)),e.default=r}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.notHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.notHelper)),e.default=r}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.orHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.orHelper)),e.default=r}),define("dummy/helpers/perform",["exports","ember","ember-concurrency/-helpers"],function(e,t,n){function r(e,t){return(0,n.taskHelperClosure)("perform",e,t)}e.performHelper=r,e.default=t.default.Helper.helper(r)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/helpers/task",["exports","ember"],function(e,t){function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){return Array.isArray(e)?e:Array.from(e)}function o(e){var t=r(e),o=t[0],l=t.slice(1);return o._curry.apply(o,n(l))}e.default=t.default.Helper.helper(o)}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.xorHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.xorHelper)),e.default=r}),define("dummy/initializers/component-prop-types",["exports","ember-prop-types/initializers/component-prop-types"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-cli-mirage",["exports","ember-cli-mirage/utils/read-modules","dummy/config/environment","dummy/mirage/config","ember-cli-mirage/server","lodash/object/assign"],function(e,t,n,r,o,l){function s(){var e=arguments.length<=0||void 0===arguments[0]?n.default:arguments[0],s=e.environment,i=(0,t.default)(e.modulePrefix),a=(0,l.default)(i,{environment:s,baseConfig:r.default,testConfig:r.testConfig});return new o.default(a)}function i(e,t){var n="undefined"!=typeof t.enabled,r=a(e,t);return n?t.enabled:r}function a(e,t){var n="development"===e&&!t.usingProxy,r="test"===e;return n||r}e.startMirage=s,e.default={name:"ember-cli-mirage",initialize:function(e){if(arguments.length>1){arguments[0],arguments[1]}i(n.default.environment,n.default["ember-cli-mirage"])&&s(n.default)}}}),define("dummy/initializers/ember-concurrency",["exports","ember-concurrency"],function(e,t){e.default={name:"ember-concurrency",initialize:function(){}}}),define("dummy/initializers/ember-css-modules",["exports","ember-css-modules/initializers/ember-css-modules"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/ember-hook/initialize",["exports","ember-hook/initializers/ember-hook/initialize"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var r;if("undefined"!=typeof window)r=window;else if("undefined"!=typeof global)r=global;else{if("undefined"==typeof self)return;r=self}var o,l=n.default.exportApplicationGlobal;o="string"==typeof l?l:t.default.String.classify(n.default.modulePrefix),r[o]||(r[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[o]}}))}}e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("dummy/initializers/notifications",["exports","ember","ember-cli-notifications/services/notification-messages-service"],function(e,t,n){e.default={name:"notification-messages-service",initialize:function(){var e=arguments[1]||arguments[0];return t.default.Service?(e.register("service:notification-messages",n.default),e.inject("component:notification-container","notifications","service:notification-messages"),void e.inject("component:notification-message","notifications","service:notification-messages")):(e.register("notification-messages:service",n.default),void["controller","component","route","router","service"].forEach(function(t){e.inject(t,"notifications","notification-messages:service")}))}}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,n,r,o,l,s,i,a,u,f,m,p){function c(){t.default.Helper||((0,n.registerHelper)("and",r.andHelper),(0,n.registerHelper)("or",o.orHelper),(0,n.registerHelper)("eq",l.equalHelper),(0,n.registerHelper)("not",s.notHelper),(0,n.registerHelper)("is-array",i.isArrayHelper),(0,n.registerHelper)("not-eq",a.notEqualHelper),(0,n.registerHelper)("gt",u.gtHelper),(0,n.registerHelper)("gte",f.gteHelper),(0,n.registerHelper)("lt",m.ltHelper),(0,n.registerHelper)("lte",p.lteHelper))}e.initialize=c,e.default={name:"truth-helpers",initialize:c}}),define("dummy/instance-initializers/svg-use-polyfill",["exports","ember-frost-core/instance-initializers/svg-use-polyfill"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/mirage-models/link",["exports","ember-frost-core/mirage-models/link"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/mirage/config",["exports"],function(e){e.default=function(){this.passthrough()}}),define("dummy/mirage/factories/contact",["exports","ember-cli-mirage"],function(e,t){e.default=t.default.Factory.extend({})}),define("dummy/mirage/scenarios/default",["exports"],function(e){e.default=function(){}}),define("dummy/pods/application/controller",["exports","ember"],function(e,t){var n=t.default.Controller;e.default=n.extend({})}),define("dummy/pods/application/route",["exports","ember"],function(e,t){var n=t.default.Route;e.default=n.extend({})}),define("dummy/pods/application/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"pmP8fgO2",block:'{"statements":[["open-element","div",[]],["static-attr","class","dummy-notification-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["notifications"]]],null,0],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","dummy-body"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","dummy-content"],["flush-element"],["text","\\n    "],["append",["unknown",["outlet"]],false],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["append",["helper",["notification-message"],null,[["notification"],[["get",["notification"]]]]],false],["text","\\n"]],"locals":["notification"]}],"hasPartials":false}',meta:{moduleName:"dummy/pods/application/template.hbs"}})}),define("dummy/pods/demo/controller",["exports","ember"],function(e,t){var n=t.default.Controller;e.default=n.extend({})}),define("dummy/pods/demo/route",["exports","ember"],function(e,t){var n=t.default.Route;e.default=n.extend({})}),define("dummy/pods/demo/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"NXF05emq",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","DOM Placements"],["close-element"],["text","\\n\\n"],["append",["helper",["frost-button"],null,[["hook","size","priority","class","text"],["siblingTooltipButton","small","primary","sibling","Sibling Tooltip"]]],false],["text","\\n"],["block",["frost-popover"],null,[["target"],[".sibling"]],27],["text","\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["childTooltipButton","small","primary","child","Child Tooltip"]],26],["text","\\n"],["open-element","h2",[]],["flush-element"],["text","Positions"],["close-element"],["text","\\n\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["topButton","small","primary","button-top","Top"]],24],["text","\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["rightButton","small","primary","button-right","Right"]],22],["text","\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["bottomButton","small","primary","button-bottom","Bottom"]],20],["text","\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["leftButton","small","primary","button-left","Left"]],18],["text","\\n"],["open-element","p",[]],["flush-element"],["close-element"],["text","\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["autoButton","small","primary","button-auto","Auto"]],16],["text","\\n"],["open-element","h2",[]],["flush-element"],["text","Activating Event"],["close-element"],["text","\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["mouseEnterButton","small","primary","event-mouse","Mouseenter"]],14],["text","\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["clickButton","small","primary","event-click","Click"]],12],["text","\\n"],["open-element","h2",[]],["flush-element"],["text","Other Features"],["close-element"],["text","\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["customCloseButton","small","primary","button","Custom Close"]],10],["open-element","br",[]],["flush-element"],["close-element"],["text","\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["resizeEnabledButton","small","primary","resize-on","Resize Enabled"]],7],["open-element","br",[]],["flush-element"],["close-element"],["text","\\n"],["block",["frost-button"],null,[["hook","size","priority","class","text"],["resizeDisabledButton","small","primary","resize-off","Resize Disabled"]],5],["text","\\n"],["open-element","h2",[]],["flush-element"],["text","Viewport"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","viewport"],["flush-element"],["text","\\n  "],["append",["helper",["frost-button"],null,[["hook","size","priority","class","text"],["leftButton","small","primary","viewport-left","Left"]]],false],["text","\\n"],["block",["frost-popover"],null,[["target","viewport"],[".viewport-left",".viewport"]],3],["text","\\n  "],["append",["helper",["frost-button"],null,[["hook","size","priority","class","text"],["rightButton","small","primary","viewport-right","Right"]]],false],["text","\\n"],["block",["frost-popover"],null,[["target","viewport","position"],[".viewport-right",".viewport","top"]],2],["text","\\n  "],["append",["helper",["frost-button"],null,[["hook","size","priority","class","text"],["topButton","small","primary","viewport-top","Top"]]],false],["text","\\n"],["block",["frost-popover"],null,[["target","viewport","position"],[".viewport-top",".viewport","left"]],1],["text","\\n  "],["append",["helper",["frost-button"],null,[["hook","size","priority","class","text"],["bottomButton","small","primary","viewport-bottom","Bottom"]]],false],["text","\\n"],["block",["frost-popover"],null,[["target","viewport","position"],[".viewport-bottom",".viewport","right"]],0],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Horizontal position allows veritcal shift"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Horizontal position allows vertical shift"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Vertical position allows horizontal shift"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Vertical position allows horizontal shift"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Extra long content that would require resizing to be visible"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["frost-popover"],null,[["target","closest","resize","position"],[".resize-off",true,false,"left"]],4]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Extra long content that would require resizing to be visible"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["frost-popover"],null,[["target","closest","resize","position"],[".resize-on",true,true,"left"]],6]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","text"],["flush-element"],["text","Close"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    This popover is yielding with a provided close action\\n"],["block",["frost-button"],null,[["hook","size","priority","onClick"],["closeButton","small","tertiary",["helper",["action"],[["get",[null]],["get",["close"]]],null]]],8]],"locals":["close"]},{"statements":[["block",["frost-popover"],null,[["target","closest","offset","position"],[".button",true,10,"bottom"]],9]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","tooltip is toggled on click"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["frost-popover"],null,[["target","closest","event"],[".event-click",true,"click"]],11]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Tooltip is toggled on mouse enter and mouse leave"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["frost-popover"],null,[["target","closest","event"],[".event-mouse",true,"mouseenter mouseleave"]],13]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","This tooltip wants to be on the left, but sadly can\'t"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["frost-popover"],null,[["target","closest","position"],[".button-auto",true,"auto left"]],15]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Tooltip is showing to the left of the target"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["frost-popover"],null,[["target","closest","position"],[".button-left",true,"left"]],17]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Tooltip is showing below the target"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["frost-popover"],null,[["target","closest","position"],[".button-bottom",true,"bottom"]],19]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Tooltip is showing to the right of the target"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["frost-popover"],null,[["target","closest","position"],[".button-right",true,"right"]],21]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","Tooltip is showing above the target"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["frost-popover"],null,[["target","closest","position"],[".button-top",true,"top"]],23]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","This tooltip was inside"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["frost-popover"],null,[["target","excludePadding","closest"],[".child",true,true]],25]],"locals":[]},{"statements":[["text","  "],["open-element","span",[]],["static-attr","class","inside"],["flush-element"],["text","This tooltip was alongside the target"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/pods/demo/template.hbs"}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var r=t.default.Router,o=r.extend({location:n.default.locationType,rootURL:n.default.rootURL});o.map(function(){this.route("demo",{path:"/"})}),e.default=o}),define("dummy/services/ember-elsewhere",["exports","ember-elsewhere/services/ember-elsewhere"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/notification-messages-service",["exports","ember-cli-notifications/services/notification-messages-service"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/frost-popover",["exports","ember-frost-popover/templates/frost-popover"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions",["exports"],function(e){e.default=function(){}}),define("dummy/utils/key-codes",["exports","ember-frost-core/utils"],function(e,t){Object.defineProperty(e,"keyCodes",{enumerable:!0,get:function(){return t.keyCodes}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),o=JSON.parse(unescape(r)),l={default:o};return Object.defineProperty(l,"__esModule",{value:!0}),l}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({});
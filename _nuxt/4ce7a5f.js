(window.webpackJsonp=window.webpackJsonp||[]).push([[3,15],{534:function(t,n,e){"use strict";e.d(n,"b",(function(){return P}));e(5),e(7),e(4),e(8),e(19),e(60),e(40),e(12),e(59),e(64),e(43);var r=e(0),o=e(31),c=e(32),l=(e(1),e(3),e(63),e(93),e(16),e(6),e(21),e(2)),f=e.n(l);function d(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return m(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw o}}}}function m(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}function h(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var y=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(o.a)(this,t),this.promos=[],this.promoMap={},this.empty=!0,this.promos=n,void 0!==n&&n.length>0&&(this.empty=!1,this.promoMap=n.reduce((function(t,n){return t[n.id]=v(v({},n),{},{bundle:"bundle"===n.type}),t}),{}))}return Object(c.a)(t,[{key:"getActivePromos",value:function(){var t=f()();return this.promos.filter((function(n){var e=f()(n["start-date"]),r=f()(n["end-date"]);return e.isBefore(t)&&r.isAfter(t)}))}},{key:"getProductActivePromos",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.toPromoIdList();if(e&&e.length>0){var r=n.filter((function(t){return e.includes(t.id)}));if(r.length>0)return r.map((function(n){return v(v({},t.promoMap[n.id]),{},{productPrice:n.price})}))}return[]}},{key:"toPromoIdList",value:function(){return this.promos.map((function(t){return t.id}))}},{key:"isEmpty",value:function(){return this.empty}}]),t}(),k=function t(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,o=!1,c=d(e);try{for(c.s();!(n=c.n()).done;){var l=n.value;if(o=(l.promos||[]).filter((function(t){return t.id===r})).length>0)return!0;o=t(l.options,r)}}catch(t){c.e(t)}finally{c.f()}return o},S=function(t,n){return t.filter((function(t){return function(t){return void 0!==t.variations&&null!==t.variations&&Object.keys(t.variations).length>0}(t)?k(t.variations.options,n):(t.promos||[]).filter((function(t){return t.id===n})).length>0}))},O=function(t,n){var e,r=d(n);try{for(r.s();!(e=r.n()).done;){var o=e.value;if(t===o.id)return o.name}}catch(t){r.e(t)}finally{r.f()}return""},P=function(t,n,e){return{name:t.name,startDate:f()(t["start-date"]).format("YYYY-MM-DD HH:mm:ss"),endDate:f()(t["end-date"]).format("YYYY-MM-DD HH:mm:ss"),products:S(n,t.id),shop:O(t.shop,e)}};n.a=function(t){var n=new y;return void 0===t?n:new y(t)}},535:function(t,n,e){"use strict";e(19),e(60),e(40),e(12),e(5),e(59),e(64),e(43);var r=e(0),o=e(31),c=e(32),l=(e(21),e(1),e(4),e(410),e(37),e(14),e(3),e(16),e(6),e(534));function f(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw o}}}}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var m=function(){function t(){Object(o.a)(this,t),this.minName="",this.maxName="",this.promosFound=!1}return Object(c.a)(t,[{key:"withPromoListWrapper",value:function(n){var e=new t;return e.min=this.min,e.max=this.max,e.minName=this.minName,e.maxName=this.maxName,e.promoListWrapper=Object(l.a)(n),e.promosFound=this.promosFound,e}},{key:"hasRange",value:function(){return this.min!==this.max}},{key:"toArray",value:function(){return[this.min,this.max]}}]),t}(),h=function(){function t(){Object(o.a)(this,t),this.name="",this.stock={},this["actual-stock"]=0,this.sold={},this.floating={},this.count=0,this.empty=!0,this.mergeStats=this.mergeStats.bind(this),this.evaluatePriceRange=this.evaluatePriceRange.bind(this),this.evaluatePromoPriceRange=this.evaluatePromoPriceRange.bind(this),this.traverseUniqueVariant=this.traverseUniqueVariant.bind(this)}return Object(c.a)(t,[{key:"getUniqueVariations",value:function(){var t=this.traverseUniqueVariant(this,"",{}),n=[];return Object.entries(t).forEach((function(t){1===t[1].count&&n.push(t[1])})),n}},{key:"traverseUniqueVariant",value:function(n,e,r){var o,c=this;if(void 0!==n.price&&n.price>0){var l=t.mapVariation(n);return l.name=e,l.count=l.count+1,r[e]=l,r}var f=r;return null===(o=n.options)||void 0===o||o.forEach((function(option){f=c.traverseUniqueVariant(option,"".concat(option.name," ").concat(e).trim(),f)})),f}},{key:"getPromoPriceRange",value:function(t){return this.traverseAndAccumulate(this,this.getPriceRange().withPromoListWrapper(t),this.evaluatePromoPriceRange)}},{key:"evaluatePromoPriceRange",value:function(t,n){if(void 0!==n.price&&void 0!==n.promos&&void 0!==t.promoListWrapper){var e=t.promoListWrapper.getProductActivePromos(n.promos);if(e.length>0){t.promosFound=!0;var r=e[0];(void 0===t.min||r.productPrice<t.min)&&(t.min=r.productPrice,t.minName=n.name),void 0!==t.max&&t.maxName!==n.name||(t.max=r.productPrice,t.maxName=n.name)}}return t}},{key:"getPriceRange",value:function(){return this.traverseAndAccumulate(this,new m,this.evaluatePriceRange)}},{key:"evaluatePriceRange",value:function(t,n){return void 0!==n.price&&((void 0===t.min||n.price<t.min)&&(t.min=n.price,t.minName=n.name),(void 0===t.max||n.price>t.max)&&(t.max=n.price,t.maxName=n.name)),t}},{key:"getOverallStats",value:function(){return this.traverseAndAccumulate(this,{},this.mergeStats)}},{key:"mergeStats",value:function(t,n){var e=this.copyHash(t);e=this.addStatsToField(n.stock,e,"stock"),e=this.addStatsToField(n.sold,e,"sold"),e=this.addStatsToField(n.floating,e,"floating");var r={lazada:n["actual-stock"]};return e=this.addStatsToField(r,e,"actual-stock")}},{key:"traverseAndAccumulate",value:function(t,n,e){var r,o=this,c=e(n,t);return null===(r=t.options)||void 0===r||r.forEach((function(option){c=o.traverseAndAccumulate(option,c,e)})),c}},{key:"addStatsToField",value:function(t,n,e){var r=n[e]||{};return Object.entries(t).forEach((function(t){var n=t[0],e=t[1];r[n]=(r[n]||0)+e})),n[e]=r,n}},{key:"copyHash",value:function(t){var n={};return Object.entries(t).forEach((function(t){n[t[0]]=t[1]})),n}},{key:"isEmpty",value:function(){return this.empty}},{key:"isPromoFound",value:function(t){return null!==this.findPromo(t,this)}},{key:"findPromo",value:function(t,n){var e=(n.promos||[]).filter((function(n){return n.id===t}));if(e.length>0)return e[0];var r,o=f(n.options||[]);try{for(o.s();!(r=o.n()).done;){var option=r.value,c=this.findPromo(t,option);if(null!==c)return c}}catch(t){o.e(t)}finally{o.f()}return null}}],[{key:"mapVariation",value:function(n){var e=new t;return e.name=n.name,e.price=n.price,e.promos=n.promos,e.stock=t.mapStats(n.stock),e["actual-stock"]=n["actual-stock"],e.sold=t.mapStats(n.sold),e.floating=t.mapStats(n.floating),e.image=n.image,e.options=(n.options||[]).map(t.mapVariation),e.empty=!1,e}},{key:"mapStats",value:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.reduceMapEntries(Object.entries(data).map((function(t){return Object(r.a)({},t[0],t[1])})))}},{key:"reduceMapEntries",value:function(t){return t.reduce((function(t,n){return Object.entries(n).forEach((function(n){t[n[0]]=n[1]})),t}),{})}}]),t}();n.a=function(t){return void 0===t||0===Object.keys(t).length?new h:h.mapVariation(t)}},542:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return l}));e(1),e(4),e(410),e(21),e(95),e(41),e(3),e(16),e(63),e(93);var r=e(535),o=function(t){var n=Object(r.a)(t.variations),e=function(t,n){var e=0,r=0,o=0,c=0,l=n.isEmpty()?t.stock:n.getOverallStats().stock;Object.entries(l).forEach((function(t){e+=t[1]}));var f=n.isEmpty()?t.sold:n.getOverallStats().sold;Object.entries(f).forEach((function(t){o+=t[1]}));var d=n.isEmpty()?t.floating:n.getOverallStats().floating;Object.entries(d).forEach((function(t){r+=t[1]}));var m=n.isEmpty()?t["actual-stock"]||0:n.getOverallStats()["actual-stock"]||0;return Object.entries(m).forEach((function(t){c+=t[1]})),{stockTotal:e,soldTotal:o,floatingTotal:r,actualStockTotal:c}}(t,n);return{id:t.id,name:t.name,price:t.price,stock:e.stockTotal,sold:e.soldTotal,floating:e.floatingTotal,readyToShip:e.actualStockTotal,mainImage:t.images[0],promos:t.promos,variations:t.variations,hasVariations:!n.isEmpty()}},c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.sort((function(t,r){return"string"==typeof t[n]&&"string"==typeof r[n]?t[n].toString()<r[n].toString()?e?-1:1:t[n].toString()>r[n].toString()?e?1:-1:0:e?t[n]-r[n]:r[n]-t[n]})),t},l={category:function(t){return function(n){return(n.categories||[]).filter((function(n){return n===t})).length>0}},promo:function(t){return function(n){var e=(n.promos||[]).map((function(t){return t.id})).filter((function(n){return n===t}));return e.length>0||Object(r.a)(n.variations).isPromoFound(t)}},"addon-promo":function(t){return function(n){return t.map((function(t){return t.id})).includes(n.id)}}}},602:function(t,n,e){"use strict";e.r(n);e(21);var r={props:{name:{type:String,default:""},title:{type:String,default:""},sortBy:{type:String,default:"name"},ascending:{type:Boolean,default:!0},onChangeSort:{type:Function,default:function(){return function(){}}}}},o=e(53),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("a",{staticClass:"sorting-links",on:{click:function(n){return t.onChangeSort(t.name)}}},[n("span",[t._v(t._s(t.title))]),t._v(" "),t.sortBy===t.name?n("i",{class:"".concat(t.ascending?"bi-chevron-down":"bi-chevron-up")}):t._e()])}),[],!1,null,null,null);n.default=component.exports},628:function(t,n,e){var content=e(642);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(66).default)("39eca37e",content,!0,{sourceMap:!1})},634:function(t,n,e){"use strict";e.r(n);e(21);var r=e(24),o=(e(54),e(16),e(542)),c={props:{sortBy:{type:String,default:"name"},ascending:{type:Boolean,default:!0},onChangeSort:{type:Function,default:function(){return function(){}}}},data:function(){return{products:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$content("products").fetch();case 2:e=n.sent,t.products=e.map(o.b);case 4:case"end":return n.stop()}}),n)})))()},computed:{sortedProducts:function(){return Object(o.c)(this.products,this.sortBy,this.ascending)}}},l=(e(641),e(53)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("table",{staticClass:"table table-dark"},[n("thead",[n("tr",[n("th",[n("table-header-sort-link",{attrs:{name:"name",title:"Product Name","sort-by":t.sortBy,ascending:t.ascending,"on-change-sort":t.onChangeSort}})],1),t._v(" "),n("th",[n("table-header-sort-link",{attrs:{name:"stock",title:"Stock","sort-by":t.sortBy,ascending:t.ascending,"on-change-sort":t.onChangeSort}})],1),t._v(" "),n("th",[n("table-header-sort-link",{attrs:{name:"readyToShip",title:"Ready To Ship","sort-by":t.sortBy,ascending:t.ascending,"on-change-sort":t.onChangeSort}})],1),t._v(" "),n("th",[n("table-header-sort-link",{attrs:{name:"floating",title:"Floating","sort-by":t.sortBy,ascending:t.ascending,"on-change-sort":t.onChangeSort}})],1),t._v(" "),n("th",[n("table-header-sort-link",{attrs:{name:"sold",title:"Sold","sort-by":t.sortBy,ascending:t.ascending,"on-change-sort":t.onChangeSort}})],1)])]),t._v(" "),n("tbody",t._l(t.sortedProducts,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.stock))]),t._v(" "),n("td",[t._v(t._s(e.readyToShip||0))]),t._v(" "),n("td",{class:"".concat(e.floating>0?"text-warning font-weight-bold":"")},[t._v("\n        "+t._s(e.floating)+"\n      ")]),t._v(" "),n("td",[t._v(t._s(e.sold))])])})),0)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{TableHeaderSortLink:e(602).default})},641:function(t,n,e){"use strict";e(628)},642:function(t,n,e){var r=e(65)(!1);r.push([t.i,"a.sorting-links{cursor:pointer;color:#fff}",""]),t.exports=r}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1046:function(t,e,o){"use strict";o.r(e);var r=o(24),n=(o(54),o(14),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,r=t.params,e.next=3,o("blog",r.slug).fetch();case 3:return n=e.sent,e.abrupt("return",{blog:n,slug:r.slug,url:"".concat("https://shop.jomigu.com","/blog/").concat(r.slug)});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.blog.title,link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],meta:[{hid:"og:title",property:"og:title",content:this.blog.title},{hid:"og:description",property:"og:description",content:this.blog.subtitle},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:"https://shop.jomigu.com"+this.blog.sharing_image}]}}}),l=(o(643),o(53)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container blog bg-white p-3"},[e("small",{staticClass:"float-right"},[t._v(t._s(t._f("format_date_time")(t.blog.published)))]),t._v(" "),e("h1",{staticClass:"text-center my-5"},[t._v(t._s(t.blog.title))]),t._v(" "),e("p",{staticClass:"text-center"},[e("ShareNetwork",{staticClass:"mr-2",attrs:{network:"twitter",url:t.url,title:t.blog.title,hashtags:t.blog.hashtags}},[t._v("\n      Share on "),e("i",{staticClass:"bi-twitter"})]),t._v(" "),e("ShareNetwork",{attrs:{network:"facebook",url:t.url,title:t.blog.title,hashtags:t.blog.hashtags}},[t._v("\n      Share on "),e("i",{staticClass:"bi-facebook"})])],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{class:"col-12 ".concat(t.blog.allTextCentered?"text-center":"")},[e("nuxt-content",{attrs:{document:t.blog}})],1)])])}),[],!1,null,null,null);e.default=component.exports},629:function(t,e,o){var content=o(644);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("0b22fad2",content,!0,{sourceMap:!1})},643:function(t,e,o){"use strict";o(629)},644:function(t,e,o){var r=o(65)(!1);r.push([t.i,".blog img{width:auto;max-width:100%;max-height:650px}em{color:#4c4b50}table{width:50%;margin:50px auto}thead{background-color:#000;color:#fff}td,th{text-align:center}",""]),t.exports=r}}]);
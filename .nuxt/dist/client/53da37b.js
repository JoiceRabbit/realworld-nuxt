(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{185:function(t,e,r){"use strict";r.d(e,"e",(function(){return c})),r.d(e,"g",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"d",(function(){return m})),r.d(e,"f",(function(){return d})),r.d(e,"a",(function(){return f})),r.d(e,"c",(function(){return v}));var n=r(61),c=function(t){return Object(n.b)({method:"get",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"get",url:"/api/articles/feed",params:t})},l=function(data){return Object(n.b)({method:"post",url:"/api/articles",data:data})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},f=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})}},259:function(t,e,r){"use strict";r.r(e);r(36);var n=r(3),c=r(185),o=r(203),l=r.n(o),m=(r(60),r(25),r(24),r(11),r(49),r(34)),d=r(46);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"ArticleMeta",props:{article:{type:Object,required:!0}},computed:v(v({},Object(d.b)(["user"])),{},{isSelf:function(){return this.article.author.username===this.user.username}})},h=r(23),C=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v("\n      "+t._s(t.article.author.username)+"\n    ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("div",{staticStyle:{display:"inline-block"}},[t.isSelf?[r("nuxt-link",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},attrs:{to:{name:"editor",params:{slug:t.article.slug}}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n       \n      Edit\n    ")]),t._v("\n      \n    "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited}},[r("i",{staticClass:"ion-heart"}),t._v("\n       \n      Delete\n    ")])]:[r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n       \n      Follow Eric Simons "),r("span",{staticClass:"counter"},[t._v("(10)")])]),t._v("\n      \n    "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited}},[r("i",{staticClass:"ion-heart"}),t._v("\n       \n      Favorite Post "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])]],2)],1)}),[],!1,null,null,null).exports,O={name:"ArticleComments",props:{article:{type:Object,required:!0}},data:function(){return{comments:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.f)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()}},j={name:"articleDetail",middleware:"auth",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.d)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,o=new l.a,article.body=o.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},components:{ArticleMeta:C,ArticleComments:Object(h.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n       \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v("\n        "+t._s(e.author.username)+"\n      ")]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createdAt,"MMM DD, YYYY")))])],1)])}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"card comment-form"},[e("div",{staticClass:"card-block"},[e("textarea",{staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"}})]),this._v(" "),e("div",{staticClass:"card-footer"},[e("img",{staticClass:"comment-author-img",attrs:{src:"http://i.imgur.com/Qr71crq.jpg"}}),this._v(" "),e("button",{staticClass:"btn btn-sm btn-primary"},[this._v("\n      Post Comment\n      ")])])])}],!1,null,null,null).exports}},y=Object(h.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("article-comments",{attrs:{article:t.article}})],1)])])])}),[],!1,null,null,null);e.default=y.exports}}]);
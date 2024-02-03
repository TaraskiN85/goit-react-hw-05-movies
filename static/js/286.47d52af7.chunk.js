"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[286],{286:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,a,c,i,o,u=e(861),s=e(439),p=e(757),f=e.n(p),l=e(791),d=e(94),h=e(689),m=e(390),v=e(168),x=e(87),g=e(924),w=(0,g.ZP)(x.rU)(r||(r=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n  color: grey;\n  font-size: 32px;\n  font-weight: 500;\n  font-family: Arial, Helvetica, sans-serif;\n  text-decoration: none;\n  margin: 24px auto;\n  text-align: center;\n  &:hover,\n  &:focus {\n    color: silver;\n  }\n"]))),Z=(g.ZP.img(a||(a=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n  margin-bottom: 12px;\n"]))),g.ZP.h3(c||(c=(0,v.Z)(["\n  margin-top: 16px;\n"])))),y=e(184),j=function(n){var t=n.movieData,e=(0,h.TH)(),r=t.title,a=t.id,c=t.poster_path,i=t.release_date.slice(0,4);return(0,y.jsx)(w,{to:"/movies/".concat(t.id),state:{from:e},children:(0,y.jsxs)("li",{children:[(0,y.jsx)("img",{style:{width:"100%"},src:"".concat(m.r1).concat(c),alt:"".concat(r," poster")}),(0,y.jsxs)(Z,{children:[r," (",i,")"]})]},a)})},k=e(560),b=g.ZP.div(i||(i=(0,v.Z)(["\n  padding: 40px 0;\n  width: 100%;\n  background-color: #14181d;\n\n  > h1 {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 60px;\n    font-weight: 500;\n    color: silver;\n  }\n"]))),z=g.ZP.ul(o||(o=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  /* grid-template-columns: repeat(auto-fit, minmax(280px, 320px)); */\n  grid-gap: 40px;\n  list-style: none;\n  margin: 40px auto;\n"]))),T=function(){var n=(0,l.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,l.useState)(!1),c=(0,s.Z)(a,2),i=c[0],o=c[1];return(0,l.useEffect)((function(){window.scrollTo(0,0);try{o(!0);var n=function(){var n=(0,u.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,m.wr)();case 2:t=n.sent,r(t.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(t){d.Am.error(t.message),o(!1)}finally{o(!1)}}),[]),(0,y.jsxs)(b,{children:[(0,y.jsx)("h1",{children:"Trending today"}),i&&(0,y.jsx)(k.a,{}),(0,y.jsx)(z,{children:e.length>0&&e.map((function(n){return(0,y.jsx)(j,{movieData:n},n.id)}))})]})}},390:function(n,t,e){e.d(t,{$7:function(){return l},Ax:function(){return d},Y5:function(){return f},r1:function(){return u},uV:function(){return h},wr:function(){return p}});var r=e(861),a=e(757),c=e.n(a),i=e(294),o="https://api.themoviedb.org/3",u="https://image.tmdb.org/t/p/w500",s="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTVmYjAxMWY0NjZkZmQzNzAwNGMwNTllNWYzMjBkMiIsInN1YiI6IjY1YWJlNzliYmU2ZDg4MDBiZTkyOTAxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gi3IHP7e4b3LExGkiLcOHZZ9OFaJCzK8pzjtQ32tlKE",p=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("\n  ".concat(o,"/trending/movie/day?api_key=").concat("1a5fb011f466dfd37004c059e5f320d2"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"GET",url:"".concat(o,"/movie/").concat(t),params:{language:"en-US"},headers:{Authorization:"Bearer ".concat(s),accept:"application/json"}},n.next=3,(0,i.Z)(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"GET",url:"".concat(o,"/search/movie?query=").concat(t),params:{language:"en-US",include_adult:!1,page:1},headers:{Authorization:"Bearer ".concat(s),accept:"application/json"}},n.next=3,(0,i.Z)(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"GET",url:"".concat(o,"/movie/").concat(t,"/reviews?"),params:{language:"en-US"},page:1,headers:{Authorization:"Bearer ".concat(s),accept:"application/json"}},n.next=3,(0,i.Z)(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"GET",url:"".concat(o,"/movie/").concat(t,"/credits?"),params:{language:"en-US"},headers:{Authorization:"Bearer ".concat(s),accept:"application/json"}},n.next=3,(0,i.Z)(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=286.47d52af7.chunk.js.map
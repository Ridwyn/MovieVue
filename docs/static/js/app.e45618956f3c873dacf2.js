webpackJsonp([1],{"/S+a":function(t,e){},"4sk7":function(t,e){},"6y68":function(t,e){},Dqdi:function(t,e){},KvRW:function(t,e){},MERa:function(t,e,a){t.exports=a.p+"static/img/imdblogo.1f2537b.png"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("mtWM"),n=a.n(i),o=new s.a,r={name:"NavBar",data:function(){return{msg:"",show:!1,searchText:null,searcResults:[]}},methods:{navBarToggle:function(){0==this.show?this.show=!0:1==this.show&&(this.show=!1)},loadSearch:function(){var t=this;null==this.searchText?alert("Please enter a name to search"):n.a.get("https://api.themoviedb.org/3/search/movie?api_key=98304107da83574cdac9140d458dce3d&query="+this.searchText).then(function(e){console.log(e.data.results);var a=e.data.results;o.$emit("results",a,t.searchText),t.$router.push("Search")}).catch(function(t){console.log(t)})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"NavBar",attrs:{id:"normalNav"}},[s("div",{staticClass:"top-nav"},[s("router-link",{attrs:{to:{name:"Home"}}},[s("img",{attrs:{src:a("dLd/"),alt:""}})]),t._v(" "),s("div",[s("form",{staticClass:"search-form",attrs:{id:"formSearch",action:"#"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"search",name:"search",placeholder:"Search Movie..."},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),s("a",{on:{click:t.loadSearch}},[s("i",{staticClass:"fas fa-search"})])])])],1),t._v(" "),s("div",{staticClass:"nav-links bottom-nav"},[s("div",[s("router-link",{attrs:{to:{name:"OnAir"}}},[s("i",{staticClass:"fas fa-wifi"})])],1),t._v(" "),s("div",[s("router-link",{attrs:{to:{name:"Account"}}},[s("i",{staticClass:"far fa-user"})])],1),t._v(" "),s("div",[s("router-link",{attrs:{to:{name:"Explore"}}},[s("i",{staticClass:"fas fa-compass"})])],1)])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"NavBar",attrs:{id:"mobileNav"}},[s("div",{staticClass:"top-nav"},[t._m(0),t._v(" "),s("div",[s("form",{staticClass:"search-form",attrs:{id:"formSearch",action:"#"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"search",name:"search",placeholder:"Search Movie..."},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),s("a",{on:{click:t.loadSearch}},[s("i",{staticClass:"fas fa-search"})])])])]),t._v(" "),s("div",{staticClass:"nav-links bottom-nav"},[s("div",[s("router-link",{attrs:{to:{name:"OnAir"}}},[s("i",{staticClass:"fas fa-wifi"})])],1),t._v(" "),s("div",[s("router-link",{attrs:{to:{name:"Account"}}},[s("i",{staticClass:"far fa-user"})])],1),t._v(" "),s("div",[s("router-link",{attrs:{to:{name:"Explore"}}},[s("i",{staticClass:"fas fa-compass"})])],1)])]),t._v(" "),s("div",{staticClass:"navBtn",attrs:{id:"nav-Btn"},on:{click:function(e){return t.navBarToggle()}}},[0==t.show?s("i",{staticClass:"fas fa-bars fa-2x"}):1==t.show?s("i",{staticClass:"fas fa-times fa-2x"}):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo",attrs:{id:"logo"}},[e("img",{attrs:{src:a("dLd/"),alt:""}})])}]};var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"top-footer"},[s("div",{staticClass:"portfolio"},[s("h3",[t._v("Portfolio:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ridwynidriss.com"}},[t._v("www.ridwynidriss.com")])])]),t._v(" "),s("h3",[t._v("Copyright © 2019")]),t._v(" "),s("h3",[t._v("Mockup and Code by Ridwyn Idrissou")])]),t._v(" "),s("div",{staticClass:"bottom-footer"},[s("div",[s("img",{attrs:{src:a("MERa"),alt:""}})]),t._v(" "),s("div",{staticClass:"links"},[s("a",{attrs:{href:"https://github.com/Ridwyn"}},[s("i",{staticClass:"fab fa-github"})]),t._v(" "),s("a",{attrs:{href:"https://www.themoviedb.org/documentation/api"}},[s("i",{staticClass:"fas fa-code"})])])])])}]};var v={name:"App",components:{NavBar:a("VU/8")(r,c,!1,function(t){a("Dqdi")},"data-v-60213bf7",null).exports,Footer:a("VU/8")({name:"Footer",data:function(){return{}}},l,!1,function(t){a("ktzA")},"data-v-ab263d76",null).exports},data:function(){return{}},created:function(){},methods:{}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("NavBar"),this._v(" "),e("router-view"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var u=a("VU/8")(v,d,!1,function(t){a("sNxp")},null,null).exports,m=a("/ocq"),p={name:"Home",data:function(){return{ComingSoon:[],TopRated:[],Popular:[],Latest:[]}},updated:function(){new tns({container:"#upcoming",prevButton:"#prev-upcoming",nextButton:"#nxt-upcoming",nav:!1,items:6,loop:!1,mouseDrag:!0,swipeAngle:!1,speed:400,responsive:{360:{edgePadding:10,gutter:5,items:2},700:{items:6}}}),new tns({container:"#top-rated",prevButton:"#prev-rated",nextButton:"#nxt-rated",nav:!1,items:6,loop:!1,mouseDrag:!0,swipeAngle:!1,speed:400,responsive:{360:{edgePadding:10,gutter:5,items:2},700:{items:6}}}),new tns({container:"#popular",prevButton:"#prev-popular",nextButton:"#nxt-popular",nav:!1,items:6,loop:!1,mouseDrag:!0,swipeAngle:!1,speed:400,responsive:{360:{edgePadding:10,gutter:5,items:2},700:{items:6}}})},created:function(){this.fetchComingSoon(),this.fetchTopRated(),this.fetchPopular()},methods:{fetchComingSoon:function(){var t=this;n.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=98304107da83574cdac9140d458dce3d&language=en-US&page=1").then(function(e){t.ComingSoon=e.data.results}).catch(function(t){console.log(t)})},fetchTopRated:function(){var t=this;n.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=98304107da83574cdac9140d458dce3d&language=en-US&page=1").then(function(e){t.TopRated=e.data.results}).catch(function(t){console.log(t)})},fetchPopular:function(){var t=this;n.a.get("https://api.themoviedb.org/3/movie/popular?api_key=98304107da83574cdac9140d458dce3d&language=en-US&page=1").then(function(e){t.Popular=e.data.results}).catch(function(t){console.log(t)})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Home"},[a("div",{staticClass:"section-container"},[a("h2",[t._v("Coming Soon...")]),t._v(" "),a("div",{staticClass:"contents"},[a("ul",{staticClass:"my-slider",attrs:{id:"upcoming"}},t._l(t.ComingSoon,function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:{name:"Movie",params:{movie_id:e.id}}}},[a("img",{attrs:{src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""}}),t._v(" "),a("div",[a("h6",[t._v(t._s(e.title))])]),t._v(" "),a("p",{staticClass:"rating"},[a("i",{staticClass:"fas fa-star"}),t._v("\n              "+t._s(e.vote_average)+"\n            ")])])],1)}),0)]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"section-container"},[a("h2",[t._v("Top Rated")]),t._v(" "),a("div",{staticClass:"contents"},[a("ul",{staticClass:"my-slider",attrs:{id:"top-rated"}},t._l(t.TopRated,function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:{name:"Movie",params:{movie_id:e.id}}}},[a("img",{attrs:{src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""}}),t._v(" "),a("div",[a("h6",[t._v(t._s(e.title))])]),t._v(" "),a("p",{staticClass:"rating"},[a("i",{staticClass:"fas fa-star"}),t._v("\n              "+t._s(e.vote_average)+"\n            ")])])],1)}),0)]),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"section-container"},[a("h2",[t._v("Popular")]),t._v(" "),a("div",{staticClass:"contents"},[a("ul",{staticClass:"my-slider",attrs:{id:"popular"}},t._l(t.Popular,function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:{name:"Movie",params:{movie_id:e.id}}}},[a("img",{attrs:{src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""}}),t._v(" "),a("div",[a("h6",[t._v(t._s(e.title))])]),t._v(" "),a("p",{staticClass:"rating"},[a("i",{staticClass:"fas fa-star"}),t._v("\n              "+t._s(e.vote_average)+"\n            ")])])],1)}),0)]),t._v(" "),t._m(4),t._v(" "),t._m(5)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-chevron-left fa-3x prevBtn",attrs:{id:"prev-upcoming"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-chevron-right fa-3x nxtBtn",attrs:{id:"nxt-upcoming"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-chevron-left fa-3x prevBtn",attrs:{id:"prev-rated"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-chevron-right fa-3x nxtBtn",attrs:{id:"nxt-rated"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-chevron-left fa-3x prevBtn",attrs:{id:"prev-popular"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-chevron-right fa-3x nxtBtn",attrs:{id:"nxt-popular"}})])}]};var _=a("VU/8")(p,h,!1,function(t){a("KvRW")},"data-v-28dd61df",null).exports,f={name:"Movie",data:function(){return{movie:{backdropimg:null,posterimg:null,title:null,overview:null,runtime:null,language:null,vote:null,status:null,release_date:null,tagline:null},genres:[],production_companies:[],show:!1,styleHide:{opacity:"0",transition:"all 0.7s ease-in-out",visibility:"visible"}}},mounted:function(){},created:function(){this.fetchSingleMovie()},methods:{fetchSingleMovie:function(){var t=this;n.a.get("https://api.themoviedb.org/3/movie/"+this.$route.params.movie_id+"?api_key=98304107da83574cdac9140d458dce3d&language=en-US").then(function(e){console.log(e.data);var a=e.data;t.movie.backdropimg=a.backdrop_path,t.movie.posterimg=a.poster_path,t.movie.title=a.title,t.movie.overview=a.overview,t.movie.runtime=a.runtime,t.movie.language=a.original_language,t.movie.vote=a.vote_average,t.movie.status=a.status,t.movie.release_date=a.release_date,t.movie.tagline=a.tagline,a.genres.forEach(function(e){t.genres.push(e)}),a.production_companies.forEach(function(e){t.production_companies.push(e)})}).catch(function(t){console.log(t)})},showLinks:function(){0==this.show?(this.styleHide.opacity=1,this.styleHide.visibility="visible",this.show=!0):1==this.show&&(this.styleHide.opacity=0,this.styleHide.visibility="hidden",this.show=!1)}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Movie"},[a("div",{staticClass:"header"},[a("img",{staticClass:"backdrop",attrs:{src:"https://image.tmdb.org/t/p/original"+t.movie.backdropimg,alt:""}}),t._v(" "),a("div",{staticClass:"black"}),t._v(" "),a("div",{staticClass:"controls"},[a("router-link",{attrs:{to:{name:"Home"}}},[a("i",{staticClass:"fas fa-chevron-left fa-2x"})]),t._v(" "),a("i",{staticClass:"fas fa-share fa-2x",attrs:{id:"shareBtn"},on:{click:t.showLinks}})],1),t._v(" "),a("div",{staticClass:"share-links",style:t.styleHide,attrs:{id:"shareLinks"}},[a("i",{staticClass:"fas fa-envelope fa-2x"}),t._v(" "),a("i",{staticClass:"fab fa-facebook fa-2x"}),t._v(" "),a("i",{staticClass:"fab fa-instagram fa-2x"}),t._v(" "),a("i",{staticClass:"fab fa-twitter fa-2x"})]),t._v(" "),a("div",{staticClass:"movie-content"},[a("div",{staticClass:"details"},[a("img",{attrs:{src:"https://image.tmdb.org/t/p/original"+t.movie.posterimg,alt:""}}),t._v(" "),a("div",{staticClass:"details-info"},[a("h2",[t._v(t._s(t.movie.title))]),t._v(" "),a("h5",[t._l(parseInt(t.movie.vote),function(t,e){return a("i",{key:e,staticClass:"fas fa-star"})}),t._v("\n            "+t._s(t.movie.vote)+"\n          ")],2),t._v(" "),a("h5",[t._v(t._s(t.movie.status)+" | "+t._s(t.movie.release_date)+" | "+t._s(t.movie.language))]),t._v(" "),a("div",{staticClass:"genre"},t._l(t.genres,function(e,s){return a("h6",{key:s},[t._v(t._s(e.name))])}),0)])])])]),t._v(" "),a("div",{staticClass:"movie-info"},[a("div",{staticClass:"summary"},[""!=t.movie.tagline?a("h3",[t._v(t._s(t.movie.tagline))]):a("h3",[t._v("Summary")]),t._v(" "),a("p",[t._v(t._s(t.movie.overview))])]),t._v(" "),a("div",{staticClass:"section"},[t.production_companies.length>=1?a("h3",[t._v("Production Companies")]):t._e(),t._v(" "),a("div",{staticClass:"companies"},t._l(t.production_companies,function(e,s){return a("div",{key:s,staticClass:"company"},[null!=e.logo_path?a("img",{attrs:{src:"https://image.tmdb.org/t/p/original"+e.logo_path,alt:""}}):t._e(),t._v(" "),a("h6",[t._v(t._s(e.name))])])}),0)])])])},staticRenderFns:[]};var x=a("VU/8")(f,g,!1,function(t){a("c3R4")},"data-v-beb0834e",null).exports,C={name:"Search",data:function(){return{text:"",results:[]}},created:function(){var t=this;o.$on("results",function(e,a){console.log(e,"in search"),t.results=e,t.text=a}),console.log()},methods:{}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"Search"},[a("h2",[t._v("\n      Search Results for\n      "),a("span",{staticClass:"input-text"},[t._v(t._s(t.text))])]),t._v(" "),a("div",{staticClass:"search-content"},t._l(t.results,function(e,s){return a("div",{key:s,staticClass:"movie-item"},[a("router-link",{attrs:{to:{name:"Movie",params:{movie_id:e.id}}}},[a("img",{attrs:{src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""}}),t._v(" "),a("h3",[t._v(t._s(e.title))]),t._v(" "),a("h5",[t._v(t._s(e.vote_average))])])],1)}),0)])])},staticRenderFns:[]};var w=a("VU/8")(C,y,!1,function(t){a("x21Z")},"data-v-150d72ab",null).exports,k={name:"OnAir",data:function(){return{movies:[]}},created:function(){this.fetchToday()},methods:{fetchToday:function(){var t=this;n.a.get("https://api.themoviedb.org/3/tv/airing_today?api_key=98304107da83574cdac9140d458dce3d&language=en-US&page=1").then(function(e){console.log(e.data.results),t.movies=e.data.results}).catch(function(t){console.log(t)})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"OnAir"},[a("h2",[t._v("Airing Today")]),t._v(" "),a("div",{staticClass:"air-content"},t._l(t.movies,function(e,s){return a("div",{key:s,staticClass:"movie-item"},[a("router-link",{attrs:{to:{name:"Movie",params:{movie_id:e.id}}}},[a("img",{attrs:{src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""}}),t._v(" "),a("h3",[t._v(t._s(e.name))]),t._v(" "),a("h5",[t._v(t._s(e.first_air_date.substring(0,4)))])])],1)}),0)])},staticRenderFns:[]};var T=a("VU/8")(k,b,!1,function(t){a("6y68")},"data-v-a87bf7ca",null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Account"},[e("h2",[this._v("Account")]),this._v(" "),e("div",{staticClass:"form-style"},[this._m(0),this._v(" "),e("div",{staticClass:"guest"},[e("a",{staticClass:"btn",attrs:{href:"#"},on:{click:this.loadHome}},[e("h3",[this._v("Browse as Guest")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"account-form",attrs:{id:"",action:"#"}},[e("input",{attrs:{type:"email",name:"email",placeholder:"Email"}}),this._v(" "),e("input",{attrs:{type:"password",name:"password",placeholder:"Password"}}),this._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[e("h3",[this._v("Login")])])])}]};var E=a("VU/8")({name:"Account",data:function(){return{}},created:function(){},methods:{loadHome:function(){this.$router.push("Home")}}},S,!1,function(t){a("/S+a")},"data-v-e04ce896",null).exports,A={name:"Explore",data:function(){return{genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],options:[{text:"Popular Descending",value:"popularity.desc"},{text:"Popular Ascending",value:"popularity.asc"},{text:"Vote Descending",value:"vote_average.desc"},{text:"Vote Ascending",value:"vote_average.acs"},{text:"Vote Count Descending",value:"vote_count.desc"},{text:"Vote Count Ascending",value:"vote_count.asc"}],selectedOptions:"",explore:[],keywordText:"",genreText:"",msg:"",date:"",year:[]}},created:function(){this.fetchDiscover();var t=1960;for(t=1960;t<=2019;t++)this.year.push({year:t});console.log(this.year)},methods:{fetchDiscover:function(){var t=this;n.a.get("https://api.themoviedb.org/3/discover/movie?api_key=98304107da83574cdac9140d458dce3d&sort_by=popularity.desc").then(function(e){t.explore=e.data.results}).catch(function(t){console.log(t)})},fetchExplore:function(){var t=this,e=[];this.genres.forEach(function(a){a.name.toUpperCase().includes(t.genreText.toUpperCase().split(" ").join(""))&&e.push(a)}),n.a.get("https://api.themoviedb.org/3/discover/movie?api_key=98304107da83574cdac9140d458dce3d&language=en-US&include_adult=false&include_video=false&page=1&with_genres="+e[0].id+"&with_keywords"+this.keywordText+"&primary_release_year="+this.date+"&sort_by="+this.selectedOptions).then(function(e){t.explore=e.data.results}).catch(function(t){console.log(t)})}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Account"},[a("h2",[t._v("Explore More...")]),t._v(" "),a("div",{staticClass:"filter-list"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedOptions,expression:"selectedOptions"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedOptions=e.target.multiple?a:a[0]}}},t._l(t.options,function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.text))])}),0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.genreText,expression:"genreText"}],attrs:{type:"text",name:"text",placeholder:"Genres"},domProps:{value:t.genreText},on:{input:function(e){e.target.composing||(t.genreText=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywordText,expression:"keywordText"}],attrs:{type:"text",name:"text",placeholder:"Keywords"},domProps:{value:t.keywordText},on:{input:function(e){e.target.composing||(t.keywordText=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.date=e.target.multiple?a:a[0]}}},t._l(t.year,function(e){return a("option",{domProps:{value:e.year}},[t._v(t._s(e.year))])}),0)]),t._v(" "),a("div",{staticClass:"exploreBtn"},[a("a",{on:{click:t.fetchExplore}},[t._v("Search")])]),t._v(" "),""!=t.genreText?a("div",[a("h4",[t._v("\n      Searches for "+t._s(t.msg)+"\n      "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.date,expression:"date!=''"}]},[t._v("from "+t._s(t.date))])])]):t._e(),t._v(" "),a("h2",{directives:[{name:"show",rawName:"v-show",value:0==t.explore.length,expression:"explore.length==0"}]},[t._v("Not Found try a general selection")]),t._v(" "),t.explore.length>=1?a("div",{staticClass:"explore-content"},t._l(t.explore,function(e,s){return a("div",{key:s,staticClass:"movie-item"},[a("router-link",{attrs:{to:{name:"Movie",params:{movie_id:e.id}}}},[a("img",{attrs:{src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""}}),t._v(" "),a("h3",[t._v(t._s(e.title))]),t._v(" "),a("h5",[t._v(t._s(e.vote_average))])])],1)}),0):t._e()])},staticRenderFns:[]};var B=a("VU/8")(A,R,!1,function(t){a("4sk7")},"data-v-f3ce127e",null).exports;s.a.use(m.a);var $=new m.a({routes:[{path:"/",name:"Home",component:_},{path:"/movie/:movie_id",name:"Movie",component:x},{path:"/airing/today",name:"OnAir",component:T},{path:"/account",name:"Account",component:E},{path:"/search/",name:"Search",component:w},{path:"/explore/",name:"Explore",component:B}]});s.a.use(n.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:$,axios:n.a,components:{App:u},template:"<App/>"})},c3R4:function(t,e){},"dLd/":function(t,e,a){t.exports=a.p+"static/img/logo.8581dd8.png"},ktzA:function(t,e){},sNxp:function(t,e){},x21Z:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e45618956f3c873dacf2.js.map
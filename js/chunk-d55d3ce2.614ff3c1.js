(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d55d3ce2"],{"22ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),e.isLoading?r("Spinner"):[r("h1",{staticClass:"mt-5"},[e._v(" 美食達人 ")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(t){return r("div",{key:t.id,staticClass:"col-3"},[r("router-link",{attrs:{to:{name:"user",params:{id:t.id}}}},[r("img",{attrs:{src:e._f("emptyImage")(t.image),width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(t.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(t.followerCount))]),r("p",{staticClass:"mt-3"},[t.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.deleteFollowing(t.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.addFollowing(t.id)}}},[e._v(" 追蹤 ")])])],1)})),0)]],2)},a=[],s=r("5530"),o=r("1da1"),i=(r("96cf"),r("d81d"),r("b0c0"),r("8bb1")),c=r("2375"),u=r("2708"),l=r("4cce"),d=r("2fa3"),p={name:"UserTop",components:{NavTabs:i["a"],Spinner:c["a"]},mixins:[u["a"]],data:function(){return{users:[],isLoading:!0}},created:function(){this.fetchTopUsers()},methods:{fetchTopUsers:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,l["a"].getTopUsers();case 4:if(r=t.sent,n=r.data,"error"!==n.status){t.next=8;break}throw new Error(n.message);case 8:e.users=n.users.map((function(e){return{id:e.id,name:e.name,image:e.image,followerCount:e.FollowerCount,isFollowed:e.isFollowed}})),e.isLoading=!1,t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](0),console.error(t.t0.message),e.isLoading=!1,d["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 17:case"end":return t.stop()}}),t,null,[[0,12]])})))()},addFollowing:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addFollowing({userId:e});case 3:if(n=r.sent,a=n.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.users=t.users.map((function(t){return t.id!==e?t:Object(s["a"])(Object(s["a"])({},t),{},{followerCount:t.followerCount+1,isFollowed:!0})})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFollowing:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteFollowing({userId:e});case 3:if(n=r.sent,a=n.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.users=t.users.map((function(t){return t.id!==e?t:Object(s["a"])(Object(s["a"])({},t),{},{followerCount:t.followerCount-1,isFollowed:!1})})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},f=p,w=r("2877"),m=Object(w["a"])(f,n,a,!1,null,null,null);t["default"]=m.exports},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),o=s("map");n({target:"Array",proto:!0,forced:!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-d55d3ce2.614ff3c1.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8],{325:function(t,e,r){var n=r(0),i=r(326);n({global:!0,forced:parseInt!=i},{parseInt:i})},326:function(t,e,r){var n=r(3),i=r(176).trim,o=r(177),s=n.parseInt,c=/^[+-]?0[Xx]/,a=8!==s(o+"08")||22!==s(o+"0x16");t.exports=a?function(t,e){var r=i(String(t));return s(r,e>>>0||(c.test(r)?16:10))}:s},327:function(t,e,r){var n=r(0),i=r(3),o=r(96),s=[].slice,c=function(t){return function(e,r){var n=arguments.length>2,i=n?s.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,r)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:c(i.setTimeout),setInterval:c(i.setInterval)})},328:function(t,e,r){"use strict";r.r(e);r(178),r(175),r(94),r(66),r(97),r(179),r(9),r(325),r(44),r(95),r(67),r(30),r(327);var n=r(31),i={name:"KProgress",props:{percent:{type:Number,default:0,required:!0,validator:function(t){return t>=0&&t<=100}},showText:{type:Boolean,default:!0},active:{type:Boolean,default:!1},bgColor:{type:String,default:"#ebeef5"},cutColor:{type:String,default:"#ebeef5"},cutWidth:{type:Number,default:1},type:{type:String,default:"line",validator:function(t){return["line","lump"].indexOf(t)>-1}},border:{type:Boolean,default:!0},status:{type:String,validator:function(t){return["success","warning","error"].indexOf(t)>-1}},lineHeight:{type:Number,default:6},color:{type:[String,Array,Function],default:""},colorFlow:{type:Boolean,default:!1},activeColor:{type:[String,Array],default:""},format:Function},data:function(){return{items:[],idNow:""}},computed:{content:function(){return"function"==typeof this.format?this.format(this.percent)||"":"".concat(this.percent,"%")}},mounted:function(){"lump"===this.type&&this.countCut(),this.idNow=this.getUUID()},methods:{getOuterStyle:function(){var t="";return t+="background: ".concat(this.bgColor,";"),t+="height: ".concat(this.lineHeight,"px;")},getLineStyle:function(){var t="";if(t+="width: ".concat(this.percent,"%;"),t+="height: ".concat(this.lineHeight,"px;margin-top: -").concat(this.lineHeight,"px;"),this.color)if("string"==typeof this.color)t+="background: ".concat(this.color,";");else if(Array.isArray(this.color)&&this.color.length<7){var e="",r=this.color.length;this.color.map((function(t,n){e+=n===r-1?t:t+", "})),t+="background: linear-gradient(to right, ".concat(e,");")}else"function"==typeof this.color&&(t+="background: ".concat(this.color(this.percent),";"));return this.border||(t+="border-radius: 0px"),this.colorFlow&&(t+="animation: kp-flow 5s linear infinite"),t},getActiveStyle:function(){var t="";return this.activeColor&&"string"==typeof this.activeColor&&(t="background: ".concat(this.activeColor,";")),t},countCut:function(){var t=this,e=this,r=document.getElementById("k-progress-line-".concat(this.idNow)),i=setInterval((function(){if(r=document.getElementById("k-progress-line-".concat(t.idNow))){clearInterval(i);var o=parseInt(r.offsetWidth/(e.lineHeight+e.cutWidth));e.items=Object(n.a)(Array(o).keys())}}),1)},getCutStyle:function(){var t="";return t+="height: ".concat(this.lineHeight,"px; margin-top: -").concat(this.lineHeight,"px;")},getCutBarStyle:function(){var t="";return t+="width: ".concat(this.lineHeight,"px;"),t+="border-right: ".concat(this.cutWidth,"px solid ").concat(this.cutColor,";")},getUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){return("x"===t?16*Math.random()|0:8).toString(16)}))}}},o=r(18),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"k-progress"},[r("div",{staticClass:"k-progress-outer"},[r("div",{staticClass:"k-progress-outer-bg",class:t.border?"k-progress-outer-bg-border":"",style:t.getOuterStyle()}),t._v(" "),r("div",{staticClass:"k-progress-outer-line",class:t.status?"k-progress-outer-line-"+t.status:"",style:t.getLineStyle(),attrs:{id:"k-progress-line-"+t.idNow}},[t.active?r("div",{staticClass:"k-progress-outer-line-active",style:t.getActiveStyle()}):t._e()]),t._v(" "),"lump"===t.type?r("div",{staticClass:"k-progress-outer-cut",style:t.getCutStyle()},t._l(t.items,(function(e){return r("div",{key:e,style:t.getCutBarStyle()})})),0):t._e()]),t._v(" "),t.showText?r("div",{staticClass:"k-progress-text"},[t._v("\n    "+t._s(t.content)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=s.exports},351:function(t,e,r){},381:function(t,e,r){"use strict";r(351)},391:function(t,e,r){"use strict";r.r(e);var n={components:{kProgress:r(328).default}},i=(r(381),r(18)),o=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("div",[e("k-progress",{attrs:{percent:20}}),this._v(" "),e("k-progress",{attrs:{percent:40,status:"success",type:"lump"}}),this._v(" "),e("k-progress",{attrs:{percent:60,status:"warning",type:"lump",active:"",border:!1}}),this._v(" "),e("k-progress",{attrs:{percent:80,color:["#40a9ff","#5cdbd3"],type:"lump","cut-width":2,"cut-color":"#389e0d"}})],1)])}),[],!1,null,null,null);e.default=o.exports}}]);
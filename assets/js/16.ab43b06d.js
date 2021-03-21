(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{398:function(t,a,s){"use strict";s.r(a);var n=s(18),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_11-element-ui-简单实现表格滚动-附演示及源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-element-ui-简单实现表格滚动-附演示及源码"}},[t._v("#")]),t._v(" 11. Element-ui 简单实现表格滚动（附演示及源码）")]),t._v(" "),s("h2",{attrs:{id:"_1-前-言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-前-言"}},[t._v("#")]),t._v(" 1 前 言")]),t._v(" "),s("h3",{attrs:{id:"_1-1-预览图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-预览图"}},[t._v("#")]),t._v(" 1.1 预览图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/11-1.gif?raw=true",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_1-2-介-绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-介-绍"}},[t._v("#")]),t._v(" 1.2 介 绍")]),t._v(" "),s("div",{staticClass:"language-! extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("功能很简单，不确定方法有没有问题，所以写出来让大家来检查检查\n")])])]),s("h3",{attrs:{id:"_1-3-使用技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-使用技术"}},[t._v("#")]),t._v(" 1.3 使用技术")]),t._v(" "),s("ul",[s("li",[t._v("Vue")]),t._v(" "),s("li",[t._v("Element-ui")])]),t._v(" "),s("h2",{attrs:{id:"_2-实-现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-实-现"}},[t._v("#")]),t._v(" 2 实 现")]),t._v(" "),s("h3",{attrs:{id:"_2-1-查看ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-查看ui"}},[t._v("#")]),t._v(" 2.1 查看UI")]),t._v(" "),s("p",[t._v("这里是直接使用 UI 里的表格组件，F12 查看")]),t._v(" "),s("p",[t._v("可以明显看出：")]),t._v(" "),s("ul",[s("li",[t._v("表格头 "),s("code",[t._v('class="el-table__header-wrapper"')])]),t._v(" "),s("li",[t._v("表格体 "),s("code",[t._v('class="el-table__body-wrapper"')])]),t._v(" "),s("li",[t._v("表格高度默认 "),s("code",[t._v("48px")])])]),t._v(" "),s("h3",{attrs:{id:"_2-2-滚-动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-滚-动"}},[t._v("#")]),t._v(" 2.2 滚 动")]),t._v(" "),s("p",[t._v("我们想要的效果是向下滚动，即向下移动 "),s("code",[t._v("48px")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  获取表格体")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'el-table__body-wrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all .5s'")]),t._v("\n    t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("marginTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'48px'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  加入数据")]),t._v("\n    t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all 0s ease 0s'")]),t._v("\n    t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("marginTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("设定动作执行时间为 "),s("code",[t._v("500ms")])]),t._v(" "),s("li",[t._v("完成动作后，恢复表格样式")])]),t._v(" "),s("h3",{attrs:{id:"_2-3-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-操作"}},[t._v("#")]),t._v(" 2.3 操作")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("开始")]),t._v(" "),s("td",[t._v("每隔一秒触发向下滚动的动作")])]),t._v(" "),s("tr",[s("td",[t._v("暂停")]),t._v(" "),s("td",[t._v("清除计时器")])]),t._v(" "),s("tr",[s("td",[t._v("重置")]),t._v(" "),s("td",[t._v("清理计时器，清理数据")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-后-记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-后-记"}},[t._v("#")]),t._v(" 3 后 记")]),t._v(" "),s("p",[s("strong",[t._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),s("p",[s("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家")]),t._v(" 😂")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("欢迎关注 我的：")]),t._v(" "),s("a",{attrs:{href:"https://github.com/xrkffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘 金"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("简 书"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_3-1-演示地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-演示地址"}},[t._v("#")]),t._v(" 3.1 演示地址")]),t._v(" "),s("p",[t._v("https://xrkffgg.github.io/Kvue/#/UI/001")]),t._v(" "),s("h3",{attrs:{id:"_3-2-源-码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-源-码"}},[t._v("#")]),t._v(" 3.2 源 码")]),t._v(" "),s("p",[t._v("https://github.com/xrkffgg/Kvue/blob/master/src/components/uiCom/001.vue")])])}),[],!1,null,null,null);a.default=r.exports}}]);
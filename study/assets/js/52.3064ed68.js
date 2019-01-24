(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{173:function(t,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"高阶组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高阶组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 高阶组件")]),t._v(" "),e("h5",{attrs:{id:"_1、什么是高阶组件？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是高阶组件？","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、什么是高阶组件？")]),t._v(" "),e("ul",[e("li",[t._v("高阶组件就是一个 React 组件包裹着另外一个 React 组件")]),t._v(" "),e("li",[t._v("因为要访问它的内部状态，所以要用到继承")]),t._v(" "),e("li",[t._v("高阶组件就是一个函数，它接受另一个组件作为参数，并返回一个新的组件。")]),t._v(" "),e("li",[t._v("当 React 组件被包裹时（warped），高阶组件会返回一个增强的 React 组件。")]),t._v(" "),e("li",[t._v("高阶组件让代码更具有复用性、逻辑性和抽象特性。")])]),t._v(" "),e("h5",{attrs:{id:"_2、侵入式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、侵入式","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、侵入式")]),t._v(" "),e("ul",[e("li",[t._v("利用super传递下去")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react';\nimport Loding from '../common/loading';\n\n// 侵入式\n// 因为要访问它的内部状态，所以要用到继承，继承他的父级\nexport default (WrapComponent)=>{\n    return class extends WrapComponent{\n        render(){\n            if(this.state.isLoading){\n                return <Loding></Loding>\n            }else{\n                return super.render()\n            }\n        }\n    }\n}\n")])])]),e("h5",{attrs:{id:"_3、非侵入式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、非侵入式","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、非侵入式")]),t._v(" "),e("ul",[e("li",[t._v("利用...传递下去")])]),t._v(" "),e("p",[t._v("hoc/widthAd.jsx")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react';\n\n// 非侵入式\n// WrapComponent 被包裹的组件\nexport default (WrapComponent)=>{\n    return class extends React.Component{\n        render(){\n            return <div>\n                <div>\n                    <p>请下载淘票票</p>\n                    <a href=\"https://dianying.taobao.com/\">下载</a>\n                </div>\n                <WrapComponent {...this.props}/>\n            </div>\n        }\n    }\n}\n\n用的时候直接引入这个文件，然后抛出 export default widthAd(Tab)\n")])])]),e("h5",{attrs:{id:"_4、为什么要使用高阶组件？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、为什么要使用高阶组件？","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、为什么要使用高阶组件？")]),t._v(" "),e("ul",[e("li",[t._v("为了代码的复用性，减少代码的冗余")])]),t._v(" "),e("h4",{attrs:{id:"js继承的几种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js继承的几种方式","aria-hidden":"true"}},[t._v("#")]),t._v(" js继承的几种方式")]),t._v(" "),e("ol",[e("li",[t._v("function    （this指向当前的function）")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function A(){\n    \n}\nA.protytype.add = ()=>{\n    \n}\n")])])])])}],!1,null,null,null);r.options.__file="高阶组件.md";a.default=r.exports}}]);
---
sidebarDepth: 2
---

# 🌈 k-progress

> 一个 Vue 插件，线性进度条。

![](https://img.shields.io/npm/v/k-progress?color=success&style=flat-square)
![](https://img.shields.io/github/languages/top/xrkffgg/k-progress?style=flat-square)
![](https://img.shields.io/github/languages/code-size/xrkffgg/k-progress?color=orange&style=flat-square)
![](https://img.shields.io/github/stars/xrkffgg/k-progress?color=blueviolet&style=flat-square)
![](https://img.shields.io/github/license/xrkffgg/k-progress?color=red&style=flat-square)

## 安 装
```bash
npm install -S k-progress
```

## 开始使用
```js
// main.js
import 'k-progress';
import 'k-progress/dist/k-progress.css';
```

## 例 子
### 基本用法
> 可设置不同的 `type` 、`color` 、 `bg-color` 展示不同的颜色效果

<demo-code>
  <kprogress-1></kprogress-1>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <k-progress :percent="10"></k-progress>
        <k-progress :percent="20" type="success"></k-progress>
        <k-progress :percent="30" type="warning"></k-progress>
        <k-progress :percent="40" type="error"></k-progress>
        <k-progress :percent="50" color="#9254de"></k-progress>
        <k-progress :percent="60" :color="['#f5af19', '#f12711']"></k-progress>
        <k-progress :percent="70" :color="['#40a9ff', '#5cdbd3']" bg-color="#d9f7be"></k-progress>
      </div>
    </template>
  </highlight-code>
</demo-code>

### 高度设置
> 可设置不同的 `line-height` 展示不同的尺寸，默认为 `6` 

<demo-code>
  <kprogress-2></kprogress-2>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <k-progress :percent="10" ></k-progress>
        <k-progress :percent="20" type="success" :line-height="8"></k-progress>
        <k-progress :percent="30" type="warning" :line-height="10"></k-progress>
        <k-progress :percent="40" type="error" :line-height="12"></k-progress>
      </div>
    </template>
  </highlight-code>
</demo-code>

### 文字设置
> 可通过 `show-text` 设置是否显示文字，可 `format` 自定义文字显示

<demo-code>
  <kprogress-3></kprogress-3>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <k-progress :percent="50" ></k-progress>
        <k-progress :percent="60" type="success" :show-text="false" ></k-progress>
        <k-progress :percent="80" type="warning" :format="format"></k-progress>
        <k-progress :percent="100" type="error" :format="format"></k-progress>
      </div>
    </template>

    <script>
      export default {
        methods: {
          format(percent) {
            if(percent == 100){
              return '^_^'
            }
            return 'QAQ'
          }
        },
      }
    </script>
  </highlight-code>
</demo-code>

### 动效设置
> 可通过 `active` 、 `active-color` 来设置进度条动态效果

<demo-code>
  <kprogress-4></kprogress-4>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <k-progress :percent="40" ></k-progress>
        <k-progress :percent="60" active></k-progress>
        <k-progress :percent="80" active active-color="#262626"></k-progress>
        <k-progress :percent="100" active :active-color="['#820014', '#ffec3d']"></k-progress>
      </div>
    </template>
  </highlight-code>
</demo-code>

## 参 数
|    参 数     |     类 型      |  默认值   |             可选值              |             说 明             |
| :----------: | :------------: | :-------: | :-----------------------------: | :---------------------------: |
|   percent    |     Number     |     0     |              0-100              |        百分比（必填）         |
| line-height  |     Number     |     6     |                                 |          进度条高度           |
|     type     |     String     |           | `success` / `warning` / `error` |          进度条类型           |
|    color     | String / Array |           |                                 |          进度条颜色           |
|   bg-color   |     String     | `#ebeef5` |            颜色代码             |        进度条背景颜色         |
|  show-text   |    Boolean     |  `true`   |                                 |      是否显示进度条文字       |
|    format    |    Function    |           |                                 | 自定义文字显示，参数为percent |
|    active    |    Boolean     |  `false`  |                                 |         是否开启动效          |
| active-color | String / Array |           |                                 |           动效颜色            |

## [GitHub](https://github.com/xrkffgg/k-progress)
---
sidebarDepth: 1
---
# 📝 笔 记
::: tip
- 记录学习到的 知识、工具
:::

## 加 密
前端加密一般服务于两个目的, 一个是防止MITM等攻击(前端是https, 因此风险较小), 另一个是保证用户密码隐私(这一点投入产出实在是不成比例, 所以没有做)。

后端(即加密密码存储)用的是 PBKDF2 with SHA2 的 rfc2898 标准实现. 类似还可以考虑 bcrypt, Argon2。

后端加密的目的不仅是单向hash密码存储, 更重要的是需要保证被拖库后一定时间内密码无法被碰撞或破解(即使攻击者获得了你的加密方法的源代码), 从而有足够的时间去rehash。

## Git 命令
### 重置远端分支
```
git fetch --all

git reset --hard origin/master // 远程分支名称

git fetch
```

### 更新fork工程
```
1. 添加源分支
git remote add xxx git@github.com:author/repos.git

git remote -v 查看

2. fetch 源仓库代码的最新版本到本地
git fetch xxx

3. 合并两个版本的代码
git merge xxx/master

4. 更新到GitHub的fork上
git push origin master
```

## Yarn 命令
```
yarn 

yarn add

yarn upgrade

yarn remove
```

## 重置 hosts

```
ipconfig /flushdns
```

## webp格式
WebP 的优势体现在它具有更优的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量；同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，在 JPEG 和 PNG 上的转化效果都非常优秀、稳定和统一。

对于不同场景下 WebP 的使用，总结了一些解决方案，如下：

- 若使用场景是浏览器，可以：

  - JavaScript 能力检测，对支持 WebP 的用户输出 WebP 图片

  - 使用 WebP 支持插件：WebPJS：http://webpjs.appspot.com

- 若使用场景是 App，可以：

  - Android 4.0 以下 WebP 解析库（https://github.com）

  - iOS WebP 解析库（https://github.com）

- 转换工具：

  - 智图（http://zhitu.tencent.com）

  - iSparta（http://isparta.ghub）
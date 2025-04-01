# VuePress Theme Hope
构建时候使用的文档：[theme-hope.vuejs.press](https://theme-hope.vuejs.press/zh/)  

特点，使用markdown来构架页面。

# 网页界面：
（测试界面，因为base问题因此不能正确加载js和css）https://nku-wiki.github.io/nkuwiki_web/ <br>
（已经部署）https://nkuwiki.com
# 开发备忘录
html页面不能直接放入，需要转为md格式。保留主要div标签，系统会自动渲染。可选的模板：普通模板和博客模板。<br>
html引用的css代码可以直接写入md正文中。<br>
html引用的js代码，需要挪动至client.ts中以实现加载。<br>

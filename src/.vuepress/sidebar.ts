import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // "portfolio",
    {
      text: "目录",
      icon: "laptop-code",
      prefix: "docx/",
      link: "docx/",
      children: "structure",
    },
    {
      text: "开发文档",
      icon: "book",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
      // prefix: "/develop/docs.html",
      // children: "structure",
    },
    {
      text: "联系我们",
      icon: "book",
      prefix: "communicate/",
      children: "structure",
    },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});

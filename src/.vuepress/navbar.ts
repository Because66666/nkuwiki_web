import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/docx/",
  {
    text: "开发文档",
    icon: "book",
    link: "/docs/",
  },
  "/communicate/",

  // {
  //   text:"建设",
  //   icon: "lightbulb",
  //   link:"/docs",
  // }
  // "/portfolio",
  // "/demo/",
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);

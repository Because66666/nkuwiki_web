import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({app, router }) {
    router.afterEach((to) => {
      app.mixin({
        mounted() {
          // 检查是否已存在我们的脚本
          const scriptId = 'vp-skip-link-script';
          if (!document.getElementById(scriptId)) {
            // 创建脚本元素
            const script = document.createElement('script');
            script.id = scriptId;
            
            // 注入搜索和主题切换逻辑
            script.textContent = `
              // 设置 vp-skip-link sr-only 元素的 display 为 none
              const skipLinks = document.querySelectorAll('.vp-skip-link.sr-only');
              if (skipLinks.length > 0) {
                skipLinks.forEach(link => {
                  link.style.display = 'none';
                });
              }
            `;

            // 注入到页面底部
            document.body.appendChild(script);
          }
        }
      })
    })
  }
})
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({app, router }) {
    router.afterEach((to) => {
      // 仅在访问 /docs.html 时注入脚本
      if (to.path === '/docs.html') {
        app.mixin({
          mounted() {
        // 创建脚本元素
        const script = document.createElement('script')
        
        // 注入搜索和主题切换逻辑
        script.textContent = `
  const observer = new MutationObserver((mutations) => {
        const searchBox = document.getElementById('searchDocs');
        const docsGrid = document.getElementById('docsGrid');
        const docCards = docsGrid.querySelectorAll('.doc-card');
        searchBox.addEventListener('input', function() {
          const searchTerm = searchBox.value.toLowerCase().trim();
          docCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = card.getAttribute('data-tags').toLowerCase();
            if (title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
observer.observe(document.body, {
    childList: true,
    subtree: true
  });
        `;

        // 注入到页面底部
        document.body.appendChild(script);
      }})}
    })
  }
})
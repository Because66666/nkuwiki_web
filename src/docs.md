---
home: true
title: 开发文档
heroText: API和开发文档
tagline: 南开WIKI项目的开发文档和API文档，为开发者和用户提供参考。
---
  <style>
    :root {
      --vp-c-bg: #fff;
    }

    [data-theme="dark"] {
      --vp-c-bg: #1b1b1f;
    }

    html,
    body {
      background: var(--vp-c-bg);
    }

    .docs-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .docs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .doc-card {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 1.5rem;
      background-color: var(--vp-c-bg);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .doc-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }

    .doc-card h3 {
      margin-top: 0;
      font-size: 1.25rem;
      color: #3182ce;
    }

    .doc-card p {
      margin: 0.5rem 0;
      color: #4a5568;
    }

    .doc-card .tag {
      display: inline-block;
      background-color: #ebf8ff;
      color: #2b6cb0;
      border-radius: 4px;
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      margin-right: 0.5rem;
      margin-top: 0.5rem;
    }

    [data-theme="dark"] .doc-card {
      border-color: #2d3748;
    }

    [data-theme="dark"] .doc-card h3 {
      color: #63b3ed;
    }

    [data-theme="dark"] .doc-card p {
      color: #cbd5e0;
    }

    [data-theme="dark"] .doc-card .tag {
      background-color: #2c5282;
      color: #ebf8ff;
    }

    .search-box {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 1rem;
    }

    [data-theme="dark"] .search-box {
      background-color: #2d3748;
      border-color: #4a5568;
      color: #e2e8f0;
    }
  </style>
<link rel="preload" href="/assets/style-Dfb0OIlH.css" as="style">
<link rel="stylesheet" href="/assets/style-Dfb0OIlH.css">
<link rel="modulepreload" href="/assets/app-BIgGtt9g.js">
  <div class="theme-hope-content" vp-content>
      <div class="docs-container">
        <input type="text" class="search-box" id="searchDocs" placeholder="搜索文档..." />
              <div class="docs-grid" id="docsGrid">
                <!-- API文档 -->
                <div class="doc-card" data-tags="api,接口,开发">
                  <h3>API文档</h3>
                  <p>南开Wiki平台的所有API接口说明，包括微信小程序API、MySQL查询API和Agent智能体API</p>
                  <a href="/markdown/api_docs.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">API</span>
                    <span class="tag">接口</span>
                  </div>
                </div>
                <!-- RAG API文档 -->
                <div class="doc-card" data-tags="rag,检索增强生成,api">
                  <h3>RAG API文档</h3>
                  <p>RAG（检索增强生成）接口的详细说明，用于从知识库中检索相关信息并生成回答</p>
                  <a href="/markdown/rag_api.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">RAG</span>
                    <span class="tag">API</span>
                  </div>
                </div>
                <!-- RAG使用指南 -->
                <div class="doc-card" data-tags="rag,使用指南,教程">
                  <h3>RAG使用指南</h3>
                  <p>RAG接口的使用方法和最佳实践</p>
                  <a href="/markdown/rag_usage_guide.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">RAG</span>
                    <span class="tag">使用指南</span>
                  </div>
                </div>
                <!-- RAG测试报告 -->
                <div class="doc-card" data-tags="rag,测试,报告">
                  <h3>RAG测试报告</h3>
                  <p>RAG接口的测试结果和性能评估</p>
                  <a href="/markdown/rag_test_report.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">RAG</span>
                    <span class="tag">测试</span>
                  </div>
                </div>
                <!-- 配置指南 -->
                <div class="doc-card" data-tags="配置,指南">
                  <h3>配置指南</h3>
                  <p>南开WIKI项目的配置选项和设置方法</p>
                  <a href="/markdown/configuration_guide.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">配置</span>
                    <span class="tag">指南</span>
                  </div>
                </div>
                <!-- 部署指南 -->
                <div class="doc-card" data-tags="部署,指南,服务器">
                  <h3>部署指南</h3>
                  <p>如何部署南开WIKI项目到服务器环境</p>
                  <a href="/markdown/deployment_guide.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">部署</span>
                    <span class="tag">服务器</span>
                  </div>
                </div>
                <!-- 安装指南 -->
                <div class="doc-card" data-tags="安装,指南,环境配置">
                  <h3>安装指南</h3>
                  <p>南开WIKI项目的安装步骤和环境配置</p>
                  <a href="/markdown/installation_guide.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">安装</span>
                    <span class="tag">环境配置</span>
                  </div>
                </div>
                <!-- 日志指南 -->
                <div class="doc-card" data-tags="日志,指南">
                  <h3>日志指南</h3>
                  <p>南开WIKI项目的日志系统和使用方法</p>
                  <a href="/markdown/logging_guide.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">日志</span>
                    <span class="tag">指南</span>
                  </div>
                </div>
                <!-- 项目开发文档 -->
                <div class="doc-card" data-tags="开发,文档,架构">
                  <h3>项目开发文档</h3>
                  <p>南开WIKI项目的开发说明和架构设计</p>
                  <a href="/markdown/nkuwiki_dev.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">开发</span>
                    <span class="tag">架构</span>
                  </div>
                </div>
                <!-- QA服务指南 -->
                <div class="doc-card" data-tags="qa,问答,服务">
                  <h3>QA服务指南</h3>
                  <p>问答服务的使用方法和配置说明</p>
                  <a href="/markdown/qa_service_guide.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">问答</span>
                    <span class="tag">服务</span>
                  </div>
                </div>
                <!-- 服务架构 -->
                <div class="doc-card" data-tags="架构,服务,设计">
                  <h3>服务架构</h3>
                  <p>南开WIKI项目的整体服务架构和组件说明</p>
                  <a href="/markdown/service_architecture.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">架构</span>
                    <span class="tag">设计</span>
                  </div>
                </div>
                <!-- API使用指南 -->
                <div class="doc-card" data-tags="api,使用指南">
                  <h3>API使用指南</h3>
                  <p>如何使用南开WIKI的API服务</p>
                  <a href="/markdown/api_usage_guide.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">API</span>
                    <span class="tag">使用指南</span>
                  </div>
                </div>
                <!-- 应用入口 -->
                <div class="doc-card" data-tags="应用,入口,启动">
                  <h3>应用入口</h3>
                  <p>应用程序的入口点和启动流程</p>
                  <a href="/markdown/application_entry.html" class="vp-link">查看文档</a>
                  <div>
                    <span class="tag">应用</span>
                    <span class="tag">入口</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

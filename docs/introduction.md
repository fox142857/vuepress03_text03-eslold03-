# 项目简介

请选择要了解的项目：

<div class="features">
  <div class="feature" onclick="window.location.href='/introduction/OBM.html'">
    <img src="/ico/obm-logo.png" alt="OBM Logo" class="feature-logo">
    <div class="feature-content">
      <h2>OBM</h2>
      <p>基于 Java + JavaFX + MyBatis + MySQL 开发的桌面应用，用于 ESL 信息录入管理。提供高效的数据采集和管理功能，支持多种扫码枪设备。</p>
    </div>
  </div>
  <div class="feature" onclick="window.location.href='/introduction/MDE.html'">
    <img src="/ico/mde-logo.png" alt="MDE Logo" class="feature-logo">
    <div class="feature-content">
      <h2>MDE</h2>
      <p>基于 Python + MySQL 开发的数据导出工具，支持多种导出格式。提供灵活的配置选项和友好的用户界面，让数据导出变得简单高效。</p>
    </div>
  </div>
</div>

<style>
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.feature {
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: var(--c-bg);
}

.feature:hover {
  transform: translateY(-5px);
  border-color: var(--c-brand);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-logo {
  width: 100px;
  height: 100px;
  margin-right: 2rem;
  flex-shrink: 0;
}

.feature-content {
  flex-grow: 1;
}

.feature h2 {
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: none;
  padding-bottom: 0;
  color: var(--c-brand);
  margin: 0 0 1rem 0;
}

.feature p {
  color: var(--c-text);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 919px) {
  .features {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 419px) {
  .feature {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .feature-logo {
    margin: 0 0 1.5rem 0;
  }
}
</style> 
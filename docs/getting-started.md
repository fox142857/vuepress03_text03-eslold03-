# 快速上手

请选择要了解的项目：

<div class="features">
  <div class="feature" onclick="window.location.href='/getting-started/OBM.html'">
    <h2>OBM</h2>
    <p>OutBound Management - ESL 信息录入管理系统</p>
  </div>
  <div class="feature" onclick="window.location.href='/getting-started/MDE.html'">
    <h2>MDE</h2>
    <p>MySQL Data Exporter - MySQL 数据导出工具</p>
  </div>
</div>

<style>
.features {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
  margin: 2rem 0;
}

.feature {
  flex-grow: 1;
  flex-basis: 45%;
  max-width: 45%;
  text-align: center;
  padding: 1.5rem;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 1rem;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--c-brand);
}

.feature h2 {
  font-size: 1.4rem;
  font-weight: 600;
  border-bottom: none;
  padding-bottom: 0;
  color: var(--c-brand);
  margin-bottom: 1rem;
}

.feature p {
  color: var(--c-text);
  line-height: 1.6;
}

@media (max-width: 719px) {
  .feature {
    flex-basis: 100%;
    max-width: 100%;
    margin: 1rem 0;
  }
}
</style> 
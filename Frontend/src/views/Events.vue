<template>
  <div class="events-page-with-sidebar">
    <el-container>
      <el-aside width="200px" class="sidebar">
        <el-menu
          :default-active="categoryFilter"
          @select="handleCategorySelect"
          class="category-menu"
        >
          <el-menu-item index="">All</el-menu-item>
          <el-menu-item index="academic">Academic</el-menu-item>
          <el-menu-item index="club">Club</el-menu-item>
          <el-menu-item index="sports">Sports</el-menu-item>
          <el-menu-item index="games">Games</el-menu-item>
          <el-menu-item index="culture">Culture</el-menu-item>
          <el-menu-item index="interest">Interest</el-menu-item>
          <el-menu-item index="HFS">HFS</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="events-header">
          <h2>Event List🔥</h2>
          <router-link to="/publish" class="publish-btn">
            🚀 Publish new event
          </router-link>
        </div>
        <!-- 监听 open-card 事件 -->
        <EventList :category="categoryFilter" @open-card="openCard" />

        <!-- 弹窗 -->
        <ElDialog v-model="isDialogOpen" title="Event Details" class="custom-dialog">
          <DetailCard v-if="selectedEvent" :event="selectedEvent" />
        </ElDialog>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import EventList from '../components/EventList.vue';
import DetailCard from '../components/DetailCard.vue';
import '../assets/sidebar.css';

const route = useRoute();
const isDialogOpen = ref(false);
const selectedEvent = ref(null);
const categoryFilter = ref(route.query.category || '');

watch(
  () => route.query.category,
  (val) => {
    categoryFilter.value = val || '';
  }
);

const openCard = (event: any) => {
  selectedEvent.value = event;
  isDialogOpen.value = true;
};

const handleCategorySelect = (key: string) => {
  categoryFilter.value = key;
};
</script>

<style scoped>
.events-page-with-sidebar {
  min-height: calc(100vh - 100px);
  background: #f5f5f5;
}

.events-page-with-sidebar .el-main {
  margin-left: 160px; /* 与 sidebar 宽度一致 */
}

.events-header {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 保证按钮和标题垂直居中 */
  margin-bottom: 0rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.events-header h2 {
  color: #6c63ff;
  font-weight: bold;
  letter-spacing: 1px;
}

h1 {
  color: #333;
  margin: 0;
  font-size: 2rem;
}

.publish-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(90deg, #b388eb 0%, #6c63ff 100%);
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-right: 0; /* 去掉原来的 margin-right: 50px; */
  border: none;
  box-shadow: 0 2px 8px rgba(108, 99, 255, 0.08);
}

.publish-btn:hover {
  background: linear-gradient(90deg, #9c6ad6 0%, #6c63ff 100%);
}

.icon {
  font-size: 1.2rem;
}

.custom-dialog {
  max-width: 600px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
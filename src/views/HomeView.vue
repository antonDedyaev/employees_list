<script lang="ts">
import EmployeesTable from '@/components/EmployeesTable.vue';
import PageHeader from '@/components/PageHeader.vue';
import AddButton from '@/components/AddButton.vue';
import { store } from '@/store/store';

export default {
  components: {
    EmployeesTable,
    PageHeader,
    AddButton
  },
  data() {
    return {
      store
    };
  }
};
</script>

<template>
  <div class="home-wrapper">
    <PageHeader pageTitle="Список сотрудников" />
    <EmployeesTable v-if="store.employees.length" />
    <h2 :style="{ color: 'red' }" v-else>Список сотрудников пуст!</h2>
    <AddButton />
  </div>
</template>

<style lang="scss">
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

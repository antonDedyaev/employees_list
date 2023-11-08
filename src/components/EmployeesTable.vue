<script lang="ts">
import { store } from '@/store/store';
import EmployeeCard from './EmployeeCard.vue';

export default {
  components: { EmployeeCard },

  data() {
    return {
      store
    };
  },
  mounted() {
    const cachedEmployees = localStorage.getItem('employees');
    if (cachedEmployees) {
      this.store.employees = JSON.parse(cachedEmployees);
    }
  }
};
</script>

<template>
  <div class="table-wrapper">
    <div class="table-wrapper__head">
      <div class="table-wrapper__head-title">Имя</div>
      <div class="table-wrapper__head-title">Фамилия</div>
      <div class="table-wrapper__head-title">Стаж</div>
      <div class="table-wrapper__head-title">Возраст</div>
      <div class="table-wrapper__head-title">Адрес</div>
      <div class="table-wrapper__head-title">Управление</div>
    </div>
    <div class="table-wrapper__body" v-for="employee in store.employees" :key="employee.id!">
      <EmployeeCard :employee="employee" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-wrapper {
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 15px 20px 30px;

  border-radius: 15px;

  background: #f2ebe9;

  &__head {
    display: flex;
  }

  &__head-title {
    width: 180px;

    font-size: 26px;
    line-height: 150%;

    &:nth-child(1) {
      padding-left: 10px;
    }

    &:nth-child(5) {
      width: 290px;
    }
  }
}
</style>

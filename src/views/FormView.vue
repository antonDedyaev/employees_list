<script lang="ts">
import PageHeader from '@/components/PageHeader.vue';
import EmployeeForm from '@/components/EmployeeForm.vue';
export default {
  components: {
    PageHeader,
    EmployeeForm
  }
};
</script>

<template>
  <div class="form-wrapper">
    <PageHeader pageTitle="Добавление сотрудника" />
    <EmployeeForm />
  </div>
</template>

<style lang="scss">
.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

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
    <div class="form-wrapper__header">
      <button class="form-wrapper__back" @click="$router.back">
        <img src="/back-icon.svg" alt="" />
      </button>
      <PageHeader pageTitle="Добавление сотрудника" />
    </div>

    <EmployeeForm />
  </div>
</template>

<style lang="scss">
.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    display: flex;
  }

  &__back {
    position: absolute;
    top: 30px;
    left: 5%;

    &:active {
      transform: translateX(-10px);
    }
  }
}
</style>

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
        <img src="/back-icon.svg" alt="Иконка назад" />
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
    top: 45px;

    img {
      width: 40px;
      height: 40px;
    }

    &:active {
      transform: translateX(-10px);
    }
  }
}

@media screen and (min-width: 375px) {
  .form-wrapper {
    &__back {
      left: 3%;
      top: 40px;

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .form-wrapper {
    &__back {
      left: 5%;
      top: 30px;

      img {
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>

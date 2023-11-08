<script lang="ts">
import type IEmployee from '@/models/IEmployee';
import type { PropType } from 'vue';
import { store } from '@/store/store';

export default {
  props: {
    employee: {
      type: Object as PropType<IEmployee>,
      required: true
    }
  },
  data() {
    return {
      store
    };
  },
  methods: {
    removeEmployee() {
      const remainingEmployees = this.store.employees.filter(({ id }) => id !== this.employee.id);
      this.store.employees = remainingEmployees;
      localStorage.setItem('employees', JSON.stringify(this.store.employees));
    }
  }
};
</script>

<template>
  <div class="card-wrapper">
    <div class="card-wrapper__entry">{{ employee.name }}</div>
    <div class="card-wrapper__entry">{{ employee.surname }}</div>
    <div class="card-wrapper__entry">{{ employee.experience }}</div>
    <div class="card-wrapper__entry">{{ employee.age }}</div>
    <div class="card-wrapper__entry">{{ employee.address }}</div>
    <div class="card-wrapper__controls">
      <button class="card-wrapper__controls-edit" @click="$router.push(`/form/${employee.id}`)">
        <img src="/edit-icon.svg" alt="Иконка редактирования" />
      </button>
      <button class="card-wrapper__controls-remove" @click="removeEmployee">
        <img src="/remove-icon.svg" alt="Иконка удаления" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  align-items: center;

  padding: 5px 10px;

  border-radius: 5px;

  box-shadow: 0 1px 10px 0px $teal;

  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &__entry,
  &__controls {
    width: 180px;

    display: flex;

    gap: 10px;

    font-size: 18px;
    line-height: 130%;

    &:nth-child(5) {
      width: 290px;
    }

    &:last-child {
      justify-content: center;
    }
  }
  &__controls-edit,
  &__controls-remove {
    width: 25px;
    height: 25px;

    &:active {
      transform: translateY(3px);
    }

    img {
      width: 25px;
      height: 25px;
    }
  }
}
</style>

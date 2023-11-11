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
    display: flex;

    gap: 10px;

    font-size: 18px;
    line-height: 130%;

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

@media screen and (max-width: 759px) {
  .card-wrapper {
    display: block;

    &__entry,
    &__controls {
      width: 300px;
      display: block;

      position: relative;
      margin-top: 15px;
      padding-left: 35%;

      font-size: 18px;

      border-bottom: 1px solid $dark;

      &:last-child {
        margin-top: 8px;
        border-bottom: none;
        padding-left: 43%;
      }

      &:before {
        position: absolute;

        left: 6px;
        width: 40%;
        padding-right: 10px;
        white-space: nowrap;
        color: $dark;
      }
      &:nth-of-type(1):before {
        content: 'Имя:';
      }
      &:nth-of-type(2):before {
        content: 'Фамилия:';
      }
      &:nth-of-type(3):before {
        content: 'Стаж:';
      }
      &:nth-of-type(4):before {
        content: 'Возраст:';
      }
      &:nth-of-type(5):before {
        content: 'Адрес:';
      }
    }
  }
}

@media screen and (min-width: 580px) {
  .card-wrapper {
    display: block;

    &__entry,
    &__controls {
      width: 400px;
      display: block;
    }
  }
}

@media screen and (min-width: 760px) {
  .card-wrapper {
    display: flex;
    &__entry,
    &__controls {
      width: 100px;

      font-size: 14px;

      &:nth-child(5) {
        width: 180px;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .card-wrapper {
    &__entry,
    &__controls {
      width: 180px;

      font-size: 18px;

      &:nth-child(5) {
        width: 290px;
      }
    }
  }
}
</style>

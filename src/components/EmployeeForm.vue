<script lang="ts">
import type IEmployee from '@/models/IEmployee';
import { store } from '@/store/store';

export default {
  data() {
    return {
      store,
      formData: {
        id: null,
        name: '',
        surname: '',
        experience: null,
        age: null,
        address: ''
      } as IEmployee
    };
  },
  methods: {
    saveEmployee() {
      const newEmployee = {
        id: this.formData.id ?? Date.now(),
        name: this.formData.name,
        surname: this.formData.surname,
        experience: Number(this.formData.experience),
        age: Number(this.formData.age),
        address: this.formData.address
      };

      if (this.formData.id) {
        const matchedIndex = this.store.employees.findIndex(({ id }) => id === this.formData.id);
        this.store.employees[matchedIndex] = newEmployee;
      } else {
        this.store.addEmployee(newEmployee);
      }
      localStorage.setItem('employees', JSON.stringify(this.store.employees));
      this.$router.push('/');
    }
  },
  mounted() {
    const matchedEmployee = this.store.employees.find(
      ({ id }) => id === Number(this.$route.params.id)
    );
    if (matchedEmployee) {
      this.formData = matchedEmployee;
    }
  }
};
</script>

<template>
  <form action="" class="employee-form" @submit.prevent="saveEmployee">
    <div class="employee-form__inputs">
      <label for="employee-name">Имя</label>
      <input
        v-model="formData.name"
        type="text"
        id="employee-name"
        name="employee-name"
        class="employee-form__name"
        placeholder="Иван"
        required
      />
    </div>
    <div class="employee-form__inputs">
      <label for="employee-surname">Фамилия</label>
      <input
        v-model.trim="formData.surname"
        type="text"
        id="employee-surname"
        name="employee-surname"
        class="employee-form__surname"
        placeholder="Петров"
        required
      />
    </div>
    <div class="employee-form__inputs">
      <label for="employee-experience">Стаж (лет)</label>
      <input
        v-model.trim="formData.experience"
        type="text"
        id="employee-experience"
        name="employee-experience"
        class="employee-form__experience"
        placeholder="15"
        required
      />
    </div>
    <div class="employee-form__inputs">
      <label for="employee-age">Возраст</label>
      <input
        v-model.trim="formData.age"
        type="text"
        id="employee-age"
        name="employee-age"
        class="employee-form__age"
        placeholder="40"
        required
      />
    </div>
    <div class="employee-form__inputs">
      <label for="employee-address">Адрес</label>
      <input
        v-model.trim="formData.address"
        type="text"
        id="employee-address"
        name="employee-address"
        class="employee-form__address"
        placeholder="Москва, ул. Ленина 15 - 135"
        required
      />
    </div>
    <button type="submit" class="employee-form__save-button">Сохранить</button>
  </form>
</template>

<style lang="scss" scoped>
.employee-form {
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 20px 25px;

  border-radius: 10px;
  background: #f2ebe9;

  &__inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 24px;

    input {
      width: 65%;

      padding: 5px 10px;
      border: none;
      border-bottom: 2px solid $teal;

      font-size: 18px;

      &::placeholder {
        font-size: 18px;
        font-style: italic;

        opacity: 0.6;
      }
    }
  }

  &__save-button {
    width: max-content;

    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 25px;

    color: $azure;
    font-size: 20px;

    border-radius: 5px;

    background: $green;

    &:hover {
      background: $dark-green;
    }

    &:active {
      transform: translateY(4px);
    }
  }
}
</style>

import { reactive } from 'vue';
import type IEmployee from '@/models/IEmployee';

export const store = reactive({
    employees: [{
        id: Date.now(),
        name: 'Иван',
        surname: 'Петров',
        experience: 15,
        age: 40,
        address: 'Москва, ул. Ленина 15 - 135'
    }] as IEmployee[],
    addEmployee(newEmployee: IEmployee) {
        this.employees.push(newEmployee)
    }

})
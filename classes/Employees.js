class Employees {
    #salary;
    #isHired = true;
    static #allEmployees = [];

    constructor(name, title, salary){
        this.name = name;
        this.title = title;
        this.#salary = salary;
        Employees.#allEmployees.push(this);
    }

    getSalary(){
        return this.#salary;
    }

    setSalary(amount){
        this.#salary = amount;
    }

    getStatus(){
        return this.#isHired;
    }

    setStatus(command){
        if(command == 'fire'){
            this.#isHired = false;
        } else {
            this.#isHired = true;
        }
    }
    static getEmployees(){
        return this.#allEmployees;
    }
    static getTotalPayroll(){
        let count = 0;
        this.#allEmployees.forEach(item=>{
            count += item.#salary
        })
        return count;
    }
    
}

module.exports = {
    Employees,
}
const {Employees} = require('./Employees');
class SoftwareEngineer extends Employees {
    #programmingLanguages;
    constructor(name, title, salary, progammingLanguages){
        super(name,title, salary);
        this.#programmingLanguages = progammingLanguages;
    }
    getProgrammingLanguages(){
        return this.#programmingLanguages;
    }
    setProgrammingLanguages(language){
        this.#programmingLanguages.push(language);
    }
    
}

module.exports = {
    SoftwareEngineer,
}
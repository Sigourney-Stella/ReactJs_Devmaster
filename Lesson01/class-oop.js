class Person{
    constructor(){
        this.name = "Quang";
        this.age = 37;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}
//kế thừa
class Student extends Person{
    constructor(name,age,studentId){
        super(name,age);
        this.studentId="SV001";
    }
    getStudentInfo(){
        return "Tên: "+this.getName()+" - Tuổi: "+this.getAge()+" - Mã SV: "+this.studentId;
    }
}
var student = new Student();
console.log(student.getStudentInfo());
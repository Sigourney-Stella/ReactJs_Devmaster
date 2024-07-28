const arr = [1,2,3,4,5];
const [a,b] = arr; // lấy tuần tự trừ trái sang phải
console.log("a: ", a);
console.log("b: ", b);
console.log("arr: ", arr);

const perObject = {
    name: "Quang",
    age: 23,
    address: "Ha Noi"
}
console.log("==============");
const{name,age,Name} = perObject; // lấy chính xác theo đúng thuộc tính của object
console.log("Name: ", name);
console.log("Name: ", Name);// k có giá trị => undefined
console.log("Age: ",age);
//console.log("address: ",address); // lỗi vì chưa khai báo 
console.log(perObject);
// let xd=['Web','WebX','Jay'];
// xd.unshift()
// console.log(xd);


// function msd() {
//     var xd='Web'
//     console.log(xd);
// }
// msd()

// const msd= async()=>{
//     try {
//         const url='https://jsonplaceholder.typicode.com/todos/1';
//         const xd= await fetch(url);
//         const data=await xd.json();
//         console.log(data.title);
//     } catch (error) {
//         console.log(error);
//     }
// }
// msd();



// setTimeout(() => {
//     console.log("Web");
//     // document.write('Web')
// }, 2000);



// let xd=document.getElementsByTagName('button');

// xd.addEventListener('click', async()=>{
// try {
//     const emp='';
//     let url='https://jsonplaceholder.typicode.com/todos/1';
//     const fct= await fetch(url);
//     const mdx=await fct.json();
//     // console.log(mdx);
//     for (let i = 0; i < num.value; i++) {
//         emp=emp+`<img src='${mdx[i].title}'/>`        
//     }
// } catch (error) {
//     console.log(error);
// }

// })


// function msdx() {
//     let cd=new Object()
//     cd.id=123;
//     cd.emp='Web'
//     console.log(`${cd.id}`);
// }
// msdx();


function numb() {
    // let num='0123456789';
    let otp='';
    for (let x = 0; x <4; x++) {
        otp=(otp)+[Math.floor(Math.random()*10)]        
    }
    // console.log(otp);
    // console.log(typeof otp)
document.getElementById('num').innerHTML=otp;

// document.write(`<p>${otp}</p>`)
}
numb();



// console.log(Math.random()*10);



// let obj={name:'Web', fname:"WebServer"};
// function data() {
//     obj.fname='Jay'
//    console.log(obj); 
// }
// data(obj)




// class msd{
//     constructor(id,name){
//         this.id=id;
//         this.name=name;
//     }

//     print(){
//         console.log(this.id+this.name)
//     }
// }
// let xd= new msd(12,'Web');
// xd.print();



// // Abstraction: Hiding the internal functionality showing only required function

// class Abstraction{
//     constructor(maxbal,minbal,out){
//         this.maxbal=maxbal;
//         this.minbal=minbal;
//         this.out=out;
//     }
//     method(){
//         if ((this.maxbal-this.out)>=this.minbal) {
//             console.log(this.out+"Condition satisfied");
//         } else {
//             console.log("Not");
//         }
//     }
// }
// let obj=new Abstraction(2000,400,1500);
// obj.method()



// //Encapsualation: Wrapping the data variables and methods together hides them from other classes

// class Encapsualation{
//     constructor(name,empId){
//         this.name=name;
//         this.empId=empId;
//     }

//     details(){
//         console.log(this.name);
//     }
//     detailsone(){
//         console.log(this.empId);
//     }
// }

// let obj= new Encapsualation('Jay',24)
// obj.details()
// obj.detailsone()


// //Inheritance: Accqring the properties from paraent class to child class

// class Inheritance{
//     method(xd){
//         this.xd=xd;
//         console.log("Parent");
//     }
// }
// class Child extends Inheritance{
//     constructor() {
//         super();
//     }
//     method1(){
//         console.log(this.xd)
//     }
// }

// let obj=new Child();
// obj.method("Web")
// obj.method1();


// //Polymorphism: Perform single functions in diferent ways

// class Polymorphism{
//     method(){
//         console.log("Web")
//     }
// }  

// class Child extends Polymorphism{
//     method(){
//         console.log("WebX")
//     }
// }
// let obj=new Child();
// obj.method()



// function  num(xd) {
//     xd()
//     // console.log('WebX');
//     setTimeout(() => {
//          console.log('web');
//     }, 2000);
// }
// num(()=>{
//     console.log("Arguements");
// })





// function named(card) {
//     console.log('msd');
//    return ()=>{
//     console.log(card);
//    }
// }

// let xdx=named()
// xdx()











// class Inheritance{
//     methodName(namex) {
//         this.namex=namex;
//     }
// }
// class Child extends Inheritance{
//     xdMsd() {
//         console.log(this.namex);
//     }
// }
// let zx=new Child()
// zx.methodName("WebX")
// zx.xdMsd()





// let arr=["Jay","Web","WebX"];
// let[xd,dx,xdx]=arr;
// console.log(xd);



// function mdx() {
//     let otp='';
//     for (let x = 0; x < 6; x++) {
//         otp=otp+[Math.floor(Math.random()*10)];        
//     }
//     console.log(otp);
// }
// mdx();


const mdxd = [12, 34, 34, 122, 784, 5, 6, 67, 67, 87, 23, 43, 43];

// for (let i = 0; i < xd.length; i++) {
//     for (let x = i; x < xd.length; x++) {
//         let temp=0;
//         if (xd[i]>xd[x]) {

//             temp=xd[i];
//             xd[i]=xd[x];
//             xd[x]=temp;
//         }
//     }  
// console.log(xd[i]);

// }
mdxd.filter((x, y) => { return (x - y) })
console.log(mdxd);
// console.log([new Set(xd)]);

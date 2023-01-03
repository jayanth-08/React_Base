class Inheritance{
    methodName = (emp) => {
      this.emp=emp;
    }
    methodNameX = (age) => {
      this.age=age;
    }
    
  }
  class Child extends Inheritance{
    msdXd = () => {
      console.log(this.age,this.emp);
    }
    
  }
  
  
  let az=new Child()
  az.methodName('Jay')
  az.methodNameX(22)
  az.msdXd()
  
  
  
  
  
  
  
  
  
  
  class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
      getName = () => {
        return this.name
      }
  
      getAge = () => {
        return this.age
      }
  }
  
  class msd{
    constructor(name,age,add){
        this.name=name;
        this.age=age;
        this.add=add;
      }
      methodNameage = () => {
        return this.age
      }
  
      methodNamename = () => {
        return this.name
      }
  
      methodNameadd = () => {
        return this.add
      }
  
      addInfo = (WebX) => {
        this.add.push(WebX);
      }
      
  }
  
  let per1=new Person('Jay',23)
  let per12=new Person('JayX',24)
  let per121=new Person('JayXdc',26)
  // console.log(per1,per12);
  
  
  let xd=new msd("WebX",234,[per1,per12,per121]);
  console.log(xd.methodNameadd());
  
  let WebX=new Person("WebServer",400)
  xd.addInfo(WebX)
  console.log(xd.methodNameadd());
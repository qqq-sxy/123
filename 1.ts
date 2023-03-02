class A {
    private name: string;
    constructor(name:string) {
        this.name = name
    }
}

class B extends A {
    private age: number;
    constructor(name:string, age:number) {
        super(name)
        this.age = age
    }

    show() {
        console.log(this.name, this.age)
    }
}

let a = new A('a')
let b = new B('c', 12)
b.show() //c 12
// a.name //报错：属性name受保护，只能在类"A"及其子类中访问
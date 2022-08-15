class A{
    //properties

    //constructor

    //methods
    myMethod(){
        console.log("helllo from myMethod")
        this.A1(); //internal object
    }
    A1(){
        console.log("helllo 1")
       
    }
}
//let obj = new A();
//obj.myMethod();
class B extends A{
    B1(){
        console.log("helllo 2");
        this.myMethod();
        this.A1();
    }
}
//let obj = new B();
//obj.B1();
class C extends B{
    C1(){
        console.log("helllo 3");
        obj.B1();
    }
}
class D extends C{
    D1(){
        console.log("helllo 4");
    }
}
class E extends D{
    E1(){
        console.log("helllo 5");

    }
}
class F extends E{
    F1(){
        console.log("helllo 6");
    }
}
class G extends F{
    G1(){
        console.log("helllo 7");
    }
}
class H extends G{
    H1(){
        console.log("helllo 8");
    }
}
class I extends H{
    I1(){
        console.log("helllo 9");
    }
}
class J extends I{
    J1(){
        console.log("helllo 10");
    }
}
class K extends J{
    K1(){
        console.log("helllo 11");
    }
}
class L extends K{
    L1(){
        console.log("helllo 12");
    }
}
class M extends L{
    M1(){
        console.log("helllo 13");
    }
}
class N extends M{
    N1(){
        console.log("helllo 14");
    }
}
class O extends N{
    O1(){
        console.log("helllo 15");
    }
}
class P extends O{
    P1(){
        console.log("helllo 16");
    }
}
class Q extends P{
    Q1(){
        console.log("helllo 17");
    }
}
class R extends Q{
    R1(){
        console.log("helllo 18");
    }
}
class S extends R{
    S1(){
        console.log("helllo 19");
    }
}
class T extends S{
    T1(){
        console.log("helllo 20");
        obj.D1();
        obj.S1();
    }
}
class U extends T{
    U1(){
        console.log("helllo 21");
    }
}
class V extends U{
    V1(){
        console.log("helllo 22");
    }
}
class W extends V{
    W1(){
        console.log("helllo 23");
    }
}
class X extends W{
    X1(){
        console.log("helllo 24");
        obj.A1();
        obj.C1();
    }
}
class Y extends X{
    Y1(){
        console.log("helllo 25");
        //obj.X1();
        obj.B1();
    }
}
class Z extends Y{
    Z1(){
        console.log("helllo 26");
        obj.X1();
        obj.Y1();
        obj.T1();
    }
}
let obj = new Z();
obj.Z1();
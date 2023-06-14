// punto uno
/*class Auto 
{
    constructor(color,marca, modelo)
    {
        this.color= color;
        this.marca= marca;
        this.modelo= modelo;
    }
        
    apagado()
    {
        document.write("el auto esta apagado");
    }

    encendido()
    {
        document.write("el auto esta encendido");
    }
}

let autoUno = new Auto('negro', 'ford', 2018);
autoUno.apagado();
autoUno.encendido();

//punto dos

class Cuenta 
{
    constructor(titular, saldo)
    {
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(dinero)
    {
        this.saldo = this.saldo + dinero; 
    }

    extraer(dinero)
    {
        this.saldo = this.saldo - dinero; 
    }

    informar()
    {
        console.log(`la cuenta titular de ${this.titular}, tiene un saldo actual de ${this.saldo}`);
    }


}

let cuentaUno = new Cuenta('SOFIA', 500);
cuentaUno.informar();
cuentaUno.ingresar(50);
cuentaUno.extraer(100);
cuentaUno.informar();
*/

//punto tres 

class Rectangulo
{
    constructor(alto, ancho)
    {
        this.alto = alto;
        this.ancho = ancho;
    }

    modificar (ladoA, ladoB)
    {
        this.alto = ladoA;
        this.ancho = ladoB;

        console.log(`las propiedades del rectangulo son ${this.alto} cm de alto y ${this.ancho} cm de ancho`);
    }

    perimetro ()
    {
        this.pe = (this.ancho + this.alto)*2 ;

        console.log(`el perimetro del rectangulo es ${this.pe} cm`);
    }
}

let rectanguloUno  = new Rectangulo(5,10);
rectanguloUno.modificar(60,100);
rectanguloUno.perimetro();
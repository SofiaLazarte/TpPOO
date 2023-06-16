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

//punto dos-------------------------------------------------------------------------------------------------------------------------------------

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


//punto tres -------------------------------------------------------------------------------------------------------------------------------

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


//punto cuatro---------------------------------------------------------------------------------------------------------------------------------

class Producto 
{
    constructor(codigo, nombre, precio)
    {
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }

    imprimeDatos ()
    {
        console.log(`el producto llamado ${this.nombre} codigo: ${this.codigo} tiene un precio de $ ${this.precio}`);
    }
}

//intancias de productos
var productoUno = new Producto(1548, "LapiceraBic", 45);
var productoDos = new Producto(14, "carpeta", 450.05);
var productoTres = new Producto(5, "mochila", 5549.50);

var arrayProductos = [productoUno, productoDos, productoTres];
for (let i = 0; i < arrayProductos.length; i++) 
{
    arrayProductos[i].imprimeDatos();
}

//punto cinco ----------------------------------------------------------------------------------------------------------------------------

class Persona 
{
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;

    }

    mostrarGeneracion()
    {
        if (this.nacimiento <= 1948) 
        {
            document.write(`${this.nombre} pertenece a la generacion Silent la cual tiene como razgo caracteristico la austeridad`);
        }

        else if (this.nacimiento >= 1949 || this.nacimiento <= 1968) 
        {
            document.write(`${this.nombre} pertenece a la generacion Baby Boom la cual tiene como razgo caracteristico la ambicion`);
        }

        else if (this.nacimiento >= 1969 || this.nacimiento <= 1980) 
        {
            document.write(`${this.nombre} pertenece a la generacion X la cual tiene como razgo caracteristico la obsesion por el exito`);
        }

        else if (this.nacimiento >= 1981 || this.nacimiento <= 1993) 
        {
            document.write(`${this.nombre} pertenece a la generacion Y o Millennials la cual tiene como razgo caracteristico la frustracion`);
        }

        else if (this.nacimiento >= 1994 || this.nacimiento <= 2010) 
        {
            document.write(`${this.nombre} pertenece a la generacion Z la cual tiene como razgo caracteristico la irreverencia`);
        }

        else 
        {
            document.write(`${this.nombre} pertenece a la generacion desconocida`);
        }

    }

    esMayordeEdad()
    {
        if (this.edad >= 18) 
        {
            document.write(`${this.nombre} es mayor de edad`);
        } 
        else 
        {
            document.write(`${this.nombre} es menor de edad`);
        }

    }

    MostrarDatos()
    {
        document.write(`${this.nombre} ${this.sexo} de ${this.edad} años, con DNI ${this.dni} y fecha de nacimiento el dia ${this.nacimiento}. Tiene una altura de ${this.altura} cm y un peso de ${this.peso} kg. `);
    }

    generarDni()
    {
        this.dni = (Math.round(Math.random() * (100000000 - 10000000 ) + 10000000));
        document.write(this.dni)
    }
}

var personaUno = new Persona ("Segundo", 25, 48522475, "masculino", 90, 198, 1997);

personaUno.mostrarGeneracion();
personaUno.esMayordeEdad();
personaUno.MostrarDatos();
personaUno.generarDni();*/

//punto seis -------------------------------------------------------------------------------------------------------------------------------
class Libro
{
    constructor(isbn, titulo, autor, numeroDePaginas)
    {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }

    set modificarIsbn(nuevoValor)
    {
        this.isbn = nuevoValor;
    }
    
    get getIsbn()
    {
        return this.isbn;
    }

    set modificarTitulo(nuevoValor)
    {
        this.titulo = nuevoValor;
    }
    
    get getTitulo()
    {
        return this.titulo;
    }

    set modificarAutor(nuevoValor)
    {
        this.autor = nuevoValor;
    }
    
    get getAutor()
    {
        return this.autor;
    }

    set modificarNumeroDePaginas(nuevoValor)
    {
        this.numeroDePaginas = nuevoValor;
    }
    
    get getNumeroDePaginas()
    {
        return this.numeroDePaginas;
    }

    mostrarLibro()
    {
        console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} paginas`)
    }
    
    compararNumeroDePaginas(libroDos) //se le pasa el obejeto 2 asi puedo usar sus atributos. 
    {
        
        if (this.numeroDePaginas > libroDos.numeroDePaginas ) 
        {
            document.write(`El libro ${this.titulo} tiene mas numeros de paginas`);   
        } 
        else 
        {
            document.write(`El libro ${libroDos.titulo} tiene mas numeros de paginas`);   
        }
    }

}

var libroUno = new Libro (4, "alicia en el pais de las maravillas", "Nicolas Burgos", 1542);
var libroDos = new Libro (5, "Harry Potter", "Sofia Lazarte", 1887);

libroUno.mostrarLibro();
libroDos.mostrarLibro();
libroUno.compararNumeroDePaginas(libroDos); // si le paso el objeto puedo usar propiedades y metodos 

libroDos.modificarIsbn = 78; //uso el set de arriba para modicar
console.log (libroDos.getIsbn);// y luego imprimo el valor con su funcion get


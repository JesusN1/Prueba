import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto01';
}



class producto {
  pro_nombre: string;
  pro_cantidad: number;

  constructor() {
    this.pro_nombre = '';
    this.pro_cantidad = 0;
  }

  mod_cantidad(operacion: string, monto: number): boolean /*true = Operacion Realizada Correctamente, false = Error en la operacion*/{
    let status:boolean = false;

    if (monto <= 0) {console.log('\tNo se puede ingresar el valor.');}
    else {
      switch (operacion) {
        case 'añadir':
            this.pro_cantidad += monto;
            return true;
        case 'quitar':
          if ((this.pro_cantidad - monto) < 0) {
            console.log('\tNo hay suficientes productos.');
            return false;
          }
          else {
            this.pro_cantidad -= monto;
            console.log(`\t ${this.pro_nombre} a -${monto}.`);
            return true;
          }
      }
      console.log(`\tCantidad producto [${this.pro_nombre}] es de ${this.pro_cantidad}.`);
      return false;
    }
    return status;
  }
}


class almacen {
  alm_nombre: string;
  alm_productos: producto[];

  constructor() {
    this.alm_nombre = ''
    this.alm_productos = [];
  }
}


function existeProducto(nom_producto: string, almacen: almacen): boolean{
  let status:boolean = false;
  almacen.alm_productos.forEach((producto) => {
    if (producto.pro_nombre == nom_producto) {
      status = true;
    }
  });
  return status;
}

function buscarProducto(nom_producto: string, almacen: almacen){
  if (existeProducto(nom_producto, almacen) == true) {return almacen.alm_productos.find(producto => producto.pro_nombre === nom_producto);}
  return null;
}

function moverProducto(alm_origen: almacen, nom_producto: string, cantidad: number, alm_destino: almacen){
  if (existeProducto(nom_producto,alm_origen)== true && existeProducto(nom_producto,alm_destino) == true){
    if (buscarProducto(nom_producto, alm_origen)?.mod_cantidad('quitar', cantidad) == true){
      if (buscarProducto(nom_producto, alm_destino)?.mod_cantidad('añadir', cantidad) == true){
        console.log(`Se ha movido ${cantidad} productos ${nom_producto} del ${alm_origen.alm_nombre} a [${alm_destino.alm_nombre}].`)
      }
    }
  }
}

function vizualizaralmacen(almacen: almacen){
  console.log(`Mostrando [${almacen.alm_nombre}]`)
  console.log('\tNombre Producto\t\tCantidad')
  almacen.alm_productos.forEach((producto) => {
    console.log(`\t\t${producto.pro_nombre}\t\t\t${producto.pro_cantidad}`);
  });
  console.log('-//--//--//--//--//-')
}


const alm_01 = new almacen(); alm_01.alm_nombre = 'Almacen de Utiles Escolares 1';
  const prod_01 = new producto();
    prod_01.pro_nombre = "Cuadernos"
    prod_01.pro_cantidad = 10;
  const prod_02 = new producto();
    prod_02.pro_nombre = "Libros"
    prod_02.pro_cantidad = 25;
  const prod_03 = new producto();
    prod_03.pro_nombre = "Cafe"
    prod_03.pro_cantidad = 5;
  const prod_04 = new producto();
    prod_04.pro_nombre = "Laminas"
    prod_04.pro_cantidad = 15;
  const prod_05 = new producto();
    prod_05.pro_nombre = "Colores"
    prod_05.pro_cantidad = 45;
  const prod_06 = new producto();
    prod_06.pro_nombre = "Plumones"
    prod_06.pro_cantidad = 4;
    
  alm_01.alm_productos.push(prod_01)
  alm_01.alm_productos.push(prod_02)
  alm_01.alm_productos.push(prod_03)
  alm_01.alm_productos.push(prod_04)
  alm_01.alm_productos.push(prod_05)
  alm_01.alm_productos.push(prod_06)

const alm_02 = new almacen(); alm_02.alm_nombre = 'Almacen de Bebidas embotelladas 1';
const prod_07 = new producto();
  prod_07.pro_nombre = "Gasificadas"
  prod_07.pro_cantidad = 100;
const prod_08 = new producto();
  prod_08.pro_nombre = "Naturales"
  prod_08.pro_cantidad = 25;
const prod_09 = new producto();
  prod_09.pro_nombre = "Energeticas"
  prod_09.pro_cantidad = 64;
  
alm_02.alm_productos.push(prod_07)
alm_02.alm_productos.push(prod_08)
alm_02.alm_productos.push(prod_09)

const alm_03 = new almacen(); alm_03.alm_nombre = 'Almacen de Utiles Escolares 2';
const prod_10 = new producto();
  prod_10.pro_nombre = "Cuadernos"
  prod_10.pro_cantidad = 25;
const prod_11 = new producto();
  prod_11.pro_nombre = "Libros"
  prod_11.pro_cantidad = 50;
const prod_12 = new producto();
  prod_12.pro_nombre = "Laminas"
  prod_12.pro_cantidad = 90;
const prod_13 = new producto();
  prod_13.pro_nombre = "Cartulina"
  prod_13.pro_cantidad = 10;
const prod_17 = new producto();
  prod_17.pro_nombre = "Colores"
  prod_17.pro_cantidad = 45;
const prod_18 = new producto();
  prod_18.pro_nombre = "Plumones"
  prod_18.pro_cantidad = 4;  
  
alm_03.alm_productos.push(prod_10)
alm_03.alm_productos.push(prod_11)
alm_03.alm_productos.push(prod_12)
alm_03.alm_productos.push(prod_13)
alm_03.alm_productos.push(prod_17)
alm_03.alm_productos.push(prod_18)

const alm_04 = new almacen(); alm_04.alm_nombre = 'Almacen de Bebidas embotelladas 2';
const prod_14 = new producto();
  prod_14.pro_nombre = "Gasificadas"
  prod_14.pro_cantidad = 11;
const prod_15 = new producto();
  prod_15.pro_nombre = "Naturales"
  prod_15.pro_cantidad = 30;
const prod_16 = new producto();
  prod_16.pro_nombre = "Energeticas"
  prod_16.pro_cantidad = 50;
  
alm_04.alm_productos.push(prod_14)
alm_04.alm_productos.push(prod_15)
alm_04.alm_productos.push(prod_16)


//if (prod_01.mod_cantidad('quitar',5) == true){//}
//existeProducto('Papa', alm_01);


vizualizaralmacen(alm_01);
vizualizaralmacen(alm_03);


moverProducto(alm_01,'Laminas',5,alm_03);

vizualizaralmacen(alm_01);
vizualizaralmacen(alm_03);

//console.log(alm_01.alm_productos[0].pro_cantidad);
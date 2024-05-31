console.log(Vue)

const estudiantes=[{nombre:"Anddy",apellido:"Quisilema"},
{nombre:"Filip-po",apellido:"Hasckiiv"},
{nombre:"Pepito",apellido:"Perez"},
{nombre:"Niño",apellido:"Moi"},
{nombre:"Brus",apellido:"Banneado"}
];


const app = Vue.createApp({
  //  template:`
   // <h1>Hola mundo desde VueJS</h1>
    //<p>{{1+1}}</p>
    //<p>{{[1, 2, 3]}}</p>
    //<p>{{true?'Verdadero':'Falso0'}}</p>
    //`
  data(){
    return{
      mensaje: "Hola Mundo Propiedad Reactiva",
      valor: 7,
      lista: estudiantes,
      nombre: null,
      apellido:null
    }
  },
  methods:{
    
    cambiarTexto(){
      this.mensaje="Holitas de mar";
      
    },
    sumar(){
      this.valor=this.valor+10
    },
    agregar() {
      console.log(this.nombre);
      console.log(this.apellido)
      const nuevo = {
          nombre: this.nombre,
          apellido: this.apellido
      }
      this.lista.unshift(nuevo);
      this.nombre=null;
      this.apellido=null;
      this.resetear
  },
  resetear(){
    this.nombre=null;
    this.apellido=null;


  },
  agregar2(charCode){
    //console.log(event)
    console.log(charCode);

    if(charCode !== 13) return;
    if(this.nombre!==null & this.apellido!==null){

      this.agregar();
    }




  }
  
  }


});
app.mount('#myApp')
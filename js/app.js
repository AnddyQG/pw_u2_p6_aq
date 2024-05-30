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
      lista: estudiantes
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
      const nuevo = {
          nombre: "Anddy",
          apellido: "Quisilema"
      }
      this.lista.unshift(nuevo);
  }
  
  }


});
app.mount('#myApp')
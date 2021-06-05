require('colors')

const {inquirerMenu,pausa} = require('./helpers/inquirer');
const Tarea =  require('./models/Tarea');
const Tareas =  require('./models/Tareas')




const main = async() => {
    
    let opt = '';
  
    do {
  opt = await  inquirerMenu();
 // console.log({opt});
 const tareas = new Tareas();
 const tarea = new Tarea('comida');

 //tareas._listado[tarea.id] = tarea;
 //console.log(tareas);
  
  
        await pausa();


    }while(opt !== '0');
    
   

  






}

main();
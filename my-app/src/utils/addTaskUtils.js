const getLastId = (TasksData) =>{
    //Pegar o ultimo id de tarefa para poder criar uma nova
  
}

export const addTask = (newTask, userId) =>{

    //Adicionar a tarefa nova no localstorage
    if(VerifyTasksArray){

    }
}

const VerifyTasksArray = () =>{
    //Verifica se o armazenamento de tasks existe
    if(!localStorage.get("new_task_array")){
    //Caso contrario cria
    localStorage.set("new_task_array", [])
    }
  
} 

const getTaskArray = ()=>{
    //Passa no local storage e pega o array com todas as tasks novas
    return localStorage.get("new_task_array")
}
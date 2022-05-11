const insertLocalStorage = (userTodo) => {
  if (!(localStorage.getItem(userTodo.id) != null)) {
    localStorage.setItem(userTodo.id, userTodo.completed);
    return true;
  }
  return false;
};

const getLocalStorageStatus = (userTodo) => localStorage.getItem(userTodo.id);

export const getUserTodo = (userid, apiData) => {
  //Basicamente recebe o resultado da api pelo id e retorna um array com as infos do todo

  const filterUser = apiData.filter(
    (todoObject) => todoObject.userId == userid
  );
  //Insere no nosso local storage
  filterUser.forEach(function (userTodo) {
    insertLocalStorage(userTodo);
  });

  //Caso ja exista retornar o nosso objeto atualizado
  return filterUser.map(function (userTodo) {
    return {
      userId: userTodo.userId,
      id: userTodo.id,
      title: userTodo.title,
      completed: getLocalStorageStatus(userTodo),
    };
  });
};

export const updateLocalStorage = (todoId, status) => {
  localStorage.setItem(todoId, status);
  return true;
};

export const getUserNameById = (userRequest, userId) => {
  const userObject = userRequest.filter(
    (userObject) => userObject.id == userId
  );
  return userObject[0].name;
};

export const getTodoStatusNumber = (userTasks) => {
  const toDoList = userTasks.filter(
    (userObject) => userObject.completed == "true"
  );
  return [toDoList.length, userTasks.length];
};

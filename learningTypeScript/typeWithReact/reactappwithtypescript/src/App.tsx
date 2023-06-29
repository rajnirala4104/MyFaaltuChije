import { useState } from "react";
import "./App.css";
import { InputSection } from "./components/InputSection";
import { TaskCardModal } from "./modal";
import { constants } from "buffer";

function App() {
  const [userInputTask, setUserInputTask] = useState<string>("");
  const [allTodos, setAllTodos] = useState<TaskCardModal[]>([]);

  // console.log(userInputTask)

  const handleTask = () => {
    // console.log(userInputTask);
    if(userInputTask){
      setAllTodos([...allTodos ,{taskId: Date.now(), task:userInputTask, isDone:false}])
    }
      setUserInputTask("");
      console.log(allTodos)
  };
  return (
    <div className="App">
      <div className="container display-6 p-2 my-4 bg-dark text-light">
        ToDo
      </div>
      <div className="taskContainer">
        <InputSection
          userInputTask={userInputTask}
          handleTaskFunction={handleTask}
          setUserInputTask={setUserInputTask}
        />
      </div>
    </div>
  );
}

export default App;

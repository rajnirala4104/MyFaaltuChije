import { useState } from "react";
import "./App.css";
import { InputSection } from "./components/InputSection";
import { TaskCardModal } from "./modal";
import { ShowTaskSection } from "./components/ShowTaskSection";

function App() {
  const [userInputTask, setUserInputTask] = useState<string>("");
  const [allTodos, setAllTodos] = useState<TaskCardModal[]>([]);

  const handleTask = () => {
    if (userInputTask) {
      setAllTodos([
        ...allTodos,
        { taskId: Date.now(), task: userInputTask, isDone: false },
      ]);
      setUserInputTask("");
    }
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
      <section className="container bg-light">
        <ShowTaskSection showAllTodos={allTodos}/>
      </section>
    </div>
  );
}

export default App;

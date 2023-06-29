interface Props {   
    userInputTask: string;
    setUserInputTask: React.Dispatch<React.SetStateAction<string>>;
    handleTaskFunction: () => void;
}


export const InputSection = ({userInputTask, setUserInputTask, handleTaskFunction}:Props) => {


  return (
    <>
      <div className="inputSection container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task here..."
            aria-label="Recipient's username"
            onChange={(e)=>setUserInputTask(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" onClick={handleTaskFunction} type="button">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

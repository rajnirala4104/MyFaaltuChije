interface Props {   
    userInputTask: string;
    setUserInputTask: React.Dispatch<React.SetStateAction<string>>;
    handleTaskFunction: () => void;
}

export const InputSection = ({userInputTask, setUserInputTask, handleTaskFunction}:Props) => {

  return (
    <>
      <div className="inputSection container">
        <div className="flex = justify-center items-center">
          <input
            type="text"
            className="form-control outline-none py-1 px-3 my-3 rounded-md text-xl bg-slate-200"
            placeholder="Enter Task here..."
            aria-label="Recipient's username"
            onChange={(e)=>setUserInputTask(e.target.value)}
          />
          <div className="input-group-append mx-2">
            <button className="bg-gray-700 text-white px-2 py-1 rounded-md font-bold hover:bg-black" onClick={handleTaskFunction} type="button">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

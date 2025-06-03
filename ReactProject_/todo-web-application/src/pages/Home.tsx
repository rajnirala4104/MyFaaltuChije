import { Fragment } from "react/jsx-runtime"

interface taskInterface {
  taskTitle: string,
  taskDescription: string,
  taskStatus: boolean
}

const Home:React.FC = () => {
  
  const [tasks, setTask] = useState<task[]>([])

  return (
    <Fragment>
      <section className="w-full h-screen flex justify-center items-center border border-red-500">
        <div className="border border-black w-[95%] h-[90%] flex justify-between items-center">
          <div className="leftContainer taskContainer w-[50%] border border-blue-500 h-full">
            
            <div>:
              <input type="checkbox"/>
              <span className="">Task Title</span>
            </div>
            <div>
              <input type="checkbox"/>
              <span className="">Task Title</span>
            </div>
            <div>
              <input type="checkbox"/>
              <span className="">Task Title</span>
            </div>

          </div>
          <div className="rightContainer taskContentSection w-[50%] border border-red-500 h-full">

            <div>
              <span>Task Title </span>
              <div>
                <p>this is such a large paragraph realy realy realy realy realy a tooooooo long and large and vast and so big and so bada paragarph </p>
              </div>
            </div> 

          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home;

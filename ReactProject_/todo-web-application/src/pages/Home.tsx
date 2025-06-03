import { Fragment } from "react/jsx-runtime"

const Home:React.FC = () => {
  return (
    <Fragment>
      <section className="w-full h-screen flex justify-center items-center border border-red-500">
        <div className="border border-black w-[95%] h-[90%]">
          <div className="leftContainer taskContainer">
            
            <div>
              <input type="checkbox"/>
              <span className="">Task Title</span>
            </div>

          </div>
          <div className="rightContainer taskContentSection">

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

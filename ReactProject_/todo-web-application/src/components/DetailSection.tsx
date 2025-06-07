const DetailSection:React.FC = () => {
  return (
    <div className="w-full h-full flex justify-start items-center flex-col">
      <div className="bg-green-200 w-full rounded-lg flex justify-center items-center">
        <span className="text-2xl text-center p-2 m-2 font-semibold text-slate-800">Task Title</span>
      </div>
      <div className="mt-3 rounded-lg bg-green-50 w-full h-full p-8 text-center text-slate-600 text-xl">
        <p>this is such a large paragraph realy realy realy realy realy a tooooooo long and large and vast and so big and so bada paragarph </p>
      </div>
    </div> 
  );
}

export default DetailSection;

import { useState } from "react";


const QuestionCard = ({ queston }) => {
     const [isExpended, setIsExpended] = useState(false)
     const { title, description } = queston;
     const newDescripton = `${description.slice(0, 70)}...`
     return (
          <div className="bg-[#191919] h-[230px]  shadow-md rounded-lg p-6 mb-4">

               <h2 className="text-xl  lg:w-3/4   text-white  font-semibold ">{title}</h2>
               <p onClick={() => setIsExpended(!isExpended)} className=" mb-4 text-lg text-slate-400">
                    {
                         isExpended ? description : newDescripton
                    }

               </p>
               <button className="btn btn-ghost" onClick={() => setIsExpended(!isExpended)}>
                    {
                         isExpended ? "view Less" : "view More"
                    }
               </button>


          </div>
     );
};

export default QuestionCard;
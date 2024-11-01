import { useNavigate, useRouteError } from "react-router-dom"



const ErrorPage = () => {
    const error=useRouteError()
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }
    

    if(error.status===404){
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[85vh]">
       
        <h1 className="font-bold font-babesNeue md:text-5xl text-2xl text-center md:tracking-[10px] tracking-[5px]">
          OPPS
        </h1>
        <button
          className="md:text-4xl text-2xl lg:w-1/4 w-1/2 px-3 bg-orange text-white h-16 rounded-2xl"
          onClick={goBack}
        >
          Go Back
        </button>
      </div>
  )
}
}
export default ErrorPage
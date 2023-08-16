import React,{useState} from "react";

function Index() {
  const [projectCount, setProjectCount] = useState(0); 
  const [Clint,setClient]=useState(0);
  const [Countries,setCountries]=useState(0);

  const handleMouseEnter = () => {
    
    var i=0;
    if(projectCount!==500){
    const interval = setInterval(() => {
      
      if (i< 500) {

        i=i+1;
        setProjectCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 5); 
  }


  
  var c=0;
  if(Clint!==98){
  const interval = setInterval(() => {
    
    if (c< 98) {

      c=c+1;
      setClient((prevCount) => prevCount + 1);
    } else {
      clearInterval(interval);
    }
  }, 10); 
}




var H=0;
if(Countries!==35){
const interval = setInterval(() => {
  
  if (H< 35) {

    H=H+1;
    setCountries((prevCount) => prevCount + 1);
  } else {
    clearInterval(interval);
  }
}, 20); 
}
  
  };
 
  return (
    <div className="p-40  w-full flex flex-col items-center text-center bg-lightBlue "
    onMouseEnter={()=>handleMouseEnter()}
    >
      <h1 className="text-5xl md:text-6xl xl:text-8xl font-bold mb-4 ">
        We believe that{" "}
        <span className="font-light font-style: italic px-3">technology</span>
        can{" "}
        <span className="font-space-grotesk text-lightBlue drop-shadow-[0_1.8px_1.8px_#004D82] px-3 mt-10">
          change
        </span>
        the world.
      </h1>

      <p className="mt-4 max-w-5xl text-lg">
        That's why we're committed to delivering innovative IT solutions to
        businesses of all sizes. Our team of experienced professionals is
        dedicated to helping you achieve your goals and thrive in a rapidly
        evolving digital landscape.
      </p>

      <div className="flex items-center mt-20 justify-between px-8">
        <div className="mt-4">
          <h1 className="mr-4 text-4xl md:text-5xl xl:text-6xl">{projectCount}+</h1>
          <p className="mr-4 pt-4">Successful Projects</p>
        </div>
        <div className="w-[5rem] lg:w-[10rem] mb-8 md:mb-4 xl:w-[20rem] bg-darkBlue h-0.5 mr-2"></div>

        <div className="mt-4">
          <h1 className="mr-4 text-4xl md:text-5xl xl:text-6xl">{Clint}%</h1>
          <p className="mr-4 pt-4">Satisfied Clients</p>
        </div>
        <div className="w-[5rem] lg:w-[10rem] mb-8 md:mb-4 xl:w-[20rem] bg-darkBlue h-0.5"></div>
        <div className="mt-4">
          <h1 className=" text-4xl md:text-5xl xl:text-6xl mr-4">{Countries}+</h1>
          <p className="mr-4 pt-4">Handled Countries</p>
        </div>
      </div>
    </div>
  );
}

export default Index;

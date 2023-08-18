import { useParams } from "react-router-dom";

const ServiceDetails = ({ data }) => {
  const { id } = useParams();
  const service = data.find((item) => item.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }
  let ComponentToRender;

  // Determine which component to render based on componentType
 
  return (
    <div className="bg-lightBlue">
      {/* <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto py-40 grid gap-20">
        <div>
          <h3 className="font-space-grotesk text-[60px] text-darkBlue text-center leading-[60px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px]  font-semibold ">
            {service.title}
          </h3>
        </div>
        <img src={service.poster} className="w-[700px] mx-auto" />
        <div className="grid grid-cols-2 gap-8">
          <div>
            {service.heading1 && (
              <h3 className="font-space-grotesk text-[18px] text-darkBlue font-semibold ">
                {service.heading1}
              </h3>
            )}
            {service.heading1DescMain && (
              <p className="mt-1 pb-4 max-w-5xl text-[18px] text-darkBlue">
                {service.heading1DescMain}
              </p>
            )}
            {service.heading1Desc && (
              <p className="mt-1 max-w-5xl text-[18px] text-darkBlue">
                {service.heading1Desc}
              </p>
            )}
          </div>
          <div>
            {service.heading2 && (
              <h3 className="font-space-grotesk text-[18px] text-darkBlue font-semibold ">
                {service.heading2}
              </h3>
            )}
            {service.heading2Points && service.heading2Points.list ? (
              <>
              <p className="mt-1 max-w-5xl text-[18px] text-darkBlue">
                {service.heading2Points.heading2Desc}
              </p>
                <ul className="mt-1 max-w-5xl list-disc text-[18px] pl-6 text-darkBlue">
                  {service.heading2Points.list.map((point, index) => (
                    <li key={index}>{point.pointList}</li>
                  ))}
                </ul>
              </>
            ) : (
              service.heading2Desc && (
                <p className="mt-1 max-w-5xl text-[18px] text-darkBlue">
                  {service.heading2Desc}
                </p>
              )
            )}
          </div>
          <div>
            {service.heading3 && (
              <h3 className="font-space-grotesk text-[18px] text-darkBlue font-semibold ">
                {service.heading3}
              </h3>
            )}
            {service.heading3Desc && (
              <p className="mt-1 max-w-5xl text-[18px] text-darkBlue">
                {service.heading3Desc}
              </p>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ServiceDetails;

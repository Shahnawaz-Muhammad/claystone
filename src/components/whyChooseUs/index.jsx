const WhyChooseUs = () => {
  const featuresData = [
    {
      img: "",
      feature: "expertise",
      description:
        "Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.",
    },
    {
      img: "",
      feature: "technology",
      description:
        "We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.",
    },
    {
      img: "",
      feature: "solutions",
      description:
        "We take a personalized approach to every project, working closely with you to understand your business and create solutions.",
    },
    {
      img: "",
      feature: "results",
      description:
        "Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.",
    },
  ];
  return (
    <div className="container mx-auto">
     <div className="grid gap-[50px] lg:gap-[80px]">
     <h3 className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-[#D9D9D9] leading-[60px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px] font-bold w-[562px]">
        Why <br />
        Choose Us?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[68px]">
        {featuresData.map((data, index) => (
          <div key={index}>
            <img src={""} />
            <h6 className="text-[32px] leading-10 text font-semibold">
              {data.feature}
            </h6>
            <p className="text-[20] leading-[30px]">{data.description}</p>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

export default WhyChooseUs;

import longArrow from "../../assets/icons/Arrow Icon.png";

const Blog = () => {
  const blogData = [
    {
      name: "tech",
      blog: "Why Cloud Computing is Essential for Your Business in Year 2023",
      date: "01.03",
      unique: false,
    },
    {
      name: "TIPS",
      blog: "How to Protect Business from Cybersecurity Threats",
      date: "12 April 2023",
      writer: "TeamWaveNet",
      unique: true,
    },
    {
      name: "review",
      blog: "5 Ways Software Developer Can Boost Your Business Quicker Than Ever",
      date: "20.05",
      unique: false,
    },
  ];

  return (
    <div className="bg-lightBlue pt-[160px] pb-[200px] flex justify-center w-full">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto">
        <div className="grid gap-20">
          <div className="grid gap-[20px]">
            <h3 className="font-space-grotesk text-darkBlue text-7xl text-center leading-[110px] font-bold">
              Blog
            </h3>
            <p className="font-poppins text-darkBlue text-[20px] text-center leading-[30px] lg:w-[896px] lg:mx-auto">
              Stay up to date with the latest trends and insights in technology
              with our informative blog. From industry news to expert tips,
              we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto">
            {blogData.map((data, index) => (
              <div key={index}>
                {data.unique ? (
                  <div className="bg-darkBlue h-[480px] shadow-xl py-[108px] text-center rounded-[25px]">
                    <p className="font-poppins text-white text-xl leading-[30px] tracking-widest">
                      {data.name}
                    </p>
                    <h6 className="pt-5 font-poppins text-white font-semibold text-2xl sm:text-xl 2xl:text-2xl leading-[40px] 2xl:w-[387px] lg:mx-auto">
                      {data.blog}
                    </h6>
                    <p className="pb-[48px] font-poppins  text-lightBlue leading-[26px] font-light text-sm">
                      {data.date} | {data.writer}
                    </p>
                    <button className="bg-orangePeel shadow-orangePeel shadow-md capitalize w-[214px] h-12 rounded-[10px]">
                      read more
                    </button>
                  </div>
                ) : (
                  <div className="h-[480px] flex items-center">
                    <div className="border-y-[1px] border-darkBlue py-[56px] h-[439px] grid-shrink-0 flex items-center">
                      <div>
                        <p className="font-poppins text-darborder-darkBlue uppercase text-xl leading-[30px] tracking-widest">
                          {data.name}
                        </p>
                        <h6 className="pt-5 font-poppins text-darkBlue font-semibold text-2xl sm:text-xl 2xl:text-2xl leading-[40px] 2xl:w-[387px] lg:mx-auto">
                          {data.blog}
                        </h6>
                        <h5 className="pt-16 font-space-grotesk font-bold text-darkBlue text-5xl leading-[60px] text-right">
                          {data.date}
                        </h5>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
          <button className="border border-darkBlue px-6 py-3 md:px-10 md:py-5 rounded-lg flex gap-3 md:gap-5 items-center">
              Explore Now <img src={longArrow} alt="long arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

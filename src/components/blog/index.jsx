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
    <div className="bg-lightBlue pt-[160px] pb-[200px]">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto">
        <div className="grid gap-20">
          <div className="grid gap-[40px]">
            <h3 className="font-space-grotesk text-darkBlue text-[100px] text-center leading-[110px] font-bold">
              Blog
            </h3>
            <p className="font-poppins text-darkBlue text-[20px] text-center leading-[30px] lg:w-[896px] lg:mx-auto">
              Stay up to date with the latest trends and insights in technology
              with our informative blog. From industry news to expert tips,
              we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogData.map((data, index) => (
              <div key={index}>
                {data.unique ? (
                  <div className="bg-darkBlue h-[520px] shadow-xl py-[108px] text-center rounded-[25px]">
                    <p className="font-poppins text-white text-[20px] leading-[30px] tracking-widest">
                      {data.name}
                    </p>
                    <h6 className="pt-5 font-poppins text-white font-semibold text-[24px] sm:text-[28px] 2xl:text-[32px] leading-[40px] 2xl:w-[387px] lg:mx-auto">
                      {data.blog}
                    </h6>
                    <p className="pb-[48px] font-poppins text-[14px] 2xl:text-[16px] text-white leading-[26px]">
                      {data.date} | {data.writer}
                    </p>
                    <button className="bg-orangePeel shadow-orangePeel shadow-md capitalize w-[214px] h-12 rounded-[10px]">
                      read more
                    </button>
                  </div>
                ) : (
                  <div className="h-[520px] flex items-center">
                    <div className="border-y-[1px] border-darkBlue py-[56px] h-[439px] grid-shrink-0 flex items-center">
                      <div>
                        <p className="font-poppins text-darborder-darkBlue uppercase text-[20px] leading-[30px] tracking-widest">
                          {data.name}
                        </p>
                        <h6 className="font-poppins text-darborder-darkBlue font-semibold text-[24px] sm:text-[28px] 2xl:text-[32px] leading-[40px]">
                          {data.blog}
                        </h6>
                        <h5 className="pt-16 font-space-grotesk font-bold text-darborder-darkBlue text-[40px] sm:text-[46px]  2xl:text-[56px] leading-[71px] text-right">
                          {data.date}
                        </h5>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

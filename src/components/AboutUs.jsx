import CopyAddress from "./CopyAddress";

function AboutUs() {
  return (
    <section
      className="bg-[#171c22d7] -mt-0 sm:pt-0 pt-3 sm:-mt-2 relative overflow-hidden"
      id="about"
    >
      <div className=" container-wrapper pt-[5%]">
        <div className="relative flex justify-between flex-col sm:flex-row items-center gap-4">
    

          <div className=" w-full sm:w-1/2"  data-aos="zoom-in-left"
          data-aos-duration="1500">
            <h1 className="   text-4xl font-bold font-dream txts text-center mb-4 " id="logo">
              About us
            </h1>

            <p className=" text-lg text-white  py-2">
            Blue Pepe is Solana's Alpha, from humble beginnings to millionaire with a Lambo. Join the journey and be part of the next big meme legend.
            </p>

            <p className=" text-lg text-white">
              Driven by unity and strength, the Blue Pepe community aims for
              financial freedom. With  $BPEPE leading the way, join the movement
              where memes meet millionaires and wealth is within reach for all.
            </p>


            <div className=" m-4 mx-auto flex justify-center">
              <a href="t=1721393113503" className=" mx-auto font-dream  text-base text-white bg-[#000000] hover:bg-[#1a4093]
              flex items-center gap-2 
              rounded-full py-2 px-6 border-2 border-[#045ef0]  hover:text-[#fff] text-center font-bold
               uppercase"><img src="images/dex.png" alt="" className=" w-auto h-[28px]" />  Buy Now</a>
            </div>
          </div>

          <div className=" w-full sm:w-1/2 relative "  data-aos="zoom-in-right"
          data-aos-duration="1500">
            <img src="/images/lambo.png" alt="" />
          
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

import Image from "next/image";
import Moomin from "@/assets/images/moomin.jpg";
import AboutMe from "./_component/AboutMe";

export default function Home() {
  return (
    <main className="flex h-[90vh] flex-col p-12 sm:p-24 sm:pt-4 scrollBar">
      <div className="flex flex-col sm:flex-row flex-wrap items-center gap-6 min-h-fit md:min-h-[90vh]">
        <Image
          src={Moomin}
          alt="프로필"
          className="w-full sm:w-1/4 rounded-full mb-8 sm:mb-0 sm:mr-8 max-md:mt-8"
        />
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl break-keep text-center sm:text-start p-3 sm:p-0 h-[50vh] sm:h-auto">
            <span className="font-bold">나의 발전</span>으로{" "}
            <span className="font-bold">세상의 발전</span>을 만드는 개발자{" "}
            <span className="font-bold">조다민</span> 입니다
          </h1>
          <h1 className="text-xl font-semibold">Info</h1>
          <dl className="min-h-fit">
            <div className="sm:px-4 sm:py-6 grid grid-cols-3 sm:grid-cols-3 sm:gap-4">
              <dt>Name</dt>
              <dd>조다민</dd>
            </div>
            <div className="sm:px-4 sm:py-6 grid grid-cols-3 sm:grid-cols-3 sm:gap-4">
              <dt>Birth</dt>
              <dd>1999.08.06</dd>
            </div>
            <div className="sm:px-4 sm:py-6 grid grid-cols-3 sm:grid-cols-3 sm:gap-4">
              <dt>Email</dt>
              <dd>jdm080620@gmail.com</dd>
            </div>
            <div className="sm:px-4 sm:py-6 grid grid-cols-3 sm:grid-cols-3 sm:gap-4">
              <dt>github</dt>
              <dd>
                <a href="https://github.com/daminzzi">@daminzzi</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 mt-4 min-h-fit">
        <h1 className="text-xl font-semibold">About Me</h1>
        <AboutMe />
      </div>
    </main>
  );
}

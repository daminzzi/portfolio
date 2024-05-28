import Image from "next/image";
import Moomin from "@/assets/images/moomin.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="flex flex-col sm:flex-row items-center gap-6 min-h-fit md:min-h-2/3 flex-wrap">
        <Image src={Moomin} alt="프로필" className="w-full sm:w-1/4 rounded-full" />
        <div className="flex flex-col">
          <h1 className="text-2xl break-keep">
            나의 발전으로 세상의 발전을 만드는 개발자 조다민 입니다.
          </h1>
          <h1>Info</h1>
          <dl className="min-h-fit divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt>Name</dt>
              <dd>조다민</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt>Birth</dt>
              <dd>1999.08.06</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt>Email</dt>
              <dd>jdm080620@gmail.com</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt>github</dt>
              <dd>
                <a href="https://github.com/daminzzi">@daminzzi</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}

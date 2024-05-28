import Image from "next/image";
import Moomin from "@/assets/images/moomin.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-full">
      <div className="flex items-center gap-4 h-2/3">
        <Image src={Moomin} alt="프로필" className="w-1/3 rounded-full" />
        <div className="flex flex-col items-start h-full">
          <h1 className="text-lg">나의 발전으로 세상의 발전을 만드는 개발자 조다민 입니다.</h1>
        </div>
      </div>
    </main>
  );
}

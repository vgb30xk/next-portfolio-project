import Link from "next/link";
import Animation from "./animation";

function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-3xl text-3xl mb-4 font-bold text-gray-900">
          안녕하세요 메시입니다.
          <br className="hidden lg:inline-block" />
          오늘도 메시?
        </h1>
        <p className="mb-8 leading-relaxed">
          Lionel Messi는 아르헨티나의 축구 선수로, FC 바르셀로나에서
          활약하였으며, 현재는 파리생제르망에서 플레이하고 있다. 그는 역사상
          최고의 축구선수로 평가받고 있으며, 국제적으로 높은 평판을 얻어왔다.
          그는 6회 브라질 월드컵 선정선수, 7회 라 리가 MVP 수상자, 4회 프랑스
          Ligue 1 MVP, 등 많은 상을 수상하였다. 그의 기술적인 능력과 경쟁적인
          정서, 경기 안에서의 리더십 능력 등이 많은 팬들에게 인기를 끌었다. 그의
          영향력은 축구 세계 외에도 널리 알려져 있으며, 새로운 선수들을 영감으로
          만들고 있다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}

export default Hero;

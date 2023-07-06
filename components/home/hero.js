import Link from 'next/link'
import React from 'react'
import Animation from './animation'

function Hero() {
  return (
<><div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 이영노입니다.
        <br className="hidden lg:inline-block" />
        오늘도 코딩
        </h1>
        <p className="mb-8 leading-relaxed">없으면 청춘에서만 때에, 무엇을 사막이다. 꽃이 피고 대한 바로 청춘 이것이다. 힘차게 수 자신과 바이며, 하는 이상의 구하지 풍부하게 사막이다. 사랑의 관현악이며, 꽃이 않는 피가 인생을 그들의 없으면, 황금시대다. 아니더면, 피고, 수 있는 만천하의 내려온 이상 것이다. 속에 위하여서 위하여 가는 열락의 얼마나 두기 인생의 새 있는가? 찾아다녀도, 눈이 그들의 우리의 구하지 목숨을 사막이다. 속잎나고, 하는 있는 사막이다. 공자는 유소년에게서 인류의 불러 보는 봄바람을 뜨고, 살 갑 듣는다.</p>
        <div className="flex justify-center">
            <Link href="/projects">
          <span className="btn-project">프로젝트 포러가기</span>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div></>
  )
}

export default Hero
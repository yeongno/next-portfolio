import Link from 'next/link'
import React, { useEffect } from 'react'
import Animation from './animation'

function Hero() {
    
  return (
<><div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">안녕하세요 이영노입니다.
        <br className="hidden lg:inline-block" />
        </h1>
          <p className="mb-8 leading-relaxed">
              웹 개발자를 목표로 하고 있습니다.<br />
              웹 개발에 열정을 가지고 있으며, 새로운 아이디어를 현실로 구현하는 것을 좋아합니다. <br />
              사용자 경험을 개선하고 혁신적인 기술을 적용하여 웹을 더욱 흥미롭고 유용하게 만드는 것이 목표입니다.
              
        </p>
        <div className="flex justify-center">
            <Link href="/projects">
                  <span className="btn-project">프로젝트 보러가기</span>
          </Link>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Animation />
      </div></>
  )
}

export default Hero


import Link from "next/link"

 function Footer() {
  return (
    <>
    <footer className=" body-font">

  <div>
    <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
      <Link href="/">
      <span className="flex items-center font-medium title-font md:justify-start justify-cente">
        <span className="ml-3 text-xl">LYN 포트폴리오</span>
      </span>
      </Link>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
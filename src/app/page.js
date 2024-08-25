import Link from "next/link";

export default function Home() {
  return (
    <body>
      <div className="mt-20">
        <div className="flex flex-col m-auto p-50 text-center items-center ">
          <h1 className="text-3xl font-sans text-white font-bold underline hover:scale-110 duration-300 ">
            Welcome to Next app with Redux Toolkit
          </h1>
          <div className="mt-20 text-left">
            <p>
              <Link
                href="/userlist"
                className="text-xl animate-pulse hover:scale-110 duration-300 text-yellow-300 "
              >
                → Moving to User Todo Page
              </Link>
            </p>
            <br></br>
            <p>
              <Link
                href="/"
                className="text-xl hover:scale-110 duration-300 animate-pulse text-yellow-300"
              >
                → Moving to Todo Page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

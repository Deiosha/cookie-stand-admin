import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <header className="flex item-center justify-between bg-green-600 text-black-80">
        <h1>Cookie Stand Admin</h1>
      </header>
      <main className="flex flex-col items-center p-4">
        <div className="w-full max-w-xl border border-green-500 bg-green-400 flex flex-col items-center">
          <h2 className="font-bold mb-8">Create Cookie Stand</h2>
          <div className="w-full flex mb-4">
            <label className="text-black w-2/4">Location:</label>
            <input
              className=" bg-white w-4/4 text-black-700 py-2 px-2"
              type="text"
            />
          </div>
          <div className="w-full flex mb-2 justify-between">
            <div className="w-1/3">
              <label className="text-black">Minimum Cookies per Hour:</label>
              <input
                className=" bg-white w-full text-gray-700 py-2 px-2"
                id="minCookies"
              />
            </div>
            <div className="w-1/3">
              <label className="text-black"> Maximum Cookies per Hour:</label>
              <input
                className=" bg-white w-full text-gray-700 py-2 px-2"
              />
            </div>
            <div className="w-1/3">
              <label className="text-black ">Average Cookies per Hour:</label>
              <input
                className=" bg-white w-full text-black-700 py-2 px-2"
              />
            </div>
          </div>
          <button
            className=" text-black border-2 border-green-950 rounded bg-green-500 w-28"
            type="button" >
            Create
          </button>
        </div>
        <div className="mt-4">
          <p className="text-black">Report Table Coming Soon...</p>
        </div>
      </main>
      <footer className=" bg-green-500 p-4 mt-4">
        <p>&copy;2023</p>
      </footer>
    </>
  );
}

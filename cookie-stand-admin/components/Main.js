export default function Main() {
  return (
  <>
      <main className="m-4">
          <form className="bg-green-200 flex flex-col justify-center border-2 border-green-950 w-7/12 m-auto rounded-lg">
            <h2 className='text-5xl text-center'>Create Cookie Stand</h2>
            <div className="flex justify-around p-3 my-4">
              <label>Location</label>
              <input className="flex-auto pl-1"/>
            </div>
            <div className="flex justify-between">
              <div>
                <label className="display: inline-block;padding: 0.25rem; ">Min Customers</label>
               
                <input className="display: inline-block;padding: 0.25rem;"/>
              </div>
              <div>
                <label className="display: inline-block;padding: 0.25rem;">Max Customers</label>
                
                <input className="display: inline-block;padding: 0.25rem;"/>
              </div>
              <div>
                <label className="display: inline-block;padding: 0.25rem;">Average Cookies</label>
                
                <input className="display: inline-block;padding: 0.25rem;"/>
              </div>
                <button className="display: inline-block;padding: 0.25rem; border-green-950 rounded bg-green-500 w-28">Create</button>
            </div>
          </form>


      </main>
  </>
  )
}
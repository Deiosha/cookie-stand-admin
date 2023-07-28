import { useState } from 'react';

export default function CreateForm({ cookieStandsData }) {
  const [location, setLocation] = useState('');
  const [minCustomers, setMinCustomers] = useState('');
  const [maxCustomers, setMaxCustomers] = useState('');
  const [averageCookies, setAverageCookies] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <main className="m-4">
        <form
          className="bg-green-200 flex flex-col justify-center border-2 border-green-950 w-7/12 m-auto rounded-lg"
          onSubmit={handleFormSubmit}
        >
          <h2 className="text-5xl text-center">Create Cookie Stand</h2>
          <div className="flex justify-around p-3 my-4">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              className="flex-auto pl-1"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <div>
              <label htmlFor="minCustomers" className="inline-block p-1">
                Min Customers
              </label>
              <input
                id="minCustomers"
                className="inline-block p-1"
                value={minCustomers}
                onChange={(e) => setMinCustomers(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="maxCustomers" className="inline-block p-1">
                Max Customers
              </label>
              <input
                id="maxCustomers"
                className="inline-block p-1"
                value={maxCustomers}
                onChange={(e) => setMaxCustomers(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="averageCookies" className="inline-block p-1">
                Average Cookies
              </label>
              <input
                id="averageCookies"
                className="inline-block p-1"
                value={averageCookies}
                onChange={(e) => setAverageCookies(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="inline-block p-1 border-green-950 rounded bg-green-500 w-28"
              aria-label="Create Cookie Stand"
            >
              Create
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

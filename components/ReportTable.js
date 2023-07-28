import { timePeriods } from '@/data/data';

export default function CookieStandReportTable({ cookieStandsData }) {
  if (!cookieStandsData || cookieStandsData.length === 0) {
    return <h3>No Cookie Stands Available</h3>;
  }

  const calculateTotalSales = (hourlySales) => {
    return hourlySales.reduce((total, sale) => total + sale, 0);
  };

  return (
    <table className='mb-8'>
      <thead>
        <tr className='bg-green-600'>
          <th className='border p-2 font-semibold'>Location</th>
          {timePeriods.map((period, index) => (
            <th key={index} className='border p-2 font-semibold'>
              {period}
            </th>
          ))}
          <th className='border p-2 font-semibold'>Totals</th>
        </tr>
      </thead>
      <tbody>
        {cookieStandsData.map((stand, index) => (
          <tr key={index} className={index % 2 === 0 ? 'even:bg-green-400' : 'odd:bg-green-200'}>
            <td className='border p-2'>{stand.location}</td>
            {stand.hourlySales.map((sale, index) => (
              <td key={index} className='border p-2'>
                {sale}
              </td>
            ))}
            <td className='border p-2 font-semibold'>
              {calculateTotalSales(stand.hourlySales)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

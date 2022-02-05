import { GetPullsApiResponse } from '../pages/api/pulls';
import SelectBox from './SelectBox';

type PullRequestsTableProps = {
  pulls: GetPullsApiResponse['pulls'];
};

const Table: React.FC<PullRequestsTableProps> = ({ pulls }) => {
  return (
    <table className="w-full border rounded-lg">
      <thead className="bg-gray-50 border rounded-md bg-opacity-50">
        <tr>
          <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 tracking-wider">
            Issue
          </th>
          <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 tracking-wider">
            Label
          </th>
          <th scope="col" className="px-6 py-2 text-left font-medium text-gray-500 tracking-wider">
            Caused by
          </th>
        </tr>
      </thead>
      <tbody>
        {pulls.map((pull) => (
          <tr key={pull.title} className="border border-gray-100 hover:bg-gray-100">
            <td className="px-3 py-2 whitespace-normal">
              <div className="text-gray-900  hover:text-blue-600 font-bold">
                <a href={pull.html_url}>{pull.title}</a>
              </div>
              <div className="text-xxs text-gray-500">
                #{pull.number} {pull.created_at}
              </div>
            </td>
            <td className="px-3 py-2">
              {pull.labels.map((label, index) => {
                return (
                  <span
                    key={pull.number + index}
                    className="px-2 inline-flex text-xxs leading-5 font-bold rounded-full m-0.5"
                    style={{
                      backgroundColor: '#' + label.color ?? 'ffffff',
                    }}
                  >
                    <div className="text-white  whitespace-nowrap">{label.name}</div>
                  </span>
                );
              })}
            </td>
            <td>
              <SelectBox />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

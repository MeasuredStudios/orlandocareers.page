import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import _ from 'lodash';
import 'twin.macro';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ColumnHeader = ({ label, onSort = () => null }) => {
  function handleSortUp() {
    onSort(label, 'A');
  }
  function handleSortDown() {
    onSort(label, 'D');
  }
  return (
    <th tw="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
      {label}{' '}
      <span
        tw="hover:text-green-200 hover: cursor-pointer"
        onClick={handleSortUp}
      >
        ▲
      </span>
      <span
        tw="hover:text-green-200 hover: cursor-pointer"
        onClick={handleSortDown}
      >
        ▼
      </span>
    </th>
  );
};

const TableHeader = ({ label }) => (
  <th tw="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase">
    {label}
  </th>
);

const TableCell = ({ value }) => (
  <td tw="px-6 py-4 truncate text-sm leading-5 text-gray-900">{value}</td>
);

const TableRow = ({ children, odd }) => {
  if (odd) {
    return <tr tw="bg-blue-100">{children}</tr>;
  } else return <tr tw="bg-gray-100">{children}</tr>;
};

const SortTable = () => {
  const data = useStaticQuery(graphql`
    {
      allIndeedJobSearchTechnologyJson {
        edges {
          node {
            Index
            JobTitle
            Location
            Company
            ApplyURL
          }
        }
      }
    }
  `);

  const dataCleaned = data.allIndeedJobSearchTechnologyJson.edges.map(
    (edge) => {
      return edge['node'];
    }
  );

  const partialDataCleaned = dataCleaned.slice(0, 20);

  const cols = [
    'Index',
    'JobTitle',
    'Location',
    // 'Salary',
    'Company',
    // 'Job Rating',
    // 'Post Time',
    'ApplyURL',
  ];

  const [sortedData, setSortedData] = React.useState(partialDataCleaned);
  const [sortedDataAll, setSortedDataAll] = React.useState(dataCleaned);
  console.log(sortedData);

  const returnAll = (dataCleanedArg) => {
    return setSortedData(dataCleanedArg);
  };

  const handleColumnSort = (col) => (name, direction) => {
    const u = direction === 'A' ? 'asc' : 'desc';
    const sorted = _.orderBy(sortedData, [col], [u]);
    console.log('HandleSort', name, direction, u, sorted);
    setSortedData(sorted);
  };

  return (
    <div tw="flex flex-col mb-16">
      <div tw="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div tw="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table tw="min-w-full">
            <thead tw="bg-gray-200">
              <tr>
                {cols.map((col) => (
                  <ColumnHeader
                    key={col}
                    label={col}
                    onSort={handleColumnSort(col)}
                  />
                ))}
                {/* <th tw="px-6 py-3 border-b border-gray-200 bg-gray-50" /> */}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <TableRow key={index} odd={index % 2 === 0}>
                  {cols.map((col) => (
                    <TableCell key={col} value={row[col]} />
                  ))}
                </TableRow>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button
            tw="font-bold py-2 px-4 w-full inline-flex items-center"
            onClick={() => {
              returnAll(sortedDataAll);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <span tw="ml-2">Show All (500 +)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortTable;

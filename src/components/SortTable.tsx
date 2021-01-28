import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import _ from 'lodash';
import 'twin.macro';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ColumnHeader = ({ label, onSort = () => null }) => {
  function handleSortUp() {
    console.log('Clicked up for ' + label);
    onSort(label, 'A');
  }
  function handleSortDown() {
    console.log('Clicked down for ' + label);
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
  <td tw="px-6 py-4 truncate text-sm leading-5 text-gray-900">
    {value}
  </td>
);

const TableRow = ({ children, odd }) => {
  if (odd) {
    return <tr tw="bg-blue-100">{children}</tr>;
  } else return <tr tw="bg-gray-100">{children}</tr>;
};

const SortTable = () => {
  const data = useStaticQuery(graphql`
    {
      allIndeedJobSearchTechnologyJson(limit: 20) {
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

  console.log(dataCleaned);

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

  const [sortedData, setSortedData] = React.useState(dataCleaned);

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
      </div>
    </div>
  );
};

export default SortTable;

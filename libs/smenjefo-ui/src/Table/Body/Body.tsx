import React from "react";

export interface ITableBodyProps {
  children: JSX.Element | JSX.Element[];
}

const TableBody: React.FC<ITableBodyProps> = (props) => {
  return (
    <tbody>
      {props.children}
    </tbody>
  );
};

export default TableBody;
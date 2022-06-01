import React from "react";

export interface ITableRowProps {
  children: JSX.Element | JSX.Element[];
}

const TableRow: React.FC<ITableRowProps> = (props) => {
  return (
    <tr>
      {props.children}
    </tr>
  );
};

export default TableRow;
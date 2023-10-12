import { Td, Tr } from "@chakra-ui/react";
import React from "react";

const TableItem = ({ table }) => {
  return (
    <React.Fragment>
      {table.map((data) => (
        <Tr
          key={data.percentage}
          _hover={{
            background: "#3457D5",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Td>{data.name}</Td>
          <Td isNumeric>{data.percentage}%</Td>
        </Tr>
      ))}
    </React.Fragment>
  );
};

export default TableItem;

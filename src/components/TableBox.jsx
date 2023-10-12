import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  TableCaption,
} from "@chakra-ui/react";
import React from "react";
import TableItem from "./TableItem";

export const TableBox = ({ table }) => {
  return (
    <TableContainer
      border="1px solid rgba(28, 28, 28, 0.1)"
      borderRadius="10px"
      style={{ marginBlock: "60px" }}
    >
      <Table colorScheme="facebook">
        <TableCaption
          placement="top"
          textTransform="uppercase"
          fontWeight="bold"
        >
          Percentages of interactions
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Sector Name</Th>
            <Th isNumeric>Percentage</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableItem table={table}/>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

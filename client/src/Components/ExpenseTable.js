import { Container, Table, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import React from "react";

export default function ExpenseTable() {
  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td>
              <Text>Rent</Text>
              <Text>$ 999.00</Text>
            </td>
            <td>
              <Text>Paid by Demo3</Text>
              <Text>on Sun, 19 Jun 2022</Text>
            </td>
            <td>
              <Text>You Owe</Text>
              <Text>$ 333.00</Text>
            </td>
            <td>
              <IconChevronRight />
            </td>
          </tr>
          <tr>
            <td>
              <Text>Rent</Text>
              <Text>$ 999.00</Text>
            </td>
            <td>
              <Text>Paid by Demo3</Text>
              <Text>on Sun, 19 Jun 2022</Text>
            </td>
            <td>
              <Text>You Owe</Text>
              <Text>$ 333.00</Text>
            </td>
            <td>
              <IconChevronRight />
            </td>
          </tr>
          <tr>
            <td>
              <Text>Rent</Text>
              <Text>$ 999.00</Text>
            </td>
            <td>
              <Text>Paid by Demo3</Text>
              <Text>on Sun, 19 Jun 2022</Text>
            </td>
            <td>
              <Text>You Owe</Text>
              <Text>$ 333.00</Text>
            </td>
            <td>
              <IconChevronRight />
            </td>
          </tr>
          <tr>
            <td>
              <Text>Rent</Text>
              <Text>$ 999.00</Text>
            </td>
            <td>
              <Text>Paid by Demo3</Text>
              <Text>on Sun, 19 Jun 2022</Text>
            </td>
            <td>
              <Text>You Owe</Text>
              <Text>$ 333.00</Text>
            </td>
            <td>
              <IconChevronRight />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

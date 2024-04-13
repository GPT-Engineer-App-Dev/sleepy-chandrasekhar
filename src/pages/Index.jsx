import React, { useState } from "react";
import { Button, Input, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Index = () => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      const rows = csvData.split("\n");
      const header = rows[0].split(",");
      const data = rows.slice(1).map((row) => {
        const values = row.split(",");
        return header.reduce((obj, key, index) => {
          obj[key] = values[index];
          return obj;
        }, {});
      });

      const filteredRows = data.filter((row) => row.type === "ai_update");
      setFilteredData(filteredRows);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <form>
        <Input type="file" accept=".csv" onChange={handleFileUpload} />
        <Button type="submit">Upload CSV</Button>
      </form>

      {filteredData.length > 0 && (
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Commit SHA</Th>
              <Th>Created At</Th>
              <Th>Tags</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((row) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                <Td>{row.commit_sha}</Td>
                <Td>{row.created_at}</Td>
                <Td>{row.tags}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </div>
  );
};

export default Index;

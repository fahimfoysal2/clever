import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
  BulkCheckboxControl,
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
} from "react-bs-datatable";
import TABLE_BODY from "./data.json";

// Create table headers consisting of 4 columns.
const STORY_HEADERS = [
  {
    prop: "name",
    title: "Name",
    isFilterable: true,
  },
  {
    prop: "username",
    title: "Username",
  },
  {
    prop: "location",
    title: "Location",
  },
  {
    prop: "date",
    title: "Last Update",
  },
  {
    prop: "score",
    title: "Score",
    isSortable: true,
  },
];

// Then, use it in a component.
export default function TableComponentsNew() {
  return (
    <DatatableWrapper
      body={TABLE_BODY}
      headers={STORY_HEADERS}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20],
        },
      }}
    >
      <Row className="mb-4 p-2">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Filter />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
          <PaginationOptions />
          <BulkCheckboxControl hasCheckbox />
        </Col>
      </Row>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
      <Row>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Pagination />
        </Col>
      </Row>
    </DatatableWrapper>
  );
}

import { Line } from "rc-progress";
import React from "react";
import { Form, Pagination, Table } from "react-bootstrap";

const AgencyDataTAble = () => {
  return (
    <div className="table-data-components-wrap">
      <Table borderless hover>
        <thead>
          <tr>
            <th>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />
              </Form.Group>
            </th>
            <th>Email</th>
            <th>Status</th>
            <th>Subscribers</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />
              </Form.Group>
            </td>
            <td>info@gmail.com</td>
            <td>
              <span className="active-agency-account-jkhbfd">Active</span>
            </td>
            <td>
              <div className="agency-item-body">
                <p>1 of 5 licenses used</p>
                <Line percent="70" strokeWidth=".7" strokeColor="#0d6efd" />
              </div>
            </td>
            <td>
              <Form.Select>
                <option value="Action">Action</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />
              </Form.Group>
            </td>
            <td>info@gmail.com</td>
            <td>
              <span className="active-agency-account-jkhbfd">Active</span>
            </td>
            <td>
              <div className="agency-item-body">
                <p>1 of 5 licenses used</p>
                <Line percent="70" strokeWidth=".7" strokeColor="#0d6efd" />
              </div>
            </td>
            <td>
              <Form.Select>
                <option value="Action">Action</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />
              </Form.Group>
            </td>
            <td>info@gmail.com</td>
            <td>
              <span className="active-agency-account-jkhbfd">Active</span>
            </td>
            <td>
              <div className="agency-item-body">
                <p>1 of 5 licenses used</p>
                <Line percent="70" strokeWidth=".7" strokeColor="#0d6efd" />
              </div>
            </td>
            <td>
              <Form.Select>
                <option value="Action">Action</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />
              </Form.Group>
            </td>
            <td>info@gmail.com</td>
            <td>
              <span className="active-agency-account-jkhbfd">Active</span>
            </td>
            <td>
              <div className="agency-item-body">
                <p>1 of 5 licenses used</p>
                <Line percent="70" strokeWidth=".7" strokeColor="#0d6efd" />
              </div>
            </td>
            <td>
              <Form.Select>
                <option value="Action">Action</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />
              </Form.Group>
            </td>
            <td>info@gmail.com</td>
            <td>
              <span className="active-agency-account-jkhbfd">Active</span>
            </td>
            <td>
              <div className="agency-item-body">
                <p>1 of 5 licenses used</p>
                <Line percent="70" strokeWidth=".7" strokeColor="#0d6efd" />
              </div>
            </td>
            <td>
              <Form.Select>
                <option value="Action">Action</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />
              </Form.Group>
            </td>
            <td>info@gmail.com</td>
            <td>
              <span className="active-agency-account-jkhbfd">Active</span>
            </td>
            <td>
              <div className="agency-item-body">
                <p>1 of 5 licenses used</p>
                <Line percent="70" strokeWidth=".7" strokeColor="#0d6efd" />
              </div>
            </td>
            <td>
              <Form.Select>
                <option value="Action">Action</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />
              </Form.Group>
            </td>
            <td>info@gmail.com</td>
            <td>
              <span className="active-agency-account-jkhbfd">Active</span>
            </td>
            <td>
              <div className="agency-item-body">
                <p>1 of 5 licenses used</p>
                <Line percent="70" strokeWidth=".7" strokeColor="#0d6efd" />
              </div>
            </td>
            <td>
              <Form.Select>
                <option value="Action">Action</option>
              </Form.Select>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="agency-bottom-pagination-area-wrap">
        <div className="">
          <span>Showing 1 to 1 of 1 entries</span>
        </div>
        <Pagination>
          <Pagination.First>First</Pagination.First>
          <Pagination.Prev>Previous</Pagination.Prev>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next>Next</Pagination.Next>
          <Pagination.Last>Last</Pagination.Last>
        </Pagination>
      </div>
    </div>
  );
};

export default AgencyDataTAble;

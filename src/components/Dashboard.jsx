import React from "react";

export default function Dashboard() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bob</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>Steve</td>
            <td>Sales</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
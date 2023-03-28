import { ComponentPropsWithRef } from "react";
import users from "../data/users.json";

const Th = (props: ComponentPropsWithRef<"th">) => {
  return <th {...props} className="text-left border text-indigo-50 p-2" />;
};
const TableCell = (props: ComponentPropsWithRef<"td">) => {
  return <td {...props} className="border p-2 " />;
};
const Table = () => {
  return (
    <table className="w-full relative">
      <thead className="sticky top-0 bg-indigo-500 z-10">
        <tr>
          <Th>ID</Th>
          <Th>Email</Th>
          <Th>Last Name</Th>
          <Th>First Name</Th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id} className="bg-indigo-50 odd:bg-white">
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.first_name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;

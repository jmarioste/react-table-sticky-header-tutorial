import { useFetch } from "usehooks-ts";
import { ComponentPropsWithRef } from "react";

// lines 5-14. we're using dummyjson.com api for getting users data
// since I'm using typescript, we create the type for the data we're expecting
type GetUsersResult = {
  users: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }[];
  total: number;
  skip: number;
  limit: number;
};

const Table = () => {
  const endpoint =
    "https://dummyjson.com/users?limit=15&&select=firstName,lastName,email";
  const { data } = useFetch<GetUsersResult>(endpoint);
  return (
    <table className="w-full relative">
      <thead className="sticky top-0 bg-indigo-500">
        <tr>
          <Th>ID</Th>
          <Th>Email</Th>
          <Th>Last Name</Th>
          <Th>First Name</Th>
        </tr>
      </thead>
      <tbody className="z-0">
        {/* render the data */}
        {data?.users?.map((user) => {
          return (
            <tr key={user.id} className="bg-indigo-50 odd:bg-white">
              <Td>{user.id}</Td>
              <Td>{user.email}</Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

const Th = (props: ComponentPropsWithRef<"th">) => {
  return <th {...props} className="text-left border text-indigo-50 p-2" />;
};
const Td = (props: ComponentPropsWithRef<"td">) => {
  return <td {...props} className="border p-2 " />;
};

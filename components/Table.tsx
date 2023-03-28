import users from "../data/users.json";

const Table = () => {
  return (
    <div className="max-h-[400px] overflow-scroll overflow-x-hidden">
      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="">
            <th>ID</th>
            <th>Email</th>
            <th>Last Name</th>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;

import axios from "axios";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      <h1>Users Page</h1>
      <div className="grid grid-cols-2 gap-2 p-4">
        {data &&
          data.map((user: User) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600"
            >
              <div className="flex flex-col space-y-1">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-sm ">{user.username}</p>
              </div>
              <div className="flex flex-col space-y-1 items-end">
                <div className="text-md">{user.email}</div>
                <div className="text-md">{user.phone}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

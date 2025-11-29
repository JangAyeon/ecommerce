// import { auth, type User } from "@clerk/nextjs/server";
import { columns, User } from "./columns";
import { DataTable } from "./data-table";
import { mockUsers } from "@/lib/mock-data";

const getData = async (): Promise<{ data: User[]; totalCount: number }> => {
  // Use mock data instead of fetch
  return { data: mockUsers, totalCount: mockUsers.length };
  
  // const { getToken } = await auth();
  // const token = await getToken();
  // const token = "1234567890";
  // try {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_AUTH_SERVICE_URL}/users`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   const data = await res.json();
  //   return data;
  // } catch (err) {
  //   console.log(err);
  //   return { data: [], totalCount: 0 };
  // }
};

const UsersPage = async () => {
  const res = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Users</h1>
      </div>
      <DataTable columns={columns} data={res.data} />
    </div>
  );
};

export default UsersPage;

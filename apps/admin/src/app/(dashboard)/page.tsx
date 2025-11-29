import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import { mockOrderChartData } from "@/lib/mock-data";
// import { auth } from "@clerk/nextjs/server";

const Homepage = async () => {
  // const { getToken } = await auth();
  // const token = await getToken();
  // const token = "1234567890";

  // Use mock data instead of fetch
  const orderChartData = Promise.resolve(mockOrderChartData);

  // const orderChartData = fetch(
  //   `${process.env.NEXT_PUBLIC_ORDER_SERVICE_URL}/order-chart`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  // ).then(async (res) => {
  //   if (!res.ok) throw new Error("Failed to fetch order chart data");
  //   return res.json() as Promise<OrderChartType[]>;
  // });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart dataPromise={orderChartData} />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Products" />
      </div>
    </div>
  );
};

export default Homepage;

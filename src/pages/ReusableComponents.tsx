import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Table from "../components/ui/Table";

const usersColumns = ["Name", "Age", "City"];
const usersData = [
    { Name: "Nour", Age: 25, City: "Cairo" },
    { Name: "Ahmed", Age: 28, City: "Giza" },
    { Name: "Omar", Age: 24, City: "Alexandria" },
];
const productsColumns = ["Product", "Price", "Category"];
const productsData = [
    { Product: "Laptop", Price: 2500, Category: "Electronics" },
    { Product: "Keyboard", Price: 120, Category: "Accessories" },
    { Product: "Monitor", Price: 1500, Category: "Electronics" },
];

export default function ReusableComponents() {
    return (
        <main className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-7xl space-y-12">

                {/* Users Section */}
                <section className="space-y-6 rounded-lg bg-white p-8 shadow">
                    <h1 className="text-2xl font-bold">Users</h1>

                    <div className="flex gap-4">
                        <Button
                            text="Add User"
                            variant="primary"
                            onClick={() => console.log("Add user")} />
                        <Button
                            text="Delete User"
                            variant="danger"
                            onClick={() => console.log("Delete user")} />
                    </div>
                    <Card
                        title="User Management"
                        description="Manage users and their information.">
                        <Button
                            text="View Users"
                            variant="secondary"
                            onClick={() => console.log("View users")} />
                    </Card>
                    <Table
                        columns={usersColumns}
                        data={usersData}
                        striped />
                </section>

                {/* Products Section */}
                <section className="space-y-6 rounded-lg bg-white p-8 shadow">
                    <h1 className="text-2xl font-bold">Products</h1>
                    <div className="flex gap-4">
                        <Button
                            text="Add Product"
                            variant="secondary"
                            onClick={() => console.log("Add product")} />
                        <Button
                            text="Delete Product"
                            variant="danger"
                            onClick={() => console.log("Delete product")} />
                    </div>
                    <Card
                        title="Product Management"
                        description="Manage products and their information.">
                        <Button
                            text="View Products"
                            variant="primary"
                            onClick={() => console.log("View products")} />
                    </Card>
                    <Table
                        columns={productsColumns}
                        data={productsData}
                        striped={false} />
                </section>
            </div>
        </main>
    );
}
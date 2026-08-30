import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts.api";

export default function Home() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    });

    if (isLoading) {
        return <p>Loading posts...</p>;
    }

    if (isError) {
        return <p>Failed to load posts.</p>;
    }

    return (
        <main className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-7xl space-y-12">
                <h1 className="mb-8 text-3xl font-bold">
                    Posts
                </h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {data?.map((post) => (
                        <article
                            key={post.id}
                            className="rounded-xl bg-white p-6 shadow"
                        >
                            <h2 className="mb-3 text-lg font-bold">
                                {post.title}
                            </h2>

                            <p className="text-gray-600">
                                {post.body}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
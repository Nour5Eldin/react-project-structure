export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export async function getPosts(): Promise<Post[]> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
}
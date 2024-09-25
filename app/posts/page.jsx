import Link from "next/link";

// Fonction pour récupérer les données des posts
async function fetchPosts() {
  const posts = [
    { id: "1", title: "Post 1", description: "Description du post 1" },
    { id: "2", title: "Post 2", description: "Description du post 2" },
    { id: "3", title: "Post 3", description: "Description du post 3" },
  ];
  return posts;
}

export default async function Posts() {
  const posts = await fetchPosts();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Liste des Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <Link
                href={`/posts/${post.id}`}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Lire plus
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

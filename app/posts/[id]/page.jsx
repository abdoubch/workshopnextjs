import Link from "next/link";

// Fonction pour récupérer un post spécifique
async function fetchPost(id) {
  const posts = [
    { id: "1", title: "Post 1", content: "Ceci est le contenu du post 1" },
    { id: "2", title: "Post 2", content: "Ceci est le contenu du post 2" },
    { id: "3", title: "Post 3", content: "Ceci est le contenu du post 3" },
  ];
  return posts.find((post) => post.id === id);
}

export default async function Post({ params }) {
  const { id } = params;
  const post = await fetchPost(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">

    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {post.title}
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">{post.content}</p>
      </div>
      <Link
        href="/posts"
        className="inline-block mt-6 text-blue-600 hover:text-blue-800"
      >
        &larr; Retour à la liste des posts
      </Link>
    </div>
    </div>
  );
}

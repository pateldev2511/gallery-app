import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-violet-600 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
      <h1 className="text-black text-2xl font-bold mb-4 text-center">Welcome to My Gallery App!</h1>
      <p className="mb-6 text-lg text-center text-gray-500">Sign In to Upload and save your favorite photos</p>
      <AuthForm />
      </div>
    </main>
  );
}

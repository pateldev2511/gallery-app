import AuthForm from "./components/AuthForm";
import BlobBackground from "./components/blobBackground";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-200">
      <BlobBackground />
      <div className=" rounded-lg shadow-xl p-6 w-full max-w-lg glass-effect-light">
      <h1 className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent text-3xl lg:text-4xl font-bold p-3 mb-4 text-center">Welcome to My Gallery App!</h1>
      <p className="mb-6 text-lg text-center text-gray-500">Sign In to Upload and save your favorite photos</p>
      <AuthForm />
      </div>
    </main>
  );
}

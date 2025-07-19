import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Future Autonoms</h1>
          <p className="text-gray-300">Admin Panel Girişi</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200",
                card: "bg-transparent shadow-none",
                headerTitle: "text-white text-2xl font-bold",
                headerSubtitle: "text-gray-300",
                socialButtonsBlockButton: 
                  "bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-colors duration-200",
                formFieldInput: 
                  "bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                formFieldLabel: "text-white font-medium",
                footerActionLink: "text-blue-400 hover:text-blue-300",
                dividerLine: "bg-white/20",
                dividerText: "text-gray-300",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
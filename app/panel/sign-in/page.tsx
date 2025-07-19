import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to access your admin panel
          </p>
        </div>
        
        <div className="mt-8">
          <SignIn 
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "bg-gray-800/50 backdrop-blur-xl border border-gray-700 shadow-2xl",
                headerTitle: "text-white",
                headerSubtitle: "text-gray-400",
                socialButtonsBlockButton: "bg-gray-700 border-gray-600 text-white hover:bg-gray-600",
                socialButtonsBlockButtonText: "text-white",
                dividerLine: "bg-gray-700",
                dividerText: "text-gray-400",
                formFieldLabel: "text-gray-300",
                formFieldInput: "bg-gray-700/50 border-gray-600 text-white placeholder-gray-500",
                formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
                footerActionLink: "text-purple-400 hover:text-purple-300",
                identityPreviewText: "text-gray-300",
                identityPreviewEditButton: "text-purple-400 hover:text-purple-300",
                formFieldAction: "text-purple-400 hover:text-purple-300",
                formFieldHintText: "text-gray-400",
                formFieldErrorText: "text-red-400",
                formFieldSuccessText: "text-green-400",
                formResendCodeLink: "text-purple-400 hover:text-purple-300",
                otpCodeFieldInput: "bg-gray-700/50 border-gray-600 text-white",
                formFieldInputShowPasswordButton: "text-gray-400 hover:text-gray-300",
                backLink: "text-gray-400 hover:text-gray-300",
                alternativeMethodsBlockButton: "bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600",
              },
              layout: {
                socialButtonsPlacement: "bottom",
                socialButtonsVariant: "blockButton",
              },
            }}
            redirectUrl="/panel/dashboard"
            signUpUrl="/panel/sign-up"
          />
        </div>
      </div>
    </div>
  );
}
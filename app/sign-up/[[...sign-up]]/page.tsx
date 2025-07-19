import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            DN.AI™ Control Panel
          </h1>
          <p className="text-muted-foreground mt-2">Admin paneline kayıt olun</p>
        </div>
        <SignUp
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'bg-card border border-border/50 shadow-xl',
            },
          }}
        />
      </div>
    </div>
  );
}

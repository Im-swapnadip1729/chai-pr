import { requireAuth } from '@/features/auth/actions';
import { DashboardShell } from '@/features/dashboard/components/dashboard-shell';
import { ModeToggle } from '@/components/my-ui/mode-toggle';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAuth();

  return (
    <div className="relative min-h-svh">
      <div className="absolute right-4 bottom-4 z-10">
        <ModeToggle />
      </div>
      <DashboardShell user={session.user} plan="Pro">
        {children}
      </DashboardShell>
    </div>
  );
}

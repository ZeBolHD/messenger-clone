import getCurrentUser from "@/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

interface SidebarProps {
  children: React.ReactNode;
}

async function Sidebar({ children }: SidebarProps) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <main className="lg:pl-20 h-full">
        <DesktopSidebar currentUser={currentUser!} />
        <MobileFooter />
        {children}
      </main>
    </div>
  );
}

export default Sidebar;

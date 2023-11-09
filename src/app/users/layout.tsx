import getUsers from "@/actions/getUsers";
import UserList from "@/app/users/components/UserList";
import Sidebar from "@/components/sidebar/Sidebar";

interface UsersLayoutProps {
  children: React.ReactNode;
}

export default async function UsersLayout({ children }: UsersLayoutProps) {
  const users = await getUsers();

  return (
    <Sidebar>
      <UserList items={users} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}

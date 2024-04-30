import { Sidebar } from '../../menu/components/Sidebar';


export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <main >
      <div >
        { children }
      </div>
    </main>
    
  );
}
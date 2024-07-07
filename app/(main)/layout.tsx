import Sidebar from "@/components/Sidebar"

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="border flex dark:bg-[#1F1F1F]">
        <Sidebar />
        <main className="flex-1 h-full overflow-y-auto">
          {children}
        </main>
    </div>
  )
}

export default MainLayout
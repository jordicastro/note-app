

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full border dark:bg-[#1F1F1F]">
        {children}
    </div>
  )
}

export default MainLayout
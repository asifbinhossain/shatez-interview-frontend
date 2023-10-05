import Navigation from "@/components/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <div className="lg:pl-72">{children}</div>
    </>
  );
};

export default DashboardLayout;

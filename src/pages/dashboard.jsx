const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="h-24 bg-neutral-secondary-soft rounded-base flex items-center justify-center">
          Box 1
        </div>

        <div className="h-24 bg-neutral-secondary-soft rounded-base flex items-center justify-center">
          Box 2
        </div>

        <div className="h-24 bg-neutral-secondary-soft rounded-base flex items-center justify-center">
          Box 3
        </div>
      </div>

      <div className="h-48 bg-neutral-secondary-soft rounded-base flex items-center justify-center">
        Main Content
      </div>
    </>
  );
};

export default Dashboard;

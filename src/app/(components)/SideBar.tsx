export default function SideBar() {
  return (
    <div className="fixed w-[270px] h-full mt-[50px] border pl-[30px]">
      Sidebar
      <div className="flex flex-col items-start">
        <button className="mb-[10px]">Home</button>
        <button className="mb-[10px]">Popular</button>
        <button className="mb-[10px]">Explore</button>
        <button className="mb-[10px]">All</button>
      </div>
      <div className="border"></div>
      <div>
        <div className="mb-[10px]">
          <img />
          Communities
        </div>
        <div className="mb-[10px] rounded-md hover:bg-slate-100 w-[80%] cursor-pointer">
          <img />
          r/antiwork
        </div>
        <div className="mb-[10px] rounded-md hover:bg-slate-100 w-[80%] cursor-pointer">
          <img />
          r/AskALiberal
        </div>
        <div className="mb-[10px] rounded-md hover:bg-slate-100 w-[80%] cursor-pointer">
          <img />
          r/AskEconomics
        </div>
      </div>
    </div>
  );
}

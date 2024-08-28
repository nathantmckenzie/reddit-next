export default function TopNavBar() {
  return (
    <div className="fixed h-[50px] w-full flex justify-between items-center border">
      <div className="ml-3">Reddit symbol</div>
      <div>
        <input
          placeholder="Search Reddit"
          className="w-[400px] rounded-[30px] h-[35px] p-3"
        />
      </div>
      <div className="flex flex-row mr-3">
        <div className="text-xs cursor-pointer">Message</div>
        <div className="text-xs cursor-pointer">Create post</div>
        <div className="text-xs cursor-pointer">Open inbox</div>
        <div className="text-xs cursor-pointer">Open profile menu</div>
      </div>
    </div>
  );
}

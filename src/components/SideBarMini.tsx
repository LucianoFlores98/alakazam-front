import {Button, Card} from "@material-tailwind/react";

export function SideBarMini() {
  return (
    <Card className=" h-full w-24 px-2 sticky rounded-sm flex flex-col border-r-2 border-gray-500/20" shadow={false}>
      <Button variant="text"><span className="material-symbols-rounded" >home</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >apartment</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >meeting_room</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >store</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >pets</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >outdoor_garden</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >child_care</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >person</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >female</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >floor</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >pool</span></Button>
    </Card>
  );
}
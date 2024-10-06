import {Button, Card} from "@material-tailwind/react";

export function SideBarMini() {
  return (
    <Card className=" h-full w-24 px-2 sticky rounded-sm flex flex-col border-r-2 border-gray-500/20" shadow={false}>
      <Button variant="text"><span className="material-symbols-rounded" >bathtub</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >bathtub</span></Button>

      <Button variant="text"><span className="material-symbols-rounded" >bathtub</span></Button>
      <Button variant="text"><span className="material-symbols-rounded" >bathtub</span></Button>

    </Card>
  );
}
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Review } from "./Review";
 
export function AllUsersOpinions() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} fullWidth variant="gradient" color="indigo" className="mt-4">Ver todas las opiniones</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Todas las opiniones</DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">
          <div className=" flex flex-col items-center space-y-4">
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
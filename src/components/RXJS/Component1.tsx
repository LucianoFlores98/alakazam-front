import { sharingInformationService } from "../../services/sharing-information.service";
import { Button } from "@material-tailwind/react";

function Component1() {
  const handleClick = () => {
    sharingInformationService.setSubject(true);
  };

  const handleClickNo = () => {
    sharingInformationService.setSubject(false);
  };
  return (
    <div>
      <Button onClick={handleClick}>Enviar information</Button>
      <Button onClick={handleClickNo}>NO Enviar information</Button>
    </div>
  );
}

export default Component1;
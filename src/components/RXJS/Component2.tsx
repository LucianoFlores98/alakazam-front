import { useEffect, useState } from 'react';
import { sharingInformationService } from '../../services/sharing-information.service';

function Component2() {
  const [count, setCount] = useState(0);
  const subscription$ = sharingInformationService.getSubject();
  useEffect(() => {
    subscription$.subscribe(data => {
      if (data) setCount(count + 1); // (!!data) la doble negacion es para asegurar que no sea null, undefined, ''. Es más para JS
    });
  }); 

  return <div>{count}</div>;
}
export default Component2;
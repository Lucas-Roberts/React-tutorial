import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose } : Props) => {
  return (
    <div className='alert alert-primary alert-dismissable'>{children}
     <button type="button" className='btn-close' onClick={onClose} data-bs-dimiss="alert" />
     </div>
  )
}


export default Alert;
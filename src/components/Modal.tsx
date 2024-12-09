import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: (
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isOpen: boolean,
  ) => {
    content: React.ReactNode;
    button: React.ReactNode;
  };
};

function Modal({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else if (!isOpen) {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const { button, content } = children(setIsOpen, isOpen);

  return (
    <>
      {button}
      {isOpen
        && ReactDOM.createPortal(
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <button
              type="button"
              aria-label="close"
              className="absolute inset-0 bg-black dark:bg-white dark:bg-opacity-40 bg-opacity-40 blur-[10px]"
              onClick={() => {
                setIsOpen(false);
              }}
            />
            <div className="relative z-10 w-full flex justify-center">
              {content}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default Modal;

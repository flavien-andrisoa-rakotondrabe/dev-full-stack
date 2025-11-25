'use client';

import Image from 'next/image';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Dispatch, ReactNode, SetStateAction } from 'react';

const Popup = ({
  children,
  title,
  open,
  onClose,
  handleSubmit,
}: {
  children: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
  handleSubmit: () => void;
}) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogTitle className="hidden"></AlertDialogTitle>
      <AlertDialogContent
        className="max-w-none! w-full h-screen backdrop-blur-2xl border-none p-0 rounded-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
        }}
      >
        <div className="relative w-full h-full flex flex-col justify-between py-18">
          <Image
            src="/icons/close.svg"
            alt="Close"
            width={32}
            height={32}
            className="absolute top-4 right-4 cursor-pointer"
            onClick={onClose}
          />

          <div className="flex flex-col items-center gap-16">
            <h5 className="text-center font-bold text-[24px]">{title}</h5>
            {children}
          </div>

          <div className="flex justify-center gap-8">
            <button
              type="reset"
              onClick={onClose}
              className="font-medium text-[20px] px-8 py-4 bg-[#575757] rounded-[12px] select-none cursor-pointer"
            >
              Annuler
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="font-medium text-[20px] px-8 py-4 bg-(--color-primary) rounded-[12px] select-none cursor-pointer"
            >
              Enregistrer les modification
            </button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Popup;

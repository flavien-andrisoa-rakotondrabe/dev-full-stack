'use client';

import MessageContent from './MessageContent';
import MessageDetails from './MessageDetails';
import MessageList from './MessageList';

const DiscuterComponent = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-[40px]">Discuter</h1>
      <div className="flex gap-4 items-stretch">
        <MessageList />
        <MessageContent />
        <MessageDetails />
      </div>
    </div>
  );
};

export default DiscuterComponent;

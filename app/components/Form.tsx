"use client";

import { useRef } from "react";
import { postData } from "../action";
import { toast } from 'react-hot-toast';

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSend = () => toast("Message sent successfully...");

  return (
    
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await postData(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="p-6 fixed bottom-0 left-0 w-full bg-gray-200"
    >
      <div className="flex">
        <input
          type="textarea"
          name="message"
          placeholder="Type your message..."
          className="flex-grow mr-2 py-2 px-4 text-wrap rounded-full"
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </form>
  );
}

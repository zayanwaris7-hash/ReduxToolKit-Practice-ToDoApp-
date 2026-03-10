import { PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo } from '../Redux/TodoSlice';

const InputBox = () => {
  const [msg, setmsg] = useState("");
  const dispatch = useDispatch();
  

  const handle = (e) => {
    // 1. Prevent page reload
    e.preventDefault(); 
    
    // 2. Fixed typo: Changed 'Text' to 'msg'
    if (msg.trim()) { 
        dispatch(AddTodo(msg));
        setmsg("");
    }
  };

  return (
    // 3. Attach onSubmit to the <form>, not onClick to the button
    <form onSubmit={handle} className="relative flex items-center gap-2 p-1">
      <div className="relative flex-1 group">
        <input
          type="text"
          value={msg}
          onChange={(e) => setmsg(e.target.value)}
          placeholder="Initiate new task..."
          className="w-full bg-transparent border-none py-4 px-6 text-white placeholder:text-zinc-600 focus:ring-0 focus:outline-none text-sm font-medium"
        />
        <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
      </div>

      <button
        type="submit"
        className="relative group overflow-hidden px-6 py-3 rounded-xl transition-all duration-300 active:scale-95"
      >
        <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-colors" />
        <div className="absolute inset-0 border border-indigo-500/20 group-hover:border-indigo-500/50 rounded-xl transition-colors" />
        
        <div className="relative flex items-center gap-2">
          <span className="text-xs font-bold tracking-widest text-indigo-400 group-hover:text-white transition-colors">
            EXECUTE
          </span>
          <PlusIcon className="w-4 h-4 text-indigo-400 group-hover:rotate-90 transition-transform duration-300" />
        </div>
        <div className="absolute inset-0 shadow-[0_0_20px_rgba(99,102,241,0.3)] opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </form>
  );
};

export default InputBox;
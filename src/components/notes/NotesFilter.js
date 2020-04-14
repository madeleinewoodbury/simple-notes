import React, { useState } from 'react';

const NotesFilter = () => {
  const [text, setText] = useState('');
  return (
    <form className="my-1">
      <input
        value={text}
        type="text"
        placeholder="Filter Notes..."
        onChange={(e) => setText(e.value)}
      />
    </form>
  );
};

export default NotesFilter;

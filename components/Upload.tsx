import React, { useState, ChangeEvent } from 'react';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files ? event.target.files[0] : null);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {selectedFile && <p>File selected: {selectedFile.name}</p>}
    </div>
  );
};

export default Upload;
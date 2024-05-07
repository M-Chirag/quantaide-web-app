import React, { useState, useRef } from 'react';
interface FileUploaderProps {
  onFileNameChange: (fileName: string) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileNameChange }) => {
  const [file, setFile] = useState<File | null>(null); 
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      onFileNameChange(selectedFile.name);
    }

    setUploaded(false); // Reset uploaded state when a new file is selected
    setLoading(true); // Start loading immediately

    if (!selectedFile) return; // Return if no file selected
    console.log(selectedFile.name);
    const formdata = new FormData();
    formdata.append("question", "Revert with same value");
    formdata.append("instruction", "Dont do anything.");
    formdata.append("file_data", selectedFile, selectedFile.name);

    const requestOptions: RequestInit = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    try {
      console.log("Sending request:", requestOptions);
      const response = await fetch("https://us-central1-encoded-antenna-362401.cloudfunctions.net/python-http-function", requestOptions);
      console.log("Response:", response);
      const result = await response.text();
      console.log("Result:", result);
      setUploaded(true);
      onFileNameChange(selectedFile.name);
    } catch (error) {
      console.error(error);
      onFileNameChange("Server Error");
      // Handle error here
    } finally {
      setLoading(false);
      
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`self-end`}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button disabled={uploaded || loading} onClick={handleIconClick} className="font-bold border border-solid border-2 border-amber-500 text-amber-500 rounded-md" style={{ minWidth: '121px', maxWidth: '121px', minHeight: '44px', maxHeight: '44px' }}>
        {loading ? (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex items-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"></div>
            <span className="text-white">Loading...</span>
          </div>
        </div>
        ) : (
          <span className="self-end cursor-pointer">
            {uploaded ? 'File uploaded' : 'Upload File'}
          </span>
        )}
      </button>
    </div>
  );
};

export default FileUploader;

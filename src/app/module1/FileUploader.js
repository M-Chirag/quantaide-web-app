import React, { useState, useRef } from 'react';

const FileUploader = ({ iconSource }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    console.log('Uploading file');
    if (!file) return;
    console.log(file.name);
    setLoading(true); // Set loading state to true when starting upload
    const formdata = new FormData();
    formdata.append("question", "Revert with same value");
    formdata.append("instruction","Dont do anything.");
    formdata.append("file_data", file, file.name);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    try {
      const response = await fetch("https://us-central1-encoded-antenna-362401.cloudfunctions.net/python-http-function", requestOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading state to false when upload is complete or fails
    }
  };

  return (
    <div className='self-end mb-1'>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {loading ? (
        <div className="relative">
          <div className="absolute inset-0 bg-gray-100 opacity-75 flex items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        </div>
      ) : (
        <button onClick={handleSubmit} className="border border-4 rounded-md">
          <div onClick={handleIconClick} className="self-end cursor-pointer">
            <img
              src={iconSource}
              alt="Upload Icon"
              className="w-8 h-8"
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default FileUploader;

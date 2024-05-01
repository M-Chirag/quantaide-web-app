
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const FileUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadedFile(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: '1px solid black', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here ...</p>
      ) : (
        <p>Drag &apos; n &apos; drop a file here, or click to select a file</p>
      )}
      {uploadedFile && <p>File uploaded: {uploadedFile.filename}</p>}
    </div>
  );
};

export default FileUploader;

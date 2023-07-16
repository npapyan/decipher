import { useState, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface FileUploadProps {
    onFileSelect: (file: File) => void;
}

export default function FileUpload({ onFileSelect }: FileUploadProps) {
    const [file, setFile] = useState<File | null>(null);

    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        if (event.target.files != null) {
            setFile(event.target.files[0]);
            onFileSelect(event.target.files[0]);
        }
    }

    return (
        <div>
            // <label htmlFor="fileUpload" >
            //     <Button size="large" variant="contained" component="span" startIcon={<AttachFileIcon />}>Upload</Button>
            // </label>
            <input className="hidden" onChange={onChangeHandler} type="file" id="fileUpload" accept=".png " ></input>
        </div>

    )
}


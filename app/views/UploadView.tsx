import FileUpload from "../components/FileUpload"

export default function UploadView() {
    const onFileSelect = (file: File) => {
        console.log(file);
    };
    
    return (
        <div>
            <FileUpload onFileSelect={onFileSelect} />
        </div>
    )

}
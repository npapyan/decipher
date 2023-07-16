import FileUpload from "../app/lib/component/FileUpload"

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
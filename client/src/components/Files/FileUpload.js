import axios from 'axios';
import './FileUpload.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function FileUpload() {
  function handleSubmit(e) {
    const form = new FormData();
    form.append('file', e.target.files[0]);
    e.target.value=null;

    axios.post('/upload', form)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => alert("File Upload Error"))
    }
  return (
    <div className="upload__body">
      <label className="upload__container">
        <input type="file" onChange={handleSubmit}/>
        <FileUploadIcon className="upload_icon"/>
        Upload
      </label>
    </div>
  )
}

export default FileUpload;
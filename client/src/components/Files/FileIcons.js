import { useState, useEffect, useRef } from 'react';
import './FileIcons.css';
import './FilePreview.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function FileIcons() {
  // DYNAMIC FILE ICONS
  const [fileIcons, setFileIcons] = useState(null);
  const [folderIcons, setFolderIcons] = useState(null);
  const ref = useRef({
    fileList: []
  })

  useEffect(() => {
    fetch("/files")
      .then((res) => res.json())
      .then((data) => {
        let folderDivs = [];
        let fileDivs = [];
        let list = [];

        data.folders.forEach(element => {
          list.push(element);
          folderDivs.push(
            <div 
            key={element}
            id={element}
            className="icons__container"
            onClick={() => highlightIcons(element)}
            onDoubleClick={() => showPreview(element)}
            >
            <h1>{element}</h1>
          </div>
          );
        });
        data.files.forEach(element => {
          list.push(element);
          fileDivs.push(
          <div 
            key={element}
            id={element}
            className="icons__container"
            onClick={() => highlightIcons(element)}
            onDoubleClick={() => showPreview(element)}
          >
            <h1>{element}</h1>
          </div>
          );
        });
        
        setFileIcons(fileDivs);
        setFolderIcons(folderDivs);
        ref.current.fileList = list;
      })
  }, []);

  // HIGHLIGHTING ICONS
  const highlightIcons = (element) => {
    let fileList = ref.current.fileList;
    fileList.forEach(id => {
      document.getElementById(id).style.backgroundColor = "white"
      document.getElementById(id).style.color = "#7A7A7A"
    });
    document.getElementById(element).style.backgroundColor = "#E8F0FE"
    document.getElementById(element).style.color = "#1967DA"
  }

  // PREVIEW OVERLAY
  const [selectedFile, setSelectedFile] = useState(null);
  
  const showPreview = (file) => {
    let fileType = file.split('.').pop().toLowerCase();
    var media;
    switch (fileType) {
      case "mp4":
      case "mov":
        media = 
        <video className="preview" controls muted="muted" loop autoPlay>
          <source src={"/media/" + file} type="video/mp4" />
        </video>
        break;
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
        media = <img className="preview" src={"/media/" + file} alt={file}/>
        break;
      default:
        media = <div className="preview__unsupported">This file type is not supported.</div>
    }
    setSelectedFile(
      <div className="overlay">
        <div className="overlay__header">
          <div className="preview__close" onClick={closePreview}>
            <ArrowBackIcon className="preview__close-icon"/>
          </div>
        </div>
        {media}
      </div>
    )
  }

  const closePreview = () => {
    setSelectedFile(null);
  }

  return (
    <div>
      <div className="items__container__header">
      Folders
      </div>
      <div className="items__container">
        {!folderIcons ? "Loading..." : folderIcons}
      </div>
      <div className="items__container__header">
      Files
      </div>
      <div className="items__container">
        {!fileIcons ? "Loading..." : fileIcons}
      </div>
      {selectedFile}
    </div>
  );
}

export default FileIcons;
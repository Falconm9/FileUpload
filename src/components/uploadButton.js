import React, {useState} from "react";
import Loading from "./loadingComponent";
function UploadButton({saveFile, loading}){
	const [file, setFile] =  useState(null);
	
  const handleSubmit = (event) => {
		event.preventDefault();
		let formData = new FormData();
		formData.append('file', file);
		saveFile(formData) //send file to endpoint
	}

	const onChangefile = (event) => {
    var filesArr = Array.prototype.slice.call(event.target.files);
		var blob = filesArr[0];
		if(blob && blob.type === "application/x-msdownload"){ //validate file type
			setFile(blob)
		}else{
			setFile(null)
			alert("Just PE files are allowed")
		}
	}
	if(loading){
		return (
      <>
        <Loading />
      </>
    )
	}

  return (
    <form onSubmit={handleSubmit} style={uploadStyle}>
        <input 
					type="file"
					id="myFile"
					name="filename" 
					onChange={onChangefile}
					accept="application/x-msdownload"
				/>
        <input type="submit" disabled={file === null}/>
    </form>
  );
}

const uploadStyle= {
	padding: '30px 0'
}

export default UploadButton;

import React from "react";
const FileList = ({itemlist}) => {
  const FileItem = ({information}) => (
    <div style={styles.topicItem}>
      <b style={styles.topicName}>{information.fileName}</b>
      <p>
        <b>Size: </b>{information.fileSize}
      </p>
    </div>
  )

  return(
    <div>
      
      <div style={styles.header}>
        <h4 data-testid="queuq">Files on Queue</h4>
      </div>
      <div>
        {
          itemlist?.map((item, index) => (
            <FileItem key={index} information={item.data} />
          ))
        }
      </div>
    </div>
  )
}

const styles = {
  header:{
    alignItems: 'flex-start',
    display: 'flex',
    margin: '0 20%',
  },
  topicItem: {
    outline: "2px solid #c5c6c7",
    margin: '5px 0',
    borderRadius: '3px',
    padding: '5px',
    cursor: 'pointer',
    display: 'inline-block',
    width: '60%'
  },
  topicName: {
    color: '#0000EE'
  }
}


export default  FileList;
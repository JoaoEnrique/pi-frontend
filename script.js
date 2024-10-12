function dropHandler(ev) {
    console.log("File(s) dropped");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
          document.querySelector(".drop_zone-input").innerHTML = `
          <p> ${file.name}</p>
        `
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
        document.querySelector(".drop_zone-input").innerHTML = `
          <p> ${file.name}</p>
        `
      });
    }
  }
  
  function dragOverHandler(ev) {
    console.log("File(s) in drop zone");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }
  
  const actualBtn = document.getElementById('actual-btn');
  const fileChosen = document.getElementById('file');
  
  if(fileChosen){
    fileChosen.addEventListener('change', function(){
      fileChosen.textContent = this.files[0].name
      document.querySelector(".drop_zone-input").innerHTML = `
          <p> ${this.files[0].name}</p>
        `
    })
  }
  
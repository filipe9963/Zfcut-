document.getElementById('videoInput').onchange = function(e) {
  const file = e.target.files[0];
  if(file) {
    document.getElementById('preview').src = URL.createObjectURL(file);
  }
}

function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  }

  window.onload=function(){
    document.getElementById('btnConfess').addEventListener('click', function(){
        document.querySelector('.bg-modal').style.display = 'flex';
    });

    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('.bg-modal').style.display = 'none';
    });


    document.getElementById('confess').addEventListener('click', function(){
        document.querySelector('.bg-modal').style.display = 'flex';
    });

    document.getElementById('admin').addEventListener('click', function(){
        document.querySelector('.bg-modal-admin').style.display = 'flex';
    });

    document.querySelector('.close-admin-login').addEventListener('click', function(){
        document.querySelector('.bg-modal-admin').style.display = 'none';
    });
    
    // document.getElementById('btnSubmit').addEventListener('click', function(){
    //     //will pop up the line stating confession #id and date
    // })
  }



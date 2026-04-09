function login(){
  const e = prompt('Email');
  const n = prompt('Name');
  api({action:'login', email:e, name:n}).then(r=>{
    localStorage.email = e;
    localStorage.role = r.role;
    alert("Login berhasil sebagai " + r.role);
    location.reload();
  }).catch(err=>{
    console.error("API error:", err);
    alert("Login gagal");
  });
}

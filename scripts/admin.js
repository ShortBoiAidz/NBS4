function adminLogin() {
  const adminID = document.getElementById("password").value;
  const mainContent = document.getElementById("adminOnly");
  const loginForm = document.getElementById("loginForm");
  const incorrectID = document.getElementById("incorrectID");
  let isOwner = true;

  adminUsers = ["ShortBoiAidz", "paulblart", "1", "lewisJohnLewis"];

  if (adminUsers.includes(adminID) || isOwner) {
      loginForm.style.display = "none";
      mainContent.style.display = "flex";
    }
  else {
      incorrectID.style.display = "flex";
    }
  }
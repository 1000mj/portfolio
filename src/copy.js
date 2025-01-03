function copyText() {
    var copyTarget = document.getElementById("copyTarget");
    copyTarget.select();
    document.execCommand("copy");
    alert("복사되었습니다.");
  }
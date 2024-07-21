async function copy() {
    navigator.clipboard.writeText("guedosha");
    document.getElementById("discord").style.height = "1.2em";
    setTimeout(() => { document.getElementById("discord").style.height = "1.3em"; }, 100);
}
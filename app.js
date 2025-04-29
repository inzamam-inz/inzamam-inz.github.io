function moreDesignation() { 
    document.getElementById("hideDesignation").innerHTML = "Expert coder in Codeforces<br>5 star coder in Codechef<br>Knight coder in Leetcode";
}

function moreDescribe() { 
    document.getElementById("hideDescribe").innerHTML = "has sharpened my problem-solving skills. I love writing code, and my quick learning ability helps me adapt to any technology or framework.";
}

function downloadPDF() {
    const url = '';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-pdf-file.pdf';
    link.click();
}
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

function addFeedback() {
    const name = document.querySelector('.name-email input[type="text"]').value;
    const email = document.querySelector('.name-email input[type="email"]').value;
    const message = document.querySelector('.say textarea').value;

    // Construct the email body 
    const mailto = "inzamamulhaquesobuz655@gmail.com";
    const body = encodeURIComponent(`${message}`);

    // Trigger the email client
    window.location.href = `mailto:${mailto}?&body=${body}`;
}
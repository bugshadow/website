function openMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
function contactMe() {
    window.location.href = "mailto:bouhaddachomar@gmail.com";
}
function downloadCV() {
    // Google Drive direct download link
    const fileUrl = 'https://drive.google.com/file/d/1FVF7CDlGuxM-wP10MgOO652gTAzZiHdm/view?usp=sharing';
    // Fetch the file content
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            // Create a Blob URL
            const url = window.URL.createObjectURL(blob);
            // Create a new anchor element
            const link = document.createElement('a');
            // Set the href attribute to the Blob URL
            link.href = url;
            // Set the download attribute to specify the file name
            link.download = 'Omar_Bouhaddach_CV.pdf';
            // Append the anchor element to the body (it doesn't need to be visible)
            document.body.appendChild(link);
            // Simulate a click on the anchor element
            link.click();
            // Remove the anchor element from the body
            document.body.removeChild(link);
            // Revoke the Blob URL to free up memory
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('Error downloading the file:', error);
        });
}
function redirectToGitHub() {
    window.location.href = 'https://github.com/bugshadow';
}
// display.js

function copyCode() {
    var code = document.getElementById("code-content").textContent;
    navigator.clipboard.writeText(code).then(function() {
        alert("Code copied to clipboard!");
    }, function() {
        alert("Failed to copy code.");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fileName = urlParams.get('file');

    if (fileName) {
        // Fetch the code file
        fetch(`code/${fileName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }
                return response.text();
            })
            .then(code => {
                const codeContent = document.getElementById('code-content');
                codeContent.textContent = code;
            })
            .catch(error => {
                console.error('Error loading code file:', error);
                document.getElementById('code-content').textContent = 'Error loading code file.';
            });
    } else {
        document.getElementById('code-content').textContent = 'No code file specified.';
    }
});

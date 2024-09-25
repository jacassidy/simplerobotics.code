// main.js

fetch('code-list.json')
    .then(response => response.json())
    .then(codeFiles => {
        const codeList = document.getElementById('code-list');
        codeFiles.forEach(file => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `code.html?file=${encodeURIComponent(file)}`;
            link.textContent = file;
            listItem.appendChild(link);
            codeList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching code list:', error);
        const codeList = document.getElementById('code-list');
        codeList.textContent = 'Error loading code list.';
    });

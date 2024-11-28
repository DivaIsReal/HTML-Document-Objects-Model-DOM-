document.querySelectorAll('div').forEach(div => {
    div.style.backgroundColor = '#eb10e0'; 
});

document.querySelector('a').setAttribute('href', 'https://www.google.com');

document.querySelectorAll('li').forEach((li, index) => {
    li.textContent = `List Baru ${index + 1}`; 
    li.style.fontSize = '18px'; 
    li.style.fontFamily = 'Arial, sans-serif'; 
    li.style.backgroundColor = '#808080'; 
    li.style.color = '#fff'; 
    li.style.padding = '10px'; 
    li.style.marginBottom = '5px'; 
    li.style.listStyleType = 'none'; 
});

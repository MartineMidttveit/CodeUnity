function addTag() {
    var input = document.getElementById('tags').value.trim();
    if (input !== '') {
        var tagContainer = document.getElementById('tagContainer');
        var newTag = document.createElement('div');
        newTag.classList.add('border', 'flex', 'items-center', 'justify-center', 'rounded');

        var icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-xmark', 'text-secondary', 'text-lg', 'px-4');
        icon.addEventListener('click', function() {
            newTag.remove(); 
        });
        newTag.appendChild(icon);

        var tagText = document.createElement('span');
        tagText.classList.add('border-l', 'px-4', 'py-2');
        tagText.textContent = '#' + input;
        newTag.appendChild(tagText);

        tagContainer.appendChild(newTag);

        document.getElementById('tags').value = '';
    }
}

document.getElementById('addTag').addEventListener('click', addTag);

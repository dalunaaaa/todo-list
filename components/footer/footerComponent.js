export function footer() {
    let footer = document.createElement('footer');
    
    const link = document.createElement('a');
    link.href = 'https://github.com/dalunaaaa/todo-list';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '@dalunaaaa'; 

    link.className = 'footer-link';
    footer.appendChild(link);

    return footer;
}
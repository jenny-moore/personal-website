// Skills section dropdowns

let currentDropdown = null;

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        const dropdown = this.nextElementSibling;
        while (dropdown && !dropdown.classList.contains('dropdown')) {
            dropdown = dropdown.nextElementSibling;
        }
        
        if (currentDropdown && currentDropdown !== dropdown) {
            currentDropdown.classList.remove('show');
            currentDropdown.previousElementSibling.classList.remove('active');
        }
        
        if (dropdown) {
            dropdown.classList.toggle('show');
            this.classList.toggle('active');
            currentDropdown = dropdown.classList.contains('show') ? dropdown : null;
        }
    });
});

document.addEventListener('click', function() {
    if (currentDropdown) {
        currentDropdown.classList.remove('show');
        const skillItem = currentDropdown.previousElementSibling;
        if (skillItem && skillItem.classList.contains('skill-item')) {
            skillItem.classList.remove('active');
        }
        currentDropdown = null;
    }
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Projects/Courses Dropdown

const headers = document.querySelectorAll('.list-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const arrow = header.querySelector('.arrow');
        
        item.classList.toggle('active');
        arrow.classList.toggle('expanded');
    });
});

// Handle links that target list items
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetItem = document.getElementById(targetId);
        
        if (targetItem && targetItem.classList.contains('list-item')) {
            // Expand the item if not already expanded
            if (!targetItem.classList.contains('active')) {
                const arrow = targetItem.querySelector('.arrow');
                targetItem.classList.add('active');
                arrow.classList.add('expanded');
            }
            
            // Scroll to the item
            targetItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Add highlight effect
            targetItem.classList.add('highlight');
            setTimeout(() => {
                targetItem.classList.remove('highlight');
            }, 2000);
        }
    });
});
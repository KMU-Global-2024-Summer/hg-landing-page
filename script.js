document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners and open the first tab
    document.querySelectorAll('.tab-link').forEach(tab => {
        tab.addEventListener('click', function(e) {
            openTab(e, this.getAttribute('data-tabname'));
        });
    });
    document.getElementsByClassName('tab-link')[0].click();
});


// --- INTERAKSI UNTUK BAGIAN HOW-TO LAUNCHER ---
document.addEventListener('DOMContentLoaded', () => {
    // Pastikan kode ini berjalan setelah semua elemen ada
    const textSteps = document.querySelectorAll('.text-step');
    const uiPanels = document.querySelectorAll('.ui-panel');

    // Jika tidak ada elemennya, hentikan fungsi
    if (textSteps.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        // Atur threshold agar aktif saat elemen berada di tengah layar
        threshold: 0.6 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hapus kelas 'active' dari semua panel UI
                uiPanels.forEach(panel => {
                    panel.classList.remove('active');
                });

                // Dapatkan ID panel yang sesuai dari atribut data-highlight
                const highlightId = entry.target.dataset.highlight;
                const panelToHighlight = document.getElementById(highlightId);

                // Tambahkan kelas 'active' ke panel yang benar
                if (panelToHighlight) {
                    panelToHighlight.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    textSteps.forEach(step => {
        observer.observe(step);
    });
});
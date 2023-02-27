const images = document.querySelectorAll('[data-src]');

const options = {
    threshold: .5,
    rootMargin: '0px 0px 100px 0px'
};

function preloadImage(item) {
    const source = item.getAttribute('data-src');
    if(!source) {
        return;
    }
    item.src = source;
};

const io = new IntersectionObserver (
    (entries)=> {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
            console.log(entries);
        })
    },
    options
);

images.forEach(item => {
    io.observe(item);
});
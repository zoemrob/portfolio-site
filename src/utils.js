export function checkWidth() {
    const sz = window.innerWidth;
    if (sz >= 1024) return 'desktop';
    else if (sz < 1024 && sz >= 768) return 'tablet';
    else return 'mobile';
}

export function def(x) {
    return typeof x !== "undefined";
}
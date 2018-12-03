export function checkWidth() {
    const sz = window.innerWidth;
    if (sz >= 1024) return 'desktop';
//    else if (sz < 1024 && sz >= 768) return 'tablet';
    else return 'mobile';
}

export function def(x) {
    return typeof x !== "undefined";
}

export function makeIdWithMixin(str, mixin) {
    return str.replace(' ', '').toLowerCase() + '-' + (def(mixin) ? mixin : str.slice(0, 1).toUpperCase() + str.slice(-1).toUpperCase() + 'id');
}

export function empty(data) {
    if (typeof (data) === 'number' || typeof (data) === 'boolean') {
        return false;
    }
    if (typeof (data) === 'undefined' || data === null) {
        return true;
    }
    if (typeof (data.length) !== 'undefined') {
        return data.length === 0;
    }
    let count = 0;
    for (let i in data) {
        if (data.hasOwnProperty(i)) {
            count++;
        }
    }
    return count === 0;
}

const projectRoot = 'projects/';
export function makeLiveLink(path) {
    return projectRoot + path;
}

const repoBase = 'https://github.com/zoemrob/';
export const makeRepoLink = link => repoBase + link;
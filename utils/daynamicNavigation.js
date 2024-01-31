/* -------------------------------------------------------------------------- */
/*                      is children page active checking                      */
/* -------------------------------------------------------------------------- */

export function isChildrenPageActive(path, match) {
    if (path && match) {
        if (path === match) {
            return true;
        }
        return false;
    }
    return false;
}

/* -------------------------------------------------------------------------- */
/*                       is parent page active checking                       */
/* -------------------------------------------------------------------------- */
export function isParentPageActive(pages, path) {
    if (pages) {
        return pages.some((page) => page.path === path);
    }
    return false;
}

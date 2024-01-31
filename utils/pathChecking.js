export default function pathChecking(path, match) {
    if (path && match) {
        if (path === match) {
            return true;
        }
        return false;
    }
    return false;
}

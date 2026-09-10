// Section anchors stay relative on the homepage and jump back to it elsewhere.
export const createSectionHref = (home) => (hash) => (home ? hash : `/${hash}`);

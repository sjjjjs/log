
export const noop = () => false;

export const delay = ms => new Promise(resolve => {
    setTimeout(resolve, ms);
});
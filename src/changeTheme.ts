export function changeTheme(theme:string) {
    // change html attribute to
    // <html data-theme={theme}>
    document.documentElement.setAttribute('data-theme', theme);
}
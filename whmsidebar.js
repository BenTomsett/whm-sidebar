(() => {
    const sidebar = document.getElementsByClassName("cp-layout-main-menu")[0];
    const main = document.getElementsByClassName("cp-layout-wrapper ")[0];
    const container = document.getElementsByClassName("container-lg")[0];
    if (sidebar.offsetWidth > 0) {
        sidebar.style.minWidth = 0;
        sidebar.style.maxWidth = 0;
        main.style.marginLeft = 0;
        container.style.maxWidth = "100%";
    } else {
        sidebar.style.minWidth = "clamp(240px,14.8vw,320px)";
        sidebar.style.maxWidth = "clamp(240px,14.8vw,320px)";
        main.style.marginLeft = "clamp(240px,14.8vw,320px)";
        container.style.maxWidth = "1320px";
    }
})();

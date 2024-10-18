if (window.location.pathname.startsWith('/popular-repacks/') || window.location.pathname.startsWith('/popular-repacks-of-the-year/'))
    console.log("Popular Repacks Page");
else {
    document.getElementsByClassName('jetpack_top_posts_widget')[0].style.display = 'none';
    document.getElementsByClassName('jetpack_top_posts_widget')[1].style.display = 'none';
}
export function changeTitle(to, from, next){
        document.title = to.meta.title;
        next();
}
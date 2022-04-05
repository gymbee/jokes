import classes from "./Layout.module.scss"

function Layout(props) {
    return (
        <main className={classes.container}>
           {props.children}
        </main>
    );
}

export default Layout;

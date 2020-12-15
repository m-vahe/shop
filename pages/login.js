import LoginScene from "../scenes/login";
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
const Login = () => {
    return (
        <>
            <Header/>
            <LoginScene />

        </>
    );
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Login;

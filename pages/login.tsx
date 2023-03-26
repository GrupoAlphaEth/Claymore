import styles from "@/styles/login.module.css";
import MainButton from "@/components/buttons/MainButton";
import Img from "@/components/images/Img";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import Metamask from "../components/icons/metamask";
import TittleHeader from "@/components/layout/tittle_header";

function login() {
    return (
        <div className={styles.loginPage}>
            <Header />
            <div className={styles.container}>
                <TittleHeader tittle="Login" />
                <div className={styles.login}>
                    <div className={styles.image}>
                        <Img src="/images/login.png" alt="Login Image" />
                    </div>
                    <div className={styles.loginImage}>
                        {/* <Img
                            src="/images/metamask_poly.png"
                            alt="Login Image"
                        /> */}
                        <Metamask />
                        <div className={styles.loginButtons}>
                            <MainButton type="button">
                                Sign in with Metamask
                            </MainButton>
                            <MainButton type="button">
                                Sign in with Email
                            </MainButton>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default login;

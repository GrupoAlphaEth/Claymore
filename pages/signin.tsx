import styles from "@/styles/signin.module.css";
import MainButton from "@/components/buttons/MainButton";
import Img from "@/components/images/Img";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import Metamask from "../components/icons/metamask";
import TittleHeader from "@/components/layout/tittle_header";
import Link from "next/link";

function signin() {
    return (
        <div className={styles.loginPage}>
            <Header />
            <div className={styles.container}>
                <TittleHeader tittle="Sign In" />
                <div className={styles.login}>
                    <div className={styles.image}>
                        <Img src="/images/signin.png" alt="Sign in Image" />
                    </div>
                    <div className={styles.loginImage}>
                        {/* <Img
                            src="/images/metamask_poly.png"
                            alt="Login Image"
                        /> */}
                        <Metamask />
                        <div className={styles.loginButtons}>
                            <Link
                                href={"/market"}
                                className={styles.buttonLink}
                            >
                                <MainButton type="button">
                                    <Metamask />
                                    Sign in with Metamask
                                </MainButton>
                            </Link>
                            {/* <MainButton type="button">
                                Sign in with Email
                            </MainButton> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default signin;

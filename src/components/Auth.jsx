import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
import "../styles/Auth.css";

const cookies = new Cookies();

export const Auth = (props) => {
  const { setIsAuth } = props;

  const signInWithGoggle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="menu">
        <a
          target="_blank"
          href="https://www.instagram.com/seyem.20/?hl=tr"
        >
          <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/instagram_icon-instagram_buttoninstegram-256.png" />{" "}
           İnstagram
        </a>
        <a target="_blank" href="https://github.com/seyemr">
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png" />
           GitHup
        </a>
        <a target="_blank" href="https://twitter.com/SeydiEmre02">
          <img src="https://www.financialexpress.com/wp-content/uploads/2023/07/cropped-twitter-real-logo.png?w=640" />
           Twitter
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/seydiemre/">
          <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-256.png" />
           LinkedIn
        </a>
        <a target="_blank" href="https://www.youtube.com/@seydiemre">
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-256.png"/>
           YouTube
        </a>
      </div>
      <div>
        <h1 className="yazi">Chat</h1>
      </div>
      <div className="auth">
        <p>Devam Etmek İçin Google ile Oturum Açın</p>
        <button onClick={signInWithGoggle}>Google ile Giriş Yapın</button>
      </div>
    </div>
  );
};

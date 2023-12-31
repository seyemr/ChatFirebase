import React, { useState, useRef } from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import { Chat } from "./components/Chat";
import { signOut } from "firebase/auth";
import {auth} from './firebase-config'

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth)
    cookies.remove("auth-token")
    setIsAuth(false)
    setRoom(null)
  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div>
          <div className='menu'>
          <><a target="_blank" href="https://www.instagram.com/seyem.20/?hl=tr">
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
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-256.png" />
           YouTube
        </a></>
          </div>
          <div><h1 className='yazi'>CHAT</h1></div>
        <div className="room">
          <label className="enterRoom">Oda Adını Girin:</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
          Sohbete Gir
          </button>
        </div>
        </div>
      )}

      <div className="sign-out">
        <button className="cikis" onClick={signUserOut}>Çıkış Yap</button>
      </div>
    </>
  );
}
export default App;

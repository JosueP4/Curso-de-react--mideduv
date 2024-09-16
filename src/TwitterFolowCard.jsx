import { useState } from "react";

export function TwitterFolowCard({ userName, children }) {
  const [isFollowing, setfollowing] = useState(false);

  const text = isFollowing ? "siguiendo" : "seguir";
  const buttonclasname = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setfollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="imagen perfil"
          src={`https://unavatar.io/${userName}`}
        />

        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonclasname} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}

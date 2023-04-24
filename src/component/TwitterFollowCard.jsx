import { useState } from "react"

const TwitterFollowCard = ({formatUser, userName, name}) => {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing 
    ? "tw-followCard-button is-following" 
    : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" alt="avatar" src={`https://unavatar.io/${userName}`} />
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-infoUserName">{formatUser(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}

export default TwitterFollowCard;
import cl from './CardItem.module.css';
import useMark from '../hooks/useMark';

export default function CardItem({ title, cardRepoUrl, avatarUrl, ownerUrl }) {
    const [, setMark] = useMark('https://github.com/alexup71rus', 'mark');
    const cardClasses = [cl.card];


    if (setMark(ownerUrl)) {
        cardClasses.push(cl.mark);
    }

    return (
        <div className={cardClasses.join(' ')}>
            <div className={cl.cardTitle}>
                <a className={cl.cardOwnerUrl} href={ownerUrl} target="_blank" rel="noopener noreferrer">
                    <img className={cl.cardAvatar} src={avatarUrl} alt={title} />
                </a>
                <div className={cl.cardOwner}>{title}</div>
            </div>
            <div className={cl.cardRepo}>Repo: <a className={cl.cardRepoUrl} href={cardRepoUrl} target="_blank" rel="noopener noreferrer">{cardRepoUrl}</a></div>
        </div>
    )
}
import cl from './CardItem.module.css';
import useMark from '../hooks/useMark';
import {IRepo} from '../models/IRepo'; // React.FC
import { memo, useMemo } from 'react';

const CardItem = memo(({ title, description, cardRepoUrl, avatarUrl, ownerUrl }: IRepo) => {
    const [, setMark] = useMark('https://github.com/alexup71rus', 'mark');
    const cardClasses = useMemo(() => [cl.card], []);


    if (setMark(ownerUrl)) {
        cardClasses.push(cl.mark);
    }

    return (
        <div className={cardClasses.join(' ')}>
            <a className={cl.cardOwnerUrl} href={ownerUrl} target="_blank" rel="noopener noreferrer">
                <img className={cl.cardAvatar} src={avatarUrl} alt={title} />
            </a>
            <a className={cl.cardRepoUrl} href={cardRepoUrl} target="_blank" rel="noopener noreferrer" title={description}>
                <div className={cl.cardTitle}>
                    {title}
                    {description ? <span className={cl.cardRepoDescription}>{description}</span> : null}
                </div>
            </a>
        </div>
    )
});

export default CardItem;
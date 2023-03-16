
import moment from 'moment';

const NoteDate = ({ date }) => {
    return (
        <div className="notes item_date">
            <p>
                <span> {moment(new Date(date)).format('MMMM')}</span>
                <span>{moment(new Date(date)).format('DD')}</span>
                <span>{moment(new Date(date)).format('YYYY')}</span>
            </p>
        </div>
    )
}

const inotes = ({ Note }) => {
    return (
        <div className="main_container">
            <NoteDate date={Note.date} />
            <div className="notes item_title">{Note.title}</div>
            <div className="notes item_discription">{Note.discription}</div>
            <div></div>
        </div>
    )
}
export default inotes;
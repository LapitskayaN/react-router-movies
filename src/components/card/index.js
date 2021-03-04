
const Card = ({title, posterUrl, id, onClick}) => {
    return (
        <div className="card" id={id}>
            <h1>{title}</h1>
            <img src={posterUrl} alt={title} />
            <button id={id} onClick={(e) => onClick(e)}>
                Cick me
                </button>

        </div>

    )
}

export default Card;
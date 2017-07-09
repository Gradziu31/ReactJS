var data = {
    title: 'Temat Kursu',
    description: 'Opis Kursu...',
    image: 'http://lorempixel.com/200/200/',
    is_new: true,
    is_promo: false
}

var course = (
    <div className="media border">
        {/* Zdjęcie */}
        <div className="media-left">
            <img src={data.image} alt="cover" />
        </div>
        <div className="media-body">
            {/* Tytuł */}
            <h3>{data.title} {data.is_new? <b className="label label-default">Nowy!</b> : <span className="label label-default">Uwaga stary kurs!</span>}
            </h3>
            {/* Promocja */}
            <p>{data.description}</p> 
            {data.is_promo? <b>Kurs jest w Pomocji</b> : null}
        </div>
    </div>
            )
        
    ReactDOM.render(course, document.getElementById('root')) 
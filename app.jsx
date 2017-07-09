var data = {
    title: 'Temat Kursu',
    description: 'Opis Kursu...',
    image: 'http://lorempixel.com/200/200/',
    is_new: true,
    is_promo: false
}

var course = (
            <div className="media border">
            <div className="media-left">
                <img src={data.image} alt="cover" />
            </div>
            <div className="media-body">
                <h3>{data.title} {data.is_new? <b className="label label-default">Nowy!</b> : <span className="label label-default">Uwaga stary kurs!</span>}
                </h3>
                <p>{data.description}</p> 
                {data.is_promo? <b>Kurs jest w Pomocji</b> : null}
            </div>
        </div>
            )
        
        ReactDOM.render(course, document.getElementById('root')) 
var data = {
    title: 'Temat Kursu',
    description: 'Opis Kursu...',
    image: 'http://lorempixel.com/200/200/'
}

var course = (
            <div className="media border">
            <div className="media-left">
                <img src={data.image} alt="cover" />
            </div>
            <div className="media-body">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
        </div>
            )
        
        ReactDOM.render(course, document.getElementById('root')) 
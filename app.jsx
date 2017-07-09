var data = {
    title: 'Temat Kursu',
    description: 'Opis Kursu...',
    image: 'http://lorempixel.com/200/200/',
    author: 'Testowy Autor',
    deration: '6 godz',
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
        
        {/* Tabela informacyjna */}
        <div className="media-right">
        <table className="table course_details">
            <tbody>
            <tr>
                <th>Autor</th>
                <td>{data.author}</td>
            </tr>
            <tr>
                <th>Czas Trwania</th>
                <td>{data.deration}</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
            )
        
    ReactDOM.render(course, document.getElementById('root')) 
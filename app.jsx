var data = {
    "id": 0,
    "title": "Kurs Programowanie w jQuery - w Praktyce",
    "description": "Poznaj jQuery, czyli najbardziej popularną bibliotekę JavaScript na Świecie! Z jQuery korzystają niemal wszystkie nowoczesne serwisy WWW, a nasz Kurs stanowi niezwykle praktyczne i wyczerpujące omówienie tej biblioteki od podstaw, aż po bardziej zaawansowane techniki. Jeśli znasz już HTML i CSS oraz przynajmniej podstawy JavaScript, jQuery to kolejna obowiązkowa pozycja na Twojej drodze do tworzenia świetnych serwisów internetowych. ",
    "image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_27ded9b2-af48-4118-a02a-e35fe950a9be.png",
    "author": "Piotr Palarz",
    "duration": "8 godzin",
    "price": 99.00,
    "rating": 4,
    "categories": ["JavaScript", "jQuery"],
    "is_new": true,
    "is_new": true,
    "is_promo": true
}

{/* co daje dopisanie funkcji? jeśli teraz dane ze zmiennych powyżej przeniosę i załadują się później to nie zwróci błędu, tylko funcka zaczeka aż dostanie "date" i wtedy dopiero wywoła swój kod gdzie juz ma odczytane zmienne - następnie return zwraca dane z funkcji, przydatna opcja jeśli jakieś zmienne ładują się po naszym skrypcie*/}
var NewLabel = function(data){ return data.is_new? <b className="label label-default">Nowy!</b> : null;}
var CoursePromoLabel = function(data){ return data.is_promo? <b>Kurs jest w Pomocji</b> : null;}
var CourseActions = function(data){ return  (
<div className="btn-group pull-right">
                <button className="btn btn-default">Szczegóły kursu</button>
                <button className="btn btn-default">Dodaj do ulubionych</button>
                <button className="btn btn-default">Dodaj do koszyka</button>
            </div>
)}
var CourseDetails = function(data){ return (
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
)}
var CourseMedia = function(data){ return <img src={data.image} alt="cover" />;}




var Course = function(data){ 
    return(
    <div className="media border">
        {/* Zdjęcie */} 
        <div className="media-left">
            {CourseMedia(data)}
        </div>
        <div className="media-body">
            {/* Tytuł */}
            <h3>{data.title} {NewLabel(data)}
            </h3>
            {/* Promocja */}
            <p>{data.description}</p> 
            {CoursePromoLabel(data)}
            {/* Przyciski */}
            {CourseActions(data)}
        </div>
        
        {/* Tabela informacyjna */}
        <div className="media-right">
        {CourseDetails(data)}
        </div>
    </div>
            )
}

var data = {
    "id": 0,
    "title": "Kurs Programowanie w jQuery - w Praktyce",
    "description": "Poznaj jQuery, czyli najbardziej popularną bibliotekę JavaScript na Świecie! Z jQuery korzystają niemal wszystkie nowoczesne serwisy WWW, a nasz Kurs stanowi niezwykle praktyczne i wyczerpujące omówienie tej biblioteki od podstaw, aż po bardziej zaawansowane techniki. Jeśli znasz już HTML i CSS oraz przynajmniej podstawy JavaScript, jQuery to kolejna obowiązkowa pozycja na Twojej drodze do tworzenia świetnych serwisów internetowych. ",
    "image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_27ded9b2-af48-4118-a02a-e35fe950a9be.png",
    "author": "Piotr Palarz",
    "duration": "8 godzin",
    "price": 99.00,
    "rating": 4,
    "categories": ["JavaScript", "jQuery"],
    "is_new": true,
    "is_new": true,
    "is_promo": true 
}
        
    ReactDOM.render(Course(data), document.getElementById('root')) 
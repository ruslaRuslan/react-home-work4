function Testomonials(props) {
    return <>
        <div class="card">
            <img src={props.imgUrl} alt="" />
            <h1>Hi, I'm {props.name}</h1>
            <p>I'm {props.name} and i' m {props.age} years old</p>
        </div>
    </>
}

export default Testomonials


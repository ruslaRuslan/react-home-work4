function Testomonials(props) {
    return <>
        <h1>Hi, I'm {props.name}</h1>
        <p>I'm {props.name} and i' m {props.age} years old</p>
        <img src={props.imgUrl} alt="" />
    </>
}

export default Testomonials


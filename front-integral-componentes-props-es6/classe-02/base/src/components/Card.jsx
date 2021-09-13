import '../styles/Card.styles.css';
const Card = (props) => {
  const { src, nome, user, followers, seguindo} = props;
  return (
    <div className="card">
      <img src={src} alt="perfil" />
      <h2>{nome}</h2>
      <p>{user}</p>
      <p><span>{followers}</span> seguidores</p>
      <p><span>{seguindo}</span> seguindo</p>
    </div>
  )
}

export default Card

export function RenderUsers({resultados}) { //recibimos el array de resultados provenientes de InputLoader.js
    if (!resultados) { //si no hay resultados
        return <>No se proporcionaron resultados.</>; //empleamos fragmentos
    }
    return (
        <>
            {resultados.length > 0 ? ( //numero de argumentos que contiene resultados
                resultados.map((user) => (  //funcion map un método usado para iterar a traves de los elementos de resultados
                <div key={user.id} className="user">
                    <h2>{user.login}</h2>
                    <div className="image">
                        <img src={user.avatar_url} alt="Avatar" />
                    </div>
                    <div className="userData">
                        <p className="text">
                            <b>Nombre:</b> {user.name ? user.name : 'N/A'}
                        </p>
                        <p className="text">
                            <b>Compañía:</b> {user.company ? user.company : 'N/A'}
                        </p>
                        <div className="otherData">
                            <p>
                                <b>Repositorios:</b> {user.public_repos}
                            </p>
                            <p>
                                <b>Seguidores:</b> {user.followers}
                            </p>
                            <p>
                                <b>Siguiendo:</b> {user.following}
                            </p>
                        </div>
                    </div>
                    <div className="userData text-r">
                        <p className="text">
                            <a href={user.html_url} className="link" target="_blank" rel="noopener noreferrer">
                                Ir a perfil
                            </a>
                        </p>
                    </div>
                </div>
                ))
            ) : (
                <p className="nonExist"> No existen usuarios que coincidan con su búsqueda.</p>
            )}
        </>
    ); 
}
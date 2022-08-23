export const Posts = () => {
    return <ul>
        <button onClick={async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(data.json());
        }}>Traer Datos</button>
    </ul>
}
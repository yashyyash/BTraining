$(async ()=>{
    const table = $('#postsTables');
    const posts = await(await fetch('https://jsonplaceholder.typicode.com/posts')).json();
    for (const post of posts) {
        let row=
            `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                    <td>${post.userId}</td>
                <tr>
            `;
            table.append(row);
    }
})
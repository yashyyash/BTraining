$(async () => {
    const table = $('#postsTables');
    try {
        const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();

        for (const user of users) {
            let row = `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td><a href="mailto:${user.email}">${user.email}</a></td>
                            <td><a href="https://${user.website}">${user.website}</a></td>
                            <td>${user.company.name}</td>
                            <td>${user.phone}</td>
                        </tr>
                    `;
            table.append(row);
        }
    } catch (err) {
        console.error("Error fetching users:", err);
        table.append(`<tr><td colspan="6" class="text-danger text-center">Failed to load data</td></tr>`);
    }
});
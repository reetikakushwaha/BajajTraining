$(async () => {
    const table = $('#postsTable');
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    for (const user of users) {
        let row =
            `
                <tr>
                    <td>${user.name}</td>
                    <td><a href="mailto:${user.email}">${user.email}</a></td>
                    <td>${user.address.city}</td>
                    <td>${user.phone}</td>
                    <td><a href="https://${user.website}">${user.website}</a></td>
                    <td>${user.company.name}</td>
                <tr>
            `;
        table.append(row);
    }
});
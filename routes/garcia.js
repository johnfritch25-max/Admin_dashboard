{{head}}
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>description</th>
            <th>stock</th>
            <th>price</th>
        </tr>
    </thead>
    <tbody>
        {{#each products}}
        <tr>
            <td>{{this.id}}</td>
            <td>{{this.name}}</td>
            <td>{{this.description}}</td>
            <td>{{this.stock}}</td>
            <td>{{this.price}}</td>
        </tr>
        {{else}}
        <tr>
            <td colspan="5">No products found.</td>
        </tr>
        {{/each}}
    </tbody>
</table>
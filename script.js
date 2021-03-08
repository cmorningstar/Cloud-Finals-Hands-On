const searchClient = algoliasearch('DRZYQ4MTCH', '28d3d74275c3ef7a1ef799432c89277d');

const search = instantsearch({
indexName: 'Email-Index',
searchClient,
});

search.addWidgets([
instantsearch.widgets.searchBox({
container: '#searchbox',
}),

instantsearch.widgets.configure({
hitsPerPage: 16
}),

instantsearch.widgets.hits({
container: '#hits',
templates: {
item: `
<div>
<div class="hit-name">
{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
</div>
</div>
`,
},
}),

instantsearch.widgets.pagination({
container: '#pagination',
}),
]);

search.start();
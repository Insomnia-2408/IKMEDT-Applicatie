window.onload = makeUL;

function makeUL(itemgroup) {
    // Create the list element:
    var items_list;
    var categories_list;

    if(typeof itemgroup !== 'string') {
      itemgroup = 'cpus'
    }

    console.log("LOAD: " + itemgroup);

    items_list = products[itemgroup]['items'];
    categories_list = products[itemgroup]['categories'];

    var items_html = document.createElement('ul');
    items_html.classList.add("components");

    for (var i = 0; i < items_list.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(items_list[i].name));

        // Add it to the list:
        items_html.appendChild(item);
    }

    var categories_html = document.createElement('ul');

    var all_category = document.createElement('li');
    var all_category_link = document.createElement('a');

    all_category_link.appendChild(document.createTextNode("All"));
    all_category.appendChild(all_category_link);
    categories_html.appendChild(all_category);

    for (var i = 0; i < categories_list.length; i++) {
        // Create the list item:
        var category = document.createElement('li');
        var category_link = document.createElement('a');
        category_link.appendChild(document.createTextNode(categories_list[i]));

        // Set its contents:
        category.appendChild(
          category_link
        );

        // Add it to the list:
        categories_html.appendChild(category);
    }

    // Finally, return the constructed list:
    // var html_items = document.getElementsByClassName('ul');

    document.getElementById('components').appendChild(items_html);
    document.getElementById('categories').appendChild(categories_html);
}

function changeItems(name) {
  document.getElementById('components').innerHTML = '';
  document.getElementById('categories').innerHTML = '';

  makeUL(name);
}

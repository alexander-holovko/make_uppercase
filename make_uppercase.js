const make_uppercase = (words_array) => {

    let input,search,pr,result,result_arr, locale_HTML;

    locale_HTML = document.body.innerHTML;

    words_array.forEach(function (item) {

        let nodes = findNodes(item);
        FindOnPage(item, nodes);

    });

    function FindOnPage(search_val, nodes) {

        nodes.forEach(function (node) {
            input = search_val;

            search = '/'+input+'/g';
            pr = node.innerHTML;

            console.log(pr);

            result_arr = [];

            pr = pr.replace(eval(search), '<span style="text-transform:uppercase">'+input+'</span>');

            node.innerHTML = pr;
        })
    }

    function findNodes(search_val) {
        let word = search_val,
            queue = [document.body],
            curr,
            found_nodes = []
        ;
        while (curr = queue.pop()) {
            if (!curr.textContent.match(word)) continue;
            for (let i = 0; i < curr.childNodes.length; ++i) {
                switch (curr.childNodes[i].nodeType) {
                    case Node.TEXT_NODE : // 3
                        if (curr.childNodes[i].textContent.match(word)) {
                            console.log("Found!");
                            found_nodes.push(curr)
                        }
                        break;
                    case Node.ELEMENT_NODE : // 1
                        queue.push(curr.childNodes[i]);
                        break;
                }
            }
        }

        return found_nodes;
    }

};


export default make_uppercase;

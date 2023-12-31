//on établis les listes de chaque type de mots clefs

export function getList(select, tab) {
    let list = [];
    switch (select) {
        case "ingredients":
            for (let i = 0; i < tab.length; i++) {
                let matches = 0;
                let ingredients = tab[i].ingredients;
                for (let y = 0; y < ingredients.length; y++) {
                    let name = ingredients[y].ingredient.toLowerCase().split(" (")[0];
                    for (let j = 0; j < list.length; j++) {
                        if (name == list[j]) {
                            matches++;
                        }
                    }
                    if (!(matches > 0)) {
                        list.push(name);
                    }
                }
            }
            return list;

        case "appliances":
            for (let i = 0; i < tab.length; i++) {
                let matches = 0;
                let name = tab[i].appliance.toLowerCase().split(" (")[0];
                for (let j = 0; j < list.length; j++) {
                    if (name == list[j]) {
                        matches++;
                    }
                }
                if (!(matches > 0)) {
                    list.push(name);
                }
            }
            return list;

        case "ustensils":
            for (let i = 0; i < tab.length; i++) {
                let matches = 0;
                let ustensils = tab[i].ustensils
                for (let y = 0; y < ustensils.length; y++) {
                    let name = ustensils[y].toLowerCase().split(" (")[0];
                    for (let j = 0; j < list.length; j++) {
                        if (name == list[j]) {
                            matches++;
                        }
                    }
                    if (!(matches > 0)) {
                        list.push(name);
                    }
                }
            }
            return list;
    };
}

//affichage d'une liste de filtre

export function printList(data) {
    const list = document.createElement("div");
    list.setAttribute("class", "filters_list");
    for (let i = 0; i < data.length; i++) {
        const filter = document.createElement("span");
        filter.setAttribute("class", "filter");
        filter.setAttribute("value", data[i].charAt(0).toUpperCase() + data[i].slice(1));
        filter.innerText = data[i].charAt(0).toUpperCase() + data[i].slice(1);
        list.appendChild(filter);
    };
    return list;
};



//application d'un filtre à une liste

export function applyFilter(string, tab) {
    let result = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].toLowerCase().includes(string)) {
            result.push(tab[i]);
        }
    }
    return result;
};

//mise a jour des filtres disponibles en fonction d'une nouvelle liste de plats

export function updateFilters(data) {
    document.getElementById("ingredients_filters").innerHTML = "";
    document.getElementById("ingredients_filters").appendChild(printList(getList("ingredients", data)));
    document.getElementById("appliances_filters").innerHTML = "";
    document.getElementById("appliances_filters").appendChild(printList(getList("appliances", data)));
    document.getElementById("ustensils_filters").innerHTML = "";
    document.getElementById("ustensils_filters").appendChild(printList(getList("ustensils", data)));
};

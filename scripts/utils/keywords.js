export function applyKeywords(data, keywords) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let matches = 0;
        for (let j = 0; j < keywords.length; j++) {
            if (testKeyword(data[i], keywords[j])) {
                matches++;
            }
        }
        if (matches == (keywords.length)) {
            result.push(data[i]);
        }
    }
    return result;
}

function testKeyword(item, keyword) {
    let string = keyword.toLowerCase();
    let ingredients_list = [];
    for (let i = 0; i < item.ingredients.length; i++) {
        ingredients_list.push(item.ingredients[i].ingredient.toLowerCase());
    }
    let ustensils_list = []
    for (let j = 0; j < item.ustensils.length; j++) {
        ustensils_list.push(item.ustensils[j].toLowerCase());

    }
    let name = item.name.toLowerCase().split(" ");
    let description = item.description.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
    let matches = 0;
    for (let a = 0; a < name.length; a++) {
        if (testString(name[a], string)) {
            matches++;
        }
    };
    for (let b = 0; b < description.length; b++) {
        if (testString(description[b])) {
            matches++;
        }
    };
    for (let c = 0; c < ingredients_list.length; c++) {
        if (ingredients_list[c].includes(string)) {
            matches++;
        }
    };
    for (let d = 0; d < ustensils_list.length; d++) {
        if (ustensils_list[d].includes(string)) {
            matches++;
        }
    };
    if (item.appliance.includes(string)) {
        matches++
    }

    if (matches > 0) {
        return true;
    } else {
        return false;
    };
}

function testString(text, string) {
    let matches = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == string) {
            matches++;
        }
    }
    if (matches > 0) {
        return true;
    } else {
        return false;
    }
}

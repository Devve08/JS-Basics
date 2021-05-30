
const stringSize = (text) => {
    let myString = text.length;
    return myString;

}
const replaceCharacterE = (text) => {
    let myString = text.replace(/e/, " ");
    return myString;
}
const concatString = (text1, text2) => {
    let myString = text1 + text2;
    return myString;

}
const showChar5 = (text) => {
    let character = text.charAt(4);
    return character;

}
const showChar9 = (text) => {
    let character = text.substring(0, 9);
    return character;

}
const toCapitals = (text) => {
    let capitals = text.toUpperCase();
    return capitals;
}
const toLowerCase = (text) => {
    let lower = text.toLowerCase();
    return lower;
}
const removeSpaces = (text) => {
    let trim = text.trim();
    return trim;
}
const IsString = (text) => {
    if (typeof text == "string"){
        return true;
    } else {
        return false;
    }
}

const getExtension = (text) => {
    let extension = text.substring(text.lastIndexOf('.')+1, text.length);
    return extension
}
const countSpaces = (text) => {
    let space = text.split(" ").length-1;
    return space;

}
const InverseString = (text) => {
    let split = text.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    return join;

}

const power = (x, y) => {
    let result = Math.pow(x, y);
    return result;
}
const absoluteValue = (num) => {
    let result = Math.abs(num);
    return result;

}
const absoluteValueArray = (array) => {
    let result = array.map(Math.abs);
    return result;

}
const circleSurface = (radius) => {
    let firstResult = Math.pow(radius, 2) * Math.PI ;
    let result = Math.round(firstResult);
    return result;


}
const hypothenuse = (ab, ac) => {
    let result = Math.hypot(ab, ac);
    return result;
}
const BMI = (weight, height) => {
    let resultOne = weight/height**2;
    let result = Math.round(resultOne * 100)/ 100;
    return result;
}

const createLanguagesArray = () => {
   
  let newArray = ['Html', 'CSS', 'Java', 'PHP'];
  return newArray;
}

const createNumbersArray = () => {
  let numArray = [0, 1, 2, 3, 4, 5];
  return numArray;
}

const replaceElement = (languages) => {
    let index = languages.indexOf("Java");

if (index !== -1) {
    languages[index] = "Javascript";
}
return languages
}

const addElement = (languages) => {
    let add = [...languages, "Ruby", "Python"];
    return add;

}

const addNumberElement = (numbers) => {
    let add = [-2, -1, ...numbers];
    return add;

}

const removeFirst = (languages) => {
    let remove = languages.shift();
    return languages;

}

const removeLast = (languages) => {
    let remove = languages.pop();
    return languages;

}

const convertStrToArr = (social_arr) => {
    let convert = social_arr.split(",");
    return convert;

}

const convertArrToStr = (languages) => {
    let convert = languages.join(",")
    return convert;

}

const sortArr = (social_arr) => {
    let sort = social_arr.sort();
    return sort;
}

const invertArr = (social_arr) => {
    let reverse = social_arr.reverse();
    return reverse;

}
const cats = ["Milo","Otis", "Garfield"];
function destructivelyAppendCat(name)
{
    cats.push(name);
}
function destructivelyPrependCat(name)
{
    cats.unshift(name);
}
function destructivelyRemoveLastCat()
{
    cats.pop();
}
function destructivelyRemoveFirstCat()
{
    cats.shift();
}
function appendCat(name)
{
    const coolCats = [...cats,name];
    return coolCats;
}
function prependCat(name)
{
    const coolCats = [name,...cats];
    return coolCats;
}
function removeLastCat()
{
    const coolCats = cats.slice(0,-1);
    return coolCats;
}
function removeFirstCat()
{
    const coolCats = cats.slice(1);
    return coolCats;
}
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const sorted1 = str1.toLowerCase().split('').sort().join('')
    const sorted2 = str2.toLowerCase().split('').sort().join('');
    console.log(sorted1)
    console.log(sorted2)

    return sorted1 === sorted2;
}

console.log(areAnagrams('apple','pplea'))
console.log(areAnagrams('orange','apple'))

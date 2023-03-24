
const isAnagram = (s1, s2) => {
    if (s1.length === 0 || s2.length === 0 || s1.length !== s2.length)
      return false;
    s1 = JSON.stringify(s1.toLowerCase().split("").sort());
    s2 = JSON.stringify(s2.toLowerCase().split("").sort());
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) return false;
    }
    return true;
  };
  
  console.log(isAnagram("eat", "ate"));
  console.log(isAnagram("spider", "diper"));
  console.log(isAnagram("listen", "silent"));
  console.log(isAnagram("ten", "Ben"));
  console.log(isAnagram("Listen", "Silent"));
  console.log(isAnagram("", ""));

  